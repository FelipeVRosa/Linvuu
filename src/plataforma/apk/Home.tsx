import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS, coberturaDoCurso, IDIOMAS_GRAMATICA } from '../../lib/content';
import { pontoDeRetomada, useDiasFeitos, useRetomadaGeral } from '../../lib/retomar';
import { appTextos } from './textos';
import { OndaDeVoz, IconeEstudo } from './Visuais';
import { experiencia, saudacoes } from './experiencia';

export default function Home() {
 const x=experiencia(), a=appTextos(), anterior=useRetomadaGeral();
 const cursos=CURSOS_ATIVOS.filter(c=>coberturaDoCurso(c.id).traduzidas>0);
 const [escolha,setEscolha]=useState(cursos[0]?.id);
 useEffect(()=>{if(anterior && cursos.some(c=>c.id===anterior.idioma))setEscolha(anterior.idioma);},[anterior?.idioma]);
 const curso=cursos.find(c=>c.id===escolha)??cursos[0];
 const feitos=useDiasFeitos(curso?.id);
 const ret=curso?pontoDeRetomada(curso.id):undefined;
 const percentual=ret?Math.round(ret.feitos/ret.total*100):0;
 if(!curso||!ret)return <div className="pagina app-home"><h1>{x.hoje}</h1><p>{a.semCursos}</p></div>;
 return <div className="pagina app-home app-dashboard">
  <header className="app-boasvindas"><p className="app-kicker"><span className="app-ponto" aria-hidden="true" />{x.rotina}</p><h1>{x.hoje}<span className="app-ponto-titulo" aria-hidden="true">.</span></h1><p>{x.saudacao}</p></header>
  <div className="app-idiomas" role="group" aria-label={x.idiomas}>{cursos.map(c=><button type="button" key={c.id} aria-pressed={c.id===curso.id} onClick={()=>setEscolha(c.id)}><span aria-hidden="true">{c.id==='br'?'PT':c.id.toUpperCase()}</span>{c.nome}</button>)}</div>
  <section className="app-missao" aria-labelledby="app-missao-titulo">
   <div className="app-missao-meta"><span className="app-missao-etiqueta">{x.foco}</span><span>{curso.nome}</span></div>
   <OndaDeVoz /><p className="app-saudacao" lang={curso.id==='br'?'pt-BR':curso.id}>{saudacoes[curso.id]}</p>
   <p className="app-missao-sessao">{x.etapa} {ret.dia} <span aria-hidden="true">/</span> {ret.total}</p><h2 id="app-missao-titulo">{ret.titulo}</h2>
   <p className="app-missao-detalhe">{!anterior ? x.guia : x.detalhe}</p>
   <Link className="app-acao-principal" to={`/curso/${curso.id}/dia/${ret.dia}`}><span aria-hidden="true">▶</span>{anterior?.idioma===curso.id||feitos.size?x.continuar:x.comecar}<span aria-hidden="true">→</span></Link>
  </section>
  <section className="app-avanco" aria-labelledby="app-avanco-titulo"><div className="app-avanco-topo"><span><span className="app-kicker">{x.resumo}</span><h2 id="app-avanco-titulo">{a.concluidas(ret.feitos,ret.total)}</h2></span><strong className="app-orbita" style={{'--avanco': `${percentual}%`} as import('react').CSSProperties}>{percentual}<small>%</small></strong></div><progress max={ret.total} value={ret.feitos} aria-label={a.progresso} /><p>{x.sinal}</p></section>
  <div className="app-ferramentas">
   <Link className="app-atalho app-atalho-percurso" to={`/curso/${curso.id}`}><span className="app-atalho-icone"><IconeEstudo tipo="percurso" /></span><span><strong>{x.percurso}</strong><small>{curso.nome} · {ret.total} {x.sessoes}</small></span><span className="app-seta" aria-hidden="true">↗</span></Link>
   {IDIOMAS_GRAMATICA.includes(curso.id) && <Link className="app-atalho" to={`/gramatica/${curso.id}`}><span className="app-atalho-icone"><IconeEstudo tipo="livro" /></span><span><strong>{x.consultar}</strong><small>{x.apoio}</small></span><span className="app-seta" aria-hidden="true">↗</span></Link>}
  </div>
  <p className="app-rodape-teste">{x.teste}</p>
 </div>;
}
