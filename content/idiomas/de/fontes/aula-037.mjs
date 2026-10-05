import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 37, titulo: 'Frases subordinadas 2: wenn, ob e as perguntas indiretas', nivel: 'a2',
  objetivo: 'Montar frases com «wenn» (se, quando), «ob» (se, em perguntas indiretas) e palavras interrogativas (wo, wann, warum…) em perguntas indiretas, com o verbo no fim da subordinada.',
  nota: 'Você monta frases com wenn e ob e faz perguntas indiretas. Próxima aula: os verbos reflexivos.',
  sessoes: [
    sessao('S1', 'Wenn: se e quando', [
      revisao(5, 'Escreva 4 frases com «weil» e 4 com «dass», com o verbo no fim.'),
      palavras(8, [
        ['wenn', 'ven', 'se; quando (repetido)', 'if; whenever'], ['immer wenn', 'ímer ven', 'sempre que', 'whenever'], ['dann', 'dan', 'então', 'then'], ['regnen', 'régnen', 'chover', 'to rain'],
        ['scheinen', 'xáinen', 'brilhar, parecer', 'to shine'], ['bekommen', 'bekómen', 'receber, conseguir', 'to get'], ['schnell', 'xnel', 'rápido', 'quick'], ['bald', 'balt', 'em breve', 'soon'],
      ]),
      gramatica(14, 'Wenn: se e sempre que, passo a passo', 'PASSO 1: «wenn» tem dois sentidos: SE (condição): «Wenn es regnet, bleibe ich zu Hause» (se chover, fico em casa); e SEMPRE QUE, QUANDO (hábito): «Wenn ich müde bin, trinke ich Kaffee.» PASSO 2: a REGRA é a mesma de «weil»: o verbo conjugado vai para o FIM da frase com «wenn». PASSO 3: normalmente a frase com «wenn» abre a frase; então a principal começa pelo VERBO: «Wenn es regnet, bleibe ich zu Hause.» PASSO 4: pode vir depois também: «Ich bleibe zu Hause, wenn es regnet.» PASSO 5: a palavra «dann» (então) pode reforçar a principal: «Wenn es regnet, dann bleibe ich zu Hause.» PASSO 6: «wenn» não é para uma ação única no passado (isso é «als», no B1).', {
        tag: 'Frase',
        tabela: [
          { sentido: 'condição', frase: 'Wenn es regnet, bleibe ich zu Hause.' }, { sentido: 'hábito (sempre que)', frase: 'Wenn ich müde bin, trinke ich Kaffee.' }, { sentido: 'depois da principal', frase: 'Ich bleibe zu Hause, wenn es regnet.' }, { sentido: 'com dann', frase: 'Wenn du Zeit hast, dann besuche ich dich.' },
          { sentido: 'com separável', frase: 'Wenn ich früh aufstehe, bin ich müde.' }, { sentido: 'com modal', frase: 'Wenn ich arbeiten muss, komme ich nicht.' },
        ],
        erros: [['Wenn es regnet, ich bleibe zu Hause.', 'Wenn es regnet, bleibe ich zu Hause.', 'Depois da subordinada, a principal começa pelo verbo.'], ['Wenn es regnet ich bleibe …', 'Wenn es regnet, bleibe ich …', 'Vírgula obrigatória entre as duas frases.'], ['Wenn ich bin müde, trinke ich Kaffee.', 'Wenn ich müde bin, trinke ich Kaffee.', 'Verbo no fim da subordinada.']],
      }),
      producao(3, 'Diga 6 frases em voz alta com «wenn»: «Wenn es regnet, … Wenn ich müde bin, … Wenn ich Zeit habe, …»'),
    ]),
    sessao('S2', 'Ob e as perguntas indiretas', [
      revisao(5, 'Escreva 6 frases com «wenn», três com a subordinada no começo.'),
      palavras(8, [
        ['fragen', 'frágen', 'perguntar', 'to ask'], ['wissen', 'víssen', 'saber', 'to know'], ['ob', 'op', 'se (pergunta indireta)', 'whether'], ['die Auskunft', 'di áus-kunft', 'informação', 'information'],
        ['wissen wollen', 'víssen vólen', 'querer saber', 'to want to know'], ['unbedingt', 'ún-bedingt', 'sem falta', 'definitely'], ['der Schalter', 'der xálter', 'guichê', 'counter'], ['die Verspätung', 'di fer-xpétung', 'atraso', 'delay'],
      ]),
      gramatica(12, 'Perguntas indiretas: ob e as palavras interrogativas', 'PASSO 1: uma PERGUNTA INDIRETA é uma pergunta dentro de outra frase: «Ich weiß nicht, ob er kommt» (não sei se ele vem). PASSO 2: para perguntas de SIM ou NÃO, use «ob» (se): «Kommt er? → Ich weiß nicht, ob er kommt.» PASSO 3: para perguntas COM palavra interrogativa, a própria palavra abre a subordinada: «Wo wohnt er? → Ich weiß nicht, wo er wohnt.» «Wann fährt der Zug ab? → Kannst du mir sagen, wann der Zug abfährt?» PASSO 4: nos dois casos, o verbo conjugado vai para o FIM e o prefixo separável se junta ao verbo (abfährt). PASSO 5: use-as para pedir informações com educação: «Können Sie mir sagen, wo der Bahnhof ist?» PASSO 6: a vírgula antes de «ob» e da palavra interrogativa é obrigatória.', {
        tag: 'Frase',
        tabela: [
          { direta: 'Kommt er?', indireta: 'Ich weiß nicht, ob er kommt.' }, { direta: 'Hat der Zug Verspätung?', indireta: 'Wissen Sie, ob der Zug Verspätung hat?' }, { direta: 'Wo wohnt er?', indireta: 'Ich weiß nicht, wo er wohnt.' }, { direta: 'Wann fährt der Zug ab?', indireta: 'Können Sie mir sagen, wann der Zug abfährt?' },
          { direta: 'Warum kommt sie nicht?', indireta: 'Ich frage mich, warum sie nicht kommt.' }, { direta: 'Wo ist der Bahnhof?', indireta: 'Können Sie mir sagen, wo der Bahnhof ist?' },
        ],
        erros: [['Ich weiß nicht, ob kommt er.', 'Ich weiß nicht, ob er kommt.', 'Depois de «ob», o verbo vai para o fim.'], ['Können Sie mir sagen, wo ist der Bahnhof?', 'Können Sie mir sagen, wo der Bahnhof ist?', 'Pergunta indireta: o verbo vai para o fim.'], ['Ich weiß nicht, wenn er kommt.', 'Ich weiß nicht, ob er kommt.', '«wenn» é «se/quando (repetido)»; para «se» de pergunta indireta, use «ob».']],
      }),
      producao(5, 'Transforme 6 perguntas diretas em perguntas indiretas em voz alta: «Wo wohnt er? → Ich weiß nicht, wo er wohnt.»'),
    ]),
    sessao('S3', 'Wenn, ob, weil e dass juntos', [
      revisao(5, 'Escreva uma frase com cada conjunção: weil, dass, wenn e ob.'),
      gramatica(10, 'As quatro conjunções lado a lado', 'PASSO 1: as quatro mandam o verbo conjugado para o FIM da subordinada: weil (porque), dass (que), wenn (se, sempre que) e ob (se, em perguntas indiretas). PASSO 2: o truque para não confundir: «dass» introduz um FATO; «ob» introduz uma PERGUNTA; «wenn» introduz uma CONDIÇÃO ou um hábito; «weil» introduz um MOTIVO. PASSO 3: com mais de uma subordinada, aplique a regra em cada uma: «Ich weiß, dass er kommt, wenn er Zeit hat.»', {
        tag: 'Frase',
        tabela: [
          { conjuncao: 'weil', ideia: 'motivo', frase: 'Ich bleibe, weil es regnet.' }, { conjuncao: 'dass', ideia: 'um fato', frase: 'Ich weiß, dass es regnet.' }, { conjuncao: 'wenn', ideia: 'condição ou hábito', frase: 'Wenn es regnet, bleibe ich.' }, { conjuncao: 'ob', ideia: 'uma pergunta', frase: 'Ich weiß nicht, ob es regnet.' },
        ],
      }),
      dialogo(10, 'Eine Auskunft / Uma informação', 'Um viajante pede informação a um funcionário da estação.', [
        ['Tom', 'Entschuldigung, können Sie mir sagen, wann der Zug nach Berlin abfährt?', 'Com licença, o senhor pode me dizer quando o trem para Berlim parte?'], ['Beamter', 'Der Zug fährt um vierzehn Uhr fünfzehn ab. Wenn Sie schnell sind, bekommen Sie noch eine Fahrkarte.', 'O trem parte às 14h15. Se o senhor for rápido, ainda consegue um bilhete.'], ['Tom', 'Wissen Sie auch, ob der Zug Verspätung hat?', 'O senhor sabe também se o trem está atrasado?'],
        ['Beamter', 'Ich weiß nicht, ob er pünktlich ist. Ich sehe nach.', 'Não sei se ele está pontual. Vou verificar.'], ['Beamter', 'Der Zug hat zehn Minuten Verspätung, weil es einen Unfall gab.', 'O trem está dez minutos atrasado, porque houve um acidente.'], ['Tom', 'Danke. Wo kann ich eine Fahrkarte kaufen?', 'Obrigado. Onde posso comprar um bilhete?'],
        ['Beamter', 'Dort am Schalter. Ich glaube, dass er noch offen ist.', 'Ali no guichê. Acho que ainda está aberto.'], ['Tom', 'Vielen Dank! Ich frage dort, ob ich noch einen Platz bekomme.', 'Muito obrigado! Vou perguntar lá se ainda consigo um lugar.'],
      ]),
      producao(5, 'Peça uma informação em voz alta com perguntas indiretas: «Können Sie mir sagen, wo … / wann … / ob …?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 8 frases, duas com cada conjunção: weil, dass, wenn e ob.'),
      exercicios(20, [
        lacuna('___ es regnet, bleibe ich zu Hause. (se)', ['Wenn', 'Ob', 'Dass'], 'Wenn', 'Condição: «wenn».'), lacuna('Ich weiß nicht, ___ er kommt. (se)', ['ob', 'wenn', 'dass'], 'ob', 'Pergunta indireta: «ob».'), lacuna('Ich weiß, ___ er kommt. (que)', ['dass', 'ob', 'wenn'], 'dass', 'Fato: «dass».'),
        lacuna('Ich bleibe, ___ es regnet. (porque)', ['weil', 'wenn', 'ob'], 'weil', 'Motivo: «weil».'), lacuna('Ich weiß nicht, wo er ___. (wohnen)', ['wohnt', 'wohne', 'wohnen'], 'wohnt', 'Verbo no fim.'), lacuna('Können Sie mir sagen, wann der Zug ___? (abfahren)', ['abfährt', 'fährt ab', 'abfahren'], 'abfährt', 'Separável junto, no fim.'),
        mc('«Ich weiß nicht, ob er kommt» é uma:', ['pergunta indireta', 'condição', 'ordem'], 'pergunta indireta', 'ob = se.'), mc('Em perguntas indiretas com «wo», «wann», «warum», o verbo vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Subordinada.'), mc('Qual frase está certa?', ['Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnet, ich bleibe zu Hause.', 'Wenn regnet es, bleibe ich zu Hause.'], 'Wenn es regnet, bleibe ich zu Hause.', 'Subordinada primeiro; principal começa pelo verbo.'),
        mc('«Wenn ich müde bin, trinke ich Kaffee» expressa:', ['um hábito', 'um fato passado único', 'uma ordem'], 'um hábito', 'Sempre que.'), ordem('Ordene: «Eu não sei se ele vem.»', ['Ich', 'weiß', 'nicht', 'ob', 'er', 'kommt'], 'Ich weiß nicht, ob er kommt.', '«ob» + verbo no fim.'), ordem('Ordene: «Se chover, fico em casa.»', ['Wenn', 'es', 'regnet', 'bleibe', 'ich', 'zu', 'Hause'], 'Wenn es regnet, bleibe ich zu Hause.', 'Depois da subordinada, verbo.'),
        ouvir('Können Sie mir sagen, wo der Bahnhof ist', ['Können Sie mir sagen, wo der Bahnhof ist', 'Können Sie mir sagen, wo ist der Bahnhof', 'Wo ist der Bahnhof'], 'Können Sie mir sagen, wo der Bahnhof ist', 'Pergunta indireta.'), ditado('Ich frage dort, ob ich noch einen Platz bekomme', '«ob» + verbo no fim.'),
        livre('Escreva 5 frases: uma com «wenn», uma com «ob», uma com «weil», uma com «dass» e uma pergunta indireta com «wo» ou «wann».', 'Wenn es regnet, bleibe ich zu Hause. Ich weiß nicht, ob er kommt. Ich bleibe, weil ich müde bin. Ich glaube, dass er Zeit hat. Können Sie mir sagen, wann der Zug abfährt?'),
      ]),
      producao(5, 'Grave-se pedindo três informações com perguntas indiretas e explicando o que você faz quando chove ou quando está cansado.'),
    ]),
  ],
});
