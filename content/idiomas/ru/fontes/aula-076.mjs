import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 76, titulo: 'Apresentação oral e discussão', nivel: 'b1',
  objetivo: 'Fazer uma apresentação oral curta (abertura, plano, desenvolvimento, conclusão) e responder a perguntas com educação, usando as fórmulas de abertura, transição e encerramento.',
  nota: 'Você apresenta um tema e responde a perguntas. Próxima aula: formação de palavras.',
  sessoes: [
    sessao('S1', 'Estrutura da apresentação', [
      revisao(5, 'Escreva 5 frases de uma conversa rápida entre amigos.'),
      palavras(8, [['доклад', 'daklát', 'apresentação, comunicação', 'talk'], ['тема', 'tyéma', 'tema', 'topic'], ['план', 'plan', 'plano', 'plan'], ['вывод', 'vyvat', 'conclusão', 'conclusion'], ['пример', 'primyér', 'exemplo', 'example'], ['слайд', 'slait', 'slide', 'slide'], ['аудитория', 'auditóriya', 'público', 'audience'], ['внимание', 'vnimániye', 'atenção', 'attention']]),
      gramatica(12, 'As fórmulas da apresentação', 'PASSO 1: ABERTURA: «Добрый день, уважаемые коллеги!», «Здравствуйте! Меня зовут…». PASSO 2: TEMA: «Сегодня я расскажу о…», «Тема моего доклада — …». PASSO 3: PLANO: «Мой доклад состоит из трёх частей», «Сначала я расскажу о…, затем о…, и в конце…». PASSO 4: DESENVOLVIMENTO: «Во-первых… Во-вторых… Например…». PASSO 5: TRANSIÇÃO: «Перейдём к следующему пункту», «Теперь поговорим о…». PASSO 6: CONCLUSÃO: «В заключение скажу…», «Итак, подведём итоги». PASSO 7: ENCERRAMENTO: «Спасибо за внимание! Есть ли вопросы?». PASSO 8: a postura: fale devagar, olhe para o público, use frases curtas e conectores.', {
        tag: 'Frase',
        tabela: [
          { parte: 'abertura', exemplo: 'Добрый день, уважаемые коллеги!' }, { parte: 'tema', exemplo: 'Сегодня я расскажу о переработке мусора.' }, { parte: 'plano', exemplo: 'Мой доклад состоит из трёх частей.' }, { parte: 'transição', exemplo: 'Перейдём к следующему пункту.' }, { parte: 'conclusão', exemplo: 'В заключение скажу, что…' }, { parte: 'encerramento', exemplo: 'Спасибо за внимание! Есть ли вопросы?' },
        ],
        erros: [['Сегодня я расскажу про переработка.', 'Сегодня я расскажу о переработке.', '«о» + prepositivo.'], ['Мой доклад состоит из три части.', 'Мой доклад состоит из трёх частей.', '«из» + genitivo plural.'], ['В заключении скажу…', 'В заключение скажу…', 'Expressão fixa: «в заключение».']],
      }),
      producao(5, 'Abra e apresente o plano de uma apresentação sua em 4 frases.'),
    ]),
    sessao('S2', 'Exemplo de apresentação', [
      revisao(5, 'Releia as fórmulas de abertura, plano e conclusão.'),
      texto(10, 'Доклад о переработке мусора / Apresentação sobre reciclagem', 'Добрый день, уважаемые коллеги! Сегодня я расскажу о переработке мусора. Мой доклад состоит из трёх частей. Во-первых, я объясню, почему это важно. Во-вторых, я покажу, как сортировать мусор дома. В-третьих, я расскажу о городских проектах. Например, в нашем районе есть пункты приёма бумаги и стекла. В заключение скажу, что чем больше людей сортируют мусор, тем чище становится город. Спасибо за внимание! Есть ли вопросы?',
        'Boa tarde, caros colegas! Hoje vou falar sobre a reciclagem do lixo. Minha apresentação tem três partes. Primeiro, vou explicar por que isso é importante. Segundo, vou mostrar como separar o lixo em casa. Terceiro, vou falar dos projetos da cidade. Por exemplo, no nosso bairro há pontos de recolha de papel e vidro. Em conclusão, direi que quanto mais pessoas separam o lixo, mais limpa fica a cidade. Obrigado pela atenção! Há perguntas?',
        [['О чём доклад?', 'О переработке мусора'], ['Сколько в нём частей?', 'Три'], ['Какие пункты есть в районе?', 'Пункты приёма бумаги и стекла'], ['Какой вывод?', 'Чем больше людей сортируют мусор, тем чище город']]),
      gramatica(8, 'Os recursos da apresentação', 'PASSO 1: veja a ABERTURA e o TEMA. PASSO 2: veja o PLANO: «состоит из трёх частей». PASSO 3: veja a ORDEM: «Во-первых… Во-вторых… В-третьих…». PASSO 4: veja o EXEMPLO: «Например…». PASSO 5: veja a CONCLUSÃO: «В заключение скажу, что чем больше… тем…». PASSO 6: veja o ENCERRAMENTO.', {
        tag: 'Frase',
        tabela: [
          { recurso: 'plano', exemplo: 'Мой доклад состоит из трёх частей.' }, { recurso: 'ordem', exemplo: 'Во-первых… Во-вторых… В-третьих…' }, { recurso: 'exemplo', exemplo: 'Например, в нашем районе есть пункты приёма.' }, { recurso: 'conclusão', exemplo: 'В заключение скажу, что чем больше… тем…' },
        ],
      }),
      producao(7, 'Leia em voz alta a apresentação, devagar e com pausas entre as partes.'),
    ]),
    sessao('S3', 'Perguntas e respostas', [
      revisao(5, 'Escreva 3 perguntas que o público poderia fazer sobre a sua apresentação.'),
      gramatica(10, 'Responder a perguntas com educação', 'PASSO 1: agradeça: «Спасибо за вопрос», «Хороший вопрос». PASSO 2: peça para repetir: «Повторите, пожалуйста, вопрос», «Не совсем понял вопрос». PASSO 3: esclareça: «Позвольте уточнить», «Если я правильно понял…». PASSO 4: responda: «Отвечу так:…», «Я считаю, что…», «По моим данным…». PASSO 5: admita o que não sabe: «К сожалению, я не знаю, но постараюсь узнать». PASSO 6: encerre: «Надеюсь, я ответил на ваш вопрос».', {
        tag: 'Frase',
        tabela: [
          { funcao: 'agradecer', exemplo: 'Спасибо за вопрос. Хороший вопрос.' }, { funcao: 'pedir repetição', exemplo: 'Повторите, пожалуйста, вопрос.' }, { funcao: 'esclarecer', exemplo: 'Позвольте уточнить. Если я правильно понял…' }, { funcao: 'responder', exemplo: 'Отвечу так: я считаю, что…' }, { funcao: 'admitir', exemplo: 'К сожалению, я не знаю, но постараюсь узнать.' },
        ],
      }),
      dialogo(8, 'Вопросы после доклада / Perguntas depois da apresentação', 'Anna apresentou; Igor e Olga fazem perguntas.', [
        ['Анна', 'Спасибо за внимание! Есть ли вопросы?', 'Obrigada pela atenção! Há perguntas?'], ['Игорь', 'Анна, как вы думаете, почему люди не сортируют мусор?', 'Anna, por que a senhora acha que as pessoas não separam o lixo?'], ['Анна', 'Хороший вопрос. Я считаю, что им неудобно: пунктов мало.', 'Boa pergunta. Considero que lhes é incômodo: há poucos pontos.'],
        ['Ольга', 'Позвольте уточнить: сколько таких пунктов в районе?', 'Permita-me esclarecer: quantos pontos assim há no bairro?'], ['Анна', 'К сожалению, точно не знаю, но постараюсь узнать.', 'Infelizmente não sei ao certo, mas vou tentar descobrir.'], ['Игорь', 'А что вы предлагаете сделать?', 'E o que a senhora propõe fazer?'],
        ['Анна', 'Нужно, чтобы пункты были в каждом дворе.', 'É preciso que haja pontos em cada pátio.'], ['Ольга', 'Спасибо, это очень интересно.', 'Obrigada, isso é muito interessante.'],
      ]),
      producao(7, 'Faça em voz alta o papel de quem apresenta: responda a duas perguntas e admita uma resposta que você não sabe.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno roteiro de apresentação em 6 frases.'),
      exercicios(20, [
        lacuna('Сегодня я расскажу ___ переработке. (sobre)', ['о', 'про', 'об'], 'о', '«о» + prepositivo.'), lacuna('Мой доклад состоит ___ трёх частей.', ['из', 'от', 'в'], 'из', '«состоит из» + genitivo.'), lacuna('___ заключение скажу, что… (em)', ['В', 'На', 'К'], 'В', '«в заключение».'),
        lacuna('Спасибо ___ внимание! (pela)', ['за', 'для', 'от'], 'за', '«спасибо за» + acusativo.'), lacuna('Повторите, пожалуйста, ___. (a pergunta)', ['вопрос', 'вопросу', 'вопроса'], 'вопрос', 'Acusativo.'), lacuna('___ уточнить: сколько пунктов? (permita)', ['Позвольте', 'Позволь', 'Позволил'], 'Позвольте', 'Formal: «позвольте».'),
        mc('«Подведём итоги» serve para:', ['concluir', 'abrir', 'perguntar'], 'concluir', 'Conclusão.'), mc('«Хороший вопрос» é:', ['um agradecimento por uma pergunta', 'uma recusa', 'uma ordem'], 'um agradecimento por uma pergunta', 'Reação educada.'), mc('Se você não sabe a resposta, diga:', ['К сожалению, не знаю, но постараюсь узнать', 'Это неважно', 'Вопрос плохой'], 'К сожалению, не знаю, но постараюсь узнать', 'Educado.'),
        ordem('Ordene: «Есть ли вопросы?»', ['Есть', 'ли', 'вопросы'], 'Есть ли вопросы?', 'Encerramento.'), ouvir('Спасибо за внимание, есть ли вопросы', ['Спасибо за внимание, есть ли вопросы', 'Нет вопросов', 'Вопросы закончились'], 'Спасибо за внимание, есть ли вопросы', 'Encerramento.'), ditado('Мой доклад состоит из трёх частей', 'Plano.'),
        livre('Escreva 5 frases de uma apresentação: abertura, tema, plano, uma conclusão e o encerramento.', 'Добрый день! Сегодня я расскажу о переработке. Мой доклад состоит из трёх частей. В заключение скажу, что это важно. Спасибо за внимание!'),
      ]),
      producao(5, 'Grave-se apresentando um tema em 2 minutos.'),
    ]),
  ],
});
