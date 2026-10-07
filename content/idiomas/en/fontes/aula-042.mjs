import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 42, titulo: 'Terceiro condicional: arrependimentos e o que poderia ter sido', nivel: 'b1',
  objetivo: 'Usar o terceiro condicional («If I had studied, I would have passed»), falar de arrependimentos com «I wish I had» e «should have», e especular sobre o passado com «could have» e «might have».',
  nota: 'Você fala do que aconteceu e do que poderia ter acontecido. Próxima aula: voz passiva.',
  sessoes: [
    sessao('S1', 'If + had + particípio, would have + particípio', [
      revisao(5, 'Dê 3 conselhos com «If I were you» e faça 2 desejos com «I wish».'),
      palavras(8, [
        ['would have', 'úd rév', 'teria', ''], ['could have', 'cúd rév', 'poderia ter', ''], ['should have', 'chúd rév', 'deveria ter', ''], ['might have', 'máit rév', 'talvez tenha', ''], ['regret', 'rigrét', 'arrepender-se', ''], ['mistake', 'mistêik', 'erro', ''], ['pass the exam', 'pés di igzém', 'passar na prova', ''], ['chance', 'tchéns', 'chance', ''],
      ]),
      gramatica(12, 'O terceiro condicional', 'PASSO 1: o terceiro condicional fala de situações IMPOSSÍVEIS no PASSADO, que já não podem mudar: «If I had studied, I would have passed.» (não estudei, não passei). PASSO 2: a estrutura: «If + past perfect (had + particípio), would have + particípio». PASSO 3: contração: «I\'d have passed» (é «would have», não «had»). PASSO 4: negativa: «If I hadn\'t missed the bus, I wouldn\'t have been late.» PASSO 5: pergunta: «What would you have done?» PASSO 6: «could have» (poderia ter) e «might have» (talvez tivesse): «If I had known, I could have helped.» PASSO 7: na fala, «would have» soa como «would of» (/wúdâv/), mas escreva sempre «would have».', {
        tag: 'Terceiro condicional',
        comparacao: 'em português «se eu tivesse estudado, teria passado» usa o mais-que-perfeito do subjuntivo e o futuro do pretérito composto. O inglês espelha: «If I had studied, I would have passed».',
        tabela: [
          { se: 'If I had studied,', entao: 'I would have passed.' }, { se: 'If she had called,', entao: 'I would have answered.' }, { se: 'If we hadn\'t missed the train,', entao: 'we wouldn\'t have been late.' }, { se: 'If I had known,', entao: 'I could have helped.' },
        ],
        erros: [['If I would have studied, I would have passed.', 'If I had studied, I would have passed.', 'Sem would depois do if.'], ['If I had studied, I would pass.', 'If I had studied, I would have passed.', 'Resultado no passado: would have + particípio.'], ['If I would known, I would have helped.', 'If I had known, I would have helped.', 'had + particípio.'], ['I would of helped.', 'I would have helped.', 'Escreva «have».']],
      }),
      producao(5, 'Complete 5 frases: «If I had… I would have…» sobre erros ou oportunidades da sua vida.'),
    ]),
    sessao('S2', 'Should have e arrependimentos', [
      revisao(4, 'Complete: «If I had left earlier, I ___ have arrived on time.»'),
      palavras(6, [
        ['should have', 'chúd rév', 'deveria ter', ''], ['shouldn\'t have', 'chúdnt rév', 'não deveria ter', ''], ['I wish I had', 'ái uích ái héd', 'queria ter', ''], ['if only', 'íf ôunli', 'se ao menos', ''], ['apologize', 'apólodjáiz', 'pedir desculpas', ''], ['too late', 'tu lêit', 'tarde demais', ''],
      ]),
      gramatica(12, 'Arrependimento e crítica no passado', 'PASSO 1: «should have + particípio» = deveria ter: «I should have called you.» PASSO 2: «shouldn\'t have» = não deveria ter: «I shouldn\'t have said that.» PASSO 3: «I wish I had + particípio» = queria ter (feito): «I wish I had studied more.» PASSO 4: «If only I had…» é mais forte: «If only I had listened!» PASSO 5: para criticar outra pessoa, use o mesmo molde: «You should have told me.» PASSO 6: não confunda com o presente: «You should call» (conselho para agora) × «You should have called» (já era tarde).', {
        tag: 'Arrependimento',
        comparacao: 'em português «eu devia ter ligado» e «não devia ter dito isso» usam «dever + ter + particípio». O inglês faz idêntico com «should have + particípio».',
        tabela: [
          { frase: 'I should have called you.', sentido: 'não liguei' }, { frase: 'I shouldn\'t have said that.', sentido: 'disse, e foi um erro' }, { frase: 'I wish I had studied more.', sentido: 'não estudei o bastante' }, { frase: 'If only I had listened!', sentido: 'não ouvi' },
        ],
        erros: [['I should called you.', 'I should have called you.', 'Faltou have.'], ['I should have to call you.', 'I should have called you.', 'Sem «to».'], ['I wish I would have studied.', 'I wish I had studied.', 'wish + had + particípio.'], ['I wish I studied more. (passado)', 'I wish I had studied more.', 'Passado do passado: had.']],
      }),
      producao(8, 'Diga 6 arrependimentos seus com «I should have», «I shouldn\'t have» e «I wish I had».'),
    ]),
    sessao('S3', 'Could have e might have', [
      revisao(4, 'Complete: «I ___ have called you (deveria ter). I wish I ___ studied more.»'),
      palavras(5, [
        ['lucky', 'lâki', 'sortudo', ''], ['accident', 'éksident', 'acidente', ''], ['dangerous', 'dêindjerus', 'perigoso', ''], ['narrowly', 'nérouli', 'por pouco', ''], ['escape', 'iskêip', 'escapar', ''],
      ]),
      gramatica(8, 'Poderia ter acontecido', 'PASSO 1: «could have + particípio» = poderia ter acontecido: «We could have died!» (e não morremos). PASSO 2: «might have + particípio» = talvez tenha acontecido (dúvida sobre o passado): «He might have forgotten.» PASSO 3: «must have» = deve ter (quase certeza): «She must have left.» PASSO 4: «can\'t have» = não pode ter: «He can\'t have known.» PASSO 5: use para deduzir: «The lights are off. They must have gone out.»', {
        tag: 'Dedução no passado',
        comparacao: 'em português «deve ter saído» e «pode ter esquecido» fazem o mesmo trabalho. Em inglês: «must have left», «might have forgotten».',
        tabela: [
          { frase: 'She must have left.', grau: 'quase certeza' }, { frase: 'He might have forgotten.', grau: 'possibilidade' }, { frase: 'He can\'t have known.', grau: 'quase impossível' }, { frase: 'We could have died.', grau: 'quase aconteceu' },
        ],
        erros: [['She must left.', 'She must have left.', 'Faltou have.'], ['He maybe have forgotten.', 'He might have forgotten.', 'maybe não vai com have.']],
      }),
      texto(8, 'The missed chance / A chance perdida', 'Last year, I didn\'t apply for a job at a big company because I thought I wasn\'t good enough. Yesterday, I found out that they hired a friend of mine, and she is not more qualified than I am. I wish I had applied! If I had tried, I might have got the job. I should have believed in myself. But I can\'t change the past. Now I send my CV to at least two companies every week. If I hadn\'t missed that chance, I wouldn\'t be so determined today.',
        'No ano passado, não me candidatei a um emprego numa grande empresa porque achei que não era bom o bastante. Ontem, descobri que contrataram uma amiga minha, e ela não é mais qualificada do que eu. Queria ter me candidatado! Se tivesse tentado, talvez tivesse conseguido o emprego. Eu devia ter acreditado em mim. Mas não posso mudar o passado. Agora envio meu currículo para pelo menos duas empresas por semana. Se eu não tivesse perdido aquela chance, não seria tão determinado hoje.',
        [['Why didn\'t the person apply?', 'They thought they weren\'t good enough.'], ['Who did the company hire?', 'A friend of the person.'], ['What does the person wish?', 'To have applied.'], ['What does the person do now?', 'Sends the CV to two companies every week.']]),
      producao(5, 'Escreva 6 frases sobre uma oportunidade perdida, com terceiro condicional e «should have».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 42', [
      revisao(5, 'Conte um arrependimento seu e o que teria feito de diferente.'),
      exercicios(20, [
        ouvir('If I had studied, I would have passed', ['If I had studied, I would have passed', 'If I studied, I would pass', 'If I would study, I would have passed'], 'If I had studied, I would have passed', 'Ouça «had studied… would have passed».'), ouvir('I should have called you', ['I should have called you', 'I should call you', 'I should had called you'], 'I should have called you', 'Ouça «should have».'), ditado('She must have left', 'Escreva: she must have left.'), ditado('I wish I had studied more', 'Escreva: I wish I had studied more.'),
        mc('Qual frase está correta?', ['If I had known, I would have helped.', 'If I would have known, I would have helped.', 'If I knew, I would have helped.'], 'If I had known, I would have helped.', 'had + would have.'), mc('Qual frase indica arrependimento?', ['I shouldn\'t have said that.', 'I shouldn\'t say that.', 'I won\'t say that.'], 'I shouldn\'t have said that.', 'shouldn\'t have.'), mc('Qual frase indica quase certeza sobre o passado?', ['She must have left.', 'She might leave.', 'She will leave.'], 'She must have left.', 'must have.'), mc('Qual frase está correta?', ['I wish I had studied more.', 'I wish I would have studied more.', 'I wish I studied more (passado).'], 'I wish I had studied more.', 'wish + had + particípio.'),
        lacuna('If I ___ studied, I would have passed.', ['had', 'have', 'would'], 'had', 'past perfect.'), lacuna('I should ___ called you.', ['have', 'had', 'has'], 'have', 'should have.'), lacuna('He ___ have forgotten. (talvez)', ['might', 'must to', 'can'], 'might', 'might have.'), lacuna('If we hadn\'t missed the train, we ___ been late.', ['wouldn\'t have', 'wouldn\'t', 'won\'t have'], 'wouldn\'t have', 'wouldn\'t have been.'),
        ordem('Ordene: «If I had known, I would have helped you.»', ['If', 'I', 'had', 'known,', 'I', 'would', 'have', 'helped', 'you'], 'If I had known, I would have helped you.', 'had + particípio, would have + particípio.'), ordem('Ordene: «You should have told me.»', ['You', 'should', 'have', 'told', 'me'], 'You should have told me.', 'should have + particípio.'),
        livre('Escreva 4 frases: um terceiro condicional, um «should have», um «I wish I had» e um «must have».', 'If I had studied, I would have passed. I should have called you. I wish I had gone. She must have left.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma decisão que você tomou e o que teria acontecido se tivesse feito outra coisa.'),
    ]),
  ],
});
