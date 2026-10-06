import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 69, titulo: 'Escrita formal e informal', nivel: 'b1',
  objetivo: 'Escrever um e-mail ou carta formal (candidatura, pedido, reclamação) e uma carta informal a um amigo, com a estrutura, as fórmulas de abertura e de despedida e o registro certos.',
  nota: 'Você escreve com o registro certo. Próxima aula: trabalho, entrevista e reunião.',
  sessoes: [
    sessao('S1', 'A carta formal', [
      revisao(5, 'Escreva 5 frases: uma opinião, um acordo, um acordo em parte, um desacordo e um fecho educado.'),
      palavras(8, [['заявление', 'zayavlyéniye', 'requerimento, candidatura', 'application'], ['вакансия', 'vakánsiya', 'vaga', 'vacancy'], ['резюме', 'rezyumé', 'currículo', 'CV'], ['кандидатура', 'kandidatúra', 'candidatura', 'candidacy'], ['прикладывать / приложить', 'prikladyvát / prilazhít', 'anexar', 'to attach'], ['рассмотреть', 'rasmatryét', 'analisar', 'to consider'], ['по поводу', 'pa póvadu', 'a respeito de', 'regarding'], ['с уважением', 's uvazhéniyem', 'atenciosamente', 'sincerely']]),
      gramatica(12, 'A estrutura de um e-mail formal', 'PASSO 1: a CARTA FORMAL tem partes fixas: ASSUNTO («Тема»), SAUDAÇÃO, MOTIVO, DETALHES, PEDIDO e DESPEDIDA. PASSO 2: SAUDAÇÃO: «Здравствуйте!» ou «Уважаемый господин Иванов!» (para homem), «Уважаемая госпожа Иванова!» (para mulher), «Уважаемый Борис Иванович!» (nome e patronímico). PASSO 3: MOTIVO: «Я пишу вам по поводу вакансии», «Пишу вам, чтобы узнать…». PASSO 4: PEDIDO: «Прошу рассмотреть мою кандидатуру», «Прошу вас ответить». PASSO 5: ANEXO: «Прикладываю резюме», «Во вложении находится…». PASSO 6: DESPEDIDA: «Заранее благодарю вас», «С уважением, Анна Лопес». PASSO 7: use sempre «вы» (com «В» maiúsculo opcional) e evite gírias e abreviações. PASSO 8: use frases curtas e completas, uma ideia por frase.', {
        tag: 'Frase',
        tabela: [
          { parte: 'assunto', exemplo: 'Тема: вакансия аналитика' }, { parte: 'saudação', exemplo: 'Уважаемый Борис Иванович!' }, { parte: 'motivo', exemplo: 'Я пишу вам по поводу вакансии.' }, { parte: 'pedido', exemplo: 'Прошу рассмотреть мою кандидатуру.' }, { parte: 'anexo', exemplo: 'Прикладываю своё резюме.' }, { parte: 'despedida', exemplo: 'Заранее благодарю вас. С уважением, Анна Лопес.' },
        ],
        erros: [['Привет, Борис Иванович!', 'Уважаемый Борис Иванович!', 'Saudação formal.'], ['Прошу рассмотреть мою кандидатуру. Пока!', 'Прошу рассмотреть мою кандидатуру. С уважением, …', 'Despedida formal.'], ['Я пишу тебе по поводу вакансии.', 'Я пишу вам по поводу вакансии.', 'Registro formal: «вам».']],
      }),
      producao(5, 'Escreva e leia em voz alta as 6 partes de um e-mail formal de candidatura a uma vaga.'),
    ]),
    sessao('S2', 'A carta informal', [
      revisao(5, 'Releia o seu e-mail formal e troque 5 frases por versões informais.'),
      texto(10, 'Письмо другу / Uma carta a um amigo', 'Привет, Антон! Как дела? Пишу тебе, чтобы рассказать новости. Я переехал в Москву и снял маленькую квартиру. Работа мне нравится, коллеги очень добрые. Каждое утро я иду на работу пешком, потому что она рядом. Если у тебя будет время, приезжай в гости! Обнимаю. Макс',
        'Oi, Anton! Como vai? Escrevo para contar as novidades. Mudei-me para Moscou e aluguei um apartamento pequeno. Gosto do trabalho, os colegas são muito simpáticos. Toda manhã vou a pé ao trabalho, porque fica perto. Se você tiver tempo, venha me visitar! Um abraço. Max',
        [['Куда переехал Макс?', 'В Москву'], ['Что он снял?', 'Маленькую квартиру'], ['Как он ходит на работу?', 'Пешком, потому что работа рядом'], ['Что он предлагает Антону?', 'Приехать в гости']]),
      gramatica(8, 'A carta informal', 'PASSO 1: a carta INFORMAL usa «ты» e frases mais livres: «Привет, Антон! Как дела?». PASSO 2: o motivo: «Пишу тебе, чтобы рассказать…». PASSO 3: as novidades: passado e presente: «Я переехал, я снял квартиру, я работаю». PASSO 4: o convite: «Приезжай в гости!». PASSO 5: a despedida informal: «Обнимаю», «Пока!», «Целую», «Твой Макс». PASSO 6: pode-se usar partículas e exclamações: «Ну, как тебе?».', {
        tag: 'Frase',
        tabela: [
          { parte: 'saudação', exemplo: 'Привет, Антон! Как дела?' }, { parte: 'motivo', exemplo: 'Пишу тебе, чтобы рассказать новости.' }, { parte: 'convite', exemplo: 'Приезжай в гости!' }, { parte: 'despedida', exemplo: 'Обнимаю. Твой Макс.' },
        ],
      }),
      producao(7, 'Escreva uma carta informal de 5 linhas a um amigo e leia-a em voz alta.'),
    ]),
    sessao('S3', 'A candidatura por e-mail', [
      revisao(5, 'Escreva 5 frases de uma candidatura formal.'),
      gramatica(10, 'Do rascunho ao envio', 'PASSO 1: releia o texto e verifique o REGISTRO: «вы» na formal, «ты» na informal. PASSO 2: confira as PARTES: saudação, motivo, pedido, anexo, despedida. PASSO 3: confira a PONTUAÇÃO: vírgulas depois de conectores e antes de «что», «чтобы», «который». PASSO 4: confira os CASOS: «по поводу» + genitivo, «прошу» + infinitivo, «с уважением» + instrumental. PASSO 5: antes de enviar, leia em voz alta.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Прошу рассмотреть мою кандидатуру.', traducao: 'Peço que considerem a minha candidatura.' }, { frase: 'Во вложении находится моё резюме.', traducao: 'Em anexo está o meu currículo.' }, { frase: 'Заранее благодарю вас.', traducao: 'Agradeço antecipadamente.' }, { frase: 'С уважением, Анна Лопес.', traducao: 'Atenciosamente, Anna Lopes.' },
        ],
      }),
      dialogo(8, 'Заявление / A candidatura', 'Anna e Boris falam do e-mail de candidatura.', [
        ['Анна', 'Здравствуйте, Борис Иванович. Я пишу вам по поводу вакансии.', 'Olá, Boris Ivanovich. Escrevo-lhe a respeito da vaga.'], ['Борис', 'Здравствуйте, Анна. Вы отправили резюме?', 'Olá, Anna. A senhora enviou o currículo?'], ['Анна', 'Да, я приложила его к письму.', 'Sim, anexei-o ao e-mail.'],
        ['Борис', 'Хорошо. Как вы начали письмо?', 'Está bem. Como a senhora começou a carta?'], ['Анна', 'Я написала: «Уважаемый Борис Иванович! Прошу рассмотреть мою кандидатуру».', 'Escrevi: «Prezado Boris Ivanovich! Peço que considere a minha candidatura».'], ['Борис', 'А как закончили?', 'E como terminou?'],
        ['Анна', '«Заранее благодарю вас. С уважением, Анна Лопес».', '«Agradeço antecipadamente. Atenciosamente, Anna Lopes».'], ['Борис', 'Отлично. Я прочитаю письмо и позвоню вам завтра.', 'Ótimo. Vou ler a carta e ligo para a senhora amanhã.'],
      ]),
      producao(7, 'Descreva em voz alta como você escreveria a candidatura e a carta a um amigo, e a diferença entre as duas.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um e-mail formal de pedido de informação.'),
      exercicios(20, [
        lacuna('___ Борис Иванович! (saudação formal)', ['Уважаемый', 'Привет', 'Дорогой'], 'Уважаемый', 'Saudação formal.'), lacuna('Я пишу ___ по поводу вакансии. (ao senhor)', ['вам', 'тебе', 'ты'], 'вам', 'Registro formal.'), lacuna('Прошу ___ мою кандидатуру. (considerar)', ['рассмотреть', 'рассматриваю', 'рассмотрел'], 'рассмотреть', '«прошу» + infinitivo.'),
        lacuna('С ___, Анна. (atenciosamente)', ['уважением', 'уважение', 'уважения'], 'уважением', '«с» + instrumental.'), lacuna('___, Антон! (informal)', ['Привет', 'Уважаемый', 'Здравствуйте'], 'Привет', 'Saudação informal.'), lacuna('Пишу ___, чтобы рассказать новости. (a você)', ['тебе', 'вам', 'ты'], 'тебе', 'Registro informal.'),
        mc('A saudação formal é:', ['Уважаемый господин Иванов!', 'Привет, Иванов!', 'Здорово, Иванов!'], 'Уважаемый господин Иванов!', 'Formal.'), mc('«Обнимаю» é despedida:', ['informal', 'formal', 'de reunião'], 'informal', 'Um abraço.'), mc('«Прикладываю резюме» significa:', ['anexo o currículo', 'leio o currículo', 'perdi o currículo'], 'anexo o currículo', 'Anexo.'),
        ordem('Ordene: «Прошу рассмотреть мою кандидатуру.»', ['Прошу', 'рассмотреть', 'мою', 'кандидатуру'], 'Прошу рассмотреть мою кандидатуру.', 'Pedido formal.'), ouvir('Заранее благодарю вас', ['Заранее благодарю вас', 'Я благодарю вас вчера', 'Благодаря вам'], 'Заранее благодарю вас', 'Agradecimento formal.'), ditado('Пишу тебе, чтобы рассказать новости', 'Registro informal.'),
        livre('Escreva 5 frases: uma saudação formal, um motivo, um pedido, uma despedida formal e uma despedida informal.', 'Уважаемый Борис Иванович! Я пишу вам по поводу вакансии. Прошу рассмотреть мою кандидатуру. С уважением, Анна Лопес. Обнимаю. Макс.'),
      ]),
      producao(5, 'Grave-se lendo o seu e-mail formal e a sua carta informal.'),
    ]),
  ],
});
