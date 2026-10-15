import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 16, titulo: 'Piacere e preferências', nivel: 'a1',
  objetivo: 'Dizer o que você gosta e não gosta com «mi piace» e «mi piacciono», concordar e discordar com «anche a me», «a me no», e usar «preferire» para comparar preferências.',
  nota: 'Você fala de gostos e de tempo livre e responde quando alguém pergunta «Ti piace…?». Próxima aula: o passato prossimo com avere.',
  sessoes: [
    sessao('S1', 'Mi piace e mi piacciono', [
      revisao(5, 'Diga em voz alta o que você compra em uma loja de roupas: peça, cor, tamanho e preço. Use «questo» e «quello».'),
      palavras(8, [
        ['leggere', 'lédjere', 'ler', ''], ['cucinare', 'kutchináre', 'cozinhar', ''], ['viaggiare', 'viaddjáre', 'viajar', ''], ['ballare', 'balláre', 'dançar', ''], ['ascoltare la musica', 'askoltáre la múzika', 'ouvir música', ''], ['guardare un film', 'guardáre un film', 'assistir a um filme', ''], ['giocare a calcio', 'djokáre a káltcho', 'jogar futebol', ''], ['camminare', 'kammináre', 'caminhar', ''],
      ]),
      gramatica(12, 'Piacere: a coisa de que se gosta é o sujeito', 'PASSO 1: em italiano, não se «gosta de» algo; algo «agrada» a você. «Mi piace il caffè» é, literalmente, «o café me agrada». PASSO 2: por isso, o verbo concorda com a coisa de que se gosta, não com quem gosta. Singular: «piace». Plural: «piacciono». PASSO 3: «Mi piace la pizza.» «Mi piacciono i film italiani.» PASSO 4: com um verbo no infinitivo, também se usa «piace» (singular): «Mi piace leggere.» «Mi piace viaggiare e cucinare.» PASSO 5: pronomes de quem gosta: mi (a mim), ti (a você, informal), Le (ao senhor, à senhora, formal), gli (a ele), le (a ela), ci (a nós), vi (a vocês), gli (a eles). PASSO 6: perguntas: «Ti piace il caffè?» / «Le piace il caffè?» / «Ti piacciono i gatti?». PASSO 7: negação: «Non mi piace il caffè.» «Non mi piacciono le olive.» PASSO 8: intensidade: «molto» (muito), «abbastanza» (bastante), «non molto» (não muito), «per niente» (nada): «Mi piace molto.» «Non mi piace per niente.» PASSO 9: com nomes e artigos, o artigo é obrigatório: «Mi piace il caffè.» PASSO 10: para algo que você ama de verdade, use «adoro» (adoro) e «amo»; para algo que não suporta, «detesto».', {
        tag: 'Piacere',
        comparacao: 'em português o sujeito é quem gosta («eu gosto de café»). Em italiano, o sujeito é o que agrada («o café me agrada»), então o verbo concorda com a coisa: «Mi piacciono le olive» (as azeitonas me agradam). O português não usa artigo depois de «gosto de» com uma preposição; o italiano exige: «Mi piace il caffè», e nunca «Mi piace caffè».',
        tabela: [
          { pessoa: 'a mim', pronome: 'mi', exemplo: 'Mi piace la musica.' }, { pessoa: 'a você (tu)', pronome: 'ti', exemplo: 'Ti piacciono i film?' }, { pessoa: 'ao senhor, à senhora', pronome: 'Le', exemplo: 'Le piace Roma?' },
          { pessoa: 'a ele', pronome: 'gli', exemplo: 'Gli piace il calcio.' }, { pessoa: 'a ela', pronome: 'le', exemplo: 'Le piace cucinare.' }, { pessoa: 'a nós', pronome: 'ci', exemplo: 'Ci piace viaggiare.' }, { pessoa: 'a vocês', pronome: 'vi', exemplo: 'Vi piacciono gli spaghetti?' }, { pessoa: 'a eles', pronome: 'gli', exemplo: 'Gli piacciono i cani.' },
        ],
        erros: [['Io piaccio la pizza.', 'Mi piace la pizza.', 'Quem gosta é o complemento («mi»); a coisa é o sujeito.'], ['Mi piace le olive.', 'Mi piacciono le olive.', 'Plural pede «piacciono».'], ['Mi piacciono leggere.', 'Mi piace leggere.', 'Com infinitivo, singular.'], ['Mi piace caffè.', 'Mi piace il caffè.', 'O artigo é obrigatório.']],
      }),
      producao(5, 'Diga em voz alta cinco coisas de que você gosta e três de que não gosta: «Mi piace… Mi piacciono… Non mi piace…»'),
    ]),
    sessao('S2', 'Concordar, discordar e preferir', [
      revisao(4, 'Faça perguntas em voz alta: «Ti piace…?» com cinco itens diferentes, uns no singular e outros no plural.'),
      palavras(6, [
        ['anche', 'ánke', 'também', ''], ['neanche', 'neánke', 'também não', ''], ['invece', 'invêtche', 'por outro lado, já', ''], ['però', 'peró', 'mas, porém', ''], ['secondo me', 'sekôndo me', 'na minha opinião', ''], ['preferire', 'preferíre', 'preferir', ''],
      ]),
      gramatica(12, 'Respostas curtas e preferire', 'PASSO 1: para concordar com algo positivo, diga «Anche a me.» (a mim também): «Mi piace il caffè.» — «Anche a me.» PASSO 2: para discordar de algo positivo, diga «A me no.» (a mim não) ou «Invece a me no.». PASSO 3: para concordar com algo negativo, diga «Neanche a me.» (a mim também não): «Non mi piace il caldo.» — «Neanche a me.» PASSO 4: para discordar de algo negativo, diga «A me sì.» (a mim, sim): «Non mi piace il calcio.» — «A me sì.» PASSO 5: as formas com outras pessoas: «a te», «a lui», «a lei», «a noi», «a voi», «a loro»: «A Marco piace il caffè, ma a Giulia no.» PASSO 6: «preferire» (preferir) é um verbo em -ire com «-isc-» em quase todas as pessoas: preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono. PASSO 7: use «preferire … a …» para comparar: «Preferisco il caffè al tè.» «Preferisco leggere a guardare la televisione.» PASSO 8: «secondo me» é a forma neutra de dar opinião: «Secondo me, Roma è bellissima.»', {
        tag: 'Piacere',
        comparacao: 'em português respondemos «eu também» e «eu também não» sem mudar a estrutura. Em italiano, a forma muda: «anche a me» (em vez de «anche io», que não encaixa na estrutura de «piacere»), «neanche a me». Para «preferir A a B», o português usa «a» também: «prefiro café a chá», e o italiano segue: «preferisco il caffè al tè».',
        tabela: [
          { frase: 'Mi piace il caffè.', resposta_igual: 'Anche a me.', resposta_oposta: 'A me no.' }, { frase: 'Non mi piace il caldo.', resposta_igual: 'Neanche a me.', resposta_oposta: 'A me sì.' }, { frase: 'Ci piace viaggiare.', resposta_igual: 'Anche a noi.', resposta_oposta: 'A noi no.' }, { frase: 'Non gli piace cucinare.', resposta_igual: 'Neanche a lui.', resposta_oposta: 'A lui sì.' },
        ],
        erros: [['Anche io mi piace il caffè.', 'Anche a me.', 'Para gostos, «anche a me»; «io» não vira sujeito.'], ['Non mi piace il caldo. — Anche a me.', 'Non mi piace il caldo. — Neanche a me.', 'Com negação, «neanche».'], ['Preferisco il caffè che il tè.', 'Preferisco il caffè al tè.', 'A comparação pede «a».'], ['Io preferisco di leggere.', 'Io preferisco leggere.', 'Sem «di» depois de «preferire».']],
      }),
      producao(8, 'Imagine uma conversa: alguém diz 5 gostos e você responde com «anche a me», «a me no», «neanche a me», «a me sì». Depois diga três preferências com «Preferisco … a …».'),
    ]),
    sessao('S3', 'Tempo livre: giocare, suonare e fare', [
      revisao(4, 'Diga em voz alta três coisas que você prefere e por quê, com «preferisco».'),
      palavras(5, [
        ['il tempo libero', 'il témpo líbero', 'o tempo livre', ''], ['il concerto', 'il kontchérto', 'o show, o concerto', ''], ['la mostra', 'la móstra', 'a exposição', ''], ['la squadra', 'la skuádra', 'o time', ''], ['suonare la chitarra', 'suonáre la kitárra', 'tocar violão', ''], ['il passatempo', 'il passatémpo', 'o passatempo', ''],
      ]),
      gramatica(8, 'Giocare, suonare e fare: hobbies', 'PASSO 1: para esportes e jogos, o italiano usa «giocare a»: «gioco a calcio», «gioca a tennis», «giochiamo a carte». PASSO 2: para instrumentos, usa «suonare» com o artigo: «suono la chitarra», «suona il pianoforte». PASSO 3: para atividades, muitas vezes se usa «fare»: «faccio yoga», «fa nuoto», «facciamo una passeggiata». PASSO 4: para «ouvir», use «ascoltare»; para «ver», «guardare» (ver o que passa) e «vedere» (ver, perceber): «guardo un film», «ascolto la radio». PASSO 5: para perguntar o tempo livre: «Cosa fai nel tempo libero?», «Che cosa ti piace fare?». PASSO 6: «giocare» tem «gi» com som «dj» (djokáre), e «giochi» (jogas) tem «ch» com som «k»: gioco, giochi, gioca, giochiamo, giocate, giocano.', {
        tag: 'Tempo livre',
        comparacao: 'o português usa «jogar», «tocar» e «fazer» de forma parecida, mas o italiano separa: instrumentos são «suonare» («tocar»), esportes de bola e jogos são «giocare a», e atividades sem competição são «fare». Atenção ao falso amigo «palestra» (academia, e não palestra) e a «camera» (quarto, e não câmera).',
        tabela: [
          { verbo: 'giocare a', uso: 'esportes e jogos', exemplo: 'Gioco a calcio con gli amici.' }, { verbo: 'suonare', uso: 'instrumentos', exemplo: 'Mia sorella suona il pianoforte.' }, { verbo: 'fare', uso: 'atividades', exemplo: 'Faccio yoga la mattina.' }, { verbo: 'ascoltare', uso: 'música, rádio', exemplo: 'Ascolto musica in treno.' }, { verbo: 'guardare', uso: 'filmes, televisão', exemplo: 'Guardiamo un film stasera.' },
        ],
        erros: [['Suono a calcio.', 'Gioco a calcio.', 'Esporte: «giocare a».'], ['Gioco la chitarra.', 'Suono la chitarra.', 'Instrumento: «suonare».'], ['Faccio a yoga.', 'Faccio yoga.', 'Sem preposição com «fare».'], ['Vado alla palestra per una conferenza.', 'Vado a una conferenza.', '«Palestra» é academia; a palestra-evento é «conferenza».']],
      }),
      dialogo(8, 'Cosa ti piace fare? / O que você gosta de fazer?', 'Chiara e Matteo conversam sobre o tempo livre.', [
        ['Chiara', 'Matteo, cosa ti piace fare nel tempo libero?', 'Matteo, o que você gosta de fazer no tempo livre?'], ['Matteo', 'Mi piace giocare a calcio e suonare la chitarra. E a te?', 'Gosto de jogar futebol e tocar violão. E você?'], ['Chiara', 'A me piace leggere e viaggiare. Non mi piace molto lo sport.', 'Eu gosto de ler e viajar. Não gosto muito de esporte.'], ['Matteo', 'Neanche a mia sorella piace lo sport. Preferisce ascoltare la musica.', 'Minha irmã também não gosta de esporte. Prefere ouvir música.'], ['Chiara', 'Anche a me! Ti piacciono i concerti?', 'Eu também! Você gosta de shows?'], ['Matteo', 'Sì, molto. Sabato c\'è un concerto in piazza: vieni con noi?', 'Sim, muito. Sábado tem um show na praça: você vem com a gente?'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Depois responda por você: o que você gosta de fazer no tempo livre e o que prefere?'),
    ]),
    sessao('S4', 'Revisão e prática da aula 16', [
      revisao(5, 'Diga em voz alta o que você gosta de fazer em cada dia da semana, com «mi piace», «preferisco» e um hobby de cada tipo (giocare, suonare, fare).'),
      exercicios(20, [
        ouvir('Mi piacciono i film italiani', ['Mi piacciono i film italiani', 'Mi piace il film italiano', 'Ti piacciono i film italiani'], 'Mi piacciono i film italiani', 'Ouça «piacciono».'), ouvir('Anche a me', ['Anche a me', 'A me no', 'Neanche a me'], 'Anche a me', 'Ouça «anche».'), ouvir('Preferisco il caffè al tè', ['Preferisco il caffè al tè', 'Preferisco il tè al caffè', 'Preferisce il caffè al tè'], 'Preferisco il caffè al tè', 'Ouça a ordem.'),
        ditado('Mi piace leggere', 'Escreva: Mi piace leggere.'), ditado('Non mi piacciono le olive', 'Escreva: Non mi piacciono le olive.'), ditado('Gioco a calcio con gli amici', 'Escreva: Gioco a calcio con gli amici.'),
        mc('Qual frase está correta?', ['Mi piacciono i gatti.', 'Mi piace i gatti.', 'Io piaccio i gatti.'], 'Mi piacciono i gatti.', 'Plural: «piacciono».'), mc('Como concordar com «Non mi piace il freddo»?', ['Neanche a me.', 'Anche a me.', 'A me sì.'], 'Neanche a me.', 'Concordância negativa.'), mc('Qual verbo se usa com instrumentos?', ['suonare', 'giocare', 'fare'], 'suonare', '«Suono la chitarra».'), mc('Qual frase está correta?', ['Preferisco il caffè al tè.', 'Preferisco il caffè che il tè.', 'Preferisco di caffè al tè.'], 'Preferisco il caffè al tè.', 'Preferire A a B.'),
        lacuna('___ piace cucinare. (a ele)', ['Gli', 'Le', 'Mi'], 'Gli', '«A ele»: «gli».'), lacuna('Non ___ piacciono i ragni. (a mim)', ['mi', 'ti', 'gli'], 'mi', '«A mim»: «mi».'), lacuna('Noi ___ a tennis. (giocare)', ['giochiamo', 'giocano', 'gioco'], 'giochiamo', '«Noi giochiamo».'), lacuna('Lei ___ la chitarra. (suonare)', ['suona', 'gioca', 'fa'], 'suona', 'Instrumento: «suonare».'),
        ordem('Ordene: «Mi piace molto viaggiare.»', ['Mi', 'piace', 'molto', 'viaggiare'], 'Mi piace molto viaggiare.', 'Pronome, verbo, intensidade.'), ordem('Ordene: «Non mi piacciono le olive.»', ['Non', 'mi', 'piacciono', 'le', 'olive'], 'Non mi piacciono le olive.', 'Negação antes do pronome.'),
        livre('Escreva em italiano: Eu gosto de ler e de ouvir música. Não gosto de esporte.', 'Mi piace leggere e ascoltare la musica. Non mi piace lo sport.'),
        lacuna('Mi ___ cucinare. (agrada)', ['piacciono', 'piace', 'piaci'], 'piace', 'Verbo no infinitivo pede «piace» no singular.'),
        lacuna('Ti ___ le mostre? (agradam)', ['piace', 'piaci', 'piacciono'], 'piacciono', '«Mostre» é plural: «piacciono».'),
        lacuna('___ piacciono i concerti. (a nós)', ['Vi', 'Mi', 'Ci'], 'Ci', 'O pronome de «a nós» é «ci».'),
        lacuna('Io ___ yoga la mattina. (faço)', ['faccio', 'suono', 'gioco'], 'faccio', 'Atividades como yoga usam «fare».'),
        lacuna('Preferisco camminare ___ guidare. (a)', ['che', 'a', 'di'], 'a', 'Preferire X «a» Y.'),
        mc('Como discordar de «Non mi piace il calcio»?', ['Anche a me.', 'Neanche a me.', 'A me sì.'], 'A me sì.', 'Contra uma frase negativa, «a me sì» (a mim, sim).'),
        mc('Qual frase está correta?', ['Mi piace i concerti.', 'Mi piacciono i concerti.', 'Io piaccio i concerti.'], 'Mi piacciono i concerti.', '«Concerti» é plural, então «piacciono».'),
        mc('Qual construção se usa com esportes como o tênis?', ['suonare', 'ascoltare', 'giocare a'], 'giocare a', 'Esportes e jogos usam «giocare a».'),
        mc('Como se diz «Gosto de viajar»?', ['Mi piace viaggiare.', 'Mi piacciono viaggiare.', 'Mi piace i viaggiare.'], 'Mi piace viaggiare.', 'Infinitivo: sempre «piace».'),
        ordem('Ordene: «Gli piace suonare la chitarra.»', ['Gli', 'piace', 'suonare', 'la', 'chitarra.'], 'Gli piace suonare la chitarra.', 'Instrumentos usam «suonare» com artigo.'),
        ordem('Ordene: «A me piace camminare la sera.»', ['A', 'me', 'piace', 'camminare', 'la', 'sera.'], 'A me piace camminare la sera.', '«A me» reforça quem gosta.'),
        livre('Escreva em italiano: Gosto de dançar e de ouvir música, mas não gosto de futebol.', 'Mi piace ballare e ascoltare la musica, ma non mi piace il calcio.'),
        livre('Escreva em italiano: Ela prefere cozinhar. Eu jogo tênis.', 'Preferisce cucinare. Io gioco a tennis.'),
      ]),
      producao(5, 'Fale um minuto sobre seus gostos e preferências, sem ler: pelo menos cinco frases com «piace/piacciono» e duas com «preferisco».'),
    ]),
  ],
});
