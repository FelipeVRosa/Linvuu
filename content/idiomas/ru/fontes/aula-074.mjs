import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 74, titulo: 'Leitura de textos adaptados', nivel: 'b1',
  objetivo: 'Ler textos curtos em russo com estratégias (ler o título e as frases-chave, achar fonte, causa e sequência, deduzir palavras pela raiz e pelo contexto) e responder a perguntas de compreensão.',
  nota: 'Você lê textos curtos com método. Próxima aula: escuta, fala rápida e redução das vogais.',
  sessoes: [
    sessao('S1', 'Estratégias de leitura', [
      revisao(5, 'Escreva 5 frases sobre uma festa e uma tradição.'),
      palavras(8, [['смысл', 'smysl', 'sentido', 'meaning'], ['главная мысль', 'gláunaya mysl', 'ideia principal', 'main idea'], ['деталь', 'dityál', 'detalhe', 'detail'], ['контекст', 'kantyékst', 'contexto', 'context'], ['понять', 'panyát', 'entender', 'to understand'], ['догадаться', 'dagadátsya', 'deduzir', 'to guess'], ['пропустить', 'prapustít', 'pular, ignorar', 'to skip'], ['пересказать', 'pirieskazát', 'recontar', 'to retell']]),
      gramatica(12, 'Como ler em russo sem ter medo das palavras novas', 'PASSO 1: leia primeiro o TÍTULO e a primeira frase: eles dão o assunto. PASSO 2: procure as FRASES-CHAVE: o sujeito, o verbo e o tempo («Анна проснулась», «идёт дождь»). PASSO 3: marque os CONECTORES: «потому что, поэтому, хотя, благодаря» mostram causa e contraste. PASSO 4: identifique a SEQUÊNCIA com os gerúndios e os advérbios de tempo: «Выйдя из дома…», «Придя на работу…». PASSO 5: para uma palavra nova, olhe a RAIZ e o PREFIXO: «учить, учитель, учебник» partilham «уч-». PASSO 6: use o CONTEXTO: o que faz sentido ali? PASSO 7: NÃO pare em cada palavra desconhecida: continue e volte depois. PASSO 8: depois de ler, RECONTE: quem fez o quê, onde, quando e por quê.', {
        tag: 'Frase',
        tabela: [
          { passo: '1. título e primeira frase', pergunta: 'Qual é o assunto?' }, { passo: '2. frases-chave', pergunta: 'Quem faz o quê?' }, { passo: '3. conectores', pergunta: 'Qual é a causa? Há contraste?' }, { passo: '4. sequência', pergunta: 'O que veio antes e depois?' }, { passo: '5. raiz e contexto', pergunta: 'Que palavra conhecida está dentro desta?' }, { passo: '6. recontar', pergunta: 'Quem, o quê, onde, quando, por quê?' },
        ],
      }),
      producao(5, 'Diga em voz alta os 6 passos da leitura e dê um exemplo de cada com uma frase em russo.'),
    ]),
    sessao('S2', 'Texto 1: uma manhã', [
      revisao(5, 'Releia as estratégias de leitura e diga-as de memória.'),
      texto(10, 'Утро Анны / A manhã de Anna', 'Анна проснулась в семь часов. Выйдя из дома, она увидела, что идёт дождь. Хотя у неё не было зонта, она решила идти пешком, потому что не хотела опоздать. Придя на работу, Анна поняла, что забыла ключи. К счастью, коллега, который пришёл раньше, открыл ей дверь. Анна улыбнулась и сказала: «Благодаря тебе я успела!»',
        'Anna acordou às sete horas. Ao sair de casa, viu que estava chovendo. Embora não tivesse guarda-chuva, decidiu ir a pé, porque não queria se atrasar. Ao chegar ao trabalho, Anna percebeu que tinha esquecido as chaves. Felizmente, um colega que chegara mais cedo abriu-lhe a porta. Anna sorriu e disse: «Graças a você, cheguei a tempo!»',
        [['Во сколько проснулась Анна?', 'В семь часов'], ['Почему она пошла пешком?', 'Не хотела опоздать'], ['Что она забыла?', 'Ключи'], ['Кто открыл ей дверь?', 'Коллега, который пришёл раньше']]),
      gramatica(8, 'O que o texto mostra', 'PASSO 1: veja a SEQUÊNCIA com gerúndios: «Выйдя…, она увидела», «Придя…, Анна поняла». PASSO 2: veja a CAUSA: «потому что не хотела опоздать». PASSO 3: veja o CONTRASTE: «Хотя у неё не было зонта». PASSO 4: veja a ORAÇÃO RELATIVA: «коллега, который пришёл раньше». PASSO 5: veja o agradecimento: «Благодаря тебе».', {
        tag: 'Frase',
        tabela: [
          { recurso: 'gerúndio', exemplo: 'Выйдя из дома, она увидела…' }, { recurso: 'causa', exemplo: 'потому что не хотела опоздать' }, { recurso: 'concessão', exemplo: 'Хотя у неё не было зонта' }, { recurso: 'relativa', exemplo: 'коллега, который пришёл раньше' }, { recurso: 'agradecimento', exemplo: 'Благодаря тебе я успела!' },
        ],
      }),
      producao(7, 'Reconte o texto em voz alta com as suas palavras, em 5 frases.'),
    ]),
    sessao('S3', 'Texto 2: dicas para aprender', [
      revisao(5, 'Reconte o texto da manhã de Anna em 4 frases.'),
      texto(10, 'Как выучить язык / Como aprender uma língua', 'Чем больше вы читаете, тем лучше понимаете. Сначала читайте простые тексты, а затем сложные. Если слово непонятно, не останавливайтесь: попробуйте понять смысл из контекста. Кроме того, полезно слушать радио и разговаривать с носителями языка. Главное — заниматься каждый день, пусть даже полчаса.',
        'Quanto mais você lê, melhor entende. Primeiro leia textos simples e depois os difíceis. Se uma palavra não for compreendida, não pare: tente entender o sentido pelo contexto. Além disso, é útil ouvir rádio e conversar com falantes nativos. O principal é estudar todo dia, mesmo que por meia hora.',
        [['Что нужно читать сначала?', 'Простые тексты'], ['Что делать с непонятным словом?', 'Понять смысл из контекста'], ['Что ещё полезно?', 'Слушать радио и разговаривать с носителями'], ['Что главное?', 'Заниматься каждый день']]),
      gramatica(8, 'Os recursos do texto de dicas', 'PASSO 1: veja «чем … тем …»: «Чем больше читаете, тем лучше понимаете». PASSO 2: veja o imperativo de «вы»: «читайте, не останавливайтесь, попробуйте». PASSO 3: veja a ordem: «сначала… затем…». PASSO 4: veja a adição: «кроме того». PASSO 5: veja «пусть даже» (mesmo que).', {
        tag: 'Frase',
        tabela: [
          { recurso: 'чем … тем …', exemplo: 'Чем больше читаете, тем лучше понимаете.' }, { recurso: 'imperativo (вы)', exemplo: 'Читайте. Не останавливайтесь. Попробуйте.' }, { recurso: 'ordem', exemplo: 'Сначала простые тексты, затем сложные.' }, { recurso: 'adição', exemplo: 'Кроме того, полезно слушать радио.' }, { recurso: 'concessão', exemplo: 'пусть даже полчаса' },
        ],
      }),
      producao(7, 'Dê em voz alta 4 dicas suas para aprender russo, usando imperativo e «чем … тем …».'),
    ]),
    sessao('S4', 'Prática de compreensão', [
      revisao(5, 'Leia de novo o texto 2 e marque os conectores.'),
      exercicios(20, [
        mc('Anna foi a pé porque:', ['não queria se atrasar', 'estava sem dinheiro', 'não gostava do ônibus'], 'não queria se atrasar', '«потому что не хотела опоздать».'), mc('Anna esqueceu:', ['as chaves', 'o guarda-chuva', 'o celular'], 'as chaves', '«забыла ключи».'), mc('Quem abriu a porta foi:', ['um colega que chegou mais cedo', 'o chefe', 'a vizinha'], 'um colega que chegou mais cedo', '«коллега, который пришёл раньше».'),
        mc('A ideia principal do texto 2 é:', ['estudar todo dia, com textos graduais', 'só ler textos difíceis', 'só ouvir rádio'], 'estudar todo dia, com textos graduais', '«Главное — заниматься каждый день».'), mc('«Чем больше … тем лучше» significa:', ['quanto mais … melhor', 'tanto … quanto', 'menos … pior'], 'quanto mais … melhor', '«чем … тем …».'), mc('Se uma palavra é desconhecida, o texto aconselha:', ['entender pelo contexto', 'parar e traduzir', 'desistir'], 'entender pelo contexto', 'Contexto.'),
        lacuna('Выйдя из дома, она ___, что идёт дождь. (viu)', ['увидела', 'увидеть', 'видит'], 'увидела', 'Passado perfectivo.'), lacuna('___ у неё не было зонта, она пошла пешком. (embora)', ['Хотя', 'Потому', 'Если'], 'Хотя', 'Concessão.'), lacuna('___ тебе я успела! (graças a)', ['Благодаря', 'Из-за', 'Несмотря'], 'Благодаря', 'Causa positiva.'),
        ordem('Ordene: «Анна проснулась в семь часов.»', ['Анна', 'проснулась', 'в', 'семь', 'часов'], 'Анна проснулась в семь часов.', 'Ordem simples.'), ouvir('Чем больше вы читаете, тем лучше понимаете', ['Чем больше вы читаете, тем лучше понимаете', 'Вы читаете больше', 'Тем лучше вы читаете'], 'Чем больше вы читаете, тем лучше понимаете', '«чем … тем …».'), ditado('Главное — заниматься каждый день', 'Frase-chave do texto 2.'),
        livre('Escreva um resumo de 4 frases de um dos textos, sem copiar, com as suas palavras.', 'Анна пошла на работу пешком. Шёл дождь, но она не хотела опоздать. Она забыла ключи. Коллега открыл ей дверь.'),
      ]),
      producao(5, 'Grave-se resumindo um dos textos em 4 frases.'),
    ]),
  ],
});
