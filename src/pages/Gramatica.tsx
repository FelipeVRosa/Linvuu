import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navegacao } from '../components/Navegacao';
import { Gramatica as BlocoGramatica } from '../components/Sessao';
import { getCurso } from '../lib/content';
import { usePageTitle } from '../lib/usePageTitle';
import type { Bloco } from '../lib/aulas';
import { Paywall } from '../components/Paywall';
import { api } from '../lib/api';
import { carregarAuth } from '../lib/firebase';
import { useAuth } from '../lib/AuthContext';

type Topico = Omit<Extract<Bloco, { tipo: 'gramatica' }>, 'tipo' | 'min' | 'tag'> & { id: string; categoria: string; aula: number; aulaTitulo: string; sessao: string; dia: number };
interface Pacote { idioma: string; categorias: string[]; topicos: Topico[]; completo: boolean; bloqueados: number }
const IDIOMAS = ['ru', 'de', 'en'];

export default function Gramatica() {
  const { id } = useParams();
  const curso = getCurso(id);
  const { usuario, carregando: autenticando } = useAuth();
  const [pacote, setPacote] = useState<Pacote | undefined>();
  const [falhou, setFalhou] = useState(false);
  const [cat, setCat] = useState('todas');
  useEffect(() => setCat('todas'), [id]);
  // Só os tópicos das 2 primeiras aulas vêm para todos; o resto, só com assinatura (o servidor decide).
  useEffect(() => {
    if (!id || !IDIOMAS.includes(id) || autenticando) return;
    let vivo = true;
    setPacote(undefined); setFalhou(false);
    (async () => {
      const token = usuario ? await (await carregarAuth()).auth.currentUser?.getIdToken() : undefined;
      const r = await fetch(api(`/api/gramatica/${id}`), { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      if (!r.ok) throw new Error(String(r.status));
      const j = (await r.json()) as Pacote;
      if (vivo) setPacote(j);
    })().catch(() => vivo && setFalhou(true));
    return () => { vivo = false; };
  }, [id, usuario, autenticando]);
  const lista = useMemo(() => (pacote ? pacote.topicos.filter((t) => cat === 'todas' || t.categoria === cat) : []), [pacote, cat]);
  usePageTitle(curso ? `Gramática do ${curso.nome.toLowerCase()}` : 'Gramática', curso ? `Gramática do ${curso.nome.toLowerCase()} explicada em português, tópico por tópico, com tabelas, exemplos e erros comuns.` : undefined);
  if (!id) return <Navigate to="/gramatica/ru" replace />;
  if (!curso || !IDIOMAS.includes(curso.id)) return <Navigate to="/gramatica/ru" replace />;

  return (
    <div className="pagina">
      <Navegacao pai={`/curso/${curso.id}`} trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: curso.nome, para: `/curso/${curso.id}` }, { rotulo: 'Gramática' }]} />
      <h1 className="pagina-h1">Gramática do {curso.nome.toLowerCase()}</h1>
      <p className="lead">Cada regra é explicada em português primeiro, com tabelas, exemplos e erros comuns. Todo tópico leva à sessão em que você o pratica.</p>
      <div className="chips" role="group" aria-label="Idioma">
        {IDIOMAS.map((k) => <Link key={k} to={`/gramatica/${k}`} className={k === curso.id ? 'chip on' : 'chip'} aria-current={k === curso.id ? 'page' : undefined}>{getCurso(k)?.nome}</Link>)}
      </div>
      {falhou && <p className="erro" role="alert">Não foi possível carregar a gramática agora. Recarregue a página.</p>}
      {!pacote && !falhou && <p className="resultado" role="status">Carregando…</p>}
      {pacote && <>
      <div className="chips" role="group" aria-label="Categoria">
        {['todas', ...pacote.categorias].map((c) => <button key={c} type="button" className={cat === c ? 'on' : ''} aria-pressed={cat === c} onClick={() => setCat(c)}>{c === 'todas' ? 'Todas' : c}</button>)}
      </div>
      <p className="resultado" aria-live="polite">{lista.length} {lista.length === 1 ? 'tópico' : 'tópicos'}</p>
      <div className="topicos">
        {lista.map((t) => (
          <details key={t.id} className="topico">
            <summary><strong>{t.titulo}</strong><span className="topico-cat">{t.categoria}</span><span className="topico-aula">Aula {t.aula}</span></summary>
            <BlocoGramatica b={{ tipo: 'gramatica', min: 0, ...t }} idioma={curso.id} />
            <p className="topico-link"><Link to={`/curso/${curso.id}/dia/${t.dia}`}>Praticar na aula {t.aula}, sessão {t.sessao.replace('S', '')} →</Link></p>
          </details>
        ))}
      </div>
      {!pacote.completo && pacote.bloqueados > 0 && (
        <div className="aa-leitura">
          <p className="resultado">Mostramos os tópicos das 2 primeiras aulas. Os outros {pacote.bloqueados} tópicos são para assinantes.</p>
          <Paywall idioma="pt" curso={curso.nome} />
        </div>
      )}
      </>}
    </div>
  );
}
