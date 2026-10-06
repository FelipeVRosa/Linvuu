import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 47, titulo: 'Quantidade: много, мало, несколько e medidas', nivel: 'a2',
  objetivo: 'Dizer a quantidade com много, мало, несколько, сколько e as medidas (стакан воды, килограмм яблок), sempre com o genitivo.',
  nota: 'Você fala de quantidades e faz compras de comida. Próxima aula: expressões de tempo.',
  sessoes: [
    sessao('S1', 'Много, мало, несколько', [
      revisao(5, 'Escreva 5 frases sobre um passeio, com verbos de movimento prefixados.'),
      palavras(8, [['много', 'mnóga', 'muito, muitos', 'many, much'], ['мало', 'mála', 'pouco, poucos', 'few, little'], ['несколько', 'nyeskolka', 'alguns, vários', 'several'], ['сколько', 'skólka', 'quanto, quantos', 'how many'], ['столько', 'stólka', 'tanto', 'so much'], ['немного', 'nimnóga', 'um pouco', 'a little'], ['достаточно', 'dastátachna', 'suficiente', 'enough'], ['слишком', 'slíshkam', 'demais', 'too']]),
      gramatica(12, 'Quantidade pede genitivo', 'PASSO 1: depois de «много» (muito), «мало» (pouco), «несколько» (alguns), «сколько» (quanto) e «столько» (tanto), o substantivo vai ao GENITIVO. PASSO 2: com coisas que se contam, o genitivo é PLURAL: «много людей, несколько друзей, мало книг, сколько дней?». PASSO 3: com coisas que não se contam, o genitivo é SINGULAR: «много времени, мало денег, немного воды, сколько времени?». PASSO 4: não existe «de»: «muita gente» = «много людей». PASSO 5: genitivos plurais irregulares muito usados: «человек → людей» (pessoas), «друг → друзей», «ребёнок → детей», «день → дней», «год → лет», «деньги → денег». PASSO 6: como não há sujeito no nominativo, o verbo no passado fica no neutro: «Пришло много людей».', {
        tag: 'Casos',
        comparacao: 'o português diz «muitos DE amigos» só no registro coloquial («muitos amigos» é o normal). No russo, «много» + genitivo é obrigatório e substitui a ideia de «de».',
        tabela: [
          { frase: 'Здесь много людей.', traducao: 'Aqui há muita gente.' }, { frase: 'У меня мало времени.', traducao: 'Tenho pouco tempo.' }, { frase: 'Я купил несколько книг.', traducao: 'Comprei alguns livros.' }, { frase: 'Сколько у тебя друзей?', traducao: 'Quantos amigos você tem?' }, { frase: 'Сколько времени?', traducao: 'Que horas são? (Quanto tempo?)' }, { frase: 'У меня мало денег.', traducao: 'Tenho pouco dinheiro.' },
        ],
        erros: [['У меня много друг.', 'У меня много друзей.', '«много» + genitivo plural: друзей.'], ['Здесь много человек.', 'Здесь много людей.', 'Para «pessoas» em geral, use «людей».'], ['У меня мало время.', 'У меня мало времени.', '«мало» + genitivo: времени.']],
      }),
      producao(5, 'Diga: «У меня много друзей. У меня мало времени. Сколько у тебя книг? Я купил несколько книг.»'),
    ]),
    sessao('S2', 'Medidas e porções', [
      revisao(5, 'Escreva 5 frases com «много», «мало» e «несколько».'),
      palavras(8, [['литр', 'litr', 'litro', 'litre'], ['килограмм', 'kilagrám', 'quilo', 'kilo'], ['грамм', 'gram', 'grama', 'gram'], ['стакан', 'stakán', 'copo', 'glass'], ['чашка', 'cháshka', 'xícara', 'cup'], ['бутылка', 'butýlka', 'garrafa', 'bottle'], ['кусок', 'kusók', 'pedaço', 'piece'], ['пачка', 'páchka', 'pacote, maço', 'pack']]),
      gramatica(12, 'Medida + genitivo', 'PASSO 1: a medida ou a porção vem primeiro e o conteúdo vai ao GENITIVO: «стакан воды» (um copo de água), «чашка чая», «кусок хлеба», «бутылка молока», «пачка масла». PASSO 2: com plural, o conteúdo fica no genitivo plural: «килограмм яблок» (um quilo de maçãs), «пачка конфет». PASSO 3: os números levam o genitivo da medida: «сто граммов сыра», «два литра молока», «пять килограммов». PASSO 4: «ПОЛОВИНА» e «ПАРА» também pedem genitivo: «половина хлеба» (metade do pão), «пара дней» (uns dias). PASSO 5: para comparar quantidade, «БОЛЬШЕ / МЕНЬШЕ» + genitivo: «больше времени, меньше денег».', {
        tag: 'Casos',
        tabela: [
          { frase: 'стакан воды, чашка кофе', traducao: 'um copo de água, uma xícara de café' }, { frase: 'кусок хлеба, бутылка молока', traducao: 'um pedaço de pão, uma garrafa de leite' }, { frase: 'килограмм яблок', traducao: 'um quilo de maçãs' }, { frase: 'сто граммов сыра', traducao: 'cem gramas de queijo' }, { frase: 'пара дней', traducao: 'uns dias' }, { frase: 'больше времени, меньше денег', traducao: 'mais tempo, menos dinheiro' },
        ],
        erros: [['чашка кофа', 'чашка кофе', '«кофе» não se declina.'], ['килограмм яблоки', 'килограмм яблок', 'Genitivo plural: яблок.'], ['бутылка молоко', 'бутылка молока', 'Genitivo singular: молока.']],
      }),
      producao(5, 'Diga: «Мне нужен стакан воды. Дайте килограмм яблок и литр молока. Сто граммов сыра, пожалуйста.»'),
    ]),
    sessao('S3', 'Comprar comida', [
      revisao(5, 'Escreva 5 frases com medidas: copo, xícara, quilo, litro e pedaço.'),
      gramatica(10, 'Pedir e pagar', 'PASSO 1: a vendedora pergunta: «Что вам?» ou «Что вы хотите?». PASSO 2: você pede com «Мне нужен/нужна…» ou «Дайте, пожалуйста…» (acusativo ou genitivo da quantidade). PASSO 3: «Ещё что-нибудь?» = mais alguma coisa? PASSO 4: «Это всё?» = é só? PASSO 5: «Сколько с меня?» = quanto devo?', {
        tag: 'Frase',
        tabela: [
          { frase: 'Что вам?', traducao: 'O que deseja?' }, { frase: 'Дайте, пожалуйста, килограмм яблок.', traducao: 'Me dê, por favor, um quilo de maçãs.' }, { frase: 'Ещё что-нибудь?', traducao: 'Mais alguma coisa?' }, { frase: 'Сколько с меня?', traducao: 'Quanto devo?' },
        ],
      }),
      dialogo(8, 'В магазине продуктов / Na mercearia', 'Um cliente compra comida.', [
        ['Продавец', 'Здравствуйте! Что вам?', 'Olá! O que deseja?'], ['Клиент', 'Здравствуйте. Мне нужен килограмм яблок и литр молока.', 'Olá. Preciso de um quilo de maçãs e um litro de leite.'], ['Продавец', 'Пожалуйста. Ещё что-нибудь?', 'Aqui está. Mais alguma coisa?'],
        ['Клиент', 'Да, пачку масла и немного сыра.', 'Sim, um pacote de manteiga e um pouco de queijo.'], ['Продавец', 'Сколько сыра?', 'Quanto de queijo?'], ['Клиент', 'Двести граммов. И несколько булочек, пожалуйста.', 'Duzentos gramas. E algumas broinhas, por favor.'],
        ['Продавец', 'Это всё?', 'É só?'], ['Клиент', 'Да. Сколько с меня?', 'Sim. Quanto devo?'],
      ]),
      producao(7, 'Faça compras em voz alta: peça 4 itens com quantidades e pergunte quanto deve.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre uma compra.'),
      exercicios(20, [
        lacuna('У меня много ___. (amigos)', ['друзей', 'друга', 'друзья'], 'друзей', '«много» + genitivo plural.'), lacuna('У меня мало ___. (tempo)', ['времени', 'время', 'временем'], 'времени', '«мало» + genitivo singular.'), lacuna('Стакан ___. (de água)', ['воды', 'вода', 'воду'], 'воды', 'Medida + genitivo.'),
        lacuna('Килограмм ___. (de maçãs)', ['яблок', 'яблоки', 'яблока'], 'яблок', 'Genitivo plural: яблок.'), lacuna('Бутылка ___. (de leite)', ['молока', 'молоко', 'молоку'], 'молока', 'Genitivo singular.'), lacuna('Сто ___ сыра. (gramas)', ['граммов', 'грамм', 'граммы'], 'граммов', 'Número alto + genitivo plural.'),
        mc('«Много людей» usa o:', ['genitivo plural', 'nominativo plural', 'acusativo'], 'genitivo plural', '«много» + genitivo.'), mc('Genitivo plural de «друг»:', ['друзей', 'друга', 'друзья'], 'друзей', 'Irregular.'), mc('«Сколько с меня?» significa:', ['Quanto devo?', 'Quanto custa?', 'Quantos são?'], 'Quanto devo?', 'Frase de pagamento.'),
        ordem('Ordene: «У меня мало времени.»', ['У', 'меня', 'мало', 'времени'], 'У меня мало времени.', '«мало» + genitivo.'), ouvir('Дайте, пожалуйста, килограмм яблок', ['Дайте, пожалуйста, килограмм яблок', 'Мне нужны яблоки', 'Сколько стоят яблоки?'], 'Дайте, пожалуйста, килограмм яблок', 'Medida + genitivo plural.'), ditado('Сколько у тебя друзей', '«сколько» + genitivo plural.'),
        livre('Escreva 5 frases: com много, мало, несколько, uma medida (стакан, кусок…) e «Сколько …?»', 'У меня много друзей. У меня мало времени. Я купил несколько книг. Дайте стакан воды. Сколько стоит хлеб?'),
      ]),
      producao(5, 'Grave-se pedindo comida numa loja, com quantidades.'),
    ]),
  ],
});
