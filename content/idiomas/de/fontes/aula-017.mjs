import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 17, titulo: 'Casa e moradia: es gibt', nivel: 'a1',
  objetivo: 'Nomear os cômodos e os móveis, dizer o que existe com «es gibt» e «haben», descrever uma moradia (tamanho, aluguel) e entender um anúncio de aluguel.',
  nota: 'Você descreve a sua casa e entende um anúncio de aluguel. Próxima aula: tempo livre, clima e hobbies.',
  sessoes: [
    sessao('S1', 'Os cômodos e «es gibt»', [
      revisao(5, 'Escreva 6 profissões no masculino e no feminino.'),
      palavras(12, [
        ['das Haus', 'das haus', 'casa', 'house'], ['die Wohnung', 'di vônung', 'apartamento', 'flat'], ['das Zimmer', 'das tsímer', 'quarto, cômodo', 'room'], ['das Wohnzimmer', 'das vôn-tsímer', 'sala de estar', 'living room'],
        ['das Schlafzimmer', 'das xláf-tsímer', 'quarto de dormir', 'bedroom'], ['die Küche', 'di küçe', 'cozinha', 'kitchen'], ['das Bad', 'das bat', 'banheiro', 'bathroom'], ['der Flur', 'der flur', 'corredor, entrada', 'hall'],
        ['der Balkon', 'der balkóng', 'varanda', 'balcony'], ['der Garten', 'der gárten', 'jardim', 'garden'], ['das Sofa', 'das zôfa', 'sofá', 'sofa'], ['das Bett', 'das bet', 'cama', 'bed'],
      ]),
      gramatica(10, '«Es gibt»: dizer o que existe, passo a passo', 'PASSO 1: «es gibt» significa «há» ou «existe»: «Es gibt einen Balkon» = há uma varanda. PASSO 2: «es gibt» é uma expressão FIXA (não muda com o sujeito); o que EXISTE vai para o ACUSATIVO: no masculino, «einen» ou «keinen»: «Es gibt einen Garten», «Es gibt keinen Garten». Feminino, neutro e plural não mudam: «Es gibt eine Küche», «Es gibt ein Bad», «Es gibt zwei Zimmer». PASSO 3: para perguntar: «Gibt es einen Balkon?» PASSO 4: a diferença para «haben»: «haben» tem um dono («Die Wohnung hat einen Balkon»); «es gibt» só diz que existe («In der Wohnung gibt es einen Balkon»). Os dois levam o acusativo.', {
        tag: 'Verbos',
        comparacao: 'o português usa «há» ou «tem» («tem uma varanda»). O alemão tem «es gibt» (há) e «haben» (ter), e os dois pedem o acusativo, o caso do objeto direto.',
        tabela: [
          { genero: 'masculino', exemplo: 'Es gibt einen Balkon. / Es gibt keinen Garten.', pt: 'Há uma varanda. / Não há jardim.' }, { genero: 'feminino', exemplo: 'Es gibt eine Küche.', pt: 'Há uma cozinha.' }, { genero: 'neutro', exemplo: 'Es gibt ein Bad.', pt: 'Há um banheiro.' }, { genero: 'plural', exemplo: 'Es gibt zwei Zimmer.', pt: 'Há dois quartos.' },
          { genero: 'pergunta', exemplo: 'Gibt es hier einen Supermarkt?', pt: 'Há um supermercado por aqui?' },
        ],
        erros: [['Es gibt ein Balkon.', 'Es gibt einen Balkon.', 'O que existe vai para o acusativo: «Balkon» é masculino.'], ['Es gibt nicht Garten.', 'Es gibt keinen Garten.', 'Substantivo: «kein».'], ['Es geben zwei Zimmer.', 'Es gibt zwei Zimmer.', '«es gibt» não muda, mesmo no plural.']],
      }),
      producao(3, 'Descreva a sua casa em voz alta: «Es gibt eine Küche, ein Bad, ein Schlafzimmer …»'),
    ]),
    sessao('S2', 'Descrever a moradia', [
      revisao(5, 'Escreva 5 frases com «es gibt», uma delas negativa.'),
      palavras(8, [
        ['der Schrank', 'der xrank', 'armário', 'wardrobe'], ['der Kühlschrank', 'der kül-xrank', 'geladeira', 'fridge'], ['das Regal', 'das regál', 'estante', 'shelf'], ['der Fernseher', 'der férn-zeer', 'televisão', 'TV set'],
        ['die Dusche', 'di dúxe', 'chuveiro', 'shower'], ['die Miete', 'di míte', 'aluguel', 'rent'], ['hell', 'hel', 'claro, iluminado', 'bright'], ['dunkel', 'dúnkel', 'escuro', 'dark'],
      ]),
      gramatica(12, 'Descrever uma moradia, passo a passo', 'PASSO 1: «haben» diz o que a casa tem: «Die Wohnung hat drei Zimmer.» PASSO 2: pergunte «Wie viele Zimmer hat die Wohnung?» PASSO 3: os adjetivos vêm depois de «sein» e não mudam: «Die Küche ist klein und hell.» PASSO 4: o tamanho: «Die Wohnung hat sechzig Quadratmeter» (escreve-se 60 m²). PASSO 5: o aluguel: «Die Miete kostet sechshundert Euro im Monat.» PASSO 6: ONDE (Wo?) e PARA ONDE (Wohin?), com os pares da aula 9: «im Wohnzimmer» / «ins Wohnzimmer»; «in der Küche» / «in die Küche»; «im Bad» / «ins Bad»; «im Garten» / «in den Garten». Atenção: para a varanda, usa-se «auf»: «auf dem Balkon» / «auf den Balkon».', {
        tag: 'Preposições',
        tabela: [
          { comodo: 'das Wohnzimmer', wo: 'im Wohnzimmer', wohin: 'ins Wohnzimmer' }, { comodo: 'das Schlafzimmer', wo: 'im Schlafzimmer', wohin: 'ins Schlafzimmer' }, { comodo: 'die Küche', wo: 'in der Küche', wohin: 'in die Küche' }, { comodo: 'das Bad', wo: 'im Bad', wohin: 'ins Bad' },
          { comodo: 'der Flur', wo: 'im Flur', wohin: 'in den Flur' }, { comodo: 'der Garten', wo: 'im Garten', wohin: 'in den Garten' }, { comodo: 'der Balkon', wo: 'auf dem Balkon', wohin: 'auf den Balkon' },
        ],
        exemplos: [['Die Wohnung hat drei Zimmer und einen Balkon.', 'O apartamento tem três cômodos e uma varanda.'], ['Die Küche ist klein, aber hell.', 'A cozinha é pequena, mas iluminada.'], ['Ich bin in der Küche. Ich gehe ins Bad.', 'Estou na cozinha. Vou ao banheiro.']],
        erros: [['Die Küche ist kleine.', 'Die Küche ist klein.', 'Depois de «sein», o adjetivo não muda.'], ['Ich gehe in der Küche.', 'Ich gehe in die Küche.', 'Com movimento (Wohin?): «in die».']],
      }),
      producao(5, 'Descreva em voz alta uma moradia (a sua ou uma imaginária): cômodos, tamanho e aluguel.'),
    ]),
    sessao('S3', 'O anúncio e a visita', [
      revisao(5, 'Escreva uma frase para cada par: im / ins, in der / in die, im / in den.'),
      palavras(5, [['die Anzeige', 'di ántsaige', 'anúncio', 'advert'], ['mieten', 'míten', 'alugar', 'to rent'], ['ab sofort', 'ap zofórt', 'a partir de agora', 'immediately'], ['die Nebenkosten', 'di nében-kósten', 'despesas extras (água, luz, condomínio)', 'additional costs'], ['besichtigen', 'bezíçtigen', 'visitar (um imóvel)', 'to view']]),
      gramatica(10, 'Ler um anúncio de aluguel', 'Os anúncios são curtos e usam siglas. Aprenda as mais comuns: «Zi.» ou «-Zimmer-Wohnung» (cômodos), «m²» (metros quadrados, «Quadratmeter»), «€ / Monat» (euros por mês), «NK» ou «Nebenkosten» (despesas extras), «ab sofort» (disponível já), «Balkon», «Bad», «Kü.» (cozinha). Exemplo de anúncio (original): «Schöne 2-Zimmer-Wohnung, 55 m², Küche, Bad, Balkon. Miete 600 € im Monat plus Nebenkosten. Ab sofort frei.» Em português: «Bonito apartamento de 2 cômodos, 55 m², cozinha, banheiro, varanda. Aluguel de 600 € por mês mais despesas extras. Livre a partir de já.»', {
        tag: 'Tempo',
        tabela: [
          { sigla: '2-Zi.-Whg.', significado: 'apartamento de 2 cômodos (Zimmer-Wohnung)' }, { sigla: '55 m²', significado: '55 metros quadrados (fünfundfünfzig Quadratmeter)' }, { sigla: '600 € / Monat', significado: '600 euros por mês' }, { sigla: 'NK / Nebenkosten', significado: 'despesas extras: água, luz, lixo, condomínio' },
          { sigla: 'ab sofort', significado: 'disponível a partir de agora' }, { sigla: 'Kü., Bad, Balkon', significado: 'cozinha, banheiro, varanda' },
        ],
      }),
      dialogo(10, 'Eine Wohnung besichtigen / Visitar um apartamento', 'Uma candidata telefona a um proprietário.', [
        ['Mia', 'Guten Tag! Ich suche eine Wohnung. Haben Sie noch eine Wohnung frei?', 'Bom dia! Estou procurando um apartamento. O senhor ainda tem algum livre?'], ['Vermieter', 'Ja, ich habe eine Zwei-Zimmer-Wohnung. Sie hat eine Küche, ein Bad und einen Balkon.', 'Sim, tenho um apartamento de dois cômodos. Tem cozinha, banheiro e varanda.'], ['Mia', 'Wie groß ist die Wohnung?', 'Qual é o tamanho do apartamento?'],
        ['Vermieter', 'Sie hat fünfundfünfzig Quadratmeter.', 'Tem cinquenta e cinco metros quadrados.'], ['Mia', 'Und was kostet die Miete?', 'E quanto custa o aluguel?'], ['Vermieter', 'Sechshundert Euro im Monat, plus Nebenkosten.', 'Seiscentos euros por mês, mais despesas extras.'],
        ['Mia', 'Gibt es einen Garten?', 'Há um jardim?'], ['Vermieter', 'Nein, einen Garten gibt es nicht, aber es gibt einen Balkon.', 'Não, jardim não há, mas há uma varanda.'], ['Mia', 'Kann ich die Wohnung sehen?', 'Posso ver o apartamento?'], ['Vermieter', 'Natürlich. Kommen Sie morgen um zehn Uhr.', 'Claro. Venha amanhã às dez horas.'],
      ]),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva um anúncio de aluguel (3 linhas) para um apartamento imaginário.'),
      texto(5, 'Meine Wohnung / O meu apartamento', 'Meine Wohnung ist nicht groß, aber schön. Sie hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und eine Küche. Das Bad ist klein. Im Wohnzimmer gibt es ein Sofa, einen Tisch und ein Regal. Es gibt auch einen Balkon. Dort trinke ich morgens Kaffee. Die Miete kostet siebenhundert Euro im Monat.',
        'O meu apartamento não é grande, mas é bonito. Tem três cômodos: uma sala, um quarto e uma cozinha. O banheiro é pequeno. Na sala há um sofá, uma mesa e uma estante. Há também uma varanda. Lá eu tomo café de manhã. O aluguel custa setecentos euros por mês.',
        [['Wie viele Zimmer hat die Wohnung?', 'Drei'], ['Was gibt es im Wohnzimmer?', 'Ein Sofa, einen Tisch und ein Regal'], ['Was kostet die Miete?', 'Siebenhundert Euro im Monat']]),
      exercicios(15, [
        lacuna('Es gibt ___ Balkon. (um)', ['einen', 'ein', 'eine'], 'einen', 'Balkon é masculino: acusativo.'), lacuna('Es gibt ___ Küche. (uma)', ['eine', 'einen', 'ein'], 'eine', 'Küche é feminino.'), lacuna('Es gibt ___ Garten. (nenhum)', ['keinen', 'kein', 'keine'], 'keinen', 'Garten é masculino: keinen.'),
        lacuna('Die Wohnung ___ drei Zimmer. (haben)', ['hat', 'haben', 'hast'], 'hat', 'er/sie/es → hat.'), lacuna('Die Küche ist ___. (pequena)', ['klein', 'kleine', 'kleiner'], 'klein', 'Depois de «sein», o adjetivo não muda.'), lacuna('Ich bin ___ Küche. (na)', ['in der', 'im', 'in die'], 'in der', 'Wo? + «die»: in der.'),
        lacuna('Ich gehe ___ Bad. (ao)', ['ins', 'im', 'in der'], 'ins', 'Wohin? + «das»: ins.'), lacuna('Ich gehe ___ Garten. (ao)', ['in den', 'im', 'in dem'], 'in den', 'Wohin? + «der»: in den.'), mc('«Wie viele Zimmer hat die Wohnung?» pergunta:', ['quantos cômodos', 'qual o aluguel', 'qual o tamanho'], 'quantos cômodos', '«wie viele» = quantos.'),
        mc('55 m² se lê:', ['fünfundfünfzig Quadratmeter', 'fünfzigfünf Meter', 'fünfundfünfzig Meter'], 'fünfundfünfzig Quadratmeter', 'm² = Quadratmeter.'), mc('«Nebenkosten» são:', ['despesas extras', 'o aluguel', 'o depósito'], 'despesas extras', 'água, luz, condomínio.'),
        ordem('Ordene: «Há uma varanda.»', ['Es', 'gibt', 'einen', 'Balkon'], 'Es gibt einen Balkon.', 'es gibt + acusativo.'), ouvir('Gibt es einen Garten?', ['Gibt es einen Garten?', 'Hat die Wohnung einen Garten?', 'Es gibt keinen Garten.'], 'Gibt es einen Garten?', 'Pergunta com «es gibt».'),
        ditado('Die Miete kostet sechshundert Euro im Monat', 'sechshundert = 600.'), livre('Escreva 5 frases sobre a sua casa: cômodos, o que há, o tamanho, o aluguel e o seu cômodo favorito.', 'Meine Wohnung hat drei Zimmer. Es gibt einen Balkon. Sie hat sechzig Quadratmeter. Die Miete kostet siebenhundert Euro. Ich bin gern in der Küche.'),
      ]),
      producao(5, 'Grave-se mostrando a sua casa: cômodo por cômodo, com «es gibt», «haben» e adjetivos.'),
    ]),
  ],
});
