# CRM Tarifario Essalud

Aplicación **independiente** para armar pre-liquidaciones de atenciones a terceros no asegurados, usando el tarifario Essalud **Nivel I**.

No está vinculada a [digitalasistent](https://digitalasistent.com).

## Uso

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173/` (la app es solo el CRM; no hay ruta `/crm-costos`).

### Consulta DNI (autocompletar paciente)

1. Copia `.env.example` a `.env.local` y define `APIS_NET_PE_TOKEN` ([apis.net.pe](https://apis.net.pe)).
2. En Vercel, agrega la misma variable en **Settings → Environment Variables**.
3. Al ingresar 8 dígitos en **DNI**, se consulta `/api/consulta-dni` y se rellenan **Paciente** y **Facturar a**.

Los pacientes usados se guardan en el navegador para autocompletar en atenciones siguientes.

## Tarifario

- Fuente: `data/TARIFARIO.ods`
- JSON servido: `public/data/tarifario-*.json`
- Regenerar: `npm run importar-tarifario` (Python + `pandas` + `odfpy`)

## Despliegue en Vercel (proyecto nuevo, no digitalasistent.com)

1. Publica este código en un repo GitHub **nuevo** (`crm-tarifario-essalud`). Desde la rama `crm-tarifario-essalud-root` del repo digitalasistent:

```bash
git clone -b crm-tarifario-essalud-root https://github.com/Patrocor/digitalasistent.git crm-tarifario-essalud
cd crm-tarifario-essalud
git remote set-url origin https://github.com/Patrocor/crm-tarifario-essalud.git
git push -u origin HEAD:main
```

2. [vercel.com/new](https://vercel.com/new) → importa **solo** ese repo → crea un **proyecto nuevo** (otra URL `.vercel.app`).

## Scripts

- `npm run check` — pruebas, lint y build
