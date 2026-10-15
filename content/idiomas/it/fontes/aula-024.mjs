import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 24, titulo: 'Pronomes indiretos', nivel: 'a2',
  objetivo: 'Usar mi, ti, gli, le, ci, vi e gli/loro no lugar de «a + pessoa», reconhecer os verbos que pedem objeto indireto e distinguir direto de indireto.',
  nota: 'Você troca «a Marco», «a Giulia» por gli e le. Próxima aula: ci e ne.',
  sessoes: [
    sessao('S1', 'Mi, ti, gli, le', [
      revisao(5, 'Responda com pronome direto: «Hai chiamato Luca? Hai visto le ragazze? Hai comprato il pane?»'),
      palavras(8, [
        ['dare', 'dáre', 'dar', ''], ['dire', 'díre', 'dizer', ''], ['scrivere', 'skrívere', 'escrever', ''], ['telefonare', 'telefonáre', 'telefonar', ''], ['chiedere', 'kiédere', 'pedir, perguntar', ''], ['rispondere', 'rispóndere', 'responder', ''], ['regalare', 'regaláre', 'dar de presente', ''], ['mandare', 'mandáre', 'enviar', ''],
      ]),
      gramatica(12, 'O pronome de objeto indireto', 'PASSO 1: o objeto indireto responde a «a quem?» e leva a preposição «a»: «Scrivo a Marco», «Telefono a Giulia». PASSO 2: para não repetir, troque «a + pessoa» por um pronome átono, que vem antes do verbo conjugado: «Gli scrivo», «Le telefono». PASSO 3: as formas são mi (a mim), ti (a ti), gli (a ele), le (a ela e a Lei), ci (a nós), vi (a vocês), gli (a eles; a forma «loro» vem depois do verbo e é mais formal). PASSO 4: ao contrário do pronome direto, «gli» e «le» não se elidem diante de vogal em um texto cuidado: «Gli ho scritto», «Le ho telefonato». PASSO 5: no passato prossimo, o particípio NÃO concorda com o pronome indireto: «Le ho scritto», «Gli ho detto», «Ti ho dato». PASSO 6: com um verbo modal ou infinitivo, o pronome pode ficar antes do modal ou colado ao infinitivo: «Le voglio scrivere» = «Voglio scriverle». PASSO 7: a forma de cortesia para «Lei» é «Le»: «Le telefono domani, dottoressa». PASSO 8: use a forma tônica «a me, a te, a lui, a lei, a noi, a voi, a loro» para dar ênfase ou contraste: «A me piace, a lui no», «Telefono a lei, non a lui».', {
        tag: 'Pronomes',
        comparacao: 'o português diz «ligo para ela», «escrevo para ele», «peço a ele». O italiano usa o pronome átono antes do verbo: «le telefono», «gli scrivo». O que confunde: telefonare, rispondere, scrivere e dare levam objeto indireto («telefono a Marco»), e o brasileiro pode usar o pronome direto («lo telefono») por reflexo de «chamei ele». Já «chiamare» (chamar, ligar para) é objeto direto: «Lo chiamo».',
        tabela: [
          { pessoa: 'a mim', pronome: 'mi', exemplo: 'Mi scrivi presto?' }, { pessoa: 'a você (tu)', pronome: 'ti', exemplo: 'Ti telefono domani.' }, { pessoa: 'a ele', pronome: 'gli', exemplo: 'Gli do il libro.' }, { pessoa: 'a ela / Lei', pronome: 'le', exemplo: 'Le scrivo una mail.' }, { pessoa: 'a nós', pronome: 'ci', exemplo: 'Ci dice la verità.' }, { pessoa: 'a vocês', pronome: 'vi', exemplo: 'Vi mando le foto.' }, { pessoa: 'a eles', pronome: 'gli (loro)', exemplo: 'Gli telefono stasera.' },
        ],
        erros: [['Lo telefono domani. (a Marco)', 'Gli telefono domani.', 'Telefonare leva objeto indireto: a Marco = gli.'], ['Ho scritto le una mail.', 'Le ho scritto una mail.', 'O pronome vem antes do auxiliar.'], ['Le ho scritta.', 'Le ho scritto.', 'Não há concordância com o pronome indireto.'], ['Chiamo a Marco.', 'Chiamo Marco.', 'Chiamare leva objeto direto, sem «a».']],
      }),
      producao(5, 'Troque o objeto indireto pelo pronome, em voz alta: «Scrivo a Marco → Gli scrivo. Telefono a Elena → …» (faça seis).'),
    ]),
    sessao('S2', 'Verbos com objeto indireto', [
      revisao(4, 'Diga os pronomes indiretos: mi, ti, gli, le, ci, vi, gli.'),
      palavras(6, [
        ['spiegare', 'spiegáre', 'explicar', ''], ['offrire', 'offríre', 'oferecer', ''], ['prestare', 'prestáre', 'emprestar', ''], ['restituire', 'restituíre', 'devolver', ''], ['mostrare', 'mostráre', 'mostrar', ''], ['servire', 'servíre', 'servir, ser útil', ''],
      ]),
      gramatica(12, 'Quando o objeto indireto aparece', 'PASSO 1: dar, dizer, escrever, mandar, telefonare, rispondere, chiedere, spiegare, regalare, prestare, mostrare, consigliare, offrire, restituire costumam levar objeto indireto de pessoa. PASSO 2: muitos verbos têm dois objetos: o direto (a coisa) e o indireto (a pessoa): «Do il libro a Marco» → «Gli do il libro». PASSO 3: o objeto direto de coisa fica no lugar normal: «Gli do il libro» (lo e gli juntos são a aula 41). PASSO 4: «piacere», visto na aula 16, também usa o pronome indireto: «Mi piace», «Ti piace?», «Gli piace», «Le piacciono». PASSO 5: outros verbos de gosto e necessidade: «mi serve» (preciso de), «mi manca» (sinto falta de), «mi sembra» (parece-me), «mi dispiace» (lamento): «Mi serve un consiglio.» «Mi dispiace molto.» PASSO 6: com «chiedere» e «domandare» o pronome indireto introduz quem recebe a pergunta: «Gli ho chiesto l\'ora.» PASSO 7: com «dire» no imperativo: «Dimmi!» (aula 28). PASSO 8: tipos: pergunta com «a chi?»: «A chi scrivi? — Scrivo a Luca.» → «Gli scrivo».', {
        tag: 'Pronomes',
        comparacao: 'o português costuma usar «para» no lugar do «a»: «eu escrevo para ele». O italiano diz «gli scrivo», sem preposição quando é pronome. Dois pontos de armadilha: «piacere» (em português, o sujeito é a pessoa que gosta; em italiano, é a coisa de que se gosta, e a pessoa vira pronome indireto) e «mi dispiace» (lamento), que não tem uma tradução palavra por palavra.',
        tabela: [
          { verbo: 'dare', frase: 'Gli do un consiglio.', traducao: 'Dou-lhe um conselho.' }, { verbo: 'dire', frase: 'Ti dico la verità.', traducao: 'Digo-te a verdade.' }, { verbo: 'chiedere', frase: 'Le chiedo un favore.', traducao: 'Peço-lhe um favor.' }, { verbo: 'rispondere', frase: 'Gli rispondo domani.', traducao: 'Respondo-lhe amanhã.' }, { verbo: 'piacere', frase: 'Mi piace questa città.', traducao: 'Eu gosto desta cidade.' }, { verbo: 'servire', frase: 'Ti serve aiuto?', traducao: 'Precisa de ajuda?' },
        ],
        erros: [['Lo rispondo domani.', 'Gli rispondo domani.', 'Rispondere leva objeto indireto.'], ['Io piaccio questa città.', 'Mi piace questa città.', 'Em piacere, a pessoa é objeto indireto.'], ['Mi piace i gatti.', 'Mi piacciono i gatti.', 'O verbo concorda com a coisa: plural.'], ['Gli ho dato lei un libro.', 'Le ho dato un libro.', 'Para ela, o pronome é «le».']],
      }),
      producao(8, 'Faça oito frases em voz alta com pronome indireto: «Gli scrivo… Le telefono… Ti dico… Vi mando… Mi serve…»'),
    ]),
    sessao('S3', 'Direto ou indireto?', [
      revisao(4, 'Diga se cada verbo leva objeto direto ou indireto: vedere, scrivere, chiamare, rispondere, aiutare, telefonare.'),
      palavras(5, [
        ['il compleanno', 'il kompleánno', 'o aniversário', ''], ['il regalo', 'il regálo', 'o presente', ''], ['il biglietto', 'il bilhétto', 'o bilhete, o cartão', ''], ['il consiglio', 'il konsílho', 'o conselho', ''], ['la sorpresa', 'la sorpréza', 'a surpresa', ''],
      ]),
      gramatica(8, 'Distinguir lo/la de gli/le', 'PASSO 1: lo e la são objeto direto: «Lo vedo» (vejo-o), «La chiamo» (ligo para ela, chamo-a). PASSO 2: gli e le são objeto indireto: «Gli scrivo» (escrevo-lhe), «Le telefono» (telefono-lhe). PASSO 3: «le» é a mesma forma para o direto plural feminino («le vedo», vejo-as) e para o indireto singular feminino («le scrivo», escrevo-lhe). Só o contexto distingue: veja se o verbo leva «a» antes da pessoa. PASSO 4: truque: se você pode dizer «a ela» ou «a ele», é indireto. Se não pode, é direto. PASSO 5: verbos que mudam de lado em relação ao português: «aiutare» (direto): «Lo aiuto»; «ringraziare» (direto): «La ringrazio»; «incontrare», «conoscere», «salutare»: diretos. PASSO 6: «telefonare», «scrivere», «rispondere», «parlare», «chiedere», «dire», «mandare», «dare»: indiretos. PASSO 7: com um mesmo verbo: «Chiamo Luca» (direto: lo) × «Telefono a Luca» (indireto: gli).', {
        tag: 'Pronomes',
        comparacao: 'em português a diferença entre «o/a» e «lhe» existe na escrita formal e some na fala, onde se diz «eu liguei pra ele» e «eu chamei ele». O italiano mantém a diferença sempre. Por isso vale decorar a lista: ajudar, chamar, cumprimentar, encontrar, agradecer são diretos; telefonar, escrever, responder, falar, dar, dizer são indiretos.',
        tabela: [
          { verbo: 'chiamare', tipo: 'direto', exemplo: 'La chiamo alle otto.' }, { verbo: 'telefonare', tipo: 'indireto', exemplo: 'Le telefono alle otto.' }, { verbo: 'aiutare', tipo: 'direto', exemplo: 'Lo aiuto con i compiti.' }, { verbo: 'rispondere', tipo: 'indireto', exemplo: 'Gli rispondo subito.' }, { verbo: 'ringraziare', tipo: 'direto', exemplo: 'Li ringrazio.' }, { verbo: 'parlare', tipo: 'indireto', exemplo: 'Le parlo domani.' },
        ],
        erros: [['Le chiamo a Giulia.', 'La chiamo.', 'Chiamare é direto: la.'], ['La telefono.', 'Le telefono.', 'Telefonare é indireto: le.'], ['Gli aiuto.', 'Lo aiuto.', 'Aiutare é direto.'], ['Lo scrivo una lettera.', 'Gli scrivo una lettera.', 'Escrever a alguém: pronome indireto.']],
      }),
      dialogo(8, 'Un regalo per Anna / Um presente para a Anna', 'Matteo e Valentina pensam no aniversário de Anna.', [
        ['Matteo', 'Valentina, che cosa regaliamo ad Anna per il compleanno?', 'Valentina, o que damos de presente à Anna no aniversário?'], ['Valentina', 'Le piacciono i libri di cucina. Le regaliamo uno nuovo?', 'Ela gosta de livros de culinária. Damos um novo a ela?'], ['Matteo', 'Buona idea. Ho chiesto un consiglio a Paolo e mi ha detto di comprarle anche un grembiule.', 'Boa ideia. Pedi um conselho ao Paolo e ele me disse para comprar-lhe também um avental.'], ['Valentina', 'Ottimo. Io le scrivo un biglietto. Tu gli telefoni per sapere se viene alla festa?', 'Ótimo. Eu escrevo um cartão para ela. Você telefona para ele para saber se vem à festa?'], ['Matteo', 'Sì, gli telefono stasera. Ti mando il conto del regalo.', 'Sim, telefono a ele hoje à noite. Mando-lhe a conta do presente.'], ['Valentina', 'Va bene. Ci vediamo sabato!', 'Combinado. A gente se vê no sábado!'],
      ]),
      producao(5, 'Diga em voz alta quatro frases: duas com objeto direto (lo, la) e duas com objeto indireto (gli, le).'),
    ]),
    sessao('S4', 'Revisão e prática da aula 24', [
      revisao(5, 'Diga em voz alta seis frases com pronomes direto e indireto, trocando o objeto por lo, la, gli ou le.'),
      exercicios(20, [
        ouvir('Le telefono domani', ['Le telefono domani', 'La telefono domani', 'Gli telefono domani'], 'Le telefono domani', 'Telefonare: indireto, feminino.'), ouvir('Gli ho scritto una mail', ['Gli ho scritto una mail', 'Lo ho scritto una mail', 'Gli ho scritta una mail'], 'Gli ho scritto una mail', 'Sem concordância.'), ouvir('Ti dico la verità', ['Ti dico la verità', 'Mi dico la verità', 'Ci dico la verità'], 'Ti dico la verità', 'Pronome da segunda pessoa.'),
        ditado('Le ho chiesto un favore', 'Escreva: Le ho chiesto un favore.'), ditado('Mi serve un consiglio', 'Escreva: Mi serve un consiglio.'), ditado('Gli rispondo domani', 'Escreva: Gli rispondo domani.'),
        mc('Qual pronome vem com «telefonare a Luca»?', ['gli', 'lo', 'le'], 'gli', 'Telefonare: objeto indireto.'), mc('Qual pronome vem com «chiamare Giulia»?', ['la', 'le', 'gli'], 'la', 'Chiamare: objeto direto.'), mc('Qual frase está correta?', ['Le ho dato un libro.', 'Le ho data un libro.', 'La ho dato un libro.'], 'Le ho dato un libro.', 'Indireto, sem concordância.'), mc('«Eu lamento» em italiano:', ['Mi dispiace.', 'Io dispiaccio.', 'Lo dispiace.'], 'Mi dispiace.', 'Pronome indireto + verbo.'),
        lacuna('Scrivo a Marco → ___ scrivo.', ['gli', 'lo', 'le'], 'gli', 'A ele: gli.'), lacuna('Telefono a Elena → ___ telefono.', ['le', 'la', 'gli'], 'le', 'A ela: le.'), lacuna('A me ___ piace il tè.', ['mi', 'io', 'me'], 'mi', 'Pronome indireto átono.'), lacuna('Mando le foto a voi → ___ mando le foto.', ['vi', 'li', 'ci'], 'vi', 'A vocês: vi.'),
        ordem('Ordene: «Le scrivo una mail.»', ['Le', 'scrivo', 'una', 'mail.'], 'Le scrivo una mail.', 'Pronome antes do verbo.'), ordem('Ordene: «Gli ho chiesto un favore.»', ['Gli', 'ho', 'chiesto', 'un', 'favore.'], 'Gli ho chiesto un favore.', 'Pronome antes do auxiliar.'),
        livre('Escreva em italiano: Telefonei a ela ontem e pedi um conselho.', 'Le ho telefonato ieri e le ho chiesto un consiglio.'),
        lacuna('A Marco e Luca ___ scrivo una mail. (lhes)', ['le', 'ti', 'gli'], 'gli', 'Para «a eles» o pronome é «gli».'),
        lacuna('A noi ___ piace Roma. (nos)', ['ci', 'vi', 'mi'], 'ci', 'O pronome indireto de «a nós» é «ci».'),
        lacuna('Ho dato un libro a mia sorella: ___ ho dato un libro. (lhe)', ['La', 'Le', 'Gli'], 'Le', 'Para «a ela» o pronome é «le».'),
        lacuna('Hai scritto a Paolo? Sì, ___ ho scritto ieri. (lhe)', ['lo', 'gli', 'le'], 'gli', '«Scrivere a» pede objeto indireto: «gli».'),
        lacuna('Ti ___ il libro domani. (devolvo)', ['restituisco', 'restituire', 'restituisci'], 'restituisco', 'Com «io», «restituire» fica «restituisco».'),
        mc('Qual pronome vem com «chiedere a Giulia»?', ['la', 'le', 'li'], 'le', '«Chiedere a» pede objeto indireto feminino: «le».'),
        mc('Como se diz «Mando-lhe uma mensagem» (a ela)?', ['La mando un messaggio.', 'Mando le un messaggio.', 'Le mando un messaggio.'], 'Le mando un messaggio.', 'O pronome indireto vem antes do verbo.'),
        mc('Qual verbo leva objeto indireto de pessoa?', ['aiutare', 'telefonare', 'chiamare'], 'telefonare', 'Telefona-se «a» alguém; já «aiutare» e «chiamare» pedem objeto direto.'),
        mc('Como se diz «Ele me deu um presente»?', ['Mi ha dato un regalo.', 'Io ha dato un regalo.', 'Mi ha dato a un regalo.'], 'Mi ha dato un regalo.', '«Mi» é o objeto indireto, antes do auxiliar.'),
        ordem('Ordene: «Gli ho prestato la macchina.»', ['Gli', 'ho', 'prestato', 'la', 'macchina.'], 'Gli ho prestato la macchina.', 'Pronome indireto antes do auxiliar; o particípio não concorda.'),
        ordem('Ordene: «Le mostro le foto del viaggio.»', ['Le', 'mostro', 'le', 'foto', 'del', 'viaggio.'], 'Le mostro le foto del viaggio.', '«Le» (a ela) é indireto; «le foto» é o objeto direto.'),
        livre('Escreva em italiano: Escrevi a ela um cartão e dei-lhe um presente.', 'Le ho scritto un biglietto e le ho dato un regalo.'),
        livre('Escreva em italiano: Peço-lhe um conselho e ele me responde logo. (a ele)', 'Gli chiedo un consiglio e lui mi risponde subito.'),
      ]),
      producao(5, 'Conte em voz alta a um amigo o que você escreveu, disse ou deu a três pessoas na última semana.'),
    ]),
  ],
});
