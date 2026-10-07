import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 17, titulo: 'Tempo e clima: estações e planos próximos', nivel: 'a1',
  objetivo: 'Descrever o tempo (clima) com «it is», falar das estações e dizer planos próximos com «going to».',
  nota: 'Você fala do clima e do que vai fazer. Próxima aula: revisão e simulado do A1.',
  sessoes: [
    sessao('S1', 'O clima', [
      revisao(5, 'Diga o que você faz todo dia e o que está fazendo agora, sem misturar os tempos.'),
      palavras(8, [
        ['sunny', 'sâni', 'ensolarado', ''], ['rainy', 'rêini', 'chuvoso', ''], ['cloudy', 'cláudi', 'nublado', ''], ['windy', 'uíndi', 'ventoso', ''], ['hot', 'rót', 'quente', ''], ['cold', 'côuld', 'frio', ''], ['warm', 'uórm', 'morno, agradável', ''], ['snow', 'snôu', 'neve', ''],
      ]),
      gramatica(12, 'Falar do clima com «it»', 'PASSO 1: o sujeito do clima é sempre «it»: «It is sunny.», «It is cold.» PASSO 2: verbos de clima: «It rains.» (chove, hábito), «It is raining.» (está chovendo agora), «It snows.» PASSO 3: pergunta: «What is the weather like?» → «It is hot and sunny.» PASSO 4: «How is the weather?» também serve. PASSO 5: temperatura: «It is 25 degrees.» (graus Celsius; os EUA usam Fahrenheit: 77°F). PASSO 6: não existe «Makes cold» nem «Is cold» sem sujeito: o inglês exige «it».', {
        tag: 'Clima',
        comparacao: 'em português dizemos «está frio», «faz sol», «chove» sem sujeito. O inglês sempre exige o sujeito «it»: «It is cold.», «It is sunny.», «It is raining.»',
        tabela: [
          { portugues: 'Está frio.', ingles: 'It is cold.', nota: 'it + be' }, { portugues: 'Faz sol.', ingles: 'It is sunny.', nota: 'it + be' }, { portugues: 'Está chovendo.', ingles: 'It is raining.', nota: 'agora' }, { portugues: 'Como está o tempo?', ingles: 'What is the weather like?', nota: '' },
        ],
        erros: [['Is cold today.', 'It is cold today.', 'Falta o sujeito «it».'], ['Makes sun.', 'It is sunny.', 'Sem «make».'], ['It have rain.', 'It is raining.', 'Use «be».'], ['What is the weather like? → Is hot.', 'It is hot.', 'Responda com «it».']],
      }),
      producao(5, 'Diga como está o tempo hoje e em 3 cidades que você conhece.'),
    ]),
    sessao('S2', 'Estações e meses', [
      revisao(4, 'Diga 5 tipos de clima em inglês e o mês em que cada um é comum na sua cidade.'),
      palavras(6, [
        ['spring', 'spríng', 'primavera', ''], ['summer', 'sâmer', 'verão', ''], ['autumn', 'ótum', 'outono', ''], ['fall', 'fól', 'outono (EUA)', ''], ['winter', 'uínter', 'inverno', ''], ['season', 'síizon', 'estação do ano', ''],
      ]),
      gramatica(12, 'As estações: in the + estação', 'PASSO 1: estações levam «in the»: «in the summer», «in the winter». PASSO 2: nos EUA, outono é «fall», e no Reino Unido, «autumn». Aqui o curso usa o inglês americano: «fall». PASSO 3: estações NÃO têm letra maiúscula (ao contrário de dias e meses): «summer», não «Summer». PASSO 4: «My favorite season is winter.» PASSO 5: lembre que o Brasil e os EUA têm estações INVERTIDAS: dezembro é verão aqui e inverno lá. Cuide ao falar com estrangeiros: diga «summer in Brazil» ou «summer in the US». PASSO 6: «It is hot in the summer.»', {
        tag: 'Estações',
        comparacao: 'em português «no verão» usa «em» + artigo. O inglês usa «in the»: «in the summer». Note a diferença com meses: «in June» (sem «the»).',
        tabela: [
          { portugues: 'no verão', ingles: 'in the summer', nota: 'in the' }, { portugues: 'em junho', ingles: 'in June', nota: 'sem the' }, { portugues: 'no outono (EUA)', ingles: 'in the fall', nota: 'fall' }, { portugues: 'a minha estação favorita', ingles: 'my favorite season', nota: 'favorite (EUA)' },
        ],
        erros: [['in Summer', 'in the summer', 'Minúscula e «the».'], ['in the June', 'in June', 'Mês sem artigo.'], ['in the autumn (EUA)', 'in the fall', 'No inglês americano: fall.']],
      }),
      producao(8, 'Diga a sua estação favorita, por quê, e como é o tempo em cada estação no Brasil.'),
    ]),
    sessao('S3', 'Planos: going to', [
      revisao(4, 'Complete: «___ is hot in the summer. It ___ raining now. I like the ___ (inverno).»'),
      palavras(5, [
        ['going to', 'gôuin tu', 'ir (fazer)', ''], ['tonight', 'tunáit', 'esta noite', ''], ['next week', 'nékst uíik', 'semana que vem', ''], ['weekend', 'uíikend', 'fim de semana', ''], ['plan', 'plén', 'plano', ''],
      ]),
      gramatica(8, 'Going to: o que vou fazer', 'PASSO 1: para planos próximos, use «be + going to + verbo»: «I am going to study tonight.» PASSO 2: a estrutura é «am/is/are + going to + verbo simples»: «She is going to travel next week.» PASSO 3: negativa: «I\'m not going to work.», «They aren\'t going to come.» PASSO 4: pergunta: «Are you going to travel?» → «Yes, I am.» PASSO 5: palavras de futuro: tomorrow, tonight, next week, next month, this weekend. PASSO 6: na fala, «going to» vira «gonna»: «I\'m gonna study.» Entenda, mas na escrita use «going to».', {
        tag: 'Futuro',
        comparacao: 'em português «vou estudar» usa «ir + infinitivo». O inglês faz idêntico: «am going to + verbo». É um acerto direto: «vou viajar» = «I am going to travel».',
        tabela: [
          { afirmativa: 'I am going to study.', negativa: 'I\'m not going to study.', pergunta: 'Am I going to study?' }, { afirmativa: 'She is going to travel.', negativa: 'She isn\'t going to travel.', pergunta: 'Is she going to travel?' }, { afirmativa: 'They are going to come.', negativa: 'They aren\'t going to come.', pergunta: 'Are they going to come?' },
        ],
        erros: [['I going to study.', 'I am going to study.', 'Falta «am».'], ['She is going to studies.', 'She is going to study.', 'Verbo simples.'], ['Are you go to travel?', 'Are you going to travel?', '«going to».'], ['I will going to study.', 'I am going to study.', 'Não misture «will» e «going to».']],
      }),
      dialogo(8, 'Weekend plans / Planos de fim de semana', 'Kate e Dan combinam o fim de semana.', [
        ['Kate', 'What is the weather like on Saturday?', 'Como vai estar o tempo no sábado?'], ['Dan', 'It is going to be sunny and warm.', 'Vai estar ensolarado e agradável.'], ['Kate', 'Great! Are you going to play football?', 'Ótimo! Você vai jogar futebol?'], ['Dan', 'Yes, I am. And you? What are you going to do?', 'Vou. E você? O que você vai fazer?'], ['Kate', 'I\'m going to go to the park with my sister.', 'Vou ao parque com a minha irmã.'], ['Dan', 'Nice! Is it going to rain on Sunday?', 'Legal! Vai chover no domingo?'], ['Kate', 'No, it isn\'t. It is going to be cloudy.', 'Não. Vai ficar nublado.'],
      ]),
      producao(5, 'Diga 5 planos seus para o fim de semana com «going to».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 17', [
      revisao(5, 'Descreva o clima de hoje e o que você vai fazer amanhã.'),
      exercicios(20, [
        ouvir('It is going to rain tomorrow', ['It is going to rain tomorrow', 'It is raining tomorrow', 'It is going to snow tomorrow'], 'It is going to rain tomorrow', 'Ouça «going to».'), ouvir('What is the weather like', ['What is the weather like', 'What is the weather', 'What are you like'], 'What is the weather like', 'Ouça «like».'), ditado('It is cold in the winter', 'Escreva: it is cold in the winter.'), ditado('I am going to study tonight', 'Escreva: I am going to study tonight.'),
        mc('Qual frase está correta?', ['It is cold today.', 'Is cold today.', 'Makes cold today.'], 'It is cold today.', 'Sujeito «it».'), mc('Como se diz «no verão»?', ['in the summer', 'in summer the', 'at the summer'], 'in the summer', 'in the + estação.'), mc('Qual frase indica plano?', ['I am going to travel.', 'I travel every day.', 'I traveled.'], 'I am going to travel.', 'going to = plano.'), mc('Qual é a pergunta correta?', ['Are you going to work?', 'You are going to work?', 'Do you going to work?'], 'Are you going to work?', 'be + sujeito + going to.'),
        lacuna('___ is sunny today.', ['It', 'He', 'There'], 'It', 'Clima: it.'), lacuna('I am ___ to study.', ['going', 'go', 'goes'], 'going', 'be + going to.'), lacuna('She ___ going to travel. (não vai)', ['isn\'t', 'doesn\'t', 'don\'t'], 'isn\'t', 'Negativa de to be.'), lacuna('My favorite ___ is winter.', ['season', 'weather', 'month'], 'season', 'season = estação.'),
        ordem('Ordene: «It is going to be sunny.»', ['It', 'is', 'going', 'to', 'be', 'sunny'], 'It is going to be sunny.', 'going to + be + adjetivo.'), ordem('Ordene: «What is the weather like today?»', ['What', 'is', 'the', 'weather', 'like', 'today'], 'What is the weather like today?', 'What + is + the weather like.'),
        livre('Escreva 4 frases: o tempo de hoje, a sua estação favorita, um plano para amanhã e um plano para o fim de semana.', 'It is sunny today. My favorite season is summer. I am going to study tomorrow. I am going to play football on the weekend.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o clima de amanhã e o seu plano para o dia.'),
    ]),
  ],
});
