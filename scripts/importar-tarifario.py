#!/usr/bin/env python3
"""Exporta hojas TARIFARIO_NIVEL_I y MEDICINA del ODS a JSON."""
import json
import re
import sys
from pathlib import Path

import pandas as pd


def redondear(n, dec=4):
    if n is None or (isinstance(n, float) and pd.isna(n)):
        return None
    return round(float(n), dec)


def parse_tarifario_nivel_i(df):
    items = []
    current_category = None
    current_subcategory = None
    for _, row in df.iterrows():
        cod = row.iloc[0]
        desc = row.iloc[1]
        subtotal = row.iloc[2] if len(row) > 2 else None
        igv = row.iloc[3] if len(row) > 3 else None
        total = row.iloc[4] if len(row) > 4 else None
        if pd.isna(cod) and pd.isna(desc):
            continue
        cod_str = str(cod).strip() if not pd.isna(cod) else ""
        desc_str = str(desc).strip() if not pd.isna(desc) else ""
        if re.match(r"^\d{2}$", cod_str) and desc_str:
            current_category = {"code": cod_str, "name": desc_str}
            current_subcategory = None
            continue
        if re.match(r"^\d{4}$", cod_str) and desc_str and pd.isna(subtotal):
            current_subcategory = {"code": cod_str, "name": desc_str}
            continue
        if re.match(r"^\d{7}$", cod_str) and desc_str:
            try:
                st = float(subtotal) if not pd.isna(subtotal) else None
                ig = float(igv) if not pd.isna(igv) else None
                tt = float(total) if not pd.isna(total) else None
            except (TypeError, ValueError):
                continue
            if tt is None and st is not None:
                tt = st + (ig or 0)
            items.append(
                {
                    "codigo": cod_str,
                    "descripcion": desc_str,
                    "categoria": current_category["name"] if current_category else "",
                    "categoriaCodigo": current_category["code"] if current_category else "",
                    "subcategoria": current_subcategory["name"] if current_subcategory else "",
                    "subcategoriaCodigo": current_subcategory["code"] if current_subcategory else "",
                    "subtotal": redondear(st),
                    "igv": redondear(ig),
                    "precioTotal": redondear(tt),
                    "tipo": "prestacion",
                }
            )
    return items


def parse_medicina(df):
    items = []
    for _, row in df.iterrows():
        cod = row.iloc[0]
        desc = row.iloc[1]
        medida = row.iloc[2] if len(row) > 2 else ""
        subtotal = row.iloc[3] if len(row) > 3 else None
        igv = row.iloc[4] if len(row) > 4 else None
        total = row.iloc[5] if len(row) > 5 else None
        if pd.isna(cod) or pd.isna(desc):
            continue
        cod_str = str(int(cod)) if isinstance(cod, float) else str(cod).strip()
        cod_str = cod_str.replace(".0", "")
        if not re.match(r"^\d{6,9}$", cod_str):
            continue
        desc_str = str(desc).strip()
        try:
            st = float(subtotal) if not pd.isna(subtotal) else None
            ig = float(igv) if not pd.isna(igv) else None
            tt = float(total) if not pd.isna(total) else None
        except (TypeError, ValueError):
            continue
        items.append(
            {
                "codigo": cod_str,
                "descripcion": desc_str,
                "medida": str(medida).strip() if not pd.isna(medida) else "",
                "subtotal": redondear(st),
                "igv": redondear(ig),
                "precioTotal": redondear(tt),
                "tipo": "farmacia",
            }
        )
    return items


def main():
    ruta_ods = Path(sys.argv[1] if len(sys.argv) > 1 else "data/TARIFARIO.ods")
    salida_dir = Path(sys.argv[2] if len(sys.argv) > 2 else "public/data")
    salida_dir.mkdir(parents=True, exist_ok=True)

    df_prest = pd.read_excel(ruta_ods, sheet_name="TARIFARIO_NIVEL_I", engine="odf", header=None)
    df_med = pd.read_excel(ruta_ods, sheet_name="MEDICINA", engine="odf", header=None)

    prestaciones = parse_tarifario_nivel_i(df_prest)
    farmacia = parse_medicina(df_med)

    meta = {
        "fuente": "Tarifario prestaciones de salud a terceros no asegurados — Nivel I",
        "resolucion": "Gerencia Central de Aseguramiento Nº 12-GCAS-ESSALUD-2010",
        "moneda": "PEN",
        "igvPorcentaje": 18,
        "generadoEn": pd.Timestamp.now(tz="UTC").isoformat(),
        "conteoPrestaciones": len(prestaciones),
        "conteoFarmacia": len(farmacia),
    }

    with open(salida_dir / "tarifario-meta.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    with open(salida_dir / "tarifario-prestaciones.json", "w", encoding="utf-8") as f:
        json.dump(prestaciones, f, ensure_ascii=False, separators=(",", ":"))
    with open(salida_dir / "tarifario-farmacia.json", "w", encoding="utf-8") as f:
        json.dump(farmacia, f, ensure_ascii=False, separators=(",", ":"))

    print(f"OK: {len(prestaciones)} prestaciones, {len(farmacia)} ítems farmacia → {salida_dir}")


if __name__ == "__main__":
    main()
