import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 28, titulo: 'Imperativo', nivel: 'a2',
  objetivo: 'Formar o imperativo de tu, noi, voi e Lei, usar os irregulares mais comuns, dar ordens negativas, colocar os pronomes e dar instruções e indicações com cortesia.',
  nota: 'Você dá instruções, convites e indicações com a forma certa para cada pessoa. Próxima aula: o condizionale de cortesia.',
  sessoes: [
    sessao('S1', 'Imperativo regular: tu, noi, voi', [
      revisao(5, 'Responda com pronome indireto: «Scrivi a Marco? Telefoni a tua madre? Rispondi a Giulia?»'),
      palavras(8, [
        ['ascolta!', 'askólta', 'escute!', ''], ['guarda!', 'guárda', 'olhe!', ''], ['aspetta!', 'aspétta', 'espere!', ''], ['scrivi!', 'skrívi', 'escreva!', ''], ['apri!', 'ápri', 'abra!', ''], ['chiudi!', 'kiúdi', 'feche!', ''], ['senti!', 'sénti', 'ouça, sinta!', ''], ['finisci!', 'finíxi', 'termine!', ''],
      ]),
      gramatica(12, 'Imperativo afirmativo: tu, noi, voi', 'PASSO 1: o imperativo dá ordens, conselhos, convites e instruções. PASSO 2: para «tu», os verbos em -are usam a forma de «lui» do presente: «parla!», «ascolta!», «aspetta!». Os verbos em -ere e -ire usam a forma de «tu» do presente: «scrivi!», «apri!», «dormi!». PASSO 3: os verbos em -ire do tipo «finire» mantêm o «-isc-»: «finisci!», «capisci!», «preferisci!». PASSO 4: para «noi» (vamos…), a forma é a do presente de «noi»: «parliamo!», «scriviamo!», «andiamo!» PASSO 5: para «voi», a forma é a do presente de «voi»: «parlate!», «scrivete!», «dormite!», «finite!» PASSO 6: o sujeito não aparece: «Ascolta!», não «Tu ascolta!». PASSO 7: o imperativo é seco quando vem sozinho. Para suavizar, junte «per favore», «dai» (vamos lá) ou «un attimo»: «Aspetta un attimo, per favore.» PASSO 8: o imperativo aparece em receitas, placas, instruções, e-mails de trabalho: «Aggiungete il sale», «Leggete il testo», «Chiamami».', {
        tag: 'Imperativo',
        comparacao: 'em português o imperativo de «você» vem do subjuntivo («fale», «escreva») ou, na fala, usa o presente («fala», «escreve»). O italiano usa as formas de tu, noi e voi, que são iguais ao presente (com exceção do tu dos verbos em -are). O brasileiro costuma errar justamente aí: para «tu» dos verbos em -are, a forma é «parla» e não «parli», que seria a forma de «Lei» (cortesia). Cuidado ao falar com desconhecidos.',
        tabela: [
          { pessoa: 'tu', parlare: 'parla!', scrivere: 'scrivi!', dormire: 'dormi!', finire: 'finisci!' }, { pessoa: 'noi', parlare: 'parliamo!', scrivere: 'scriviamo!', dormire: 'dormiamo!', finire: 'finiamo!' }, { pessoa: 'voi', parlare: 'parlate!', scrivere: 'scrivete!', dormire: 'dormite!', finire: 'finite!' },
        ],
        erros: [['Parli più piano, Marco!', 'Parla più piano, Marco!', 'Com «tu», os verbos em -are usam a forma em -a.'], ['Tu ascolta!', 'Ascolta!', 'O imperativo não leva sujeito.'], ['Finite! (para uma só pessoa)', 'Finisci!', 'Para um só interlocutor (tu): finisci.'], ['Parlamo più forte!', 'Parliamo più forte!', 'Noi: -iamo.']],
      }),
      producao(5, 'Dê em voz alta seis ordens ou convites a um amigo (tu), a dois amigos (voi) e a um grupo que inclui você (noi).'),
    ]),
    sessao('S2', 'Irregulares e negativo', [
      revisao(4, 'Diga o imperativo de tu para: parlare, scrivere, dormire, finire, aprire.'),
      palavras(6, [
        ['sii!', 'síi', 'seja!', ''], ['vai! / va\'!', 'vái / vá', 'vá!', ''], ['fai! / fa\'!', 'fái / fá', 'faça!', ''], ['di\'!', 'dí', 'diga!', ''], ['vieni!', 'viéni', 'venha!', ''], ['esci!', 'éxi', 'saia!', ''],
      ]),
      gramatica(12, 'Imperativo irregular e negativo', 'PASSO 1: os irregulares de «tu» mais usados são: essere → «sii» (seja), avere → «abbi», andare → «vai» ou «va\'», fare → «fai» ou «fa\'», dare → «dai» ou «da\'», dire → «di\'», stare → «stai» ou «sta\'», venire → «vieni», uscire → «esci». PASSO 2: para «noi» e «voi» quase todos são regulares: «andiamo», «andate», «fate», «dite», «venite». Exceções: «siate» (sede) e «abbiate». PASSO 3: o imperativo negativo de «tu» usa «non» + infinitivo: «Non parlare!», «Non andare via!», «Non dire niente!» PASSO 4: o imperativo negativo de «noi» e «voi» é igual ao afirmativo, com «non» na frente: «Non parliamo ora», «Non parlate!» PASSO 5: os pronomes se juntam ao imperativo afirmativo de «tu», «noi» e «voi», formando uma só palavra: «dimmi», «ascoltami», «aspettami», «alzati», «chiamami». PASSO 6: com «da\'», «di\'», «fa\'», «sta\'» e «va\'», a primeira consoante do pronome dobra: «dammi», «dimmi», «fammi», «dacci», «dille». Exceção: «gli» → «digli», sem dobrar. PASSO 7: no negativo de «tu», os pronomes podem ir antes ou depois: «Non chiamarmi» ou «Non mi chiamare». PASSO 8: o verbo reflexivo segue a mesma regra: «Siediti!» (sente-se), «Alzati!», mas «Non alzarti» ou «Non ti alzare».', {
        tag: 'Imperativo',
        comparacao: 'em português o imperativo negativo usa o subjuntivo («não fale», «não vá»), enquanto o italiano troca a forma de tu pelo infinitivo («non parlare», «non andare»). O brasileiro erra ao dizer «non parla!» ou «non vai!». Outro contraste: o pronome vem depois do verbo e forma uma única palavra: «dammi» («dá-me»), «aiutami» («ajuda-me»). Em português, o pronome vem solto, e a ordem nem sempre se mantém.',
        tabela: [
          { infinito: 'essere', tu: 'sii', voi: 'siate' }, { infinito: 'avere', tu: 'abbi', voi: 'abbiate' }, { infinito: 'andare', tu: 'vai / va\'', voi: 'andate' }, { infinito: 'fare', tu: 'fai / fa\'', voi: 'fate' }, { infinito: 'dare', tu: 'dai / da\'', voi: 'date' }, { infinito: 'dire', tu: 'di\'', voi: 'dite' }, { infinito: 'stare', tu: 'stai / sta\'', voi: 'state' }, { infinito: 'venire', tu: 'vieni', voi: 'venite' }, { infinito: 'uscire', tu: 'esci', voi: 'uscite' },
        ],
        erros: [['Non parla!', 'Non parlare!', 'Tu negativo: non + infinitivo.'], ['Dì mi la verità!', 'Dimmi la verità!', '«Di\'» + «mi» forma uma só palavra, com dobra.'], ['Di me!', 'Dimmi!', 'Pronome átono preso ao verbo.'], ['Non andate via, Marco!', 'Non andare via, Marco!', 'Um só interlocutor: tu → infinitivo.']],
      }),
      producao(8, 'Dê em voz alta oito ordens ou pedidos: quatro afirmativos com pronome («Dammi… Dimmi… Aiutami…») e quatro negativos («Non dire… Non andare…»).'),
    ]),
    sessao('S3', 'Imperativo de cortesia: Lei', [
      revisao(4, 'Diga em voz alta quatro ordens negativas: «Non parlare! Non scrivere! Non andare via! Non dire niente!»'),
      palavras(5, [
        ['mi dica', 'mi díka', 'diga-me (cortesia)', ''], ['si accomodi', 'si akkómodi', 'sinta-se à vontade, sente-se', ''], ['scusi', 'skúzi', 'com licença, desculpe', ''], ['vada dritto', 'váda drítto', 'siga em frente', ''], ['giri a destra', 'djíri a déstra', 'vire à direita', ''],
      ]),
      gramatica(8, 'O imperativo com Lei', 'PASSO 1: para um desconhecido, uma pessoa mais velha ou em contexto profissional, use a forma de «Lei», que coincide com a de «lui» do congiuntivo presente: -are → -i: «parli», «ascolti», «aspetti»; -ere e -ire → -a: «scriva», «apra», «dorma». Verbos como finire: «finisca». PASSO 2: irregulares de Lei: essere → «sia», avere → «abbia», andare → «vada», fare → «faccia», dire → «dica», dare → «dia», stare → «stia», venire → «venga», uscire → «esca». PASSO 3: com Lei, os pronomes vão ANTES do verbo: «Mi dica», «Si accomodi», «Mi scusi», «Lo prenda», «Mi aspetti». PASSO 4: o negativo de Lei é igual ao afirmativo, com «non»: «Non si preoccupi» (não se preocupe), «Non aspetti». PASSO 5: expressões de serviço: «Scusi!», «Mi dica», «Prego, si accomodi», «Aspetti un momento», «Mi passi il sale», «Venga con me». PASSO 6: ao dar direções, use Lei: «Vada dritto, poi giri a destra». PASSO 7: com voi o registro é neutro: «Andate dritto, poi girate a destra». PASSO 8: em e-mails formais, também se usa «Mi faccia sapere» (me avise). Aprenda estas formas como blocos; o congiuntivo completo vem no B1.', {
        tag: 'Imperativo',
        comparacao: 'o português usa «o senhor» e «a senhora» com verbo em terceira pessoa e imperativo «fale», «venha», «espere». O italiano usa a mesma ideia: terceira pessoa e forma própria de Lei, com «-i» nos verbos em -are e «-a» nos outros. A semelhança ajuda: «venha» é «venga», «diga» é «dica», «vá» é «vada».',
        tabela: [
          { infinito: 'parlare', lei: 'parli', exemplo: 'Parli più lentamente, per favore.' }, { infinito: 'aspettare', lei: 'aspetti', exemplo: 'Aspetti un momento.' }, { infinito: 'prendere', lei: 'prenda', exemplo: 'Prenda il treno delle otto.' }, { infinito: 'dire', lei: 'dica', exemplo: 'Mi dica.' }, { infinito: 'andare', lei: 'vada', exemplo: 'Vada dritto.' }, { infinito: 'girare', lei: 'giri', exemplo: 'Giri a destra.' }, { infinito: 'accomodarsi', lei: 'si accomodi', exemplo: 'Si accomodi, prego.' },
        ],
        erros: [['Parla più lentamente, signora.', 'Parli più lentamente, signora.', 'Com Lei, use a forma de cortesia.'], ['Dimmi, signor Bianchi.', 'Mi dica, signor Bianchi.', 'Com Lei, o pronome vem antes.'], ['Va dritto, signore.', 'Vada dritto, signore.', 'Lei: vada.'], ['Non preoccupati, signora.', 'Non si preoccupi, signora.', 'Lei: si + preoccupi.']],
      }),
      dialogo(8, 'Dov\'è la stazione? / Onde fica a estação?', 'Uma turista pede direções a uma passante em Bologna.', [
        ['Laura', 'Scusi, per andare alla stazione?', 'Com licença, como se vai à estação?'], ['La passante', 'Vada dritto per questa strada, poi giri a sinistra dopo la farmacia.', 'Siga em frente por esta rua, depois vire à esquerda depois da farmácia.'], ['Laura', 'Dopo la farmacia a sinistra. È lontano?', 'Depois da farmácia à esquerda. É longe?'], ['La passante', 'No, ci vogliono dieci minuti a piedi. Attraversi la piazza e la vedrà subito.', 'Não, são dez minutos a pé. Atravesse a praça e verá logo.'], ['Laura', 'Grazie mille. Mi scusi ancora: dov\'è la fermata dell\'autobus?', 'Muito obrigada. Desculpe de novo: onde fica o ponto de ônibus?'], ['La passante', 'È qui davanti. Si fermi lì e aspetti il numero undici.', 'É bem aqui na frente. Pare ali e espere o número onze.'],
      ]),
      producao(5, 'Dê em voz alta quatro indicações a um desconhecido (Lei): «Vada dritto, giri a destra, attraversi, aspetti…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 28', [
      revisao(5, 'Diga em voz alta como pedir a alguém (tu, Lei) que espere, que fale mais devagar e que diga o nome.'),
      exercicios(20, [
        ouvir('Aspetta un attimo', ['Aspetta un attimo', 'Aspetti un attimo', 'Aspettate un attimo'], 'Aspetta un attimo', 'Tu: aspetta.'), ouvir('Non parlare così forte', ['Non parlare così forte', 'Non parla così forte', 'Non parli così forte'], 'Non parlare così forte', 'Tu negativo: infinitivo.'), ouvir('Mi dica, signora', ['Mi dica, signora', 'Dimmi, signora', 'Mi dice, signora'], 'Mi dica, signora', 'Lei: pronome antes.'),
        ditado('Dammi un caffè', 'Escreva: Dammi un caffè.'), ditado('Vada dritto', 'Escreva: Vada dritto.'), ditado('Non dire niente', 'Escreva: Non dire niente.'),
        mc('Qual é o imperativo de tu de «parlare»?', ['parla', 'parli', 'parlare'], 'parla', 'Tu, -are: -a.'), mc('Qual é o imperativo de Lei de «andare»?', ['vada', 'va\'', 'vai'], 'vada', 'Forma de cortesia.'), mc('Qual está correta?', ['Non andare via!', 'Non vai via!', 'Non va via!'], 'Non andare via!', 'Tu negativo.'), mc('«Diga-me» (tu):', ['Dimmi', 'Dì mi', 'Di mi'], 'Dimmi', 'Di\' + mi, com dobra.'),
        lacuna('___ qui, per favore. (venire, tu)', ['Vieni', 'Vieno', 'Venga'], 'Vieni', 'Tu irregular.'), lacuna('Scusi, ___ un momento, per favore. (aspettare, Lei)', ['aspetti', 'aspetta', 'aspettate'], 'aspetti', 'Lei: -i.'), lacuna('___ il treno delle otto. (prendere, Lei)', ['Prenda', 'Prendi', 'Prendete'], 'Prenda', 'Lei: -a.'), lacuna('___ tranquillo! (essere, tu)', ['Sii', 'Sei', 'Sia'], 'Sii', 'Irregular.'),
        ordem('Ordene: «Vada dritto e giri a destra.»', ['Vada', 'dritto', 'e', 'giri', 'a', 'destra.'], 'Vada dritto e giri a destra.', 'Duas indicações com Lei.'), ordem('Ordene: «Non preoccuparti, va tutto bene.»', ['Non', 'preoccuparti,', 'va', 'tutto', 'bene.'], 'Non preoccuparti, va tutto bene.', 'Tu negativo com pronome preso.'),
        livre('Escreva em italiano (tu): Espere um momento, me dê o telefone e não diga nada ao Marco.', 'Aspetta un momento, dammi il telefono e non dire niente a Marco.'),
      ]),
      producao(5, 'Explique em voz alta, em seis frases, como preparar um café ou um sanduíche, usando imperativo.'),
    ]),
  ],
});
