import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 4, titulo: 'Presente em -are, negação e perguntas', nivel: 'a1',
  objetivo: 'Conjugar os verbos regulares em -are no presente, escrever corretamente verbos como «mangiare» e «cercare», negar com «non», usar «mai», «sempre» e «spesso» e fazer perguntas com «che cosa», «dove», «quando» e «perché».',
  nota: 'Você fala do que faz todo dia, nega, e pergunta sobre o que os outros fazem. Próxima aula: artigos, plural dos substantivos e «c\'è / ci sono».',
  sessoes: [
    sessao('S1', 'O presente dos verbos em -are', [
      revisao(5, 'Retome a aula 3: diga em voz alta nome, nacionalidade, cidade, país e idade. Depois conjugue «avere» de «io ho» a «loro hanno».'),
      palavras(8, [
        ['parlare', 'parláre', 'falar', ''], ['abitare', 'abitáre', 'morar', ''], ['lavorare', 'lavoráre', 'trabalhar', ''], ['studiare', 'studiáre', 'estudar', ''], ['mangiare', 'mandjáre', 'comer', ''], ['ascoltare', 'askoltáre', 'escutar', ''], ['comprare', 'kompráre', 'comprar', ''], ['cantare', 'kantáre', 'cantar', ''],
      ]),
      gramatica(12, 'Verbos em -are: terminações do presente', 'PASSO 1: o infinitivo dos verbos italianos termina em «-are», «-ere» ou «-ire». Hoje você vê os verbos em «-are», que são os mais numerosos. PASSO 2: tire o «-are» e fica o radical: «parlare» tem o radical «parl-». PASSO 3: some ao radical as terminações: «-o», «-i», «-a», «-iamo», «-ate», «-ano». PASSO 4: o presente serve para o que acontece agora, para o que acontece sempre e para um futuro próximo: «Studio italiano» pode ser «estudo» ou «estou estudando». PASSO 5: o pronome sujeito quase sempre se omite: «Parlo italiano», «Abitiamo a Roma». PASSO 6: o acento tônico cai no radical em «parlo», «parli», «parla», «parlano» (párlano), e na terminação em «parliamo» e «parlate». PASSO 7: ortografia: os sons duros e moles se mantêm. Verbos em «-care» e «-gare» ganham «h» antes de «i» e «e»: «cercare» vira «tu cerchi, noi cerchiamo»; «pagare» vira «tu paghi, noi paghiamo». PASSO 8: verbos em «-ciare», «-giare» e «-iare» não repetem o «i»: «mangiare» vira «tu mangi, noi mangiamo»; «studiare» vira «tu studi, noi studiamo».', {
        tag: 'Presente -are',
        comparacao: 'em português a conjugação do presente também muda por pessoa («falo, falas, fala, falamos, falais, falam»). Mas em português usamos «você», que leva a terceira pessoa. Em italiano, com um amigo se usa «parli» e, com um desconhecido, «parla». Também é diferente que o italiano omite o pronome com muito mais frequência.',
        tabela: [
          { pronome: 'io', forma: 'parlo', exemplo: 'Parlo italiano.' }, { pronome: 'tu', forma: 'parli', exemplo: 'Parli portoghese?' }, { pronome: 'lui / lei / Lei', forma: 'parla', exemplo: 'Marco parla inglese.' },
          { pronome: 'noi', forma: 'parliamo', exemplo: 'Parliamo piano.' }, { pronome: 'voi', forma: 'parlate', exemplo: 'Parlate spagnolo?' }, { pronome: 'loro', forma: 'parlano', exemplo: 'Loro parlano tedesco.' },
        ],
        erros: [['Io parli italiano.', 'Io parlo italiano.', 'Com «io», a terminação é «-o».'], ['Noi parlamo italiano.', 'Noi parliamo italiano.', 'Com «noi», a terminação é «-iamo».'], ['Lui parlo inglese.', 'Lui parla inglese.', 'Com «lui» e «lei», a terminação é «-a».'], ['Tu mangii la pasta.', 'Tu mangi la pasta.', 'Em «-giare», o «i» do radical não se repete.']],
      }),
      producao(5, 'Diga em voz alta seis frases sobre você e sobre alguém que conhece, com seis verbos desta sessão: «Parlo… Abito… Lavoro… Studio… Mangio… Ascolto…»'),
    ]),
    sessao('S2', 'Negação e frequência', [
      revisao(4, 'Conjugue em voz alta «abitare» e «lavorare» de «io» a «loro». Qual é a terminação de «noi»?'),
      palavras(6, [
        ['non', 'non', 'não (antes do verbo)', ''], ['mai', 'mái', 'nunca, jamais', ''], ['sempre', 'sêmpre', 'sempre', ''], ['spesso', 'spésso', 'com frequência', ''], ['ogni giorno', 'ônhi djôrno', 'todo dia', ''], ['un po\'', 'um pó', 'um pouco', ''],
      ]),
      gramatica(12, 'Negar com non e dizer com que frequência', 'PASSO 1: para negar, ponha «non» logo antes do verbo: «Parlo tedesco» vira «Non parlo tedesco». PASSO 2: o «non» é uma só palavra, nunca «no» antes do verbo. «No» só serve para responder: «Parli francese? — No, non parlo francese.» PASSO 3: com pronome, o «non» fica depois dele: «Io non parlo», «Lei non lavora». PASSO 4: para dizer «nunca», o italiano usa dois elementos: «non» antes do verbo e «mai» depois: «Non ascolto mai la radio.» O português também diz «não ouço nunca»; em italiano, com «mai» depois do verbo, o «non» é obrigatório. PASSO 5: «sempre», «spesso» e «ogni giorno» ficam em geral depois do verbo: «Studio sempre la sera», «Mangio spesso la pasta», «Canto ogni giorno». PASSO 6: «un po\'» é «um pouco»: «Parlo un po\' di italiano» (falo um pouco de italiano). O apóstrofo marca a perda de «poco». PASSO 7: depois de «parlare», o nome do idioma costuma vir sem artigo: «Parlo italiano», «Parlo portoghese». Mas com «un po\' di»: «Parlo un po\' di italiano».', {
        tag: 'Negação',
        comparacao: 'a posição de «não» é a mesma do português: antes do verbo. A diferença é «nunca»: o português aceita «nunca ouço»; o italiano exige «non ascolto mai». E o espanhol, que usa «no», pode atrapalhar: em italiano a palavra é «non».',
        tabela: [
          { tipo: 'negação simples', exemplo: 'Non parlo tedesco.', significado: 'não falo alemão' }, { tipo: 'resposta curta', exemplo: 'No, non lavoro oggi.', significado: 'não, não trabalho hoje' }, { tipo: 'nunca', exemplo: 'Non mangio mai la pasta.', significado: 'nunca como macarrão' },
          { tipo: 'sempre', exemplo: 'Studio sempre la sera.', significado: 'sempre estudo à noite' }, { tipo: 'com frequência', exemplo: 'Ascolto spesso la radio.', significado: 'escuto rádio com frequência' }, { tipo: 'um pouco', exemplo: 'Parlo un po\' di italiano.', significado: 'falo um pouco de italiano' },
        ],
        erros: [['Io no parlo tedesco.', 'Io non parlo tedesco.', 'Antes do verbo, a negação é «non».'], ['Ascolto mai la radio.', 'Non ascolto mai la radio.', '«Mai» exige «non» antes do verbo.'], ['Non parlo il tedesco.', 'Non parlo tedesco.', 'O mais natural é sem artigo depois de «parlare».'], ['Parlo poco di italiano.', 'Parlo un po\' di italiano.', 'Para «um pouco de», use «un po\' di».']],
      }),
      dialogo(8, 'Parliamo piano / Falemos devagar', 'Marco e Ana conversam e escolhem o idioma.', [
        ['Marco', 'Ciao, Ana! Parli italiano?', 'Oi, Ana! Você fala italiano?'], ['Ana', 'Sì, ma parlo solo un po\'. E tu parli portoghese?', 'Sim, mas falo só um pouco. E você fala português?'], ['Marco', 'No, non parlo portoghese, ma studio spagnolo.', 'Não, não falo português, mas estudo espanhol.'], ['Ana', 'Allora parliamo italiano, ma piano!', 'Então falemos italiano, mas devagar!'], ['Marco', 'Perfetto! Io parlo sempre piano con gli amici.', 'Perfeito! Eu falo sempre devagar com os amigos.'], ['Ana', 'Grazie, sei molto gentile.', 'Obrigada, você é muito gentil.'],
      ]),
    ]),
    sessao('S3', 'Fazer perguntas', [
      revisao(4, 'Diga seis frases sobre o que você faz, três afirmativas e três negativas, com «non», «sempre», «mai» ou «spesso».'),
      palavras(5, [
        ['che cosa', 'ke kóza', 'o quê', ''], ['quando', 'kuándo', 'quando', ''], ['perché', 'perkê', 'por que, porque', ''], ['quanto', 'kuánto', 'quanto', ''], ['piano', 'piáno', 'devagar', ''],
      ]),
      gramatica(8, 'Perguntas com verbos em -are', 'PASSO 1: uma pergunta de sim ou não mantém a ordem da frase afirmativa; só a entonação sobe no fim: «Parli italiano?». PASSO 2: as palavras interrogativas vão no início: «Che cosa mangi?», «Dove abiti?», «Quando lavori?», «Come studi?», «Chi parla?», «Perché studi italiano?». PASSO 3: «che cosa» pode ser abreviado para «cosa» ou «che». PASSO 4: o sujeito pode ficar depois do verbo: «Dove abita Marco?», «Quando lavora Giulia?». PASSO 5: com preposição, ela vem antes da palavra interrogativa: «Di dove sei?», «Con chi parli?». PASSO 6: «perché» é ao mesmo tempo «por que» e «porque»: «Perché studi italiano? — Perché lavoro in Italia.» O acento é agudo («perché»). PASSO 7: o ponto de interrogação aparece só no fim.', {
        tag: 'Perguntas',
        comparacao: 'em português escrevemos «por que» (pergunta) e «porque» (resposta), de formas diferentes. O italiano usa só «perché» para os dois. E em português o «que» pode ser omitido de «o que»; em italiano, «che cosa» pode ser curto, «cosa».',
        tabela: [
          { interrogativo: 'che cosa', significado: 'o quê', exemplo: 'Che cosa mangi?' }, { interrogativo: 'dove', significado: 'onde', exemplo: 'Dove lavori?' }, { interrogativo: 'quando', significado: 'quando', exemplo: 'Quando studi?' },
          { interrogativo: 'come', significado: 'como', exemplo: 'Come parla Marco?' }, { interrogativo: 'perché', significado: 'por que, porque', exemplo: 'Perché studi italiano?' }, { interrogativo: 'con chi', significado: 'com quem', exemplo: 'Con chi parli?' },
        ],
        erros: [['Perchè studi italiano?', 'Perché studi italiano?', 'O acento de «perché» é agudo.'], ['¿Parli italiano?', 'Parli italiano?', 'O italiano usa só o ponto de interrogação final.'], ['Come abiti?', 'Dove abiti?', '«Come» pergunta o modo; para o lugar, «dove».'], ['Chi cosa mangi?', 'Che cosa mangi?', 'A forma é «che cosa».']],
      }),
      texto(8, 'Ana a Roma', 'Ana è brasiliana e abita a Roma. Lavora in un ufficio e studia italiano la sera. Parla portoghese, inglese e un po\' di italiano. Non parla tedesco. Ascolta la radio ogni giorno e canta spesso in italiano. Ama Roma, ma parla ancora piano!', 'Ana é brasileira e mora em Roma. Trabalha num escritório e estuda italiano à noite. Fala português, inglês e um pouco de italiano. Não fala alemão. Escuta rádio todo dia e canta com frequência em italiano. Ela adora Roma, mas ainda fala devagar!', [['Dove abita Ana?', 'Abita a Roma.'], ['Quando studia italiano?', 'La sera.'], ['Parla tedesco?', 'No, non parla tedesco.'], ['Che cosa ascolta ogni giorno?', 'Ascolta la radio.']]),
      producao(5, 'Faça em voz alta cinco perguntas a um amigo imaginário («Dove abiti? Dove lavori? Quando studi? Che cosa mangi? Perché studi italiano?») e responda a cada uma.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 4', [
      revisao(5, 'Diga em voz alta o que você faz todos os dias e o que nunca faz, com pelo menos cinco verbos em -are.'),
      exercicios(20, [
        ouvir('Parliamo italiano', ['Parliamo italiano', 'Parlate italiano', 'Parlano italiano'], 'Parliamo italiano', 'Ouça a terminação «-iamo» de «noi».'), ouvir('Non mangio mai la pasta', ['Non mangio mai la pasta', 'Mangio sempre la pasta', 'Non mangio la pasta'], 'Non mangio mai la pasta', 'Ouça «non» e «mai».'), ouvir('Dove abiti', ['Dove abiti', 'Dove abita', 'Dove abitate'], 'Dove abiti', 'Ouça a terminação «-i» de «tu».'),
        ditado('Non parlo tedesco', 'Escreva: Non parlo tedesco.'), ditado('Studiamo la sera', 'Escreva: Studiamo la sera.'), ditado('Perché studi italiano', 'Escreva: Perché studi italiano.'),
        mc('Qual é a forma de «voi» de «lavorare»?', ['lavorate', 'lavoriamo', 'lavorano'], 'lavorate', 'A terminação de «voi» é «-ate».'), mc('Como se diz «nunca como carne»?', ['Non mangio mai la carne.', 'Mangio mai la carne.', 'Non mai mangio la carne.'], 'Non mangio mai la carne.', '«Non» antes do verbo e «mai» depois.'), mc('Qual é a forma de «tu» de «cercare»?', ['cerchi', 'cerci', 'cerchii'], 'cerchi', 'O «h» mantém o «c» duro antes de «i».'), mc('Qual pergunta pede o lugar?', ['Dove lavori?', 'Quando lavori?', 'Come lavori?'], 'Dove lavori?', '«Dove» pergunta onde.'),
        lacuna('Noi ___ a Roma. (moramos)', ['abitiamo', 'abitate', 'abitano'], 'abitiamo', '«noi abitiamo».'), lacuna('Giulia ___ italiano. (fala)', ['parla', 'parli', 'parlo'], 'parla', '«lei parla».'), lacuna('Io ___ parlo tedesco. (não)', ['non', 'no', 'mai'], 'non', 'A negação é «non».'), lacuna('Loro ___ la radio. (escutam)', ['ascoltano', 'ascolta', 'ascoltate'], 'ascoltano', '«loro ascoltano».'),
        ordem('Ordene: «Non parlo mai tedesco.»', ['Non', 'parlo', 'mai', 'tedesco'], 'Non parlo mai tedesco.', 'Dupla negativa.'), ordem('Ordene: «Dove abita Marco?»', ['Dove', 'abita', 'Marco'], 'Dove abita Marco?', 'Palavra interrogativa no início.'),
        livre('Escreva em italiano: Eu moro em Roma e trabalho em um escritório. Não falo alemão.', 'Abito a Roma e lavoro in un ufficio. Non parlo tedesco.'),
      ]),
      producao(5, 'Conte em voz alta um dia comum de um amigo imaginário: onde mora, onde trabalha, o que estuda, o que come e o que não faz nunca.'),
    ]),
  ],
});
