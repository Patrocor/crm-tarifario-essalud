/**
 * Consulta DNI en proveedores apis.net.pe / Decolecta (mismo token Bearer habitual).
 */

function normalizarRespuesta(body, numero) {
  const nombres = body.nombres ?? body.nombre ?? "";
  const apellidoPaterno = body.apellidoPaterno ?? body.apellido_paterno ?? "";
  const apellidoMaterno = body.apellidoMaterno ?? body.apellido_materno ?? "";

  let nombreCompleto = [nombres, apellidoPaterno, apellidoMaterno]
    .map((s) => String(s || "").trim())
    .filter(Boolean)
    .join(" ");

  if (!nombreCompleto && body.nombre) {
    nombreCompleto = String(body.nombre).trim();
  }

  return {
    dni: numero,
    nombres: String(nombres).trim(),
    apellidoPaterno: String(apellidoPaterno).trim(),
    apellidoMaterno: String(apellidoMaterno).trim(),
    nombreCompleto,
    direccion: body.direccion ?? body.dirección ?? "",
    ubigeo: body.ubigeo ?? "",
    departamento: body.departamento ?? "",
    provincia: body.provincia ?? "",
    distrito: body.distrito ?? "",
  };
}

/**
 * @returns {Promise<{ ok: true, data: object } | { ok: false, status: number, error: string }>}
 */
export async function consultarDniUpstream(numero, token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    Referer: "https://apis.net.pe/consulta-dni-api",
  };

  const urls = [
    `https://api.decolecta.com/v1/reniec/dni?numero=${numero}`,
    `https://api.apis.net.pe/v1/dni?numero=${numero}`,
  ];

  let lastError = "Consulta fallida";
  let lastStatus = 502;

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers });
      const body = await res.json().catch(() => null);

      if (res.ok && body && !body.error) {
        const data = normalizarRespuesta(body, numero);
        if (data.nombreCompleto) {
          return { ok: true, data };
        }
      }

      if (res.status === 404) {
        return { ok: false, status: 404, error: "DNI no encontrado en RENIEC" };
      }

      lastStatus = res.status;
      lastError =
        (body && (body.message || body.error)) ||
        `Consulta fallida (HTTP ${res.status})`;

      if (res.status === 401 || res.status === 403) {
        continue;
      }
    } catch {
      lastError = "No se pudo contactar el servicio de DNI";
      lastStatus = 502;
    }
  }

  return { ok: false, status: lastStatus === 404 ? 404 : 502, error: lastError };
}
