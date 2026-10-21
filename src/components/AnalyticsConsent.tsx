import {useEffect,useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {LOCALE} from '../i18n';
import {analytics,rotaAnalytics,type AnalyticsChoice} from '../lib/analytics';
import './analytics-consent.css';
const texts={
 'pt-BR':{title:'Preferências de análise',text:'Podemos usar o PostHog para entender a navegação e melhorar as aulas? Enviamos eventos com um identificador aleatório deste aparelho, sem nome, e-mail ou respostas. Não gravamos a tela. É opcional e você pode mudar sua escolha aqui.',yes:'Permitir análise',no:'Não permitir',privacy:'Privacidade',saved:'Preferência salva.'},
 en:{title:'Analytics preferences',text:'May we use PostHog to understand navigation and improve lessons? We send events with a random device identifier, without your name, email or answers. We do not record your screen. This is optional; you can change your choice here.',yes:'Allow analytics',no:'Decline analytics',privacy:'Privacy',saved:'Preference saved.'},
 es:{title:'Preferencias de análisis',text:'¿Podemos usar PostHog para entender la navegación y mejorar las clases? Enviamos eventos con un identificador aleatorio de este dispositivo, sin nombre, correo ni respuestas. No grabamos la pantalla. Es opcional y puedes cambiar tu elección aquí.',yes:'Permitir análisis',no:'No permitir',privacy:'Privacidad',saved:'Preferencia guardada.'}
};
export function AnalyticsConsent(){
 const t=texts[LOCALE.codigo],{pathname}=useLocation(),[choice,setChoice]=useState<AnalyticsChoice>(()=>analytics.choice());
 useEffect(()=>{if(choice!=='yes')return;const props=rotaAnalytics(pathname);if(!props)return;void analytics.capture('page_viewed',props);if(props.page==='course')void analytics.capture('course_viewed',props);if(props.page==='lesson')void analytics.capture('lesson_started',props);},[pathname,choice]);
 if(!analytics.configured())return null;
 const choose=(v:'yes'|'no')=>{analytics.choose(v);setChoice(analytics.choice());};
 return <aside className="analytics-consent" data-pending={choice===null} aria-label={t.title}><details open={choice===null}><summary>{t.title}</summary><p>{t.text} <Link to="/privacidade">{t.privacy}</Link></p><div className="analytics-actions"><button type="button" className="btn btn-ghost" aria-pressed={choice==='yes'} onClick={()=>choose('yes')}>{t.yes}</button><button type="button" className="btn btn-ghost" aria-pressed={choice==='no'} onClick={()=>choose('no')}>{t.no}</button></div></details>{choice&&<span className="sr-only" role="status">{t.saved}</span>}</aside>;
}
