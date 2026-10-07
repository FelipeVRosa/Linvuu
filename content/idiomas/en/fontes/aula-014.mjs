import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 14, titulo: 'Pessoas: aparência e personalidade', nivel: 'a1',
  objetivo: 'Descrever a aparência (altura, cabelo, olhos) e a personalidade de uma pessoa, usando «to be», «have/has» e «look like».',
  nota: 'Você descreve uma pessoa pelo físico e pelo jeito. Próxima aula: compras.',
  sessoes: [
    sessao('S1', 'Aparência: be ou have?', [
      revisao(5, 'Fale do que você gosta e não gosta, com -ing, e use «him, her, them» em 2 frases.'),
      palavras(8, [
        ['tall', 'tól', 'alto', ''], ['short', 'chórt', 'baixo, curto', ''], ['young', 'iâng', 'jovem', ''], ['hair', 'rér', 'cabelo', ''], ['eyes', 'áiz', 'olhos', ''], ['blond', 'blónd', 'loiro', ''], ['dark', 'dárk', 'escuro', ''], ['beard', 'bírd', 'barba', ''],
      ]),
      gramatica(12, 'Descrever o físico: be e have', 'PASSO 1: com «to be» você diz altura, idade e características gerais: «She is tall.», «He is young.» PASSO 2: com «have/has» você diz cabelo, olhos e barba: «She has long hair.», «He has blue eyes.», «He has a beard.» PASSO 3: não use «is» para cabelo: «Her hair is long» também funciona (o cabelo é o sujeito), mas «She has long hair» é o mais comum. PASSO 4: a ordem dos adjetivos de cabelo: tamanho + cor + «hair»: «long dark hair», «short blond hair». PASSO 5: pergunta: «What does she look like?» (como ela é, fisicamente?) → «She is tall and she has long hair.» PASSO 6: não confunda «What does she look like?» (aparência) com «What is she like?» (personalidade).', {
        tag: 'Aparência',
        comparacao: 'em português «ela é alta, de cabelo comprido e olhos azuis» usa «é» e «de». Em inglês, o corpo usa «is» e cabelo/olhos usam «has»: «She is tall, she has long hair and blue eyes.»',
        tabela: [
          { o_que: 'altura, idade', verbo: 'is', exemplo: 'He is tall and young.' }, { o_que: 'cabelo', verbo: 'has', exemplo: 'She has short dark hair.' }, { o_que: 'olhos', verbo: 'has', exemplo: 'He has green eyes.' }, { o_que: 'barba', verbo: 'has', exemplo: 'He has a beard.' },
        ],
        erros: [['She is blue eyes.', 'She has blue eyes.', 'Olhos pedem «has».'], ['He has tall.', 'He is tall.', 'Altura pede «is».'], ['She has hairs long.', 'She has long hair.', '«hair» é incontável, adjetivo antes.'], ['What does she like?', 'What does she look like?', 'Aparência: look like.']],
      }),
      producao(5, 'Descreva uma pessoa que você conhece em 4 frases: altura, cabelo, olhos, idade.'),
    ]),
    sessao('S2', 'Personalidade', [
      revisao(4, 'Descreva em voz alta uma pessoa famosa usando «is» e «has».'),
      palavras(6, [
        ['kind', 'káind', 'gentil', ''], ['funny', 'fâni', 'engraçado', ''], ['shy', 'chái', 'tímido', ''], ['friendly', 'fréndli', 'simpático', ''], ['lazy', 'lêizi', 'preguiçoso', ''], ['smart', 'smárt', 'inteligente, esperto', ''],
      ]),
      gramatica(12, 'Personalidade: what is she like?', 'PASSO 1: para perguntar o jeito de ser: «What is she like?» → «She is kind and funny.» PASSO 2: o adjetivo vem depois de «to be» e não muda: «They are kind.» PASSO 3: use «very», «quite» e «a bit» para graduar: «very kind», «quite shy», «a bit lazy». PASSO 4: «but» contrasta: «She is shy, but she is very friendly.» PASSO 5: cuidado: «sympathetic» NÃO é simpático! É compreensivo. Para simpático, use «friendly» ou «nice». PASSO 6: «funny» = engraçado (que faz rir). Para «estranho», use «strange» ou «odd».', {
        tag: 'Personalidade',
        comparacao: 'em português «simpático» é elogio comum. Em inglês, «sympathetic» não é isso. É um falso cognato clássico: use «friendly» ou «nice».',
        tabela: [
          { portugues: 'simpático', ingles: 'friendly / nice', nota: 'não «sympathetic»' }, { portugues: 'engraçado', ingles: 'funny', nota: 'faz rir' }, { portugues: 'tímido', ingles: 'shy', nota: 'curto' }, { portugues: 'um pouco preguiçoso', ingles: 'a bit lazy', nota: 'graduar' },
        ],
        erros: [['She is very sympathetic with everyone. (simpática)', 'She is very friendly with everyone.', '«sympathetic» ≠ simpático.'], ['He is a bit of lazy.', 'He is a bit lazy.', '«a bit» + adjetivo.'], ['They are kinds.', 'They are kind.', 'Adjetivo não flexiona.']],
      }),
      producao(8, 'Descreva a personalidade de 4 pessoas que você conhece com 2 adjetivos cada uma.'),
    ]),
    sessao('S3', 'Uma pessoa por inteiro', [
      revisao(4, 'Diga o contrário: tall, young, kind, lazy, big.'),
      palavras(5, [
        ['old', 'ôuld', 'velho, de idade', ''], ['pretty', 'príti', 'bonita', ''], ['handsome', 'rénsâm', 'bonito (homem)', ''], ['thin', 'thín', 'magro', ''], ['strong', 'stróng', 'forte', ''],
      ]),
      gramatica(8, 'Idade e comparação simples', 'PASSO 1: idade usa «to be»: «She is 25.» ou «She is 25 years old.» PASSO 2: «How old is he?» → «He is 30.» PASSO 3: para pessoas que se parecem: «She looks like her mother.» PASSO 4: «look» + adjetivo = parecer: «You look tired.» (você parece cansado) PASSO 5: «pretty» e «handsome» são elogios: «pretty» para mulheres, «handsome» para homens; «good-looking» serve para os dois.', {
        tag: 'Parecer',
        comparacao: 'em português «parecer» serve para tudo: «parece cansado», «parece com a mãe». O inglês separa: «look + adjetivo» (parece), «look like + substantivo» (parece com).',
        tabela: [
          { portugues: 'Você parece cansado.', ingles: 'You look tired.', nota: 'look + adjetivo' }, { portugues: 'Ela parece com a mãe.', ingles: 'She looks like her mother.', nota: 'look like + nome' }, { portugues: 'Ela tem 25 anos.', ingles: 'She is 25.', nota: 'to be' },
        ],
        erros: [['She has 25 years.', 'She is 25.', 'Idade: to be.'], ['You look like tired.', 'You look tired.', 'look + adjetivo, sem «like».'], ['He looks his father.', 'He looks like his father.', 'look like + nome.']],
      }),
      texto(8, 'My best friend / Meu melhor amigo', 'My best friend is Dan. He is 28 years old. He is tall and strong. He has short dark hair and brown eyes. He has a small beard. Dan is very funny and friendly, but he is a bit shy with new people. He looks like his father. He loves cooking and playing football. I like him a lot.',
        'Meu melhor amigo é o Dan. Ele tem 28 anos. É alto e forte. Tem cabelo curto e escuro e olhos castanhos. Tem uma barba pequena. Dan é muito engraçado e simpático, mas é um pouco tímido com pessoas novas. Ele parece com o pai. Adora cozinhar e jogar futebol. Eu gosto muito dele.',
        [['How old is Dan?', 'He is 28.'], ['What does he look like?', 'He is tall and strong, with short dark hair, brown eyes and a small beard.'], ['What is he like?', 'He is funny, friendly and a bit shy.'], ['Who does he look like?', 'His father.']]),
      producao(5, 'Escreva um texto de 6 frases sobre o seu melhor amigo: idade, físico, jeito e hobbies.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 14', [
      revisao(5, 'Descreva um familiar: físico, idade e jeito de ser.'),
      exercicios(20, [
        ouvir('She has long dark hair', ['She has long dark hair', 'She is long dark hair', 'He has long dark hair'], 'She has long dark hair', 'Ouça «has».'), ouvir('What does he look like', ['What does he look like', 'What is he like', 'What does he like'], 'What does he look like', 'Ouça «look like».'), ditado('He is tall and strong', 'Escreva: he is tall and strong.'), ditado('She has blue eyes', 'Escreva: she has blue eyes.'),
        mc('Qual frase está correta?', ['She has blue eyes.', 'She is blue eyes.', 'She have blue eyes.'], 'She has blue eyes.', 'Olhos: has.'), mc('Qual pergunta pede a APARÊNCIA?', ['What does she look like?', 'What is she like?', 'What does she like?'], 'What does she look like?', 'Look like = aparência.'), mc('Como se diz «Ela tem 25 anos»?', ['She is 25.', 'She has 25.', 'She have 25 years.'], 'She is 25.', 'Idade: to be.'), mc('Qual é a palavra para «simpático»?', ['friendly', 'sympathetic', 'sympathy'], 'friendly', '«sympathetic» é falso cognato.'),
        lacuna('He ___ a beard. (tem)', ['has', 'is', 'have'], 'has', 'Barba: has.'), lacuna('She ___ tall. (é)', ['is', 'has', 'are'], 'is', 'Altura: is.'), lacuna('You look ___. (cansado)', ['tired', 'like tired', 'to tired'], 'tired', 'look + adjetivo.'), lacuna('She looks ___ her mother.', ['like', 'as', 'at'], 'like', 'look like + nome.'),
        ordem('Ordene: «She has short blond hair.»', ['She', 'has', 'short', 'blond', 'hair'], 'She has short blond hair.', 'has + tamanho + cor + hair.'), ordem('Ordene: «He is very kind.»', ['He', 'is', 'very', 'kind'], 'He is very kind.', 'is + very + adjetivo.'),
        livre('Descreva uma pessoa em 4 frases: idade, físico, cabelo ou olhos e personalidade.', 'My friend is 30. He is tall. He has short dark hair. He is funny and kind.'),
      ]),
      producao(5, 'Descreva 2 pessoas em 1 minuto, uma que você admira e uma da sua família.'),
    ]),
  ],
});
