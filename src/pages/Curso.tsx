import { Link, useParams, useSearchParams } from 'react-router-dom';
import { DIAS, FASES, diaDoCurso, gruposDoCurso, inicioDoNivel, NIVEL_CURTO, NIVEL_LABEL, STATUS_AULA, STATUS_CURSO, getCurso, statusDoCurso } from '../lib/content';
import { Bandeira } from '../components/Bandeira';
import { Navegacao } from '../components/Navegacao';
import { IconeIdiomas, IconeStem } from '../components/Icones';
import { usePageTitle } from '../lib/usePageTitle';
import { JsonLd } from '../components/JsonLd';
import { SITE_URL } from '../config/site';
import NaoEncontrada from './NaoEncontrada';

export default function Curso() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const curso = getCurso(id);
  usePageTitle(curso ? `${curso.nome}: curso de ${curso.nome.toLowerCase()} do zero` : undefined, curso?.descricao);
  if (!curso) return <NaoEncontrada />;

  const stats = statusDoCurso(curso.id);
  const nivel = params.get('nivel');
  const inicio = nivel ? inicioDoNivel(curso.id, nivel) : undefined;
  const faseInicio = inicio ? (DIAS[inicio.dia - 1]?.fase ?? 1) : 1;
  const grupos = gruposDoCurso(curso.id);
  const grupoInicio = inicio ? grupos.find((x) => inicio.dia >= x.dias[0] && inicio.dia <= x.dias[1]) : undefined;
  const tituloInicio = grupoInicio ? `aula ${grupoInicio.aula}, ${grupoInicio.titulo}` : (inicio && DIAS[inicio.dia - 1] ? diaDoCurso(curso.id, DIAS[inicio.dia - 1]).titulo : '');
  const ultimo = grupos.length ? grupos[grupos.length - 1].dias[1] : 0;
  const fasesRestantes = FASES.filter((f) => f.dias[1] > ultimo);

  return (
    <div className="pagina">
      <JsonLd dados={{ '@context': 'https://schema.org', '@type': 'Course', name: `${curso.nome} (${curso.nomeNativo})`, description: curso.descricao, inLanguage: 'pt-BR', educationalLevel: 'Beginner', provider: { '@type': 'Organization', name: 'Linvuu', url: SITE_URL } }} />
      <Navegacao pai="/cursos" trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: 'Cursos', para: '/cursos' }, { rotulo: curso.nome }]} />

      <header className="curso-topo">
        <div>
          <span className={`area-tag ${curso.area === 'idiomas' ? 'area-idiomas' : 'area-stem'}`}>{curso.area === 'idiomas' ? <><IconeIdiomas size={16} /> Idioma</> : <><IconeStem size={16} /> STEM</>}</span>
          <h1 className="pagina-h1">{curso.nome} {curso.nomeNativo !== curso.nome && <em>{curso.nomeNativo}</em>}</h1>
          <p className="lead">{curso.descricao}</p>
          <div className="curso-fatos">
            <span className={`pill pill-${curso.status}`}>{STATUS_CURSO[curso.status]}</span>
            {curso.area === 'idiomas' && <><span><Bandeira id={curso.id} size={18} /> {stats?.total ?? 120} dias</span><span>Sessões de ~30 min</span><span>Começa do zero</span></>}
            {stats && <span>{stats.publicadas} de {stats.total} sessões no ar</span>}
            {['ru', 'de', 'en'].includes(curso.id) && <Link to={`/gramatica/${curso.id}`} className="link-gramatica">Gramática do {curso.nome.toLowerCase()} →</Link>}
          </div>
        </div>
      </header>

      {curso.area !== 'idiomas' ? (
        <section className="aviso">
          <h2>Trilha em planejamento</h2>
          <p>A trilha de {curso.nome} seguirá o mesmo formato dos outros idiomas: sessões de cerca de 30 minutos, em passos pequenos. Ainda não há aulas publicadas.</p>
          <Link to="/cursos?area=idiomas" className="btn btn-ghost">Ver os cursos de idiomas</Link>
        </section>
      ) : (
        <>
          {inicio && (
            <section className="aviso aviso-inicio">
              <h2>Seu ponto de partida: sessão {inicio.dia}</h2>
              <p>Para o nível {NIVEL_LABEL[nivel!]}, sugerimos começar pela sessão {inicio.dia}: {tituloInicio}.</p>
              {inicio.aviso && <p>{inicio.aviso}</p>}
              <Link to={`/curso/${curso.id}/dia/${inicio.dia}`} className="btn btn-primary">Ir para a sessão {inicio.dia}</Link>
            </section>
          )}
          {stats && stats.publicadas < stats.total && (
            <p className="nota">Parte das aulas deste curso ainda está sendo produzida. Você pode navegar pela trilha inteira e ver o objetivo de cada dia.</p>
          )}
          {grupos.map((g) => (
            <details key={g.aula} className="fase-bloco" open={g.aula === (grupos.find((x) => inicio && inicio.dia >= x.dias[0] && inicio.dia <= x.dias[1])?.aula ?? grupos[0].aula)}>
              <summary>
                <span className="fase-num">Aula {g.aula}</span>
                <strong>{g.titulo}</strong>
                <span className="fase-dias">Dias {g.dias[0]}–{g.dias[1]}</span>
              </summary>
              <ol className="dias" start={g.dias[0]}>
                {Array.from({ length: g.dias[1] - g.dias[0] + 1 }, (_, k) => g.dias[0] + k).map((n) => {
                  const m = DIAS[n - 1] ?? { dia: n, fase: Math.ceil(n / 10), nivel: 'a2' as const, titulo: '', objetivo: '' };
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
          {fasesRestantes.length > 0 && <h2 className="pagina-h2">{grupos.length ? 'O que vem depois (planejado)' : 'A trilha, dia por dia'}</h2>}
          {fasesRestantes.map((f) => (
            <details key={f.id} className="fase-bloco" open={!grupos.length && f.id === faseInicio}>
              <summary>
                <span className="fase-num">Fase {f.id}</span>
                <strong>{f.titulo}</strong>
                <span className="fase-nivel">{NIVEL_CURTO[f.nivel]}</span>
                <span className="fase-dias">Dias {f.dias[0]}–{f.dias[1]}</span>
              </summary>
              <ol className="dias" start={Math.max(f.dias[0], ultimo + 1)}>
                {DIAS.filter((d) => d.fase === f.id && d.dia > ultimo).map((m) => {
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
