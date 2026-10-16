import { Link } from 'react-router-dom';
import { useT } from '../../i18n';
import { appTextos } from './textos';

export function Paywall({ curso, indisponivel }: { curso: string; indisponivel?: boolean; idioma?: string }) {
  const t = useT();
  const a = appTextos();
  return <section className="paywall" aria-label={curso}>
    <h2>{t.nav.assinatura}</h2>
    <p>{indisponivel ? t.assinatura.indisponivel : a.bloqueado}</p>
    <p>{a.compras}</p>
    <Link className="btn btn-primary" to="/assinatura">{t.nav.assinatura}</Link>
  </section>;
}
