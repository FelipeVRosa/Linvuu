// Inicia a aplicação real de produção para o Lighthouse, sem credenciais nem serviços reais.
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { resolve } from 'node:path';
const probe = createServer();
await new Promise((resolveReady, reject) => probe.once('error', reject).listen(4398, '127.0.0.1', resolveReady));
await new Promise(resolveClosed => probe.close(resolveClosed));
const env = { ...process.env, NODE_ENV: 'production', PORT: '4398', DOTENV_PATH: resolve('.lighthouseci', 'sem-credenciais.env') };
for (const key of Object.keys(env)) {
  if (/^(STRIPE_|FIREBASE_|GOOGLE_|REVENUECAT_|VITE_FIREBASE_|POSTHOG_|VITE_POSTHOG_)/i.test(key)) env[key] = '';
}
const child = spawn(process.execPath, ['--import', 'tsx', 'server.ts'], { env, stdio: ['ignore', 'ignore', 'pipe'] });
child.stderr.pipe(process.stderr);
let ready = false;
for (let i = 0; i < 200 && child.exitCode === null; i++) {
  try {
    if ((await fetch('http://127.0.0.1:4398/healthz')).ok) { ready = true; break; }
  } catch {}
  await new Promise(r => setTimeout(r, 100));
}
if (!ready) { child.kill(); throw new Error('Servidor local do Lighthouse indisponível.'); }
console.log('LINVUU_LHCI_READY');
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill());
process.on('exit', () => { if (child.exitCode === null) child.kill(); });
child.on('exit', code => process.exit(code ?? 1));
