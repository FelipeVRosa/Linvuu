import { Link, useLocation } from 'react-router-dom';
import { useT } from '../../i18n';
import { useAuth } from '../../lib/AuthContext';
import { appTextos } from './textos';
export function Paywall({ curso, indisponivel }: { curso: string; indisponivel?: boolean; idioma?: string }) {
  const t = useT(), a = appTextos();
  const { usuario } = useAuth();
  const local = useLocation();
  const destino = local.pathname + local.search + local.hash;
  return <section className="paywall" aria-label={curso}>
    <h1>{t.nav.assinatura}</h1>
    <p>{indisponivel ? t.assinatura.indisponivel : usuario ? a.semAcesso : a.bloqueado}</p>
    <p>{a.compras}</p>
    <Link className="btn btn-primary" to={usuario ? '/assinatura' : '/entrar?proximo=' + encodeURIComponent(destino)}>{usuario ? t.nav.assinatura : t.nav.entrar}</Link>
  </section>;
}
