import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 42, titulo: 'Futuro anteriore e futuro de probabilidade', nivel: 'b1',
  objetivo: 'Formar o futuro anteriore, usá-lo para marcar o que estará concluído antes de outro fato futuro e usar o futuro (semplice e anteriore) para fazer suposições sobre o presente e o passado.',
  nota: 'Esta aula tem duas ideias: «terei feito» (prazo e sequência no futuro) e «deve ter feito» (suposição). Próxima aula: condizionale passato.',
  sessoes: [
    sessao('S1', 'Terei feito: o futuro anteriore', [
      revisao(5, 'Diga em voz alta cinco frases no futuro semplice sobre a próxima semana, por exemplo: «Domani andrò al lavoro in treno.»'),
      palavras(8, [
        ['appena', 'appêna', 'assim que', ''], ['quando', 'kuándo', 'quando', ''], ['dopo che', 'dôpo ke', 'depois que', ''], ['una volta che', 'úna vôlta ke', 'uma vez que, assim que', ''], ['entro', 'êntro', 'até (prazo)', ''], ['tra poco', 'tra pôko', 'daqui a pouco', ''], ['domani a quest\'ora', 'dománi a kuést\'ôra', 'amanhã a esta hora', ''], ['fra un anno', 'fra un ánno', 'daqui a um ano', ''],
      ]),
      gramatica(12, 'Avrò finito, sarò arrivato', 'PASSO 1: o futuro anteriore forma-se com o FUTURO SEMPLICE de «avere» ou «essere» + particípio passado: «avrò mangiato, avrai finito, avrà detto, avremo visto, avrete letto, avranno capito»; «sarò arrivato/a, sarai partito/a, sarà uscito/a, saremo andati/e, sarete tornati/e, saranno stati/e». PASSO 2: a escolha do auxiliar e a concordância seguem as regras do passato prossimo. PASSO 3: primeiro uso: uma ação futura que estará concluída ANTES de outra ação futura: «Quando avrai finito, ti chiamerò.» PASSO 4: as conjunções que costumam trazer esse tempo são «quando, appena, dopo che, una volta che»; a oração principal fica no futuro semplice, no imperativo ou, na fala, no presente: «Appena sarò arrivato, ti scriverò.» «Quando avrete mangiato, andiamo.» PASSO 5: prazo: «Entro venerdì avrò finito il progetto.» «Domani a quest\'ora sarò già arrivato a Roma.» PASSO 6: na fala diária o italiano costuma usar o presente em lugar do futuro: «Appena arrivo, ti chiamo.» O futuro anteriore, porém, dá precisão de ordem e de prazo e é esperado em textos escritos. PASSO 7: negação e advérbios ficam entre o auxiliar e o particípio: «Non avrò ancora finito», «avrò già mangiato». PASSO 8: os pronomes vêm antes do auxiliar: «Lo avrò letto», «Quando l\'avrò letto, te lo dirò.»', {
        tag: 'Futuro',
        comparacao: 'o português usa o subjuntivo futuro: «quando você terminar», «assim que eu chegar». O italiano usa o indicativo no futuro: «quando avrai finito», «appena sarò arrivato». Não use o congiuntivo nessas orações. O português «terei comido» é raro; o italiano «avrò mangiato» é bem mais frequente na escrita.',
        tabela: [
          { pessoa: 'io', avere: 'avrò mangiato', essere: 'sarò arrivato / arrivata' }, { pessoa: 'tu', avere: 'avrai mangiato', essere: 'sarai arrivato / arrivata' }, { pessoa: 'lui / lei', avere: 'avrà mangiato', essere: 'sarà arrivato / arrivata' }, { pessoa: 'noi', avere: 'avremo mangiato', essere: 'saremo arrivati / arrivate' }, { pessoa: 'voi', avere: 'avrete mangiato', essere: 'sarete arrivati / arrivate' }, { pessoa: 'loro', avere: 'avranno mangiato', essere: 'saranno arrivati / arrivate' },
        ],
        erros: [['Avrò andato a casa prima di cena.', 'Sarò andato a casa prima di cena.', '«Andare» usa «essere».'], ['Maria sarà arrivato alle otto.', 'Maria sarà arrivata alle otto.', 'O particípio concorda com o sujeito.'], ['Quando io abbia finito, ti chiamerò.', 'Quando avrò finito, ti chiamerò.', 'Depois de «quando» não se usa congiuntivo.'], ['Entro venerdì finirò avere il progetto.', 'Entro venerdì avrò finito il progetto.', 'Futuro anteriore: auxiliar + particípio.']],
      }),
      producao(5, 'Diga em voz alta três planos com prazo, por exemplo: «Entro giugno avrò finito il corso.»'),
    ]),
    sessao('S2', 'Deve ser, deve ter sido: o futuro de probabilidade', [
      revisao(4, 'Conjugue em voz alta «finire, uscire, arrivare, vedere» no futuro anteriore com «lei».'),
      palavras(6, [
        ['forse', 'fôrse', 'talvez', ''], ['probabilmente', 'probabilménte', 'provavelmente', ''], ['chissà', 'kissá', 'quem sabe', ''], ['può darsi', 'puó dársi', 'pode ser', ''], ['sicuramente', 'sikuraménte', 'certamente', ''], ['saranno le tre', 'saránno le tre', 'devem ser três horas', ''],
      ]),
      gramatica(12, 'Sarà a casa, avrà perso il treno', 'PASSO 1: o futuro semplice também serve para SUPOR algo sobre o presente: «Dov\'è Luca? — Sarà a casa.» (deve estar em casa). PASSO 2: perguntas sobre horas e idade usam o mesmo recurso: «Che ore sono? — Saranno le dieci.» «Quanti anni ha? — Avrà quarant\'anni.» PASSO 3: o futuro anteriore serve para supor algo sobre o PASSADO: «Dov\'è Luca? — Sarà già uscito.» (deve ter saído). «Non risponde: avrà finito la batteria.» PASSO 4: perguntas com «chissà»: «Chissà dove sarà!» «Chissà che cosa avrà detto.» PASSO 5: para dar mais certeza, junte advérbios: «Sarà sicuramente a casa», «Avrà probabilmente perso il treno». PASSO 6: concessão: «Sarà anche bravo, ma non mi piace» (pode até ser bom, mas…). PASSO 7: não confunda com o condizionale: «sarebbe» não é suposição no presente da conversa; ele aparece em notícias ainda não confirmadas. PASSO 8: também existe «dovere»: «Deve essere a casa», «Deve aver perso il treno», também muito comuns e um pouco mais enfáticas; o futuro é a opção mais típica da conversa.', {
        tag: 'Futuro',
        comparacao: 'o português usa «deve ser», «deve ter sido» e o futuro do pretérito «seria». O italiano usa o futuro simples ou o anteriore: «sarà» (deve ser), «sarà stato» (deve ter sido). «Deve essere» também é natural, mas «sarebbe» não serve para suposição; na conversa a forma mais típica é o futuro.',
        tabela: [
          { suposicao: 'presente', forma: 'futuro semplice', exemplo: 'Sarà a casa.' }, { suposicao: 'passado', forma: 'futuro anteriore', exemplo: 'Sarà già uscito.' }, { suposicao: 'hora', forma: 'futuro semplice', exemplo: 'Saranno le tre.' }, { suposicao: 'idade', forma: 'futuro semplice', exemplo: 'Avrà trent\'anni.' }, { suposicao: 'concessão', forma: 'sarà anche + adjetivo', exemplo: 'Sarà anche bravo, ma…' },
        ],
        erros: [['Dov\'è Luca? — Sarebbe a casa.', 'Dov\'è Luca? — Sarà a casa.', 'Suposição = futuro, não condizionale.'], ['Sarà essere già partito.', 'Sarà già partito.', 'Um só verbo conjugado.'], ['Saranno già partito.', 'Saranno già partiti.', '«Partire» usa «essere» e o particípio concorda no plural.'], ['Non risponde: ha finito la batteria (supondo).', 'Non risponde: avrà finito la batteria.', 'Suposição sobre o passado: futuro anteriore.']],
      }),
      producao(8, 'Veja uma foto de rua ou imagine uma cena e faça em voz alta oito suposições: «Sarà mattina», «Avrà dormito poco», «Avranno trent\'anni».'),
    ]),
    sessao('S3', 'Aspettando Sofia', [
      revisao(4, 'Diga em voz alta três suposições sobre o que um amigo está fazendo agora.'),
      palavras(5, [
        ['in ritardo', 'in ritárdo', 'atrasado', ''], ['il traffico', 'il tráffiko', 'o trânsito', ''], ['la batteria', 'la batteria', 'a bateria', ''], ['brindare', 'brindáre', 'brindar', ''], ['che sollievo', 'ke sollièvo', 'que alívio', ''],
      ]),
      gramatica(8, 'Planos e prazos no futuro', 'PASSO 1: para prazos: «Entro / fra + tempo + avrò + particípio»: «Fra un anno avrò imparato l\'italiano.» PASSO 2: para sequências: «Quando avrò finito l\'università, cercherò lavoro.» PASSO 3: para planos com condição: «Se avrò tempo, verrò alla festa.» PASSO 4: no dia a dia, o presente também funciona: «Se ho tempo, vengo.» O futuro soa mais cuidadoso. PASSO 5: use «ormai» quando a conclusão é certa: «A quest\'ora avranno ormai finito.»', {
        tag: 'Futuro',
        comparacao: 'em português: «quando eu terminar a faculdade, vou procurar emprego». Em italiano, a primeira oração vem no futuro anteriore: «quando avrò finito l\'università, cercherò lavoro». Atenção: «università» é a faculdade; «facoltà» é o curso ou departamento.',
        tabela: [
          { tipo: 'prazo', frase: 'Entro giugno avrò finito il corso.' }, { tipo: 'sequência', frase: 'Quando avrò finito, ti chiamerò.' }, { tipo: 'condição', frase: 'Se avrò tempo, verrò.' }, { tipo: 'certeza', frase: 'A quest\'ora saranno ormai arrivati.' },
        ],
        erros: [['Fra un anno ho imparato l\'italiano.', 'Fra un anno avrò imparato l\'italiano.', 'Prazo no futuro: futuro anteriore.'], ['Quando avrò finito, ti ho chiamato.', 'Quando avrò finito, ti chiamerò.', 'A principal fica no futuro.'], ['Se avrò tempo, verrei.', 'Se avrò tempo, verrò.', 'Condição real: indicativo.'], ['A quest\'ora avranno ormai fatto finito.', 'A quest\'ora avranno ormai finito.', 'Um só particípio.']],
      }),
      dialogo(8, 'Aspettando Sofia', 'Chiara e Luca esperam Sofia em uma festa. Ela está atrasada.', [
        ['Chiara', 'Sono già le nove e Sofia non è ancora arrivata. Dove sarà?', 'Já são nove horas e Sofia ainda não chegou. Onde será que está?'],
        ['Luca', 'Sarà rimasta bloccata nel traffico. Di sabato sera è sempre così.', 'Deve ter ficado presa no trânsito. Sábado à noite é sempre assim.'],
        ['Chiara', 'Può darsi. Le ho scritto, ma non ha risposto. Avrà finito la batteria?', 'Pode ser. Escrevi para ela, mas não respondeu. Será que a bateria acabou?'],
        ['Luca', 'Probabilmente sì. Quando avrà caricato il telefono, ci chiamerà.', 'Provavelmente sim. Quando tiver carregado o telefone, ela vai nos ligar.'],
        ['Chiara', 'Speriamo. Intanto cominciamo a mangiare? Avranno fame tutti.', 'Vamos torcer. Enquanto isso, começamos a comer? Todos devem estar com fome.'],
        ['Luca', 'Aspettiamo ancora dieci minuti. Per le nove e mezza sarà sicuramente arrivata.', 'Esperemos mais dez minutos. Às nove e meia ela certamente terá chegado.'],
        ['Chiara', 'Va bene. Appena sarà arrivata, brinderemo tutti insieme.', 'Tudo bem. Assim que ela chegar, brindaremos todos juntos.'],
        ['Luca', 'Ecco, il telefono squilla: è lei! Dice che sta salendo.', 'Olha, o telefone está tocando: é ela! Diz que está subindo.'],
        ['Chiara', 'Che sollievo! Dopo che avrà preso un bicchiere, ci racconterà tutto.', 'Que alívio! Depois que tiver tomado um copo, vai nos contar tudo.'],
        ['Luca', 'Sarà una bella storia, vedrai.', 'Deve ser uma boa história, você vai ver.'],
      ]),
      producao(5, 'Invente em voz alta o motivo do atraso de um amigo, com três suposições.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 42', [
      revisao(5, 'Responda em voz alta: «Che ore sono?», «Dov\'è il tuo vicino?», «Quanti anni ha tua nonna?» com suposições no futuro.'),
      exercicios(20, [
        ouvir('Quando avrai finito, ti chiamerò', ['Quando avrai finito, ti chiamerò', 'Quando finisci, ti chiamerò', 'Quando avevi finito, ti chiamerò'], 'Quando avrai finito, ti chiamerò', 'Ouça «avrai finito».'),
        ouvir('Sarà già uscito', ['Sarà già uscito', 'Sarebbe già uscito', 'Era già uscito'], 'Sarà già uscito', 'Ouça «sarà».'),
        ouvir('Saranno le tre', ['Saranno le tre', 'Sono le tre', 'Sarebbero le tre'], 'Saranno le tre', 'Hora em suposição.'),
        ditado('Entro venerdì avrò finito il progetto', 'Escreva: Entro venerdì avrò finito il progetto.'), ditado('Chissà dove sarà', 'Escreva: Chissà dove sarà.'), ditado('Avrà perso il treno', 'Escreva: Avrà perso il treno.'),
        mc('«Terei comido» em italiano:', ['Avrò mangiato.', 'Avrei mangiato.', 'Ho mangiato.'], 'Avrò mangiato.', 'Futuro anteriore.'),
        mc('Qual frase está correta?', ['Maria sarà arrivata.', 'Maria sarà arrivato.', 'Maria avrà arrivata.'], 'Maria sarà arrivata.', 'Concordância e auxiliar.'),
        mc('«Deve estar em casa» (suposição), em italiano:', ['Sarà a casa.', 'Sarebbe a casa.', 'Era a casa.'], 'Sarà a casa.', 'Futuro de suposição.'),
        mc('«Quando você terminar, me ligue» em italiano:', ['Quando avrai finito, chiamami.', 'Quando finisca, chiamami.', 'Quando abbia finito, chiamami.'], 'Quando avrai finito, chiamami.', 'Indicativo, não congiuntivo.'),
        lacuna('Appena ___ arrivata a Roma, ti scriverò. (eu, mulher)', ['sarò', 'sarà', 'avrò'], 'sarò', '«Arrivare» usa «essere»; o sujeito é «io».'),
        lacuna('Quando ___ mangiato, usciamo. (nós)', ['avremo', 'abbiamo', 'avevamo'], 'avremo', 'Futuro anteriore.'),
        lacuna('Che ore sono? — ___ le dieci.', ['Saranno', 'Sarebbero', 'Sarà'], 'Saranno', 'Plural com «le dieci».'),
        lacuna('Non risponde: ___ finito la batteria.', ['avrà', 'avrebbe', 'aveva'], 'avrà', 'Suposição sobre o passado.'),
        ordem('Ordene: «Quando avrò finito, ti chiamerò.»', ['Quando', 'avrò', 'finito', 'ti', 'chiamerò'], 'Quando avrò finito, ti chiamerò.', 'Sequência futura.'),
        ordem('Ordene: «Sarà già partito.»', ['Sarà', 'già', 'partito'], 'Sarà già partito.', 'Suposição.'),
        livre('Escreva em italiano: Onde estará Luca? Deve ter perdido o trem. Quando ele chegar, vamos comer.', 'Dove sarà Luca? Avrà perso il treno. Quando sarà arrivato, mangeremo.'),
        lacuna('Appena ___ finito, usciremo. (nós)', ['abbiamo', 'avremo', 'avevamo'], 'avremo', 'Futuro anterior: futuro de «avere» + particípio.'),
        lacuna('Domani a quest\'ora ___ già arrivati. (nós)', ['saremo', 'siamo', 'saremmo'], 'saremo', '«Arrivare» usa «essere»: futuro «saremo» + particípio.'),
        lacuna('Dov\'è Anna? — ___ uscita. (deve ter)', ['Avrà', 'Sarà', 'Sarebbe'], 'Sarà', 'Suposição sobre o passado: futuro anterior com «essere».'),
        lacuna('Quanti anni ha tuo nonno? — ___ ottant\'anni. (deve ter)', ['Avrebbe', 'Aveva', 'Avrà'], 'Avrà', 'Suposição sobre idade usa o futuro.'),
        lacuna('Non risponde: ___ dimenticato il telefono. (deve ter)', ['avrà', 'sarà', 'ha'], 'avrà', 'Suposição sobre o passado: futuro anterior com «avere».'),
        mc('Qual é o futuro anterior de «finire» com «voi»?', ['avete finito', 'avreste finito', 'avrete finito'], 'avrete finito', 'Futuro de «avere» + particípio.'),
        mc('O que expressa «Saranno le nove»?', ['uma suposição', 'uma certeza', 'uma ordem'], 'uma suposição', 'O futuro com horas indica suposição: devem ser nove horas.'),
        mc('O que significa «Entro marzo avrò finito il corso»?', ['Terminei o curso em março.', 'Até março terei terminado o curso.', 'Em março vou terminar o curso.'], 'Até março terei terminado o curso.', 'Futuro anterior com prazo.'),
        mc('Qual frase supõe algo sobre o passado?', ['Sarà a casa.', 'Saranno le tre.', 'Sarà già uscito.'], 'Sarà già uscito.', 'Futuro anterior: deve ter saído.'),
        ordem('Ordene: «Appena sarò arrivata, ti scriverò.»', ['Appena', 'sarò', 'arrivata,', 'ti', 'scriverò.'], 'Appena sarò arrivata, ti scriverò.', '«Appena» pede futuro anterior para a ação que vem antes.'),
        ordem('Ordene: «Fra un anno avrò imparato l\'italiano.»', ['Fra', 'un', 'anno', 'avrò', 'imparato', 'l\'italiano.'], 'Fra un anno avrò imparato l\'italiano.', 'Futuro anterior com prazo.'),
        livre('Escreva em italiano: Onde estará Sofia? Deve ter ficado presa no trânsito.', 'Dove sarà Sofia? Sarà rimasta bloccata nel traffico.'),
        livre('Escreva em italiano: Quando eu tiver terminado o projeto, descansarei.', 'Quando avrò finito il progetto, mi riposerò.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você terá feito daqui a cinco anos, usando futuro anteriore.'),
    ]),
  ],
});
