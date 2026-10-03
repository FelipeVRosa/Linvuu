// Login com Firebase Authentication (Google e e-mail/senha).
// As chaves vêm de variáveis VITE_FIREBASE_* (ver docs/AUTENTICACAO.md). Sem elas, o login fica desativado.
const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

export const authConfigurado = Boolean(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);

let cache: Promise<{ auth: import('firebase/auth').Auth; m: typeof import('firebase/auth') }> | null = null;

/** Carrega o Firebase só quando preciso, para não pesar a página inicial. */
export function carregarAuth() {
  if (!cache) {
    cache = (async () => {
      const [{ initializeApp }, m] = await Promise.all([import('firebase/app'), import('firebase/auth')]);
      const app = initializeApp(cfg as Record<string, string>);
      return { auth: m.getAuth(app), m };
    })();
  }
  return cache;
}

const ERROS: Record<string, string> = {
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/user-not-found': 'E-mail ou senha incorretos.',
  'auth/invalid-email': 'Esse e-mail não parece válido.',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail. Tente entrar.',
  'auth/weak-password': 'Use uma senha com pelo menos 6 caracteres.',
  'auth/too-many-requests': 'Muitas tentativas. Espere um pouco e tente de novo.',
  'auth/popup-closed-by-user': 'A janela do Google foi fechada antes de terminar.',
  'auth/cancelled-popup-request': 'A janela do Google foi fechada antes de terminar.',
  'auth/popup-blocked': 'O navegador bloqueou a janela do Google. Libere pop-ups e tente de novo.',
  'auth/network-request-failed': 'Sem conexão. Verifique a internet e tente de novo.',
  'auth/unauthorized-domain': 'Este endereço ainda não foi autorizado para login.',
};
export const mensagemDeErro = (e: unknown) => {
  const code = (e as { code?: string })?.code ?? '';
  return ERROS[code] ?? 'Não foi possível concluir. Tente de novo em instantes.';
};
