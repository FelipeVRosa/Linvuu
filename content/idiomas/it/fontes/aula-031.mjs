import { aula, sessao, revisao, producao, palavras, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 31, titulo: 'Quantidade, advérbios e preposições (2)', nivel: 'a2',
  objetivo: "Expressar quantidade (molto, troppo, poco, tutto, ogni, qualche, alcuni), formar e posicionar advérbios (-mente, bene, già, mai, ancora) e usar «da», «fa», «tra/fra», «per», «in» e «a» com tempo, lugar e transporte.",
  nota: "Você mede quantidades, diz com que frequência faz as coisas e situa os fatos no tempo. Próxima aula: relativos «che» e «cui».",
  sessoes: [
    sessao('S1', 'Quantidade: molto, troppo, poco, tutto', [
      revisao(5, 'Diga em voz alta o que você está fazendo agora, o que acabou de fazer e o que está para fazer (aula 30).'),
      palavras(8, [
        ['molto', 'mólto', 'muito', ''], ['troppo', 'tróppo', 'demais', ''], ['poco', 'póko', 'pouco', ''], ['abbastanza', 'abbastántsa', 'bastante', ''],
        ['tutto', 'tútto', 'tudo / todo', ''], ['ogni', 'ónhi', 'cada', ''], ['qualche', 'kuálke', 'algum / alguns', ''], ["un po' di", 'un pó di', 'um pouco de', ''],
      ]),
      gramatica(12, 'Molto, troppo, poco: adjetivo ou advérbio', "PASSO 1: «molto, troppo, poco, tanto, tutto» podem ser adjetivos e então concordam com o substantivo: «molti amici», «molta acqua», «troppe cose», «poco tempo», «poche persone». PASSO 2: quando modificam um verbo, um adjetivo ou outro advérbio, são advérbios e NÃO variam: «Mangio molto.» «È molto stanca.» «Sono troppo stanchi.» «Parli poco.» PASSO 3: «abbastanza» (bastante) nunca varia: «abbastanza grande», «abbastanza tempo». PASSO 4: «tutto» pede artigo depois: «tutto il giorno», «tutta la settimana», «tutti i giorni», «tutte le sere». Sem artigo, a frase soa estranha. PASSO 5: «tutto» como pronome: «Ho capito tutto.» «Va tutto bene.» PASSO 6: «ogni» (cada) é invariável e vem com substantivo no singular: «ogni giorno, ogni settimana». PASSO 7: «qualche» (algum) também vem com o singular, mas o sentido é plural: «qualche amico» = alguns amigos; verbo no singular: «Qualche amico viene». Para o plural explícito, use «alcuni / alcune»: «alcuni amici vengono». PASSO 8: «un po' di + substantivo» (um pouco de): «un po' di caffè», «un po' di tempo». PASSO 9: negativos: «nessuno» (nenhum), «niente / nulla» (nada), com «non» antes do verbo: «Non ho nessun amico.» «Non ho niente.»", {
        tag: 'Quantidade',
        comparacao: "o português também tem «muito/muita/muitos» como adjetivo, mas o advérbio é invariável: «ele é muito alto», «eles são muito altos». É o mesmo em italiano: «È molto alto», «Sono molto alti». O erro típico é concordar o advérbio («sono molti stanchi»). Outra armadilha: «qualche amico» traduz-se «alguns amigos», embora o substantivo fique no singular; em português dizemos «algum amigo» no singular, mas «alguns amigos» no plural.",
        tabela: [
          { palavra: 'molto / molta / molti / molte', funcao: 'adjetivo (concorda)', exemplo: 'Ho molti amici.' },
          { palavra: 'molto', funcao: 'advérbio (invariável)', exemplo: 'Sono molto stanchi.' },
          { palavra: 'troppo / troppa / troppi / troppe', funcao: 'adjetivo: demais', exemplo: 'Ci sono troppe persone.' },
          { palavra: 'poco / poca / pochi / poche', funcao: 'adjetivo: pouco', exemplo: 'Ho poco tempo.' },
          { palavra: 'tutto + artigo', funcao: 'todo o / toda a', exemplo: 'tutto il giorno, tutti i giorni' },
          { palavra: 'ogni + singular', funcao: 'cada', exemplo: 'Ogni mattina corro.' },
          { palavra: 'qualche + singular', funcao: 'alguns', exemplo: 'Qualche amico viene.' },
          { palavra: "un po' di", funcao: 'um pouco de', exemplo: "Vorrei un po' di latte." },
        ],
        erros: [
          ['Sono molti stanchi.', 'Sono molto stanchi.', 'Antes de adjetivo, «molto» é advérbio e não varia.'],
          ['Ho molto amici.', 'Ho molti amici.', 'Como adjetivo, «molto» concorda com «amici».'],
          ['Qualche amici vengono.', 'Qualche amico viene.', '«Qualche» pede substantivo e verbo no singular.'],
          ['Tutti giorni lavoro.', 'Tutti i giorni lavoro.', 'Depois de «tutto» falta o artigo.'],
        ],
      }),
      producao(5, 'Descreva em voz alta a sua semana com «molto», «troppo», «poco», «tutti i giorni», «ogni» e «qualche».', 'Lavoro tutti i giorni. Ho poco tempo libero. Ogni sera cucino un po\'.'),
    ]),
    sessao('S2', 'Advérbios: -mente, bene, già, mai', [
      revisao(4, 'Diga cinco frases com «molto», «troppo», «poco», «abbastanza» e «tutto».'),
      palavras(6, [
        ['sempre', 'sémpre', 'sempre', ''], ['spesso', 'spésso', 'frequentemente', ''], ['mai', 'mai', 'nunca / alguma vez', ''], ['già', 'djá', 'já', ''], ['ancora', 'ankôra', 'ainda / mais', ''], ['di solito', 'di sólito', 'geralmente', ''],
      ]),
      gramatica(12, 'Advérbios de modo e de tempo', "PASSO 1: muitos advérbios de modo se formam com o feminino do adjetivo + «-mente»: lento → lenta → lentamente; chiaro → chiara → chiaramente. PASSO 2: adjetivos em «-e» acrescentam «-mente» direto: veloce → velocemente; felice → felicemente. PASSO 3: adjetivos terminados em «-le» ou «-re» perdem o «e» final: facile → facilmente; regolare → regolarmente; probabile → probabilmente. PASSO 4: irregulares muito comuns: buono → bene; cattivo → male. PASSO 5: a ordem natural: «Parlo bene l'italiano.» «Lavora velocemente.» PASSO 6: advérbios de tempo e frequência: sempre, spesso, di solito, a volte, qualche volta, mai. PASSO 7: com o passato prossimo, «già», «mai», «sempre» e «ancora» ficam entre o auxiliar e o particípio: «Ho già mangiato.» «Non ho ancora mangiato.» «Sei mai stato a Roma?» «Ho sempre studiato.» PASSO 8: «mai» sozinho em pergunta significa «alguma vez»; com «non» significa «nunca»: «Non mangio mai carne.» PASSO 9: «ancora» tem dois sentidos: «ainda» («Non è ancora arrivato») e «mais / de novo» («Vuoi ancora caffè?»).", {
        tag: 'Advérbios',
        comparacao: "o sufixo «-mente» é igual ao do português: lentamente = lentamente; facilmente = facilmente; probabilmente = provavelmente. A armadilha está no «bem/mal»: em italiano «buono» é adjetivo e o advérbio é «bene»: «Parla bene», nunca «parla buono». Outra diferença: o português usa «nunca» e «já» em lugares diferentes; em italiano «mai» pode significar «nunca» (com «non») ou «alguma vez» (em pergunta).",
        tabela: [
          { adjetivo: 'lento', adverbio: 'lentamente', sentido: 'devagar' },
          { adjetivo: 'facile', adverbio: 'facilmente', sentido: 'facilmente' },
          { adjetivo: 'regolare', adverbio: 'regolarmente', sentido: 'regularmente' },
          { adjetivo: 'veloce', adverbio: 'velocemente', sentido: 'rapidamente' },
          { adjetivo: 'buono', adverbio: 'bene', sentido: 'bem' },
          { adjetivo: 'cattivo', adverbio: 'male', sentido: 'mal' },
        ],
        erros: [
          ['Parli italiano buono.', 'Parli bene l\'italiano.', 'Advérbio de modo: «bene», não «buono».'],
          ['Ho mangiato già.', 'Ho già mangiato.', '«Già» fica entre o auxiliar e o particípio.'],
          ['Parla facilemente.', 'Parla facilmente.', 'Adjetivos em «-le» perdem o «e» antes de «-mente».'],
          ['Mangio mai carne.', 'Non mangio mai carne.', '«Mai» com sentido de «nunca» pede «non» antes do verbo.'],
        ],
      }),
      producao(8, 'Diga oito frases sobre a frequência com que você faz coisas (sempre, spesso, di solito, a volte, non… mai), uma sobre algo que já fez e outra sobre algo que ainda não fez.', 'Di solito mi alzo presto. Non ho ancora visto Venezia. Ho già mangiato.'),
    ]),
    sessao('S3', 'Preposições (2): da, fa, tra, per, in, a', [
      revisao(4, 'Escreva três advérbios em «-mente» e use cada um numa frase.'),
      palavras(5, [
        ['da due anni', 'da dúe ánni', 'há dois anos (e continua)', ''], ['due anni fa', 'dúe ánni fa', 'há dois anos (passado)', ''], ['fra due ore', 'fra dúe óre', 'daqui a duas horas', ''], ['per tre giorni', 'per tre djórni', 'por três dias', ''], ['in treno', 'in trêno', 'de trem', ''],
      ]),
      gramatica(8, 'Da, fa, tra / fra, per, in, a', "PASSO 1: «da + tempo + presente» indica uma situação que começou no passado e continua: «Abito qui da due anni.» «Studio italiano da gennaio.» PASSO 2: «tempo + fa» indica quando algo aconteceu e já acabou: «Sono arrivato due anni fa.» PASSO 3: «tra / fra + tempo» indica o que acontecerá daqui a algum tempo: «Parto tra due giorni.» «Arrivo fra dieci minuti.» «Tra» e «fra» são iguais. PASSO 4: «per + duração» para ações concluídas: «Ho abitato a Roma per tre anni.» PASSO 5: «da + pessoa» significa «na casa de, no lugar de»: «Vado da Marco.» «Sono dal dentista.» PASSO 6: «in + meio de transporte»: «in treno, in aereo, in macchina, in autobus, in bici»; mas «a piedi» (a pé). PASSO 7: «a + cidade», «in + país ou região»: «a Milano», «in Italia», «in Toscana».", {
        tag: 'Preposições',
        comparacao: "o português «há» tem dois usos: «moro aqui há dois anos» e «cheguei há dois anos». O italiano usa duas estruturas diferentes: «abito qui DA due anni» (continua) e «sono arrivato due anni FA» (acabou). E «daqui a dois dias» é «FRA/TRA due giorni», nunca «a due giorni». Erro comum: usar «fa» com um verbo no presente.",
        tabela: [
          { ideia: 'continua desde / há', italiano: 'da + tempo + presente', exemplo: 'Abito qui da due anni.' },
          { ideia: 'aconteceu há', italiano: 'tempo + fa + passato prossimo', exemplo: 'Sono arrivato due anni fa.' },
          { ideia: 'daqui a', italiano: 'tra / fra + tempo', exemplo: 'Parto fra due giorni.' },
          { ideia: 'duração (acabada)', italiano: 'per + tempo', exemplo: 'Ho abitato a Roma per tre anni.' },
          { ideia: 'na casa de', italiano: 'da + pessoa', exemplo: 'Vado da Marco.' },
          { ideia: 'transporte', italiano: 'in + meio', exemplo: 'Vado in treno.' },
        ],
        erros: [
          ['Abito qui due anni fa.', 'Abito qui da due anni.', 'A situação continua: use «da» + presente.'],
          ['Sono arrivato da due anni.', 'Sono arrivato due anni fa.', 'O fato acabou: use «fa».'],
          ['Parto in due giorni.', 'Parto fra due giorni.', '«Daqui a» é «tra / fra».'],
          ['Vado a Marco stasera.', 'Vado da Marco stasera.', 'Para ir à casa de uma pessoa, use «da».'],
        ],
      }),
      texto(8, 'Un weekend a Firenze / Um fim de semana em Florença', "Mio fratello abita a Firenze da tre anni. Io non ci sono mai stata, ma sono già stata a Siena due anni fa. Fra due settimane vado a trovarlo in treno e resto da lui per tre giorni. Di solito non porto molte cose: solo una valigia piccola e qualche libro. Mio fratello dice che la città è bellissima e che ci sono moltissimi turisti, ma che si mangia benissimo. Sono contenta di partire.", "Meu irmão mora em Florença há três anos. Eu nunca estive lá, mas já estive em Siena há dois anos. Daqui a duas semanas vou visitá-lo de trem e fico na casa dele por três dias. Geralmente não levo muitas coisas: só uma mala pequena e alguns livros. Meu irmão diz que a cidade é lindíssima e que há muitíssimos turistas, mas que se come muito bem. Estou contente de partir.", [
        ['Da quanto tempo abita a Firenze il fratello?', 'Da tre anni.'], ['Quando va a trovarlo?', 'Fra due settimane.'], ['Come viaggia?', 'In treno.'], ['Per quanto tempo resta?', 'Per tre giorni.'], ['Che cosa porta?', 'Una valigia piccola e qualche libro.'],
      ]),
      producao(5, 'Diga em voz alta: há quanto tempo você mora onde mora, quando você chegou, e o que você fará daqui a uma semana.', 'Abito qui da cinque anni. Sono arrivato nel 2020. Fra una settimana vado da mia nonna.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 31', [
      revisao(5, 'Diga em voz alta cinco frases com advérbios de frequência e três com «da», «fa» e «fra».'),
      exercicios(20, [
        ouvir('Abito qui da due anni', ['Abito qui da due anni', 'Abito qui due anni fa', 'Abiterò qui fra due anni'], 'Abito qui da due anni', 'Ouça «da».'),
        ouvir('Sono arrivato due anni fa', ['Sono arrivato due anni fa', 'Sono arrivato da due anni', 'Arrivo fra due anni'], 'Sono arrivato due anni fa', 'Ouça «fa».'),
        ouvir('Non mangio mai carne', ['Non mangio mai carne', 'Mangio sempre carne', 'Non ho mai mangiato carne'], 'Non mangio mai carne', 'Ouça «mai».'),
        ditado('Ho già mangiato', 'Escreva: Ho già mangiato.'),
        ditado('Parto fra due giorni', 'Escreva: Parto fra due giorni.'),
        ditado('Lavoro tutti i giorni', 'Escreva: Lavoro tutti i giorni.'),
        mc('Qual frase está correta?', ['Sono molto stanchi.', 'Sono molti stanchi.', 'Sono molte stanchi.'], 'Sono molto stanchi.', 'Advérbio invariável.'),
        mc('«Daqui a dois dias» em italiano:', ['fra due giorni', 'da due giorni', 'due giorni fa'], 'fra due giorni', 'Futuro: tra / fra.'),
        mc('Advérbio de «facile»:', ['facilmente', 'facilemente', 'facilamente'], 'facilmente', 'Adjetivos em «-le» perdem o «e».'),
        mc('Qual frase está correta?', ['Qualche amico viene.', 'Qualche amici vengono.', 'Qualche amico vengono.'], 'Qualche amico viene.', '«Qualche» + singular.'),
        lacuna('Abito a Milano ___ tre anni.', ['da', 'fa', 'per'], 'da', 'Situação que continua.'),
        lacuna('Ho abitato a Roma ___ tre anni. (acabou)', ['per', 'da', 'fra'], 'per', 'Duração concluída.'),
        lacuna('Vado ___ treno a Firenze.', ['in', 'a', 'su'], 'in', 'Transporte: in.'),
        lacuna('Non ho ___ mangiato. (ainda)', ['ancora', 'mai', 'sempre'], 'ancora', '«Non… ancora» = ainda não.'),
        ordem('Ordene: «Ho già mangiato la pizza.»', ['Ho', 'già', 'mangiato', 'la', 'pizza'], 'Ho già mangiato la pizza.', '«Già» entre auxiliar e particípio.'),
        ordem('Ordene: «Parlo bene l\'italiano.»', ['Parlo', 'bene', "l'italiano"], "Parlo bene l'italiano.", 'Advérbio «bene».'),
        livre('Escreva em italiano: Moro aqui há dois anos. Cheguei há dois anos. Parto daqui a três dias. Nunca como carne.', 'Abito qui da due anni. Sono arrivato due anni fa. Parto fra tre giorni. Non mangio mai carne.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os seus hábitos e sobre o tempo: o que você faz sempre, o que nunca faz, o que fez há um ano e o que fará daqui a um mês.'),
    ]),
  ],
});
