import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 40, titulo: 'Discurso indireto: contar o que alguém disse', nivel: 'b1',
  objetivo: 'Relatar o que alguém disse, perguntou ou pediu, no presente e no passado, com as mudanças de tempo e de pronomes.',
  nota: 'Você conta o que outras pessoas disseram. Próxima aula: a voz passiva.',
  sessoes: [
    sessao('S1', 'Relatar no presente', [
      revisao(5, 'Conte em voz alta um dia difícil com plus-que-parfait.'),
      palavras(8, [
        ['dire que', 'dir kö', 'dizer que', ''], ['demander si', 'dömãdé si', 'perguntar se', ''], ['demander de', 'dömãdé dö', 'pedir para', ''], ['répondre que', 'repõdr kö', 'responder que', ''], ['expliquer', 'eksplikê', 'explicar', ''], ['annoncer', 'anõsé', 'anunciar', ''], ['affirmer', 'afirmé', 'afirmar', ''], ['prétendre', 'pretãdr', 'alegar', ''],
      ]),
      gramatica(12, 'Il dit qu\'il vient', 'PASSO 1: o discurso direto repete as palavras exatas: «Il dit : « Je viens. »» O indireto relata: «Il dit qu\'il vient.» PASSO 2: com o verbo introdutório no PRESENTE, os tempos não mudam, mas os pronomes sim: «Je viens » → «Il dit qu\'il vient.» PASSO 3: frase afirmativa: «dire que». «Elle dit qu\'elle est fatiguée.» PASSO 4: pergunta sim/não: «demander si». «Il demande si tu viens.» PASSO 5: pergunta aberta: «demander + palavra interrogativa». «Il demande où tu habites.» «Elle demande ce que tu fais.» PASSO 6: ordem ou pedido: «demander de» + infinitivo. «Elle me demande de venir.» «Il nous dit de partir.» PASSO 7: mudanças de lugar e tempo, quando o contexto muda: «ici → là», «maintenant → à ce moment-là», «demain → le lendemain». PASSO 8: a pergunta indireta não tem inversão nem «est-ce que»: «Il demande si tu viens.» (não «si viens-tu»).', {
        tag: 'Discurso',
        comparacao: 'em português dizemos «ele disse que vem» e «ele perguntou se você vem». O francês faz o mesmo, mas «si» só vale para sim/não, e a pergunta indireta não inverte o sujeito: «il demande où tu habites» (não «où habites-tu»).',
        tabela: [
          { direto: 'Il dit : « Je viens. »', indireto: 'Il dit qu\'il vient.' }, { direto: 'Il demande : « Tu viens ? »', indireto: 'Il demande si tu viens.' }, { direto: 'Il demande : « Où habites-tu ? »', indireto: 'Il demande où tu habites.' }, { direto: 'Il demande : « Que fais-tu ? »', indireto: 'Il demande ce que tu fais.' }, { direto: 'Elle dit : « Viens ! »', indireto: 'Elle me dit de venir.' },
        ],
        erros: [['Il demande si viens-tu.', 'Il demande si tu viens.', 'Sem inversão no indireto.'], ['Il dit : qu\'il vient.', 'Il dit qu\'il vient.', 'Sem dois-pontos no indireto.'], ['Il demande qu\'est-ce que tu fais.', 'Il demande ce que tu fais.', '«Ce que» no indireto.'], ['Elle me dit venir.', 'Elle me dit de venir.', '«Dire de» + infinitivo.']],
      }),
      producao(5, 'Relate em voz alta cinco frases que alguém lhe disse hoje, no discurso indireto.'),
    ]),
    sessao('S2', 'Relatar no passado', [
      revisao(4, 'Transforme em indireto: «Marie dit : « Je suis fatiguée. »» «Paul demande : « Tu viens ? »»'),
      palavras(6, [
        ['avait dit', 'avé di', 'tinha dito', ''], ['a demandé', 'a dömãdé', 'perguntou/pediu', ''], ['a répondu', 'a repõdü', 'respondeu', ''], ['était', 'étê', 'era, estava', ''], ['viendrait', 'viẽdré', 'viria', ''], ['avait fini', 'avé fini', 'tinha terminado', ''],
      ]),
      gramatica(12, 'Il a dit qu\'il viendrait', 'PASSO 1: quando o verbo introdutório está no PASSADO (a dit, a demandé, a répondu), os tempos do discurso retroagem. PASSO 2: presente → imparfait: «Il a dit : « Je suis fatigué. »» → «Il a dit qu\'il était fatigué.» PASSO 3: passé composé → plus-que-parfait: «Il a dit : « J\'ai fini. »» → «Il a dit qu\'il avait fini.» PASSO 4: futur simple → conditionnel: «Il a dit : « Je viendrai. »» → «Il a dit qu\'il viendrait.» PASSO 5: futur proche → «aller» no imparfait: «Il a dit : « Je vais partir. »» → «Il a dit qu\'il allait partir.» PASSO 6: imparfait e plus-que-parfait não mudam. PASSO 7: o imperativo vira «de» + infinitivo: «Il m\'a dit : « Viens ! »» → «Il m\'a dit de venir.» PASSO 8: as perguntas seguem o mesmo padrão: «Elle a demandé si j\'avais mangé.» «Il m\'a demandé où j\'habitais.»', {
        tag: 'Discurso',
        comparacao: 'em português a mudança também ocorre («ele disse: eu venho» → «ele disse que vinha»), mas com menos regularidade. O francês é sistemático: presente → imparfait; passé composé → plus-que-parfait; futur → conditionnel. Esta correspondência é a regra da concordância dos tempos.',
        tabela: [
          { direto: 'présent', indireto: 'imparfait', exemplo: 'Il a dit qu\'il était fatigué.' }, { direto: 'passé composé', indireto: 'plus-que-parfait', exemplo: 'Il a dit qu\'il avait fini.' }, { direto: 'futur simple', indireto: 'conditionnel', exemplo: 'Il a dit qu\'il viendrait.' }, { direto: 'futur proche', indireto: 'aller no imparfait', exemplo: 'Il a dit qu\'il allait partir.' }, { direto: 'impératif', indireto: 'de + infinitivo', exemplo: 'Il m\'a dit de venir.' },
        ],
        erros: [['Il a dit qu\'il est fatigué.', 'Il a dit qu\'il était fatigué.', 'Retroceda o tempo.'], ['Il a dit qu\'il viendra.', 'Il a dit qu\'il viendrait.', 'Futuro → condicional.'], ['Il a demandé si j\'ai mangé.', 'Il a demandé si j\'avais mangé.', 'Passé composé → plus-que-parfait.'], ['Il m\'a dit viens.', 'Il m\'a dit de venir.', 'Imperativo → «de» + infinitivo.']],
      }),
      producao(8, 'Relate em voz alta oito frases que alguém lhe disse ontem, com a mudança dos tempos.'),
    ]),
    sessao('S3', 'Contar uma conversa', [
      revisao(4, 'Transforme em indireto no passado: «Il dit : « Je viendrai. »» «Elle dit : « J\'ai mangé. »»'),
      palavras(5, [
        ['raconter', 'rakõté', 'contar', ''], ['rapporter', 'raporté', 'relatar', ''], ['avouer', 'avuê', 'confessar', ''], ['promettre', 'prométr', 'prometer', ''], ['conseiller', 'kõseiié', 'aconselhar', ''],
      ]),
      gramatica(8, 'Verbos que introduzem o discurso', 'PASSO 1: verbos mais ricos que «dire»: «raconter que» (contar que), «avouer que» (confessar que), «promettre de» + infinitivo: «Il a promis de venir.» PASSO 2: «conseiller de» + infinitivo: «Elle m\'a conseillé de partir.» PASSO 3: «interdire de» + infinitivo: «Il m\'a interdit de fumer.» PASSO 4: «proposer de» + infinitivo: «Il nous a proposé de sortir.» PASSO 5: «avoir peur que» e «espérer que» exigem estruturas próprias: B1 avançado.', {
        tag: 'Discurso',
        comparacao: 'em português dizemos «ele me aconselhou a partir» e «ele me proibiu de fumar». O francês usa «de» com a maioria: «conseiller de», «interdire de», «proposer de», «promettre de». O verbo «dire» usa «de» também: «dire de».',
        tabela: [
          { verbo: 'promettre de', exemplo: 'Il a promis de venir.' }, { verbo: 'conseiller de', exemplo: 'Elle m\'a conseillé de partir.' }, { verbo: 'interdire de', exemplo: 'Il m\'a interdit de fumer.' }, { verbo: 'proposer de', exemplo: 'Il nous a proposé de sortir.' }, { verbo: 'avouer que', exemplo: 'Il a avoué qu\'il avait menti.' },
        ],
        erros: [['Il a promis venir.', 'Il a promis de venir.', '«Promettre de».'], ['Elle m\'a conseillé à partir.', 'Elle m\'a conseillé de partir.', '«Conseiller de».'], ['Il a avoué qu\'il a menti.', 'Il a avoué qu\'il avait menti.', 'Plus-que-parfait.'], ['Il m\'a interdit fumer.', 'Il m\'a interdit de fumer.', '«Interdire de».']],
      }),
      dialogo(8, 'Au bureau / No escritório', 'Marie conta a Pierre o que o chefe disse na reunião.', [
        ['Pierre', 'Alors, qu\'est-ce que le patron a dit à la réunion ?', 'Então, o que o chefe disse na reunião?'], ['Marie', 'Il a dit qu\'il était content de nos résultats.', 'Disse que estava contente com os nossos resultados.'], ['Pierre', 'Et pour la prime ? Il en a parlé ?', 'E o bônus? Falou disso?'], ['Marie', 'Il a promis de nous donner une réponse la semaine prochaine.', 'Prometeu nos dar uma resposta na semana que vem.'], ['Pierre', 'Il a demandé si quelqu\'un avait des questions ?', 'Perguntou se alguém tinha dúvidas?'], ['Marie', 'Oui, et il m\'a conseillé de lui écrire un e-mail pour ma demande de congé.', 'Sim, e me aconselhou a escrever-lhe um e-mail para o meu pedido de férias.'],
      ]),
      producao(5, 'Conte em voz alta uma conversa recente, relatando o que cada pessoa disse.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 40', [
      revisao(5, 'Relate uma conversa recente em voz alta, com discurso indireto.'),
      exercicios(20, [
        ouvir('Il a dit qu\'il viendrait', ['Il a dit qu\'il viendrait', 'Il a dit qu\'il viendra', 'Il dit qu\'il vient'], 'Il a dit qu\'il viendrait', 'Ouça «viendrait».'), ouvir('Il demande si tu viens', ['Il demande si tu viens', 'Il demande si viens-tu', 'Il dit que tu viens'], 'Il demande si tu viens', 'Ouça «si tu viens».'), ouvir('Elle m\'a conseillé de partir', ['Elle m\'a conseillé de partir', 'Elle m\'a conseillé partir', 'Elle m\'a dit de partir'], 'Elle m\'a conseillé de partir', 'Ouça «conseillé de».'),
        ditado('Il a dit qu\'il était fatigué', 'Escreva: Il a dit qu\'il était fatigué.'), ditado('Elle a demandé si j\'avais mangé', 'Escreva: Elle a demandé si j\'avais mangé.'), ditado('Il a promis de venir', 'Escreva: Il a promis de venir.'),
        mc('Il a dit: «Je suis fatigué.» → indireto:', ['Il a dit qu\'il était fatigué.', 'Il a dit qu\'il est fatigué.', 'Il a dit qu\'il serait fatigué.'], 'Il a dit qu\'il était fatigué.', 'Presente → imparfait.'), mc('Il a dit: «Je viendrai.» → indireto:', ['Il a dit qu\'il viendrait.', 'Il a dit qu\'il viendra.', 'Il a dit qu\'il venait.'], 'Il a dit qu\'il viendrait.', 'Futuro → condicional.'), mc('Il a demandé: «Tu viens ?» → indireto:', ['Il a demandé si je venais.', 'Il a demandé si venais-je.', 'Il a demandé que je venais.'], 'Il a demandé si je venais.', 'Sem inversão.'), mc('«Prometeu vir»:', ['Il a promis de venir.', 'Il a promis venir.', 'Il a promis à venir.'], 'Il a promis de venir.', '«Promettre de».'),
        lacuna('Il a dit qu\'il ___ fini. (já tinha)', ['avait', 'a', 'aurait'], 'avait', 'Plus-que-parfait.'), lacuna('Elle m\'a dit ___ venir.', ['de', 'à', 'que'], 'de', '«Dire de».'), lacuna('Il demande ___ tu habites. (onde)', ['où', 'quoi', 'ce'], 'où', 'Pergunta indireta.'), lacuna('Elle a demandé ___ je voulais. (o que)', ['ce que', 'qu\'est-ce que', 'que'], 'ce que', 'Pergunta indireta.'),
        ordem('Ordene: «Il m\'a dit qu\'il était fatigué.»', ['Il', 'm\'a', 'dit', 'qu\'il', 'était', 'fatigué'], 'Il m\'a dit qu\'il était fatigué.', 'Imparfait no indireto.'), ordem('Ordene: «Elle m\'a demandé si j\'avais mangé.»', ['Elle', 'm\'a', 'demandé', 'si', 'j\'avais', 'mangé'], 'Elle m\'a demandé si j\'avais mangé.', 'Plus-que-parfait.'),
        livre('Escreva em francês: Ele disse que estava cansado. Ela perguntou se eu vinha. Ele prometeu me ligar.', 'Il a dit qu\'il était fatigué. Elle a demandé si je venais. Il a promis de m\'appeler.'),
        lacuna('Elle dit qu\'elle ___ fatiguée. (é)', ['était', 'est', 'serait'], 'est', 'Verbo introdutório no presente: o tempo não muda.'),
        lacuna('Il a dit qu\'il ___ le lendemain. (viria)', ['viendra', 'vient', 'viendrait'], 'viendrait', 'Futuro no passado: condicional.'),
        lacuna('Elle demande ___ tu viens. (se)', ['si', 'que', 'de'], 'si', 'Pergunta sim/não indireta: «si».'),
        lacuna('Il m\'a interdit ___ fumer. (de)', ['à', 'de', 'que'], 'de', '«Interdire de» + infinitivo.'),
        lacuna('Il a dit qu\'il ___ aller au cinéma. (ia)', ['va', 'ira', 'allait'], 'allait', 'Futuro próximo no passado: «aller» no imparfait.'),
        mc('«Il a dit : « J\'ai fini. »» em discurso indireto:', ['Il a dit qu\'il avait fini.', 'Il a dit qu\'il a fini.', 'Il a dit qu\'il finissait.'], 'Il a dit qu\'il avait fini.', 'Passé composé → plus-que-parfait.'),
        mc('«Elle a demandé : « Où habites-tu ? »» em discurso indireto:', ['Elle a demandé où habitais-je.', 'Elle a demandé où j\'habitais.', 'Elle a demandé où est-ce que j\'habitais.'], 'Elle a demandé où j\'habitais.', 'A pergunta indireta não tem inversão.'),
        mc('Qual frase está correta?', ['Il m\'a conseillé partir.', 'Il m\'a conseillé à partir.', 'Il m\'a conseillé de partir.'], 'Il m\'a conseillé de partir.', '«Conseiller de» + infinitivo.'),
        mc('No discurso indireto no passado, «demain» vira:', ['le lendemain', 'hier', 'maintenant'], 'le lendemain', '«Demain» → «le lendemain».'),
        ordem('Ordene: «Ela respondeu que viria.»', ['Elle', 'a', 'répondu', 'qu\'elle', 'viendrait'], 'Elle a répondu qu\'elle viendrait.', 'Futuro → condicional.'),
        ordem('Ordene: «Ele pergunta onde você mora.»', ['Il', 'demande', 'où', 'tu', 'habites'], 'Il demande où tu habites.', 'Sem inversão na pergunta indireta.'),
        livre('Escreva em francês: Ela disse que estava contente. Ele me perguntou onde eu morava.', 'Elle a dit qu\'elle était contente. Il m\'a demandé où j\'habitais.'),
        livre('Escreva em francês: Ele prometeu vir amanhã. Ela me aconselhou a dormir.', 'Il a promis de venir demain. Elle m\'a conseillé de dormir.'),
      ]),
      producao(5, 'Fale 1 minuto contando uma conversa que você teve, no discurso indireto.'),
    ]),
  ],
});
