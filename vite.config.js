import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { consultarDniUpstream } from "./lib/consultaDniUpstream.js";

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

  const result = await consultarDniUpstream(numero, token);
  res.setHeader("Content-Type", "application/json");
  if (!result.ok) {
    res.statusCode = result.status === 404 ? 404 : 502;
    res.end(JSON.stringify({ error: result.error }));
    return;
  }
  res.statusCode = 200;
  res.end(JSON.stringify(result.data));
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
