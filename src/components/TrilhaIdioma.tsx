import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS, FASES, NIVEL_CURTO, NIVEL_LABEL, getCurso, gruposDoCurso, statusDoCurso } from '../lib/content';
import { Bandeira } from './Bandeira';

type Grupo = { aula: number; titulo: string; nivel?: string; dias: [number, number] };
type Bloco = { chave: string; aulas: Grupo[]; sessoes: number; primeiroDia: number };

/** Junta aulas seguidas do mesmo nível (o nível «zero» entra no A1). */
function blocosDe(grupos: Grupo[]): Bloco[] {
  const out: Bloco[] = [];
  for (const g of grupos) {
    const chave = !g.nivel || g.nivel === 'zero' ? 'a1' : g.nivel;
    const ult = out[out.length - 1];
    const sessoes = g.dias[1] - g.dias[0] + 1;
    if (ult && ult.chave === chave) { ult.aulas.push(g); ult.sessoes += sessoes; }
    else out.push({ chave, aulas: [g], sessoes, primeiroDia: g.dias[0] });
  }
  return out;
}

/** Blocos que já têm aulas no ar, mas ainda não estão completos. */
const EM_CONSTRUCAO: Record<string, string[]> = { de: ['b2'] };

const horas = (sessoes: number) => (sessoes / 2).toLocaleString('pt-BR', { maximumFractionDigits: 1 });

export function TrilhaIdioma() {
  const idiomas = CURSOS.filter((c) => c.area === 'idiomas');
  const comAulas = idiomas.filter((c) => gruposDoCurso(c.id).length > 0);
  const [sel, setSel] = useState(comAulas[0]?.id ?? idiomas[0]?.id);
  const curso = getCurso(sel);
  const grupos = gruposDoCurso(sel);
  const blocos = useMemo(() => blocosDe(grupos), [grupos]);
  const stats = statusDoCurso(sel);
  const lista = useRef<HTMLOListElement>(null);

  // Revela os blocos ao rolar; sem animação para quem prefere menos movimento.
  useEffect(() => {
    const els = Array.from(lista.current?.querySelectorAll<HTMLElement>('.nivel-bloco') ?? []);
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduz || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('visivel')); return; }
    els.forEach((e) => e.classList.remove('visivel'));
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visivel'); io.unobserve(en.target); } }), { threshold: 0.15 });
    els.forEach((e, i) => { e.style.transitionDelay = `${i * 90}ms`; io.observe(e); });
    return () => io.disconnect();
  }, [sel, blocos.length]);

  if (!curso) return null;
  const total = stats?.total ?? 0;
  const aberto = (chave: string) => EM_CONSTRUCAO[curso.id]?.includes(chave) ?? false;
  const completos = blocos.filter((b) => !aberto(b.chave));
  const ate = completos.length ? completos[completos.length - 1].chave : blocos[blocos.length - 1]?.chave;

  return (
    <div className="trilha-idioma">
      <div className="trilha-abas" role="tablist" aria-label="Idioma da trilha">
        {idiomas.map((c) => {
          const n = statusDoCurso(c.id)?.publicadas ?? 0;
          return (
            <button key={c.id} role="tab" aria-selected={c.id === sel} className={`trilha-aba${c.id === sel ? ' ativa' : ''}`} onClick={() => setSel(c.id)}>
              <Bandeira id={c.id} size={22} />
              <span className="aba-nome">{c.nome}</span>
              <small>{n > 0 ? `${n} sessões` : 'em preparação'}</small>
            </button>
          );
        })}
      </div>

      {blocos.length > 0 ? (
        <>
          <p className="trilha-resumo">
            <strong>{curso.nome}</strong>: {grupos.length} aulas, {total} sessões de ~30 min (cerca de {horas(total)} h), de {NIVEL_CURTO[blocos[0].chave] ?? 'A1'} a {NIVEL_CURTO[ate ?? ''] ?? ''}{completos.length < blocos.length ? ', com o início do B2 já no ar' : ''}.
          </p>
          <ol className="trilha-niveis" ref={lista}>
            {blocos.map((b, i) => (
              <li key={b.chave + i} className="nivel-bloco">
                <span className="nivel-ponto" aria-hidden="true" />
                <div className="nivel-cartao">
                  <div className="nivel-topo">
                    <span className="fase-nivel">{NIVEL_CURTO[b.chave] ?? b.chave.toUpperCase()}</span>
                    <h3>{NIVEL_LABEL[b.chave] ?? b.chave}</h3>
                    {aberto(b.chave) && <span className="fase-nivel">em construção</span>}
                  </div>
                  <p className="nivel-meta">Aulas {b.aulas[0].aula} a {b.aulas[b.aulas.length - 1].aula} · {b.sessoes} sessões · {horas(b.sessoes)} h</p>
                  <div className="nivel-acoes">
                    <Link className="btn-mini" to={`/curso/${curso.id}/dia/${b.primeiroDia}`}>Começar este bloco →</Link>
                  </div>
                  <details>
                    <summary>Ver as {b.aulas.length} aulas</summary>
                    <ol className="nivel-aulas">
                      {b.aulas.map((a) => (
                        <li key={a.aula}><Link to={`/curso/${curso.id}/dia/${a.dias[0]}`}><span>{a.aula}</span>{a.titulo}</Link></li>
                      ))}
                    </ol>
                  </details>
                </div>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <>
          <p className="trilha-resumo"><strong>{curso.nome}</strong> ainda está em preparação. Este é o plano-mestre: doze fases, cada uma terminando em revisão. As aulas reais vão substituir este esboço, no mesmo método do alemão e do russo.</p>
          <ol className="fases">
            {FASES.map((f) => (
              <li key={f.id}><span className="fase-dias">Sessões {f.dias[0]}–{f.dias[1]}</span><h3>{f.titulo}</h3><p>{f.resumo}</p><span className="fase-nivel">{NIVEL_CURTO[f.nivel]}</span></li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
