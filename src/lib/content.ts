import trilhaJson from '../../content/trilha.json';
import cursosJson from '../../content/cursos.json';
import indiceJson from '../../content/indice.json';
import type { InfoAula, SessaoAula } from './aulas';

export type StatusCurso = 'disponivel' | 'em-producao' | 'em-breve' | 'em-planejamento';
export type StatusAula = 'planejada' | 'em-producao' | 'publicada';
export type Nivel = 'zero' | 'a1' | 'a2' | 'b1';

export interface Curso {
  id: string; area: 'idiomas'; nome: string; nomeNativo: string;
  mascote: string; status: StatusCurso; descricao: string; dias: number | null;
}
export interface Fase { id: number; titulo: string; nivel: Nivel; resumo: string; dias: [number, number] }
export interface DiaMestre { dia: number; fase: number; nivel: Nivel; titulo: string; objetivo: string }
export interface Aula extends DiaMestre {
  idioma: string; status: StatusAula;
  /** Dias em sessões (aulas escritas): trazem a aula e a sessão. Dias planejados trazem as três camadas vazias. */
  aula?: InfoAula;
  sessao?: SessaoAula;
  comeceAqui?: { status: string; audio: string | null; palavras: unknown[] };
  imersao?: { status: string; texto: string | null; audio: string | null; vocabulario: unknown[] };
  pratica?: { status: string; exercicios: unknown[] };
  videoApoio?: { status: string; url: string | null; motivo: string | null };
  responsavel: string | null;
}

export const CURSOS = cursosJson.cursos as Curso[];
export const FASES = trilhaJson.fases as Fase[];
export const DIAS = trilhaJson.dias as DiaMestre[];
export const TITULO_TRILHA = trilhaJson.titulo;
const INDICE = indiceJson.cursos as unknown as Record<string, { total: number; publicadas: number; emProducao: number; planejadas: number; status: StatusAula[]; sobrescritos: Record<string, { t: string; o: string }>; grupos?: { aula: number; titulo: string; nivel?: string; dias: [number, number] }[] }>;

/** Título e objetivo do dia para um curso (alguns idiomas têm aulas próprias no lugar do texto-mestre). */
export const diaDoCurso = (id: string, d: DiaMestre) => {
  const o = INDICE[id]?.sobrescritos[d.dia];
  return { ...d, titulo: o?.t ?? d.titulo, objetivo: o?.o ?? d.objetivo };
};

export const getCurso = (id?: string) => CURSOS.find((c) => c.id === id);
export const statusDoCurso = (id: string) => INDICE[id];
/** Aulas escritas do curso (cada uma com 4 sessões = 4 dias). */
export const gruposDoCurso = (id: string) => INDICE[id]?.grupos ?? [];
const ORDEM_NIVEL = ['zero', 'a1', 'a2', 'b1', 'b2', 'c1'];
export const NIVEL_LABEL: Record<string, string> = { zero: 'Iniciando do zero', a1: 'Básico · A1', a2: 'Básico · A2', b1: 'Intermediário · B1', b2: 'Intermediário · B2', c1: 'Avançado · C1' };
export const NIVEL_CURTO: Record<string, string> = { zero: 'Zero', a1: 'A1', a2: 'A2', b1: 'B1' };
export const STATUS_CURSO: Record<StatusCurso, string> = { disponivel: 'Disponível', 'em-producao': 'Em produção', 'em-breve': 'Em breve', 'em-planejamento': 'Em planejamento' };
export const STATUS_AULA: Record<StatusAula, string> = { planejada: 'Planejada', 'em-producao': 'Em produção', publicada: 'Publicada' };

/** Dia sugerido para começar conforme o nível, calculado a partir das aulas reais de cada idioma. */
export function inicioDoNivel(id: string, nivel: string): { dia: number; aviso?: string } | undefined {
  const g = gruposDoCurso(id);
  if (!g.length) return INICIO_POR_NIVEL[nivel];
  if (nivel === 'zero') return { dia: 1 };
  const pedido = ORDEM_NIVEL.indexOf(nivel);
  const alvo = g.find((x) => ORDEM_NIVEL.indexOf(x.nivel ?? 'zero') >= pedido);
  const nome = id ? (getCurso(id)?.nome ?? 'curso') : 'curso';
  if (!alvo) {
    const ult = g.filter((x) => x.nivel === g[g.length - 1].nivel)[0];
    return { dia: ult.dias[0], aviso: `O curso de ${nome} ainda não tem aulas de ${NIVEL_CURTO[nivel] ?? nivel.toUpperCase()}. O bloco mais avançado, ${NIVEL_CURTO[ult.nivel ?? ''] ?? ''}, começa na aula ${ult.aula}; use-o como revisão.` };
  }
  if (ORDEM_NIVEL.indexOf(alvo.nivel ?? 'zero') > pedido) return { dia: 1 };
  return { dia: alvo.dias[0], aviso: alvo.aula > 1 ? `O bloco ${NIVEL_CURTO[nivel] ?? ''} começa na aula ${alvo.aula}. As aulas anteriores revisam o que vem antes, se você sentir falta.` : undefined };
}

/** Dia sugerido para começar conforme o nível. A trilha é para iniciantes. */
export const INICIO_POR_NIVEL: Record<string, { dia: number; aviso?: string }> = {
  zero: { dia: 1 },
  a1: { dia: 25, aviso: 'Se algum ponto parecer novo, volte às aulas anteriores; elas são curtas.' },
  a2: { dia: 97, aviso: 'O bloco A2 começa na aula 25. As aulas 11 a 24 revisam a gramática, se você sentir falta.' },
  b1: { dia: 97, aviso: 'Ainda não há aulas de B1. Comece pelo dia 97 (início do bloco A2) como revisão; as aulas de B1 estão em planejamento.' },
  b2: { dia: 97, aviso: 'Esta trilha foi pensada para quem está começando. As trilhas avançadas ainda estão em planejamento; use o dia 97 como revisão.' },
  c1: { dia: 97, aviso: 'Esta trilha foi pensada para quem está começando e serve só como revisão no seu nível. As trilhas avançadas ainda estão em planejamento.' },
};

const aulas = import.meta.glob('../../content/idiomas/*/dia-*.json', { import: 'default' }) as Record<string, () => Promise<Aula>>;
export const carregarAula = (idioma: string, dia: number) => {
  const key = `../../content/idiomas/${idioma}/dia-${String(dia).padStart(3, '0')}.json`;
  return aulas[key] ? aulas[key]() : Promise.reject(new Error('aula não encontrada'));
};

/** Cursos listados na vitrine (o curso de português para estrangeiros fica fora até ter aulas). */
export const CURSOS_ATIVOS = CURSOS.filter((c) => c.id !== 'br');
