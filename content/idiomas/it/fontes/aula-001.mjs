import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 1, titulo: 'Sons, alfabeto e primeiras palavras', nivel: 'a1',
  objetivo: 'Soletrar em italiano, ler as combinações que mudam o som (c, g, ch, gh, sc, gn, gli), perceber as consoantes dobradas e o acento tônico, e fazer as primeiras saudações, com «tu» e com «Lei».',
  nota: 'Você soletra, lê palavras novas com segurança e cumprimenta em italiano. Próxima aula: o verbo «essere» (ser e estar), os pronomes e os adjetivos.',
  sessoes: [
    sessao('S1', 'O alfabeto e as primeiras saudações', [
      intro(3, "Você já conhece muito italiano: pizza, pasta, espresso, cappuccino, gelato, piano, opera, ciao. O italiano se escreve quase como se fala, e isso ajuda muito um brasileiro. Mas algumas combinações de letras têm regras de som, e é isso que esta aula ensina. Ao lado das palavras há uma pronúncia aproximada em letras do português: «tch» é o som de «tchau»; «dj» é o de «djeito»; «nh» e «lh» são os de «ninho» e «filho»; «x» lê-se como «ch» de «xícara»; «k» e «g» são sempre duros. O acento (á, ê) marca a sílaba forte. É uma ajuda, não substitui o áudio: ouça sempre antes de repetir."),
      alfabeto(12, [
        ['Parte 1 — A a G', [
          ['A', 'a', 'nome da letra: «a»', '/a/', 'amico', 'amigo', 'a'], ['B', 'b', 'nome da letra: «bi»', '/bi/', 'bene', 'bem', 'bi'], ['C', 'c', 'nome da letra: «tchi»', '/tʃi/', 'casa', 'casa', 'tchi'],
          ['D', 'd', 'nome da letra: «di»', '/di/', 'dieci', 'dez', 'di'], ['E', 'e', 'nome da letra: «é»', '/e/', 'essere', 'ser, estar', 'é'], ['F', 'f', 'nome da letra: «éffe»', '/ˈɛffe/', 'fame', 'fome', 'éffe'],
          ['G', 'g', 'nome da letra: «dji»', '/dʒi/', 'gatto', 'gato', 'dji'],
        ]],
        ['Parte 2 — H a P', [
          ['H', 'h', 'nome da letra: «ákka» (o h nunca soa)', '/ˈakka/', 'hotel', 'hotel', 'ákka'], ['I', 'i', 'nome da letra: «i»', '/i/', 'Italia', 'Itália', 'i'], ['L', 'l', 'nome da letra: «élle»', '/ˈɛlle/', 'latte', 'leite', 'élle'],
          ['M', 'm', 'nome da letra: «émme»', '/ˈɛmme/', 'mamma', 'mamãe', 'émme'], ['N', 'n', 'nome da letra: «énne»', '/ˈɛnne/', 'notte', 'noite', 'énne'], ['O', 'o', 'nome da letra: «ó»', '/ɔ/', 'otto', 'oito', 'ó'],
          ['P', 'p', 'nome da letra: «pi»', '/pi/', 'pane', 'pão', 'pi'],
        ]],
        ['Parte 3 — Q a Z', [
          ['Q', 'q', 'nome da letra: «ku»', '/ku/', 'quattro', 'quatro', 'ku'], ['R', 'r', 'nome da letra: «érre» (r vibrado, de uma batida ou mais)', '/ˈɛrre/', 'rosso', 'vermelho', 'érre'], ['S', 's', 'nome da letra: «ésse»', '/ˈɛsse/', 'sole', 'sol', 'ésse'],
          ['T', 't', 'nome da letra: «ti»', '/ti/', 'tavolo', 'mesa', 'ti'], ['U', 'u', 'nome da letra: «u»', '/u/', 'uno', 'um', 'u'], ['V', 'v', 'nome da letra: «vu»', '/vu/', 'vino', 'vinho', 'vu'],
          ['Z', 'z', 'nome da letra: «dzéta»', '/ˈdzɛta/', 'zucchero', 'açúcar', 'dzéta'],
        ]],
        ['Letras de palavras estrangeiras (J, K, W, X, Y)', [
          ['J', 'j', 'nome da letra: «i lúnga»', '/i ˈluŋga/', 'jeans', 'jeans', 'i lúnga'], ['K', 'k', 'nome da letra: «káppa»', '/ˈkappa/', 'kiwi', 'kiwi', 'káppa'], ['W', 'w', 'nome da letra: «dóppia vu»', '/ˈdoppja vu/', 'weekend', 'fim de semana', 'dóppia vu'],
          ['X', 'x', 'nome da letra: «iks»', '/iks/', 'taxi', 'táxi', 'iks'], ['Y', 'y', 'nome da letra: «ípsilon»', '/ˈipsilon/', 'yogurt', 'iogurte', 'ípsilon'],
        ]],
      ]),
      palavras(8, [
        ['ciao', 'tchao', 'oi, tchau (informal)', ''], ['buongiorno', 'buondjôrno', 'bom dia', ''], ['buonasera', 'buonasêra', 'boa tarde, boa noite (ao chegar)', ''], ['arrivederci', 'arrivedértchi', 'tchau, até logo', ''],
        ['grazie', 'grátsie', 'obrigado, obrigada', ''], ['prego', 'prégo', 'de nada, por favor (ao oferecer)', ''], ['per favore', 'per favôre', 'por favor', ''], ['scusi', 'skúzi', 'com licença, desculpe (formal)', ''],
      ]),
      producao(7, 'Soletre em voz alta o seu nome e o seu sobrenome (por exemplo: F-E-L-I-P-E: éffe, é, élle, i, pi, é). Depois diga: «Buongiorno! Grazie. Arrivederci.»'),
    ]),
    sessao('S2', 'Quando c, g e sc mudam de som', [
      revisao(5, 'Soletre o nome da sua cidade em italiano e diga «buongiorno», «grazie» e «arrivederci» sem olhar.'),
      gramatica(15, 'c, g, ch, gh, sc, gn e gli', 'PASSO 1: «c» antes de «a», «o», «u» é duro, como em «casa»: «casa», «come», «cura». Antes de «e» e «i» soa «tch»: «cena», «cinema», «ciao». PASSO 2: para ter o som duro antes de «e» e «i», escreve-se «ch»: «che», «chi», «perché», «chilo». O «h» não soa, só protege o som. PASSO 3: «g» funciona do mesmo jeito. Antes de «a», «o», «u» é duro: «gatto», «gola», «gusto». Antes de «e» e «i» soa «dj»: «gente», «gita». Para o som duro antes de «e» e «i», escreve-se «gh»: «spaghetti», «ghiaccio». PASSO 4: o «i» de «ci» e «gi» diante de «a», «o», «u» não soa; serve só para dar o som «tch» ou «dj»: «ciao» (tchao), «giorno» (djôrno), «arancia» (arántcha). PASSO 5: «sc» antes de «e» e «i» soa «x» (como «ch» de «xícara»): «scena», «sci». Antes de «a», «o», «u», e em «sch», soa «sk»: «scuola», «schermo». PASSO 6: «gn» soa «nh»: «gnocchi», «signora», «bagno». «gli» soa «lh»: «figlio», «famiglia», «aglio». PASSO 7: «t» e «d» são sempre «t» e «d», mesmo antes de «i»: «tipo» é «típo» e «dire» é «dire», nunca «tchipo» ou «djire» como acontece no português de boa parte do Brasil.', {
        tag: 'Pronúncia',
        comparacao: 'o português tem quase todos esses sons: «nh» e «lh» existem na nossa escrita, e o «ch» de «chave» é o «sc» de «scena». A diferença está na grafia: o italiano escreve o som duro com «ch» e «gh» (não com «qu» e «gu» como nós em «quente» e «guerra»), e nunca transforma «t» e «d» em «tch» e «dj» antes de «i».',
        tabela: [
          { grafia: 'c + a, o, u', som: 'k (duro)', exemplos: 'casa, come, cura' },
          { grafia: 'c + e, i', som: 'tch', exemplos: 'cena, cinema, ciao' },
          { grafia: 'ch + e, i', som: 'k (duro)', exemplos: 'che, chi, perché' },
          { grafia: 'g + a, o, u', som: 'g (duro)', exemplos: 'gatto, gola, gusto' },
          { grafia: 'g + e, i', som: 'dj', exemplos: 'gente, gita, giorno' },
          { grafia: 'gh + e, i', som: 'g (duro)', exemplos: 'spaghetti, ghiaccio' },
          { grafia: 'sc + e, i', som: 'x (como «ch» de «chave»)', exemplos: 'scena, sci, pesce' },
          { grafia: 'sc + a, o, u; sch', som: 'sk', exemplos: 'scuola, scala, schermo' },
          { grafia: 'gn', som: 'nh', exemplos: 'gnocchi, signora, bagno' },
          { grafia: 'gli', som: 'lh', exemplos: 'figlio, famiglia, aglio' },
        ],
        erros: [['ler «che» como «tchê»', 'kê', 'Com «ch» o som é duro; o «h» protege o «c».'], ['ler «ciao» com o som «si-ao»', 'tchao', 'O «c» antes de «i» soa «tch», e o «i» quase não soa.'], ['ler «spaghetti» como «spadjétti»', 'spaguétti', '«gh» dá o «g» duro; sem «h», «ghe» seria «dje».'], ['ler «tipo» como «tchipo»', 'típo', 'Em italiano, «t» e «d» não viram «tch» e «dj» antes de «i».']],
      }),
      palavras(5, [
        ['cena', 'tchêna', 'jantar', ''], ['chi', 'ki', 'quem', ''], ['gelato', 'djeláto', 'sorvete', ''], ['gnocchi', 'nhókki', 'nhoque', ''], ['figlio', 'fílho', 'filho', ''], ['scuola', 'skuóla', 'escola', ''],
      ]),
      producao(5, 'Diga cinco vezes, devagar e depois mais rápido: «Che cena! Chi è Gianni? Il figlio di Giorgio mangia gli gnocchi.» Tente não dizer «tch» em «chi».'),
    ]),
    sessao('S3', 'Vogais, consoantes dobradas e acento', [
      revisao(5, 'Leia em voz alta: cena, che, gente, spaghetti, scuola, gnocchi, famiglia. Qual é o som de cada grupo de letras?'),
      gramatica(14, 'Vogais puras, consoantes dobradas e acento tônico', 'PASSO 1: as vogais italianas são sempre claras e completas. O «e» final de «bene», «latte», «come» soa «e», nunca «i»; o «o» final de «tavolo», «otto» soa «o», nunca «u». É a maior diferença para o português do Brasil, em que «leite» soa «leiti» e «tudo» soa «tudu». PASSO 2: toda consoante dobrada é pronunciada mais longa, com uma pequena pausa antes dela. Muda o significado: «pala» (pá) e «palla» (bola), «caro» (caro) e «carro» (carro), «nono» (nono) e «nonno» (avô), «sera» (noite) e «serra» (estufa). PASSO 3: o acento tônico cai, na maioria das palavras, na penúltima sílaba: «amíco», «mámma», «bélla». Em outras, cai na antepenúltima: «télefono», «albero». PASSO 4: o acento escrito aparece quase só no final das palavras: «città», «caffè», «perché», «università». A vogal final é forte e o acento é grave (`), exceto em «perché», «né», «sé» (agudo). PASSO 5: em monossílabos, o acento distingue palavras: «è» (é, verbo) × «e» (e), «sì» (sim) × «si» (se), «là» (lá) × «la» (a, artigo). PASSO 6: «h» nunca soa: «ho», «hotel», «hanno». «qu» soa «ku» com o «u» audível: «quattro» (kuáttro), «questo» (kuêsto). PASSO 7: o «s» entre vogais pode soar «z» («casa», «rosa») ou «s» (varia por região); ouça o áudio. O «z» soa «ts» ou «dz» («grazie», «zucchero»); não há regra simples, aprenda com o áudio. PASSO 8: com amigos e jovens se usa «tu» («Come stai?»). Com desconhecidos, pessoas mais velhas e no trabalho, usa-se «Lei», que é a terceira pessoa («Come sta?»). Na dúvida, use «Lei».', {
        tag: 'Pronúncia',
        comparacao: 'em português as vogais finais átonas se reduzem («leite» soa «leiti», «carro» soa «carru») e não há consoantes dobradas audíveis (escrevemos «carro» com rr, mas o som é um só). Em italiano, a vogal final se mantém inteira e a dobra se ouve de verdade.',
        tabela: [
          { padrao: 'vogal final', como: 'inteira: e, o, a, i, u', exemplos: 'bene, latte, tavolo, pasta, amici' },
          { padrao: 'consoante dobrada', como: 'mais longa, com pausa antes', exemplos: 'pala/palla, caro/carro, nono/nonno, sera/serra' },
          { padrao: 'acento tônico', como: 'quase sempre na penúltima sílaba', exemplos: 'amíco, mámma, bélla' },
          { padrao: 'acento escrito', como: 'no final da palavra', exemplos: 'città, caffè, perché, università' },
          { padrao: 'monossílabos', como: 'o acento distingue', exemplos: 'è/e, sì/si, là/la' },
          { padrao: 'h', como: 'nunca soa', exemplos: 'ho, hotel, hanno' },
          { padrao: 'qu', como: 'ku, com o u audível', exemplos: 'quattro, questo, quando' },
        ],
        erros: [['ler «latte» como «látchi»', 'látte', 'A vogal final «e» não vira «i» em italiano.'], ['ler «palla» como «pala»', 'pálla (consoante longa)', 'A dobra muda a palavra: pá × bola.'], ['escrever «citta» sem acento', 'città', 'O acento grave no final marca a sílaba forte.'], ['ler «hotel» com «h» forte', 'otél', 'O «h» italiano é mudo.']],
      }),
      palavras(6, [
        ['caffè', 'kaffé', 'café', ''], ['Come stai?', 'kôme stái', 'como você está? (informal)', ''], ['Come sta?', 'kôme stá', 'como o senhor, a senhora está? (formal, Lei)', ''], ['Sto bene, grazie.', 'stó bêne grátsie', 'vou bem, obrigado(a)', ''], ['E Lei?', 'e léi', 'e o senhor, a senhora?', ''], ['Piacere', 'piatchêre', 'prazer, muito prazer', ''],
      ]),
      producao(5, 'Leia em voz alta, com as vogais inteiras: «Buongiorno! Come sta? — Sto bene, grazie. E Lei?» Depois, com um amigo: «Ciao! Come stai?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 1', [
      revisao(5, 'Soletre três palavras do alfabeto de memória e diga as saudações da aula, uma com «tu» e uma com «Lei».'),
      exercicios(20, [
        ouvir('buongiorno', ['buongiorno', 'buonasera', 'arrivederci'], 'buongiorno', 'Ouça «giorno», que soa «djôrno».'), ouvir('grazie', ['grazie', 'prego', 'scusi'], 'grazie', 'Ouça o «zie», com «ts».'), ouvir('palla', ['pala', 'palla', 'balla'], 'palla', 'Ouça a consoante longa de «palla».'),
        ditado('arrivederci', 'Escreva: arrivederci.'), ditado('per favore', 'Escreva: per favore.'), ditado('Come sta?', 'Escreva: Come sta?'),
        mc('Como se lê «cena»?', ['tchêna', 'kêna', 'sêna'], 'tchêna', '«c» antes de «e» soa «tch».'),
        mc('Como se lê «che»?', ['kê', 'tchê', 'xê'], 'kê', 'Com «ch», o som é duro.'),
        mc('Como se lê «gnocchi»?', ['nhókki', 'gnókki', 'nókki'], 'nhókki', '«gn» soa «nh».'),
        mc('Qual destas palavras significa «avô»?', ['nonno', 'nono', 'nena'], 'nonno', 'A consoante dobrada muda o sentido: nono é «nono».'),
        mc('Com um desconhecido mais velho, qual forma de tratamento se usa?', ['Lei', 'tu', 'ciao'], 'Lei', 'Com desconhecidos, usa-se «Lei», a terceira pessoa.'),
        lacuna('___ sta? (Como o senhor está?)', ['Come', 'Chi', 'Che'], 'Come', '«Come sta?» é a pergunta formal.'), lacuna('Sto bene, ___ . (obrigado)', ['grazie', 'prego', 'ciao'], 'grazie', '«Grazie» agradece.'),
        lacuna('Grazie! — ___ . (de nada)', ['Prego', 'Scusi', 'Piacere'], 'Prego', '«Prego» responde a «grazie».'),
        ordem('Ordene: «Sto bene, grazie.»', ['Sto', 'bene,', 'grazie'], 'Sto bene, grazie.', 'Resposta usual a «Come stai?».'),
        livre('Escreva em italiano: bom dia, obrigado e tchau.', 'Buongiorno. Grazie. Arrivederci.'),
      ]),
      producao(5, 'Cumprimente em italiano um amigo e depois um desconhecido mais velho, em voz alta, e despeça-se de cada um.'),
    ]),
  ],
});
