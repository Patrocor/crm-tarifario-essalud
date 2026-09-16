import { normalizarBusqueda } from "./crmCostos.js";

const STORAGE_KEY = "crm-tarifario-pacientes-v1";
const MAX_REGISTROS = 80;

/**
 * @typedef {{ dni: string; paciente: string; facturarA: string; actualizadoEn: number }} PacienteReciente
 */

export function listarPacientesRecientes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistir(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista.slice(0, MAX_REGISTROS)));
}

/** @param {{ dni?: string; paciente?: string; facturarA?: string }} datos */
export function guardarPacienteReciente(datos) {
  const dni = String(datos.dni ?? "").replace(/\D/g, "").slice(0, 8);
  const paciente = String(datos.paciente ?? "").trim();
  const facturarA = String(datos.facturarA ?? "").trim();
  if (!paciente && !dni) return;

  const entrada = {
    dni,
    paciente,
    facturarA: facturarA || paciente,
    actualizadoEn: Date.now(),
  };

  const prev = listarPacientesRecientes().filter(
    (p) => !(dni && p.dni === dni) && p.paciente !== paciente,
  );
  persistir([entrada, ...prev]);
}

export function buscarPacientesRecientes(consulta, limite = 12) {
  const q = normalizarBusqueda(consulta);
  const lista = listarPacientesRecientes();
  if (!q) return lista.slice(0, limite);
  return lista
    .filter((p) => {
      const blob = [p.paciente, p.facturarA, p.dni].join(" ");
      return normalizarBusqueda(blob).includes(q) || String(p.dni).includes(q);
    })
    .slice(0, limite);
}
