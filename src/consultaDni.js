/** Cliente para /api/consulta-dni */

export function normalizarDni(valor) {
  return String(valor ?? "").replace(/\D/g, "").slice(0, 8);
}

export function dniEsValido(dni) {
  return normalizarDni(dni).length === 8;
}

/**
 * @returns {Promise<{
 *   dni: string;
 *   nombres: string;
 *   apellidoPaterno: string;
 *   apellidoMaterno: string;
 *   nombreCompleto: string;
 *   direccion?: string;
 *   departamento?: string;
 *   provincia?: string;
 *   distrito?: string;
 * }>}
 */
export async function consultarDniPorApi(dni) {
  const numero = normalizarDni(dni);
  if (!dniEsValido(numero)) {
    throw new Error("Ingrese un DNI de 8 dígitos");
  }
  const res = await fetch(`/api/consulta-dni?numero=${encodeURIComponent(numero)}`);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "No se encontró información para este DNI");
  }
  return data;
}
