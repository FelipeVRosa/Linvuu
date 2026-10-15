import '../livros.css';
import { LOCALE } from '../i18n';
import { usePageTitle } from '../lib/usePageTitle';
import { AUTORES } from '../lib/livros';
import { CONTATO } from '../lib/institucional';
import { contatos } from '../config/contato';
import { IconeContato } from '../components/IconesContato';

/** Contato: site, e-mail, WhatsApp (quando houver número) e LinkedIn dos autores. Só em português. */
export default function Contato() {
  usePageTitle(CONTATO.titulo, CONTATO.descricao, ['pt-BR']);
  const canais = contatos().filter((c) => c.id !== 'linkedin');
  return (
    <div className="pagina lvr">
      <header className="lvr-topo">
        <p className="lv-kicker lv-kicker-esc">Fale com a Linvuu</p>
        <h1 className="pagina-h1">{CONTATO.titulo}</h1>
        <p className="lead">{CONTATO.lead}</p>
        {LOCALE.codigo !== 'pt-BR' && <p className="lvr-nota" lang="pt-BR">Esta página está em português.</p>}
      </header>

      <section className="lvr-artigo" aria-label="Canais de contato">
        <ul className="lvr-grade contato-grade">
          {canais.map((c) => (
            <li key={c.id} id={c.id} className="lvr-cena contato-card">
              <a href={c.href} {...(c.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span className="contato-icone"><IconeContato id={c.id} size={26} /></span>
                <span className="contato-texto"><strong>{c.nome}</strong><span>{c.rotulo}</span></span>
              </a>
            </li>
          ))}
        </ul>

        <h2 id="linkedin" className="lvr-h2">LinkedIn</h2>
        <p className="lvr-p">Os autores respondem pelos próprios perfis.</p>
        <ul className="lvr-grade contato-grade">
          {AUTORES.map((a) => (
            <li key={a.id} className="lvr-cena contato-card">
              <a href={a.links[0]} target="_blank" rel="me noopener noreferrer">
                <span className="contato-icone"><IconeContato id="linkedin" size={26} /></span>
                <span className="contato-texto"><strong>{a.nome}</strong><span>Perfil no LinkedIn</span></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
