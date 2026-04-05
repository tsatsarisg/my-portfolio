#!/usr/bin/env bash
set -euo pipefail

# ANSI color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
BOLD='\033[1m'
RESET='\033[0m'

ok() {
  echo -e "${GREEN}${BOLD}  [ok]${RESET} $1"
}

fail() {
  echo -e "${RED}${BOLD}  [fail]${RESET} $1" >&2
}

echo ""
echo -e "${BOLD}Running pre-deploy checks...${RESET}"
echo ""

# --- Lint ---
echo "1/3  Linting..."
if pnpm lint; then
  ok "Lint passed."
else
  fail "Lint failed. Fix the errors above and try again."
  exit 1
fi
echo ""

# --- Type check ---
echo "2/3  Type checking..."
if pnpm exec tsc --noEmit; then
  ok "Type check passed."
else
  fail "Type check failed. Fix the errors above and try again."
  exit 1
fi
echo ""

# --- Build ---
echo "3/3  Building static export..."
if pnpm build; then
  ok "Build passed."
else
  fail "Build failed. Fix the errors above and try again."
  exit 1
fi
echo ""

echo -e "${GREEN}${BOLD}All checks passed! Push to main to trigger deployment.${RESET}"
echo ""
