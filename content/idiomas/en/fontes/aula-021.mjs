import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 21, titulo: 'Passado simples: verbos irregulares', nivel: 'a2',
  objetivo: 'Usar os 40 verbos irregulares mais comuns no passado, organizados por padrões de som, e contar o que aconteceu sem erros típicos.',
  nota: 'Você conta o que aconteceu com os irregulares mais usados. Próxima aula: histórias e conectores.',
  sessoes: [
    sessao('S1', 'Irregulares do dia a dia', [
      revisao(5, 'Conte o seu dia de ontem com verbos regulares e uma negativa com «didn\'t».'),
      palavras(8, [
        ['go → went', 'gôu → uént', 'ir → foi', ''], ['have → had', 'hév → héd', 'ter → teve', ''], ['do → did', 'du → díd', 'fazer → fez', ''], ['get → got', 'guét → gót', 'conseguir → conseguiu', ''], ['see → saw', 'sii → só', 'ver → viu', ''], ['eat → ate', 'iit → êit', 'comer → comeu', ''], ['make → made', 'mêik → mêid', 'fazer → fez', ''], ['come → came', 'câm → kêim', 'vir → veio', ''],
      ]),
      gramatica(12, 'Os irregulares: não tem -ed', 'PASSO 1: muitos verbos comuns têm passado próprio, sem -ed: go → went, have → had, do → did, see → saw. PASSO 2: eles se aprendem como palavras novas, mas dá para agrupar por padrão (próximas sessões). PASSO 3: o passado é igual para todas as pessoas: «I went», «she went», «they went». PASSO 4: negativa e pergunta usam «did» e o verbo volta ao SIMPLES: «I didn\'t go», «Did you see it?» PASSO 5: «did» é o passado de «do» como verbo principal, mas também o auxiliar: «What did you do?» (o que você fez?). PASSO 6: erro típico: aplicar -ed a irregulares: «goed», «eated», «maked» não existem.', {
        tag: 'Irregulares',
        comparacao: 'em português os irregulares também existem («fui», «fiz», «vi»). A diferença é que no inglês só há UMA forma para todas as pessoas.',
        tabela: [
          { base: 'go', passado: 'went', exemplo: 'I went to the park.' }, { base: 'have', passado: 'had', exemplo: 'She had breakfast.' }, { base: 'see', passado: 'saw', exemplo: 'We saw a movie.' }, { base: 'eat', passado: 'ate', exemplo: 'They ate pizza.' }, { base: 'make', passado: 'made', exemplo: 'He made coffee.' }, { base: 'come', passado: 'came', exemplo: 'She came early.' },
        ],
        erros: [['I goed to school.', 'I went to school.', '«go» é irregular.'], ['She eated pizza.', 'She ate pizza.', '«eat» é irregular.'], ['Did you went?', 'Did you go?', 'Depois de did, verbo simples.'], ['I maked a cake.', 'I made a cake.', '«make» é irregular.']],
      }),
      producao(5, 'Diga 6 frases sobre ontem com go, have, do, see, eat e make no passado.'),
    ]),
    sessao('S2', 'Padrões que ajudam a decorar', [
      revisao(4, 'Dê o passado de: go, have, see, eat, make, come, do, get.'),
      palavras(6, [
        ['buy → bought', 'bái → bót', 'comprar → comprou', ''], ['think → thought', 'think → thót', 'pensar → pensou', ''], ['teach → taught', 'tiitch → tót', 'ensinar → ensinou', ''], ['catch → caught', 'kétch → kót', 'pegar → pegou', ''], ['bring → brought', 'bring → brót', 'trazer → trouxe', ''], ['fight → fought', 'fáit → fót', 'lutar → lutou', ''],
      ]),
      gramatica(12, 'Famílias de irregulares', 'PASSO 1: é mais fácil decorar em grupos. PASSO 2: grupo «-ought/-aught» (som /ót/): buy → bought, bring → brought, think → thought, teach → taught, catch → caught. PASSO 3: grupo que NÃO muda: put → put, cut → cut, read → read (escreve igual, mas lê-se /réd/), hit → hit. PASSO 4: grupo -ew (som /u/): know → knew, grow → grew, fly → flew, throw → threw. PASSO 5: grupo vogal que muda: write → wrote, drive → drove, ride → rode, speak → spoke, take → took. PASSO 6: grupo -t/-d: leave → left, send → sent, spend → spent, build → built, lose → lost. PASSO 7: cada família repete, então decorar uma ajuda a lembrar as outras.', {
        tag: 'Famílias',
        comparacao: 'em português os verbos irregulares do pretérito também têm «famílias» (fiz, quis, pus). Use o mesmo método: agrupe por som, não decore alfabeticamente.',
        tabela: [
          { familia: '/ót/', exemplos: 'buy/bought, think/thought, catch/caught' }, { familia: 'não muda', exemplos: 'put/put, cut/cut, hit/hit' }, { familia: '-ew', exemplos: 'know/knew, fly/flew, grow/grew' }, { familia: 'vogal muda', exemplos: 'write/wrote, drive/drove, speak/spoke' }, { familia: '-t', exemplos: 'leave/left, send/sent, spend/spent' },
        ],
        erros: [['I thinked about it.', 'I thought about it.', '«think» → thought.'], ['She buyed a bag.', 'She bought a bag.', '«buy» → bought.'], ['He knowed the answer.', 'He knew the answer.', '«know» → knew.'], ['They speaked English.', 'They spoke English.', '«speak» → spoke.']],
      }),
      producao(8, 'Diga o passado dos 20 verbos desta aula e depois use 5 deles em frases suas.'),
    ]),
    sessao('S3', 'Mais irregulares, em contexto', [
      revisao(4, 'Complete: «I ___ (buy) a bag. She ___ (speak) English. They ___ (leave) early.»'),
      palavras(5, [
        ['take → took', 'têik → túk', 'pegar, levar → pegou', ''], ['give → gave', 'guív → guêiv', 'dar → deu', ''], ['find → found', 'fáind → fáund', 'achar → achou', ''], ['sit → sat', 'sít → sét', 'sentar → sentou', ''], ['tell → told', 'tél → tôuld', 'contar, dizer → disse', ''],
      ]),
      gramatica(8, 'Perguntas no passado com irregulares', 'PASSO 1: pergunta: «Did you take the bus?» (verbo simples). PASSO 2: resposta: «Yes, I took the bus.» (passado) ou curta «Yes, I did.» PASSO 3: palavras de pergunta: «What did you buy?», «Where did she go?», «Who did you see?», «When did they leave?», «Why did he come?» PASSO 4: a pergunta sobre o SUJEITO não usa «did»: «Who called you?» (quem ligou?), mas «Who did you call?» (para quem você ligou?). PASSO 5: lembre: «did» uma vez só: «Did you went» tem dois passados e está errado.', {
        tag: 'Perguntas no passado',
        comparacao: 'em português a pergunta mantém o pretérito («o que você comprou?»). Em inglês, só o «did» leva o passado: «What did you buy?».',
        tabela: [
          { pergunta: 'What did you buy?', resposta: 'I bought a bag.' }, { pergunta: 'Where did she go?', resposta: 'She went to the park.' }, { pergunta: 'Who did you see?', resposta: 'I saw Tom.' }, { pergunta: 'Who called you?', resposta: 'Ana called me.' },
        ],
        erros: [['What you bought?', 'What did you buy?', 'Pergunta com did.'], ['Where did she went?', 'Where did she go?', 'Verbo simples.'], ['Who did call you?', 'Who called you?', 'Sujeito sem did.']],
      }),
      texto(8, 'The lost wallet / A carteira perdida', 'Yesterday I took the bus to work. I sat next to a woman, and I found a wallet on the seat. I gave it to the driver. He told me, "Thank you!" The woman saw it and said, "That is my wallet!" She was very happy. She bought me a coffee and we talked for ten minutes. I came to work late, but my boss understood. It was a great day.',
        'Ontem peguei o ônibus para o trabalho. Sentei ao lado de uma mulher e achei uma carteira no banco. Dei ao motorista. Ele me disse: «Obrigado!» A mulher viu e disse: «Essa é a minha carteira!» Ela ficou muito feliz. Pagou um café para mim e conversamos por dez minutos. Cheguei atrasado ao trabalho, mas o meu chefe entendeu. Foi um ótimo dia.',
        [['How did the person go to work?', 'By bus.'], ['What did the person find?', 'A wallet.'], ['What did the woman buy?', 'A coffee.'], ['Was the boss angry?', 'No, he wasn\'t. He understood.']]),
      producao(5, 'Escreva um texto de 6 frases sobre algo que você achou, comprou ou ganhou, com irregulares.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 21', [
      revisao(5, 'Conte em voz alta o que você comprou, viu e comeu na última semana.'),
      exercicios(20, [
        ouvir('I went to the park yesterday', ['I went to the park yesterday', 'I go to the park yesterday', 'I want to the park yesterday'], 'I went to the park yesterday', 'Ouça «went».'), ouvir('She bought a new bag', ['She bought a new bag', 'She brought a new bag', 'She boughted a new bag'], 'She bought a new bag', 'Ouça «bought».'), ditado('He saw his friends last night', 'Escreva: he saw his friends last night.'), ditado('Did you take the bus', 'Escreva: did you take the bus.'),
        mc('Qual é o passado de «go»?', ['went', 'goed', 'gone'], 'went', 'Irregular.'), mc('Qual frase está correta?', ['She bought a bag.', 'She buyed a bag.', 'She boughted a bag.'], 'She bought a bag.', 'buy → bought.'), mc('Qual pergunta está correta?', ['What did you buy?', 'What you bought?', 'What did you bought?'], 'What did you buy?', 'did + simples.'), mc('Qual é o passado de «read» na ESCRITA?', ['read', 'readed', 'red'], 'read', 'Escreve igual.'),
        lacuna('I ___ pizza last night. (comi)', ['ate', 'eated', 'eaten'], 'ate', 'eat → ate.'), lacuna('She ___ me a gift. (deu)', ['gave', 'gived', 'give'], 'gave', 'give → gave.'), lacuna('Did you ___ him? (ver)', ['see', 'saw', 'seen'], 'see', 'Depois de did, simples.'), lacuna('We ___ the answer. (achamos)', ['found', 'finded', 'find'], 'found', 'find → found.'),
        ordem('Ordene: «She took the bus to work.»', ['She', 'took', 'the', 'bus', 'to', 'work'], 'She took the bus to work.', 'Sujeito + passado + objeto.'), ordem('Ordene: «Where did you go yesterday?»', ['Where', 'did', 'you', 'go', 'yesterday'], 'Where did you go yesterday?', 'Where + did + sujeito + verbo.'),
        livre('Escreva 5 frases sobre ontem com 5 irregulares diferentes.', 'I went to work. I had lunch at noon. I saw my friend. I bought a coffee. I came home at six.'),
      ]),
      producao(5, 'Conte em 1 minuto o que aconteceu na última vez que você viajou ou saiu com amigos.'),
    ]),
  ],
});
