// Idiomas do SITE (interface). Só aparecem no seletor da barra do topo os que tiverem `ativo: true`.
// Para abrir um novo idioma: crie src/i18n/<codigo>.ts (copie pt-BR.ts e traduza), registre em index.ts e troque `ativo` para true.
export interface Locale { codigo: string; rotulo: string; nome: string; ativo: boolean }

export const LOCALES: Locale[] = [
  { codigo: 'pt-BR', rotulo: 'PT', nome: 'Português (Brasil)', ativo: true },
  { codigo: 'en', rotulo: 'EN', nome: 'English', ativo: false },
  { codigo: 'es', rotulo: 'ES', nome: 'Español', ativo: false },
  { codigo: 'de', rotulo: 'DE', nome: 'Deutsch', ativo: false },
  { codigo: 'fr', rotulo: 'FR', nome: 'Français', ativo: false },
];
export const LOCALE_PADRAO = 'pt-BR';
