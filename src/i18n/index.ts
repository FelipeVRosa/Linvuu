import { ptBR, Dicionario } from './pt-BR';
import { en } from './en';
import { es } from './es';
import { CodigoLocale, LOCALES, Locale, caminhoEm, localeDoCaminho } from './locales';

const DICIONARIOS: Record<CodigoLocale, Dicionario> = { 'pt-BR': ptBR, en, es };
const CHAVE = 'linvuu:locale';

/** Idioma desta visita, decidido pelo endereço (/en, /es ou sem prefixo). Trocar de idioma recarrega a página. */
export const LOCALE: Locale = typeof window === 'undefined' ? LOCALES[0] : localeDoCaminho(window.location.pathname);
export const T: Dicionario = DICIONARIOS[LOCALE.codigo];
/** Textos do idioma atual do site. */
export const useT = (): Dicionario => T;
export const dicionario = (codigo: CodigoLocale) => DICIONARIOS[codigo];
export { LOCALES };

/** Guarda a escolha explícita do visitante. */
export const lembrarLocale = (codigo: CodigoLocale) => { try { localStorage.setItem(CHAVE, codigo); } catch { /* sem armazenamento */ } };
/** Escolha guardada; só vale quando o visitante escolheu na barra do topo. */
export const localeLembrado = (): CodigoLocale | null => {
  try { const v = localStorage.getItem(CHAVE); return LOCALES.some((l) => l.codigo === v) ? (v as CodigoLocale) : null; } catch { return null; }
};
/** Endereço desta mesma página em outro idioma. */
export const urlEm = (codigo: CodigoLocale) => `${caminhoEm(codigo, window.location.pathname)}${window.location.search}${window.location.hash}`;
/** Caminho absoluto (fora do roteador) no idioma atual: para links <a> e window.location. */
export const comPrefixo = (caminho: string) => caminhoEm(LOCALE.codigo, caminho);
/** Formata data no idioma atual. */
export const data = (segundos: number) => new Date(segundos * 1000).toLocaleDateString(LOCALE.dataLocale);
