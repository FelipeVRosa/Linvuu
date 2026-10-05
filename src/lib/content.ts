import trilhaJson from '../../content/trilha-100-dias.json';
import cursosJson from '../../content/cursos.json';
import indiceJson from '../../content/indice.json';

export type StatusCurso = 'em-producao' | 'em-breve' | 'em-planejamento';
export type StatusAula = 'planejada' | 'em-producao' | 'publicada';
export type Nivel = 'zero' | 'a1' | 'a2' | 'b1';

export interface Curso {
  id: string; area: 'idiomas' | 'stem'; nome: string; nomeNativo: string;
  mascote: string; status: StatusCurso; descricao: string; dias: number | null;
}
export interface Fase { id: number; titulo: string; nivel: Nivel; resumo: string; dias: [number, number] }
export interface DiaMestre { dia: number; fase: number; nivel: Nivel; titulo: string; objetivo: string }
export interface Aula extends DiaMestre {
  idioma: string; status: StatusAula;
  comeceAqui: { status: string; audio: string | null; palavras: unknown[] };
  imersao: { status: string; texto: string | null; audio: string | null; vocabulario: unknown[] };
  pratica: { status: string; exercicios: unknown[] };
  videoApoio: { status: string; url: string | null; motivo: string | null };
  responsavel: string | null;
}

export const CURSOS = cursosJson.cursos as Curso[];
export const FASES = trilhaJson.fases as Fase[];
export const DIAS = trilhaJson.dias as DiaMestre[];
export const TITULO_TRILHA = trilhaJson.titulo;
const INDICE = indiceJson.cursos as Record<string, { total: number; publicadas: number; emProducao: number; planejadas: number; status: StatusAula[]; sobrescritos: Record<string, { t: string; o: string }> }>;

/** Título e objetivo do dia para um curso (alguns idiomas têm aulas próprias no lugar do texto-mestre). */
export const diaDoCurso = (id: string, d: DiaMestre) => {
  const o = INDICE[id]?.sobrescritos[d.dia];
  return { ...d, titulo: o?.t ?? d.titulo, objetivo: o?.o ?? d.objetivo };
};

export const getCurso = (id?: string) => CURSOS.find((c) => c.id === id);
export const statusDoCurso = (id: string) => INDICE[id];
export const NIVEL_LABEL: Record<string, string> = { zero: 'Iniciando do zero', a1: 'Básico · A1', a2: 'Básico · A2', b1: 'Intermediário · B1', b2: 'Intermediário · B2', c1: 'Avançado · C1' };
export const NIVEL_CURTO: Record<string, string> = { zero: 'Zero', a1: 'A1', a2: 'A2', b1: 'B1' };
export const STATUS_CURSO: Record<StatusCurso, string> = { 'em-producao': 'Em produção', 'em-breve': 'Em breve', 'em-planejamento': 'Em planejamento' };
export const STATUS_AULA: Record<StatusAula, string> = { planejada: 'Planejada', 'em-producao': 'Em produção', publicada: 'Publicada' };

/** Dia sugerido para começar conforme o nível. O teto da trilha de 100 dias é B1. */
export const INICIO_POR_NIVEL: Record<string, { dia: number; aviso?: string }> = {
  zero: { dia: 1 },
  a1: { dia: 11 },
  a2: { dia: 31 },
  b1: { dia: 61 },
  b2: { dia: 91, aviso: 'Esta trilha de 100 dias termina em B1. Comece pelo dia 91 e fique de olho nas trilhas avançadas, que ainda estão em planejamento.' },
  c1: { dia: 91, aviso: 'Esta trilha de 100 dias termina em B1. Ela serve como revisão para quem já está em C1; as trilhas avançadas ainda estão em planejamento.' },
};

const aulas = import.meta.glob('../../content/idiomas/*/dia-*.json', { import: 'default' }) as Record<string, () => Promise<Aula>>;
export const carregarAula = (idioma: string, dia: number) => {
  const key = `../../content/idiomas/${idioma}/dia-${String(dia).padStart(3, '0')}.json`;
  return aulas[key] ? aulas[key]() : Promise.reject(new Error('aula não encontrada'));
};
