import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 1, titulo: 'Sons e primeiras palavras', nivel: 'zero',
  objetivo: 'Reconhecer os sons do alemão (incluindo ä, ö, ü, ß, ch, sch, ei, ie), ler palavras novas sem medo e fazer as primeiras saudações.',
  nota: 'Você lê e pronuncia o alemão com segurança. Próxima aula: apresentar-se.',
  sessoes: [
    sessao('S1', 'Vogais e consoantes fáceis', [
      intro(3, 'Ouça primeiro, leia depois. Ao lado de cada letra, palavra e frase há um alto-falante: toque nele, escute e repita em voz alta. O alemão se escreve como se fala, e as regras de pronúncia são poucas e regulares. Nesta aula você ouve e lê o alemão pela primeira vez: aprende os sons, lê palavras novas sem medo e fecha com as primeiras saudações. Nas tabelas, «ç» marca o som suave do «ch» e «rr» marca o som áspero (como o «rr» carioca).'),
      alfabeto(10, [
        ['Grupo 1 — Vogais', [
          ['A', 'a', 'a de «casa»', '[aː / a]', 'Apfel', 'maçã'], ['E', 'e', 'e fechado, como em «mesa»', '[eː / ɛ]', 'Tee', 'chá'], ['I', 'i', 'i de «vida»', '[iː / ɪ]', 'Insel', 'ilha'], ['O', 'o', 'o fechado, como em «avô»', '[oː / ɔ]', 'Ofen', 'forno'],
          ['U', 'u', 'u de «lua»', '[uː / ʊ]', 'Uhr', 'relógio'], ['Ä', 'ä', 'é aberto, como em «pé»', '[ɛː / ɛ]', 'Käse', 'queijo'], ['Ö', 'ö', '«e» com os lábios arredondados, como para dizer «o»', '[øː / œ]', 'Öl', 'óleo'], ['Ü', 'ü', '«i» com os lábios arredondados, como para dizer «u»', '[yː / ʏ]', 'Tür', 'porta'],
        ]],
        ['Grupo 2 — Consoantes parecidas com o português', [
          ['B', 'b', 'b de «bola»', '[b]', 'Bad', 'banheiro'], ['D', 'd', 'd de «dado»', '[d]', 'Dame', 'senhora'], ['F', 'f', 'f de «faca»', '[f]', 'Film', 'filme'], ['K', 'k', 'k de «kilo»', '[k]', 'Kino', 'cinema'], ['L', 'l', 'l de «lua»', '[l]', 'Lampe', 'lâmpada'],
          ['M', 'm', 'm de «mapa»', '[m]', 'Mama', 'mamãe'], ['N', 'n', 'n de «nada»', '[n]', 'Name', 'nome'], ['P', 'p', 'p de «pato»', '[p]', 'Papa', 'papai'], ['T', 't', 't de «tapete», mais seco', '[t]', 'Taxi', 'táxi'], ['X', 'x', '«ks», como em «táxi»', '[ks]', 'Fax', 'fax'],
        ]],
      ]),
      palavras(4, [
        ['Papa', 'pápa', 'papai', 'dad'], ['Mama', 'máma', 'mamãe', 'mom'], ['Tee', 'té', 'chá', 'tea'], ['Taxi', 'táksi', 'táxi', 'taxi'], ['Film', 'film', 'filme', 'film'], ['Kino', 'kíno', 'cinema', 'cinema'], ['Lampe', 'lámpe', 'lâmpada', 'lamp'], ['Name', 'náme', 'nome', 'name'],
      ]),
      exercicios(9, [
        ouvir('Käse', ['Käse', 'Kino', 'Name'], 'Käse', 'Você ouve um «k» e logo depois o «ä», que soa como o «é» aberto de «pé»: «kê-ze». «Kino» teria um «i» logo depois do «k», e «Name» começa com «n».'),
        ouvir('Tür', ['Tür', 'Tee', 'Uhr'], 'Tür', 'A palavra começa com «t» e tem o «ü», o «u» com a língua de «i». «Tee» tem um «ê» simples e «Uhr» começa direto pela vogal «u».'),
        ouvir('Taxi', ['Taxi', 'Fax', 'Papa'], 'Taxi', 'O som inicial é um «t». «Fax» começa com «f» e «Papa» com «p», por isso não servem.'),
        ditado('Kino', 'O som «k» se escreve com a letra «k» em alemão, e não com «c» como em «cine». O «o» final é pronunciado: «kí-no».'),
        ditado('Lampe', 'Escreva «Lampe»: o «e» final também é pronunciado, bem curto, «lám-pe». Em alemão as letras finais não ficam mudas.'),
        mc('Qual letra alemã se pronuncia com os lábios em «u» e a língua dizendo «i»?', ['Ü', 'U', 'Ö'], 'Ü', 'O «ü» mistura os dois: lábios de «u» e língua de «i». O «ö» faz a mesma mistura com «o» e «e».'),
        mc('O «ä» de «Käse» soa como:', ['o «é» aberto de «pé»', 'o «a» de «casa»', 'o «u» de «lua»'], 'o «é» aberto de «pé»', 'A letra «ä» é um «e» aberto. Por isso «Käse» soa «kê-ze» e não «ka-ze».'),
        lacuna('K___se (queijo; lê-se «kê-ze»)', ['ä', 'a', 'ö'], 'ä', 'O som de «é» aberto é escrito com «ä». Com «a» a palavra soaria «ka-ze», e com «ö» soaria diferente.'),
        lacuna('T___r (porta; lê-se «tüür»)', ['ü', 'u', 'i'], 'ü', 'Para ter o som de «u» com a língua de «i», a letra certa é «ü». Com «u» simples a palavra soaria «tur».'),
      ]),
      producao(4, 'Diga em voz alta: «Papa, Mama, Tee, Taxi, Film, Kino, Lampe, Name». Repita cada palavra duas vezes: primeiro devagar, depois no ritmo normal. Treine o «ü» e o «ö»: lábios em «u» (ou «o») e a língua dizendo «i» (ou «e»). Se puder, grave-se e compare com o áudio.'),
    ]),
    sessao('S2', 'Consoantes que mudam de som', [
      revisao(3, 'Ouça de novo as palavras da sessão anterior e repita cada uma em voz alta. Depois leia as 18 letras da sessão anterior sem olhar a tradução.'),
      alfabeto(9, [
        ['Grupo 3 — Consoantes que mudam de som', [
          ['H', 'h', 'h aspirado, como no inglês «house» (em português o h é mudo)', '[h]', 'Haus', 'casa'], ['J', 'j', 'como o «i» de «iogurte»', '[j]', 'Jahr', 'ano'], ['R', 'r', 'r gutural, no fundo da garganta', '[ʁ]', 'rot', 'vermelho'],
          ['S', 's', '«z» antes de vogal; «s» no fim da palavra', '[z / s]', 'Sonne', 'sol'], ['V', 'v', '«f» na maioria das palavras alemãs', '[f]', 'Vater', 'pai'], ['W', 'w', '«v» de «vaca»', '[v]', 'Wasser', 'água'],
          ['Z', 'z', '«ts», como em «pizza»', '[ts]', 'Zeit', 'tempo'], ['ß', 'ß', '«ss» (s longo); chama-se «Eszett»', '[s]', 'Straße', 'rua'], ['G', 'g', 'g de «gato», sempre duro', '[g]', 'gut', 'bom'],
        ]],
        ['Grupo 4 — Letras raras', [
          ['C', 'c', '«k» em palavras de fora, como «Computer»; sozinho é raro (aparece em «ch», «sch» e «ck»)', '[k / ts]', 'Computer', 'computador'], ['Q', 'q', 'vem sempre com «u», e o par «qu» soa «kv»', '[k]', 'Quiz', 'quiz'], ['Y', 'y', 'soa como o «ü», em palavras de origem grega', '[y]', 'Typ', 'tipo'],
        ]],
      ]),
      palavras(5, [
        ['Haus', 'haus', 'casa', 'house'], ['Jahr', 'iár', 'ano', 'year'], ['rot', 'rot', 'vermelho', 'red'], ['Sonne', 'zône', 'sol', 'sun'], ['Vater', 'fáter', 'pai', 'father'], ['Wasser', 'vásser', 'água', 'water'],
        ['Zeit', 'tsait', 'tempo', 'time'], ['Straße', 'xtráse', 'rua', 'street'], ['gut', 'gut', 'bom', 'good'], ['Hand', 'hant', 'mão', 'hand'],
      ]),
      exercicios(9, [
        ouvir('Wasser', ['Wasser', 'Vater', 'Sonne'], 'Wasser', 'O «w» alemão soa como o «v» de «vaca»: «vásser». «Vater» começa com «f» («fáter») e «Sonne» começa com «z» («zône»).'),
        ouvir('Zeit', ['Zeit', 'Sonne', 'Straße'], 'Zeit', 'A palavra começa com «ts», um som que em português só aparece no meio de palavras como «pizza». «Sonne» e «Straße» começam com «z» e «x».'),
        ouvir('Jahr', ['Jahr', 'Haus', 'rot'], 'Jahr', 'O «j» alemão soa como o «i» de «iogurte»: «iár». «Haus» começa com «h» soprado e «rot» com o «r» da garganta.'),
        ditado('Wasser', 'Escreva com «w», que soa como «v». Não escreva «Vasser»: em alemão o «v» quase sempre soa «f». O «ss» no meio é um «s» forte.'),
        ditado('Straße', 'O «ß» se chama «Eszett» e soa como «ss». Ele não existe em português e aparece depois de vogal longa, como o «a» de «Straße».'),
        mc('O «h» de «Haus», no começo da palavra, é:', ['aspirado, como em «house»', 'mudo, como em «hora»', 'igual ao «r»'], 'aspirado, como em «house»', 'Em alemão o «h» no começo é soprado, um fio de ar. Só em português o «h» é mudo.'),
        mc('O «s» de «Sonne» (antes de vogal) soa como:', ['«z»', '«s» de sol', '«x»'], '«z»', 'Antes de vogal o «s» alemão é sonoro, como o «z» de «zebra»: «zône». No fim da palavra ele volta a soar «s».'),
        lacuna('___asser (água; lê-se «vásser»)', ['W', 'V', 'F'], 'W', 'O som de «v» é escrito com «w» em alemão. A letra «v» soaria «f».'),
        lacuna('___eit (tempo; lê-se «tsait»)', ['Z', 'S', 'C'], 'Z', 'O som «ts» se escreve com «z». O «s» soaria «z» antes de vogal e o «c» sozinho soaria «k».'),
      ]),
      producao(4, 'Leia as 10 palavras em voz alta: «Haus, Jahr, rot, Sonne, Vater, Wasser, Zeit, Straße, gut, Hand». Cuidado com o «h» aspirado, o «w» (v) e o «z» (ts). Depois escolha três palavras e diga uma de cada vez, bem devagar, separando o som inicial: «v… vásser».'),
    ]),
    sessao('S3', 'Combinações de letras', [
      revisao(3, 'Ouça de novo as 10 palavras da sessão anterior e repita cada uma em voz alta. Preste atenção ao «h» aspirado, ao «w» e ao «z».'),
      gramatica(6, 'Vogais longas, curtas e em pares', 'Algumas letras juntas formam um som próprio. A regra vale sempre. PASSO 1: ouça «Tal» e depois «Ball». Em «Tal» a vogal «a» é longa, como se você esticasse: «taal». Em «Ball» ela é curta. PASSO 2: depois de uma vogal, uma só consoante costuma deixar a vogal longa, como em «Name». Duas consoantes iguais deixam a vogal curta, como em «Kette». PASSO 3: duas vogais juntas formam um som novo. O par «ei» soa «ai», e «Eis» lê-se «ais». PASSO 4: o par «ie» é um «i» longo, e «Bier» lê-se «bir». PASSO 5: os pares «eu» e «äu» soam «ói», e «Euro» lê-se «ói-ro». PASSO 6: o par «au» soa «au», como em português, e «Haus» lê-se «haus». Cuidado para não confundir: «ei» soa «ai», mas «ie» soa «i».', {
        tag: 'Pronúncia',
        comparacao: 'em português o «ei» soa «êi», como em «lei». No alemão o «ei» soa «ai», como em «pai». O par «ie» não existe em português: é um «i» comprido.',
        tabela: [
          { combinacao: 'vogal + 1 consoante', som: 'vogal longa', exemplo: 'Tal (taal), Name (náme)' }, { combinacao: 'vogal + 2 consoantes', som: 'vogal curta', exemplo: 'Ball (bal), Kette (kéte)' },
          { combinacao: 'ei', som: '«ai»', exemplo: 'Eis (ais), Wein (vain)' }, { combinacao: 'ie', som: '«i» longo', exemplo: 'Bier (bir), Brief (brif)' }, { combinacao: 'eu, äu', som: '«ói»', exemplo: 'Euro (ói-ro), Häuser (hóizer)' },
          { combinacao: 'au', som: '«au»', exemplo: 'Haus (haus), Auto (áuto)' },
        ],
        exemplos: [['Eis', 'gelo, sorvete'], ['Wein', 'vinho'], ['Bier', 'cerveja'], ['Brief', 'carta'], ['Euro', 'euro'], ['Häuser', 'casas'], ['Haus', 'casa'], ['Auto', 'carro']],
        erros: [['Eis, lido «eis»', 'Eis', 'O «ei» alemão soa «ai», como em «pai». A palavra lê-se «ais».'], ['Bier, lido «bi-er»', 'Bier', 'O par «ie» é um «i» longo. A palavra lê-se «bir», sem soar o «e».'], ['Euro, lido «eu-ro»', 'Euro', 'O par «eu» soa «ói». A palavra lê-se «ói-ro».']],
      }),
      gramatica(6, 'Combinações de consoantes', 'PASSO 1: o grupo «sch» soa «x», como em «xícara». A palavra «Schule» lê-se «xúle». PASSO 2: no começo de uma palavra, «sp» e «st» soam «xp» e «xt». «Sport» lê-se «xport» e «Stein» lê-se «xtain». PASSO 3: o grupo «ch» tem dois sons. Depois de «e», «i», «ä», «ö», «ü», «l», «n» e «r», ele é suave: um sopro de ar bem fraco, como um «x» sussurrado. «Ich» lê-se «iç». PASSO 4: depois de «a», «o», «u» e do par «au», o «ch» é áspero: sai do fundo da garganta, como o «rr» carioca de «carro». «Buch» lê-se «burr». PASSO 5: o grupo «tsch» soa «tch», como em «tchau». «Deutsch» lê-se «dóitx». PASSO 6: o grupo «pf» junta o «p» e o «f» numa só emissão: «Apfel». O grupo «qu» soa «kv»: «Quelle». O grupo «ck» soa «k» curto: «Jacke». O grupo «ng» é nasal, sem «g» solto no fim: «singen».', {
        tag: 'Pronúncia',
        comparacao: 'em português o «ch» soa «x», como em «chá». No alemão o «ch» é outro som, suave ou áspero, e quem faz o som de «x» é o grupo «sch».',
        tabela: [
          { combinacao: 'sch', som: '«x» de «xícara»', exemplo: 'Schule (xúle), Fisch (fix)' }, { combinacao: 'sp, st (início)', som: '«xp», «xt»', exemplo: 'Sport (xport), Stein (xtain)' },
          { combinacao: 'ch (suave)', som: '«ç»', exemplo: 'ich (iç), Milch (milç)' }, { combinacao: 'ch (áspero)', som: '«rr» carioca', exemplo: 'Buch (burr), acht (arrt)' }, { combinacao: 'tsch', som: '«tch»', exemplo: 'Deutsch (dóitx)' },
          { combinacao: 'pf', som: '«p» e «f» juntos', exemplo: 'Apfel (ápfel)' }, { combinacao: 'qu', som: '«kv»', exemplo: 'Quelle (kvéle)' }, { combinacao: 'ck', som: '«k» curto', exemplo: 'Jacke (iáke)' }, { combinacao: 'ng', som: 'nasal, sem «g» solto', exemplo: 'singen (zíngen)' },
        ],
        exemplos: [['Schule', 'escola'], ['Sport', 'esporte'], ['ich', 'eu'], ['Milch', 'leite'], ['Buch', 'livro'], ['Deutsch', 'alemão (idioma)']],
        erros: [['Schule, lido «sku-le»', 'Schule', 'O grupo «sch» sempre soa «x». A palavra lê-se «xúle».'], ['Sport, lido «sport»', 'Sport', 'No começo da palavra, «sp» soa «xp». A palavra lê-se «xport».'], ['Buch, lido «buc»', 'Buch', 'Depois do «u», o «ch» é áspero, como o «rr» carioca. A palavra lê-se «burr».']],
      }),
      palavras(4, [
        ['ich', 'iç', 'eu', 'I'], ['Schule', 'xúle', 'escola', 'school'], ['Sport', 'xport', 'esporte', 'sport'], ['Eis', 'ais', 'gelo, sorvete', 'ice'], ['Bier', 'bir', 'cerveja', 'beer'], ['Wein', 'vain', 'vinho', 'wine'], ['Euro', 'ói-ro', 'euro', 'euro'], ['Buch', 'burr', 'livro', 'book'], ['Deutsch', 'dóitx', 'alemão (idioma)', 'German'], ['Apfel', 'ápfel', 'maçã', 'apple'],
      ]),
      exercicios(8, [
        mc('Como se lê «ei» em «Eis»?', ['«ai»', '«ei»', '«i»'], '«ai»', 'O par «ei» soa «ai», como em «pai». Por isso «Eis» lê-se «ais».'),
        mc('Como se lê «ie» em «Bier»?', ['um «i» longo', '«ie»', '«ai»'], 'um «i» longo', 'O par «ie» é um «i» comprido, e o «e» não soa. Por isso «Bier» lê-se «bir».'),
        mc('Como se lê «sch» em «Schule»?', ['«x» de xícara', '«sk»', '«s»'], '«x» de xícara', 'O grupo «sch» sempre soa «x». O «sk» seria o som do português, que o alemão não usa aqui.'),
        ouvir('Wein', ['Wein', 'Wien', 'Wasser'], 'Wein', 'Você ouve «vain», com o par «ei» soando «ai». «Wien» (Viena) soaria «vin», com «ie», e «Wasser» soaria «vásser».'),
        ouvir('Fisch', ['Fisch', 'Film', 'Eis'], 'Fisch', 'A palavra termina em «x», o som do grupo «sch»: «fix». «Film» termina em «m» e «Eis» começa por vogal.'),
        ouvir('Buch', ['Buch', 'Bad', 'Bier'], 'Buch', 'O final é o «ch» áspero, como o «rr» carioca: «burr». «Bad» termina em «d» e «Bier» termina em «r» suave.'),
        ditado('Schule', 'O som «x» é escrito com o grupo «sch». Escreva «Schule», e não «Xule», porque o alemão não usa a letra «x» para esse som.'),
        ditado('Bier', 'O «i» longo é escrito «ie» em alemão. Escreva «Bier», e não «Bir».'),
        lacuna('B___r (cerveja; lê-se «bir»)', ['ie', 'ei', 'eu'], 'ie', 'O «i» longo se escreve «ie». Com «ei» a palavra soaria «bair».'),
        lacuna('W___n (vinho; lê-se «vain»)', ['ei', 'ie', 'eu'], 'ei', 'O som «ai» se escreve «ei». Com «ie» a palavra soaria «vin», que é «Wien», a cidade de Viena.'),
        lacuna('___ule (escola; lê-se «xúle»)', ['Sch', 'Sp', 'St'], 'Sch', 'O som «x» no começo é escrito «sch». Com «sp» ou «st» soaria «xp» ou «xt».'),
      ]),
      producao(3, 'Leia em voz alta: «ich, Schule, Sport, Eis, Bier, Wein, Euro, Buch, Deutsch, Apfel». Depois diga duas vezes, bem devagar, as palavras com o «ch»: primeiro o «ch» suave de «ich» e depois o «ch» áspero de «Buch».'),
    ]),
    sessao('S4', 'Saudações', [
      dialogo(5, 'Hallo! Wie geht’s? / Oi! Como vai?', 'Duas pessoas se encontram na rua, de manhã.', [
        ['Anna', 'Hallo, Ben!', 'Oi, Ben!'], ['Ben', 'Hallo, Anna! Wie geht’s?', 'Oi, Anna! Como vai?'], ['Anna', 'Gut, danke! Und dir?', 'Bem, obrigada! E você?'], ['Ben', 'Auch gut, danke.', 'Também bem, obrigado.'], ['Anna', 'Tschüs, Ben!', 'Tchau, Ben!'], ['Ben', 'Tschüs, Anna!', 'Tchau, Anna!'],
      ]),
      revisao(2, 'Ouça «Eis», «Bier», «Schule», «Sport», «Haus», «ich» e «Buch» e diga qual combinação de letras aparece em cada uma.'),
      palavras(4, [
        ['Hallo', 'hálo', 'olá', 'hello'], ['Guten Morgen', 'gúten mórguen', 'bom dia (de manhã)', 'good morning'], ['Guten Tag', 'gúten tak', 'bom dia, boa tarde', 'good day'], ['Guten Abend', 'gúten ábent', 'boa noite (ao chegar)', 'good evening'], ['Gute Nacht', 'gúte narrt', 'boa noite (ao dormir)', 'good night'],
        ['Tschüs', 'tchüs', 'tchau', 'bye'], ['Danke', 'dánke', 'obrigado, obrigada', 'thanks'], ['Bitte', 'bíte', 'por favor, de nada', 'please'], ['Wie geht’s?', 'vi guéts', 'como vai?', 'how are you?'], ['Und dir?', 'unt dir', 'e você?', 'and you?'], ['Auch gut', 'aurr gut', 'também bem', 'also good'],
      ]),
      gramatica(3, 'Quando usar cada saudação', 'PASSO 1: «Hallo» e «Tschüs» servem para amigos e colegas, a qualquer hora do dia. PASSO 2: «Guten Morgen» se diz de manhã, «Guten Tag» se diz durante o dia e «Guten Abend» se diz à noite, ao chegar. PASSO 3: «Gute Nacht» é diferente. Só se diz na despedida, antes de dormir. PASSO 4: para perguntar como a pessoa está, diga «Wie geht’s?», que se lê «vi guéts». Responda «Gut, danke!». PASSO 5: «Danke» quer dizer obrigado e obrigada. Em alemão a palavra é a mesma para homem e mulher.', {
        tag: 'Saudações',
        comparacao: 'em português, «boa noite» serve para chegar e para ir dormir. Em alemão são duas expressões: «Guten Abend» ao chegar e «Gute Nacht» ao dormir.',
        tabela: [
          { situacao: 'Encontrar alguém de manhã', alemao: 'Guten Morgen!', pt: 'bom dia' }, { situacao: 'Encontrar alguém durante o dia', alemao: 'Guten Tag!', pt: 'bom dia, boa tarde' }, { situacao: 'Encontrar alguém à noite', alemao: 'Guten Abend!', pt: 'boa noite' },
          { situacao: 'Ir dormir', alemao: 'Gute Nacht!', pt: 'boa noite' }, { situacao: 'Com amigos, a qualquer hora', alemao: 'Hallo!', pt: 'oi' }, { situacao: 'Despedir-se', alemao: 'Tschüs!', pt: 'tchau' }, { situacao: 'Perguntar como a pessoa está', alemao: 'Wie geht’s?', pt: 'como vai?' },
        ],
        erros: [['Gute Nacht, ao chegar a uma festa à noite', 'Guten Abend', '«Gute Nacht» só se diz na despedida, para quem vai dormir. Ao chegar, diga «Guten Abend».'], ['Guten Tag, às oito da noite', 'Guten Abend', 'À noite a saudação muda para «Guten Abend». «Guten Tag» fica para o dia.']],
      }),
      texto(4, 'Anna im Café / Anna no café', 'Guten Morgen! Anna ist im Café. Ben ist auch da. Anna sagt: Hallo, Ben! Wie geht’s? Ben sagt: Gut, danke! Und dir? Anna sagt: Auch gut, danke. Anna trinkt Tee. Ben trinkt Wasser. Das Café ist gut. Dann sagt Ben: Tschüs, Anna! Anna sagt: Tschüs, Ben!',
        'Bom dia! Anna está no café. Ben também está lá. Anna diz: Oi, Ben! Como vai? Ben diz: Bem, obrigado! E você? Anna diz: Também bem, obrigada. Anna bebe chá. Ben bebe água. O café é bom. Depois Ben diz: Tchau, Anna! Anna diz: Tchau, Ben!',
        [['Onde Anna e Ben estão?', 'No café («im Café»).'], ['O que Anna bebe e o que Ben bebe?', 'Anna bebe chá («Tee») e Ben bebe água («Wasser»).'], ['Que pergunta Anna faz para saber se Ben está bem?', '«Wie geht’s?».']]),
      exercicios(9, [
        ouvir('Guten Tag', ['Guten Tag', 'Guten Abend', 'Gute Nacht'], 'Guten Tag', '«Guten Tag» é a saudação do dia. Em «Guten Abend» você ouviria «ábent» no final, e em «Gute Nacht» ouviria o «rr» áspero de «narrt».'),
        ouvir('Wie geht’s?', ['Wie geht’s?', 'Und dir?', 'Guten Morgen'], 'Wie geht’s?', 'A pergunta começa com «vi», o «w» alemão soando «v», e termina em «guéts». «Und dir?» começa com «unt» e «Guten Morgen» é uma saudação, não uma pergunta.'),
        ditado('Danke', 'Escreva «Danke». O «e» final soa, «dánke», e a palavra é a mesma para homem e mulher.'),
        mc('Qual saudação se usa de manhã?', ['Guten Morgen', 'Guten Abend', 'Gute Nacht'], 'Guten Morgen', '«Morgen» quer dizer manhã. «Abend» é a noite, e «Nacht» é a hora de dormir.'),
        mc('«Tschüs» significa:', ['tchau', 'obrigado', 'por favor'], 'tchau', '«Tschüs» é a despedida informal, que se lê «tchüs». Obrigado é «Danke», e por favor é «Bitte».'),
        lacuna('Gut, ___! Und dir? (obrigada)', ['danke', 'bitte', 'tschüs'], 'danke', 'Depois de dizer que está bem, você agradece a pergunta com «danke». «Tschüs» é despedida e «bitte» seria «por favor».'),
        lacuna('Guten ___! (boa noite, ao chegar)', ['Abend', 'Morgen', 'Nacht'], 'Abend', 'Ao chegar à noite se diz «Guten Abend». «Guten Morgen» é de manhã, e «Nacht» fica para «Gute Nacht», ao dormir.'),
        lacuna('___, Ben! Wie geht’s? (oi)', ['Hallo', 'Tschüs', 'Danke'], 'Hallo', 'Para cumprimentar um amigo se diz «Hallo». «Tschüs» é para se despedir e «Danke» é obrigado.'),
        ordem('Ordene: «Como vai?»', ['geht’s', 'Wie'], 'Wie geht’s?', 'A pergunta começa com a palavra interrogativa «Wie», como, e depois vem «geht’s».'),
        ordem('Ordene: «Bem, obrigado! E você?»', ['dir', 'Gut', 'Und', 'danke'], 'Gut, danke! Und dir?', 'Primeiro a resposta «Gut, danke!» e depois a pergunta devolvida, «Und dir?».'),
        ordem('Ordene: «Bom dia, Ben!»', ['Ben', 'Guten', 'Morgen'], 'Guten Morgen, Ben!', 'A saudação «Guten Morgen» vem inteira primeiro, e o nome da pessoa vem por último.'),
        ordem('Ordene: «Também bem, obrigado.»', ['danke', 'Auch', 'gut'], 'Auch gut, danke.', '«Auch gut» quer dizer também bem, e o agradecimento «danke» fecha a frase.'),
        livre('Escreva uma saudação e uma despedida em alemão.', 'Hallo! Guten Tag! Tschüs!'),
        livre('Escreva como você pergunta a um amigo se ele está bem e como ele responde.', 'Wie geht’s? Gut, danke! Und dir?'),
        livre('Escreva o que você diz ao chegar à noite e o que diz antes de dormir.', 'Guten Abend! Gute Nacht!'),
      ]),
      producao(3, 'Encene o diálogo em voz alta, fazendo as duas vozes, Anna e Ben. Depois troque os nomes por nomes de pessoas que você conhece e cumprimente cada uma: «Hallo, … ! Wie geht’s?». Termine com «Tschüs!».'),
    ]),
  ],
});
