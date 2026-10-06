import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 37, titulo: 'Compras e roupas', nivel: 'a2',
  objetivo: 'Dizer o que você precisa («Мне нужна куртка»), usar adjetivos de cor no acusativo, perguntar preço e tamanho, e experimentar roupa numa loja.',
  nota: 'Você compra roupa e conversa com a vendedora. Próxima aula: viagens e transporte.',
  sessoes: [
    sessao('S1', 'Roupas, cores e «нужен»', [
      revisao(5, 'Escreva 5 frases sobre a sua casa com «на», «под» e «нет».'),
      palavras(8, [['одежда', 'adyézhda', 'roupa', 'clothes'], ['рубашка', 'rubáshka', 'camisa', 'shirt'], ['платье', 'plátye', 'vestido', 'dress'], ['брюки', 'bryúki', 'calça', 'trousers'], ['куртка', 'kúrtka', 'jaqueta', 'jacket'], ['обувь', 'óbuf', 'calçado', 'shoes'], ['размер', 'razmyér', 'tamanho', 'size'], ['цвет', 'tsvyet', 'cor', 'colour']]),
      gramatica(12, 'Precisar e comprar: «нужен» e o acusativo dos adjetivos', 'PASSO 1: para dizer «preciso de», use «МНЕ НУЖЕН / НУЖНА / НУЖНО / НУЖНЫ» + a coisa no NOMINATIVO. PASSO 2: «нужен» concorda com o gênero da coisa: «Мне нужен свитер» (m), «Мне нужна куртка» (f), «Мне нужно пальто» (n), «Мне нужны брюки» (pl). PASSO 3: ao COMPRAR, o objeto vai ao acusativo: «Я покупаю красную куртку». PASSO 4: o adjetivo feminino muda: «-ая → -ую» («красная → красную»); o neutro e o masculino inanimado ficam como no nominativo: «новый свитер», «синее платье»; o plural inanimado também: «чёрные брюки». PASSO 5: cores: «красный, синий, зелёный, чёрный, белый, жёлтый, серый, коричневый».', {
        tag: 'Frase',
        tabela: [
          { precisar: 'Мне нужен новый свитер. (m)', comprar: 'Я покупаю новый свитер.' }, { precisar: 'Мне нужна тёплая куртка. (f)', comprar: 'Я покупаю тёплую куртку.' }, { precisar: 'Мне нужно чёрное пальто. (n)', comprar: 'Я покупаю чёрное пальто.' }, { precisar: 'Мне нужны синие брюки. (pl)', comprar: 'Я покупаю синие брюки.' },
        ],
        erros: [['Мне нужен куртка.', 'Мне нужна куртка.', '«нужна» concorda com «куртка» (f).'], ['Я покупаю красная куртка.', 'Я покупаю красную куртку.', 'Acusativo feminino: -ую.']],
      }),
      producao(5, 'Diga o que você precisa: «Мне нужен … Мне нужна … Мне нужно … Мне нужны …»'),
    ]),
    sessao('S2', 'Preço, tamanho e desconto', [
      revisao(5, 'Escreva 5 frases com «мне нужен/нужна/нужно/нужны» e a cor.'),
      palavras(8, [['стоить', 'stóit', 'custar', 'to cost'], ['дорого', 'dóraga', 'caro', 'expensive'], ['дёшево', 'dyóshyeva', 'barato', 'cheap'], ['скидка', 'skítka', 'desconto', 'discount'], ['касса', 'kássa', 'caixa', 'till'], ['чек', 'chek', 'recibo', 'receipt'], ['примерить', 'primérit', 'experimentar', 'to try on'], ['подходить', 'padkhadít', 'servir, combinar', 'to suit']]),
      gramatica(12, 'Preço, tamanho e «велик / мал»', 'PASSO 1: para perguntar o preço: «Сколько СТОИТ куртка?» (singular) e «Сколько СТОЯТ брюки?» (plural). PASSO 2: «дорого» (caro) e «дёшево» (barato) não mudam: «Это дорого». PASSO 3: «слишком» = «demais»: «слишком дорого». PASSO 4: «скидка» = desconto: «скидка двадцать процентов». PASSO 5: para dizer que a roupa fica grande ou pequena, use os adjetivos curtos com o dativo: «Куртка мне ВЕЛИКА» (grande demais), «Брюки мне МАЛЫ» (pequenas demais). PASSO 6: «подходить» = servir: «Размер мне подходит» (o tamanho serve). PASSO 7: «Можно примерить?» = posso experimentar?', {
        tag: 'Frase',
        tabela: [
          { frase: 'Сколько стоит эта куртка?', traducao: 'Quanto custa esta jaqueta?' }, { frase: 'Сколько стоят эти брюки?', traducao: 'Quanto custam estas calças?' }, { frase: 'Это слишком дорого.', traducao: 'É caro demais.' }, { frase: 'Куртка мне велика. Брюки мне малы.', traducao: 'A jaqueta fica grande em mim. As calças ficam pequenas.' }, { frase: 'Размер мне подходит.', traducao: 'O tamanho serve.' }, { frase: 'Можно примерить?', traducao: 'Posso experimentar?' },
        ],
        erros: [['Сколько стоит брюки?', 'Сколько стоят брюки?', '«брюки» é plural: стоят.'], ['Куртка мне большая.', 'Куртка мне велика.', 'Roupa grande demais: «велика» (forma curta).']],
      }),
      producao(5, 'Diga: «Сколько стоит эта куртка? Это слишком дорого. Есть скидка? Можно примерить? Она мне велика.»'),
    ]),
    sessao('S3', 'Na loja', [
      revisao(5, 'Escreva 5 frases sobre preço, tamanho e desconto.'),
      gramatica(10, 'A conversa na loja', 'PASSO 1: a vendedora pergunta: «Вам помочь?» (posso ajudar?), «Какой у вас размер?», «Какой цвет вы хотите?». PASSO 2: você responde: «Мне нужна … », «У меня пятьдесят второй размер». PASSO 3: para escolher entre duas peças: «Какую вы хотите?» — «Синюю». PASSO 4: para pedir outro tamanho: «Есть размер поменьше / побольше?» (menor / maior). PASSO 5: para fechar: «Я беру», «Где касса?», «Можно картой?» (posso pagar com cartão?).', {
        tag: 'Frase',
        tabela: [
          { frase: 'Вам помочь?', traducao: 'Posso ajudar?' }, { frase: 'Какой у вас размер?', traducao: 'Qual é o seu tamanho?' }, { frase: 'Есть размер поменьше?', traducao: 'Tem um tamanho menor?' }, { frase: 'Я беру. Где касса?', traducao: 'Vou levar. Onde fica o caixa?' }, { frase: 'Можно картой?', traducao: 'Posso pagar com cartão?' },
        ],
      }),
      dialogo(8, 'В магазине / Na loja', 'Um cliente compra uma jaqueta.', [
        ['Продавщица', 'Здравствуйте! Вам помочь?', 'Olá! Posso ajudar?'], ['Клиент', 'Да, мне нужна тёплая куртка.', 'Sim, preciso de uma jaqueta quente.'], ['Продавщица', 'Какой у вас размер?', 'Qual é o seu tamanho?'],
        ['Клиент', 'Пятьдесят второй.', 'Cinquenta e dois.'], ['Продавщица', 'Вот чёрная и синяя. Какую вы хотите?', 'Aqui estão a preta e a azul. Qual o senhor quer?'], ['Клиент', 'Можно примерить синюю? Она мне немного велика. Есть размер поменьше?', 'Posso experimentar a azul? Ela fica um pouco grande. Tem um tamanho menor?'],
        ['Продавщица', 'Да, пятидесятый. Она стоит семь тысяч рублей.', 'Sim, o cinquenta. Custa sete mil rublos.'], ['Клиент', 'Хорошо, я беру. Где касса?', 'Está bem, vou levar. Onde fica o caixa?'],
      ]),
      producao(7, 'Faça o papel do cliente em voz alta: diga o que precisa, escolha a cor, peça o tamanho e pergunte o preço.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno diálogo de 6 falas numa loja.'),
      exercicios(20, [
        lacuna('Мне нужна ___ куртка. (quente)', ['тёплая', 'тёплый', 'тёплую'], 'тёплая', '«нужна» + nominativo feminino.'), lacuna('Я покупаю ___ куртку. (vermelha)', ['красную', 'красная', 'красной'], 'красную', 'Acusativo feminino: -ую.'), lacuna('Мне нужен ___ свитер. (novo)', ['новый', 'новая', 'новую'], 'новый', '«нужен» + masculino.'),
        lacuna('Эта куртка мне ___. (grande)', ['велика', 'велик', 'велико'], 'велика', '«куртка» é feminino.'), lacuna('Брюки мне ___. (pequenas)', ['малы', 'мал', 'мала'], 'малы', 'Plural: малы.'), lacuna('Сколько ___ эти брюки?', ['стоят', 'стоит', 'стоить'], 'стоят', 'Plural: стоят.'),
        mc('«Можно примерить?» significa:', ['Posso experimentar?', 'Posso pagar?', 'Posso levar?'], 'Posso experimentar?', '«примерить» = experimentar roupa.'), mc('«Скидка» é:', ['desconto', 'troco', 'caixa'], 'desconto', 'Скидка = desconto.'), mc('Em «Мне нужны брюки», «нужны» concorda com:', ['брюки (plural)', 'мне', 'нужно'], 'брюки (plural)', 'O verbo acompanha a coisa de que se precisa.'),
        ordem('Ordene: «Можно примерить синюю куртку?»', ['Можно', 'примерить', 'синюю', 'куртку'], 'Можно примерить синюю куртку?', 'Acusativo feminino: -ую.'), ouvir('Эта куртка мне велика', ['Эта куртка мне велика', 'Эта куртка мне мала', 'Эта куртка дорогая'], 'Эта куртка мне велика', '«велика» = grande demais.'), ditado('Мне нужна тёплая куртка', '«нужна» concorda com «куртка».'),
        livre('Escreva 5 frases: o que você precisa, a cor, o preço, o tamanho e que você leva.', 'Мне нужна тёплая куртка. Я хочу синюю куртку. Сколько она стоит? Она мне велика. Я беру.'),
      ]),
      producao(5, 'Grave-se comprando uma peça de roupa.'),
    ]),
  ],
});
