import { LIVROS } from '../config/livros';
import { Carrossel } from './Carrossel';

const VAZIOS = 2;

export function Vitrine() {
  const itens = LIVROS.length ? LIVROS : null;
  return (
    <Carrossel rotulo="Livros da Linvuu">
      {itens
        ? itens.map((l) => {
            const capa = l.capa ? <img src={l.capa} alt={`Capa de ${l.titulo}`} loading="lazy" /> : <span className="capa-vazia" />;
            const corpo = (
              <>
                <div className="livro-capa">{capa}</div>
                {l.preco && <span className="livro-preco">{l.preco}</span>}
                <h3>{l.titulo}</h3>
                {l.subtitulo && <p>{l.subtitulo}</p>}
              </>
            );
            return l.link
              ? <a key={l.titulo} className="livro" role="listitem" href={l.link} target="_blank" rel="noopener noreferrer">{corpo}</a>
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
