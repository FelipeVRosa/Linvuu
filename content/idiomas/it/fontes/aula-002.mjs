import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 2, titulo: 'Essere, pronomes e adjetivos', nivel: 'a1',
  objetivo: 'Usar o presente do verbo «essere» (ser e estar) com todos os pronomes, escolher entre «tu», «Lei» e «voi», e fazer o adjetivo concordar em gênero e número.',
  nota: 'Você diz quem é, como está e como são as pessoas, e faz as perguntas básicas com «essere». Próxima aula: apresentações, países, números de 0 a 20 e a idade com «avere».',
  sessoes: [
    sessao('S1', 'Essere: ser e estar', [
      revisao(5, 'Retome a aula 1: diga em voz alta «Buongiorno! Come sta?», «Ciao! Come stai?» e «Sto bene, grazie. E Lei?». Depois soletre «Italia».'),
      palavras(8, [
        ['alto, alta', 'álto, álta', 'alto, alta', ''], ['basso, bassa', 'básso, bássa', 'baixo, baixa', ''], ['simpatico, simpatica', 'simpátiko, simpátika', 'simpático, simpática', ''], ['stanco, stanca', 'stánko, stánka', 'cansado, cansada', ''],
        ['contento, contenta', 'konténto, konténta', 'contente', ''], ['felice', 'felítche', 'feliz', ''], ['gentile', 'djentíle', 'gentil, amável', ''], ['giovane', 'djóvane', 'jovem', ''],
      ]),
      gramatica(12, 'Essere: o presente e os pronomes', 'PASSO 1: o italiano tem um só verbo para «ser» e «estar»: «essere». «Sono italiano» (sou italiano) e «Sono stanco» (estou cansado) usam o mesmo verbo. PASSO 2: o presente é irregular e vale decorar: «io sono», «tu sei», «lui / lei è», «noi siamo», «voi siete», «loro sono». PASSO 3: os pronomes sujeito são «io» (eu), «tu» (tu, você informal), «lui» (ele), «lei» (ela), «noi» (nós), «voi» (vocês, ou tu no plural) e «loro» (eles, elas). PASSO 4: o italiano não tem «você». Com uma pessoa próxima se usa «tu»; com desconhecidos, «Lei», que leva o verbo na forma de «lei»: «Lei è stanco?» (o senhor está cansado?). Escreve-se «Lei» com maiúscula na carta e em textos formais. PASSO 5: como a forma do verbo já mostra a pessoa, o pronome é omitido: «Sono stanco», «Siete contenti?». Ele só aparece para dar ênfase ou contrastar: «Io sono Marco, lui è Luca». PASSO 6: «sono» serve para «io» e para «loro»; o contexto resolve. PASSO 7: o «è» (verbo) leva acento grave. Sem acento, «e» significa «e»: «Marco è alto e simpatico».', {
        tag: 'Verbo essere',
        comparacao: 'em português usamos dois verbos, «ser» e «estar», e escolhemos entre eles. O italiano só tem «essere»: o contexto decide. E, ao contrário do português, não existe «você»: o tratamento é «tu» ou «Lei».',
        tabela: [
          { pronome: 'io', forma: 'sono', exemplo: 'Io sono stanco.' }, { pronome: 'tu', forma: 'sei', exemplo: 'Tu sei simpatico.' }, { pronome: 'lui / lei / Lei', forma: 'è', exemplo: 'Lei è molto gentile.' },
          { pronome: 'noi', forma: 'siamo', exemplo: 'Noi siamo contenti.' }, { pronome: 'voi', forma: 'siete', exemplo: 'Voi siete giovani.' }, { pronome: 'loro', forma: 'sono', exemplo: 'Loro sono amici.' },
        ],
        erros: [['Io è stanco.', 'Io sono stanco.', 'Com «io», o verbo é «sono».'], ['Lui sono simpatico.', 'Lui è simpatico.', 'Com «lui» e «lei», o verbo é «è».'], ['Voi siamo amici.', 'Voi siete amici.', '«Siamo» é de «noi»; «voi» pede «siete».'], ['Lei e stanca.', 'Lei è stanca.', 'O verbo leva acento; «e» sem acento significa «e».']],
      }),
      producao(5, 'Diga em voz alta quatro frases sobre você, com «sono»: duas com adjetivos físicos ou de ânimo (alto, basso, stanco, contento) e duas com «io sono» e o seu nome. Depois pergunte a alguém, com «Lei»: «Lei è stanco?»'),
    ]),
    sessao('S2', 'Adjetivos: gênero e número', [
      revisao(4, 'Conjugue «essere» em voz alta, de «io sono» a «loro sono». Qual pronome você usa com um desconhecido?'),
      palavras(6, [
        ['nuovo, nuova', 'nuóvo, nuóva', 'novo, nova', ''], ['vecchio, vecchia', 'vékkio, vékkia', 'velho, velha', ''], ['grande', 'grânde', 'grande', ''], ['piccolo, piccola', 'píkkolo, píkkola', 'pequeno, pequena', ''], ['bravo, brava', 'brávo, bráva', 'bom (no que faz), hábil', ''], ['molto', 'mólto', 'muito (antes de adjetivo)', ''],
      ]),
      gramatica(12, 'O adjetivo concorda com o substantivo', 'PASSO 1: o adjetivo italiano muda de forma conforme o gênero (masculino ou feminino) e o número (singular ou plural) da pessoa ou coisa. PASSO 2: adjetivos em «-o» têm quatro formas: «alto, alta, alti, alte». PASSO 3: adjetivos em «-e» têm duas: «gentile» (singular, masculino ou feminino) e «gentili» (plural). PASSO 4: o plural de masculino em «-o» é «-i»: «alto» vira «alti». O de feminino em «-a» é «-e»: «alta» vira «alte». PASSO 5: palavras em «-co» e «-ca» mantêm o som duro e ganham um «h»: «stanco» vira «stanchi», «stanca» vira «stanche». Em «simpatico» o plural é «simpatici»; no caso das palavras em «-co», ouça o áudio, pois varia. PASSO 6: depois de «essere», o adjetivo concorda com o sujeito: «Marco è stanco», «Giulia è stanca», «Marco e Giulia sono stanchi». Para um grupo misto, vale o masculino plural. PASSO 7: «molto» antes de um adjetivo é advérbio e não muda: «molto stanca», «molto stanchi». PASSO 8: o adjetivo normalmente vem depois do substantivo: «una casa grande». Alguns adjetivos curtos e muito comuns, como «bello» e «grande», podem vir antes; por ora, ponha o adjetivo depois.', {
        tag: 'Adjetivos',
        comparacao: 'a concordância é a mesma do português («alto, alta, altos, altas»), mas o plural muda de letra: o português põe «s», o italiano troca a vogal final («-o» vira «-i», «-a» vira «-e»). E o italiano não tem «s» de plural.',
        tabela: [
          { tipo: '-o (masculino)', singular: 'alto', plural: 'alti' }, { tipo: '-a (feminino)', singular: 'alta', plural: 'alte' }, { tipo: '-e (masc. e fem.)', singular: 'gentile', plural: 'gentili' },
          { tipo: '-co (masculino)', singular: 'stanco', plural: 'stanchi' }, { tipo: '-ca (feminino)', singular: 'stanca', plural: 'stanche' },
        ],
        erros: [['Giulia è stanco.', 'Giulia è stanca.', 'O adjetivo concorda com o sujeito feminino.'], ['Loro sono alto.', 'Loro sono alti.', 'Sujeito plural exige adjetivo no plural.'], ['Marco e Giulia sono stanche.', 'Marco e Giulia sono stanchi.', 'Grupo misto usa o masculino plural.'], ['Noi siamo gentilis.', 'Noi siamo gentili.', 'O italiano não forma plural com «s».']],
      }),
      dialogo(8, 'Dopo la festa / Depois da festa', 'Giulia e Marco conversam no fim de uma festa.', [
        ['Marco', 'Ciao, Giulia! Come stai?', 'Oi, Giulia! Como você está?'], ['Giulia', 'Ciao, Marco! Sono stanca, ma contenta. E tu?', 'Oi, Marco! Estou cansada, mas contente. E você?'], ['Marco', 'Anch\'io sono stanco. La festa è bella, ma è molto lunga.', 'Eu também estou cansado. A festa é bonita, mas é muito longa.'], ['Giulia', 'Sì! Gli amici di Luca sono simpatici.', 'Sim! Os amigos do Luca são simpáticos.'], ['Marco', 'È vero. Sei pronta?', 'É verdade. Você está pronta?'], ['Giulia', 'Sì, sono pronta. Arrivederci, Luca!', 'Sim, estou pronta. Tchau, Luca!'],
      ]),
    ]),
    sessao('S3', 'Perguntar com essere', [
      revisao(4, 'Descreva em voz alta duas pessoas, uma com um adjetivo em «-o» e outra com um em «-e». Use o feminino e o plural.'),
      palavras(5, [
        ['chi', 'ki', 'quem', ''], ['dove', 'dôve', 'onde', ''], ['come', 'kôme', 'como', ''], ['qui', 'kuí', 'aqui', ''], ['ma', 'ma', 'mas', ''],
      ]),
      gramatica(8, 'Perguntas: chi, dove e come', 'PASSO 1: em italiano, uma pergunta de sim ou não tem a mesma ordem da afirmação; só muda a entonação, que sobe no fim: «Sei stanco?». Não há inversão nem «est-ce que». PASSO 2: «chi è?» pergunta quem: «Chi è lui? — È Marco.» PASSO 3: «dove» pergunta onde: «Dove sei? — Sono qui.» Diante de «è», «dove» e «come» se contraem num só som, e o apóstrofo marca a contração: «Dov\'è Giulia?» (dove + è), «Com\'è Marco?» (come + è). PASSO 4: «com\'è?» pergunta como alguém ou algo é: «Com\'è la casa? — È grande.» Já «come stai?» pergunta como a pessoa está. PASSO 5: respostas curtas começam por «sì» ou «no»: «Sei stanco? — Sì, sono stanco.» Para a forma negativa completa, veja a aula 4. PASSO 6: «qui» e «lì / là» (aqui, ali): «Giulia è qui», «Marco è là».', {
        tag: 'Perguntas',
        comparacao: 'em português a pergunta também mantém a ordem da frase e muda só a melodia («Você está cansado?»). Em italiano é igual. A diferença está na contração: «dov\'è», «com\'è».',
        tabela: [
          { interrogativo: 'chi', significado: 'quem', exemplo: 'Chi è Giulia?' }, { interrogativo: 'dove', significado: 'onde', exemplo: 'Dov\'è Marco?' }, { interrogativo: 'come', significado: 'como (modo, estado)', exemplo: 'Com\'è la casa?' }, { interrogativo: 'sì / no', significado: 'sim / não', exemplo: 'Sei stanco? Sì.' },
        ],
        erros: [['Dove è Marco?', 'Dov\'è Marco?', '«Dove» + «è» se contraem na fala e na escrita.'], ['Sei tu stanco?', 'Sei stanco?', 'Não se inverte; muda só a entonação.'], ['Chi sei lui?', 'Chi è lui?', 'Com «lui», o verbo é «è».'], ['Come è la casa?', 'Com\'è la casa?', '«Come» + «è» se contraem.']],
      }),
      texto(8, 'Marco e Giulia', 'Lui è Marco. È alto e simpatico. Lei è Giulia. È bassa, ma è molto gentile. Marco e Giulia sono amici. Oggi sono stanchi ma contenti. Dove sono? Sono qui, a casa di Luca.', 'Ele é Marco. É alto e simpático. Ela é Giulia. É baixa, mas muito gentil. Marco e Giulia são amigos. Hoje estão cansados, mas contentes. Onde estão? Estão aqui, na casa de Luca.', [['Com\'è Marco?', 'È alto e simpatico.'], ['Com\'è Giulia?', 'È bassa, ma molto gentile.'], ['Come sono oggi Marco e Giulia?', 'Sono stanchi ma contenti.'], ['Dove sono?', 'Sono a casa di Luca.']]),
      producao(5, 'Faça em voz alta três perguntas a um amigo imaginário («Come stai?», «Sei stanco?», «Dove sei?») e responda a cada uma.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 2', [
      revisao(5, 'Diga em voz alta uma frase com cada pronome: io, tu, lui, lei, noi, voi, loro, usando «essere» e um adjetivo.'),
      exercicios(20, [
        ouvir('Sono stanca', ['Sono stanca', 'Sono stanco', 'Sei stanca'], 'Sono stanca', 'Ouça o final: «-a» é feminino.'), ouvir('Siete contenti', ['Siete contenti', 'Siamo contenti', 'Sono contenti'], 'Siete contenti', 'Ouça a diferença entre «siete», «siamo» e «sono».'), ouvir('Dov\'è Giulia', ['Dov\'è Giulia', 'Chi è Giulia', 'Com\'è Giulia'], 'Dov\'è Giulia', 'Ouça «dov\'è», que une «dove» e «è».'),
        ditado('Noi siamo amici', 'Escreva: Noi siamo amici.'), ditado('Lei è molto gentile', 'Escreva: Lei è molto gentile.'), ditado('Loro sono alti', 'Escreva: Loro sono alti.'),
        mc('Qual é o verbo certo? «Voi ___ giovani.»', ['siete', 'siamo', 'sono'], 'siete', '«Voi siete».'), mc('Qual é o plural de «gentile»?', ['gentili', 'gentile', 'gentiles'], 'gentili', 'Adjetivos em «-e» fazem plural em «-i».'), mc('Qual é o plural de «stanca»?', ['stanche', 'stance', 'stanchi'], 'stanche', 'Feminino em «-ca» vira «-che».'), mc('Com um desconhecido, como perguntar «o senhor está cansado?»', ['Lei è stanco?', 'Tu sei stanco?', 'Voi siete stanco?'], 'Lei è stanco?', 'Tratamento formal: «Lei» com a forma de «lei».'),
        lacuna('Io ___ contento. (estou)', ['sono', 'sei', 'è'], 'sono', '«Io sono».'), lacuna('Giulia è molto ___ . (cansada)', ['stanca', 'stanco', 'stanchi'], 'stanca', 'Sujeito feminino, adjetivo feminino.'), lacuna('Marco e Luca sono ___ . (altos)', ['alti', 'alto', 'alte'], 'alti', 'Plural masculino.'), lacuna('___ è Giulia? (onde)', ['Dov\'', 'Chi', 'Com\''], 'Dov\'', '«Dov\'è Giulia?» pergunta onde.'),
        ordem('Ordene: «Marco e Giulia sono molto contenti.»', ['Marco', 'e', 'Giulia', 'sono', 'molto', 'contenti'], 'Marco e Giulia sono molto contenti.', 'Sujeito composto, verbo no plural, adjetivo no plural.'), ordem('Ordene: «Dov\'è la casa?»', ['Dov\'è', 'la', 'casa'], 'Dov\'è la casa?', 'Pergunta com «dov\'è».'),
        livre('Escreva em italiano: Eu estou cansado, mas contente. Ela é muito simpática.', 'Sono stanco, ma contento. Lei è molto simpatica.'),
        lacuna('Tu ___ simpatico. (és)', ['sono', 'sei', 'è'], 'sei', '«Tu sei»: a segunda pessoa do singular de «essere».'),
        lacuna('Marco e Giulia sono ___. (felizes)', ['felice', 'felicie', 'felici'], 'felici', '«Felice» termina em «-e» e faz plural em «-i».'),
        lacuna('Giulia è ___. (baixa)', ['bassa', 'basso', 'basse'], 'bassa', 'Sujeito feminino singular pede o adjetivo em «-a».'),
        lacuna('___ sono Marco e Luca? (onde)', ['Chi', 'Come', 'Dove'], 'Dove', '«Dove» pergunta o lugar; o verbo no plural «sono» concorda com dois sujeitos.'),
        lacuna('Lui ___ molto gentile. (é)', ['è', 'sono', 'sei'], 'è', '«Lui è»: terceira pessoa do singular.'),
        mc('Qual verbo italiano traduz «ser» e «estar»?', ['avere', 'parlare', 'essere'], 'essere', 'O italiano tem um só verbo para os dois: «sono italiano» e «sono stanco».'),
        mc('Como se diz «Onde está Marco?»', ['Dove è Marco?', 'Dov\'è Marco?', 'Dove sei Marco?'], 'Dov\'è Marco?', '«Dove» e «è» se contraem em «dov\'è».'),
        mc('Qual é o plural feminino de «stanca»?', ['stanche', 'stanchi', 'stance'], 'stanche', 'Em «-ca» o plural é «-che», mantendo o som duro.'),
        mc('Como tratar um desconhecido, por educação?', ['tu', 'Lei', 'voi'], 'Lei', 'Com desconhecidos usa-se «Lei», com o verbo na forma de «lei» (è).'),
        ordem('Ordene: «Luca e Giulia sono molto gentili.»', ['Luca', 'e', 'Giulia', 'sono', 'molto', 'gentili.'], 'Luca e Giulia sono molto gentili.', '«Molto» não muda; o adjetivo vai no plural.'),
        ordem('Ordene: «Dove sono gli amici di Luca?»', ['Dove', 'sono', 'gli', 'amici', 'di', 'Luca?'], 'Dove sono gli amici di Luca?', 'A pergunta mantém a ordem; «sono» concorda com «amici».'),
        livre('Escreva em italiano: Eu estou cansado, mas contente.', 'Sono stanco, ma contento.'),
        livre('Escreva em italiano: Marco é alto e Giulia é baixa.', 'Marco è alto e Giulia è bassa.'),
      ]),
      producao(5, 'Descreva em voz alta dois amigos imaginários, um homem e uma mulher: como são e como estão hoje. Use «essere», adjetivos e «molto».'),
    ]),
  ],
});
