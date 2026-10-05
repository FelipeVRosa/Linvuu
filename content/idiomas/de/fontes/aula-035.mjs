import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 35, titulo: 'Comparativo e superlativo', nivel: 'a2',
  objetivo: 'Comparar com o comparativo (-er … als) e a igualdade (so … wie), formar o superlativo (am -sten e der/die/das -ste), e usar as formas irregulares gut, viel, gern, hoch, nah.',
  nota: 'Você compara pessoas e coisas. Próxima aula: as frases subordinadas com weil e dass.',
  sessoes: [
    sessao('S1', 'O comparativo', [
      revisao(5, 'Escreva as formas de um adjetivo antes do substantivo nas três famílias, com um exemplo.'),
      palavras(8, [
        ['schnell', 'xnel', 'rápido', 'fast'], ['stark', 'xtark', 'forte', 'strong'], ['schwach', 'xvarr', 'fraco', 'weak'], ['hoch', 'hôrr', 'alto (altura)', 'high'],
        ['tief', 'tif', 'fundo', 'deep'], ['weit', 'vait', 'longe, largo', 'far, wide'], ['nah', 'na', 'perto', 'near'], ['dick', 'dik', 'grosso, gordo', 'thick'],
      ]),
      gramatica(14, 'O comparativo, passo a passo', 'PASSO 1: para dizer «mais … do que», acrescente «-er» ao adjetivo e use «als» para o segundo termo: «Berlin ist größer als München.» PASSO 2: muitos adjetivos curtos ganham TREMA: alt → älter; jung → jünger; groß → größer; stark → stärker; warm → wärmer; kalt → kälter. PASSO 3: adjetivos em «-el», «-er» e «-eu» perdem o «e»: teuer → teurer; dunkel → dunkler. PASSO 4: IRREGULARES, que você precisa decorar: gut → besser; viel → mehr; gern → lieber; hoch → höher; nah → näher. PASSO 5: igualdade: «so … wie»: «Er ist so groß wie ich.» PASSO 6: diferença não dita: «Es wird kälter» (está ficando mais frio).', {
        tag: 'Comparação',
        comparacao: 'o português usa «mais» + adjetivo («mais rápido»). O alemão acrescenta «-er» ao próprio adjetivo («schneller») e usa «als» para «do que».',
        tabela: [
          { adjetivo: 'schnell', comparativo: 'schneller', exemplo: 'Der Zug ist schneller als der Bus.' }, { adjetivo: 'alt', comparativo: 'älter', exemplo: 'Mein Bruder ist älter als ich.' }, { adjetivo: 'groß', comparativo: 'größer', exemplo: 'Berlin ist größer als München.' }, { adjetivo: 'teuer', comparativo: 'teurer', exemplo: 'Das Hotel ist teurer als die Pension.' },
          { adjetivo: 'gut', comparativo: 'besser', exemplo: 'Das Essen hier ist besser.' }, { adjetivo: 'viel', comparativo: 'mehr', exemplo: 'Ich habe mehr Zeit als du.' }, { adjetivo: 'gern', comparativo: 'lieber', exemplo: 'Ich trinke lieber Tee als Kaffee.' }, { adjetivo: 'hoch', comparativo: 'höher', exemplo: 'Der Berg ist höher als der Hügel.' },
        ],
        erros: [['Berlin ist größer wie München.', 'Berlin ist größer als München.', 'Comparativo: «als»; igualdade: «wie».'], ['Er ist mehr alt als ich.', 'Er ist älter als ich.', 'O comparativo é «-er» no próprio adjetivo.'], ['Das Essen ist guter.', 'Das Essen ist besser.', '«gut» é irregular: besser.']],
      }),
      producao(3, 'Compare 6 coisas em voz alta: «Der Zug ist schneller als der Bus. Berlin ist größer als …»'),
    ]),
    sessao('S2', 'O superlativo', [
      revisao(5, 'Escreva o comparativo de 10 adjetivos, com os irregulares.'),
      palavras(8, [
        ['am schnellsten', 'am xnélsten', 'o mais rápido', 'the fastest'], ['am besten', 'am béstem', 'o melhor, melhor de tudo', 'the best'], ['am meisten', 'am máisten', 'o mais, mais de tudo', 'the most'], ['am liebsten', 'am lípsten', 'o que mais gosto', 'most of all'],
        ['am höchsten', 'am hö-çsten', 'o mais alto', 'the highest'], ['am nächsten', 'am néçsten', 'o mais perto', 'the nearest'], ['der schönste', 'der xönste', 'o mais bonito', 'the most beautiful'], ['der beste', 'der béste', 'o melhor', 'the best'],
      ]),
      gramatica(12, 'O superlativo, passo a passo', 'PASSO 1: para dizer «o mais …», há DUAS formas. FORMA 1: «am» + adjetivo + «-sten», para o predicado: «Der Zug ist am schnellsten.» FORMA 2: «der/die/das» + adjetivo + «-ste» + substantivo, quando vem o substantivo (com a terminação de adjetivo!): «der schnellste Zug», «die schönste Stadt», «das beste Essen». PASSO 2: adjetivos em -d, -t, -s, -ß, -z, -sch ganham «-esten»: am ältesten, am heißesten. PASSO 3: o trema vem junto: am ältesten, am größten, am stärksten. PASSO 4: irregulares: gut → am besten; viel → am meisten; gern → am liebsten; hoch → am höchsten; nah → am nächsten. PASSO 5: a frase típica: «Im Sommer ist es am wärmsten.» PASSO 6: mostre o grupo com «von» ou «der»: «der schönste von allen».', {
        tag: 'Comparação',
        tabela: [
          { adjetivo: 'schnell', superlativo: 'am schnellsten', exemplo: 'Der Zug ist am schnellsten.' }, { adjetivo: 'alt', superlativo: 'am ältesten', exemplo: 'Mein Opa ist am ältesten.' }, { adjetivo: 'groß', superlativo: 'am größten', exemplo: 'Berlin ist am größten.' }, { adjetivo: 'gut', superlativo: 'am besten', exemplo: 'Das Essen hier ist am besten.' },
          { adjetivo: 'viel', superlativo: 'am meisten', exemplo: 'Er arbeitet am meisten.' }, { adjetivo: 'gern', superlativo: 'am liebsten', exemplo: 'Am liebsten reise ich.' }, { adjetivo: 'hoch', superlativo: 'am höchsten', exemplo: 'Der Berg ist am höchsten.' },
        ],
        exemplos: [['Der schnellste Zug fährt um acht Uhr ab.', 'O trem mais rápido parte às oito.'], ['Das ist die schönste Stadt.', 'Esta é a cidade mais bonita.'], ['Im Sommer ist es am wärmsten.', 'No verão é quando faz mais calor.'], ['Er ist der beste Koch.', 'Ele é o melhor cozinheiro.']],
        erros: [['Das ist die schönste Stadt von die Welt.', 'Das ist die schönste Stadt der Welt.', 'Genitivo para «do mundo».'], ['Er ist am gutesten.', 'Er ist am besten.', '«gut» é irregular: am besten.'], ['Der schnell Zug.', 'Der schnellste Zug.', 'Superlativo: «-ste» + terminação.']],
      }),
      producao(5, 'Diga 6 superlativos em voz alta: «Der Zug ist am schnellsten. Das ist die schönste Stadt …»'),
    ]),
    sessao('S3', 'Comparar na prática', [
      revisao(5, 'Escreva uma comparação com cada forma: -er … als, so … wie, am -sten e der -ste.'),
      gramatica(10, 'As comparações no dia a dia', 'PASSO 1: «mehr» e «weniger» comparam quantidades: «Ich habe mehr Zeit als du», «Er hat weniger Geld.» PASSO 2: «immer» + comparativo = cada vez mais: «Es wird immer kälter.» PASSO 3: «gern, lieber, am liebsten» são a mesma família de «gut, besser, am besten»: gosto, prefiro, mais gosto. PASSO 4: o comparativo também vai antes do substantivo e recebe terminação: «ein größeres Haus», «die besseren Schuhe». PASSO 5: igualdade e diferença: «so … wie» (tão … quanto) e «anders als» (diferente de).', {
        tag: 'Comparação',
        tabela: [
          { funcao: 'mais / menos', exemplo: 'Ich habe mehr Zeit als du. / Er hat weniger Geld.' }, { funcao: 'cada vez mais', exemplo: 'Es wird immer kälter.' }, { funcao: 'tão … quanto', exemplo: 'Er ist so groß wie ich.' }, { funcao: 'diferente de', exemplo: 'Mein Bruder ist anders als ich.' }, { funcao: 'comparativo antes do substantivo', exemplo: 'Ich möchte ein größeres Zimmer.' },
        ],
      }),
      dialogo(10, 'Zwei Städte / Duas cidades', 'Dois amigos comparam Berlim e Hamburgo.', [
        ['Lea', 'Wo gefällt es dir besser, in Berlin oder in Hamburg?', 'Onde você gosta mais, em Berlim ou em Hamburgo?'], ['Paul', 'Berlin ist größer und interessanter, aber Hamburg ist ruhiger.', 'Berlim é maior e mais interessante, mas Hamburgo é mais tranquila.'], ['Lea', 'Und wo ist es teurer?', 'E onde é mais caro?'],
        ['Paul', 'In Hamburg ist es ein bisschen teurer als in Berlin.', 'Em Hamburgo é um pouco mais caro do que em Berlim.'], ['Lea', 'Ich wohne am liebsten am Meer.', 'O que mais gosto é de morar perto do mar.'], ['Paul', 'Dann ist Hamburg die beste Stadt für dich.', 'Então Hamburgo é a melhor cidade para você.'],
        ['Lea', 'Ja, aber Berlin hat die meisten Museen.', 'Sim, mas Berlim tem mais museus (a maior parte).'], ['Paul', 'Das stimmt. Im Sommer ist es dort am schönsten.', 'É verdade. No verão lá é mais bonito.'], ['Lea', 'Dann fahren wir im Sommer zusammen hin.', 'Então vamos juntos no verão.'], ['Paul', 'Gute Idee! Ich freue mich schon.', 'Boa ideia! Já estou animado.'],
      ]),
      producao(5, 'Compare em voz alta duas cidades que você conhece: tamanho, preço, clima e o que você prefere.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases de comparação e 4 de superlativo.'),
      exercicios(20, [
        mc('Comparativo de «schnell»:', ['schneller', 'mehr schnell', 'schnellest'], 'schneller', 'Adjetivo + -er.'), mc('Comparativo de «alt»:', ['älter', 'alter', 'altere'], 'älter', 'Trema.'), mc('Comparativo de «gut»:', ['besser', 'guter', 'mehr gut'], 'besser', 'Irregular.'),
        mc('Comparativo de «viel»:', ['mehr', 'vieler', 'viel-er'], 'mehr', 'Irregular.'), mc('Comparativo de «gern»:', ['lieber', 'gerner', 'mehr gern'], 'lieber', 'Irregular.'), mc('Comparativo de «teuer»:', ['teurer', 'teuerer', 'teuer-er'], 'teurer', 'Perde o «e».'),
        lacuna('Berlin ist größer ___ München.', ['als', 'wie', 'denn'], 'als', 'Comparativo: «als».'), lacuna('Er ist so groß ___ ich.', ['wie', 'als', 'denn'], 'wie', 'Igualdade: «wie».'), lacuna('Der Zug ist ___ schnellsten.', ['am', 'im', 'an'], 'am', 'Superlativo: «am … -sten».'),
        lacuna('Das ist die ___ Stadt. (mais bonita)', ['schönste', 'schönere', 'schönsten'], 'schönste', 'Superlativo + substantivo: -ste.'), lacuna('Das Essen hier ist ___. (o melhor)', ['am besten', 'am gutesten', 'am bessersten'], 'am besten', 'Irregular.'), lacuna('Im Sommer ist es ___ wärmsten.', ['am', 'im', 'an'], 'am', 'am + -sten.'),
        ordem('Ordene: «O trem é mais rápido do que o ônibus.»', ['Der', 'Zug', 'ist', 'schneller', 'als', 'der', 'Bus'], 'Der Zug ist schneller als der Bus.', 'Comparativo + als.'), ouvir('Ich trinke lieber Tee als Kaffee', ['Ich trinke lieber Tee als Kaffee', 'Ich trinke gern Tee wie Kaffee', 'Ich trinke am liebsten Tee'], 'Ich trinke lieber Tee als Kaffee', '«lieber … als».'), ditado('Im Sommer ist es am schönsten', 'am + -sten.'),
        livre('Escreva 5 frases: dois comparativos, uma igualdade, um superlativo com «am» e um com «der/die/das».', 'Der Zug ist schneller als der Bus. Mein Bruder ist älter als ich. Er ist so groß wie ich. Im Sommer ist es am wärmsten. Das ist die schönste Stadt.'),
      ]),
      producao(5, 'Grave-se comparando duas cidades, duas comidas e duas pessoas, com «als», «so … wie» e superlativos.'),
    ]),
  ],
});
