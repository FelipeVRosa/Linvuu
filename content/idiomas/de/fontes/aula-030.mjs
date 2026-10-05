import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 30, titulo: 'Verbos de posição e a Declinação-N', nivel: 'a2',
  objetivo: 'Usar os verbos de posição (stehen/stellen, liegen/legen, sitzen/setzen, hängen) com Wo? e Wohin? e a Declinação-N dos substantivos masculinos fracos (der Student → den Studenten).',
  nota: 'Você usa os verbos de posição e os substantivos fracos. Próxima aula: revisão e simulado do A2, parte 1.',
  sessoes: [
    sessao('S1', 'Stehen × stellen, liegen × legen', [
      revisao(5, 'Escreva as nove preposições de duas vias e a regra de ouro.'),
      palavras(8, [
        ['stehen', 'xtéen', 'estar de pé', 'to stand'], ['stellen', 'xtélen', 'pôr de pé', 'to put (upright)'], ['liegen', 'lígen', 'estar deitado', 'to lie'], ['legen', 'légen', 'deitar, pôr deitado', 'to lay'],
        ['das Regal', 'das regál', 'estante', 'shelf'], ['die Vase', 'di váze', 'vaso', 'vase'], ['das Bild', 'das bilt', 'quadro, imagem', 'picture'], ['das Sofa', 'das zôfa', 'sofá', 'sofa'],
      ]),
      gramatica(14, 'Stehen × stellen e liegen × legen, passo a passo', 'PASSO 1: o alemão tem DOIS verbos para cada posição: um diz ONDE algo ESTÁ (estado, Wo?) e o outro diz que você COLOCA algo (movimento, Wohin?). PASSO 2: stehen (estar de pé) × stellen (pôr de pé). PASSO 3: liegen (estar deitado) × legen (pôr deitado). PASSO 4: o de ESTADO pede DATIVO, o de MOVIMENTO pede ACUSATIVO: «Die Vase steht auf dem Tisch» × «Ich stelle die Vase auf den Tisch». PASSO 5: as formas: stehen – stand – gestanden; stellen – stellte – gestellt; liegen – lag – gelegen; legen – legte – gelegt. PASSO 6: coisas altas ou que ficam em pé (garrafa, vaso, lâmpada, cadeira) usam stehen/stellen; coisas planas ou deitadas (livro, jornal, chave) usam liegen/legen.', {
        tag: 'Verbos',
        comparacao: 'o português usa «estar» e «pôr» para tudo. O alemão pergunta antes: está de pé ou deitado? E isso escolhe o par de verbos.',
        tabela: [
          { estado: 'stehen (Wo? dativo)', movimento: 'stellen (Wohin? acusativo)', exemplo: 'Die Lampe steht neben dem Sofa. / Ich stelle die Lampe neben das Sofa.' }, { estado: 'liegen (Wo? dativo)', movimento: 'legen (Wohin? acusativo)', exemplo: 'Das Buch liegt auf dem Tisch. / Ich lege das Buch auf den Tisch.' },
        ],
        erros: [['Ich stehe die Vase auf den Tisch.', 'Ich stelle die Vase auf den Tisch.', 'Movimento (você coloca): «stellen».'], ['Das Buch legt auf dem Tisch.', 'Das Buch liegt auf dem Tisch.', 'Estado (está): «liegen».']],
      }),
      producao(3, 'Descreva 4 objetos: onde estão (steht / liegt) e para onde você os leva (stelle / lege).'),
    ]),
    sessao('S2', 'Sitzen × setzen, hängen', [
      revisao(5, 'Escreva os quatro verbos do par stehen/stellen e liegen/legen com as formas do passado.'),
      palavras(8, [
        ['sitzen', 'zítsen', 'estar sentado', 'to sit'], ['setzen', 'zétsen', 'sentar, pôr sentado', 'to seat'], ['hängen', 'hén-guen', 'estar pendurado / pendurar', 'to hang'], ['die Lehne', 'di léne', 'encosto', 'backrest'],
        ['der Haken', 'der hákken', 'gancho', 'hook'], ['der Teppich', 'der tépiç', 'tapete', 'carpet'], ['die Treppe', 'di trépe', 'escada', 'stairs'], ['die Wand', 'di vant', 'parede', 'wall'],
      ]),
      gramatica(12, 'Sitzen × setzen e hängen, passo a passo', 'PASSO 1: o mesmo par de estado e de movimento vale para «sentado»: sitzen (estar sentado, Wo?, dativo) × setzen (pôr ou sentar alguém, Wohin?, acusativo): «Das Kind sitzt auf dem Stuhl» × «Ich setze das Kind auf den Stuhl.» PASSO 2: formas: sitzen – saß – gesessen; setzen – setzte – gesetzt. PASSO 3: «hängen» tem as duas funções: estado («Die Jacke hängt an der Tür») e movimento («Ich hänge die Jacke an die Tür»); no estado é verbo forte (hängen – hing – gehangen) e no movimento é fraco (hängen – hängte – gehängt). PASSO 4: resumo: stehen/stellen (de pé), liegen/legen (deitado), sitzen/setzen (sentado), hängen (pendurado).', {
        tag: 'Verbos',
        tabela: [
          { estado: 'sitzen (Wo? dativo)', movimento: 'setzen (Wohin? acusativo)', exemplo: 'Das Kind sitzt auf dem Stuhl. / Ich setze das Kind auf den Stuhl.' }, { estado: 'hängen (Wo? dativo)', movimento: 'hängen (Wohin? acusativo)', exemplo: 'Das Bild hängt an der Wand. / Ich hänge das Bild an die Wand.' }, { estado: 'stehen', movimento: 'stellen', exemplo: 'Die Flasche steht auf dem Tisch. / Ich stelle die Flasche auf den Tisch.' }, { estado: 'liegen', movimento: 'legen', exemplo: 'Der Schlüssel liegt neben dem Handy. / Ich lege den Schlüssel neben das Handy.' },
        ],
        erros: [['Das Kind setzt auf dem Stuhl.', 'Das Kind sitzt auf dem Stuhl.', 'Estado: «sitzen».'], ['Ich hänge das Bild an der Wand.', 'Ich hänge das Bild an die Wand.', 'Movimento: acusativo.']],
      }),
      producao(5, 'Arrume a sala em voz alta: «Ich stelle … Ich lege … Ich hänge … Ich setze …» e depois descreva-a: «… steht … liegt … hängt … sitzt …»'),
    ]),
    sessao('S3', 'Declinação-N e diálogo', [
      revisao(5, 'Escreva os quatro pares de verbos de posição com uma frase de estado e uma de movimento.'),
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
      revisao(5, 'Escreva 6 frases: duas com cada par de verbos de posição e duas com Declinação-N.'),
      exercicios(20, [
        lacuna('Die Lampe ___ neben dem Sofa. (estar de pé)', ['steht', 'stellt', 'legt'], 'steht', 'estado: stehen.'), lacuna('Ich ___ die Lampe neben das Sofa. (pôr de pé)', ['stelle', 'stehe', 'liege'], 'stelle', 'movimento: stellen.'), lacuna('Das Buch ___ auf dem Tisch. (estar deitado)', ['liegt', 'legt', 'steht'], 'liegt', 'estado: liegen.'),
        lacuna('Ich ___ das Buch auf den Tisch. (pôr deitado)', ['lege', 'liege', 'stelle'], 'lege', 'movimento: legen.'), lacuna('Das Kind ___ auf dem Stuhl. (estar sentado)', ['sitzt', 'setzt', 'steht'], 'sitzt', 'estado: sitzen.'), lacuna('Ich ___ das Kind auf den Stuhl. (sentar)', ['setze', 'sitze', 'stehe'], 'setze', 'movimento: setzen.'),
        lacuna('Das Bild hängt an ___ Wand. (Wo?)', ['der', 'die', 'dem'], 'der', 'Wo? dativo feminino.'), lacuna('Ich hänge das Bild an ___ Wand. (Wohin?)', ['die', 'der', 'den'], 'die', 'Wohin? acusativo feminino.'), lacuna('Ich kenne den ___. (estudante)', ['Studenten', 'Student', 'Studente'], 'Studenten', 'Declinação-N.'),
        lacuna('Ich helfe dem ___. (colega)', ['Kollegen', 'Kollege', 'Kollegem'], 'Kollegen', 'Declinação-N.'), mc('Verbos de ESTADO (stehen, liegen, sitzen) pedem:', ['dativo', 'acusativo', 'genitivo'], 'dativo', 'Sem movimento.'), mc('Verbos de MOVIMENTO (stellen, legen, setzen) pedem:', ['acusativo', 'dativo', 'genitivo'], 'acusativo', 'Você coloca algo em algum lugar.'),
        ordem('Ordene: «Eu ponho o livro sobre a mesa.»', ['Ich', 'lege', 'das', 'Buch', 'auf', 'den', 'Tisch'], 'Ich lege das Buch auf den Tisch.', 'Wohin? acusativo.'), ouvir('Die Jacke hängt an der Tür', ['Die Jacke hängt an der Tür', 'Ich hänge die Jacke an die Tür', 'Die Jacke liegt auf dem Stuhl'], 'Die Jacke hängt an der Tür', 'Wo? dativo.'), ditado('Ich helfe dem Studenten', 'Declinação-N no dativo.'),
        livre('Escreva 5 frases: uma com stehen, uma com stellen, uma com liegen, uma com legen e uma com «Studenten» ou «Kollegen».', 'Die Vase steht auf dem Tisch. Ich stelle die Vase auf den Tisch. Das Buch liegt auf dem Sofa. Ich lege das Buch auf das Sofa. Ich helfe dem Studenten.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua casa com os verbos de posição.'),
    ]),
  ],
});
