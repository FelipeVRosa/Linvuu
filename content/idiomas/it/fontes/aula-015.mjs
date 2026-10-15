import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 15, titulo: 'Compras, roupas, cores, questo e quello', nivel: 'a1',
  objetivo: 'Nomear roupas e cores com a concordância certa, perguntar preço e tamanho, pedir para provar, e escolher com «questo» e «quello».',
  nota: 'Você compra roupa, pergunta o preço, pede outro tamanho e aponta o que quer com «questo» e «quello». Próxima aula: piacere e preferências.',
  sessoes: [
    sessao('S1', 'Roupas e cores', [
      revisao(5, 'Conte em voz alta o seu dia, do despertar ao deitar, com «prima, poi, dopo, infine». Depois diga o que você veste de manhã: «Mi vesto…».'),
      palavras(8, [
        ['la camicia', 'la kamítcha', 'a camisa', ''], ['i pantaloni', 'i pantalôni', 'as calças', ''], ['la gonna', 'la gónna', 'a saia', ''], ['il vestito', 'il vestíto', 'o vestido, o terno', ''], ['la giacca', 'la djákka', 'a jaqueta, o paletó', ''], ['le scarpe', 'le skárpe', 'os sapatos', ''], ['la maglietta', 'la malhêtta', 'a camiseta', ''], ['il cappotto', 'il kappótto', 'o casaco', ''],
      ]),
      gramatica(12, 'Cores e concordância', 'PASSO 1: as cores que terminam em «-o» têm quatro formas, como os adjetivos da aula 2: «rosso, rossa, rossi, rosse». PASSO 2: as cores em «-e» têm duas: «verde, verdi», «marrone, marroni», «arancione, arancioni». PASSO 3: três cores são invariáveis, nunca mudam: «blu», «rosa» e «viola». Também «beige» e as cores compostas como «verde scuro». PASSO 4: o adjetivo de cor vem depois do substantivo e concorda com ele: «una gonna rossa», «due camicie bianche», «scarpe nere». PASSO 5: para perguntar a cor: «Di che colore è?» / «Di che colore sono?». PASSO 6: «azzurro» é o azul claro; «blu» é o azul-marinho (escuro); o céu é «azzurro». PASSO 7: o plural de «camicia» é «camicie», e o plural de «scarpa» é «scarpe». PASSO 8: para dizer o que alguém veste, use «indossare», «portare» ou «mettersi»: «Oggi indosso una giacca blu.» «Mi metto le scarpe nere.» PASSO 9: «i pantaloni», «i jeans» e «gli occhiali» (os óculos) são plurais: «I pantaloni sono neri.»', {
        tag: 'Cores e roupas',
        comparacao: 'em português dizemos «azul» para tudo; o italiano distingue «azzurro» (azul claro) de «blu» (azul-marinho). E em português «calça» é singular (ou «calças»), enquanto o italiano usa na língua corrente «i pantaloni», no plural. Os adjetivos de cor vêm depois do nome, como em português, mas concordam em gênero e número, exceto «blu», «rosa» e «viola».',
        tabela: [
          { cor: 'rosso (vermelho)', masculino: 'rosso, rossi', feminino: 'rossa, rosse', exemplo: 'una gonna rossa' }, { cor: 'bianco (branco)', masculino: 'bianco, bianchi', feminino: 'bianca, bianche', exemplo: 'due camicie bianche' }, { cor: 'nero (preto)', masculino: 'nero, neri', feminino: 'nera, nere', exemplo: 'scarpe nere' },
          { cor: 'verde (verde)', masculino: 'verde, verdi', feminino: 'verde, verdi', exemplo: 'un vestito verde' }, { cor: 'giallo (amarelo)', masculino: 'giallo, gialli', feminino: 'gialla, gialle', exemplo: 'una maglietta gialla' }, { cor: 'azzurro (azul claro)', masculino: 'azzurro, azzurri', feminino: 'azzurra, azzurre', exemplo: 'una camicia azzurra' },
          { cor: 'blu (azul-marinho)', masculino: 'blu', feminino: 'blu', exemplo: 'una giacca blu, due giacche blu' }, { cor: 'grigio (cinza)', masculino: 'grigio, grigi', feminino: 'grigia, grigie', exemplo: 'pantaloni grigi' },
        ],
        erros: [['una gonna rosso', 'una gonna rossa', 'O adjetivo concorda com o gênero.'], ['due giacche blue', 'due giacche blu', '«Blu» é invariável e escreve-se assim.'], ['una rossa gonna', 'una gonna rossa', 'A cor vem depois do substantivo.'], ['Il pantalone è nero.', 'I pantaloni sono neri.', 'Na língua corrente, usa-se «pantaloni» no plural.']],
      }),
      producao(5, 'Descreva em voz alta a roupa que você usa hoje, com cor: «Oggi indosso… Porto… Le scarpe sono…»'),
    ]),
    sessao('S2', 'Perguntar preço, tamanho e pagar', [
      revisao(4, 'Diga em voz alta seis peças de roupa, cada uma com uma cor e a concordância certa.'),
      palavras(6, [
        ['il prezzo', 'il prêttso', 'o preço', ''], ['costare', 'kostáre', 'custar', ''], ['la taglia', 'la tálha', 'o tamanho (roupa)', ''], ['il numero', 'il número', 'o número (sapatos)', ''], ['provare', 'prováre', 'provar, experimentar', ''], ['il camerino', 'il kameríno', 'o provador', ''],
      ]),
      gramatica(12, 'Quanto costa? e outras frases de loja', 'PASSO 1: para perguntar o preço de um item, use «Quanto costa?»; de vários, «Quanto costano?»: «Quanto costa questa giacca?» «Quanto costano queste scarpe?» PASSO 2: a resposta: «Costa quaranta euro.» «Costano settanta euro.» Em italiano, «euro» não leva «s». PASSO 3: os números acima de 100: «cento», «duecento», «trecento», «cinquecento», «mille», «duemila». Nos preços, diz-se «centoventi euro» (120 €). PASSO 4: para o tamanho de roupas, use «taglia»: «Che taglia porta?» / «Porto la quarantadue.» Para sapatos, «numero»: «Che numero porta?» PASSO 5: para pedir para experimentar: «Posso provare questa giacca?» / «Posso provarla?». PASSO 6: para dizer que a peça é grande, pequena, justa ou larga demais: «È troppo grande», «È troppo piccola», «È troppo stretta», «È troppo larga». PASSO 7: para decidir: «La prendo» (levo; feminino), «Lo prendo» (levo; masculino), «Li prendo» (plural masc.), «Le prendo» (plural fem.). Por ora, decore o bloco. PASSO 8: para pagar: «Pago in contanti» (em dinheiro), «Pago con la carta», «Dov\'è la cassa?». PASSO 9: «Vorrei una taglia più grande» (um tamanho maior) e «una taglia più piccola» são pedidos comuns.', {
        tag: 'Compras',
        comparacao: 'em português a calça é «tamanho 42» e o sapato é «número 38»; o italiano segue a mesma divisão: «taglia» para roupa e «numero» para calçado. As tabelas de tamanho são diferentes entre os países: confira sempre. «Troppo» quer dizer «demais» e vem antes do adjetivo, como em «troppo caro» (caro demais).',
        tabela: [
          { italiano: 'Quanto costa?', pt: 'Quanto custa?', uso: 'um item' }, { italiano: 'Quanto costano?', pt: 'Quanto custam?', uso: 'vários itens' }, { italiano: 'Che taglia porta?', pt: 'Que tamanho a senhora usa?', uso: 'roupa, formal' }, { italiano: 'Che numero porta?', pt: 'Que número o senhor calça?', uso: 'sapato, formal' },
          { italiano: 'Posso provare?', pt: 'Posso experimentar?', uso: 'provador' }, { italiano: 'È troppo grande.', pt: 'É grande demais.', uso: 'tamanho' }, { italiano: 'La prendo.', pt: 'Eu levo (esta).', uso: 'decidir' }, { italiano: 'Pago con la carta.', pt: 'Pago com cartão.', uso: 'pagar' },
        ],
        erros: [['Quanto costa queste scarpe?', 'Quanto costano queste scarpe?', 'Plural pede «costano».'], ['Venti euros.', 'Venti euro.', 'Em italiano «euro» não varia.'], ['Che taglia hai per le scarpe?', 'Che numero porti?', 'Para sapatos, «numero».'], ['È molto piccolo troppo.', 'È troppo piccolo.', '«Troppo» vem antes do adjetivo.']],
      }),
      producao(8, 'Faça uma compra em voz alta: peça uma peça, pergunte o preço, peça outro tamanho, decida e diga como paga.'),
    ]),
    sessao('S3', 'Questo e quello', [
      revisao(4, 'Peça em voz alta uma peça de roupa de determinada cor e tamanho numa loja, com «Vorrei…».'),
      palavras(5, [
        ['questo', 'kuêsto', 'este', ''], ['quello', 'kuêllo', 'aquele', ''], ['qui', 'kuí', 'aqui', ''], ['lì', 'lí', 'ali', ''], ['più grande', 'piú grânde', 'maior', ''], ['più piccolo', 'piú píkkolo', 'menor', ''],
      ]),
      gramatica(8, 'Questo × quello', 'PASSO 1: «questo» (este) tem as quatro formas dos adjetivos em «-o»: questo, questa, questi, queste. «Questo vestito», «questa giacca», «questi pantaloni», «queste scarpe». PASSO 2: «quello» (aquele) muda de forma como o artigo definido: antes de consoante, «quel» (m.) e «quella» (f.); antes de vogal, «quell\'»; antes de «s» + consoante, «z», «gn», «ps», «quello» (m.). PASSO 3: plurais: «quei» (antes de consoante), «quegli» (antes de vogal, «s» + consoante, «z»), «quelle» (feminino). PASSO 4: sozinhos, sem nome, usam-se como pronomes: «Quale vuole? Questo o quello?». PASSO 5: «questo» aponta para o que está perto de quem fala, «quello» para o que está longe: «Questo qui» e «quello lì». PASSO 6: «quello che» é «o que»: «Prendo quello che costa meno.»', {
        tag: 'Demonstrativos',
        comparacao: 'o português tem três demonstrativos (este, esse, aquele); o italiano tem dois, «questo» (perto) e «quello» (longe), e «codesto» é raro. «Quello» muda como o artigo: «quel libro», «quello studente», «quell\'amico». Aprenda a regra do artigo: o que muda no artigo muda em «quello».',
        tabela: [
          { artigo: 'masculino, consoante', singular: 'quel libro', plural: 'quei libri' }, { artigo: 'masculino, s + consoante, z', singular: 'quello studente', plural: 'quegli studenti' }, { artigo: 'masculino, vogal', singular: 'quell\'amico', plural: 'quegli amici' },
          { artigo: 'feminino, consoante', singular: 'quella giacca', plural: 'quelle giacche' }, { artigo: 'feminino, vogal', singular: 'quell\'amica', plural: 'quelle amiche' },
        ],
        erros: [['quello libro', 'quel libro', 'Antes de consoante simples, «quel».'], ['quel studente', 'quello studente', 'Antes de «s» + consoante, «quello».'], ['quella amico', 'quell\'amico', 'Antes de vogal, «quell\'», e o gênero vem do nome.'], ['quei studenti', 'quegli studenti', 'Plural: «quegli» antes de «s» + consoante.']],
      }),
      dialogo(8, 'In negozio / Na loja', 'Francesca experimenta uma jaqueta numa loja.', [
        ['La commessa', 'Buongiorno, posso aiutarLa?', 'Bom dia, posso ajudá-la?'], ['Francesca', 'Sì, vorrei provare quella giacca blu in vetrina.', 'Sim, gostaria de experimentar aquela jaqueta azul na vitrine.'], ['La commessa', 'Certo. Che taglia porta?', 'Claro. Que tamanho a senhora usa?'], ['Francesca', 'La quarantadue. Quanto costa?', 'O quarenta e dois. Quanto custa?'], ['La commessa', 'Costa centoventi euro. Il camerino è là in fondo.', 'Custa cento e vinte euros. O provador fica lá no fundo.'], ['Francesca', 'È un po\' stretta. Ha una taglia più grande? Poi la prendo.', 'Está um pouco justa. Tem um tamanho maior? Depois eu levo.'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Troque a jaqueta por outra peça, mude a cor, a taglia e o preço.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 15', [
      revisao(5, 'Descreva em voz alta a roupa de duas pessoas, com cores e a concordância certa, e use uma vez «questo» e uma vez «quello».'),
      exercicios(20, [
        ouvir('Quanto costano queste scarpe', ['Quanto costano queste scarpe', 'Quanto costa questa scarpa', 'Quanto costano quelle scarpe'], 'Quanto costano queste scarpe', 'Ouça «costano».'), ouvir('Una gonna rossa', ['Una gonna rossa', 'Un gonna rosso', 'Due gonne rosse'], 'Una gonna rossa', 'Ouça a terminação «-a».'), ouvir('Posso provare questa giacca', ['Posso provare questa giacca', 'Posso comprare questa giacca', 'Posso provare quella giacca'], 'Posso provare questa giacca', 'Ouça «provare».'),
        ditado('Vorrei una taglia più grande', 'Escreva: Vorrei una taglia più grande.'), ditado('Pago con la carta', 'Escreva: Pago con la carta.'), ditado('Quel vestito costa cento euro', 'Escreva: Quel vestito costa cento euro.'),
        mc('Qual cor é invariável?', ['blu', 'rosso', 'bianco'], 'blu', '«Blu», «rosa» e «viola» não mudam.'), mc('Qual frase está correta?', ['due camicie bianche', 'due camicie bianchi', 'due camicia bianca'], 'due camicie bianche', 'Plural feminino.'), mc('Como se diz «aquele estudante»?', ['quello studente', 'quel studente', 'quella studente'], 'quello studente', '«S» + consoante pede «quello».'), mc('Como se pergunta o preço de vários itens?', ['Quanto costano?', 'Quanto costa?', 'Quanti costa?'], 'Quanto costano?', 'Plural.'),
        lacuna('___ vestito è bello. (aquele)', ['Quel', 'Quello', 'Quella'], 'Quel', 'Masculino, consoante simples.'), lacuna('___ amica è simpatica. (aquela)', ['Quell\'', 'Quella', 'Quel'], 'Quell\'', 'Antes de vogal.'), lacuna('Queste scarpe sono ___. (nere)', ['nere', 'nero', 'neri'], 'nere', 'Feminino plural.'), lacuna('È ___ grande per me. (demais)', ['troppo', 'molto', 'tanto'], 'troppo', '«Troppo» é demais.'),
        ordem('Ordene: «Quanto costa questa giacca?»', ['Quanto', 'costa', 'questa', 'giacca'], 'Quanto costa questa giacca?', 'Pergunta de preço.'), ordem('Ordene: «Posso provare quella camicia?»', ['Posso', 'provare', 'quella', 'camicia'], 'Posso provare quella camicia?', 'Modal e infinitivo.'),
        livre('Escreva em italiano: Gostaria de experimentar aquele casaco preto. Quanto custa?', 'Vorrei provare quel cappotto nero. Quanto costa?'),
        lacuna('Una gonna ___. (verde)', ['verde', 'verda', 'verdi'], 'verde', 'Cores em «-e» não mudam no feminino singular.'),
        lacuna('Due camicie ___. (pretas)', ['nero', 'nere', 'neri'], 'nere', '«Camicie» é feminino plural: «nere».'),
        lacuna('Due magliette ___. (rosa)', ['rose', 'rosa', 'rosse'], 'rosa', '«Rosa» é invariável.'),
        lacuna('___ scarpe costano molto. (estes)', ['Questi', 'Queste', 'Questa'], 'Queste', '«Scarpe» é feminino plural: «queste».'),
        lacuna('Quanto ___ questa gonna? (custa)', ['costano', 'costo', 'costa'], 'costa', 'Um só item: «costa».'),
        mc('Qual é o plural de «quel vestito»?', ['quei vestiti', 'quegli vestiti', 'quelle vestiti'], 'quei vestiti', 'Antes de consoante o plural de «quel» é «quei».'),
        mc('Como se diz «120 euros»?', ['centoventi euros', 'cento venti euros', 'centoventi euro'], 'centoventi euro', '«Euro» não muda no plural e o número se escreve junto.'),
        mc('Onde se experimenta a roupa?', ['il camerino', 'la taglia', 'il prezzo'], 'il camerino', '«Camerino» é o provador.'),
        mc('Como perguntar (formal) o número do sapato?', ['Che taglia porta?', 'Quanto costa?', 'Che numero porta?'], 'Che numero porta?', 'Para sapatos usa-se «numero»; para roupas, «taglia».'),
        ordem('Ordene: «Vorrei provare quei pantaloni neri.»', ['Vorrei', 'provare', 'quei', 'pantaloni', 'neri.'], 'Vorrei provare quei pantaloni neri.', 'A cor vem depois do substantivo e concorda com ele.'),
        ordem('Ordene: «Queste scarpe sono troppo piccole.»', ['Queste', 'scarpe', 'sono', 'troppo', 'piccole.'], 'Queste scarpe sono troppo piccole.', '«Troppo» não muda.'),
        livre('Escreva em italiano: Quanto custam estes sapatos? Custam setenta euros.', 'Quanto costano queste scarpe? Costano settanta euro.'),
        livre('Escreva em italiano: Eu uso a quarenta e dois. Esta saia é muito pequena.', 'Porto la quarantadue. Questa gonna è troppo piccola.'),
      ]),
      producao(5, 'Descreva em voz alta uma compra ideal: o que você compra, de que cor, quanto custa e como você paga.'),
    ]),
  ],
});
