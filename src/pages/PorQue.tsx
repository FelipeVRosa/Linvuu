import { Link } from 'react-router-dom';
import '../livros.css';
import { LOCALE } from '../i18n';
import { usePageTitle } from '../lib/usePageTitle';
import { POR_QUE } from '../lib/institucional';

/** "Por que estudar com a Linvuu?": os motivos, em fatos verificáveis. Só em português. */
export default function PorQue() {
  usePageTitle(POR_QUE.titulo, POR_QUE.descricao, ['pt-BR'], LOCALE.codigo !== 'pt-BR');
  return (
    <div className="pagina lvr">
      <header className="lvr-topo">
        <p className="lv-kicker lv-kicker-esc">Sobre o método</p>
        <h1 className="pagina-h1">{POR_QUE.titulo}</h1>
        <p className="lead">{POR_QUE.lead}</p>
        {LOCALE.codigo !== 'pt-BR' && <p className="lvr-nota" lang="pt-BR">Esta página está em português.</p>}
      </header>

      <section className="lvr-artigo" aria-label="Motivos para estudar com a Linvuu">
        {POR_QUE.motivos.map((m, i) => (
          <div key={m.id} id={m.id}>
            <h2 className="lvr-h2" style={i === 0 ? { marginTop: 0 } : undefined}>{m.titulo}</h2>
            <p className="lvr-p">{m.texto}</p>
          </div>
        ))}

        <h2 className="lvr-h2">Para quem é</h2>
        <p className="lvr-p">{POR_QUE.paraQuem}</p>

        <h2 className="lvr-h2">Comece agora</h2>
        <p className="lvr-p"><Link to="/cursos">Veja os cursos</Link> e faça as duas primeiras aulas grátis, <Link to="/livros">leia os dois primeiros capítulos dos livros</Link>, <Link to="/sobre">conheça os autores</Link> ou <Link to="/contato">fale com a gente</Link>.</p>
      </section>
    </div>
  );
}
