import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 39, titulo: 'Trapassato prossimo', nivel: 'b1',
  objetivo: 'Formar e usar o trapassato prossimo para contar o que já tinha acontecido antes de outro fato no passado e organizar uma história em camadas de tempo.',
  nota: 'Você passa a contar histórias com três camadas de passado: o que já tinha acontecido, o que aconteceu e o cenário. Próxima aula: passato remoto, para leitura.',
  sessoes: [
    sessao('S1', 'Formar o trapassato prossimo', [
      revisao(5, 'Conte em voz alta um fato passado com cenário (imperfetto) e acontecimento (passato prossimo), em três frases.'),
      palavras(8, [
        ['già', 'djá', 'já', ''], ['non… ancora', 'non ankôra', 'ainda não', ''], ['prima', 'prima', 'antes', ''], ['dopo che', 'dôpo ke', 'depois que', ''], ['appena', 'appéna', 'assim que; acabou de', ''], ['ormai', 'ormái', 'a essa altura', ''], ['fino ad allora', 'fíno ad allôra', 'até então', ''], ['quel giorno', 'kuel djórno', 'naquele dia', ''],
      ]),
      gramatica(12, 'Avevo mangiato, ero partito', 'PASSO 1: o trapassato prossimo forma-se com o IMPERFETTO de «avere» ou «essere» + particípio passado: «avevo mangiato», «avevi finito», «era partito», «eravamo arrivati». PASSO 2: o auxiliar é o mesmo do passato prossimo: verbos de movimento e de mudança (andare, venire, arrivare, partire, entrare, uscire, rimanere, nascere, diventare), «piacere» e os reflessivi usam «essere»; os demais usam «avere». PASSO 3: com «essere» o particípio concorda com o sujeito: «lei era partita», «loro erano arrivati». PASSO 4: o tempo marca uma ação ANTERIOR a outro fato no passado: «Quando sono arrivato, il film era già cominciato.» PASSO 5: advérbios curtos ficam entre o auxiliar e o particípio: «avevo già mangiato», «non avevo ancora finito», «non ero mai stato a Roma». PASSO 6: os pronomes vêm antes do auxiliar e «lo, la, li, le» fazem o particípio concordar: «L\'avevo visto», «Le avevo viste» (as chaves). PASSO 7: pergunta sem mudar a ordem: «Avevi già mangiato?» PASSO 8: depois de «dire» ou «pensare» no passado, o fato anterior aparece no trapassato: «Ha detto che aveva già pagato.»', {
        tag: 'Passado',
        comparacao: 'o português tem «eu tinha comido» e o simples «eu comera» (literário). O italiano só usa a forma composta, e ela corresponde direto a «tinha comido»: «avevo mangiato». Na conversa em português é comum usar o pretérito perfeito no lugar («quando cheguei, ele já saiu»); em italiano isso soa errado: o fato anterior pede o trapassato («era già uscito»).',
        tabela: [
          { pessoa: 'io', avere: 'avevo mangiato', essere: 'ero partito / partita' }, { pessoa: 'tu', avere: 'avevi mangiato', essere: 'eri partito / partita' }, { pessoa: 'lui / lei', avere: 'aveva mangiato', essere: 'era partito / partita' }, { pessoa: 'noi', avere: 'avevamo mangiato', essere: 'eravamo partiti / partite' }, { pessoa: 'voi', avere: 'avevate mangiato', essere: 'eravate partiti / partite' }, { pessoa: 'loro', avere: 'avevano mangiato', essere: 'erano partiti / partite' },
        ],
        erros: [['Quando sono arrivato, lui è già partito.', 'Quando sono arrivato, lui era già partito.', 'Fato anterior a outro fato passado: trapassato prossimo.'], ['Avevo andato a Roma.', 'Ero andato a Roma.', '«Andare» usa «essere».'], ['Lei era partito.', 'Lei era partita.', 'Com «essere» o particípio concorda com o sujeito.'], ['Ho avevo mangiato.', 'Avevo mangiato.', 'Só um auxiliar, no imperfetto.']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você já tinha feito antes de começar o dia hoje, usando «avevo già…» ou «ero già…».'),
    ]),
    sessao('S2', 'Ordenar os fatos de uma história', [
      revisao(4, 'Conjugue em voz alta «finire, partire, vedere, svegliarsi» no trapassato prossimo com «io».'),
      palavras(6, [
        ['il giorno prima', 'il djórno prima', 'no dia anterior', ''], ['il giorno dopo', 'il djórno dôpo', 'no dia seguinte', ''], ['due giorni prima', 'dúe djórni prima', 'dois dias antes', ''], ['una settimana dopo', 'úna settimána dôpo', 'uma semana depois', ''], ['l\'anno precedente', 'lánno pretchedênte', 'no ano anterior', ''], ['infine', 'infíne', 'por fim', ''],
      ]),
      gramatica(12, 'Tre tempi in una storia', 'PASSO 1: uma história no passado combina três camadas: trapassato prossimo (o que já tinha acontecido), passato prossimo (os fatos principais) e imperfetto (cenário, hábitos, estados). PASSO 2: exemplo: «Il giorno prima avevo perso le chiavi (trapassato). La mattina dopo sono arrivato in ritardo (passato prossimo). Pioveva (imperfetto) e ero stanco (imperfetto).» PASSO 3: marcadores de tempo relativo ao passado: «il giorno prima, il giorno dopo, l\'anno precedente, due giorni prima, una settimana dopo». Não se usa «ieri» nem «domani» dentro do relato: eles pertencem ao presente de quem fala. PASSO 4: «dopo che» pede o fato anterior: «Dopo che avevamo cenato, siamo usciti a fare due passi.» PASSO 5: «prima di» + infinitivo: «Prima di partire, avevo chiuso il gas.» PASSO 6: «dopo» + infinito passato (avere/essere + particípio): «Dopo aver mangiato, sono uscito.» «Dopo essere arrivata, ha chiamato.» PASSO 7: o infinito passado só vale com o mesmo sujeito nas duas partes; com sujeitos diferentes use «dopo che» + verbo conjugado. PASSO 8: com pronomes, eles se colam ao auxiliar infinitivo: «dopo averlo visto», «dopo averla chiamata».', {
        tag: 'Passado',
        comparacao: 'em português dizemos «depois de comer, saí». O italiano exige o infinito passado: «dopo aver mangiato, sono uscito». «Dopo mangiare» está errado. Com «essere», o particípio concorda: «dopo essere arrivata» (ela), «dopo essere arrivati» (eles).',
        tabela: [
          { tempo: 'trapassato prossimo', uso: 'o que já tinha acontecido', exemplo: 'Il giorno prima avevo perso le chiavi.' }, { tempo: 'passato prossimo', uso: 'o fato principal', exemplo: 'La mattina dopo sono arrivato in ritardo.' }, { tempo: 'imperfetto', uso: 'cenário, estado', exemplo: 'Pioveva e ero stanco.' }, { tempo: 'infinito passato', uso: 'depois de fazer', exemplo: 'Dopo aver mangiato, sono uscito.' },
        ],
        erros: [['Dopo mangiare, sono uscito.', 'Dopo aver mangiato, sono uscito.', 'Depois de «dopo» vem o infinito passado.'], ['Dopo essere arrivato, lei ha chiamato.', 'Dopo essere arrivata, lei ha chiamato.', 'O particípio concorda com «lei».'], ['Il giorno prima ho perso le chiavi (já tinha perdido).', 'Il giorno prima avevo perso le chiavi.', 'Fato anterior: trapassato.'], ['Prima di avere partito, avevo chiuso la porta.', 'Prima di partire, avevo chiuso la porta.', 'Depois de «prima di» vem o infinito simples.']],
      }),
      producao(8, 'Conte em voz alta uma história de oito frases usando trapassato prossimo, passato prossimo e imperfetto.'),
    ]),
    sessao('S3', 'Um dia complicado', [
      revisao(4, 'Diga três frases com «dopo aver…» ou «dopo essere…».'),
      palavras(5, [
        ['il matrimonio', 'il matrimônio', 'o casamento', ''], ['perdere il treno', 'pérdere il trêno', 'perder o trem', ''], ['arrabbiarsi', 'arrabbiársi', 'ficar com raiva', ''], ['per fortuna', 'per fortúna', 'por sorte', ''], ['la sveglia', 'la zvélha', 'o despertador', ''],
      ]),
      gramatica(8, 'Causa anterior e consequência', 'PASSO 1: a causa vem antes e fica no trapassato: «Mi ero addormentato tardi.» «La sveglia non aveva suonato.» PASSO 2: a consequência é o fato principal: «Ho perso il treno.» PASSO 3: ligações úteis: «perché» (porque), «quindi» (portanto), «per questo» (por isso), «così» (assim). PASSO 4: exemplo completo: «Mi ero addormentato tardi, quindi ho perso il treno.» PASSO 5: para o que se esperava e não ocorreu: «Non avevo ancora…», «Non avevo mai…».', {
        tag: 'Passado',
        comparacao: 'em português diz-se «tinha dormido tarde, por isso perdi o trem». O italiano faz o mesmo com «quindi» ou «per questo». Atenção: «sveglia» é o despertador, e «svegliarsi» é acordar; «perdere» serve para o trem e para as chaves.',
        tabela: [
          { fato: 'causa anterior', frase: 'Mi ero addormentato tardi.' }, { fato: 'consequência', frase: 'Quindi ho perso il treno.' }, { fato: 'reação', frase: 'Il capo si è arrabbiato.' }, { fato: 'final', frase: 'Per fortuna mi ha perdonato.' }, { fato: 'o que faltava', frase: 'Non avevo ancora fatto colazione.' },
        ],
        erros: [['Mi sono addormentato tardi, quindi avevo perso il treno.', 'Mi ero addormentato tardi, quindi ho perso il treno.', 'A causa vem antes: trapassato.'], ['La sveglia non ha suonato quando mi sono svegliato.', 'La sveglia non aveva suonato quando mi sono svegliato.', 'Fato anterior ao despertar.'], ['Fortunatamente lui mi perdonava una volta.', 'Per fortuna mi ha perdonato.', 'Fato único e concluído: passato prossimo.'], ['Non avevo mai essere stato a Roma.', 'Non ero mai stato a Roma.', 'Auxiliar conjugado + «stato».']],
      }),
      texto(8, 'Il matrimonio di mia cugina', 'Sabato scorso dovevo andare al matrimonio di mia cugina a Bologna. Il giorno prima avevo comprato il biglietto del treno, ma la mattina non riuscivo a trovarlo: lo avevo lasciato nella giacca sbagliata. Quando sono arrivato alla stazione, il treno era già partito. Dopo aver aspettato un\'ora, ne ho preso un altro e sono arrivato in chiesa quando la cerimonia era appena finita. Per fortuna mia cugina non si era arrabbiata e, al ristorante, mi aveva tenuto un posto vicino a lei.', 'No sábado passado eu tinha que ir ao casamento da minha prima em Bolonha. No dia anterior eu tinha comprado a passagem de trem, mas de manhã não conseguia encontrá-la: eu a tinha deixado no paletó errado. Quando cheguei à estação, o trem já tinha partido. Depois de esperar uma hora, peguei outro e cheguei à igreja quando a cerimônia tinha acabado de terminar. Por sorte minha prima não tinha ficado com raiva e, no restaurante, tinha guardado um lugar para mim perto dela.', [['Dove avrebbe dovuto andare l\'autore?', 'Al matrimonio di sua cugina, a Bologna.'], ['Dove aveva lasciato il biglietto?', 'Nella giacca sbagliata.'], ['Com\'era il treno quando è arrivato alla stazione?', 'Era già partito.'], ['Che cosa aveva fatto la cugina al ristorante?', 'Gli aveva tenuto un posto vicino a lei.']]),
      producao(5, 'Conte em voz alta um dia em que tudo deu errado, com pelo menos três trapassati.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 39', [
      revisao(5, 'Conte em voz alta o que já tinha acontecido antes de você acordar hoje.'),
      exercicios(20, [
        ouvir('Quando sono arrivato, il film era già cominciato', ['Quando sono arrivato, il film era già cominciato', 'Quando sono arrivato, il film è già cominciato', 'Quando arrivavo, il film era già cominciato'], 'Quando sono arrivato, il film era già cominciato', 'Ouça «era già cominciato».'),
        ouvir('Avevo già mangiato', ['Avevo già mangiato', 'Ho già mangiato', 'Mangiavo già'], 'Avevo già mangiato', 'Ouça «avevo».'),
        ouvir('Dopo aver mangiato, sono uscito', ['Dopo aver mangiato, sono uscito', 'Dopo mangiare, sono uscito', 'Dopo aver mangiato, esco'], 'Dopo aver mangiato, sono uscito', 'Ouça «dopo aver».'),
        ditado('Il giorno prima avevo perso le chiavi', 'Escreva: Il giorno prima avevo perso le chiavi.'), ditado('Lei era già partita', 'Escreva: Lei era già partita.'), ditado('Per fortuna mi ha perdonato', 'Escreva: Per fortuna mi ha perdonato.'),
        mc('«Eu tinha comido» em italiano:', ['Avevo mangiato.', 'Ho mangiato.', 'Mangiavo.'], 'Avevo mangiato.', 'Trapassato prossimo.'),
        mc('Qual frase está correta?', ['Lei era partita.', 'Lei era partito.', 'Lei aveva partita.'], 'Lei era partita.', 'Concordância com o sujeito.'),
        mc('Qual frase está correta?', ['Dopo aver mangiato, sono uscito.', 'Dopo mangiare, sono uscito.', 'Dopo aver mangiare, sono uscito.'], 'Dopo aver mangiato, sono uscito.', 'Infinito passado.'),
        mc('«No dia seguinte» em italiano:', ['il giorno dopo', 'il giorno prima', 'ieri'], 'il giorno dopo', 'Marcador relativo ao passado.'),
        lacuna('Quando sono arrivato, lui ___ già partito.', ['era', 'è', 'aveva'], 'era', 'Trapassato com «essere».'),
        lacuna('Il giorno prima ___ perso le chiavi.', ['avevo', 'ho', 'ero'], 'avevo', 'Trapassato com «avere».'),
        lacuna('Noi ___ arrivati troppo tardi. (já tínhamos)', ['eravamo', 'avevamo', 'siamo'], 'eravamo', '«Arrivare» usa «essere».'),
        lacuna('Dopo ___ mangiato, sono uscito.', ['aver', 'essere', 'avevo'], 'aver', 'Infinito passado.'),
        ordem('Ordene: «Il giorno prima mi ero addormentato tardi.»', ['Il', 'giorno', 'prima', 'mi', 'ero', 'addormentato', 'tardi'], 'Il giorno prima mi ero addormentato tardi.', 'Trapassato de um reflessivo.'),
        ordem('Ordene: «Non ero ancora arrivato.»', ['Non', 'ero', 'ancora', 'arrivato'], 'Non ero ancora arrivato.', 'Negação com «ancora».'),
        livre('Escreva em italiano: Quando cheguei, ele já tinha saído. No dia anterior eu tinha perdido as chaves. Depois de comer, saí.', 'Quando sono arrivato, lui era già uscito. Il giorno prima avevo perso le chiavi. Dopo aver mangiato, sono uscito.'),
      ]),
      producao(5, 'Fale 1 minuto sobre um acontecimento que mudou um dia seu, deixando claro o que já tinha acontecido antes.'),
    ]),
  ],
});
