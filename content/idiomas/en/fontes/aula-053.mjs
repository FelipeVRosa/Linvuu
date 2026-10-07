import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 53, titulo: 'So, such, too, enough e quantificadores', nivel: 'b1',
  objetivo: 'Intensificar com «so» e «such», e expressar excesso e suficiência com «too» e «enough», além de usar quantificadores como «a few», «a little», «plenty of» e «a lot of».',
  nota: 'Você gradua intensidade e quantidade com precisão. Próxima aula: conectores de contraste e causa.',
  sessoes: [
    sessao('S1', 'So e such', [
      revisao(5, 'Fale do que você terá feito até o fim do ano e do que estará fazendo amanhã às 8h.'),
      palavras(8, [
        ['so', 'sôu', 'tão', ''], ['such', 'sâtch', 'tão, um tal', ''], ['amazing', 'améizin', 'incrível', ''], ['huge', 'riuudj', 'enorme', ''], ['quickly', 'cuíkli', 'rapidamente', ''], ['suddenly', 'sâdnli', 'de repente', ''], ['surprised', 'sarpráizd', 'surpreso', ''], ['unforgettable', 'ânforgétabl', 'inesquecível', ''],
      ]),
      gramatica(12, 'So + adjetivo, such + (a) + substantivo', 'PASSO 1: «so» vem antes de ADJETIVO ou ADVÉRBIO: «The film was so good.» «She speaks so fast.» PASSO 2: «such» vem antes de SUBSTANTIVO (com ou sem adjetivo): «It was such a good film.» PASSO 3: com singular contável: «such a/an + (adjetivo) + substantivo»: «such a long day.» PASSO 4: com plural ou incontável, sem artigo: «such good friends», «such good weather». PASSO 5: resultado com «that»: «It was so cold that we stayed home.» «It was such a cold day that we stayed home.» PASSO 6: «so much / so many» + substantivo: «so much noise», «so many people». PASSO 7: em português «tão» serve para os dois casos; em inglês você escolhe pela classe da palavra seguinte.', {
        tag: 'Intensificação',
        comparacao: 'em português dizemos «tão bom» e «um dia tão longo» com a mesma palavra «tão». Em inglês: «so good», mas «such a long day».',
        tabela: [
          { regra: 'so + adjetivo', exemplo: 'The film was so good.' }, { regra: 'so + advérbio', exemplo: 'He drives so fast.' }, { regra: 'such a + adj + substantivo', exemplo: 'It was such a good film.' }, { regra: 'such + adj + plural', exemplo: 'They are such nice people.' }, { regra: 'so much / so many', exemplo: 'so many people' },
        ],
        erros: [['It was so a good film.', 'It was such a good film. / The film was so good.', 'so não vai antes de «a + substantivo».'], ['She is such nice.', 'She is so nice.', 'such precisa de substantivo.'], ['They are such a nice people.', 'They are such nice people.', 'Plural sem artigo.'], ['It was so cold day.', 'It was such a cold day.', 'Com substantivo: such a.']],
      }),
      producao(5, 'Descreva 5 coisas do seu dia usando «so» e «such»: o trânsito, o tempo, uma refeição.'),
    ]),
    sessao('S2', 'Too e enough', [
      revisao(4, 'Complete: «It was ___ cold day. The soup was ___ hot. They are ___ nice people.»'),
      palavras(6, [
        ['too', 'tuu', 'demais', ''], ['enough', 'inâf', 'suficiente', ''], ['expensive', 'ikspénsiv', 'caro', ''], ['heavy', 'révi', 'pesado', ''], ['strong', 'strôn', 'forte', ''], ['old enough', 'ôuld inâf', 'velho o bastante', ''],
      ]),
      gramatica(12, 'Too + adjetivo, adjetivo + enough', 'PASSO 1: «too» = demais (problema): «It\'s too expensive.» PASSO 2: «too» vem ANTES do adjetivo: «too heavy», «too late». PASSO 3: «enough» = suficiente. Com adjetivo, vem DEPOIS: «She is old enough.» PASSO 4: com substantivo, vem ANTES: «We have enough time.» PASSO 5: negativa: «not + adjetivo + enough» = insuficiente: «It\'s not big enough.» PASSO 6: com infinitivo: «too tired to drive», «strong enough to lift it.» PASSO 7: «too much» + incontável, «too many» + contável: «too much noise», «too many cars». PASSO 8: não diga «very enough» nem «too much expensive».', {
        tag: 'Excesso e suficiência',
        comparacao: 'em português «demais» vem depois («caro demais»); em inglês «too» vem antes: «too expensive». E «enough» vem depois do adjetivo: «grande o bastante», «big enough».',
        tabela: [
          { regra: 'too + adjetivo', exemplo: 'too expensive' }, { regra: 'adjetivo + enough', exemplo: 'big enough' }, { regra: 'enough + substantivo', exemplo: 'enough money' }, { regra: 'too + adj + to + verbo', exemplo: 'too tired to drive' }, { regra: 'adj + enough + to + verbo', exemplo: 'strong enough to lift' },
        ],
        erros: [['It is enough big.', 'It is big enough.', 'enough depois do adjetivo.'], ['It is too much expensive.', 'It is too expensive.', 'Sem «much» antes de adjetivo.'], ['We have time enough.', 'We have enough time.', 'enough antes do substantivo.'], ['He is too tired for drive.', 'He is too tired to drive.', 'to + verbo.']],
      }),
      producao(8, 'Diga 8 frases sobre limites: o que é caro demais, longe demais, e o que é bom o bastante para você.'),
    ]),
    sessao('S3', 'Quantificadores', [
      revisao(4, 'Reescreva: «A casa é pequena demais.» e «Ele tem idade suficiente.»'),
      palavras(5, [
        ['a few', 'a fiu', 'alguns', ''], ['a little', 'a lítl', 'um pouco', ''], ['plenty of', 'plénti óv', 'bastante', ''], ['a lot of', 'a lót óv', 'muito', ''], ['several', 'sévral', 'vários', ''],
      ]),
      gramatica(8, 'A few, a little, few, little', 'PASSO 1: «a few» + contável plural (alguns, o suficiente): «a few friends.» PASSO 2: «a little» + incontável (um pouco): «a little time.» PASSO 3: sem «a», o sentido é NEGATIVO: «few friends» (quase nenhum), «little time» (pouquíssimo). PASSO 4: «plenty of» e «a lot of» servem para os dois: «plenty of time», «a lot of people». PASSO 5: «several» + plural: vários. PASSO 6: «much» e «many» aparecem em negativas e perguntas: «How much money?» «There aren\'t many.»', {
        tag: 'Quantificadores',
        comparacao: 'em português «poucos amigos» e «alguns amigos» mudam o tom. Em inglês, a presença do «a» faz essa diferença: «a few friends» (positivo) × «few friends» (quase nenhum).',
        tabela: [
          { forma: 'a few + plural', exemplo: 'I have a few friends here.', sentido: 'alguns (positivo)' }, { forma: 'few + plural', exemplo: 'I have few friends here.', sentido: 'quase nenhum' }, { forma: 'a little + incontável', exemplo: 'We have a little time.', sentido: 'um pouco' }, { forma: 'little + incontável', exemplo: 'We have little time.', sentido: 'quase nenhum' },
        ],
        erros: [['I have a few money.', 'I have a little money.', 'money é incontável.'], ['She has a little friends.', 'She has a few friends.', 'friends é contável.'], ['We have many time.', 'We have a lot of time. / much time.', 'time é incontável.']],
      }),
      dialogo(8, 'Planning a trip / Planejando a viagem', 'Sarah e Tom planejam uma viagem.', [
        ['Sarah', 'Tom, do we have enough money for the trip?', 'Tom, temos dinheiro suficiente para a viagem?'], ['Tom', 'A little, but the hotel is too expensive.', 'Um pouco, mas o hotel é caro demais.'], ['Sarah', 'It\'s such a nice hotel, though. And the beach is so close!', 'É um hotel tão bom, porém. E a praia é tão perto!'], ['Tom', 'True. But there are so many tourists in July.', 'Verdade. Mas há tantos turistas em julho.'], ['Sarah', 'We can go in September. There are few people and plenty of rooms.', 'Podemos ir em setembro. Há poucas pessoas e bastante quartos.'], ['Tom', 'Good idea. I\'m not rich enough for July!', 'Boa ideia. Eu não sou rico o bastante para julho!'],
      ]),
      producao(5, 'Escreva 5 frases sobre sua cidade com «a few», «a little», «plenty of» e «too many».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 53', [
      revisao(5, 'Descreva sua cidade usando so, such, too e enough.'),
      exercicios(20, [
        ouvir('It was such a good film', ['It was such a good film', 'It was so a good film', 'It was such good a film'], 'It was such a good film', 'Ouça «such a».'), ouvir('She is old enough', ['She is old enough', 'She is enough old', 'She is too old'], 'She is old enough', 'Ouça «enough».'), ditado('It is too expensive', 'Escreva: it is too expensive.'), ditado('We have a little time', 'Escreva: we have a little time.'),
        mc('Qual frase está correta?', ['The film was so good.', 'The film was such good.', 'The film was so a good.'], 'The film was so good.', 'so + adjetivo.'), mc('Qual frase está correta?', ['It was such a long day.', 'It was so a long day.', 'It was such long day.'], 'It was such a long day.', 'such a + adj + substantivo.'), mc('Qual frase está correta?', ['It is big enough.', 'It is enough big.', 'It is too enough big.'], 'It is big enough.', 'adjetivo + enough.'), mc('Qual frase indica quase nenhum?', ['I have few friends.', 'I have a few friends.', 'I have some friends.'], 'I have few friends.', 'few sem «a».'),
        lacuna('She speaks ___ fast. (tão)', ['so', 'such', 'too much'], 'so', 'so + advérbio.'), lacuna('They are ___ nice people. (tão)', ['such', 'so', 'too'], 'such', 'such + adj + plural.'), lacuna('We have ___ time. (suficiente)', ['enough', 'too', 'such'], 'enough', 'enough + substantivo.'), lacuna('There are ___ cars here. (carros demais)', ['too many', 'too much', 'so much'], 'too many', 'many com contável.'),
        ordem('Ordene: «It is too heavy to carry.»', ['It', 'is', 'too', 'heavy', 'to', 'carry'], 'It is too heavy to carry.', 'too + adj + to.'), ordem('Ordene: «She is strong enough to lift it.»', ['She', 'is', 'strong', 'enough', 'to', 'lift', 'it'], 'She is strong enough to lift it.', 'adj + enough + to.'),
        livre('Escreva 4 frases: uma com so, uma com such a, uma com too e uma com enough.', 'It was so good. It was such a good day. It is too expensive. She is old enough.'),
      ]),
      producao(5, 'Fale 1 minuto descrevendo uma viagem usando so, such, too e enough.'),
    ]),
  ],
});
