import { useEffect } from 'react';
import { SITE_URL } from '../config/site';
import { LOCALE, LOCALES, useT } from '../i18n';
import { caminhoEm } from '../i18n/locales';

const meta = (sel: string, attr: string, valor: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(sel);
  if (!el) { el = document.createElement('meta'); const [k, v] = attr.split('='); el.setAttribute(k, v); document.head.appendChild(el); }
  el.setAttribute('content', valor);
};
const link = (rel: string, href: string, hreflang?: string) => {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(sel);
  if (!el) { el = document.createElement('link'); el.rel = rel; if (hreflang) el.hreflang = hreflang; document.head.appendChild(el); }
  el.href = href;
};

/** Título, descrição, canonical, versões em outros idiomas (hreflang) e Open Graph de cada página. */
export function usePageTitle(titulo?: string, descricao?: string) {
  const t = useT();
  useEffect(() => {
    const tit = titulo ? `${titulo} · Linvuu` : t.meta.titulo;
    const desc = descricao ?? t.meta.descricao;
    const caminho = window.location.pathname;
    document.title = tit;
    meta('meta[name="description"]', 'name=description', desc);
    meta('meta[property="og:title"]', 'property=og:title', tit);
    meta('meta[property="og:description"]', 'property=og:description', desc);
    meta('meta[property="og:url"]', 'property=og:url', SITE_URL + caminho);
    meta('meta[property="og:locale"]', 'property=og:locale', LOCALE.og);
    link('canonical', SITE_URL + caminho);
    for (const l of LOCALES) link('alternate', SITE_URL + caminhoEm(l.codigo, caminho), l.codigo);
    link('alternate', SITE_URL + caminhoEm('pt-BR', caminho), 'x-default');
  }, [titulo, descricao, t]);
}
