import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 13, titulo: 'Gramática: advérbios e perguntas', nivel: 'a1',
  objetivo: 'Entender o que é advérbio (a palavra que nunca muda), formar advérbios a partir de adjetivos e fazer perguntas.',
  nota: 'Você já diz como, quando e com que frequência faz as coisas, e sabe perguntar. Próxima aula: o mapa dos casos.',
  sessoes: [
    sessao('S1', 'O que é advérbio', [
      revisao(5, 'Escreva «хороший» nas quatro formas: masculino, feminino, neutro e plural.'),
      gramatica(10, 'Advérbio: a palavra que nunca muda', 'Advérbio é a palavra que informa COMO, QUANDO, ONDE ou QUANTO algo acontece: «bem», «hoje», «aqui», «muito». Ele nunca muda de forma, nem para o gênero nem para o plural. Essa é a diferença para o adjetivo: «хороший дом» (adjetivo: muda com o substantivo) × «Он хорошо работает» (advérbio: sempre «хорошо»). Muitos advérbios nascem do adjetivo: tire a terminação (-ый, -ий, -ой) e ponha -о. Outros são palavras próprias: здесь, там, сейчас, очень, всегда.', {
        tag: 'Advérbios',
        comparacao: '«bom» → «bem», «lento» → «lentamente». O processo é parecido: o advérbio sai do adjetivo e não varia. Em russo basta trocar o final por -о.',
        tabela: [
          { adjetivo: 'хороший', adverbio: 'хорошо', pt: 'bem' }, { adjetivo: 'плохой', adverbio: 'плохо', pt: 'mal' }, { adjetivo: 'быстрый', adverbio: 'быстро', pt: 'rápido, rapidamente' },
          { adjetivo: 'медленный', adverbio: 'медленно', pt: 'devagar' }, { adjetivo: 'тихий', adverbio: 'тихо', pt: 'baixinho, em silêncio' }, { adjetivo: 'громкий', adverbio: 'громко', pt: 'alto (som)' },
          { adjetivo: 'трудный', adverbio: 'трудно', pt: 'difícil' }, { adjetivo: 'лёгкий', adverbio: 'легко', pt: 'fácil' },
        ],
        erros: [['Она работает хорошая.', 'Она работает хорошо.', 'Depois de um verbo, use o advérbio, que não muda.'], ['Он говорит быстрый.', 'Он говорит быстро.', 'Para dizer COMO alguém faz algo, use advérbio.']],
      }),
      palavras(10, [
        ['быстро', 'býstra', 'rápido', 'quickly'], ['медленно', 'miédliena', 'devagar', 'slowly'], ['тихо', 'tíkha', 'baixinho', 'quietly'], ['громко', 'grómka', 'alto', 'loudly'], ['плохо', 'plókha', 'mal', 'badly'],
        ['легко', 'likhkó', 'fácil', 'easy'], ['трудно', 'trúdna', 'difícil', 'hard'], ['очень', 'ótchien', 'muito', 'very'], ['уже', 'uzhé', 'já', 'already'], ['ещё', 'ischió', 'ainda, mais', 'still, more'],
      ]),
      producao(5, 'Diga: «Я хорошо читаю. Он плохо говорит. Она быстро работает.»'),
    ]),
    sessao('S2', 'Lugar, tempo e frequência', [
      revisao(5, 'Escreva 5 adjetivos e o advérbio de cada um.'),
      palavras(12, [
        ['здесь', 'zdiess', 'aqui', 'here'], ['сейчас', 'siichás', 'agora', 'now'], ['сегодня', 'sivódnia', 'hoje', 'today'], ['завтра', 'záftra', 'amanhã', 'tomorrow'], ['вчера', 'fchirá', 'ontem', 'yesterday'],
        ['всегда', 'fsigdá', 'sempre', 'always'], ['никогда', 'nikogdá', 'nunca', 'never'], ['часто', 'cháhsta', 'com frequência', 'often'], ['редко', 'riétka', 'raramente', 'rarely'], ['иногда', 'inagdá', 'às vezes', 'sometimes'],
        ['потом', 'patóm', 'depois', 'then, later'], ['сначала', 'snachála', 'primeiro', 'at first'],
      ]),
      gramatica(8, 'Frequência e dupla negação', 'Os advérbios de frequência formam uma escala: всегда (sempre), часто, иногда, редко, никогда (nunca). Em russo, quando há «никогда», o verbo leva «не» também: «Я никогда не читаю», literalmente «eu nunca não leio». Em português diríamos só «eu nunca leio». É a chamada dupla negação, e em russo ela é obrigatória.', {
        tag: 'Advérbios',
        comparacao: 'o português também aceita «não ... nunca» («eu não leio nunca»), mas o russo exige o «не» sempre.',
        tabela: [
          { adverbio: 'всегда', frequencia: 'sempre', exemplo: 'Я всегда читаю.' }, { adverbio: 'часто', frequencia: 'com frequência', exemplo: 'Я часто слушаю музыку.' }, { adverbio: 'иногда', frequencia: 'às vezes', exemplo: 'Я иногда гуляю.' },
          { adverbio: 'редко', frequencia: 'raramente', exemplo: 'Я редко смотрю кино.' }, { adverbio: 'никогда не', frequencia: 'nunca', exemplo: 'Я никогда не смотрю кино.' },
        ],
        erros: [['Я никогда читаю.', 'Я никогда не читаю.', 'Com «никогда» o verbo leva «не».']],
      }),
      producao(5, 'Diga 4 frases sobre você com «всегда», «часто», «редко» e «никогда не».'),
    ]),
    sessao('S3', 'Perguntar', [
      revisao(5, 'Escreva 3 perguntas que você já sabe fazer em russo.'),
      palavras(8, [
        ['куда', 'kudá', 'para onde', 'where to'], ['когда', 'kagdá', 'quando', 'when'], ['почему', 'pachimú', 'por que', 'why'], ['потому что', 'patamúchta', 'porque', 'because'],
        ['какой / какая / какое / какие', 'kakói / kakáia / kakóie / kakíie', 'qual, que (m / f / n / pl)', 'which'], ['или', 'íli', 'ou', 'or'], ['но', 'no', 'mas', 'but'],
      ]),
      gramatica(12, 'Como perguntar', 'Pergunta de sim ou não: mantenha a frase e suba a entonação no final: «Ты студент?» Não há inversão de palavras nem «do/does», e não se usa «есть». Resposta: «Да.» ou «Нет.» Pergunta com palavra interrogativa: ponha a palavra no começo: «Где ты живёшь?», «Когда ты работаешь?». A palavra «какой» concorda com o substantivo, como um adjetivo. Para responder «почему», comece com «потому что».', {
        tag: 'Perguntas',
        comparacao: 'o português também pergunta só com a entonação («Você é estudante?»). Em russo isso vale para toda pergunta de sim ou não.',
        tabela: [
          { pergunta: 'кто', pt: 'quem', exemplo: 'Кто это?' }, { pergunta: 'что', pt: 'o quê', exemplo: 'Что ты делаешь?' }, { pergunta: 'где', pt: 'onde', exemplo: 'Где ты живёшь?' },
          { pergunta: 'откуда', pt: 'de onde', exemplo: 'Откуда ты?' }, { pergunta: 'куда', pt: 'para onde', exemplo: 'Куда ты?' }, { pergunta: 'когда', pt: 'quando', exemplo: 'Когда ты работаешь?' },
          { pergunta: 'почему', pt: 'por que', exemplo: 'Почему ты изучаешь русский язык?' }, { pergunta: 'какой', pt: 'qual, que', exemplo: 'Какой это дом? Какая это книга?' }, { pergunta: 'сколько', pt: 'quanto', exemplo: 'Сколько стоит?' },
        ],
        erros: [['Ты есть студент?', 'Ты студент?', 'Pergunta de sim ou não: mesma frase, entonação que sobe. Sem «есть».']],
      }),
      producao(5, 'Faça em voz alta 5 perguntas diferentes (кто, что, где, когда, почему) e responda a cada uma.'),
    ]),
    sessao('S4', 'Entrevista e prática', [
      revisao(5, 'Escreva 4 frases com advérbios (хорошо, плохо, всегда, никогда не).'),
      dialogo(8, 'Интервью / Entrevista', 'Uma jornalista entrevista uma leitora.', [
        ['Журналист', 'Здравствуйте! Как вас зовут?', 'Olá! Como a senhora se chama?'], ['Ольга', 'Меня зовут Ольга.', 'Eu me chamo Olga.'], ['Журналист', 'Где вы живёте?', 'Onde a senhora mora?'],
        ['Ольга', 'Я живу в Москве.', 'Eu moro em Moscou.'], ['Журналист', 'Вы часто читаете книги?', 'A senhora lê livros com frequência?'], ['Ольга', 'Да, я всегда читаю. Я очень люблю книги.', 'Sim, eu leio sempre. Eu gosto muito de livros.'],
        ['Журналист', 'Почему?', 'Por quê?'], ['Ольга', 'Потому что это интересно!', 'Porque é interessante!'],
      ]),
      exercicios(12, [
        mc('«Хорошо» é:', ['um advérbio (não muda)', 'um adjetivo (muda)', 'um substantivo'], 'um advérbio (não muda)', 'Advérbios nunca mudam de forma.'),
        lacuna('Она ___ работает. (bem)', ['хорошо', 'хорошая', 'хороший'], 'хорошо', 'Depois do verbo, advérbio.'),
        lacuna('Это ___ дом. (bom)', ['хороший', 'хорошо', 'хорошая'], 'хороший', 'Aqui descreve «дом»: adjetivo masculino.'),
        mc('Advérbio de «быстрый»:', ['быстро', 'быстрая', 'быстрые'], 'быстро', 'Troque o final por -о.'),
        ouvir('Почему?', ['Почему?', 'Когда?', 'Куда?'], 'Почему?', '«Почему» = por que.'),
        mc('Como perguntar «Você é estudante?»', ['Ты студент?', 'Ты есть студент?', 'Студент ты есть?'], 'Ты студент?', 'Mesma frase, entonação que sobe, sem «есть».'),
        lacuna('Я ___ не читаю. (nunca)', ['никогда', 'всегда', 'часто'], 'никогда', 'Dupla negação: никогда + не.'),
        ordem('Ordene: «Eu escuto música com frequência.»', ['слушаю', 'часто', 'музыку', 'Я'], 'Я часто слушаю музыку.', 'Sujeito + advérbio + verbo + objeto.'),
        ditado('Я очень люблю читать', 'очень = muito.'),
        livre('Escreva 4 frases com advérbios (хорошо, плохо, всегда, никогда не).', 'Я хорошо читаю. Я плохо говорю. Я всегда слушаю музыку. Я никогда не смотрю кино.'),
      ]),
      producao(5, 'Grave-se: responda em russo às perguntas do diálogo («Как вас зовут? Где вы живёте? Вы часто читаете книги? Почему?»).'),
    ]),
  ],
});
