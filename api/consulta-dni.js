import { consultarDniUpstream } from "../lib/consultaDniUpstream.js";

/**
 * Proxy consulta DNI (Perú) — token en APIS_NET_PE_TOKEN (Vercel env).
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

  const result = await consultarDniUpstream(numero, token);
  if (!result.ok) {
    const status = result.status === 404 ? 404 : 502;
    return res.status(status).json({ error: result.error });
  }

  return res.status(200).json(result.data);
}
