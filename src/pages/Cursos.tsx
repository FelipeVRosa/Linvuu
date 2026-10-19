import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CURSOS_ATIVOS as CURSOS } from '../lib/content';
import { CursoCard } from '../components/CursoCard';
import { Navegacao } from '../components/Navegacao';
import { usePageTitle } from '../lib/usePageTitle';
import { LOCALE, useT } from '../i18n';
import '../site-publico.css';

const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export default function Cursos() {
  const t = useT();
  usePageTitle(t.cursosPagina.titulo);
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';

  const lista = useMemo(() => CURSOS.filter((c) => {
    if (!q) return true;
    return norm(`${c.nome} ${c.nomeNativo} ${c.descricao}`).includes(norm(q));
  }), [q]);

  const set = (k: string, v: string) => {
    const p = new URLSearchParams(params);
    if (v && v !== 'todos') p.set(k, v); else p.delete(k);
    setParams(p, { replace: true });
  };

  return (
    <div className={LOCALE.codigo === 'pt-BR' ? 'pagina site-publico site-catalogo' : 'pagina'}>
      <Navegacao pai="/" trilha={[{ rotulo: t.geral.inicio, para: '/' }, { rotulo: t.geral.cursos }]} />
      {LOCALE.codigo === 'pt-BR' ? <header className="site-intro"><div><p className="site-eyebrow">UM NOVO IDIOMA. UM NOVO CAMINHO.</p><h1 className="pagina-h1">Seu próximo “olá”<br />começa aqui.</h1><p className="site-lead">Escolha uma língua que combina com seus planos. As explicações são em português; a próxima descoberta é sua.</p></div><aside className="site-aside"><strong>Conheça antes de decidir.</strong><p>Experimente as duas primeiras aulas de cada curso, sem cartão.</p><Link to="/#planos">Comparar os novos planos →</Link></aside></header> : <h1 className="pagina-h1">{t.cursosPagina.titulo}</h1>}
      <div className="filtros">
        <div className="search-field filtro-busca">
          <label htmlFor="q">{t.cursosPagina.buscar}</label>
          <input id="q" type="search" value={q} placeholder={t.cursosPagina.exemplo} onChange={(e) => set('q', e.target.value)} />
        </div>
      </div>
      <p className="nota"><Link to="/portugues">{t.cursosPagina.portugues}</Link></p>
      <p className="resultado" aria-live="polite">{t.cursosPagina.contagem(lista.length)}</p>
      {lista.length > 0
        ? <div className="curso-grid">{lista.map((c) => <CursoCard key={c.id} curso={c} nivel={2} />)}</div>
        : <p className="vazio">{t.cursosPagina.vazio(q)} <button type="button" className="link" onClick={() => setParams({}, { replace: true })}>{t.cursosPagina.limpar}</button>.</p>}
    </div>
  );
}
