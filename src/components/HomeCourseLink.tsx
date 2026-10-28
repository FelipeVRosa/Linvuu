import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LOCALE } from '../i18n';

/** A home traduzida apresenta os materiais atuais, cujas explicações são em português. */
export function HomeCourseLink({ to, className, children, onClick }: { to: string; className?: string; children: ReactNode; onClick?: () => void }) {
  return LOCALE.codigo === 'pt-BR'
    ? <Link to={to} className={className} onClick={onClick}>{children}</Link>
    : <a href={to} className={className} hrefLang="pt-BR" onClick={onClick}>{children}</a>;
}
