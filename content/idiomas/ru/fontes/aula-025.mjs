import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 25, titulo: 'Gramática: o dativo', nivel: 'a2',
  objetivo: 'Formar o dativo no singular e no plural e usá-lo para «para quem», idade, sensações e verbos como звонить, помогать e нравиться.',
  nota: 'Você domina o dativo. Próxima aula: o instrumental.',
  sessoes: [
    sessao('S1', 'As formas do dativo', [
      revisao(5, 'Escreva de memória os pronomes no dativo e 3 frases com «Мне нравится …».'),
      gramatica(14, 'Dativo: para quem?', 'O dativo responde a «кому? чему?» (a quem? a quê?). Em português usamos «a» ou «para» + alguém: «dou o livro ao meu irmão». Em russo a palavra muda de final. Singular: masculino e neutro: consoante + -у (брат → брату), -й e -ь viram -ю (учитель → учителю), -о vira -у (окно → окну), -е vira -ю (море → морю). Feminino: -а e -я viram -е (мама → маме, неделя → неделе), -ия vira -ии (Мария → Марии), -ь vira -и (ночь → ночи). Plural, para todos os gêneros: -ам ou -ям (студенты → студентам, друзья → друзьям). Irregulares: дочь → дочери, мать → матери.', {
        tag: 'Casos',
        comparacao: 'em português só os pronomes mudam («me», «lhe», «nos»). Em russo, todo substantivo e adjetivo muda de final conforme o caso.',
        tabelas: [
          { titulo: 'Singular', linhas: [
            { nominativo: 'брат', dativo: 'брату', pt: 'ao irmão' }, { nominativo: 'друг', dativo: 'другу', pt: 'ao amigo' }, { nominativo: 'учитель', dativo: 'учителю', pt: 'ao professor' },
            { nominativo: 'мама', dativo: 'маме', pt: 'à mãe' }, { nominativo: 'подруга', dativo: 'подруге', pt: 'à amiga' }, { nominativo: 'семья', dativo: 'семье', pt: 'à família' },
            { nominativo: 'Мария', dativo: 'Марии', pt: 'à Maria' }, { nominativo: 'окно', dativo: 'окну', pt: 'à janela' }, { nominativo: 'море', dativo: 'морю', pt: 'ao mar' }, { nominativo: 'дочь', dativo: 'дочери', pt: 'à filha' }, { nominativo: 'мать', dativo: 'матери', pt: 'à mãe (formal)' },
          ] },
          { titulo: 'Plural', linhas: [
            { nominativo: 'студенты', dativo: 'студентам', pt: 'aos estudantes' }, { nominativo: 'друзья', dativo: 'друзьям', pt: 'aos amigos' }, { nominativo: 'сёстры', dativo: 'сёстрам', pt: 'às irmãs' },
            { nominativo: 'дети', dativo: 'детям', pt: 'às crianças' }, { nominativo: 'люди', dativo: 'людям', pt: 'às pessoas' }, { nominativo: 'родители', dativo: 'родителям', pt: 'aos pais' },
          ] },
          { titulo: 'Pronomes', linhas: [
            { nominativo: 'я', dativo: 'мне' }, { nominativo: 'ты', dativo: 'тебе' }, { nominativo: 'он / оно', dativo: 'ему' }, { nominativo: 'она', dativo: 'ей' }, { nominativo: 'мы', dativo: 'нам' }, { nominativo: 'вы', dativo: 'вам' }, { nominativo: 'они', dativo: 'им' },
          ] },
        ],
        erros: [['Я звоню мама.', 'Я звоню маме.', '«звонить» pede dativo.'], ['Я даю книгу брат.', 'Я даю книгу брату.', 'Quem recebe vai para o dativo.']],
      }),
      palavras(6, [
        ['совет', 'savyét', 'conselho', 'advice'], ['вопрос', 'vapróss', 'pergunta', 'question'], ['ответ', 'atvyét', 'resposta', 'answer'], ['помощь', 'pómashch', 'ajuda', 'help'], ['звонок', 'zvanók', 'ligação', 'call'], ['сообщение', 'saapshchénie', 'mensagem', 'message'],
      ]),
      producao(5, 'Diga: «Я звоню маме. Я даю книгу брату. Я отвечаю другу.»'),
    ]),
    sessao('S2', 'Verbos e preposições com dativo', [
      revisao(5, 'Escreva o dativo de: брат, мама, друг, подруга, дети.'),
      palavras(8, [
        ['давать', 'davát', 'dar', 'to give'], ['дарить', 'darít', 'presentear', 'to give a gift'], ['звонить', 'zvanít', 'ligar para', 'to call'], ['помогать', 'pamagát', 'ajudar', 'to help'],
        ['отвечать', 'atvichát', 'responder a', 'to answer'], ['советовать', 'savyétavat', 'aconselhar', 'to advise'], ['нравиться', 'nrávitsa', 'agradar, gostar', 'to be liked'], ['показывать', 'pakázyvat', 'mostrar', 'to show'],
      ]),
      gramatica(12, 'Verbos e preposições que pedem dativo', 'Alguns verbos pedem dativo mesmo quando em português o complemento é direto: «звонить кому?» (ligar PARA alguém), «помогать кому?» (ajudar alguém), «отвечать кому?» (responder A alguém), «советовать кому?» (aconselhar alguém). O verbo «нравиться» inverte a frase: quem gosta vai para o dativo e a coisa de que se gosta é o sujeito: «Мне нравится музыка» (a música me agrada). Se a coisa é plural, o verbo também: «Мне нравятся фильмы». As preposições «к» (em direção a uma pessoa ou lugar: «Я иду к другу») e «по» («по телефону», «по субботам») pedem dativo.', {
        tag: 'Casos',
        tabela: [
          { verbo: 'звонить', pergunta: 'кому?', exemplo: 'Я звоню маме.' }, { verbo: 'помогать', pergunta: 'кому?', exemplo: 'Я помогаю брату.' }, { verbo: 'отвечать', pergunta: 'кому?', exemplo: 'Он отвечает учителю.' },
          { verbo: 'советовать', pergunta: 'кому?', exemplo: 'Я советую другу читать.' }, { verbo: 'дарить', pergunta: 'кому? что?', exemplo: 'Я дарю маме цветы.' }, { verbo: 'нравиться', pergunta: 'кому?', exemplo: 'Мне нравится музыка. Мне нравятся фильмы.' },
          { verbo: 'к + dativo', pergunta: 'к кому?', exemplo: 'Я иду к другу.' }, { verbo: 'по + dativo', pergunta: 'по чему?', exemplo: 'по телефону, по субботам' },
        ],
        erros: [['Мне нравится фильмы.', 'Мне нравятся фильмы.', 'O verbo concorda com a coisa de que se gosta.'], ['Я иду в друг.', 'Я иду к другу.', 'Para ir ao encontro de uma pessoa, use «к» + dativo.']],
      }),
      producao(5, 'Diga: «Мне нравится музыка. Мне нравятся фильмы. Я иду к другу. Я звоню маме по телефону.»'),
    ]),
    sessao('S3', 'Idade e sensações', [
      revisao(5, 'Escreva 4 frases com «Мне нравится / нравятся».'),
      palavras(5, [['холодно', 'khólada', 'frio (sensação)', 'cold'], ['жарко', 'zhárka', 'calor (sensação)', 'hot'], ['скучно', 'skúchna', 'entediado', 'bored'], ['весело', 'viéssila', 'divertido, alegre', 'fun'], ['страшно', 'stráshna', 'com medo', 'scary']]),
      gramatica(10, 'Idade, sensações e necessidade com o dativo', 'Em russo, idade, sensação e necessidade se dizem com o dativo da pessoa, sem um verbo como «ter»: «Мне 20 лет» (tenho 20 anos); «Мне холодно» (estou com frio); «Мне нужно работать» (preciso trabalhar). A palavra para «ano» depende do número: «год» com 1 (21 год), «года» com 2, 3 e 4 (22 года), «лет» com 5 a 20 e com 25, 30... (25 лет). De 11 a 14 é sempre «лет». Pergunta: «Сколько тебе лет?»', {
        tag: 'Casos',
        tabela: [
          { situacao: 'idade', exemplo: 'Мне двадцать лет. / Ему двадцать один год. / Ей двадцать два года.' }, { situacao: 'frio, calor', exemplo: 'Мне холодно. Ему жарко.' },
          { situacao: 'estado de ânimo', exemplo: 'Нам весело. Мне скучно. Ей страшно.' }, { situacao: 'necessidade', exemplo: 'Мне нужно идти. Тебе надо отдыхать.' },
        ],
      }),
      dialogo(8, 'Сколько тебе лет? / Quantos anos você tem?', 'Dois amigos conversam.', [
        ['Лиза', 'Сколько тебе лет, Макс?', 'Quantos anos você tem, Max?'], ['Макс', 'Мне двадцать пять лет. А тебе?', 'Tenho vinte e cinco anos. E você?'], ['Лиза', 'Мне двадцать три года.', 'Tenho vinte e três anos.'],
        ['Макс', 'Тебе нравится Москва?', 'Você gosta de Moscou?'], ['Лиза', 'Да, очень. Но зимой мне холодно!', 'Sim, muito. Mas no inverno sinto frio!'], ['Макс', 'Я из Бразилии, поэтому мне тоже холодно.', 'Sou do Brasil, por isso também sinto frio.'],
        ['Лиза', 'Тебе нужно пить горячий чай!', 'Você precisa tomar chá quente!'], ['Макс', 'Хорошая идея! Спасибо!', 'Boa ideia! Obrigado!'],
      ]),
      producao(2, 'Diga a sua idade e uma coisa de que você gosta: «Мне … лет. Мне нравится …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: a sua idade, algo de que gosta, para quem liga e a quem dá um presente.'),
      exercicios(20, [
        lacuna('Я звоню ___. (mãe)', ['маме', 'мама', 'маму'], 'маме', 'Dativo feminino: -а → -е.'),
        lacuna('Я даю книгу ___. (ao irmão)', ['брату', 'брат', 'брата'], 'брату', 'Dativo masculino: consoante + -у.'),
        mc('Dativo plural de «студент»:', ['студентам', 'студентов', 'студенты'], 'студентам', 'Plural: -ам.'),
        mc('Dativo de «дочь»:', ['дочери', 'дочь', 'дочерью'], 'дочери', 'Irregular.'),
        lacuna('Я пишу ___ письмо. (a ele)', ['ему', 'его', 'он'], 'ему', 'Dativo de «он»: ему.'),
        lacuna('___ нравится музыка. (a mim)', ['Мне', 'Я', 'Меня'], 'Мне', 'Quem gosta vai para o dativo.'),
        lacuna('Мне ___ фильмы. (agradam)', ['нравятся', 'нравится', 'нравлюсь'], 'нравятся', 'Plural: нравятся.'),
        mc('«Я иду к другу» significa:', ['Vou à casa do amigo', 'Vou com o amigo', 'Vou no amigo'], 'Vou à casa do amigo', '«к» + dativo = em direção a alguém.'),
        lacuna('Мне двадцать ___. (anos)', ['лет', 'год', 'года'], 'лет', 'Com 5 a 20: лет.'),
        lacuna('Ему двадцать один ___.', ['год', 'года', 'лет'], 'год', 'Com 1: год.'),
        lacuna('Ей двадцать два ___.', ['года', 'год', 'лет'], 'года', 'Com 2, 3 e 4: года.'),
        mc('Como se diz «Estou com frio»?', ['Мне холодно', 'Я холодно', 'Меня холодно'], 'Мне холодно', 'Sensação: dativo + palavra invariável.'),
        ouvir('Мне нравится музыка', ['Мне нравится музыка', 'Я люблю музыку', 'Мне нравятся фильмы'], 'Мне нравится музыка', '«нравится» com sujeito singular.'),
        ditado('Я звоню маме', 'звонить + dativo.'),
        livre('Escreva 4 frases: sua idade, algo de que gosta, para quem liga e a quem dá um presente.', 'Мне тридцать лет. Мне нравится музыка. Я звоню маме. Я дарю подарок другу.'),
      ]),
      producao(5, 'Grave-se: fale da sua idade, do que você gosta e para quem você liga.'),
    ]),
  ],
});
