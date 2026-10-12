import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DIAS, diaDoCurso, gruposDoCurso, statusDoCurso, STATUS_AULA } from '../lib/content';
import { diaConcluido, diasConcluidos, marcarDia } from '../lib/progresso';
import { textos } from '../lib/textos';

/** Trilha lateral escura da área do aluno: progresso, aulas em grupos recolhíveis, busca e o dia atual destacado. */
export function AreaAluno({ idioma, nome, dia, children }: { idioma: string; nome: string; dia: number; children: ReactNode }) {
  const T = textos(idioma);
  const stats = statusDoCurso(idioma);
  const grupos = gruposDoCurso(idioma);
  const total = stats?.total ?? 0;
  const [concluidos, setConcluidos] = useState<number[]>([]);
  // No celular a trilha começa recolhida, para a aula aparecer primeiro.
  const [recolhida, setRecolhida] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 900);
  const [busca, setBusca] = useState('');
  const [abertos, setAbertos] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const sync = () => setConcluidos(diasConcluidos(idioma));
    sync();
    window.addEventListener('linvuu:dias', sync);
    return () => window.removeEventListener('linvuu:dias', sync);
  }, [idioma]);

  const grupoAtual = grupos.find((g) => dia >= g.dias[0] && dia <= g.dias[1]);
  const estaAberto = (aula: number) => abertos[aula] ?? aula === grupoAtual?.aula;
  const pct = total ? Math.round((concluidos.length / total) * 100) : 0;
  const termo = busca.trim().toLowerCase();
  const encontrados = termo ? DIAS.filter((m) => m.dia <= total && diaDoCurso(idioma, m).titulo.toLowerCase().includes(termo)) : [];

  const numerosDo = (g: { dias: [number, number] }) => Array.from({ length: g.dias[1] - g.dias[0] + 1 }, (_, k) => g.dias[0] + k);

  const linha = (n: number) => {
    const m = DIAS[n - 1];
    if (!m) return null;
    const d = diaDoCurso(idioma, m);
    const st = stats?.status[n - 1] ?? 'planejada';
    const feito = concluidos.includes(n);
    const atual = n === dia;
    return (
      <li key={n}>
        <Link to={`/curso/${idioma}/dia/${n}`} className={`aa-dia ${atual ? 'atual' : ''} ${feito ? 'feito' : ''}`} aria-current={atual ? 'page' : undefined}>
          <span className="aa-marca" aria-hidden="true">{feito ? '✓' : ''}</span>
          <span className="aa-dia-n">{n}</span>
          <span className="aa-dia-t">{d.titulo}<small>{STATUS_AULA[st]}</small></span>
        </Link>
      </li>
    );
  };

  return (
    <div className="area-aluno" data-recolhida={recolhida || undefined}>
      <aside className="aa-lateral" aria-label={T.trilhaAluno}>
        <div className="aa-topo">
          <div className="aa-titulo">
            <span className="aa-kicker">{T.trilhaAluno}</span>
            <strong>{nome}</strong>
          </div>
          <button type="button" className="aa-recolher" aria-expanded={!recolhida} onClick={() => setRecolhida((x) => !x)} aria-label={recolhida ? T.expandir : T.recolher}>
            {recolhida ? '»' : '«'}
          </button>
        </div>

        {!recolhida && (
          <div className="aa-corpo">
            <div className="aa-progresso">
              <div className="aa-barra" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={concluidos.length} aria-label={T.diasConcluidos(concluidos.length, total)}>
                <span style={{ width: `${pct}%` }} />
              </div>
              <span className="aa-contagem">{T.diasConcluidos(concluidos.length, total)}</span>
            </div>

            <label className="aa-busca">
              <span className="sr-only">{T.buscarDia}</span>
              <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder={T.buscarDia} />
            </label>

            {termo ? (
              <ol className="aa-lista">
                {encontrados.map((m) => linha(m.dia))}
                {encontrados.length === 0 && <li className="aa-vazio">{T.semDias}</li>}
              </ol>
            ) : (
              grupos.map((g) => (
                <section key={g.aula} className="aa-grupo">
                  <button type="button" className="aa-grupo-topo" aria-expanded={estaAberto(g.aula)} onClick={() => setAbertos((x) => ({ ...x, [g.aula]: !estaAberto(g.aula) }))}>
                    <span className="aa-grupo-t">
                      <small>Aula {g.aula}</small>
                      {g.titulo}
                    </span>
                    <span className="aa-grupo-n">
                      {numerosDo(g).filter((n) => concluidos.includes(n)).length}/{g.dias[1] - g.dias[0] + 1}
                    </span>
                    <span className={`aa-seta ${estaAberto(g.aula) ? 'aberta' : ''}`} aria-hidden="true">›</span>
                  </button>
                  {estaAberto(g.aula) && (
                    <ol className="aa-lista">
                      {numerosDo(g).map((n) => linha(n))}
                    </ol>
                  )}
                </section>
              ))
            )}
          </div>
        )}
      </aside>

      <div className="aa-conteudo">{children}</div>
    </div>
  );
}

/** Botão de conclusão do dia: marca e desmarca, e mostra o estado na hora. */
export function MarcarDia({ idioma, dia }: { idioma: string; dia: number }) {
  const T = textos(idioma);
  const [feito, setFeito] = useState(false);
  useEffect(() => {
    const sync = () => setFeito(diaConcluido(idioma, dia));
    sync();
    window.addEventListener('linvuu:dias', sync);
    return () => window.removeEventListener('linvuu:dias', sync);
  }, [idioma, dia]);
  return (
    <button type="button" className={`btn ${feito ? 'btn-ok' : 'btn-primary'} aa-marcar`} aria-pressed={feito} onClick={() => marcarDia(idioma, dia, !feito)}>
      {feito ? `✓ ${T.concluidoDia}` : T.marcarConcluido}
    </button>
  );
}
