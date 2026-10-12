import { Link } from 'react-router-dom';
import { EMAIL_OFICIAL } from '../config/site';
import { localesAtivos } from '../i18n';
import { useT } from '../i18n';

const ic = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/** Barra fina do topo, no estilo dos sites de idiomas europeus. O seletor de idioma só aparece quando houver 2 ou mais idiomas ativos. */
export function BarraTopo({ semNovidades = false }: { semNovidades?: boolean }) {
  const t = useT();
  const idiomas = localesAtivos();
  return (
    <div className="barra-topo">
      <div className="barra-topo-in">
        {idiomas.length > 1 && (
          <div className="barra-idiomas" role="group" aria-label={t.barra.idioma}>
            {idiomas.map((l) => <button key={l.codigo} type="button" className="barra-idioma" lang={l.codigo} title={l.nome}>{l.rotulo}</button>)}
          </div>
        )}
        {!semNovidades && <Link to="/#novidades"><svg {...ic}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>{t.barra.novidades}</Link>}
        <Link to="/#faq"><svg {...ic}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>{t.barra.duvidas}</Link>
        <a href={`mailto:${EMAIL_OFICIAL}`}><svg {...ic}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>{t.barra.contato}</a>
      </div>
    </div>
  );
}
