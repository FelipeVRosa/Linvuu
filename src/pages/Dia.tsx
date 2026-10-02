import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Aula, FASES, NIVEL_LABEL, STATUS_AULA, carregarAula, getCurso } from '../lib/content';
import { usePageTitle } from '../lib/usePageTitle';
import NaoEncontrada from './NaoEncontrada';

const CAMADAS: { k: 'video' | 'imersao' | 'pratica'; t: string; d: string }[] = [
  { k: 'video', t: 'Vídeo-aula', d: 'Aula curta, em capítulos.' },
  { k: 'imersao', t: 'Imersão', d: 'Texto com áudio nativo e vocabulário.' },
  { k: 'pratica', t: 'Prática', d: 'Exercícios com feedback imediato.' },
];

export default function Dia() {
  const { id, n } = useParams();
  const curso = getCurso(id);
  const dia = Number(n);
  const valido = !!curso && curso.area === 'idiomas' && Number.isInteger(dia) && dia >= 1 && dia <= 100;
  const [aula, setAula] = useState<Aula | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!valido) return;
    setAula(null); setErro(false);
    carregarAula(curso!.id, dia).then(setAula).catch(() => setErro(true));
  }, [valido, curso, dia]);

  usePageTitle(aula ? `Dia ${dia}: ${aula.titulo} · ${curso!.nome}` : undefined);
  if (!valido) return <NaoEncontrada />;

  const fase = aula && FASES.find((f) => f.id === aula.fase);

  return (
    <div className="pagina">
      <nav className="migalhas" aria-label="Você está em">
        <Link to="/">Início</Link> / <Link to="/cursos">Cursos</Link> / <Link to={`/curso/${curso!.id}`}>{curso!.nome}</Link> / <span aria-current="page">Dia {dia}</span>
      </nav>

      {erro && <p className="vazio">Não foi possível carregar esta aula. Recarregue a página.</p>}
      {!aula && !erro && <p className="resultado" role="status">Carregando…</p>}

      {aula && (
        <>
          <header>
            <span className="curso-card-area">Dia {dia} de 100 · {fase?.titulo} · {NIVEL_LABEL[aula.nivel]}</span>
            <h1 className="pagina-h1">{aula.titulo}</h1>
            <p className="lead">Ao final do dia: {aula.objetivo.charAt(0).toLowerCase() + aula.objetivo.slice(1)}</p>
            <span className={`pill pill-aula-${aula.status}`}>{STATUS_AULA[aula.status]}</span>
          </header>

          {aula.status !== 'publicada' && (
            <p className="nota">
              Esta aula de {curso!.nome} ainda não foi publicada.{' '}
              {aula.imersao.status === 'legado'
                ? 'O conteúdo já está escrito e será levado para o player da Linvuu; o vídeo ainda será gravado.'
                : 'O objetivo do dia já está definido; o vídeo, o texto e os exercícios estão em produção.'}
            </p>
          )}

          <div className="camadas">
            {CAMADAS.map((c, i) => (
              <section key={c.k} className="camada">
                <span className="method-num">0{i + 1}</span>
                <h2>{c.t}</h2>
                <p>{c.d}</p>
                <span className="camada-status">{aula[c.k].status === 'pendente' ? 'Em breve' : aula[c.k].status === 'legado' ? 'Escrita, em migração' : 'Disponível'}</span>
              </section>
            ))}
          </div>

          <nav className="dia-nav" aria-label="Navegar entre dias">
            {dia > 1 ? <Link to={`/curso/${curso!.id}/dia/${dia - 1}`}>← Dia {dia - 1}</Link> : <span />}
            <Link to={`/curso/${curso!.id}`}>Ver a trilha</Link>
            {dia < 100 ? <Link to={`/curso/${curso!.id}/dia/${dia + 1}`}>Dia {dia + 1} →</Link> : <span />}
          </nav>
        </>
      )}
    </div>
  );
}
