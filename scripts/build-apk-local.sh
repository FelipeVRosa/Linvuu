#!/usr/bin/env bash
# Build local e rastreável do APK. Substitui o CI enquanto o GitHub Actions estiver parado.
#   scripts/build-apk-local.sh            APK "minificado" (R8, chave de teste, sufixo .teste) para instalar e testar
#   scripts/build-apk-local.sh --loja     AAB de release assinado com a chave de upload (ainda bloqueado no Gradle; ver abaixo)
# Exige árvore Git limpa e ANDROID_VERSION_CODE inteiro e maior que o do último manifesto. Grava dist-builds/<arquivo>.manifest.json
# com SHA-256, commit, versionCode, versionName e a contagem de DEX/métodos. Nunca imprime senhas; a chave vem de variáveis de ambiente.
set -euo pipefail
cd "$(dirname "$0")/.."
modo="teste"; [ "${1:-}" = "--loja" ] && modo="loja"

[ -z "$(git status --porcelain)" ] || { echo "Árvore Git suja: faça commit ou stash antes de gerar um build rastreável." >&2; exit 1; }
: "${ANDROID_VERSION_CODE:?Defina ANDROID_VERSION_CODE (inteiro, sempre maior que o anterior)}"
[[ "$ANDROID_VERSION_CODE" =~ ^[0-9]+$ ]] || { echo "ANDROID_VERSION_CODE deve ser inteiro." >&2; exit 1; }
export ANDROID_VERSION_NAME="${ANDROID_VERSION_NAME:-1.0.0}"
ultimo=$(ls dist-builds/*.manifest.json 2>/dev/null | xargs -r -n1 node -e 'console.log(require(require("path").resolve(process.argv[1])).versionCode)' | sort -n | tail -1 || true)
if [ -n "${ultimo:-}" ] && [ "$ANDROID_VERSION_CODE" -le "$ultimo" ]; then echo "versionCode $ANDROID_VERSION_CODE não é maior que o último ($ultimo)." >&2; exit 1; fi

commit=$(git rev-parse HEAD); curto=$(git rev-parse --short HEAD)
export LINVUU_SOURCE_SHA="$commit" VITE_APK_BUILD_ID="$modo $curto"
npm ci --no-audit --no-fund
npm run app:android
if [ "$modo" = "loja" ]; then
  : "${LINVUU_UPLOAD_KEYSTORE:?Defina LINVUU_UPLOAD_KEYSTORE (caminho do .jks, fora do repositório)}"
  tarefa="bundleRelease"; saida="android/app/build/outputs/bundle/release/app-release.aab"
else
  tarefa="assembleMinificado"; saida="android/app/build/outputs/apk/minificado/app-minificado.apk"
fi
G=./gradlew; [ -x android/gradlew ] || G=gradle; [ -n "${GRADLE_BIN:-}" ] && G="$GRADLE_BIN"
(cd android && echo "sdk.dir=${ANDROID_HOME:?Defina ANDROID_HOME}" > local.properties && "$G" "$tarefa" --no-daemon)
[ -f "$saida" ] || { echo "Arquivo esperado não foi gerado: $saida" >&2; exit 1; }

mkdir -p dist-builds
nome="linvuu-${modo}-${ANDROID_VERSION_NAME}-${ANDROID_VERSION_CODE}-${curto}.${saida##*.}"
cp "$saida" "dist-builds/$nome"
sha=$(sha256sum "dist-builds/$nome" | cut -d' ' -f1)
dex=$(unzip -l "dist-builds/$nome" 2>/dev/null | grep -c 'classes[0-9]*\.dex' || true)
cat > "dist-builds/$nome.manifest.json" <<JSON
{"arquivo":"$nome","sha256":"$sha","commit":"$commit","versionCode":$ANDROID_VERSION_CODE,"versionName":"$ANDROID_VERSION_NAME","modo":"$modo","dex":$dex,"geradoEm":"$(date -u +%FT%TZ)"}
JSON
echo "OK  $nome  sha256=$sha  commit=$curto  versionCode=$ANDROID_VERSION_CODE  dex=$dex"
