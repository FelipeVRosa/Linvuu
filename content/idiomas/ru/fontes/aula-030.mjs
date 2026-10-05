import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 30, titulo: 'Gramática: comparativo e superlativo', nivel: 'a2',
  objetivo: 'Comparar pessoas e coisas com o comparativo simples e composto, com «чем» e o genitivo, e formar o superlativo com «самый».',
  nota: 'Você compara e escolhe. Próximo passo: imperativo, compras e viagens.',
  sessoes: [
    sessao('S1', 'O comparativo', [
      revisao(5, 'Escreva 5 adjetivos que você já conhece e as 4 formas de cada um.'),
      palavras(8, [
        ['близкий', 'blískii', 'próximo', 'near'], ['далёкий', 'daliókii', 'distante', 'far'], ['светлый', 'svétlyi', 'claro', 'light'], ['тёмный', 'tiómnyi', 'escuro', 'dark'],
        ['тяжёлый', 'tizhólyi', 'pesado', 'heavy'], ['умный', 'úmnyi', 'inteligente', 'smart'], ['добрый', 'dóbryi', 'bondoso', 'kind'], ['весёлый', 'visólyi', 'alegre', 'cheerful'],
      ]),
      gramatica(12, 'Comparativo: mais … do que', 'Há dois jeitos. O simples: adjetivo + -ее (быстрый → быстрее, интересный → интереснее, красивый → красивее). Ele não muda por gênero nem por número. O composto: «более» + adjetivo (более интересный), e aí o adjetivo muda normalmente. Muitos comparativos são irregulares e precisam ser decorados: хороший → лучше, плохой → хуже, большой → больше, маленький → меньше, молодой → моложе, старый → старше, высокий → выше, низкий → ниже, дорогой → дороже, дешёвый → дешевле, далёкий → дальше, близкий → ближе. Para dizer «do que»: «чем» (Москва больше, чем Казань) ou o genitivo (Москва больше Казани). O advérbio tem a mesma forma: быстро → быстрее.', {
        tag: 'Comparação',
        comparacao: 'o português usa «mais … do que» e «melhor / pior» (irregulares). O russo tem um comparativo próprio, com -ее, e algumas formas irregulares.',
        tabela: [
          { adjetivo: 'быстрый', comparativo: 'быстрее', pt: 'mais rápido' }, { adjetivo: 'интересный', comparativo: 'интереснее', pt: 'mais interessante' }, { adjetivo: 'красивый', comparativo: 'красивее', pt: 'mais bonito' },
          { adjetivo: 'хороший', comparativo: 'лучше', pt: 'melhor' }, { adjetivo: 'плохой', comparativo: 'хуже', pt: 'pior' }, { adjetivo: 'большой', comparativo: 'больше', pt: 'maior' }, { adjetivo: 'маленький', comparativo: 'меньше', pt: 'menor' },
          { adjetivo: 'молодой', comparativo: 'моложе', pt: 'mais novo' }, { adjetivo: 'старый', comparativo: 'старше', pt: 'mais velho' }, { adjetivo: 'высокий', comparativo: 'выше', pt: 'mais alto' }, { adjetivo: 'дорогой', comparativo: 'дороже', pt: 'mais caro' }, { adjetivo: 'дешёвый', comparativo: 'дешевле', pt: 'mais barato' },
        ],
        exemplos: [['Москва больше, чем Казань.', 'Moscou é maior do que Kazan.'], ['Он старше меня.', 'Ele é mais velho do que eu.'], ['Этот телефон дешевле.', 'Este telefone é mais barato.']],
        erros: [['Он более лучше.', 'Он лучше.', '«лучше» já é comparativo; não se junta com «более».'], ['Он старше чем я.', 'Он старше меня. / Он старше, чем я.', 'Com «чем» use vírgula; sem «чем», o genitivo.']],
      }),
      producao(5, 'Diga: «Москва больше, чем Казань. Он старше меня. Этот телефон дешевле.»'),
    ]),
    sessao('S2', 'Superlativo e preferência', [
      revisao(5, 'Escreva o comparativo de 6 adjetivos.'),
      palavras(8, [
        ['самый', 'sámyi', 'o mais', 'the most'], ['лучший', 'lúchshii', 'o melhor', 'the best'], ['худший', 'khúdshii', 'o pior', 'the worst'], ['такой же', 'takói zhe', 'igual, tão', 'the same'],
        ['так же', 'tak zhe', 'do mesmo modo', 'in the same way'], ['предпочитать', 'pretpachitát', 'preferir', 'to prefer'], ['выбирать', 'vybirát', 'escolher', 'to choose'], ['чем', 'chem', 'do que', 'than'],
      ]),
      gramatica(12, 'Superlativo, igualdade e preferência', 'O superlativo se forma com «самый» + adjetivo, e os dois concordam com o substantivo: самый большой город, самая красивая девушка, самое большое окно, самые интересные книги. Também existem «лучший» (o melhor) e «худший» (o pior), que são adjetivos e concordam. Igualdade: «такой же ..., как» (tão ... quanto) com o adjetivo concordando: «Он такой же высокий, как я». Para o advérbio: «так же, как». Para preferir: «Я люблю чай больше, чем кофе», «Мне больше нравится чай», «Я предпочитаю чай».', {
        tag: 'Comparação',
        tabela: [
          { forma: 'самый + masculino', exemplo: 'самый большой город' }, { forma: 'самая + feminino', exemplo: 'самая красивая девушка' }, { forma: 'самое + neutro', exemplo: 'самое большое окно' },
          { forma: 'самые + plural', exemplo: 'самые интересные книги' }, { forma: 'такой же, как', exemplo: 'Он такой же высокий, как я.' }, { forma: 'так же, как', exemplo: 'Я говорю так же быстро, как он.' }, { forma: 'больше всего', exemplo: 'Больше всего я люблю чай.' },
        ],
      }),
      producao(5, 'Diga: «Москва — самый большой город России. Я люблю чай больше, чем кофе. Мне больше нравится лето.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases comparando duas coisas ou duas pessoas.'),
      dialogo(12, 'Какой лучше? / Qual é melhor?', 'Um cliente e uma vendedora.', [
        ['Продавец', 'Здравствуйте! Вам нужен телефон?', 'Olá! O senhor precisa de um telefone?'], ['Олег', 'Да. Какой телефон лучше?', 'Sim. Qual telefone é melhor?'], ['Продавец', 'Этот телефон новее, а тот дешевле.', 'Este é mais novo, e aquele é mais barato.'],
        ['Олег', 'А какой самый дорогой?', 'E qual é o mais caro?'], ['Продавец', 'Вот этот. Он самый дорогой, но и самый лучший.', 'Este aqui. É o mais caro, mas também o melhor.'], ['Олег', 'Он дороже, чем я думал. Я возьму тот.', 'É mais caro do que eu pensava. Vou levar aquele.'],
        ['Продавец', 'Хорошо. Это хороший выбор!', 'Certo. É uma boa escolha!'], ['Олег', 'Спасибо!', 'Obrigado!'],
      ]),
      texto(8, 'Два города / Duas cidades', 'Москва — самый большой город России. Казань меньше, чем Москва, но она очень красивая. В Москве больше людей, чем в Казани. В Москве дороже, чем в Казани. Я думаю, что в Казани тише и спокойнее, чем в Москве, но в Москве интереснее.',
        'Moscou é a maior cidade da Rússia. Kazan é menor do que Moscou, mas é muito bonita. Em Moscou há mais gente do que em Kazan. Em Moscou é mais caro do que em Kazan. Acho que em Kazan é mais silencioso e mais tranquilo do que em Moscou, mas em Moscou é mais interessante.',
        [['Какой город больше?', 'Москва'], ['Где дороже?', 'В Москве'], ['Где тише?', 'В Казани']]),
      producao(5, 'Compare duas cidades que você conhece, em voz alta.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: um comparativo, um superlativo, uma preferência e uma igualdade.'),
      exercicios(20, [
        mc('Comparativo de «быстрый»:', ['быстрее', 'более быстрее', 'быстрый'], 'быстрее', 'Adjetivo + -ее.'),
        mc('Comparativo de «хороший»:', ['лучше', 'хороше', 'более хорошо'], 'лучше', 'Irregular.'),
        mc('Comparativo de «большой»:', ['больше', 'большее', 'больший'], 'больше', 'Irregular.'),
        mc('Comparativo de «дорогой»:', ['дороже', 'дорогее', 'дорогой'], 'дороже', 'г vira ж: дороже.'),
        mc('Comparativo de «дешёвый»:', ['дешевле', 'дешевее', 'дешёвее'], 'дешевле', 'Irregular.'),
        lacuna('Москва ___, чем Казань. (maior)', ['больше', 'большая', 'большой'], 'больше', 'O comparativo não muda de gênero.'),
        lacuna('Это ___ большой город. (o mais)', ['самый', 'самая', 'самое'], 'самый', 'город é masculino.'),
        lacuna('Это ___ красивая девушка.', ['самая', 'самый', 'самое'], 'самая', 'девушка é feminino.'),
        mc('Qual está correto?', ['Он старше меня', 'Он старый меня', 'Он старше я'], 'Он старше меня', 'Comparativo + genitivo.'),
        lacuna('Я люблю чай ___, чем кофе.', ['больше', 'самый', 'лучший'], 'больше', '«больше, чем» = mais do que.'),
        mc('«Лучше» é o comparativo de:', ['хороший', 'плохой', 'большой'], 'хороший', 'хороший → лучше.'),
        ouvir('Москва больше, чем Казань', ['Москва больше, чем Казань', 'Москва самый большой город', 'Казань меньше Москвы'], 'Москва больше, чем Казань', 'Comparativo + «чем».'),
        ditado('Он старше меня', 'Comparativo + genitivo.'),
        livre('Escreva 4 frases: um comparativo, um superlativo, uma preferência e uma igualdade.', 'Москва больше, чем Казань. Это самый большой город. Я люблю чай больше, чем кофе. Он такой же высокий, как я.'),
      ]),
      producao(5, 'Grave-se comparando três coisas ou pessoas e dizendo qual é a melhor.'),
    ]),
  ],
});
