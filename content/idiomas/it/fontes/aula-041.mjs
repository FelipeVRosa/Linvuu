import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 41, titulo: 'Pronomi combinati', nivel: 'b1',
  objetivo: 'Combinar pronome indireto e direto (me lo, te la, glielo, ce ne…), colocá-los no lugar certo e reconhecer expressões fixas como «ce la faccio» e «se ne va».',
  nota: 'É a aula que mais soa «italiana» do B1. Combine o pronome de quem recebe com o de o que é dado, sempre nessa ordem. Próxima aula: futuro anteriore.',
  sessoes: [
    sessao('S1', 'Me lo, te la, glielo', [
      revisao(5, 'Responda em voz alta a «Hai una penna?» com «Sì, ce l\'ho» e depois repita com «il caricatore» e «le chiavi» (Sì, ce le ho).'),
      palavras(8, [
        ['prestare', 'prestáre', 'emprestar', ''], ['regalare', 'regaláre', 'dar de presente', ''], ['restituire', 'restituíre', 'devolver', ''], ['mandare', 'mandáre', 'enviar', ''], ['spedire', 'spedíre', 'despachar, enviar pelo correio', ''], ['mostrare', 'mostráre', 'mostrar', ''], ['consegnare', 'konsenháre', 'entregar', ''], ['portare', 'portáre', 'trazer, levar', ''],
      ]),
      gramatica(12, 'Mi + lo = me lo', 'PASSO 1: quando a mesma frase tem pronome indireto («a mim, a você…») e direto («o, a, os, as»), eles se unem em uma sequência fixa: INDIRETO + DIRETO. PASSO 2: mi, ti, ci, vi e si mudam a vogal para -e: «me lo, te la, ce li, ve le, se lo». PASSO 3: gli (a ele), le (a ela) e Le (ao Senhor / à Senhora) viram todos «glie-» e se colam ao direto: «glielo, gliela, glieli, gliele, gliene». PASSO 4: «ne» também entra: «me ne, te ne, ce ne, gliene»: «Mi dai due biscotti? — Te ne do tre.» PASSO 5: «lo» e «la» perdem a vogal antes de verbo que começa por vogal ou de «ho, hai, ha»: «Me l\'ha dato», «Te l\'ho detto». PASSO 6: «li» e «le» não perdem a vogal: «Me li ha dati», «Te le ho prese». PASSO 7: no passato prossimo o particípio concorda com o pronome direto: «Le chiavi? Te le ho date.» «Il libro? Te l\'ho dato.» PASSO 8: o pronome combinado fica antes do verbo conjugado: «Me lo dai?», «Glielo spiego io.»', {
        tag: 'Pronomes',
        comparacao: 'o português do Brasil quase não combina pronomes: diz «me dá isso» ou «dá pra mim». O italiano faz a combinação em uma palavra: «dammelo». Em «glielo», a mesma palavra vale para «a ele», «a ela» e «ao Senhor/à Senhora»: o gênero não aparece, só o contexto diz quem recebe.',
        tabela: [
          { indireto: 'mi', lo: 'me lo', la: 'me la', li: 'me li', le: 'me le', ne: 'me ne' }, { indireto: 'ti', lo: 'te lo', la: 'te la', li: 'te li', le: 'te le', ne: 'te ne' }, { indireto: 'gli / le / Le', lo: 'glielo', la: 'gliela', li: 'glieli', le: 'gliele', ne: 'gliene' }, { indireto: 'ci', lo: 'ce lo', la: 'ce la', li: 'ce li', le: 'ce le', ne: 'ce ne' }, { indireto: 'vi', lo: 've lo', la: 've la', li: 've li', le: 've le', ne: 've ne' },
        ],
        erros: [['Le lo dico domani.', 'Glielo dico domani.', 'Le + lo vira «glielo».'], ['Mi lo dai?', 'Me lo dai?', 'Mi muda para «me» antes de lo, la, li, le, ne.'], ['Te le ho dato.', 'Te le ho date.', 'O particípio concorda com «le» (as chaves).'], ['Gli lo do.', 'Glielo do.', 'Gli + lo é uma palavra só: «glielo».']],
      }),
      producao(5, 'Responda em voz alta com pronome combinado: «Mi presti il libro?» (Sì, te lo presto.) «Mi dai le chiavi?» «Gli mandi il messaggio?»'),
    ]),
    sessao('S2', 'Onde colocar os pronomes combinados', [
      revisao(4, 'Substitua em voz alta: «Do il libro a Marco» (Glielo do), «Dico la verità a te» (Te la dico).'),
      palavras(6, [
        ['dammelo', 'dámmelo', 'dê-me (isso)', ''], ['dimmelo', 'dímmelo', 'diga-me (isso)', ''], ['portamela', 'portámela', 'traga-me (ela)', ''], ['raccontarglielo', 'rakkontárlhelo', 'contá-lo a ele/ela', ''], ['spiegarcelo', 'spiegártchelo', 'explicá-lo a nós', ''], ['mettercela', 'mettértchela', 'colocá-la lá', ''],
      ]),
      gramatica(12, 'Antes do verbo, ou colados', 'PASSO 1: com verbo conjugado, o pronome combinado vem antes: «Te lo dico.» PASSO 2: com infinitivo, ele pode ir antes do verbo modal ou colado ao infinitivo, que perde o «-e» final: «Me lo puoi dare?» = «Puoi darmelo?». Escolha uma posição, nunca as duas. PASSO 3: com imperativo de tu, noi e voi, o pronome vem colado ao final: «Dammelo», «Portamela», «Diglielo», «Spieghiamoglielo». PASSO 4: nos imperativos curtos da/di/fa/sta/va, a consoante do pronome dobra, menos com «gli»: «da\' + mi + lo = dammelo», «di\' + mi + lo = dimmelo», «di\' + gli + lo = diglielo». PASSO 5: no imperativo negativo de tu use o infinitivo: «Non dirmelo» ou «Non me lo dire». PASSO 6: com o imperativo de Lei o pronome vem antes: «Me lo porti, per favore.» PASSO 7: gli (a ele/ela) com infinitivo vira «-glielo»: «dirglielo, mostrarglielo». PASSO 8: no passato prossimo o combinado vem antes do auxiliar: «Gliel\'ho detto», «Ce l\'ha portato.»', {
        tag: 'Pronomes',
        comparacao: 'em português o pronome oblíquo (me, lhe) vira raro na fala, e usamos «pra mim». Em italiano o pronome é obrigatório. Compare: «Vou te dar isso» → «Te lo do» ou «Voglio dartelo»; «me traz isso» → «portamelo». Quem tenta falar sem pronome fica entendido, mas soa estranho.',
        tabela: [
          { construcao: 'verbo conjugado', exemplo: 'Te lo dico domani.' }, { construcao: 'modal + infinitivo', exemplo: 'Me lo puoi dare? / Puoi darmelo?' }, { construcao: 'imperativo (tu)', exemplo: 'Dammelo, per favore.' }, { construcao: 'imperativo negativo', exemplo: 'Non dirmelo. / Non me lo dire.' }, { construcao: 'imperativo (Lei)', exemplo: 'Me lo porti, per favore.' }, { construcao: 'passato prossimo', exemplo: 'Gliel\'ho detto ieri.' },
        ],
        erros: [['Dammi lo.', 'Dammelo.', 'Os dois pronomes se juntam e se colam ao imperativo.'], ['Me lo puoi darmi.', 'Me lo puoi dare. / Puoi darmelo.', 'Escolha uma só posição.'], ['Non dimmelo.', 'Non dirmelo. / Non me lo dire.', 'O negativo de tu usa infinitivo.'], ['Diglilo.', 'Diglielo.', 'Gli + lo sempre vira «glielo».']],
      }),
      producao(8, 'Diga em voz alta oito frases para um colega: peça cada coisa de duas formas, por exemplo «Puoi darmelo?» e «Me lo puoi dare?».'),
    ]),
    sessao('S3', 'Emprestar e devolver', [
      revisao(4, 'Diga em voz alta: «Me l\'hai dato», «Te le ho date», «Gliene ho parlato», trocando o objeto.'),
      palavras(5, [
        ['il caricatore', 'il karikatôre', 'o carregador', ''], ['il trapano', 'il trápano', 'a furadeira', ''], ['figurati', 'figúrati', 'imagina, de nada', ''], ['ti dispiace', 'ti dispiátche', 'você se importa', ''], ['entro sabato', 'êntro sábato', 'até sábado', ''],
      ]),
      gramatica(8, 'Ce l\'ho, ce la faccio, se ne va', 'PASSO 1: «ci» + «lo» vira «ce lo» e aparece em expressões fixas: «Ce l\'ho» (eu o tenho), «Ce l\'hai?» (você o tem?). PASSO 2: «Ce la faccio» significa «consigo» e «Non ce la faccio» significa «não aguento, não consigo». PASSO 3: «cavarsela» é «virar-se»: «Se la cava bene». PASSO 4: «andarsene» é «ir embora»: «Me ne vado», «Se ne va». PASSO 5: em «farcela» e «cavarsela» o «la» é fixo e não se troca por outro pronome; já «ce l\'ho» varia com o objeto: «ce l\'ho» (o, a), «ce li ho», «ce le ho».', {
        tag: 'Pronomes',
        comparacao: 'o português tem expressões que se parecem: «dar conta» (ce la faccio), «ir-se embora» (andarsene). O pronome combinado que nelas aparece não significa «o» ou «a» concreto; faz parte da expressão. Memorize como bloco.',
        tabela: [
          { expressao: 'Ce l\'ho.', sentido: 'Eu tenho (isso).', exemplo: 'Hai una penna? — Sì, ce l\'ho.' }, { expressao: 'Ce la faccio.', sentido: 'Eu consigo.', exemplo: 'Ce la fai? — Sì, ce la faccio.' }, { expressao: 'Non ce la faccio.', sentido: 'Eu não aguento.', exemplo: 'Non ce la faccio più!' }, { expressao: 'Se la cava.', sentido: 'Ele se vira.', exemplo: 'Marco se la cava bene.' }, { expressao: 'Me ne vado.', sentido: 'Eu vou embora.', exemplo: 'Sono stanco, me ne vado.' },
        ],
        erros: [['Non la faccio.', 'Non ce la faccio.', 'A expressão leva «ce».'], ['Ho una penna? — Sì, lo ho.', 'Hai una penna? — Sì, ce l\'ho.', 'A resposta natural é «ce l\'ho».'], ['Mi vado.', 'Me ne vado.', '«Andarsene» pede «me ne».'], ['Se la cavano bene, Marco.', 'Se la cava bene, Marco.', 'Terceira pessoa do singular.']],
      }),
      dialogo(8, 'Il caricatore e il trapano', 'Marco passa na casa de Giulia para pegar algumas coisas emprestadas.', [
        ['Marco', 'Giulia, hai il caricatore del telefono? Il mio non funziona più.', 'Giulia, você tem o carregador do telefone? O meu não funciona mais.'],
        ['Giulia', 'Ce l\'ho in borsa. Te lo presto volentieri, ma me lo restituisci domani?', 'Eu o tenho na bolsa. Empresto de bom grado, mas você me devolve amanhã?'],
        ['Marco', 'Certo, te lo riporto domani mattina. E il trapano di tuo fratello? Lo usa ancora?', 'Claro, devolvo amanhã de manhã. E a furadeira do seu irmão? Ele ainda a usa?'],
        ['Giulia', 'No, ma devi chiederglielo tu. Io non glielo posso prestare senza il suo permesso.', 'Não, mas você tem que pedir a ele. Eu não posso emprestá-la sem a permissão dele.'],
        ['Marco', 'Hai ragione. Glielo chiedo stasera. Se me lo dà, te lo faccio vedere entro sabato.', 'Você tem razão. Peço a ele hoje à noite. Se ele me der, mostro a você até sábado.'],
        ['Giulia', 'Perfetto. E i libri che ti ho dato a settembre? Me li porti quando vieni?', 'Perfeito. E os livros que dei a você em setembro? Você os traz quando vier?'],
        ['Marco', 'Quali? Ah, i due romanzi! Te li ho già restituiti, non ricordi?', 'Quais? Ah, os dois romances! Já os devolvi a você, não lembra?'],
        ['Giulia', 'Davvero? Allora li ho messi da qualche parte. Non ce la faccio a trovare niente in questa casa!', 'Verdade? Então eu os pus em algum lugar. Não consigo achar nada nesta casa!'],
        ['Marco', 'Tranquilla, te li cerco io. Intanto prendo il caricatore e me ne vado.', 'Tranquila, procuro eu para você. Por ora pego o carregador e vou embora.'],
        ['Giulia', 'Eccolo. Domani me lo riporti, eh?', 'Aqui está. Amanhã você o traz de volta, certo?'],
      ]),
      producao(5, 'Invente em voz alta um pedido de empréstimo e a resposta, com pelo menos três pronomes combinados.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 41', [
      revisao(5, 'Responda em voz alta com pronome combinado: «Mi dai il libro?», «Dai la chiave a Paolo?», «Ci porti i biscotti?»'),
      exercicios(20, [
        ouvir('Te lo presto volentieri', ['Te lo presto volentieri', 'Ti lo presto volentieri', 'Te la presto volentieri'], 'Te lo presto volentieri', 'Ouça «te lo».'),
        ouvir('Glielo dico io', ['Glielo dico io', 'Gli lo dico io', 'Lo dico io'], 'Glielo dico io', 'Ouça «glielo».'),
        ouvir('Non ce la faccio più', ['Non ce la faccio più', 'Non la faccio più', 'Non ce la fanno più'], 'Non ce la faccio più', 'Expressão fixa.'),
        ditado('Dammelo, per favore', 'Escreva: Dammelo, per favore.'), ditado('Me li ha dati ieri', 'Escreva: Me li ha dati ieri.'), ditado('Ce l\'ho in borsa', 'Escreva: Ce l\'ho in borsa.'),
        mc('«Eu lhe dou isso» (a ele ou ela, o livro) em italiano:', ['Glielo do.', 'Gli lo do.', 'Lo gli do.'], 'Glielo do.', 'Gli + lo = glielo.'),
        mc('Qual frase está correta?', ['Te le ho date.', 'Te le ho dato.', 'Ti le ho date.'], 'Te le ho date.', 'Concordância com «le».'),
        mc('«Dê-me isso» em italiano:', ['Dammelo.', 'Dammi lo.', 'Dami lo.'], 'Dammelo.', 'Imperativo com pronomes colados.'),
        mc('«Não consigo» em italiano:', ['Non ce la faccio.', 'Non la faccio.', 'Non mi faccio.'], 'Non ce la faccio.', 'Expressão fixa.'),
        lacuna('Il libro? ___ ho dato ieri. (a você, o)', ['Te l\'', 'Gliel\'', 'Ce l\''], 'Te l\'', 'Ti + lo = te l\' antes de ho.'),
        lacuna('Le chiavi? Te le ho ___.', ['date', 'dato', 'dati'], 'date', 'Concordância com «le chiavi».'),
        lacuna('Hai il caricatore? — Sì, ___ in borsa.', ['ce l\'ho', 'lo ho', 'ci ho'], 'ce l\'ho', 'Resposta natural.'),
        lacuna('Marco? ___ spiego io la cosa. (a ele, a cosa)', ['Gliela', 'Glielo', 'Gliele'], 'Gliela', 'A cosa é feminino: gliela.'),
        ordem('Ordene: «Me lo puoi portare domani?»', ['Me', 'lo', 'puoi', 'portare', 'domani'], 'Me lo puoi portare domani?', 'Pronome combinado antes do modal.'),
        ordem('Ordene: «Glielo spiego io.»', ['Glielo', 'spiego', 'io'], 'Glielo spiego io.', 'Pronome antes do verbo.'),
        livre('Escreva em italiano: Você me empresta o carregador? — Claro, empresto a você. Devolvo amanhã.', 'Me lo presti, il caricatore? — Certo, te lo presto. Te lo restituisco domani.'),
        lacuna('Le chiavi? ___ restituisco domani. (a você, as)', ['Ti le', 'Te le', 'Le te'], 'Te le', 'Indireto + direto: «ti» vira «te» e vem antes de «le».'),
        lacuna('La foto? ___ mostro domani. (a ele, a)', ['Glielo', 'Gli la', 'Gliela'], 'Gliela', '«Gli» + «la» viram «gliela».'),
        lacuna('Il regalo? Maria ___ ha dato. (a nós, o)', ['ce l\'', 'ci l\'', 'ce lo'], 'ce l\'', '«Ci» + «lo» viram «ce lo», que se elide antes de «ha»: «ce l\'ha».'),
        lacuna('Mi presti la penna? — Sì, ___ presto. (a você, a)', ['ti la', 'te la', 'la te'], 'te la', '«Ti» + «la» viram «te la».'),
        lacuna('Dammi la penna: ___, per favore. (dê-me-a)', ['Dammela', 'Dammi la', 'Damme la'], 'Dammela', 'No imperativo, os pronomes se colam ao final.'),
        mc('O que significa «Me ne vado»?', ['Eu vou embora.', 'Eu o vi.', 'Eu o tenho.'], 'Eu vou embora.', '«Andarsene» é ir embora.'),
        mc('Qual é a forma de «a ele + os» (livros)?', ['gliele', 'glielo', 'glieli'], 'glieli', 'Masculino plural: «glieli».'),
        mc('Como se diz «Conte-me isso» (a pessoa e coisa masculinas)?', ['Raccontami lo.', 'Raccontamelo.', 'Mi lo racconta.'], 'Raccontamelo.', 'No imperativo de «tu», os pronomes combinados vão colados ao verbo.'),
        mc('Qual frase está correta?', ['Puoi darlomi?', 'Puoi dare lo mi?', 'Puoi darmelo?'], 'Puoi darmelo?', 'Com infinitivo, o pronome se cola ao verbo: «darmelo».'),
        ordem('Ordene: «Te lo restituisco domani mattina.»', ['Te', 'lo', 'restituisco', 'domani', 'mattina.'], 'Te lo restituisco domani mattina.', 'Pronome combinado antes do verbo conjugado.'),
        ordem('Ordene: «Non me lo dire adesso.»', ['Non', 'me', 'lo', 'dire', 'adesso.'], 'Non me lo dire adesso.', 'No negativo, o pronome pode ir antes do infinitivo.'),
        livre('Escreva em italiano: Você me empresta a furadeira? Eu a devolvo amanhã.', 'Mi presti il trapano? Te lo restituisco domani.'),
        livre('Escreva em italiano: Ele me deu as chaves e eu as devolvi a ele.', 'Me le ha date e io gliele ho restituite.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você já emprestou ou pediu emprestado, usando pronomes combinados.'),
    ]),
  ],
});
