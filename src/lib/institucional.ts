// Textos das páginas institucionais "Por que estudar com a Linvuu?" e "Contato".
// Ficam aqui para a página React e o HTML entregue ao Google (metaRota.ts) dizerem exatamente o mesmo.
// Regra do projeto (docs/MARKETING.md): só fatos verificáveis, sem número de vaidade, sem promessa de fluência.

export const POR_QUE = {
  titulo: 'Por que estudar com a Linvuu?',
  descricao: 'Explicação em português, erros típicos de brasileiros, áudio em cada frase, sessões de 30 minutos e livros escritos por quem dá aula. Veja o que muda na Linvuu.',
  lead: 'A Linvuu é para quem fala português e quer aprender inglês, espanhol, alemão, francês, italiano ou russo sem decorar regras soltas. Cada aula parte do que você já sabe, explica o porquê e mostra o erro que quase todo brasileiro comete.',
  motivos: [
    { id: 'portugues', titulo: 'Parte do português, não do zero', texto: 'Cada capítulo começa por um hábito seu que o outro idioma não aceita: dizer “tenho 30 anos” em inglês, ler uma palavra francesa letra por letra, achar que “exquisito” em espanhol é “esquisito”. Quem sabe qual é o hábito corrige o erro em semanas, e não em anos.' },
    { id: 'explicacao', titulo: 'Explicação na sua língua', texto: 'A regra vem completa, em português, com as exceções e o erro típico. O idioma estudado aparece em frases curtas, diálogos e tabelas, e você entende por que a frase é assim antes de repetir.' },
    { id: 'audio', titulo: 'Som em cada frase', texto: 'Diálogos, frases prontas e vocabulário têm áudio, para você ouvir e repetir desde o primeiro dia. As vozes são geradas por síntese de voz neural, e o site avisa quando houver gravações de falantes nativos.' },
    { id: 'sessoes', titulo: 'Sessões de 30 minutos', texto: 'Cada aula é dividida em sessões de 30 minutos, em passos pequenos. Dá para estudar no intervalo do trabalho e retomar no dia seguinte sem perder o fio.' },
    { id: 'correcao', titulo: 'Exercícios corrigidos na hora', texto: 'Escolha, lacuna e produção, com a resposta certa e a explicação do erro logo depois de cada tentativa. Você descobre na hora o que errou e por quê.' },
    { id: 'livro-e-curso', titulo: 'O livro e o curso se completam', texto: 'O livro traz a situação, a armadilha do português e o treino em degraus. O site traz o passo a passo, o vocabulário com áudio e os exercícios corrigidos. O que existe só de um lado vira conteúdo dos dois.' },
    { id: 'autoria', titulo: 'Autoria com nome e sobrenome', texto: 'Os textos são de Felipe Nascimento Rosa e Luiza Nascimento Rosa, matemáticos com experiência em linguística e ensino de idiomas. Eles escrevem, revisam e adaptam os livros e as aulas, a partir da experiência de sala de aula.' },
    { id: 'gratis', titulo: 'Dá para começar sem pagar', texto: 'As duas primeiras aulas de cada curso são grátis, e os dois primeiros capítulos de cada livro podem ser lidos inteiros, com áudio. Você testa o método antes de decidir.' },
  ],
  paraQuem: 'Os cursos vão do A1 ao B1 do quadro europeu (CEFR). Servem para quem está começando, para quem estudou e travou e para quem quer organizar o que já sabe. A Linvuu não promete fluência em 30 dias: promete explicação clara e prática diária que funciona.',
} as const;

export const CONTATO = {
  titulo: 'Contato',
  descricao: 'Como falar com a Linvuu: dúvidas sobre os cursos, os livros e o seu acesso, por e-mail e pelo LinkedIn dos autores.',
  lead: 'Dúvidas sobre os cursos, os livros ou o seu acesso? Escolha o canal que for mais fácil para você.',
} as const;

export const EX_ALUNOS = {
  titulo: 'Ex-alunos da Udemy: continue o russo na Linvuu',
  descricao: 'Estudou russo comigo na Udemy? Continue na Linvuu: livro de russo A1–A2 em português, dois capítulos grátis e uma condição especial para ex-alunos.',
  lead: 'Se você fez um dos meus cursos de russo na Udemy, a Linvuu é o próximo passo: o mesmo método, agora com o livro de russo em português, áudio em cada frase e exercícios com correção.',
  mensagemWhatsapp: 'Olá! Fui aluno(a) de russo na Udemy e quero a condição especial para ex-alunos da Linvuu.',
  beneficios: [
    'O livro de russo A1–A2 em português, do alfabeto às primeiras conversas.',
    'O curso de russo em 78 aulas e 312 sessões curtas, com áudio em cada frase.',
    'Gramática de russo explicada em português, tópico por tópico, com tabelas e erros comuns.',
    'As duas primeiras aulas e dois capítulos do livro grátis, sem cartão.',
  ],
  passos: [
    'Crie sua conta grátis na Linvuu.',
    'Mande uma mensagem pelo WhatsApp com um print que mostre o seu curso de russo na Udemy (a tela do curso ou o certificado).',
    'Depois da confirmação, você recebe o código da condição especial e o livro completo.',
  ],
  aviso: 'Não envie dados de cartão, senha ou documentos: o print do curso é suficiente.',
  perguntas: [
    { p: 'Quanto custa a condição especial?', r: 'É um desconto grande, só para ex-alunos. O valor e a validade são informados na confirmação.' },
    { p: 'Preciso ter terminado o curso da Udemy?', r: 'Não. Basta ter estudado russo comigo na Udemy.' },
    { p: 'Posso testar antes de decidir?', r: 'Pode. As duas primeiras aulas e dois capítulos do livro são grátis.' },
  ],
} as const;
