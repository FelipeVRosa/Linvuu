import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 7, titulo: 'Comida e bebida', nivel: 'a1',
  objetivo: 'Pedir comida e bebida, usar o acusativo (der → den, ein → einen), conjugar verbos com e → i e usar «möchten» com a moldura da frase.',
  nota: 'Você pede comida e bebida e usa o objeto direto. Próxima aula: a sua rotina.',
  sessoes: [
    sessao('S1', 'Alimentos e o acusativo', [
      revisao(5, 'Escreva a data de hoje e a hora de agora em alemão.'),
      palavras(10, [
        ['das Brot', 'das brôt', 'pão', 'bread'], ['die Butter', 'di búter', 'manteiga', 'butter'], ['der Käse', 'der kéze', 'queijo', 'cheese'], ['das Ei', 'das ai', 'ovo', 'egg'], ['der Apfel', 'der ápfel', 'maçã', 'apple'], ['die Milch', 'di milç', 'leite', 'milk'],
        ['das Wasser', 'das vásser', 'água', 'water'], ['der Kaffee', 'der káfe', 'café (bebida)', 'coffee'], ['der Saft', 'der zaft', 'suco', 'juice'], ['der Kuchen', 'der kúrren', 'bolo', 'cake'], ['der Fisch', 'der fix', 'peixe', 'fish'], ['die Suppe', 'di zúpe', 'sopa', 'soup'],
      ]),
      gramatica(10, 'O acusativo: o objeto direto muda só no masculino', 'O alemão tem quatro casos. Por agora você precisa de dois: o NOMINATIVO (quem faz a ação) e o ACUSATIVO (o objeto direto: o que se come, bebe, compra ou tem). A única diferença entre os dois está no MASCULINO singular: der → den, ein → einen, kein → keinen. Feminino, neutro e plural ficam iguais. Verbos que pedem acusativo: essen, trinken, kaufen, haben, nehmen, möchten, lesen, sehen.', {
        tag: 'Casos',
        comparacao: 'o português não muda o artigo: «o queijo» é igual como sujeito ou como objeto. O alemão muda só o masculino: «der Käse» (sujeito) × «den Käse» (objeto).',
        tabela: [
          { genero: 'masculino', nominativo: 'der / ein / kein', acusativo: 'den / einen / keinen', exemplo: 'Ich esse den Käse. Ich trinke einen Saft.' }, { genero: 'feminino', nominativo: 'die / eine / keine', acusativo: 'die / eine / keine', exemplo: 'Ich esse die Suppe.' },
          { genero: 'neutro', nominativo: 'das / ein / kein', acusativo: 'das / ein / kein', exemplo: 'Ich esse das Brot.' }, { genero: 'plural', nominativo: 'die / — / keine', acusativo: 'die / — / keine', exemplo: 'Ich esse die Äpfel.' },
        ],
        erros: [['Ich esse der Käse.', 'Ich esse den Käse.', 'Objeto direto masculino: den.'], ['Ich trinke ein Saft.', 'Ich trinke einen Saft.', 'Objeto direto masculino: einen.']],
      }),
      producao(5, 'Diga: «Ich esse den Käse. Ich trinke einen Saft. Ich esse die Suppe. Ich esse ein Brot.»'),
    ]),
    sessao('S2', 'Verbos com e → i', [
      revisao(5, 'Escreva 4 frases com «Ich esse / Ich trinke» e um alimento no acusativo.'),
      palavras(8, [
        ['essen', 'ésen', 'comer', 'to eat'], ['nehmen', 'némen', 'pegar, tomar', 'to take'], ['lesen', 'lézen', 'ler', 'to read'], ['sehen', 'zéen', 'ver', 'to see'], ['geben', 'guében', 'dar', 'to give'], ['kochen', 'kórren', 'cozinhar', 'to cook'], ['bestellen', 'bextélen', 'pedir (num restaurante)', 'to order'], ['bezahlen', 'betsálen', 'pagar', 'to pay'],
      ]),
      gramatica(12, 'Verbos que trocam e por i ou ie', 'Um grupo de verbos muito usados troca a vogal «e» por «i» ou «ie» no «du» e no «er / sie / es»: essen → du isst, er isst. Os outros pronomes são regulares. Em «nehmen» a consoante também muda (nimmst, nimmt). Aprenda cada um desses verbos junto com o seu «du» e o seu «er».', {
        tag: 'Verbos',
        tabela: [
          { pronome: 'ich', essen: 'esse', nehmen: 'nehme', lesen: 'lese', sehen: 'sehe', geben: 'gebe', sprechen: 'spreche' }, { pronome: 'du', essen: 'isst', nehmen: 'nimmst', lesen: 'liest', sehen: 'siehst', geben: 'gibst', sprechen: 'sprichst' },
          { pronome: 'er / sie / es', essen: 'isst', nehmen: 'nimmt', lesen: 'liest', sehen: 'sieht', geben: 'gibt', sprechen: 'spricht' }, { pronome: 'wir', essen: 'essen', nehmen: 'nehmen', lesen: 'lesen', sehen: 'sehen', geben: 'geben', sprechen: 'sprechen' },
          { pronome: 'ihr', essen: 'esst', nehmen: 'nehmt', lesen: 'lest', sehen: 'seht', geben: 'gebt', sprechen: 'sprecht' }, { pronome: 'sie / Sie', essen: 'essen', nehmen: 'nehmen', lesen: 'lesen', sehen: 'sehen', geben: 'geben', sprechen: 'sprechen' },
        ],
        erros: [['Du esst Brot.', 'Du isst Brot.', 'No «du», «essen» vira «isst».'], ['Er lest ein Buch.', 'Er liest ein Buch.', 'No «er», «lesen» vira «liest».']],
      }),
      producao(5, 'Diga: «Ich lese ein Buch. Du liest eine Zeitung. Er isst einen Apfel. Sie nimmt einen Kaffee.»'),
    ]),
    sessao('S3', 'Möchten e o restaurante', [
      revisao(5, 'Escreva as 6 formas de «essen» e de «lesen» de memória.'),
      gramatica(12, 'Möchten e a moldura da frase', '«Ich möchte» é «eu gostaria» ou «eu quero» (mais educado que «wollen»). O verbo modal fica na 2ª posição, e o outro verbo vai para o FIM, no infinitivo: «Ich möchte einen Kaffee trinken.» É a «moldura» da frase. Se o sentido já está claro, o segundo verbo pode ficar de fora: «Ich möchte einen Kaffee.» Para pedir: «Ich nehme …», «Ich möchte …», «Die Rechnung, bitte» e «Zahlen, bitte».', {
        tag: 'Verbos',
        comparacao: 'em português «eu gostaria de beber um café» mantém os verbos juntos. Em alemão, o segundo verbo vai para o fim: «Ich möchte einen Kaffee trinken».',
        tabela: [
          { pronome: 'ich', möchten: 'möchte', exemplo: 'Ich möchte einen Kaffee.' }, { pronome: 'du', möchten: 'möchtest', exemplo: 'Möchtest du Kuchen?' }, { pronome: 'er / sie / es', möchten: 'möchte', exemplo: 'Er möchte einen Tee trinken.' },
          { pronome: 'wir', möchten: 'möchten', exemplo: 'Wir möchten bestellen.' }, { pronome: 'ihr', möchten: 'möchtet', exemplo: 'Möchtet ihr Fisch essen?' }, { pronome: 'sie / Sie', möchten: 'möchten', exemplo: 'Was möchten Sie trinken?' },
        ],
        erros: [['Ich möchte essen einen Fisch.', 'Ich möchte einen Fisch essen.', 'O segundo verbo vai para o FIM da frase.']],
      }),
      dialogo(10, 'Im Restaurant / No restaurante', 'Dois clientes e um garçom.', [
        ['Kellner', 'Guten Abend! Was möchten Sie trinken?', 'Boa noite! O que desejam beber?'], ['Anna', 'Ich möchte ein Wasser, bitte.', 'Eu quero uma água, por favor.'], ['Ben', 'Und ich nehme einen Kaffee.', 'E eu pego um café.'],
        ['Kellner', 'Gern. Und was möchten Sie essen?', 'Com prazer. E o que desejam comer?'], ['Anna', 'Ich möchte den Fisch mit Reis.', 'Eu quero o peixe com arroz.'], ['Ben', 'Ich esse eine Suppe und ein Brot.', 'Eu como uma sopa e um pão.'],
        ['Kellner', 'Gern. Möchten Sie noch etwas?', 'Com prazer. Desejam mais alguma coisa?'], ['Anna', 'Nein, danke. Die Rechnung, bitte.', 'Não, obrigada. A conta, por favor.'], ['Kellner', 'Das macht zwanzig Euro.', 'São vinte euros.'], ['Ben', 'Hier sind zwanzig Euro. Stimmt so!', 'Aqui estão vinte euros. Pode ficar com o troco!'],
      ]),
      producao(3, 'Faça um pedido em voz alta: uma bebida, um prato e «Die Rechnung, bitte».'),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva 4 frases sobre o que você come e bebe no café da manhã.'),
      texto(5, 'Mein Frühstück / Meu café da manhã', 'Ich frühstücke um sieben Uhr. Ich trinke einen Kaffee und esse ein Brot mit Butter und Käse. Mein Bruder isst einen Apfel und trinkt Tee. Er isst nicht gern Eier. Am Wochenende frühstücken wir zusammen.',
        'Tomo café da manhã às sete horas. Bebo um café e como um pão com manteiga e queijo. Meu irmão come uma maçã e bebe chá. Ele não gosta de comer ovos. No fim de semana tomamos café da manhã juntos.',
        [['Wann frühstückt der Autor?', 'Um sieben Uhr'], ['Was trinkt der Bruder?', 'Tee'], ['Wann frühstücken sie zusammen?', 'Am Wochenende']]),
      exercicios(15, [
        mc('Para o objeto direto masculino, «der» vira:', ['den', 'dem', 'des'], 'den', 'Acusativo masculino.'), mc('«ein Saft» como objeto direto fica:', ['einen Saft', 'ein Saft', 'einem Saft'], 'einen Saft', 'Acusativo masculino.'),
        lacuna('Ich esse ___ Käse. (o)', ['den', 'der', 'die'], 'den', 'Käse é masculino.'), lacuna('Ich trinke ___ Kaffee. (um)', ['einen', 'ein', 'eine'], 'einen', 'Kaffee é masculino.'), lacuna('Ich esse ___ Suppe. (a)', ['die', 'den', 'der'], 'die', 'Feminino não muda.'),
        lacuna('Er ___ ein Brot. (essen)', ['isst', 'esst', 'isse'], 'isst', 'er → isst.'), lacuna('Du ___ ein Buch. (lesen)', ['liest', 'lest', 'lesst'], 'liest', 'du → liest.'), lacuna('Sie nimmt / Sie ___ einen Kaffee. (nehmen)', ['nimmt', 'nehmt', 'nimmst'], 'nimmt', 'er/sie/es → nimmt.'),
        lacuna('Ich ___ einen Tee. (möchten)', ['möchte', 'möchtest', 'möchten'], 'möchte', 'ich → möchte.'), ordem('Ordene: «Eu quero comer um peixe.»', ['Ich', 'möchte', 'einen', 'Fisch', 'essen'], 'Ich möchte einen Fisch essen.', 'O segundo verbo vai para o fim.'),
        mc('Onde vai o segundo verbo com «möchten»?', ['no fim da frase', 'logo depois do sujeito', 'no começo'], 'no fim da frase', 'Moldura da frase.'), ouvir('Ich möchte ein Wasser', ['Ich möchte ein Wasser', 'Ich nehme einen Kaffee', 'Ich esse ein Brot'], 'Ich möchte ein Wasser', '«möchte» + objeto.'),
        ditado('Die Rechnung, bitte', 'Pedir a conta.'), mc('«Das macht zwanzig Euro» significa:', ['São vinte euros', 'Eu faço vinte euros', 'Isto é feito de euros'], 'São vinte euros', '«Das macht» = isso dá, são.'),
        livre('Escreva 4 frases: o que você come, o que bebe, o que você quer e um pedido de conta.', 'Ich esse ein Brot. Ich trinke einen Kaffee. Ich möchte einen Kuchen. Die Rechnung, bitte.'),
      ]),
      producao(5, 'Grave-se contando o que você come e bebe no café da manhã e fazendo um pedido de restaurante.'),
    ]),
  ],
});
