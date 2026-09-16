import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

async function consultaDniDev(req, res, token) {
  const url = new URL(req.url, "http://localhost");
  const numero = String(url.searchParams.get("numero") ?? "")
    .replace(/\D/g, "")
    .slice(0, 8);

  if (numero.length !== 8) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "El DNI debe tener 8 dígitos" }));
    return;
  }
  if (!token) {
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Defina APIS_NET_PE_TOKEN en .env.local para consultar DNI en desarrollo",
      }),
    );
    return;
  }

  try {
    const upstream = await fetch(
      `https://api.apis.net.pe/v2/consulta-dni?numero=${numero}`,
      {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      },
    );
    const body = await upstream.json().catch(() => ({}));
    res.statusCode = upstream.ok ? 200 : upstream.status === 404 ? 404 : 502;
    res.setHeader("Content-Type", "application/json");
    if (!upstream.ok) {
      res.end(
        JSON.stringify({
          error: body.message || body.error || "Consulta fallida",
        }),
      );
      return;
    }
    const nombres = body.nombres ?? body.nombre ?? "";
    const apellidoPaterno = body.apellidoPaterno ?? "";
    const apellidoMaterno = body.apellidoMaterno ?? "";
    res.end(
      JSON.stringify({
        dni: numero,
        nombres: String(nombres).trim(),
        apellidoPaterno: String(apellidoPaterno).trim(),
        apellidoMaterno: String(apellidoMaterno).trim(),
        nombreCompleto: [nombres, apellidoPaterno, apellidoMaterno]
          .map((s) => String(s || "").trim())
          .filter(Boolean)
          .join(" "),
      }),
    );
  } catch {
    res.statusCode = 502;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "No se pudo contactar el servicio de DNI" }));
  }
}

function dniApiDevPlugin(env) {
  const token = env.APIS_NET_PE_TOKEN || env.VITE_APIS_NET_PE_TOKEN || "";
  return {
    name: "consulta-dni-dev",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api/consulta-dni")) return next();
        consultaDniDev(req, res, token);
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), dniApiDevPlugin(env)],
  };
});
