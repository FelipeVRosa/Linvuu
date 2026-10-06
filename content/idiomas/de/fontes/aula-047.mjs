import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 47, titulo: 'Orações relativas 1: o relativo no nominativo', nivel: 'b1',
  objetivo: 'Entender e formar orações relativas em que o pronome relativo é o sujeito (der, die, das, die), com o verbo no fim, as vírgulas e a posição logo depois do substantivo.',
  nota: 'Você descreve pessoas e coisas com orações relativas. Próxima aula: o relativo no acusativo.',
  sessoes: [
    sessao('S1', 'A oração relativa', [
      revisao(5, 'Escreva 8 frases do A2 de que você mais gosta: Perfekt, dativo, weil, dass e wenn.'),
      palavras(8, [
        ['der Gast', 'der gast', 'convidado, hóspede', 'guest'], ['das Mädchen', 'das médçen', 'menina', 'girl'], ['die Leute', 'di lóite', 'pessoas, gente', 'people'], ['der Schauspieler', 'der xáu-xpíler', 'ator', 'actor'],
        ['der Sänger', 'der zénguer', 'cantor', 'singer'], ['berühmt', 'berümt', 'famoso', 'famous'], ['bekannt', 'bekánt', 'conhecido', 'well-known'], ['der Kunde', 'der kúnde', 'cliente', 'customer'],
      ]),
      gramatica(14, 'A oração relativa, passo a passo', 'PASSO 1: uma ORAÇÃO RELATIVA descreve um substantivo: «Der Mann, der dort steht, ist mein Chef» (o homem QUE está ali é o meu chefe). PASSO 2: ela começa com um PRONOME RELATIVO, que tem a forma do ARTIGO DEFINIDO: der (m), die (f), das (n), die (plural). PASSO 3: o GÊNERO e o NÚMERO do relativo são os do substantivo que ele descreve (o antecedente): «Mann» é masculino → «der»; «Frau» é feminino → «die». PASSO 4: o CASO do relativo vem da sua função DENTRO da relativa; nesta aula, ele é o SUJEITO (nominativo). PASSO 5: o verbo conjugado vai para o FIM da relativa, como em «weil» e «dass». PASSO 6: a relativa vem logo DEPOIS do substantivo e entre VÍRGULAS: «Der Mann, der dort steht, ist mein Chef.»', {
        tag: 'Frase',
        comparacao: 'o português usa «que» para todos os gêneros («o homem que», «a mulher que»). O alemão usa der, die, das, die, e o verbo vai para o fim.',
        tabela: [
          { genero: 'masculino', antecedente: 'der Mann', relativo: 'der', exemplo: 'Der Mann, der dort steht, ist mein Chef.' }, { genero: 'feminino', antecedente: 'die Frau', relativo: 'die', exemplo: 'Die Frau, die dort steht, ist meine Chefin.' }, { genero: 'neutro', antecedente: 'das Kind', relativo: 'das', exemplo: 'Das Kind, das dort spielt, ist mein Neffe.' }, { genero: 'plural', antecedente: 'die Leute', relativo: 'die', exemplo: 'Die Leute, die dort warten, sind meine Gäste.' },
        ],
        erros: [['Der Mann, der steht dort, ist mein Chef.', 'Der Mann, der dort steht, ist mein Chef.', 'O verbo conjugado vai para o fim da relativa.'], ['Der Mann der dort steht ist mein Chef.', 'Der Mann, der dort steht, ist mein Chef.', 'A relativa leva vírgula antes e depois.'], ['Die Frau, der dort steht, ist meine Chefin.', 'Die Frau, die dort steht, ist meine Chefin.', 'O relativo concorda com o gênero do substantivo: «Frau» → «die».']],
      }),
      producao(3, 'Descreva 6 pessoas ou coisas em voz alta: «Der Mann, der … Die Frau, die … Das Kind, das …»'),
    ]),
    sessao('S2', 'Relativas com Perfekt, modais e separáveis', [
      revisao(5, 'Escreva o quadro dos relativos no nominativo e 4 frases.'),
      palavras(8, [
        ['der Erfolg', 'der erfólk', 'sucesso', 'success'], ['die Erfahrung', 'di erfárung', 'experiência', 'experience'], ['der Fehler', 'der féler', 'erro', 'mistake'], ['das Ergebnis', 'das ergépnis', 'resultado', 'result'],
        ['die Lösung', 'di lözung', 'solução', 'solution'], ['der Weg', 'der vék', 'caminho', 'way'], ['das Ziel', 'das tsil', 'objetivo, destino', 'goal'], ['die Aufgabe', 'di áuf-gabe', 'tarefa', 'task'],
      ]),
      gramatica(12, 'Relativas com mais verbos, passo a passo', 'PASSO 1: a relativa pode ter qualquer tempo: Perfekt: «Die Frau, die gestern angerufen hat, ist meine Tante» (o auxiliar vai por último). PASSO 2: com modal: «Der Student, der arbeiten muss, kommt nicht.» PASSO 3: com verbo separável: «Der Zug, der um acht Uhr abfährt, ist voll» (o prefixo se junta ao verbo no fim). PASSO 4: com «sein»: «Das Kind, das müde ist, schläft.» PASSO 5: a principal fica «partida» pela relativa: «Der Mann, der dort steht, ist mein Chef» (a principal continua depois da relativa, com o verbo na 2ª posição da sua própria parte).', {
        tag: 'Frase',
        tabela: [
          { tempo: 'presente', frase: 'Der Zug, der jetzt abfährt, ist voll.' }, { tempo: 'Perfekt', frase: 'Die Frau, die gestern angerufen hat, ist meine Tante.' }, { tempo: 'com modal', frase: 'Der Student, der arbeiten muss, kommt nicht.' }, { tempo: 'com sein', frase: 'Das Kind, das müde ist, schläft.' }, { tempo: 'com separável', frase: 'Der Bus, der um acht Uhr abfährt, ist schnell.' },
        ],
        erros: [['Der Zug, der fährt um acht ab, ist voll.', 'Der Zug, der um acht abfährt, ist voll.', 'Verbo (com o prefixo junto) no fim.'], ['Die Frau, die angerufen hat gestern, ist meine Tante.', 'Die Frau, die gestern angerufen hat, ist meine Tante.', 'O auxiliar vai por último.']],
      }),
      producao(5, 'Faça 6 frases com relativas em tempos diferentes: «Die Frau, die gestern … hat. Der Zug, der um … abfährt.»'),
    ]),
    sessao('S3', 'Descrever pessoas', [
      revisao(5, 'Escreva 6 frases com relativas no presente, no Perfekt e com modal.'),
      gramatica(10, 'Usar relativas para identificar pessoas', 'PASSO 1: para IDENTIFICAR alguém, use a relativa em vez de uma frase solta: «Wer ist die Frau, die dort steht?» PASSO 2: uma relativa pode explicar vários detalhes: «Das ist Anna, die neue Kollegin, die seit Montag bei uns arbeitet» (duas relativas ligadas). PASSO 3: as relativas dão naturalidade e fluidez: em vez de «Das ist Paul. Er lacht immer laut.», diga «Das ist Paul, der immer laut lacht.» PASSO 4: lembre das preposições do B1: «der Mann, der …» ainda é sujeito.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'identificar', frase: 'Wer ist die Frau, die dort am Fenster steht?' }, { funcao: 'duas relativas', frase: 'Das ist Anna, die neue Kollegin, die seit Montag bei uns arbeitet.' }, { funcao: 'juntar frases', frase: 'Das ist Paul, der immer laut lacht.' }, { funcao: 'pessoas em geral', frase: 'Die Leute, die hier sind, sind alle sehr nett.' },
        ],
      }),
      dialogo(10, 'Wer ist das? / Quem é?', 'Dois amigos observam as pessoas de uma festa.', [
        ['Mia', 'Wer ist die Frau, die dort am Fenster steht?', 'Quem é a mulher que está ali na janela?'], ['Jonas', 'Das ist Anna, die neue Kollegin, die seit Montag bei uns arbeitet.', 'Esta é a Anna, a nova colega que trabalha conosco desde segunda.'], ['Mia', 'Und der Mann, der neben ihr sitzt?', 'E o homem que está sentado ao lado dela?'],
        ['Jonas', 'Das ist Paul, der Typ, der immer so laut lacht.', 'Este é o Paul, o cara que sempre ri tão alto.'], ['Mia', 'Und das Mädchen, das mit ihm spricht?', 'E a menina que está falando com ele?'], ['Jonas', 'Das ist seine Schwester, die in Berlin studiert.', 'É a irmã dele, que estuda em Berlim.'],
        ['Mia', 'Die Leute, die hier sind, sind alle sehr nett.', 'As pessoas que estão aqui são todas muito simpáticas.'], ['Jonas', 'Ja, das ist eine Party, die mir gut gefällt!', 'Sim, esta é uma festa de que gosto muito!'],
      ]),
      producao(5, 'Descreva em voz alta 4 pessoas da sua vida, cada uma com uma oração relativa.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases descrevendo pessoas, com pelo menos 4 relativas.'),
      exercicios(20, [
        lacuna('Der Mann, ___ dort steht, ist mein Chef.', ['der', 'die', 'das'], 'der', 'Masculino: der.'), lacuna('Die Frau, ___ dort steht, ist meine Chefin.', ['die', 'der', 'das'], 'die', 'Feminino: die.'), lacuna('Das Kind, ___ dort spielt, ist mein Neffe.', ['das', 'der', 'die'], 'das', 'Neutro: das.'),
        lacuna('Die Leute, ___ dort warten, sind meine Gäste.', ['die', 'der', 'das'], 'die', 'Plural: die.'), lacuna('Der Zug, der um acht Uhr ___, ist voll. (abfahren)', ['abfährt', 'fährt ab', 'abfahren'], 'abfährt', 'Separável junto, no fim.'), lacuna('Die Frau, die gestern angerufen ___, ist meine Tante.', ['hat', 'ist', 'wird'], 'hat', 'Auxiliar por último.'),
        mc('O pronome relativo concorda com o substantivo em:', ['gênero e número', 'só em número', 'só em caso'], 'gênero e número', 'Antecedente.'), mc('Na oração relativa, o verbo conjugado vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Subordinada.'), mc('A relativa vem separada por:', ['vírgulas', 'ponto e vírgula', 'travessão'], 'vírgulas', 'Antes e depois.'),
        ordem('Ordene: «O homem que está ali é o meu chefe.»', ['Der', 'Mann', 'der', 'dort', 'steht', 'ist', 'mein', 'Chef'], 'Der Mann, der dort steht, ist mein Chef.', 'Relativa entre vírgulas.'), ouvir('Das Kind, das müde ist, schläft', ['Das Kind, das müde ist, schläft', 'Das Kind, der müde ist, schläft', 'Das Kind ist müde und schläft'], 'Das Kind, das müde ist, schläft', 'Neutro: das.'), ditado('Die Leute, die hier sind, sind alle sehr nett', 'Plural: die.'),
        livre('Escreva 5 frases com relativas no nominativo: uma para cada gênero e uma no plural, mais uma com Perfekt.', 'Der Mann, der dort steht, ist mein Chef. Die Frau, die dort sitzt, ist meine Kollegin. Das Kind, das spielt, ist mein Neffe. Die Leute, die warten, sind Gäste. Die Frau, die angerufen hat, ist meine Tante.'),
      ]),
      producao(5, 'Grave-se descrevendo pessoas da sua família e do trabalho com orações relativas.'),
    ]),
  ],
});
