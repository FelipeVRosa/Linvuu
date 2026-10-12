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

// Dias concluídos (botão "Marcar como concluída"), também guardados neste navegador.
const CHAVE_DIAS = 'linvuu:dias-concluidos:v1';
const lerDias = (): string[] => {
  try { const v = JSON.parse(localStorage.getItem(CHAVE_DIAS) ?? '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
};
export const diasConcluidos = (idioma: string): number[] =>
  lerDias().filter((k) => k.startsWith(`${idioma}:`)).map((k) => Number(k.split(':')[1]));
export const diaConcluido = (idioma: string, dia: number) => lerDias().includes(`${idioma}:${dia}`);
export const marcarDia = (idioma: string, dia: number, feito: boolean) => {
  try {
    const s = new Set(lerDias());
    const k = `${idioma}:${dia}`;
    if (feito) s.add(k); else s.delete(k);
    localStorage.setItem(CHAVE_DIAS, JSON.stringify([...s]));
    window.dispatchEvent(new Event('linvuu:dias'));
  } catch { /* navegador sem armazenamento */ }
};
