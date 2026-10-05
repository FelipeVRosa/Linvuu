import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 15, titulo: 'Dias da semana e horas', nivel: 'a1',
  objetivo: 'Dizer os dias da semana, perguntar e dizer as horas e marcar um compromisso com «в» + dia e «в» + hora.',
  nota: 'Você já marca dia e hora. Próxima aula: o seu dia, do acordar ao jantar.',
  sessoes: [
    sessao('S1', 'Os dias da semana', [
      revisao(5, 'Escreva 5 frases com o que você faz e o que você gosta de fazer.'),
      palavras(10, [
        ['понедельник', 'panidiélnik', 'segunda-feira', 'Monday'], ['вторник', 'ftórnik', 'terça-feira', 'Tuesday'], ['среда', 'sridá', 'quarta-feira', 'Wednesday'], ['четверг', 'chitviérk', 'quinta-feira', 'Thursday'],
        ['пятница', 'piátnitsa', 'sexta-feira', 'Friday'], ['суббота', 'subóta', 'sábado', 'Saturday'], ['воскресенье', 'vaskriséni', 'domingo', 'Sunday'], ['выходные', 'vykhadnýie', 'fim de semana (só plural)', 'weekend'],
        ['рабочий день', 'rabóchii dien', 'dia útil', 'working day'], ['каждый', 'kázhdyi', 'cada, todo', 'every'],
      ]),
      gramatica(10, 'Dias da semana: «в» + dia', 'Em russo, os dias da semana não levam o «-feira» e se escrevem com letra minúscula, como em português. Para dizer «na segunda», use «в» + o dia: «в понедельник». Os dias que terminam em -а trocam para -у (acusativo): «в пятницу», «в субботу», «в среду». Antes de «вторник» usa-se «во»: «во вторник». «Воскресенье» não muda: «в воскресенье».', {
        tag: 'Tempo',
        comparacao: 'em português dizemos «na segunda» ou «às segundas». Em russo o dia leva só «в» e a terminação do acusativo.',
        tabela: [
          { dia: 'понедельник', forma: 'в понедельник', pt: 'na segunda' }, { dia: 'вторник', forma: 'во вторник', pt: 'na terça' }, { dia: 'среда', forma: 'в среду', pt: 'na quarta' },
          { dia: 'четверг', forma: 'в четверг', pt: 'na quinta' }, { dia: 'пятница', forma: 'в пятницу', pt: 'na sexta' }, { dia: 'суббота', forma: 'в субботу', pt: 'no sábado' }, { dia: 'воскресенье', forma: 'в воскресенье', pt: 'no domingo' },
        ],
        erros: [['в Понедельник', 'в понедельник', 'Dia da semana não leva maiúscula no meio da frase.'], ['на пятница', 'в пятницу', 'Use «в» e troque -а por -у.']],
      }),
      producao(5, 'Diga os 7 dias em ordem, duas vezes. Depois: «Я работаю в понедельник. Я отдыхаю в субботу.»'),
    ]),
    sessao('S2', 'As horas', [
      revisao(5, 'Escreva os 7 dias da semana de memória.'),
      palavras(8, [
        ['час', 'chas', 'hora', 'hour'], ['минута', 'minúta', 'minuto', 'minute'], ['половина', 'palavína', 'metade', 'half'], ['ровно', 'róvna', 'em ponto', 'exactly'], ['утром', 'útram', 'de manhã', 'in the morning'],
        ['днём', 'dniom', 'durante o dia, à tarde', 'during the day'], ['вечером', 'viécheram', 'à noite (início)', 'in the evening'], ['ночью', 'nóchiu', 'de madrugada', 'at night'],
      ]),
      gramatica(12, 'Dizer as horas', 'Para perguntar: «Который час?» ou «Сколько времени?». Para responder, «час» muda como «рубль»: 1 → «час»; 2, 3 e 4 → «часа»; 5 a 12 → «часов». Para as meias horas, diz-se «половина» + a hora SEGUINTE no genitivo: 2h30 = «половина третьего» (literalmente «a metade da terceira»). Para dizer a que horas algo acontece, use «в» + hora: «в три часа», «в пять часов». «Один час» vira só «в час».', {
        tag: 'Tempo',
        comparacao: 'em português a meia hora usa a hora que passou («duas e meia»). Em russo usa-se a hora que vem: «a metade da terceira».',
        tabela: [
          { hora: '1:00', russo: 'час', exemplo: 'Сейчас час. / Урок в час.' }, { hora: '2:00', russo: 'два часа', exemplo: 'Урок в два часа.' }, { hora: '4:00', russo: 'четыре часа', exemplo: 'Сейчас четыре часа.' },
          { hora: '5:00', russo: 'пять часов', exemplo: 'Я работаю в пять часов.' }, { hora: '12:00', russo: 'двенадцать часов', exemplo: 'Я обедаю в двенадцать часов.' }, { hora: '2:30', russo: 'половина третьего', exemplo: 'Урок в половине третьего.' },
          { hora: '3:30', russo: 'половина четвёртого', exemplo: 'Сейчас половина четвёртого.' }, { hora: '4:30', russo: 'половина пятого', exemplo: 'Мы обедаем в половине пятого.' },
        ],
        exemplos: [['Который час?', 'Que horas são?'], ['Сейчас пять часов.', 'Agora são cinco horas.'], ['В котором часу урок?', 'A que horas é a aula?']],
      }),
      producao(5, 'Pergunte e responda: «Который час? — Сейчас три часа.» Repita com 5 horas diferentes.'),
    ]),
    sessao('S3', 'Marcar um compromisso', [
      revisao(5, 'Escreva as horas: 1:00, 3:00, 5:00, 9:00, 2:30.'),
      dialogo(12, 'Когда урок? / Quando é a aula?', 'Dois colegas combinam o horário da aula.', [
        ['Дима', 'Привет, Катя! Когда у нас урок?', 'Oi, Katya! Quando é a nossa aula?'], ['Катя', 'Урок в среду.', 'A aula é na quarta.'], ['Дима', 'В котором часу?', 'A que horas?'],
        ['Катя', 'В пять часов. Ты работаешь в среду?', 'Às cinco. Você trabalha na quarta?'], ['Дима', 'Да, но я работаю утром. Вечером я дома.', 'Sim, mas eu trabalho de manhã. À noite estou em casa.'],
        ['Катя', 'Хорошо! В среду, в пять часов.', 'Certo! Na quarta, às cinco.'], ['Дима', 'Хорошо. Пока!', 'Combinado. Tchau!'], ['Катя', 'Пока!', 'Tchau!'],
      ]),
      texto(8, 'Моя неделя / Minha semana', 'Меня зовут Игорь. В понедельник я работаю в офисе. Во вторник у меня урок русского языка. В среду я отдыхаю. В пятницу вечером я смотрю фильм. В субботу и в воскресенье я гуляю.',
        'Eu me chamo Igor. Na segunda eu trabalho no escritório. Na terça eu tenho aula de russo. Na quarta eu descanso. Na sexta à noite eu assisto a um filme. No sábado e no domingo eu passeio.',
        [['Когда Игорь работает в офисе?', 'В понедельник'], ['Что он делает в пятницу вечером?', 'Смотрит фильм'], ['Когда он отдыхает?', 'В среду']]),
      producao(5, 'Conte a sua semana em voz alta: «В понедельник я … Во вторник я …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: o que você faz em 4 dias diferentes.'),
      exercicios(20, [
        mc('«Во вторник» significa:', ['na terça', 'na quarta', 'na quinta'], 'na terça', '«вторник» pede «во».'),
        lacuna('___ пятницу (na sexta)', ['в', 'на', 'во'], 'в', 'в + acusativo.'),
        lacuna('Я работаю ___ вторник.', ['во', 'в', 'на'], 'во', 'Antes de «вторник» usa-se «во».'),
        mc('Qual está correto?', ['в субботу', 'в суббота', 'на субботу'], 'в субботу', '-а vira -у.'),
        mc('«Который час?» significa:', ['Que horas são?', 'Quanto custa?', 'Onde é?'], 'Que horas são?', 'Pergunta pela hora.'),
        lacuna('Сейчас пять ___. (horas)', ['час', 'часа', 'часов'], 'часов', 'De 5 a 12: часов.'),
        lacuna('Сейчас два ___. (horas)', ['час', 'часа', 'часов'], 'часа', 'De 2 a 4: часа.'),
        mc('2:30 em russo:', ['половина третьего', 'половина второго', 'два тридцать'], 'половина третьего', 'A metade da terceira hora.'),
        ouvir('в три часа', ['в три часа', 'в пять часов', 'в час'], 'в три часа', '«три» = 3.'),
        ordem('Ordene: «Eu trabalho na segunda.»', ['понедельник', 'в', 'работаю', 'Я'], 'Я работаю в понедельник.', 'Sujeito + verbo + в + dia.'),
        mc('Em russo, os dias da semana levam maiúscula no meio da frase?', ['Não', 'Sim', 'Só a segunda-feira'], 'Não', 'Letra minúscula, como em português.'),
        ditado('Урок в среду', 'в + acusativo (среда → среду).'),
        mc('«Утром» significa:', ['de manhã', 'à noite', 'à tarde'], 'de manhã', 'утро → утром.'),
        livre('Escreva 4 frases: o que você faz em 4 dias diferentes, com a hora em uma delas.', 'В понедельник я работаю. Во вторник я читаю книгу. В пятницу вечером я смотрю фильм. В субботу я гуляю в пять часов.'),
      ]),
      producao(5, 'Grave-se: diga o que você faz em 5 dias diferentes, com uma hora.'),
    ]),
  ],
});
