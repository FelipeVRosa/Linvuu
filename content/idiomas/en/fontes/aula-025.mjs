import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 25, titulo: 'Futuro: will e going to', nivel: 'a2',
  objetivo: 'Usar «will» para decisões na hora, promessas, ofertas e previsões, e distinguir de «going to» (planos e evidências).',
  nota: 'Você faz promessas, ofertas e previsões. Próxima aula: comparativos.',
  sessoes: [
    sessao('S1', 'Will: decisões e promessas', [
      revisao(5, 'Conte uma história no passado com cena e evento.'),
      palavras(8, [
        ['will', 'uíl', 'vai (decisão)', ''], ['won\'t', 'uôunt', 'não vai', ''], ['I\'ll', 'áil', 'eu vou', ''], ['promise', 'prómis', 'prometer', ''], ['offer', 'ófer', 'oferecer', ''], ['maybe', 'mêibi', 'talvez', ''], ['probably', 'próbabli', 'provavelmente', ''], ['think', 'think', 'achar, pensar', ''],
      ]),
      gramatica(12, 'Will', 'PASSO 1: «will» + verbo simples vale para todas as pessoas, sem -s: «I will call you.», «She will help.» PASSO 2: contração: «I\'ll», «you\'ll», «he\'ll», «we\'ll». PASSO 3: negativa: «won\'t» (will not): «I won\'t forget.» PASSO 4: pergunta: «Will you help me?», resposta curta: «Yes, I will.» / «No, I won\'t.» PASSO 5: usos: DECISÃO NA HORA («The phone is ringing. I\'ll answer.»), PROMESSA («I\'ll call you tomorrow.»), OFERTA («I\'ll carry your bag.»), PREVISÃO («It will be hot tomorrow.») PASSO 6: «I think… will», «probably», «maybe» tornam a previsão menos certa: «I think it will rain.», «She will probably come.»', {
        tag: 'Will',
        comparacao: 'em português o futuro do presente («farei») é raro na fala; usamos «vou fazer». Em inglês, «will» é comum para decidir, prometer e oferecer. «Going to» fica para planos.',
        tabela: [
          { afirmativa: 'I will help you.', negativa: 'I won\'t help you.', pergunta: 'Will you help me?' }, { afirmativa: 'She\'ll call you.', negativa: 'She won\'t call you.', pergunta: 'Will she call you?' }, { afirmativa: 'They will come.', negativa: 'They won\'t come.', pergunta: 'Will they come?' },
        ],
        erros: [['She wills help.', 'She will help.', 'Sem -s.'], ['I will to call you.', 'I will call you.', 'Sem «to».'], ['Do you will come?', 'Will you come?', '«will» não usa do.'], ['I not will go.', 'I won\'t go.', 'won\'t.']],
      }),
      producao(5, 'Faça 4 promessas e 2 ofertas com «I\'ll…».'),
    ]),
    sessao('S2', 'Will ou going to?', [
      revisao(4, 'Diga uma decisão na hora, uma promessa e uma oferta com «I\'ll».'),
      palavras(6, [
        ['plan', 'plén', 'plano', ''], ['decide', 'disáid', 'decidir', ''], ['already', 'olrédi', 'já', ''], ['clouds', 'cláudz', 'nuvens', ''], ['look', 'lúk', 'olhar, parecer', ''], ['ticket', 'tíkit', 'passagem, ingresso', ''],
      ]),
      gramatica(12, 'Will × going to', 'PASSO 1: «going to» é para PLANO já decidido antes de falar: «I\'m going to visit my aunt on Sunday.» (já resolvi). PASSO 2: «will» é para decisão no momento da fala: «Oh, it\'s cold. I\'ll close the window.» PASSO 3: «going to» também serve para previsão com EVIDÊNCIA que você vê agora: «Look at the clouds! It\'s going to rain.» PASSO 4: «will» serve para previsão por opinião: «I think it will rain tomorrow.» PASSO 5: na prática, os dois são aceitos em muitos casos, mas mantenha esta regra para começar. PASSO 6: não use presente no lugar de «will» depois de «if»: «If it rains, I will stay home.» (o «if» fica no presente).', {
        tag: 'Futuro',
        comparacao: 'em português «vou fazer» serve para plano e previsão, e «farei» é formal. O inglês separa melhor: plano (going to), decisão na hora (will).',
        tabela: [
          { uso: 'plano já feito', forma: 'going to', exemplo: 'I\'m going to travel next month.' }, { uso: 'decisão na hora', forma: 'will', exemplo: 'I\'ll take this one.' }, { uso: 'previsão com evidência', forma: 'going to', exemplo: 'Look! It\'s going to rain.' }, { uso: 'previsão por opinião', forma: 'will', exemplo: 'I think it will be sunny.' },
        ],
        erros: [['I will visit my aunt on Sunday. (plano já feito)', 'I\'m going to visit my aunt on Sunday.', 'Plano pede going to.'], ['If it will rain, I stay home.', 'If it rains, I will stay home.', 'Depois de «if», presente.'], ['The phone is ringing. I\'m going to answer. (decisão na hora)', 'The phone is ringing. I\'ll answer.', 'Decisão na hora: will.']],
      }),
      producao(8, 'Diga 3 planos seus com «going to», 3 decisões com «will» e 2 previsões.'),
    ]),
    sessao('S3', 'Prever e oferecer ajuda', [
      revisao(4, 'Diga se cada frase é plano, decisão ou previsão: «I\'m going to study.», «I\'ll help you.», «It will be cold.»'),
      palavras(5, [
        ['carry', 'kéri', 'carregar', ''], ['heavy', 'réve', 'pesado', ''], ['hungry', 'rângri', 'com fome', ''], ['sandwich', 'sénduitch', 'sanduíche', ''], ['soon', 'sun', 'logo', ''],
      ]),
      gramatica(8, 'Ofertas e pedidos com will', 'PASSO 1: oferta: «I\'ll carry your bag.», «Shall I open the window?» (mais formal e britânico). PASSO 2: pedido: «Will you help me?», «Could you help me?» (mais educado). PASSO 3: «shall I/we» sugere algo: «Shall we go?» PASSO 4: recusa polida: «No, thanks, I can do it.» PASSO 5: promessas fortes: «I promise I will…»', {
        tag: 'Ofertas',
        comparacao: 'em português «eu levo» e «deixa que eu levo» resolvem a oferta. Em inglês, «I\'ll carry it» tem o mesmo tom.',
        tabela: [
          { portugues: 'Eu levo a sua mala.', ingles: 'I\'ll carry your bag.', nota: 'oferta' }, { portugues: 'Você me ajuda?', ingles: 'Will you help me?', nota: 'pedido' }, { portugues: 'Vamos?', ingles: 'Shall we go?', nota: 'sugestão' },
        ],
        erros: [['I carry your bag. (oferta)', 'I\'ll carry your bag.', 'Oferta: will.'], ['Shall I to help you?', 'Shall I help you?', 'Sem «to».']],
      }),
      dialogo(8, 'At home / Em casa', 'Mia e Chris resolvem o jantar.', [
        ['Mia', 'I\'m hungry. There isn\'t any food at home.', 'Estou com fome. Não tem comida em casa.'], ['Chris', 'Don\'t worry. I\'ll make a sandwich for you.', 'Não se preocupe. Faço um sanduíche para você.'], ['Mia', 'Thanks! Will you also make some coffee?', 'Obrigada! Você também faz café?'], ['Chris', 'Sure. I think we\'ll have a nice evening.', 'Claro. Acho que teremos uma noite agradável.'], ['Mia', 'Tomorrow I\'m going to visit my grandmother. Do you want to come?', 'Amanhã vou visitar a minha avó. Quer vir?'], ['Chris', 'Yes, I\'ll come with you. I\'ll bring some flowers.', 'Quero. Vou com você. Levo umas flores.'],
      ]),
      producao(5, 'Ofereça ajuda a 3 pessoas com «I\'ll…» e peça 2 favores com «Will you…?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 25', [
      revisao(5, 'Diga 3 planos, 3 promessas e 2 previsões para a próxima semana.'),
      exercicios(20, [
        ouvir('I\'ll call you tomorrow', ['I\'ll call you tomorrow', 'I call you tomorrow', 'I called you tomorrow'], 'I\'ll call you tomorrow', 'Ouça «I\'ll».'), ouvir('Look at the clouds! It\'s going to rain', ['Look at the clouds! It\'s going to rain', 'Look at the clouds! It will rain', 'Look at the clouds! It rained'], 'Look at the clouds! It\'s going to rain', 'Ouça «going to».'), ditado('I won\'t forget', 'Escreva: I won\'t forget.'), ditado('Will you help me', 'Escreva: will you help me.'),
        mc('Qual forma serve para decidir na hora?', ['will', 'going to', 'past simple'], 'will', 'Decisão na hora.'), mc('Qual frase mostra um plano já feito?', ['I\'m going to travel next month.', 'I\'ll travel next month.', 'I travel next month.'], 'I\'m going to travel next month.', 'Plano: going to.'), mc('Qual frase está correta?', ['If it rains, I will stay home.', 'If it will rain, I stay home.', 'If it rains, I stay will home.'], 'If it rains, I will stay home.', 'if + presente.'), mc('Qual é a pergunta correta?', ['Will you help me?', 'Do you will help me?', 'Are you will help me?'], 'Will you help me?', 'Will + sujeito.'),
        lacuna('She ___ call you. (vai, promessa)', ['will', 'wills', 'is'], 'will', 'Sem -s.'), lacuna('I ___ forget. (não vou)', ['won\'t', 'don\'t', 'doesn\'t'], 'won\'t', 'won\'t.'), lacuna('Look at the sky! It\'s ___ to rain.', ['going', 'will', 'go'], 'going', 'Evidência: going to.'), lacuna('The bag is heavy. I ___ carry it. (decisão)', ['\'ll', 'm going to', 'will to'], '\'ll', 'Decisão: will.'),
        ordem('Ordene: «I will call you tomorrow.»', ['I', 'will', 'call', 'you', 'tomorrow'], 'I will call you tomorrow.', 'will + verbo.'), ordem('Ordene: «Will she help us?»', ['Will', 'she', 'help', 'us'], 'Will she help us?', 'Will + sujeito + verbo.'),
        livre('Escreva 4 frases: um plano (going to), uma promessa, uma oferta e uma previsão.', 'I\'m going to study tonight. I\'ll call you tomorrow. I\'ll carry your bag. I think it will rain.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os seus planos para o próximo mês e uma promessa a si mesmo.'),
    ]),
  ],
});
