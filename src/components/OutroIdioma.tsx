import { useEffect } from 'react';
import { CodigoLocale } from '../i18n/locales';
import { urlEm, useT } from '../i18n';

/** Leva para a mesma página em outro idioma do site (ex.: o curso de português para estrangeiros não existe em português). */
export function OutroIdioma({ para }: { para: CodigoLocale }) {
  const t = useT();
  useEffect(() => { window.location.replace(urlEm(para)); }, [para]);
  return <p className="resultado" role="status">{t.geral.carregando}</p>;
}
