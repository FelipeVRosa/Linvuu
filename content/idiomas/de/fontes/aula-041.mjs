import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 41, titulo: 'O genitivo: posse, tempo e wegen, während, trotz', nivel: 'a2',
  objetivo: 'Usar o genitivo para a posse (das Auto meines Vaters), com nomes próprios (Annas Auto), em expressões de tempo e lugar (Ende des Jahres) e depois de wegen, während e trotz.',
  nota: 'Você usa o genitivo na posse e nas preposições mais comuns. Próxima aula: perguntas e pronomes indefinidos.',
  sessoes: [
    sessao('S1', 'O genitivo da posse', [
      revisao(5, 'Escreva o quadro dos artigos nos quatro casos de memória.'),
      palavras(8, [
        ['der Besitzer', 'der bezítser', 'dono', 'owner'], ['die Meinung', 'di máinung', 'opinião', 'opinion'], ['der Titel', 'der títel', 'título', 'title'], ['der Anfang', 'der án-fang', 'começo', 'beginning'],
        ['das Ende', 'das énde', 'fim', 'end'], ['die Mitte', 'di míte', 'meio, centro', 'middle'], ['der Rand', 'der rant', 'borda', 'edge'], ['das Land', 'das lant', 'país, campo', 'country'],
      ]),
      gramatica(14, 'O genitivo, passo a passo', 'PASSO 1: o GENITIVO responde a «wessen?» (de quem?) e mostra POSSE ou pertencimento: «das Auto meines Vaters» (o carro do meu pai). PASSO 2: o possuidor vem DEPOIS da coisa possuída (ao contrário do inglês): «das Auto meines Vaters», e não «meines Vaters Auto». PASSO 3: artigos no genitivo: masculino «des», feminino «der», neutro «des», plural «der»; indefinidos: «eines», «einer», «eines». PASSO 4: o substantivo MASCULINO e NEUTRO ganha «-(e)s»: «des Mannes», «des Kindes», «des Autos»; feminino e plural não mudam: «der Frau», «der Kinder». PASSO 5: com NOMES PRÓPRIOS, acrescente «-s», sem apóstrofo e sem artigo, ANTES da coisa: «Annas Auto», «Pauls Buch». PASSO 6: na fala, é comum trocar o genitivo por «von» + dativo: «das Auto von meinem Vater».', {
        tag: 'Casos',
        comparacao: 'o português usa «de» («o carro do meu pai»). O alemão usa o genitivo, com «des/der» e um «-s» no substantivo masculino e neutro, ou «von» + dativo na fala.',
        tabela: [
          { genero: 'masculino', artigo: 'des Mannes / eines Vaters', exemplo: 'das Auto des Mannes' }, { genero: 'feminino', artigo: 'der Frau / einer Mutter', exemplo: 'die Tasche der Frau' }, { genero: 'neutro', artigo: 'des Kindes / eines Hauses', exemplo: 'das Spielzeug des Kindes' }, { genero: 'plural', artigo: 'der Kinder / meiner Eltern', exemplo: 'das Haus meiner Eltern' },
          { genero: 'nome próprio', artigo: 'Annas, Pauls', exemplo: 'Annas Auto, Pauls Buch' }, { genero: 'na fala (von + dativo)', artigo: 'von meinem Vater', exemplo: 'das Auto von meinem Vater' },
        ],
        exemplos: [['Das ist das Auto meines Vaters.', 'Este é o carro do meu pai.'], ['Das ist die Tasche der Frau.', 'Esta é a bolsa da mulher.'], ['Das ist Annas Handy.', 'Este é o celular da Anna.'], ['Das Haus meiner Eltern ist groß.', 'A casa dos meus pais é grande.']],
        erros: [['Das ist das Auto mein Vater.', 'Das ist das Auto meines Vaters.', 'Posse: genitivo, e o substantivo ganha -s.'], ['Das ist Annas’ Auto.', 'Das ist Annas Auto.', 'Sem apóstrofo em alemão.'], ['Das ist meines Vaters Auto.', 'Das ist das Auto meines Vaters.', 'O possuidor vem depois (ou use o nome próprio antes).']],
      }),
      producao(3, 'Diga 6 frases de posse: «Das ist das Auto meines Vaters. Das ist Annas Handy. Das ist die Tasche der Frau.»'),
    ]),
    sessao('S2', 'Genitivo com adjetivos, tempo e lugar', [
      revisao(5, 'Escreva 6 frases de posse, duas com nomes próprios.'),
      palavras(8, [
        ['die Hauptstadt', 'di háupt-xtat', 'capital', 'capital'], ['die Seite', 'di záite', 'lado; página', 'side; page'], ['der Besuch', 'der bezúrr', 'visita', 'visit'], ['die Geschichte', 'di guexíçte', 'história', 'story, history'],
        ['die Farbe', 'di fárbe', 'cor', 'colour'], ['die Größe', 'di grö-se', 'tamanho', 'size'], ['der Name', 'der náme', 'nome', 'name'], ['die Straße', 'di xtrá-se', 'rua', 'street'],
      ]),
      gramatica(12, 'Genitivo com adjetivos e em expressões de tempo e lugar', 'PASSO 1: com adjetivo, a terminação é «-en» em todos os gêneros: «das Auto meines alten Vaters», «die Tasche der netten Frau». PASSO 2: o genitivo aparece em muitas EXPRESSÕES de tempo e lugar: «am Anfang des Jahres» (no começo do ano), «am Ende des Monats» (no fim do mês), «in der Mitte der Stadt» (no centro da cidade), «am Rand der Straße» (à beira da rua). PASSO 3: com um nome de lugar: «die Hauptstadt des Landes» (a capital do país), «die Größe des Zimmers». PASSO 4: «Name» e os masculinos fracos fazem o genitivo em «-ns» e «-en»: «des Namens», «des Studenten».', {
        tag: 'Casos',
        tabela: [
          { expressao: 'am Anfang des Jahres', pt: 'no começo do ano' }, { expressao: 'am Ende des Monats', pt: 'no fim do mês' }, { expressao: 'in der Mitte der Stadt', pt: 'no centro da cidade' }, { expressao: 'die Hauptstadt des Landes', pt: 'a capital do país' }, { expressao: 'die Größe des Zimmers', pt: 'o tamanho do quarto' }, { expressao: 'der Name des Studenten', pt: 'o nome do estudante' },
        ],
        erros: [['das Auto meines alte Vaters', 'das Auto meines alten Vaters', 'Genitivo com adjetivo: «-en».'], ['am Ende der Monat', 'am Ende des Monats', '«Monat» é masculino: des Monats.']],
      }),
      producao(5, 'Diga 6 frases com genitivo, tempo e lugar: «Am Anfang des Jahres … In der Mitte der Stadt … Die Hauptstadt des Landes …»'),
    ]),
    sessao('S3', 'Wegen, während, trotz', [
      revisao(5, 'Escreva 4 frases com genitivo e 2 com «von» + dativo.'),
      gramatica(10, 'Wegen, während, trotz: preposições do genitivo', 'PASSO 1: três preposições muito comuns pedem GENITIVO: «wegen» (por causa de), «während» (durante) e «trotz» (apesar de). PASSO 2: «wegen des Wetters» (por causa do tempo), «während des Urlaubs» (durante as férias), «trotz des Regens» (apesar da chuva). PASSO 3: com plural ou feminino, só muda o artigo: «wegen der Kinder», «während der Arbeit», «trotz der Verspätung». PASSO 4: na conversa, muita gente usa o DATIVO («wegen dem Wetter»); na escrita e nas provas, use o genitivo. PASSO 5: lembre que «während» também pode ser conjunção («Während ich arbeite, …»), mas aí o verbo vai para o fim.', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'wegen', significado: 'por causa de', exemplo: 'Wegen des Wetters bleiben wir zu Hause.' }, { preposicao: 'während', significado: 'durante', exemplo: 'Während des Urlaubs lese ich viel.' }, { preposicao: 'trotz', significado: 'apesar de', exemplo: 'Trotz des Regens gehen wir spazieren.' },
        ],
        erros: [['Wegen dem Wetter bleiben wir hier.', 'Wegen des Wetters bleiben wir hier.', 'Na escrita: genitivo.'], ['Trotz der Regen gehen wir.', 'Trotz des Regens gehen wir.', 'Masculino: des + -s.']],
      }),
      dialogo(10, 'Warum bist du zu spät? / Por que você está atrasado?', 'Dois amigos se encontram; um deles chega atrasado.', [
        ['Lea', 'Warum bist du zu spät?', 'Por que você está atrasado?'], ['Paul', 'Wegen des Verkehrs. Der Bus stand fast zehn Minuten.', 'Por causa do trânsito. O ônibus ficou parado quase dez minutos.'], ['Lea', 'Trotz des Regens bist du mit dem Bus gefahren?', 'Apesar da chuva você veio de ônibus?'],
        ['Paul', 'Ja, während des Unwetters war das Fahrrad zu gefährlich.', 'Sim, durante a tempestade a bicicleta era perigosa demais.'], ['Lea', 'Wegen des Wetters ist heute alles langsam.', 'Por causa do tempo, hoje tudo está lento.'], ['Paul', 'Während der Arbeit trinke ich dann einen Kaffee.', 'Durante o trabalho tomo então um café.'],
        ['Lea', 'Trotz der Verspätung bist du gut gelaunt.', 'Apesar do atraso, você está de bom humor.'], ['Paul', 'Natürlich! Am Ende der Woche ist man immer froh.', 'Claro! No fim da semana a gente sempre fica feliz.'],
      ]),
      producao(5, 'Dê 6 motivos e contrastes em voz alta com «wegen», «während» e «trotz».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 8 frases de genitivo e preposições do genitivo.'),
      exercicios(20, [
        lacuna('Das ist das Auto ___ Vaters. (do meu)', ['meines', 'meinem', 'meinen'], 'meines', 'Genitivo masculino.'), lacuna('Das ist die Tasche ___ Frau. (da)', ['der', 'die', 'des'], 'der', 'Genitivo feminino.'), lacuna('Das ist das Spielzeug ___ Kindes. (da criança)', ['des', 'der', 'dem'], 'des', 'Genitivo neutro.'),
        lacuna('Das Haus ___ Eltern ist groß. (dos meus)', ['meiner', 'meinen', 'meines'], 'meiner', 'Genitivo plural.'), lacuna('Das ist ___ Auto. (da Anna)', ['Annas', 'Anna', 'Annes'], 'Annas', 'Nome próprio + -s.'), lacuna('am Ende ___ Jahres (do ano)', ['des', 'der', 'dem'], 'des', 'Jahr é neutro.'),
        lacuna('___ des Wetters bleiben wir zu Hause. (por causa)', ['Wegen', 'Mit', 'Von'], 'Wegen', 'wegen + genitivo.'), lacuna('___ des Urlaubs lese ich viel. (durante)', ['Während', 'Wegen', 'Trotz'], 'Während', 'während + genitivo.'), lacuna('___ des Regens gehen wir spazieren. (apesar)', ['Trotz', 'Wegen', 'Seit'], 'Trotz', 'trotz + genitivo.'),
        mc('O genitivo responde a:', ['wessen? (de quem?)', 'wem? (a quem?)', 'wen? (quem?)'], 'wessen? (de quem?)', 'Posse.'), mc('Com nome próprio, a posse se escreve:', ['Annas Auto', 'Anna’s Auto', 'das Auto Annas'], 'Annas Auto', 'Sem apóstrofo.'), mc('Na fala, o genitivo pode ser trocado por:', ['von + dativo', 'für + acusativo', 'mit + dativo'], 'von + dativo', 'das Auto von meinem Vater.'),
        ordem('Ordene: «Este é o carro do meu pai.»', ['Das', 'ist', 'das', 'Auto', 'meines', 'Vaters'], 'Das ist das Auto meines Vaters.', 'Posse depois da coisa.'), ouvir('Trotz des Regens gehen wir spazieren', ['Trotz des Regens gehen wir spazieren', 'Wegen des Regens bleiben wir zu Hause', 'Während des Regens schlafen wir'], 'Trotz des Regens gehen wir spazieren', 'trotz = apesar de.'), ditado('Am Ende des Monats habe ich Urlaub', 'Genitivo de tempo.'),
        livre('Escreva 5 frases: uma de posse, uma com nome próprio, uma de tempo, uma com «wegen» e uma com «trotz».', 'Das ist das Auto meines Vaters. Das ist Annas Handy. Am Ende des Jahres habe ich Urlaub. Wegen des Wetters bleiben wir zu Hause. Trotz des Regens gehen wir spazieren.'),
      ]),
      producao(5, 'Grave-se falando de posse, de tempo e de motivos com o genitivo.'),
    ]),
  ],
});
