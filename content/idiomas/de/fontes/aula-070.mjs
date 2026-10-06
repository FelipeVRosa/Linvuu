import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 70, titulo: 'Partizip I e II como adjetivo', nivel: 'b2',
  objetivo: 'Usar o Partizip II (gekochte Eier, ein verlorener Schlüssel, die gestiegenen Preise) e o Partizip I (lachend, die spielenden Kinder) como adjetivo, com a terminação certa e o sentido certo (passivo e concluído, ativo e concluído ou ativo e simultâneo).',
  nota: 'Você usa particípios como adjetivos. Próxima aula: Futur II, suposições e partículas modais.',
  sessoes: [
    sessao('S1', 'Partizip II como adjetivo', [
      revisao(5, 'Escreva 6 frases com adjetivos e substantivos com preposição.'),
      palavras(8, [
        ['gekocht', 'gue-kórrt', 'cozido', 'cooked'], ['gebraten', 'gue-brá-ten', 'frito, assado', 'fried, roasted'], ['gebrochen', 'gue-bró-rren', 'quebrado', 'broken'], ['gebraucht', 'gue-bráurrt', 'usado', 'used'],
        ['verloren', 'fer-lô-ren', 'perdido', 'lost'], ['gesperrt', 'gue-xpért', 'bloqueado, interditado', 'closed off'], ['beschädigt', 'be-xé-diçt', 'danificado', 'damaged'], ['geöffnet', 'gue-öf-net', 'aberto', 'open'],
      ]),
      gramatica(14, 'O Partizip II como adjetivo, passo a passo', 'PASSO 1: o PARTIZIP II pode funcionar como ADJETIVO: «das gekochte Ei» (o ovo cozido), «ein verlorener Schlüssel» (uma chave perdida), «die gebrochene Lampe» (a lâmpada quebrada). PASSO 2: o SENTIDO depende do verbo. Com verbos TRANSITIVOS, é PASSIVO e de ação CONCLUÍDA: o ovo foi cozido; a chave foi perdida. Com verbos INTRANSITIVOS que formam o Perfekt com «sein» (steigen, fallen, verblühen), é ATIVO e concluído: «die gestiegenen Preise» são os preços que subiram, «die verblühte Rose» é a rosa que já murchou. Verbos intransitivos com «haben» (schlafen, lachen) não formam esse tipo de adjetivo. PASSO 3: ANTES do substantivo, ele se declina como qualquer adjetivo (aulas 32 a 34): «das gekochte Ei», «ein gekochtes Ei», «gekochte Eier». PASSO 4: DEPOIS de «sein», fica invariável: «Das Ei ist gekocht», «Das Geschäft ist geöffnet.» PASSO 5: use para descrever o estado de coisas e pessoas: «ein gebrauchtes Fahrrad», «die beschädigte Kette». PASSO 6: com as terminações, lembre: der → -e, ein → -er/-es/-e.', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'o português tem o particípio como adjetivo («ovo cozido», «chave perdida»), mas sem declinar. O alemão declina, como qualquer adjetivo.',
        tabela: [
          { infinitivo: 'kochen', participio: 'gekocht', exemplo: 'das gekochte Ei / ein gekochtes Ei' }, { infinitivo: 'verlieren', participio: 'verloren', exemplo: 'der verlorene Schlüssel / ein verlorener Schlüssel' }, { infinitivo: 'brechen', participio: 'gebrochen', exemplo: 'die gebrochene Lampe / eine gebrochene Lampe' }, { infinitivo: 'gebrauchen', participio: 'gebraucht', exemplo: 'ein gebrauchtes Fahrrad' },
          { infinitivo: 'sperren', participio: 'gesperrt', exemplo: 'die gesperrte Straße' }, { infinitivo: 'öffnen', participio: 'geöffnet', exemplo: 'das geöffnete Fenster' },
        ],
        erros: [['das gekocht Ei', 'das gekochte Ei', 'Antes do substantivo: terminação.'], ['Das Ei ist gekochte.', 'Das Ei ist gekocht.', 'Depois de «sein», o adjetivo não muda.'], ['ein verlorenes Schlüssel', 'ein verlorener Schlüssel', '«Schlüssel» é masculino: «-er».']],
      }),
      producao(3, 'Descreva 6 coisas com Partizip II: «ein gebrauchtes Fahrrad, eine beschädigte Kette, ein verlorener Schlüssel …»'),
    ]),
    sessao('S2', 'Partizip I como adjetivo', [
      revisao(5, 'Escreva 6 frases com Partizip II como adjetivo, antes e depois de «sein».'),
      palavras(8, [
        ['lachend', 'lá-rrent', 'rindo', 'laughing'], ['laufend', 'láu-fent', 'correndo; em curso', 'running'], ['schlafend', 'xlá-fent', 'dormindo', 'sleeping'], ['spielend', 'xpí-lent', 'brincando', 'playing'],
        ['fließend', 'flí-sent', 'fluente; corrente', 'fluent; flowing'], ['steigend', 'xtái-guent', 'crescente', 'rising'], ['wachsend', 'vák-sent', 'crescente', 'growing'], ['blühend', 'blü-ent', 'florescente', 'blooming'],
      ]),
      gramatica(12, 'O Partizip I como adjetivo, passo a passo', 'PASSO 1: o PARTIZIP I forma-se com o INFINITIVO + «-D»: lachen → lachend; laufen → laufend; schlafen → schlafend; spielen → spielend. PASSO 2: o SENTIDO é ATIVO e SIMULTÂNEO: «das schlafende Kind» é a criança QUE ESTÁ DORMINDO; «die spielenden Kinder», as crianças que estão brincando. PASSO 3: antes do substantivo, declina-se como adjetivo: «ein lachendes Kind», «die spielenden Kinder», «fließendes Wasser». PASSO 4: pode funcionar como ADVÉRBIO, sem terminação: «Er kam lachend herein» (ele entrou rindo). PASSO 5: aparece em expressões fixas: «laufende Kosten» (custos correntes), «steigende Preise» (preços em alta), «fließend Deutsch sprechen» (falar alemão fluentemente). PASSO 6: compare: Partizip I (ativo, acontecendo) × Partizip II (passivo, concluído): «das kochende Wasser» (a água fervendo) × «das gekochte Ei» (o ovo cozido).', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { infinitivo: 'lachen', participio: 'lachend', exemplo: 'ein lachendes Kind' }, { infinitivo: 'spielen', participio: 'spielend', exemplo: 'die spielenden Kinder' }, { infinitivo: 'schlafen', participio: 'schlafend', exemplo: 'das schlafende Baby' }, { infinitivo: 'fließen', participio: 'fließend', exemplo: 'fließendes Wasser / fließend Deutsch' },
          { infinitivo: 'steigen', participio: 'steigend', exemplo: 'steigende Preise' }, { infinitivo: 'kochen', participio: 'kochend (Partizip I) × gekocht (Partizip II)', exemplo: 'das kochende Wasser × das gekochte Ei' },
        ],
        erros: [['das spielen Kind', 'das spielende Kind', 'Partizip I: infinitivo + d.'], ['Er kam lachende herein.', 'Er kam lachend herein.', 'Como advérbio: sem terminação.'], ['das gekochte Wasser (que ferve)', 'das kochende Wasser', 'Ação em curso: Partizip I.']],
      }),
      producao(5, 'Descreva 6 cenas com Partizip I: «das schlafende Baby, die spielenden Kinder, fließendes Wasser …»'),
    ]),
    sessao('S3', 'No mercado de pulgas', [
      revisao(5, 'Escreva uma frase com cada Partizip I e II da sessão.'),
      gramatica(10, 'Escolher entre Partizip I e II', 'PASSO 1: pergunte: a ação ESTÁ ACONTECENDO ou JÁ ACONTECEU? Acontecendo → Partizip I («die spielenden Kinder»); concluída → Partizip II («die gespielte Rolle»). PASSO 2: pergunte também: quem faz a ação? Se o substantivo FAZ a ação → Partizip I («das schlafende Kind» dorme). Se o substantivo SOFRE a ação → Partizip II («der gekochte Reis» foi cozido). Exceção: com verbos intransitivos de «sein», o substantivo FAZ a ação já concluída e o Partizip II é ativo («die gestiegenen Preise»: os preços que subiram). PASSO 3: nas descrições de objetos usados, danificados ou perdidos, use Partizip II: «das gebrauchte Fahrrad», «die beschädigte Kette». PASSO 4: nas descrições de pessoas ou fenômenos em ação, use Partizip I: «die lachenden Kinder», «das fließende Wasser».', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { pergunta: 'o substantivo FAZ a ação?', usar: 'Partizip I', frase: 'das schlafende Kind, die lachenden Kinder' }, { pergunta: 'o substantivo SOFRE a ação?', usar: 'Partizip II', frase: 'der gekochte Reis, die beschädigte Kette' }, { pergunta: 'verbo intransitivo com sein: o substantivo FEZ a ação (concluída)', usar: 'Partizip II (ativo)', frase: 'die gestiegenen Preise, die verblühte Rose' }, { pergunta: 'a ação está em curso?', usar: 'Partizip I', frase: 'steigende Preise' }, { pergunta: 'a ação já terminou?', usar: 'Partizip II', frase: 'das geöffnete Fenster, die verlorene Zeit' },
        ],
      }),
      dialogo(10, 'Auf dem Flohmarkt / No mercado de pulgas', 'Uma cliente negocia num mercado de pulgas.', [
        ['Verkäufer', 'Guten Tag! Hier gibt es gebrauchte Bücher, alte Uhren und ein Fahrrad.', 'Bom dia! Aqui há livros usados, relógios antigos e uma bicicleta.'], ['Lea', 'Ich suche ein gebrauchtes Fahrrad für meinen Sohn.', 'Procuro uma bicicleta usada para o meu filho.'], ['Verkäufer', 'Dort steht eins. Die Bremsen sind neu, aber die Kette ist beschädigt.', 'Ali está uma. Os freios são novos, mas a corrente está danificada.'],
        ['Lea', 'Was kostet es mit der beschädigten Kette?', 'Quanto custa com a corrente danificada?'], ['Verkäufer', 'Fünfzig Euro. Der Preis ist fest, aber ich repariere die Kette gern.', 'Cinquenta euros. O preço é fixo, mas conserto a corrente com prazer.'], ['Lea', 'Gut. Und diese gebrochene Lampe? Funktioniert sie noch?', 'Ótimo. E esta lâmpada quebrada? Ainda funciona?'],
        ['Verkäufer', 'Nein, sie ist kaputt. Aber diese Uhr ist ein Schnäppchen. Sie läuft noch perfekt.', 'Não, está estragada. Mas este relógio é uma pechincha. Ainda funciona perfeitamente.'], ['Lea', 'Dann nehme ich das Fahrrad. Die gebrochene Lampe lasse ich hier.', 'Então levo a bicicleta. A lâmpada quebrada deixo aqui.'],
      ]),
      producao(5, 'Descreva em voz alta o que você vê num mercado de pulgas, com Partizip I e II.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases com particípios como adjetivos.'),
      exercicios(20, [
        lacuna('das ___ Ei (cozido)', ['gekochte', 'kochende', 'gekocht'], 'gekochte', 'Partizip II + terminação.'), lacuna('ein ___ Schlüssel (perdido)', ['verlorener', 'verlorenes', 'verlorene'], 'verlorener', 'Masculino com ein: -er.'), lacuna('das ___ Kind (que dorme)', ['schlafende', 'geschlafene', 'schlafend'], 'schlafende', 'Partizip I + terminação.'),
        lacuna('die ___ Kinder (brincando)', ['spielenden', 'gespielten', 'spielend'], 'spielenden', 'Partizip I, plural com artigo: -en.'), lacuna('Er kam ___ herein. (rindo)', ['lachend', 'lachende', 'gelacht'], 'lachend', 'Advérbio: sem terminação.'), lacuna('Das Geschäft ist ___. (aberto)', ['geöffnet', 'geöffnete', 'öffnend'], 'geöffnet', 'Depois de sein: invariável.'),
        lacuna('___ Preise (crescentes)', ['Steigende', 'Gestiegene', 'Steigen'], 'Steigende', 'Partizip I, plural sem artigo: -e.'), mc('O Partizip I tem sentido:', ['ativo e simultâneo', 'passivo e concluído', 'futuro'], 'ativo e simultâneo', 'Ação em curso.'), mc('O Partizip II de um verbo transitivo, como adjetivo, tem sentido:', ['passivo e concluído', 'ativo e simultâneo', 'futuro'], 'passivo e concluído', 'Ação sofrida.'),
        mc('O Partizip I forma-se com:', ['infinitivo + d', 'ge- + raiz + t', 'raiz + te'], 'infinitivo + d', 'lachen → lachend.'), ordem('Ordene: «a bicicleta usada»', ['das', 'gebrauchte', 'Fahrrad'], 'das gebrauchte Fahrrad', 'Partizip II + terminação -e.'), ouvir('Die spielenden Kinder lachen', ['Die spielenden Kinder lachen', 'Die gespielten Kinder lachen', 'Die Kinder spielen und lachen'], 'Die spielenden Kinder lachen', 'Partizip I.'),
        ditado('Ich suche ein gebrauchtes Fahrrad', 'Partizip II com terminação neutra.'), livre('Escreva 5 frases com particípios como adjetivos: dois Partizip II, dois Partizip I e um como advérbio.', 'Ich suche ein gebrauchtes Fahrrad. Die beschädigte Kette ist alt. Die spielenden Kinder lachen. Das schlafende Baby ist ruhig. Er kam lachend herein.'),
      ]),
      producao(5, 'Grave-se descrevendo pessoas, objetos e cenas com Partizip I e II.'),
    ]),
  ],
});
