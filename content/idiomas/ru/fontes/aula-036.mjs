import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 36, titulo: 'Casa e moradia', nivel: 'a2',
  objetivo: 'Descrever a casa e os cômodos, dizer onde as coisas estão (на, в, под, над, рядом с, между), usar «нет» com o genitivo e alugar um apartamento.',
  nota: 'Você descreve a casa e aluga um apartamento. Próxima aula: compras e roupas.',
  sessoes: [
    sessao('S1', 'A casa e os cômodos', [
      revisao(5, 'Escreva 5 frases sobre o seu trabalho, com o instrumental.'),
      palavras(8, [['квартира', 'kvartíra', 'apartamento', 'flat'], ['дом', 'dom', 'casa, prédio', 'house'], ['комната', 'kómnata', 'cômodo, quarto', 'room'], ['кухня', 'kúkhnya', 'cozinha', 'kitchen'], ['ванная', 'vánnaya', 'banheiro', 'bathroom'], ['спальня', 'spálnya', 'quarto de dormir', 'bedroom'], ['гостиная', 'gastínaya', 'sala de estar', 'living room'], ['балкон', 'balkón', 'varanda', 'balcony']]),
      gramatica(12, 'Onde? e Para onde? em casa', 'PASSO 1: para dizer ONDE, use o prepositivo: «в квартире, в комнате, в спальне, в ванной». PASSO 2: três palavras da casa pedem «НА»: «на кухне, на балконе, на этаже». PASSO 3: para dizer PARA ONDE, use o acusativo, com a mesma preposição: «в комнату, в спальню, на кухню, на балкон». PASSO 4: o andar: «на каком этаже?» — «на первом, втором, третьем этаже». PASSO 5: para dizer o que existe, use «есть»; para dizer o que NÃO existe, «нет» + GENITIVO: «В комнате есть стол» × «В комнате нет стола». PASSO 6: o número de cômodos dá o nome ao apartamento: «однокомнатная, двухкомнатная квартира».', {
        tag: 'Casos',
        tabela: [
          { onde: 'в квартире', paraOnde: 'в квартиру' }, { onde: 'в комнате', paraOnde: 'в комнату' }, { onde: 'на кухне', paraOnde: 'на кухню' }, { onde: 'на балконе', paraOnde: 'на балкон' }, { onde: 'на третьем этаже', paraOnde: 'на третий этаж' },
        ],
        erros: [['Я на кухне иду.', 'Я иду на кухню.', 'Para onde? acusativo: на кухню.'], ['В квартире нет балкон.', 'В квартире нет балкона.', '«нет» + genitivo.']],
      }),
      producao(5, 'Descreva a sua casa: «Я живу в квартире. Квартира на … этаже. В квартире есть … Нет …»'),
    ]),
    sessao('S2', 'Móveis e posições', [
      revisao(5, 'Escreva 5 frases sobre os cômodos da sua casa.'),
      palavras(8, [['мебель', 'myébel', 'móveis', 'furniture'], ['стол', 'stol', 'mesa', 'table'], ['стул', 'stul', 'cadeira', 'chair'], ['кровать', 'krováti', 'cama', 'bed'], ['шкаф', 'shkaf', 'armário', 'wardrobe'], ['диван', 'diván', 'sofá', 'sofa'], ['окно', 'aknó', 'janela', 'window'], ['лампа', 'lámpa', 'abajur, lâmpada', 'lamp']]),
      gramatica(12, 'Preposições de lugar e o caso certo', 'PASSO 1: «НА» e «В» + prepositivo dizem onde: «на столе» (sobre a mesa), «в шкафу» (no armário). PASSO 2: «ПОД, НАД, ПЕРЕД, ЗА, МЕЖДУ, РЯДОМ С» pedem o INSTRUMENTAL quando respondem a «где?»: «под столом, над диваном, перед домом, за окном, между окном и дверью, рядом с кроватью». PASSO 3: «ОКОЛО» e «У» pedem genitivo: «около дома, у окна». PASSO 4: quando há movimento («куда?»), «под» e «за» passam ao acusativo: «Кошка идёт под стол». PASSO 5: verbos de posição concordam com o objeto: «стоит» (em pé), «лежит» (deitado), «висит» (pendurado).', {
        tag: 'Casos',
        tabela: [
          { frase: 'Лампа стоит на столе.', traducao: 'A lâmpada está sobre a mesa.' }, { frase: 'Кошка лежит под столом.', traducao: 'O gato está deitado embaixo da mesa.' }, { frase: 'Картина висит над диваном.', traducao: 'O quadro está pendurado acima do sofá.' }, { frase: 'Стул стоит рядом с кроватью.', traducao: 'A cadeira está ao lado da cama.' }, { frase: 'Шкаф стоит между окном и дверью.', traducao: 'O armário está entre a janela e a porta.' }, { frase: 'Мой дом около парка.', traducao: 'Minha casa fica perto do parque.' },
        ],
        erros: [['Кошка лежит под стол.', 'Кошка лежит под столом.', 'Onde? «под» + instrumental.'], ['Картина висит над диван.', 'Картина висит над диваном.', '«над» + instrumental.']],
      }),
      producao(5, 'Diga onde estão 5 coisas do seu quarto: «Лампа стоит на … Стул стоит рядом с … Картина висит над …»'),
    ]),
    sessao('S3', 'Alugar um apartamento', [
      revisao(5, 'Escreva 5 frases sobre onde ficam os móveis da sua casa.'),
      gramatica(10, 'Alugar: preço, mobília e despesas', 'PASSO 1: «СНИМАТЬ квартиру» = alugar (como inquilino); «СДАВАТЬ квартиру» = alugar (como dono). PASSO 2: preço: «Сколько стоит аренда?» — «Тридцать пять тысяч рублей в месяц». PASSO 3: depois de «тысяч» e de números a partir de 5, o substantivo vai ao genitivo plural: «тысяч рублей». PASSO 4: «с мебелью» (com móveis) e «без мебели» (sem móveis): «с» + instrumental, «без» + genitivo. PASSO 5: «коммунальные услуги» (taxas de condomínio, água, luz) podem ou não estar incluídas: «входят в цену» (estão incluídas no preço). PASSO 6: para combinar a visita: «Можно посмотреть квартиру завтра?»', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я хочу снять квартиру.', traducao: 'Quero alugar um apartamento.' }, { frase: 'Сколько стоит аренда?', traducao: 'Quanto custa o aluguel?' }, { frase: 'Квартира с мебелью / без мебели.', traducao: 'Apartamento mobiliado / sem móveis.' }, { frase: 'Коммунальные услуги входят в цену?', traducao: 'As taxas estão incluídas no preço?' }, { frase: 'Можно посмотреть квартиру завтра?', traducao: 'Posso ver o apartamento amanhã?' },
        ],
      }),
      dialogo(8, 'Снимаю квартиру / Alugo um apartamento', 'Igor procura um apartamento com a corretora Nina.', [
        ['Нина', 'Здравствуйте! Вы хотите снять квартиру?', 'Olá! O senhor quer alugar um apartamento?'], ['Игорь', 'Да. Мне нужна двухкомнатная квартира недалеко от метро.', 'Sim. Preciso de um apartamento de dois cômodos perto do metrô.'], ['Нина', 'У меня есть квартира на третьем этаже. В ней есть кухня, ванная и балкон.', 'Tenho um apartamento no terceiro andar. Tem cozinha, banheiro e varanda.'],
        ['Игорь', 'Сколько стоит аренда?', 'Quanto custa o aluguel?'], ['Нина', 'Тридцать пять тысяч рублей в месяц, с мебелью.', 'Trinta e cinco mil rublos por mês, mobiliado.'], ['Игорь', 'Коммунальные услуги входят в цену?', 'As taxas estão incluídas no preço?'],
        ['Нина', 'Нет, их надо платить отдельно.', 'Não, é preciso pagá-las à parte.'], ['Игорь', 'Можно посмотреть квартиру завтра?', 'Posso ver o apartamento amanhã?'], ['Нина', 'Конечно! Приходите в шесть часов.', 'Claro! Venha às seis horas.'],
      ]),
      producao(7, 'Simule em voz alta: pergunte o preço, se tem móveis, se as taxas estão incluídas e marque a visita.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre a sua casa.'),
      exercicios(20, [
        lacuna('Мы живём ___ пятом этаже.', ['на', 'в', 'к'], 'на', '«на этаже».'), lacuna('Кошка лежит ___ столом. (embaixo)', ['под', 'над', 'на'], 'под', '«под» + instrumental.'), lacuna('Картина висит над ___. (sofá)', ['диваном', 'диван', 'дивана'], 'диваном', '«над» + instrumental.'),
        lacuna('Лампа стоит ___ столе.', ['на', 'в', 'за'], 'на', '«на столе».'), lacuna('В комнате нет ___. (mesa)', ['стола', 'стол', 'столу'], 'стола', '«нет» + genitivo.'), lacuna('Я иду ___ кухню.', ['на', 'в', 'у'], 'на', 'Para onde? «на кухню».'),
        mc('«Рядом с кроватью» usa o:', ['instrumental', 'genitivo', 'prepositivo'], 'instrumental', '«с» + instrumental.'), mc('«Двухкомнатная квартира» tem:', ['dois cômodos', 'duas camas', 'dois andares'], 'dois cômodos', '«двух» = dois; «комнатная» = de cômodos.'), mc('«Sem móveis» é:', ['без мебели', 'с мебелью', 'мебель'], 'без мебели', '«без» + genitivo.'),
        ordem('Ordene: «Шкаф стоит между окном и дверью.»', ['Шкаф', 'стоит', 'между', 'окном', 'и', 'дверью'], 'Шкаф стоит между окном и дверью.', '«между» + instrumental.'), ouvir('Сколько стоит аренда', ['Сколько стоит аренда', 'Сколько стоит квартира', 'Где находится квартира'], 'Сколько стоит аренда', '«аренда» = aluguel.'), ditado('Квартира на третьем этаже', '«на» + prepositivo.'),
        livre('Escreva 5 frases sobre a sua casa: andar, cômodos, um móvel e onde está, e algo que não existe.', 'Я живу в квартире. Квартира на пятом этаже. В комнате стоит диван. Лампа стоит на столе. В квартире нет балкона.'),
      ]),
      producao(5, 'Grave-se mostrando a sua casa a um amigo.'),
    ]),
  ],
});
