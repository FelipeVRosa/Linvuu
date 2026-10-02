import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';

export default function NaoEncontrada() {
  usePageTitle('Página não encontrada');
  return (
    <div className="pagina">
      <h1 className="pagina-h1">Página não encontrada</h1>
      <p className="lead">O endereço não existe ou mudou de lugar.</p>
      <p><Link to="/" className="btn btn-primary">Voltar ao início</Link> <Link to="/cursos" className="btn btn-ghost">Ver cursos</Link></p>
    </div>
  );
}
