import { useEffect } from 'react';
import { SITE_URL } from '../config/site';
import { useT } from '../i18n';

const meta = (sel: string, attr: string, valor: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(sel);
  if (!el) { el = document.createElement('meta'); const [k, v] = attr.split('='); el.setAttribute(k, v); document.head.appendChild(el); }
  el.setAttribute('content', valor);
};

/** Título, descrição, canonical e Open Graph de cada página (útil para busca e para compartilhar o link). */
export function usePageTitle(titulo?: string, descricao?: string) {
  const t = useT();
  useEffect(() => {
    const tit = titulo ? `${titulo} · Linvuu` : t.meta.titulo;
    const desc = descricao ?? t.meta.descricao;
    document.title = tit;
    meta('meta[name="description"]', 'name=description', desc);
    meta('meta[property="og:title"]', 'property=og:title', tit);
    meta('meta[property="og:description"]', 'property=og:description', desc);
    meta('meta[property="og:url"]', 'property=og:url', SITE_URL + window.location.pathname);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = SITE_URL + window.location.pathname;
  }, [titulo, descricao, t]);
}
