import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 52, titulo: 'Futuro: orações de tempo, futuro contínuo e futuro perfeito', nivel: 'b1',
  objetivo: 'Usar presente simples depois de «when/as soon as/before/after/until» para falar do futuro, e distinguir o futuro contínuo («will be doing») do futuro perfeito («will have done»).',
  nota: 'Você fala do futuro com precisão de tempo. Próxima aula: conectores de contraste e causa.',
  sessoes: [
    sessao('S1', 'Orações de tempo no futuro', [
      revisao(5, 'Resolva um mistério em voz alta com must have, can\'t have e might have.'),
      palavras(8, [
        ['when', 'uén', 'quando', ''], ['as soon as', 'éz sun éz', 'assim que', ''], ['before', 'bifór', 'antes de', ''], ['after', 'éfter', 'depois que', ''], ['until', 'ântíl', 'até que', ''], ['by the time', 'bái dâ táim', 'quando já', ''], ['while', 'uáil', 'enquanto', ''], ['once', 'uâns', 'assim que, uma vez que', ''],
      ]),
      gramatica(12, 'Presente depois de when, before, after, as soon as, until', 'PASSO 1: em português usamos o futuro do subjuntivo: «quando eu chegar». Em inglês, depois de palavras de tempo, use o PRESENTE: «When I arrive, I will call you.» PASSO 2: nunca use «will» depois dessas palavras: «When I will arrive» está errado. PASSO 3: as palavras: when, as soon as, before, after, until, once, while, by the time. PASSO 4: a oração principal fica no futuro (will) ou no imperativo: «Call me as soon as you get there.» PASSO 5: «until» = até que: «Wait here until I come back.» PASSO 6: com o present perfect (fato concluído): «I\'ll call you after I have finished.» PASSO 7: se a oração com a palavra de tempo vem no começo, use vírgula.', {
        tag: 'Orações de tempo',
        comparacao: 'em português «quando eu chegar» usa o subjuntivo, que não existe em inglês. A tradução correta é o presente: «when I arrive».',
        tabela: [
          { portugues: 'Quando eu chegar, ligo.', ingles: 'When I arrive, I will call.' }, { portugues: 'Assim que terminar, avise.', ingles: 'Tell me as soon as you finish.' }, { portugues: 'Espere até eu voltar.', ingles: 'Wait until I come back.' }, { portugues: 'Antes de eu sair, vou comer.', ingles: 'Before I leave, I will eat.' },
        ],
        erros: [['When I will arrive, I will call you.', 'When I arrive, I will call you.', 'Sem will depois de when.'], ['I\'ll call you after I will finish.', 'I\'ll call you after I finish.', 'Presente.'], ['Wait until I will come back.', 'Wait until I come back.', 'Presente.'], ['As soon as I arrived, I will call.', 'As soon as I arrive, I will call.', 'Futuro: presente.']],
      }),
      producao(5, 'Complete 6 frases sobre o seu futuro: «When I finish this course, I will…», «As soon as I get home, I will…»'),
    ]),
    sessao('S2', 'Futuro contínuo', [
      revisao(4, 'Complete: «When I ___ (get) home, I ___ (call) you. Wait until I ___ (come).»'),
      palavras(6, [
        ['will be doing', 'uíl bi dúin', 'estarei fazendo', ''], ['this time tomorrow', 'dís táim tumórou', 'a esta hora amanhã', ''], ['at 8 p.m.', 'ét êit pi ém', 'às 8 da noite', ''], ['next Monday', 'nékst mândei', 'segunda que vem', ''], ['busy', 'bízi', 'ocupado', ''], ['available', 'avêilabl', 'disponível', ''],
      ]),
      gramatica(12, 'Will be + -ing', 'PASSO 1: o futuro contínuo = «will be + verbo-ing»: «This time tomorrow, I will be flying to Rio.» PASSO 2: use para uma ação que estará EM ANDAMENTO em um momento futuro. PASSO 3: pergunta educada sobre planos: «Will you be using the car tonight?» (para saber se pode usá-lo). PASSO 4: negativa: «I won\'t be working on Monday.» PASSO 5: compare: «I will call you at 8» (decisão/promessa) × «I will be working at 8» (estarei ocupado). PASSO 6: combina com «at + hora», «this time tomorrow», «next week»: «At 8 p.m. tomorrow, I\'ll be watching the match.»', {
        tag: 'Futuro contínuo',
        comparacao: 'em português «amanhã a esta hora estarei viajando» usa «estar + gerúndio» no futuro. Em inglês, «will be flying» faz o mesmo.',
        tabela: [
          { afirmativa: 'I will be working.', negativa: 'I won\'t be working.', pergunta: 'Will you be working?' }, { afirmativa: 'She will be sleeping.', negativa: 'She won\'t be sleeping.', pergunta: 'Will she be sleeping?' }, { afirmativa: 'They will be traveling.', negativa: 'They won\'t be traveling.', pergunta: 'Will they be traveling?' },
        ],
        erros: [['I will working at 8.', 'I will be working at 8.', 'Faltou be.'], ['I will be work at 8.', 'I will be working at 8.', 'Falta -ing.'], ['Will you using the car?', 'Will you be using the car?', 'Faltou be.']],
      }),
      producao(8, 'Diga o que você estará fazendo amanhã às 8h, 12h, 18h e 22h.'),
    ]),
    sessao('S3', 'Futuro perfeito', [
      revisao(4, 'Diga o que você estará fazendo este horário amanhã.'),
      palavras(5, [
        ['will have done', 'uíl rév dân', 'terei feito', ''], ['by Friday', 'bái fráidei', 'até sexta', ''], ['by then', 'bái dén', 'até lá', ''], ['by the end of', 'bái di énd óv', 'até o fim de', ''], ['deadline', 'dédláin', 'prazo', ''],
      ]),
      gramatica(8, 'Will have + particípio', 'PASSO 1: o futuro perfeito = «will have + particípio»: «By Friday, I will have finished the report.» PASSO 2: usamos para dizer que algo estará CONCLUÍDO até certo momento no futuro. PASSO 3: marcadores: by Friday, by then, by the end of the year, by the time. PASSO 4: pergunta: «Will you have finished by Friday?» PASSO 5: contraste: «I will be working at 8» (em andamento) × «I will have finished by 8» (já concluído).', {
        tag: 'Futuro perfeito',
        comparacao: 'em português «terei terminado até sexta» é o futuro composto, pouco usado na fala. Em inglês, «will have finished» é comum no trabalho, com prazos.',
        tabela: [
          { frase: 'By Friday, I will have finished the report.', sentido: 'concluído até sexta' }, { frase: 'By next year, she will have lived here for ten years.', sentido: 'completará dez anos' }, { frase: 'Will you have finished by then?', sentido: 'estará concluído?' },
        ],
        erros: [['By Friday, I will finish the report.', 'By Friday, I will have finished the report.', 'Prazo concluído: will have.'], ['I will have finish the report.', 'I will have finished the report.', 'Particípio.']],
      }),
      dialogo(8, 'Deadlines / Prazos', 'Ben e Lucy no escritório.', [
        ['Lucy', 'Ben, will you have finished the report by Friday?', 'Ben, você terá terminado o relatório até sexta?'], ['Ben', 'I think so. By Thursday evening, I will have finished the first draft.', 'Acho que sim. Até quinta à noite, terei terminado o primeiro rascunho.'], ['Lucy', 'Great. This time tomorrow, I\'ll be flying to Rio, so I won\'t be answering emails.', 'Ótimo. A esta hora amanhã, estarei voando para o Rio, então não responderei e-mails.'], ['Ben', 'No problem. As soon as I finish, I\'ll send it to you.', 'Sem problema. Assim que terminar, mando para você.'], ['Lucy', 'Perfect. When I arrive, I will read it.', 'Perfeito. Quando eu chegar, vou ler.'], ['Ben', 'By the time you land, I will have sent it.', 'Quando você aterrissar, já terei enviado.'],
      ]),
      producao(5, 'Escreva 5 metas com prazo usando «By the end of the year, I will have…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 52', [
      revisao(5, 'Fale das suas metas de curto prazo com presente depois de «when» e «as soon as».'),
      exercicios(20, [
        ouvir('When I arrive, I will call you', ['When I arrive, I will call you', 'When I will arrive, I call you', 'When I arrived, I will call you'], 'When I arrive, I will call you', 'Ouça «arrive».'), ouvir('This time tomorrow, I will be flying', ['This time tomorrow, I will be flying', 'This time tomorrow, I will fly', 'This time tomorrow, I flew'], 'This time tomorrow, I will be flying', 'Ouça «will be flying».'), ditado('By Friday, I will have finished', 'Escreva: by Friday, I will have finished.'), ditado('Wait until I come back', 'Escreva: wait until I come back.'),
        mc('Qual frase está correta?', ['When I arrive, I will call you.', 'When I will arrive, I will call you.', 'When I arrived, I will call you.'], 'When I arrive, I will call you.', 'Presente depois de when.'), mc('Qual frase indica ação EM ANDAMENTO no futuro?', ['I will be working at 8.', 'I will have worked at 8.', 'I worked at 8.'], 'I will be working at 8.', 'will be + -ing.'), mc('Qual frase indica ação CONCLUÍDA até um prazo?', ['I will have finished by Friday.', 'I will be finishing by Friday.', 'I finish by Friday.'], 'I will have finished by Friday.', 'will have + particípio.'), mc('Qual frase está correta?', ['Wait until I come back.', 'Wait until I will come back.', 'Wait until I came back.'], 'Wait until I come back.', 'Presente.'),
        lacuna('As soon as I ___ home, I will call. (chegar)', ['get', 'will get', 'got'], 'get', 'Presente.'), lacuna('I will ___ working at 8. (estarei)', ['be', 'have', 'been'], 'be', 'will be + -ing.'), lacuna('By Friday, I will ___ finished. (terei)', ['have', 'be', 'had'], 'have', 'will have + particípio.'), lacuna('I\'ll call you after I ___ . (terminar)', ['finish', 'will finish', 'finished'], 'finish', 'Presente.'),
        ordem('Ordene: «As soon as I arrive, I will call you.»', ['As', 'soon', 'as', 'I', 'arrive,', 'I', 'will', 'call', 'you'], 'As soon as I arrive, I will call you.', 'as soon as + presente, will.'), ordem('Ordene: «By Friday, I will have finished the report.»', ['By', 'Friday,', 'I', 'will', 'have', 'finished', 'the', 'report'], 'By Friday, I will have finished the report.', 'will have + particípio.'),
        livre('Escreva 4 frases sobre o futuro: uma com when + presente, uma com will be + -ing, uma com will have + particípio e uma com until.', 'When I arrive, I will call you. At 8, I will be working. By Friday, I will have finished. Wait until I come back.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você estará fazendo e o que terá feito daqui a um ano.'),
    ]),
  ],
});
