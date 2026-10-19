import { HomeCourseLink } from './HomeCourseLink';
import { homeText as h, selectionHelp, selectionCount, tryLanguage } from '../i18n/home';
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
    <section className="br-plans-wrap" id="planos"><div className="br-section"><div className="br-section-head"><div><p className="br-eyebrow">{h("SEU OBJETIVO. SEU ESPAÇO PARA CRESCER.")}</p><h2>{h("Quanto do mundo")}<br />{h("você quer conhecer?")}</h2></div><p>{h("Compare a proposta dos novos planos. Depois, explore os idiomas que combinam com você.")}</p></div>
      <p className="br-status">{h(PLANOS_AVISO)}</p>
      <div className="br-plans">{PLANOS_PREVIA.map((p, n) => <article key={h(p.nome)} className={plano === n ? 'br-plan selected' : 'br-plan'}><span className="br-plan-name">{h(p.nome)}</span><h3>{h(p.quantidade)}</h3><p>{h(p.texto)}</p><ul><li>{h("Conteúdo com explicações em português")}</li><li>{h("Áudio e exercícios")}</li><li>{h("Suporte técnico")}</li>{n === 3 && <li>{h(APOIO_PREMIUM)}</li>}</ul><button type="button" className="br-button" aria-pressed={plano === n} onClick={() => escolherPlano(n)}>{plano === n ? h('Selecionado ✓') : h('Explorar este plano')}</button></article>)}</div>
      <p className="br-plan-note">{h("A mesma qualidade de ensino em todos os planos. O nome Intermediário indica a quantidade de idiomas, não o seu nível de conhecimento.")}</p>
      {plano !== null && <div className="br-choose"><h3>{h("Quais idiomas despertam sua curiosidade?")}</h3><p id="br-choose-help">{selectionHelp(h(PLANOS_PREVIA[plano].nome), PLANOS_PREVIA[plano].limite)}</p><div className="br-choices" role="group" aria-describedby="br-choose-help" aria-label={h('Idiomas de interesse')}>{idiomas.map(i => <button key={i.id} type="button" aria-pressed={escolhas.includes(i.id)} disabled={!escolhas.includes(i.id) && escolhas.length >= PLANOS_PREVIA[plano].limite} onClick={() => setEscolhas(v => v.includes(i.id) ? v.filter(x => x !== i.id) : [...v, i.id])}>{h(i.nome)}{escolhas.includes(i.id) ? ' ✓' : ''}</button>)}</div><p aria-live="polite">{selectionCount(escolhas.length, PLANOS_PREVIA[plano].limite)}</p>{escolhas.map(id => <HomeCourseLink key={id} className="br-sample-link" to={`/curso/${id}/dia/1`}>{tryLanguage(h(idiomas.find(i => i.id === id)?.nome ?? ''))}</HomeCourseLink>)}</div>}
      <div className="br-current"><span>{h("Quer consultar a oferta disponível hoje?")}</span><Link to="/assinatura#oferta-atual">{h("Ver assinatura atual →")}</Link></div>
    </div></section>
  );
}
