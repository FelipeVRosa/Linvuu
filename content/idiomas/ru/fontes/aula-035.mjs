import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 35, titulo: 'Trabalho e profissões', nivel: 'a2',
  objetivo: 'Dizer a profissão com o instrumental («Я работаю врачом»), o local de trabalho com «в» e «на», o horário com «с … до …» e conduzir uma entrevista simples.',
  nota: 'Você fala do seu trabalho e faz uma entrevista simples. Próxima aula: casa e moradia.',
  sessoes: [
    sessao('S1', 'Profissão e local de trabalho', [
      revisao(5, 'Escreva 5 frases com «чтобы» e 5 com «если».'),
      palavras(8, [['работа', 'rabóta', 'trabalho', 'work'], ['профессия', 'prafésiya', 'profissão', 'profession'], ['офис', 'ófis', 'escritório', 'office'], ['коллега', 'kaléga', 'colega', 'colleague'], ['начальник', 'nachálnik', 'chefe', 'boss'], ['зарплата', 'zárplata', 'salário', 'salary'], ['завод', 'zavót', 'fábrica', 'factory'], ['больница', 'balnítsa', 'hospital', 'hospital']]),
      gramatica(12, 'Profissão e local de trabalho', 'PASSO 1: para dizer a profissão, use «работать» + INSTRUMENTAL, sem «como»: «Я работаю врачом» (trabalho como médico). PASSO 2: a pergunta é «КЕМ ты работаешь?» (kem = instrumental de «кто»). PASSO 3: com «быть» e «стать» (tornar-se) também vai o instrumental: «Я хочу стать инженером». PASSO 4: o instrumental muda a terminação: «врач → врачом», «учитель → учителем», «учительница → учительницей», «инженер → инженером». PASSO 5: muitas profissões não têm forma feminina e a mulher usa a masculina: «Она работает врачом». PASSO 6: o LOCAL usa o prepositivo, com «в» ou «на»: «в офисе, в школе, в больнице» e «на заводе, на фабрике, на почте, на работе».', {
        tag: 'Casos',
        comparacao: 'o português diz «trabalho COMO médico»; o russo não tem «como»: o próprio instrumental faz esse papel («врачом»).',
        tabela: [
          { frase: 'Я работаю врачом.', traducao: 'Trabalho como médico.' }, { frase: 'Она работает учительницей.', traducao: 'Ela trabalha como professora.' }, { frase: 'Кем ты работаешь?', traducao: 'Qual é a sua profissão?' }, { frase: 'Он работает в офисе.', traducao: 'Ele trabalha num escritório.' }, { frase: 'Мы работаем на заводе.', traducao: 'Trabalhamos numa fábrica.' }, { frase: 'Я хочу стать инженером.', traducao: 'Quero me tornar engenheiro.' },
        ],
        erros: [['Я работаю врач.', 'Я работаю врачом.', 'Profissão depois de «работать»: instrumental.'], ['Он работает в заводе.', 'Он работает на заводе.', '«завод» pede «на».']],
      }),
      producao(5, 'Diga: «Я работаю … Мой друг работает … Моя сестра работает … Кем ты работаешь?»'),
    ]),
    sessao('S2', 'Horário e rotina de trabalho', [
      revisao(5, 'Escreva 5 frases: a sua profissão e onde você trabalha.'),
      palavras(8, [['рабочий день', 'rabóchiy dyen', 'dia de trabalho', 'working day'], ['встреча', 'fstréscha', 'encontro, reunião', 'meeting'], ['совещание', 'savishchániye', 'reunião (de trabalho)', 'meeting'], ['отпуск', 'ótpusk', 'férias', 'holiday'], ['выходной', 'vykhadnóy', 'dia de folga', 'day off'], ['начинать / начать', 'nachinát / nachát', 'começar', 'to begin'], ['заканчивать / закончить', 'zakánchivat / zakónchit', 'terminar', 'to finish'], ['опаздывать / опоздать', 'apázdyvat / apazdát', 'atrasar-se', 'to be late']]),
      gramatica(12, 'Horário: с … до …, по + dativo, начинать e заканчивать', 'PASSO 1: para dizer o período, use «С + genitivo ДО + genitivo»: «с девяти до шести» (das nove às seis). PASSO 2: para dizer «às segundas, aos sábados» (hábito), use «ПО + dativo plural»: «по понедельникам, по субботам». PASSO 3: «начинать / заканчивать» são transitivos e pedem acusativo ou infinitivo imperfectivo: «Я начинаю работу в девять», «Я заканчиваю работать в шесть». PASSO 4: para a coisa que começa sozinha, use a forma com -ся: «Работа начинается в девять». PASSO 5: «опоздать НА + acusativo»: «Я опоздал на работу» (cheguei atrasado ao trabalho). PASSO 6: «в отпуске» = de férias (prepositivo): «Он в отпуске».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я работаю с девяти до шести.', traducao: 'Trabalho das nove às seis.' }, { frase: 'По субботам я не работаю.', traducao: 'Aos sábados não trabalho.' }, { frase: 'Работа начинается в девять.', traducao: 'O trabalho começa às nove.' }, { frase: 'Я заканчиваю работать в шесть.', traducao: 'Termino de trabalhar às seis.' }, { frase: 'Я опоздал на работу.', traducao: 'Cheguei atrasado ao trabalho.' },
        ],
        erros: [['Я работаю от девяти до шести.', 'Я работаю с девяти до шести.', 'Para horários, «с … до …».'], ['Я опоздал в работу.', 'Я опоздал на работу.', 'опоздать + «на» + acusativo.']],
      }),
      producao(5, 'Descreva o seu dia de trabalho: «Я работаю с … до … По субботам … Работа начинается в …»'),
    ]),
    sessao('S3', 'A entrevista', [
      revisao(5, 'Escreva 5 frases sobre o seu horário de trabalho.'),
      gramatica(10, 'Falar de habilidades e experiência', 'PASSO 1: para dizer o que sabe fazer, use «Я УМЕЮ» + infinitivo: «Я умею читать и писать». PASSO 2: «Я МОГУ» + infinitivo = «posso, consigo»: «Я могу начать в понедельник». PASSO 3: línguas: «Я говорю ПО-русски / по-португальски» (advérbio com «по-»). PASSO 4: experiência: «У меня есть опыт» (tenho experiência); «Я работал(а) пять лет» (trabalhei cinco anos). PASSO 5: «Расскажите о себе» é o pedido típico da entrevista.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Расскажите о себе.', traducao: 'Fale um pouco de você.' }, { frase: 'Я умею работать в команде.', traducao: 'Sei trabalhar em equipe.' }, { frase: 'Я говорю по-португальски и по-английски.', traducao: 'Falo português e inglês.' }, { frase: 'У меня есть опыт.', traducao: 'Tenho experiência.' }, { frase: 'Я могу начать в понедельник.', traducao: 'Posso começar na segunda-feira.' },
        ],
      }),
      dialogo(8, 'Собеседование / A entrevista', 'Anna é entrevistada por Boris.', [
        ['Борис', 'Здравствуйте, Анна. Расскажите о себе.', 'Olá, Anna. Fale-me de você.'], ['Анна', 'Я из Бразилии. Я инженер и пять лет работала в строительной компании.', 'Sou do Brasil. Sou engenheira e trabalhei cinco anos numa construtora.'], ['Борис', 'Вы говорите по-русски?', 'A senhora fala russo?'],
        ['Анна', 'Да, но я ещё учусь. Я умею читать и писать.', 'Sim, mas ainda estou aprendendo. Sei ler e escrever.'], ['Борис', 'Почему вы хотите работать у нас?', 'Por que a senhora quer trabalhar conosco?'], ['Анна', 'Потому что ваша фирма делает интересные проекты.', 'Porque a sua firma faz projetos interessantes.'],
        ['Борис', 'Когда вы можете начать?', 'Quando a senhora pode começar?'], ['Анна', 'Если вы согласны, я могу начать в понедельник.', 'Se o senhor concordar, posso começar na segunda-feira.'],
      ]),
      producao(7, 'Responda em voz alta, como numa entrevista: «Расскажите о себе. Где вы работали? Что вы умеете? Когда вы можете начать?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o seu trabalho.'),
      exercicios(20, [
        lacuna('Я работаю ___. (como médico)', ['врачом', 'врач', 'врача'], 'врачом', '«работать» + instrumental.'), lacuna('Она работает ___. (como professora)', ['учительницей', 'учительница', 'учительницу'], 'учительницей', 'Instrumental feminino: -ей.'), lacuna('Он работает ___ заводе.', ['на', 'в', 'к'], 'на', '«завод» pede «на».'),
        lacuna('Я работаю ___ офисе.', ['в', 'на', 'с'], 'в', '«в офисе».'), lacuna('Рабочий день с девяти ___ шести.', ['до', 'от', 'из'], 'до', '«с … до …».'), lacuna('Я хочу стать ___. (engenheiro)', ['инженером', 'инженер', 'инженера'], 'инженером', '«стать» + instrumental.'),
        mc('«Кем ты работаешь?» pergunta:', ['a profissão', 'o local', 'o horário'], 'a profissão', '«кем» = instrumental de «кто».'), mc('«Опоздать на работу»: depois de «на», vai o:', ['acusativo', 'genitivo', 'prepositivo'], 'acusativo', '«опоздать на» + acusativo.'), ordem('Ordene: «Мы работаем по понедельникам.»', ['Мы', 'работаем', 'по', 'понедельникам'], 'Мы работаем по понедельникам.', '«по» + dativo plural.'),
        ouvir('Я работаю врачом', ['Я работаю врачом', 'Я работаю в больнице', 'Я хочу стать врачом'], 'Я работаю врачом', 'Profissão em instrumental.'), ditado('Рабочий день с девяти до шести', '«с … до …» + genitivo.'), livre('Escreva 5 frases: sua profissão, onde trabalha, horário, um dia da semana e uma habilidade.', 'Я работаю инженером. Я работаю в офисе. Рабочий день с девяти до шести. По субботам я не работаю. Я умею говорить по-португальски.'),
      ]),
      producao(5, 'Grave-se numa entrevista de emprego imaginária.'),
    ]),
  ],
});
