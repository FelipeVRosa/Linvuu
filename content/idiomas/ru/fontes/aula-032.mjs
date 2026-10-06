import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 32, titulo: 'Gramática: o imperativo', nivel: 'a2',
  objetivo: 'Formar o imperativo (ты e вы), usar as terminações «-й», «-и» e «-ь», conhecer os imperativos irregulares mais comuns, escolher o aspecto e fazer pedidos educados.',
  nota: 'Você dá ordens, conselhos e pedidos com educação. Próxima aula: as conjunções e as orações subordinadas.',
  sessoes: [
    sessao('S1', 'Formar o imperativo', [
      revisao(5, 'Escreva as seis formas do presente de «читать» e de «говорить».'),
      palavras(8, [
        ['пожалуйста', 'pazháluysta', 'por favor', 'please'], ['слушай', 'slúshay', 'escuta!', 'listen!'], ['смотри', 'smatrí', 'olha!', 'look!'], ['подожди', 'padazhdí', 'espera', 'wait'],
        ['проходите', 'prakhódite', 'entrem, passem', 'come in'], ['садитесь', 'sadítes', 'sentem-se', 'sit down'], ['давай', 'davái', 'vamos (informal)', "let's"], ['не волнуйся', 'ne valnúysya', 'não se preocupe', "don't worry"],
      ]),
      gramatica(14, 'Como formar o imperativo, passo a passo', 'PASSO 1: o imperativo serve para dar ordens, conselhos e pedidos: «Читай!», «Говорите!». PASSO 2: para «ты» (você, tu), a forma básica termina em «-й», «-и» ou «-ь». PASSO 3: para «вы» (formal ou plural), junte «-те»: «читай → читайте», «говори → говорите». PASSO 4: parta da forma «они» do presente e tire a terminação: «читают → чита-». PASSO 5: se o radical termina em VOGAL, acrescente «-й»: «читай, делай, работай». PASSO 6: se o radical termina em consoante e o acento cai na terminação da forma «я» («говорю́, смотрю́, куплю́, напишу́»), use «-и»: «говори, смотри, купи, напиши». PASSO 7: se o acento cai no radical, use «-ь» depois de UMA consoante («ответь, встань, забудь») e «-и» depois de DUAS («помни»). PASSO 8: irregulares muito usados: «пить → пей», «есть → ешь», «идти → иди», «ехать → поезжай», «дать → дай», «быть → будь».', {
        tag: 'Verbos',
        comparacao: 'o português muda o final do verbo para ordenar («lê!», «fale!»). O russo faz o mesmo, mas a regra depende de onde cai o acento e de como o radical termina.',
        tabela: [
          { infinitivo: 'читать', ty: 'читай', vy: 'читайте', regra: 'radical em vogal: -й' }, { infinitivo: 'делать', ty: 'делай', vy: 'делайте', regra: 'radical em vogal: -й' }, { infinitivo: 'говорить', ty: 'говори', vy: 'говорите', regra: 'acento na terminação de «я»: -и' }, { infinitivo: 'смотреть', ty: 'смотри', vy: 'смотрите', regra: 'acento na terminação de «я»: -и' },
          { infinitivo: 'купить', ty: 'купи', vy: 'купите', regra: 'acento na terminação de «я»: -и' }, { infinitivo: 'ответить', ty: 'ответь', vy: 'ответьте', regra: 'acento no radical, 1 consoante: -ь' }, { infinitivo: 'помнить', ty: 'помни', vy: 'помните', regra: 'acento no radical, 2 consoantes: -и' }, { infinitivo: 'пить', ty: 'пей', vy: 'пейте', regra: 'irregular' }, { infinitivo: 'идти', ty: 'иди', vy: 'идите', regra: 'irregular' },
        ],
        erros: [['Говорь!', 'Говори!', 'Acento na terminação de «я» (говорю): -и.'], ['Читать!', 'Читай!', 'O infinitivo não serve como imperativo educado; use «читай/читайте».'], ['Смотрите, ты!', 'Смотри! / Смотрите!', 'Ou «ты» (смотри) ou «вы» (смотрите).']],
      }),
      producao(3, 'Dê 6 ordens em voz alta, com «ты» e com «вы»: «Читай! Читайте! Говори! Говорите! Смотри! Смотрите!»'),
    ]),
    sessao('S2', 'Aspecto e educação', [
      revisao(5, 'Escreva o imperativo de «писать», «открывать», «купить» e «ответить» (ты e вы).'),
      palavras(8, [
        ['открывать / открыть', 'atkryvát / atkrýt', 'abrir', 'to open'], ['закрывать / закрыть', 'zakryvát / zakrýt', 'fechar', 'to close'], ['брать / взять', 'brat / vzyat', 'pegar', 'to take'], ['торопиться', 'taropítsya', 'ter pressa', 'to hurry'],
        ['волноваться', 'valnavátsya', 'preocupar-se', 'to worry'], ['пробовать / попробовать', 'próbavat / papróbavat', 'experimentar, provar', 'to try'], ['вешать / повесить', 'vyéshat / pavyésit', 'pendurar', 'to hang'], ['обязательно', 'abyazátelna', 'com certeza', 'definitely'],
      ]),
      gramatica(12, 'Qual aspecto usar no imperativo', 'PASSO 1: no imperativo, o aspecto muda o tom. PASSO 2: o PERFECTIVO pede UMA ação concreta, feita agora: «Открой окно!» (abra a janela), «Купи хлеб!» (compre pão). PASSO 3: o IMPERFECTIVO convida, aconselha ou fala de uma ação habitual: «Проходите, садитесь» (entrem, sentem-se), «Читай каждый день» (leia todo dia). PASSO 4: na NEGAÇÃO, use quase sempre o imperfectivo: «Не открывай окно!», «Не говори так!». PASSO 5: para suavizar, use «пожалуйста»: «Закрой, пожалуйста, дверь». PASSO 6: para propor algo juntos, use «давай / давайте» + infinitivo imperfectivo ou 1ª pessoa do plural perfectiva: «Давай читать» (vamos ler), «Давай посмотрим» (vamos ver).', {
        tag: 'Verbos',
        tabela: [
          { uso: 'pedir uma ação concreta (perfectivo)', frase: 'Открой окно, пожалуйста. Купи хлеб.' }, { uso: 'convidar, aconselhar (imperfectivo)', frase: 'Проходите, садитесь. Читай каждый день.' }, { uso: 'proibir (negação + imperfectivo)', frase: 'Не открывай окно! Не говори так!' }, { uso: 'propor juntos', frase: 'Давай читать. Давай посмотрим фильм.' },
        ],
        erros: [['Не открой окно!', 'Не открывай окно!', 'Na negação, use o imperfectivo.'], ['Открывай окно, пожалуйста. (ordem pontual)', 'Открой окно, пожалуйста.', 'Ação concreta e pontual: perfectivo.']],
      }),
      producao(5, 'Faça pedidos educados: «Закрой, пожалуйста, дверь. Купи, пожалуйста, хлеб. Не говори так!»'),
    ]),
    sessao('S3', 'Na casa de amigos', [
      revisao(5, 'Escreva 6 pedidos com «пожалуйста», 3 com «ты» e 3 com «вы».'),
      gramatica(10, 'Instruções e conselhos no dia a dia', 'PASSO 1: ao receber alguém: «Проходи(те)», «Садись / Садитесь», «Раздевайся / Раздевайтесь». PASSO 2: para oferecer: «Пей чай», «Попробуй», «Бери». PASSO 3: para acalmar: «Не волнуйся», «Не торопись». PASSO 4: para combinar: «Позвони мне», «Напиши мне». PASSO 5: para propor: «Давай пойдём в кино» (vamos ao cinema).', {
        tag: 'Verbos',
        tabela: [
          { situacao: 'receber alguém', frase: 'Проходи, пожалуйста. Садись.' }, { situacao: 'oferecer', frase: 'Пей чай. Попробуй пирог.' }, { situacao: 'acalmar', frase: 'Не волнуйся! Не торопись.' }, { situacao: 'combinar', frase: 'Позвони мне завтра. Напиши мне.' }, { situacao: 'propor', frase: 'Давай пойдём в кино.' },
        ],
      }),
      dialogo(9, 'У друзей дома / Na casa de amigos', 'Boris visita a casa da Olga.', [
        ['Ольга', 'Здравствуй, Борис! Проходи, пожалуйста.', 'Olá, Boris! Entre, por favor.'], ['Борис', 'Спасибо, Ольга. Куда повесить пальто?', 'Obrigado, Olga. Onde penduro o casaco?'], ['Ольга', 'Повесь его здесь и садись.', 'Pendure-o aqui e sente-se.'],
        ['Борис', 'Какой красивый стол! Ты сама его купила?', 'Que mesa bonita! Você mesma a comprou?'], ['Ольга', 'Нет, не спрашивай — это долгая история! Пей чай.', 'Não, não pergunte — é uma longa história! Beba o chá.'], ['Борис', 'Давай посмотрим фотографии.', 'Vamos ver as fotografias.'],
        ['Ольга', 'Хорошо. Только не торопись, у нас много времени.', 'Tudo bem. Só não se apresse, temos muito tempo.'], ['Борис', 'Спасибо! Позвони мне завтра, если захочешь погулять.', 'Obrigado! Me ligue amanhã, se quiser passear.'], ['Ольга', 'Обязательно позвоню!', 'Com certeza ligo!'],
      ]),
      producao(6, 'Receba um amigo em voz alta, com 5 imperativos: «Проходи. Садись. Пей чай. Не волнуйся. Позвони мне.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases no imperativo: um convite, um conselho, uma proibição e três pedidos.'),
      exercicios(20, [
        lacuna('___, пожалуйста! (leia, ты)', ['Читай', 'Читать', 'Читаю'], 'Читай', 'Radical em vogal: -й.'), lacuna('___ медленно! (falem, вы)', ['Говорите', 'Говори', 'Говорить'], 'Говорите', 'вы: говори + те.'), lacuna('___ мне завтра! (ligue, ты)', ['Позвони', 'Звонить', 'Позвоню'], 'Позвони', 'Acento na terminação de «я» (позвоню): -и.'),
        lacuna('___ чай! (beba, ты)', ['Пей', 'Пить', 'Пью'], 'Пей', 'Irregular: пей.'), lacuna('___ в кино! (vamos)', ['Давай пойдём', 'Давай идти', 'Давай идём'], 'Давай пойдём', '«давай» + 1ª pessoa do plural perfectiva.'), lacuna('Не ___ окно! (abra)', ['открывай', 'открой', 'открыть'], 'открывай', 'Negação: imperfectivo.'),
        mc('Imperativo de «смотреть» (ты):', ['смотри', 'смотрь', 'смотрей'], 'смотри', 'Acento na terminação de «я» (смотрю́): -и.'), mc('Imperativo de «ответить» (ты):', ['ответь', 'ответи', 'ответй'], 'ответь', 'Acento no radical, 1 consoante: -ь.'), mc('Imperativo de «идти» (ты):', ['иди', 'идь', 'идёй'], 'иди', 'Irregular: иди.'),
        mc('Para pedir uma ação concreta, usa-se:', ['o perfectivo', 'o imperfectivo', 'o infinitivo'], 'o perfectivo', 'Открой окно!'), ordem('Ordene: «Не торопись!»', ['Не', 'торопись'], 'Не торопись!', 'Negação + imperfectivo.'), ouvir('Проходите, садитесь', ['Проходите, садитесь', 'Проходи, садись', 'Не проходите'], 'Проходите, садитесь', 'вы: -те.'),
        ditado('Позвони мне завтра', 'Acento na terminação: -и.'), livre('Escreva 5 frases no imperativo: um convite, um conselho, uma proibição e dois pedidos educados.', 'Проходите, садитесь. Читай каждый день. Не говори так! Закрой, пожалуйста, дверь. Позвони мне завтра.'),
      ]),
      producao(5, 'Grave-se dando instruções a um amigo: como chegar, o que fazer e o que não fazer.'),
    ]),
  ],
});
