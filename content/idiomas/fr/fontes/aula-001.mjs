import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 1, titulo: 'Sons, alfabeto e primeiras palavras', nivel: 'a1',
  objetivo: 'Soletrar em francês, reconhecer os sons que o português não tem (u, eu, vogais nasais, r), entender as letras mudas, a ligação e a elisão, e fazer as primeiras saudações.',
  nota: 'Você soletra, pronuncia os sons mais difíceis e cumprimenta em francês. Próxima aula: o verbo «être» (ser e estar) e os adjetivos.',
  sessoes: [
    sessao('S1', 'O alfabeto e as primeiras saudações', [
      intro(3, 'Você já conhece muito francês: restaurant, menu, hôtel, café, croissant, boutique, bonjour. Nesta aula você começa pelo som, não pela escrita. Ao lado das palavras há uma pronúncia aproximada em letras do português: «ü» é o «u» francês (lábios de «u», língua de «i»); «ö» é o som de «eu» (lábios de «ô», língua de «ê»); «ã», «õ» e «ẽ» são vogais nasais; «x» lê-se como «ch» de «xá». É uma ajuda, não substitui o áudio: ouça sempre antes de repetir.'),
      alfabeto(12, [
        ['Parte 1 — A a I', [
          ['A', 'a', 'nome da letra: «a»', '/a/', 'ami', 'amigo', 'a'], ['B', 'b', 'nome da letra: «bê»', '/be/', 'bonjour', 'bom dia', 'bé'], ['C', 'c', 'nome da letra: «sê»', '/se/', 'café', 'café', 'cé'],
          ['D', 'd', 'nome da letra: «dê»', '/de/', 'dix', 'dez', 'dé'], ['E', 'e', 'nome da letra: «eu» (som de ö)', '/ə/', 'elle', 'ela', 'eu'], ['F', 'f', 'nome da letra: «éf»', '/ɛf/', 'fille', 'menina, filha', 'effe'],
          ['G', 'g', 'nome da letra: «jê»', '/ʒe/', 'gare', 'estação', 'gé'], ['H', 'h', 'nome da letra: «áx» (o h nunca soa nas palavras)', '/aʃ/', 'hôtel', 'hotel', 'ache'], ['I', 'i', 'nome da letra: «i»', '/i/', 'ici', 'aqui', 'i'],
        ]],
        ['Parte 2 — J a R', [
          ['J', 'j', 'nome da letra: «ji»', '/ʒi/', 'jour', 'dia', 'ji'], ['K', 'k', 'nome da letra: «ká»', '/ka/', 'kilo', 'quilo', 'ka'], ['L', 'l', 'nome da letra: «él»', '/ɛl/', 'lune', 'lua', 'elle'],
          ['M', 'm', 'nome da letra: «ém»', '/ɛm/', 'merci', 'obrigado', 'emme'], ['N', 'n', 'nome da letra: «én»', '/ɛn/', 'nom', 'nome, sobrenome', 'enne'], ['O', 'o', 'nome da letra: «ô»', '/o/', 'oui', 'sim', 'o'],
          ['P', 'p', 'nome da letra: «pê»', '/pe/', 'pain', 'pão', 'pé'], ['Q', 'q', 'nome da letra: «kü»', '/ky/', 'quatre', 'quatro', 'ku'], ['R', 'r', 'nome da letra: «ér» (r gutural)', '/ɛʁ/', 'rue', 'rua', 'erre'],
        ]],
        ['Parte 3 — S a Z', [
          ['S', 's', 'nome da letra: «és»', '/ɛs/', 'sac', 'bolsa, sacola', 'esse'], ['T', 't', 'nome da letra: «tê»', '/te/', 'table', 'mesa', 'té'], ['U', 'u', 'nome da letra: «ü» (u francês)', '/y/', 'une', 'uma', 'u'],
          ['V', 'v', 'nome da letra: «vê»', '/ve/', 'ville', 'cidade', 'vé'], ['W', 'w', 'nome da letra: «dublevê»', '/dubləve/', 'wagon', 'vagão', 'double vé'], ['X', 'x', 'nome da letra: «iks»', '/iks/', 'taxi', 'táxi', 'iks'],
          ['Y', 'y', 'nome da letra: «i grék»', '/igʁɛk/', 'yaourt', 'iogurte', 'i grec'], ['Z', 'z', 'nome da letra: «zéd»', '/zɛd/', 'zéro', 'zero', 'zède'],
        ]],
      ]),
      palavras(8, [
        ['bonjour', 'bõjúr', 'bom dia, olá', ''], ['bonsoir', 'bõsuár', 'boa noite (ao chegar)', ''], ['salut', 'salü', 'oi, tchau (informal)', ''], ['au revoir', 'o revuár', 'tchau, até logo', ''],
        ['merci', 'mérsi', 'obrigado, obrigada', ''], ['s\'il vous plaît', 'sil vu plé', 'por favor', ''], ['de rien', 'de riẽ', 'de nada', ''], ['pardon', 'pardõ', 'desculpe, com licença', ''],
      ]),
      producao(7, 'Soletre em voz alta o seu nome e o seu sobrenome (por exemplo: F-E-L-I-P-E: effe, eu, elle, i, pé, eu). Depois diga: «Bonjour ! Merci. Au revoir.»'),
    ]),
    sessao('S2', 'Sons que o português não tem', [
      revisao(5, 'Soletre o nome da sua cidade em francês e diga «bonjour», «merci» e «au revoir» sem olhar.'),
      gramatica(15, 'Os sons que mais confundem os brasileiros', 'PASSO 1: o «u» francês (ü). Arredonde os lábios como para dizer «u», mas coloque a língua na posição do «i», bem à frente. Em «tu», «rue», «salut», o som não é o «u» de «tudo» (esse é o «ou» francês) nem um «i». PASSO 2: as vogais nasais. Em «an/en» (ã), «on» (õ) e «in/ain/ein» (ẽ), o ar sai pelo nariz e o «n» não se pronuncia como consoante. Não feche a boca com «m» ou «n» no final: «bon» é «bõ», sem «m». PASSO 3: o «r» francês é na garganta, e o brasileiro já tem um som próximo no «r» de «rato». Não use o «r» de «caro» (de uma batida de língua). PASSO 4: «eu» e «œu» (ö): lábios de «ô» com a língua de «ê»: «deux», «peu», «sœur». PASSO 5: o «e» sem acento no fim da sílaba é fraco e às vezes some: «je», «le», «petite». O «h» nunca se pronuncia: «hôtel» soa «ôtél».', {
        tag: 'Pronúncia',
        comparacao: 'o português tem vogais nasais («bom», «lã», «sim»), então as nasais francesas são mais fáceis para você do que para um inglês. Mas o português não tem o «ü» nem o «ö», e costuma fechar a nasal com um «m» ou «n» que o francês não tem.',
        tabela: [
          { som: '«u» francês (ü)', como: 'lábios de «u», língua de «i»', exemplos: 'tu, rue, salut, une', erro: 'dizer «tu» como em português' },
          { som: 'nasal «an/en»', como: 'ã, sem «n» no final', exemplos: 'enfant, France, dans', erro: 'dizer «an-n»' },
          { som: 'nasal «on»', como: 'õ, sem «m» no final', exemplos: 'bon, nom, bonjour', erro: 'dizer «bom»' },
          { som: 'nasal «in/ain»', como: 'ẽ, sem «n» no final', exemplos: 'pain, vin, matin', erro: 'dizer «pain» como «pai-n»' },
          { som: '«eu» (ö)', como: 'lábios de «ô», língua de «ê»', exemplos: 'deux, peu, sœur', erro: 'dizer «deu» ou «du»' },
          { som: '«r» gutural', como: 'na garganta, como o «r» de «rato»', exemplos: 'rue, merci, rouge', erro: 'r de uma batida de língua' },
          { som: '«h» mudo', como: 'não se pronuncia', exemplos: 'hôtel, homme, heure', erro: 'dizer o «h»' },
        ],
        erros: [['dizer «bom» para bon', 'bõ (nasal, sem «m»)', 'A vogal é nasal, mas o «n» não vira consoante.'], ['dizer «tu» como em «tudo» para tu', 'tü (u francês)', 'Língua à frente, lábios arredondados.'], ['dizer «hôtel» com h aspirado', 'ôtél', 'O «h» francês não se pronuncia.'], ['dizer «deu» para deux', 'dö', 'Lábios de «ô», língua de «ê».']],
      }),
      palavras(5, [
        ['tu', 'tü', 'você (informal)', ''], ['rue', 'rü', 'rua', ''], ['bon', 'bõ', 'bom', ''], ['deux', 'dö', 'dois', ''], ['pain', 'pẽ', 'pão', ''],
      ]),
      producao(5, 'Diga cinco vezes, devagar e depois mais rápido: «Un bon pain. Deux rues. Tu as du pain.»'),
    ]),
    sessao('S3', 'Ler em francês: acentos, letras mudas e ligação', [
      revisao(5, 'Diga em voz alta: tu, rue, bon, deux, pain. Qual é o som de cada um?'),
      gramatica(15, 'Acentos, letras mudas, ligação e elisão', 'PASSO 1: os acentos mudam o som. «é» (agudo) é um «ê» fechado: «café». «è» e «ê» são um «é» aberto: «père», «fête». O circunflexo (â, î, ô, û) quase sempre só marca uma letra antiga que sumiu. O «ç» soa como «s»: «garçon», «français». O trema («ë», «ï») separa vogais: «Noël». PASSO 2: a maioria das consoantes finais não soa: «petit», «grand», «vous», «trop». As que costumam soar são c, r, f e l (lembre de «CaReFuL»): «sac», «bonjour», «chef», «animal». PASSO 3: a ligação (liaison) liga a consoante final muda à vogal da palavra seguinte: «vous avez» soa «vu-zavê»; «les amis» soa «lê-zami». O «s» da ligação soa como «z». PASSO 4: a elisão corta a vogal final de palavras curtas diante de vogal, e usa o apóstrofo: «je + aime = j\'aime», «le + ami = l\'ami», «ce + est = c\'est», «de + eau = d\'eau». PASSO 5: pronuncie a frase como uma onda contínua, sem pausas entre as palavras.', {
        tag: 'Pronúncia',
        comparacao: 'em português quase sempre você pronuncia o que escreve. Em francês, muitas letras do fim das palavras não soam, e as palavras se ligam umas às outras. O áudio vem antes da leitura.',
        tabela: [
          { padrao: 'é', som: '«ê» fechado', exemplos: 'café, été, écouter' },
          { padrao: 'è, ê', som: '«é» aberto', exemplos: 'père, mère, fête' },
          { padrao: 'ç', som: '«s»', exemplos: 'garçon, français, ça' },
          { padrao: 'consoante final', som: 'quase sempre muda', exemplos: 'petit, grand, vous, trop' },
          { padrao: 'c, r, f, l finais', som: 'costumam soar', exemplos: 'sac, bonjour, chef, animal' },
          { padrao: 'liaison', som: '«s» soa como «z»', exemplos: 'les amis, vous avez, ils ont' },
          { padrao: 'elisão', som: 'apóstrofo', exemplos: 'j\'aime, l\'ami, c\'est, d\'eau' },
        ],
        erros: [['dizer o «t» de «petit»', 'peti (sem «t» final)', 'A consoante final costuma ser muda.'], ['«garcon» (sem cedilha)', 'garçon', 'O «ç» soa como «s».'], ['«les amis» sem ligação', 'lê-zami', 'O «s» liga à vogal e soa como «z».'], ['«je aime»', 'j\'aime', 'Diante de vogal, «je» vira «j\'».']],
      }),
      palavras(5, [
        ['café', 'kafé', 'café', ''], ['garçon', 'garsõ', 'garçom, menino', ''], ['Ça va ?', 'sa va', 'tudo bem?', ''], ['Ça va bien.', 'sa va biẽ', 'vou bem', ''], ['Et toi ?', 'é tuá', 'e você? (informal)', ''],
      ]),
      producao(5, 'Leia em voz alta, com ligação: «Bonjour ! Ça va ? — Ça va bien, merci. Et toi ?» Depois leia: «Les amis ont un café.»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 1', [
      revisao(5, 'Soletre três palavras do alfabeto de memória e diga as saudações da aula.'),
      exercicios(20, [
        ouvir('bonjour', ['bonjour', 'bonsoir', 'au revoir'], 'bonjour', 'Ouça a diferença entre «bonjour» e «bonsoir».'), ouvir('merci', ['merci', 'pardon', 'salut'], 'merci', 'Ouça o «r» gutural e o «ci».'), ouvir('Ça va bien', ['Ça va bien', 'Ça va mal', 'Ça se fait'], 'Ça va bien', 'Ouça «bien», com a nasal «ẽ».'),
        ditado('bonjour', 'Escreva: bonjour.'), ditado('au revoir', 'Escreva: au revoir.'), ditado('s\'il vous plaît', 'Escreva: s\'il vous plaît.'),
        mc('Qual destas palavras tem o «u» francês (ü)?', ['rue', 'roue', 'route'], 'rue', 'Em «rue», lábios de «u» e língua de «i».'),
        mc('Como soa o «n» de «bon»?', ['Nasaliza a vogal, não é consoante', 'É um «n» forte, como em «banana»', 'Vira um «m»'], 'Nasaliza a vogal, não é consoante', 'A vogal é nasal e o «n» não soa.'),
        mc('O que significa «de rien»?', ['de nada', 'por favor', 'desculpe'], 'de nada', 'Resposta a «merci».'),
        mc('Qual é a forma correta de «je» + «aime»?', ['j\'aime', 'je aime', 'jaime'], 'j\'aime', 'Elisão: «je» vira «j\'» diante de vogal.'),
        lacuna('___ revoir ! (tchau)', ['Au', 'A', 'Le'], 'Au', '«Au revoir» é a despedida padrão.'), lacuna('Ça ___ ? (tudo bem?)', ['va', 'vais', 'est'], 'va', '«Ça va ?» é fixo.'),
        lacuna('Merci ! — De ___ . (de nada)', ['rien', 'pardon', 'bonjour'], 'rien', '«De rien».'),
        ordem('Ordene: «Ça va bien, merci.»', ['Ça', 'va', 'bien,', 'merci'], 'Ça va bien, merci.', 'Resposta usual a «Ça va ?».'),
        livre('Escreva em francês: bom dia, obrigado e tchau.', 'Bonjour. Merci. Au revoir.'),
      ]),
      producao(5, 'Cumprimente um amigo imaginário em francês e despeça-se dele, em voz alta.'),
    ]),
  ],
});
