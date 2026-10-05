import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 5, titulo: 'Família, haben e possessivos', nivel: 'a1',
  objetivo: 'Falar da família com «haben», usar o acusativo do objeto direto, os possessivos e dizer a idade com os números de 0 a 20.',
  nota: 'Você fala da sua família, da idade e do que tem. Próxima aula: números, horas e dias.',
  sessoes: [
    sessao('S1', 'A família e o verbo haben', [
      revisao(5, 'Escreva 4 frases com verbos regulares no presente.'),
      palavras(12, [
        ['die Familie', 'di famílie', 'família', 'family'], ['die Eltern', 'di éltern', 'pais (só plural)', 'parents'], ['der Sohn', 'der zôn', 'filho', 'son'], ['die Tochter', 'di tórrter', 'filha', 'daughter'], ['der Großvater', 'der grôsfater', 'avô', 'grandfather'], ['die Großmutter', 'di grôsmuter', 'avó', 'grandmother'],
        ['der Opa', 'der ôpa', 'vovô (informal)', 'grandpa'], ['die Oma', 'di ôma', 'vovó (informal)', 'grandma'], ['der Onkel', 'der ónkel', 'tio', 'uncle'], ['die Tante', 'di tánte', 'tia', 'aunt'], ['die Geschwister', 'di guexvíster', 'irmãos (só plural)', 'siblings'], ['der Enkel', 'der énkel', 'neto', 'grandson'],
      ]),
      gramatica(10, 'Haben e o objeto direto', '«Haben» (ter) é irregular. O objeto direto de «haben» vai para o acusativo. No masculino singular, «ein» vira «einen» e «kein» vira «keinen»; no feminino, no neutro e no plural nada muda: «Ich habe einen Bruder. Ich habe eine Schwester. Ich habe ein Kind. Ich habe keine Kinder».', {
        tag: 'Verbos',
        comparacao: 'em português o objeto direto não muda de forma. Em alemão, o masculino muda: «ein Bruder» (quem é) vira «einen Bruder» (o que se tem).',
        tabelas: [
          { titulo: 'haben no presente', linhas: [
            { pronome: 'ich', haben: 'habe', exemplo: 'Ich habe einen Bruder.' }, { pronome: 'du', haben: 'hast', exemplo: 'Du hast eine Schwester.' }, { pronome: 'er / sie / es', haben: 'hat', exemplo: 'Er hat ein Kind.' },
            { pronome: 'wir', haben: 'haben', exemplo: 'Wir haben keine Kinder.' }, { pronome: 'ihr', haben: 'habt', exemplo: 'Ihr habt einen Sohn.' }, { pronome: 'sie / Sie', haben: 'haben', exemplo: 'Sie haben eine Tochter.' },
          ] },
          { titulo: 'O acusativo muda só o masculino', linhas: [
            { genero: 'masculino', definido: 'der Bruder → den Bruder', indefinido: 'ein Bruder → einen Bruder', negativo: 'kein Bruder → keinen Bruder' },
            { genero: 'feminino', definido: 'die Schwester (igual)', indefinido: 'eine Schwester (igual)', negativo: 'keine Schwester (igual)' }, { genero: 'neutro', definido: 'das Kind (igual)', indefinido: 'ein Kind (igual)', negativo: 'kein Kind (igual)' },
            { genero: 'plural', definido: 'die Eltern (igual)', indefinido: '—', negativo: 'keine Eltern (igual)' },
          ] },
        ],
        erros: [['Ich habe ein Bruder.', 'Ich habe einen Bruder.', 'Objeto direto masculino: einen.'], ['Ich habe nicht Kinder.', 'Ich habe keine Kinder.', 'Para negar um substantivo use kein/keine.']],
      }),
      producao(3, 'Diga: «Ich habe einen Bruder. Ich habe eine Schwester. Ich habe keine Kinder.»'),
    ]),
    sessao('S2', 'Os possessivos', [
      revisao(5, 'Escreva as 6 formas de «haben» de memória.'),
      palavras(8, [
        ['alt', 'alt', 'velho', 'old'], ['jung', 'iung', 'jovem', 'young'], ['groß', 'grôs', 'grande, alto', 'big, tall'], ['klein', 'klain', 'pequeno', 'small'], ['nett', 'net', 'simpático', 'nice'], ['lustig', 'lústiç', 'engraçado', 'funny'], ['verheiratet', 'ferráiratet', 'casado', 'married'], ['ledig', 'lédiç', 'solteiro', 'single'],
      ]),
      gramatica(12, 'Mein, dein, sein...: os possessivos', 'Os possessivos concordam com a COISA possuída (gênero e número) e não com o dono: «mein Vater», «meine Mutter», «mein Kind», «meine Eltern». Eles têm as terminações de «ein»: sem terminação no masculino e no neutro, -e no feminino e no plural. «Sein» é «dele» e «ihr» é «dela» (e também «deles»); «Ihr», com maiúscula, é o «seu» formal. Atenção: «unser» e «euer» perdem o -e- antes da terminação: unsere, eure.', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { pronome: 'ich', possessivo: 'mein', masc_neutro: 'mein Vater / mein Kind', fem_plural: 'meine Mutter / meine Eltern' }, { pronome: 'du', possessivo: 'dein', masc_neutro: 'dein Vater / dein Kind', fem_plural: 'deine Mutter / deine Eltern' },
          { pronome: 'er', possessivo: 'sein', masc_neutro: 'sein Vater / sein Kind', fem_plural: 'seine Mutter / seine Eltern' }, { pronome: 'sie', possessivo: 'ihr', masc_neutro: 'ihr Vater / ihr Kind', fem_plural: 'ihre Mutter / ihre Eltern' },
          { pronome: 'wir', possessivo: 'unser', masc_neutro: 'unser Vater / unser Kind', fem_plural: 'unsere Mutter / unsere Eltern' }, { pronome: 'ihr', possessivo: 'euer', masc_neutro: 'euer Vater / euer Kind', fem_plural: 'eure Mutter / eure Eltern' },
          { pronome: 'sie / Sie', possessivo: 'ihr / Ihr', masc_neutro: 'ihr Vater / Ihr Vater', fem_plural: 'ihre Mutter / Ihre Mutter' },
        ],
        erros: [['mein Mutter', 'meine Mutter', '«Mutter» é feminino: meine.'], ['seine Mutter (a mãe dela)', 'ihre Mutter', '«sein» é dele; «ihr» é dela.']],
      }),
      producao(5, 'Diga: «Das ist mein Vater. Das ist meine Mutter. Das sind meine Eltern. Mein Bruder ist jung.»'),
    ]),
    sessao('S3', 'Números e idade', [
      revisao(5, 'Escreva os possessivos de «ich», «du» e «wir» com «Vater» e «Mutter».'),
      palavras(11, [
        ['null', 'nul', 'zero', 'zero'], ['eins', 'ains', 'um', 'one'], ['zwei', 'tsvai', 'dois', 'two'], ['drei', 'drai', 'três', 'three'], ['vier', 'fir', 'quatro', 'four'], ['fünf', 'fünf', 'cinco', 'five'], ['sechs', 'zeks', 'seis', 'six'], ['sieben', 'zíben', 'sete', 'seven'], ['acht', 'arrt', 'oito', 'eight'], ['neun', 'nóin', 'nove', 'nine'], ['zehn', 'tsen', 'dez', 'ten'],
      ]),
      gramatica(8, 'Números de 11 a 20 e a idade', 'De 13 a 19 os números se formam com a base + «-zehn»: dreizehn, vierzehn, fünfzehn... Atenção: 16 = sechzehn (perde o -s) e 17 = siebzehn (perde o -en). 11 (elf) e 12 (zwölf) são especiais; 20 é zwanzig. Para dizer a idade: «Ich bin zwanzig Jahre alt» ou só «Ich bin zwanzig». Pergunta: «Wie alt bist du?».', {
        tag: 'Números',
        tabela: [
          { numero: '11', forma: 'elf' }, { numero: '12', forma: 'zwölf' }, { numero: '13', forma: 'dreizehn' }, { numero: '14', forma: 'vierzehn' }, { numero: '15', forma: 'fünfzehn' }, { numero: '16', forma: 'sechzehn' }, { numero: '17', forma: 'siebzehn' }, { numero: '18', forma: 'achtzehn' }, { numero: '19', forma: 'neunzehn' }, { numero: '20', forma: 'zwanzig' },
        ],
        exemplos: [['Wie alt bist du?', 'Quantos anos você tem?'], ['Ich bin zwanzig Jahre alt.', 'Tenho vinte anos.']],
      }),
      dialogo(6, 'Wie alt bist du? / Quantos anos você tem?', 'Dois colegas de curso conversam.', [
        ['Lea', 'Wie alt bist du, Paul?', 'Quantos anos você tem, Paul?'], ['Paul', 'Ich bin zwanzig. Und du?', 'Tenho vinte. E você?'], ['Lea', 'Ich bin neunzehn. Hast du Geschwister?', 'Tenho dezenove. Você tem irmãos?'],
        ['Paul', 'Ja, ich habe einen Bruder und eine Schwester.', 'Sim, tenho um irmão e uma irmã.'], ['Lea', 'Wie alt sind sie?', 'Quantos anos eles têm?'], ['Paul', 'Mein Bruder ist siebzehn und meine Schwester ist zwölf.', 'Meu irmão tem dezessete e minha irmã tem doze.'],
      ]),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva sua idade e a de 3 pessoas da sua família, por extenso, em alemão.'),
      texto(5, 'Meine Familie / Minha família', 'Das ist meine Familie. Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Max. Er ist zwölf Jahre alt. Meine Schwester heißt Lisa. Sie ist fünfzehn. Wir haben keinen Hund, aber eine Katze.',
        'Esta é a minha família. Tenho um irmão e uma irmã. Meu irmão se chama Max. Ele tem doze anos. Minha irmã se chama Lisa. Ela tem quinze. Não temos um cachorro, mas temos um gato.',
        [['Wie heißt der Bruder?', 'Max'], ['Wie alt ist Lisa?', 'Fünfzehn'], ['Haben sie einen Hund?', 'Nein, sie haben eine Katze']]),
      exercicios(15, [
        lacuna('Ich ___ einen Bruder. (haben)', ['habe', 'hast', 'hat'], 'habe', 'ich → habe.'), lacuna('Du ___ eine Schwester.', ['hast', 'habe', 'hat'], 'hast', 'du → hast.'), lacuna('Er ___ ein Kind.', ['hat', 'hast', 'haben'], 'hat', 'er → hat.'), lacuna('Wir ___ keine Kinder.', ['haben', 'habt', 'hat'], 'haben', 'wir → haben.'),
        lacuna('Ich habe ___ Bruder. (um)', ['einen', 'ein', 'eine'], 'einen', 'Objeto direto masculino: einen.'), lacuna('Ich habe ___ Schwester. (uma)', ['eine', 'einen', 'ein'], 'eine', 'Feminino não muda.'),
        lacuna('Das ist ___ Vater. (meu)', ['mein', 'meine', 'meinen'], 'mein', 'Vater é masculino.'), lacuna('Das ist ___ Mutter. (minha)', ['meine', 'mein', 'meinen'], 'meine', 'Mutter é feminino.'), lacuna('Das sind ___ Eltern. (meus)', ['meine', 'mein', 'meiner'], 'meine', 'Plural: meine.'),
        mc('«Wie alt bist du?» pergunta:', ['a idade', 'o nome', 'a origem'], 'a idade', '«wie alt» = quantos anos.'), mc('16 em alemão:', ['sechzehn', 'sechszehn', 'sechzig'], 'sechzehn', 'Perde o -s.'), mc('17 em alemão:', ['siebzehn', 'siebenzehn', 'siebzig'], 'siebzehn', 'Perde o -en.'),
        ouvir('Ich habe einen Bruder', ['Ich habe einen Bruder', 'Ich habe eine Schwester', 'Ich habe keine Kinder'], 'Ich habe einen Bruder', 'einen = masculino.'), ditado('Mein Bruder ist zwölf', '12 = zwölf.'),
        livre('Escreva 4 frases: quem você tem na família, a idade de alguém e uma negação.', 'Ich habe einen Bruder. Mein Bruder ist zwölf Jahre alt. Ich habe keine Kinder. Das ist meine Mutter.'),
      ]),
      producao(5, 'Grave-se apresentando a sua família: quem tem, os nomes e as idades.'),
    ]),
  ],
});
