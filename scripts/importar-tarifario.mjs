/**
 * Convierte TARIFARIO.ods a JSON para el CRM de costos.
 * Uso: node scripts/importar-tarifario.mjs [ruta-al-.ods]
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = dirname(fileURLToPath(import.meta.url));
const rutaOds = process.argv[2] || join(RAIZ, "..", "data", "TARIFARIO.ods");
const salida = join(RAIZ, "..", "public", "data");

const py = spawnSync("python3", [join(RAIZ, "importar-tarifario.py"), rutaOds, salida], {
  encoding: "utf8",
  stdio: "inherit",
});

process.exit(py.status ?? 1);
