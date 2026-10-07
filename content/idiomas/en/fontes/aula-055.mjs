import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 55, titulo: 'Opinião: concordar, discordar e argumentar', nivel: 'b1',
  objetivo: 'Dar opinião, concordar, discordar com educação e defender uma ideia com razões e exemplos.',
  nota: 'Você sustenta uma opinião em uma conversa. Próxima aula: e-mails formais e informais.',
  sessoes: [
    sessao('S1', 'Dar opinião', [
      revisao(5, 'Use «although», «despite» e «because of» para falar de um problema da sua cidade.'),
      palavras(8, [
        ['in my opinion', 'in mái ópinhn', 'na minha opinião', ''], ['I think', 'ái think', 'eu acho', ''], ['I believe', 'ái biliiv', 'eu acredito', ''], ['as far as I\'m concerned', 'éz fár éz áim consârnd', 'no que me diz respeito', ''], ['it seems to me', 'it siimz tu mi', 'me parece que', ''], ['personally', 'pârsnali', 'pessoalmente', ''], ['I\'m convinced', 'áim convínst', 'tenho certeza', ''], ['from my point of view', 'frâm mái póint óv viu', 'do meu ponto de vista', ''],
      ]),
      gramatica(12, 'Expressar opinião com clareza', 'PASSO 1: comece com «I think / I believe / In my opinion» + frase completa: «I think this is a good idea.» PASSO 2: em inglês, para a negativa de opinião, negue o verbo de opinião: «I don\'t think it\'s a good idea» (e não «I think it isn\'t»). PASSO 3: suavize com «I\'d say», «It seems to me», «Personally»: «Personally, I prefer the city.» PASSO 4: apoie a opinião com um motivo: «because», «for example», «for instance». PASSO 5: «I think so / I don\'t think so» respondem sem repetir a frase. PASSO 6: evite «I am agree»; o verbo é «agree» sem «be».', {
        tag: 'Opinião',
        comparacao: 'em português dizemos «acho que não é boa ideia»; em inglês é mais natural «I don\'t think it\'s a good idea», negando o verbo «think».',
        tabela: [
          { funcao: 'opinar', frase: 'In my opinion, it\'s a good idea.' }, { funcao: 'suavizar', frase: 'Personally, I prefer the city.' }, { funcao: 'dar razão', frase: 'For example, it\'s cheaper.' }, { funcao: 'responder', frase: 'I think so. / I don\'t think so.' },
        ],
        erros: [['I think it isn\'t a good idea.', 'I don\'t think it\'s a good idea.', 'Negue o verbo think.'], ['In my opinion I am agree.', 'In my opinion, I agree.', 'agree não leva be.'], ['According to me, it\'s good.', 'In my opinion, it\'s good.', '«according to me» soa estranho.'], ['I think that yes.', 'I think so.', 'Resposta curta: I think so.']],
      }),
      producao(5, 'Dê sua opinião sobre 5 temas: redes sociais, trabalhar em casa, fast food, transporte público, estudar online.'),
    ]),
    sessao('S2', 'Concordar e discordar', [
      revisao(4, 'Diga 3 opiniões com «I don\'t think» e 3 com «Personally».'),
      palavras(6, [
        ['I agree', 'ái agrii', 'concordo', ''], ['I disagree', 'ái disagrii', 'discordo', ''], ['exactly', 'igzéktli', 'exatamente', ''], ['you\'re right', 'iur ráit', 'você tem razão', ''], ['I see your point', 'ái sii iur póint', 'entendo seu argumento', ''], ['I\'m not so sure', 'áim nót sôu chur', 'não tenho tanta certeza', ''],
      ]),
      gramatica(12, 'Concordar, discordar e ceder', 'PASSO 1: concorde com «I agree», «Exactly», «You\'re right», «That\'s true». PASSO 2: concorde com a negativa usando «neither/nor»: «I don\'t like it.» — «Neither do I.» PASSO 3: concorde com a afirmativa usando «so»: «I love it.» — «So do I.» PASSO 4: discorde com educação: «I see your point, but…», «I\'m not so sure about that.», «I\'m afraid I disagree.» PASSO 5: evite o seco «No, you\'re wrong». PASSO 6: use «However» ou «On the other hand» para trazer outro lado. PASSO 7: o auxiliar de «So/Neither» deve ser o mesmo da frase original: «I can swim.» — «So can I.»', {
        tag: 'Concordar e discordar',
        comparacao: 'em português dizemos «eu também» e «eu também não». Em inglês há duas formas: «Me too / Me neither» e «So do I / Neither do I».',
        tabela: [
          { original: 'I love pizza.', resposta: 'So do I. / Me too.' }, { original: 'I don\'t like it.', resposta: 'Neither do I. / Me neither.' }, { original: 'I can swim.', resposta: 'So can I.' }, { original: 'I\'ve been there.', resposta: 'So have I.' },
        ],
        erros: [['So I do.', 'So do I.', 'Inversão: auxiliar antes do sujeito.'], ['Neither I do.', 'Neither do I.', 'Inversão.'], ['I like it. — Me neither.', 'I like it. — Me too.', 'Afirmativa: me too.'], ['I don\'t like it. — So do I.', 'I don\'t like it. — Neither do I.', 'Negativa: neither.']],
      }),
      producao(8, 'Seu parceiro diz 6 frases; responda concordando ou discordando com educação.'),
    ]),
    sessao('S3', 'Debater um tema', [
      revisao(4, 'Responda: «I love coffee.» «I can\'t cook.» «I\'ve been to Rio.»'),
      palavras(5, [
        ['advantage', 'adváantidj', 'vantagem', ''], ['disadvantage', 'disadváantidj', 'desvantagem', ''], ['for example', 'for igzémpl', 'por exemplo', ''], ['on the one hand', 'ón di uân rénd', 'por um lado', ''], ['in fact', 'in féekt', 'na verdade', ''],
      ]),
      gramatica(8, 'Montar um argumento', 'PASSO 1: apresente a ideia: «In my opinion, studying online is useful.» PASSO 2: dê a razão: «This is because you can learn at your own pace.» PASSO 3: dê um exemplo: «For example, I study after work.» PASSO 4: reconheça o outro lado: «On the other hand, you need discipline.» PASSO 5: conclua: «So, overall, I think it\'s a good option.»', {
        tag: 'Argumento',
        comparacao: 'em português a ordem natural é opinião, razão, exemplo, conclusão. Em inglês a estrutura é a mesma: claim, reason, example, conclusion.',
        tabela: [
          { etapa: 'ideia', frase: 'In my opinion, ...' }, { etapa: 'razão', frase: 'This is because ...' }, { etapa: 'exemplo', frase: 'For example, ...' }, { etapa: 'contraponto', frase: 'On the other hand, ...' }, { etapa: 'conclusão', frase: 'Overall, ...' },
        ],
        erros: [['For example I study.', 'For example, I study.', 'Vírgula depois do conector.'], ['In my opinion, I am think that', 'In my opinion, ...', 'Não misture duas fórmulas de opinião.']],
      }),
      dialogo(8, 'Debate about cities / Debate sobre cidades', 'Mia e Chris debatem sobre morar na cidade.', [
        ['Mia', 'I think living in a big city is better. There are more jobs.', 'Acho que morar em cidade grande é melhor. Há mais empregos.'], ['Chris', 'I see your point, but I\'m not so sure. It\'s very expensive.', 'Entendo, mas não tenho tanta certeza. É muito caro.'], ['Mia', 'That\'s true. However, you earn more money, too.', 'É verdade. Porém, você também ganha mais.'], ['Chris', 'Personally, I prefer a small town. It\'s quiet.', 'Pessoalmente, prefiro uma cidade pequena. É tranquilo.'], ['Mia', 'Exactly! I can\'t stand noise, either.', 'Exato! Eu também não suporto barulho.'], ['Chris', 'So do I. Maybe we agree on that!', 'Eu também. Talvez a gente concorde nisso!'],
      ]),
      producao(5, 'Escreva um argumento de 6 frases: ideia, razão, exemplo, contraponto e conclusão.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 55', [
      revisao(5, 'Debata em voz alta um tema com o parceiro: um a favor, outro contra.'),
      exercicios(20, [
        ouvir('I don\'t think it is a good idea', ['I don\'t think it is a good idea', 'I think it isn\'t a good idea', 'I am not think it is good'], 'I don\'t think it is a good idea', 'Ouça «don\'t think».'), ouvir('So do I', ['So do I', 'So I do', 'I do so'], 'So do I', 'Ouça a inversão.'), ditado('I see your point, but I disagree', 'Escreva: I see your point, but I disagree.'), ditado('Neither do I', 'Escreva: neither do I.'),
        mc('Como responder «I love pizza.» concordando?', ['So do I.', 'Neither do I.', 'So I do.'], 'So do I.', 'Afirmativa: so.'), mc('Como responder «I don\'t like it.» concordando?', ['Neither do I.', 'So do I.', 'Neither I do.'], 'Neither do I.', 'Negativa: neither.'), mc('Qual frase está correta?', ['I don\'t think it\'s a good idea.', 'I think it isn\'t a good idea.', 'I am not think it is good.'], 'I don\'t think it\'s a good idea.', 'Negue o verbo think.'), mc('Qual frase está correta?', ['I agree with you.', 'I am agree with you.', 'I agree you.'], 'I agree with you.', 'agree with.'),
        lacuna('I ___ your point, but I disagree. (vejo)', ['see', 'look', 'watch'], 'see', 'I see your point.'), lacuna('I can swim. — So ___ I. (também)', ['can', 'do', 'am'], 'can', 'Mesmo auxiliar.'), lacuna('I\'ve been there. — So ___ I.', ['have', 'do', 'am'], 'have', 'Mesmo auxiliar.'), lacuna('I don\'t like it. — ___ do I.', ['Neither', 'So', 'Either'], 'Neither', 'Negativa.'),
        ordem('Ordene: «In my opinion, it is a good idea.»', ['In', 'my', 'opinion,', 'it', 'is', 'a', 'good', 'idea'], 'In my opinion, it is a good idea.', 'In my opinion + frase.'), ordem('Ordene: «I\'m not so sure about that.»', ['I\'m', 'not', 'so', 'sure', 'about', 'that'], 'I\'m not so sure about that.', 'Discordar com educação.'),
        livre('Escreva 4 frases: uma opinião, uma concordância com So, uma discordância educada e um exemplo com «For example».', 'In my opinion, it is a good idea. So do I. I see your point, but I disagree. For example, it is cheaper.'),
      ]),
      producao(5, 'Fale 1 minuto defendendo uma opinião e reconhecendo o outro lado.'),
    ]),
  ],
});
