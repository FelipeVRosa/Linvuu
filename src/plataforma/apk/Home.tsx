import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS } from '../../lib/content';
import { CursoCard } from '../../components/CursoCard';
import { useRetomadaGeral } from '../../lib/retomar';
import { useT } from '../../i18n';
import { appTextos } from './textos';

export default function Home() {
  const t = useT();
  const ret = useRetomadaGeral();
  const a = appTextos();
  return <div className="pagina">
    <h1 className="pagina-h1">{a.inicio}</h1>
    {ret && <p><Link className="btn btn-primary" to={`/curso/${ret.idioma}/dia/${ret.dia}`}>{t.cursoPagina.continuarBtn}: {ret.nome}</Link></p>}
    <p>{a.teste}</p>
    <div className="lv-grade">{CURSOS_ATIVOS.map((curso) => <CursoCard key={curso.id} curso={curso} />)}</div>
  </div>;
}
