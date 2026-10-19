// No Android a API é remota; testes Node podem não fornecer import.meta.env.
const env = import.meta.env ?? {};
const BASE = ((env.VITE_API_BASE_URL as string | undefined) ?? (env.VITE_ALVO === 'apk' ? 'https://linvuu.com.br' : '')).replace(/\/$/, '');
export const api = (caminho: string) => `${BASE}${caminho}`;
