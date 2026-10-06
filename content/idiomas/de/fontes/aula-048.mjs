import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 48, titulo: 'Orações relativas 2: o relativo no acusativo e «was»', nivel: 'b1',
  objetivo: 'Formar relativas em que o relativo é o objeto direto (den, die, das, die), usar «was» depois de alles, nichts, etwas e dos superlativos, e combinar várias relativas.',
  nota: 'Você usa o relativo no acusativo e «was». Próxima aula: o relativo no dativo, com preposição e no genitivo.',
  sessoes: [
    sessao('S1', 'O relativo no acusativo', [
      revisao(5, 'Escreva 6 frases com relativas no nominativo.'),
      palavras(8, [
        ['spannend', 'xpánend', 'emocionante', 'exciting'], ['der Roman', 'der románn', 'romance (livro)', 'novel'], ['das Lied', 'das lit', 'canção', 'song'], ['die Serie', 'di zérie', 'série', 'series'],
        ['die Ausstellung', 'di áus-xtelung', 'exposição', 'exhibition'], ['das Konzert', 'das kontsért', 'show, concerto', 'concert'], ['die Zeitung', 'di tsáitung', 'jornal', 'newspaper'], ['die Buchhandlung', 'di búrr-handlung', 'livraria', 'bookshop'],
      ]),
      gramatica(14, 'O relativo no acusativo, passo a passo', 'PASSO 1: quando o relativo é o OBJETO DIRETO da relativa, ele fica no ACUSATIVO: «Der Mann, den ich gestern getroffen habe, ist mein Chef» (eu encontrei o homem). PASSO 2: as formas são as do artigo definido no acusativo: «den» (m), «die» (f), «das» (n), «die» (plural). PASSO 3: só o MASCULINO muda em relação ao nominativo (der → den); feminino, neutro e plural ficam iguais: «die Frau, die ich kenne», «das Buch, das ich lese», «die Filme, die ich mag». PASSO 4: o SUJEITO da relativa vem DEPOIS do relativo («den ich», «die ich»): se depois do relativo vier um substantivo ou pronome, ele é o sujeito e o relativo é o objeto. PASSO 5: o verbo conjugado continua no FIM.', {
        tag: 'Frase',
        comparacao: 'o português usa o mesmo «que» para sujeito e objeto («o homem que encontrei», «o homem que mora aqui»). O alemão diferencia pelo CASO do relativo: der (sujeito) × den (objeto direto, masculino).',
        tabela: [
          { genero: 'masculino', nominativo: 'der', acusativo: 'den', exemplo: 'Der Mann, den ich gestern getroffen habe, ist mein Chef.' }, { genero: 'feminino', nominativo: 'die', acusativo: 'die', exemplo: 'Die Frau, die ich kenne, arbeitet hier.' }, { genero: 'neutro', nominativo: 'das', acusativo: 'das', exemplo: 'Das Buch, das ich lese, ist spannend.' }, { genero: 'plural', nominativo: 'die', acusativo: 'die', exemplo: 'Die Filme, die ich mag, sind alt.' },
        ],
        erros: [['Der Mann, der ich gestern getroffen habe, ist mein Chef.', 'Der Mann, den ich gestern getroffen habe, ist mein Chef.', 'Objeto direto masculino: «den».'], ['Das Buch, den ich lese, ist spannend.', 'Das Buch, das ich lese, ist spannend.', 'Neutro: «das».'], ['Der Film, den ich habe gesehen, war gut.', 'Der Film, den ich gesehen habe, war gut.', 'Auxiliar por último.']],
      }),
      producao(3, 'Descreva em voz alta 6 coisas ou pessoas com relativas no acusativo: «Das Buch, das ich lese … Der Film, den ich … habe»'),
    ]),
    sessao('S2', 'Alles, was e nichts, was', [
      revisao(5, 'Escreva o quadro dos relativos no nominativo e no acusativo.'),
      palavras(8, [
        ['das Beste', 'das béste', 'o melhor', 'the best'], ['das Schönste', 'das xönste', 'o mais bonito', 'the most beautiful'], ['das Wichtigste', 'das víçtigste', 'o mais importante', 'the most important'], ['das Einzige', 'das áintsigue', 'a única coisa', 'the only thing'],
        ['alles', 'áles', 'tudo', 'everything'], ['nichts', 'niçts', 'nada', 'nothing'], ['etwas', 'étvas', 'algo', 'something'], ['vieles', 'fíles', 'muita coisa', 'a lot'],
      ]),
      gramatica(12, '«Was» como pronome relativo, passo a passo', 'PASSO 1: depois de «alles», «nichts», «etwas», «vieles» e de superlativos substantivados (das Beste, das Schönste, das Wichtigste), o pronome relativo é «WAS» (e não «das»): «Alles, was ich weiß, habe ich gelernt.» PASSO 2: o verbo vai para o fim: «Das ist das Beste, was ich je gegessen habe.» PASSO 3: depois de «das» que se refere a uma frase inteira, também «was»: «Er hat gewonnen, was mich freut.» PASSO 4: «wo» como relativo de lugar na fala: «Die Stadt, wo ich wohne» (em alemão culto, «in der»); aprenda «in der» (aula 49). PASSO 5: lembre da posição do verbo: sempre no fim da relativa.', {
        tag: 'Frase',
        tabela: [
          { antecedente: 'alles', frase: 'Alles, was ich weiß, habe ich gelernt.' }, { antecedente: 'nichts', frase: 'Das ist nichts, was ich verstehe.' }, { antecedente: 'etwas', frase: 'Das ist etwas, was mir gefällt.' }, { antecedente: 'das Beste', frase: 'Das ist das Beste, was ich je gegessen habe.' },
          { antecedente: 'uma frase inteira', frase: 'Er hat gewonnen, was mich freut.' }, { antecedente: 'vieles', frase: 'Vieles, was er sagt, stimmt nicht.' },
        ],
        erros: [['Alles, das ich weiß, habe ich gelernt.', 'Alles, was ich weiß, habe ich gelernt.', 'Depois de «alles»: «was».'], ['Das ist das Beste, das ich gesehen habe.', 'Das ist das Beste, was ich gesehen habe.', 'Depois de superlativo substantivado: «was».']],
      }),
      producao(5, 'Diga 6 frases com «was»: «Alles, was … Das ist das Beste, was … Das ist etwas, was …»'),
    ]),
    sessao('S3', 'Livros, filmes e gostos', [
      revisao(5, 'Escreva 6 frases com «den», «die», «das» e «was» como relativos.'),
      gramatica(10, 'Recomendar e comentar com relativas', 'PASSO 1: use relativas para recomendar: «Das ist ein Film, den ich dir empfehlen kann.» PASSO 2: para comentar: «Das ist ein Buch, das mir sehr gefällt.» PASSO 3: para generalizar: «Ich mag Filme, die spannend sind.» PASSO 4: para contrastar: «Die Serie, die ich gestern gesehen habe, war besser als der Film, den ich letzte Woche gesehen habe.» PASSO 5: o relativo pode vir depois de «etwas» ou «nichts»: «Hast du etwas, was ich lesen kann?»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'recomendar', frase: 'Das ist ein Film, den ich dir empfehlen kann.' }, { funcao: 'comentar', frase: 'Das ist ein Buch, das mir sehr gefällt.' }, { funcao: 'generalizar', frase: 'Ich mag Filme, die spannend sind.' }, { funcao: 'comparar', frase: 'Die Serie, die ich gesehen habe, war besser als das Buch, das ich gelesen habe.' },
        ],
      }),
      dialogo(10, 'In der Buchhandlung / Na livraria', 'Uma cliente pede uma recomendação.', [
        ['Lea', 'Guten Tag! Haben Sie einen spannenden Roman, den ich im Urlaub lesen kann?', 'Bom dia! O senhor tem um romance emocionante que eu possa ler nas férias?'], ['Verkäufer', 'Ja, hier ist ein Roman, den viele Leute zurzeit lesen.', 'Sim, aqui está um romance que muita gente está lendo agora.'], ['Lea', 'Worum geht es in dem Buch?', 'Sobre o que é o livro?'],
        ['Verkäufer', 'Es ist eine Geschichte, die in Hamburg spielt.', 'É uma história que se passa em Hamburgo.'], ['Lea', 'Gibt es auch etwas, was nicht so lang ist?', 'Há também algo que não seja tão longo?'], ['Verkäufer', 'Ja, das ist das Beste, was ich Ihnen empfehlen kann: ein kurzer Krimi.', 'Sim, é o melhor que posso recomendar: um romance policial curto.'],
        ['Lea', 'Perfekt! Den nehme ich. Was kostet er?', 'Perfeito! Eu levo esse. Quanto custa?'], ['Verkäufer', 'Zwölf Euro. Alles, was Sie sonst noch brauchen, finden Sie dort drüben.', 'Doze euros. Tudo o mais de que a senhora precisar, encontra ali adiante.'],
      ]),
      producao(5, 'Recomende em voz alta um livro, um filme e uma série, cada um com uma oração relativa.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases recomendando algo, com relativas no acusativo e «was».'),
      exercicios(20, [
        lacuna('Der Mann, ___ ich gestern getroffen habe, ist mein Chef.', ['den', 'der', 'dem'], 'den', 'Objeto direto masculino.'), lacuna('Die Frau, ___ ich kenne, arbeitet hier.', ['die', 'der', 'den'], 'die', 'Feminino: die.'), lacuna('Das Buch, ___ ich lese, ist spannend.', ['das', 'den', 'was'], 'das', 'Neutro: das.'),
        lacuna('Die Filme, ___ ich mag, sind alt.', ['die', 'den', 'das'], 'die', 'Plural: die.'), lacuna('Alles, ___ ich weiß, habe ich gelernt.', ['was', 'das', 'der'], 'was', 'Depois de alles: was.'), lacuna('Das ist das Beste, ___ ich je gegessen habe.', ['was', 'das', 'den'], 'was', 'Depois do superlativo: was.'),
        mc('No acusativo masculino, o relativo é:', ['den', 'der', 'dem'], 'den', 'Só o masculino muda.'), mc('Depois de «etwas» e «nichts», o relativo é:', ['was', 'das', 'der'], 'was', 'Relativo neutro geral.'), mc('Em «Der Film, den ich gesehen habe», «den» é:', ['objeto direto', 'sujeito', 'posse'], 'objeto direto', 'Eu vi o filme.'),
        ordem('Ordene: «O livro que eu leio é emocionante.»', ['Das', 'Buch', 'das', 'ich', 'lese', 'ist', 'spannend'], 'Das Buch, das ich lese, ist spannend.', 'Relativa entre vírgulas.'), ordem('Ordene: «Tudo o que eu sei, aprendi.»', ['Alles', 'was', 'ich', 'weiß', 'habe', 'ich', 'gelernt'], 'Alles, was ich weiß, habe ich gelernt.', 'was depois de alles.'), ouvir('Das ist das Beste, was ich je gegessen habe', ['Das ist das Beste, was ich je gegessen habe', 'Das ist das Beste, das ich gegessen habe', 'Das ist das Beste, wo ich gegessen habe'], 'Das ist das Beste, was ich je gegessen habe', 'was depois de superlativo.'),
        ditado('Das ist ein Film, den ich dir empfehlen kann', 'Relativa no acusativo.'), livre('Escreva 5 frases: duas relativas no acusativo (masculino e neutro), uma no plural, uma com «alles, was» e uma com superlativo e «was».', 'Der Mann, den ich getroffen habe, ist nett. Das Buch, das ich lese, ist spannend. Die Filme, die ich mag, sind alt. Alles, was ich weiß, habe ich gelernt. Das ist das Beste, was ich gesehen habe.'),
      ]),
      producao(5, 'Grave-se comentando e recomendando livros, filmes e experiências com relativas.'),
    ]),
  ],
});
