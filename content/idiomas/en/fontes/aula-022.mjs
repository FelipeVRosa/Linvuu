import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 22, titulo: 'Contar histórias: conectores e used to', nivel: 'a2',
  objetivo: 'Contar uma história no passado em sequência com conectores (first, then, after that, finally, when, because), falar de hábitos antigos com «used to» e fazer perguntas sobre o passado.',
  nota: 'Você conta uma história com começo, meio e fim. Próxima aula: passado contínuo.',
  sessoes: [
    sessao('S1', 'Conectores de sequência', [
      revisao(5, 'Diga 5 irregulares e o passado deles. Faça uma pergunta com «Did you…?»'),
      palavras(8, [
        ['first', 'fãrst', 'primeiro', ''], ['then', 'dén', 'depois, então', ''], ['after that', 'éfter dét', 'depois disso', ''], ['finally', 'fáinali', 'finalmente', ''], ['suddenly', 'sâdenli', 'de repente', ''], ['in the end', 'in di énd', 'no final', ''], ['at first', 'ét fãrst', 'no começo', ''], ['later', 'lêiter', 'mais tarde', ''],
      ]),
      gramatica(12, 'Organizar uma história', 'PASSO 1: uma boa história tem começo, meio e fim. Use conectores: «First, I woke up. Then I had breakfast. After that, I went to work. Finally, I came home.» PASSO 2: «suddenly» introduz algo inesperado: «Suddenly, the phone rang.» PASSO 3: vírgula depois do conector no começo da frase: «First, …», «Then, …» PASSO 4: «when» e «because» ligam ideias: «I was late because I missed the bus.», «When I arrived, the class started.» PASSO 5: «so» mostra consequência: «I was tired, so I went to bed.» PASSO 6: não repita «and then» em todas as frases. Varie.', {
        tag: 'Conectores',
        comparacao: 'em português usamos «primeiro, depois, em seguida, por fim». O inglês tem os equivalentes diretos: first, then, after that, finally.',
        tabela: [
          { portugues: 'primeiro', ingles: 'first', uso: 'começo' }, { portugues: 'depois', ingles: 'then / after that', uso: 'meio' }, { portugues: 'de repente', ingles: 'suddenly', uso: 'surpresa' }, { portugues: 'por fim', ingles: 'finally', uso: 'fim' }, { portugues: 'por isso', ingles: 'so', uso: 'consequência' },
        ],
        erros: [['At the end, I went home.', 'In the end, I went home.', '«in the end» = no final.'], ['I was late because I was tired, so I went to bed because.', 'I was tired, so I went to bed.', 'Não repita conectores.'], ['Then, after that, finally, I came.', 'Finally, I came home.', 'Escolha um conector por frase.']],
      }),
      producao(5, 'Conte o seu último dia útil em 5 frases com first, then, after that e finally.'),
    ]),
    sessao('S2', 'Used to: hábitos do passado', [
      revisao(4, 'Conte uma história curta de 4 frases com conectores.'),
      palavras(6, [
        ['used to', 'iuzd tu', 'costumava', ''], ['when I was a child', 'uén ái uóz a tcháild', 'quando eu era criança', ''], ['every summer', 'évri sâmer', 'todo verão', ''], ['grandparents', 'grénpérents', 'avós', ''], ['village', 'vílidj', 'vilarejo', ''], ['toys', 'tóiz', 'brinquedos', ''],
      ]),
      gramatica(12, 'Used to', 'PASSO 1: «used to + verbo» fala de hábitos ou situações do PASSADO que não acontecem mais: «I used to play football every day.» PASSO 2: serve para TODAS as pessoas, sem -s: «She used to live in Rio.» PASSO 3: negativa: «didn\'t use to»: «I didn\'t use to like coffee.» (sem o -d final). PASSO 4: pergunta: «Did you use to play?» PASSO 5: não use para fatos únicos: «I used to go to Paris last year» está errado; use «I went to Paris last year.» PASSO 6: compare: «I play football» (hoje), «I used to play football» (antes, não mais).', {
        tag: 'Used to',
        comparacao: 'em português usamos o pretérito imperfeito: «eu jogava futebol todo dia», «ela morava no Rio». O inglês usa «used to + verbo» para o mesmo sentido.',
        tabela: [
          { afirmativa: 'I used to play football.', negativa: 'I didn\'t use to play football.', pergunta: 'Did you use to play football?' }, { afirmativa: 'She used to live in Rio.', negativa: 'She didn\'t use to live in Rio.', pergunta: 'Did she use to live in Rio?' },
        ],
        erros: [['I use to play football. (antes)', 'I used to play football.', 'Faltou o -d.'], ['She didn\'t used to live there.', 'She didn\'t use to live there.', 'Depois de didn\'t, sem -d.'], ['I used to travel to Paris yesterday.', 'I traveled to Paris yesterday.', 'Fato único: passado simples.']],
      }),
      producao(8, 'Diga 5 coisas que você costumava fazer quando era criança e que não faz mais.'),
    ]),
    sessao('S3', 'Contar uma história completa', [
      revisao(4, 'Diga 3 hábitos antigos seus com «used to» e 1 com «didn\'t use to».'),
      palavras(5, [
        ['wake up', 'uêik âp', 'acordar', ''], ['miss the bus', 'mis dâ bâs', 'perder o ônibus', ''], ['arrive', 'aráiv', 'chegar', ''], ['meeting', 'míitin', 'reunião', ''], ['luckily', 'lâkili', 'felizmente', ''],
      ]),
      gramatica(8, 'Perguntas para pedir uma história', 'PASSO 1: para pedir detalhes: «What happened?», «Then what?», «How did it end?», «Why did you…?» PASSO 2: para reagir: «Really?», «Oh no!», «What did you do?» PASSO 3: «happen» nunca vira «did happen» na pergunta sobre o sujeito: «What happened?», não «What did happen?» PASSO 4: use «luckily» e «unfortunately» para marcar sorte e azar.', {
        tag: 'Reagir e perguntar',
        comparacao: 'em português «O que aconteceu?» tem o mesmo formato que o inglês, mas sem «did»: «What happened?».',
        tabela: [
          { portugues: 'O que aconteceu?', ingles: 'What happened?', nota: 'sem did' }, { portugues: 'E depois?', ingles: 'Then what?', nota: '' }, { portugues: 'Como terminou?', ingles: 'How did it end?', nota: 'com did' }, { portugues: 'Felizmente...', ingles: 'Luckily, ...', nota: '' },
        ],
        erros: [['What did happen?', 'What happened?', 'Sujeito sem did.'], ['I misseded the bus.', 'I missed the bus.', 'Só um -ed.']],
      }),
      dialogo(8, 'A bad morning / Uma manhã ruim', 'Ben conta a Lucy o que aconteceu.', [
        ['Lucy', 'You look tired, Ben. What happened?', 'Você parece cansado, Ben. O que aconteceu?'], ['Ben', 'I woke up late, so I missed the bus.', 'Acordei tarde, então perdi o ônibus.'], ['Lucy', 'Oh no! What did you do?', 'Ah, não! O que você fez?'], ['Ben', 'First, I called a taxi. Then I waited for twenty minutes.', 'Primeiro chamei um táxi. Depois esperei vinte minutos.'], ['Lucy', 'Did you arrive on time?', 'Você chegou a tempo?'], ['Ben', 'No, I didn\'t. I arrived late to the meeting. Luckily, my boss was kind.', 'Não. Cheguei atrasado à reunião. Felizmente, o meu chefe foi gentil.'],
      ]),
      producao(5, 'Conte a Lucy uma história sua em que algo deu errado, com 5 conectores.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 22', [
      revisao(5, 'Conte a história mais engraçada que você viveu, com conectores.'),
      exercicios(20, [
        ouvir('First, I woke up and then I had breakfast', ['First, I woke up and then I had breakfast', 'First, I wake up and then I have breakfast', 'Finally, I woke up and then I had breakfast'], 'First, I woke up and then I had breakfast', 'Ouça «first» e «then».'), ouvir('I used to play football every day', ['I used to play football every day', 'I use to play football every day', 'I used to watch football every day'], 'I used to play football every day', 'Ouça «used to».'), ditado('What happened', 'Escreva: what happened.'), ditado('Suddenly, the phone rang', 'Escreva: suddenly, the phone rang.'),
        mc('Qual frase fala de um hábito antigo?', ['I used to play football.', 'I play football.', 'I am playing football.'], 'I used to play football.', 'used to = hábito passado.'), mc('Qual é a pergunta correta?', ['What happened?', 'What did happen?', 'What happen?'], 'What happened?', 'Sem did.'), mc('Qual conector mostra o fim?', ['finally', 'first', 'suddenly'], 'finally', 'Finally = por fim.'), mc('Qual frase está correta?', ['I didn\'t use to like coffee.', 'I didn\'t used to like coffee.', 'I not used to like coffee.'], 'I didn\'t use to like coffee.', 'didn\'t use to.'),
        lacuna('___, I woke up. Then I ate. (primeiro)', ['First', 'Finally', 'Suddenly'], 'First', 'Começo da sequência.'), lacuna('I was tired, ___ I went to bed. (por isso)', ['so', 'because', 'but'], 'so', 'Consequência.'), lacuna('I was late ___ I missed the bus. (porque)', ['because', 'so', 'then'], 'because', 'Causa.'), lacuna('She ___ to live in Rio. (costumava)', ['used', 'use', 'uses'], 'used', 'used to.'),
        ordem('Ordene: «First, I called a taxi.»', ['First,', 'I', 'called', 'a', 'taxi'], 'First, I called a taxi.', 'Conector + sujeito + passado.'), ordem('Ordene: «She used to live in Rio.»', ['She', 'used', 'to', 'live', 'in', 'Rio'], 'She used to live in Rio.', 'used to + verbo.'),
        livre('Conte em 5 frases o que aconteceu hoje de manhã, com first, then e finally.', 'First, I woke up. Then I had breakfast. After that, I took the bus. I arrived at work. Finally, I started my day.'),
      ]),
      producao(5, 'Conte em 1 minuto como a sua vida mudou, com 3 «used to» e 3 frases no presente.'),
    ]),
  ],
});
