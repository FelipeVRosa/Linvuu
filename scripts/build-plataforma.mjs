import { spawnSync } from 'node:child_process';
const alvo = process.argv[2];
if (!['website', 'apk'].includes(alvo)) throw new Error('Alvo inválido');
const env = { ...process.env, VITE_ALVO: alvo };
if (alvo === 'apk') {
  const api = env.VITE_API_BASE_URL || 'https://linvuu.com.br';
  env.VITE_API_BASE_URL = api;
  env.VITE_AUDIO_BASE_URL ||= `${api.replace(/\/$/, '')}/audio`;
}
const r = spawnSync('npm', ['run', 'build'], { env, stdio: 'inherit', shell: process.platform === 'win32' });
process.exit(r.status ?? 1);

