import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 14, titulo: 'Gramática: o mapa dos casos', nivel: 'a1',
  objetivo: 'Entender o que são casos, ver o mapa dos seis casos e reconhecer, nas frases que você já sabe, qual caso aparece e por quê.',
  nota: 'Você tem agora o mapa dos casos. O resto do russo é praticar cada caso em situações reais, um de cada vez.',
  sessoes: [
    sessao('S1', 'O que é um caso', [
      revisao(5, 'Escreva uma frase com «У меня нет», uma com «в» + lugar e uma com «читаю» + objeto.'),
      gramatica(15, 'Caso: a função da palavra na frase', 'Em português, a função de uma palavra aparece na ordem da frase e nas preposições: «o cachorro mordeu o homem» não é «o homem mordeu o cachorro». Em russo, a função aparece na terminação: a palavra muda de final, e cada final é um caso. São seis casos. Em «Мама читает книгу», «мама» é quem faz a ação (nominativo) e «книгу» é o que recebe a ação (acusativo). Você já usou quatro dos seis casos sem saber os nomes; agora eles ganham nome.', {
        tag: 'Casos',
        comparacao: 'o português não muda os substantivos, mas muda os pronomes: «eu / me / mim», «ele / o / lhe». O russo faz isso com todas as palavras.',
        tabela: [
          { caso: 'Nominativo', pergunta: 'Кто? Что?', funcao: 'quem faz; a forma do dicionário', exemplo: 'Мама дома.' },
          { caso: 'Acusativo', pergunta: 'Кого? Что?', funcao: 'o que recebe a ação (objeto direto)', exemplo: 'Я читаю книгу.' },
          { caso: 'Genitivo', pergunta: 'Кого? Чего?', funcao: 'ausência, dono, origem', exemplo: 'У меня нет сестры.' },
          { caso: 'Preposicional', pergunta: 'О ком? О чём? Где?', funcao: 'lugar (com в e на)', exemplo: 'Я живу в Москве.' },
          { caso: 'Dativo', pergunta: 'Кому? Чему?', funcao: 'para quem, a quem (você vai ver agora)', exemplo: 'Я звоню маме.' },
          { caso: 'Instrumental', pergunta: 'Кем? Чем?', funcao: 'com quem, por meio de (você vai ver agora)', exemplo: 'Я работаю с братом.' },
        ],
        erros: [['Я читаю книга.', 'Я читаю книгу.', 'O objeto direto vai para o acusativo.']],
      }),
      producao(10, 'Diga «Мама читает книгу.» Depois troque «мама» e «книга» por outras palavras e adapte as terminações.'),
    ]),
    sessao('S2', 'Genitivo: ausência, dono, «de»', [
      revisao(5, 'Escreva o genitivo de: брат, сестра, друг, подруга, книга.'),
      palavras(8, [
        ['без', 'biez', 'sem', 'without'], ['для', 'dlia', 'para', 'for'], ['от', 'ot', 'de (origem de pessoa)', 'from'], ['около', 'ókala', 'perto de', 'near'],
        ['после', 'pósli', 'depois de', 'after'], ['подарок', 'padárak', 'presente', 'gift'], ['чашка', 'cháshka', 'xícara', 'cup'], ['сахар', 'sákhar', 'açúcar', 'sugar'],
      ]),
      gramatica(12, 'Genitivo: como formar e quando usar', 'O genitivo responde a «кого? чего?». Você o usa para (1) dizer que algo não existe: «У меня нет сестры»; (2) dizer o dono: «книга брата»; (3) dizer a origem: «из Бразилии»; (4) depois de certas preposições: у, из, от, для, без, около, после; (5) com quantidades: «чашка кофе». Formação no singular: -а vira -ы; -я vira -и; consoante final ganha -а; -й e -ь masculinos viram -я; -о vira -а; -е vira -я; -ь feminino vira -и. Depois de г, к, х, ж, ч, ш, щ escreve-se -и, nunca -ы.', {
        tag: 'Casos',
        tabela: [
          { nominativo: 'мама', genitivo: 'мамы', exemplo: 'подарок для мамы' }, { nominativo: 'неделя', genitivo: 'недели', exemplo: 'после недели' }, { nominativo: 'брат', genitivo: 'брата', exemplo: 'письмо от брата' },
          { nominativo: 'музей', genitivo: 'музея', exemplo: 'около музея' }, { nominativo: 'учитель', genitivo: 'учителя', exemplo: 'книга учителя' }, { nominativo: 'окно', genitivo: 'окна', exemplo: 'нет окна' },
          { nominativo: 'море', genitivo: 'моря', exemplo: 'около моря' }, { nominativo: 'ночь', genitivo: 'ночи', exemplo: 'после ночи' }, { nominativo: 'сахар', genitivo: 'сахара', exemplo: 'кофе без сахара' },
        ],
        exemplos: [['Чашка кофе.', 'Uma xícara de café.'], ['Около дома.', 'Perto de casa.'], ['После работы.', 'Depois do trabalho.']],
      }),
      producao(5, 'Diga: «Кофе без сахара. Подарок для мамы. Книга брата. Нет сестры.»'),
    ]),
    sessao('S3', 'Dativo e instrumental: o essencial', [
      revisao(5, 'Escreva 4 frases com o genitivo (нет, без, для, около).'),
      palavras(5, [
        ['давать', 'davát', 'dar', 'to give'], ['звонить', 'zvanít', 'ligar (telefone)', 'to call'], ['помогать', 'pamagát', 'ajudar', 'to help'], ['нравиться', 'nrávitsa', 'agradar, gostar', 'to be liked'], ['вместе', 'vmiéste', 'juntos', 'together'],
      ]),
      gramatica(12, 'Dativo e instrumental: só o essencial', 'O dativo responde a «кому?» (para quem, a quem): masculino -у ou -ю (брат → брату), feminino -е (мама → маме). Os pronomes mudam muito: я → мне, ты → тебе, он → ему, она → ей, мы → нам, вы → вам, они → им. Uma frase importante: «Мне нравится музыка» (literalmente «a mim agrada a música» = eu gosto de música). O instrumental responde a «кем?» e é a forma de «com alguém» (com + «с»): masculino -ом ou -ем (брат → с братом), feminino -ой ou -ей (мама → с мамой). Aqui é só um primeiro contato: cada caso terá aulas próprias.', {
        tag: 'Casos',
        tabelas: [
          { titulo: 'Dativo e instrumental dos substantivos', linhas: [
            { nominativo: 'брат', dativo: 'брату', instrumental: 'с братом' }, { nominativo: 'друг', dativo: 'другу', instrumental: 'с другом' }, { nominativo: 'учитель', dativo: 'учителю', instrumental: 'с учителем' },
            { nominativo: 'мама', dativo: 'маме', instrumental: 'с мамой' }, { nominativo: 'подруга', dativo: 'подруге', instrumental: 'с подругой' },
          ] },
          { titulo: 'Pronomes no dativo', linhas: [
            { nominativo: 'я', dativo: 'мне' }, { nominativo: 'ты', dativo: 'тебе' }, { nominativo: 'он', dativo: 'ему' }, { nominativo: 'она', dativo: 'ей' }, { nominativo: 'мы', dativo: 'нам' }, { nominativo: 'вы', dativo: 'вам' }, { nominativo: 'они', dativo: 'им' },
          ] },
        ],
        exemplos: [['Я даю книгу брату.', 'Eu dou o livro ao meu irmão.'], ['Я звоню маме.', 'Eu ligo para a minha mãe.'], ['Я работаю с братом.', 'Eu trabalho com o meu irmão.'], ['Мне нравится музыка.', 'Eu gosto de música.']],
      }),
      texto(5, 'Мой друг / Meu amigo', 'У меня есть друг. Его зовут Иван. Я часто звоню ему. Мы любим гулять вместе. Иван работает с братом. Мне нравится Иван.',
        'Eu tenho um amigo. Ele se chama Ivan. Eu ligo para ele com frequência. Nós gostamos de passear juntos. Ivan trabalha com o irmão. Eu gosto do Ivan.',
        [['Как зовут друга?', 'Иван'], ['С кем работает Иван?', 'С братом'], ['Что они любят делать вместе?', 'Гулять']]),
      producao(3, 'Diga: «Я звоню маме. Я работаю с другом. Мне нравится музыка.»'),
    ]),
    sessao('S4', 'Prática dos casos', [
      revisao(5, 'Escreva uma frase para cada caso que você viu: acusativo, genitivo, preposicional, dativo e instrumental.'),
      exercicios(20, [
        mc('Em «Я читаю книгу», «книгу» está no:', ['acusativo', 'nominativo', 'genitivo'], 'acusativo', 'É o objeto direto.'),
        mc('Em «У меня нет сестры», «сестры» está no:', ['genitivo', 'acusativo', 'dativo'], 'genitivo', '«нет» pede o genitivo.'),
        mc('Em «Я живу в Москве», «Москве» está no:', ['preposicional', 'dativo', 'instrumental'], 'preposicional', '«в» + lugar: preposicional.'),
        lacuna('Я читаю ___. (livro)', ['книга', 'книгу', 'книги'], 'книгу', 'Acusativo: -а → -у.'),
        lacuna('У меня нет ___. (irmão)', ['брат', 'брата', 'брату'], 'брата', 'Genitivo: consoante + -а.'),
        lacuna('Я живу в ___. (cidade)', ['город', 'города', 'городе'], 'городе', 'Preposicional: -е.'),
        lacuna('Кофе без ___. (açúcar)', ['сахар', 'сахара', 'сахару'], 'сахара', 'без + genitivo.'),
        lacuna('Это подарок для ___. (mãe)', ['мама', 'мамы', 'маме'], 'мамы', 'для + genitivo.'),
        lacuna('Я звоню ___. (a ele)', ['он', 'его', 'ему'], 'ему', 'Dativo do pronome «он».'),
        lacuna('Я работаю с ___. (irmão)', ['брат', 'братом', 'брату'], 'братом', 'с + instrumental.'),
        mc('O dativo responde a:', ['Кому? Чему?', 'Кто? Что?', 'Где?'], 'Кому? Чему?', 'Para quem, a quem.'),
        ordem('Ordene: «Café sem açúcar.»', ['сахара', 'Кофе', 'без'], 'Кофе без сахара.', 'Substantivo + без + genitivo.'),
        ditado('Подарок для мамы', 'для + genitivo.'),
        livre('Escreva 4 frases com casos diferentes: acusativo, genitivo, preposicional e dativo.', 'Я читаю книгу. У меня нет сестры. Я живу в Москве. Я звоню маме.'),
      ]),
      producao(5, 'Grave-se: diga 5 frases, cada uma com um caso diferente.'),
    ]),
  ],
});
