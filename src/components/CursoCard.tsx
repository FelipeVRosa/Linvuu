import { Link } from 'react-router-dom';
import { Curso, STATUS_CURSO, statusDoCurso } from '../lib/content';

const SAUDACAO: Record<string, string> = { en: 'Hello', es: 'Hola', ru: 'Привет', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', br: 'Olá' };

export function CursoCard({ curso }: { curso: Curso }) {
  const aulas = Math.floor((statusDoCurso(curso.id)?.publicadas ?? 0) / 4);
  return (
    <Link to={`/curso/${curso.id}`} className="lv-card">
      {SAUDACAO[curso.id] && <span className="lv-saud" lang={curso.id === 'br' ? 'pt-BR' : curso.id} aria-hidden="true">{SAUDACAO[curso.id]}</span>}
      <span className={`lv-status lv-status-${curso.status}`}>{STATUS_CURSO[curso.status]}</span>
      <h3>{curso.nome}</h3>
      <span className="lv-nativo" lang={curso.id}>{curso.nomeNativo !== curso.nome ? curso.nomeNativo : '\u00a0'}</span>
      <p>{curso.descricao}</p>
      <span className="lv-card-meta">{aulas > 0 ? `${aulas} ${aulas === 1 ? 'aula no ar' : 'aulas no ar'}` : 'Em preparação'} · do zero ao B1</span>
    </Link>
  );
}
