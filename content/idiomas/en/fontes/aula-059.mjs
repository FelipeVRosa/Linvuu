import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 59, titulo: 'Meio ambiente, sociedade e notícias', nivel: 'b1',
  objetivo: 'Falar de problemas ambientais e sociais, propor soluções e discutir causas e consequências com vocabulário preciso.',
  nota: 'Você discute temas do mundo com argumentos. Próxima aula: expressões, collocations e formação de palavras.',
  sessoes: [
    sessao('S1', 'Problemas ambientais', [
      revisao(5, 'Fale 1 minuto sobre como você usa a tecnologia e como gostaria de usá-la.'),
      palavras(8, [
        ['environment', 'inváironmnt', 'meio ambiente', ''], ['pollution', 'poluuchn', 'poluição', ''], ['climate change', 'kláimit tchêindj', 'mudança climática', ''], ['recycle', 'rissáikl', 'reciclar', ''], ['waste', 'uêist', 'lixo, desperdício', ''], ['energy', 'énardji', 'energia', ''], ['renewable', 'riniuuabl', 'renovável', ''], ['global warming', 'glôubl uórmin', 'aquecimento global', ''],
      ]),
      gramatica(12, 'Causas, efeitos e soluções', 'PASSO 1: use «cause» e «lead to» para causa e efeito: «Pollution causes health problems.» «Too much traffic leads to pollution.» PASSO 2: use «result in» para o resultado: «Deforestation results in loss of animals.» PASSO 3: use «because of / due to» para a causa: «Due to climate change, summers are hotter.» PASSO 4: proponha soluções com «should» e «could»: «We should use less plastic.» «Governments could invest in renewable energy.» PASSO 5: use o primeiro condicional para consequências: «If we don\'t recycle, the waste will grow.» PASSO 6: use a passiva para problemas gerais: «Millions of trees are cut down every year.»', {
        tag: 'Causa e solução',
        comparacao: 'em português dizemos «isso leva a» e «resulta em». Em inglês, «lead to» e «result in» funcionam do mesmo modo, mas «cause» não leva preposição.',
        tabela: [
          { funcao: 'causa', frase: 'Pollution causes health problems.' }, { funcao: 'efeito', frase: 'Traffic leads to pollution.' }, { funcao: 'resultado', frase: 'It results in loss of animals.' }, { funcao: 'solução', frase: 'We should use less plastic.' }, { funcao: 'consequência', frase: 'If we don\'t recycle, waste will grow.' },
        ],
        erros: [['Pollution causes to health problems.', 'Pollution causes health problems.', 'cause sem «to».'], ['It leads in pollution.', 'It leads to pollution.', 'lead to.'], ['If we don\'t recycle, the waste would grow.', 'If we don\'t recycle, the waste will grow.', 'Primeiro condicional.'], ['We should to use less plastic.', 'We should use less plastic.', 'should + verbo base.']],
      }),
      producao(5, 'Escreva 5 frases sobre um problema ambiental da sua cidade e sua solução.'),
    ]),
    sessao('S2', 'Problemas sociais', [
      revisao(4, 'Corrija: «Pollution causes to health problems.» e «It leads in pollution.»'),
      palavras(6, [
        ['society', 'sassáiati', 'sociedade', ''], ['poverty', 'póvarti', 'pobreza', ''], ['unemployment', 'ânimplóimnt', 'desemprego', ''], ['education', 'edjukêichn', 'educação', ''], ['equality', 'ikuóliti', 'igualdade', ''], ['volunteer', 'volantíir', 'voluntário / fazer voluntariado', ''],
      ]),
      gramatica(12, 'Opinar sobre a sociedade', 'PASSO 1: use «should» para dizer o que é certo: «The government should invest in education.» PASSO 2: use «ought to» (mais formal): «We ought to help people in need.» PASSO 3: use o segundo condicional para ideias: «If I were the mayor, I would build more parks.» PASSO 4: use a passiva: «Many jobs have been lost.» PASSO 5: use «the + adjetivo» para grupos: «the poor», «the young», «the elderly». PASSO 6: use «more and more» e «fewer and fewer» para tendências: «More and more people work from home.» PASSO 7: sempre justifique com «because» ou «for example».', {
        tag: 'Sociedade',
        comparacao: 'em português dizemos «os pobres», «os idosos». Em inglês, «the poor» e «the elderly» usam «the + adjetivo», sempre no plural, sem «s».',
        tabela: [
          { estrutura: 'the + adjetivo', exemplo: 'the poor, the elderly, the young' }, { estrutura: 'more and more', exemplo: 'More and more people work from home.' }, { estrutura: 'should', exemplo: 'The government should invest in education.' }, { estrutura: 'If I were…', exemplo: 'If I were the mayor, I would build parks.' },
        ],
        erros: [['The poors need help.', 'The poor need help.', 'the poor, sem «s» e plural.'], ['If I was the mayor, I will build parks.', 'If I were the mayor, I would build parks.', 'Segundo condicional.'], ['More people and more people work here.', 'More and more people work here.', 'More and more.'], ['The government should to invest.', 'The government should invest.', 'should + verbo base.']],
      }),
      producao(8, 'Diga 6 coisas que o governo e a sociedade deveriam fazer, com «should» e «If I were…».'),
    ]),
    sessao('S3', 'Debater e ler notícias', [
      revisao(4, 'Complete: «The ___ need help. If I ___ the mayor, I ___ build parks.»'),
      palavras(5, [
        ['law', 'lóo', 'lei', ''], ['government', 'gâvarnmnt', 'governo', ''], ['citizen', 'sítizn', 'cidadão', ''], ['community', 'comiuniti', 'comunidade', ''], ['campaign', 'kampêin', 'campanha', ''],
      ]),
      gramatica(8, 'Falar de ações coletivas', 'PASSO 1: «We need to + verbo» para urgência: «We need to act now.» PASSO 2: «Everyone can + verbo» para convidar: «Everyone can help.» PASSO 3: use «by + -ing» para o meio: «We can save energy by turning off lights.» PASSO 4: «in order to + verbo» para finalidade: «Many people cycle in order to reduce pollution.» PASSO 5: conclua com «Together, we can…».', {
        tag: 'Ação coletiva',
        comparacao: 'em português dizemos «economizamos energia apagando as luzes». Em inglês, «by + -ing»: «by turning off lights».',
        tabela: [
          { estrutura: 'by + -ing', exemplo: 'We save energy by turning off lights.' }, { estrutura: 'in order to', exemplo: 'We cycle in order to reduce pollution.' }, { estrutura: 'We need to', exemplo: 'We need to act now.' },
        ],
        erros: [['We save energy by turn off lights.', 'We save energy by turning off lights.', 'by + -ing.'], ['We cycle for reduce pollution.', 'We cycle to reduce pollution.', 'to / in order to + verbo.']],
      }),
      texto(8, 'Our city needs change / Nossa cidade precisa mudar', 'Our city has a serious problem: traffic. Because of the large number of cars, the air is dirty and people are often late. It is said that pollution leads to health problems, especially for the elderly. If we don\'t act, the situation will get worse. In my opinion, the government should invest in public transport. If I were the mayor, I would build more bike lanes. We can also help by using the bus or walking in order to reduce pollution. Together, we can make our city better.',
        'Nossa cidade tem um problema sério: o trânsito. Por causa do grande número de carros, o ar é sujo e as pessoas muitas vezes se atrasam. Dizem que a poluição leva a problemas de saúde, especialmente para os idosos. Se não agirmos, a situação vai piorar. Na minha opinião, o governo deveria investir em transporte público. Se eu fosse o prefeito, construiria mais ciclovias. Também podemos ajudar usando o ônibus ou andando a pé para reduzir a poluição. Juntos, podemos melhorar nossa cidade.',
        [['What is the problem?', 'Traffic.'], ['Who is affected especially?', 'The elderly.'], ['What should the government do?', 'Invest in public transport.'], ['What would the mayor build?', 'More bike lanes.']]),
      producao(5, 'Escreva um texto de 6 frases sobre um problema da sua cidade e como resolvê-lo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 59', [
      revisao(5, 'Debata em voz alta um problema ambiental e uma solução.'),
      exercicios(20, [
        ouvir('Pollution causes health problems', ['Pollution causes health problems', 'Pollution causes to health problems', 'Pollution cause health problems'], 'Pollution causes health problems', 'Ouça «causes».'), ouvir('If I were the mayor, I would build parks', ['If I were the mayor, I would build parks', 'If I was the mayor, I will build parks', 'If I am the mayor, I would build parks'], 'If I were the mayor, I would build parks', 'Ouça «were».'), ditado('We save energy by turning off lights', 'Escreva: we save energy by turning off lights.'), ditado('The government should invest in education', 'Escreva: the government should invest in education.'),
        mc('Qual frase está correta?', ['Traffic leads to pollution.', 'Traffic leads in pollution.', 'Traffic leads at pollution.'], 'Traffic leads to pollution.', 'lead to.'), mc('Como dizer «os idosos»?', ['the elderly', 'the elderlies', 'elderlies'], 'the elderly', 'the + adjetivo.'), mc('Qual frase está correta?', ['We cycle in order to reduce pollution.', 'We cycle in order reduce pollution.', 'We cycle for reduce pollution.'], 'We cycle in order to reduce pollution.', 'in order to.'), mc('Qual frase está correta?', ['If we don\'t recycle, waste will grow.', 'If we don\'t recycle, waste would grow.', 'If we won\'t recycle, waste grows.'], 'If we don\'t recycle, waste will grow.', 'Primeiro condicional.'),
        lacuna('Pollution ___ health problems. (causa)', ['causes', 'causes to', 'causes of'], 'causes', 'cause + objeto.'), lacuna('We save energy ___ turning off lights.', ['by', 'for', 'with'], 'by', 'by + -ing.'), lacuna('The ___ need help. (os pobres)', ['poor', 'poors', 'poorly'], 'poor', 'the + adjetivo.'), lacuna('If I ___ the mayor, I would build parks.', ['were', 'was', 'am'], 'were', 'Segundo condicional.'),
        ordem('Ordene: «More and more people work from home.»', ['More', 'and', 'more', 'people', 'work', 'from', 'home'], 'More and more people work from home.', 'More and more.'), ordem('Ordene: «The government should invest in education.»', ['The', 'government', 'should', 'invest', 'in', 'education'], 'The government should invest in education.', 'should + verbo base.'),
        livre('Escreva 4 frases: uma com cause/lead to, uma com should, uma com by + -ing e uma com If I were…', 'Traffic leads to pollution. We should use less plastic. We save energy by turning off lights. If I were the mayor, I would build parks.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma mudança que você gostaria de ver na sua comunidade.'),
    ]),
  ],
});
