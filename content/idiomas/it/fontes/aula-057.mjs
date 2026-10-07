import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 57, titulo: 'Notícias e mídia', nivel: 'b1',
  objetivo: 'Entender e contar notícias, citar a fonte, usar o condicional jornalístico, resumir um artigo e falar de mídia e redes com as preposições certas.',
  nota: 'Você agora acompanha uma notícia em italiano, resume e avalia a fonte. Próxima aula: cultura, festas e tradições.',
  sessoes: [
    sessao('S1', 'Citar a fonte e relatar', [
      revisao(5, 'Reporte em voz alta três frases que alguém disse, usando o discurso indireto (aula 48): «Ha detto che sarebbe venuto».'),
      palavras(8, [
        ['la notizia', '', 'a notícia', ''], ['il titolo', '', 'a manchete / o título', ''], ['l\'articolo', '', 'o artigo', ''], ['il giornalista', '', 'o jornalista', ''], ['il telegiornale', '', 'o telejornal', ''], ['la fonte', '', 'a fonte', ''], ['la cronaca', '', 'as notícias locais (acidentes, crimes)', ''], ['il quotidiano', '', 'o jornal diário', ''],
      ]),
      gramatica(12, 'Secondo il giornale, pare che, avrebbe', 'PASSO 1: cite a fonte com «secondo», «stando a», «a detta di»: «Secondo il giornale, domani pioverà.» Com pronome: «secondo lui», e não «secondo di lui». PASSO 2: para boatos, use «sembra che» ou «pare che» + congiuntivo: «Sembra che nevichi domani.» «Si dice che» aceita indicativo: «Si dice che il ministro si dimetterà.» PASSO 3: o condicional jornalístico marca uma notícia não confirmada: «Il ministro avrebbe dato le dimissioni.», «Ci sarebbero tre feriti.» PASSO 4: verbos de relato + «che»: «annunciare», «dichiarare», «affermare», «spiegare», «rivelare»: «Il ministro ha annunciato che si dimetterà.» PASSO 5: no discurso indireto no passado, o futuro vira condicional passado: «Ha dichiarato che sarebbe partito.» PASSO 6: manchetes usam o presente e frases nominais sem artigo: «Il presidente si dimette.», «Sciopero dei treni.» PASSO 7: a passiva é comum em notícias: «Un uomo è stato ritrovato.» PASSO 8: fato confirmado usa indicativo; condicional serve só para o que ainda não foi confirmado.', {
        tag: 'Mídia',
        comparacao: 'o português também usa o condicional na imprensa («o ministro teria renunciado»), e o italiano faz igual: «avrebbe dato le dimissioni». A diferença está em «sembra che / pare che», que pedem congiuntivo, e em «secondo», que não leva «di» antes do pronome.',
        tabela: [
          { recurso: 'secondo…', uso: 'citar a fonte', exemplo: 'Secondo il giornale, domani pioverà.' },
          { recurso: 'sembra / pare che', uso: 'boato (+ congiuntivo)', exemplo: 'Pare che nevichi domani.' },
          { recurso: 'condizionale passato', uso: 'não confirmado', exemplo: 'Il ministro avrebbe dato le dimissioni.' },
          { recurso: 'ha dichiarato che', uso: 'relato', exemplo: 'Ha dichiarato che sarebbe partito.' },
          { recurso: 'presente / nominal', uso: 'manchete', exemplo: 'Il presidente si dimette.' },
          { recurso: 'passiva', uso: 'agente desconhecido', exemplo: 'Un uomo è stato ritrovato.' },
        ],
        erros: [['Sembra che è malato.', 'Sembra che sia malato.', '«Sembra che» pede congiuntivo.'], ['Il ministro si sarebbe dimesso, è confermato.', 'Il ministro si è dimesso, è confermato.', 'O condicional marca o não confirmado; fato confirmado usa o indicativo.'], ['Secondo di lui, la notizia è falsa.', 'Secondo lui, la notizia è falsa.', '«Secondo» não leva «di».'], ['Ha dichiarato che verrà ieri.', 'Ha dichiarato che sarebbe venuto ieri.', 'No relato passado, o futuro vira condicional passado.']],
      }),
      producao(5, 'Conte em voz alta uma notícia que você viu hoje, citando a fonte e usando «avrebbe» uma vez.'),
    ]),
    sessao('S2', 'Resumir e verificar', [
      revisao(4, 'Diga em voz alta duas frases com «secondo», duas com «sembra che» e duas com o condicional jornalístico.'),
      palavras(6, [
        ['riassumere', '', 'resumir', ''], ['il sondaggio', '', 'a pesquisa de opinião', ''], ['l\'inchiesta', '', 'a investigação / reportagem investigativa', ''], ['attendibile', '', 'confiável', ''], ['una bufala', '', 'um boato falso', ''], ['smentire', '', 'desmentir', ''],
      ]),
      gramatica(12, 'Riassumere un articolo e valutare la fonte', 'PASSO 1: um bom resumo segue a ordem tema, fatos principais, consequência. PASSO 2: frases úteis: «L\'articolo parla di…», «L\'autore spiega che…», «Il testo mostra che…» PASSO 3: dados: «Secondo un sondaggio, la maggioranza degli italiani preferisce…» PASSO 4: na escrita cuidada, «il fatto che» pede congiuntivo (na fala ouve-se também o indicativo): «Il fatto che sia partito sorprende tutti.» PASSO 5: para avaliar se a notícia é confiável, pergunte: quem é o autor? qual é a fonte? outros jornais dizem o mesmo? PASSO 6: vocabulário: «una bufala» (boato falso), «attendibile» (confiável), «smentire» (desmentir). PASSO 7: feche com «In sintesi…» ou «Per riassumere…» PASSO 8: separe fato e opinião: «I fatti sono questi…», «Secondo l\'autore…»', {
        tag: 'Mídia',
        comparacao: '«resumo» é «riassunto», e «resumir» é «riassumere». Parece com o português, mas a armadilha é «parlare di» (e não «parlare su» ou «parlare sobre»). E «notícia» é «notizia», com «z». Já «il giornale» é o jornal, e «la giornata» é o dia.',
        tabela: [
          { frase: 'L\'articolo parla di…', funcao: 'tema', exemplo: 'L\'articolo parla del clima.' },
          { frase: 'L\'autore spiega che…', funcao: 'ideia principal', exemplo: 'L\'autore spiega che il clima cambia.' },
          { frase: 'Secondo un sondaggio…', funcao: 'dados', exemplo: 'Secondo un sondaggio, molti leggono online.' },
          { frase: 'Il fatto che + congiuntivo', funcao: 'fato conhecido', exemplo: 'Il fatto che sia tardi non conta.' },
          { frase: 'In sintesi…', funcao: 'concluir', exemplo: 'In sintesi, bisogna verificare le fonti.' },
        ],
        erros: [['L\'articolo parla sul clima.', 'L\'articolo parla del clima.', '«Parlare di».'], ['Il fatto che è partito sorprende.', 'Il fatto che sia partito sorprende.', 'Na escrita cuidada, «il fatto che» pede congiuntivo (na fala o indicativo é comum).'], ['L\'autore lui spiega che…', 'L\'autore spiega che…', 'Sem pronome repetido.'], ['In riassunto, bisogna agire.', 'In sintesi, bisogna agire.', 'A fórmula de conclusão é «in sintesi» ou «per riassumere».']],
      }),
      producao(8, 'Resuma em voz alta, em cinco frases, uma notícia ou um vídeo que você viu esta semana, e diga se a fonte parece confiável.'),
    ]),
    sessao('S3', 'Mídia e redes: preposições e expressões', [
      revisao(4, 'Diga em voz alta onde você lê, ouve e vê notícias, usando as preposições certas.'),
      palavras(5, [
        ['condividere', '', 'compartilhar', ''], ['il post', '', 'a publicação', ''], ['la smentita', '', 'o desmentido', ''], ['ingannare', '', 'enganar', ''], ['incredibile', '', 'inacreditável', ''],
      ]),
      gramatica(8, 'Su, alla, in: onde leio, ouço, vejo', 'PASSO 1: use «su» para meios impressos e digitais: «L\'ho letto sul giornale.», «su Internet», «sui social», «su un sito». PASSO 2: use «alla radio» e «alla TV» ou «in televisione»: «L\'ho sentito alla radio.», «L\'ho visto in TV.» PASSO 3: «al telegiornale»: «L\'hanno detto al telegiornale.» PASSO 4: verbos úteis: «seguire», «condividere», «commentare», «iscriversi a». PASSO 5: «farsi ingannare» = ser enganado. PASSO 6: prefira «due fonti diverse» antes de compartilhar.', {
        tag: 'Mídia',
        comparacao: 'em português dizemos «li no jornal», «ouvi no rádio», «vi na TV». O italiano troca a preposição: «sul giornale», «alla radio», «in televisione / alla TV». Quem traduz literalmente com «nel» comete um erro.',
        tabela: [
          { meio: 'jornal', preposicao: 'su', exemplo: 'L\'ho letto sul giornale.' },
          { meio: 'Internet / redes', preposicao: 'su', exemplo: 'L\'ho letto su Internet.' },
          { meio: 'rádio', preposicao: 'a', exemplo: 'L\'ho sentito alla radio.' },
          { meio: 'TV', preposicao: 'in / a', exemplo: 'L\'ho visto in televisione.' },
          { meio: 'telejornal', preposicao: 'a', exemplo: 'L\'hanno detto al telegiornale.' },
        ],
        erros: [['L\'ho letto nel giornale.', 'L\'ho letto sul giornale.', 'Para jornal, use «su».'], ['L\'ho sentito nella radio.', 'L\'ho sentito alla radio.', 'Para rádio, use «a».'], ['L\'ho visto sul televisione.', 'L\'ho visto in televisione.', 'Em TV, use «in televisione» ou «alla TV».'], ['Ho letto nell\'Internet.', 'Ho letto su Internet.', 'Sem artigo e com «su».']],
      }),
      texto(8, 'Una notizia da verificare', 'Ieri sera ho letto sui social che un\'importante azienda avrebbe chiuso tutti i suoi negozi. Il post, condiviso da migliaia di persone, non indicava nessuna fonte. Prima di crederci, ho cercato la notizia sul sito di un quotidiano e al telegiornale. Nessuno ne parlava. Alla fine ho trovato una smentita dell\'azienda: era una bufala. Il fatto che tante persone abbiano condiviso il post senza controllare mi ha sorpreso. Ora, quando una notizia mi sembra incredibile, cerco almeno due fonti diverse. Chi legge solo i titoli rischia di farsi ingannare.', 'Ontem à noite li nas redes sociais que uma grande empresa teria fechado todas as suas lojas. A publicação, compartilhada por milhares de pessoas, não indicava nenhuma fonte. Antes de acreditar, procurei a notícia no site de um jornal e no telejornal. Ninguém falava disso. No fim encontrei um desmentido da empresa: era um boato falso. O fato de tantas pessoas terem compartilhado a publicação sem verificar me surpreendeu. Agora, quando uma notícia me parece inacreditável, procuro pelo menos duas fontes diferentes. Quem lê só as manchetes corre o risco de ser enganado.', [['Onde o autor leu a notícia?', 'Nas redes sociais.'], ['O que ele encontrou no fim?', 'Um desmentido da empresa: era um boato falso.'], ['O que ele faz agora com notícias inacreditáveis?', 'Procura pelo menos duas fontes diferentes.']]),
      producao(5, 'Diga em voz alta como você verifica uma notícia antes de compartilhá-la, em quatro frases.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 57', [
      revisao(5, 'Resuma em voz alta uma notícia com fonte, fato e conclusão.'),
      exercicios(20, [
        ouvir('Secondo il giornale, domani pioverà', ['Secondo il giornale, domani pioverà', 'Secondo il giornale, ieri pioveva', 'Secondo me, domani pioverà'], 'Secondo il giornale, domani pioverà', 'Fonte + futuro.'),
        ouvir('Il ministro avrebbe dato le dimissioni', ['Il ministro avrebbe dato le dimissioni', 'Il ministro ha dato le dimissioni', 'Il ministro darà le dimissioni'], 'Il ministro avrebbe dato le dimissioni', 'Condicional jornalístico.'),
        ouvir('L\'ho letto sul giornale', ['L\'ho letto sul giornale', 'L\'ho letto nel giornale', 'L\'ho letta sul giornale'], 'L\'ho letto sul giornale', '«Su» para jornal.'),
        ditado('Sembra che nevichi domani', 'Escreva: Sembra che nevichi domani.'),
        ditado('L\'articolo parla del clima', 'Escreva: L\'articolo parla del clima.'),
        ditado('Era una bufala', 'Escreva: Era una bufala.'),
        mc('O condicional jornalístico indica:', ['notícia não confirmada', 'fato confirmado', 'passado distante'], 'notícia não confirmada', '«Avrebbe dato».'),
        mc('«Sembra che» pede:', ['congiuntivo', 'indicativo', 'infinitivo'], 'congiuntivo', '«Sembra che sia».'),
        mc('Como dizer «ouvi no rádio»?', ['L\'ho sentito alla radio.', 'L\'ho sentito nella radio.', 'L\'ho sentito sulla radio.'], 'L\'ho sentito alla radio.', '«Alla radio».'),
        mc('«Una bufala» é:', ['um boato falso', 'um jornal local', 'uma manchete'], 'um boato falso', 'Fake news.'),
        lacuna('___ il giornale, domani pioverà. (segundo)', ['Secondo', 'Per', 'Da'], 'Secondo', 'Fonte.'),
        lacuna('L\'articolo parla ___ clima.', ['del', 'sul', 'al'], 'del', 'Parlare di.'),
        lacuna('Il fatto che ___ partito sorprende tutti.', ['sia', 'sarebbe', 'avrà'], 'sia', 'Congiuntivo.'),
        lacuna('L\'ho visto ___ televisione.', ['in', 'sul', 'nella'], 'in', '«In televisione».'),
        ordem('Ordene: «Secondo il giornale, domani pioverà.»', ['Secondo', 'il', 'giornale,', 'domani', 'pioverà'], 'Secondo il giornale, domani pioverà.', 'Fonte.'),
        ordem('Ordene: «L\'articolo parla del clima.»', ['L\'articolo', 'parla', 'del', 'clima'], 'L\'articolo parla del clima.', 'Resumo.'),
        livre('Escreva em italiano: Segundo o jornal, o ministro teria renunciado. Li isso na internet. Parece que é um boato falso.', 'Secondo il giornale, il ministro avrebbe dato le dimissioni. L\'ho letto su Internet. Sembra che sia una bufala.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma notícia, com opinião e fonte.'),
    ]),
  ],
});
