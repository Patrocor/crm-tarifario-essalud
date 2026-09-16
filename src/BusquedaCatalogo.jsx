import { useEffect, useId, useRef, useState } from "react";
import { formatearSoles } from "./crmCostos";

export default function BusquedaCatalogo({
  tab,
  busqueda,
  onBusquedaChange,
  resultados,
  onAgregar,
  catalogoListo,
}) {
  const [indice, setIndice] = useState(-1);
  const [abierto, setAbierto] = useState(false);
  const wrapRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current?.contains(e.target)) setAbierto(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const placeholder =
    tab === "farmacia"
      ? "Buscar medicamento o código…"
      : "Buscar procedimiento, consulta o código…";

  const agregarYLimpiar = (item) => {
    onAgregar(item);
    onBusquedaChange("");
    setAbierto(false);
    setIndice(-1);
  };

  const mostrarDropdown = abierto && busqueda.trim().length > 0 && catalogoListo;

  return (
    <div ref={wrapRef} style={{ position: "relative", marginBottom: 10 }}>
      <input
        value={busqueda}
        placeholder={placeholder}
        aria-autocomplete="list"
        aria-expanded={mostrarDropdown && resultados.length > 0}
        aria-controls={mostrarDropdown ? listId : undefined}
        onChange={(e) => {
          onBusquedaChange(e.target.value);
          setIndice(-1);
          setAbierto(true);
        }}
        onFocus={() => setAbierto(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && resultados.length) {
            e.preventDefault();
            setAbierto(true);
            setIndice((i) => Math.min(i + 1, resultados.length - 1));
          } else if (e.key === "ArrowUp" && resultados.length) {
            e.preventDefault();
            setIndice((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter") {
            e.preventDefault();
            if (indice >= 0 && resultados[indice]) {
              agregarYLimpiar(resultados[indice]);
            } else if (resultados[0]) {
              agregarYLimpiar(resultados[0]);
            }
          } else if (e.key === "Escape") {
            setAbierto(false);
          }
        }}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 10,
          border: "1px solid #A8C3DE",
        }}
      />
      <p style={{ margin: "6px 0 0", fontSize: 11, color: "#5B6B7D" }}>
        Escriba para autocompletar · Enter agrega la primera coincidencia
      </p>

      {mostrarDropdown && resultados.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 25,
            left: 0,
            right: 0,
            top: "calc(100% - 4px)",
            margin: 0,
            padding: 0,
            listStyle: "none",
            background: "#fff",
            border: "1px solid #4434D4",
            borderRadius: 10,
            boxShadow: "0 10px 28px rgba(68,52,212,0.18)",
            maxHeight: 280,
            overflow: "auto",
          }}
        >
          {resultados.map((item, i) => (
            <li key={`${item.tipo}-${item.codigo}`} role="option" aria-selected={i === indice}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => agregarYLimpiar(item)}
                style={{
                  width: "100%",
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  textAlign: "left",
                  border: "none",
                  background: i === indice ? "#EDEBFE" : "#fff",
                  padding: "10px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #E3E8EE",
                }}
              >
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>
                    {item.descripcion}
                  </span>
                  <span style={{ display: "block", fontSize: 12, color: "#5B6B7D", marginTop: 2 }}>
                    Cód. {item.codigo}
                    {item.medida ? ` · ${item.medida}` : ""}
                  </span>
                </span>
                <span style={{ fontWeight: 800, fontSize: 13, flexShrink: 0 }}>
                  {formatearSoles(item.precioTotal)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
