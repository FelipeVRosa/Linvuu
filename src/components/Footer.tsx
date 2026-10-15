import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS, IDIOMAS_GRAMATICA } from '../lib/content';
import { EMAIL_OFICIAL } from '../config/site';
import { LOCALE, useT } from '../i18n';
import { Redes } from './Redes';
import { ContatoIcones } from './IconesContato';
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
          <p className="lv-foot-autoria">{t.rodape.criadaPor} <strong>Felipe Nascimento Rosa</strong> {t.rodape.eConj} <strong>Luiza Nascimento Rosa</strong>.</p>
          <div id="redes"><ContatoIcones /><Redes /></div>
        </div>
        <nav aria-label="Linvuu">
          <h2>Linvuu</h2>
          <Link to="/cursos">{t.nav.todos}</Link>
          <Link to={`/gramatica/${CURSOS_ATIVOS.find((c) => IDIOMAS_GRAMATICA.includes(c.id))?.id ?? 'de'}`}>{t.nav.gramatica}</Link>
          <Link to="/portugues">{t.rodape.portugues}</Link>
          {LOCALE.codigo === 'pt-BR' && <><Link to="/livros">Livros</Link><Link to="/sobre">Quem somos</Link><Link to="/por-que-linvuu">Por que estudar com a Linvuu?</Link></>}
          <Link to="/#metodo">{t.nav.metodo}</Link>
          <Link to="/#faq">{t.nav.duvidas}</Link>
          {LOCALE.codigo === 'pt-BR' ? <Link to="/contato">{t.rodape.contato}</Link> : <a href={`mailto:${EMAIL_OFICIAL}`}>{t.rodape.contato}</a>}
        </nav>
        <nav aria-label={t.rodape.idiomas}>
          <h2>{t.rodape.idiomas}</h2>
          {CURSOS_ATIVOS.map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
        </nav>
      </div>
      <div className="lv-foot-base">
        <span>{t.rodape.direitos}</span>
        <span className="lv-foot-legal"><Link to="/termos">{t.rodape.termos}</Link><Link to="/privacidade">{t.rodape.privacidade}</Link></span>
        <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>
      </div>
    </footer>
  );
}
