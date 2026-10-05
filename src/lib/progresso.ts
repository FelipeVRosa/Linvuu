// Progresso por sessão, guardado neste navegador (localStorage). O progresso na conta (Firestore) vem numa rodada futura.
const CHAVE = 'linvuu:progresso:v1';
export interface ProgressoSessao { bloco: number; completa: boolean; em: string }

const ler = (): Record<string, ProgressoSessao> => {
  try { return JSON.parse(localStorage.getItem(CHAVE) ?? '{}'); } catch { return {}; }
};
export const chaveSessao = (idioma: string, aula: number, sessao: string) => `${idioma}:${aula}:${sessao}`;
export const lerSessao = (k: string): ProgressoSessao | undefined => ler()[k];
export const salvarSessao = (k: string, p: Omit<ProgressoSessao, 'em'>) => {
  try { localStorage.setItem(CHAVE, JSON.stringify({ ...ler(), [k]: { ...p, em: new Date().toISOString() } })); } catch { /* navegador sem armazenamento */ }
};
