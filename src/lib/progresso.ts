// Progresso local por usuário. A sincronização dos dias com o servidor fica em progressoConta.ts.
const CHAVE = 'linvuu:progresso:v1';
let usuarioAtual: string | null = null;
export const usuarioDoProgresso = () => usuarioAtual;
const chaveLocal = (base: string) => usuarioAtual ? `${base}:uid:${usuarioAtual}` : base;
/** O progresso antigo/visitante nunca é atribuído automaticamente a uma conta. */
export function definirUsuarioProgresso(uid: string | null) {
  if (usuarioAtual === uid) return;
  usuarioAtual = uid;
  window.dispatchEvent(new Event('linvuu:dias'));
}

export interface ProgressoSessao { bloco: number; completa: boolean; em: string }

const ler = (): Record<string, ProgressoSessao> => {
  try { return JSON.parse(localStorage.getItem(chaveLocal(CHAVE)) ?? '{}'); } catch { return {}; }
};
export const chaveSessao = (idioma: string, aula: number, sessao: string) => `${idioma}:${aula}:${sessao}`;
export const lerSessao = (k: string): ProgressoSessao | undefined => ler()[k];
export const salvarSessao = (k: string, p: Omit<ProgressoSessao, 'em'>) => {
  try { localStorage.setItem(chaveLocal(CHAVE), JSON.stringify({ ...ler(), [k]: { ...p, em: new Date().toISOString() } })); } catch { /* navegador sem armazenamento */ }
};

// Dias concluídos (botão "Marcar como concluída"), também guardados neste navegador.
const CHAVE_DIAS = 'linvuu:dias-concluidos:v1';
const lerDias = (): string[] => {
  try { const v = JSON.parse(localStorage.getItem(chaveLocal(CHAVE_DIAS)) ?? '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
};
export const diasConcluidos = (idioma: string): number[] =>
  lerDias().filter((k) => k.startsWith(`${idioma}:`)).map((k) => Number(k.split(':')[1]));
export const diaConcluido = (idioma: string, dia: number) => lerDias().includes(`${idioma}:${dia}`);
export const marcarDia = (idioma: string, dia: number, feito: boolean) => {
  try {
    const s = new Set(lerDias());
    const k = `${idioma}:${dia}`;
    if (feito) s.add(k); else s.delete(k);
    localStorage.setItem(chaveLocal(CHAVE_DIAS), JSON.stringify([...s]));
    window.dispatchEvent(new Event('linvuu:dias'));
  } catch { /* navegador sem armazenamento */ }
};

/** Curso estudado por último neste navegador (pela sessão aberta mais recentemente). */
export const ultimoCursoEstudado = (): string | undefined => {
  let melhor: [string, string] | undefined;
  for (const [k, v] of Object.entries(ler())) {
    if (v?.em && (!melhor || v.em > melhor[1])) melhor = [k.split(':')[0], v.em];
  }
  return melhor?.[0] ?? lerDias()[0]?.split(':')[0];
};
