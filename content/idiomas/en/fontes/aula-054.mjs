import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 54, titulo: 'Conectores: contraste, causa e consequência', nivel: 'b1',
  objetivo: 'Ligar ideias com «although», «however», «despite», «because of», «so» e «therefore», escolhendo a estrutura gramatical correta para cada conector.',
  nota: 'Você liga ideias e argumenta com clareza. Próxima aula: opinião, concordar e discordar.',
  sessoes: [
    sessao('S1', 'Contraste', [
      revisao(5, 'Descreva um lugar com so, such, too e enough.'),
      palavras(8, [
        ['although', 'oldôu', 'embora', ''], ['however', 'rauévar', 'porém, no entanto', ''], ['despite', 'dispáit', 'apesar de', ''], ['in spite of', 'in spáit óv', 'apesar de', ''], ['but', 'bât', 'mas', ''], ['while', 'uáil', 'enquanto, ao passo que', ''], ['whereas', 'uéaréz', 'ao passo que', ''], ['even though', 'ívn dôu', 'mesmo que, embora', ''],
      ]),
      gramatica(12, 'Although, however, despite', 'PASSO 1: «but» liga duas orações no MEIO: «It was cold, but we went out.» PASSO 2: «although / even though» + SUJEITO + VERBO: «Although it was cold, we went out.» PASSO 3: «despite / in spite of» + SUBSTANTIVO ou -ING: «Despite the cold, we went out.» «Despite being tired, she worked.» PASSO 4: «however» começa uma NOVA frase, com vírgula depois: «It was cold. However, we went out.» PASSO 5: não use «but» junto com «although»: «Although it was cold, but we went out» está errado. PASSO 6: «while / whereas» comparam: «I like tea, while she likes coffee.» PASSO 7: «even though» é mais forte que «although».', {
        tag: 'Contraste',
        comparacao: 'em português «embora» pede subjuntivo («embora esteja frio»), mas em inglês «although» pede o verbo no tempo normal: «although it is cold».',
        tabela: [
          { conector: 'but', estrutura: 'oração, but + oração', exemplo: 'It was cold, but we went out.' }, { conector: 'although', estrutura: 'although + sujeito + verbo', exemplo: 'Although it was cold, we went out.' }, { conector: 'despite', estrutura: 'despite + substantivo / -ing', exemplo: 'Despite the cold, we went out.' }, { conector: 'however', estrutura: 'Frase. However, frase.', exemplo: 'It was cold. However, we went out.' },
        ],
        erros: [['Despite it was cold, we went out.', 'Although it was cold, we went out. / Despite the cold, we went out.', 'despite + substantivo, não oração.'], ['Although it was cold, but we went out.', 'Although it was cold, we went out.', 'Não use although e but juntos.'], ['It was cold, however we went out.', 'It was cold. However, we went out.', 'however começa frase nova.'], ['Despite of the rain, we played.', 'Despite the rain, we played. / In spite of the rain, ...', 'despite não leva «of».']],
      }),
      producao(5, 'Una 5 pares de ideias contrastantes com although, despite, however e while.'),
    ]),
    sessao('S2', 'Causa e consequência', [
      revisao(4, 'Complete: «___ it rained, we played. ___ the rain, we played.»'),
      palavras(6, [
        ['because', 'bicóz', 'porque', ''], ['because of', 'bicóz óv', 'por causa de', ''], ['since', 'sins', 'já que', ''], ['as', 'éz', 'como, já que', ''], ['so', 'sôu', 'então', ''], ['therefore', 'dérfór', 'portanto', ''], ['as a result', 'éz a rizâlt', 'como resultado', ''], ['consequently', 'cónsikuentli', 'consequentemente', ''],
      ]),
      gramatica(12, 'Because, because of, so, therefore', 'PASSO 1: «because» + SUJEITO + VERBO: «We stayed home because it rained.» PASSO 2: «because of» + SUBSTANTIVO: «We stayed home because of the rain.» PASSO 3: «since / as» no início explicam o motivo: «Since it was late, we left.» PASSO 4: «so» = então (consequência), no meio: «It was late, so we left.» PASSO 5: «therefore / as a result / consequently» começam nova frase, mais formal: «It was late. Therefore, we left.» PASSO 6: não use «because» e «so» na mesma frase: «Because it was late, so we left» está errado. PASSO 7: use «because of» também com pronome: «because of him».', {
        tag: 'Causa e consequência',
        comparacao: 'em português «porque» e «por causa de» têm a mesma divisão: porque + oração, por causa de + substantivo. Em inglês: because + oração, because of + substantivo.',
        tabela: [
          { causa: 'because + oração', exemplo: 'We stayed because it rained.' }, { causa: 'because of + substantivo', exemplo: 'We stayed because of the rain.' }, { causa: 'since / as + oração', exemplo: 'Since it was late, we left.' }, { causa: 'so (consequência)', exemplo: 'It was late, so we left.' }, { causa: 'therefore, ...', exemplo: 'It was late. Therefore, we left.' },
        ],
        erros: [['Because the rain, we stayed.', 'Because of the rain, we stayed.', 'because of + substantivo.'], ['Because of it rained, we stayed.', 'Because it rained, we stayed.', 'because + oração.'], ['Because it was late, so we left.', 'Because it was late, we left. / It was late, so we left.', 'Não use os dois.'], ['I was tired, therefore I slept.', 'I was tired. Therefore, I slept. / I was tired, so I slept.', 'therefore começa frase.']],
      }),
      producao(8, 'Explique 6 coisas do seu dia com «because», «because of», «so» e «therefore».'),
    ]),
    sessao('S3', 'Argumentar por escrito', [
      revisao(4, 'Una: «Estava cansado. Dormi.» de 3 formas: because, so e therefore.'),
      palavras(5, [
        ['firstly', 'fârstli', 'primeiramente', ''], ['in addition', 'in adíchn', 'além disso', ''], ['moreover', 'morôuvar', 'além do mais', ''], ['on the other hand', 'ón di âdar rénd', 'por outro lado', ''], ['in conclusion', 'in conklúujn', 'em conclusão', ''],
      ]),
      gramatica(8, 'Organizar o texto', 'PASSO 1: comece com «Firstly, …» e continue com «In addition, …» ou «Moreover, …». PASSO 2: contraste com «On the other hand, …» ou «However, …». PASSO 3: conclua com «In conclusion, …» ou «To sum up, …». PASSO 4: sempre coloque vírgula depois do conector. PASSO 5: varie os conectores; não repita «and» e «but» o texto todo.', {
        tag: 'Texto organizado',
        comparacao: 'em português usamos «além disso», «por outro lado» e «em conclusão» com a mesma função e pontuação.',
        tabela: [
          { funcao: 'iniciar', conector: 'Firstly, ...' }, { funcao: 'adicionar', conector: 'In addition, ... / Moreover, ...' }, { funcao: 'contrastar', conector: 'However, ... / On the other hand, ...' }, { funcao: 'concluir', conector: 'In conclusion, ... / To sum up, ...' },
        ],
        erros: [['In conclusion I think so.', 'In conclusion, I think so.', 'Vírgula depois do conector.'], ['Moreover it is cheap, and also fast.', 'Moreover, it is cheap. It is also fast.', 'Conectores iniciam frases.']],
      }),
      texto(8, 'Working from home / Trabalhar de casa', 'Working from home has many advantages. Firstly, you save time because you don\'t travel to the office. In addition, you can organize your day as you want. However, there are some problems. Despite having more freedom, many people feel lonely. On the other hand, in an office you meet people every day. In conclusion, although working from home is comfortable, it isn\'t perfect for everyone.',
        'Trabalhar em casa tem muitas vantagens. Primeiramente, você economiza tempo porque não se desloca ao escritório. Além disso, pode organizar o dia como quiser. No entanto, há alguns problemas. Apesar de ter mais liberdade, muitas pessoas se sentem sozinhas. Por outro lado, em um escritório você encontra pessoas todos os dias. Em conclusão, embora trabalhar em casa seja confortável, não é perfeito para todos.',
        [['Why do you save time?', 'Because you don\'t travel to the office.'], ['What problem is mentioned?', 'Many people feel lonely.'], ['What connector introduces the conclusion?', 'In conclusion.'], ['Is it perfect for everyone?', 'No.']]),
      producao(5, 'Escreva um texto de 6 frases sobre estudar online, com 4 conectores diferentes.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 54', [
      revisao(5, 'Fale 1 minuto sobre vantagens e desvantagens de morar em uma cidade grande, com conectores.'),
      exercicios(20, [
        ouvir('Although it was cold, we went out', ['Although it was cold, we went out', 'Despite it was cold, we went out', 'Although the cold, we went out'], 'Although it was cold, we went out', 'Ouça «although».'), ouvir('We stayed because of the rain', ['We stayed because of the rain', 'We stayed because the rain', 'We stayed because of it rained'], 'We stayed because of the rain', 'Ouça «because of».'), ditado('Despite the rain, we played', 'Escreva: despite the rain, we played.'), ditado('It was late, so we left', 'Escreva: it was late, so we left.'),
        mc('Qual frase está correta?', ['Despite the rain, we played.', 'Despite it rained, we played.', 'Despite of the rain, we played.'], 'Despite the rain, we played.', 'despite + substantivo.'), mc('Qual frase está correta?', ['Although it rained, we played.', 'Although it rained, but we played.', 'Although the rain, we played.'], 'Although it rained, we played.', 'although + oração, sem but.'), mc('Qual frase está correta?', ['It was late. However, we stayed.', 'It was late, however we stayed.', 'It was late however, we stayed.'], 'It was late. However, we stayed.', 'However começa frase nova.'), mc('Qual conector indica consequência?', ['therefore', 'although', 'despite'], 'therefore', 'Consequência.'),
        lacuna('We stayed home ___ the rain. (por causa de)', ['because of', 'because', 'so'], 'because of', 'because of + substantivo.'), lacuna('We stayed home ___ it rained. (porque)', ['because', 'because of', 'despite'], 'because', 'because + oração.'), lacuna('It was late, ___ we left. (então)', ['so', 'because', 'although'], 'so', 'so = então.'), lacuna('___ being tired, she worked. (apesar de)', ['Despite', 'Although', 'Because'], 'Despite', 'despite + -ing.'),
        ordem('Ordene: «Although it was late, we kept working.»', ['Although', 'it', 'was', 'late,', 'we', 'kept', 'working'], 'Although it was late, we kept working.', 'although + sujeito + verbo.'), ordem('Ordene: «Because of the traffic, I was late.»', ['Because', 'of', 'the', 'traffic,', 'I', 'was', 'late'], 'Because of the traffic, I was late.', 'because of + substantivo.'),
        livre('Escreva 4 frases: uma com although, uma com despite, uma com because of e uma com therefore.', 'Although it was cold, we went out. Despite the rain, we played. We stayed because of the rain. It was late. Therefore, we left.'),
      ]),
      producao(5, 'Fale 1 minuto defendendo uma ideia com firstly, in addition, however e in conclusion.'),
    ]),
  ],
});
