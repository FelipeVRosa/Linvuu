import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 1, titulo: 'Sons e primeiras palavras', nivel: 'zero',
  objetivo: 'Reconhecer os sons do alemão (incluindo ä, ö, ü, ß, ch, sch, ei, ie), ler palavras novas sem medo e fazer as primeiras saudações.',
  nota: 'Você lê e pronuncia o alemão com segurança. Próxima aula: apresentar-se.',
  sessoes: [
    sessao('S1', 'Vogais e consoantes fáceis', [
      intro(4, 'O alemão se escreve como se fala, e as regras de pronúncia são poucas e regulares. Nesta aula você ouve e lê o alemão pela primeira vez: aprende os sons, lê palavras novas sem medo e fecha com as primeiras saudações. Nas tabelas, «ç» marca o som suave do «ch» e «rr» marca o som áspero (como o «rr» carioca).'),
      alfabeto(14, [
        ['Grupo 1 — Vogais', [
          ['A', 'a', 'a de «casa»', '[aː / a]', 'Apfel', 'maçã'], ['E', 'e', 'e fechado, como em «mesa»', '[eː / ɛ]', 'Tee', 'chá'], ['I', 'i', 'i de «vida»', '[iː / ɪ]', 'Insel', 'ilha'], ['O', 'o', 'o fechado, como em «avô»', '[oː / ɔ]', 'Ofen', 'forno'],
          ['U', 'u', 'u de «lua»', '[uː / ʊ]', 'Uhr', 'relógio'], ['Ä', 'ä', 'é aberto, como em «pé»', '[ɛː / ɛ]', 'Käse', 'queijo'], ['Ö', 'ö', '«e» com os lábios arredondados, como para dizer «o»', '[øː / œ]', 'Öl', 'óleo'], ['Ü', 'ü', '«i» com os lábios arredondados, como para dizer «u»', '[yː / ʏ]', 'Tür', 'porta'],
        ]],
        ['Grupo 2 — Consoantes parecidas com o português', [
          ['B', 'b', 'b de «bola»', '[b]', 'Bad', 'banheiro'], ['D', 'd', 'd de «dado»', '[d]', 'Dame', 'senhora'], ['F', 'f', 'f de «faca»', '[f]', 'Film', 'filme'], ['K', 'k', 'k de «kilo»', '[k]', 'Kino', 'cinema'], ['L', 'l', 'l de «lua»', '[l]', 'Lampe', 'lâmpada'],
          ['M', 'm', 'm de «mapa»', '[m]', 'Mama', 'mamãe'], ['N', 'n', 'n de «nada»', '[n]', 'Name', 'nome'], ['P', 'p', 'p de «pato»', '[p]', 'Papa', 'papai'], ['T', 't', 't de «tapete», mais seco', '[t]', 'Taxi', 'táxi'], ['X', 'x', '«ks», como em «táxi»', '[ks]', 'Fax', 'fax'],
        ]],
      ]),
      palavras(8, [
        ['Papa', 'pápa', 'papai', 'dad'], ['Mama', 'máma', 'mamãe', 'mom'], ['Tee', 'té', 'chá', 'tea'], ['Taxi', 'táksi', 'táxi', 'taxi'], ['Film', 'film', 'filme', 'film'], ['Kino', 'kíno', 'cinema', 'cinema'], ['Lampe', 'lámpe', 'lâmpada', 'lamp'], ['Name', 'náme', 'nome', 'name'],
      ]),
      producao(4, 'Diga em voz alta: «Papa, Mama, Tee, Taxi, Film, Kino, Lampe, Name». Treine o «ü» e o «ö»: lábios em «u» (ou «o») e a língua dizendo «i» (ou «e»).'),
    ]),
    sessao('S2', 'Consoantes que mudam de som', [
      revisao(5, 'Leia em voz alta as 18 letras da sessão anterior sem olhar a tradução.'),
      alfabeto(12, [
        ['Grupo 3 — Consoantes que mudam de som', [
          ['H', 'h', 'h aspirado, como no inglês «house» (em português o h é mudo)', '[h]', 'Haus', 'casa'], ['J', 'j', 'como o «i» de «iogurte»', '[j]', 'Jahr', 'ano'], ['R', 'r', 'r gutural, no fundo da garganta', '[ʁ]', 'rot', 'vermelho'],
          ['S', 's', '«z» antes de vogal; «s» no fim da palavra', '[z / s]', 'Sonne', 'sol'], ['V', 'v', '«f» na maioria das palavras alemãs', '[f]', 'Vater', 'pai'], ['W', 'w', '«v» de «vaca»', '[v]', 'Wasser', 'água'],
          ['Z', 'z', '«ts», como em «pizza»', '[ts]', 'Zeit', 'tempo'], ['ß', 'ß', '«ss» (s longo); chama-se «Eszett»', '[s]', 'Straße', 'rua'], ['G', 'g', 'g de «gato», sempre duro', '[g]', 'gut', 'bom'],
        ]],
      ]),
      palavras(10, [
        ['Haus', 'haus', 'casa', 'house'], ['Jahr', 'iár', 'ano', 'year'], ['rot', 'rot', 'vermelho', 'red'], ['Sonne', 'zône', 'sol', 'sun'], ['Vater', 'fáter', 'pai', 'father'], ['Wasser', 'vásser', 'água', 'water'],
        ['Zeit', 'tsait', 'tempo', 'time'], ['Straße', 'xtráse', 'rua', 'street'], ['gut', 'gut', 'bom', 'good'], ['Hand', 'hant', 'mão', 'hand'],
      ]),
      producao(3, 'Leia as 10 palavras em voz alta. Cuidado com o «h» aspirado, o «w» (v) e o «z» (ts).'),
    ]),
    sessao('S3', 'Combinações de letras', [
      revisao(5, 'Leia as 10 palavras da sessão anterior em voz alta.'),
      gramatica(14, 'Combinações de letras que mudam o som', 'Algumas letras juntas formam um som próprio. A regra vale sempre. Uma vogal seguida de uma consoante simples costuma ser longa (Tal, Name); seguida de duas consoantes iguais, costuma ser curta (Ball, Kette). O «ch» tem dois sons: suave («ç») depois de e, i, ä, ö, ü, l, n, r; áspero («rr» carioca) depois de a, o, u e au. As combinações «sp» e «st» no início de uma palavra soam «xp» e «xt».', {
        tag: 'Pronúncia',
        comparacao: 'em português «ei» e «ie» não existem como sons próprios, e o «ch» soa como «x». No alemão, «ei» é «ai», «ie» é um «i» longo, «sch» é «x» e «ch» é «ç» ou «rr».',
        tabela: [
          { combinacao: 'ei', som: '«ai»', exemplo: 'Eis (ais), Wein (vain)' }, { combinacao: 'ie', som: '«i» longo', exemplo: 'Bier (bir), Brief (brif)' }, { combinacao: 'eu, äu', som: '«ói»', exemplo: 'Euro (ói-ro), Häuser (hóizer)' },
          { combinacao: 'au', som: '«au»', exemplo: 'Haus (haus), Auto (áuto)' }, { combinacao: 'sch', som: '«x» de «xícara»', exemplo: 'Schule (xúle), Fisch (fix)' }, { combinacao: 'sp, st (início)', som: '«xp», «xt»', exemplo: 'Sport (xport), Stein (xtain)' },
          { combinacao: 'ch (suave)', som: '«ç»', exemplo: 'ich (iç), Milch (milç)' }, { combinacao: 'ch (áspero)', som: '«rr» carioca', exemplo: 'Buch (burr), acht (arrt)' }, { combinacao: 'tsch', som: '«tch»', exemplo: 'Deutsch (dóitx)' },
          { combinacao: 'pf', som: '«p» e «f» juntos', exemplo: 'Apfel (ápfel)' }, { combinacao: 'qu', som: '«kv»', exemplo: 'Quelle (kvéle)' }, { combinacao: 'ck', som: '«k» curto', exemplo: 'Jacke (iáke)' }, { combinacao: 'ng', som: 'nasal, sem «g» solto', exemplo: 'singen (zíngen)' },
        ],
        erros: [['Eis → «eis»', 'Eis → «ais»', '«ei» soa «ai», não «ei».'], ['Schule → «sk»', 'Schule → «xúle»', '«sch» sempre soa «x».']],
      }),
      palavras(8, [
        ['ich', 'iç', 'eu', 'I'], ['Schule', 'xúle', 'escola', 'school'], ['Sport', 'xport', 'esporte', 'sport'], ['Eis', 'ais', 'gelo, sorvete', 'ice'], ['Bier', 'bir', 'cerveja', 'beer'], ['Euro', 'ói-ro', 'euro', 'euro'], ['Deutsch', 'dóitx', 'alemão (idioma)', 'German'], ['Apfel', 'ápfel', 'maçã', 'apple'],
      ]),
      producao(3, 'Leia em voz alta: «ich, Schule, Sport, Eis, Bier, Euro, Deutsch, Apfel».'),
    ]),
    sessao('S4', 'Saudações', [
      revisao(5, 'Leia as combinações «ei, ie, eu, au, sch, st, sp, ch» com uma palavra de exemplo cada.'),
      palavras(6, [
        ['Hallo', 'hálo', 'olá', 'hello'], ['Guten Morgen', 'gúten mórguen', 'bom dia (de manhã)', 'good morning'], ['Guten Tag', 'gúten tak', 'bom dia, boa tarde', 'good day'], ['Guten Abend', 'gúten ábent', 'boa noite (ao chegar)', 'good evening'],
        ['Tschüs', 'tchüs', 'tchau', 'bye'], ['Danke / Bitte', 'dánke / bíte', 'obrigado / por favor, de nada', 'thanks / please'],
      ]),
      dialogo(7, 'Hallo! Wie geht’s? / Oi! Como vai?', 'Duas pessoas se encontram na rua.', [
        ['Anna', 'Hallo, Ben!', 'Oi, Ben!'], ['Ben', 'Hallo, Anna! Wie geht’s?', 'Oi, Anna! Como vai?'], ['Anna', 'Gut, danke! Und dir?', 'Bem, obrigada! E você?'], ['Ben', 'Auch gut, danke.', 'Também bem, obrigado.'], ['Anna', 'Tschüs, Ben!', 'Tchau, Ben!'], ['Ben', 'Tschüs, Anna!', 'Tchau, Anna!'],
      ]),
      exercicios(12, [
        mc('Como se lê «ei» em «Eis»?', ['«ai»', '«ei»', '«i»'], '«ai»', '«ei» soa «ai».'),
        mc('Como se lê «ie» em «Bier»?', ['«i» longo', '«ie»', '«ai»'], '«i» longo', '«ie» é um «i» longo.'),
        mc('Como se lê «sch» em «Schule»?', ['«x» de xícara', '«sk»', '«s»'], '«x» de xícara', '«sch» sempre soa «x».'),
        mc('O «h» de «Haus»:', ['é aspirado, como em «house»', 'é mudo, como em português', 'soa como «r»'], 'é aspirado, como em «house»', 'No começo da palavra, o h é aspirado.'),
        mc('O «w» de «Wasser» soa como:', ['«v» de vaca', '«u»', '«w» inglês'], '«v» de vaca', 'w = v.'),
        mc('O «z» de «Zeit» soa como:', ['«ts»', '«z» de zebra', '«s»'], '«ts»', 'z = ts.'),
        mc('O «s» de «Sonne» (antes de vogal) soa como:', ['«z»', '«s»', '«x»'], '«z»', 's antes de vogal = z.'),
        ouvir('Guten Tag', ['Guten Tag', 'Guten Abend', 'Gute Nacht'], 'Guten Tag', '«Guten Tag» é a saudação do dia.'),
        ditado('Danke', 'Obrigado.'),
        mc('Qual saudação se usa de manhã?', ['Guten Morgen', 'Guten Abend', 'Gute Nacht'], 'Guten Morgen', 'Morgen = manhã.'),
        mc('«Tschüs» significa:', ['tchau', 'obrigado', 'por favor'], 'tchau', 'Despedida informal.'),
        livre('Escreva uma saudação e uma despedida em alemão.', 'Hallo! Guten Tag! Tschüs!'),
      ]),
    ]),
  ],
});
