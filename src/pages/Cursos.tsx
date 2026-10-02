import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CURSOS } from '../lib/content';
import { CursoCard } from '../components/CursoCard';
import { usePageTitle } from '../lib/usePageTitle';

const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export default function Cursos() {
  usePageTitle('Cursos');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const area = params.get('area') ?? 'todos';

  const lista = useMemo(() => CURSOS.filter((c) => {
    if (area !== 'todos' && c.area !== area) return false;
    if (!q) return true;
    return norm(`${c.nome} ${c.nomeNativo} ${c.descricao}`).includes(norm(q));
  }), [q, area]);

  const set = (k: string, v: string) => {
    const p = new URLSearchParams(params);
    if (v && v !== 'todos') p.set(k, v); else p.delete(k);
    setParams(p, { replace: true });
  };

  return (
    <div className="pagina">
      <h1 className="pagina-h1">Todos os cursos</h1>
      <div className="filtros">
        <div className="chips" role="group" aria-label="Área">
          {['todos', 'idiomas', 'stem'].map((a) => (
            <button key={a} type="button" className={area === a ? 'on' : ''} aria-pressed={area === a} onClick={() => set('area', a)}>
              {a === 'todos' ? 'Todos' : a === 'idiomas' ? 'Idiomas' : 'STEM'}
            </button>
          ))}
        </div>
        <div className="search-field filtro-busca">
          <label htmlFor="q">Buscar</label>
          <input id="q" type="search" value={q} placeholder="Ex.: russo, física" onChange={(e) => set('q', e.target.value)} />
        </div>
      </div>
      <p className="resultado" aria-live="polite">{lista.length} {lista.length === 1 ? 'curso' : 'cursos'}</p>
      {lista.length > 0
        ? <div className="curso-grid">{lista.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
        : <p className="vazio">Nenhum curso encontrado para "{q}". Tente outra palavra ou <button type="button" className="link" onClick={() => setParams({}, { replace: true })}>limpe os filtros</button>.</p>}
    </div>
  );
}
