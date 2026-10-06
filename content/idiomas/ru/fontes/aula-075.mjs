import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 75, titulo: 'Escuta: fala rápida e redução das vogais', nivel: 'b1',
  objetivo: 'Entender o russo falado: a redução das vogais átonas (о → а, е → и), a assimilação das consoantes, as contrações da fala informal (щас, чего, здрасте) e a entonação, e treinar com frases ouvidas.',
  nota: 'Você entende a fala rápida e informal. Próxima aula: apresentação e discussão.',
  sessoes: [
    sessao('S1', 'A redução das vogais', [
      revisao(5, 'Escreva 5 frases com os conectores e a opinião sobre um assunto.'),
      palavras(8, [['молоко', 'malakó', 'leite (o = a)', 'milk'], ['хорошо', 'kharashó', 'bem (о = а)', 'good'], ['привет', 'privyét', 'oi (е = и)', 'hi'], ['сегодня', 'sivódnya', 'hoje (г = в)', 'today'], ['конечно', 'kanyéshna', 'claro (чн = шн)', 'of course'], ['что', 'shto', 'que (ч = ш)', 'what'], ['здравствуйте', 'zdrástvuyte', 'olá (в mudo)', 'hello'], ['его', 'yivó', 'dele (г = в)', 'his']]),
      gramatica(12, 'Como o russo soa de verdade', 'PASSO 1: no russo, a SÍLABA TÔNICA é forte e as ÁTONAS se enfraquecem: é a REDUÇÃO. PASSO 2: o «О» átono soa como «А»: «молоко» [malakó], «хорошо» [kharashó], «вода» [vadá]. PASSO 3: o «Е» e o «Я» átonos soam como «И»: «привет» [privyét], «язык» [yizýk], «весна» [visná]. PASSO 4: o «Г» de «его, сегодня, чего» soa como «В»: «его» [yivó], «сегодня» [sivódnya]. PASSO 5: «ЧТО» soa [shto] e «КОНЕЧНО» soa [kanyéshna]. PASSO 6: «ЗДРАВСТВУЙТЕ» tem um «В» mudo: [zdrástvuyte]. PASSO 7: consoantes sonoras no fim da palavra se ensurdecem: «хлеб» [khlyep], «год» [got]. PASSO 8: o texto escrito NÃO mostra a redução: por isso ouvir muito é essencial.', {
        tag: 'Pronúncia',
        comparacao: 'o português também reduz vogais átonas («leite» soa quase «leiti»), mas o russo reduz muito mais, e o «о» vira «а».',
        tabela: [
          { escrita: 'молоко', fala: 'malakó', regra: 'о átono = а' }, { escrita: 'хорошо', fala: 'kharashó', regra: 'о átono = а' }, { escrita: 'привет', fala: 'privyét', regra: 'е átono = и' }, { escrita: 'сегодня', fala: 'sivódnya', regra: 'г = в em «-ого / сегодня»' }, { escrita: 'конечно', fala: 'kanyéshna', regra: 'чн = шн' }, { escrita: 'здравствуйте', fala: 'zdrástvuyte', regra: 'в mudo' },
        ],
        erros: [['Я говорю: молоко [molokó].', 'молоко [malakó].', 'O «о» átono soa «а».'], ['Его [yegó].', 'его [yivó].', '«г» soa «в».']],
      }),
      producao(5, 'Leia em voz alta, imitando o áudio: «молоко, хорошо, привет, сегодня, конечно, что, здравствуйте, его».'),
    ]),
    sessao('S2', 'Fala rápida e informal', [
      revisao(5, 'Escreva como se pronunciam 5 palavras com redução de vogais.'),
      palavras(8, [['щас', 'shchas', 'agora (coloquial de «сейчас»)', 'right now'], ['чего', 'chivó', 'por quê, o quê (coloquial)', 'why, what'], ['здрасте', 'zdrásti', 'olá (curto)', 'hi'], ['ну ты даёшь', 'nu ty dayóish', 'você é demais', "you're something"], ['жуткий', 'zhútkiy', 'terrível', 'awful'], ['давай', 'davái', 'vamos, tá bom', 'okay'], ['ладно', 'ládna', 'tá bem', 'okay'], ['не бойся', 'ni bóisya', 'não tenha medo', "don't be afraid"]]),
      gramatica(12, 'Contrações e expressões coloquiais', 'PASSO 1: na fala rápida e informal, as palavras se ENCURTAM: «сейчас» vira «щас», «здравствуйте» vira «здрасте», «пожалуйста» vira «пожалуйста» [pazhálsta], «сколько» soa [skólka]. PASSO 2: «ЧЕГО» ocupa o lugar de «почему» ou «что»: «Ты чего не пришёл?» (por que você não veio?). PASSO 3: «ДАВАЙ» e «ЛАДНО» são respostas curtas: «Давай!» (vamos / tá bom), «Ладно!» (tá bem). PASSO 4: «НУ ТЫ ДАЁШЬ!» é uma exclamação de espanto. PASSO 5: use essas formas SÓ com amigos; no trabalho e em escrita formal, use as formas completas. PASSO 6: a entonação mostra a emoção: a pergunta sobe, a afirmação desce.', {
        tag: 'Frase',
        tabela: [
          { informal: 'щас', formal: 'сейчас' }, { informal: 'здрасте', formal: 'здравствуйте' }, { informal: 'Ты чего не пришёл?', formal: 'Почему ты не пришёл?' }, { informal: 'Давай!', formal: 'Хорошо, согласен.' }, { informal: 'Ладно!', formal: 'Хорошо.' }, { informal: 'Ну ты даёшь!', formal: 'Как ты меня удивил!' },
        ],
        erros: [['Щас вы можете начать? (a um chefe)', 'Сейчас вы можете начать?', 'Em registro formal, use «сейчас».'], ['Здрасте, Борис Иванович! (numa carta)', 'Здравствуйте, Борис Иванович!', 'Em escrita formal, a forma completa.']],
      }),
      producao(5, 'Diga com ritmo de fala rápida: «Здрасте! Ты чего не пришёл? Щас буду. Давай! Ладно!»'),
    ]),
    sessao('S3', 'Uma conversa rápida', [
      revisao(5, 'Escreva um diálogo de 6 falas informais com as expressões da aula.'),
      gramatica(10, 'Ouvir uma conversa de amigos', 'PASSO 1: ouça primeiro o RITMO e a ENTONAÇÃO, não palavra por palavra. PASSO 2: reconheça as palavras de LIGAÇÃO: «ну, же, ведь, вот, ладно». PASSO 3: reconheça as REDUÇÕES: «щас, здрасте». PASSO 4: use o CONTEXTO: o atraso, o futebol, o pedido de pressa. PASSO 5: depois, repita as frases imitando a entonação.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Ты чего не пришёл?', traducao: 'Por que você não veio?' }, { frase: 'Здрасте-пожалуйста! Я же сказал!', traducao: 'Ora essa! Eu já disse!' }, { frase: 'Щас буду.', traducao: 'Já chego.' }, { frase: 'Ну ты даёшь!', traducao: 'Você é demais!' },
        ],
      }),
      dialogo(8, 'Опоздал / Atrasado', 'Dois amigos esperam por um terceiro para um jogo.', [
        ['Аня', 'Привет! Ты чего не пришёл?', 'Oi! Por que você não veio?'], ['Паша', 'Здрасте-пожалуйста! Я же сказал, что опоздаю.', 'Ora essa! Eu já disse que iria me atrasar.'], ['Аня', 'Ну ты даёшь! Мы ждали тебя целый час.', 'Você é demais! Esperamos você uma hora inteira.'],
        ['Паша', 'Извини, пробка была жуткая. Щас буду.', 'Desculpe, o trânsito estava terrível. Já chego.'], ['Аня', 'Ладно, давай быстрее. Сегодня ведь футбол.', 'Tá bem, vem logo. Hoje tem futebol, afinal.'], ['Паша', 'Знаю-знаю. Я уже бегу!', 'Eu sei, eu sei. Já estou correndo!'],
        ['Аня', 'Только не забудь кошелёк.', 'Só não esqueça a carteira.'], ['Паша', 'Не забуду, не бойся.', 'Não esqueço, não tenha medo.'],
      ]),
      producao(7, 'Repita o diálogo em voz alta, imitando o ritmo e a entonação do áudio, e depois troque os papéis.'),
    ]),
    sessao('S4', 'Prática de escuta', [
      revisao(5, 'Escute de novo o diálogo e repita as frases difíceis.'),
      exercicios(20, [
        ouvir('Ты чего не пришёл', ['Ты чего не пришёл', 'Ты чего не пришла', 'Ты что не пришёл'], 'Ты чего не пришёл', 'Coloquial: «чего».'), ouvir('Щас буду', ['Щас буду', 'Сейчас был', 'Сам буду'], 'Щас буду', 'Contração de «сейчас».'), ouvir('Сегодня ведь футбол', ['Сегодня ведь футбол', 'Сегодня был футбол', 'Сегодня футбол ведь'], 'Сегодня ведь футбол', '«сегодня» soa «сивóдня».'),
        ouvir('Здравствуйте, Борис Иванович', ['Здравствуйте, Борис Иванович', 'Здрасте, Борис Иванович', 'Здравствуй, Борис Иванович'], 'Здравствуйте, Борис Иванович', 'Formal.'), ouvir('Молоко и хлеб', ['Молоко и хлеб', 'Молоко и хлебы', 'Молоко и хлеба'], 'Молоко и хлеб', '«молоко» soa «малакó».'), ouvir('Конечно, я согласен', ['Конечно, я согласен', 'Конечно, я согласна', 'Конечно, мы согласны'], 'Конечно, я согласен', '«конечно» soa «канéшна».'),
        mc('O «о» átono soa como:', ['а', 'у', 'и'], 'а', 'Redução do «о».'), mc('«Щас» é:', ['forma informal de «сейчас»', 'forma formal', 'um adjetivo'], 'forma informal de «сейчас»', 'Coloquial.'), mc('O «г» de «его» soa como:', ['в', 'к', 'х'], 'в', '«его» = йивó.'),
        lacuna('Ты ___ не пришёл? (coloquial: por quê)', ['чего', 'что', 'кто'], 'чего', '«чего» coloquial.'), lacuna('Я ___ тебе позвоню. (já)', ['щас', 'сам', 'сразу'], 'щас', 'Coloquial.'), ordem('Ordene: «Не забуду, не бойся.»', ['Не', 'забуду', 'не', 'бойся'], 'Не забуду, не бойся.', 'Resposta curta.'),
        ditado('Знаю-знаю, я уже бегу', 'Fala rápida.'), livre('Escreva 4 frases de uma conversa rápida entre amigos (com «ну», «ладно», «щас» ou «чего»).', 'Привет! Ты чего не пришёл? Ну ты даёшь! Ладно, щас буду.'),
      ]),
      producao(5, 'Grave-se lendo o diálogo da aula com o ritmo de fala rápida.'),
    ]),
  ],
});
