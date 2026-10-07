import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 39, titulo: 'Present perfect contínuo: há quanto tempo e o que tem acontecido', nivel: 'b1',
  objetivo: 'Usar o present perfect contínuo («have been + -ing») para ações que começaram no passado e continuam ou têm resultado visível agora, e distingui-lo do present perfect simples.',
  nota: 'Você diz o que tem feito e há quanto tempo. Próxima aula: past perfect.',
  sessoes: [
    sessao('S1', 'Have been + -ing', [
      revisao(5, 'Conte uma experiência sua com present perfect e dê um detalhe no passado simples.'),
      palavras(8, [
        ['have been working', 'hév bín uãrkin', 'tenho trabalhado', ''], ['has been raining', 'héz bín rêinin', 'tem chovido', ''], ['all day', 'ól dêi', 'o dia todo', ''], ['lately', 'lêitli', 'ultimamente', ''], ['recently', 'riisentli', 'recentemente', ''], ['for hours', 'fór áuerz', 'por horas', ''], ['exhausted', 'igzóstid', 'exausto', ''], ['all morning', 'ól mórnin', 'a manhã toda', ''],
      ]),
      gramatica(12, 'Present perfect contínuo', 'PASSO 1: a estrutura é «have/has + been + verbo-ing»: «I have been studying for two hours.» PASSO 2: use para uma ação que COMEÇOU no passado e CONTINUA agora, com ênfase na DURAÇÃO: «She has been working here since 2020.» PASSO 3: use também para explicar um RESULTADO visível agora: «I\'m tired because I have been running.» PASSO 4: pergunta: «How long have you been waiting?» PASSO 5: negativa: «I haven\'t been sleeping well lately.» PASSO 6: com verbos de ESTADO (know, be, have, like), use o perfect simples: «I have known her for years», não «I have been knowing». PASSO 7: com «for» e «since» os dois tempos são possíveis para verbos de ação (live, work, study); o contínuo dá mais ênfase ao processo.', {
        tag: 'Present perfect contínuo',
        comparacao: 'em português «estou estudando há duas horas» e «tenho estudado» cobrem esse sentido. Em inglês, «I have been studying for two hours» é a forma correta. O presente («I study for two hours») estaria errado.',
        tabela: [
          { afirmativa: 'I have been studying.', negativa: 'I haven\'t been studying.', pergunta: 'Have you been studying?' }, { afirmativa: 'She has been working.', negativa: 'She hasn\'t been working.', pergunta: 'Has she been working?' }, { afirmativa: 'It has been raining.', negativa: 'It hasn\'t been raining.', pergunta: 'Has it been raining?' },
        ],
        erros: [['I am studying for two hours.', 'I have been studying for two hours.', 'Duração até agora: perfect contínuo.'], ['I have been knowing her for years.', 'I have known her for years.', '«know» é estado.'], ['How long are you waiting?', 'How long have you been waiting?', 'Duração: perfect contínuo.'], ['She has been work here.', 'She has been working here.', 'Falta o -ing.']],
      }),
      producao(5, 'Diga 5 coisas que você tem feito ultimamente, com «have been -ing» e uma duração.'),
    ]),
    sessao('S2', 'Perfect simples ou contínuo?', [
      revisao(4, 'Diga há quanto tempo você mora, estuda e trabalha, com «for» e «since».'),
      palavras(6, [
        ['finished', 'fínicht', 'terminado', ''], ['still', 'stíl', 'ainda', ''], ['how many', 'háu méni', 'quantos', ''], ['how much', 'háu mâtch', 'quanto', ''], ['messy', 'mési', 'bagunçado', ''], ['wet', 'uét', 'molhado', ''],
      ]),
      gramatica(12, 'Escolher entre os dois perfects', 'PASSO 1: o CONTÍNUO enfatiza o PROCESSO e a duração, e a ação pode não estar terminada: «I have been writing a report.» (ainda escrevo) PASSO 2: o SIMPLES enfatiza o RESULTADO ou a QUANTIDADE e a ação costuma estar concluída: «I have written three reports.» PASSO 3: «how long» (duração) → contínuo; «how many/how much» (quantidade) → simples. PASSO 4: «Why are you wet?» → «I have been walking in the rain.» (explica o estado agora) PASSO 5: «Who has been eating my cake?» (alguém comeu um pouco, e o bolo está ali) × «Who has eaten my cake?» (o bolo acabou). PASSO 6: verbos como «live» e «work» aceitam os dois com «for/since», sem diferença forte.', {
        tag: 'Perfect simples × contínuo',
        comparacao: 'em português a mesma frase («estudei muito», «tenho estudado») cobre os dois tempos, e o ouvinte percebe pelo contexto. Em inglês, o tempo verbal diz isso: processo (contínuo) × resultado (simples).',
        tabela: [
          { foco: 'duração / processo', frase: 'I have been reading for two hours.' }, { foco: 'resultado / quantidade', frase: 'I have read three chapters.' }, { foco: 'how long?', frase: 'How long have you been waiting?' }, { foco: 'how many?', frase: 'How many pages have you read?' },
        ],
        erros: [['How many pages have you been reading?', 'How many pages have you read?', 'Quantidade: simples.'], ['I have been reading three books this week.', 'I have read three books this week.', 'Resultado: simples.'], ['She has been finishing the report.', 'She has finished the report.', '«finish» pede resultado.']],
      }),
      producao(8, 'Faça 6 frases: 3 sobre o que você tem feito (contínuo) e 3 sobre o que já completou (simples).'),
    ]),
    sessao('S3', 'Explicar o estado de alguém', [
      revisao(4, 'Explique por que alguém está cansado, molhado ou com fome usando «have been».'),
      palavras(5, [
        ['dirty', 'dãrti', 'sujo', ''], ['hands', 'héndz', 'mãos', ''], ['garden', 'gárden', 'jardim', ''], ['exercise', 'éksersaiz', 'exercício', ''], ['sweaty', 'suéti', 'suado', ''],
      ]),
      gramatica(8, 'Causa e efeito no presente', 'PASSO 1: uma pergunta comum: «Why are you…?» e a resposta com «have been -ing»: «Why are you sweaty?» → «I\'ve been running.» PASSO 2: «You look tired. Have you been sleeping well?» PASSO 3: «Where have you been?» (Onde você esteve?) → «I\'ve been working in the garden.» PASSO 4: ligação com «because»: «My hands are dirty because I have been working in the garden.»', {
        tag: 'Resultado visível',
        comparacao: 'em português a explicação muitas vezes aparece no pretérito: «estava correndo». Em inglês, o present perfect contínuo liga o que você fez ao estado de agora.',
        tabela: [
          { pergunta: 'Why are you sweaty?', resposta: 'I\'ve been running.' }, { pergunta: 'Why are your hands dirty?', resposta: 'I\'ve been working in the garden.' }, { pergunta: 'Where have you been?', resposta: 'I\'ve been at the gym.' },
        ],
        erros: [['I was running, so I\'m sweaty.', 'I\'ve been running, so I\'m sweaty.', 'Efeito agora: perfect contínuo.'], ['Where were you? (ainda fala do período até agora)', 'Where have you been?', 'Período até agora.']],
      }),
      dialogo(8, 'What have you been doing? / O que você tem feito?', 'Lucy encontra Ben depois de meses.', [
        ['Lucy', 'Ben! I haven\'t seen you for ages. What have you been doing?', 'Ben! Faz séculos que não te vejo. O que você tem feito?'], ['Ben', 'I\'ve been working a lot. I have been learning English for six months.', 'Tenho trabalhado muito. Estou aprendendo inglês há seis meses.'], ['Lucy', 'Really? How long have you been studying every day?', 'Sério? Há quanto tempo você estuda todo dia?'], ['Ben', 'About an hour a day. I have finished two books so far.', 'Cerca de uma hora por dia. Já terminei dois livros.'], ['Lucy', 'That\'s great! You look tired, though.', 'Que ótimo! Mas você parece cansado.'], ['Ben', 'I know. I\'ve been sleeping badly lately.', 'Eu sei. Tenho dormido mal ultimamente.'],
      ]),
      producao(5, 'Conte a um amigo o que você tem feito nos últimos meses, em 6 frases.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 39', [
      revisao(5, 'Explique em voz alta o que você tem feito ultimamente e há quanto tempo.'),
      exercicios(20, [
        ouvir('I have been studying for two hours', ['I have been studying for two hours', 'I have studied for two hours', 'I am studying for two hours'], 'I have been studying for two hours', 'Ouça «have been studying».'), ouvir('How long have you been waiting', ['How long have you been waiting', 'How long are you waiting', 'How long did you wait'], 'How long have you been waiting', 'Ouça «been waiting».'), ditado('It has been raining all day', 'Escreva: it has been raining all day.'), ditado('She hasn\'t been sleeping well', 'Escreva: she hasn\'t been sleeping well.'),
        mc('Qual frase está correta?', ['I have been working here since 2020.', 'I am working here since 2020.', 'I work here since 2020.'], 'I have been working here since 2020.', 'Duração até agora.'), mc('Qual frase enfatiza o RESULTADO?', ['I have written three emails.', 'I have been writing emails.', 'I was writing emails.'], 'I have written three emails.', 'Quantidade: simples.'), mc('Qual pergunta pede a DURAÇÃO?', ['How long have you been waiting?', 'How many have you waited?', 'How much have you waited?'], 'How long have you been waiting?', 'How long: contínuo.'), mc('Qual frase está correta?', ['I have known her for years.', 'I have been knowing her for years.', 'I am knowing her for years.'], 'I have known her for years.', 'know = estado.'),
        lacuna('She has been ___ all day. (trabalhando)', ['working', 'worked', 'work'], 'working', 'have been + -ing.'), lacuna('How long ___ you been waiting?', ['have', 'are', 'did'], 'have', 'have you been.'), lacuna('It has ___ raining. (estado: tem chovido)', ['been', 'be', 'being'], 'been', 'has been raining.'), lacuna('I have ___ three books. (lido, resultado)', ['read', 'been reading', 'reading'], 'read', 'Resultado: simples.'),
        ordem('Ordene: «I have been learning English for six months.»', ['I', 'have', 'been', 'learning', 'English', 'for', 'six', 'months'], 'I have been learning English for six months.', 'have been + -ing + for.'), ordem('Ordene: «Why are your hands dirty?»', ['Why', 'are', 'your', 'hands', 'dirty'], 'Why are your hands dirty?', 'Why + are + sujeito + adjetivo.'),
        livre('Escreva 4 frases: duas com «have been -ing» e duas com o present perfect simples.', 'I have been studying English for six months. I have been working a lot. I have read two books. I have finished the course.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você tem feito na última semana e o que já concluiu.'),
    ]),
  ],
});
