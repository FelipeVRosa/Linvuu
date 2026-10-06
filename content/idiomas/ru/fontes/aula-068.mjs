import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 68, titulo: 'Opinião, acordo e desacordo', nivel: 'b1',
  objetivo: 'Dar a sua opinião (я думаю, по-моему, на мой взгляд), perguntar a dos outros, concordar (вы правы, согласен), concordar em parte (отчасти) e discordar com educação (я не согласен, не совсем так).',
  nota: 'Você expõe, defende e contesta ideias com educação. Próxima aula: escrita formal e informal.',
  sessoes: [
    sessao('S1', 'Dar e pedir opinião', [
      revisao(5, 'Escreva 5 frases com conectores: во-первых, кроме того, с одной стороны, например e итак.'),
      palavras(8, [['по-моему', 'pa-maiemú', 'na minha opinião', 'in my opinion'], ['на мой взгляд', 'na moy vzglyat', 'a meu ver', 'in my view'], ['я считаю, что', 'ya schitáyu shta', 'considero que', 'I consider that'], ['мне кажется', 'mnye kázhetsya', 'parece-me', 'it seems to me'], ['как вы думаете', 'kak vy dúmaite', 'o que o senhor acha', 'what do you think'], ['что вы думаете о', 'shto vy dúmaite o', 'o que pensa sobre', 'what do you think of'], ['по поводу', 'pa póvadu', 'a respeito de', 'regarding'], ['что касается', 'shto kasáyetsya', 'quanto a', 'as for']]),
      gramatica(12, 'Opinião: fórmulas e estrutura', 'PASSO 1: para dar a SUA opinião: «Я думаю, что…», «Я считаю, что…», «Мне кажется, что…», «По-моему, …», «На мой взгляд, …». PASSO 2: depois de «что» a frase segue normal: «Я думаю, что это правильно». PASSO 3: «ПО-МОЕМУ» e «НА МОЙ ВЗГЛЯД» vêm no começo e levam vírgula: «По-моему, это хорошая идея». PASSO 4: para PEDIR a opinião: «Как вы думаете?», «Что вы думаете о…?», «Как вы считаете?». PASSO 5: para o assunto: «ПО ПОВОДУ» + genitivo («по поводу работы») e «ЧТО КАСАЕТСЯ» + genitivo («что касается цен»). PASSO 6: «Я думаю, что нет» e «Я думаю, что да» são as respostas curtas.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'opinião pessoal', exemplo: 'Я думаю, что это правильно. Я считаю, что это важно.' }, { funcao: 'opinião suave', exemplo: 'Мне кажется, что он прав.' }, { funcao: 'opinião no começo', exemplo: 'По-моему, это хорошая идея. На мой взгляд, это лучше.' }, { funcao: 'pedir opinião', exemplo: 'Как вы думаете? Что вы думаете о проекте?' }, { funcao: 'assunto', exemplo: 'По поводу работы я согласен. Что касается цен, они высокие.' },
        ],
        erros: [['Я думаю что это правильно.', 'Я думаю, что это правильно.', 'Vírgula antes de «что».'], ['По-моему мнению, это хорошо.', 'По-моему, это хорошо. / По моему мнению, это хорошо.', '«по-моему» (um só) ou «по моему мнению» (separado).'], ['Что касается цены, высокие.', 'Что касается цен, они высокие.', 'Concorda o número e leva sujeito.']],
      }),
      producao(5, 'Dê a sua opinião: «Я думаю, что … Мне кажется, что … По-моему, … На мой взгляд, … Как вы думаете?»'),
    ]),
    sessao('S2', 'Concordar e discordar', [
      revisao(5, 'Escreva 5 frases com opinião e 3 perguntas pedindo a opinião dos outros.'),
      palavras(8, [['я согласен', 'ya saglásen', 'estou de acordo', 'I agree'], ['вы правы', 'vy práwy', 'o senhor tem razão', 'you are right'], ['совершенно верно', 'savirshénna vyérna', 'exatamente', 'exactly'], ['отчасти', 'atchásti', 'em parte', 'partly'], ['не совсем так', 'nye safsyém tak', 'não é bem assim', 'not quite'], ['я не согласен', 'ya nye saglásen', 'não concordo', 'I disagree'], ['я думаю иначе', 'ya dúmayu inache', 'penso diferente', 'I think otherwise'], ['разумеется', 'razumyétsya', 'claro, é evidente', 'of course']]),
      gramatica(12, 'Concordar e discordar com educação', 'PASSO 1: para CONCORDAR: «Я согласен / согласна с вами», «Вы правы», «Совершенно верно», «Точно!», «Разумеется». PASSO 2: «согласен» é adjetivo curto: «согласен, согласна, согласны»; o caso depois de «с» é o instrumental: «с вами, с тобой, с ним». PASSO 3: para CONCORDAR EM PARTE: «Отчасти вы правы, но…», «С одной стороны, вы правы». PASSO 4: para DISCORDAR com educação: «Не совсем так», «Я не согласен с вами», «Я думаю иначе», «Тут я с вами не согласна». PASSO 5: depois de discordar, explique: «Я не согласен, потому что…». PASSO 6: «Каждый выбирает своё» (cada um escolhe o seu) fecha o debate com paz.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'concordar', exemplo: 'Я согласен с вами. Вы правы. Совершенно верно.' }, { funcao: 'concordar em parte', exemplo: 'Отчасти вы правы, но…' }, { funcao: 'discordar com educação', exemplo: 'Не совсем так. Я думаю иначе.' }, { funcao: 'discordar com clareza', exemplo: 'Я не согласен с вами, потому что…' }, { funcao: 'fechar', exemplo: 'Каждый выбирает своё.' },
        ],
        erros: [['Я согласен вам.', 'Я согласен с вами.', '«согласен с» + instrumental.'], ['Я не согласна с тебя.', 'Я не согласна с тобой.', 'Instrumental: тобой.'], ['Вы правильно.', 'Вы правы.', '«прав» é adjetivo curto.']],
      }),
      producao(5, 'Diga: «Я согласен с вами. Вы правы. Отчасти вы правы, но … Не совсем так. Я не согласен с вами, потому что …»'),
    ]),
    sessao('S3', 'Cidade ou campo?', [
      revisao(5, 'Escreva 5 frases de acordo, de acordo em parte e de desacordo.'),
      gramatica(10, 'Um debate educado', 'PASSO 1: abra com a pergunta: «Как вы думаете, где лучше жить?». PASSO 2: dê uma opinião com um argumento: «По-моему, в городе удобнее: рядом работа». PASSO 3: concorde em parte: «Отчасти вы правы, но…». PASSO 4: contraponha: «Однако мне кажется, что…». PASSO 5: discorde: «Тут я с вами не согласна». PASSO 6: feche: «Каждый выбирает своё».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Как вы думаете, где лучше жить?', traducao: 'Onde o senhor acha que é melhor morar?' }, { frase: 'По-моему, в городе удобнее.', traducao: 'Na minha opinião, na cidade é mais cômodo.' }, { frase: 'Отчасти вы правы, но за городом спокойнее.', traducao: 'Em parte o senhor tem razão, mas no campo é mais tranquilo.' }, { frase: 'Тут я с вами не согласна.', traducao: 'Aí eu não concordo com o senhor.' },
        ],
      }),
      dialogo(8, 'Город или деревня? / Cidade ou campo?', 'Olga e Igor debatem onde é melhor morar.', [
        ['Ольга', 'Как вы думаете, где лучше жить: в городе или за городом?', 'O que o senhor acha: é melhor morar na cidade ou fora dela?'], ['Игорь', 'По-моему, в городе удобнее: рядом работа и магазины.', 'Na minha opinião, na cidade é mais cômodo: perto há trabalho e lojas.'], ['Ольга', 'Отчасти вы правы, но, на мой взгляд, за городом спокойнее.', 'Em parte o senhor tem razão, mas a meu ver fora da cidade é mais tranquilo.'],
        ['Игорь', 'Согласен, там тише. Однако мне кажется, что без машины там трудно.', 'Concordo, lá é mais silencioso. Porém me parece que sem carro lá é difícil.'], ['Ольга', 'Вы правы. А что вы думаете о метро?', 'O senhor tem razão. E o que acha do metrô?'], ['Игорь', 'Я считаю, что это самый удобный транспорт.', 'Considero que é o transporte mais cômodo.'],
        ['Ольга', 'Тут я с вами не согласна: в час пик там тесно.', 'Aí eu não concordo com o senhor: na hora do rush lá é apertado.'], ['Игорь', 'Ну, может быть. Каждый выбирает своё.', 'Bem, talvez. Cada um escolhe o seu.'],
      ]),
      producao(7, 'Debata em voz alta com um amigo imaginário: dê opinião, concorde em parte, discorde e feche com educação.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com opinião, acordo e desacordo.'),
      exercicios(20, [
        lacuna('Я ___, что это правильно. (considero)', ['считаю', 'считать', 'считаешь'], 'считаю', '«я считаю, что».'), lacuna('___, это хорошая идея. (na minha opinião)', ['По-моему', 'По моему', 'На мне'], 'По-моему', '«по-моему,».'), lacuna('Я согласен ___ вами.', ['с', 'к', 'о'], 'с', '«согласен с» + instrumental.'),
        lacuna('___ вы правы. (em parte)', ['Отчасти', 'Совсем', 'Иначе'], 'Отчасти', 'Concordar em parte.'), lacuna('Не ___ так. (bem)', ['совсем', 'иначе', 'отчасти'], 'совсем', '«не совсем так».'), lacuna('Я думаю ___. (diferente)', ['иначе', 'отчасти', 'правильно'], 'иначе', '«я думаю иначе».'),
        mc('«Вы правы» significa:', ['o senhor tem razão', 'o senhor está errado', 'o senhor está livre'], 'o senhor tem razão', '«прав» = com razão.'), mc('«Каждый выбирает своё» fecha:', ['um debate com paz', 'uma compra', 'uma reunião'], 'um debate com paz', 'Cada um escolhe o seu.'), mc('Para pedir opinião, diga:', ['Как вы думаете?', 'Что вы делаете?', 'Где вы живёте?'], 'Как вы думаете?', 'Pergunta de opinião.'),
        ordem('Ordene: «Я не согласен с вами.»', ['Я', 'не', 'согласен', 'с', 'вами'], 'Я не согласен с вами.', '«с» + instrumental.'), ouvir('Отчасти вы правы, но за городом спокойнее', ['Отчасти вы правы, но за городом спокойнее', 'Вы абсолютно правы', 'Я не согласен с вами'], 'Отчасти вы правы, но за городом спокойнее', 'Concordar em parte.'), ditado('Тут я с вами не согласна', 'Discordar com educação.'),
        livre('Escreva 5 frases: uma opinião, um pedido de opinião, um acordo, um acordo em parte e um desacordo.', 'По-моему, это хорошая идея. Как вы думаете? Я согласен с вами. Отчасти вы правы, но… Я не согласен с вами.'),
      ]),
      producao(5, 'Grave-se defendendo uma opinião e respondendo a uma objeção.'),
    ]),
  ],
});
