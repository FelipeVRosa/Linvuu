import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 61, titulo: 'Causa, consequência e concessão', nivel: 'b1',
  objetivo: 'Exprimir causa (потому что, так как, поскольку, из-за, благодаря), consequência (поэтому, так что) e concessão (хотя, несмотря на, всё равно, зато), escolhendo a conjunção ou a preposição certa.',
  nota: 'Você explica causas e contrasta ideias. Próxima aula: o plural nos casos oblíquos.',
  sessoes: [
    sessao('S1', 'Causa: потому что, так как, из-за, благодаря', [
      revisao(5, 'Escreva 5 frases com verbos de regência diferente.'),
      palavras(8, [['потому что', 'patamú shta', 'porque', 'because'], ['так как', 'tak kak', 'como, uma vez que', 'since'], ['поскольку', 'paskólku', 'visto que', 'since (formal)'], ['из-за', 'iz-za', 'por causa de (negativo)', 'because of'], ['благодаря', 'blagadaryá', 'graças a', 'thanks to'], ['причина', 'prichína', 'causa', 'reason'], ['пробка', 'própka', 'engarrafamento', 'traffic jam'], ['помощь', 'pómashch', 'ajuda', 'help']]),
      gramatica(12, 'As conjunções e preposições de causa', 'PASSO 1: «ПОТОМУ ЧТО» é a causa mais comum, na língua falada e escrita: «Я опоздал, потому что была пробка». PASSO 2: «ТАК КАК» e «ПОСКОЛЬКУ» são mais formais, e costumam vir NO COMEÇO da frase: «Так как билетов нет, мы остались дома». PASSO 3: «ИЗ-ЗА» + GENITIVO indica causa NEGATIVA: «из-за пробки, из-за дождя, из-за тебя». PASSO 4: «БЛАГОДАРЯ» + DATIVO indica causa POSITIVA: «благодаря тебе, благодаря помощи, благодаря вашему звонку». PASSO 5: «ПОЭТОМУ» e «ТАК ЧТО» indicam a CONSEQUÊNCIA: «Была пробка, поэтому я опоздал», «Было холодно, так что я надел куртку». PASSO 6: «ПОТОМУ ЧТО» e «ПОЭТОМУ» têm sentidos opostos: causa × consequência.', {
        tag: 'Frase',
        comparacao: 'o português usa «por causa de» para tudo; o russo separa a causa ruim («из-за + genitivo») da boa («благодаря + dativo»).',
        tabela: [
          { causa: 'потому что', uso: 'neutro, falado', exemplo: 'Я опоздал, потому что была пробка.' }, { causa: 'так как / поскольку', uso: 'formal, no começo', exemplo: 'Так как билетов нет, мы остались дома.' }, { causa: 'из-за + genitivo', uso: 'causa negativa', exemplo: 'Я опоздал из-за пробки.' }, { causa: 'благодаря + dativo', uso: 'causa positiva', exemplo: 'Благодаря тебе я успел.' }, { causa: 'поэтому / так что', uso: 'consequência', exemplo: 'Была пробка, поэтому я опоздал.' },
        ],
        erros: [['Я опоздал благодаря пробке.', 'Я опоздал из-за пробки.', 'Causa negativa: «из-за».'], ['Благодаря тебя я успел.', 'Благодаря тебе я успел.', '«благодаря» + dativo.'], ['Я опоздал, поэтому была пробка.', 'Я опоздал, потому что была пробка.', 'Causa: «потому что».']],
      }),
      producao(5, 'Diga: «Я опоздал из-за пробки. Благодаря тебе я успел. Так как билетов нет, мы остались дома.»'),
    ]),
    sessao('S2', 'Concessão: хотя, несмотря на, всё равно, зато', [
      revisao(5, 'Escreva 5 frases com «из-за», «благодаря», «так как», «поскольку» e «поэтому».'),
      palavras(8, [['хотя', 'khatyá', 'embora', 'although'], ['несмотря на', 'nismatryá na', 'apesar de', 'despite'], ['несмотря на то что', 'nismatryá na to shta', 'apesar de que', 'even though'], ['всё равно', 'fsyo ravnó', 'mesmo assim', 'all the same'], ['всё-таки', 'fsyo-taki', 'ainda assim', 'still'], ['зато', 'zató', 'em compensação', 'on the other hand'], ['однако', 'adnakó', 'porém', 'however'], ['тем не менее', 'tyem nye minyéye', 'não obstante', 'nevertheless']]),
      gramatica(12, 'Contrastar ideias', 'PASSO 1: «ХОТЯ» + oração (embora): «Хотя было холодно, мы гуляли». PASSO 2: «НЕСМОТРЯ НА» + ACUSATIVO (apesar de): «Несмотря на дождь, мы пошли гулять». PASSO 3: «НЕСМОТРЯ НА ТО ЧТО» + oração (apesar de que): «Несмотря на то что шёл дождь, мы пошли гулять». PASSO 4: «ВСЁ РАВНО» e «ВСЁ-ТАКИ» (mesmo assim, ainda assim) vêm na oração principal: «Было холодно, но мы всё равно гуляли». PASSO 5: «ЗАТО» = em compensação, conserta um defeito com uma vantagem: «Квартира маленькая, зато дешёвая». PASSO 6: «ОДНАКО» e «ТЕМ НЕ МЕНЕЕ» são formais: «Однако он согласился». PASSO 7: não use «хотя» e «но» juntos na mesma oração.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Хотя было холодно, мы гуляли.', traducao: 'Embora fizesse frio, passeamos.' }, { frase: 'Несмотря на дождь, мы пошли гулять.', traducao: 'Apesar da chuva, fomos passear.' }, { frase: 'Было холодно, но мы всё равно гуляли.', traducao: 'Fazia frio, mas passeamos mesmo assim.' }, { frase: 'Квартира маленькая, зато дешёвая.', traducao: 'O apartamento é pequeno, mas em compensação é barato.' }, { frase: 'Он устал. Однако он согласился.', traducao: 'Estava cansado. Porém concordou.' },
        ],
        erros: [['Несмотря на дождь, но мы пошли гулять.', 'Несмотря на дождь, мы пошли гулять.', 'Sem «но» depois de «несмотря на».'], ['Хотя было холодно, но мы гуляли.', 'Хотя было холодно, мы гуляли.', 'Sem «но» depois de «хотя».'], ['Несмотря на дожде, мы пошли.', 'Несмотря на дождь, мы пошли.', '«несмотря на» + acusativo.']],
      }),
      producao(5, 'Diga: «Хотя … Несмотря на … Было … но мы всё равно … Квартира …, зато …»'),
    ]),
    sessao('S3', 'Explicar um atraso', [
      revisao(5, 'Escreva 5 frases de concessão com «хотя», «несмотря на», «всё равно», «зато» e «однако».'),
      gramatica(10, 'Dar e pedir explicações', 'PASSO 1: para perguntar a causa: «Почему вы опоздали?». PASSO 2: para explicar: «Из-за пробки», «Потому что…». PASSO 3: para agradecer a quem ajudou: «Благодаря вашему звонку…». PASSO 4: para ressaltar o contraste: «Хотя вы опоздали, работа сделана хорошо». PASSO 5: para fechar: «Всё равно извините за опоздание».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Почему вы опоздали?', traducao: 'Por que o senhor se atrasou?' }, { frase: 'Из-за пробки.', traducao: 'Por causa do engarrafamento.' }, { frase: 'Благодаря вашему звонку мы начали без вас.', traducao: 'Graças ao seu telefonema começamos sem a senhora.' }, { frase: 'Всё равно извините за опоздание.', traducao: 'Mesmo assim, desculpe o atraso.' },
        ],
      }),
      dialogo(8, 'Опоздание / O atraso', 'Anna chega atrasada e explica ao chefe.', [
        ['Борис', 'Анна, почему вы опоздали?', 'Anna, por que a senhora se atrasou?'], ['Анна', 'Из-за пробки. Несмотря на то что я вышла рано, автобус стоял час.', 'Por causa do engarrafamento. Apesar de eu ter saído cedo, o ônibus ficou parado uma hora.'], ['Борис', 'Благодаря вашему звонку мы начали встречу без вас.', 'Graças ao seu telefonema, começamos a reunião sem a senhora.'],
        ['Анна', 'Спасибо. Так как отчёт готов, я сразу его покажу.', 'Obrigada. Como o relatório está pronto, vou mostrá-lo logo.'], ['Борис', 'Хотя вы опоздали, работа сделана хорошо.', 'Embora a senhora tenha se atrasado, o trabalho está bem feito.'], ['Анна', 'Я устала, зато довольна результатом.', 'Estou cansada, mas em compensação satisfeita com o resultado.'],
        ['Борис', 'Поскольку клиент доволен, всё в порядке.', 'Visto que o cliente está satisfeito, está tudo bem.'], ['Анна', 'Всё равно извините за опоздание.', 'Mesmo assim, desculpe o atraso.'],
      ]),
      producao(7, 'Explique em voz alta um atraso ou um problema seu, com causa, consequência e concessão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases explicando um problema e a solução.'),
      exercicios(20, [
        lacuna('Я опоздал ___ пробки. (por causa de)', ['из-за', 'благодаря', 'потому'], 'из-за', 'Causa negativa: «из-за» + genitivo.'), lacuna('___ тебе я успел. (graças a)', ['Благодаря', 'Из-за', 'Несмотря'], 'Благодаря', 'Causa positiva: «благодаря» + dativo.'), lacuna('Я опоздал, ___ была пробка. (porque)', ['потому что', 'поэтому', 'хотя'], 'потому что', 'Causa.'),
        lacuna('Была пробка, ___ я опоздал. (por isso)', ['поэтому', 'потому что', 'хотя'], 'поэтому', 'Consequência.'), lacuna('___ было холодно, мы гуляли. (embora)', ['Хотя', 'Потому', 'Поэтому'], 'Хотя', 'Concessão.'), lacuna('Несмотря ___ дождь, мы пошли гулять.', ['на', 'в', 'из'], 'на', '«несмотря на» + acusativo.'),
        lacuna('Квартира маленькая, ___ дешёвая. (em compensação)', ['зато', 'но', 'хотя'], 'зато', '«зато» = em compensação.'), mc('«Из-за» exprime causa:', ['negativa', 'positiva', 'neutra'], 'negativa', '«из-за» + genitivo.'), mc('«Благодаря» pede:', ['dativo', 'genitivo', 'acusativo'], 'dativo', '«благодаря» + dativo.'),
        mc('Com «хотя» não se usa:', ['«но» na oração principal', 'vírgula', 'verbo no passado'], '«но» na oração principal', 'Sem «но».'), ordem('Ordene: «Несмотря на дождь, мы пошли гулять.»', ['Несмотря', 'на', 'дождь', 'мы', 'пошли', 'гулять'], 'Несмотря на дождь, мы пошли гулять.', '«на» + acusativo.'), ouvir('Я устала, зато довольна результатом', ['Я устала, зато довольна результатом', 'Я устала, поэтому довольна', 'Хотя я устала, я довольна'], 'Я устала, зато довольна результатом', '«зато» = em compensação.'),
        ditado('Благодаря вашему звонку мы начали встречу', '«благодаря» + dativo.'), livre('Escreva 5 frases: uma causa negativa, uma positiva, uma consequência e duas concessões.', 'Я опоздал из-за пробки. Благодаря тебе я успел. Была пробка, поэтому я опоздал. Хотя было холодно, мы гуляли. Квартира маленькая, зато дешёвая.'),
      ]),
      producao(5, 'Grave-se explicando um atraso com causa, consequência e concessão.'),
    ]),
  ],
});
