import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';
import { useT } from '../i18n';

export default function NaoEncontrada() {
  const t = useT();
  usePageTitle(t.naoEncontrada.titulo, undefined, [], true);
  return (
    <div className="pagina">
      <h1 className="pagina-h1">{t.naoEncontrada.titulo}</h1>
      <p className="lead">{t.naoEncontrada.texto}</p>
      <p><Link to="/" className="btn btn-primary">{t.naoEncontrada.inicio}</Link> <Link to="/cursos" className="btn btn-ghost">{t.naoEncontrada.cursos}</Link></p>
    </div>
  );
}
