import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS, coberturaDoCurso } from '../../lib/content';
import { CursoCard } from '../../components/CursoCard';
import { useRetomadaGeral } from '../../lib/retomar';
import { useT } from '../../i18n';
import { appTextos } from './textos';

export default function Home() {
  const t = useT(), a = appTextos();
  const ret = useRetomadaGeral();
  const disponiveis = CURSOS_ATIVOS.filter(c => coberturaDoCurso(c.id).traduzidas > 0);
  const continuavel = ret && coberturaDoCurso(ret.idioma).traduzidas > 0;
  return <div className="pagina app-home">
    <p className="app-kicker">Linvuu · {a.estudo}</p>
    <h1 className="pagina-h1">{a.inicio}</h1>
    {continuavel && <section className="app-retomada" aria-label={t.cursoPagina.continuarBtn}>
      <h2>{ret.nome}</h2><p>{ret.titulo}</p>
      <progress max={ret.total} value={ret.feitos} aria-label={a.progresso} />
      <p>{a.concluidas(ret.feitos, ret.total)}</p>
      <Link className="btn btn-primary" to={`/curso/${ret.idioma}/dia/${ret.dia}`}>{t.cursoPagina.continuarBtn} →</Link>
    </section>}
    <p>{a.teste}</p>
    <h2>{a.catalogo}</h2>
    <p>{a.avisoIdiomas}</p>
    {disponiveis.length ? <div className="lv-grade">{disponiveis.map(curso => {
      const cobertura = coberturaDoCurso(curso.id);
      return <section key={curso.id}><CursoCard curso={curso} />{cobertura.traduzidas < cobertura.total && <p className="app-cobertura">{a.cobertura(cobertura.traduzidas, cobertura.total)}</p>}</section>;
    })}</div> : <p role="status">{a.semCursos}</p>}
  </div>;
}
