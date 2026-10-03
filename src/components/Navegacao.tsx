import { Link, useNavigate } from 'react-router-dom';
import { Chevron } from './Icones';

export interface Migalha { rotulo: string; para?: string }

/** Botão "Voltar" + trilha de navegação (breadcrumb). `pai` é para onde voltar se não houver histórico. */
export function Navegacao({ trilha, pai }: { trilha: Migalha[]; pai: string }) {
  const nav = useNavigate();
  const temHistorico = (window.history.state?.idx ?? 0) > 0;
  return (
    <div className="navegacao">
      <button type="button" className="voltar" onClick={() => (temHistorico ? nav(-1) : nav(pai))}>
        <Chevron dir="left" /> Voltar
      </button>
      <nav aria-label="Você está em">
        <ol className="trilha-nav">
          {trilha.map((m, i) => (
            <li key={m.rotulo}>
              {i > 0 && <Chevron />}
              {m.para ? <Link to={m.para}>{m.rotulo}</Link> : <span aria-current="page">{m.rotulo}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
