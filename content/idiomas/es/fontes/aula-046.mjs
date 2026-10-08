import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 46, titulo: 'Imperfecto de subjuntivo', nivel: 'b1',
  objetivo: 'Formar o imperfecto de subjuntivo (-ra e -se, regulares e irregulares) a partir do pretérito indefinido, usá-lo quando o verbo principal está no passado («Quería que vinieras»), em «ojalá», «como si» e na cortesia («quisiera»), e com «para que», «antes de que», «sin que» e orações de relativo.',
  nota: 'Você já conhece o subjuntivo do presente. Agora ele ganha uma versão do passado, que serve para pedidos, dúvidas, desejos e emoções contados no passado. Próxima aula: hipóteses com «si», que usam esta forma o tempo todo.',
  sessoes: [
    sessao('S1', 'Como se forma o imperfecto de subjuntivo', [
      revisao(5, 'Diga em voz alta cinco frases com o subjuntivo do presente: «Quiero que vengas», «Espero que tengas tiempo»… Depois conjugue o pretérito indefinido de «tener», «ir» e «decir» na forma «ellos»: tuvieron, fueron, dijeron.'),
      palavras(8, [
        ['esperar que', '', 'esperar que', ''], ['pedir que', '', 'pedir que', ''], ['querer que', '', 'querer que', ''], ['dudar que', '', 'duvidar que', ''],
        ['era importante que', '', 'era importante que', ''], ['me alegré de que', '', 'fiquei contente por', ''], ['ojalá', '', 'oxalá, tomara que', ''], ['como si', '', 'como se', ''],
      ]),
      gramatica(12, 'Do indefinido ao imperfecto de subjuntivo', 'PASSO 1: o «imperfecto de subjuntivo» é o subjuntivo do passado. Você o usa quando o verbo principal está no passado e pede subjuntivo: «Quiero que vengas» (agora) vira «Quería que vinieras» (antes). PASSO 2: para formar, comece pela forma «ellos» do pretérito indefinido: «hablaron», «comieron», «vivieron». PASSO 3: tire o «-ron» final: «habla-», «comie-», «vivie-». PASSO 4: acrescente -ra, -ras, -ra, -ramos, -rais, -ran: «hablara, hablaras, hablara, habláramos, hablarais, hablaran». PASSO 5: só a forma de «nosotros» leva acento escrito, na vogal antes da terminação: «habláramos», «comiéramos», «viviéramos». PASSO 6: os verbos irregulares não têm regra nova. O radical vem do indefinido: «tuvieron» dá «tuviera», «fueron» dá «fuera», «dijeron» dá «dijera». Se você sabe o indefinido de «ellos», sabe esta forma. PASSO 7: existe uma segunda série, em -se: «hablase, hablases, hablase, hablásemos, hablaseis, hablasen». O sentido é o mesmo. Na Espanha as duas aparecem, mais a de -ra na fala; na América Latina predomina a de -ra. Nesta aula as frases usam -ra, e os quadros mostram as duas. PASSO 8: uma só forma serve para «yo» e para «él»: «Quería que yo tuviera» e «Quería que él tuviera». Use o pronome quando precisar deixar claro quem faz a ação.', {
        tag: 'Subjuntivo',
        comparacao: 'em português o imperfeito do subjuntivo se forma de modo muito parecido: «falaram» dá «falasse», «tiveram» dá «tivesse». A série espanhola em -se (hablase) é a prima direta dessa forma. O cuidado está na série em -ra: «hablara» parece o nosso mais-que-perfeito «falara», mas em espanhol «hablara» nesta aula é subjuntivo («que eu falasse»). Outra diferença: o português tem «-ssem» e o espanhol, «-ran» ou «-sen».',
        tabelas: [
          { titulo: 'Verbos regulares (série em -ra, com a série em -se ao lado)', linhas: [
            { pessoa: 'yo', hablar: 'hablara / hablase', comer: 'comiera / comiese', vivir: 'viviera / viviese' },
            { pessoa: 'tú', hablar: 'hablaras / hablases', comer: 'comieras / comieses', vivir: 'vivieras / vivieses' },
            { pessoa: 'él, ella, usted', hablar: 'hablara / hablase', comer: 'comiera / comiese', vivir: 'viviera / viviese' },
            { pessoa: 'nosotros', hablar: 'habláramos / hablásemos', comer: 'comiéramos / comiésemos', vivir: 'viviéramos / viviésemos' },
            { pessoa: 'vosotros', hablar: 'hablarais / hablaseis', comer: 'comierais / comieseis', vivir: 'vivierais / vivieseis' },
            { pessoa: 'ellos, ellas, ustedes', hablar: 'hablaran / hablasen', comer: 'comieran / comiesen', vivir: 'vivieran / viviesen' },
          ] },
          { titulo: 'Irregulares: o radical vem do indefinido de «ellos»', linhas: [
            { infinitivo: 'ser, ir', indefinido_ellos: 'fueron', yo: 'fuera' }, { infinitivo: 'tener', indefinido_ellos: 'tuvieron', yo: 'tuviera' }, { infinitivo: 'estar', indefinido_ellos: 'estuvieron', yo: 'estuviera' },
            { infinitivo: 'hacer', indefinido_ellos: 'hicieron', yo: 'hiciera' }, { infinitivo: 'decir', indefinido_ellos: 'dijeron', yo: 'dijera' }, { infinitivo: 'poner', indefinido_ellos: 'pusieron', yo: 'pusiera' },
            { infinitivo: 'poder', indefinido_ellos: 'pudieron', yo: 'pudiera' }, { infinitivo: 'querer', indefinido_ellos: 'quisieron', yo: 'quisiera' }, { infinitivo: 'venir', indefinido_ellos: 'vinieron', yo: 'viniera' },
            { infinitivo: 'saber', indefinido_ellos: 'supieron', yo: 'supiera' }, { infinitivo: 'traer', indefinido_ellos: 'trajeron', yo: 'trajera' }, { infinitivo: 'dar', indefinido_ellos: 'dieron', yo: 'diera' },
            { infinitivo: 'ver', indefinido_ellos: 'vieron', yo: 'viera' }, { infinitivo: 'leer', indefinido_ellos: 'leyeron', yo: 'leyera' }, { infinitivo: 'dormir', indefinido_ellos: 'durmieron', yo: 'durmiera' },
            { infinitivo: 'pedir', indefinido_ellos: 'pidieron', yo: 'pidiera' }, { infinitivo: 'haber', indefinido_ellos: 'hubieron', yo: 'hubiera' },
          ] },
        ],
        exemplos: [['Quería que vinieras a mi casa.', 'Eu queria que você viesse à minha casa.'], ['Mis padres querían que estudiara medicina.', 'Meus pais queriam que eu estudasse medicina.'], ['Dudaba que tuviéramos tiempo.', 'Ele duvidava que nós tivéssemos tempo.'], ['Era importante que dijeras la verdad.', 'Era importante que você dissesse a verdade.']],
        erros: [['Quería que vengas.', 'Quería que vinieras.', 'Verbo principal no passado pede o imperfecto de subjuntivo, não o presente.'], ['Pidió que hablamos más despacio.', 'Pidió que habláramos más despacio.', 'Depois de «pedir que» vem subjuntivo, e a forma de «nosotros» leva acento.'], ['Quería que tú veniras.', 'Quería que tú vinieras.', 'O radical é o do indefinido «vinieron», com «-ie-».'], ['Dudaba que tenía tiempo.', 'Dudaba que tuviera tiempo.', '«Dudar que» pede subjuntivo; «tenía» seria indicativo.']],
      }),
      producao(5, 'Diga em voz alta o que as pessoas queriam de você quando você era criança, com «mis padres querían que…», «mi profesor quería que…», «mis amigos querían que…». Use pelo menos um verbo irregular.'),
    ]),
    sessao('S2', 'Quando usar: pedidos, dúvidas, desejos e cortesia', [
      revisao(4, 'Sem olhar, diga o imperfecto de subjuntivo de «tener», «hacer», «ir», «venir» e «decir» na forma «yo». Depois na forma «nosotros».'),
      palavras(6, [
        ['aconsejar que', '', 'aconselhar que', ''], ['recomendar que', '', 'recomendar que', ''], ['prohibir que', '', 'proibir que', ''], ['permitir que', '', 'permitir que', ''], ['exigir que', '', 'exigir que', ''], ['sugerir que', '', 'sugerir que', ''],
      ]),
      gramatica(12, 'Quando o verbo principal está no passado', 'PASSO 1: a regra de concordância é simples. Verbo principal no presente (ou futuro) pede o presente de subjuntivo; verbo principal no passado pede o imperfecto de subjuntivo. «Me pide que espere» passa a «Me pidió que esperara». PASSO 2: isso vale para as mesmas ideias que você já viu no presente: pedido e conselho («pedir, aconsejar, recomendar, permitir, prohibir»), desejo («querer, esperar»), dúvida e negação («dudar, no creer»), emoção («me alegró que, me sorprendió que») e juízo («era importante que, era mejor que»). PASSO 3: com o pretérito perfecto («he pedido», «ha dicho») pensa-se no presente, por isso se usa o presente de subjuntivo: «Me ha pedido que vaya». Com o indefinido e o imperfecto usa-se o imperfecto de subjuntivo. PASSO 4: «ojalá» com o imperfecto de subjuntivo expressa um desejo difícil ou irreal agora: «Ojalá tuviera más tiempo» (mas não tenho). Com o presente, o desejo é possível: «Ojalá tengas suerte». PASSO 5: «como si» sempre pede imperfecto de subjuntivo quando fala do presente ou do passado e se compara com algo irreal: «Habla como si fuera mi jefe» (mas não é). PASSO 6: na cortesia, «quisiera» é mais suave do que «quiero»: «Quisiera reservar una mesa». É a forma de pedido que você já viu na aula 8, e agora você sabe de onde vem: é o imperfecto de subjuntivo de «querer». PASSO 7: com «dudar» e «no creer» no passado, o subjuntivo continua: «No creía que fuera verdad». Já «creía que era verdad» (afirmação) leva indicativo.', {
        tag: 'Subjuntivo',
        comparacao: 'a lógica é a mesma do português: «Quero que você venha» e «Queria que você viesse». Em português, «oxalá» também pede o imperfeito do subjuntivo quando o desejo é difícil («Oxalá eu tivesse mais tempo»). A diferença que pega brasileiros é o «como si», que em espanhol sempre leva subjuntivo, e o uso de «quisiera» no lugar do nosso «queria» ou «gostaria» no pedido educado.',
        tabelas: [
          { titulo: 'Presente × passado: o tempo do verbo principal decide', linhas: [
            { presente: 'Quiero que vengas.', passado: 'Quería que vinieras.' },
            { presente: 'Me pide que espere.', passado: 'Me pidió que esperara.' },
            { presente: 'Es importante que estudies.', passado: 'Era importante que estudiaras.' },
            { presente: 'Dudo que tenga tiempo.', passado: 'Dudaba que tuviera tiempo.' },
            { presente: 'Me alegra que vengas.', passado: 'Me alegró que vinieras.' },
          ] },
          { titulo: 'Outros usos do imperfecto de subjuntivo', linhas: [
            { uso: 'ojalá + imperfecto (desejo irreal agora)', exemplo: 'Ojalá viviera cerca del mar.' },
            { uso: 'como si + imperfecto (comparação irreal)', exemplo: 'Me mira como si no me conociera.' },
            { uso: 'quisiera (pedido educado)', exemplo: 'Quisiera pedir la cuenta, por favor.' },
          ] },
        ],
        exemplos: [['Mi jefa me aconsejó que pidiera vacaciones.', 'Minha chefe me aconselhou a pedir férias.'], ['No creía que la película fuera tan larga.', 'Eu não achava que o filme fosse tão longo.'], ['Ojalá hiciera menos calor.', 'Oxalá fizesse menos calor.'], ['Habla español como si fuera de Madrid.', 'Fala espanhol como se fosse de Madri.']],
        erros: [['Me pidió que le ayudo.', 'Me pidió que le ayudara.', 'Pedido no passado pede subjuntivo, no passado também.'], ['Habla como si es el jefe.', 'Habla como si fuera el jefe.', '«Como si» pede imperfecto de subjuntivo, nunca o presente do indicativo.'], ['No creía que es verdad.', 'No creía que fuera verdad.', 'Depois de «no creer que», o subjuntivo continua, mesmo no passado.'], ['Ojalá tengo más tiempo.', 'Ojalá tuviera más tiempo.', '«Ojalá» sempre pede subjuntivo, nunca o indicativo.']],
      }),
      producao(8, 'Responda em voz alta com o imperfecto de subjuntivo: «¿Qué te pidió tu jefe o tu profesor la última vez?», «¿Qué te aconsejaron tus amigos?», «¿Qué te gustaría que fuera diferente en tu vida?», com «Ojalá…». Depois peça algo com «Quisiera…» em um restaurante imaginário.'),
    ]),
    sessao('S3', 'Conjunções e orações de relativo no passado', [
      revisao(4, 'Complete em voz alta: «Mi madre quería que yo…», «El profesor pidió que nosotros…», «Dudaba que ellos…», «Ojalá yo…».'),
      palavras(5, [
        ['para que', '', 'para que', ''], ['antes de que', '', 'antes que', ''], ['sin que', '', 'sem que', ''], ['en caso de que', '', 'caso', ''], ['a menos que', '', 'a menos que', ''],
      ]),
      gramatica(8, 'Para que, antes de que, sin que e relativos', 'PASSO 1: as conjunções que você aprendeu na aula 44 («para que», «antes de que», «sin que») pedem subjuntivo. Se o verbo principal está no passado, o subjuntivo passa para o imperfecto: «Te llamé para que vinieras». PASSO 2: «antes de que» sempre leva subjuntivo, mesmo no passado: «Salimos antes de que lloviera». PASSO 3: «sin que» só é usado quando os sujeitos são diferentes: «Se fue sin que nadie lo viera». Se o sujeito é o mesmo, use «sin» + infinitivo: «Se fue sin despedirse». PASSO 4: quando o que se procura é desconhecido ou pode não existir, a oração de relativo leva subjuntivo: «Buscaba un piso que tuviera terraza» (não sei se existe). Se o piso já é conhecido, use indicativo: «Encontré un piso que tenía terraza». PASSO 5: «cuando» no passado habitual leva indicativo: «Cuando era niño, jugaba en la calle». O subjuntivo só aparece quando a ideia é de algo que ainda não aconteceu, no ponto de vista do passado: «Dijo que me llamaría cuando llegara».', {
        tag: 'Subjuntivo',
        comparacao: 'o português usa a mesma lógica: «Liguei para que você viesse», «Saímos antes que chovesse», «Procurava um apartamento que tivesse varanda». Em espanhol, não existe a opção de pôr o verbo no infinitivo pessoal («para tu vires»): ou se usa subjuntivo com «que», ou infinitivo quando o sujeito é o mesmo.',
        tabela: [
          { conjuncao: 'para que', exemplo: 'Te llamé para que vinieras.' },
          { conjuncao: 'antes de que', exemplo: 'Llegamos antes de que empezara la película.' },
          { conjuncao: 'sin que', exemplo: 'Salió sin que nadie lo oyera.' },
          { conjuncao: 'en caso de que', exemplo: 'Llevé un paraguas por si llovía / en caso de que lloviera.' },
          { conjuncao: 'a menos que', exemplo: 'No iríamos a menos que nos invitaran.' },
        ],
        erros: [['Te llamé para que vienes.', 'Te llamé para que vinieras.', '«Para que» pede subjuntivo, e o verbo principal está no passado.'], ['Salí antes de que llegó.', 'Salí antes de que llegara.', '«Antes de que» sempre pede subjuntivo.'], ['Buscaba un piso que tiene terraza.', 'Buscaba un piso que tuviera terraza.', 'Quando o piso é desconhecido, usa-se subjuntivo.'], ['Se fue sin que despedirse.', 'Se fue sin despedirse.', 'Com o mesmo sujeito, usa-se «sin» + infinitivo, sem «que».']],
      }),
      dialogo(8, 'Una fiesta sorpresa / Uma festa surpresa', 'Elena e Javier falam sobre a festa surpresa de uma amiga e sobre o que quase deu errado.', [
        ['Elena', '¿Qué tal salió la fiesta sorpresa de Marta?', 'Como foi a festa surpresa da Marta?'],
        ['Javier', 'Muy bien, aunque casi la estropeamos. Su hermano le pidió que viniera a casa a las ocho y ella sospechó algo.', 'Muito bem, embora quase tenhamos estragado tudo. O irmão dela pediu que ela viesse para casa às oito e ela desconfiou de algo.'],
        ['Elena', '¿Por qué? Yo les dije a todos que no hablaran del tema en el grupo.', 'Por quê? Eu disse a todos que não falassem do assunto no grupo.'],
        ['Javier', 'Ya, pero Sergio escribió un mensaje antes de que pudiéramos borrarlo. Marta quería que le contáramos qué pasaba.', 'Pois é, mas o Sergio escreveu uma mensagem antes que pudéssemos apagá-la. A Marta queria que contássemos o que estava acontecendo.'],
        ['Elena', '¿Y qué le dijisteis?', 'E o que vocês disseram a ela?'],
        ['Javier', 'Que no pasaba nada. Le pedí que se sentara y le dimos la tarta antes de que preguntara nada más.', 'Que não estava acontecendo nada. Pedi que ela se sentasse e demos o bolo antes que ela perguntasse mais alguma coisa.'],
        ['Elena', 'Me alegré mucho de que al final fuera una sorpresa de verdad. Ojalá pudiera ir a todas las fiestas así, pero trabajo casi todos los sábados.', 'Fiquei muito contente por, no fim, ter sido uma surpresa de verdade. Oxalá eu pudesse ir a todas as festas assim, mas trabalho quase todo sábado.'],
        ['Javier', 'Marta dijo que era la mejor fiesta de su vida y nos pidió que la repitiéramos el año que viene.', 'A Marta disse que foi a melhor festa da vida dela e pediu que a repetíssemos no ano que vem.'],
      ]),
      producao(5, 'Conte em voz alta uma ocasião em que alguém lhe pediu algo: «Una vez, mi amigo me pidió que…», «Yo le dije que…», «Esperaba que…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 46', [
      revisao(5, 'Faça cinco frases com um verbo principal no passado e um subjuntivo: «Quería que…», «Me pidió que…», «Dudaba que…», «Era importante que…», «Me alegré de que…».'),
      exercicios(20, [
        ouvir('Quería que vinieras', ['Quería que vinieras', 'Quiero que vengas', 'Querían que vinierais'], 'Quería que vinieras', 'Ouça o «-ras» final e o «quería» no imperfecto: é a forma de «tú» do passado.'),
        ouvir('Ojalá tuviera más tiempo', ['Ojalá tuviera más tiempo', 'Ojalá tenga más tiempo', 'Ojalá tuviéramos más tiempo'], 'Ojalá tuviera más tiempo', 'Ouça «tuviera», o desejo irreal no presente.'),
        ouvir('Me pidió que esperara', ['Me pidió que esperara', 'Me pide que espere', 'Me pidió que esperaba'], 'Me pidió que esperara', 'O pedido está no passado, por isso «esperara».'),
        ditado('Quisiera una mesa para dos', 'Escreva: Quisiera una mesa para dos.'),
        ditado('Pidió que habláramos despacio', 'Escreva: Pidió que habláramos despacio. Atenção ao acento em «habláramos».'),
        ditado('Dudaba que fuera verdad', 'Escreva: Dudaba que fuera verdad.'),
        mc('Qual é a forma de «yo» do imperfecto de subjuntivo de «tener»?', ['tuviera', 'tuve', 'tenga'], 'tuviera', 'O radical vem do indefinido «tuvieron»: tuvieron, tuviera.'),
        mc('Qual é a forma de «ellos» do imperfecto de subjuntivo de «hacer»?', ['hicieran', 'hicieron', 'hagan'], 'hicieran', 'De «hicieron» tira-se «-ron» e acrescenta-se «-ran».'),
        mc('Qual é a forma de «nosotros» de «hablar» no imperfecto de subjuntivo?', ['habláramos', 'hablaramos', 'hablábamos'], 'habláramos', 'A forma de «nosotros» leva acento escrito antes da terminação.'),
        mc('Qual frase está correta?', ['Mi madre quería que estudiara medicina.', 'Mi madre quería que estudie medicina.', 'Mi madre quería que estudio medicina.'], 'Mi madre quería que estudiara medicina.', 'Verbo principal no passado pede imperfecto de subjuntivo.'),
        mc('Qual frase compara com algo irreal?', ['Habla como si fuera mi jefe.', 'Habla como si es mi jefe.', 'Habla como si será mi jefe.'], 'Habla como si fuera mi jefe.', '«Como si» pede imperfecto de subjuntivo.'),
        mc('Qual frase expressa um desejo difícil no presente?', ['Ojalá tuviera vacaciones.', 'Ojalá tengo vacaciones.', 'Ojalá tenía vacaciones.'], 'Ojalá tuviera vacaciones.', '«Ojalá» pede subjuntivo; com o imperfecto, o desejo é irreal ou difícil agora.'),
        lacuna('Esperaba que Ana ___ pronto. (llegar)', ['llegara', 'llegue', 'llega'], 'llegara', 'Esperaba (passado) pede imperfecto de subjuntivo.'),
        lacuna('Le pedí que ___ la verdad. (decir)', ['dijera', 'dijo', 'diga'], 'dijera', 'O radical vem de «dijeron».'),
        lacuna('Era importante que nosotros ___ allí. (estar)', ['estuviéramos', 'estemos', 'estuvimos'], 'estuviéramos', 'De «estuvieron», com acento na forma de «nosotros».'),
        lacuna('Buscaba un piso que ___ terraza. (tener)', ['tuviera', 'tiene', 'tenga'], 'tuviera', 'O piso é desconhecido; relativo com subjuntivo, no passado.'),
        lacuna('Salimos antes de que ___ la lluvia. (empezar)', ['empezara', 'empezó', 'empiece'], 'empezara', '«Antes de que» pede subjuntivo; aqui o contexto está no passado.'),
        ordem('Ordene: «Quería que vinieras.»', ['Quería', 'que', 'vinieras.'], 'Quería que vinieras.', 'Verbo principal, «que», subjuntivo.'),
        ordem('Ordene: «Me pidió que esperara.»', ['Me', 'pidió', 'que', 'esperara.'], 'Me pidió que esperara.', 'O pronome «me» vem antes do verbo conjugado.'),
        livre('Escreva em espanhol: Meus pais queriam que eu estudasse medicina.', 'Mis padres querían que yo estudiara medicina.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que a sua família ou os seus professores queriam que você fizesse na adolescência, e o que você mesmo desejava. Use «querían que…» e «ojalá…».'),
    ]),
  ],
});
