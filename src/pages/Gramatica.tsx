import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navegacao } from '../components/Navegacao';
import { Gramatica as BlocoGramatica } from '../components/Sessao';
import { getCurso } from '../lib/content';
import { usePageTitle } from '../lib/usePageTitle';
import type { Bloco } from '../lib/aulas';
import ru from '../../content/gramatica/ru.json';

type Topico = Omit<Extract<Bloco, { tipo: 'gramatica' }>, 'tipo' | 'min' | 'tag'> & { id: string; categoria: string; aula: number; aulaTitulo: string; sessao: string; dia: number };
interface Pacote { idioma: string; categorias: string[]; topicos: Topico[] }
const PACOTES: Record<string, Pacote> = { ru: ru as unknown as Pacote };

export default function Gramatica() {
  const { id } = useParams();
  const curso = getCurso(id);
  const pacote = id ? PACOTES[id] : undefined;
  const [cat, setCat] = useState('todas');
  const lista = useMemo(() => (pacote ? pacote.topicos.filter((t) => cat === 'todas' || t.categoria === cat) : []), [pacote, cat]);
  usePageTitle(curso ? `Gramática do ${curso.nome.toLowerCase()}` : 'Gramática', curso ? `Gramática do ${curso.nome.toLowerCase()} explicada em português, tópico por tópico, com tabelas, exemplos e erros comuns.` : undefined);
  if (!id) return <Navigate to="/gramatica/ru" replace />;
  if (!curso || !pacote) return <Navigate to="/gramatica/ru" replace />;

  return (
    <div className="pagina">
      <Navegacao pai={`/curso/${curso.id}`} trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: curso.nome, para: `/curso/${curso.id}` }, { rotulo: 'Gramática' }]} />
      <h1 className="pagina-h1">Gramática do {curso.nome.toLowerCase()}</h1>
      <p className="lead">Cada regra é explicada em português primeiro, com tabelas, exemplos e erros comuns. Todo tópico leva à sessão em que você o pratica.</p>
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
    </div>
  );
}
