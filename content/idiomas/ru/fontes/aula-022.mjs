import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 22, titulo: 'Gramática: aspecto do verbo', nivel: 'a2',
  objetivo: 'Entender a diferença entre verbo imperfectivo e perfectivo (eu lia × eu li), reconhecer pares de verbos e formar o perfectivo com prefixos.',
  nota: 'Você já escolhe entre processo e resultado. Próxima aula: o futuro, com «буду» e com o perfectivo.',
  sessoes: [
    sessao('S1', 'Duas formas para cada verbo', [
      revisao(5, 'Escreva o passado de 5 verbos, no masculino e no feminino.'),
      gramatica(14, 'Imperfectivo e perfectivo', 'Em russo, quase todo verbo tem DOIS infinitivos, chamados aspectos. O imperfectivo olha a ação como processo, hábito ou repetição: «Я читал книгу» = eu lia / estava lendo um livro (talvez sem terminar). O perfectivo olha a ação como um todo, concluída, com resultado: «Я прочитал книгу» = eu li o livro até o fim. Em português, a ideia aparece na diferença entre «eu lia» (pretérito imperfeito) e «eu li» (pretérito perfeito). Pergunta-guia: o que importa é o processo ou o hábito (imperfectivo), ou o resultado concluído (perfectivo)? O perfectivo se conjuga como qualquer verbo (1ª ou 2ª conjugação) e muitas vezes se forma com um PREFIXO: делать → сделать. Atenção: o perfectivo não tem presente; as formas de presente dele têm sentido de futuro (próxima aula). Por isso, ao estudar um verbo, estude sempre o par: imperfectivo / perfectivo.', {
        tag: 'Aspecto e futuro',
        comparacao: 'o português usa duas terminações do mesmo verbo («eu lia» × «eu li»). O russo usa dois verbos diferentes, quase sempre parecidos.',
        tabela: [
          { imperfectivo: 'делать', perfectivo: 'сделать', pt: 'fazer' }, { imperfectivo: 'читать', perfectivo: 'прочитать', pt: 'ler' }, { imperfectivo: 'писать', perfectivo: 'написать', pt: 'escrever' },
          { imperfectivo: 'смотреть', perfectivo: 'посмотреть', pt: 'assistir, olhar' }, { imperfectivo: 'готовить', perfectivo: 'приготовить', pt: 'cozinhar' }, { imperfectivo: 'покупать', perfectivo: 'купить', pt: 'comprar' },
          { imperfectivo: 'учить', perfectivo: 'выучить', pt: 'aprender de cor' }, { imperfectivo: 'открывать', perfectivo: 'открыть', pt: 'abrir' }, { imperfectivo: 'закрывать', perfectivo: 'закрыть', pt: 'fechar' },
          { imperfectivo: 'отвечать', perfectivo: 'ответить', pt: 'responder' }, { imperfectivo: 'спрашивать', perfectivo: 'спросить', pt: 'perguntar' }, { imperfectivo: 'давать', perfectivo: 'дать', pt: 'dar' },
        ],
        exemplos: [['Вчера я читал книгу.', 'Ontem eu lia / estava lendo um livro.'], ['Вчера я прочитал книгу.', 'Ontem eu li o livro (até o fim).'], ['Каждый день я читал.', 'Todo dia eu lia (hábito).'], ['Я написал письмо.', 'Eu escrevi a carta (concluída).']],
        erros: [['Я прочитал книгу каждый день.', 'Я читал книгу каждый день.', 'Hábito e repetição pedem o imperfectivo.']],
      }),
      palavras(6, [
        ['долго', 'dólga', 'por muito tempo', 'for a long time'], ['весь день', 'vies dien', 'o dia inteiro', 'all day'], ['за час', 'za chas', 'em uma hora (prazo)', 'in an hour'], ['наконец', 'nakaniéts', 'finalmente', 'finally'], ['сразу', 'srázu', 'imediatamente', 'at once'],
      ]),
      producao(5, 'Diga duas frases para cada par: «Я читал книгу. Я прочитал книгу.» «Я писал письмо. Я написал письмо.»'),
    ]),
    sessao('S2', 'Palavras-pista', [
      revisao(5, 'Escreva 5 pares de verbos (imperfectivo / perfectivo) de memória.'),
      gramatica(12, 'Palavras-pista para escolher o aspecto', 'Certas palavras indicam o aspecto. Imperfectivo: каждый день, всегда, часто, редко, иногда, обычно, долго, весь день (hábito, repetição ou duração). Perfectivo: уже, сразу, наконец, за час (resultado, prazo, ação única concluída). Pergunta-teste: «Что ты делал вчера?» (imperfectivo: o que você estava fazendo?) × «Что ты сделал вчера?» (perfectivo: o que você fez, o que realizou?).', {
        tag: 'Aspecto e futuro',
        tabela: [
          { pista: 'каждый день', aspecto: 'imperfectivo', exemplo: 'Я каждый день читал.' }, { pista: 'всегда', aspecto: 'imperfectivo', exemplo: 'Я всегда писал письма.' }, { pista: 'долго', aspecto: 'imperfectivo', exemplo: 'Я долго читал.' },
          { pista: 'уже', aspecto: 'perfectivo', exemplo: 'Я уже прочитал.' }, { pista: 'сразу', aspecto: 'perfectivo', exemplo: 'Я сразу ответил.' }, { pista: 'наконец', aspecto: 'perfectivo', exemplo: 'Я наконец написал письмо.' }, { pista: 'за час', aspecto: 'perfectivo', exemplo: 'Я прочитал книгу за час.' },
        ],
        exemplos: [['Что ты делал вчера?', 'O que você estava fazendo ontem?'], ['Что ты сделал вчера?', 'O que você fez (realizou) ontem?']],
      }),
      palavras(8, [
        ['решать / решить', 'rishát / rishít', 'resolver, decidir', 'to solve'], ['начинать / начать', 'nachinát / nachát', 'começar', 'to begin'], ['заканчивать / закончить', 'zakánchivat / zakónchit', 'terminar', 'to finish'], ['встречать / встретить', 'vstrichát / vstrétit', 'encontrar', 'to meet'],
        ['забывать / забыть', 'zabyvát / zabýt', 'esquecer', 'to forget'], ['помогать / помочь', 'pamagát / pamóch', 'ajudar', 'to help'], ['брать / взять', 'brat / vziat', 'pegar', 'to take'], ['говорить / сказать', 'gavarít / skazát', 'dizer, falar', 'to say'],
      ]),
      producao(5, 'Responda em voz alta: «Что ты делал вчера?» (processo) e «Что ты уже сделал сегодня?» (resultado).'),
    ]),
    sessao('S3', 'Formar o perfectivo', [
      revisao(5, 'Escreva 5 palavras-pista de cada aspecto.'),
      gramatica(12, 'Prefixos que formam o perfectivo', 'O jeito mais comum de formar o perfectivo é acrescentar um prefixo ao imperfectivo. Os mais frequentes: с- (делать → сделать), про- (читать → прочитать), на- (писать → написать), по- (смотреть → посмотреть), при- (готовить → приготовить), вы- (учить → выучить), у- (видеть → увидеть). Outros pares trocam a terminação: покупать → купить, отвечать → ответить. Depois de formado, o perfectivo se conjuga como qualquer verbo; no passado: прочитал, прочитала, прочитали.', {
        tag: 'Aspecto e futuro',
        tabela: [
          { prefixo: 'с-', par: 'делать → сделать', pt: 'fazer' }, { prefixo: 'про-', par: 'читать → прочитать', pt: 'ler' }, { prefixo: 'на-', par: 'писать → написать', pt: 'escrever' }, { prefixo: 'по-', par: 'смотреть → посмотреть', pt: 'assistir' },
          { prefixo: 'при-', par: 'готовить → приготовить', pt: 'cozinhar' }, { prefixo: 'вы-', par: 'учить → выучить', pt: 'aprender' }, { prefixo: 'у-', par: 'видеть → увидеть', pt: 'avistar' },
        ],
      }),
      dialogo(8, 'Что ты уже сделал? / O que você já fez?', 'Uma mãe e o filho conversam à noite.', [
        ['Мама', 'Саша, ты уже прочитал книгу?', 'Sasha, você já leu o livro?'], ['Саша', 'Нет, я ещё читаю. Я читал её весь вечер.', 'Não, ainda estou lendo. Li a noite inteira.'], ['Мама', 'А письмо ты написал?', 'E a carta, você escreveu?'],
        ['Саша', 'Да, я уже написал письмо и ответил.', 'Sim, já escrevi a carta e respondi.'], ['Мама', 'Хорошо! Ты купил хлеб?', 'Que bom! Você comprou pão?'], ['Саша', 'Да, я купил хлеб и молоко.', 'Sim, comprei pão e leite.'],
        ['Мама', 'Отлично! Спасибо!', 'Ótimo! Obrigada!'], ['Саша', 'Не за что!', 'De nada!'],
      ]),
      producao(5, 'Conte três coisas que você já fez hoje e uma que ainda não fez.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: 2 com imperfectivo e 2 com perfectivo.'),
      exercicios(20, [
        mc('«Я читал книгу» sugere:', ['processo (talvez sem terminar)', 'ação concluída com resultado', 'futuro'], 'processo (talvez sem terminar)', 'Imperfectivo: processo.'),
        mc('«Я прочитал книгу» sugere:', ['ação concluída com resultado', 'processo sem fim', 'hábito'], 'ação concluída com resultado', 'Perfectivo: resultado.'),
        lacuna('Каждый день я ___ книгу. (читать)', ['читал', 'прочитал', 'прочитаю'], 'читал', 'Hábito: imperfectivo.'),
        lacuna('Я уже ___ письмо. (escrever)', ['написал', 'писал', 'пишу'], 'написал', '«уже»: perfectivo.'),
        lacuna('Вчера я ___ весь вечер. (читать)', ['читал', 'прочитал', 'прочитала'], 'читал', 'Duração: imperfectivo.'),
        lacuna('Она наконец ___ книгу. (прочитать)', ['прочитала', 'читала', 'прочитал'], 'прочитала', 'Perfectivo feminino: -ла.'),
        mc('Qual par está correto (imperfectivo / perfectivo)?', ['делать / сделать', 'делать / делал', 'сделать / делать'], 'делать / сделать', 'Imperfectivo primeiro, perfectivo depois.'),
        mc('Perfectivo de «писать»:', ['написать', 'писать', 'сделать'], 'написать', 'Prefixo на-.'),
        mc('Perfectivo de «покупать»:', ['купить', 'покупить', 'купать'], 'купить', 'O par troca a terminação.'),
        mc('«Что ты сделал?» pergunta por:', ['resultado', 'processo', 'hábito'], 'resultado', 'Perfectivo: o que foi realizado.'),
        mc('O perfectivo tem presente?', ['Não: as formas de presente têm sentido de futuro', 'Sim, como o imperfectivo', 'Só no passado'], 'Não: as formas de presente têm sentido de futuro', 'Perfectivo: passado e futuro.'),
        ouvir('Я уже прочитал книгу', ['Я уже прочитал книгу', 'Я долго читал книгу', 'Я читаю книгу'], 'Я уже прочитал книгу', '«уже» + perfectivo.'),
        ordem('Ordene: «Ele já escreveu a carta.»', ['письмо', 'уже', 'написал', 'Он'], 'Он уже написал письмо.', 'Sujeito + уже + perfectivo + objeto.'),
        livre('Escreva 4 frases: 2 com imperfectivo (hábito ou processo) e 2 com perfectivo (resultado).', 'Каждый день я читал. Вчера я долго писал. Я уже прочитал книгу. Я наконец написал письмо.'),
      ]),
      producao(5, 'Grave-se contando o que você fazia todo dia e o que você já fez hoje.'),
    ]),
  ],
});
