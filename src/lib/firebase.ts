// Firebase (Authentication + Firestore). As chaves vêm de variáveis VITE_FIREBASE_* (ver docs/AUTENTICACAO.md).
// Sem elas, o login fica desativado e o site continua funcionando.
// `?? {}` deixa este módulo importável fora do Vite (testes em Node).
const env = (import.meta.env ?? {}) as Record<string, string | boolean | undefined>;

const cfg = {
  apiKey: env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: env.VITE_FIREBASE_APP_ID as string | undefined,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
};

export const authConfigurado = Boolean(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);
/** Login com Google fica escondido até o provedor ser ativado no Firebase (VITE_AUTH_GOOGLE=true). */
export const googleAtivo = env.VITE_AUTH_GOOGLE === 'true';

// Emuladores locais (só em desenvolvimento): VITE_AUTH_EMULATOR=127.0.0.1:9099, VITE_FIRESTORE_EMULATOR=127.0.0.1:8080
const emuladorAuth = env.DEV ? (env.VITE_AUTH_EMULATOR as string | undefined) : undefined;
const emuladorDb = env.DEV ? (env.VITE_FIRESTORE_EMULATOR as string | undefined) : undefined;

let appCache: Promise<import('firebase/app').FirebaseApp> | null = null;
const carregarApp = () => {
  if (!appCache) appCache = import('firebase/app').then(({ initializeApp }) => initializeApp(cfg as Record<string, string>));
  return appCache;
};

let authCache: Promise<{ auth: import('firebase/auth').Auth; m: typeof import('firebase/auth') }> | null = null;
/** Carrega o Auth só quando preciso, para não pesar a página inicial. A sessão fica salva no navegador (sobrevive ao reload). */
export function carregarAuth() {
  if (!authCache) {
    authCache = (async () => {
      const [app, m] = await Promise.all([carregarApp(), import('firebase/auth')]);
      const auth = m.getAuth(app);
      if (emuladorAuth) m.connectAuthEmulator(auth, `http://${emuladorAuth}`, { disableWarnings: true });
      try { await m.setPersistence(auth, m.browserLocalPersistence); } catch { /* segue com a persistência padrão */ }
      return { auth, m };
    })();
  }
  return authCache;
}

let dbCache: Promise<{ db: import('firebase/firestore').Firestore; f: typeof import('firebase/firestore') }> | null = null;
export function carregarDb() {
  if (!dbCache) {
    dbCache = (async () => {
      const [app, f] = await Promise.all([carregarApp(), import('firebase/firestore')]);
      const db = f.getFirestore(app);
      if (emuladorDb) {
        const [host, porta] = emuladorDb.split(':');
        f.connectFirestoreEmulator(db, host, Number(porta));
      }
      return { db, f };
    })();
  }
  return dbCache;
}

const ERROS: Record<string, string> = {
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/user-not-found': 'E-mail ou senha incorretos.',
  'auth/invalid-email': 'Esse e-mail não parece válido.',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail. Tente entrar.',
  'auth/weak-password': 'Use uma senha com pelo menos 6 caracteres.',
  'auth/missing-password': 'Digite a senha.',
  'auth/too-many-requests': 'Muitas tentativas. Espere um pouco e tente de novo.',
  'auth/popup-closed-by-user': 'A janela do Google foi fechada antes de terminar.',
  'auth/cancelled-popup-request': 'A janela do Google foi fechada antes de terminar.',
  'auth/popup-blocked': 'O navegador bloqueou a janela do Google. Libere pop-ups e tente de novo.',
  'auth/network-request-failed': 'Sem conexão. Verifique a internet e tente de novo.',
  'auth/unauthorized-domain': 'Este endereço ainda não foi autorizado para login.',
  'auth/operation-not-allowed': 'Este tipo de login ainda não foi ativado.',
  'auth/admin-restricted-operation': 'O cadastro por e-mail está desativado neste momento.',
  'auth/password-does-not-meet-requirements': 'A senha não atende às regras de segurança. Use letras maiúsculas e minúsculas, número e símbolo.',
  'auth/configuration-not-found': 'O login por e-mail ainda não foi configurado.',
};
export const mensagemDeErro = (e: unknown) => {
  const code = (e as { code?: string })?.code ?? '';
  if (!ERROS[code]) console.warn('[linvuu] erro de login:', code || e);
  return ERROS[code] ?? `Não foi possível concluir. Tente de novo em instantes.${code ? ` (código: ${code})` : ''}`;
};
