// Pessoas reais. "Quem ensina" só aparece quando EQUIPE tem alguém.
// A seção de avaliações aparece sempre; com a lista vazia mostra cartões em branco.
// Fotos em public/equipe/ (ex.: /equipe/maria.jpg).
export interface Pessoa { nome: string; papel: string; bio: string; foto?: string; link?: string }
export interface Depoimento { nome: string; local?: string; curso?: string; texto: string; foto?: string }

export const EQUIPE: Pessoa[] = [
  // { nome: 'Nome Sobrenome', papel: 'Professora nativa de Russo', bio: 'Uma ou duas frases.', foto: '/equipe/nome.jpg' },
];

export const DEPOIMENTOS: Depoimento[] = [
  // { nome: 'Nome Sobrenome', local: 'São Paulo, Brasil', curso: 'Alemão', texto: 'Depoimento real, com autorização do aluno.', foto: '/equipe/aluno.jpg' },
];
