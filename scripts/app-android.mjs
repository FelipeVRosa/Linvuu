// Gera o site com o endereço da API de produção e copia para o projeto Android.
// Uso: npm run app:android   (depois abra android/ no Android Studio, ou gere o APK pelo GitHub Actions)
import { spawnSync } from 'node:child_process';

const API = process.env.VITE_API_BASE_URL || 'https://linvuu.com.br';
const env = { ...process.env, VITE_API_BASE_URL: API, VITE_ALVO: 'apk', VITE_AUDIO_BASE_URL: process.env.VITE_AUDIO_BASE_URL || `${API}/audio` };
for (const cmd of [['npm', ['run', 'build']], ['npx', ['cap', 'sync', 'android']]]) {
  const r = spawnSync(cmd[0], cmd[1], { stdio: 'inherit', env, shell: process.platform === 'win32' });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
console.log(`\nApp pronto para o Android. API: ${API}`);
