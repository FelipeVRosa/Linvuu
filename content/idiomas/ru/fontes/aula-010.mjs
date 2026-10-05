import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 10, titulo: 'No café e no mercado', nivel: 'a1',
  objetivo: 'Pedir algo, perguntar o preço, contar de 1 a 10, de 10 em 10 até 50 e dizer 100, e fechar o primeiro ciclo de aulas.',
  nota: 'Você fechou a primeira etapa do russo: alfabeto completo e as primeiras frases do dia a dia. Revise as aulas 1 a 10 por alguns dias antes de seguir.',
  sessoes: [
    sessao('S1', 'Números de 1 a 10', [
      revisao(5, 'Escreva: Я люблю кофе. Я читаю книгу. Я слушаю музыку.'),
      palavras(12, [
        ['один', 'adín', 'um', 'one'], ['два', 'dva', 'dois', 'two'], ['три', 'tri', 'três', 'three'], ['четыре', 'chitýrie', 'quatro', 'four'], ['пять', 'piat', 'cinco', 'five'],
        ['шесть', 'shest', 'seis', 'six'], ['семь', 'siem', 'sete', 'seven'], ['восемь', 'vósiem', 'oito', 'eight'], ['девять', 'diévit', 'nove', 'nine'], ['десять', 'diésit', 'dez', 'ten'],
        ['сколько', 'skólka', 'quanto', 'how much'], ['стоит', 'stóit', 'custa', 'costs'],
      ]),
      gramatica(8, 'Número + «рубль»', 'Depois de 1 usa-se «рубль»; depois de 2, 3 e 4, «рубля»; depois de 5 ou mais, «рублей». Aprenda as três formas como padrão. «Один» tem forma feminina («одна») e neutra («одно»); «два» vira «две» com palavras femininas («две книги»).', {
        tabela: [
          { numero: '1', forma: 'один рубль', pt: '1 rublo' }, { numero: '2', forma: 'два рубля', pt: '2 rublos' }, { numero: '3', forma: 'три рубля', pt: '3 rublos' },
          { numero: '4', forma: 'четыре рубля', pt: '4 rublos' }, { numero: '5', forma: 'пять рублей', pt: '5 rublos' }, { numero: '10', forma: 'десять рублей', pt: '10 rublos' },
        ],
      }),
      producao(5, 'Conte de 1 a 10 em voz alta duas vezes. Depois diga: «Это стоит пять рублей.»'),
    ]),
    sessao('S2', 'Dezenas e pedidos', [
      revisao(5, 'Escreva em russo os números de 1 a 10 sem olhar.'),
      palavras(10, [
        ['одиннадцать', 'adínatsat', 'onze', 'eleven'], ['двенадцать', 'dvenátsat', 'doze', 'twelve'], ['пятнадцать', 'pitnátsat', 'quinze', 'fifteen'], ['двадцать', 'dvátsat', 'vinte', 'twenty'],
        ['тридцать', 'trítsat', 'trinta', 'thirty'], ['сорок', 'sórak', 'quarenta', 'forty'], ['пятьдесят', 'pidisiát', 'cinquenta', 'fifty'], ['сто', 'sto', 'cem', 'one hundred'],
        ['дайте', 'dáite', 'me dê (educado)', 'give me'], ['хочу', 'khachú', 'eu quero', 'I want'],
      ]),
      gramatica(10, 'Pedir: «Я хочу» e «Дайте, пожалуйста»', '«Я хочу» = eu quero (com um objeto ou um verbo no infinitivo). «Дайте, пожалуйста» = me dê, por favor: forma educada, para quem você trata por «вы». O verbo «хотеть» é irregular: хочу, хочешь, хочет, хотим, хотите, хотят.', {
        exemplos: [['Я хочу кофе.', 'Eu quero café.'], ['Дайте, пожалуйста, воду.', 'Me dê água, por favor.'], ['Я хочу читать.', 'Eu quero ler.']],
        tabela: [
          { pronome: 'я', хотеть: 'хочу', pt: 'eu quero' }, { pronome: 'ты', хотеть: 'хочешь', pt: 'você quer' }, { pronome: 'он / она', хотеть: 'хочет', pt: 'ele / ela quer' },
          { pronome: 'мы', хотеть: 'хотим', pt: 'nós queremos' }, { pronome: 'вы', хотеть: 'хотите', pt: 'vocês querem' }, { pronome: 'они', хотеть: 'хотят', pt: 'eles querem' },
        ],
      }),
      producao(5, 'Diga: «Я хочу кофе. Дайте, пожалуйста, воду. Сколько стоит?»'),
    ]),
    sessao('S3', 'No café e na loja', [
      revisao(5, 'Conte de 10 em 10 até 50 em voz alta e escreva 5 números em russo.'),
      dialogo(12, 'В кафе / No café', 'Um cliente e uma atendente.', [
        ['Официантка', 'Здравствуйте! Что вы хотите?', 'Olá! O que o senhor deseja?'], ['Клиент', 'Здравствуйте! Я хочу кофе и хлеб, пожалуйста.', 'Olá! Quero um café e pão, por favor.'],
        ['Официантка', 'Хорошо. Это всё?', 'Certo. É tudo?'], ['Клиент', 'Да, это всё. Сколько стоит?', 'Sim, é tudo. Quanto custa?'],
        ['Официантка', 'Кофе — сто рублей, хлеб — пятьдесят рублей.', 'O café custa cem rublos, o pão, cinquenta.'], ['Клиент', 'Сто пятьдесят рублей. Вот, пожалуйста.', 'Cento e cinquenta rublos. Aqui está.'],
        ['Официантка', 'Спасибо! До свидания!', 'Obrigada! Até logo!'], ['Клиент', 'До свидания!', 'Até logo!'],
      ]),
      texto(8, 'В магазине / Na loja', 'Это магазин. Здесь есть хлеб, молоко и вода. Хлеб стоит пятьдесят рублей, молоко стоит пятьдесят рублей, а вода стоит тридцать рублей. Я хочу хлеб и молоко. Это сто рублей.',
        'Esta é uma loja. Aqui há pão, leite e água. O pão custa cinquenta rublos, o leite custa cinquenta rublos e a água custa trinta rublos. Eu quero pão e leite. São cem rublos.',
        [['Что есть в магазине?', 'Хлеб, молоко и вода'], ['Сколько стоит вода?', 'Тридцать рублей'], ['Сколько стоят хлеб и молоко?', 'Сто рублей']]),
      producao(5, 'Represente o diálogo do café: um pedido completo, com preço e agradecimento.'),
    ]),
    sessao('S4', 'Prova do primeiro ciclo', [
      revisao(5, 'Releia as notas das aulas 1 a 9 e escreva 5 frases que você já sabe dizer.'),
      exercicios(20, [
        mc('«Пять рублей» significa:', ['5 rublos', '4 rublos', '15 rublos'], '5 rublos', '«Пять» = 5.'),
        lacuna('Два ___. (rublos)', ['рубль', 'рубля', 'рублей'], 'рубля', 'Depois de 2, 3 e 4: -я.'),
        lacuna('Пять ___. (rublos)', ['рубль', 'рубля', 'рублей'], 'рублей', 'Depois de 5 ou mais: рублей.'),
        ouvir('Сколько стоит?', ['Сколько стоит?', 'Как дела?', 'Где ты живёшь?'], 'Сколько стоит?', '«Сколько» = quanto.'),
        ordem('Ordene: «Eu quero café.»', ['кофе', 'Я', 'хочу'], 'Я хочу кофе.', 'Я + хочу + objeto.'),
        mc('Como pedir água com educação?', ['Дайте, пожалуйста, воду', 'Я воду дайте', 'Вода пожалуйста дайте'], 'Дайте, пожалуйста, воду', '«Воду» é o acusativo de «вода».'),
        mc('«Сто» é:', ['100', '10', '1000'], '100', '«Сто» = 100.'),
        ditado('Дайте, пожалуйста, кофе', 'Pedido educado.'),
        mc('«Они хотят» significa:', ['Eles querem', 'Eles têm', 'Eles fazem'], 'Eles querem', 'они → -ят.'),
        mc('Como se diz «Eu não tenho irmã»?', ['У меня нет сестры', 'У меня не сестра', 'У меня нет сестра'], 'У меня нет сестры', '«нет» pede a forma -ы.'),
        lacuna('Я живу ___ Москве.', ['в', 'на', 'из'], 'в', '«в» + preposicional.'),
        mc('«Я читаю ___.»', ['книгу', 'книга', 'книги'], 'книгу', 'Acusativo: -а → -у.'),
        ordem('Ordene: «O pão custa cinquenta rublos.»', ['рублей', 'стоит', 'Хлеб', 'пятьдесят'], 'Хлеб стоит пятьдесят рублей.', 'Sujeito + стоит + preço.'),
        livre('Escreva uma apresentação de 5 frases: nome, profissão, de onde é, onde mora e o que gosta.', 'Меня зовут Анна. Я врач. Я из Бразилии. Я живу в Москве. Я люблю читать книги.'),
      ]),
      producao(5, 'Grave-se: «Здравствуйте! Меня зовут… Я из… Я живу в… Я люблю…»'),
    ]),
  ],
});
