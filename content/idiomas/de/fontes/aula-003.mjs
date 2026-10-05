import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 3, titulo: 'Substantivos e artigos', nivel: 'a1',
  objetivo: 'Usar der, die, das e ein/eine/kein, escrever os substantivos com maiúscula e formar os plurais mais comuns.',
  nota: 'Você usa os artigos e forma o plural. Próxima aula: os verbos no presente e a ordem da frase.',
  sessoes: [
    sessao('S1', 'Der, die, das', [
      revisao(5, 'Escreva 5 palavras que você já aprendeu em alemão.'),
      gramatica(14, 'Der, die, das: os três gêneros', 'Em alemão todo substantivo tem gênero: masculino (der), feminino (die) ou neutro (das). O gênero não segue o português: «das Mädchen» (a menina) é neutro. Por isso, decore sempre o artigo junto com a palavra. TODO substantivo é escrito com letra MAIÚSCULA, em qualquer lugar da frase. Há pistas pela terminação, com exceções: -ung, -heit, -keit, -schaft, -tion, -ie e a maioria das palavras em -e são femininas; -er, -ling e -ismus são masculinas; -chen, -lein, -um e -ment são neutras. Dias da semana, meses e estações do ano são masculinos.', {
        tag: 'Substantivos',
        comparacao: 'o português também tem masculino e feminino, mas o alemão tem um terceiro gênero (o neutro) e o gênero muitas vezes não coincide: «das Kind» (a criança) é neutro.',
        tabelas: [
          { titulo: 'Os três artigos', linhas: [
            { genero: 'masculino', artigo: 'der', exemplo: 'der Mann, der Tisch, der Vater' }, { genero: 'feminino', artigo: 'die', exemplo: 'die Frau, die Lampe, die Mutter' }, { genero: 'neutro', artigo: 'das', exemplo: 'das Kind, das Buch, das Haus' },
          ] },
          { titulo: 'Pistas pela terminação (com exceções)', linhas: [
            { terminacao: '-ung, -heit, -keit, -schaft, -tion, -ie, -e', genero: 'feminino (die)', exemplo: 'die Zeitung, die Freiheit, die Nation, die Familie, die Lampe' }, { terminacao: '-er, -ling, -ismus', genero: 'masculino (der)', exemplo: 'der Lehrer, der Frühling' },
            { terminacao: '-chen, -lein, -um, -ment', genero: 'neutro (das)', exemplo: 'das Mädchen, das Museum, das Dokument' }, { terminacao: 'dias, meses, estações', genero: 'masculino (der)', exemplo: 'der Montag, der Juli, der Sommer' },
          ] },
        ],
        erros: [['das Frau', 'die Frau', 'Frau é feminino: die.'], ['die kind', 'das Kind', 'Kind é neutro e o substantivo leva maiúscula.']],
      }),
      palavras(8, [
        ['der Mann', 'der man', 'homem', 'man'], ['die Frau', 'di frau', 'mulher', 'woman'], ['das Kind', 'das kint', 'criança', 'child'], ['der Tisch', 'der tix', 'mesa', 'table'], ['die Lampe', 'di lámpe', 'lâmpada', 'lamp'], ['das Buch', 'das burr', 'livro', 'book'], ['das Haus', 'das haus', 'casa', 'house'], ['der Stuhl', 'der xtul', 'cadeira', 'chair'],
      ]),
      producao(3, 'Diga em voz alta o artigo e a palavra: «der Mann, die Frau, das Kind, der Tisch, die Lampe, das Buch».'),
    ]),
    sessao('S2', 'O plural', [
      revisao(5, 'Escreva o artigo (der, die ou das) de 6 palavras da sessão anterior.'),
      gramatica(12, 'O plural: cinco jeitos', 'O plural alemão se forma de cinco jeitos: -e (der Tisch → die Tische), -(e)n (die Lampe → die Lampen), -er (das Buch → die Bücher), sem terminação (der Lehrer → die Lehrer) e -s (das Auto → die Autos, comum em palavras estrangeiras). Muitas palavras ganham também um trema na vogal (a → ä, o → ö, u → ü). Não há regra segura: aprenda o plural junto com o substantivo. O artigo definido do plural é sempre «die», para os três gêneros.', {
        tag: 'Substantivos',
        comparacao: 'o plural português quase sempre é um «-s». O plural alemão tem cinco formas e é preciso decorá-las com cada palavra.',
        tabela: [
          { tipo: '-e', singular: 'der Tisch', plural: 'die Tische' }, { tipo: '-e + trema', singular: 'der Stuhl', plural: 'die Stühle' }, { tipo: '-n / -en', singular: 'die Lampe', plural: 'die Lampen' }, { tipo: '-n / -en', singular: 'die Frau', plural: 'die Frauen' },
          { tipo: '-er', singular: 'das Kind', plural: 'die Kinder' }, { tipo: '-er + trema', singular: 'das Buch / das Haus', plural: 'die Bücher / die Häuser' }, { tipo: 'sem terminação', singular: 'der Lehrer / das Fenster', plural: 'die Lehrer / die Fenster' },
          { tipo: 'sem terminação + trema', singular: 'der Vater / die Mutter', plural: 'die Väter / die Mütter' }, { tipo: '-s', singular: 'das Auto / das Hotel', plural: 'die Autos / die Hotels' },
        ],
        erros: [['die Tischen', 'die Tische', '«Tisch» faz o plural com -e, não -en.'], ['die Kinders', 'die Kinder', 'Kind → Kinder (sem -s).']],
      }),
      palavras(8, [
        ['das Auto', 'das áuto', 'carro', 'car'], ['das Hotel', 'das hotél', 'hotel', 'hotel'], ['die Mutter', 'di múter', 'mãe', 'mother'], ['der Vater', 'der fáter', 'pai', 'father'], ['der Bruder', 'der brúder', 'irmão', 'brother'], ['die Schwester', 'di xvéster', 'irmã', 'sister'], ['der Freund', 'der fróint', 'amigo', 'friend'], ['die Freundin', 'di fróindin', 'amiga', 'friend (f)'],
      ]),
      producao(5, 'Diga o plural de: «der Tisch, die Lampe, das Kind, das Buch, das Auto, der Vater».'),
    ]),
    sessao('S3', 'Ein, eine, kein e diálogo', [
      revisao(5, 'Escreva o plural de 6 palavras que você já conhece.'),
      gramatica(10, 'Ein, eine, kein: o artigo indefinido e o negativo', '«Ein» e «eine» são o «um» e a «uma»: ein Mann, eine Frau, ein Kind. No plural não há artigo indefinido: «Das sind Bücher». Para negar um substantivo, use «kein» (ou «keine»), que tem as mesmas terminações de «ein»: «Das ist kein Tisch» (isto não é uma mesa). Para «isto é» usa-se «das ist» no singular e «das sind» no plural.', {
        tag: 'Substantivos',
        tabela: [
          { genero: 'masculino', definido: 'der Tisch', indefinido: 'ein Tisch', negativo: 'kein Tisch' }, { genero: 'feminino', definido: 'die Lampe', indefinido: 'eine Lampe', negativo: 'keine Lampe' },
          { genero: 'neutro', definido: 'das Buch', indefinido: 'ein Buch', negativo: 'kein Buch' }, { genero: 'plural', definido: 'die Bücher', indefinido: '—', negativo: 'keine Bücher' },
        ],
        erros: [['Das ist ein Lampe.', 'Das ist eine Lampe.', '«Lampe» é feminino: eine.'], ['Das sind ein Bücher.', 'Das sind Bücher.', 'No plural não há artigo indefinido.']],
      }),
      dialogo(10, 'Was ist das? / O que é isto?', 'Dois amigos apontam objetos numa sala.', [
        ['Anna', 'Was ist das?', 'O que é isto?'], ['Ben', 'Das ist ein Buch. Und das ist eine Lampe.', 'Isto é um livro. E isto é uma lâmpada.'], ['Anna', 'Ist das ein Tisch?', 'Isto é uma mesa?'], ['Ben', 'Nein, das ist kein Tisch. Das ist ein Stuhl.', 'Não, isto não é uma mesa. É uma cadeira.'],
        ['Anna', 'Und was sind das?', 'E o que são estas coisas?'], ['Ben', 'Das sind Bücher. Die Bücher sind neu.', 'São livros. Os livros são novos.'], ['Anna', 'Und das? Ist das eine Tür?', 'E isto? É uma porta?'], ['Ben', 'Ja, das ist eine Tür.', 'Sim, é uma porta.'],
      ]),
      producao(5, 'Aponte 5 objetos da sua casa e diga: «Das ist ein … / eine … / Das sind …».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com «das ist ein / eine / kein» e «das sind».'),
      exercicios(20, [
        mc('Artigo de «Mann»:', ['der', 'die', 'das'], 'der', 'Mann é masculino.'), mc('Artigo de «Frau»:', ['die', 'der', 'das'], 'die', 'Frau é feminino.'), mc('Artigo de «Kind»:', ['das', 'der', 'die'], 'das', 'Kind é neutro.'),
        mc('Artigo de «Zeitung» (terminação -ung):', ['die', 'der', 'das'], 'die', '-ung é feminino.'), mc('Artigo de «Mädchen» (terminação -chen):', ['das', 'die', 'der'], 'das', '-chen é neutro.'), mc('Artigo de «Lehrer» (terminação -er):', ['der', 'die', 'das'], 'der', '-er é masculino.'),
        mc('Todo substantivo alemão se escreve:', ['com maiúscula', 'com minúscula', 'com maiúscula só quando é nome de pessoa'], 'com maiúscula', 'Sempre com maiúscula.'),
        mc('Plural de «Tisch»:', ['Tische', 'Tisches', 'Tischen'], 'Tische', 'Plural em -e.'), mc('Plural de «Lampe»:', ['Lampen', 'Lampe', 'Lampes'], 'Lampen', 'Plural em -n.'), mc('Plural de «Haus»:', ['Häuser', 'Haus', 'Hause'], 'Häuser', 'Plural em -er com trema.'), mc('Plural de «Auto»:', ['Autos', 'Autoen', 'Auter'], 'Autos', 'Palavra estrangeira: -s.'),
        lacuna('Das ist ___ Buch. (um)', ['ein', 'eine', 'kein'], 'ein', 'Buch é neutro: ein.'), lacuna('Das ist ___ Lampe. (uma)', ['eine', 'ein', 'keine'], 'eine', 'Lampe é feminino: eine.'), lacuna('Das ist ___ Tisch. (não é uma)', ['kein', 'keine', 'ein'], 'kein', 'Tisch é masculino: kein.'),
        ouvir('Das sind Bücher', ['Das sind Bücher', 'Das ist ein Buch', 'Das ist kein Buch'], 'Das sind Bücher', 'Plural: das sind.'), ditado('Das ist eine Tür', 'eine, porque Tür é feminino.'),
        livre('Escreva 4 frases: um objeto, outro objeto, uma negação e um plural.', 'Das ist ein Tisch. Das ist eine Lampe. Das ist kein Stuhl. Das sind Bücher.'),
      ]),
      producao(5, 'Grave-se dizendo o artigo, o singular e o plural de 6 palavras.'),
    ]),
  ],
});
