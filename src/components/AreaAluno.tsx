import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DIAS, IDIOMAS_GRAMATICA, diaDoCurso, gruposDoCurso, statusDoCurso, STATUS_AULA } from '../lib/content';
import { diaConcluido, diasConcluidos, marcarDia } from '../lib/progresso';
import { salvarDiaConta, sincronizarConta } from '../lib/progressoConta';
import { useAuth } from '../lib/AuthContext';
import { textos } from '../lib/textos';
import { definirSons, EVENTO_SONS, somClique, somConcluido, sonsLigados } from '../lib/sons';
import { Traco } from './Traco';

export type Tema = 'claro' | 'escuro';
const CHAVE_TEMA = 'linvuu:tema-aluno';
const lerTema = (): Tema => {
  try { return localStorage.getItem(CHAVE_TEMA) === 'escuro' ? 'escuro' : 'claro'; } catch { return 'claro'; }
};

/** Trilha lateral da área do aluno: saudação, progresso, aulas recolhíveis, busca, tema e atalho para a gramática. */
export function AreaAluno({ idioma, nome, dia, children }: { idioma: string; nome: string; dia: number; children: ReactNode }) {
  const T = textos(idioma);
  const { usuario } = useAuth();
  const stats = statusDoCurso(idioma);
  const grupos = gruposDoCurso(idioma);
  const total = stats?.total ?? 0;
  const [concluidos, setConcluidos] = useState<number[]>([]);
  // No celular a trilha começa recolhida, para a aula aparecer primeiro.
  const [recolhida, setRecolhida] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 900);
  const [busca, setBusca] = useState('');
  const [abertos, setAbertos] = useState<Record<number, boolean>>({});
  const [tema, setTema] = useState<Tema>(lerTema);
  const [avisoTema, setAvisoTema] = useState('');
  const [sons, setSons] = useState(sonsLigados);
  // Ao concluir um dia, o traço da barra desenha de novo. A primeira leitura (ao abrir a página) não desenha.
  const [desenho, setDesenho] = useState(0);
  const anterior = useRef<number | null>(null);

  useEffect(() => {
    const sync = () => {
      const novos = diasConcluidos(idioma);
      setConcluidos(novos);
      if (anterior.current !== null && novos.length > anterior.current) setDesenho((d) => d + 1);
      anterior.current = novos.length;
    };
    sync();
    window.addEventListener('linvuu:dias', sync);
    return () => window.removeEventListener('linvuu:dias', sync);
  }, [idioma]);

  useEffect(() => {
    const sync = () => setSons(sonsLigados());
    window.addEventListener(EVENTO_SONS, sync);
    return () => window.removeEventListener(EVENTO_SONS, sync);
  }, []);

  // Quem entrou na conta traz o progresso de outros aparelhos.
  useEffect(() => {
    if (usuario) sincronizarConta(idioma);
  }, [usuario, idioma]);

  const escolherTema = (t: Tema) => {
    setTema(t);
    setAvisoTema(T.temaAlterado(t === 'escuro' ? T.escuro : T.claro));
    try { localStorage.setItem(CHAVE_TEMA, t); } catch { /* sem armazenamento */ }
    somClique();
  };

  const alternarSons = () => {
    const novo = !sons;
    definirSons(novo);
    setSons(novo);
    if (novo) somClique();
  };

  const grupoAtual = grupos.find((g) => dia >= g.dias[0] && dia <= g.dias[1]);
  const estaAberto = (aula: number) => abertos[aula] ?? aula === grupoAtual?.aula;
  const pct = total ? Math.round((concluidos.length / total) * 100) : 0;
  const termo = busca.trim().toLowerCase();
  const todosOsDias = Array.from({ length: total }, (_, k) => k + 1);
  const encontrados = termo ? todosOsDias.filter((n) => diaDoCurso(idioma, DIAS[n - 1] ?? { dia: n, fase: 0, nivel: 'a2' as const, titulo: '', objetivo: '' }).titulo.toLowerCase().includes(termo)) : [];
  const numerosDo = (g: { dias: [number, number] }) => Array.from({ length: g.dias[1] - g.dias[0] + 1 }, (_, k) => g.dias[0] + k);
  const primeiroNome = usuario?.nome.split(/\s+/)[0];
  const temGramatica = IDIOMAS_GRAMATICA.includes(idioma);

  const linha = (n: number) => {
    // A trilha-mestre tem 120 dias; cursos com aulas escritas vão além (ex.: russo, 312). Mesmo fallback de Curso.tsx.
    const m = DIAS[n - 1] ?? { dia: n, fase: Math.ceil(n / 10), nivel: 'a2' as const, titulo: '', objetivo: '' };
    const d = diaDoCurso(idioma, m);
    const st = stats?.status[n - 1] ?? 'planejada';
    const feito = concluidos.includes(n);
    const atual = n === dia;
    return (
      <li key={n}>
        <Link to={`/curso/${idioma}/dia/${n}`} className={`aa-dia ${atual ? 'atual' : ''} ${feito ? 'feito' : ''}`} aria-current={atual ? 'page' : undefined}>
          <span className="aa-marca" aria-hidden="true">{feito ? '✓' : ''}</span>
          <span className="aa-dia-n">{n}</span>
          <span className="aa-dia-t">{d.titulo}<small>{feito ? T.concluidoDia : STATUS_AULA[st]}</small></span>
        </Link>
      </li>
    );
  };

  return (
    <div className="area-aluno" data-recolhida={recolhida || undefined} data-tema={tema}>
      <p className="sr-only" role="status" aria-live="polite">{avisoTema}</p>
      <aside className="aa-lateral" aria-label={T.trilhaAluno}>
        <div className="aa-topo">
          <div className="aa-titulo">
            <span className="aa-kicker">{T.trilhaAluno} · {nome}</span>
            <strong>{primeiroNome ? T.olaNome(primeiroNome) : T.ola}</strong>
          </div>
          <button type="button" className="aa-recolher" aria-expanded={!recolhida} onClick={() => setRecolhida((x) => !x)} aria-label={recolhida ? T.expandir : T.recolher}>
            {recolhida ? '»' : '«'}
          </button>
        </div>

        {!recolhida && (
          <div className="aa-corpo">
            <div className="aa-progresso">
              <div className="aa-barra" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={concluidos.length} aria-label={T.diasConcluidos(concluidos.length, total)}>
                <Traco key={desenho} valor={pct / 100} altura={14} semente={7} trilha animar={desenho > 0} />
              </div>
              <span className="aa-contagem">{T.diasConcluidos(concluidos.length, total)}</span>
              <p className="aa-acalma">{T.acalma(dia, total)}</p>
            </div>

            <div className="aa-linha-acoes">
              <div className="aa-tema" role="group" aria-label={T.tema} data-ativo={tema}>
                <button type="button" aria-pressed={tema === 'claro'} onClick={() => escolherTema('claro')}>{T.claro}</button>
                <button type="button" aria-pressed={tema === 'escuro'} onClick={() => escolherTema('escuro')}>{T.escuro}</button>
              </div>
              <button type="button" className="aa-sons" aria-pressed={sons} onClick={alternarSons}>{T.sonsRotulo}: {sons ? T.sonsLig : T.sonsDesl}</button>
              {temGramatica && <Link className="aa-gramatica" to={`/gramatica/${idioma}`}>{T.gramaticaDo(nome)} →</Link>}
            </div>

            <label className="aa-busca">
              <span className="sr-only">{T.buscarDia}</span>
              <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder={T.buscarDia} />
            </label>

            {termo ? (
              <ol className="aa-lista">
                {encontrados.map((n) => linha(n))}
                {encontrados.length === 0 && <li className="aa-vazio">{T.semDias}</li>}
              </ol>
            ) : (
              grupos.map((g) => (
                <section key={g.aula} className="aa-grupo">
                  <button type="button" className="aa-grupo-topo" aria-expanded={estaAberto(g.aula)} onClick={() => setAbertos((x) => ({ ...x, [g.aula]: !estaAberto(g.aula) }))}>
                    <span className="aa-grupo-t">
                      <small>{T.aula(g.aula)}</small>
                      {g.titulo}
                    </span>
                    <span className="aa-grupo-n">
                      {numerosDo(g).filter((n) => concluidos.includes(n)).length}/{g.dias[1] - g.dias[0] + 1}
                    </span>
                    <span className={`aa-seta ${estaAberto(g.aula) ? 'aberta' : ''}`} aria-hidden="true">›</span>
                  </button>
                  {estaAberto(g.aula) && <ol className="aa-lista">{numerosDo(g).map((n) => linha(n))}</ol>}
                </section>
              ))
            )}
          </div>
        )}
      </aside>

      <div className="aa-conteudo" key={`${idioma}-${dia}`}>{children}</div>
    </div>
  );
}

