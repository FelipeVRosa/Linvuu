import { Link } from 'react-router-dom';
import { Curso, STATUS_CURSO } from '../lib/content';
import { Bandeira } from './Bandeira';

export function CursoCard({ curso }: { curso: Curso }) {
  const idioma = curso.area === 'idiomas';
  return (
    <Link to={`/curso/${curso.id}`} className="curso-card">
      <div className="curso-card-top">
        <span className="curso-card-area">{idioma ? <><Bandeira id={curso.id} size={20} /> Idioma</> : 'STEM'}</span>
        <span className={`pill pill-${curso.status}`}>{STATUS_CURSO[curso.status]}</span>
      </div>
      <h3>{curso.nome}{curso.nomeNativo !== curso.nome && <em> {curso.nomeNativo}</em>}</h3>
      <p>{curso.descricao}</p>
      <div className="curso-card-meta">
        <span>100 dias</span>{idioma && <span>Zero a B1</span>}<span>15 min por dia</span>
      </div>
    </Link>
  );
}
