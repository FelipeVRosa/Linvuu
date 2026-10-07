import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 30, titulo: 'Present perfect: experiências com ever e never', nivel: 'a2',
  objetivo: 'Formar o present perfect (have/has + particípio), usar os particípios regulares e irregulares mais comuns, e falar de experiências de vida com «ever» e «never».',
  nota: 'Você fala do que já fez na vida. Próxima aula: already, yet e just.',
  sessoes: [
    sessao('S1', 'Have/has + particípio', [
      revisao(5, 'Faça 3 pedidos educados e 2 previsões com «might».'),
      palavras(8, [
        ['have been', 'hév bín', 'já estive', ''], ['have seen', 'hév siin', 'já vi', ''], ['have eaten', 'hév íiten', 'já comi', ''], ['have visited', 'hév vízitid', 'já visitei', ''], ['have tried', 'hév tráid', 'já tentei, provei', ''], ['ever', 'éver', 'alguma vez', ''], ['never', 'néver', 'nunca', ''], ['experience', 'ikspíriens', 'experiência', ''],
      ]),
      gramatica(12, 'O present perfect', 'PASSO 1: formamos o present perfect com «have/has + particípio passado». PASSO 2: particípio dos regulares = passado simples (-ed): «visited», «worked», «tried». PASSO 3: particípio dos irregulares precisa ser aprendido: go → gone/been, see → seen, eat → eaten, do → done, write → written, take → taken, give → given, break → broken, speak → spoken. PASSO 4: «have» com I, you, we, they; «has» com he, she, it: «I have seen it.», «She has visited Rome.» PASSO 5: contração: «I\'ve», «she\'s», «they\'ve». PASSO 6: use o present perfect para EXPERIÊNCIAS sem dizer QUANDO: «I have been to Japan.» (em algum momento da vida). Se disser quando, use o passado simples: «I went to Japan in 2020.»', {
        tag: 'Present perfect',
        comparacao: 'em português «já fui ao Japão» e «fui ao Japão em 2020» usam o mesmo pretérito. O inglês separa: «I have been to Japan» (experiência) e «I went in 2020» (quando).',
        tabela: [
          { afirmativa: 'I have seen that movie.', negativa: 'I haven\'t seen that movie.', pergunta: 'Have you seen that movie?' }, { afirmativa: 'She has visited Rome.', negativa: 'She hasn\'t visited Rome.', pergunta: 'Has she visited Rome?' }, { afirmativa: 'They have eaten sushi.', negativa: 'They haven\'t eaten sushi.', pergunta: 'Have they eaten sushi?' },
        ],
        erros: [['I have went to Japan.', 'I have been to Japan.', 'Particípio de go é gone/been.'], ['She have visited Rome.', 'She has visited Rome.', 'she → has.'], ['I have seen it yesterday.', 'I saw it yesterday.', 'Com «yesterday», passado simples.'], ['I have see that movie.', 'I have seen that movie.', 'Particípio: seen.']],
      }),
      producao(5, 'Diga 5 coisas que você já fez na vida e 2 que nunca fez.'),
    ]),
    sessao('S2', 'Ever e never', [
      revisao(4, 'Dê o particípio de: go, see, eat, do, write, take, give, break, speak.'),
      palavras(6, [
        ['ever', 'éver', 'alguma vez', ''], ['never', 'néver', 'nunca', ''], ['once', 'uâns', 'uma vez', ''], ['twice', 'tuáis', 'duas vezes', ''], ['three times', 'thrii táimz', 'três vezes', ''], ['before', 'bifór', 'antes', ''],
      ]),
      gramatica(12, 'Ever, never e quantas vezes', 'PASSO 1: pergunta de experiência: «Have you ever been to Brazil?» (você já esteve alguma vez no Brasil?) PASSO 2: resposta afirmativa: «Yes, I have. I\'ve been there twice.» PASSO 3: resposta negativa: «No, I haven\'t.» ou «No, never.» PASSO 4: «never» já é negativo, sem «not»: «I have never seen snow.» PASSO 5: «ever» vem entre o auxiliar e o particípio: «Have you ever eaten sushi?» PASSO 6: contar vezes: once, twice, three times… «I have visited Rio three times.» PASSO 7: «This is the first time I have…» também usa o present perfect: «This is the first time I have flown.»', {
        tag: 'Ever e never',
        comparacao: 'em português «alguma vez» e «nunca» também marcam experiência: «você já foi?», «nunca fui». Em inglês, o present perfect é obrigatório com essas perguntas.',
        tabela: [
          { pergunta: 'Have you ever been to Brazil?', resposta: 'Yes, I have. / No, I haven\'t.' }, { pergunta: 'Has she ever eaten sushi?', resposta: 'Yes, she has. / No, she hasn\'t.' }, { pergunta: 'How many times have you visited Rio?', resposta: 'Three times.' },
        ],
        erros: [['I have not never seen snow.', 'I have never seen snow.', 'Uma negação só.'], ['Did you ever be to Brazil?', 'Have you ever been to Brazil?', 'Experiência: present perfect.'], ['Have you been ever to Brazil?', 'Have you ever been to Brazil?', '«ever» antes do particípio.']],
      }),
      producao(8, 'Faça 5 perguntas com «Have you ever…?» e responda com «Yes, I have.» ou «No, I haven\'t.»'),
    ]),
    sessao('S3', 'Been ou gone?', [
      revisao(4, 'Diga 3 lugares onde você já esteve e 2 aonde nunca foi.'),
      palavras(5, [
        ['been', 'bín', 'estado, ido e voltado', ''], ['gone', 'gón', 'ido (e não voltou)', ''], ['abroad', 'abrród', 'no exterior', ''], ['country', 'câmtri', 'país', ''], ['trip', 'trip', 'viagem', ''],
      ]),
      gramatica(8, 'Been to e gone to', 'PASSO 1: «have been to» = foi e VOLTOU: «I have been to Paris.» (estive em Paris) PASSO 2: «has gone to» = foi e AINDA ESTÁ lá: «She has gone to Paris.» (ela foi para Paris e ainda não voltou). PASSO 3: pergunta: «Where have you been?» (onde você esteve?). PASSO 4: não confunda com o passado simples: «I went to Paris in 2020.» (fato com tempo definido).', {
        tag: 'Been x gone',
        comparacao: 'em português «ela foi a Paris» é ambíguo (voltou ou não?). O inglês separa: «has been to» (voltou) e «has gone to» (está lá).',
        tabela: [
          { frase: 'I have been to Paris.', sentido: 'estive lá e voltei' }, { frase: 'She has gone to Paris.', sentido: 'ela está lá agora' }, { frase: 'Where have you been?', sentido: 'onde você esteve?' },
        ],
        erros: [['She has been to Paris. (ela ainda está lá)', 'She has gone to Paris.', 'Ainda está lá: gone.'], ['I have gone to Paris. (estou aqui)', 'I have been to Paris.', 'Voltou: been.']],
      }),
      texto(8, 'My travel experiences / Minhas experiências de viagem', 'I love traveling. I have visited five countries: Argentina, Chile, the United States, Portugal and Japan. I have been to Japan twice, and I have eaten sushi in Tokyo. I have never been to Africa, but I would like to go. My brother has been to Egypt and he has seen the pyramids. He has gone to Canada this month, so he isn\'t here now. Have you ever traveled abroad?',
        'Eu adoro viajar. Já visitei cinco países: Argentina, Chile, Estados Unidos, Portugal e Japão. Estive no Japão duas vezes e comi sushi em Tóquio. Nunca estive na África, mas gostaria de ir. Meu irmão esteve no Egito e viu as pirâmides. Ele foi para o Canadá este mês, então não está aqui agora. Você já viajou para o exterior?',
        [['How many countries has the person visited?', 'Five.'], ['Has the person been to Africa?', 'No, never.'], ['What has the brother seen?', 'The pyramids.'], ['Where is the brother now?', 'In Canada.']]),
      producao(5, 'Escreva 5 frases sobre as suas experiências de viagem, com «have been», «have never» e «twice».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 30', [
      revisao(5, 'Diga 5 experiências da sua vida e peça a um amigo que conte as dele.'),
      exercicios(20, [
        ouvir('I have never seen snow', ['I have never seen snow', 'I have ever seen snow', 'I never saw snow'], 'I have never seen snow', 'Ouça «never seen».'), ouvir('Have you ever been to Brazil', ['Have you ever been to Brazil', 'Did you ever go to Brazil', 'Have you been ever to Brazil'], 'Have you ever been to Brazil', 'Ouça «ever been».'), ditado('She has visited Rome twice', 'Escreva: she has visited Rome twice.'), ditado('They haven\'t eaten sushi', 'Escreva: they haven\'t eaten sushi.'),
        mc('Qual é o particípio de «see»?', ['seen', 'saw', 'seed'], 'seen', 'see → saw → seen.'), mc('Qual é o particípio de «eat»?', ['eaten', 'ate', 'eated'], 'eaten', 'eat → ate → eaten.'), mc('Qual frase usa o present perfect corretamente?', ['I have been to Japan.', 'I have went to Japan.', 'I have go to Japan.'], 'I have been to Japan.', 'Particípio: been.'), mc('Qual frase indica que ela AINDA ESTÁ lá?', ['She has gone to Paris.', 'She has been to Paris.', 'She went to Paris.'], 'She has gone to Paris.', 'gone = ainda lá.'),
        lacuna('She ___ visited Rome. (já)', ['has', 'have', 'is'], 'has', 'she → has.'), lacuna('I have ___ seen snow. (nunca)', ['never', 'ever', 'not'], 'never', 'never já é negativo.'), lacuna('Have you ___ been to Brazil? (alguma vez)', ['ever', 'never', 'yet'], 'ever', 'Pergunta: ever.'), lacuna('I have visited Rio three ___ . (vezes)', ['times', 'time', 'timing'], 'times', 'three times.'),
        ordem('Ordene: «Have you ever eaten sushi?»', ['Have', 'you', 'ever', 'eaten', 'sushi'], 'Have you ever eaten sushi?', 'Have + sujeito + ever + particípio.'), ordem('Ordene: «She has never been to Japan.»', ['She', 'has', 'never', 'been', 'to', 'Japan'], 'She has never been to Japan.', 'has + never + particípio.'),
        livre('Escreva 4 frases sobre experiências: duas com «have», uma com «never» e uma pergunta com «Have you ever…?»', 'I have visited Japan. I have eaten sushi. I have never seen snow. Have you ever been to Brazil?'),
      ]),
      producao(5, 'Conte em 1 minuto as 3 experiências mais marcantes da sua vida, sem dizer quando.'),
    ]),
  ],
});
