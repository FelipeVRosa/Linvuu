import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS, coberturaDoCurso, type Curso } from '../../lib/content';
import { pontoDeRetomada, useDiasFeitos } from '../../lib/retomar';
import { saudacoes } from './experiencia';
import { useT } from '../../i18n';
import { appTextos } from './textos';
import { usePageTitle } from '../../lib/usePageTitle';
const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
function CursoItem({curso}: {curso: Curso}) {
 const a=appTextos();useDiasFeitos(curso.id);
 const ret=pontoDeRetomada(curso.id),cob=coberturaDoCurso(curso.id);
 return <section><Link className="app-curso-linha" to={`/curso/${curso.id}`}><span className="app-curso-monograma" aria-hidden="true">{curso.id==='br'?'PT':curso.id.toUpperCase()}</span><span><h2>{curso.nome}</h2><span className="app-curso-saudacao" lang={curso.id==='br'?'pt-BR':curso.id}>{saudacoes[curso.id]}</span><small>{a.cobertura(cob.traduzidas,cob.total)}</small>{ret&&ret.feitos>0&&<progress max={ret.total} value={ret.feitos} aria-label={a.progresso}/>}</span><span aria-hidden="true">→</span></Link></section>;
}
export default function Cursos() {
 const t = useT(), a = appTextos(); usePageTitle(t.cursosPagina.titulo);
 const [busca, setBusca] = useState('');
 const encontrados = CURSOS_ATIVOS.filter(c => norm(c.nome + ' ' + c.nomeNativo).includes(norm(busca)));
 const prontos = encontrados.filter(c => coberturaDoCurso(c.id).traduzidas > 0);
 const preparando = encontrados.filter(c => coberturaDoCurso(c.id).traduzidas === 0);
 return <div className="pagina app-catalogo">
  <h1 className="pagina-h1">{t.cursosPagina.titulo}</h1><p>{a.avisoIdiomas}</p>
  <label className="app-busca">{t.cursosPagina.buscar}<input type="search" value={busca} onChange={e => setBusca(e.target.value)} /></label>
  <p role="status">{t.cursosPagina.contagem(prontos.length)}</p>
  {prontos.length > 0 && <div className="app-grade">{prontos.map(c => <CursoItem key={c.id} curso={c}/>)}</div>}
  {!encontrados.length && <div className="vazio"><p>{t.cursosPagina.vazio(busca)}</p><button type="button" className="btn btn-ghost" onClick={() => setBusca('')}>{t.cursosPagina.limpar}</button></div>}
  {preparando.length > 0 && <section className="app-preparando"><h2>{a.preparacao}</h2><ul>{preparando.map(c => <li key={c.id}>{c.nome}</li>)}</ul></section>}
  <p><Link to="/">{t.geral.inicio}</Link></p>
 </div>;
}
