// Idiomas da INTERFACE. O idioma das explicações é uma preferência separada por curso. O endereço diz o idioma: / (português), /en (inglês), /es (espanhol).
// A base de cada curso (o idioma estudado: palavras, frases, diálogos e áudio) é a mesma; muda só a explicação.
export type CodigoLocale = 'pt-BR' | 'en' | 'es';
/** Língua do material pedagógico, independente da interface e do idioma estudado. */
export type Explicacao = 'pt' | 'en' | 'es';
export interface Locale {
  codigo: CodigoLocale; rotulo: string; nome: string; prefixo: '' | '/en' | '/es';
  /** Público editorial das páginas públicas/SEO; não determina a língua carregada nas aulas. */
  explicacao: Explicacao; og: string; dataLocale: string;
  /** Curso que não aparece para este público (é a língua dele). */
  cursoOculto: string;
  /** Ordem da vitrine. */
  ordem: string[];
}

export const LOCALES: Locale[] = [
  { codigo: 'pt-BR', rotulo: 'PT', nome: 'Português', prefixo: '', explicacao: 'pt', og: 'pt_BR', dataLocale: 'pt-BR', cursoOculto: 'br', ordem: ['en', 'es', 'de', 'fr', 'it', 'ru'] },
  { codigo: 'en', rotulo: 'EN', nome: 'English', prefixo: '/en', explicacao: 'en', og: 'en_US', dataLocale: 'en-US', cursoOculto: 'en', ordem: ['br', 'es', 'de', 'fr', 'it', 'ru'] },
  { codigo: 'es', rotulo: 'ES', nome: 'Español', prefixo: '/es', explicacao: 'es', og: 'es_ES', dataLocale: 'es-ES', cursoOculto: 'es', ordem: ['br', 'en', 'de', 'fr', 'it', 'ru'] },
];
export const LOCALE_PADRAO: CodigoLocale = 'pt-BR';

/** Locale de um caminho (/en/cursos → en). */
export const localeDoCaminho = (caminho: string): Locale => LOCALES.find((l) => l.prefixo && (caminho === l.prefixo || caminho.startsWith(`${l.prefixo}/`))) ?? LOCALES[0];
/** Caminho sem o prefixo de idioma (/en/cursos → /cursos). */
export const semPrefixo = (caminho: string): string => {
  const l = localeDoCaminho(caminho);
  return l.prefixo ? caminho.slice(l.prefixo.length) || '/' : caminho;
};
/** O mesmo caminho em outro idioma. */
export const caminhoEm = (codigo: CodigoLocale, caminho: string): string => {
  const l = LOCALES.find((x) => x.codigo === codigo) ?? LOCALES[0];
  const base = semPrefixo(caminho);
  return l.prefixo ? (base === '/' ? l.prefixo : `${l.prefixo}${base}`) : base;
};
