// Vitrine da Coleção Linvuu (capas dos livros, Volume 1, níveis A1–A2).
// Para cadastrar: gere a capa com scripts/capa.mjs, converta para .webp (1200 px de largura) e coloque em public/livros/.
export interface Livro { titulo: string; subtitulo?: string; capa?: string; link?: string; preco?: string }

const livro = (id: string, titulo: string): Livro => ({
  titulo,
  subtitulo: 'Volume 1 · Níveis A1–A2',
  capa: `/livros/${id}-a1-a2-v1.webp`,
  link: `/curso/${id}`,
});

export const LIVROS: Livro[] = [
  livro('en', 'Inglês'),
  livro('es', 'Espanhol'),
  livro('de', 'Alemão'),
  livro('fr', 'Francês'),
  livro('it', 'Italiano'),
  livro('ru', 'Russo'),
];
