import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 58, titulo: 'Mídia e tecnologia', nivel: 'b1',
  objetivo: 'Falar de tecnologia, redes sociais e notícias, e usar a voz passiva e verbos de comunicação para relatar o que se lê e se ouve.',
  nota: 'Você conversa sobre o mundo digital. Próxima aula: meio ambiente e sociedade.',
  sessoes: [
    sessao('S1', 'Vocabulário digital', [
      revisao(5, 'Simule uma entrevista de 1 minuto: apresente-se e fale de suas metas.'),
      palavras(8, [
        ['app', 'ép', 'aplicativo', ''], ['website', 'uébsait', 'site', ''], ['download', 'dáunlôud', 'baixar', ''], ['upload', 'âplôud', 'enviar (arquivo)', ''], ['screen', 'skriin', 'tela', ''], ['password', 'péswôrd', 'senha', ''], ['online', 'ónlain', 'online', ''], ['headline', 'rédlain', 'manchete', ''],
      ]),
      gramatica(12, 'Falar da tecnologia no dia a dia', 'PASSO 1: use phrasal verbs de tecnologia: «turn on / turn off», «log in / log out», «sign up», «plug in», «switch off». PASSO 2: «log in to + app»: «I log in to my account every day.» PASSO 3: pergunte como funciona: «How do I download this?» PASSO 4: fale do tempo de uso: «I spend two hours a day on social media.» PASSO 5: «spend + tempo + -ing»: «I spend an hour reading the news.» PASSO 6: «use … to + verbo»: «I use my phone to check email.» PASSO 7: problemas: «The app isn\'t working», «My phone is out of battery».', {
        tag: 'Tecnologia',
        comparacao: 'em português dizemos «passo duas horas no celular». Em inglês: «I spend two hours on my phone».',
        tabela: [
          { verbo: 'turn on / off', exemplo: 'Turn off your phone.' }, { verbo: 'log in / out', exemplo: 'I log in to my account.' }, { verbo: 'sign up', exemplo: 'Sign up for free.' }, { verbo: 'spend + tempo + -ing', exemplo: 'I spend an hour reading.' },
        ],
        erros: [['I spend two hours to read.', 'I spend two hours reading.', 'spend + -ing.'], ['I log in my account.', 'I log in to my account.', 'log in to.'], ['I am using my phone for check email.', 'I use my phone to check email.', 'to + verbo.']],
      }),
      producao(5, 'Descreva como você usa o celular em um dia normal, com «spend» e «use… to».'),
    ]),
    sessao('S2', 'Notícias e voz passiva', [
      revisao(4, 'Complete: «I ___ two hours ___ social media. I use my phone ___ check email.»'),
      palavras(6, [
        ['news', 'niuz', 'notícias', ''], ['article', 'ártikl', 'artigo', ''], ['reporter', 'ripórtar', 'repórter', ''], ['fake news', 'feik niuz', 'notícias falsas', ''], ['source', 'sôrs', 'fonte', ''], ['report', 'ripórt', 'relatar', ''],
      ]),
      gramatica(12, 'Passiva em notícias e verbos de relato', 'PASSO 1: notícias usam muito a passiva: «A man was arrested yesterday.» PASSO 2: com verbos de relato: «It is said that…», «It is believed that…»: «It is said that the film is great.» PASSO 3: estrutura com sujeito: «The film is said to be great.» PASSO 4: use «according to» para citar a fonte: «According to the report, prices will rise.» PASSO 5: «claim, say, think, believe» introduzem informações: «Experts believe that…». PASSO 6: cuidado com fake news: «Check the source before you share.»', {
        tag: 'Notícias',
        comparacao: 'em português dizemos «dizem que» e «acredita-se que». Em inglês: «It is said that» e «It is believed that».',
        tabela: [
          { estrutura: 'It is said that + frase', exemplo: 'It is said that the film is great.' }, { estrutura: 'Sujeito is said to + verbo', exemplo: 'The film is said to be great.' }, { estrutura: 'According to + fonte', exemplo: 'According to the report, prices will rise.' }, { estrutura: 'passiva simples', exemplo: 'A man was arrested yesterday.' },
        ],
        erros: [['It says that the film is great.', 'It is said that the film is great.', 'Passiva.'], ['According the report, prices rise.', 'According to the report, prices will rise.', 'according to.'], ['The man arrested yesterday.', 'The man was arrested yesterday.', 'Faltou was.']],
      }),
      producao(8, 'Leia 3 manchetes imaginárias e reescreva cada uma com «It is said that» ou «According to».'),
    ]),
    sessao('S3', 'Conversar sobre redes sociais', [
      revisao(4, 'Transforme: «Dizem que o filme é ótimo.» e «Segundo o relatório, os preços vão subir.»'),
      palavras(5, [
        ['post', 'pôust', 'publicar / publicação', ''], ['follow', 'fólou', 'seguir', ''], ['share', 'chér', 'compartilhar', ''], ['privacy', 'práivasi', 'privacidade', ''], ['addicted to', 'adíktid tu', 'viciado em', ''],
      ]),
      gramatica(8, 'Vantagens e riscos', 'PASSO 1: «Social media helps us stay in touch.» PASSO 2: use «allow someone to + verbo»: «The app allows you to share photos.» PASSO 3: «be addicted to + -ing/substantivo»: «She is addicted to scrolling.» PASSO 4: risco: «There is a risk of + -ing»: «There is a risk of losing privacy.» PASSO 5: opinião: «In my opinion, we should limit screen time.»', {
        tag: 'Redes sociais',
        comparacao: 'em português dizemos «viciado em celular». Em inglês: «addicted to my phone», com preposição «to».',
        tabela: [
          { estrutura: 'allow someone to', exemplo: 'The app allows you to share photos.' }, { estrutura: 'addicted to', exemplo: 'She is addicted to scrolling.' }, { estrutura: 'risk of + -ing', exemplo: 'There is a risk of losing privacy.' }, { estrutura: 'limit', exemplo: 'We should limit screen time.' },
        ],
        erros: [['She is addicted in the phone.', 'She is addicted to her phone.', 'addicted to.'], ['There is a risk to lose privacy.', 'There is a risk of losing privacy.', 'risk of + -ing.']],
      }),
      dialogo(8, 'Screen time / Tempo de tela', 'Lucy e Dan falam sobre redes sociais.', [
        ['Lucy', 'Dan, how much time do you spend on social media?', 'Dan, quanto tempo você passa nas redes sociais?'], ['Dan', 'About three hours a day. I think I\'m addicted to it!', 'Cerca de três horas por dia. Acho que estou viciado!'], ['Lucy', 'It is said that too much screen time is bad for sleep.', 'Dizem que muito tempo de tela faz mal ao sono.'], ['Dan', 'You\'re right. According to a study, we should limit it to two hours.', 'Você tem razão. Segundo um estudo, deveríamos limitar a duas horas.'], ['Lucy', 'Personally, I turn off my phone at night.', 'Pessoalmente, desligo o celular à noite.'], ['Dan', 'Good idea. I will try it tonight.', 'Boa ideia. Vou tentar hoje à noite.'],
      ]),
      producao(5, 'Escreva 5 frases sobre vantagens e riscos de redes sociais.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 58', [
      revisao(5, 'Debata: redes sociais fazem bem ou mal? Use opinião, exemplos e contraponto.'),
      exercicios(20, [
        ouvir('I spend two hours reading the news', ['I spend two hours reading the news', 'I spend two hours to read the news', 'I spent two hours read the news'], 'I spend two hours reading the news', 'Ouça «spend… -ing».'), ouvir('It is said that the film is great', ['It is said that the film is great', 'It says that the film is great', 'It is say that the film is great'], 'It is said that the film is great', 'Ouça «is said».'), ditado('According to the report, prices will rise', 'Escreva: according to the report, prices will rise.'), ditado('Turn off your phone', 'Escreva: turn off your phone.'),
        mc('Qual frase está correta?', ['I log in to my account.', 'I log in my account.', 'I log on at my account.'], 'I log in to my account.', 'log in to.'), mc('Qual frase está correta?', ['She is addicted to her phone.', 'She is addicted in her phone.', 'She is addicted with her phone.'], 'She is addicted to her phone.', 'addicted to.'), mc('Qual frase está correta?', ['There is a risk of losing privacy.', 'There is a risk to lose privacy.', 'There is a risk lose privacy.'], 'There is a risk of losing privacy.', 'risk of + -ing.'), mc('Qual expressão cita uma fonte?', ['According to', 'In spite of', 'Because of'], 'According to', 'Fonte.'),
        lacuna('I spend an hour ___ the news. (lendo)', ['reading', 'to read', 'read'], 'reading', 'spend + -ing.'), lacuna('The app allows you ___ share photos.', ['to', 'for', 'of'], 'to', 'allow someone to.'), lacuna('It is ___ that the film is great. (dito)', ['said', 'say', 'saying'], 'said', 'It is said.'), lacuna('A man ___ arrested yesterday.', ['was', 'is', 'were'], 'was', 'passiva no passado.'),
        ordem('Ordene: «I use my phone to check email.»', ['I', 'use', 'my', 'phone', 'to', 'check', 'email'], 'I use my phone to check email.', 'use … to.'), ordem('Ordene: «The film is said to be great.»', ['The', 'film', 'is', 'said', 'to', 'be', 'great'], 'The film is said to be great.', 'is said to + verbo.'),
        livre('Escreva 4 frases: uma com spend + -ing, uma com It is said that, uma com According to e uma com addicted to.', 'I spend an hour reading. It is said that it is good. According to the report, prices will rise. She is addicted to her phone.'),
      ]),
      producao(5, 'Fale 1 minuto sobre como você usa a tecnologia e como gostaria de usá-la.'),
    ]),
  ],
});
