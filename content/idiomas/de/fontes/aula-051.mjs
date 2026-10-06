import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 51, titulo: 'O passivo 2: Präteritum, Perfekt e alternativas', nivel: 'b1',
  objetivo: 'Usar o passivo no passado (wurde + Partizip II e ist … worden), o passivo sem sujeito e as alternativas «man» e «sich lassen», e reconhecer o passivo nos textos históricos e nas notícias.',
  nota: 'Você usa o passivo em todos os tempos mais comuns. Próxima aula: o Plusquamperfekt e as conjunções nachdem e bevor.',
  sessoes: [
    sessao('S1', 'O passivo no Präteritum', [
      revisao(5, 'Escreva 6 frases no passivo do presente, uma com modal e uma no estado.'),
      palavras(8, [
        ['das Rathaus', 'das rát-haus', 'prefeitura', 'town hall'], ['die Kirche', 'di kírçe', 'igreja', 'church'], ['das Schloss', 'das xlos', 'castelo', 'castle'], ['das Denkmal', 'das dénk-mal', 'monumento', 'monument'],
        ['gründen', 'gründen', 'fundar', 'to found'], ['zerstören', 'tsers-xtörren', 'destruir', 'to destroy'], ['renovieren', 'renovíren', 'reformar', 'to renovate'], ['eröffnen', 'erö-fnen', 'inaugurar', 'to open'],
      ]),
      gramatica(14, 'O passivo no passado, passo a passo', 'PASSO 1: o passivo do PASSADO (Präteritum) usa «WURDE» + Partizip II: «Das Rathaus wurde 1450 gebaut» (a prefeitura foi construída em 1450). PASSO 2: conjugue «wurde»: ich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden. PASSO 3: é a forma natural em TEXTOS históricos, notícias e relatos: «Das Schloss wurde 1200 gegründet», «Die Kirche wurde im Krieg zerstört.» PASSO 4: a moldura continua: «wurde» na 2ª posição, Partizip II no fim. PASSO 5: o agente aparece com «von + dativo»: «Das Rathaus wurde von einem Architekten gebaut.» PASSO 6: o passivo SEM SUJEITO usa «es» ou nada: «Gestern wurde gefeiert» (ontem se festejou).', {
        tag: 'Verbos',
        comparacao: 'o português usa «foi construída», «foram destruídos». O alemão usa «wurde/wurden» + Partizip II, e é a forma comum nos textos históricos e nas notícias.',
        tabela: [
          { pronome: 'ich', wurde: 'wurde', exemplo: 'Ich wurde 1990 geboren.' }, { pronome: 'er / sie / es', wurde: 'wurde', exemplo: 'Das Rathaus wurde 1450 gebaut.' }, { pronome: 'wir', wurde: 'wurden', exemplo: 'Wir wurden eingeladen.' }, { pronome: 'sie / Sie', wurde: 'wurden', exemplo: 'Die Kirchen wurden renoviert.' },
        ],
        erros: [['Das Rathaus wurde bauen.', 'Das Rathaus wurde gebaut.', 'Partizip II no fim.'], ['Die Kirchen wurde zerstört.', 'Die Kirchen wurden zerstört.', 'Plural: «wurden».'], ['Das Rathaus ist 1450 gebaut.', 'Das Rathaus wurde 1450 gebaut.', 'Passado histórico: «wurde».']],
      }),
      producao(3, 'Conte a história de um prédio ou de uma cidade em 6 frases com «wurde» e «wurden».'),
    ]),
    sessao('S2', 'O passivo no Perfekt e sem sujeito', [
      revisao(5, 'Escreva 6 frases no passivo no Präteritum, duas com «von».'),
      palavras(8, [
        ['worden', 'vôrden', '(particípio de werden no passivo)', '(been, passive)'], ['geworden', 'gueyôrden', 'tornado (werden como verbo)', 'become'], ['das Fest', 'das fest', 'festa', 'celebration'], ['feiern', 'fáiern', 'festejar', 'to celebrate'],
        ['tanzen', 'tántsen', 'dançar', 'to dance'], ['lachen', 'lárren', 'rir', 'to laugh'], ['der Besuch', 'der bezúrr', 'visita', 'visit'], ['die Stelle', 'di xtéle', 'vaga, lugar', 'job, spot'],
      ]),
      gramatica(12, 'Perfekt passivo e passivo sem sujeito', 'PASSO 1: o Perfekt passivo usa «SEIN» + Partizip II + «WORDEN»: «Das Auto ist repariert worden.» PASSO 2: atenção: no passivo, o particípio de «werden» é «WORDEN» (sem «ge-»); como verbo principal («tornar-se»), é «GEWORDEN»: «Es ist kalt geworden» (ficou frio). PASSO 3: na fala, prefira o Präteritum: «Das Auto wurde repariert.» O Perfekt passivo aparece mais na escrita formal. PASSO 4: o passivo SEM SUJEITO descreve a atividade, não o objeto: «Hier wird getanzt.» «Es wurde viel gelacht.» PASSO 5: se «es» está no começo e outro termo vem antes do verbo, «es» some: «Gestern wurde gefeiert.»', {
        tag: 'Verbos',
        tabela: [
          { tempo: 'Präteritum', frase: 'Das Auto wurde repariert.' }, { tempo: 'Perfekt', frase: 'Das Auto ist repariert worden.' }, { tempo: 'sem sujeito (presente)', frase: 'Hier wird getanzt.' }, { tempo: 'sem sujeito (passado)', frase: 'Es wurde viel gelacht. / Gestern wurde gefeiert.' }, { tempo: 'werden como verbo', frase: 'Es ist kalt geworden.' },
        ],
        erros: [['Das Auto ist repariert geworden.', 'Das Auto ist repariert worden.', 'No passivo: «worden».'], ['Es ist kalt worden.', 'Es ist kalt geworden.', '«werden» como verbo principal: «geworden».']],
      }),
      producao(5, 'Descreva uma festa ou um evento em 6 frases no passivo: «Es wurde getanzt. Es wurde viel gelacht.»'),
    ]),
    sessao('S3', 'Alternativas ao passivo', [
      revisao(5, 'Escreva 6 frases: passivo no Präteritum, no Perfekt e sem sujeito.'),
      gramatica(10, 'Man e «sich lassen»', 'PASSO 1: o alemão tem alternativas ao passivo. A mais simples é «MAN» + verbo ativo: «Man hat das Auto repariert» (consertaram o carro). PASSO 2: «sich lassen» + infinitivo expressa POSSIBILIDADE no passivo: «Das lässt sich leicht lösen» (isto se resolve facilmente). Forma: «lassen» conjugado + «sich» + infinitivo no fim: «Das Problem lässt sich lösen.» PASSO 3: os adjetivos em «-bar» e «-lich» também expressam possibilidade: «lösbar» (solúvel), «essbar» (comestível). PASSO 4: a escolha: o passivo (foco no processo), «man» (informal), «sich lassen» (possibilidade).', {
        tag: 'Verbos',
        tabela: [
          { alternativa: 'passivo', frase: 'Das Auto wurde repariert.' }, { alternativa: 'man (informal)', frase: 'Man hat das Auto repariert.' }, { alternativa: 'sich lassen (possibilidade)', frase: 'Das Problem lässt sich leicht lösen.' }, { alternativa: 'adjetivo em -bar', frase: 'Das Problem ist lösbar.' },
        ],
      }),
      dialogo(10, 'Eine Stadtführung / Um passeio guiado', 'Uma guia mostra a cidade a um turista.', [
        ['Führerin', 'Willkommen in der Altstadt! Das Rathaus wurde im Jahr 1450 gebaut.', 'Bem-vindos à cidade velha! A prefeitura foi construída em 1450.'], ['Tom', 'Wurde es später renoviert?', 'Foi reformada depois?'], ['Führerin', 'Ja, es wurde 1990 renoviert. Die Kirche wurde im Krieg zerstört und danach neu gebaut.', 'Sim, foi reformada em 1990. A igreja foi destruída na guerra e reconstruída depois.'],
        ['Tom', 'Und das Schloss?', 'E o castelo?'], ['Führerin', 'Das Schloss wurde schon im Jahr 1200 gegründet. Heute wird es als Museum genutzt.', 'O castelo foi fundado já em 1200. Hoje é usado como museu.'], ['Tom', 'Wird es täglich geöffnet?', 'Abre todos os dias?'],
        ['Führerin', 'Ja, es wird jeden Tag von neun bis siebzehn Uhr geöffnet.', 'Sim, abre todos os dias das nove às dezessete.'], ['Tom', 'Wann ist das Denkmal eröffnet worden?', 'Quando o monumento foi inaugurado?'], ['Führerin', 'Das Denkmal ist erst vor zehn Jahren eröffnet worden.', 'O monumento só foi inaugurado há dez anos.'],
      ]),
      producao(5, 'Seja você o guia: apresente em voz alta a história da sua cidade ou de um prédio, com o passivo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto histórico de 6 frases no passivo no Präteritum.'),
      exercicios(20, [
        lacuna('Das Rathaus ___ 1450 gebaut. (werden, Präteritum)', ['wurde', 'wird', 'ist'], 'wurde', 'Passivo no passado.'), lacuna('Die Kirchen ___ zerstört. (werden, Präteritum)', ['wurden', 'wurde', 'werden'], 'wurden', 'Plural: wurden.'), lacuna('Das Auto ist repariert ___. (Perfekt passivo)', ['worden', 'geworden', 'werden'], 'worden', 'Passivo: worden.'),
        lacuna('Es ist kalt ___. (tornar-se)', ['geworden', 'worden', 'werden'], 'geworden', 'werden como verbo: geworden.'), lacuna('Hier ___ getanzt. (werden)', ['wird', 'wurde', 'ist'], 'wird', 'Passivo sem sujeito.'), mc('O passivo do Präteritum forma-se com:', ['wurde + Partizip II', 'war + Partizip II', 'wird + infinitivo'], 'wurde + Partizip II', 'Passado.'),
        mc('O Perfekt passivo termina com:', ['worden', 'geworden', 'gewesen'], 'worden', 'sein + Partizip II + worden.'), mc('«Man» é uma alternativa:', ['informal ao passivo', 'formal ao passivo', 'ao futuro'], 'informal ao passivo', 'Man hat das Auto repariert.'), mc('«Das lässt sich leicht lösen» expressa:', ['possibilidade', 'obrigação', 'proibição'], 'possibilidade', 'sich lassen.'),
        ordem('Ordene: «O castelo foi fundado em 1200.»', ['Das', 'Schloss', 'wurde', '1200', 'gegründet'], 'Das Schloss wurde 1200 gegründet.', 'wurde + Partizip II.'), ordem('Ordene: «Ontem se festejou.»', ['Gestern', 'wurde', 'gefeiert'], 'Gestern wurde gefeiert.', 'Passivo sem sujeito.'), ouvir('Das Denkmal ist erst vor zehn Jahren eröffnet worden', ['Das Denkmal ist erst vor zehn Jahren eröffnet worden', 'Das Denkmal wird heute eröffnet', 'Das Denkmal hat zehn Jahre gedauert'], 'Das Denkmal ist erst vor zehn Jahren eröffnet worden', 'Perfekt passivo.'),
        ditado('Es wurde viel gelacht', 'Passivo sem sujeito.'), livre('Escreva 5 frases: duas no passivo do Präteritum, uma no Perfekt passivo, uma sem sujeito e uma com «man» ou «sich lassen».', 'Das Rathaus wurde 1450 gebaut. Die Kirche wurde zerstört. Das Denkmal ist eröffnet worden. Hier wird getanzt. Das Problem lässt sich lösen.'),
      ]),
      producao(5, 'Grave-se contando a história de um lugar, com o passivo no passado.'),
    ]),
  ],
});
