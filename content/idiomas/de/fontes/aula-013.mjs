import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 13, titulo: 'Gramática: acusativo, lugares e Declinação-N', nivel: 'a1',
  objetivo: 'Usar as preposições do acusativo, as Wechselpräpositionen com Wo? (dativo) e Wohin? (acusativo), os verbos de posição e a Declinação-N (der Student → den Studenten).',
  nota: 'Você usa o acusativo, as preposições de lugar e os substantivos fracos. Próxima aula: os verbos modais.',
  sessoes: [
    sessao('S1', 'Preposições do acusativo', [
      revisao(5, 'Escreva as preposições do dativo e uma frase com cada uma.'),
      palavras(8, [
        ['der Fluss', 'der flus', 'rio', 'river'], ['der Wald', 'der valt', 'floresta', 'forest'], ['die Brücke', 'di brüke', 'ponte', 'bridge'], ['der Tunnel', 'der túnel', 'túnel', 'tunnel'], ['der Strand', 'der xtrant', 'praia', 'beach'], ['der Berg', 'der berk', 'montanha', 'mountain'], ['der See', 'der ze', 'lago', 'lake'], ['das Meer', 'das mér', 'mar', 'sea'],
      ]),
      gramatica(12, 'durch, für, gegen, ohne, um: sempre acusativo', 'Cinco preposições pedem SEMPRE o acusativo: durch (através de), für (para, por), gegen (contra; por volta de), ohne (sem) e um (em volta de; às, nas horas). Decore-as em fila: durch, für, gegen, ohne, um. Contrações comuns: durch das = durchs, für das = fürs, um das = ums. Lembre: no acusativo só o masculino muda (den, einen, keinen).', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'durch', significado: 'através de', exemplo: 'Wir gehen durch den Wald.' }, { preposicao: 'für', significado: 'para, por', exemplo: 'Das Geschenk ist für meinen Bruder.' }, { preposicao: 'gegen', significado: 'contra; por volta de', exemplo: 'Ich bin gegen den Plan. Wir kommen gegen acht Uhr.' },
          { preposicao: 'ohne', significado: 'sem', exemplo: 'Ich trinke Kaffee ohne Zucker.' }, { preposicao: 'um', significado: 'em volta de; às (horas)', exemplo: 'Die Kinder laufen um den Tisch. Der Zug fährt um acht Uhr.' },
        ],
        erros: [['Das Geschenk ist für meinem Bruder.', 'Das Geschenk ist für meinen Bruder.', '«für» pede acusativo.'], ['Ich trinke Kaffee ohne dem Zucker.', 'Ich trinke Kaffee ohne Zucker.', '«ohne» pede acusativo (e aqui nem leva artigo).']],
      }),
      producao(5, 'Diga: «Wir gehen durch den Wald. Das Geschenk ist für meine Mutter. Ich trinke Kaffee ohne Zucker.»'),
    ]),
    sessao('S2', 'Wo? × Wohin? e os verbos de posição', [
      revisao(5, 'Escreva «im Park, in den Park, in der Schule, in die Schule, im Kino, ins Kino».'),
      palavras(8, [
        ['stehen', 'xtéen', 'estar de pé', 'to stand'], ['stellen', 'xtélen', 'pôr de pé', 'to put (upright)'], ['liegen', 'lígen', 'estar deitado', 'to lie'], ['legen', 'légen', 'deitar, pôr deitado', 'to lay'], ['sitzen', 'zítsen', 'estar sentado', 'to sit'], ['setzen', 'zétsen', 'sentar, pôr sentado', 'to seat'], ['hängen', 'hén-guen', 'estar pendurado / pendurar', 'to hang'], ['das Regal', 'das regál', 'estante', 'shelf'],
      ]),
      gramatica(12, 'As nove preposições de duas vias', 'Nove preposições mudam de caso conforme a pergunta: an (junto a), auf (sobre), hinter (atrás de), in (em, dentro de), neben (ao lado de), über (acima de), unter (embaixo de), vor (na frente de), zwischen (entre). Com WO? (onde você ESTÁ, sem movimento) usam o DATIVO. Com WOHIN? (para onde você VAI, com movimento) usam o ACUSATIVO. Os verbos de posição seguem a mesma lógica: «stehen, liegen, sitzen, hängen» (estado, Wo? + dativo) e «stellen, legen, setzen, hängen» (movimento, Wohin? + acusativo). Contrações: an dem = am, in dem = im, an das = ans, in das = ins.', {
        tag: 'Preposições',
        comparacao: 'o português usa «em» para estar e «para» para ir. Em alemão a preposição é a mesma («in»), e o caso diz se há movimento.',
        tabelas: [
          { titulo: 'Wo? × Wohin?', linhas: [
            { frase: 'Das Buch liegt auf dem Tisch.', pt: 'O livro está sobre a mesa. (Wo? dativo)' }, { frase: 'Ich lege das Buch auf den Tisch.', pt: 'Eu ponho o livro sobre a mesa. (Wohin? acusativo)' }, { frase: 'Die Lampe steht neben dem Sofa.', pt: 'A lâmpada está ao lado do sofá.' },
            { frase: 'Ich stelle die Lampe neben das Sofa.', pt: 'Eu ponho a lâmpada ao lado do sofá.' }, { frase: 'Die Jacke hängt an der Tür.', pt: 'A jaqueta está pendurada na porta.' }, { frase: 'Ich hänge die Jacke an die Tür.', pt: 'Eu penduro a jaqueta na porta.' },
          ] },
          { titulo: 'Posição (Wo?) × movimento (Wohin?)', linhas: [
            { verbo: 'stehen / stellen', significado: 'de pé: está / pôr' }, { verbo: 'liegen / legen', significado: 'deitado: está / pôr' }, { verbo: 'sitzen / setzen', significado: 'sentado: está / sentar' }, { verbo: 'hängen / hängen', significado: 'pendurado: está / pendurar' },
          ] },
        ],
        erros: [['Das Buch liegt auf den Tisch.', 'Das Buch liegt auf dem Tisch.', 'Sem movimento (Wo?): dativo.'], ['Ich lege das Buch auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Com movimento (Wohin?): acusativo.']],
      }),
      producao(5, 'Descreva uma sala em voz alta: «Das Buch liegt auf dem Tisch. Die Lampe steht neben dem Sofa.» Depois mude de lugar: «Ich lege das Buch auf den Stuhl.»'),
    ]),
    sessao('S3', 'Declinação-N e diálogo', [
      revisao(5, 'Escreva as nove preposições de duas vias e dois exemplos (Wo? e Wohin?).'),
      gramatica(10, 'Declinação-N: os substantivos masculinos «fracos»', 'Um grupo de substantivos masculinos ganha -n ou -en em TODOS os casos, menos no nominativo singular: der Student → den Studenten → dem Studenten → des Studenten. São, em geral, pessoas e animais masculinos: der Junge, der Kunde, der Kollege, der Student, der Herr, der Mensch, der Nachbar, der Polizist, der Tourist, der Name, der Löwe. «Herr» ganha -n (den Herrn); «Name» ganha -n no acusativo e dativo e -ns no genitivo (des Namens). Para os outros masculinos, nada disso vale.', {
        tag: 'Substantivos',
        tabela: [
          { nominativo: 'der Student', acusativo: 'den Studenten', dativo: 'dem Studenten', genitivo: 'des Studenten' }, { nominativo: 'der Junge', acusativo: 'den Jungen', dativo: 'dem Jungen', genitivo: 'des Jungen' }, { nominativo: 'der Kollege', acusativo: 'den Kollegen', dativo: 'dem Kollegen', genitivo: 'des Kollegen' },
          { nominativo: 'der Herr', acusativo: 'den Herrn', dativo: 'dem Herrn', genitivo: 'des Herrn' }, { nominativo: 'der Mensch', acusativo: 'den Menschen', dativo: 'dem Menschen', genitivo: 'des Menschen' }, { nominativo: 'der Name', acusativo: 'den Namen', dativo: 'dem Namen', genitivo: 'des Namens' },
        ],
        erros: [['Ich kenne den Student.', 'Ich kenne den Studenten.', 'Declinação-N: -en fora do nominativo.'], ['Ich helfe dem Kollege.', 'Ich helfe dem Kollegen.', 'Declinação-N: -n no dativo.']],
      }),
      dialogo(10, 'In der Kantine / No refeitório', 'Dois colegas almoçam juntos.', [
        ['Lea', 'Kennst du den Kollegen dort?', 'Você conhece aquele colega ali?'], ['Paul', 'Nein, ich kenne den Mann nicht. Wie heißt er?', 'Não, não conheço o homem. Como ele se chama?'], ['Lea', 'Er heißt Marco. Er ist Student und macht hier ein Praktikum.', 'Ele se chama Marco. É estudante e faz estágio aqui.'],
        ['Paul', 'Ich helfe dem Studenten gern.', 'Eu ajudo o estudante com prazer.'], ['Lea', 'Das ist nett. Gehen wir mit dem Kollegen in die Kantine?', 'Que gentil. Vamos com o colega ao refeitório?'], ['Paul', 'Gute Idee! Wir gehen an den Tisch am Fenster.', 'Boa ideia! Vamos à mesa junto da janela.'],
        ['Lea', 'Ich stelle meine Tasche auf den Stuhl.', 'Eu ponho a minha bolsa na cadeira.'], ['Paul', 'Und ich lege meine Jacke über die Lehne.', 'E eu ponho a minha jaqueta sobre o encosto.'], ['Lea', 'Wo ist die Speisekarte? Sie liegt auf dem Tisch.', 'Onde está o cardápio? Está sobre a mesa.'], ['Paul', 'Ja, hier liegt sie. Guten Appetit!', 'Sim, aqui está. Bom apetite!'],
      ]),
      producao(5, 'Diga: «Ich kenne den Studenten. Ich helfe dem Kollegen. Das ist das Buch des Jungen.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: uma preposição do acusativo, uma de duas vias com Wo?, uma com Wohin? e um substantivo fraco.'),
      exercicios(20, [
        lacuna('Das Geschenk ist für ___ Bruder. (meu)', ['meinen', 'meinem', 'mein'], 'meinen', 'für + acusativo.'), lacuna('Wir gehen durch ___ Wald.', ['den', 'dem', 'der'], 'den', 'durch + acusativo.'), lacuna('Ich trinke Kaffee ___ Zucker.', ['ohne', 'mit', 'von'], 'ohne', 'ohne = sem.'),
        lacuna('Das Buch liegt auf ___ Tisch. (Wo?)', ['dem', 'den', 'das'], 'dem', 'Wo? dativo.'), lacuna('Ich lege das Buch auf ___ Tisch. (Wohin?)', ['den', 'dem', 'der'], 'den', 'Wohin? acusativo.'), lacuna('Die Jacke hängt an ___ Tür. (Wo?)', ['der', 'die', 'dem'], 'der', 'Wo? dativo feminino.'),
        lacuna('Ich hänge die Jacke an ___ Tür. (Wohin?)', ['die', 'der', 'den'], 'die', 'Wohin? acusativo feminino.'), lacuna('Die Lampe ___ neben dem Sofa. (estar de pé)', ['steht', 'stellt', 'legt'], 'steht', 'estado: stehen.'), lacuna('Ich ___ die Lampe neben das Sofa. (pôr de pé)', ['stelle', 'stehe', 'liege'], 'stelle', 'movimento: stellen.'),
        lacuna('Ich kenne den ___. (estudante)', ['Studenten', 'Student', 'Studente'], 'Studenten', 'Declinação-N.'), lacuna('Ich helfe dem ___. (colega)', ['Kollegen', 'Kollege', 'Kollegem'], 'Kollegen', 'Declinação-N.'),
        mc('Wo? pede:', ['dativo', 'acusativo', 'genitivo'], 'dativo', 'Sem movimento.'), mc('Wohin? pede:', ['acusativo', 'dativo', 'genitivo'], 'acusativo', 'Com movimento.'), mc('Qual preposição pede dativo SEMPRE?', ['mit', 'für', 'durch'], 'mit', 'mit está no grupo do dativo.'),
        ordem('Ordene: «Eu ponho o livro sobre a mesa.»', ['Ich', 'lege', 'das', 'Buch', 'auf', 'den', 'Tisch'], 'Ich lege das Buch auf den Tisch.', 'Wohin? acusativo.'), ouvir('Die Jacke hängt an der Tür', ['Die Jacke hängt an der Tür', 'Ich hänge die Jacke an die Tür', 'Die Jacke liegt auf dem Stuhl'], 'Die Jacke hängt an der Tür', 'Wo? dativo.'),
        livre('Escreva 4 frases: uma com «für», uma com Wo?, uma com Wohin? e uma com «Studenten» ou «Kollegen».', 'Das Geschenk ist für meine Mutter. Das Buch liegt auf dem Tisch. Ich lege das Buch auf den Stuhl. Ich helfe dem Studenten.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua casa: onde as coisas estão e para onde você as leva.'),
    ]),
  ],
});
