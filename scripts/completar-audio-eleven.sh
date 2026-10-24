#!/usr/bin/env bash
# Completa, num só comando, as falas que ainda estão só na voz Edge (o app e o site seguem tocando Edge nelas até lá).
#   ELEVENLABS_API_KEY=... scripts/completar-audio-eleven.sh              # de, fr, en (sessões pagas, por ordem de aula)
#   ELEVENLABS_API_KEY=... scripts/completar-audio-eleven.sh --simular    # só conta caracteres, sem gastar
#   IDIOMAS="de" TETO=6000 ELEVENLABS_API_KEY=... scripts/completar-audio-eleven.sh
# Retomável e sem sobrescrever; para sozinho se faltar crédito. Depois: commitar server/audio-privado-v2/ e abrir a PR.
set -uo pipefail
cd "$(dirname "$0")/.."
for i in ${IDIOMAS:-de fr en}; do
  echo "=== $i"
  node scripts/gerar-audios-eleven.mjs --idioma="$i" --so=privado --ordem=aula --teto="${TETO:-20000}" "$@" || echo "parou em $i (crédito ou erro); rode de novo depois de recarregar."
done