/** Botão de conclusão do dia: marca e desmarca, salva na conta quando há login e mostra um reforço curto. */
export function MarcarDia({ idioma, dia }: { idioma: string; dia: number }) {
  const T = textos(idioma);
  const { usuario } = useAuth();
  const [feito, setFeito] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  useEffect(() => {
    const sync = () => setFeito(diaConcluido(idioma, dia));
    sync();
    window.addEventListener('linvuu:dias', sync);
    return () => window.removeEventListener('linvuu:dias', sync);
  }, [idioma, dia]);

  const clicar = () => {
    const novo = !feito;
    marcarDia(idioma, dia, novo);
    if (usuario) salvarDiaConta(idioma, dia, novo);
    if (!novo) { setAviso(null); return; }
    const total = statusDoCurso(idioma)?.total ?? 0;
    const feitos = new Set([...diasConcluidos(idioma), dia]);
    const grupo = gruposDoCurso(idioma).find((g) => dia >= g.dias[0] && dia <= g.dias[1]);
    const aulaFechada = !!grupo && Array.from({ length: grupo.dias[1] - grupo.dias[0] + 1 }, (_, k) => grupo.dias[0] + k).every((n) => feitos.has(n));
    setAviso(aulaFechada ? T.msgAula : T.msgDia(feitos.size, total));
    somConcluido();
  };

  return (
    <div className="aa-marcar-bloco">
      <button type="button" className={`btn ${feito ? 'btn-ok' : 'btn-primary'} aa-marcar`} aria-pressed={feito} onClick={clicar}>
        {feito ? `✓ ${T.concluidoDia}` : T.marcarConcluido}
      </button>
      {aviso && <p className="aa-aviso" role="status">{aviso}</p>}
      {!usuario && <p className="aa-aviso-leve">{T.entrarProgresso}</p>}
    </div>
  );
}
