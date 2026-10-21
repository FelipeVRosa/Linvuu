/** Reforço entre sessões: reúne, a partir da prática corrigida já salva neste aparelho,
 *  os blocos de exercícios em que ainda há erros a rever. Só lê o que o aluno respondeu. */
import { gruposDoCurso } from '../../lib/content';
import { usuarioDoProgresso } from '../../lib/progresso';
import { listarReforco, type ItemReforco } from './reforcoModelo';
export type { ItemReforco } from './reforcoModelo';

/** Dia (sessão do percurso) a partir de aula + sessão "S3", usando os grupos reais do curso. */
export function diaDaSessao(idioma: string, aula: number, sessao: number): number | null {
  const g = gruposDoCurso(idioma).find((x) => x.aula === aula);
  if (!g) return null;
  const dia = g.dias[0] + sessao - 1;
  return dia >= g.dias[0] && dia <= g.dias[1] ? dia : null;
}

export function errosParaRever(idioma: string): ItemReforco[] {
  return listarReforco(idioma, usuarioDoProgresso() ?? 'visitante', localStorage, (a, s) => diaDaSessao(idioma, a, s));
}
