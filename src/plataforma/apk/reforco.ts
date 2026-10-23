/** Reforço entre sessões: reúne, a partir da prática corrigida já salva neste aparelho,
 *  os blocos de exercícios em que ainda há erros a rever ou cujo reforço espaçado venceu.
 *  Só lê o que o aluno respondeu. */
import { gruposDoCurso } from '../../lib/content';
import { usuarioDoProgresso } from '../../lib/progresso';
import { agendaReforco, type ItemReforco } from './reforcoModelo';
import { registrarVolta, situacaoEspacada, validarEspacado, type Espacado } from './espacadoModelo';
import { pendentesRevisao, type Revisao } from './revisaoModelo';
export type { ItemReforco } from './reforcoModelo';

/** Dia (sessão do percurso) a partir de aula + sessão "S3", usando os grupos reais do curso. */
export function diaDaSessao(idioma: string, aula: number, sessao: number): number | null {
  const g = gruposDoCurso(idioma).find((x) => x.aula === aula);
  if (!g) return null;
  const dia = g.dias[0] + sessao - 1;
  return dia >= g.dias[0] && dia <= g.dias[1] ? dia : null;
}

export function agendaDoCurso(idioma: string): { itens: ItemReforco[]; proxima: string | null } {
  return agendaReforco(idioma, usuarioDoProgresso() ?? 'visitante', localStorage, (a, s) => diaDaSessao(idioma, a, s));
}
export const errosParaRever = (idioma: string): ItemReforco[] => agendaDoCurso(idioma).itens;

const chave = (bloco: string) => `linvuu:pratica-apk:v1:${usuarioDoProgresso() ?? 'visitante'}:${bloco}:espacado`;
function lerEspacado(bloco: string): Espacado | null {
  try { const v: unknown = JSON.parse(localStorage.getItem(chave(bloco)) ?? 'null'); return validarEspacado(v) ? v : null; } catch { return null; }
}

/** Reforço espaçado vencido deste bloco (a revisão dos erros já terminou com tudo certo). */
export function espacadoVencido(bloco: string, revisao: Revisao | null, agora = Date.now()): { passo: number; rodada: string } | null {
  if (!revisao?.fim || pendentesRevisao(revisao).length) return null;
  const s = situacaoEspacada(revisao.em, lerEspacado(bloco));
  if (!s || Date.parse(s.proxima) > agora) return null;
  // Uma rodada nova por vencimento: a revisão desta volta não reaproveita respostas da anterior.
  return { passo: s.passo, rodada: `${bloco}:espacado:${Date.parse(s.proxima).toString(36)}` };
}

/** Grava o resultado de uma volta espaçada. Devolve false se o aparelho não aceitou gravar. */
export function concluirVolta(bloco: string, revisao: Revisao): boolean {
  try {
    localStorage.setItem(chave(bloco), JSON.stringify(registrarVolta(lerEspacado(bloco), revisao.rodada === 1 && pendentesRevisao(revisao).length === 0, Date.now())));
    window.dispatchEvent(new Event('linvuu:revisao-apk'));
    return true;
  } catch { return false; }
}
