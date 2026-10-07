import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 33, titulo: 'Present perfect ou passado simples?', nivel: 'a2',
  objetivo: 'Decidir entre present perfect e passado simples olhando o marcador de tempo, e contar uma história de vida usando os dois tempos sem erros.',
  nota: 'Você escolhe o tempo certo para cada frase. Próxima aula: phrasal verbs de uso diário.',
  sessoes: [
    sessao('S1', 'A regra do tempo', [
      revisao(5, 'Diga há quanto tempo você faz 4 coisas, com for e since.'),
      palavras(8, [
        ['yesterday', 'iésterdei', 'ontem', ''], ['last week', 'lést uíik', 'semana passada', ''], ['in 2020', 'in tuéni tuéni', 'em 2020', ''], ['ago', 'agôu', 'atrás', ''], ['so far', 'sôu fár', 'até agora', ''], ['this week', 'dis uíik', 'esta semana', ''], ['today', 'tudêi', 'hoje', ''], ['already', 'olrédi', 'já', ''],
      ]),
      gramatica(12, 'Dois tempos, duas perguntas', 'PASSO 1: pergunte-se: O TEMPO ESTÁ DEFINIDO e FECHADO? Se disser «yesterday», «last week», «in 2020», «two years ago», use PASSADO SIMPLES: «I saw her yesterday.» PASSO 2: Se o tempo NÃO está dito ou ainda está ABERTO («today», «this week», «so far», «ever», «already»), use PRESENT PERFECT: «I have seen her this week.» PASSO 3: pergunta do «when»: «When did you see her?» (simples, pois pede o momento). PASSO 4: perguntas de experiência: «Have you seen her?» (perfect) e depois detalhes: «When did you see her?» (simples). PASSO 5: «today» e «this week» podem ir com os dois, conforme o período ainda esteja aberto ou já tenha acabado: de manhã, «I have worked a lot today»; à noite, depois do expediente, também aceita-se «I worked a lot today». PASSO 6: no inglês americano, o passado simples com «already» e «just» é comum: «I already ate.» Mas as provas pedem o present perfect.', {
        tag: 'Perfect × simples',
        comparacao: 'em português o pretérito perfeito serve para os dois («fui ao Japão em 2020» e «já fui ao Japão»). O inglês precisa de dois tempos: simples (tempo definido) e present perfect (sem tempo, ou tempo aberto).',
        tabela: [
          { marcador: 'yesterday, last week, in 2020, ago', tempo: 'passado simples', exemplo: 'I went to Japan in 2020.' }, { marcador: 'ever, never, already, yet, so far, this week', tempo: 'present perfect', exemplo: 'I have been to Japan.' }, { marcador: 'for, since (continua)', tempo: 'present perfect', exemplo: 'I have lived here for 5 years.' },
        ],
        erros: [['I have seen her yesterday.', 'I saw her yesterday.', 'yesterday: simples.'], ['Did you ever eat sushi?', 'Have you ever eaten sushi?', 'ever: perfect.'], ['I went to Japan. (experiência)', 'I have been to Japan.', 'Experiência sem tempo: perfect.'], ['When have you arrived?', 'When did you arrive?', 'when: simples.']],
      }),
      producao(5, 'Escolha o tempo certo em voz alta: «I ___ (see) her yesterday. I ___ (see) her this week. I ___ (go) to Rio in 2019. I ___ (be) to Rio twice.»'),
    ]),
    sessao('S2', 'Ligar os dois tempos', [
      revisao(4, 'Diga se cada frase pede simples ou perfect: «two years ago», «ever», «last week», «so far», «in 2021».'),
      palavras(6, [
        ['first time', 'fãrst táim', 'primeira vez', ''], ['second time', 'sékend táim', 'segunda vez', ''], ['start', 'stárt', 'começar', ''], ['since then', 'síns dén', 'desde então', ''], ['experience', 'ikspíriens', 'experiência', ''], ['finally', 'fáinali', 'finalmente', ''],
      ]),
      gramatica(12, 'Do geral ao particular', 'PASSO 1: um bom padrão para contar a vida: comece com o present perfect (a visão geral) e passe para o simples (os detalhes). «I have traveled a lot. Last year, I went to Japan. I stayed for two weeks. I loved it.» PASSO 2: «This is the first time I have…» sempre usa o present perfect: «This is the first time I have eaten sushi.» PASSO 3: «It\'s the best movie I have ever seen.» (superlativo + present perfect). PASSO 4: «since then» liga: «I started English in 2023, and I have studied every day since then.» PASSO 5: evite misturar: se o detalhe tem data, passe ao simples.', {
        tag: 'Perfect e simples',
        comparacao: 'em português a transição entre «já fiz» e «fiz em 2020» é natural, mas o mesmo tempo verbal. Em inglês, a mudança de tempo avisa o ouvinte que você passou do geral ao detalhe.',
        tabela: [
          { geral: 'I have visited Japan.', detalhe: 'I went there in 2020.' }, { geral: 'I have eaten sushi.', detalhe: 'I ate it last week.' }, { geral: 'It\'s the best movie I have ever seen.', detalhe: 'I saw it yesterday.' },
        ],
        erros: [['It\'s the best movie I saw.', 'It\'s the best movie I have ever seen.', 'Superlativo + ever + perfect.'], ['This is the first time I ate sushi.', 'This is the first time I have eaten sushi.', 'first time: perfect.']],
      }),
      producao(8, 'Conte em 6 frases uma experiência: abra com o present perfect e dê detalhes no passado simples.'),
    ]),
    sessao('S3', 'Uma entrevista', [
      revisao(4, 'Faça 3 perguntas de experiência com «Have you ever…?» e uma de detalhe com «When did you…?»'),
      palavras(5, [
        ['interview', 'íntervíu', 'entrevista', ''], ['job', 'djób', 'emprego', ''], ['experience', 'ikspíriens', 'experiência', ''], ['skills', 'skílz', 'habilidades', ''], ['hire', 'háier', 'contratar', ''],
      ]),
      gramatica(8, 'Falar de experiência de trabalho', 'PASSO 1: em entrevistas, o present perfect abre: «I have worked in sales for three years.» PASSO 2: os detalhes vêm no simples: «At my last job, I managed a team of five people.» PASSO 3: perguntas comuns: «Have you worked in this field before?», «What did you do at your last job?» PASSO 4: use números e fatos: «I have sold more than 200 cars.»', {
        tag: 'Entrevista',
        comparacao: 'em português o currículo usa o presente («trabalho há três anos») e o passado («gerenciei»). Em inglês, a estrutura é presente perfeito + passado simples.',
        tabela: [
          { pergunta: 'Have you worked in this field before?', resposta: 'Yes, I have. I have worked in sales for three years.' }, { pergunta: 'What did you do at your last job?', resposta: 'I managed a small team.' },
        ],
        erros: [['I am working here for three years.', 'I have worked here for three years.', 'Continua: perfect.'], ['I have managed a team last year.', 'I managed a team last year.', 'last year: simples.']],
      }),
      dialogo(8, 'A job interview / Uma entrevista de emprego', 'Sarah entrevista Carlos para uma vaga.', [
        ['Sarah', 'Have you worked in sales before?', 'Você já trabalhou com vendas?'], ['Carlos', 'Yes, I have. I have worked in sales for four years.', 'Sim. Trabalho com vendas há quatro anos.'], ['Sarah', 'What did you do at your last job?', 'O que você fazia no seu último emprego?'], ['Carlos', 'I managed a small team and I sold cars. Last year, I sold more than two hundred.', 'Eu gerenciava uma pequena equipe e vendia carros. No ano passado, vendi mais de duzentos.'], ['Sarah', 'Why did you leave?', 'Por que saiu?'], ['Carlos', 'The company closed in March, so I have been looking for a new job since then.', 'A empresa fechou em março, então procuro um novo emprego desde então.'],
      ]),
      producao(5, 'Responda em voz alta como se fosse numa entrevista: experiência, último trabalho e por que quer a vaga.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 33', [
      revisao(5, 'Conte a sua experiência de vida em 8 frases, misturando os dois tempos.'),
      exercicios(20, [
        ouvir('I saw her yesterday', ['I saw her yesterday', 'I have seen her yesterday', 'I see her yesterday'], 'I saw her yesterday', 'Ouça «saw».'), ouvir('Have you ever eaten sushi', ['Have you ever eaten sushi', 'Did you ever eat sushi', 'Have you ever ate sushi'], 'Have you ever eaten sushi', 'Ouça «eaten».'), ditado('When did you arrive', 'Escreva: when did you arrive.'), ditado('This is the first time I have flown', 'Escreva: this is the first time I have flown.'),
        mc('Qual frase está correta?', ['I went to Japan in 2020.', 'I have gone to Japan in 2020.', 'I have been to Japan in 2020.'], 'I went to Japan in 2020.', 'Com ano: simples.'), mc('Qual frase está correta?', ['Have you ever been to Japan?', 'Did you ever be to Japan?', 'Have you ever went to Japan?'], 'Have you ever been to Japan?', 'ever: perfect.'), mc('Qual pergunta pede o momento?', ['When did you arrive?', 'When have you arrived?', 'When you arrived?'], 'When did you arrive?', 'when: simples.'), mc('Qual frase está correta?', ['This is the first time I have eaten sushi.', 'This is the first time I ate sushi.', 'This is the first time I am eating sushi.'], 'This is the first time I have eaten sushi.', 'first time: perfect.'),
        lacuna('I ___ her yesterday. (vi)', ['saw', 'have seen', 'see'], 'saw', 'yesterday: simples.'), lacuna('I ___ been to Japan. (já estive)', ['have', 'did', 'was'], 'have', 'perfect.'), lacuna('She ___ here since 2020. (mora)', ['has lived', 'lived', 'lives'], 'has lived', 'Continua.'), lacuna('When ___ you move here?', ['did', 'have', 'do'], 'did', 'when: did.'),
        ordem('Ordene: «I have never been to Japan.»', ['I', 'have', 'never', 'been', 'to', 'Japan'], 'I have never been to Japan.', 'have + never + particípio.'), ordem('Ordene: «She went to Rio last year.»', ['She', 'went', 'to', 'Rio', 'last', 'year'], 'She went to Rio last year.', 'passado + last year.'),
        livre('Escreva 5 frases: duas com present perfect, duas com passado simples e uma pergunta com «When did you…?»', 'I have visited Japan. I have eaten sushi. I went there in 2020. I stayed for two weeks. When did you visit Japan?'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua carreira ou os seus estudos, do geral ao detalhe.'),
    ]),
  ],
});
