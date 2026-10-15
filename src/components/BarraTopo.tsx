import { Link } from 'react-router-dom';
import { EMAIL_OFICIAL } from '../config/site';
import { LOCALE, LOCALES, lembrarLocale, urlEm, useT } from '../i18n';

const ic = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/** Barra fina do topo, no estilo dos sites de idiomas europeus: idioma do site (Português · English · Español), novidades, dúvidas e contato. */
export function BarraTopo({ semNovidades = false }: { semNovidades?: boolean }) {
  const t = useT();
  return (
    <div className="barra-topo">
      <div className="barra-topo-in">
        <nav className="barra-idiomas" aria-label={t.barra.idioma}>
          <svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
          {LOCALES.map((l) => (
            l.codigo === LOCALE.codigo
              ? <span key={l.codigo} className="barra-idioma on" lang={l.codigo} aria-current="true">{l.nome}</span>
              : <a key={l.codigo} className="barra-idioma" lang={l.codigo} hrefLang={l.codigo} href={urlEm(l.codigo)} onClick={() => lembrarLocale(l.codigo)}>{l.nome}</a>
          ))}
        </nav>
        <nav className="barra-links" aria-label={t.barra.atalhos}>
          {!semNovidades && <Link to="/#novidades"><svg {...ic}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>{t.barra.novidades}</Link>}
          <Link to="/#faq"><svg {...ic}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>{t.barra.duvidas}</Link>
          {LOCALE.codigo === 'pt-BR'
            ? <Link to="/contato"><svg {...ic}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>{t.barra.contato}</Link>
            : <a href={`mailto:${EMAIL_OFICIAL}`}><svg {...ic}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>{t.barra.contato}</a>}
        </nav>
      </div>
    </div>
  );
}
