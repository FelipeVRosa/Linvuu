import { useState } from 'react';
import { DEPOIMENTOS, Depoimento } from '../config/equipe';
import { Carrossel } from './Carrossel';
import { IconeAspas } from './Icones';

const LIMITE = 190;

function Cartao({ d }: { d: Depoimento }) {
  const [aberto, setAberto] = useState(false);
  const longo = d.texto.length > LIMITE;
  return (
    <figure className="avaliacao" role="listitem">
      <div className="avaliacao-corpo">
        <span className="aspas"><IconeAspas /></span>
        <blockquote className={longo && !aberto ? 'recortado' : ''}>{d.texto}</blockquote>
        {longo && <button type="button" className="link" aria-expanded={aberto} onClick={() => setAberto((v) => !v)}>{aberto ? 'Ver menos' : 'Ver mais'}</button>}
      </div>
      <figcaption>
        {d.foto ? <img src={d.foto} alt="" loading="lazy" /> : <span className="avatar-inicial" aria-hidden="true">{d.nome.slice(0, 1)}</span>}
        <span><strong>{d.nome}</strong>{(d.local || d.curso) && <small>{[d.local, d.curso].filter(Boolean).join(' · ')}</small>}</span>
      </figcaption>
    </figure>
  );
}

export function Avaliacoes() {
  const vazio = DEPOIMENTOS.length === 0;
  return (
    <>
      <Carrossel rotulo="Avaliações de alunos">
        {vazio
          ? [0, 1, 2].map((i) => (
              <div key={i} className="avaliacao avaliacao-vazia" role="listitem" aria-hidden="true">
                <div className="avaliacao-corpo">
                  <span className="aspas"><IconeAspas /></span>
                  <span className="linha-vazia" /><span className="linha-vazia" /><span className="linha-vazia" style={{ width: '55%' }} />
                </div>
                <div className="avaliacao-pe"><span className="avatar-vazio" /><span><span className="linha-vazia" style={{ width: 90 }} /><span className="linha-vazia" style={{ width: 60 }} /></span></div>
              </div>
            ))
          : DEPOIMENTOS.map((d) => <Cartao key={d.nome + d.texto.slice(0, 12)} d={d} />)}
      </Carrossel>
      {vazio && <p className="nota-vazio">As primeiras avaliações de alunos reais chegam em breve.</p>}
    </>
  );
}
