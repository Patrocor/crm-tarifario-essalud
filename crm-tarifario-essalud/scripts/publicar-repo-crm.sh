#!/usr/bin/env bash
# Publica el CRM en un repo GitHub NUEVO (vacío) y deja listo para Vercel.
# Uso:
#   ./scripts/publicar-repo-crm.sh https://github.com/Patrocor/crm-tarifario-essalud.git
set -euo pipefail
REMOTE="${1:?Pasa la URL del repo vacío, ej. https://github.com/Patrocor/crm-tarifario-essalud.git}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

git clone --branch crm-tarifario-essalud-root --single-branch \
  https://github.com/Patrocor/digitalasistent.git "$TMP/repo" 2>/dev/null || \
git clone --branch crm-tarifario-essalud-root --single-branch \
  https://github.com/Patrocor/Digital-asistent.git "$TMP/repo"

cd "$TMP/repo"
git remote remove origin
git remote add origin "$REMOTE"
git push -u origin crm-tarifario-essalud-root:main

echo ""
echo "Listo. En Vercel: https://vercel.com/new → Import $REMOTE"
echo "Framework: Vite. Root: ./  Build: npm run build  Output: dist"
