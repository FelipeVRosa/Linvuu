import { Link } from 'react-router-dom';
import { CURSOS } from '../lib/content';
import { Redes } from './Redes';

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <img className="logo-img" src="/brand/linvuu-logo.png" alt="Linvuu" width="127" height="28" />
          <p>100 dias para um mundo novo. Idiomas e STEM em trilhas curtas, com pessoas reais.</p>
          <div id="redes"><Redes /></div>
        </div>
        <nav aria-label="Idiomas">
          <h2 className="foot-h">Idiomas</h2>
          {CURSOS.filter((c) => c.area === 'idiomas').map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
        <nav aria-label="STEM">
          <h2 className="foot-h">STEM</h2>
          {CURSOS.filter((c) => c.area === 'stem').map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
        <nav aria-label="Linvuu">
          <h2 className="foot-h">Linvuu</h2>
          <Link to="/cursos">Todos os cursos</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/#faq">Dúvidas</Link>
        </nav>
      </div>
      <div className="foot-base">
        <span>© 2026 Linvuu · São Paulo</span>
      </div>
    </footer>
  );
}
