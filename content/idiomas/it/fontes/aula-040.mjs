import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 40, titulo: 'Passato remoto (para ler)', nivel: 'b1',
  objetivo: 'Reconhecer e ler o passato remoto regular e irregular em contos, livros de história e romances, e saber quando ele aparece em italiano falado e escrito.',
  nota: 'Aqui o objetivo é ler com segurança, não falar assim. Você também aprende a reconhecer o infinitivo por trás de formas como «fu», «ebbe» e «fece». Próxima aula: pronomi combinati.',
  sessoes: [
    sessao('S1', 'As terminações regulares', [
      revisao(5, 'Diga em voz alta três frases no passato prossimo sobre o fim de semana e uma no trapassato prossimo.'),
      palavras(8, [
        ['c\'era una volta', 'tchéra úna vólta', 'era uma vez', ''], ['un tempo', 'un têmpo', 'antigamente', ''], ['allora', 'allôra', 'então', ''], ['poi', 'pói', 'depois', ''], ['infine', 'infíne', 'por fim', ''], ['il re', 'il rê', 'o rei', ''], ['il castello', 'il kastéllo', 'o castelo', ''], ['il bosco', 'il bósko', 'o bosque', ''],
      ]),
      gramatica(12, 'Parlai, credei, dormii', 'PASSO 1: o passato remoto conta fatos concluídos e distantes do presente de quem fala: «Dante nacque a Firenze nel 1265.» PASSO 2: verbos em -are: tire «-are» e acrescente -ai, -asti, -ò, -ammo, -aste, -arono: «parlai, parlasti, parlò, parlammo, parlaste, parlarono». PASSO 3: verbos em -ere: -ei (ou -etti), -esti, -é (ou -ette), -emmo, -este, -erono (ou -ettero): «credei, credesti, credé, credemmo, credeste, crederono». PASSO 4: verbos em -ire: -ii, -isti, -ì, -immo, -iste, -irono: «dormii, dormisti, dormì». PASSO 5: a terceira pessoa do singular leva acento na última vogal: «parlò, credé, dormì». Sem acento seria o presente («parlo», «dormo») ou outra forma. PASSO 6: a terceira do plural termina sempre em -rono: «parlarono, crederono, dormirono». PASSO 7: o remoto convive com o imperfetto como o passato prossimo convive: o cenário vai no imperfetto, os fatos no remoto: «Pioveva e il re uscì dal castello.» PASSO 8: neste curso você aprende a LER o remoto; para falar, use o passato prossimo.', {
        tag: 'Passado',
        comparacao: 'o remoto italiano parece o pretérito perfeito simples do português («falei, vendeu, partiram»), e por isso é fácil de reconhecer. A diferença é de uso: em português usamos «falei» para qualquer fato concluído; em italiano, na conversa, a maioria usa o passato prossimo («ho parlato»), e o remoto fica para narrativas, história e livros. No centro-sul da Itália o remoto aparece mais na fala; no norte, quase só na escrita.',
        tabela: [
          { pessoa: 'io', parlare: 'parlai', credere: 'credei', dormire: 'dormii' }, { pessoa: 'tu', parlare: 'parlasti', credere: 'credesti', dormire: 'dormisti' }, { pessoa: 'lui / lei', parlare: 'parlò', credere: 'credé', dormire: 'dormì' }, { pessoa: 'noi', parlare: 'parlammo', credere: 'credemmo', dormire: 'dormimmo' }, { pessoa: 'voi', parlare: 'parlaste', credere: 'credeste', dormire: 'dormiste' }, { pessoa: 'loro', parlare: 'parlarono', credere: 'crederono', dormire: 'dormirono' },
        ],
        erros: [['Loro parlorono con il re.', 'Loro parlarono con il re.', 'A terminação do plural em -are é -arono.'], ['Lui finio il lavoro.', 'Lui finì il lavoro.', 'Terceira pessoa em -ire leva acento: «finì».'], ['Noi arrivamo al castello.', 'Noi arrivammo al castello.', 'A terminação -ammo tem dois m.'], ['Il re parlo con la regina.', 'Il re parlò con la regina.', 'Sem acento seria o presente.']],
      }),
      producao(5, 'Leia em voz alta as seis formas de «parlare» e as de «dormire» no passato remoto, sem olhar a tabela.'),
    ]),
    sessao('S2', 'Os irregulares mais comuns', [
      revisao(4, 'Diga em voz alta o infinitivo de «parlò, credette, dormirono, arrivammo».'),
      palavras(6, [
        ['un giorno', 'un djórno', 'um dia (nos contos)', ''], ['nel 1492', '', 'em 1492', ''], ['la guerra', 'la guérra', 'a guerra', ''], ['la regina', 'la redjína', 'a rainha', ''], ['il cavaliere', 'il kavaliére', 'o cavaleiro', ''], ['morire', 'morire', 'morrer', ''],
      ]),
      gramatica(12, 'Fu, ebbe, fece, disse', 'PASSO 1: muitos verbos frequentes são irregulares no remoto, mas só em três pessoas: io, lui/lei e loro. PASSO 2: tu, noi e voi seguem a regra do infinitivo: «facesti, dicesti, vedemmo, voleste». PASSO 3: as formas irregulares seguem um padrão: io -i, lui -e, loro -ero: «io vidi, lui vide, loro videro». PASSO 4: os mais comuns: essere (fui, fu, furono), avere (ebbi, ebbe, ebbero), fare (feci, fece, fecero), dire (dissi, disse, dissero), vedere (vidi, vide, videro), venire (venni, venne, vennero), volere (volli, volle, vollero), prendere (presi, prese, presero), scrivere (scrissi, scrisse, scrissero), nascere (nacqui, nacque, nacquero), vivere (vissi, visse, vissero), mettere (misi, mise, misero). PASSO 5: o remoto aparece em contos, biografias, livros de história e romances: «Garibaldi sbarcò in Sicilia nel 1860.» PASSO 6: com a data ou época longe do presente, ele funciona como o passato prossimo funciona para fatos ligados ao presente. PASSO 7: andare, parlare e outros regulares seguem as terminações da S1: «andai, andò, andarono». PASSO 8: o verbo «essere» aparece muito em textos de história: «fu un grande poeta», «furono anni difficili».', {
        tag: 'Passado',
        comparacao: 'em português «foi, fez, disse, viu, veio» são pretéritos perfeitos de uso diário. O italiano tem as mesmas ideias (fu, fece, disse, vide, venne), mas atenção: «fu» (ele foi/era) e «fui» (eu fui) parecem com o português, e «ebbe» pode confundir quem espera «bebeu». O verbo vem de «avere», não de «bere».',
        tabela: [
          { infinito: 'essere', io: 'fui', lui_lei: 'fu', loro: 'furono' }, { infinito: 'avere', io: 'ebbi', lui_lei: 'ebbe', loro: 'ebbero' }, { infinito: 'fare', io: 'feci', lui_lei: 'fece', loro: 'fecero' }, { infinito: 'dire', io: 'dissi', lui_lei: 'disse', loro: 'dissero' }, { infinito: 'vedere', io: 'vidi', lui_lei: 'vide', loro: 'videro' }, { infinito: 'venire', io: 'venni', lui_lei: 'venne', loro: 'vennero' }, { infinito: 'volere', io: 'volli', lui_lei: 'volle', loro: 'vollero' }, { infinito: 'prendere', io: 'presi', lui_lei: 'prese', loro: 'presero' }, { infinito: 'scrivere', io: 'scrissi', lui_lei: 'scrisse', loro: 'scrissero' }, { infinito: 'nascere', io: 'nacqui', lui_lei: 'nacque', loro: 'nacquero' },
        ],
        erros: [['Io avei un cane.', 'Io ebbi un cane.', '«Avere» é irregular no remoto.'], ['Lui fece la torta e dicette: «Assaggia».', 'Lui fece la torta e disse: «Assaggia».', '«Dire» é irregular: disse.'], ['Loro vederono la luce.', 'Loro videro la luce.', 'Loro: vid-ero.'], ['Tu fecisti un errore.', 'Tu facesti un errore.', 'Tu, noi e voi seguem o infinitivo: fa-cesti.']],
      }),
      producao(8, 'Leia em voz alta cinco frases curtas de história com os verbos da tabela, por exemplo: «Dante nacque a Firenze. Cristoforo Colombo partì nel 1492 e arrivò in America.»'),
    ]),
    sessao('S3', 'Ler uma história', [
      revisao(4, 'Diga em voz alta a forma io, lui e loro de «prendere» e «fare» no passato remoto.'),
      palavras(5, [
        ['il mugnaio', 'il munhaio', 'o moleiro', ''], ['il mulino', 'il mulíno', 'o moinho', ''], ['la lanterna', 'la lantérna', 'a lanterna', ''], ['bussare', 'bussáre', 'bater (à porta)', ''], ['aspettare', 'aspettáre', 'esperar', ''],
      ]),
      gramatica(8, 'Do remoto ao infinitivo', 'PASSO 1: ao ler, olhe a terminação para achar a pessoa: «-ò, -ì, -é» (lui/lei), «-rono» (loro), «-mmo» (noi), «-sti» (tu), «-ste» (voi). PASSO 2: nos regulares, o infinitivo é fácil de deduzir: «bussò» vem de «bussare». PASSO 3: nos irregulares, memorize a forma: «fu → essere», «ebbe → avere», «fece → fare», «disse → dire», «vide → vedere», «venne → venire», «prese → prendere». PASSO 4: formas do imperfetto marcam cenário e repetição («viveva, pioveva»); formas do remoto marcam fatos: «partì, arrivò, bussò, aprì». PASSO 5: em um conto, o diálogo costuma estar no presente: «Entra, ti aspettavo.»', {
        tag: 'Passado',
        comparacao: 'em português um conto usa o pretérito perfeito para os fatos e o imperfeito para o cenário («Era uma vez… ele partiu»). O italiano usa a mesma ideia: imperfetto para o cenário («viveva») e remoto para os fatos («partì»). Para o aluno de português o texto fica fácil de acompanhar.',
        tabela: [
          { forma: 'fu', infinito: 'essere', sentido: 'foi, era' }, { forma: 'ebbe', infinito: 'avere', sentido: 'teve' }, { forma: 'fece', infinito: 'fare', sentido: 'fez' }, { forma: 'disse', infinito: 'dire', sentido: 'disse' }, { forma: 'vide', infinito: 'vedere', sentido: 'viu' }, { forma: 'venne', infinito: 'venire', sentido: 'veio' }, { forma: 'prese', infinito: 'prendere', sentido: 'pegou' },
        ],
        erros: [['«Partì» vem de «partere».', '«Partì» vem de «partire».', 'Terminação em -ì indica -ire.'], ['«Ebbe» vem de «bere».', '«Ebbe» vem de «avere».', 'O remoto de «avere» é ebbi, ebbe, ebbero.'], ['«Fece» é presente.', '«Fece» é passato remoto de «fare».', 'O presente é «fa».'], ['«Aprì» é segunda pessoa.', '«Aprì» é terceira pessoa do singular.', 'A segunda termina em -sti: «apristi».']],
      }),
      texto(8, 'Il mugnaio e la luce nel bosco', 'C\'era una volta un mugnaio che viveva in un piccolo villaggio vicino al fiume. Un giorno il mugnaio partì per la città e lasciò il mulino al figlio. Il ragazzo lavorò tutto il giorno, ma la sera vide una luce strana nel bosco. Prese una lanterna, uscì e seguì la luce. Dopo un\'ora arrivò davanti a una vecchia casa e bussò. Una donna aprì la porta e gli disse: «Entra, ti aspettavo.»', 'Era uma vez um moleiro que vivia em uma pequena aldeia perto do rio. Um dia o moleiro partiu para a cidade e deixou o moinho ao filho. O rapaz trabalhou o dia inteiro, mas à noite viu uma luz estranha no bosque. Pegou uma lanterna, saiu e seguiu a luz. Depois de uma hora chegou diante de uma casa velha e bateu. Uma mulher abriu a porta e lhe disse: «Entre, eu esperava você.»', [['Dove viveva il mugnaio?', 'In un piccolo villaggio vicino al fiume.'], ['Che cosa lasciò al figlio?', 'Il mulino.'], ['Che cosa vide il ragazzo la sera?', 'Una luce strana nel bosco.'], ['Che cosa disse la donna?', 'Entra, ti aspettavo.']]),
      producao(5, 'Reconte a história em voz alta com suas palavras, usando o passato prossimo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 40', [
      revisao(5, 'Leia em voz alta cinco formas de passato remoto e diga o infinitivo de cada uma.'),
      exercicios(20, [
        ouvir('Dante nacque a Firenze nel 1265', ['Dante nacque a Firenze nel 1265', 'Dante nasceva a Firenze nel 1265', 'Dante è nato a Firenze nel 1265'], 'Dante nacque a Firenze nel 1265', 'Ouça «nacque».'),
        ouvir('Il re chiamò i suoi cavalieri', ['Il re chiamò i suoi cavalieri', 'Il re chiama i suoi cavalieri', 'Il re chiamava i suoi cavalieri'], 'Il re chiamò i suoi cavalieri', 'Ouça «chiamò», com -ò final.'),
        ouvir('Loro arrivarono la sera', ['Loro arrivarono la sera', 'Loro arrivavano la sera', 'Loro arriveranno la sera'], 'Loro arrivarono la sera', 'Ouça «-arono».'),
        ditado('Il re vide una luce nel bosco', 'Escreva: Il re vide una luce nel bosco.'), ditado('Un giorno il mugnaio partì', 'Escreva: Un giorno il mugnaio partì.'), ditado('Prese una lanterna e uscì', 'Escreva: Prese una lanterna e uscì.'),
        mc('O infinitivo de «ebbe» é:', ['avere', 'essere', 'bere'], 'avere', 'Ebbe é o remoto de avere.'),
        mc('«Fu» é forma de:', ['essere', 'fare', 'fuggire'], 'essere', 'Lui/lei fu.'),
        mc('A terceira pessoa do plural de «parlare» no remoto é:', ['parlarono', 'parlavano', 'parlorono'], 'parlarono', 'Terminação -arono.'),
        mc('Qual frase está no passato remoto?', ['Il re uscì dal castello.', 'Il re esce dal castello.', 'Il re usciva dal castello.'], 'Il re uscì dal castello.', 'Uscì é o remoto de uscire.'),
        lacuna('Dante ___ a Firenze nel 1265. (nascere)', ['nacque', 'nacqui', 'nacquero'], 'nacque', 'Terceira pessoa do singular.'),
        lacuna('Il principe ___ la porta ed entrò. (aprire)', ['aprì', 'aprii', 'aprirono'], 'aprì', 'Terceira pessoa, -ire: -ì.'),
        lacuna('Noi ___ alla stazione alle otto. (arrivare)', ['arrivammo', 'arrivaste', 'arrivarono'], 'arrivammo', 'Noi: -ammo.'),
        lacuna('Io ___ una lettera al re. (scrivere)', ['scrissi', 'scrisse', 'scrissero'], 'scrissi', 'Io: scrissi.'),
        ordem('Ordene: «Il re chiamò i suoi cavalieri.»', ['Il', 're', 'chiamò', 'i', 'suoi', 'cavalieri'], 'Il re chiamò i suoi cavalieri.', 'Remoto no meio da frase.'),
        ordem('Ordene: «Poi arrivarono i soldati.»', ['Poi', 'arrivarono', 'i', 'soldati'], 'Poi arrivarono i soldati.', 'Verbo antes do sujeito.'),
        livre('Escreva em italiano, no passato remoto: O rei viu a luz, pegou a lanterna e saiu.', 'Il re vide la luce, prese la lanterna e uscì.'),
      ]),
      producao(5, 'Leia em voz alta um parágrafo do texto da sessão 3 com ritmo de conto, sublinhando mentalmente cada verbo no remoto.'),
    ]),
  ],
});
