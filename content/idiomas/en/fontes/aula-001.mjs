import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 1, titulo: 'Sons, alfabeto e primeiras palavras', nivel: 'a1',
  objetivo: 'Soletrar em inglês, reconhecer os sons que o português não tem (th, r, h, vogais curtas e longas), entender por que a escrita engana e fazer as primeiras saudações.',
  nota: 'Você soletra, pronuncia os sons mais difíceis e cumprimenta em inglês. Próxima aula: o verbo «to be» (ser e estar).',
  sessoes: [
    sessao('S1', 'O alfabeto e as primeiras saudações', [
      intro(3, 'Você já conhece muito inglês: shopping, e-mail, internet, ok, hot dog. Nesta aula você começa pelo som, não pela escrita. Ao lado das palavras há uma pronúncia aproximada em letras do português: o acento agudo marca a sílaba forte (hélou), «sh» soa como o «ch» de «chave», «tch» como o «tch» de «tchau», «dj» como o «dj» de «djim» e vogal dobrada (ii) marca um som mais longo. É um apoio, não substitui o áudio: ouça sempre.'),
      alfabeto(12, [
        ['Parte 1 — A a I', [
          ['A', 'a', 'nome da letra: «êi»', '/eɪ/', 'apple', 'maçã', 'ay'], ['B', 'b', 'nome da letra: «bi»', '/biː/', 'book', 'livro', 'bee'], ['C', 'c', 'nome da letra: «si»', '/siː/', 'cat', 'gato', 'see'], ['D', 'd', 'nome da letra: «di»', '/diː/', 'dog', 'cachorro', 'dee'], ['E', 'e', 'nome da letra: «ii»', '/iː/', 'egg', 'ovo', 'ee'],
          ['F', 'f', 'nome da letra: «éf»', '/ɛf/', 'fish', 'peixe', 'eff'], ['G', 'g', 'nome da letra: «dji»', '/dʒiː/', 'green', 'verde', 'gee'], ['H', 'h', 'nome da letra: «êitch»', '/eɪtʃ/', 'house', 'casa', 'aitch'], ['I', 'i', 'nome da letra: «ai»', '/aɪ/', 'ice', 'gelo', 'eye'],
        ]],
        ['Parte 2 — J a R', [
          ['J', 'j', 'nome da letra: «djêi»', '/dʒeɪ/', 'juice', 'suco', 'jay'], ['K', 'k', 'nome da letra: «kêi»', '/keɪ/', 'key', 'chave', 'kay'], ['L', 'l', 'nome da letra: «él»', '/ɛl/', 'lamp', 'lâmpada', 'ell'], ['M', 'm', 'nome da letra: «ém»', '/ɛm/', 'milk', 'leite', 'em'], ['N', 'n', 'nome da letra: «én»', '/ɛn/', 'name', 'nome', 'en'],
          ['O', 'o', 'nome da letra: «ôu»', '/oʊ/', 'orange', 'laranja', 'oh'], ['P', 'p', 'nome da letra: «pi»', '/piː/', 'pen', 'caneta', 'pee'], ['Q', 'q', 'nome da letra: «kiú»', '/kjuː/', 'question', 'pergunta', 'cue'], ['R', 'r', 'nome da letra: «ár»', '/ɑːr/', 'rain', 'chuva', 'are'],
        ]],
        ['Parte 3 — S a Z', [
          ['S', 's', 'nome da letra: «és»', '/ɛs/', 'sun', 'sol', 'ess'], ['T', 't', 'nome da letra: «ti»', '/tiː/', 'table', 'mesa', 'tea'], ['U', 'u', 'nome da letra: «iú»', '/juː/', 'umbrella', 'guarda-chuva', 'you'], ['V', 'v', 'nome da letra: «vi»', '/viː/', 'video', 'vídeo', 'vee'],
          ['W', 'w', 'nome da letra: «dâbliu»', '/ˈdʌbəl.juː/', 'water', 'água', 'double you'], ['X', 'x', 'nome da letra: «éks»', '/ɛks/', 'box', 'caixa', 'ex'], ['Y', 'y', 'nome da letra: «uai»', '/waɪ/', 'yes', 'sim', 'why'], ['Z', 'z', 'nome da letra: «zi»', '/ziː/', 'zoo', 'zoológico', 'zee'],
        ]],
      ]),
      palavras(8, [
        ['hello', 'helôu', 'olá', ''], ['hi', 'hai', 'oi', ''], ['good morning', 'gud mórnin', 'bom dia', ''], ['good night', 'gud náit', 'boa noite (ao se despedir ou ir dormir)', ''], ['goodbye', 'gudbái', 'adeus, tchau', ''],
        ['please', 'pliiz', 'por favor', ''], ['thank you', 'thénk iú', 'obrigado, obrigada', ''], ['you\'re welcome', 'iór uélkam', 'de nada', ''], ['sorry', 'sóri', 'desculpe (por um erro)', ''], ['excuse me', 'ekskiúz mi', 'com licença, perdão (para chamar a atenção)', ''],
      ]),
      producao(7, 'Soletre em voz alta o seu nome e o seu sobrenome (por exemplo: F-E-L-I-P-E). Depois diga: «Hello! Good morning. Thank you. Goodbye.»'),
    ]),
    sessao('S2', 'Sons que o português não tem', [
      revisao(5, 'Soletre em voz alta o nome da sua cidade e diga «hello», «thank you» e «goodbye» sem olhar.'),
      gramatica(15, 'Os cinco sons que mais confundem os brasileiros', 'PASSO 1: o «th». Existem dois: o som SEM voz (think, thank, three) e o som COM voz (this, that, the). Nos dois, a ponta da língua fica levemente entre os dentes e o ar passa pela frente. Não troque por «t», «f», «s» nem «d». PASSO 2: o «r» americano. A língua puxa para trás e NÃO toca o céu da boca; os lábios ficam um pouco arredondados. Não é o «rr» de «rato» e não é o «r» de «caro». Ele também soa no fim da palavra: car, teacher. PASSO 3: o «h» no começo da palavra é só um sopro leve de ar (hello, house, he). Não desaparece (hotel não é «otel») e não é áspero como o «rr» de «rato». PASSO 4: consoante no fim da palavra fica sozinha, sem vogal extra: «stop» (não «stópi»), «bed» (não «bédi»), «Facebook» (não «feicibúki»). PASSO 5: vogal curta e vogal longa mudam o significado: ship (navio, i curto) × sheep (ovelha, i longo); live × leave; full × fool.', {
        tag: 'Pronúncia',
        comparacao: 'o português tem vogais abertas e fechadas, mas não tem o «th», não tem este «r» e costuma colocar uma vogal depois das consoantes finais («internet» vira «internéti»). Esses quatro pontos concentram a maior parte do sotaque brasileiro em inglês.',
        tabela: [
          { som: '«th» sem voz', como: 'ponta da língua entre os dentes, só ar', exemplos: 'think, thank, three, month', erro: 'tink, fank, sank' },
          { som: '«th» com voz', como: 'mesma posição, com a voz ligada', exemplos: 'this, that, the, mother', erro: 'dis, dat, de' },
          { som: '«r»', como: 'língua para trás, sem tocar o céu da boca', exemplos: 'red, right, car, teacher', erro: 'rr de «rato»' },
          { som: '«h» inicial', como: 'sopro leve, sem aspereza', exemplos: 'hello, house, he, hotel', erro: 'omitir o h' },
          { som: 'i curto × i longo', como: 'i curto é rápido; i longo é esticado', exemplos: 'ship × sheep, it × eat', erro: 'dizer os dois iguais' },
        ],
        erros: [['«tink» ou «fink» para think', 'think', 'Ponta da língua entre os dentes, só ar.'], ['«otel» para hotel', 'hotel', 'O h inicial é um sopro leve, não some.'], ['«stópi» para stop', 'stop', 'Não acrescente vogal depois da última consoante.'], ['dizer ship e sheep igual', 'ship × sheep', 'O i curto e o i longo são palavras diferentes.']],
      }),
      palavras(5, [
        ['think', 'thínk', 'pensar', ''], ['this', 'dhis', 'este, isto', ''], ['red', 'réd', 'vermelho', ''], ['hotel', 'hôutél', 'hotel', ''], ['ship', 'ship', 'navio (i curto)', ''], ['sheep', 'shiip', 'ovelha (i longo)', ''],
      ]),
      producao(5, 'Diga cinco vezes, devagar e depois mais rápido: «This is three thin things.» Em seguida: «The red ship is here.»'),
    ]),
    sessao('S3', 'Ler em inglês: quando a escrita engana', [
      revisao(5, 'Diga em voz alta: think, this, red, hotel, ship, sheep. Qual é o som de cada «th»?'),
      gramatica(15, 'Por que a escrita do inglês engana', 'PASSO 1: em inglês, a mesma letra pode ter sons diferentes, e o mesmo som pode ter escritas diferentes. Não adianta ler como se lê em português. PASSO 2: existem padrões que ajudam. O mais útil: vogal + consoante + «e» no fim. O «e» final não se pronuncia, mas faz a vogal «dizer o seu nome»: cap → cape, hop → hope, bit → bite. PASSO 3: duas vogais juntas costumam dar um som longo: «ee» e «ea» (meet, eat), «ai» e «ay» (rain, day), «oa» (boat). PASSO 4: o final «-tion» soa «shan»: nation, information. PASSO 5: há letras escritas que não soam: knife (o k não soa), write (o w não soa), hour (o h não soa), listen (o t não soa). PASSO 6: cada palavra tem UMA sílaba forte, e ela não vem marcada na escrita. Por isso, aprenda a palavra ouvindo-a, não só lendo-a. Em dúvida, use um dicionário com áudio.', {
        tag: 'Pronúncia',
        comparacao: 'em português quase sempre você escreve o que fala. Em inglês a ortografia guarda a história da palavra, e por isso o áudio vem antes da leitura.',
        tabela: [
          { padrao: 'vogal + consoante + e final', som: 'a vogal diz o próprio nome', exemplos: 'cap → cape, hop → hope, bit → bite' },
          { padrao: 'ee, ea', som: 'i longo', exemplos: 'meet, see, eat' },
          { padrao: 'ai, ay', som: 'êi', exemplos: 'rain, day' },
          { padrao: 'oa', som: 'ôu', exemplos: 'boat, coat' },
          { padrao: '-tion', som: '«shan»', exemplos: 'nation, information' },
          { padrao: 'letra que não soa', som: 'silêncio', exemplos: 'knife, write, hour, listen' },
        ],
        erros: [['ler «make» como «mêiki»', 'make /meɪk/', 'O e final não soa; ele só muda a vogal.'], ['ler «knife» com o k', 'knife /naɪf/', 'O k inicial antes de n não soa.'], ['ler «nation» como «nêition»', 'nation /ˈneɪʃən/', '-tion soa «shan».']],
      }),
      palavras(6, [
        ['name', 'nêim', 'nome', ''], ['make', 'mêik', 'fazer', ''], ['rain', 'rêin', 'chuva', ''], ['boat', 'bôut', 'barco', ''], ['nation', 'nêishan', 'nação', ''], ['knife', 'náif', 'faca', ''],
      ]),
      producao(4, 'Diga as palavras em pares e note a diferença: cap × cape, hop × hope, bit × bite. Depois escreva 3 palavras que você conhece em inglês e diga se o som bate com a escrita.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 1', [
      revisao(5, 'Releia as 5 dicas de pronúncia da sessão 2 e escolha as duas em que você mais erra.'),
      exercicios(20, [
        ouvir('Good morning', ['Good morning', 'Good night', 'Goodbye'], 'Good morning', 'Ouça: «morning» é de manhã.'), ouvir('Thank you', ['Thank you', 'Sorry', 'Excuse me'], 'Thank you', 'Ouça: agradecimento.'), ouvir('Excuse me', ['Excuse me', 'Please', 'You are welcome'], 'Excuse me', 'Ouça: «excuse me» chama a atenção.'), ditado('Hello', 'Escreva: hello.'), ditado('Goodbye', 'Escreva: goodbye, em uma palavra só.'),
        mc('Qual palavra começa com o som «th» de «think»?', ['three', 'tree', 'free'], 'three', '«three» começa com «th»; «tree» começa com «tr» e «free» com «f».'), mc('O que acontece com a vogal em «cape» (comparado a «cap»)?', ['ela diz o próprio nome (êi)', 'ela fica muda', 'ela fica mais curta'], 'ela diz o próprio nome (êi)', 'O e final é mudo, mas faz a vogal ser longa.'), mc('Em «hotel», o que fazer com o «h» inicial?', ['pronunciar um sopro leve', 'não pronunciar', 'pronunciar como «rr» áspero'], 'pronunciar um sopro leve', 'O h inicial existe, mas é leve.'), mc('Qual palavra tem uma letra escrita que NÃO soa?', ['knife', 'cat', 'red'], 'knife', 'Em «knife» o k não soa: «náif».'),
        lacuna('Thank ___. (obrigado)', ['you', 'me', 'we'], 'you', '«Thank you» é a forma completa.'), lacuna('Good ___. (boa noite, ao se despedir)', ['night', 'morning', 'please'], 'night', '«Good night» ao se despedir ou ir dormir.'), lacuna('___ me. (com licença)', ['Excuse', 'Sorry', 'Please'], 'Excuse', '«Excuse me» chama a atenção; «sorry» pede desculpa.'),
        ordem('Ordene: «Thank you very much.»', ['Thank', 'you', 'very', 'much'], 'Thank you very much.', 'Forma enfática de agradecer.'), ordem('Ordene: «Good morning, Anna.»', ['Good', 'morning', 'Anna'], 'Good morning, Anna.', 'Cumprimento com o nome.'),
        livre('Escreva em inglês: uma saudação, um agradecimento e uma despedida.', 'Hello! Thank you. Goodbye.'),
      ]),
      producao(5, 'Diga em voz alta: soletre o seu nome; cumprimente; agradeça; peça licença; despeça-se. Depois leia «this is three thin things» sem pressa.'),
    ]),
  ],
});
