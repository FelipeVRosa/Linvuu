import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 64, titulo: 'Numerais: casos, coletivos e aproximados', nivel: 'b1',
  objetivo: 'Declinar os numerais mais usados (один, два, три, пять), usar os coletivos (двое, трое, пятеро), dizer quantidades aproximadas (человек сто, около двух часов) e declinar os ordinais.',
  nota: 'Você declina e usa os numerais com precisão. Próxima aula: pronomes indefinidos e negativos.',
  sessoes: [
    sessao('S1', 'Os numerais nos casos', [
      revisao(5, 'Escreva 5 frases com adjetivos curtos e comparação.'),
      palavras(8, [['один', 'adín', 'um', 'one'], ['два / две', 'dva / dvye', 'dois / duas', 'two'], ['три', 'tri', 'três', 'three'], ['четыре', 'chityre', 'quatro', 'four'], ['пять', 'pyat', 'cinco', 'five'], ['двадцать', 'dvátsat', 'vinte', 'twenty'], ['сто', 'sto', 'cem', 'hundred'], ['тысяча', 'týsyacha', 'mil', 'thousand']]),
      gramatica(12, 'Declinação dos numerais', 'PASSO 1: «ОДИН» declina como «этот»: «один, одна, одно, одни»; acusativo feminino «одну»; genitivo «одного, одной». PASSO 2: «ДВА / ДВЕ, ТРИ, ЧЕТЫРЕ» têm formas próprias: genitivo «двух, трёх, четырёх», dativo «двум, трём, четырём», instrumental «двумя, тремя, четырьмя», prepositivo «(о) двух, трёх, четырёх». PASSO 3: de «ПЯТЬ» em diante, o numeral declina como um substantivo em «-ь»: genitivo e dativo «пяти», instrumental «пятью», prepositivo «(о) пяти». PASSO 4: o substantivo, depois do numeral no caso oblíquo, vai ao mesmo caso no PLURAL: «двум друзьям, пяти друзьям, с двумя друзьями, о трёх днях». PASSO 5: «ДВА / ТРИ / ЧЕТЫРЕ» + substantivo no nominativo/acusativo pedem o genitivo SINGULAR: «два друга»; «ПЯТЬ» e acima pedem o genitivo PLURAL: «пять друзей». PASSO 6: para animados no acusativo, «двух, трёх, четырёх» (genitivo): «Я вижу двух друзей».', {
        tag: 'Casos',
        tabela: [
          { caso: 'nominativo', dois: 'два / две', tres: 'три', cinco: 'пять' }, { caso: 'genitivo', dois: 'двух', tres: 'трёх', cinco: 'пяти' }, { caso: 'dativo', dois: 'двум', tres: 'трём', cinco: 'пяти' }, { caso: 'instrumental', dois: 'двумя', tres: 'тремя', cinco: 'пятью' }, { caso: 'prepositivo', dois: '(о) двух', tres: '(о) трёх', cinco: '(о) пяти' },
        ],
        erros: [['Я позвонил два друзьям.', 'Я позвонил двум друзьям.', 'Dativo: «двум» + plural.'], ['Я иду с три друзьями.', 'Я иду с тремя друзьями.', 'Instrumental: «тремя».'], ['Я вижу два друга. (animados, acusativo)', 'Я вижу двух друзей.', 'Acusativo de animados: forma do genitivo.']],
      }),
      producao(5, 'Diga: «У меня нет двух книг. Я позвонил двум друзьям. Я иду с тремя друзьями. Я думаю о пяти днях.»'),
    ]),
    sessao('S2', 'Coletivos, aproximação e ordinais', [
      revisao(5, 'Escreva a tabela de «два», «три» e «пять» nos cinco casos.'),
      palavras(8, [['двое', 'dvóye', 'dois (pessoas)', 'two (people)'], ['трое', 'tróye', 'três (pessoas)', 'three (people)'], ['четверо', 'chétvira', 'quatro (pessoas)', 'four (people)'], ['пятеро', 'pyátira', 'cinco (pessoas)', 'five (people)'], ['оба / обе', 'óba / óbye', 'ambos / ambas', 'both'], ['около', 'ókala', 'cerca de', 'about'], ['примерно', 'primyérna', 'aproximadamente', 'approximately'], ['почти', 'pachtí', 'quase', 'almost']]),
      gramatica(12, 'Quantidade com pessoas, aproximação e ordem', 'PASSO 1: os numerais COLETIVOS «ДВОЕ, ТРОЕ, ЧЕТВЕРО, ПЯТЕРО» servem para PESSOAS e vão com o genitivo plural: «двое детей, трое друзей, пятеро студентов». PASSO 2: eles aparecem em respostas: «Сколько вас? — Нас пятеро». PASSO 3: «ОБА / ОБЕ» = ambos / ambas: «оба брата, обе сестры» (genitivo singular). PASSO 4: a APROXIMAÇÃO usa «ОКОЛО», «ПРИМЕРНО» ou «ПОЧТИ»: «около ста человек», «примерно двадцать минут». PASSO 5: ou se INVERTE a ordem do numeral e do substantivo: «часов в пять» (por volta das cinco), «человек десять» (umas dez pessoas), «дней через пять» (em uns cinco dias). PASSO 6: os ORDINAIS declinam como adjetivos: «в первом классе, на третьем этаже, с пятым номером». PASSO 7: com «около», o numeral vai ao genitivo: «около двух часов».', {
        tag: 'Frase',
        tabela: [
          { forma: 'coletivos', exemplo: 'В семье трое детей. Нас пятеро.' }, { forma: 'оба / обе', exemplo: 'Оба брата живут в Москве. Обе сестры учатся.' }, { forma: 'около / примерно', exemplo: 'Около ста человек. Примерно двадцать минут.' }, { forma: 'ordem invertida', exemplo: 'Я приду часов в пять. В зале человек сто.' }, { forma: 'ordinais declinados', exemplo: 'Я живу на третьем этаже. Он в первом классе.' },
        ],
        erros: [['В семье три дети.', 'В семье трое детей.', 'Pessoas: coletivo + genitivo plural.'], ['Около два часов.', 'Около двух часов.', '«около» + genitivo.'], ['Я живу на третий этаж.', 'Я живу на третьем этаже.', 'Onde: prepositivo.']],
      }),
      producao(5, 'Diga: «В семье трое детей. Нас пятеро. Около ста человек. Я приду часов в пять. Я живу на третьем этаже.»'),
    ]),
    sessao('S3', 'Reservar mesa', [
      revisao(5, 'Escreva 5 frases com coletivos, aproximações e ordinais declinados.'),
      gramatica(10, 'Dar números numa conversa', 'PASSO 1: para dizer quantas pessoas: «Нас будет пятеро». PASSO 2: para dizer o horário aproximado: «Мы придём примерно в семь, или часов в восемь». PASSO 3: para a duração: «Мы будем около двух часов». PASSO 4: para as crianças: «для троих детей». PASSO 5: para o andar e a mesa: «на втором этаже, у окна».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Нас будет пятеро.', traducao: 'Seremos cinco.' }, { frase: 'Мы придём часов в восемь.', traducao: 'Chegaremos por volta das oito.' }, { frase: 'Мы будем около двух часов.', traducao: 'Ficaremos cerca de duas horas.' }, { frase: 'Стулья для троих детей.', traducao: 'Cadeiras para três crianças.' },
        ],
      }),
      dialogo(8, 'Столик в ресторане / Mesa no restaurante', 'Igor reserva uma mesa por telefone.', [
        ['Официант', 'Здравствуйте! На сколько человек вы хотите стол?', 'Olá! Para quantas pessoas o senhor quer a mesa?'], ['Игорь', 'Нас будет пятеро.', 'Seremos cinco.'], ['Официант', 'Когда вы придёте?', 'Quando o senhor virá?'],
        ['Игорь', 'Примерно в семь часов. Или часов в восемь.', 'Mais ou menos às sete. Ou por volta das oito.'], ['Официант', 'Хорошо. На втором этаже есть стол на шестерых.', 'Está bem. No segundo andar há uma mesa para seis.'], ['Игорь', 'Отлично. Мы придём с тремя детьми.', 'Ótimo. Iremos com três crianças.'],
        ['Официант', 'Тогда я принесу детские стульчики для троих детей.', 'Então trarei cadeirinhas para as três crianças.'], ['Игорь', 'Спасибо! Мы будем около двух часов.', 'Obrigado! Ficaremos cerca de duas horas.'],
      ]),
      producao(7, 'Reserve uma mesa em voz alta: quantas pessoas, horário aproximado, crianças e duração.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com numerais em casos diferentes.'),
      exercicios(20, [
        lacuna('Я позвонил ___ друзьям. (dois)', ['двум', 'два', 'двух'], 'двум', 'Dativo: двум.'), lacuna('Я иду с ___ друзьями. (três)', ['тремя', 'три', 'трёх'], 'тремя', 'Instrumental: тремя.'), lacuna('У меня нет ___ книг. (dois)', ['двух', 'двум', 'два'], 'двух', 'Genitivo: двух.'),
        lacuna('Я думаю о ___ днях. (cinco)', ['пяти', 'пять', 'пятью'], 'пяти', 'Prepositivo: пяти.'), lacuna('В семье ___ детей. (três)', ['трое', 'три', 'трёх'], 'трое', 'Coletivo para pessoas.'), lacuna('Нас ___. (cinco, pessoas)', ['пятеро', 'пять', 'пяти'], 'пятеро', 'Coletivo.'),
        lacuna('Около ___ часов. (dois)', ['двух', 'два', 'двум'], 'двух', '«около» + genitivo.'), lacuna('Я живу на ___ этаже. (terceiro)', ['третьем', 'третий', 'третьего'], 'третьем', 'Ordinal no prepositivo.'), mc('«Часов в пять» significa:', ['por volta das cinco', 'às cinco em ponto', 'cinco horas'], 'por volta das cinco', 'Ordem invertida = aproximação.'),
        mc('Depois de «пять», o substantivo vai ao:', ['genitivo plural', 'genitivo singular', 'nominativo'], 'genitivo plural', '«пять друзей».'), ordem('Ordene: «Нас будет пятеро.»', ['Нас', 'будет', 'пятеро'], 'Нас будет пятеро.', 'Coletivo.'), ouvir('Мы будем около двух часов', ['Мы будем около двух часов', 'Мы будем два часа', 'Мы придём в два часа'], 'Мы будем около двух часов', '«около» + genitivo.'),
        ditado('Я иду с тремя друзьями', 'Instrumental: тремя.'), livre('Escreva 5 frases: dativo, genitivo e instrumental com numerais, um coletivo e uma aproximação.', 'Я позвонил двум друзьям. У меня нет двух книг. Я иду с тремя друзьями. В семье трое детей. Я приду часов в пять.'),
      ]),
      producao(5, 'Grave-se reservando uma mesa para um grupo.'),
    ]),
  ],
});
