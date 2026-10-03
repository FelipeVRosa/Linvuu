import { Link, useParams, useSearchParams } from 'react-router-dom';
import { DIAS, FASES, diaDoCurso, INICIO_POR_NIVEL, NIVEL_CURTO, NIVEL_LABEL, STATUS_AULA, STATUS_CURSO, getCurso, statusDoCurso } from '../lib/content';
import { Bandeira } from '../components/Bandeira';
import { Navegacao } from '../components/Navegacao';
import { IconeIdiomas, IconeStem } from '../components/Icones';
import { usePageTitle } from '../lib/usePageTitle';
import NaoEncontrada from './NaoEncontrada';

export default function Curso() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const curso = getCurso(id);
  usePageTitle(curso?.nome);
  if (!curso) return <NaoEncontrada />;

  const stats = statusDoCurso(curso.id);
  const nivel = params.get('nivel');
  const inicio = nivel ? INICIO_POR_NIVEL[nivel] : undefined;
  const faseInicio = inicio ? DIAS[inicio.dia - 1].fase : 1;

  return (
    <div className="pagina">
      <Navegacao pai="/cursos" trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: 'Cursos', para: '/cursos' }, { rotulo: curso.nome }]} />

      <header className="curso-topo">
        <div>
          <span className={`area-tag ${curso.area === 'idiomas' ? 'area-idiomas' : 'area-stem'}`}>{curso.area === 'idiomas' ? <><IconeIdiomas size={16} /> Idioma</> : <><IconeStem size={16} /> STEM</>}</span>
          <h1 className="pagina-h1">{curso.nome} {curso.nomeNativo !== curso.nome && <em>{curso.nomeNativo}</em>}</h1>
          <p className="lead">{curso.descricao}</p>
          <div className="curso-fatos">
            <span className={`pill pill-${curso.status}`}>{STATUS_CURSO[curso.status]}</span>
            {curso.area === 'idiomas' && <><span><Bandeira id={curso.id} size={18} /> 100 dias</span><span>3 camadas por dia</span><span>Do zero ao B1</span></>}
            {stats && <span>{stats.publicadas} de {stats.total} aulas publicadas</span>}
          </div>
        </div>
      </header>

      {curso.area !== 'idiomas' ? (
        <section className="aviso">
          <h2>Trilha em planejamento</h2>
          <p>A trilha de {curso.nome} seguirá o mesmo formato de 100 dias dos idiomas. Ainda não há aulas publicadas.</p>
          <Link to="/cursos?area=idiomas" className="btn btn-ghost">Ver os cursos de idiomas</Link>
        </section>
      ) : (
        <>
          {inicio && (
            <section className="aviso aviso-inicio">
              <h2>Seu ponto de partida: dia {inicio.dia}</h2>
              <p>Para o nível {NIVEL_LABEL[nivel!]}, sugerimos começar pelo dia {inicio.dia}: {diaDoCurso(curso.id, DIAS[inicio.dia - 1]).titulo}.</p>
              {inicio.aviso && <p>{inicio.aviso}</p>}
              <Link to={`/curso/${curso.id}/dia/${inicio.dia}`} className="btn btn-primary">Ir para o dia {inicio.dia}</Link>
            </section>
          )}
          {stats && stats.publicadas === 0 && (
            <p className="nota">As aulas deste curso ainda estão sendo produzidas. Você pode navegar pela trilha inteira e ver o objetivo de cada dia.</p>
          )}
          <h2 className="pagina-h2">A trilha, dia por dia</h2>
          {FASES.map((f) => (
            <details key={f.id} className="fase-bloco" open={f.id === faseInicio}>
              <summary>
                <span className="fase-num">Fase {f.id}</span>
                <strong>{f.titulo}</strong>
                <span className="fase-nivel">{NIVEL_CURTO[f.nivel]}</span>
                <span className="fase-dias">Dias {f.dias[0]}–{f.dias[1]}</span>
              </summary>
              <ol className="dias" start={f.dias[0]}>
                {DIAS.filter((d) => d.fase === f.id).map((m) => {
                  const d = diaDoCurso(curso.id, m);
                  const st = stats?.status[d.dia - 1] ?? 'planejada';
                  return (
                    <li key={d.dia}>
                      <Link to={`/curso/${curso.id}/dia/${d.dia}`}>
                        <span className="dia-n">{d.dia}</span>
                        <span className="dia-t">{d.titulo}<small>{d.objetivo}</small></span>
                        <span className={`pill pill-aula-${st}`}>{STATUS_AULA[st]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </details>
          ))}
        </>
      )}
    </div>
  );
}
