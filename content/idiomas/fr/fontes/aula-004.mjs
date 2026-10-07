import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 4, titulo: 'Presente dos verbos em -er, negação e perguntas', nivel: 'a1',
  objetivo: 'Conjugar os verbos em -er no presente, negar com «ne… pas», usar os advérbios «bien», «beaucoup» e «très», e perguntar com «où», «qui», «quand», «comment» e «pourquoi».',
  nota: 'Você fala do que faz e faz perguntas com palavras interrogativas. Próxima aula: substantivos, artigos e profissões.',
  sessoes: [
    sessao('S1', 'Os verbos em -er', [
      revisao(5, 'Apresente-se: nome, país, idade e onde você mora, em voz alta.'),
      palavras(8, [
        ['parler', 'parlé', 'falar', ''], ['habiter', 'abité', 'morar', ''], ['travailler', 'travaié', 'trabalhar', ''], ['étudier', 'étüdié', 'estudar', ''], ['aimer', 'émé', 'gostar, amar', ''], ['regarder', 'regardé', 'olhar, assistir', ''], ['écouter', 'ékuté', 'ouvir, escutar', ''], ['danser', 'dãsé', 'dançar', ''],
      ]),
      gramatica(12, 'Verbos em -er no presente', 'PASSO 1: quase todos os verbos que terminam em «-er» seguem o mesmo molde. Tire «-er» do infinitivo e acrescente: «-e, -es, -e, -ons, -ez, -ent». Exemplo: «parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent». PASSO 2: na fala, «je parle», «tu parles», «il parle» e «ils parlent» soam igual («parl»). Só «nous parlons» (parlõ) e «vous parlez» (parlé) soam diferente. Por isso a escrita é importante. PASSO 3: diante de vogal ou «h» mudo, «je» vira «j\'»: «j\'habite», «j\'aime», «j\'étudie», «j\'écoute». PASSO 4: «on» usa a forma de «il»: «On parle français». PASSO 5: «parler» + língua não leva artigo: «Je parle français.» PASSO 6: depois de «aimer», use o verbo no infinitivo: «J\'aime danser.» Os artigos aparecem na aula 5. PASSO 7: este molde cobre cerca de 90% dos verbos franceses. Alguns têm pequenas mudanças de grafia («nous mangeons»), que veremos depois.', {
        tag: 'Verbos',
        comparacao: 'em português também há um molde (falo, falas, fala, falamos, falais, falam), mas o francês escreve seis formas e pronuncia quatro delas quase iguais. As terminações escritas são «-e, -es, -e, -ons, -ez, -ent».',
        tabelas: [
          { titulo: 'parler (falar)', linhas: [
            { pronome: 'je', forma: 'parle', exemplo: 'Je parle français.' }, { pronome: 'tu', forma: 'parles', exemplo: 'Tu parles anglais.' }, { pronome: 'il / elle / on', forma: 'parle', exemplo: 'Elle parle portugais.' },
            { pronome: 'nous', forma: 'parlons', exemplo: 'Nous parlons français.' }, { pronome: 'vous', forma: 'parlez', exemplo: 'Vous parlez bien.' }, { pronome: 'ils / elles', forma: 'parlent', exemplo: 'Ils parlent espagnol.' },
          ] },
          { titulo: 'habiter (morar): j\'habite', linhas: [
            { pronome: 'j\'', forma: 'habite', exemplo: 'J\'habite à Paris.' }, { pronome: 'tu', forma: 'habites', exemplo: 'Tu habites en France.' }, { pronome: 'il / elle / on', forma: 'habite', exemplo: 'On habite au Brésil.' },
            { pronome: 'nous', forma: 'habitons', exemplo: 'Nous habitons ici.' }, { pronome: 'vous', forma: 'habitez', exemplo: 'Vous habitez où ?' }, { pronome: 'ils / elles', forma: 'habitent', exemplo: 'Elles habitent à Lyon.' },
          ] },
        ],
        erros: [['Je parles français.', 'Je parle français.', '«je» pede «-e».'], ['Nous parlez français.', 'Nous parlons français.', '«nous» pede «-ons».'], ['Il parlent.', 'Il parle. / Ils parlent.', '«-ent» só com «ils» e «elles».'], ['Je aime le café.', 'J\'aime le café.', 'Elisão: «je» vira «j\'» diante de vogal.']],
      }),
      producao(5, 'Diga seis frases com verbos da aula, em pessoas diferentes: «Je parle…», «Tu habites…», «Elle travaille…», «Nous aimons…»'),
    ]),
    sessao('S2', 'Negação e advérbios', [
      revisao(4, 'Conjugue «parler» e «habiter» de memória, com os seis pronomes.'),
      palavras(6, [
        ['bien', 'biẽ', 'bem', ''], ['mal', 'mal', 'mal', ''], ['beaucoup', 'boku', 'muito (depois do verbo)', ''], ['un peu', 'ẽ pö', 'um pouco', ''], ['très', 'tré', 'muito (antes de adjetivo)', ''], ['aussi', 'osi', 'também', ''],
      ]),
      gramatica(12, 'Negar e dar intensidade', 'PASSO 1: a negação envolve o verbo: «ne» antes e «pas» depois. «Je parle anglais» → «Je ne parle pas anglais.» PASSO 2: diante de vogal ou «h» mudo, «ne» vira «n\'»: «Je n\'habite pas à Paris.» «Il n\'aime pas danser.» PASSO 3: na fala informal, o «ne» some: «Je parle pas anglais.» Por escrito, use as duas partes. PASSO 4: o advérbio vem depois do verbo conjugado: «Je parle bien français.» «Elle travaille beaucoup.» PASSO 5: «très» vem antes de adjetivo ou advérbio: «très fatigué», «très bien». Com verbo, use «beaucoup»: «J\'aime beaucoup le café», nunca «J\'aime très». PASSO 6: «un peu» = «um pouco»: «Je parle un peu français.» PASSO 7: para dizer «eu também» use «Moi aussi»; para «eu também não» use «Moi non plus». «J\'aime danser. — Moi aussi.» «Je n\'aime pas danser. — Moi non plus.»', {
        tag: 'Negação e interrogação',
        comparacao: 'em português, o «não» basta antes do verbo («não falo inglês»). Em francês, a negação tem duas partes, e a segunda («pas») é a que mais se ouve. Para «eu também não», o português diz «eu também não»; o francês usa «moi non plus», não «moi aussi».',
        tabela: [
          { regra: 'ne… pas', afirmativa: 'Je parle anglais.', negativa: 'Je ne parle pas anglais.' }, { regra: 'n\' + vogal', afirmativa: 'J\'habite à Paris.', negativa: 'Je n\'habite pas à Paris.' }, { regra: 'advérbio depois do verbo', afirmativa: 'Je parle bien.', negativa: 'Je ne parle pas bien.' }, { regra: 'très + adjetivo', afirmativa: 'Elle est très contente.', negativa: 'Elle n\'est pas très contente.' },
        ],
        erros: [['Je ne parle anglais.', 'Je ne parle pas anglais.', 'Faltou o «pas».'], ['Je parle pas bien français. (por escrito)', 'Je ne parle pas bien français.', 'Por escrito, use «ne… pas».'], ['J\'aime très le café.', 'J\'aime beaucoup le café.', '«Très» só com adjetivo ou advérbio.'], ['Je n\'aime pas danser. — Moi aussi.', '— Moi non plus.', 'Resposta negativa usa «moi non plus».']],
      }),
      producao(8, 'Diga o que você faz e o que não faz: «Je parle…», «Je ne parle pas…», «J\'aime beaucoup…», «Je n\'aime pas…». Use pelo menos oito frases.'),
    ]),
    sessao('S3', 'Perguntas com palavras interrogativas', [
      revisao(4, 'Passe para a negativa: «Je travaille à Paris. J\'habite en France. J\'aime danser.»'),
      palavras(5, [
        ['où', 'u', 'onde', ''], ['qui', 'ki', 'quem', ''], ['quand', 'kã', 'quando', ''], ['comment', 'komã', 'como', ''], ['pourquoi', 'purkuá', 'por que', ''],
      ]),
      gramatica(8, 'Onde, quem, quando, como, por que', 'PASSO 1: a palavra interrogativa pode ficar no começo da frase, com três formas. Informal: «Où tu habites ?» Neutra: «Où est-ce que tu habites ?» Formal, com inversão: «Où habitez-vous ?» PASSO 2: na fala informal, a palavra também pode ficar no fim: «Tu habites où ?» PASSO 3: na inversão, o verbo vem antes do pronome e leva hífen: «Où habites-tu ?», «Que fais-tu ?». PASSO 4: «pourquoi» (por que) tem a resposta «parce que» (porque): «Pourquoi tu étudies le français ? — Parce que j\'aime ça.» PASSO 5: «qui» (quem) pode ser sujeito: «Qui parle ?» PASSO 6: «comment» também pergunta o jeito: «Comment tu vas ?»', {
        tag: 'Negação e interrogação',
        comparacao: 'em português a palavra interrogativa quase sempre vai no começo: «onde você mora?». O francês também faz isso, e na fala informal pode deixá-la no fim: «tu habites où ?». A inversão com hífen é formal e escrita.',
        tabela: [
          { forma: 'informal (palavra no fim)', exemplo: 'Tu habites où ?' }, { forma: 'informal (palavra no começo)', exemplo: 'Où tu habites ?' }, { forma: 'neutra (est-ce que)', exemplo: 'Où est-ce que tu habites ?' }, { forma: 'formal (inversão)', exemplo: 'Où habitez-vous ?' }, { forma: 'resposta a «pourquoi»', exemplo: 'Parce que j\'aime ça.' },
        ],
        erros: [['Où habites tu ?', 'Où habites-tu ?', 'Na inversão há hífen entre o verbo e o pronome.'], ['Où est-ce que tu habites-tu ?', 'Où est-ce que tu habites ?', 'Escolha uma forma de pergunta, não duas.'], ['Pourquoi tu étudies ? — Pour que j\'aime.', 'Parce que j\'aime ça.', 'A resposta a «pourquoi» começa com «parce que».'], ['Comment est-ce que tu t\'appelles-tu ?', 'Comment tu t\'appelles ?', 'Não repita o pronome.']],
      }),
      dialogo(8, 'Nouveaux voisins / Novos vizinhos', 'Hugo conhece a nova vizinha, Chloé.', [
        ['Hugo', 'Bonjour ! Je m\'appelle Hugo. Comment tu t\'appelles ?', 'Bom dia! Me chamo Hugo. Como você se chama?'], ['Chloé', 'Salut, Hugo. Je m\'appelle Chloé.', 'Oi, Hugo. Me chamo Chloé.'], ['Hugo', 'Où est-ce que tu habites ?', 'Onde você mora?'], ['Chloé', 'J\'habite ici, rue Victor Hugo. Et toi ?', 'Moro aqui, na rua Victor Hugo. E você?'], ['Hugo', 'Moi aussi ! Tu travailles à Lyon ?', 'Eu também! Você trabalha em Lyon?'], ['Chloé', 'Oui, mais je n\'aime pas beaucoup la ville. Je préfère habiter ici.', 'Sim, mas não gosto muito da cidade. Prefiro morar aqui.'],
      ]),
      producao(5, 'Faça cinco perguntas a um colega imaginário usando «où», «qui», «quand», «comment» e «pourquoi». Responda cada uma.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 4', [
      revisao(5, 'Conjugue «parler» e diga cinco frases, duas delas negativas.'),
      exercicios(20, [
        ouvir('Je parle français', ['Je parle français', 'Nous parlons français', 'Ils parlent français'], 'Je parle français', 'Ouça: «je parle» e «ils parlent» soam parecidos; aqui é «je».'), ouvir('Je n\'aime pas danser', ['Je n\'aime pas danser', 'J\'aime danser', 'Je ne danse pas'], 'Je n\'aime pas danser', 'Ouça o «n\'aime pas».'), ouvir('Où est-ce que tu habites', ['Où est-ce que tu habites', 'Où habitez-vous', 'Comment tu habites'], 'Où est-ce que tu habites', 'Ouça «est-ce que».'),
        ditado('Je parle un peu français', 'Escreva: Je parle un peu français.'), ditado('Elle n\'habite pas à Paris', 'Escreva: Elle n\'habite pas à Paris.'), ditado('Pourquoi tu étudies le français', 'Escreva: Pourquoi tu étudies le français.'),
        mc('Qual é a terminação de «nous» no presente de um verbo em -er?', ['-ons', '-ez', '-ent'], '-ons', '«nous parlons».'), mc('Qual frase está correta?', ['Je n\'habite pas ici.', 'Je ne habite pas ici.', 'Je n\'habite ici pas.'], 'Je n\'habite pas ici.', 'Elisão: «ne» vira «n\'» diante de vogal ou «h».'), mc('Como dizer «eu também não»?', ['Moi non plus.', 'Moi aussi.', 'Moi pas.'], 'Moi non plus.', '«Moi non plus» responde a uma negativa.'), mc('Qual advérbio vem antes de um adjetivo?', ['très', 'beaucoup', 'peu'], 'très', '«Très» antes de adjetivo.'),
        lacuna('Nous ___ français. (falamos)', ['parlons', 'parlez', 'parlent'], 'parlons', '«nous parlons».'), lacuna('Elle ne ___ pas à Paris. (trabalha)', ['travaille', 'travailles', 'travaillent'], 'travaille', '«elle travaille».'), lacuna('J\'aime ___ le café. (muito)', ['beaucoup', 'très', 'bien'], 'beaucoup', '«beaucoup» com verbo.'), lacuna('___ habites-tu ? (onde)', ['Où', 'Qui', 'Quand'], 'Où', '«Où» pergunta o lugar.'),
        ordem('Ordene: «Je ne parle pas anglais.»', ['Je', 'ne', 'parle', 'pas', 'anglais'], 'Je ne parle pas anglais.', 'ne… pas envolve o verbo.'), ordem('Ordene: «Où est-ce que tu habites ?»', ['Où', 'est-ce', 'que', 'tu', 'habites'], 'Où est-ce que tu habites', 'palavra interrogativa + est-ce que + frase.'),
        livre('Escreva em francês: Eu moro em Paris. Eu não trabalho em Lyon. Por que você estuda francês?', 'J\'habite à Paris. Je ne travaille pas à Lyon. Pourquoi tu étudies le français ?'),
      ]),
      producao(5, 'Conte, em voz alta, em cinco frases, onde você mora, o que você faz e o que você não faz.'),
    ]),
  ],
});
