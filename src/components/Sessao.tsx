import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bloco, Exercicio, Palavra, ROTULO_BLOCO, SessaoAula } from '../lib/aulas';
import { falar, falarLista, parar, temVoz } from '../lib/audio';
import { chaveSessao, lerSessao, salvarSessao } from '../lib/progresso';

const norm = (s: string) => s.toLowerCase().replace(/ё/g, 'е').replace(/[.,!?«»—…:;"'()]/g, '').replace(/\s+/g, ' ').trim();
const ROTULO_COLUNA: Record<string, string> = { pt: 'Português', nominativo: 'Nominativo', acusativo: 'Acusativo', exemplo: 'Exemplo', pronome: 'Pronome', forma: 'Forma', singular: 'Singular', plural: 'Plural' };

function Audio({ texto, idioma, rotulo = 'Ouvir' }: { texto: string; idioma: string; rotulo?: string }) {
  return (
    <button type="button" className="som" aria-label={`${rotulo}: ${texto}`} onClick={() => falar(texto, idioma)}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></svg>
    </button>
  );
}

function Palavras({ itens, idioma }: { itens: Palavra[]; idioma: string }) {
  const unicos = useMemo(() => itens.filter((p, i) => itens.findIndex((q) => norm(q.ru) === norm(p.ru)) === i), [itens]);
  return (
    <ul className="palavras">
      {unicos.map((p) => (
        <li key={p.ru}>
          <div><strong lang={idioma} className="ru">{p.ru}</strong><span className="translit">{p.translit}</span></div>
          <div className="trad">{p.pt}{p.en && <small> · {p.en}</small>}{p.ainda && <span className="ainda" title={`Tem letras que você ainda vai aprender (${p.ainda.join(', ')}). Por enquanto, ouça e repita.`}>ouça e repita</span>}</div>
          <Audio texto={p.audio ?? p.ru} idioma={idioma} />
        </li>
      ))}
    </ul>
  );
}

function Tabela({ linhas }: { linhas: Record<string, string>[] }) {
  const cols = Object.keys(linhas[0] ?? {});
  return (
    <div className="tabela-rolagem">
      <table className="tabela">
        <thead><tr>{cols.map((c) => <th key={c}>{ROTULO_COLUNA[c] ?? c}</th>)}</tr></thead>
        <tbody>{linhas.map((l, i) => <tr key={i}>{cols.map((c) => <td key={c} lang={c === 'pt' ? 'pt' : undefined}>{l[c]}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Exercicios({ itens, idioma }: { itens: Exercicio[]; idioma: string }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [ordem, setOrdem] = useState<number[]>([]);
  const [texto, setTexto] = useState('');
  const [res, setRes] = useState<'ok' | 'erro' | 'livre' | null>(null);
  const [acertos, setAcertos] = useState<Record<string, boolean>>({});
  const [fim, setFim] = useState(false);
  const ex = itens[i];
  const corrigiveis = itens.filter((x) => x.tipo !== 'producao');

  const verificar = () => {
    let ok = false;
    if (ex.tipo === 'producao') { setRes('livre'); return; }
    if (ex.tipo === 'sentence-ordering') ok = norm(ordem.map((k) => ex.opcoes![k]).join(' ')) === norm(ex.gabarito ?? '');
    else if (ex.opcoes && ex.gabarito !== undefined) ok = escolha === ex.gabarito;
    else ok = norm(texto) === norm(ex.respostaEsperada ?? '');
    setAcertos((a) => ({ ...a, [ex.id]: ok }));
    setRes(ok ? 'ok' : 'erro');
  };
  const avancar = () => {
    setEscolha(null); setOrdem([]); setTexto(''); setRes(null);
    if (i + 1 >= itens.length) setFim(true); else setI(i + 1);
  };
  const recomecar = () => { setI(0); setAcertos({}); setFim(false); setEscolha(null); setOrdem([]); setTexto(''); setRes(null); };

  if (fim) {
    const certos = corrigiveis.filter((x) => acertos[x.id]).length;
    const erros = corrigiveis.filter((x) => acertos[x.id] === false);
    return (
      <div className="ex-resumo">
        <h3>Você acertou {certos} de {corrigiveis.length}</h3>
        {erros.length > 0 && <ul>{erros.map((x) => <li key={x.id}><strong>{x.enunciado}</strong> Resposta: <span lang={idioma}>{x.gabarito ?? x.respostaEsperada}</span>{x.explicacao && <small> {x.explicacao}</small>}</li>)}</ul>}
        <button type="button" className="btn btn-ghost" onClick={recomecar}>Refazer os exercícios</button>
      </div>
    );
  }

  const comOpcoes = ex.opcoes && ex.gabarito !== undefined && ex.tipo !== 'sentence-ordering';
  const pode = ex.tipo === 'producao' ? true : ex.tipo === 'sentence-ordering' ? ordem.length > 0 : comOpcoes ? escolha !== null : texto.trim() !== '';
  return (
    <div className="exercicio">
      <span className="ex-n">Exercício {i + 1} de {itens.length}</span>
      <p className="ex-enunciado">{ex.enunciado}</p>
      {ex.audio && <div className="ex-audio"><Audio texto={ex.audio} idioma={idioma} /> <span>Toque para ouvir</span></div>}
      {comOpcoes && (
        <div className="ex-opcoes" role="radiogroup" aria-label="Opções">
          {ex.opcoes!.map((o) => (
            <button key={o} type="button" role="radio" aria-checked={escolha === o} disabled={res !== null} className={`ex-op ${escolha === o ? 'on' : ''} ${res && o === ex.gabarito ? 'certa' : ''} ${res === 'erro' && escolha === o ? 'errada' : ''}`} onClick={() => setEscolha(o)} lang={idioma}>{o}</button>
          ))}
        </div>
      )}
      {ex.tipo === 'sentence-ordering' && (
        <>
          <div className="ex-montada" aria-live="polite" lang={idioma}>{ordem.length ? ordem.map((k) => ex.opcoes![k]).join(' ') : <em>Toque nas peças abaixo</em>}</div>
          <div className="ex-opcoes">
            {ex.opcoes!.map((o, k) => <button key={k} type="button" className="ex-op" disabled={ordem.includes(k) || res !== null} onClick={() => setOrdem([...ordem, k])} lang={idioma}>{o}</button>)}
            <button type="button" className="link" disabled={res !== null || !ordem.length} onClick={() => setOrdem([])}>Limpar</button>
          </div>
        </>
      )}
      {!comOpcoes && ex.tipo !== 'sentence-ordering' && (
        ex.tipo === 'producao'
          ? <textarea className="ex-texto" rows={3} value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escreva aqui (só você vê)" lang={idioma} />
          : <input className="ex-texto" value={texto} disabled={res !== null} onChange={(e) => setTexto(e.target.value)} placeholder="Escreva em cirílico" lang={idioma} />
      )}
      {res && (
        <div className={`ex-feedback ${res}`} role="status">
          {res === 'ok' && <strong>Certo.</strong>}
          {res === 'erro' && <strong>Não foi dessa vez. Resposta: <span lang={idioma}>{ex.gabarito ?? ex.respostaEsperada}</span></strong>}
          {res === 'livre' && <strong>Compare com um exemplo: <span lang={idioma}>{ex.respostaEsperada}</span></strong>}
          {ex.explicacao && res !== 'livre' && <span> {ex.explicacao}</span>}
        </div>
      )}
      <div className="ex-acoes">
        {res === null ? <button type="button" className="btn btn-primary" disabled={!pode} onClick={verificar}>{ex.tipo === 'producao' ? 'Ver exemplo' : 'Verificar'}</button>
          : <button type="button" className="btn btn-primary" onClick={avancar}>{i + 1 >= itens.length ? 'Ver resultado' : 'Próximo'}</button>}
      </div>
    </div>
  );
}

function Conteudo({ b, idioma }: { b: Bloco; idioma: string }) {
  const [trad, setTrad] = useState(false);
  const [exemplo, setExemplo] = useState(false);
  switch (b.tipo) {
    case 'intro': return <p className="callout">{b.texto}</p>;
    case 'revisao': return <p className="callout callout-tarefa"><strong>Revisão.</strong> {b.enunciado}</p>;
    case 'producao': return (
      <div className="callout callout-tarefa">
        <p><strong>Agora é com você.</strong> {b.enunciado}</p>
        {b.exemplo && <><button type="button" className="link" onClick={() => setExemplo((v) => !v)}>{exemplo ? 'Esconder exemplo' : 'Ver exemplo'}</button>{exemplo && <p lang={idioma} className="ru">{b.exemplo}</p>}</>}
      </div>
    );
    case 'alfabeto': return (
      <>{b.grupos.map((g) => (
        <section key={g.nome}>
          <h3 className="bloco-sub">{g.nome}</h3>
          <ul className="letras">{g.letras.map((l) => (
            <li key={l.maiuscula}>
              <span className="letra" lang={idioma}>{l.maiuscula} {l.minuscula}</span>
              <span className="ipa">{l.ipa || 'sem som próprio'}</span>
              <span className="som-txt">{l.som}</span>
              <span className="letra-ex"><span lang={idioma}>{l.exemplo}</span> · {l.exemploPt} <Audio texto={l.exemplo} idioma={idioma} /></span>
            </li>
          ))}</ul>
        </section>
      ))}</>
    );
    case 'palavras': return <Palavras itens={b.itens} idioma={idioma} />;
    case 'dialogo': return (
      <section>
        <h3 className="bloco-sub">{b.titulo}</h3>
        {b.contexto && <p className="contexto">{b.contexto}</p>}
        <div className="dialogo-barra">
          <button type="button" className="btn btn-ghost" onClick={() => falarLista(b.linhas.map((l) => l.audio ?? l.ru), idioma)}>Ouvir o diálogo todo</button>
          <button type="button" className="link" onClick={parar}>Parar</button>
          <label className="check"><input type="checkbox" checked={trad} onChange={(e) => setTrad(e.target.checked)} /> Mostrar tradução</label>
        </div>
        <ul className="dialogo">{b.linhas.map((l, i) => (
          <li key={i}><span className="quem">{l.personagem}</span><div><span lang={idioma} className="ru">{l.ru}</span>{trad && <small className="trad">{l.pt}</small>}</div><Audio texto={l.audio ?? l.ru} idioma={idioma} /></li>
        ))}</ul>
      </section>
    );
    case 'texto': return (
      <section>
        <h3 className="bloco-sub">{b.titulo}</h3>
        <p lang={idioma} className="ru texto-ru">{b.ru}</p>
        <div className="dialogo-barra">
          <Audio texto={b.ru} idioma={idioma} rotulo="Ouvir o texto" />
          <label className="check"><input type="checkbox" checked={trad} onChange={(e) => setTrad(e.target.checked)} /> Mostrar tradução</label>
        </div>
        {trad && <p className="trad">{b.pt}</p>}
        <h4 className="bloco-sub">Perguntas</h4>
        {b.perguntas.map((p) => <details key={p.pergunta} className="pergunta"><summary lang={idioma}>{p.pergunta}</summary><p lang={idioma}>{p.resposta}</p></details>)}
      </section>
    );
    case 'gramatica': return (
      <section>
        <h3 className="bloco-sub">{b.titulo}</h3>
        <p>{b.explicacao}</p>
        {b.exemplos && <ul className="exemplos">{b.exemplos.map((e) => <li key={e.ru}><span lang={idioma} className="ru">{e.ru}</span><small className="trad">{e.pt}</small></li>)}</ul>}
        {b.tabela && <Tabela linhas={b.tabela as unknown as Record<string, string>[]} />}
      </section>
    );
    case 'exercicios': return <Exercicios itens={b.itens} idioma={idioma} />;
  }
}

export function Sessao({ sessao, idioma, aula, proximo }: { sessao: SessaoAula; idioma: string; aula: number; proximo?: string }) {
  const chave = chaveSessao(idioma, aula, sessao.sessao);
  const total = sessao.blocos.length;
  const [idx, setIdx] = useState(() => Math.min(lerSessao(chave)?.bloco ?? 0, total - 1));
  const [completa, setCompleta] = useState(() => lerSessao(chave)?.completa ?? false);
  const [voz, setVoz] = useState<boolean | null>(null);
  const b = sessao.blocos[idx];

  useEffect(() => { temVoz(idioma).then(setVoz); return () => parar(); }, [idioma]);
  useEffect(() => { parar(); salvarSessao(chave, { bloco: idx, completa }); }, [idx, completa, chave]);

  return (
    <div className="sessao">
      {voz === false && <p className="nota">Seu navegador não tem voz em russo instalada, então os botões de áudio podem ficar mudos. Instale a voz do idioma nas configurações do aparelho. As gravações com voz nativa ainda estão em produção.</p>}
      <ol className="passos" aria-label="Blocos da sessão">
        {sessao.blocos.map((x, k) => (
          <li key={k}><button type="button" className={`passo ${k === idx ? 'atual' : ''} ${k < idx || completa ? 'feito' : ''}`} aria-current={k === idx ? 'step' : undefined} onClick={() => setIdx(k)}><span>{k + 1}</span> {ROTULO_BLOCO[x.tipo]}</button></li>
        ))}
      </ol>
      <div className="bloco">
        <div className="bloco-topo"><h2>{ROTULO_BLOCO[b.tipo]}</h2><span>Bloco {idx + 1} de {total} · ~{b.min} min</span></div>
        <Conteudo key={idx} b={b} idioma={idioma} />
      </div>
      <div className="sessao-nav">
        <button type="button" className="btn btn-ghost" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>Voltar</button>
        {idx < total - 1
          ? <button type="button" className="btn btn-primary" onClick={() => setIdx(idx + 1)}>Continuar</button>
          : <button type="button" className="btn btn-primary" onClick={() => setCompleta(true)}>{completa ? 'Sessão concluída' : 'Concluir sessão'}</button>}
      </div>
      {completa && idx === total - 1 && (
        <p className="concluida" role="status">Sessão concluída neste navegador. {proximo && <Link to={proximo}>Ir para a próxima sessão →</Link>}</p>
      )}
    </div>
  );
}
