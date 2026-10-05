import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 12, titulo: 'Müssen, wollen e dürfen: obrigação, vontade e permissão', nivel: 'a1',
  objetivo: 'Usar «müssen» (ter que), «wollen» (querer) e «dürfen» (ter permissão) e ler as placas mais comuns, sempre com a moldura da frase.',
  nota: 'Você domina os modais do A1. Próxima aula: o imperativo.',
  sessoes: [
    sessao('S1', 'Müssen: ter que', [
      revisao(5, 'Escreva as 6 formas de «können» e uma frase com cada uma.'),
      palavras(8, [
        ['der Termin', 'der termín', 'compromisso, hora marcada', 'appointment'], ['die Hausaufgabe', 'di háus-aufgabe', 'lição de casa', 'homework'], ['pünktlich', 'púnktliç', 'pontual', 'punctual'], ['früh', 'frü', 'cedo', 'early'],
        ['spät', 'xpet', 'tarde (hora)', 'late'], ['sofort', 'zofórt', 'imediatamente', 'immediately'], ['heute Abend', 'hóite ábent', 'hoje à noite', 'tonight'], ['viel', 'fil', 'muito', 'a lot'],
      ]),
      gramatica(14, 'Müssen: obrigação e necessidade, passo a passo', 'PASSO 1: «müssen» expressa o que você TEM QUE fazer (obrigação ou necessidade): «Ich muss arbeiten» = eu tenho que trabalhar. PASSO 2: conjugue: ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen. O «ü» some no singular e, como em «können», «ich» e «er» são iguais, sem -t. PASSO 3: o segundo verbo vai para o FIM, no infinitivo: «Du musst pünktlich sein.» PASSO 4: pergunta: «Muss ich heute arbeiten?» PASSO 5: com verbo separável, ele fica INTEIRO no fim: «Ich muss um sieben Uhr aufstehen.» Em português usamos «ter que»; em alemão não existe um verbo «ter» aqui: o modal faz tudo sozinho.', {
        tag: 'Verbos',
        comparacao: 'o português diz «ter que» (verbo ter + que). O alemão tem um verbo próprio, «müssen», que se conjuga e deixa o outro verbo no infinitivo, no fim.',
        tabela: [
          { pronome: 'ich', müssen: 'muss', exemplo: 'Ich muss arbeiten.' }, { pronome: 'du', müssen: 'musst', exemplo: 'Du musst pünktlich sein.' }, { pronome: 'er / sie / es', müssen: 'muss', exemplo: 'Er muss früh aufstehen.' },
          { pronome: 'wir', müssen: 'müssen', exemplo: 'Wir müssen einkaufen.' }, { pronome: 'ihr', müssen: 'müsst', exemplo: 'Ihr müsst Hausaufgaben machen.' }, { pronome: 'sie / Sie', müssen: 'müssen', exemplo: 'Müssen Sie heute arbeiten?' },
        ],
        erros: [['Ich müssen arbeiten.', 'Ich muss arbeiten.', '«ich» pede «muss».'], ['Er musst früh aufstehen.', 'Er muss früh aufstehen.', 'No «er», sem -st nem -t.'], ['Ich muss aufstehe um sieben Uhr.', 'Ich muss um sieben Uhr aufstehen.', 'O infinitivo inteiro vai para o fim.']],
      }),
      producao(3, 'Diga 5 coisas que você tem que fazer hoje: «Ich muss …»'),
    ]),
    sessao('S2', 'Wollen: querer', [
      revisao(5, 'Escreva as 6 formas de «müssen» e 3 frases com verbos separáveis.'),
      palavras(8, [
        ['der Plan', 'der plan', 'plano', 'plan'], ['die Idee', 'di idé', 'ideia', 'idea'], ['vielleicht', 'filáiçt', 'talvez', 'maybe'], ['bestimmt', 'bextímt', 'com certeza', 'certainly'],
        ['allein', 'aláin', 'sozinho', 'alone'], ['zusammen', 'tsuzámen', 'juntos', 'together'], ['nächste Woche', 'néçste vórre', 'semana que vem', 'next week'], ['die Zukunft', 'di tsúkunft', 'futuro', 'future'],
      ]),
      gramatica(12, 'Wollen: querer, e a diferença para möchten', 'PASSO 1: «wollen» expressa uma vontade FIRME ou um plano: «Ich will nächste Woche nach Berlin fahren». PASSO 2: conjugue: ich will, du willst, er will, wir wollen, ihr wollt, sie wollen. Atenção: «ich» e «er» são «will», sem -t. PASSO 3: o infinitivo vai para o fim. PASSO 4: «möchten» é mais educado e suave («eu gostaria»); «wollen» é direto («eu quero»). Para pedir algo a um desconhecido, prefira «möchten»: «Ich möchte einen Kaffee», não «Ich will einen Kaffee», que soa seco.', {
        tag: 'Verbos',
        tabelas: [
          { titulo: 'wollen', linhas: [
            { pronome: 'ich', wollen: 'will', exemplo: 'Ich will Deutsch lernen.' }, { pronome: 'du', wollen: 'willst', exemplo: 'Was willst du machen?' }, { pronome: 'er / sie / es', wollen: 'will', exemplo: 'Sie will nach Berlin fahren.' },
            { pronome: 'wir', wollen: 'wollen', exemplo: 'Wir wollen zusammen kochen.' }, { pronome: 'ihr', wollen: 'wollt', exemplo: 'Wollt ihr ins Kino gehen?' }, { pronome: 'sie / Sie', wollen: 'wollen', exemplo: 'Was wollen Sie trinken?' },
          ] },
          { titulo: 'wollen × möchten', linhas: [
            { modal: 'wollen', sentido: 'quero (firme, plano)', exemplo: 'Ich will heute Abend zu Hause bleiben.' }, { modal: 'möchten', sentido: 'gostaria (educado, pedido)', exemplo: 'Ich möchte bitte einen Kaffee.' },
          ] },
        ],
        erros: [['Ich will einen Kaffee, bitte. (num café, a um desconhecido)', 'Ich möchte einen Kaffee, bitte.', '«wollen» soa seco; «möchten» é educado.'], ['Er willt gehen.', 'Er will gehen.', 'No «er», o modal não leva -t.']],
      }),
      producao(5, 'Diga 5 planos seus: «Ich will nächste Woche … Ich will vielleicht … Ich will bestimmt …»'),
    ]),
    sessao('S3', 'Dürfen: ter permissão, e as placas', [
      revisao(5, 'Escreva as 6 formas de «wollen» e a diferença entre «wollen» e «möchten».'),
      palavras(8, [
        ['verboten', 'ferbóten', 'proibido', 'forbidden'], ['erlaubt', 'erláupt', 'permitido', 'allowed'], ['der Eingang', 'der áin-gang', 'entrada', 'entrance'], ['der Ausgang', 'der áus-gang', 'saída', 'exit'],
        ['rauchen', 'ráurren', 'fumar', 'to smoke'], ['fotografieren', 'fotografíren', 'fotografar', 'to take photos'], ['das Schild', 'das xilt', 'placa', 'sign'], ['man', 'man', 'a gente, se (impessoal)', 'one, you'],
      ]),
      gramatica(12, 'Dürfen: ter permissão (e a palavra «man»)', 'PASSO 1: «dürfen» expressa PERMISSÃO: «Darf ich hier sitzen?» = posso sentar aqui? PASSO 2: conjugue: ich darf, du darfst, er darf, wir dürfen, ihr dürft, sie dürfen (o «ü» some no singular). PASSO 3: com «nicht», «dürfen» significa PROIBIDO: «Hier darf man nicht rauchen» = aqui não se pode fumar. PASSO 4: «man» é impessoal (como «a gente» ou «se»): «Hier darf man parken.» Ele leva o verbo na forma de «er». As placas usam o infinitivo ou o substantivo: «Rauchen verboten», «Parken erlaubt», «Eingang», «Ausgang».', {
        tag: 'Verbos',
        tabelas: [
          { titulo: 'dürfen', linhas: [
            { pronome: 'ich', dürfen: 'darf', exemplo: 'Darf ich hier sitzen?' }, { pronome: 'du', dürfen: 'darfst', exemplo: 'Du darfst hier nicht parken.' }, { pronome: 'er / sie / es / man', dürfen: 'darf', exemplo: 'Hier darf man nicht rauchen.' },
            { pronome: 'wir', dürfen: 'dürfen', exemplo: 'Wir dürfen hier fotografieren.' }, { pronome: 'ihr', dürfen: 'dürft', exemplo: 'Ihr dürft jetzt gehen.' }, { pronome: 'sie / Sie', dürfen: 'dürfen', exemplo: 'Dürfen Sie hier rauchen?' },
          ] },
          { titulo: 'As placas mais comuns', linhas: [
            { frase: 'Rauchen verboten', pt: 'Proibido fumar' }, { frase: 'Parken verboten', pt: 'Proibido estacionar' }, { frase: 'Fotografieren erlaubt', pt: 'Permitido fotografar' }, { frase: 'Eingang', pt: 'Entrada' }, { frase: 'Ausgang', pt: 'Saída' },
          ] },
        ],
        erros: [['Hier dürfen nicht rauchen.', 'Hier darf man nicht rauchen.', 'Falta o sujeito «man»; ele leva a forma «darf».'], ['Ich darfe hier sitzen?', 'Darf ich hier sitzen?', 'Pergunta: o modal vem primeiro e «ich» pede «darf».']],
      }),
      producao(5, 'Diga 5 regras de lugares que você conhece: «Hier darf man … / Hier darf man nicht …»'),
    ]),
    sessao('S4', 'Prática e diálogo', [
      revisao(5, 'Escreva uma frase com cada um dos 4 modais que você já conhece: können, müssen, wollen e dürfen.'),
      dialogo(7, 'Im Schwimmbad / Na piscina', 'Um funcionário explica as regras a um visitante.', [
        ['Bademeister', 'Entschuldigung, Sie dürfen hier nicht rauchen.', 'Com licença, o senhor não pode fumar aqui.'], ['Tom', 'Oh, das tut mir leid. Wo darf man rauchen?', 'Ah, desculpe. Onde se pode fumar?'], ['Bademeister', 'Draußen, vor dem Eingang. Hier ist es verboten.', 'Lá fora, na frente da entrada. Aqui é proibido.'],
        ['Tom', 'Danke. Muss ich auch die Schuhe ausziehen?', 'Obrigado. Eu também preciso tirar os sapatos?'], ['Bademeister', 'Ja, hier müssen alle die Schuhe ausziehen.', 'Sim, aqui todos precisam tirar os sapatos.'], ['Tom', 'Und darf ich mit der Kamera fotografieren?', 'E posso fotografar com a câmera?'],
        ['Bademeister', 'Nein, Fotografieren ist hier nicht erlaubt.', 'Não, fotografar não é permitido aqui.'],
      ]),
      exercicios(13, [
        lacuna('Ich ___ heute arbeiten. (müssen)', ['muss', 'musst', 'müssen'], 'muss', 'ich → muss.'), lacuna('Du ___ pünktlich sein. (müssen)', ['musst', 'muss', 'müsst'], 'musst', 'du → musst.'), lacuna('Ich ___ nächste Woche nach Berlin fahren. (wollen)', ['will', 'willst', 'wollen'], 'will', 'ich → will.'),
        lacuna('Wir ___ zusammen kochen. (wollen)', ['wollen', 'will', 'wollt'], 'wollen', 'wir → wollen.'), lacuna('___ ich hier sitzen? (dürfen)', ['Darf', 'Darfe', 'Dürfen'], 'Darf', 'ich → darf.'), lacuna('Hier ___ man nicht rauchen. (dürfen)', ['darf', 'dürfen', 'darfst'], 'darf', '«man» leva «darf».'),
        mc('«Hier darf man nicht parken» significa:', ['É proibido estacionar aqui', 'Não é preciso estacionar aqui', 'Ninguém quer estacionar aqui'], 'É proibido estacionar aqui', '«nicht dürfen» = proibido.'), mc('Para pedir um café a um desconhecido, o melhor é:', ['Ich möchte einen Kaffee.', 'Ich will einen Kaffee.', 'Ich muss einen Kaffee.'], 'Ich möchte einen Kaffee.', '«möchten» é educado.'),
        ordem('Ordene: «Eu tenho que me levantar às sete horas.»', ['Ich', 'muss', 'um', 'sieben', 'Uhr', 'aufstehen'], 'Ich muss um sieben Uhr aufstehen.', 'O separável fica inteiro no fim.'), ouvir('Hier darf man nicht rauchen', ['Hier darf man nicht rauchen', 'Hier muss man rauchen', 'Hier will man nicht rauchen'], 'Hier darf man nicht rauchen', '«darf» + «nicht» = proibido.'),
        ditado('Fotografieren ist hier nicht erlaubt', '«erlaubt» = permitido.'), mc('«Eingang» e «Ausgang» são:', ['entrada e saída', 'saída e entrada', 'chegada e partida'], 'entrada e saída', 'Ein = dentro; Aus = fora.'),
        livre('Escreva 5 frases: uma com «müssen», uma com «wollen», uma com «dürfen», uma proibição e uma permissão.', 'Ich muss arbeiten. Ich will nach Berlin fahren. Darf ich hier sitzen? Hier darf man nicht rauchen. Hier darf man fotografieren.'),
      ]),
      producao(5, 'Grave-se: diga o que você tem que fazer, o que você quer fazer e o que você pode ou não pode fazer num lugar público.'),
    ]),
  ],
});
