import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 19, titulo: 'O passado do to be: was e were', nivel: 'a2',
  objetivo: 'Falar do passado com «was» e «were», dizer onde você estava e como foi, usar ordinais e datas, e marcar o passado com «yesterday», «last» e «ago».',
  nota: 'Você conta onde esteve e como foi. Próxima aula: o passado dos verbos regulares.',
  sessoes: [
    sessao('S1', 'Was e were', [
      revisao(5, 'Diga 3 planos seus com «going to» e como está o tempo hoje.'),
      palavras(8, [
        ['was', 'uóz', 'era, estava, foi', ''], ['were', 'uãr', 'eram, estavam, foram', ''], ['yesterday', 'iésterdei', 'ontem', ''], ['last night', 'lést náit', 'ontem à noite', ''], ['last week', 'lést uíik', 'semana passada', ''], ['ago', 'agôu', 'atrás (tempo)', ''], ['born', 'bórn', 'nascido', ''], ['tired', 'táierd', 'cansado', ''],
      ]),
      gramatica(12, 'Was e were', 'PASSO 1: «was» e «were» são o passado de «am/is/are». PASSO 2: «was» vai com I, he, she, it: «I was tired.», «She was at home.» PASSO 3: «were» vai com you, we, they: «We were at school.» PASSO 4: negativa: «wasn\'t» e «weren\'t»: «He wasn\'t at work.» PASSO 5: pergunta: inverta: «Were you at home?», «Was it good?» Resposta curta: «Yes, I was.», «No, they weren\'t.» PASSO 6: marcadores: yesterday, last night, last week, two days ago. PASSO 7: «ago» vem DEPOIS do tempo: «two days ago», nunca «ago two days».', {
        tag: 'Passado do to be',
        comparacao: 'em português o passado de «ser/estar» varia muito (era, foi, estava, esteve). O inglês tem só duas formas: «was» e «were». O contexto diz se foi «era» ou «foi».',
        tabela: [
          { afirmativa: 'I was at home.', negativa: 'I wasn\'t at home.', pergunta: 'Was I at home?' }, { afirmativa: 'She was tired.', negativa: 'She wasn\'t tired.', pergunta: 'Was she tired?' }, { afirmativa: 'They were happy.', negativa: 'They weren\'t happy.', pergunta: 'Were they happy?' },
        ],
        erros: [['I were at home.', 'I was at home.', 'I → was.'], ['They was tired.', 'They were tired.', 'they → were.'], ['Did you were at home?', 'Were you at home?', 'Sem «did» com o to be.'], ['ago two days', 'two days ago', '«ago» vem depois.']],
      }),
      producao(5, 'Diga onde você estava ontem à noite, na semana passada e há dois anos.'),
    ]),
    sessao('S2', 'Datas e ordinais', [
      revisao(4, 'Diga em inglês: «ele estava cansado», «elas não estavam em casa», «você estava no trabalho?»'),
      palavras(6, [
        ['first', 'fãrst', 'primeiro', ''], ['second', 'sékend', 'segundo', ''], ['third', 'thãrd', 'terceiro', ''], ['fifth', 'fífth', 'quinto', ''], ['twentieth', 'tuéntieth', 'vigésimo', ''], ['birthday', 'bãrthdei', 'aniversário', ''],
      ]),
      gramatica(12, 'Ordinais e datas', 'PASSO 1: os três primeiros são irregulares: first (1st), second (2nd), third (3rd). PASSO 2: a partir do quarto, acrescente -th: fourth, fifth (note: five → fifth), sixth, seventh, eighth, ninth, tenth. PASSO 3: dezenas terminadas em -ty trocam o -y por -ieth: twentieth, thirtieth. PASSO 4: datas nos EUA: MÊS + dia: «October 7th» (7 de outubro) e escrito «10/7». No Brasil é dia/mês: tome cuidado! PASSO 5: fale a data assim: «It\'s October seventh.» ou «October the seventh». PASSO 6: ano: «nineteen ninety-nine» (1999), «two thousand twenty-six» ou «twenty twenty-six» (2026). PASSO 7: «My birthday is on May 3rd.»', {
        tag: 'Ordinais e datas',
        comparacao: 'em português a data vai DIA/MÊS (7/10). Nos EUA vai MÊS/DIA (10/7). Um erro aqui pode marcar um compromisso no mês errado.',
        tabela: [
          { numero: '1', ordinal: 'first', nota: 'irregular' }, { numero: '5', ordinal: 'fifth', nota: 'five → fifth' }, { numero: '9', ordinal: 'ninth', nota: 'nine → ninth' }, { numero: '20', ordinal: 'twentieth', nota: '-ty → -tieth' },
        ],
        erros: [['the 7 of October', 'October 7th', 'Nos EUA, mês primeiro.'], ['fiveth', 'fifth', 'Irregular.'], ['twentyth', 'twentieth', '-ty → -tieth.'], ['nineth', 'ninth', 'Sem o «e».']],
      }),
      producao(8, 'Diga 5 datas importantes na sua vida, no formato americano.'),
    ]),
    sessao('S3', 'Contar como foi', [
      revisao(4, 'Diga o ordinal de 1, 2, 3, 5, 9, 12, 20.'),
      palavras(5, [
        ['great', 'grêit', 'ótimo', ''], ['boring', 'bórin', 'chato', ''], ['interesting', 'íntrestin', 'interessante', ''], ['party', 'párti', 'festa', ''], ['trip', 'trip', 'viagem curta', ''],
      ]),
      gramatica(8, 'Boring ou bored?', 'PASSO 1: adjetivos em -ing descrevem a COISA: «The movie was boring.», «The trip was interesting.» PASSO 2: adjetivos em -ed descrevem a PESSOA que sente: «I was bored.», «She was excited.» PASSO 3: troque e muda o sentido: «He is boring» = ele é chato; «He is bored» = ele está entediado. PASSO 4: use «How was…?» para perguntar sobre algo: «How was the party?» → «It was great.»', {
        tag: 'Adjetivos -ing/-ed',
        comparacao: 'em português «chato/entediado» são palavras diferentes. Em inglês a mesma raiz muda só o final: «boring» (a coisa) e «bored» (quem sente).',
        tabela: [
          { coisa: 'The movie was boring.', pessoa: 'I was bored.', sentido: 'tédio' }, { coisa: 'The game was exciting.', pessoa: 'We were excited.', sentido: 'emoção' }, { coisa: 'The day was tiring.', pessoa: 'I was tired.', sentido: 'cansaço' },
        ],
        erros: [['I am boring today.', 'I am bored today.', 'Você sente: -ed.'], ['The film was bored.', 'The film was boring.', 'A coisa: -ing.']],
      }),
      dialogo(8, 'How was your weekend? / Como foi o seu fim de semana?', 'Sam e Maria conversam na segunda-feira.', [
        ['Sam', 'Hi Maria! How was your weekend?', 'Oi, Maria! Como foi o seu fim de semana?'], ['Maria', 'It was great. I was at a party on Saturday.', 'Foi ótimo. Fui a uma festa no sábado.'], ['Sam', 'Was it fun?', 'Foi divertido?'], ['Maria', 'Yes, it was. The music was amazing and the people were very nice.', 'Foi. A música era incrível e as pessoas eram muito simpáticas.'], ['Sam', 'Were your friends there?', 'Seus amigos estavam lá?'], ['Maria', 'Some of them were. And you? Where were you?', 'Alguns estavam. E você? Onde você estava?'], ['Sam', 'I was at home. It was a boring weekend, but I was tired.', 'Em casa. Foi um fim de semana chato, mas eu estava cansado.'],
      ]),
      producao(5, 'Conte como foi o seu último fim de semana, com «was» e «were» e dois adjetivos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 19', [
      revisao(5, 'Conte onde você estava ontem e como foi o dia.'),
      exercicios(20, [
        ouvir('We were at home last night', ['We were at home last night', 'We was at home last night', 'They were at home last night'], 'We were at home last night', 'Ouça «were».'), ouvir('How was your weekend', ['How was your weekend', 'How were your weekend', 'Who was your weekend'], 'How was your weekend', 'Ouça «was».'), ditado('She wasn\'t at work yesterday', 'Escreva: she wasn\'t at work yesterday.'), ditado('Were you tired', 'Escreva: were you tired.'),
        mc('Qual frase está correta?', ['They were happy.', 'They was happy.', 'They be happy.'], 'They were happy.', 'they → were.'), mc('Qual é a data americana de 7 de outubro?', ['October 7th', '7th October', 'the 7 of October'], 'October 7th', 'Mês primeiro.'), mc('Qual frase descreve a pessoa que sente tédio?', ['I was bored.', 'I was boring.', 'I was bore.'], 'I was bored.', 'Quem sente: -ed.'), mc('Qual é o ordinal de «5»?', ['fifth', 'fiveth', 'fivth'], 'fifth', 'Irregular.'),
        lacuna('I ___ at home. (estava)', ['was', 'were', 'am'], 'was', 'I → was.'), lacuna('___ you at school? (você estava)', ['Were', 'Was', 'Did'], 'Were', 'you → were.'), lacuna('It was two days ___ . (atrás)', ['ago', 'before', 'last'], 'ago', '«ago» vem depois.'), lacuna('The movie was ___ . (chato)', ['boring', 'bored', 'bore'], 'boring', 'A coisa: -ing.'),
        ordem('Ordene: «She was not at home yesterday.»', ['She', 'was', 'not', 'at', 'home', 'yesterday'], 'She was not at home yesterday.', 'was + not.'), ordem('Ordene: «Were they at the party?»', ['Were', 'they', 'at', 'the', 'party'], 'Were they at the party?', 'Were + sujeito.'),
        livre('Escreva 4 frases sobre ontem: onde você estava, como foi o dia e uma frase negativa.', 'I was at work. It was a long day. I was tired. I wasn\'t at home in the afternoon.'),
      ]),
      producao(5, 'Conte em 1 minuto o último dia especial que você teve, com data e adjetivos.'),
    ]),
  ],
});
