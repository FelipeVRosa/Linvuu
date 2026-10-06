import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 48, titulo: 'Expressões de tempo', nivel: 'a2',
  objetivo: 'Dizer quando e por quanto tempo com через, назад, на, за, в течение, во время, после, перед, до, с … по, уже e ещё не.',
  nota: 'Você situa as ações no tempo e fala de prazos. Próxima aula: revisão e simulado do A2.',
  sessoes: [
    sessao('S1', 'Daqui a, há, durante, depois, antes', [
      revisao(5, 'Escreva 5 frases com medidas e quantidades.'),
      palavras(8, [['через', 'chéris', 'daqui a', 'in (time)'], ['назад', 'nazát', 'há (tempo atrás)', 'ago'], ['раньше', 'rányshe', 'antes, mais cedo', 'earlier'], ['позже', 'pózzhe', 'depois, mais tarde', 'later'], ['давно', 'davnó', 'há muito tempo', 'long ago'], ['недавно', 'nidávna', 'há pouco', 'recently'], ['сейчас', 'seychás', 'agora', 'now'], ['скоро', 'skóra', 'em breve', 'soon']]),
      gramatica(12, 'Marcar o tempo', 'PASSO 1: «ЧЕРЕЗ» + acusativo = «daqui a»: «через неделю» (daqui a uma semana), «через пять минут». PASSO 2: «НАЗАД» depois do acusativo = «há»: «неделю назад» (há uma semana), «два года назад». PASSO 3: «В ТЕЧЕНИЕ» + genitivo = «durante (ao longo de)»: «в течение недели». PASSO 4: «ВО ВРЕМЯ» + genitivo = «durante (enquanto acontece)»: «во время работы». PASSO 5: «ПОСЛЕ» + genitivo = «depois de»: «после обеда». PASSO 6: «ПЕРЕД» + instrumental = «antes de (logo antes)»: «перед сном». PASSO 7: «ДО» + genitivo = «até, antes de»: «до обеда», «до пятницы».', {
        tag: 'Frase',
        comparacao: 'o português usa «daqui a» e «há». O russo usa «через» (antes da palavra de tempo) e «назад» (depois dela): «через неделю» × «неделю назад».',
        tabela: [
          { frase: 'Через неделю я еду в Москву.', traducao: 'Daqui a uma semana vou a Moscou.' }, { frase: 'Я приехал неделю назад.', traducao: 'Cheguei há uma semana.' }, { frase: 'Во время работы я не пью кофе.', traducao: 'Durante o trabalho não tomo café.' }, { frase: 'После обеда я гуляю.', traducao: 'Depois do almoço passeio.' }, { frase: 'Перед сном я читаю.', traducao: 'Antes de dormir leio.' }, { frase: 'Я работаю до пятницы.', traducao: 'Trabalho até sexta.' },
        ],
        erros: [['Неделю через я еду в Москву.', 'Через неделю я еду в Москву.', '«через» vem ANTES.'], ['Назад неделю я приехал.', 'Я приехал неделю назад.', '«назад» vem DEPOIS.'], ['После обед я гуляю.', 'После обеда я гуляю.', '«после» + genitivo.']],
      }),
      producao(5, 'Diga: «Через неделю … Я приехал … назад. После обеда … Перед сном … Я работаю до …»'),
    ]),
    sessao('S2', 'Duração e prazo', [
      revisao(5, 'Escreva 5 frases com «через» e «назад».'),
      palavras(8, [['на неделю', 'na nidélyu', 'por uma semana (planejado)', 'for a week'], ['за неделю', 'za nidélyu', 'em uma semana (concluído)', 'in a week'], ['уже', 'uzhé', 'já', 'already'], ['ещё не', 'yeshchó nye', 'ainda não', 'not yet'], ['ещё', 'yeshchó', 'ainda, mais', 'still, more'], ['как долго', 'kak dólga', 'por quanto tempo', 'how long'], ['долго', 'dólga', 'por muito tempo', 'for a long time'], ['с … по …', 's … pa …', 'de … até (inclusive)', 'from … to']]),
      gramatica(12, 'Quanto tempo: sem preposição, на e за', 'PASSO 1: para a duração de uma ação em curso, o russo usa o ACUSATIVO sem preposição: «Я живу здесь два года», «Я работал всю неделю». PASSO 2: «НА» + acusativo = «por (um tempo planejado)»: «Я еду в Москву на неделю». PASSO 3: «ЗА» + acusativo = «em (um prazo para concluir)»: «Я сделаю это за час» (faço isto em uma hora). PASSO 4: «УЖЕ» = já; «ЕЩЁ НЕ» = ainda não; «ЕЩЁ» = ainda: «Я уже купил билеты», «Я ещё не купил билеты», «Он ещё спит». PASSO 5: «С … ПО …» = de … até (inclusive): «с понедельника по пятницу» (de segunda a sexta). PASSO 6: perguntas: «Как долго?», «Сколько времени?», «Давно?».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я живу здесь два года.', traducao: 'Moro aqui há dois anos.' }, { frase: 'Я еду в Москву на неделю.', traducao: 'Vou a Moscou por uma semana.' }, { frase: 'Я сделаю это за час.', traducao: 'Faço isto em uma hora.' }, { frase: 'Я уже купил билеты.', traducao: 'Já comprei os bilhetes.' }, { frase: 'Я ещё не купил билеты.', traducao: 'Ainda não comprei os bilhetes.' }, { frase: 'Я работаю с понедельника по пятницу.', traducao: 'Trabalho de segunda a sexta.' },
        ],
        erros: [['Я живу здесь на два года.', 'Я живу здесь два года.', 'Duração em curso: acusativo sem preposição.'], ['Я не купил ещё билеты.', 'Я ещё не купил билеты.', '«ещё не» fica junto.']],
      }),
      producao(5, 'Diga: «Я живу здесь … лет. Я еду на … Я сделаю это за … Я уже … Я ещё не …»'),
    ]),
    sessao('S3', 'Planos de férias', [
      revisao(5, 'Escreva 5 frases com «на», «за», «уже» e «ещё не».'),
      gramatica(10, 'Falar de planos e de passado', 'PASSO 1: para o futuro próximo, «через» + tempo: «Через две недели у меня отпуск». PASSO 2: para a duração planejada, «на»: «на неделю». PASSO 3: para o passado distante, «назад»: «год назад». PASSO 4: para a data, «в этом / прошлом / будущем году». PASSO 5: para a sequência, «после отпуска», «перед отпуском».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Через две недели у меня отпуск.', traducao: 'Daqui a duas semanas tenho férias.' }, { frase: 'Я поеду на неделю.', traducao: 'Vou por uma semana.' }, { frase: 'Год назад я был там.', traducao: 'Há um ano estive lá.' }, { frase: 'После отпуска я иду на работу.', traducao: 'Depois das férias volto ao trabalho.' },
        ],
      }),
      dialogo(8, 'Планы на отпуск / Planos para as férias', 'Olga e Boris falam das férias.', [
        ['Ольга', 'Борис, когда у тебя отпуск?', 'Boris, quando você tem férias?'], ['Борис', 'Через две недели. Я поеду в Москву на неделю.', 'Daqui a duas semanas. Vou a Moscou por uma semana.'], ['Ольга', 'Ты уже купил билеты?', 'Você já comprou as passagens?'],
        ['Борис', 'Ещё нет. Я куплю их на этой неделе.', 'Ainda não. Vou comprá-las esta semana.'], ['Ольга', 'Ты бывал в Москве раньше?', 'Você já esteve em Moscou antes?'], ['Борис', 'Да, год назад. Я жил там две недели.', 'Sim, há um ano. Morei lá duas semanas.'],
        ['Ольга', 'А после отпуска ты сразу пойдёшь на работу?', 'E depois das férias você vai direto ao trabalho?'], ['Борис', 'Да, я вернусь в понедельник и с понедельника по пятницу буду работать.', 'Sim, volto na segunda e de segunda a sexta trabalharei.'],
      ]),
      producao(7, 'Conte em voz alta os seus planos de férias: quando, por quanto tempo, o que já fez e o que ainda não fez.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre os seus planos.'),
      exercicios(20, [
        lacuna('___ неделю я еду в Москву. (daqui a)', ['Через', 'Назад', 'После'], 'Через', '«через» vem antes.'), lacuna('Я приехал неделю ___. (há)', ['назад', 'через', 'за'], 'назад', '«назад» vem depois.'), lacuna('Я еду в Москву ___ неделю. (por)', ['на', 'за', 'в'], 'на', '«на» = por (planejado).'),
        lacuna('Я сделаю это ___ час. (em)', ['за', 'на', 'через'], 'за', '«за» = em (prazo para concluir).'), lacuna('Я ___ купил билеты. (já)', ['уже', 'ещё', 'давно'], 'уже', '«уже» = já.'), lacuna('После ___ я гуляю. (almoço)', ['обеда', 'обед', 'обеду'], 'обеда', '«после» + genitivo.'),
        mc('«Перед сном» significa:', ['antes de dormir', 'depois de dormir', 'durante o sono'], 'antes de dormir', '«перед» + instrumental.'), mc('«Я ещё не купил» significa:', ['ainda não comprei', 'já comprei', 'nunca comprei'], 'ainda não comprei', '«ещё не» = ainda não.'), mc('«С понедельника по пятницу» significa:', ['de segunda a sexta', 'na segunda e na sexta', 'até segunda'], 'de segunda a sexta', '«с … по …» (inclusive).'),
        ordem('Ordene: «Через неделю я еду в Москву.»', ['Через', 'неделю', 'я', 'еду', 'в', 'Москву'], 'Через неделю я еду в Москву.', '«через» + acusativo.'), ouvir('Я приехал неделю назад', ['Я приехал неделю назад', 'Я приеду через неделю', 'Я еду на неделю'], 'Я приехал неделю назад', '«назад» = há.'), ditado('Перед сном я читаю', '«перед» + instrumental.'),
        livre('Escreva 5 frases: daqui a, há, por quanto tempo (на), prazo (за) e já/ainda não.', 'Через неделю я еду в Москву. Я приехал год назад. Я еду на неделю. Я сделаю это за час. Я ещё не купил билеты.'),
      ]),
      producao(5, 'Grave-se contando os seus planos para as próximas semanas.'),
    ]),
  ],
});
