import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 27, titulo: 'Dativo 2: os verbos que pedem dativo', nivel: 'a2',
  objetivo: 'Usar os verbos que pedem dativo para a pessoa (helfen, danken, gehören, gefallen, schmecken, passen, fehlen, antworten, gratulieren, glauben) e as expressões de sensação com «mir» e «dir».',
  nota: 'Você usa os verbos com dativo e as expressões com «mir». Próxima aula: as preposições que pedem dativo.',
  sessoes: [
    sessao('S1', 'Helfen, danken, gehören', [
      revisao(5, 'Escreva os pronomes no dativo para as nove pessoas e 5 frases com eles.'),
      palavras(8, [
        ['helfen', 'hélfen', 'ajudar', 'to help'], ['danken', 'dánken', 'agradecer', 'to thank'], ['gehören', 'guehörren', 'pertencer', 'to belong'], ['antworten', 'ántvorten', 'responder', 'to answer'],
        ['gratulieren', 'gratulíren', 'parabenizar', 'to congratulate'], ['der Geburtstag', 'der guebúrts-tak', 'aniversário', 'birthday'], ['die Hilfe', 'di hílfe', 'ajuda', 'help'], ['der Umzug', 'der úm-tsuk', 'mudança (de casa)', 'move'],
      ]),
      gramatica(14, 'Verbos que pedem dativo: a pessoa vai para o dativo, passo a passo', 'PASSO 1: alguns verbos alemães pedem DATIVO para a pessoa, mesmo quando em português o complemento é direto: «Ich helfe dir» (eu ajudo você), «Ich danke dir» (agradeço a você), «Das Buch gehört mir» (o livro é meu). PASSO 2: esses verbos NÃO usam acusativo para a pessoa: dizer «Ich helfe dich» está errado. PASSO 3: decore o verbo junto com «wem?»: «helfen + dativo», «danken + dativo», «gehören + dativo». PASSO 4: «helfen» troca e por i no «du» e no «er» (du hilfst, er hilft). PASSO 5: «gratulieren» leva «zu» + dativo para o motivo: «Ich gratuliere dir zum Geburtstag.» PASSO 6: «antworten» leva dativo para a pessoa e «auf» + acusativo para o que se responde: «Er antwortet dem Chef auf die E-Mail.»', {
        tag: 'Casos',
        comparacao: 'em português dizemos «eu ajudo você» e «eu agradeço a você»: a mesma ideia ora é objeto direto, ora indireto. Em alemão a regra é fixa: com «helfen», «danken» e «gehören», a pessoa vai SEMPRE para o dativo.',
        tabela: [
          { verbo: 'helfen', exemplo: 'Ich helfe dir.', pt: 'Eu ajudo você.' }, { verbo: 'danken', exemplo: 'Er dankt der Lehrerin.', pt: 'Ele agradece à professora.' }, { verbo: 'gehören', exemplo: 'Das Buch gehört mir.', pt: 'O livro é meu.' }, { verbo: 'antworten', exemplo: 'Er antwortet dem Chef.', pt: 'Ele responde ao chefe.' },
          { verbo: 'gratulieren', exemplo: 'Wir gratulieren dir zum Geburtstag.', pt: 'Parabenizamos você pelo aniversário.' },
        ],
        erros: [['Ich helfe dich.', 'Ich helfe dir.', '«helfen» pede dativo.'], ['Das Buch gehört ich.', 'Das Buch gehört mir.', '«gehören» pede dativo.'], ['Er hilfst mir.', 'Er hilft mir.', 'No «er»: «hilft».']],
      }),
      producao(3, 'Diga 6 frases com «helfen», «danken» e «gehören»: «Ich helfe meiner Mutter. Das Handy gehört mir.»'),
    ]),
    sessao('S2', 'Gefallen, schmecken, passen e outros', [
      revisao(5, 'Escreva uma frase com cada verbo da sessão anterior.'),
      palavras(8, [
        ['gefallen', 'guefálen', 'agradar, gostar de', 'to like'], ['schmecken', 'xméken', 'ter gosto, agradar ao paladar', 'to taste'], ['passen', 'pássen', 'servir, combinar', 'to fit'], ['fehlen', 'félen', 'faltar', 'to be missing'],
        ['glauben', 'gláuben', 'acreditar (em alguém)', 'to believe'], ['folgen', 'fólguen', 'seguir', 'to follow'], ['zuhören', 'tsú-hörren', 'escutar', 'to listen to'], ['wehtun', 'vé-tun', 'doer', 'to hurt'],
      ]),
      gramatica(12, 'Gefallen, schmecken, passen: o jeito alemão de «gostar»', 'PASSO 1: «gefallen» inverte a frase: quem gosta vai para o DATIVO e a coisa de que gosta é o sujeito: «Das Kleid gefällt mir» (o vestido agrada a mim = eu gosto do vestido). PASSO 2: o verbo concorda com a COISA: «Die Schuhe gefallen mir» (plural). PASSO 3: «schmecken» fala do sabor: «Die Suppe schmeckt mir (gut).» PASSO 4: «passen» é «servir» e «combinar»: «Die Jacke passt mir», «Die Farbe passt dir gut.» PASSO 5: «fehlen» (faltar): «Mir fehlt Zeit.» PASSO 6: «glauben», «folgen» e «zuhören» também pedem dativo para a pessoa: «Ich glaube dir.» «Sie folgt ihm.» «Hör mir zu!» PASSO 7: «wehtun» (doer): «Der Kopf tut mir weh.» Atenção: «gefallen» troca a por ä no «er» (es gefällt).', {
        tag: 'Casos',
        tabela: [
          { verbo: 'gefallen', exemplo: 'Das Kleid gefällt mir.', pt: 'Eu gosto do vestido.' }, { verbo: 'schmecken', exemplo: 'Die Suppe schmeckt mir.', pt: 'Eu gosto da sopa (do sabor).' }, { verbo: 'passen', exemplo: 'Die Jacke passt mir.', pt: 'A jaqueta serve em mim.' }, { verbo: 'fehlen', exemplo: 'Mir fehlt Zeit.', pt: 'Falta-me tempo.' },
          { verbo: 'glauben', exemplo: 'Ich glaube dir.', pt: 'Eu acredito em você.' }, { verbo: 'zuhören', exemplo: 'Hör mir bitte zu!', pt: 'Escute-me, por favor!' }, { verbo: 'wehtun', exemplo: 'Der Kopf tut mir weh.', pt: 'A minha cabeça dói.' },
        ],
        erros: [['Das Kleid gefällt ich.', 'Das Kleid gefällt mir.', 'Quem gosta vai para o dativo.'], ['Die Schuhe gefällt mir.', 'Die Schuhe gefallen mir.', 'O verbo concorda com a COISA de que se gosta.'], ['Ich gefalle das Kleid.', 'Das Kleid gefällt mir.', 'A coisa é o sujeito.']],
      }),
      producao(5, 'Diga 6 frases sobre o que lhe agrada: «Das Haus gefällt mir. Die Suppe schmeckt mir. Die Jacke passt mir.»'),
    ]),
    sessao('S3', 'Sensações com «mir» e «dir», e diálogo', [
      revisao(5, 'Escreva os verbos com dativo das duas sessões e um exemplo de cada.'),
      gramatica(10, '«Mir ist kalt», «Wie geht es dir?»: sensações com dativo', 'PASSO 1: para falar de SENSAÇÕES, o alemão põe a pessoa no dativo e usa «sein» (ou outro verbo) com um adjetivo: «Mir ist kalt» (estou com frio), «Mir ist warm», «Mir ist schlecht» (estou enjoado), «Mir ist langweilig» (estou entediado). PASSO 2: para perguntar: «Ist dir kalt?» PASSO 3: «Wie geht es dir?» (como vai você?) e «Mir geht es gut» (vou bem) usam o mesmo padrão. PASSO 4: com o «Sie» formal: «Wie geht es Ihnen?» PASSO 5: «Es tut mir leid» (sinto muito): «Es tut mir leid, ich kann nicht kommen.»', {
        tag: 'Casos',
        tabela: [
          { frase: 'Mir ist kalt.', pt: 'Estou com frio.' }, { frase: 'Mir ist warm.', pt: 'Estou com calor.' }, { frase: 'Mir ist schlecht.', pt: 'Estou enjoado.' }, { frase: 'Wie geht es dir?', pt: 'Como vai você?' }, { frase: 'Mir geht es gut. / Mir geht es nicht gut.', pt: 'Vou bem. / Não vou bem.' }, { frase: 'Es tut mir leid.', pt: 'Sinto muito.' },
        ],
      }),
      dialogo(10, 'Was fehlt dir? / O que você tem?', 'Dois amigos se encontram; um deles está mal.', [
        ['Lea', 'Hallo Paul! Wie geht es dir?', 'Oi, Paul! Como vai você?'], ['Paul', 'Nicht so gut. Mir ist schlecht, und der Kopf tut mir weh.', 'Nem tão bem. Estou enjoado e a minha cabeça dói.'], ['Lea', 'Oh, das tut mir leid! Möchtest du etwas trinken?', 'Ah, sinto muito! Você quer beber alguma coisa?'],
        ['Paul', 'Ja, bitte. Ein Tee schmeckt mir jetzt gut.', 'Sim, por favor. Um chá me cai bem agora.'], ['Lea', 'Ich helfe dir. Setz dich hin.', 'Eu ajudo você. Sente-se.'], ['Paul', 'Danke! Du bist sehr nett.', 'Obrigado! Você é muito gentil.'],
        ['Lea', 'Gehört die Jacke dort dir? Ist dir kalt?', 'A jaqueta ali é sua? Você está com frio?'], ['Paul', 'Ja, die Jacke gehört mir. Mir ist ein bisschen kalt.', 'Sim, a jaqueta é minha. Estou com um pouco de frio.'], ['Lea', 'Hier, nimm sie. Gefällt sie dir?', 'Aqui, pegue-a. Ela agrada a você?'], ['Paul', 'Ja, sie passt mir gut. Danke!', 'Sim, serve bem em mim. Obrigado!'],
      ]),
      producao(5, 'Pergunte a um amigo como ele está e responda com as expressões «Mir ist …» e «Mir geht es …».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases com verbos que pedem dativo e 2 com «Mir ist …».'),
      exercicios(20, [
        lacuna('Ich helfe ___. (a você)', ['dir', 'dich', 'du'], 'dir', '«helfen» pede dativo.'), lacuna('Das Buch gehört ___. (a mim)', ['mir', 'mich', 'ich'], 'mir', '«gehören» pede dativo.'), lacuna('Wir danken ___ Lehrerin. (à)', ['der', 'die', 'dem'], 'der', 'Feminino dativo.'),
        lacuna('Er antwortet ___ Chef. (ao)', ['dem', 'den', 'der'], 'dem', 'Masculino dativo.'), lacuna('Er ___ mir. (helfen)', ['hilft', 'hilfst', 'helft'], 'hilft', 'er → hilft.'), lacuna('Das Kleid ___ mir. (gefallen)', ['gefällt', 'gefallen', 'gefallt'], 'gefällt', 'er/sie/es → gefällt.'),
        lacuna('Die Schuhe ___ mir. (gefallen)', ['gefallen', 'gefällt', 'gefallt'], 'gefallen', 'Plural: gefallen.'), lacuna('Die Jacke ___ mir gut. (passen)', ['passt', 'passen', 'pass'], 'passt', 'es → passt.'), lacuna('___ ist kalt. (a mim)', ['Mir', 'Ich', 'Mich'], 'Mir', 'Sensação com dativo.'),
        mc('«Wie geht es dir?» pergunta:', ['como você está', 'onde você vai', 'quem é você'], 'como você está', 'Fórmula com dativo.'), mc('«Es tut mir leid» significa:', ['Sinto muito', 'Eu preciso disso', 'Eu gosto disso'], 'Sinto muito', 'Fórmula fixa.'), mc('Qual frase está certa?', ['Ich helfe dir.', 'Ich helfe dich.', 'Ich helfe du.'], 'Ich helfe dir.', 'Dativo.'),
        ordem('Ordene: «O vestido agrada a mim.»', ['Das', 'Kleid', 'gefällt', 'mir'], 'Das Kleid gefällt mir.', 'A coisa é o sujeito.'), ouvir('Der Kopf tut mir weh', ['Der Kopf tut mir weh', 'Der Kopf tut dich weh', 'Mir ist der Kopf kalt'], 'Der Kopf tut mir weh', '«wehtun» + dativo.'), ditado('Ich gratuliere dir zum Geburtstag', 'gratulieren + dativo + zu.'),
        livre('Escreva 5 frases: ajuda, agradecimento, posse, gosto e uma sensação.', 'Ich helfe meiner Mutter. Ich danke dir. Das Handy gehört mir. Das Kleid gefällt mir. Mir ist kalt.'),
      ]),
      producao(5, 'Grave-se: peça ajuda, agradeça, diga o que lhe pertence, o que lhe agrada e como você se sente.'),
    ]),
  ],
});
