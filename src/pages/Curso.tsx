import { Link, useParams, useSearchParams } from 'react-router-dom';
import { DIAS, FASES, IDIOMAS_GRAMATICA, coberturaDoCurso, cursoDeOutroPublico, diaDoCurso, gruposDoCurso, inicioDoNivel, NIVEL_CURTO, NIVEL_LABEL, STATUS_AULA, getCurso, statusDoCurso } from '../lib/content';
import { Navegacao } from '../components/Navegacao';
import { usePageTitle } from '../lib/usePageTitle';
import { JsonLd } from '../components/JsonLd';
import { OutroIdioma } from '../components/OutroIdioma';
import { SITE_URL } from '../config/site';
import { LOCALE, urlEm, useT } from '../i18n';
import { gratis } from '../config/planos';
import NaoEncontrada from './NaoEncontrada';
import CursoBr from './CursoBr';

export default function Curso() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const t = useT();
  const curso = getCurso(id);
  usePageTitle(curso && curso.id !== 'br' ? t.cursoPagina.tituloSeo(curso.nome) : undefined, curso?.descricao);
  if (!curso) return <NaoEncontrada />;
  if (curso.id === 'br') return LOCALE.codigo === 'pt-BR' ? <OutroIdioma para="en" /> : <CursoBr />;

  const stats = statusDoCurso(curso.id);
  const nivel = params.get('nivel');
  const inicio = nivel ? inicioDoNivel(curso.id, nivel) : undefined;
  const faseInicio = inicio ? (DIAS[inicio.dia - 1]?.fase ?? 1) : 1;
  const grupos = gruposDoCurso(curso.id);
  const grupoInicio = inicio ? grupos.find((x) => inicio.dia >= x.dias[0] && inicio.dia <= x.dias[1]) : undefined;
  const tituloInicio = grupoInicio ? t.cursoPagina.aulaTitulo(grupoInicio.aula, grupoInicio.titulo) : (inicio && DIAS[inicio.dia - 1] ? diaDoCurso(curso.id, DIAS[inicio.dia - 1]).titulo : '');
  const ultimo = grupos.length ? grupos[grupos.length - 1].dias[1] : 0;
  const fasesRestantes = FASES.filter((f) => f.dias[1] > ultimo);
  const cob = coberturaDoCurso(curso.id);
  const cobertura = t.cursoPagina.cobertura(cob.traduzidas, cob.total, t.linguas[cob.reserva]);

  return (
    <div className="pagina">
      <JsonLd dados={{ '@context': 'https://schema.org', '@type': 'Course', name: `${curso.nome} (${curso.nomeNativo})`, description: curso.descricao, inLanguage: LOCALE.codigo, educationalLevel: 'Beginner', provider: { '@type': 'Organization', name: 'Linvuu', url: SITE_URL } }} />
      <Navegacao pai="/cursos" trilha={[{ rotulo: t.geral.inicio, para: '/' }, { rotulo: t.geral.cursos, para: '/cursos' }, { rotulo: curso.nome }]} />

      <header className="curso-topo">
        <div>
          <h1 className="pagina-h1">{curso.nome} {curso.nomeNativo !== curso.nome && <em lang={curso.id}>{curso.nomeNativo}</em>}</h1>
          <p className="lead">{curso.descricao}</p>
          <div className="curso-fatos">
            {t.cursoPagina.fatos.map((f) => <span key={f}>{f}</span>)}
            {stats && <span>{t.cursoPagina.noAr(stats.publicadas, stats.total)}</span>}
            {IDIOMAS_GRAMATICA.includes(curso.id) && <Link to={`/gramatica/${curso.id}`} className="link-gramatica">{t.cursoPagina.gramatica(curso.nome)}</Link>}
          </div>
        </div>
      </header>

      {cursoDeOutroPublico(curso.id) && (
        <p className="nota">{t.cursoPagina.naoParaVoce(curso.nome)} <a href={urlEm('pt-BR')} hrefLang="pt-BR">Português →</a></p>
      )}
      {cobertura && !cursoDeOutroPublico(curso.id) && <p className="nota">{cobertura}</p>}

      {inicio && (
        <section className="aviso aviso-inicio">
          <h2>{t.cursoPagina.partida(inicio.dia)}</h2>
          <p>{t.cursoPagina.sugerimos(NIVEL_LABEL[nivel!] ?? nivel!, inicio.dia, tituloInicio)}</p>
          {inicio.aviso && <p>{inicio.aviso}</p>}
          <Link to={`/curso/${curso.id}/dia/${inicio.dia}`} className="btn btn-primary">{t.cursoPagina.irPara(inicio.dia)}</Link>
        </section>
      )}
      {stats && stats.publicadas < stats.total && <p className="nota">{t.cursoPagina.producao}</p>}
      {grupos.map((g) => (
        <details key={g.aula} className="fase-bloco" open={g.aula === (grupoInicio?.aula ?? grupos[0].aula)}>
          <summary>
            <span className="fase-num">{t.cursoPagina.aula(g.aula)}</span>
            <strong>{g.titulo}</strong>
            <span className="fase-dias">{t.cursoPagina.sessoes(g.dias[0], g.dias[1])}</span>
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
                    <span className="dia-t">{d.titulo}<small>{d.objetivo} · {gratis(d.dia) ? t.cursoPagina.gratis : t.cursoPagina.assinantes}</small></span>
                    <span className={`pill pill-aula-${st}`}>{STATUS_AULA[st]}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </details>
      ))}
      {fasesRestantes.length > 0 && <h2 className="pagina-h2">{grupos.length ? t.cursoPagina.depois : t.cursoPagina.trilha}</h2>}
      {fasesRestantes.map((f) => (
        <details key={f.id} className="fase-bloco" open={!grupos.length && f.id === faseInicio}>
          <summary>
            <span className="fase-num">{t.cursoPagina.fase(f.id)}</span>
            <strong>{f.titulo}</strong>
            <span className="fase-nivel">{NIVEL_CURTO[f.nivel]}</span>
            <span className="fase-dias">{t.cursoPagina.sessoes(f.dias[0], f.dias[1])}</span>
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
    </div>
  );
}
