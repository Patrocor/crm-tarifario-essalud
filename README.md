# CRM Tarifario Essalud

Aplicación **independiente** para armar pre-liquidaciones de atenciones a terceros no asegurados, usando el tarifario Essalud **Nivel I**.

No está vinculada a [digitalasistent](https://digitalasistent.com).

## Uso

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173/` (la app es solo el CRM; no hay ruta `/crm-costos`).

## Tarifario

- Fuente: `data/TARIFARIO.ods`
- JSON servido: `public/data/tarifario-*.json`
- Regenerar: `npm run importar-tarifario` (Python + `pandas` + `odfpy`)

## Despliegue en Vercel

1. Crear repo en GitHub (vacío) `crm-tarifario-essalud`.
2. Push de este proyecto a `main`.
3. En [vercel.com/new](https://vercel.com/new) → Importar el repo → **nuevo proyecto** (dominio `.vercel.app` propio).

## Scripts

- `npm run check` — pruebas, lint y build
