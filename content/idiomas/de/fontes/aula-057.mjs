import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 57, titulo: 'Conectores: obwohl, trotzdem, deshalb, deswegen, außerdem, sonst', nivel: 'b1',
  objetivo: 'Usar os conectores de concessão (obwohl, trotzdem), de consequência (deshalb, deswegen, darum), de adição (außerdem) e de alternativa (sonst), distinguindo a conjunção (verbo no fim) do advérbio conectivo (verbo na 2ª posição).',
  nota: 'Você liga ideias com precisão. Próxima aula: mais conectores em pares (einerseits … andererseits, entweder … oder).',
  sessoes: [
    sessao('S1', 'Obwohl × trotzdem', [
      revisao(5, 'Escreva 6 frases com «um … zu», «damit», «ohne … zu» e «statt … zu».'),
      palavras(8, [
        ['obwohl', 'op-vól', 'embora, apesar de que', 'although'], ['trotzdem', 'trots-dêm', 'mesmo assim', 'nevertheless'], ['dennoch', 'dén-nokh', 'ainda assim', 'yet'], ['zwar … aber', 'tsvar … áber', 'é verdade que … mas', 'it is true … but'],
        ['allerdings', 'á-ler-dings', 'no entanto, porém', 'however'], ['jedoch', 'ie-dórr', 'porém', 'however'], ['dagegen', 'da-guéguen', 'em contrapartida', 'on the other hand'], ['trotz', 'trots', 'apesar de', 'despite'],
      ]),
      gramatica(14, 'Obwohl e trotzdem: a mesma ideia, duas estruturas', 'PASSO 1: as duas palavras expressam CONCESSÃO («apesar de»): a ação acontece mesmo com um obstáculo. PASSO 2: «OBWOHL» é uma CONJUNÇÃO subordinativa: o verbo conjugado vai para o FIM: «Obwohl es regnet, gehe ich spazieren» (embora esteja chovendo, vou passear). PASSO 3: «TROTZDEM» é um ADVÉRBIO conectivo: ocupa a 1ª posição da frase e o verbo vem logo depois, na 2ª: «Es regnet. Trotzdem gehe ich spazieren.» PASSO 4: use «obwohl» para ligar as duas ideias em UMA frase; use «trotzdem» para ligar duas frases. PASSO 5: «trotz» + genitivo é preposição (aula 41): «trotz des Regens». PASSO 6: um truque: «obwohl» = «weil» de sentido oposto: ambas mandam o verbo para o fim.', {
        tag: 'Frase',
        comparacao: 'o português usa «embora» (subjuntivo) e «mesmo assim». O alemão faz o mesmo, mas a ordem das palavras muda: depois de «obwohl», o verbo vai para o fim; depois de «trotzdem», o verbo vem logo em seguida.',
        tabela: [
          { palavra: 'obwohl (conjunção)', frase: 'Obwohl es regnet, gehe ich spazieren.' }, { palavra: 'trotzdem (advérbio)', frase: 'Es regnet. Trotzdem gehe ich spazieren.' }, { palavra: 'trotz (preposição + genitivo)', frase: 'Trotz des Regens gehe ich spazieren.' }, { palavra: 'zwar … aber', frase: 'Es regnet zwar, aber ich gehe trotzdem spazieren.' },
        ],
        erros: [['Obwohl es regnet, ich gehe spazieren.', 'Obwohl es regnet, gehe ich spazieren.', 'Depois da subordinada, a principal começa pelo verbo.'], ['Es regnet. Trotzdem ich gehe spazieren.', 'Es regnet. Trotzdem gehe ich spazieren.', 'Depois de «trotzdem», o verbo na 2ª posição.'], ['Obwohl es regnet, trotzdem gehe ich spazieren.', 'Obwohl es regnet, gehe ich spazieren.', 'Não se usam «obwohl» e «trotzdem» juntos.']],
      }),
      producao(3, 'Diga 6 frases de concessão em voz alta: «Obwohl … , … Es … . Trotzdem …»'),
    ]),
    sessao('S2', 'Deshalb, deswegen, darum', [
      revisao(5, 'Escreva 6 frases com «obwohl» e «trotzdem».'),
      palavras(8, [
        ['deshalb', 'dés-halp', 'por isso', 'therefore'], ['deswegen', 'dés-vê-guen', 'por isso', 'that is why'], ['darum', 'da-rúm', 'por isso, por essa razão', 'that is why'], ['also', 'ál-zo', 'então, portanto', 'so'],
        ['folglich', 'fólg-liç', 'consequentemente', 'consequently'], ['daher', 'dá-her', 'daí, por isso', 'hence'], ['infolgedessen', 'in-fól-ge-dé-sen', 'em consequência disso', 'as a result'], ['die Folge', 'di fólgue', 'consequência', 'consequence'],
      ]),
      gramatica(12, 'Deshalb, deswegen e darum: a consequência, passo a passo', 'PASSO 1: «DESHALB», «DESWEGEN» e «DARUM» significam «POR ISSO» e expressam CONSEQUÊNCIA. São ADVÉRBIOS conectivos: ocupam a 1ª posição, e o verbo conjugado vem logo depois (2ª posição): «Ich bin krank. Deshalb bleibe ich zu Hause.» PASSO 2: a mesma ideia com «WEIL» (motivo) inverte a ordem: «Ich bleibe zu Hause, weil ich krank bin.» Consequência primeiro → «deshalb»; motivo primeiro → «weil». PASSO 3: «also» e «daher» (então, daí) têm função parecida: «Ich habe Fieber, also bleibe ich im Bett.» (com «also», o verbo pode ficar na posição normal). PASSO 4: pergunta: «Warum?» — resposta: «Weil …» ou «Deshalb …». PASSO 5: lembre que a posição do verbo depois de «deshalb» é a 2ª; a de «weil» é o fim.', {
        tag: 'Frase',
        tabela: [
          { conector: 'deshalb (advérbio)', frase: 'Ich bin krank. Deshalb bleibe ich zu Hause.' }, { conector: 'deswegen (advérbio)', frase: 'Es regnet. Deswegen nehme ich einen Schirm.' }, { conector: 'darum (advérbio)', frase: 'Er hat Zeit. Darum kommt er mit.' }, { conector: 'weil (conjunção)', frase: 'Ich bleibe zu Hause, weil ich krank bin.' }, { conector: 'also', frase: 'Ich habe Fieber, also bleibe ich im Bett.' },
        ],
        erros: [['Ich bin krank. Deshalb ich bleibe zu Hause.', 'Ich bin krank. Deshalb bleibe ich zu Hause.', 'Depois de «deshalb», o verbo na 2ª posição.'], ['Ich bin krank, deshalb bleibe ich zu Hause, weil.', 'Ich bin krank. Deshalb bleibe ich zu Hause.', 'Escolha uma ligação: deshalb OU weil.']],
      }),
      producao(5, 'Diga 6 frases com consequência: «Ich bin müde. Deshalb … Es regnet. Deswegen …»'),
    ]),
    sessao('S3', 'Außerdem, sonst e outros conectores', [
      revisao(5, 'Escreva 6 frases com «deshalb», «deswegen» e «weil».'),
      gramatica(10, 'Mais conectores, passo a passo', 'PASSO 1: «AUSSERDEM» (além disso) acrescenta uma ideia: «Ich habe keine Zeit. Außerdem bin ich müde.» PASSO 2: «SONST» (senão, caso contrário) expressa a alternativa: «Beeil dich, sonst verpasst du den Zug.» PASSO 3: «ALLERDINGS», «JEDOCH» e «DAGEGEN» contrastam: «Er ist nett. Allerdings ist er manchmal spät.» PASSO 4: todos esses conectores, quando abrem a frase, levam o verbo logo depois (2ª posição). PASSO 5: se ficarem no meio da frase, a posição do verbo continua na 2ª: «Er ist allerdings manchmal spät.» PASSO 6: com «aber» e «denn» (conjunções coordenativas), a ordem normal se mantém; «aber» e «denn» NÃO ocupam a 1ª posição.', {
        tag: 'Frase',
        tabela: [
          { conector: 'außerdem', significado: 'além disso', frase: 'Ich habe keine Zeit. Außerdem bin ich müde.' }, { conector: 'sonst', significado: 'senão', frase: 'Beeil dich, sonst verpasst du den Zug.' }, { conector: 'allerdings', significado: 'no entanto', frase: 'Er ist nett. Allerdings ist er manchmal spät.' }, { conector: 'jedoch', significado: 'porém', frase: 'Das Hotel ist schön, jedoch teuer.' }, { conector: 'dagegen', significado: 'em contrapartida', frase: 'Ich mag Sommer. Mein Bruder dagegen mag Winter.' },
        ],
      }),
      dialogo(10, 'Pro und Contra / Prós e contras', 'Dois colegas discutem uma viagem de fim de semana.', [
        ['Mia', 'Fahren wir am Wochenende nach Hamburg?', 'Vamos a Hamburgo no fim de semana?'], ['Jonas', 'Obwohl das Wetter schlecht ist, würde ich gern fahren.', 'Embora o tempo esteja ruim, eu gostaria de ir.'], ['Mia', 'Es regnet. Trotzdem möchte ich nicht zu Hause bleiben.', 'Está chovendo. Mesmo assim não quero ficar em casa.'],
        ['Jonas', 'Das Hotel ist teuer. Deshalb schlage ich vor, mit dem Zug zu fahren.', 'O hotel é caro. Por isso sugiro ir de trem.'], ['Mia', 'Außerdem ist die Fahrt mit dem Zug entspannter.', 'Além disso, a viagem de trem é mais tranquila.'], ['Jonas', 'Wir müssen jetzt buchen, sonst sind alle Plätze weg.', 'Precisamos reservar agora, senão todos os lugares acabam.'],
        ['Mia', 'Das Hotel ist zwar teuer, aber es liegt zentral.', 'O hotel é caro, é verdade, mas fica no centro.'], ['Jonas', 'Einverstanden! Ich buche alles heute noch.', 'Combinado! Reservo tudo ainda hoje.'],
      ]),
      producao(5, 'Discuta em voz alta os prós e contras de um plano, com obwohl, trotzdem, deshalb, außerdem e sonst.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases defendendo uma ideia, com conectores variados.'),
      exercicios(20, [
        lacuna('___ es regnet, gehe ich spazieren. (embora)', ['Obwohl', 'Trotzdem', 'Deshalb'], 'Obwohl', 'Conjunção: verbo no fim.'), lacuna('Es regnet. ___ gehe ich spazieren. (mesmo assim)', ['Trotzdem', 'Obwohl', 'Weil'], 'Trotzdem', 'Advérbio: verbo na 2ª posição.'), lacuna('Ich bin krank. ___ bleibe ich zu Hause. (por isso)', ['Deshalb', 'Weil', 'Obwohl'], 'Deshalb', 'Consequência.'),
        lacuna('Ich bleibe zu Hause, ___ ich krank bin. (porque)', ['weil', 'deshalb', 'trotzdem'], 'weil', 'Conjunção: verbo no fim.'), lacuna('Beeil dich, ___ verpasst du den Zug. (senão)', ['sonst', 'außerdem', 'obwohl'], 'sonst', 'Alternativa.'), lacuna('Ich habe keine Zeit. ___ bin ich müde. (além disso)', ['Außerdem', 'Sonst', 'Deshalb'], 'Außerdem', 'Adição.'),
        mc('Depois de «obwohl», o verbo vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Conjunção.'), mc('Depois de «trotzdem», o verbo vai:', ['para a 2ª posição', 'para o fim', 'para o começo'], 'para a 2ª posição', 'Advérbio.'), mc('«Deshalb» expressa:', ['consequência', 'concessão', 'adição'], 'consequência', 'Por isso.'),
        ordem('Ordene: «Embora chova, vou passear.»', ['Obwohl', 'es', 'regnet', 'gehe', 'ich', 'spazieren'], 'Obwohl es regnet, gehe ich spazieren.', 'Subordinada primeiro.'), ordem('Ordene: «Estou doente. Por isso fico em casa.»', ['Ich', 'bin', 'krank', 'Deshalb', 'bleibe', 'ich', 'zu', 'Hause'], 'Ich bin krank. Deshalb bleibe ich zu Hause.', 'Depois de deshalb: verbo.'), ouvir('Es regnet. Trotzdem möchte ich nicht zu Hause bleiben', ['Es regnet. Trotzdem möchte ich nicht zu Hause bleiben', 'Obwohl es regnet, möchte ich bleiben', 'Es regnet, deshalb bleibe ich'], 'Es regnet. Trotzdem möchte ich nicht zu Hause bleiben', 'trotzdem + verbo.'),
        ditado('Wir müssen jetzt buchen, sonst sind alle Plätze weg', 'sonst.'), livre('Escreva 5 frases: uma com «obwohl», uma com «trotzdem», uma com «deshalb», uma com «außerdem» e uma com «sonst».', 'Obwohl es regnet, gehe ich spazieren. Es regnet. Trotzdem bleibe ich nicht zu Hause. Ich bin müde. Deshalb gehe ich früh ins Bett. Ich habe keine Zeit. Außerdem bin ich müde. Beeil dich, sonst verpasst du den Zug.'),
      ]),
      producao(5, 'Grave-se defendendo uma ideia ou um plano com conectores variados.'),
    ]),
  ],
});
