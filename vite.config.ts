import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';
import path from 'node:path';
import fs from 'node:fs';

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const alvo = env.VITE_ALVO || 'website';
  if (!['website', 'apk'].includes(alvo)) throw new Error('VITE_ALVO deve ser website ou apk');
  const apk = alvo === 'apk';
  return {
  define: { 'import.meta.env.VITE_ALVO': JSON.stringify(alvo) },
  resolve: { alias: { '@plataforma': path.resolve('src/plataforma', alvo) } },
  build: { outDir: apk ? 'dist-apk' : 'dist', copyPublicDir: !apk },
  plugins: [react(), ...(apk ? [{
    name: 'publico-apk-sem-audio',
    enforce: 'pre' as const,
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
      // Mantém imagens e fontes locais; áudios são carregados sob demanda pelo servidor.
      for (const nome of fs.readdirSync('public')) {
        if (['audio', 'sitemap.xml', 'robots.txt'].includes(nome)) continue;
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

