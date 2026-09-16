# Publicar en repo y Vercel nuevos (separado de digitalasistent)

El código del CRM está en la rama **`crm-tarifario-essalud-root`** de este repo (solo contiene la app CRM en la raíz, sin mezclar con digitalasistent.com).

## 1. Crear repositorio nuevo en GitHub

1. [Nuevo repositorio](https://github.com/new) → nombre **`crm-tarifario-essalud`** → **vacío** (sin README).
2. En tu máquina:

```bash
git clone -b crm-tarifario-essalud-root https://github.com/Patrocor/digitalasistent.git crm-tarifario-essalud
cd crm-tarifario-essalud
git remote set-url origin https://github.com/Patrocor/crm-tarifario-essalud.git
git push -u origin HEAD:main
```

## 2. Proyecto nuevo en Vercel (URL distinta)

1. [vercel.com/new](https://vercel.com/new) → **Import** `Patrocor/crm-tarifario-essalud`.
2. Framework: **Vite** · Build: `npm run build` · Output: `dist` · Root: `./`
3. **No** enlazar este proyecto al dominio `digitalasistent.com`.

Obtendrás una URL tipo `https://crm-tarifario-essalud.vercel.app` (o similar según el nombre del proyecto).

## 3. Alternativa rápida (misma org GitHub, otro deploy)

Si aún no creaste el repo nuevo, en Vercel puedes **Add New Project** → repo `digitalasistent` → rama **`crm-tarifario-essalud-root`**. Es un **segundo proyecto** en Vercel con otro `.vercel.app`, sin tocar producción de digitalasistent.

## Cerrar el camino antiguo

No fusionar el PR #8 del CRM dentro de digitalasistent; el producto vive en el repo/rama standalone.
