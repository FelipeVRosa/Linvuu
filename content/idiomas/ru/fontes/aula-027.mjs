import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 27, titulo: 'Gramática: o genitivo completo', nivel: 'a2',
  objetivo: 'Formar o genitivo singular e plural e usá-lo para ausência, dono, quantidade, origem e as preposições mais frequentes.',
  nota: 'Você domina o genitivo, o caso mais usado do russo. Próxima aula: os numerais.',
  sessoes: [
    sessao('S1', 'Genitivo singular e plural', [
      revisao(5, 'Escreva o genitivo singular de 6 palavras que você já conhece.'),
      gramatica(14, 'Genitivo: singular e plural', 'O genitivo responde a «кого? чего?» (de quem? de quê?). É o caso mais usado do russo. Singular (já visto): -а → -ы; -я → -и; consoante → -а; -й e -ь masculinos → -я; -о → -а; -е → -я; -ь feminino → -и. Depois de г, к, х, ж, ч, ш, щ escreve-se -и. Plural: masculino: consoante → -ов (стол → столов); -й → -ев (музей → музеев); -ь, ж, ч, ш, щ → -ей (словарь → словарей, врач → врачей). Feminino e neutro: a terminação some (zero): книга → книг, окно → окон. Mas -я → -ь (неделя → недель) e -ие → -ий. Às vezes aparece uma vogal móvel: сестра → сестёр, девушка → девушек. Irregulares: друзья → друзей, дети → детей, люди → людей, семья → семей.', {
        tag: 'Casos',
        comparacao: 'o português usa «de» para tudo («livro do irmão», «sem livros»). Em russo a palavra muda de final em vez de ganhar «de».',
        tabela: [
          { nominativo: 'стол', plural: 'столов', exemplo: 'нет столов' }, { nominativo: 'студент', plural: 'студентов', exemplo: 'много студентов' }, { nominativo: 'музей', plural: 'музеев', exemplo: 'нет музеев' },
          { nominativo: 'словарь', plural: 'словарей', exemplo: 'несколько словарей' }, { nominativo: 'врач', plural: 'врачей', exemplo: 'много врачей' }, { nominativo: 'книга', plural: 'книг', exemplo: 'нет книг' },
          { nominativo: 'сестра', plural: 'сестёр', exemplo: 'две сестры (singular) / пять сестёр' }, { nominativo: 'окно', plural: 'окон', exemplo: 'нет окон' }, { nominativo: 'неделя', plural: 'недель', exemplo: 'несколько недель' },
          { nominativo: 'семья', plural: 'семей', exemplo: 'много семей' }, { nominativo: 'друг', plural: 'друзей', exemplo: 'нет друзей' }, { nominativo: 'ребёнок', plural: 'детей', exemplo: 'много детей' }, { nominativo: 'человек', plural: 'людей', exemplo: 'много людей' },
        ],
        erros: [['У меня нет друзьев.', 'У меня нет друзей.', 'Irregular: друзья → друзей.']],
      }),
      palavras(6, [
        ['несколько', 'niéskalka', 'alguns, vários', 'several'], ['достаточно', 'dastátachna', 'suficiente', 'enough'], ['килограмм', 'kilagrám', 'quilo', 'kilogram'], ['литр', 'litr', 'litro', 'litre'], ['бутылка', 'butýlka', 'garrafa', 'bottle'], ['кусок', 'kusók', 'pedaço', 'piece'],
      ]),
      producao(5, 'Diga: «У меня нет книг. У нас нет столов. У него нет друзей.»'),
    ]),
    sessao('S2', 'Usos do genitivo', [
      revisao(5, 'Escreva o genitivo plural de: стол, книга, окно, друг, ребёнок.'),
      palavras(5, [['хватать', 'khvatát', 'bastar', 'to be enough'], ['лишний', 'líshnii', 'a mais, sobrando', 'extra'], ['пустой', 'pustói', 'vazio', 'empty'], ['полный', 'pólnyi', 'cheio', 'full'], ['целый', 'tsélyi', 'inteiro', 'whole']]),
      gramatica(15, 'Quando usar o genitivo', 'Seis usos. (1) Ausência, com «нет»: «У меня нет времени». (2) Quantidade: «много, мало, несколько, сколько, достаточно» + genitivo plural para coisas contáveis (много книг) e genitivo singular para o que não se conta (много воды). (3) Medidas e recipientes: «килограмм хлеба, литр молока, бутылка воды, чашка чая, кусок сыра». (4) Dono: «книга брата». (5) Preposições: у, из, от, до, после, для, без, около, вокруг. (6) Origem e saída: «из» e «с» + genitivo respondem «откуда?» e são o contrário de «в» e «на»: в школу → из школы; на работу → с работы.', {
        tag: 'Casos',
        tabelas: [
          { titulo: 'Куда? Где? Откуда?', linhas: [
            { куда: 'в школу', где: 'в школе', откуда: 'из школы' }, { куда: 'на работу', где: 'на работе', откуда: 'с работы' }, { куда: 'в магазин', где: 'в магазине', откуда: 'из магазина' }, { куда: 'на урок', где: 'на уроке', откуда: 'с урока' },
          ] },
          { titulo: 'Quantidade e medida', linhas: [
            { palavra: 'много / мало + plural', exemplo: 'много книг, мало друзей' }, { palavra: 'несколько + plural', exemplo: 'несколько недель' }, { palavra: 'много + singular (não contável)', exemplo: 'много воды, много времени' },
            { palavra: 'килограмм, литр', exemplo: 'килограмм хлеба, литр молока' }, { palavra: 'бутылка, чашка, кусок', exemplo: 'бутылка воды, чашка чая, кусок сыра' },
          ] },
        ],
        erros: [['Здесь много книги.', 'Здесь много книг.', 'Com «много» e coisas contáveis use o genitivo plural.'], ['Я иду с работа.', 'Я иду с работы.', '«с» pede genitivo.']],
      }),
      producao(5, 'Diga: «У меня много книг. Мне нужен килограмм хлеба. Я иду с работы. Я иду из школы.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases com «много», «нет», «из» e «с».'),
      dialogo(12, 'В магазине / Na loja', 'Uma cliente e um vendedor.', [
        ['Продавец', 'Здравствуйте! Что вам нужно?', 'Olá! Do que a senhora precisa?'], ['Анна', 'Здравствуйте! Мне нужен килограмм сыра и бутылка воды.', 'Olá! Preciso de um quilo de queijo e uma garrafa de água.'],
        ['Продавец', 'Хорошо. Вам нужен хлеб?', 'Certo. Precisa de pão?'], ['Анна', 'Нет, хлеба у меня достаточно.', 'Não, tenho pão suficiente.'], ['Продавец', 'А яблоки? У нас много яблок.', 'E maçãs? Temos muitas.'],
        ['Анна', 'Да, пожалуйста, килограмм яблок. Сколько стоит?', 'Sim, por favor, um quilo de maçãs. Quanto custa?'], ['Продавец', 'Сыр — сто рублей, вода — тридцать, яблоки — пятьдесят.', 'O queijo custa cem rublos, a água trinta e as maçãs cinquenta.'],
        ['Анна', 'Хорошо, вот деньги. Спасибо!', 'Certo, aqui está o dinheiro. Obrigada!'],
      ]),
      texto(8, 'В холодильнике / Na geladeira', 'В холодильнике много еды. Там есть килограмм сыра, бутылка молока и много яблок. Хлеба нет, поэтому мне нужно идти в магазин. Я иду из дома в магазин, а потом из магазина домой.',
        'Na geladeira há muita comida. Lá há um quilo de queijo, uma garrafa de leite e muitas maçãs. Não há pão, por isso preciso ir à loja. Vou de casa à loja e depois da loja para casa.',
        [['Что есть в холодильнике?', 'Сыр, молоко и яблоки'], ['Чего нет?', 'Хлеба'], ['Куда идёт автор?', 'В магазин']]),
      producao(5, 'Faça uma lista de compras em voz alta: «Мне нужен килограмм … бутылка … Сколько стоит?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: algo que você não tem, quantidade de algo, de onde você vem e uma compra.'),
      exercicios(20, [
        lacuna('У меня нет ___. (livros)', ['книг', 'книги', 'книга'], 'книг', 'Feminino plural: a terminação some.'),
        lacuna('У нас нет ___. (mesas)', ['столов', 'столы', 'стола'], 'столов', 'Masculino plural: -ов.'),
        lacuna('Здесь много ___. (livros)', ['книг', 'книги', 'книга'], 'книг', '«много» + genitivo plural.'),
        mc('Genitivo plural de «музей»:', ['музеев', 'музеи', 'музей'], 'музеев', '-й → -ев.'),
        mc('Genitivo plural de «окно»:', ['окон', 'окна', 'окно'], 'окон', 'Neutro: a terminação some.'),
        mc('Genitivo plural de «сестра»:', ['сестёр', 'сестры', 'сестр'], 'сестёр', 'Vogal móvel: сестёр.'),
        mc('Genitivo plural de «друг»:', ['друзей', 'другов', 'друзья'], 'друзей', 'Irregular.'),
        lacuna('Килограмм ___. (queijo)', ['сыра', 'сыр', 'сыру'], 'сыра', 'Medida + genitivo singular.'),
        lacuna('Бутылка ___. (água)', ['воды', 'вода', 'воду'], 'воды', 'Medida + genitivo singular.'),
        lacuna('Я иду из ___. (escola)', ['школы', 'школа', 'школу'], 'школы', '«из» pede genitivo.'),
        lacuna('Я иду с ___. (trabalho)', ['работы', 'работа', 'работе'], 'работы', '«с» (de) pede genitivo.'),
        mc('«из» e «с» + genitivo respondem a:', ['Откуда?', 'Куда?', 'Где?'], 'Откуда?', 'Origem e saída.'),
        ouvir('У меня нет времени', ['У меня нет времени', 'У меня много времени', 'У меня есть время'], 'У меня нет времени', '«нет» + genitivo.'),
        ditado('Килограмм яблок', 'Medida + genitivo plural.'),
        livre('Escreva 4 frases: algo que você não tem, uma quantidade, de onde você vem e uma compra.', 'У меня нет машины. У меня много книг. Я иду с работы. Мне нужен килограмм сыра.'),
      ]),
      producao(5, 'Grave-se fazendo uma compra imaginária, com quantidades.'),
    ]),
  ],
});
