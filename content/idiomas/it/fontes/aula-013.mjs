import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 13, titulo: 'Volere, potere, dovere, sapere', nivel: 'a1',
  objetivo: 'Usar os verbos modais «volere», «potere» e «dovere» com o infinitivo, pedir licença e fazer pedidos educados, e distinguir «sapere» (saber) de «conoscere» (conhecer).',
  nota: 'Você diz o que quer, o que pode, o que deve e o que sabe fazer, e pede as coisas com cortesia. Próxima aula: a rotina e os verbos reflexivos.',
  sessoes: [
    sessao('S1', 'Volere e vorrei', [
      revisao(5, 'Responda em voz alta: «Cosa fai stasera? Con chi esci? Dove andate? Cosa bevi?» Use os verbos da aula 12.'),
      palavras(8, [
        ['volere', 'volêre', 'querer', ''], ['vorrei', 'vorréi', 'eu gostaria', ''], ['avere voglia di', 'avêre vólha di', 'ter vontade de', ''], ['volentieri', 'volentiéri', 'com prazer', ''], ['adesso', 'adésso', 'agora', ''], ['subito', 'súbito', 'já, imediatamente', ''], ['insieme', 'insiéme', 'juntos', ''], ['presto', 'présto', 'cedo, depressa', ''],
      ]),
      gramatica(12, 'Volere e a forma educada «vorrei»', 'PASSO 1: um verbo modal vem sempre seguido do infinitivo de outro verbo. «Voglio mangiare.» «Voglio un caffè.» (aqui «volere» pede um substantivo). PASSO 2: «volere» (querer) é irregular: voglio, vuoi, vuole, vogliamo, volete, vogliono. PASSO 3: a pronúncia de «voglio» tem «gli»: som de «lh» (vólho). PASSO 4: a forma educada, que você usa em bares, lojas e hotéis, é «vorrei» (eu gostaria): «Vorrei un caffè, per favore.» «Vorrei prenotare una camera.» PASSO 5: «volere» soa forte quando se dirige a uma pessoa: «Voglio un caffè» pode parecer seco, por isso, em pedidos, prefira «vorrei» ou «mi porta…?». PASSO 6: para convidar, use «Vuoi…?» (informal) ou «Vuole…?» (formal): «Vuoi un caffè?» «Vuole accomodarsi?» PASSO 7: a negação coloca «non» antes do modal: «Non voglio uscire.» PASSO 8: «avere voglia di» + infinitivo é «ter vontade de»: «Ho voglia di mangiare una pizza.»', {
        tag: 'Verbos modais',
        comparacao: 'o português «quero um café» soa natural. O italiano «voglio un caffè» pode soar brusco com desconhecidos; usa-se «vorrei» (como «gostaria») ou «prendo un caffè». O infinitivo, depois do modal, não leva «de» nem «a»: «voglio mangiare», e não «voglio di mangiare».',
        tabela: [
          { pronome: 'io', forma: 'voglio', exemplo: 'Voglio imparare l\'italiano.' }, { pronome: 'tu', forma: 'vuoi', exemplo: 'Vuoi un caffè?' }, { pronome: 'lui / lei / Lei', forma: 'vuole', exemplo: 'Vuole venire con noi.' },
          { pronome: 'noi', forma: 'vogliamo', exemplo: 'Vogliamo partire presto.' }, { pronome: 'voi', forma: 'volete', exemplo: 'Volete mangiare qualcosa?' }, { pronome: 'loro', forma: 'vogliono', exemplo: 'Vogliono andare al mare.' },
        ],
        erros: [['Voglio di mangiare.', 'Voglio mangiare.', 'Sem preposição depois do modal.'], ['Io vuoio un caffè.', 'Io voglio un caffè.', 'A forma de «io» é «voglio».'], ['Voglio un caffè, per favore. (para o barista, em tom brusco)', 'Vorrei un caffè, per favore.', '«Vorrei» é mais educado.'], ['Non voglio non uscire.', 'Non voglio uscire.', 'Uma só negação.']],
      }),
      producao(5, 'Diga em voz alta o que você quer fazer hoje (três frases com «voglio») e três pedidos educados com «vorrei», como num bar.'),
    ]),
    sessao('S2', 'Potere e dovere', [
      revisao(4, 'Conjugue «volere» em voz alta e diga duas frases com «vorrei».'),
      palavras(6, [
        ['ripetere', 'ripétere', 'repetir', ''], ['aprire', 'apríre', 'abrir', ''], ['chiudere', 'kiúdere', 'fechar', ''], ['la finestra', 'la finéstra', 'a janela', ''], ['la porta', 'la pórta', 'a porta', ''], ['più piano', 'piú piáno', 'mais devagar', ''],
      ]),
      gramatica(12, 'Potere e dovere', 'PASSO 1: «potere» (poder) é irregular: posso, puoi, può, possiamo, potete, possono. PASSO 2: «dovere» (dever, ter de) também: devo, devi, deve, dobbiamo, dovete, devono. PASSO 3: ambos pedem o infinitivo, sem preposição: «Posso entrare?» «Devo studiare.» PASSO 4: «potere» tem dois sentidos: capacidade («Non posso venire», não consigo vir) e permissão («Posso aprire la finestra?»). PASSO 5: para pedir licença, use «Posso…?»: «Posso sedermi qui?». Para pedir um favor a alguém, use «Può…?» (formal) ou «Puoi…?» (informal): «Può ripetere, per favore?» «Puoi aprire la porta?» PASSO 6: «dovere» expressa obrigação ou necessidade: «Devo partire domani.» PASSO 7: com um objeto, «dovere» quer dizer «dever» (dívida): «Quanto Le devo?» (quanto lhe devo?). PASSO 8: para a negação, o «non» vem antes do modal: «Non posso venire.» «Non devi aspettare.» PASSO 9: para dizer «não precisa», use «non c\'è bisogno» ou «non serve»; cuidado, «non devi» significa «você não deve» (proibição).', {
        tag: 'Verbos modais',
        comparacao: 'em português «posso» e «devo» seguem o mesmo padrão com o infinitivo («posso entrar», «devo estudar»). A diferença está no pedido de favor: o português costuma dizer «você pode repetir?»; o italiano diz «Può ripetere?» com «Lei» ou «Puoi ripetere?» com «tu». Em «non devi», a ideia é proibição, e não falta de obrigação.',
        tabelas: [
          { titulo: 'potere (poder)', linhas: [
            { pronome: 'io', forma: 'posso', exemplo: 'Posso entrare?' }, { pronome: 'tu', forma: 'puoi', exemplo: 'Puoi aiutarmi?' }, { pronome: 'lui / lei / Lei', forma: 'può', exemplo: 'Può ripetere, per favore?' },
            { pronome: 'noi', forma: 'possiamo', exemplo: 'Possiamo sederci qui?' }, { pronome: 'voi', forma: 'potete', exemplo: 'Potete venire domani?' }, { pronome: 'loro', forma: 'possono', exemplo: 'Possono entrare.' },
          ] },
          { titulo: 'dovere (dever, ter de)', linhas: [
            { pronome: 'io', forma: 'devo', exemplo: 'Devo studiare.' }, { pronome: 'tu', forma: 'devi', exemplo: 'Devi partire?' }, { pronome: 'lui / lei / Lei', forma: 'deve', exemplo: 'Deve aspettare.' },
            { pronome: 'noi', forma: 'dobbiamo', exemplo: 'Dobbiamo comprare il pane.' }, { pronome: 'voi', forma: 'dovete', exemplo: 'Dovete pagare alla cassa.' }, { pronome: 'loro', forma: 'devono', exemplo: 'Devono lavorare.' },
          ] },
        ],
        erros: [['Posso di entrare?', 'Posso entrare?', 'Sem preposição depois do modal.'], ['Io devo a studiare.', 'Io devo studiare.', 'Sem «a».'], ['Puoi ripetere, signora? (formal)', 'Può ripetere, signora?', 'Com «Lei», «può».'], ['Noi dovemo partire.', 'Noi dobbiamo partire.', 'A forma é «dobbiamo».']],
      }),
      producao(8, 'Faça três pedidos educados com «Può/Puoi…?» e três frases com «devo» sobre o que você precisa fazer amanhã.'),
    ]),
    sessao('S3', 'Sapere e conoscere', [
      revisao(4, 'Conjugue «potere» e «dovere» em voz alta. Depois diga: o que você não pode fazer hoje e por quê.'),
      palavras(5, [
        ['sapere', 'sapêre', 'saber', ''], ['conoscere', 'konôxere', 'conhecer', ''], ['nuotare', 'nuotáre', 'nadar', ''], ['guidare', 'guidáre', 'dirigir', ''], ['cucinare', 'kutchináre', 'cozinhar', ''], ['suonare', 'suonáre', 'tocar (instrumento)', ''],
      ]),
      gramatica(8, 'Sapere × conoscere', 'PASSO 1: «sapere» (saber): so, sai, sa, sappiamo, sapete, sanno. PASSO 2: «sapere» + infinitivo quer dizer «saber fazer» (ser capaz): «So nuotare.» «Sai guidare?». PASSO 3: «sapere» + «che» ou palavra interrogativa quer dizer saber um fato: «So che Marco è a Roma.» «Non so dov\'è la stazione.» PASSO 4: «conoscere» (conhecer) se usa com pessoas, lugares e coisas: conosco, conosci, conosce, conosciamo, conoscete, conoscono. «Conosco Marco.» «Conosco Roma.» PASSO 5: «Non lo so» é a resposta a «Sai dov\'è la banca?». PASSO 6: «Piacere di conoscerLa» é a fórmula de apresentação (formal); com «tu», «Piacere». PASSO 7: não confunda «sapere» com «conoscere»: «Conosco una buona pizzeria.» (já estive lá) × «So dov\'è una buona pizzeria.» (sei onde fica).', {
        tag: 'Verbos modais',
        comparacao: 'o português usa «saber» e «conhecer» da mesma forma: «sei nadar», «conheço Roma». O erro costuma ser o contrário: o aluno diz «conosco nuotare». O italiano só usa «conoscere» com pessoas, lugares e coisas; para habilidades, sempre «sapere».',
        tabelas: [
          { titulo: 'sapere (saber)', linhas: [
            { pronome: 'io', forma: 'so', exemplo: 'So nuotare.' }, { pronome: 'tu', forma: 'sai', exemplo: 'Sai guidare?' }, { pronome: 'lui / lei / Lei', forma: 'sa', exemplo: 'Sa cucinare molto bene.' },
            { pronome: 'noi', forma: 'sappiamo', exemplo: 'Sappiamo l\'indirizzo.' }, { pronome: 'voi', forma: 'sapete', exemplo: 'Sapete dov\'è la stazione?' }, { pronome: 'loro', forma: 'sanno', exemplo: 'Sanno suonare il pianoforte.' },
          ] },
          { titulo: 'conoscere (conhecer)', linhas: [
            { pronome: 'io', forma: 'conosco', exemplo: 'Conosco Marco.' }, { pronome: 'tu', forma: 'conosci', exemplo: 'Conosci Roma?' }, { pronome: 'lui / lei / Lei', forma: 'conosce', exemplo: 'Conosce una buona pizzeria.' },
            { pronome: 'noi', forma: 'conosciamo', exemplo: 'Conosciamo i tuoi amici.' }, { pronome: 'voi', forma: 'conoscete', exemplo: 'Conoscete Giulia?' }, { pronome: 'loro', forma: 'conoscono', exemplo: 'Conoscono bene la città.' },
          ] },
        ],
        erros: [['Conosco nuotare.', 'So nuotare.', 'Habilidade: «sapere».'], ['So Marco.', 'Conosco Marco.', 'Pessoa: «conoscere».'], ['Non so dov\'è? (resposta curta)', 'Non lo so.', 'Na resposta curta, o pronome «lo» entra.'], ['Io sapo cucinare.', 'Io so cucinare.', '«Sapere» é irregular: «so».']],
      }),
      dialogo(8, 'Al lavoro / No trabalho', 'Paolo e Anna, colegas de escritório, conversam sobre uma tarefa.', [
        ['Paolo', 'Anna, puoi darmi una mano con questo file? Non so usarlo bene.', 'Anna, você pode me dar uma mão com este arquivo? Não sei usá-lo bem.'], ['Anna', 'Certo, ma adesso devo finire una telefonata. Puoi aspettare dieci minuti?', 'Claro, mas agora tenho de terminar uma ligação. Pode esperar dez minutos?'], ['Paolo', 'Sì, nessun problema. Devo anche parlare con il capo.', 'Sim, sem problema. Também tenho de falar com o chefe.'], ['Anna', 'Conosci già la nuova collega? Sa usare molto bene quel programma.', 'Você já conhece a nova colega? Ela sabe usar muito bem aquele programa.'], ['Paolo', 'No, non la conosco ancora. Vuoi presentarmela?', 'Não, ainda não a conheço. Quer me apresentá-la?'], ['Anna', 'Volentieri. Dopo il caffè andiamo da lei.', 'Com prazer. Depois do café vamos até ela.'],
      ]),
      producao(5, 'Diga em voz alta cinco coisas que você sabe fazer e cinco pessoas ou lugares que você conhece.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 13', [
      revisao(5, 'Diga em voz alta uma frase com cada modal: «voglio», «posso», «devo», «so».'),
      exercicios(20, [
        ouvir('Vorrei un caffè, per favore', ['Vorrei un caffè, per favore', 'Voglio un caffè, per favore', 'Vorrei un tè, per favore'], 'Vorrei un caffè, per favore', 'Ouça «vorrei».'), ouvir('Può ripetere, per favore', ['Può ripetere, per favore', 'Puoi ripetere, per favore', 'Posso ripetere, per favore'], 'Può ripetere, per favore', 'Pedido formal.'), ouvir('Non posso venire stasera', ['Non posso venire stasera', 'Non voglio venire stasera', 'Non devo venire stasera'], 'Non posso venire stasera', 'Ouça «posso».'),
        ditado('Devo studiare domani', 'Escreva: Devo studiare domani.'), ditado('So nuotare molto bene', 'Escreva: So nuotare molto bene.'), ditado('Conosco una buona pizzeria', 'Escreva: Conosco una buona pizzeria.'),
        mc('Qual é a forma de «noi» de «dovere»?', ['dobbiamo', 'dovemo', 'devono'], 'dobbiamo', '«Noi dobbiamo».'), mc('Qual frase usa «sapere» corretamente?', ['So guidare.', 'Conosco guidare.', 'Sapo guidare.'], 'So guidare.', 'Habilidade: «sapere».'), mc('Qual frase usa «conoscere» corretamente?', ['Conosco Marco.', 'So Marco.', 'Sapere Marco.'], 'Conosco Marco.', 'Pessoa: «conoscere».'), mc('Qual é a forma educada de pedir um café?', ['Vorrei un caffè.', 'Voglio un caffè.', 'Vuoi un caffè.'], 'Vorrei un caffè.', '«Vorrei» é mais educado.'),
        lacuna('Lei ___ ripetere, per favore? (poder)', ['può', 'puoi', 'posso'], 'può', 'Com «Lei», «può».'), lacuna('Noi ___ partire presto. (querer)', ['vogliamo', 'volete', 'vogliono'], 'vogliamo', '«Noi vogliamo».'), lacuna('Voi ___ pagare alla cassa. (dovere)', ['dovete', 'devono', 'dobbiamo'], 'dovete', '«Voi dovete».'), lacuna('___ nuotare? (tu, sapere)', ['Sai', 'So', 'Sa'], 'Sai', '«Tu sai».'),
        ordem('Ordene: «Non posso venire stasera.»', ['Non', 'posso', 'venire', 'stasera'], 'Non posso venire stasera.', 'Negação antes do modal.'), ordem('Ordene: «Vorrei prenotare una camera.»', ['Vorrei', 'prenotare', 'una', 'camera'], 'Vorrei prenotare una camera.', '«Vorrei» + infinitivo.'),
        livre('Escreva em italiano: Eu quero aprender italiano. Devo estudar todos os dias.', 'Voglio imparare l\'italiano. Devo studiare tutti i giorni.'),
      ]),
      producao(5, 'Explique em voz alta, com uma frase cada, a diferença entre «sapere» e «conoscere».'),
    ]),
  ],
});
