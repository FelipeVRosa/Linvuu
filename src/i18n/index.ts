import { ptBR, Dicionario } from './pt-BR';
import { LOCALES, LOCALE_PADRAO } from './locales';

const DICIONARIOS: Record<string, Dicionario> = { 'pt-BR': ptBR };

/** Textos do idioma atual do site. Enquanto só o português existir, devolve o português. */
export const useT = (): Dicionario => DICIONARIOS[LOCALE_PADRAO];
export const localesAtivos = () => LOCALES.filter((l) => l.ativo && DICIONARIOS[l.codigo]);
