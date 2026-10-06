import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 67, titulo: 'Conectores do discurso', nivel: 'b1',
  objetivo: 'Organizar um discurso com conectores: ordem (во-первых, во-вторых, наконец), adição (кроме того, к тому же), contraste (с одной стороны … с другой стороны, наоборот), exemplo (например, то есть) e conclusão (итак, в общем).',
  nota: 'Você organiza o que diz em partes claras. Próxima aula: opinião, acordo e desacordo.',
  sessoes: [
    sessao('S1', 'Ordem e adição', [
      revisao(5, 'Escreva 5 frases com partículas: даже, только, же, разве e неужели.'),
      palavras(8, [['во-первых', 'va-pyérvykh', 'primeiro, em primeiro lugar', 'firstly'], ['во-вторых', 'va-ftarýkh', 'segundo', 'secondly'], ['в-третьих', 'f-trétikh', 'terceiro', 'thirdly'], ['наконец', 'nakanyéts', 'por fim', 'finally'], ['кроме того', 'króme tavó', 'além disso', 'besides'], ['к тому же', 'k tamú zhe', 'ainda por cima', 'moreover'], ['затем', 'zatyém', 'em seguida', 'then'], ['итак', 'iták', 'portanto', 'so']]),
      gramatica(12, 'Organizar o discurso: ordem e adição', 'PASSO 1: para listar argumentos, use «ВО-ПЕРВЫХ, ВО-ВТОРЫХ, В-ТРЕТЬИХ» e «НАКОНЕЦ»: «Во-первых, нужен план. Во-вторых, нужны деньги». PASSO 2: para acrescentar uma ideia, use «КРОМЕ ТОГО» ou «К ТОМУ ЖЕ»: «Кроме того, это дёшево», «К тому же, он близко». PASSO 3: para a sequência, «ЗАТЕМ», «ПОТОМ», «ПОСЛЕ ЭТОГО»: «Сначала я позвонил, затем написал». PASSO 4: para concluir, «ИТАК» e «В ОБЩЕМ»: «Итак, мы договорились». PASSO 5: depois de cada conector há uma VÍRGULA. PASSO 6: o conector fica no começo da frase; o verbo segue a ordem normal.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'ordem', conectores: 'во-первых, во-вторых, в-третьих, наконец', exemplo: 'Во-первых, нужен план. Во-вторых, нужны деньги.' }, { funcao: 'adição', conectores: 'кроме того, к тому же', exemplo: 'Кроме того, это дёшево.' }, { funcao: 'sequência', conectores: 'затем, потом, после этого', exemplo: 'Сначала я позвонил, затем написал.' }, { funcao: 'conclusão', conectores: 'итак, в общем', exemplo: 'Итак, мы договорились.' },
        ],
        erros: [['Во первых нужен план.', 'Во-первых, нужен план.', 'Hífen e vírgula.'], ['Кроме того это дёшево.', 'Кроме того, это дёшево.', 'Vírgula depois do conector.']],
      }),
      producao(5, 'Diga: «Во-первых, нужен план. Во-вторых, нужны деньги. Кроме того, это дёшево. Итак, мы договорились.»'),
    ]),
    sessao('S2', 'Contraste e exemplo', [
      revisao(5, 'Escreva 5 frases com «во-первых», «в-третьих», «кроме того», «к тому же» e «итак».'),
      palavras(8, [['с одной стороны', 's adnóy starany', 'por um lado', 'on the one hand'], ['с другой стороны', 's drugóy starany', 'por outro lado', 'on the other hand'], ['наоборот', 'naabarót', 'pelo contrário', 'on the contrary'], ['например', 'naprimér', 'por exemplo', 'for example'], ['то есть', 'to yest', 'ou seja', 'that is'], ['в общем', 'v óbshchem', 'em geral', 'in general'], ['однако', 'adnakó', 'porém', 'however'], ['тем не менее', 'tyem nye minyéye', 'mesmo assim', 'nevertheless']]),
      gramatica(12, 'Contrastar, exemplificar e explicar', 'PASSO 1: para dois lados de uma questão: «С ОДНОЙ СТОРОНЫ… С ДРУГОЙ СТОРОНЫ…»: «С одной стороны, пятница рано. С другой стороны, клиент ждёт». PASSO 2: para uma ideia oposta: «НАОБОРОТ» (pelo contrário): «Он не устал, наоборот, он полон сил». PASSO 3: para exemplificar: «НАПРИМЕР»: «Я люблю фрукты, например, яблоки». PASSO 4: para reformular: «ТО ЕСТЬ» (ou seja): «Это стоит сто рублей, то есть недорого». PASSO 5: para resumir: «В ОБЩЕМ» (em geral): «В общем, всё хорошо». PASSO 6: para contrastar de modo formal: «ОДНАКО», «ТЕМ НЕ МЕНЕЕ». PASSO 7: não misture «наоборот» com «но»: «наоборот» já marca o contraste.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'dois lados', conectores: 'с одной стороны … с другой стороны', exemplo: 'С одной стороны, пятница рано. С другой стороны, клиент ждёт.' }, { funcao: 'oposição', conectores: 'наоборот', exemplo: 'Он не устал, наоборот, он полон сил.' }, { funcao: 'exemplo', conectores: 'например', exemplo: 'Я люблю фрукты, например, яблоки.' }, { funcao: 'reformulação', conectores: 'то есть', exemplo: 'Это сто рублей, то есть недорого.' }, { funcao: 'resumo', conectores: 'в общем', exemplo: 'В общем, всё хорошо.' },
        ],
        erros: [['Он не устал, но наоборот, он полон сил.', 'Он не устал, наоборот, он полон сил.', 'Sem «но» junto de «наоборот».'], ['С одной стороны пятница рано, с другой стороны, клиент ждёт.', 'С одной стороны, пятница рано. С другой стороны, клиент ждёт.', 'Vírgula depois de cada conector.']],
      }),
      producao(5, 'Diga: «С одной стороны … С другой стороны … Он не … наоборот … Например … То есть … В общем …»'),
    ]),
    sessao('S3', 'Uma reunião', [
      revisao(5, 'Escreva 5 frases com «с одной стороны», «наоборот», «например», «то есть» e «в общем».'),
      gramatica(10, 'Conectar ideias numa reunião', 'PASSO 1: para abrir: «Давайте обсудим…». PASSO 2: para listar: «Во-первых… Во-вторых…». PASSO 3: para acrescentar: «Кроме того…». PASSO 4: para contrastar: «С одной стороны… С другой стороны…». PASSO 5: para concluir: «Итак…».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Давайте обсудим новый проект.', traducao: 'Vamos discutir o novo projeto.' }, { frase: 'Во-первых, нужно составить план.', traducao: 'Primeiro, é preciso fazer um plano.' }, { frase: 'С одной стороны, пятница рано.', traducao: 'Por um lado, sexta é cedo.' }, { frase: 'Итак, мы договорились.', traducao: 'Então, combinamos.' },
        ],
      }),
      dialogo(8, 'Обсуждение проекта / Discussão do projeto', 'Boris e Anna combinam um projeto.', [
        ['Борис', 'Давайте обсудим новый проект. Во-первых, нужно составить план.', 'Vamos discutir o novo projeto. Primeiro, é preciso fazer um plano.'], ['Анна', 'Согласна. Во-вторых, надо распределить задачи.', 'Concordo. Segundo, é preciso distribuir as tarefas.'], ['Борис', 'Кроме того, нужно выбрать срок. Например, до пятницы.', 'Além disso, é preciso escolher um prazo. Por exemplo, até sexta.'],
        ['Анна', 'С одной стороны, пятница рано. С другой стороны, клиент ждёт.', 'Por um lado, sexta é cedo. Por outro, o cliente espera.'], ['Борис', 'То есть вы предлагаете понедельник?', 'Ou seja, a senhora propõe segunda?'], ['Анна', 'Нет, наоборот: я предлагаю четверг, чтобы мы не спешили.', 'Não, pelo contrário: proponho quinta, para não corrermos.'],
        ['Борис', 'Хорошо. Итак, план готовим сегодня, а срок — четверг.', 'Está bem. Então, o plano fazemos hoje e o prazo é quinta.'], ['Анна', 'Наконец-то всё ясно!', 'Finalmente tudo está claro!'],
      ]),
      producao(7, 'Conduza em voz alta uma reunião de 5 falas, com conectores de ordem, adição, contraste e conclusão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com conectores.'),
      exercicios(20, [
        lacuna('___, нужен план. (primeiro)', ['Во-первых', 'Наоборот', 'Итак'], 'Во-первых', 'Ordem: во-первых.'), lacuna('___ того, это дёшево. (além disso)', ['Кроме', 'С', 'Для'], 'Кроме', '«кроме того».'), lacuna('Я люблю фрукты, ___, яблоки. (por exemplo)', ['например', 'наоборот', 'итак'], 'например', 'Exemplo.'),
        lacuna('Это сто рублей, ___ недорого. (ou seja)', ['то есть', 'наоборот', 'однако'], 'то есть', 'Reformulação.'), lacuna('С одной стороны, пятница рано. С ___ стороны, клиент ждёт.', ['другой', 'другая', 'другую'], 'другой', '«с другой стороны» (genitivo).'), lacuna('Он не устал, ___, он полон сил. (pelo contrário)', ['наоборот', 'например', 'итак'], 'наоборот', 'Oposição.'),
        mc('«Итак» serve para:', ['concluir', 'listar', 'dar exemplo'], 'concluir', 'Conclusão.'), mc('«В общем» significa:', ['em geral', 'por exemplo', 'além disso'], 'em geral', 'Resumo.'), mc('Depois do conector vai:', ['vírgula', 'ponto-e-vírgula', 'dois pontos'], 'vírgula', 'Vírgula obrigatória.'),
        ordem('Ordene: «Во-первых, нужно составить план.»', ['Во-первых', 'нужно', 'составить', 'план'], 'Во-первых, нужно составить план.', 'Ordem.'), ouvir('С одной стороны, пятница рано', ['С одной стороны, пятница рано', 'С другой стороны, клиент ждёт', 'Итак, мы договорились'], 'С одной стороны, пятница рано', 'Primeiro lado.'), ditado('Итак, мы договорились', 'Conclusão.'),
        livre('Escreva 5 frases com conectores: во-первых, кроме того, с одной стороны, например e итак.', 'Во-первых, нужен план. Кроме того, это дёшево. С одной стороны, пятница рано. Я люблю фрукты, например, яблоки. Итак, мы договорились.'),
      ]),
      producao(5, 'Grave-se defendendo uma ideia em três partes, com conectores.'),
    ]),
  ],
});
