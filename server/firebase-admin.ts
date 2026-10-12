// Inicialização única do Firebase Admin (usado por billing.ts e progresso.ts).
// Ordem da credencial:
//   1. FIREBASE_SERVICE_ACCOUNT_JSON: o JSON da conta de serviço inteiro, numa variável de ambiente.
//   2. GOOGLE_APPLICATION_CREDENTIALS: caminho de um arquivo JSON (Secret File no Render: /etc/secrets/...).
//   3. Credencial padrão do ambiente (ADC), se nada acima existir.
// A chave nunca é impressa nem enviada ao navegador.
import fs from 'node:fs';
import { cert, getApps, initializeApp, applicationDefault, type App } from 'firebase-admin/app';

const projeto = process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID;

function credencial() {
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (json) return cert(JSON.parse(json));
  const arquivo = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (arquivo && fs.existsSync(arquivo)) return cert(JSON.parse(fs.readFileSync(arquivo, 'utf8')));
  return applicationDefault();
}

let app: App | null = null;
/** Devolve o app do Firebase Admin, criando-o na primeira chamada. Lança erro se a credencial não existir. */
export function firebaseAdmin(): App {
  if (app) return app;
  app = getApps()[0] ?? initializeApp({ credential: credencial(), projectId: projeto });
  return app;
}
export const projetoFirebase = projeto;
