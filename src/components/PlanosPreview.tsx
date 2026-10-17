import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLANOS_PREVIA, PLANOS_AVISO, APOIO_PREMIUM } from '../config/oferta-publica';
import '../pages/home-brasileiros.css';
const idiomas = [{id:'en',nome:'Inglês'},{id:'es',nome:'Espanhol'},{id:'fr',nome:'Francês'},{id:'it',nome:'Italiano'},{id:'de',nome:'Alemão'},{id:'ru',nome:'Russo'}];
/** Prévia local de interesse. Não grava conta, não concede acesso e não inicia checkout. */
export function PlanosPreview() {
  const [plano, setPlano] = useState<number | null>(null);
  const [escolhas, setEscolhas] = useState<string[]>([]);
  const escolherPlano = (n: number) => { setPlano(n); setEscolhas([]); };
  return (
    <section className="br-plans-wrap" id="planos"><div className="br-section"><div className="br-section-head"><div><p className="br-eyebrow">SEU OBJETIVO. SEU ESPAÇO PARA CRESCER.</p><h2>Quanto do mundo<br />você quer conhecer?</h2></div><p>Compare a proposta dos novos planos. Depois, explore os idiomas que combinam com você.</p></div>
      <p className="br-status">{PLANOS_AVISO}</p>
      <div className="br-plans">{PLANOS_PREVIA.map((p, n) => <article key={p.nome} className={plano === n ? 'br-plan selected' : 'br-plan'}><span className="br-plan-name">{p.nome}</span><h3>{p.quantidade}</h3><p>{p.texto}</p><ul><li>Conteúdo com explicações em português</li><li>Áudio e exercícios</li><li>Suporte técnico</li>{n === 3 && <li>{APOIO_PREMIUM}</li>}</ul><button type="button" className="br-button" aria-pressed={plano === n} onClick={() => escolherPlano(n)}>{plano === n ? 'Selecionado ✓' : 'Explorar este plano'}</button></article>)}</div>
      <p className="br-plan-note">A mesma qualidade de ensino em todos os planos. O nome Intermediário indica a quantidade de idiomas, não o seu nível de conhecimento.</p>
      {plano !== null && <div className="br-choose"><h3>Quais idiomas despertam sua curiosidade?</h3><p id="br-choose-help">{PLANOS_PREVIA[plano].nome}: escolha até {PLANOS_PREVIA[plano].limite} {PLANOS_PREVIA[plano].limite === 1 ? 'idioma' : 'idiomas'} para explorar. Esta é uma prévia, sem contratação.</p><div className="br-choices" role="group" aria-describedby="br-choose-help" aria-label="Idiomas de interesse">{idiomas.map(i => <button key={i.id} type="button" aria-pressed={escolhas.includes(i.id)} disabled={!escolhas.includes(i.id) && escolhas.length >= PLANOS_PREVIA[plano].limite} onClick={() => setEscolhas(v => v.includes(i.id) ? v.filter(x => x !== i.id) : [...v, i.id])}>{i.nome}{escolhas.includes(i.id) ? ' ✓' : ''}</button>)}</div><p aria-live="polite">{escolhas.length} de {PLANOS_PREVIA[plano].limite} selecionados</p>{escolhas.map(id => <Link key={id} className="br-sample-link" to={`/curso/${id}/dia/1`}>Experimentar {idiomas.find(i => i.id === id)?.nome} →</Link>)}</div>}
      <div className="br-current"><span>Quer consultar a oferta disponível hoje?</span><Link to="/assinatura#oferta-atual">Ver assinatura atual →</Link></div>
    </div></section>
  );
}
