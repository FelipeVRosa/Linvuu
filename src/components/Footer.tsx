import { Link } from 'react-router-dom';
import { CURSOS } from '../lib/content';
import { EMAIL_OFICIAL } from '../config/site';
import { useT } from '../i18n';
import { Redes } from './Redes';
import { Newsletter } from './Newsletter';

export function Footer() {
  const t = useT();
  return (
    <footer className="foot">
      <div className="foot-news" id="novidades">
        <div className="foot-news-in">
          <div>
            <h2>{t.rodape.novidadesTitulo}</h2>
            <p>{t.rodape.novidadesTexto}</p>
          </div>
          <Newsletter origem="rodape" />
        </div>
      </div>
      <div className="foot-inner">
        <div className="foot-brand">
          <img className="logo-img" src="/brand/linvuu-logo.png" alt="Linvuu" width="127" height="28" />
          <p>{t.rodape.frase}</p>
          <div id="redes"><Redes /></div>
        </div>
        <nav aria-label="Linvuu">
          <h2 className="foot-h">Linvuu</h2>
          <Link to="/cursos">Todos os cursos</Link>
          <Link to="/gramatica/ru">Gramática</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/#avaliacoes">Avaliações</Link>
          <Link to="/#faq">Dúvidas</Link>
          <a href={`mailto:${EMAIL_OFICIAL}`}>Contato</a>
        </nav>
        <nav aria-label="Idiomas">
          <h2 className="foot-h">Idiomas</h2>
          {CURSOS.filter((c) => c.area === 'idiomas').map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
        <nav aria-label="STEM">
          <h2 className="foot-h">STEM</h2>
          {CURSOS.filter((c) => c.area === 'stem').map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
      </div>
      <div className="foot-base">
        <span>© 2026 Linvuu</span>
        <span className="foot-legal"><Link to="/termos">{t.rodape.termos}</Link><Link to="/privacidade">{t.rodape.privacidade}</Link></span>
        <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>
      </div>
    </footer>
  );
}
