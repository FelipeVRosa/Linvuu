// Pessoas reais. As seções "Quem ensina" e "Quem aprendeu" só aparecem na home
// quando estas listas têm pelo menos uma pessoa. Fotos em public/equipe/.
export interface Pessoa { nome: string; papel: string; bio: string; foto?: string; link?: string }
export interface Depoimento { nome: string; curso: string; texto: string; foto?: string }

export const EQUIPE: Pessoa[] = [
  // { nome: 'Nome Sobrenome', papel: 'Professora nativa de Russo', bio: 'Uma ou duas frases.', foto: '/equipe/nome.jpg' },
];

export const DEPOIMENTOS: Depoimento[] = [
  // { nome: 'Nome', curso: 'Russo · dia 40', texto: 'Depoimento real, com autorização.', foto: '/equipe/aluno.jpg' },
];
