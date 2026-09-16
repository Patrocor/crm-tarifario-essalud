/**
 * Proxy consulta DNI (Perú) — token en APIS_NET_PE_TOKEN (Vercel env).
 * Documentación: https://apis.net.pe/consulta-dni-ruc
 */
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const numero = String(req.query?.numero ?? "")
    .replace(/\D/g, "")
    .slice(0, 8);
  if (numero.length !== 8) {
    return res.status(400).json({ error: "El DNI debe tener 8 dígitos" });
  }

  const token = process.env.APIS_NET_PE_TOKEN;
  if (!token) {
    return res.status(503).json({
      error: "Consulta DNI no configurada. Defina APIS_NET_PE_TOKEN en Vercel.",
    });
  }

  try {
    const upstream = await fetch(
      `https://api.apis.net.pe/v2/consulta-dni?numero=${numero}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      },
    );

    const body = await upstream.json().catch(() => null);
    if (!upstream.ok) {
      const msg =
        (body && (body.message || body.error)) ||
        `Consulta fallida (HTTP ${upstream.status})`;
      return res.status(upstream.status === 404 ? 404 : 502).json({ error: msg });
    }

    const nombres = body.nombres ?? body.nombre ?? "";
    const apellidoPaterno = body.apellidoPaterno ?? body.apellido_paterno ?? "";
    const apellidoMaterno = body.apellidoMaterno ?? body.apellido_materno ?? "";

    return res.status(200).json({
      dni: numero,
      nombres: String(nombres).trim(),
      apellidoPaterno: String(apellidoPaterno).trim(),
      apellidoMaterno: String(apellidoMaterno).trim(),
      nombreCompleto: [nombres, apellidoPaterno, apellidoMaterno]
        .map((s) => String(s || "").trim())
        .filter(Boolean)
        .join(" "),
      direccion: body.direccion ?? body.dirección ?? "",
      ubigeo: body.ubigeo ?? "",
      departamento: body.departamento ?? "",
      provincia: body.provincia ?? "",
      distrito: body.distrito ?? "",
    });
  } catch {
    return res.status(502).json({ error: "No se pudo contactar el servicio de DNI" });
  }
}
