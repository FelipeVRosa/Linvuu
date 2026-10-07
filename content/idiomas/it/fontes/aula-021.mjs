import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 21, titulo: 'Imperfetto', nivel: 'a2',
  objetivo: 'Formar o imperfetto regular e dos verbos essere, fare, dire e bere, e usá-lo para hábitos, descrições, estados, idade, hora e clima no passado.',
  nota: 'Você descreve o passado com o imperfetto: hábitos, cenários e lembranças. Próxima aula: imperfetto e passato prossimo no mesmo relato.',
  sessoes: [
    sessao('S1', 'Formar o imperfetto', [
      revisao(5, 'Diga em voz alta o que você fez ontem, em cinco frases, e marque quais verbos pediram «essere».'),
      palavras(8, [
        ['da bambino, da bambina', 'da bambíno, da bambína', 'quando criança', ''], ['di solito', 'di sólito', 'geralmente', ''], ['ogni giorno', 'ónhi djórno', 'todo dia', ''], ['spesso', 'spésso', 'frequentemente', ''], ['una volta', 'úna vólta', 'uma vez, antigamente', ''], ['allora', 'allóra', 'naquela época, então', ''], ['sempre', 'sémpre', 'sempre', ''], ['ogni estate', 'ónhi estáte', 'todo verão', ''],
      ]),
      gramatica(12, 'As terminações do imperfetto', 'PASSO 1: o imperfetto descreve o que acontecia habitualmente, como as coisas eram, ou o que estava em curso no passado. PASSO 2: tire o «-re» do infinitivo e acrescente as terminações: -vo, -vi, -va, -vamo, -vate, -vano. PASSO 3: a vogal temática se mantém: -are → -avo (parlavo), -ere → -evo (vendevo), -ire → -ivo (dormivo). PASSO 4: o acento tônico cai na sílaba antes do «-vo»: parlàvo, vendévo, dormìvo; na terceira pessoa do plural, na antepenúltima: parlàvano. PASSO 5: o imperfetto é regular em quase todos os verbos. PASSO 6: as formas de «io» e «tu» são diferentes (parlavo, parlavi); as de «lui» e «lei» são iguais (parlava). PASSO 7: com «Lei» de cortesia, usa-se a forma da terceira pessoa: «Lei abitava a Roma?» PASSO 8: no italiano falado e escrito neutro, o imperfetto é muito frequente em lembranças, histórias e descrições.', {
        tag: 'Imperfetto',
        comparacao: 'o imperfetto corresponde ao pretérito imperfeito do português: «eu falava», «eu vendia», «eu dormia». Aqui o ponto de contato é grande e é uma vantagem. A diferença é a terminação: o português tem «-ava, -ia», o italiano tem sempre o «v» no meio: «-avo, -evo, -ivo». O «v» do imperfetto é o sinal para reconhecer o tempo.',
        tabelas: [
          { titulo: 'Os três modelos regulares', linhas: [
            { pessoa: 'io', parlare: 'parlavo', vendere: 'vendevo', dormire: 'dormivo' }, { pessoa: 'tu', parlare: 'parlavi', vendere: 'vendevi', dormire: 'dormivi' }, { pessoa: 'lui / lei / Lei', parlare: 'parlava', vendere: 'vendeva', dormire: 'dormiva' },
            { pessoa: 'noi', parlare: 'parlavamo', vendere: 'vendevamo', dormire: 'dormivamo' }, { pessoa: 'voi', parlare: 'parlavate', vendere: 'vendevate', dormire: 'dormivate' }, { pessoa: 'loro', parlare: 'parlavano', vendere: 'vendevano', dormire: 'dormivano' },
          ] },
          { titulo: 'Os irregulares essenciais', linhas: [
            { pessoa: 'io', essere: 'ero', fare: 'facevo', dire: 'dicevo', bere: 'bevevo' }, { pessoa: 'tu', essere: 'eri', fare: 'facevi', dire: 'dicevi', bere: 'bevevi' }, { pessoa: 'lui / lei / Lei', essere: 'era', fare: 'faceva', dire: 'diceva', bere: 'beveva' },
            { pessoa: 'noi', essere: 'eravamo', fare: 'facevamo', dire: 'dicevamo', bere: 'bevevamo' }, { pessoa: 'voi', essere: 'eravate', fare: 'facevate', dire: 'dicevate', bere: 'bevevate' }, { pessoa: 'loro', essere: 'erano', fare: 'facevano', dire: 'dicevano', bere: 'bevevano' },
          ] },
        ],
        erros: [['Io parlevo italiano.', 'Io parlavo italiano.', 'Verbos em -are têm a vogal «a»: -avo.'], ['Da bambino io sono giocare.', 'Da bambino giocavo.', 'Hábito no passado: imperfetto, sem «essere».'], ['Quando ero piccolo, io faravo sport.', 'Quando ero piccolo, facevo sport.', 'Fare é irregular: facevo.'], ['Lui dormiva e lei dormivi.', 'Lui dormiva e lei dormiva.', 'Lui e lei: mesma forma, terminada em -a.']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você fazia quando era criança, com «da bambino/a»: «Da bambino giocavo… Mangiavo… Dormivo…»'),
    ]),
    sessao('S2', 'Descrever pessoas, lugares e estados', [
      revisao(4, 'Conjugue em voz alta «essere» e «fare» no imperfetto, com os seis sujeitos.'),
      palavras(6, [
        ['piccolo, piccola', 'píkkolo, píkkola', 'pequeno, pequena', ''], ['avere fame, avere sonno', 'avére fáme, avére sónno', 'ter fome, ter sono', ''], ['faceva freddo', 'fatchéva fréddo', 'fazia frio', ''], ['pioveva', 'piovéva', 'chovia', ''], ['erano le otto', 'érano le ótto', 'eram oito horas', ''], ['avevo dieci anni', 'avévo diétchi ánni', 'eu tinha dez anos', ''],
      ]),
      gramatica(12, 'Para que serve o imperfetto', 'PASSO 1: hábito no passado: «Ogni estate andavo dai nonni.» PASSO 2: descrição de pessoas e lugares como eram: «La casa era grande e aveva un giardino.» PASSO 3: estados físicos e mentais: «Ero stanco», «Avevo fame», «Non mi sentivo bene». PASSO 4: idade em um momento do passado: «Avevo dieci anni.» PASSO 5: hora: «Erano le otto e mezza.» PASSO 6: clima: «Pioveva», «Faceva freddo», «C\'era il sole». PASSO 7: ação em curso, como cenário: «Io leggevo e lui dormiva.» PASSO 8: pedido muito suave: «Volevo un caffè» (queria um café) é uma forma educada de pedir; para o primeiro contato com um desconhecido, «vorrei» é mais seguro. PASSO 9: palavras que costumam indicar o imperfetto: di solito, spesso, sempre, ogni giorno, tutti i giorni, una volta, da bambino, allora. PASSO 10: para um fato isolado, preciso e terminado, o imperfetto não serve (veja a aula 22).', {
        tag: 'Imperfetto',
        comparacao: 'o português usa o imperfeito do mesmo jeito para o hábito e a descrição, e a correspondência é direta: «eu morava» é «abitavo». A armadilha é o fato pontual. Em português o imperfeito às vezes aparece na fala para fatos únicos («ontem eu ia ao cinema, mas desisti»); em italiano o imperfetto é o tempo do fundo, do hábito e da lembrança, e o fato isolado pede o passato prossimo.',
        tabela: [
          { uso: 'hábito', exemplo: 'Ogni estate andavo al mare.', traducao: 'Todo verão eu ia à praia.' }, { uso: 'descrição', exemplo: 'La casa era piccola e luminosa.', traducao: 'A casa era pequena e iluminada.' }, { uso: 'estado', exemplo: 'Ero stanca e avevo sonno.', traducao: 'Eu estava cansada e com sono.' }, { uso: 'idade', exemplo: 'Avevo dieci anni.', traducao: 'Eu tinha dez anos.' }, { uso: 'hora', exemplo: 'Erano le otto.', traducao: 'Eram oito horas.' }, { uso: 'clima', exemplo: 'Faceva freddo e pioveva.', traducao: 'Fazia frio e chovia.' },
        ],
        erros: [['Avevo fame, quindi sono mangiare.', 'Avevo fame, quindi mangiavo.', 'Não misture «essere» com o infinitivo; use o imperfetto.'], ['Sono dieci anni quando sono andato.', 'Avevo dieci anni quando sono andato.', 'Idade no passado: «avere» no imperfetto.'], ['Era le otto.', 'Erano le otto.', 'Hora plural pede «erano»; só «era l\'una» fica no singular.'], ['Ho piovuto tutto il giorno e faceva freddo.', 'Pioveva tutto il giorno e faceva freddo.', 'Clima como fundo: imperfetto.']],
      }),
      producao(8, 'Descreva em voz alta a casa ou o bairro da sua infância: como era, quem morava lá, o que você fazia, em oito frases.'),
    ]),
    sessao('S3', 'Lembranças da infância', [
      revisao(4, 'Diga três hábitos de infância e três descrições de lugares, com o imperfetto.'),
      palavras(5, [
        ['i nonni', 'i nónni', 'os avós', ''], ['il cortile', 'il kortíle', 'o pátio', ''], ['giocare', 'djokáre', 'brincar, jogar', ''], ['la scuola elementare', 'la skuóla elementáre', 'a escola primária', ''], ['la merenda', 'la merénda', 'o lanche da tarde', ''],
      ]),
      gramatica(8, 'Imperfetto com mentre, quando e il solito', 'PASSO 1: duas ações em curso ao mesmo tempo ligam-se com «mentre» e os dois verbos ficam no imperfetto: «Mentre io studiavo, mio fratello giocava.» PASSO 2: «quando» + imperfetto aponta uma época: «Quando ero piccola, abitavamo in campagna.» PASSO 3: «da piccolo» e «da giovane» têm o mesmo uso, sem verbo: «Da piccolo ero timido.» PASSO 4: o hábito de repetição pode ser contado com «tutti i», «ogni» ou «ogni tanto» (de vez em quando): «Ogni tanto mangiavamo fuori». PASSO 5: «non… più» (não mais) fala de um hábito que acabou: «Non giocavo più a calcio». Com o presente, «non… più» também vale, mas o foco muda. PASSO 6: o imperfetto também descreve o que uma pessoa fazia profissionalmente: «Mio nonno faceva il falegname.» PASSO 7: o imperfetto é o tempo da nostalgia: «Com\'era la tua città?»', {
        tag: 'Imperfetto',
        comparacao: 'em português «quando eu era criança, morava…» usa o mesmo imperfeito, e a correspondência é direta. Para «costumava + infinitivo», o italiano corrente simplesmente usa o imperfetto, com apoio de «di solito» ou «ogni»: «Di solito mangiavamo alle due» já traduz «costumávamos comer às duas».',
        tabela: [
          { expressao: 'mentre', funcao: 'dois fatos em curso', exemplo: 'Mentre cucinavo, ascoltavo la radio.' }, { expressao: 'quando ero piccolo', funcao: 'época', exemplo: 'Quando ero piccolo, avevo un cane.' }, { expressao: 'ogni tanto', funcao: 'de vez em quando', exemplo: 'Ogni tanto andavamo al cinema.' }, { expressao: 'non… più', funcao: 'hábito que acabou', exemplo: 'Non fumava più.' }, { expressao: 'tutti i giorni', funcao: 'hábito diário', exemplo: 'Tutti i giorni prendevo l\'autobus.' },
        ],
        erros: [['Mentre io studio, lui giocava.', 'Mentre io studiavo, lui giocava.', 'Os dois verbos no mesmo tempo.'], ['Quando ero piccolo, io sono avere un cane.', 'Quando ero piccolo, avevo un cane.', 'Imperfetto de avere: avevo.'], ['Da piccolo era timido io.', 'Da piccolo ero timido.', '«Io» pede «ero».'], ['Tutti i giorni ho preso l\'autobus per anni.', 'Tutti i giorni prendevo l\'autobus.', 'Hábito: imperfetto.']],
      }),
      texto(8, 'Da bambina / Quando eu era criança', 'Quando ero piccola, abitavo in una casa vecchia con un grande cortile. Ogni estate andavo dai nonni in campagna. Mio nonno si alzava presto e faceva il pane, mentre io e mia cugina giocavamo fuori. La nonna ci preparava la merenda e, la sera, tutti mangiavamo insieme sotto un albero. Non c\'erano molti giochi, ma eravamo felici. Oggi quella casa non c\'è più, però io ricordo ancora il profumo del pane.', 'Quando eu era pequena, morava em uma casa velha com um grande pátio. Todo verão eu ia à casa dos avós no campo. Meu avô acordava cedo e fazia pão, enquanto eu e minha prima brincávamos lá fora. A avó nos preparava o lanche e, à noite, todos comíamos juntos sob uma árvore. Não havia muitos brinquedos, mas éramos felizes. Hoje aquela casa não existe mais, mas eu ainda me lembro do cheiro do pão.', [['Dove andava ogni estate?', 'Dai nonni, in campagna.'], ['Che cosa faceva il nonno?', 'Si alzava presto e faceva il pane.'], ['Che cosa faceva la nonna?', 'Preparava la merenda.'], ['Che cosa ricorda oggi?', 'Il profumo del pane.']]),
      producao(5, 'Conte em voz alta uma lembrança de infância, com um lugar, uma pessoa e um hábito.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 21', [
      revisao(5, 'Descreva em voz alta como era a sua vida há dez anos, em seis frases com imperfetto.'),
      exercicios(20, [
        ouvir('Da piccolo giocavo sempre fuori', ['Da piccolo giocavo sempre fuori', 'Da piccolo giocherò sempre fuori', 'Da piccolo ho giocato fuori'], 'Da piccolo giocavo sempre fuori', 'Ouça o «-avo» do imperfetto.'), ouvir('Faceva freddo e pioveva', ['Faceva freddo e pioveva', 'Ha fatto freddo e ha piovuto', 'Fa freddo e piove'], 'Faceva freddo e pioveva', 'Clima de fundo.'), ouvir('Erano le otto di sera', ['Erano le otto di sera', 'Era le otto di sera', 'Sono le otto di sera'], 'Erano le otto di sera', 'Hora plural: erano.'),
        ditado('Avevo dieci anni', 'Escreva: Avevo dieci anni.'), ditado('Mia nonna faceva il pane', 'Escreva: Mia nonna faceva il pane.'), ditado('Mentre studiavo, ascoltavo la radio', 'Escreva: Mentre studiavo, ascoltavo la radio.'),
        mc('Qual é o imperfetto de «parlare» com «noi»?', ['parlavamo', 'parlevamo', 'parliamo'], 'parlavamo', '-are: -avamo.'), mc('Qual é o imperfetto de «bere» com «io»?', ['bevevo', 'bevo', 'bevavo'], 'bevevo', 'Bere: radical bev- + -evo.'), mc('Qual frase descreve um hábito?', ['Ogni domenica andavamo dai nonni.', 'Domenica siamo andati dai nonni.', 'Domenica andremo dai nonni.'], 'Ogni domenica andavamo dai nonni.', '«Ogni» marca repetição.'), mc('Como dizer «eu tinha fome»?', ['Avevo fame.', 'Ho avuto fame.', 'Ero fame.'], 'Avevo fame.', 'Estado: imperfetto de avere.'),
        lacuna('Quando ___ piccola, vivevo a Torino. (essere)', ['ero', 'sono', 'sarò'], 'ero', 'Imperfetto de essere.'), lacuna('Mio padre ___ il medico. (fare, profissão)', ['faceva', 'fa', 'farà'], 'faceva', 'Descrição do passado.'), lacuna('Tutti i giorni ___ il treno. (prendere, io)', ['prendevo', 'prendo', 'ho preso'], 'prendevo', 'Hábito.'), lacuna('Loro ___ in campagna. (abitare)', ['abitavano', 'abitavo', 'abitava'], 'abitavano', 'Terceira pessoa do plural: -avano.'),
        ordem('Ordene: «Da piccolo avevo un cane.»', ['Da', 'piccolo', 'avevo', 'un', 'cane.'], 'Da piccolo avevo un cane.', 'Época + imperfetto.'), ordem('Ordene: «Mentre io leggevo, lui dormiva.»', ['Mentre', 'io', 'leggevo,', 'lui', 'dormiva.'], 'Mentre io leggevo, lui dormiva.', 'Duas ações em curso.'),
        livre('Escreva em italiano: Quando eu era pequeno, morava no campo e todo dia brincava no pátio.', 'Quando ero piccolo, abitavo in campagna e ogni giorno giocavo nel cortile.'),
      ]),
      producao(5, 'Descreva em um minuto como era a sua escola, com pessoas, lugares e hábitos.'),
    ]),
  ],
});
