import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 60, titulo: 'Regência dos verbos: que caso cada verbo pede', nivel: 'b1',
  objetivo: 'Dominar a regência dos verbos mais comuns, agrupados pelo caso que pedem (instrumental, genitivo, dativo, acusativo com «на» e «в», prepositivo e «о»), sem traduzir palavra por palavra do português.',
  nota: 'Você acerta o caso de cada verbo mais comum. Próxima aula: causa e concessão.',
  sessoes: [
    sessao('S1', 'Verbos com instrumental e genitivo', [
      revisao(5, 'Escreva 5 frases com passiva (-ся e particípio curto) e com impessoais.'),
      palavras(8, [['интересоваться', 'intirisavátsya', 'interessar-se por', 'to be interested in'], ['пользоваться', 'pólzavatsya', 'usar', 'to use'], ['становиться', 'stanavítsya', 'tornar-se', 'to become'], ['гордиться', 'gardítsya', 'orgulhar-se de', 'to be proud of'], ['бояться', 'bayátsya', 'ter medo de', 'to be afraid of'], ['требовать', 'trébavat', 'exigir', 'to demand'], ['добиваться', 'dabivátsya', 'conseguir, alcançar', 'to achieve'], ['избегать', 'izbigát', 'evitar', 'to avoid']]),
      gramatica(12, 'Verbos que pedem instrumental ou genitivo', 'PASSO 1: cada verbo russo «pede» um CASO, e muitas vezes ele NÃO é o mesmo do português. PASSO 2: pedem INSTRUMENTAL: «интересоваться» (interessar-se por), «увлекаться» (apaixonar-se por), «заниматься» (praticar), «пользоваться» (usar), «становиться / стать» (tornar-se), «гордиться» (orgulhar-se de), «владеть» (dominar): «Я интересуюсь историей», «Он пользуется компьютером», «Она стала врачом», «Мы гордимся сыном». PASSO 3: pedem GENITIVO: «бояться» (ter medo de), «избегать» (evitar), «требовать» (exigir), «добиваться» (alcançar), «ждать» (esperar, genitivo ou acusativo): «Я боюсь экзаменов», «Он требует ответа», «Она добивается успеха», «Я жду автобуса». PASSO 4: o português diz «interessar-se POR», «ter medo DE», «usar» (sem preposição); decore o caso com o verbo. PASSO 5: «ЖДАТЬ» + acusativo para pessoa conhecida («Я жду друга»); + genitivo para algo abstrato ou indeterminado («Я жду автобуса, ответа»).', {
        tag: 'Casos',
        comparacao: 'o português usa preposições («interessar-se por», «ter medo de»). O russo usa só o caso: «интересоваться историей», «бояться экзаменов».',
        tabela: [
          { caso: 'instrumental', verbos: 'интересоваться, увлекаться, заниматься, пользоваться, стать, гордиться, владеть', exemplo: 'Я интересуюсь историей. Он пользуется компьютером.' }, { caso: 'genitivo', verbos: 'бояться, избегать, требовать, добиваться, ждать (abstrato)', exemplo: 'Я боюсь экзаменов. Он требует ответа.' },
        ],
        erros: [['Я интересуюсь историю.', 'Я интересуюсь историей.', '«интересоваться» + instrumental.'], ['Я боюсь экзамены.', 'Я боюсь экзаменов.', '«бояться» + genitivo.'], ['Она стала врач.', 'Она стала врачом.', '«стать» + instrumental.']],
      }),
      producao(5, 'Diga: «Я интересуюсь … Я пользуюсь … Я боюсь … Он требует … Мы гордимся …»'),
    ]),
    sessao('S2', 'Verbos com dativo, acusativo e prepositivo', [
      revisao(5, 'Escreva 5 frases com verbos que pedem instrumental e genitivo.'),
      palavras(8, [['готовиться к', 'gatóvitsya k', 'preparar-se para', 'to prepare for'], ['верить', 'vérit', 'acreditar (em alguém)', 'to believe'], ['жаловаться на', 'zháluvatsya na', 'queixar-se de', 'to complain about'], ['надеяться на', 'nadyéyatsya na', 'ter esperança em', 'to hope for'], ['отвечать на', 'atvichát na', 'responder a', 'to answer'], ['мечтать о', 'michtát o', 'sonhar com', 'to dream of'], ['скучать по', 'skuchát pa', 'sentir falta de', 'to miss'], ['зависеть от', 'zavísit at', 'depender de', 'to depend on']]),
      gramatica(12, 'Mais verbos e as suas preposições', 'PASSO 1: pedem DATIVO (sem preposição): «верить» (acreditar em alguém), «помогать», «звонить», «радоваться», «удивляться», «учиться»: «Я верю тебе», «Она радуется успеху». PASSO 2: pedem «К» + dativo: «готовиться к экзамену», «обращаться к врачу», «относиться к людям». PASSO 3: pedem «ПО» + dativo: «скучать по дому». PASSO 4: pedem «НА» + ACUSATIVO: «отвечать на вопрос», «жаловаться на нервы», «надеяться на удачу», «сердиться на брата», «влиять на решение». PASSO 5: pedem «В» + acusativo: «верить в удачу» (crer em algo). PASSO 6: pedem «О» + PREPOSITIVO: «думать о работе», «мечтать о поездке», «рассказывать о жизни». PASSO 7: pedem «ОТ» + genitivo: «зависеть от погоды», «устать от работы». PASSO 8: pedem «С» + instrumental: «согласиться с мнением», «встречаться с друзьями», «знакомиться с людьми».', {
        tag: 'Casos',
        tabela: [
          { caso: 'dativo', verbos: 'верить, помогать, звонить, радоваться, удивляться', exemplo: 'Я верю тебе.' }, { caso: 'к + dativo', verbos: 'готовиться, обращаться, относиться', exemplo: 'Я готовлюсь к экзамену.' }, { caso: 'по + dativo', verbos: 'скучать', exemplo: 'Я скучаю по дому.' }, { caso: 'на + acusativo', verbos: 'отвечать, жаловаться, надеяться, сердиться', exemplo: 'Я отвечаю на вопрос.' }, { caso: 'в + acusativo', verbos: 'верить (em algo)', exemplo: 'Я верю в удачу.' }, { caso: 'о + prepositivo', verbos: 'думать, мечтать, рассказывать', exemplo: 'Я мечтаю о поездке.' }, { caso: 'от + genitivo', verbos: 'зависеть, устать', exemplo: 'Это зависит от погоды.' }, { caso: 'с + instrumental', verbos: 'согласиться, встречаться, знакомиться', exemplo: 'Я согласен с вами.' },
        ],
        erros: [['Я отвечаю вопрос.', 'Я отвечаю на вопрос.', '«отвечать на» + acusativo.'], ['Я верю в тебя. (confio na pessoa)', 'Я верю тебе.', 'Acreditar no que alguém diz: dativo.'], ['Я скучаю по дом.', 'Я скучаю по дому.', '«скучать по» + dativo.']],
      }),
      producao(5, 'Diga: «Я готовлюсь к экзамену. Я отвечаю на вопросы. Я мечтаю о поездке. Это зависит от погоды. Я верю тебе.»'),
    ]),
    sessao('S3', 'Medo, esperança e expectativa', [
      revisao(5, 'Escreva 8 verbos com o caso que pedem, em uma tabela sua.'),
      gramatica(10, 'Conversar usando a regência certa', 'PASSO 1: ao falar de interesses: «Я интересуюсь…», «Я увлекаюсь…». PASSO 2: ao falar de medos e esperanças: «Я боюсь…», «Я надеюсь на…», «Я мечтаю о…». PASSO 3: ao falar de preparação: «Я готовлюсь к…». PASSO 4: ao falar de dependência: «Всё зависит от…». PASSO 5: ao falar de confiança: «Я верю тебе», «Я верю в себя».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я интересуюсь историей и увлекаюсь музыкой.', traducao: 'Interesso-me por história e sou apaixonado por música.' }, { frase: 'Я боюсь экзаменов, но надеюсь на удачу.', traducao: 'Tenho medo de exames, mas tenho esperança na sorte.' }, { frase: 'Я готовлюсь к экзамену и мечтаю о хорошей оценке.', traducao: 'Preparo-me para o exame e sonho com uma boa nota.' }, { frase: 'Я верю тебе и верю в себя.', traducao: 'Acredito em você e acredito em mim.' },
        ],
      }),
      dialogo(8, 'Перед экзаменом / Antes da prova', 'Anna e Boris falam da prova.', [
        ['Анна', 'Борис, ты интересуешься историей?', 'Boris, você se interessa por história?'], ['Борис', 'Да, я увлекаюсь историей и готовлюсь к экзамену.', 'Sim, sou apaixonado por história e me preparo para a prova.'], ['Анна', 'Я боюсь экзаменов. Я всегда жалуюсь на нервы.', 'Tenho medo de provas. Sempre me queixo dos nervos.'],
        ['Борис', 'Не бойся! Ты хорошо учишься и всегда отвечаешь на вопросы.', 'Não tenha medo! Você estuda bem e sempre responde às perguntas.'], ['Анна', 'Спасибо, я надеюсь на удачу. Я мечтаю о хорошей оценке.', 'Obrigada, tenho esperança na sorte. Sonho com uma boa nota.'], ['Борис', 'Главное — верить в себя. Я тебе верю.', 'O principal é acreditar em si. Eu acredito em você.'],
        ['Анна', 'Ты зависишь от оценки, как и я?', 'Você depende da nota, como eu?'], ['Борис', 'Нет, но я скучаю по каникулам и жду их.', 'Não, mas sinto falta das férias e as espero.'],
      ]),
      producao(7, 'Fale em voz alta de um exame ou de um desafio seu: o que teme, o que espera, como se prepara e em que acredita.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases usando verbos com casos diferentes.'),
      exercicios(20, [
        lacuna('Я интересуюсь ___. (história)', ['историей', 'историю', 'истории'], 'историей', '«интересоваться» + instrumental.'), lacuna('Я боюсь ___. (provas)', ['экзаменов', 'экзамены', 'экзаменам'], 'экзаменов', '«бояться» + genitivo.'), lacuna('Я верю ___. (em você)', ['тебе', 'тебя', 'тобой'], 'тебе', '«верить» + dativo.'),
        lacuna('Я отвечаю ___ вопрос.', ['на', 'в', 'о'], 'на', '«отвечать на» + acusativo.'), lacuna('Я готовлюсь ___ экзамену.', ['к', 'на', 'о'], 'к', '«готовиться к» + dativo.'), lacuna('Я мечтаю ___ поездке.', ['о', 'на', 'к'], 'о', '«мечтать о» + prepositivo.'),
        lacuna('Это зависит ___ погоды.', ['от', 'из', 'с'], 'от', '«зависеть от» + genitivo.'), lacuna('Он стал ___. (médico)', ['врачом', 'врач', 'врача'], 'врачом', '«стать» + instrumental.'), mc('«Скучать по» pede:', ['dativo', 'genitivo', 'acusativo'], 'dativo', '«по» + dativo.'),
        mc('«Бояться» pede:', ['genitivo', 'instrumental', 'dativo'], 'genitivo', '«бояться» + genitivo.'), ordem('Ordene: «Я готовлюсь к экзамену.»', ['Я', 'готовлюсь', 'к', 'экзамену'], 'Я готовлюсь к экзамену.', '«к» + dativo.'), ouvir('Я надеюсь на удачу', ['Я надеюсь на удачу', 'Я верю в удачу', 'Я мечтаю об удаче'], 'Я надеюсь на удачу', '«на» + acusativo.'),
        ditado('Я интересуюсь историей', 'Instrumental.'), livre('Escreva 5 frases com verbos diferentes: instrumental, genitivo, dativo, «на» e «о».', 'Я интересуюсь историей. Я боюсь экзаменов. Я верю тебе. Я отвечаю на вопросы. Я мечтаю о поездке.'),
      ]),
      producao(5, 'Grave-se falando do que você teme, espera e sonha, com a regência certa.'),
    ]),
  ],
});
