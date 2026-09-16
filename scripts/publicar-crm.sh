#!/usr/bin/env bash
# Crea repo Patrocor/crm-tarifario-essalud, push y deploy Vercel (proyecto nuevo).
# Requiere: GH_PAT, VERCEL_TOKEN en el environment del Cloud Agent.
set -euo pipefail

REPO_OWNER="${REPO_OWNER:-Patrocor}"
REPO_NAME="${REPO_NAME:-crm-tarifario-essalud}"
API="https://api.github.com"

if [[ -z "${GH_PAT:-}" ]]; then
  echo "ERROR: GH_PAT no está definido en este pod."
  echo "Guarda el secret en el Environment de Cursor y lanza un Cloud Agent NUEVO (no este hilo antiguo)."
  exit 1
fi

echo "→ Comprobando / creando repo ${REPO_OWNER}/${REPO_NAME}…"
code=$(curl -s -o /tmp/repo.json -w "%{http_code}" \
  -H "Authorization: Bearer ${GH_PAT}" \
  -H "Accept: application/vnd.github+json" \
  "${API}/repos/${REPO_OWNER}/${REPO_NAME}")

if [[ "$code" == "404" ]]; then
  create_code=$(curl -s -o /tmp/create.json -w "%{http_code}" \
    -X POST \
    -H "Authorization: Bearer ${GH_PAT}" \
    -H "Accept: application/vnd.github+json" \
    "${API}/orgs/${REPO_OWNER}/repos" \
    -d "{\"name\":\"${REPO_NAME}\",\"description\":\"CRM liquidación costos tarifario Essalud Nivel I\",\"private\":false,\"auto_init\":false}")
  if [[ "$create_code" != "201" ]]; then
    echo "ERROR al crear repo (HTTP ${create_code}):"
    cat /tmp/create.json
    exit 1
  fi
  echo "   Repo creado."
elif [[ "$code" == "200" ]]; then
  echo "   Repo ya existe."
else
  echo "ERROR consultando repo (HTTP ${code}):"
  cat /tmp/repo.json
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -f package.json ]] || [[ "$(node -p "require('./package.json').name" 2>/dev/null || echo '')" != "crm-tarifario-essalud" ]]; then
  echo "ERROR: ejecuta desde la raíz del proyecto CRM (package.json name crm-tarifario-essalud)."
  exit 1
fi

REMOTE_URL="https://x-access-token:${GH_PAT}@github.com/${REPO_OWNER}/${REPO_NAME}.git"
if git remote get-url publish 2>/dev/null; then
  git remote set-url publish "$REMOTE_URL"
else
  git remote add publish "$REMOTE_URL"
fi

echo "→ Push a main…"
git push -u publish HEAD:main --force

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo ""
  echo "Repo listo: https://github.com/${REPO_OWNER}/${REPO_NAME}"
  echo "VERCEL_TOKEN ausente: importa el repo en https://vercel.com/new"
  exit 0
fi

echo "→ Deploy Vercel (proyecto nuevo)…"
export VERCEL_TOKEN
npm ci
npm run build
npx vercel deploy --yes --prod --name "${REPO_NAME}" --token "$VERCEL_TOKEN" 2>&1 | tee /tmp/vercel-deploy.log

echo ""
echo "Repo: https://github.com/${REPO_OWNER}/${REPO_NAME}"
grep -Eo 'https://[a-zA-Z0-9.-]+\.vercel\.app' /tmp/vercel-deploy.log | tail -1 || true
