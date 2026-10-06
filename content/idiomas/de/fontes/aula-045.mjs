import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 45, titulo: 'Moradia, cidade e orientação', nivel: 'a2',
  objetivo: 'Procurar e alugar um apartamento (aluguel, andar, caução), dar e entender indicações de caminho com várias referências, e descrever um bairro com vantagens e desvantagens.',
  nota: 'Você aluga um apartamento, se orienta na cidade e descreve o bairro. Próxima aula: revisão e simulado do A2.',
  sessoes: [
    sessao('S1', 'Procurar um apartamento', [
      revisao(5, 'Escreva um e-mail formal de 5 linhas pedindo informações sobre um curso.'),
      palavras(8, [
        ['die Kaltmiete', 'di kált-míte', 'aluguel sem despesas', 'rent (excl. costs)'], ['die Warmmiete', 'di várm-míte', 'aluguel com despesas', 'rent (incl. costs)'], ['die Kaution', 'di kautsiôn', 'caução', 'deposit'], ['der Stock', 'der xtok', 'andar', 'floor'],
        ['das Erdgeschoss', 'das érd-gue-xos', 'térreo', 'ground floor'], ['der Aufzug', 'der áuf-tsuk', 'elevador', 'lift'], ['möbliert', 'möblíert', 'mobiliado', 'furnished'], ['der Vermieter', 'der fermíter', 'proprietário', 'landlord'],
      ]),
      gramatica(14, 'Alugar um apartamento, passo a passo', 'PASSO 1: nos anúncios, a «Kaltmiete» é o aluguel SEM as despesas; a «Warmmiete» inclui água, aquecimento e condomínio. PASSO 2: a «Kaution» é a caução, geralmente de até três aluguéis frios. PASSO 3: o andar: «im Erdgeschoss» (no térreo), «im ersten Stock» (no 1º andar), «im zweiten Stock», «im dritten Stock»: depois de «in» + Wo?, o dativo e o número ordinal levam «-en». PASSO 4: perguntas úteis: «Ist die Wohnung möbliert?», «Wie hoch ist die Kaution?», «In welchem Stock liegt die Wohnung?», «Gibt es einen Aufzug?», «Ab wann ist die Wohnung frei?» PASSO 5: pedir permissão: «Darf man Haustiere halten?» PASSO 6: despedida: «Ich nehme die Wohnung» (eu fico com o apartamento).', {
        tag: 'Frase',
        tabela: [
          { pergunta: 'Ist die Wohnung möbliert?', pt: 'O apartamento é mobiliado?' }, { pergunta: 'Wie hoch ist die Kaution?', pt: 'Qual é o valor da caução?' }, { pergunta: 'In welchem Stock liegt die Wohnung?', pt: 'Em que andar fica o apartamento?' }, { pergunta: 'Gibt es einen Aufzug?', pt: 'Há elevador?' },
          { pergunta: 'Ab wann ist die Wohnung frei?', pt: 'A partir de quando o apartamento está livre?' }, { pergunta: 'Darf man Haustiere halten?', pt: 'Pode-se ter animais de estimação?' },
        ],
        erros: [['Die Wohnung ist im dritte Stock.', 'Die Wohnung ist im dritten Stock.', 'Dativo masculino com ordinal: -en.'], ['Ich suche ein Wohnung.', 'Ich suche eine Wohnung.', '«Wohnung» é feminino: «eine».']],
      }),
      producao(3, 'Pergunte por 6 coisas importantes ao alugar um apartamento: aluguel, caução, andar, elevador, mobília e data.'),
    ]),
    sessao('S2', 'Dar o caminho', [
      revisao(5, 'Escreva 6 perguntas e respostas sobre um apartamento.'),
      palavras(8, [
        ['geradeaus', 'guerade-áus', 'em frente', 'straight ahead'], ['links', 'links', 'à esquerda', 'left'], ['rechts', 'réçts', 'à direita', 'right'], ['die Ampel', 'di ámpel', 'semáforo', 'traffic light'],
        ['die Kreuzung', 'di króitsung', 'cruzamento', 'crossing'], ['die Ecke', 'di éke', 'esquina', 'corner'], ['die Brücke', 'di brüke', 'ponte', 'bridge'], ['vorbei an', 'forbái an', 'passando por', 'past'],
      ]),
      gramatica(12, 'Descrever um caminho, passo a passo', 'PASSO 1: use o IMPERATIVO formal (aula 13) para dar o caminho: «Gehen Sie geradeaus», «Biegen Sie links ab» (virar), «Nehmen Sie die zweite Straße rechts.» PASSO 2: «bis zu» + dativo marca o limite: «bis zur Ampel» (zu der), «bis zum Bahnhof» (zu dem), «bis zur Kreuzung». PASSO 3: «an der Kreuzung» (Wo?, dativo) e «über die Brücke» (movimento: acusativo): «an der Kreuzung links», «über die Brücke». PASSO 4: «vorbei an» + dativo: «an der Bank vorbei» ou «vorbei an der Bank». PASSO 5: a posição: «auf der linken Seite» (do lado esquerdo), «auf der rechten Seite». PASSO 6: as ordens «die erste / zweite / dritte Straße»: «Nehmen Sie die dritte Straße links.»', {
        tag: 'Preposições',
        tabela: [
          { instrucao: 'em frente até o semáforo', frase: 'Gehen Sie geradeaus bis zur Ampel.' }, { instrucao: 'virar', frase: 'Biegen Sie links ab.' }, { instrucao: 'no cruzamento', frase: 'An der Kreuzung gehen Sie rechts.' }, { instrucao: 'atravessar a ponte', frase: 'Gehen Sie über die Brücke.' },
          { instrucao: 'passar por', frase: 'Gehen Sie an der Bank vorbei.' }, { instrucao: 'a segunda rua', frase: 'Nehmen Sie die zweite Straße links.' }, { instrucao: 'do lado', frase: 'Der Bahnhof ist auf der linken Seite.' },
        ],
        erros: [['Gehen Sie bis die Ampel.', 'Gehen Sie bis zur Ampel.', '«bis zu» + dativo.'], ['Gehen Sie über der Brücke.', 'Gehen Sie über die Brücke.', 'Movimento (Wohin?): acusativo.'], ['Der Bahnhof ist auf der linke Seite.', 'Der Bahnhof ist auf der linken Seite.', 'Dativo feminino: «-en».']],
      }),
      producao(5, 'Dê o caminho em voz alta de onde você está até um lugar conhecido, com pelo menos 5 instruções.'),
    ]),
    sessao('S3', 'Descrever o bairro', [
      revisao(5, 'Escreva um caminho com 6 instruções, do seu trabalho até a estação.'),
      gramatica(10, 'Vantagens, desvantagens e a mudança', 'PASSO 1: para falar do bairro: «Die Lage ist zentral / ruhig / laut.» PASSO 2: para vantagens e desvantagens, use «dass»: «Der Vorteil ist, dass die Wohnung zentral liegt.» «Der Nachteil ist, dass es laut ist.» PASSO 3: o que há por perto: «In der Nähe gibt es einen Supermarkt, eine Apotheke und eine Haltestelle.» PASSO 4: a mudança: «Ich ziehe nach Berlin um» (umziehen, separável): «Wir ziehen in eine größere Wohnung um.» PASSO 5: a comparação (aula 35): «Die neue Wohnung ist größer als die alte.»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'a localização', frase: 'Die Lage ist zentral und ruhig.' }, { funcao: 'vantagem', frase: 'Der Vorteil ist, dass alles in der Nähe ist.' }, { funcao: 'desvantagem', frase: 'Der Nachteil ist, dass es abends laut ist.' }, { funcao: 'o que há por perto', frase: 'In der Nähe gibt es einen Supermarkt.' }, { funcao: 'a mudança', frase: 'Wir ziehen in eine größere Wohnung um.' },
        ],
      }),
      dialogo(10, 'Wie komme ich zum Bahnhof? / Como chego à estação?', 'Um turista pede o caminho a uma passante.', [
        ['Tom', 'Entschuldigung, wie komme ich zum Bahnhof?', 'Com licença, como chego à estação?'], ['Passantin', 'Gehen Sie geradeaus bis zur Ampel.', 'Siga em frente até o semáforo.'], ['Tom', 'Bis zur Ampel. Und dann?', 'Até o semáforo. E depois?'],
        ['Passantin', 'Dann gehen Sie links und an der Kreuzung rechts.', 'Depois vire à esquerda e no cruzamento à direita.'], ['Tom', 'Links, und an der Kreuzung rechts. Ist es weit?', 'À esquerda, e no cruzamento à direita. É longe?'], ['Passantin', 'Nein, nur zehn Minuten zu Fuß.', 'Não, só dez minutos a pé.'],
        ['Passantin', 'Sie gehen über die Brücke, und der Bahnhof ist auf der linken Seite.', 'O senhor atravessa a ponte e a estação fica do lado esquerdo.'], ['Tom', 'Vielen Dank! Gibt es dort auch eine Apotheke?', 'Muito obrigado! Há também uma farmácia lá?'], ['Passantin', 'Ja, gegenüber dem Bahnhof, neben der Bank.', 'Sim, em frente à estação, ao lado do banco.'], ['Tom', 'Super, dann kann ich dort gleich etwas kaufen. Danke schön!', 'Ótimo, então posso comprar algo logo lá. Muito obrigado!'],
      ]),
      producao(5, 'Descreva o seu bairro em 8 frases: a localização, o que há por perto, uma vantagem e uma desvantagem.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 8 frases: duas sobre aluguel, duas sobre o caminho e quatro sobre o bairro.'),
      exercicios(20, [
        lacuna('Die Wohnung ist im ___ Stock. (terceiro)', ['dritten', 'dritte', 'dritter'], 'dritten', 'Dativo masculino com ordinal: -en.'), lacuna('Gehen Sie geradeaus bis ___ Ampel.', ['zur', 'zum', 'zu die'], 'zur', 'zu + der = zur.'), lacuna('Gehen Sie ___ die Brücke.', ['über', 'unter', 'neben'], 'über', 'atravessar.'),
        lacuna('Gehen Sie an der Bank ___.', ['vorbei', 'vor', 'bei'], 'vorbei', 'passando por.'), lacuna('Der Bahnhof ist auf der ___ Seite. (esquerda)', ['linken', 'linke', 'links'], 'linken', 'Dativo feminino: -en.'), lacuna('Nehmen Sie die ___ Straße links. (segunda)', ['zweite', 'zweiten', 'zwei'], 'zweite', 'Acusativo feminino: -e.'),
        mc('A «Kaltmiete» é:', ['o aluguel sem despesas', 'o aluguel com despesas', 'a caução'], 'o aluguel sem despesas', 'Despesas à parte.'), mc('«Das Erdgeschoss» é:', ['o térreo', 'o andar de cima', 'o porão'], 'o térreo', 'Piso 0.'), mc('«Der Vorteil ist, dass …» introduz:', ['uma vantagem', 'uma desvantagem', 'uma pergunta'], 'uma vantagem', 'Vantagem.'),
        ordem('Ordene: «Siga em frente até o semáforo.»', ['Gehen', 'Sie', 'geradeaus', 'bis', 'zur', 'Ampel'], 'Gehen Sie geradeaus bis zur Ampel.', 'Imperativo formal.'), ordem('Ordene: «Nós nos mudamos para um apartamento maior.»', ['Wir', 'ziehen', 'in', 'eine', 'größere', 'Wohnung', 'um'], 'Wir ziehen in eine größere Wohnung um.', 'Separável: «um» no fim.'), ouvir('Der Bahnhof ist auf der linken Seite', ['Der Bahnhof ist auf der linken Seite', 'Der Bahnhof ist auf der rechten Seite', 'Der Bahnhof ist hinter der Brücke'], 'Der Bahnhof ist auf der linken Seite', 'links = esquerda.'),
        ditado('Der Nachteil ist, dass es abends laut ist', '«dass» + verbo no fim.'), livre('Escreva 5 frases: uma pergunta sobre aluguel, duas de caminho, uma vantagem e uma desvantagem do bairro.', 'Ist die Wohnung möbliert? Gehen Sie geradeaus bis zur Ampel. Biegen Sie links ab. Der Vorteil ist, dass alles in der Nähe ist. Der Nachteil ist, dass es laut ist.'),
      ]),
      producao(5, 'Grave-se perguntando por um apartamento, dando um caminho e descrevendo o seu bairro.'),
    ]),
  ],
});
