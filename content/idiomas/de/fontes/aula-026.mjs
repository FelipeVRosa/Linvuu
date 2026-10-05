import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 26, titulo: 'Dativo 1: os artigos e os pronomes', nivel: 'a2',
  objetivo: 'Entender o que é o dativo («a quem?»), formar o dativo dos artigos definidos e indefinidos e dos pronomes pessoais, e usá-los com verbos de dar, mostrar e contar, na ordem certa.',
  nota: 'Você forma o dativo dos artigos e dos pronomes e sabe a ordem das palavras. Próxima aula: os verbos que pedem dativo.',
  sessoes: [
    sessao('S1', 'O dativo dos artigos', [
      revisao(5, 'Escreva o quadro dos artigos no nominativo e no acusativo, nos quatro gêneros.'),
      palavras(8, [
        ['der Brief', 'der brif', 'carta', 'letter'], ['die Blume', 'di blúme', 'flor', 'flower'], ['das Geschenk', 'das guexênk', 'presente', 'gift'], ['das Spielzeug', 'das xpíl-tsoik', 'brinquedo', 'toy'],
        ['die Postkarte', 'di póst-karte', 'cartão-postal', 'postcard'], ['das Foto', 'das fôto', 'foto', 'photo'], ['die Einladung', 'di áin-ladung', 'convite', 'invitation'], ['die Rechnung', 'di réçnung', 'conta, fatura', 'bill'],
      ]),
      gramatica(14, 'O dativo, passo a passo', 'PASSO 1: o DATIVO responde a «wem?» (a quem?). Ele marca a pessoa que RECEBE, ouve ou se beneficia da ação, o OBJETO INDIRETO: «Ich gebe dem Kind einen Apfel»: o que eu dou é «einen Apfel» (acusativo, o objeto direto), e quem recebe é «dem Kind» (dativo). PASSO 2: artigos definidos no dativo: masculino «dem», feminino «der», neutro «dem», plural «den». PASSO 3: artigos indefinidos: masculino «einem», feminino «einer», neutro «einem»; o plural não tem «ein» (com «kein»: «keinen»). PASSO 4: no PLURAL, o substantivo ganha «-n»: «den Kindern», «den Freunden» (exceto os que já terminam em -n ou -s: «den Eltern», «den Autos»). PASSO 5: truque: masculino e neutro são IGUAIS no dativo (dem, einem); e o feminino «der» é igual ao do genitivo. PASSO 6: compare as três colunas na tabela e leia em voz alta, por coluna.', {
        tag: 'Casos',
        comparacao: 'em português o objeto indireto vem com «a» ou «para» («dou a maçã ao menino»). Em alemão a preposição desaparece e o artigo muda: «dem Kind».',
        tabelas: [
          { titulo: 'Artigo definido', linhas: [
            { caso: 'Nominativ', masculino: 'der Mann', feminino: 'die Frau', neutro: 'das Kind', plural: 'die Kinder' }, { caso: 'Akkusativ', masculino: 'den Mann', feminino: 'die Frau', neutro: 'das Kind', plural: 'die Kinder' }, { caso: 'Dativ', masculino: 'dem Mann', feminino: 'der Frau', neutro: 'dem Kind', plural: 'den Kindern' },
          ] },
          { titulo: 'Artigo indefinido (ein-, mein-, kein-)', linhas: [
            { caso: 'Nominativ', masculino: 'ein Freund', feminino: 'eine Freundin', neutro: 'ein Kind', plural: 'meine Freunde' }, { caso: 'Akkusativ', masculino: 'einen Freund', feminino: 'eine Freundin', neutro: 'ein Kind', plural: 'meine Freunde' }, { caso: 'Dativ', masculino: 'einem Freund', feminino: 'einer Freundin', neutro: 'einem Kind', plural: 'meinen Freunden' },
          ] },
        ],
        exemplos: [['Ich gebe dem Mann das Buch.', 'Eu dou o livro ao homem.'], ['Ich schicke der Frau einen Brief.', 'Eu mando uma carta à mulher.'], ['Ich schenke dem Kind ein Spielzeug.', 'Eu dou um brinquedo à criança.'], ['Ich zeige den Kindern das Foto.', 'Eu mostro a foto às crianças.']],
        erros: [['Ich gebe den Mann das Buch.', 'Ich gebe dem Mann das Buch.', 'Quem recebe vai para o dativo: «dem».'], ['Ich zeige den Kinder das Foto.', 'Ich zeige den Kindern das Foto.', 'Dativo plural: o substantivo ganha -n.']],
      }),
      producao(3, 'Diga 6 frases em que você dá, mostra ou manda algo a alguém: «Ich gebe dem … / der … / den … Kindern …»'),
    ]),
    sessao('S2', 'O dativo dos pronomes', [
      revisao(5, 'Escreva o dativo dos artigos definidos e indefinidos e 4 exemplos.'),
      palavras(8, [
        ['schenken', 'xénken', 'dar de presente', 'to give (a gift)'], ['schicken', 'xíken', 'enviar', 'to send'], ['zeigen', 'tsáiguen', 'mostrar', 'to show'], ['erzählen', 'ertsélen', 'contar', 'to tell'],
        ['leihen', 'láien', 'emprestar', 'to lend'], ['anbieten', 'án-bíten', 'oferecer', 'to offer'], ['empfehlen', 'empféélen', 'recomendar', 'to recommend'], ['wünschen', 'vünxen', 'desejar', 'to wish'],
      ]),
      gramatica(12, 'Os pronomes no dativo, passo a passo', 'PASSO 1: os pronomes pessoais também têm forma de dativo: mir (a mim), dir (a você), ihm (a ele, a ela-coisa), ihr (a ela), uns (a nós), euch (a vocês), ihnen (a eles), Ihnen (ao senhor, à senhora). PASSO 2: eles servem para trocar «dem Mann», «der Frau», «den Kindern» e evitar a repetição: «Ich gebe dem Mann das Buch» → «Ich gebe ihm das Buch.» PASSO 3: compare as três colunas da tabela: nominativo («ich»), acusativo («mich») e dativo («mir»): cuidado, «uns» e «euch» são iguais no acusativo e no dativo. PASSO 4: estes verbos costumam levar DOIS objetos (dativo + acusativo): geben, schenken, schicken, zeigen, erzählen, leihen, anbieten, empfehlen. PASSO 5: «wünschen» é típico: «Ich wünsche dir einen schönen Tag.»', {
        tag: 'Pronomes',
        tabela: [
          { nominativo: 'ich', acusativo: 'mich', dativo: 'mir' }, { nominativo: 'du', acusativo: 'dich', dativo: 'dir' }, { nominativo: 'er', acusativo: 'ihn', dativo: 'ihm' }, { nominativo: 'sie (ela)', acusativo: 'sie', dativo: 'ihr' }, { nominativo: 'es', acusativo: 'es', dativo: 'ihm' },
          { nominativo: 'wir', acusativo: 'uns', dativo: 'uns' }, { nominativo: 'ihr', acusativo: 'euch', dativo: 'euch' }, { nominativo: 'sie (eles)', acusativo: 'sie', dativo: 'ihnen' }, { nominativo: 'Sie (formal)', acusativo: 'Sie', dativo: 'Ihnen' },
        ],
        exemplos: [['Ich gebe ihm das Buch.', 'Eu dou o livro a ele.'], ['Ich schicke ihr eine Postkarte.', 'Eu mando um cartão-postal a ela.'], ['Er zeigt uns die Stadt.', 'Ele mostra a cidade para nós.'], ['Ich wünsche dir einen schönen Tag.', 'Eu desejo a você um bom dia.']],
        erros: [['Ich gebe er das Buch.', 'Ich gebe ihm das Buch.', 'Quem recebe pede o dativo: «ihm».'], ['Das Handy gehört ich.', 'Das Handy gehört mir.', '«ich» vira «mir» no dativo.']],
      }),
      producao(5, 'Troque o destinatário por um pronome em voz alta: «Ich gebe dem Mann das Buch → Ich gebe ihm das Buch», com 6 frases suas.'),
    ]),
    sessao('S3', 'Dois objetos: a ordem das palavras', [
      revisao(5, 'Escreva os pronomes nos três casos para as nove pessoas.'),
      gramatica(10, 'Dativo e acusativo na mesma frase: a ordem, passo a passo', 'PASSO 1: se a frase tem DOIS SUBSTANTIVOS, o dativo vem primeiro: «Ich gebe dem Kind den Ball.» PASSO 2: se um deles é PRONOME, o pronome vem primeiro: «Ich gebe ihm den Ball» (dativo pronome + acusativo substantivo) e «Ich gebe ihn dem Kind» (acusativo pronome + dativo substantivo). PASSO 3: se OS DOIS são pronomes, o ACUSATIVO vem primeiro: «Ich gebe ihn ihm.» PASSO 4: lembre do dativo plural com «-n»: «den Kindern».', {
        tag: 'Casos',
        tabela: [
          { padrao: 'substantivo + substantivo', exemplo: 'Ich gebe dem Kind den Ball.' }, { padrao: 'pronome dativo + substantivo', exemplo: 'Ich gebe ihm den Ball.' }, { padrao: 'pronome acusativo + substantivo dativo', exemplo: 'Ich gebe ihn dem Kind.' }, { padrao: 'dois pronomes: acusativo primeiro', exemplo: 'Ich gebe ihn ihm.' },
        ],
        erros: [['Ich gebe den Ball dem Kind.', 'Ich gebe dem Kind den Ball.', 'Com dois substantivos, o dativo vem antes.'], ['Ich gebe den Ball ihm.', 'Ich gebe ihm den Ball.', 'O pronome vem antes do substantivo.']],
      }),
      dialogo(10, 'Geschenke / Presentes', 'Dois amigos falam dos presentes de aniversário.', [
        ['Mia', 'Was schenkst du deiner Mutter zum Geburtstag?', 'O que você dá de presente de aniversário para a sua mãe?'], ['Jonas', 'Ich schenke ihr einen Schal. Und du?', 'Eu dou um cachecol para ela. E você?'], ['Mia', 'Ich schenke meinem Vater ein Buch.', 'Eu dou um livro para o meu pai.'],
        ['Jonas', 'Gefällt ihm das Buch?', 'O livro agrada a ele?'], ['Mia', 'Ja, ich glaube schon. Er liest gern Krimis.', 'Sim, acho que sim. Ele gosta de ler romances policiais.'], ['Jonas', 'Und deinen Eltern? Kaufst du ihnen auch etwas?', 'E para os seus pais? Você também compra alguma coisa?'],
        ['Mia', 'Ich koche ihnen am Samstag ein Essen.', 'No sábado eu cozinho uma refeição para eles.'], ['Jonas', 'Das ist eine schöne Idee. Ich helfe dir gern.', 'É uma bela ideia. Ajudo você com prazer.'], ['Mia', 'Danke! Mit dem Auto holen wir den Kuchen.', 'Obrigada! De carro, buscamos o bolo.'], ['Jonas', 'Perfekt! Bis Samstag!', 'Perfeito! Até sábado!'],
      ]),
      producao(5, 'Diga a quem você dá presente em aniversários: «Ich schenke meiner Mutter … Ich schenke ihr … Ich gebe es ihr.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases com dois objetos (dativo e acusativo), duas delas com pronomes.'),
      exercicios(20, [
        lacuna('Ich gebe ___ Mann das Buch. (ao)', ['dem', 'den', 'der'], 'dem', 'Masculino dativo.'), lacuna('Ich schicke ___ Frau einen Brief. (à)', ['der', 'die', 'dem'], 'der', 'Feminino dativo.'), lacuna('Ich schenke ___ Kind ein Spielzeug. (à)', ['dem', 'das', 'den'], 'dem', 'Neutro dativo.'),
        lacuna('Ich zeige ___ Kindern das Foto. (às)', ['den', 'die', 'dem'], 'den', 'Plural dativo + -n.'), lacuna('Ich gebe ___ das Buch. (a ele)', ['ihm', 'ihn', 'er'], 'ihm', 'Dativo de «er».'), lacuna('Ich schicke ___ eine Karte. (a ela)', ['ihr', 'sie', 'ihm'], 'ihr', 'Dativo de «sie».'),
        lacuna('Er zeigt ___ die Stadt. (a nós)', ['uns', 'wir', 'unser'], 'uns', 'Acusativo e dativo iguais.'), lacuna('Ich wünsche ___ einen schönen Tag. (a você)', ['dir', 'dich', 'du'], 'dir', 'Dativo de «du».'), mc('«wem?» pergunta por:', ['a quem (dativo)', 'quem (nominativo)', 'o quê (acusativo)'], 'a quem (dativo)', 'Objeto indireto.'),
        mc('Dativo plural de «die Kinder»:', ['den Kindern', 'den Kinder', 'dem Kindern'], 'den Kindern', 'Artigo «den» e substantivo +n.'), mc('Qual ordem está certa?', ['Ich gebe ihm den Ball.', 'Ich gebe den Ball ihm.', 'Ich gebe ihn ihm Ball.'], 'Ich gebe ihm den Ball.', 'Pronome antes do substantivo.'),
        mc('Com dois pronomes, vem primeiro:', ['o acusativo', 'o dativo', 'o sujeito'], 'o acusativo', '«Ich gebe ihn ihm».'), ordem('Ordene: «Eu dou um livro ao meu pai.»', ['Ich', 'gebe', 'meinem', 'Vater', 'ein', 'Buch'], 'Ich gebe meinem Vater ein Buch.', 'Dativo antes do acusativo.'), ouvir('Ich schenke ihr einen Schal', ['Ich schenke ihr einen Schal', 'Ich schenke sie einen Schal', 'Ich schenke ihm einen Schal'], 'Ich schenke ihr einen Schal', '«ihr» = a ela (dativo).'),
        ditado('Ich koche ihnen am Samstag ein Essen', '«ihnen» = a eles (dativo plural).'), livre('Escreva 5 frases: um presente a um homem, a uma mulher e a uma criança, e duas com pronomes no dativo.', 'Ich gebe dem Mann ein Buch. Ich schicke der Frau einen Brief. Ich schenke dem Kind ein Spielzeug. Ich gebe ihm das Buch. Ich schicke ihr eine Karte.'),
      ]),
      producao(5, 'Grave-se contando a quem você dá, manda ou mostra coisas, primeiro com substantivos, depois com pronomes.'),
    ]),
  ],
});
