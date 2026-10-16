import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

// Acento tônico só gráfico: escreva o apóstrofo logo depois da vogal forte (ма'ма vira ма́ма). O áudio ignora o sinal.
const ac = (s) => s.replace(/'/g, '́');

export default aula({
  idioma: 'ru', numero: 1, titulo: 'Ouvir antes de falar', nivel: 'zero',
  objetivo: 'Reconhecer os primeiros 12 sons do cirílico, ler as primeiras palavras, ouvir o acento e dizer as primeiras frases.',
  nota: 'Você já lê e fala as primeiras palavras em russo, ouve onde cai o acento e responde a «Кто это?». Próxima aula: cumprimentos e como dizer o seu nome.',
  sessoes: [
    // ───────────────────────── S1 ─────────────────────────
    sessao('S1', 'Grupo 1 — Aliadas', [
      intro(2, 'Você não precisa decorar. Ouça, repita, siga. Hoje o russo vai soar estranho por alguns minutos e familiar no fim. Primeiro você ouve os sons, depois vê as letras. Ao final desta sessão você lê as primeiras palavras em russo, como «мама» (máma) e «кот» (kot).'),
      alfabeto(5, [
        ['Grupo 1 — Aliadas', [
          ['А', 'а', 'como o «a» de «casa»', '[a]', 'мама', 'mãe'], ['К', 'к', 'como em «kilo»', '[k]', 'как', 'como'], ['М', 'м', 'como em «mãe»', '[m]', 'мама', 'mãe'],
          ['О', 'о', 'como o «o» de «bola» (quando tem acento)', '[o]', 'кот', 'gato'], ['Т', 'т', 'como em «teto»', '[t]', 'тот', 'aquele'],
        ]],
      ]),
      palavras(5, [
        ['мама', 'máma', 'mãe', 'mom'], ['как', 'kak', 'como', 'how'], ['кто', 'kto', 'quem', 'who'], ['это', 'éta', 'isto é, este é', 'this is'], ['тот', 'tot', 'aquele', 'that one'],
        ['кот', 'kot', 'gato', 'cat'], ['так', 'tak', 'assim', 'like this'], ['он', 'on', 'ele', 'he'], ['она', 'aná', 'ela', 'she'],
      ]),
      gramatica(4, 'O acento tônico: a sílaba que manda',
        'PASSO 1: Toda palavra russa com duas sílabas ou mais tem uma sílaba mais forte. Ela é mais longa, mais alta e mais clara. Isso se chama acento tônico. PASSO 2: Nos livros, o acento aparece como um tracinho sobre a vogal forte. Em «мама» (máma), a força está no primeiro «ма». Diga devagar: máma, com força no «má». PASSO 3: Em «она» (aná), a força está na última sílaba. Diga: aná, com força no «ná». Repare que o lugar da força muda de uma palavra para outra. PASSO 4: Palavras de uma sílaba só, como «как» (kak) e «кто» (kto), já são fortes por inteiro. Não há o que escolher. PASSO 5: O acento russo não tem lugar fixo e quase nunca vem escrito. Por isso, sempre que aprender uma palavra nova, ouça o áudio e guarde onde está a força. Ela decide como as vogais soam, e você vê isso na sessão 3.', {
          tag: 'Pronúncia',
          comparacao: 'em português o acento também muda a palavra: «sábia», «sabia» e «sabiá» são três palavras diferentes. Em russo é igual, só que o acento quase nunca vem escrito.',
          exemplos: [[ac("ма'ма"), 'mãe: a força está no primeiro «ма»'], [ac("она'"), 'ela: a força está no «на»'], [ac("э'то"), 'isto é: a força está no «э»'], ['кот', 'gato: uma sílaba só, forte por inteiro']],
          erros: [['мама, dita «mamá»', ac("ма'ма"), 'Quem fala português tende a pôr a força no fim. Em russo ela cai na primeira sílaba: máma.']],
        }),
      exercicios(8, [
        ouvir('мама', ['мама', 'кто', 'как'], 'мама', 'Você ouviu duas sílabas iguais, «ma-ma». «кто» e «как» têm uma sílaba só.'),
        ouvir('кот', ['кот', 'кто', 'тот'], 'кот', 'O som do meio é «o»: k-o-t. Em «кто» o «т» vem antes do «о», e «тот» começa com «т».'),
        ouvir('как', ['как', 'так', 'кот'], 'как', 'A palavra começa com o som k (letra «к»). «так» começa com t.'),
        ouvir('тот', ['тот', 'кот', 'так'], 'тот', 'Começa e termina com t: tot. «кот» começa com k e «так» termina com k.'),
        mc('Leia a palavra «кот». O que ela quer dizer?', ['gato', 'mãe', 'como'], 'gato', 'Leia letra por letra: «к» (k), «о» (o), «т» (t). Juntas: kot, gato. «мама» é mãe e «как» é como.'),
        mc('Qual letra faz o som «m», como em «mãe»?', ['М', 'Т', 'К'], 'М', '«М» é a letra de «мама». O «Т» faz o som t e o «К» faz o som k.'),
        mc('Qual destas palavras quer dizer «quem»?', ['кто', 'как', 'тот'], 'кто', '«кто» (kto) é «quem». «как» é «como» e «тот» é «aquele».'),
        lacuna('— ___ это? — Это мама. (Quem é esta?)', ['Кто', 'Как', 'Тот'], 'Кто', 'A resposta fala de uma pessoa, a mãe. Então a pergunta é «quem»: «Кто».'),
        lacuna('— Кто это? — Это ___.', ['мама', 'как', 'кто'], 'мама', 'A pergunta pede uma pessoa. «мама» responde; «как» e «кто» são palavras de pergunta.'),
        ordem('Ordene: «Quem é este?»', ['это', 'Кто'], 'Кто это?', 'Como em português, a palavra de pergunta vem primeiro: «Кто» (quem), depois «это» (este).'),
        ditado('мама', 'Escreva letra por letra: м, а, м, а. A palavra repete o par «ма».'),
        livre('Leia em voz alta «тот кот» e escreva em português o que significa.', 'Aquele gato'),
      ]),
      producao(4, 'Ouça cada palavra e repita 3 vezes, com a força no lugar certo: «мама, как, кто, это, тот, кот». Depois cubra a transliteração e leia em voz alta só o cirílico. Por fim, aponte para uma foto de família e pergunte «Кто это?».', 'Кто это? Это мама.'),
      revisao(2, 'Sem olhar a tela, diga em voz alta o som de cada uma das 5 letras: «а, к, м, о, т». Depois escreva «мама» à mão, letra por letra.'),
    ]),
    // ───────────────────────── S2 ─────────────────────────
    sessao('S2', 'Grupo 2 — Falsas amigas', [
      intro(2, 'Hoje chegam as sete letras mais traiçoeiras, as falsas amigas. Elas parecem letras do nosso alfabeto, mas têm outro som. O «В» parece um B, mas soa V. O «Н» parece um H, mas soa N. O «Р» parece um P, mas soa R. O «С» parece um C, mas soa S. O «У» parece um Y, mas soa U. O «Х» parece um X, mas é um «r» forte, de garganta. E o «Е» soa «iê». Regra de ouro: se a letra parece latina, desconfie e escute.'),
      alfabeto(4, [
        ['Grupo 2 — Falsas amigas', [
          ['В', 'в', 'como em «vaca»', '[v]', 'вот', 'eis aqui'], ['Е', 'е', 'como «iê» de «iê-iê-iê»', '[je]', 'нет', 'não'], ['Н', 'н', 'como em «navio»', '[n]', 'он', 'ele'],
          ['Р', 'р', 'como o «r» de «caro», batido com a ponta da língua', '[r]', 'сор', 'lixo'], ['С', 'с', 'como em «sapo»', '[s]', 'сок', 'suco'], ['У', 'у', 'como o «u» de «lua»', '[u]', 'утка', 'pato'],
          ['Х', 'х', 'como o «rr» de «rato» no sotaque carioca', '[x]', 'хор', 'coro'],
        ]],
      ]),
      palavras(4, [
        ['вот', 'vot', 'eis aqui', 'here is'], ['нет', 'niet', 'não (resposta)', 'no'], ['не', 'nie', 'não (antes de uma palavra)', 'not'], ['а', 'a', 'e, mas', 'and, but'], ['там', 'tam', 'lá', 'there'], ['тут', 'tut', 'aqui', 'here'],
        ['сок', 'sok', 'suco', 'juice'], ['сор', 'sor', 'lixo', 'trash'], ['хор', 'khor', 'coro', 'choir'], ['нос', 'nos', 'nariz', 'nose'], ['сон', 'son', 'sono, sonho', 'sleep, dream'],
        ['торт', 'tort', 'bolo, torta', 'cake'], ['кекс', 'kieks', 'bolinho', 'cupcake'], ['сестра', 'sistrá', 'irmã', 'sister'],
        ['Анна', 'ánna', 'Anna (nome de mulher)', 'Anna'], ['Вера', 'viéra', 'Vera (nome de mulher)', 'Vera'], ['Антон', 'antón', 'Antón (nome de homem)', 'Anton'], ['Макс', 'maks', 'Max (nome de homem)', 'Max'],
      ]),
      palavras(3, [
        ['спасибо', 'spasíba', 'obrigado, obrigada', 'thank you'], ['не за что', 'nie za shto', 'de nada', "you're welcome"], ['как дела?', 'kak dielá', 'como vai?', 'how are you?'],
        ['хорошо', 'kharashó', 'bem', 'well'], ['нормально', 'narmálna', 'tudo bem, normal', 'okay'], ['отлично', 'atlíchna', 'ótimo', 'excellent'],
      ]),
      dialogo(4, 'В кафе / No café', 'Num café em Moscou, o garçom Антон traz o pedido para Вера e Макс.', [
        ['Антон', 'Вот сок.', 'Aqui está o suco.'], ['Макс', 'Спасибо!', 'Obrigado!'], ['Антон', 'Не за что.', 'De nada.'], ['Вера', 'Это торт?', 'Isto é bolo?'],
        ['Антон', 'Нет, это кекс.', 'Não, é bolinho.'], ['Вера', 'Отлично! Спасибо.', 'Ótimo! Obrigada.'], ['Макс', 'Вера, как дела?', 'Vera, como vai?'], ['Вера', 'Нормально, спасибо.', 'Tudo bem, obrigada.'],
      ]),
      exercicios(8, [
        ouvir('нет', ['нет', 'вот', 'нос'], 'нет', 'O som inicial é n (letra «н»). «вот» começa com v e «нос» termina com s.'),
        ouvir('вот', ['вот', 'тот', 'нос'], 'вот', 'O som inicial é v (letra «в»). «тот» começa com t.'),
        ouvir('сок', ['сок', 'сор', 'сон'], 'сок', 'Decida pela última letra: «к» (k) em «сок», «р» em «сор», «н» em «сон».'),
        ouvir('нос', ['нос', 'сон', 'нет'], 'нос', 'A ordem dos sons é n-o-s. «сон» é o contrário: s-o-n.'),
        ouvir('Не за что.', ['Не за что.', 'Как дела?', 'Спасибо.'], 'Не за что.', 'É a resposta educada a um «obrigado». «Как дела?» é uma pergunta e «Спасибо» é o próprio agradecimento.'),
        mc('Qual letra parece um «B», mas faz o som «v»?', ['В', 'Н', 'Р'], 'В', 'O «В» russo é o nosso «v», como em «вот». É uma falsa amiga: parece B, soa V.'),
        mc('Qual letra parece um «H», mas faz o som «n»?', ['Н', 'Х', 'Р'], 'Н', 'O «Н» é o nosso «n», como em «нет». O «Х» é outra letra, de som forte de garganta.'),
        mc('Qual letra parece um «P», mas faz o som «r»?', ['Р', 'С', 'У'], 'Р', 'O «Р» russo é o nosso «r», como em «сор». O som do P é outra letra, que você vê amanhã.'),
        mc('Leia «сор». O que quer dizer?', ['lixo', 'suco', 'sono'], 'lixo', '«сор» é lixo. Suco é «сок» (termina em «к») e sono é «сон» (termina em «н»).'),
        mc('Qual letra parece um «C», mas faz o som «s»?', ['С', 'Е', 'К'], 'С', 'O «С» russo é sempre «s», como em «сок». Nunca soa «k» nem «ts».'),
        lacuna('— Это торт? — ___, это кекс.', ['Нет', 'Вот', 'Там'], 'Нет', 'A resposta é negativa: o que vem depois é a correção, «é bolinho». Por isso começa com «Нет» (não).'),
        lacuna('— Как дела? — ___, спасибо.', ['Хорошо', 'Нет', 'Кто'], 'Хорошо', '«Хорошо, спасибо» quer dizer «bem, obrigado». «Нет» e «Кто» não respondem a «как дела».'),
        ordem('Ordene: «Não, o suco está lá.»', ['сок', 'Нет', 'там'], 'Нет, там сок.', 'A resposta começa com «Нет»; depois vem o lugar («там») e a coisa («сок»). Não há verbo «estar» no meio.'),
        ditado('сок', 'Escreva s, o, k: «сок». O «с» russo não é o «c» de casa: é sempre o som s.'),
        mc('«Нормально» quer dizer:', ['tudo bem, normal', 'anormal', 'mal'], 'tudo bem, normal', '«Нормально» é «tudo bem, ok». Não é «anormal»: é uma falsa amiga do português.'),
      ]),
      producao(3, 'Leia em voz alta, de uma vez: «вот, нет, там, тут, сок, нос, сон». Depois, no ritmo certo, diga «Спасибо!», «Не за что.», «Как дела?», «Хорошо.». Grave-se lendo o diálogo do café, fazendo as duas vozes.', 'Спасибо! Не за что. Как дела? Хорошо.'),
      revisao(2, 'Ouça e escreva em cirílico as palavras da sessão anterior: «мама, как, кто, это». Depois escreva «тот» e «кот».'),
    ]),
    // ───────────────────────── S3 ─────────────────────────
    sessao('S3', 'Primeiro diálogo', [
      dialogo(6, 'Кто это? / Quem é este?', 'Duas pessoas olham uma foto de família.', [
        ['Анна', 'Кто это?', 'Quem é esta?'], ['Том', 'Это мама.', 'Esta é a mãe.'], ['Анна', 'А это кто?', 'E esta, quem é?'], ['Том', 'Это сестра. Вот сок.', 'Esta é a irmã. Aqui está o suco.'],
        ['Анна', 'Спасибо!', 'Obrigada!'], ['Том', 'Не за что.', 'De nada.'], ['Анна', 'Как дела?', 'Como vai?'], ['Том', 'Хорошо, спасибо.', 'Bem, obrigado.'],
      ]),
      palavras(3, [
        ['Москва', 'maskvá', 'Moscou', 'Moscow'], ['метро', 'mitró', 'metrô', 'metro'], ['ресторан', 'ristarán', 'restaurante', 'restaurant'], ['театр', 'tiátr', 'teatro', 'theater'],
        ['Романов', 'ramánaf', 'Românov (sobrenome)', 'Romanov'], ['Макаров', 'makáraf', 'Makárov (sobrenome)', 'Makarov'], ['вкус', 'fkus', 'sabor, gosto', 'taste'],
      ]),
      gramatica(5, 'Vogais sem acento: o «о» soa «а» e o «е» soa «и»',
        'PASSO 1: A vogal com acento é clara e longa. A vogal sem acento fica fraca e curta, e muda de som. Isso se chama redução. PASSO 2: O «о» sem acento soa como «а». Em «она» (aná), a primeira letra é «о», mas você diz «a». Em «Москва» (maskvá), você diz «ma», e não «mo». PASSO 3: O «о» com acento continua «о». Em «кот» (kot) e em «метро» (mitró), o «о» tem a força e soa «о». PASSO 4: O «е» sem acento soa quase como «и», um «i» rápido. Em «метро», a primeira sílaba soa «mi». Em «сестра» (sistrá), soa «si». Em «ресторан» (ristarán), soa «ri». PASSO 5: A transliteração ao lado de cada palavra, neste curso, já mostra a pronúncia real. Quando ela diferir da escrita, confie na transliteração e no áudio.', {
          tag: 'Pronúncia',
          comparacao: 'você já faz isso em português sem perceber: o «o» final de «gato» soa «u» (gatu). No russo, o mesmo acontece com o «о» e o «е» que estão longe do acento.',
          exemplos: [[ac("она'"), 'ela: o «о» sem acento soa «а»'], [ac("Москва'"), 'Moscou: lê-se maskvá'], [ac("метро'"), 'metrô: o «е» soa «и», lê-se mitró'], [ac("сестра'"), 'irmã: lê-se sistrá'], [ac("рестора'н"), 'restaurante: lê-se ristarán'], [ac("теа'тр"), 'teatro: lê-se tiátr']],
          tabela: [
            { escrito: 'она', 'se fala': 'aná', 'o que acontece': '«о» sem acento soa «а»' }, { escrito: 'Москва', 'se fala': 'maskvá', 'o que acontece': '«о» sem acento soa «а»' },
            { escrito: 'метро', 'se fala': 'mitró', 'o que acontece': '«е» sem acento soa «и»; o «о» com acento continua «о»' }, { escrito: 'сестра', 'se fala': 'sistrá', 'o que acontece': '«е» sem acento soa «и»' },
            { escrito: 'ресторан', 'se fala': 'ristarán', 'o que acontece': '«е» soa «и» e o «о» do meio soa «а»' },
          ],
          erros: [['Москва, dita «móskva»', ac("Москва'"), 'O «о» sem acento soa «а»: maskvá.'], ['метро, dito «métro»', ac("метро'"), 'Sem acento, o «е» soa «и» e a força cai no «ро»: mitró.']],
        }),
      gramatica(5, 'Consoantes sonoras e surdas: o final da palavra muda',
        'PASSO 1: Consoante sonora é aquela em que a garganta vibra. Ponha a mão no pescoço e diga «v» (vê): você sente vibrar. Agora diga «f» (fê): não vibra. A «f» é a surda, parceira da «v». PASSO 2: O russo tem pares assim: «в» e «ф», «б» e «п», «д» e «т», «г» e «к», «з» e «с», «ж» e «ш». A primeira de cada par é a sonora. Hoje você já conhece a sonora «в» e as surdas «к», «т» e «с». As outras chegam na próxima aula. PASSO 3: A regra do final: no fim da palavra, a sonora perde a vibração e vira a surda parceira. Por isso «Романов» (ramánaf) termina com som de «f», embora se escreva com «в». PASSO 4: A regra do vizinho: a sonora também vira surda antes de uma surda. Em «вкус» (fkus), que quer dizer «sabor», o «в» soa como «f» porque vem antes do «к». PASSO 5: A escrita não muda, só o som. Escreva sempre como a palavra se escreve, e fale como o áudio fala.', {
          tag: 'Pronúncia',
          comparacao: 'em português a diferença entre «v» e «f» muda a palavra: «vaca» e «faca». Em russo também. Mas, no fim da palavra, essa diferença desaparece e só a surda é pronunciada.',
          exemplos: [['Романов', 'sobrenome: lê-se ramánaf, com «f» no fim'], ['Макаров', 'sobrenome: lê-se makáraf'], ['вкус', 'sabor: lê-se fkus'], ['Антонов', 'sobrenome: lê-se antónaf']],
          tabela: [
            { escrito: 'Романов', 'se fala': 'ramánaf', 'por quê': '«в» no fim da palavra soa «ф»' }, { escrito: 'Макаров', 'se fala': 'makáraf', 'por quê': '«в» no fim da palavra soa «ф»' },
            { escrito: 'вкус', 'se fala': 'fkus', 'por quê': '«в» antes da surda «к» soa «ф»' },
          ],
          erros: [['Романов, dito «románov»', 'Романов', 'O «в» do fim perde a vibração: ramánaf.'], ['вкус, dito «vkus»', 'вкус', 'Antes do «к», o «в» soa «ф»: fkus.']],
        }),
      exercicios(7, [
        ouvir('Кто это?', ['Кто это?', 'Как дела?', 'Это мама.'], 'Кто это?', 'A frase começa com «Кто» (quem). «Как дела?» começa com «как» e «Это мама» não é pergunta.'),
        ouvir('Это сестра.', ['Это сестра.', 'Это мама.', 'Это Макс.'], 'Это сестра.', 'A última palavra é «сестра» (sistrá), com o «с» do início e o «р» no meio.'),
        ouvir('Вот сок.', ['Вот сок.', 'Вот торт.', 'Вот кекс.'], 'Вот сок.', 'A última palavra tem uma sílaba só e termina em k: «сок».'),
        mc('Em «она» (aná), onde está a força da voz?', ['na última sílaba, «на»', 'na primeira sílaba, «о»', 'nas duas, igualmente'], 'na última sílaba, «на»', 'Lê-se aná, com força no «ná». Por isso o «о» da primeira sílaba, sem acento, soa «а».'),
        mc('Como se lê «метро»?', ['mitró', 'métro', 'metró'], 'mitró', 'O «е» sem acento soa quase «и» e a força cai no «ро»: mitró.'),
        mc('Como se lê «Москва»?', ['maskvá', 'móskva', 'moskvá'], 'maskvá', 'O «о» sem acento soa «а» e a força cai no «ква»: maskvá.'),
        mc('Como soa o «в» no fim de «Романов»?', ['como «f»', 'como «v»', 'não se ouve'], 'como «f»', 'No fim da palavra, a sonora «в» perde a vibração e vira a surda «ф»: ramánaf.'),
        lacuna('— Кто это? — Это ___.', ['сестра', 'как', 'нет'], 'сестра', 'A pergunta «Кто это?» pede uma pessoa. «сестра» é uma pessoa; «как» e «нет» não respondem a «quem».'),
        lacuna('— ___ дела? — Нормально, спасибо.', ['Как', 'Кто', 'Нет'], 'Как', '«Как дела?» é a pergunta fixa para «como vai?». Com «Кто» a frase quereria dizer «quem vai».'),
        lacuna('— Кто это? — ___ Антон.', ['Это', 'Как', 'Нет'], 'Это', 'Para apresentar alguém, diz-se «Это» e o nome, sem verbo no meio.'),
        ditado('Это Антон.', 'Quatro letras em «Это» e depois o nome. O nome é lido como se escreve, com o «о» tônico: antón.'),
        ordem('Ordene: «Aqui está o restaurante.»', ['ресторан', 'Вот'], 'Вот ресторан.', 'Para mostrar algo, diz-se «Вот» primeiro e depois a coisa. Não há «está» em russo.'),
      ]),
      producao(3, 'Aponte para uma foto (ou imagine uma) e pergunte «Кто это?». Responda com «Это мама.», «Это сестра.» e «Это Антон.». Diga também «Романов» como se fala: ramánaf.', 'Кто это? Это мама. Это сестра. Это Антон.'),
      revisao(1, 'Ouça e escolha: «сок», «сор» ou «вот». Identifique qual palavra você ouviu.'),
    ]),
    // ───────────────────────── S4 ─────────────────────────
    sessao('S4', 'Sem «é» no presente e prática', [
      texto(5, 'Москва / Moscou',
        'Это Москва. Вот метро, а там театр. Вот ресторан. Тут Анна, Макс, Вера. Антон там. Он не тут. Кто это? Это Вера. Она мама. Вот сок, вот торт, вот кекс. Это торт? Нет, это не торт, это кекс. Отлично! Спасибо, мама!',
        'Esta é Moscou. Aqui está o metrô, e lá o teatro. Aqui está o restaurante. Aqui estão Anna, Max e Vera. Antón está lá. Ele não está aqui. Quem é esta? Esta é Vera. Ela é a mãe. Aqui o suco, aqui a torta, aqui o bolinho. Isto é um bolo? Não, isto não é um bolo, é um bolinho. Ótimo! Obrigado, mãe!',
        [['Quem é Vera? Responda em russo, com «Она …».', 'Она мама.'], ['Antón está «тут» ou «там»? Responda em russo.', 'Он там. (Антон там.)'], ['Isto é «торт» ou «кекс»? Responda em russo.', 'Это не торт, это кекс.']]),
      gramatica(6, 'Sem «é» no presente: «Это мама»',
        'PASSO 1: Em português você precisa do verbo «ser»: «esta é a mãe». Em russo, no presente, esse verbo não aparece. PASSO 2: Para apontar algo, use «это» (éta), que quer dizer «isto» ou «este é». Depois diga só o nome da coisa: «Это мама» (éta máma), literalmente «isto mãe». PASSO 3: Com «он» (on) e «она» (aná) é igual: «Он Антон» (on antón), «Она мама» (aná máma). Não existe nenhuma palavra entre o sujeito e o resto. PASSO 4: Para negar, ponha «не» (nie) antes da palavra: «Это не торт» (éta nie tort), isto não é bolo. A palavra «нет» fica para a resposta curta: «Нет». PASSO 5: Para perguntar, mantenha a mesma frase e suba a voz na palavra sobre a qual você pergunta: «Это торт?». A ordem das palavras não muda. PASSO 6: Existe uma palavra «есть» (iest), que o dicionário traduz por «ser». No dia a dia ela não entra nestas frases. Não diga «Это есть мама».', {
          tag: 'Frase básica',
          comparacao: 'em português «Ela é a mãe» tem três palavras, e o «é» é obrigatório. Em russo basta «Она мама», duas palavras. O verbo «ser» no presente simplesmente não existe.',
          exemplos: [['Это мама.', 'Esta é a mãe.'], ['Он Антон.', 'Ele é Antón.'], ['Она мама.', 'Ela é a mãe.'], ['Это не торт.', 'Isto não é bolo.'], ['Это торт?', 'Isto é bolo?'], ['Кто это?', 'Quem é este?']],
          tabela: [
            { português: 'Esta é a mãe.', russo: 'Это мама.', 'palavra a palavra': 'isto mãe' }, { português: 'Ela é a mãe.', russo: 'Она мама.', 'palavra a palavra': 'ela mãe' },
            { português: 'Isto não é bolo.', russo: 'Это не торт.', 'palavra a palavra': 'isto não bolo' }, { português: 'Isto é bolo?', russo: 'Это торт?', 'palavra a palavra': 'isto bolo?' },
          ],
          erros: [['Это есть мама', 'Это мама', 'No presente não se usa «есть» no lugar de «é». A frase fica só com «Это» e o nome.'], ['Это нет торт', 'Это не торт', 'Dentro da frase, a negação é «не» e vem antes da palavra. «нет» é o «não» da resposta curta.']],
        }),
      exercicios(12, [
        ouvir('Это Москва.', ['Это Москва.', 'Это метро.', 'Это театр.'], 'Это Москва.', 'A última palavra é «Москва» (maskvá), com «к» e «в» juntos no meio.'),
        ouvir('Там театр.', ['Там театр.', 'Тут театр.', 'Там метро.'], 'Там театр.', 'Começa com «там» (lá), não «тут» (aqui). A última palavra é «театр».'),
        ouvir('Вот ресторан.', ['Вот ресторан.', 'Вот метро.', 'Вот Москва.'], 'Вот ресторан.', 'A palavra final tem três sílabas e termina em n: «ресторан» (ristarán).'),
        ouvir('Антон там.', ['Антон там.', 'Антон тут.', 'Анна там.'], 'Антон там.', 'O nome é «Антон» (antón) e a palavra final é «там» (lá).'),
        ditado('Вот метро.', 'Duas palavras: «Вот» e «метро». A segunda se escreve com «е», embora se diga mitró.'),
        ditado('Это не торт.', 'A negação «не» vem antes de «торт». Escreva as três palavras separadas.'),
        ditado('Там Антон.', 'Para dizer onde alguém está, basta «Там» e o nome. Não há verbo «estar».'),
        mc('Qual frase quer dizer «Esta é a mãe»?', ['Это мама', 'Это есть мама', 'Мама есть это'], 'Это мама', 'No presente o russo não usa «é». «Это мама» já quer dizer «esta é a mãe».'),
        mc('Em «Она мама», qual palavra corresponde ao «é» do português?', ['nenhuma: o verbo é omitido', 'она', 'мама'], 'nenhuma: o verbo é omitido', 'O russo não tem «ser» no presente. A frase é só «ela mãe», e isso basta.'),
        mc('«Она» quer dizer:', ['ela', 'ele', 'mãe'], 'ela', '«Она» é «ela». «Он» é «ele» e «мама» é «mãe». Ouça a diferença: aná e on.'),
        mc('Como se diz «Isto não é bolo»?', ['Это не торт', 'Это нет торт', 'Не это торт'], 'Это не торт', 'A negação «не» vem logo antes da palavra negada. «нет» é só para a resposta curta.'),
        lacuna('Это не торт, это ___.', ['кекс', 'как', 'тут'], 'кекс', 'A frase contrasta duas coisas: não é torta, é bolinho. «как» é «como» e «тут» é «aqui».'),
        lacuna('— Кто это? — ___ Вера.', ['Это', 'Как', 'Нет'], 'Это', 'Para apresentar alguém, diz-se «Это» e o nome. «Как» é «como» e «Нет» é «não».'),
        lacuna('Вот метро, а ___ театр. (lá)', ['там', 'тут', 'нет'], 'там', 'O sentido é «lá», longe de quem fala: «там». «тут» é «aqui».'),
        lacuna('Антон ___, а Анна там. (aqui)', ['тут', 'как', 'нет'], 'тут', 'Aqui é «тут», lá é «там». A frase contrasta os dois lugares.'),
        ordem('Ordene: «Ela é a mãe.»', ['мама', 'Она'], 'Она мама.', 'Sem «é»: o sujeito «Она» vem primeiro, depois «мама».'),
        ordem('Ordene: «Isto não é bolo.»', ['не', 'Это', 'торт'], 'Это не торт.', '«не» vem imediatamente antes da palavra negada: «Это не торт».'),
        ordem('Ordene: «Lá está o teatro.»', ['театр', 'Там'], 'Там театр.', '«Там» (lá) abre a frase e depois vem a coisa. Não há verbo «estar».'),
        livre('Escreva em russo: «Esta é Anna. Ela é a mãe.»', 'Это Анна. Она мама.'),
        livre('Escreva em russo, em cirílico, duas frases com «Это» sobre coisas que você aprendeu hoje.', 'Это сок. Это торт.'),
        livre('Leia em voz alta e escreva em português: «Кто там? Там Вера, она сестра.»', 'Quem está lá? Lá está Vera, ela é a irmã.'),
      ]),
      producao(5, 'Grave-se por 30 segundos: aponte para quatro coisas ou fotos à sua volta e diga «Это …» para cada uma, usando «сок, торт, кекс, мама, сестра». Depois diga «Это не торт, это кекс.» e termine com «Спасибо!».', 'Кто это? Это мама. Она мама. Спасибо!'),
      revisao(2, 'Releia o diálogo da sessão 3 e escreva as 3 primeiras falas em russo, sem olhar.'),
    ]),
  ],
});
