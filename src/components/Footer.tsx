import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS } from '../lib/content';
import { EMAIL_OFICIAL } from '../config/site';
import { useT } from '../i18n';
import { Redes } from './Redes';
import { Newsletter } from './Newsletter';

/** Rodapé do site. Nas páginas da área do aluno (`semNovidades`) o bloco de newsletter não aparece. */
export function Footer({ semNovidades = false }: { semNovidades?: boolean }) {
  const t = useT();
  return (
    <footer className="lv-foot">
      {!semNovidades && (
        <div className="lv-foot-news" id="novidades">
          <div className="lv-foot-news-in">
            <div>
              <h2>{t.rodape.novidadesTitulo}</h2>
              <p>{t.rodape.novidadesTexto}</p>
            </div>
            <Newsletter origem="rodape" />
          </div>
        </div>
      )}
      <div className="lv-foot-in">
        <div className="lv-foot-brand">
          <img src="/brand/linvuu-wordmark-papel.svg" alt="Linvuu" width="104" height="33" />
          <p>{t.rodape.frase}</p>
          <div id="redes"><Redes /></div>
        </div>
        <nav aria-label="Linvuu">
          <h2>Linvuu</h2>
          <Link to="/cursos">Todos os cursos</Link>
          <Link to="/gramatica/en">Gramática</Link>
          <Link to="/portugues">Português para estrangeiros</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/#faq">Dúvidas</Link>
          <a href={`mailto:${EMAIL_OFICIAL}`}>Contato</a>
        </nav>
        <nav aria-label="Idiomas">
          <h2>Idiomas</h2>
          {CURSOS_ATIVOS.map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
      </div>
      <div className="lv-foot-base">
        <span>© 2026 Linvuu. Todos os direitos reservados.</span>
        <span className="lv-foot-legal"><Link to="/termos">{t.rodape.termos}</Link><Link to="/privacidade">{t.rodape.privacidade}</Link></span>
        <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>
      </div>
    </footer>
  );
}
