import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CURSOS_ATIVOS as CURSOS } from '../lib/content';
import { CursoCard } from '../components/CursoCard';
import { Navegacao } from '../components/Navegacao';
import { usePageTitle } from '../lib/usePageTitle';

const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export default function Cursos() {
  usePageTitle('Cursos');
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
    <div className="pagina">
      <Navegacao pai="/" trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: 'Cursos' }]} />
      <h1 className="pagina-h1">Todos os cursos</h1>
      <div className="filtros">
        <div className="search-field filtro-busca">
          <label htmlFor="q">Buscar</label>
          <input id="q" type="search" value={q} placeholder="Ex.: russo, francês" onChange={(e) => set('q', e.target.value)} />
        </div>
      </div>
      <p className="nota"><Link to="/portugues">Português para estrangeiros · Portuguese as a Foreign Language →</Link></p>
      <p className="resultado" aria-live="polite">{lista.length} {lista.length === 1 ? 'curso' : 'cursos'}</p>
      {lista.length > 0
        ? <div className="curso-grid">{lista.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
        : <p className="vazio">Nenhum curso encontrado para "{q}". Tente outra palavra ou <button type="button" className="link" onClick={() => setParams({}, { replace: true })}>limpe os filtros</button>.</p>}
    </div>
  );
}
