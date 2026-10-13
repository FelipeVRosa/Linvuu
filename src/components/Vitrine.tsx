import { Link } from 'react-router-dom';
import { LIVROS } from '../config/livros';
import { Carrossel } from './Carrossel';
import { useT } from '../i18n';

const VAZIOS = 2;

export function Vitrine() {
  const itens = LIVROS.length ? LIVROS : null;
  const t = useT();
  return (
    <Carrossel rotulo={t.livros.rotulo}>
      {itens
        ? itens.map((l) => {
            const capa = l.capa ? <img src={l.capa} srcSet={`${l.capa} 600w, ${l.capa.replace('-600', '-900')} 900w`} sizes="(max-width: 700px) 240px, 300px" alt={t.livros.capa(l.titulo)} width={600} height={842} loading="lazy" decoding="async" /> : <span className="capa-vazia" />;
            const corpo = (
              <>
                <div className="livro-capa">{capa}</div>
                {l.preco && <span className="livro-preco">{l.preco}</span>}
                <h3>{l.titulo}</h3>
                {l.subtitulo && <p>{l.subtitulo}</p>}
              </>
            );
            // o item da lista é o <div>; o link fica dentro (role="listitem" não é permitido em <a>)
            if (l.link?.startsWith('/')) return <div key={l.titulo} role="listitem"><Link className="livro" to={l.link}>{corpo}</Link></div>;
            return l.link
              ? <div key={l.titulo} role="listitem"><a className="livro" href={l.link} target="_blank" rel="noopener noreferrer">{corpo}</a></div>
              : <div key={l.titulo} className="livro" role="listitem">{corpo}</div>;
          })
        : Array.from({ length: VAZIOS }, (_, i) => (
            <div key={i} className="livro livro-vazio" role="listitem" aria-hidden="true">
              <div className="livro-capa"><span className="capa-vazia" /></div>
              <span className="linha-vazia" style={{ width: '60%' }} />
              <span className="linha-vazia" style={{ width: '85%' }} />
            </div>
          ))}
    </Carrossel>
  );
}
