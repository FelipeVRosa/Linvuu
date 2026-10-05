import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 28, titulo: 'Gramática: numerais e datas', nivel: 'a2',
  objetivo: 'Contar até 1000, concordar numeral e substantivo (1, 2 a 4, 5 ou mais), dizer a idade e usar os ordinais, os meses e as datas.',
  nota: 'Você conta, diz idade e datas. Próxima aula: o quadro geral dos seis casos.',
  sessoes: [
    sessao('S1', 'Números até 1000', [
      revisao(5, 'Escreva em russo os números de 1 a 20 de memória.'),
      palavras(12, [
        ['тринадцать', 'trinátsat', '13', 'thirteen'], ['четырнадцать', 'chitýrnatsat', '14', 'fourteen'], ['шестнадцать', 'shisnátsat', '16', 'sixteen'], ['семнадцать', 'simnátsat', '17', 'seventeen'],
        ['восемнадцать', 'vasimnátsat', '18', 'eighteen'], ['девятнадцать', 'divitnátsat', '19', 'nineteen'], ['шестьдесят', 'shisdisiát', '60', 'sixty'], ['семьдесят', 'siémdisit', '70', 'seventy'],
        ['восемьдесят', 'vósimdisit', '80', 'eighty'], ['девяносто', 'divianósta', '90', 'ninety'], ['двести', 'dviésti', '200', 'two hundred'], ['тысяча', 'týsicha', '1000', 'thousand'],
      ]),
      gramatica(8, 'Os numerais se somam', 'Os numerais russos se formam somando, da maior parte para a menor: 21 = двадцать один; 35 = тридцать пять; 148 = сто сорок восемь. De 13 a 19 acrescenta-se -надцать à base (тринадцать). As dezenas de 50 a 80 têm um -ь- no meio: пятьдесят, шестьдесят, семьдесят, восемьдесят. Atenção a 40 (сорок) e 90 (девяносто), que são especiais. Centenas: сто, двести, триста, четыреста, пятьсот, шестьсот, семьсот, восемьсот, девятьсот.', {
        tag: 'Números',
        tabela: [
          { numero: '10 / 20 / 30', forma: 'десять / двадцать / тридцать' }, { numero: '40', forma: 'сорок' }, { numero: '50 / 60 / 70 / 80', forma: 'пятьдесят / шестьдесят / семьдесят / восемьдесят' }, { numero: '90', forma: 'девяносто' },
          { numero: '100 / 200 / 300', forma: 'сто / двести / триста' }, { numero: '400', forma: 'четыреста' }, { numero: '500 – 900', forma: 'пятьсот, шестьсот, семьсот, восемьсот, девятьсот' }, { numero: '1000', forma: 'тысяча' },
        ],
        exemplos: [['Двадцать пять.', '25.'], ['Сто сорок восемь.', '148.'], ['Триста пятьдесят.', '350.']],
      }),
      producao(5, 'Conte de 10 em 10 até 100 e diga: «двадцать пять, тридцать семь, сорок девять, сто двадцать».'),
    ]),
    sessao('S2', 'Número + substantivo e idade', [
      revisao(5, 'Escreva por extenso: 21, 35, 48, 99, 120.'),
      palavras(5, [['год', 'god', 'ano', 'year'], ['страница', 'stranítsa', 'página', 'page'], ['билет', 'bilyét', 'bilhete, ingresso', 'ticket'], ['этаж', 'etásh', 'andar', 'floor'], ['место', 'miésta', 'lugar, assento', 'place']]),
      gramatica(14, 'Numeral + substantivo', 'O substantivo muda conforme o número. Depois de 1 (e de 21, 31...): nominativo singular: один студент, двадцать одна книга. Depois de 2, 3 e 4 (e de 22, 23, 24...): genitivo singular: два студента, три книги, четыре окна. Depois de 5 a 20 e de 25, 30...: genitivo plural: пять студентов, десять книг, двадцать окон. Os numerais 1 e 2 têm gênero: один / одна / одно; два / две (feminino). Idade: «год» com 1 (21 год), «года» com 2 a 4 (22 года), «лет» com 5 em diante (25 лет); de 11 a 14 é sempre «лет».', {
        tag: 'Números',
        comparacao: 'em português só mudamos para o plural a partir de 2 («um livro, dois livros»). O russo tem três regras: 1, de 2 a 4 e de 5 em diante.',
        tabela: [
          { numero: '1, 21, 31', forma: 'nominativo singular', exemplo: 'один стол, одна книга, одно окно' }, { numero: '2, 3, 4, 22, 23, 24', forma: 'genitivo singular', exemplo: 'два стола, две книги, три окна' },
          { numero: '5 a 20, 25, 30, 100', forma: 'genitivo plural', exemplo: 'пять столов, пять книг, пять окон' }, { numero: '11 a 14', forma: 'genitivo plural', exemplo: 'одиннадцать лет, четырнадцать лет' },
          { numero: 'idade', forma: 'год / года / лет', exemplo: '21 год, 22 года, 25 лет' },
        ],
        erros: [['Два книги.', 'Две книги.', '«два» vira «две» com palavra feminina.'], ['Двадцать год.', 'Двадцать лет.', 'Com 5 em diante, «лет».']],
      }),
      producao(6, 'Diga: «Мне … лет. У меня две сестры и один брат. В книге сто двадцать страниц.»'),
    ]),
    sessao('S3', 'Ordinais, meses e datas', [
      revisao(5, 'Escreva os números ordinais de 1 a 5.'),
      gramatica(12, 'Ordinais, meses e datas', 'Os ordinais são adjetivos: concordam com o substantivo. Masculino: первый, второй, третий...; feminino: первая, вторая, третья...; neutro: первое, второе, третье.... «Третий» é especial (третья, третье, третьи). Para dizer a data, usa-se o ordinal no NEUTRO e o mês no GENITIVO: «первое мая» (1º de maio). Para dizer «em» uma data, o ordinal também vai para o genitivo: «первого мая» (no dia 1º de maio). Usos: andar («на третьем этаже»), ordem («второй урок»).', {
        tag: 'Números',
        tabelas: [
          { titulo: 'Ordinais', linhas: [
            { masculino: 'первый', feminino: 'первая', neutro: 'первое', plural: 'первые' }, { masculino: 'второй', feminino: 'вторая', neutro: 'второе', plural: 'вторые' }, { masculino: 'третий', feminino: 'третья', neutro: 'третье', plural: 'третьи' },
            { masculino: 'четвёртый', feminino: 'четвёртая', neutro: 'четвёртое', plural: 'четвёртые' }, { masculino: 'пятый', feminino: 'пятая', neutro: 'пятое', plural: 'пятые' }, { masculino: 'десятый', feminino: 'десятая', neutro: 'десятое', plural: 'десятые' },
          ] },
          { titulo: 'Os meses (o genitivo é usado nas datas)', linhas: [
            { nominativo: 'январь', genitivo: 'января' }, { nominativo: 'февраль', genitivo: 'февраля' }, { nominativo: 'март', genitivo: 'марта' }, { nominativo: 'апрель', genitivo: 'апреля' }, { nominativo: 'май', genitivo: 'мая' }, { nominativo: 'июнь', genitivo: 'июня' },
            { nominativo: 'июль', genitivo: 'июля' }, { nominativo: 'август', genitivo: 'августа' }, { nominativo: 'сентябрь', genitivo: 'сентября' }, { nominativo: 'октябрь', genitivo: 'октября' }, { nominativo: 'ноябрь', genitivo: 'ноября' }, { nominativo: 'декабрь', genitivo: 'декабря' },
          ] },
        ],
        exemplos: [['Сегодня первое мая.', 'Hoje é 1º de maio.'], ['Мой день рождения — десятого июня.', 'Meu aniversário é em 10 de junho.']],
      }),
      dialogo(8, 'Какое сегодня число? / Que dia é hoje?', 'Dois amigos conversam.', [
        ['Катя', 'Какое сегодня число?', 'Que dia do mês é hoje?'], ['Миша', 'Сегодня первое мая.', 'Hoje é 1º de maio.'], ['Катя', 'А какой день недели?', 'E que dia da semana?'],
        ['Миша', 'Сегодня пятница. Завтра суббота.', 'Hoje é sexta. Amanhã é sábado.'], ['Катя', 'Когда у тебя день рождения?', 'Quando é o seu aniversário?'], ['Миша', 'Мой день рождения — десятого июня.', 'Meu aniversário é em 10 de junho.'],
        ['Катя', 'Отлично! У меня день рождения двадцать второго сентября.', 'Ótimo! O meu é em 22 de setembro.'], ['Миша', 'Хорошо! Я куплю подарок!', 'Certo! Vou comprar um presente!'],
      ]),
      producao(5, 'Diga a data de hoje e a data do seu aniversário.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com números: idade, irmãos, preço e data.'),
      exercicios(20, [
        lacuna('Пять ___. (livros)', ['книг', 'книги', 'книга'], 'книг', '5 em diante: genitivo plural.'),
        lacuna('Три ___. (livros)', ['книги', 'книг', 'книга'], 'книги', '2, 3 e 4: genitivo singular.'),
        lacuna('Одна ___. (livro)', ['книга', 'книги', 'книг'], 'книга', '1: nominativo singular.'),
        lacuna('Мне двадцать один ___. (anos)', ['год', 'года', 'лет'], 'год', 'Termina em 1: год.'),
        lacuna('Ей двадцать три ___.', ['года', 'год', 'лет'], 'года', 'Termina em 2, 3 ou 4: года.'),
        lacuna('Ему тридцать пять ___.', ['лет', 'год', 'года'], 'лет', '5 em diante: лет.'),
        mc('Onze ___ (anos):', ['лет', 'год', 'года'], 'лет', '11 a 14: sempre лет.'),
        lacuna('Две ___. (irmãs)', ['сестры', 'сестёр', 'сестра'], 'сестры', '2: genitivo singular.'),
        mc('200 em russo:', ['двести', 'двадцать', 'двенадцать'], 'двести', 'Centenas: двести.'),
        mc('500 em russo:', ['пятьсот', 'пятьдесят', 'пять сто'], 'пятьсот', 'Centenas: пятьсот.'),
        mc('Ordinal feminino de «второй»:', ['вторая', 'второе', 'вторые'], 'вторая', 'Feminino: -ая.'),
        mc('«Первое мая» significa:', ['1º de maio', 'primeiro de mês', 'maio de 1'], '1º de maio', 'Ordinal neutro + mês no genitivo.'),
        ouvir('двадцать пять лет', ['двадцать пять лет', 'двадцать один год', 'двадцать два года'], 'двадцать пять лет', '25: лет.'),
        ditado('сто двадцать рублей', '100 + 20.'),
        livre('Escreva 4 frases com números: idade, irmãos, preço e data.', 'Мне тридцать лет. У меня две сестры и один брат. Книга стоит сто двадцать рублей. Сегодня первое мая.'),
      ]),
      producao(5, 'Grave-se dizendo a sua idade, quantos irmãos tem, um preço e a data de hoje.'),
    ]),
  ],
});
