import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 26, titulo: 'Comparar: comparativos e superlativos', nivel: 'a2',
  objetivo: 'Comparar duas coisas com -er e «more … than», dizer o maior ou o melhor com -est e «the most», e usar «as … as».',
  nota: 'Você compara cidades, pessoas e coisas. Próxima aula: quantidade e modais.',
  sessoes: [
    sessao('S1', 'Comparativos', [
      revisao(5, 'Diga uma decisão na hora, um plano e uma previsão sobre o fim de semana.'),
      palavras(8, [
        ['bigger', 'bíguer', 'maior', ''], ['smaller', 'smóler', 'menor', ''], ['cheaper', 'tchíper', 'mais barato', ''], ['more expensive', 'mór ikspénsiv', 'mais caro', ''], ['better', 'béter', 'melhor', ''], ['worse', 'uãrs', 'pior', ''], ['older', 'ôulder', 'mais velho', ''], ['than', 'dén', 'do que', ''],
      ]),
      gramatica(12, 'Comparativos', 'PASSO 1: adjetivo CURTO (1 sílaba) + -er + than: «tall → taller than», «cheap → cheaper than». PASSO 2: terminado em -e, só -r: «large → larger». PASSO 3: consoante-vogal-consoante dobra: «big → bigger», «hot → hotter». PASSO 4: terminado em -y troca por -ier: «easy → easier», «happy → happier». PASSO 5: adjetivo LONGO (2 ou mais sílabas, exceto -y): «more» + adjetivo + than: «more expensive than», «more interesting than». PASSO 6: irregulares: good → better, bad → worse, far → farther/further. PASSO 7: «than» é «do que»: «São Paulo is bigger than Curitiba.»', {
        tag: 'Comparativos',
        comparacao: 'em português «mais … do que» vale para todos: «mais alto», «mais caro». O inglês divide: curto leva -er, longo leva «more». Nunca os dois juntos.',
        tabela: [
          { regra: 'curto + -er', base: 'tall', comparativo: 'taller' }, { regra: 'dobra', base: 'big', comparativo: 'bigger' }, { regra: '-y → -ier', base: 'easy', comparativo: 'easier' }, { regra: 'longo: more', base: 'expensive', comparativo: 'more expensive' }, { regra: 'irregular', base: 'good', comparativo: 'better' },
        ],
        erros: [['more taller', 'taller', 'Não use -er e more juntos.'], ['She is taller that me.', 'She is taller than me.', '«than», não «that».'], ['more cheap', 'cheaper', 'Curto: -er.'], ['expensiver', 'more expensive', 'Longo: more.']],
      }),
      producao(5, 'Compare 6 pares: dois lugares, duas pessoas, dois objetos.'),
    ]),
    sessao('S2', 'Superlativos', [
      revisao(4, 'Dê o comparativo de: small, hot, easy, beautiful, good, bad.'),
      palavras(6, [
        ['the biggest', 'dâ bíguest', 'o maior', ''], ['the oldest', 'di ôuldest', 'o mais velho', ''], ['the best', 'dâ bést', 'o melhor', ''], ['the worst', 'dâ uãrst', 'o pior', ''], ['the most popular', 'dâ môust pópiular', 'o mais popular', ''], ['in the world', 'in dâ uãrld', 'no mundo', ''],
      ]),
      gramatica(12, 'Superlativos', 'PASSO 1: o superlativo diz o MAIOR, o MELHOR entre três ou mais, sempre com «the»: «the tallest», «the cheapest». PASSO 2: curto: the + adjetivo + -est: «the biggest», «the easiest». PASSO 3: longo: the most + adjetivo: «the most expensive», «the most interesting». PASSO 4: irregulares: the best, the worst, the farthest/furthest. PASSO 5: «in» com lugares e grupos: «the tallest in the class», «the biggest city in Brazil»; «of» com listas: «the best of all». PASSO 6: «one of the + superlativo + plural»: «She is one of the best teachers.»', {
        tag: 'Superlativos',
        comparacao: 'em português o superlativo leva «o mais» («o mais alto»). O inglês usa «the + -est» ou «the most». Não esqueça o «the».',
        tabela: [
          { regra: 'the + -est', base: 'tall', superlativo: 'the tallest' }, { regra: 'the + -est (dobra)', base: 'big', superlativo: 'the biggest' }, { regra: 'the most', base: 'expensive', superlativo: 'the most expensive' }, { regra: 'irregular', base: 'good', superlativo: 'the best' },
        ],
        erros: [['She is tallest in the class.', 'She is the tallest in the class.', 'Faltou «the».'], ['the most tallest', 'the tallest', 'Não use -est e most juntos.'], ['the biggest of Brazil', 'the biggest in Brazil', 'Lugar: in.'], ['one of the best teacher', 'one of the best teachers', 'Plural depois de «one of the».']],
      }),
      producao(8, 'Diga 6 frases com superlativos sobre o Brasil, a sua cidade e a sua família.'),
    ]),
    sessao('S3', 'As … as e comparações de igualdade', [
      revisao(4, 'Diga o superlativo de: cheap, old, interesting, good, large.'),
      palavras(5, [
        ['as tall as', 'éz tól éz', 'tão alto quanto', ''], ['not as … as', 'nót éz … éz', 'não tão … quanto', ''], ['the same as', 'dâ sêim éz', 'o mesmo que', ''], ['different from', 'difrent frâm', 'diferente de', ''], ['like', 'láik', 'como, parecido com', ''],
      ]),
      gramatica(8, 'Tão… quanto', 'PASSO 1: igualdade: «as + adjetivo + as»: «She is as tall as her brother.» PASSO 2: diferença leve: «not as + adjetivo + as»: «This bag isn\'t as expensive as that one.» PASSO 3: «the same as»: «My phone is the same as yours.» PASSO 4: «different from» (americano): «My life is different from yours.» PASSO 5: «like» = como, parecido: «He is like his father.»', {
        tag: 'Igualdade',
        comparacao: 'em português «tão alto quanto» usa «tão… quanto». Em inglês, o «as … as» envolve o adjetivo no meio.',
        tabela: [
          { portugues: 'tão caro quanto', ingles: 'as expensive as', nota: '' }, { portugues: 'não tão grande quanto', ingles: 'not as big as', nota: '' }, { portugues: 'o mesmo que', ingles: 'the same as', nota: '' }, { portugues: 'diferente de', ingles: 'different from', nota: 'EUA' },
        ],
        erros: [['as tall like me', 'as tall as me', 'as … as.'], ['the same like', 'the same as', 'the same as.'], ['different than (formal)', 'different from', 'Na escrita formal, from.']],
      }),
      texto(8, 'Two cities / Duas cidades', 'Rio and São Paulo are two of the biggest cities in Brazil. São Paulo is bigger than Rio, but Rio is more famous for its beaches. In São Paulo, life is faster and the traffic is worse. In Rio, the weather is hotter, and the people are as friendly as in any other city. My favorite city is Rio, because it is the most beautiful place I know. For work, São Paulo is better.',
        'Rio e São Paulo são duas das maiores cidades do Brasil. São Paulo é maior do que o Rio, mas o Rio é mais famoso pelas praias. Em São Paulo, a vida é mais rápida e o trânsito é pior. No Rio, o clima é mais quente, e as pessoas são tão simpáticas quanto em qualquer outra cidade. A minha cidade favorita é o Rio, porque é o lugar mais bonito que eu conheço. Para trabalhar, São Paulo é melhor.',
        [['Which city is bigger?', 'São Paulo.'], ['Where is the traffic worse?', 'In São Paulo.'], ['Which city is hotter?', 'Rio.'], ['Which city is better for work?', 'São Paulo.']]),
      producao(5, 'Escreva um texto de 6 frases comparando duas cidades ou dois lugares que você conhece.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 26', [
      revisao(5, 'Compare 3 pares de coisas e diga o melhor e o pior de cada grupo.'),
      exercicios(20, [
        ouvir('This bag is cheaper than that one', ['This bag is cheaper than that one', 'This bag is cheap as that one', 'This bag is the cheapest'], 'This bag is cheaper than that one', 'Ouça «cheaper than».'), ouvir('She is the tallest in the class', ['She is the tallest in the class', 'She is taller in the class', 'She is the taller in the class'], 'She is the tallest in the class', 'Ouça «the tallest».'), ditado('This is the best day of my life', 'Escreva: this is the best day of my life.'), ditado('He is as tall as his father', 'Escreva: he is as tall as his father.'),
        mc('Qual é o comparativo de «big»?', ['bigger', 'more big', 'biger'], 'bigger', 'Dobra o g.'), mc('Qual é o comparativo de «expensive»?', ['more expensive', 'expensiver', 'most expensive'], 'more expensive', 'Longo: more.'), mc('Qual frase está correta?', ['She is the tallest in the class.', 'She is tallest of the class.', 'She is the most tall in the class.'], 'She is the tallest in the class.', 'the + -est + in.'), mc('Qual é o superlativo de «good»?', ['the best', 'the goodest', 'the most good'], 'the best', 'Irregular.'),
        lacuna('He is ___ than me. (mais alto)', ['taller', 'tallest', 'more tall'], 'taller', 'Curto: -er.'), lacuna('This is ___ expensive bag. (a mais cara)', ['the most', 'the more', 'most'], 'the most', 'Longo: the most.'), lacuna('She is as tall ___ me.', ['as', 'than', 'like'], 'as', 'as … as.'), lacuna('It is bigger ___ that one. (do que)', ['than', 'that', 'as'], 'than', '«than» = do que.'),
        ordem('Ordene: «My house is bigger than yours.»', ['My', 'house', 'is', 'bigger', 'than', 'yours'], 'My house is bigger than yours.', 'adjetivo-er + than.'), ordem('Ordene: «She is the best teacher in the school.»', ['She', 'is', 'the', 'best', 'teacher', 'in', 'the', 'school'], 'She is the best teacher in the school.', 'the best + nome + in.'),
        livre('Escreva 4 frases: um comparativo, um superlativo, um «as … as» e um «the same as».', 'My apartment is smaller than yours. This is the biggest city in Brazil. He is as tall as his father. My phone is the same as yours.'),
      ]),
      producao(5, 'Fale 1 minuto comparando duas pessoas que você conhece.'),
    ]),
  ],
});
