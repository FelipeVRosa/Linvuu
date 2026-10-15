import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 44, titulo: 'Congiuntivo presente', nivel: 'b1',
  objetivo: 'Formar o congiuntivo presente (regular e irregular) e usá-lo depois de verbos de opinião, desejo, dúvida e emoção, de expressões impessoais e de algumas conjunções.',
  nota: 'O congiuntivo é o modo da opinião, do desejo e da dúvida, e o português do Brasil tem um subjuntivo parecido. Próxima aula: congiuntivo passato.',
  sessoes: [
    sessao('S1', 'As formas regulares', [
      revisao(5, 'Diga em voz alta o presente do indicativo de «parlare, vendere, dormire, finire» com «io, tu, lui, noi, voi, loro».'),
      palavras(8, [
        ['penso che', 'pêntso ke', 'acho que', ''], ['credo che', 'krêdo ke', 'creio que', ''], ['voglio che', 'vólio ke', 'quero que', ''], ['spero che', 'spêro ke', 'espero que', ''], ['dubito che', 'dúbito ke', 'duvido que', ''], ['sono contento che', 'sôno kontênto ke', 'estou contente que', ''], ['è importante che', 'è importánte ke', 'é importante que', ''], ['bisogna che', 'bizônha ke', 'é preciso que', ''],
      ]),
      gramatica(12, 'Che io parli, che tu venda', 'PASSO 1: o congiuntivo aparece depois de «che» quando o sujeito da frase subordinada é diferente do sujeito do verbo principal: «Voglio che tu parli.» PASSO 2: verbos em -are: troque a terminação por -i, -i, -i, -iamo, -iate, -ino: «che io parli, che tu parli, che lui parli, che noi parliamo, che voi parliate, che loro parlino». PASSO 3: verbos em -ere: -a, -a, -a, -iamo, -iate, -ano: «venda, vendiamo, vendiate, vendano». PASSO 4: verbos em -ire: -a, -a, -a, -iamo, -iate, -ano: «dorma, dormiamo, dormiate, dormano». PASSO 5: os verbos em -isc- repetem o -isc- em quatro pessoas: «finisca, finisca, finisca, finiamo, finiate, finiscano». PASSO 6: as três pessoas do singular são iguais; por isso se usa o pronome quando há dúvida: «Penso che lui parli». PASSO 7: ortografia: os verbos em -care e -gare mantêm o som duro e ganham h: «cercare → cerchi, cerchiamo»; «pagare → paghi, paghiamo»; os verbos em -iare não repetem o i: «cambiare → cambi, studiare → studi». PASSO 8: se o sujeito é o mesmo nas duas orações, use o infinitivo: «Penso di parlare» e não «penso che io parli».', {
        tag: 'Congiuntivo',
        comparacao: 'o português tem o presente do subjuntivo: «que eu fale, que tu vendas, que ele durma». A ideia é a mesma, e quem domina o subjuntivo em português entende o congiuntivo. Diferenças: o italiano tem as formas do singular iguais, e o português do Brasil usa o indicativo em muitas frases em que o italiano exige o congiuntivo («acho que ele fala bem» ≠ «penso che parli bene»).',
        tabela: [
          { pessoa: 'che io', parlare: 'parli', vendere: 'venda', dormire: 'dorma', finire: 'finisca' }, { pessoa: 'che tu', parlare: 'parli', vendere: 'venda', dormire: 'dorma', finire: 'finisca' }, { pessoa: 'che lui / lei', parlare: 'parli', vendere: 'venda', dormire: 'dorma', finire: 'finisca' }, { pessoa: 'che noi', parlare: 'parliamo', vendere: 'vendiamo', dormire: 'dormiamo', finire: 'finiamo' }, { pessoa: 'che voi', parlare: 'parliate', vendere: 'vendiate', dormire: 'dormiate', finire: 'finiate' }, { pessoa: 'che loro', parlare: 'parlino', vendere: 'vendano', dormire: 'dormano', finire: 'finiscano' },
        ],
        erros: [['Credo che loro dormono.', 'Credo che loro dormano.', 'No congiuntivo, -ire e -ere fazem a terceira do plural em -ano.'], ['Spero che lei finisce presto.', 'Spero che lei finisca presto.', 'Verbos em -isc- trocam -e por -a.'], ['Penso che lui cerci un lavoro.', 'Penso che lui cerchi un lavoro.', 'Em -care o som duro exige «ch».'], ['Voglio che io parli con lui.', 'Voglio parlare con lui.', 'Mesmo sujeito: infinitivo.']],
      }),
      producao(5, 'Diga em voz alta seis frases com «Voglio che tu…» e verbos regulares: «Voglio che tu parli piano.»'),
    ]),
    sessao('S2', 'Os irregulares e os gatilhos', [
      revisao(4, 'Conjugue em voz alta «che io finisca, che lui venda, che loro parlino, che noi dormiamo» e diga o infinitivo de cada forma.'),
      palavras(6, [
        ['affinché', 'affinkè', 'para que', ''], ['benché', 'benkè', 'embora', ''], ['prima che', 'prima ke', 'antes que', ''], ['senza che', 'sêntsa ke', 'sem que', ''], ['a meno che non', 'a méno ke non', 'a menos que', ''], ['purché', 'purkè', 'contanto que', ''],
      ]),
      gramatica(12, 'Sia, abbia, vada, faccia', 'PASSO 1: os irregulares mais importantes: essere (sia, siamo, siate, siano), avere (abbia, abbiamo, abbiate, abbiano), andare (vada, andiamo, andiate, vadano), fare (faccia, facciamo, facciate, facciano), stare (stia, stiamo, stiate, stiano), venire (venga, veniamo, veniate, vengano), potere (possa, possiamo, possiate, possano), volere (voglia, vogliamo, vogliate, vogliano), dovere (deva ou debba, dobbiamo, dobbiate, devano ou debbano), dire (dica, diciamo, diciate, dicano), sapere (sappia, sappiamo, sappiate, sappiano), uscire (esca, usciamo, usciate, escano). PASSO 2: os gatilhos de opinião: «pensare, credere, ritenere, sembrare». PASSO 3: os gatilhos de desejo: «volere, desiderare, sperare, preferire». PASSO 4: dúvida: «dubitare, non essere sicuro, può darsi che». PASSO 5: emoção: «essere contento, avere paura, dispiacere». PASSO 6: expressões impessoais: «bisogna che, è necessario che, è meglio che, è importante che, è possibile che». PASSO 7: conjunções: «affinché, benché, sebbene, prima che, senza che, purché, a meno che non». PASSO 8: depois de «prima che», «senza che» e «a meno che non» o congiuntivo é obrigatório; se o sujeito é o mesmo, use «prima di» e «senza» + infinitivo: «Prima di partire, chiamami» / «Prima che tu parta, chiamami».', {
        tag: 'Congiuntivo',
        comparacao: 'o português usa o subjuntivo depois de «talvez, embora, para que, antes que»; o italiano também. A armadilha é o contrário: «acho que», «creio que» e «espero que» pedem congiuntivo em italiano e, em português, o brasileiro costuma usar o indicativo. Diga «penso che sia», não «penso che è».',
        tabela: [
          { infinito: 'essere', singolare: 'sia', noi: 'siamo', loro: 'siano' }, { infinito: 'avere', singolare: 'abbia', noi: 'abbiamo', loro: 'abbiano' }, { infinito: 'andare', singolare: 'vada', noi: 'andiamo', loro: 'vadano' }, { infinito: 'fare', singolare: 'faccia', noi: 'facciamo', loro: 'facciano' }, { infinito: 'stare', singolare: 'stia', noi: 'stiamo', loro: 'stiano' }, { infinito: 'venire', singolare: 'venga', noi: 'veniamo', loro: 'vengano' }, { infinito: 'potere', singolare: 'possa', noi: 'possiamo', loro: 'possano' }, { infinito: 'volere', singolare: 'voglia', noi: 'vogliamo', loro: 'vogliano' }, { infinito: 'dire', singolare: 'dica', noi: 'diciamo', loro: 'dicano' }, { infinito: 'sapere', singolare: 'sappia', noi: 'sappiamo', loro: 'sappiano' }, { infinito: 'uscire', singolare: 'esca', noi: 'usciamo', loro: 'escano' },
        ],
        erros: [['Bisogna che vai dal medico.', 'Bisogna che tu vada dal medico.', '«Andare» é irregular: vada.'], ['Benché è tardi, usciamo.', 'Benché sia tardi, usciamo.', '«Benché» pede congiuntivo.'], ['Prima che parti, chiamami.', 'Prima che tu parta, chiamami.', '«Prima che» pede congiuntivo.'], ['Te lo spiego affinché capisci.', 'Te lo spiego affinché tu capisca.', '«Affinché» pede congiuntivo.']],
      }),
      producao(8, 'Diga em voz alta oito frases com gatilhos diferentes: «Penso che…», «Spero che…», «Bisogna che…», «Benché…», «Prima che…».'),
    ]),
    sessao('S3', 'Congiuntivo ou indicativo?', [
      revisao(4, 'Diga em voz alta duas frases com «penso che», duas com «spero che» e duas com «è importante che».'),
      palavras(5, [
        ['sono sicuro che', 'sôno sikúro ke', 'tenho certeza que', ''], ['è vero che', 'è véro ke', 'é verdade que', ''], ['è chiaro che', 'è kiáro ke', 'é claro que', ''], ['non so se', 'non sô se', 'não sei se', ''], ['può darsi che', 'puó dársi ke', 'pode ser que', ''],
      ]),
      gramatica(8, 'Certeza pede indicativo', 'PASSO 1: o congiuntivo expressa algo subjetivo, não certo. PASSO 2: quando há certeza, use o indicativo: «So che Marco è a casa», «Sono sicuro che arriva», «È vero che lavora molto», «È chiaro che ha ragione». PASSO 3: quando a certeza é negada, volta o congiuntivo: «Non sono sicuro che sia a casa», «Non è vero che lavori molto». PASSO 4: perguntas de opinião: «Pensi che sia giusto?» PASSO 5: «se» (dúvida) aceita o indicativo ou o congiuntivo: «Non so se è a casa» / «Non so se sia a casa». PASSO 6: na fala informal o indicativo aparece com «penso che»; no que se escreve e no que se estuda, o congiuntivo é a forma esperada.', {
        tag: 'Congiuntivo',
        comparacao: 'em português a mesma regra aparece: «sei que ele chega» (certeza) e «duvido que ele chegue» (dúvida). O italiano acrescenta «penso che» e «credo che» à lista de gatilhos do congiuntivo, o que o português do Brasil nem sempre faz.',
        tabela: [
          { sentido: 'certeza', exemplo: 'So che Marco è a casa.' }, { sentido: 'opinião', exemplo: 'Penso che Marco sia a casa.' }, { sentido: 'certeza negada', exemplo: 'Non sono sicuro che sia a casa.' }, { sentido: 'dúvida com se', exemplo: 'Non so se è / sia a casa.' },
        ],
        erros: [['Sono sicuro che sia a casa.', 'Sono sicuro che è a casa.', 'Certeza: indicativo.'], ['Non sono sicuro che è a casa.', 'Non sono sicuro che sia a casa.', 'Certeza negada: congiuntivo.'], ['So che lui venga.', 'So che lui viene.', '«Sapere» expressa certeza: indicativo.'], ['È vero che lavori molto.', 'È vero che lavora molto.', '«È vero che» pede indicativo.']],
      }),
      dialogo(8, 'Una gita al lago', 'Davide e Elena preparam uma gita de sábado ao lago.', [
        ['Davide', 'Elena, penso che sabato faccia bel tempo. Andiamo al lago?', 'Elena, acho que sábado vai fazer bom tempo. Vamos ao lago?'],
        ['Elena', 'Credo che sia una bella idea, ma bisogna che Marco venga con la macchina.', 'Creio que é uma boa ideia, mas é preciso que Marco venha de carro.'],
        ['Davide', 'Dubito che lui abbia tempo: lavora anche il sabato.', 'Duvido que ele tenha tempo: trabalha também aos sábados.'],
        ['Elena', 'Può darsi che esca prima. Gli scrivo? Voglio che decida entro stasera.', 'Pode ser que saia mais cedo. Escrevo para ele? Quero que decida até esta noite.'],
        ['Davide', 'Va bene. Prima di uscire, controlliamo la strada? Non so se il ponte sia ancora chiuso.', 'Tudo bem. Antes de sairmos, vamos checar a estrada? Não sei se a ponte ainda está fechada.'],
        ['Elena', 'Sono sicura che l\'hanno riaperto: l\'ho letto ieri.', 'Tenho certeza de que a reabriram: li ontem.'],
        ['Davide', 'Allora è tutto pronto, a meno che non piova.', 'Então está tudo pronto, a menos que chova.'],
        ['Elena', 'Non credo che piova: le previsioni dicono sole fino a domenica.', 'Não creio que chova: a previsão diz sol até domingo.'],
        ['Davide', 'Perfetto. Sono contento che tu venga con noi.', 'Perfeito. Estou contente que você venha conosco.'],
        ['Elena', 'Anch\'io. Preparo i panini, benché sia ancora presto.', 'Eu também. Vou preparar os sanduíches, embora ainda seja cedo.'],
      ]),
      producao(5, 'Planeje em voz alta uma saída com um amigo usando cinco gatilhos diferentes do congiuntivo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 44', [
      revisao(5, 'Diga em voz alta três frases com «penso che» e três com «bisogna che».'),
      exercicios(20, [
        ouvir('Penso che lui parli bene', ['Penso che lui parli bene', 'Penso che lui parla bene', 'Penso di parlare bene'], 'Penso che lui parli bene', 'Ouça «parli».'),
        ouvir('Bisogna che tu vada dal medico', ['Bisogna che tu vada dal medico', 'Bisogna che tu vai dal medico', 'Bisogna che tu andi dal medico'], 'Bisogna che tu vada dal medico', 'Ouça «vada».'),
        ouvir('Benché sia tardi, usciamo', ['Benché sia tardi, usciamo', 'Benché è tardi, usciamo', 'Benché fosse tardi, usciamo'], 'Benché sia tardi, usciamo', 'Ouça «sia».'),
        ditado('Spero che tu stia bene', 'Escreva: Spero che tu stia bene.'), ditado('Voglio che loro vengano', 'Escreva: Voglio che loro vengano.'), ditado('È meglio che tu finisca presto', 'Escreva: È meglio che tu finisca presto.'),
        mc('Qual frase está correta?', ['Credo che loro dormano.', 'Credo che loro dormono.', 'Credo che loro dormino.'], 'Credo che loro dormano.', 'Terceira do plural em -ire: -ano.'),
        mc('Qual frase está correta?', ['Sono sicuro che arriva.', 'Sono sicuro che arrivi.', 'Sono sicuro che arrivasse.'], 'Sono sicuro che arriva.', 'Certeza: indicativo.'),
        mc('Qual frase está correta?', ['Prima che tu parta, chiamami.', 'Prima che tu parti, chiamami.', 'Prima che tu partisse, chiamami.'], 'Prima che tu parta, chiamami.', '«Parta» é congiuntivo de partire.'),
        mc('Quando o sujeito é o mesmo, usa-se:', ['o infinitivo', 'o congiuntivo', 'o futuro'], 'o infinitivo', '«Penso di partire».'),
        lacuna('Penso che Luca ___ stanco. (essere)', ['sia', 'è', 'siano'], 'sia', 'Congiuntivo de «essere».'),
        lacuna('Voglio che tu ___ la verità. (dire)', ['dica', 'dici', 'dire'], 'dica', 'Congiuntivo de «dire».'),
        lacuna('Spero che voi ___ bene. (stare)', ['stiate', 'state', 'stiano'], 'stiate', 'Voi: -iate.'),
        lacuna('È importante che loro ___ presto. (venire)', ['vengano', 'vengono', 'venghino'], 'vengano', 'Irregular: venga, vengano.'),
        ordem('Ordene: «Penso che sia una buona idea.»', ['Penso', 'che', 'sia', 'una', 'buona', 'idea'], 'Penso che sia una buona idea.', 'Congiuntivo depois de «penso che».'),
        ordem('Ordene: «Bisogna che tu venga.»', ['Bisogna', 'che', 'tu', 'venga'], 'Bisogna che tu venga.', 'Impessoal + congiuntivo.'),
        livre('Escreva em italiano: Acho que ele fala bem italiano. Espero que você venha. É preciso que a gente saia cedo.', 'Penso che parli bene italiano. Spero che tu venga. Bisogna che usciamo presto.'),
        lacuna('Penso che lei ___ bene. (fale)', ['parla', 'parli', 'parlano'], 'parli', 'Depois de «penso che», o congiuntivo de «-are» termina em «-i».'),
        lacuna('Voglio che voi ___ presto. (venham)', ['venite', 'vengano', 'veniate'], 'veniate', 'Congiuntivo de «venire» com «voi»: «veniate».'),
        lacuna('Dubito che loro ___ tempo. (tenham)', ['abbiano', 'hanno', 'abbiate'], 'abbiano', 'Congiuntivo de «avere» com «loro»: «abbiano».'),
        lacuna('Bisogna che io ___ a casa. (vá)', ['vado', 'vai', 'vada'], 'vada', 'Congiuntivo de «andare»: «vada».'),
        lacuna('Credo che Marco ___ la verità. (saiba)', ['sa', 'sappia', 'sapere'], 'sappia', 'Congiuntivo de «sapere»: «sappia».'),
        mc('Qual é o congiuntivo de «finire» com «lui»?', ['finisca', 'finisce', 'finisci'], 'finisca', 'Os verbos «-isc-» mantêm o «-isc-» no congiuntivo.'),
        mc('Qual frase expressa certeza (indicativo)?', ['So che Marco sia a casa.', 'So che Marco è a casa.', 'So che Marco fosse a casa.'], 'So che Marco è a casa.', 'Certeza pede indicativo.'),
        mc('O que significa «affinché»?', ['para que', 'embora', 'antes que'], 'para que', '«Affinché» introduz finalidade e pede congiuntivo.'),
        mc('Qual é o congiuntivo de «essere» com «loro»?', ['sono', 'siamo', 'siano'], 'siano', 'essere: sia, siamo, siate, siano.'),
        ordem('Ordene: «Spero che voi stiate bene.»', ['Spero', 'che', 'voi', 'stiate', 'bene.'], 'Spero che voi stiate bene.', 'Congiuntivo de «stare» com «voi»: «stiate».'),
        ordem('Ordene: «È importante che loro capiscano.»', ['È', 'importante', 'che', 'loro', 'capiscano.'], 'È importante che loro capiscano.', '«È importante che» pede congiuntivo.'),
        livre('Escreva em italiano: Acho que ela fala bem e espero que venha amanhã.', 'Penso che parli bene e spero che venga domani.'),
        livre('Escreva em italiano: Duvido que ele tenha tempo. É preciso que eu vá embora.', 'Dubito che abbia tempo. Bisogna che io vada via.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você espera, duvida e acha que vai acontecer no seu próximo mês.'),
    ]),
  ],
});
