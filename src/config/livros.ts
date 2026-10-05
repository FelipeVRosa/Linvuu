// Vitrine de livros. Enquanto a lista estiver vazia, a vitrine mostra 2 capas em branco.
// Para cadastrar: coloque a imagem da capa em public/livros/ (ex.: /livros/alemao-1.jpg).
export interface Livro { titulo: string; subtitulo?: string; capa?: string; link?: string; preco?: string }

export const LIVROS: Livro[] = [
  // { titulo: 'Título do livro', subtitulo: 'Nível ou idioma', capa: '/livros/titulo.jpg', link: 'https://…', preco: 'R$ 00,00' },
];
