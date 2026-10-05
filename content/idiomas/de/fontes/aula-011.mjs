import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 11, titulo: 'Gramática: os quatro casos', nivel: 'a1',
  objetivo: 'Entender o que são os quatro casos do alemão (Nominativ, Akkusativ, Dativ, Genitiv), ler o quadro completo dos artigos e usar os pronomes pessoais no nominativo, acusativo e dativo.',
  nota: 'Você tem o quadro dos quatro casos. Próxima aula: o dativo.',
  sessoes: [
    sessao('S1', 'O que é um caso', [
      revisao(5, 'Escreva 4 frases com objeto direto (acusativo): «Ich esse den Käse…».'),
      palavras(8, [
        ['das Geschenk', 'das guexênk', 'presente', 'gift'], ['der Hund', 'der hunt', 'cachorro', 'dog'], ['die Katze', 'di kátse', 'gato', 'cat'], ['das Handy', 'das hen-di', 'celular', 'mobile phone'], ['die Tasche', 'di táxe', 'bolsa', 'bag'], ['der Schlüssel', 'der xlússel', 'chave', 'key'], ['das Fahrrad', 'das fár-rat', 'bicicleta', 'bicycle'], ['die Zeitung', 'di tsáitung', 'jornal', 'newspaper'],
      ]),
      gramatica(14, 'Os quatro casos', 'Em alemão a função de uma palavra na frase aparece no ARTIGO (e em alguns finais). Há quatro casos. NOMINATIVO: quem faz a ação, o sujeito (wer? was?). AKKUSATIV: o objeto direto (wen? was?). DATIV: o objeto indireto, a quem se dá, diz ou ajuda (wem?). GENITIV: posse (wessen?). Em «Der Mann gibt dem Kind einen Apfel»: «der Mann» é o sujeito (nominativo), «dem Kind» é a quem ele dá (dativo) e «einen Apfel» é o que ele dá (acusativo). Você já usa o nominativo e o acusativo; nesta aula começa o quadro completo.', {
        tag: 'Casos',
        comparacao: 'em português a função aparece na ordem das palavras e nas preposições («dar a maçã ao menino»). Em alemão ela aparece no artigo: «dem Kind» já diz «ao menino».',
        tabela: [
          { caso: 'Nominativ', pergunta: 'wer? was?', funcao: 'sujeito', exemplo: 'Der Mann liest.' }, { caso: 'Akkusativ', pergunta: 'wen? was?', funcao: 'objeto direto', exemplo: 'Ich sehe den Mann.' },
          { caso: 'Dativ', pergunta: 'wem?', funcao: 'objeto indireto', exemplo: 'Ich helfe dem Mann.' }, { caso: 'Genitiv', pergunta: 'wessen?', funcao: 'posse', exemplo: 'Das ist das Auto des Mannes.' },
        ],
        erros: [['Ich helfe den Mann.', 'Ich helfe dem Mann.', '«helfen» pede o dativo (a quem?).'], ['Ich sehe der Mann.', 'Ich sehe den Mann.', 'O objeto direto masculino vai para o acusativo.']],
      }),
      producao(3, 'Diga: «Der Mann liest. Ich sehe den Mann. Ich helfe dem Mann. Das ist das Auto des Mannes.»'),
    ]),
    sessao('S2', 'O quadro dos artigos', [
      revisao(5, 'Escreva de memória o artigo definido no nominativo e no acusativo, nos quatro gêneros.'),
      palavras(8, [
        ['wer', 'ver', 'quem (sujeito)', 'who'], ['wen', 'ven', 'quem (objeto direto)', 'whom'], ['wem', 'vem', 'a quem', 'to whom'], ['wessen', 'véssen', 'de quem', 'whose'], ['der Name', 'der náme', 'nome', 'name'], ['das Kind', 'das kint', 'criança', 'child'], ['die Eltern', 'di éltern', 'pais', 'parents'], ['das Auto', 'das áuto', 'carro', 'car'],
      ]),
      gramatica(14, 'O quadro completo dos artigos', 'Este é o quadro que organiza tudo. Três atalhos: (1) o FEMININO e o PLURAL quase não mudam; só mudam no dativo e no genitivo. (2) O NEUTRO é igual ao nominativo no acusativo, e igual ao masculino no dativo e no genitivo. (3) No acusativo só o masculino muda. Outros detalhes: no genitivo, o substantivo masculino e neutro ganha -s ou -es («des Mannes», «des Kindes»); no dativo plural, o substantivo ganha -n («den Kindern»), exceto se já termina em -n ou -s.', {
        tag: 'Casos',
        tabelas: [
          { titulo: 'Artigo definido (der, die, das)', linhas: [
            { caso: 'Nominativ', masculino: 'der', feminino: 'die', neutro: 'das', plural: 'die' }, { caso: 'Akkusativ', masculino: 'den', feminino: 'die', neutro: 'das', plural: 'die' },
            { caso: 'Dativ', masculino: 'dem', feminino: 'der', neutro: 'dem', plural: 'den (+n)' }, { caso: 'Genitiv', masculino: 'des (+s)', feminino: 'der', neutro: 'des (+s)', plural: 'der' },
          ] },
          { titulo: 'Artigo indefinido (ein, eine) e mein, dein, kein...', linhas: [
            { caso: 'Nominativ', masculino: 'ein', feminino: 'eine', neutro: 'ein', plural: '— / keine' }, { caso: 'Akkusativ', masculino: 'einen', feminino: 'eine', neutro: 'ein', plural: '— / keine' },
            { caso: 'Dativ', masculino: 'einem', feminino: 'einer', neutro: 'einem', plural: '— / keinen (+n)' }, { caso: 'Genitiv', masculino: 'eines (+s)', feminino: 'einer', neutro: 'eines (+s)', plural: '— / keiner' },
          ] },
        ],
        exemplos: [['Der Mann gibt dem Kind einen Apfel.', 'O homem dá uma maçã à criança.'], ['Die Frau hilft der Nachbarin.', 'A mulher ajuda a vizinha.'], ['Das ist das Auto des Lehrers.', 'Este é o carro do professor.']],
        erros: [['mit der Kind', 'mit dem Kind', '«Kind» é neutro: dativo «dem».'], ['das Auto der Mann', 'das Auto des Mannes', 'Posse: genitivo, e o substantivo ganha -es.']],
      }),
      producao(3, 'Leia o quadro dos artigos em voz alta, por coluna: «der, den, dem, des; die, die, der, der; das, das, dem, des».'),
    ]),
    sessao('S3', 'Os pronomes e o diálogo', [
      revisao(5, 'Escreva os pronomes pessoais no nominativo: eu, tu, ele, ela, nós, vós, eles.'),
      gramatica(12, 'Os pronomes pessoais nos três casos', 'Os pronomes pessoais também mudam com o caso. O dativo é o que você mais vai usar com verbos como «helfen», «gehören», «gefallen» e «geben». Regra de ordem: o PRONOME vem antes do SUBSTANTIVO («Ich gebe ihm den Ball», «Ich gebe es dem Kind»). Se os dois são pronomes, o acusativo vem antes: «Ich gebe ihn ihm».', {
        tag: 'Casos',
        comparacao: 'o português também muda os pronomes («eu / me / mim», «ele / o / lhe»). O alemão faz o mesmo e depois estende a mudança aos artigos.',
        tabela: [
          { nominativo: 'ich', acusativo: 'mich', dativo: 'mir' }, { nominativo: 'du', acusativo: 'dich', dativo: 'dir' }, { nominativo: 'er', acusativo: 'ihn', dativo: 'ihm' }, { nominativo: 'sie (ela)', acusativo: 'sie', dativo: 'ihr' }, { nominativo: 'es', acusativo: 'es', dativo: 'ihm' },
          { nominativo: 'wir', acusativo: 'uns', dativo: 'uns' }, { nominativo: 'ihr', acusativo: 'euch', dativo: 'euch' }, { nominativo: 'sie (eles)', acusativo: 'sie', dativo: 'ihnen' }, { nominativo: 'Sie (formal)', acusativo: 'Sie', dativo: 'Ihnen' },
        ],
        erros: [['Ich gebe den Ball ihm.', 'Ich gebe ihm den Ball.', 'O pronome vem antes do substantivo.'], ['Das Handy gehört ich.', 'Das Handy gehört mir.', '«gehören» pede o dativo.']],
      }),
      dialogo(10, 'Wem gehört das? / De quem é isto?', 'Dois amigos organizam objetos esquecidos.', [
        ['Lara', 'Entschuldigung, wem gehört das Handy?', 'Com licença, de quem é este celular?'], ['Tom', 'Das Handy? Es gehört mir. Danke!', 'O celular? É meu. Obrigado!'], ['Lara', 'Und die Tasche? Gehört sie dir auch?', 'E a bolsa? Ela também é sua?'],
        ['Tom', 'Nein, die Tasche gehört meiner Schwester.', 'Não, a bolsa é da minha irmã.'], ['Lara', 'Und der Schlüssel? Der gehört bestimmt ihr.', 'E a chave? Com certeza é dela.'], ['Tom', 'Ja, ich gebe ihr den Schlüssel.', 'Sim, eu dou a chave para ela.'],
        ['Lara', 'Sehr gut. Und wem gibst du das Geschenk?', 'Muito bem. E a quem você dá o presente?'], ['Tom', 'Ich gebe es meinem Bruder. Er hat heute Geburtstag.', 'Eu dou para o meu irmão. Hoje é aniversário dele.'], ['Lara', 'Wie schön! Ich schenke ihm ein Buch.', 'Que bom! Eu dou um livro para ele.'], ['Tom', 'Super! Er liest gern.', 'Ótimo! Ele gosta de ler.'],
      ]),
      producao(3, 'Diga: «Das Handy gehört mir. Ich gebe ihr den Schlüssel. Ich gebe es meinem Bruder.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases, uma em cada caso: nominativo, acusativo, dativo e genitivo.'),
      exercicios(20, [
        lacuna('Ich sehe ___ Hund. (o)', ['den', 'der', 'dem'], 'den', 'Acusativo masculino.'), lacuna('Ich helfe ___ Mann. (ao)', ['dem', 'den', 'des'], 'dem', 'helfen pede dativo.'), lacuna('Das ist das Auto ___ Mannes.', ['des', 'dem', 'den'], 'des', 'Genitivo masculino.'),
        lacuna('Der Mann gibt ___ Kind einen Apfel. (à)', ['dem', 'das', 'des'], 'dem', 'Kind é neutro: dativo «dem».'), lacuna('Die Frau hilft ___ Nachbarin. (à)', ['der', 'die', 'den'], 'der', 'Feminino dativo: «der».'), lacuna('Ich gebe ___ Schlüssel. (a ela)', ['ihr den', 'sie den', 'ihr der'], 'ihr den', 'Pronome no dativo, depois o objeto no acusativo.'),
        lacuna('Das Handy gehört ___. (a mim)', ['mir', 'mich', 'ich'], 'mir', '«gehören» pede dativo.'), lacuna('Ich sehe ___. (ele)', ['ihn', 'ihm', 'er'], 'ihn', 'Acusativo de «er».'), lacuna('Ich helfe ___. (a eles)', ['ihnen', 'sie', 'ihr'], 'ihnen', 'Dativo plural: ihnen.'),
        mc('A pergunta do dativo é:', ['wem?', 'wen?', 'wessen?'], 'wem?', 'wem = a quem.'), mc('Em «Ich gebe es meinem Bruder», «meinem Bruder» está no:', ['dativo', 'acusativo', 'genitivo'], 'dativo', 'A quem eu dou.'), mc('No acusativo, qual gênero muda?', ['só o masculino', 'só o feminino', 'todos'], 'só o masculino', 'der → den, ein → einen.'),
        mc('Dativo plural de «die Kinder»:', ['den Kindern', 'den Kinder', 'dem Kindern'], 'den Kindern', 'Dativo plural: artigo «den» e substantivo +n.'), ordem('Ordene: «Eu dou a chave para ela.»', ['Ich', 'gebe', 'ihr', 'den', 'Schlüssel'], 'Ich gebe ihr den Schlüssel.', 'Pronome antes do substantivo.'),
        ouvir('Das Handy gehört mir', ['Das Handy gehört mir', 'Ich sehe das Handy', 'Das ist mein Handy'], 'Das Handy gehört mir', '«mir» é dativo.'), ditado('Ich gebe es meinem Bruder', 'Pronome acusativo + substantivo dativo.'),
        livre('Escreva 4 frases, uma em cada caso: nominativo, acusativo, dativo e genitivo.', 'Der Hund schläft. Ich sehe den Hund. Ich gebe dem Hund Wasser. Das ist das Haus des Lehrers.'),
      ]),
      producao(5, 'Grave-se explicando, com exemplos seus, o que é nominativo, acusativo, dativo e genitivo.'),
    ]),
  ],
});
