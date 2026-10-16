// Onde o aluno parou: primeira sessão ainda não concluída do curso.
import { useEffect, useState } from 'react';
import { DIAS, diaDoCurso, getCurso, gruposDoCurso, statusDoCurso } from './content';
import { diasConcluidos, ultimoCursoEstudado } from './progresso';

export interface Retomada { idioma: string; nome: string; dia: number; titulo: string; aula?: number; feitos: number; total: number }

export function pontoDeRetomada(idioma: string): Retomada | undefined {
  const curso = getCurso(idioma);
  if (!curso) return undefined;
  const grupos = gruposDoCurso(idioma);
  const total = grupos.length ? grupos[grupos.length - 1].dias[1] : (statusDoCurso(idioma)?.total ?? 0);
  if (!total) return undefined;
  const feitos = new Set(diasConcluidos(idioma));
  let dia = 1;
  while (dia <= total && feitos.has(dia)) dia++;
  if (dia > total) dia = total;
  const m = DIAS[dia - 1] ?? { dia, fase: Math.ceil(dia / 10), nivel: 'a2' as const, titulo: '', objetivo: '' };
  const g = grupos.find((x) => dia >= x.dias[0] && dia <= x.dias[1]);
  return { idioma, nome: curso.nome, dia, titulo: (() => { const tt = diaDoCurso(idioma, m).titulo; const i = tt.indexOf(': '); return i > 0 ? tt.slice(i + 2) : tt; })(), aula: g?.aula, feitos: [...feitos].filter((n) => n <= total).length, total };
}

/** Atualiza quando um dia é marcado (evento linvuu:dias) ou quando outra aba muda o progresso. */
export function useDiasFeitos(idioma: string | undefined): Set<number> {
  const ler = () => new Set(idioma ? diasConcluidos(idioma) : []);
  const [feitos, setFeitos] = useState(ler);
  useEffect(() => {
    const sync = () => setFeitos(ler());
    sync();
    window.addEventListener('linvuu:dias', sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener('linvuu:dias', sync); window.removeEventListener('storage', sync); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idioma]);
  return feitos;
}

/** Retomada do curso estudado por último; undefined se a pessoa nunca abriu uma sessão neste navegador. */
export function useRetomadaGeral(): Retomada | undefined {
  const [r, setR] = useState<Retomada | undefined>(undefined);
  useEffect(() => {
    const sync = () => { const id = ultimoCursoEstudado(); setR(id ? pontoDeRetomada(id) : undefined); };
    sync();
    window.addEventListener('linvuu:dias', sync);
    return () => window.removeEventListener('linvuu:dias', sync);
  }, []);
  return r;
}
