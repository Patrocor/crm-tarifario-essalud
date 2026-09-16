/** Utilidades puras para liquidación CRM según tarifario Essalud (Nivel I). */

export const MONEDA = "PEN";
export const SIMBOLO = "S/";

export function normalizarBusqueda(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();
}

export function formatearSoles(monto) {
  const n = Number(monto);
  if (!Number.isFinite(n)) return `${SIMBOLO} 0.00`;
  return `${SIMBOLO} ${n.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function redondearMonto(n, dec = 2) {
  if (!Number.isFinite(n)) return 0;
  const f = 10 ** dec;
  return Math.round(n * f) / f;
}

/**
 * @param {object} item — fila del tarifario
 * @param {number} cantidad
 */
export function lineaDesdeTarifario(item, cantidad = 1) {
  const cant = Math.max(1, Math.floor(Number(cantidad) || 1));
  const unitSub = Number(item.subtotal) || 0;
  const igvNum = Number(item.igv);
  const unitIgv = Number.isFinite(igvNum) ? igvNum : redondearMonto(unitSub * 0.18, 4);
  const unitTotal =
    Number(item.precioTotal) || redondearMonto(unitSub + unitIgv, 4);
  return {
    id: `${item.tipo}-${item.codigo}`,
    codigo: item.codigo,
    descripcion: item.descripcion,
    tipo: item.tipo,
    categoria: item.categoria || "",
    medida: item.medida || "",
    cantidad: cant,
    unitSubtotal: unitSub,
    unitIgv: unitIgv,
    unitTotal: unitTotal,
    subtotal: redondearMonto(unitSub * cant, 2),
    igv: redondearMonto(unitIgv * cant, 2),
    total: redondearMonto(unitTotal * cant, 2),
  };
}

export function agregarAlCarrito(carrito, item, cantidad = 1) {
  const linea = lineaDesdeTarifario(item, cantidad);
  const idx = carrito.findIndex((l) => l.id === linea.id);
  if (idx === -1) return [...carrito, linea];
  const copia = [...carrito];
  const prev = copia[idx];
  const nuevaCant = prev.cantidad + linea.cantidad;
  copia[idx] = lineaDesdeTarifario(
    {
      ...item,
      subtotal: prev.unitSubtotal,
      igv: prev.unitIgv,
      precioTotal: prev.unitTotal,
    },
    nuevaCant,
  );
  return copia;
}

export function actualizarCantidadCarrito(carrito, id, cantidad) {
  const cant = Math.floor(Number(cantidad));
  if (!Number.isFinite(cant) || cant < 1) {
    return carrito.filter((l) => l.id !== id);
  }
  return carrito.map((l) => {
    if (l.id !== id) return l;
    return {
      ...l,
      cantidad: cant,
      subtotal: redondearMonto(l.unitSubtotal * cant, 2),
      igv: redondearMonto(l.unitIgv * cant, 2),
      total: redondearMonto(l.unitTotal * cant, 2),
    };
  });
}

export function quitarDelCarrito(carrito, id) {
  return carrito.filter((l) => l.id !== id);
}

export function totalesCarrito(carrito) {
  const subtotal = redondearMonto(
    carrito.reduce((s, l) => s + l.subtotal, 0),
    2,
  );
  const igv = redondearMonto(carrito.reduce((s, l) => s + l.igv, 0), 2);
  const total = redondearMonto(carrito.reduce((s, l) => s + l.total, 0), 2);
  return { subtotal, igv, total, cantidadLineas: carrito.length };
}

export function buscarEnCatalogo(catalogo, consulta, limite = 40) {
  const q = normalizarBusqueda(consulta);
  if (!q) return catalogo.slice(0, limite);
  const out = [];
  for (const item of catalogo) {
    const hay =
      normalizarBusqueda(item.descripcion).includes(q) ||
      normalizarBusqueda(item.codigo).includes(q) ||
      (item.categoria && normalizarBusqueda(item.categoria).includes(q));
    if (hay) {
      out.push(item);
      if (out.length >= limite) break;
    }
  }
  return out;
}

export function agruparLineasPorSeccion(carrito) {
  const secciones = {
    medicina: { titulo: "Medicina / consultas", lineas: [] },
    procedimientos: { titulo: "Procedimientos y prestaciones", lineas: [] },
    farmacia: { titulo: "Farmacia", lineas: [] },
  };
  for (const l of carrito) {
    if (l.tipo === "farmacia") {
      secciones.farmacia.lineas.push(l);
    } else if (
      l.categoria &&
      /consulta|medicina|ambulatoria|emergencia/i.test(l.categoria + l.descripcion)
    ) {
      secciones.medicina.lineas.push(l);
    } else {
      secciones.procedimientos.lineas.push(l);
    }
  }
  return Object.values(secciones).filter((s) => s.lineas.length > 0);
}

export function generarReferenciaLiquidacion(fecha = new Date()) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  const t = String(fecha.getTime()).slice(-6);
  return `LQ-${y}${m}${d}-${t}`;
}

export function textoLiquidacion({
  paciente,
  facturarA,
  dni,
  pagare,
  referencia,
  carrito,
  totales,
  meta,
}) {
  const lineas = [];
  lineas.push("PRE-LIQUIDACIÓN DE PRESTACIONES ASISTENCIALES");
  if (meta?.resolucion) lineas.push(meta.resolucion);
  lineas.push("");
  if (referencia) lineas.push(`Nº liquidación: ${referencia}`);
  if (facturarA) lineas.push(`Facturar a: ${facturarA}`);
  if (dni) lineas.push(`DNI: ${dni}`);
  if (paciente) lineas.push(`Paciente: ${paciente}`);
  if (pagare) lineas.push(`Pagaré Nº: ${pagare}`);
  lineas.push("");
  lineas.push("DETALLE\tCANT\tP.U.\tSUBTOTAL");
  for (const sec of agruparLineasPorSeccion(carrito)) {
    lineas.push(`— ${sec.titulo} —`);
    for (const l of sec.lineas) {
      lineas.push(
        `${l.descripcion}\t${l.cantidad}\t${formatearSoles(l.unitTotal)}\t${formatearSoles(l.total)}`,
      );
    }
  }
  lineas.push("");
  lineas.push(`Subtotal: ${formatearSoles(totales.subtotal)}`);
  lineas.push(`IGV (18%): ${formatearSoles(totales.igv)}`);
  lineas.push(`TOTAL A PAGAR: ${formatearSoles(totales.total)}`);
  return lineas.join("\n");
}
