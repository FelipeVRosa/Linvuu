import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 46, titulo: 'Congiuntivo imperfetto e trapassato', nivel: 'b1',
  objetivo: 'Formar o congiuntivo imperfetto e o trapassato, aplicar a correlação de tempos depois de verbos no passado e no condizionale e usar «come se», «magari» e «vorrei che» para desejos e comparações irreais.',
  nota: 'Você completa os quatro tempos do congiuntivo. O português tem as mesmas formas em «-sse» («falasse», «vendesse»), o que ajuda muito. Próxima aula: periodo ipotetico.',
  sessoes: [
    sessao('S1', 'Parlassi, vendessi, dormissi', [
      revisao(5, 'Diga em voz alta o congiuntivo presente e passato de «finire» e «partire» com «che lui».'),
      palavras(8, [
        ['pensavo che', 'pensávo ke', 'eu achava que', ''], ['credevo che', 'credêvo ke', 'eu acreditava que', ''], ['speravo che', '', 'eu esperava que', ''], ['volevo che', 'volêvo ke', 'eu queria que', ''], ['sembrava che', 'sembráva ke', 'parecia que', ''], ['vorrei che', 'vorrêi ke', 'eu queria que', ''], ['come se', 'kôme se', 'como se', ''], ['magari', 'magári', 'tomara, talvez', ''],
      ]),
      gramatica(12, 'Che io parlassi, che tu vendessi', 'PASSO 1: o congiuntivo imperfetto forma-se trocando o -are, -ere ou -ire do infinitivo pelas terminações -assi, -assi, -asse, -assimo, -aste, -assero (-are), -essi… (-ere) e -issi… (-ire): «parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero»; «vendessi, vendessi, vendesse, vendessimo, vendeste, vendessero»; «dormissi, dormissi, dormisse, dormissimo, dormiste, dormissero». PASSO 2: irregulares: essere (fossi, fossi, fosse, fossimo, foste, fossero), dare (dessi), stare (stessi), fare (facessi), dire (dicessi), bere (bevessi), porre (ponessi). PASSO 3: os outros verbos seguem o infinitivo (andassi, venissi, uscissi, potessi, volessi, dovessi, sapessi). PASSO 4: o imperfetto é o tempo do congiuntivo depois de verbos do passado e do condizionale: «Pensavo che fosse tardi.» «Volevo che venisse.» «Vorrei che tu restassi.» PASSO 5: «come se» sempre pede o imperfetto ou o trapassato: «Parla come se sapesse tutto.» PASSO 6: «magari» + imperfetto expressa um desejo difícil: «Magari fosse vero!» PASSO 7: primeira e segunda pessoa do singular são iguais: use o pronome quando preciso: «Pensavo che tu fossi stanco». PASSO 8: a sílaba tônica de «parlassimo» e «parlassero» é «las»: par-LAS-si-mo, par-LAS-se-ro.', {
        tag: 'Congiuntivo',
        comparacao: 'o imperfeito do subjuntivo em português é muito parecido: «que eu falasse, que ele vendesse, que nós dormíssemos». O italiano reflete: parlassi, vendesse, dormissimo. Quem conhece «falasse», «vendesse» e «dormisse» reconhece logo a vogal: -a- nos verbos em -are, -e- nos verbos em -ere, -i- nos verbos em -ire.',
        tabela: [
          { pessoa: 'che io', parlare: 'parlassi', vendere: 'vendessi', dormire: 'dormissi', essere: 'fossi' }, { pessoa: 'che tu', parlare: 'parlassi', vendere: 'vendessi', dormire: 'dormissi', essere: 'fossi' }, { pessoa: 'che lui / lei', parlare: 'parlasse', vendere: 'vendesse', dormire: 'dormisse', essere: 'fosse' }, { pessoa: 'che noi', parlare: 'parlassimo', vendere: 'vendessimo', dormire: 'dormissimo', essere: 'fossimo' }, { pessoa: 'che voi', parlare: 'parlaste', vendere: 'vendeste', dormire: 'dormiste', essere: 'foste' }, { pessoa: 'che loro', parlare: 'parlassero', vendere: 'vendessero', dormire: 'dormissero', essere: 'fossero' },
        ],
        erros: [['Pensavo che è tardi.', 'Pensavo che fosse tardi.', 'Verbo principal no passado: congiuntivo imperfetto.'], ['Volevo che vieni.', 'Volevo che venissi.', 'Depois de «volevo che».'], ['Parla come se sa tutto.', 'Parla come se sapesse tutto.', '«Come se» pede imperfetto.'], ['Vorrei che tu resti.', 'Vorrei che tu restassi.', 'Depois do condizionale: imperfetto.']],
      }),
      producao(5, 'Diga em voz alta cinco frases: «Pensavo che…», «Credevo che…», «Volevo che…».'),
    ]),
    sessao('S2', 'O trapassato e a correlação de tempos', [
      revisao(4, 'Conjugue em voz alta «che io fossi, che tu avessi, che lui facesse, che noi dicessimo».'),
      palavras(6, [
        ['se solo', 'se sôlo', 'se ao menos', ''], ['sarebbe meglio che', 'sarêbbe mélio ke', 'seria melhor que', ''], ['avrei preferito che', 'avréi preferíto ke', 'eu teria preferido que', ''], ['speravo che', '', 'eu esperava que', ''], ['immaginavo che', '', 'eu imaginava que', ''], ['mi pareva che', 'mi paréva ke', 'me parecia que', ''],
      ]),
      gramatica(12, 'Fossi partito, avessi capito', 'PASSO 1: o congiuntivo trapassato forma-se com o IMPERFETTO do congiuntivo de «avere» ou «essere» + particípio: «avessi mangiato, avessi finito, avesse detto, avessimo visto, aveste letto, avessero capito»; «fossi partito/a, fossi arrivato/a, fosse uscito, fossimo andati/e, foste tornati/e, fossero stati/e». PASSO 2: ele expressa o fato anterior a um verbo principal no passado: «Pensavo che fosse già partito.» «Credevo che avesse capito.» PASSO 3: a correlação segue um padrão: principal no presente ou futuro → presente (ao mesmo tempo) ou passato (antes); principal no passado ou condizionale → imperfetto (ao mesmo tempo) ou trapassato (antes). PASSO 4: exemplo com «pensare»: «Penso che parli» / «Penso che abbia parlato»; «Pensavo che parlasse» / «Pensavo che avesse parlato». PASSO 5: depois do condizionale: «Vorrei che tu fossi qui.» «Avrei preferito che tu mi avessi avvisato.» PASSO 6: lamentos: «Se solo avessi saputo!» (se ao menos eu soubesse). PASSO 7: o pronome vai antes do auxiliar: «Credevo che l\'avessi detto» (que você o tinha dito). PASSO 8: «sembrare», «parere» e «credere» seguem o mesmo padrão: «Sembrava che fosse tutto finito.»', {
        tag: 'Congiuntivo',
        comparacao: 'o português tem o mais-que-perfeito composto do subjuntivo: «que ele tivesse saído». O italiano usa o par «avesse» / «fosse» + particípio. Em português a forma é «tivesse saído»; em italiano, «pensavo che fosse uscito» (com «essere») é o uso regular.',
        tabela: [
          { principal: 'penso / spero', simultaneo: 'che parli', anterior: 'che abbia parlato' }, { principal: 'pensavo / speravo', simultaneo: 'che parlasse', anterior: 'che avesse parlato' }, { principal: 'vorrei', simultaneo: 'che tu venissi', anterior: 'che tu fossi venuto' }, { principal: 'avrei preferito', simultaneo: 'che tu venissi', anterior: 'che tu mi avessi avvisato' },
        ],
        erros: [['Pensavo che avesse andato.', 'Pensavo che fosse andato.', '«Andare» usa «essere».'], ['Credevo che avevano capito.', 'Credevo che avessero capito.', 'Depois de «credevo che»: congiuntivo.'], ['Sembrava che Anna fosse partito.', 'Sembrava che Anna fosse partita.', 'O particípio concorda com o sujeito.'], ['Speravo che hai dormito bene.', 'Speravo che tu avessi dormito bene.', 'Anterior a um verbo no passado.']],
      }),
      producao(8, 'Reconte em voz alta oito suposições que você fazia no passado, por exemplo: «Pensavo che il treno fosse già partito».'),
    ]),
    sessao('S3', 'Desejos e comparações irreais', [
      revisao(4, 'Complete em voz alta: «Vorrei che…», «Avrei preferito che…», «Credevo che…».'),
      palavras(5, [
        ['immaginare', 'immadjináre', 'imaginar', ''], ['sostituire', 'sostituíre', 'substituir', ''], ['il capo', 'il kápo', 'o chefe', ''], ['in ritardo', 'in ritárdo', 'atrasado', ''], ['riposarsi', 'riposársi', 'descansar', ''],
      ]),
      gramatica(8, 'Magari, come se, vorrei che', 'PASSO 1: «magari» + imperfetto expressa um desejo irreal ou difícil: «Magari avessi più tempo!» «Magari fosse domenica!» PASSO 2: «come se» + imperfetto ou trapassato indica comparação irreal: «Parla come se fosse il capo.» «Mi guarda come se non mi avesse mai visto.» PASSO 3: «vorrei che» + imperfetto é o pedido educado: «Vorrei che tu mi ascoltassi». PASSO 4: «se solo» + trapassato lamenta o passado: «Se solo avessi studiato!» PASSO 5: «sarebbe bello che» + imperfetto: «Sarebbe bello che tutti capissero».', {
        tag: 'Congiuntivo',
        comparacao: 'em português «tomara que» pede o presente («tomara que ele venha»); «magari» em italiano é mais flexível: pode ser «talvez» (com indicativo) ou «tomara» (com imperfetto): «Magari viene» (talvez ele venha), «Magari venisse» (tomara que viesse).',
        tabela: [
          { expressao: 'magari + imperfetto', sentido: 'tomara, se fosse assim', exemplo: 'Magari fosse domenica!' }, { expressao: 'come se + imperfetto', sentido: 'como se', exemplo: 'Parla come se fosse il capo.' }, { expressao: 'come se + trapassato', sentido: 'como se tivesse', exemplo: 'Mi guarda come se non mi avesse mai visto.' }, { expressao: 'vorrei che + imperfetto', sentido: 'queria que', exemplo: 'Vorrei che tu restassi.' },
        ],
        erros: [['Parla come se è il capo.', 'Parla come se fosse il capo.', '«Come se» pede congiuntivo.'], ['Magari ho più tempo!', 'Magari avessi più tempo!', 'Desejo irreal: imperfetto.'], ['Vorrei che mi ascolti.', 'Vorrei che mi ascoltassi.', 'Depois de «vorrei che»: imperfetto.'], ['Se solo ho studiato!', 'Se solo avessi studiato!', 'Lamento do passado: trapassato.']],
      }),
      dialogo(8, 'Bisogno di riposo', 'Francesca está exausta e conversa com Roberto antes das férias.', [
        ['Francesca', 'Sai, pensavo che tu fossi già partito per le vacanze.', 'Sabe, eu achava que você já tinha partido para as férias.'],
        ['Roberto', 'No, volevo che la famiglia venisse con me, ma mia moglie ha ancora degli esami.', 'Não, eu queria que a família viesse comigo, mas minha esposa ainda tem provas.'],
        ['Francesca', 'Magari potessi partire anch\'io! Sono stanchissima.', 'Tomara eu pudesse partir também! Estou cansadíssima.'],
        ['Roberto', 'Parli come se non ti riposassi mai.', 'Você fala como se nunca descansasse.'],
        ['Francesca', 'Infatti! Lavoro come se fossi sempre in ritardo.', 'Pois é! Trabalho como se estivesse sempre atrasada.'],
        ['Roberto', 'Credevo che il capo ti avesse dato qualche giorno libero.', 'Eu achava que o chefe tinha lhe dado alguns dias de folga.'],
        ['Francesca', 'Lo speravo, ma sembrava che non ci fosse nessuno a sostituirmi.', 'Eu esperava, mas parecia que não havia ninguém para me substituir.'],
        ['Roberto', 'Vorrei che tu prendessi almeno un fine settimana.', 'Eu queria que você tirasse pelo menos um fim de semana.'],
        ['Francesca', 'Hai ragione. Se solo avessi un po\' di tempo!', 'Você tem razão. Se ao menos eu tivesse um pouco de tempo!'],
        ['Roberto', 'Prendi quel fine settimana e non pensarci.', 'Pegue esse fim de semana e não pense nisso.'],
      ]),
      producao(5, 'Diga em voz alta cinco desejos irreais com «magari» e «vorrei che».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 46', [
      revisao(5, 'Diga em voz alta o que você pensava ou esperava ontem sobre o dia de hoje, com «pensavo che…» e «speravo che…».'),
      exercicios(20, [
        ouvir('Pensavo che fosse tardi', ['Pensavo che fosse tardi', 'Pensavo che è tardi', 'Penso che sia tardi'], 'Pensavo che fosse tardi', 'Ouça «fosse».'),
        ouvir('Vorrei che tu restassi', ['Vorrei che tu restassi', 'Vorrei che tu resti', 'Vorrei che tu rimanga'], 'Vorrei che tu restassi', 'Ouça «restassi».'),
        ouvir('Credevo che avesse capito', ['Credevo che avesse capito', 'Credevo che abbia capito', 'Credevo che aveva capito'], 'Credevo che avesse capito', 'Ouça «avesse capito».'),
        ditado('Parla come se sapesse tutto', 'Escreva: Parla come se sapesse tutto.'), ditado('Magari fosse domenica', 'Escreva: Magari fosse domenica.'), ditado('Se solo avessi studiato', 'Escreva: Se solo avessi studiato.'),
        mc('Qual frase está correta?', ['Volevo che venisse.', 'Volevo che viene.', 'Volevo che venga.'], 'Volevo che venisse.', 'Passado + imperfetto.'),
        mc('Complete: «Parla ___ sapesse tutto.»', ['come se', 'come', 'come che'], 'come se', '«Come se» + imperfetto.'),
        mc('Qual frase está correta?', ['Pensavo che fosse già partito.', 'Pensavo che aveva già partito.', 'Pensavo che sia già partito.'], 'Pensavo che fosse già partito.', 'Trapassato.'),
        mc('«Tomara que fosse domingo» em italiano:', ['Magari fosse domenica!', 'Magari è domenica!', 'Magari sia domenica!'], 'Magari fosse domenica!', 'Desejo irreal.'),
        lacuna('Pensavo che tu ___ stanco. (essere)', ['fossi', 'sei', 'sia'], 'fossi', 'Imperfetto de «essere».'),
        lacuna('Volevo che lei ___ con noi. (venire)', ['venisse', 'veniva', 'venga'], 'venisse', 'Imperfetto.'),
        lacuna('Credevo che loro ___ già mangiato. (avere)', ['avessero', 'avevano', 'abbiano'], 'avessero', 'Trapassato.'),
        lacuna('Vorrei che tu mi ___ . (ascoltare)', ['ascoltassi', 'ascolti', 'ascoltavi'], 'ascoltassi', 'Pedido educado.'),
        ordem('Ordene: «Pensavo che fosse tardi.»', ['Pensavo', 'che', 'fosse', 'tardi'], 'Pensavo che fosse tardi.', 'Correlação de tempos.'),
        ordem('Ordene: «Parla come se fosse il capo.»', ['Parla', 'come', 'se', 'fosse', 'il', 'capo'], 'Parla come se fosse il capo.', '«Come se» + imperfetto.'),
        livre('Escreva em italiano: Eu achava que ele tinha saído. Queria que você ficasse. Ela fala como se soubesse tudo.', 'Pensavo che fosse uscito. Volevo che tu restassi. Parla come se sapesse tutto.'),
      ]),
      producao(5, 'Fale 1 minuto sobre algo que você queria que fosse diferente na sua vida, com «vorrei che» e «magari».'),
    ]),
  ],
});
