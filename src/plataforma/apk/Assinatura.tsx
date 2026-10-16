import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import { useAssinatura } from '../../lib/acesso';
import { useT } from '../../i18n';
import { appTextos } from './textos';

export default function Assinatura() {
  const { usuario } = useAuth();
  const acesso = useAssinatura();
  const t = useT();
  const a = appTextos();
  return <div className="pagina">
    <h1 className="pagina-h1">{t.nav.assinatura}</h1>
    {!usuario ? <Link className="btn btn-primary" to="/entrar?proximo=/assinatura">{t.nav.entrar}</Link>
      : <p role="status">{acesso.carregando ? t.geral.carregando : acesso.indisponivel ? t.assinatura.indisponivel : acesso.ativa ? t.assinatura.ativa : a.compras}</p>}
    <p>{a.teste}</p>
    <Link className="btn btn-ghost" to="/cursos">{t.nav.cursos}</Link>
    <p><Link to="/privacidade">{t.rodape.privacidade}</Link> · <Link to="/termos">{t.assinatura.termos}</Link></p>
  </div>;
}
