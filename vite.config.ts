import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';
import path from 'node:path';
import fs from 'node:fs';

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const alvo = env.VITE_ALVO || 'website';
  if (!['website', 'apk'].includes(alvo)) throw new Error('VITE_ALVO deve ser website ou apk');
  const apk = alvo === 'apk';
  if(apk && env.VITE_COMPRAS_ATIVAS==='true')throw new Error('Compras de produção bloqueadas nesta fase. Use somente Test Store.');
  if(apk && env.VITE_BILLING_MODE && env.VITE_BILLING_MODE!=='revenuecat-test-store')throw new Error('Modo de pagamento não autorizado para este APK de teste');
  if(apk && env.VITE_BILLING_MODE==='revenuecat-test-store' && !env.VITE_REVENUECAT_TEST_KEY?.startsWith('test_'))throw new Error('Test Store exige chave pública test_; nunca use chave de produção');
  return {
  define: { 'import.meta.env.VITE_ALVO': JSON.stringify(alvo) },
  resolve: { alias: { '@plataforma': path.resolve('src/plataforma', alvo) } },
  build: { outDir: apk ? 'dist-apk' : 'dist', copyPublicDir: !apk },
  plugins: [react(), ...(apk ? [{
    name: 'publico-apk-sem-audio',
    enforce: 'pre' as const,
    // O APK não é indexado: tira metatags de SEO/compartilhamento e o texto pré-renderizado para buscadores.
    transformIndexHtml(html: string) {
      return html
        .replace(/\s*<meta (?:name="description"|property="og:[^"]*"|name="twitter:[^"]*")[^>]*>/g, '')
        .replace(/\s*<link rel="(?:canonical|alternate)"[^>]*>/g, '')
        .replace(/\s*<!--[^]*?-->/g, '')
        .replace(/\s*<style>@media \(scripting: ?enabled\)\{main\[data-prerender\][^<]*<\/style>/, '')
        .replace(/<main[^>]*data-prerender[^]*?<\/main>/, '')
        .replace(/<title>[^<]*<\/title>/, '<title>Linvuu</title>');
    },
    transform(code, id) {
      if(id.split('?')[0]===path.resolve('src/main.tsx')) return { code: `import { prepararArmazenamento } from './plataforma/apk/armazenamento';\nawait prepararArmazenamento();\n${code}`, map:null };
    },
    resolveId(source, importer) {
      if (importer && source.startsWith('.') && path.resolve(path.dirname(importer.split('?')[0]), source).replace(/\.ts$/, '') === path.resolve('src/lib/audio')) return path.resolve('src/plataforma/apk/audio.ts');
    },
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk') continue;
        for (const id of Object.keys(chunk.modules)) {
          if (id.replaceAll('\\', '/').endsWith('/src/lib/audio.ts')) throw new Error('Motor de áudio do website incluído no APK');
          if (id.replaceAll('\\', '/').endsWith('/src/plataforma/website/checkout.ts')) {
            throw new Error('Checkout do website incluído no APK');
          }
        }
      }
    },
    closeBundle() {
      if (env.VITE_APK_BUILD_ID) fs.writeFileSync(path.join('dist-apk','linvuu-build.json'),JSON.stringify({build:env.VITE_APK_BUILD_ID,source:env.LINVUU_SOURCE_SHA || null,versionCode:env.ANDROID_VERSION_CODE || null,versionName:env.ANDROID_VERSION_NAME || null}));
      // Mantém imagens e fontes locais; áudios são carregados sob demanda pelo servidor.
      for (const nome of fs.readdirSync('public')) {
        if (['audio', 'mascots', 'sitemap.xml', 'robots.txt'].includes(nome)) continue;
        fs.cpSync(path.join('public', nome), path.join('dist-apk', nome), { recursive: true });
      }
    },
  }] : [])],
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
};
});

