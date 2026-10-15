import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 27, titulo: 'Futuro semplice', nivel: 'a2',
  objetivo: 'Formar o futuro semplice regular e irregular, falar de planos, previsões e promessas, usar «se» com futuro e marcar o tempo com domani, tra e prossimo.',
  nota: 'Você fala de planos e de previsões. Próxima aula: o imperativo.',
  sessoes: [
    sessao('S1', 'Formar o futuro', [
      revisao(5, 'Diga em voz alta o que você faz todos os dias e o que fez ontem, em seis frases.'),
      palavras(8, [
        ['domani', 'dománi', 'amanhã', ''], ['dopodomani', 'dopodománi', 'depois de amanhã', ''], ['la settimana prossima', 'la settimána próssima', 'a semana que vem', ''], ['il mese prossimo', 'il mése próssimo', 'o mês que vem', ''], ['l\'anno prossimo', 'lánno próssimo', 'o ano que vem', ''], ['tra due giorni', 'tra dúe djórni', 'daqui a dois dias', ''], ['fra un mese', 'fra un mése', 'daqui a um mês', ''], ['in futuro', 'in futúro', 'no futuro', ''],
      ]),
      gramatica(12, 'As terminações do futuro semplice', 'PASSO 1: o futuro semplice diz o que acontecerá. PASSO 2: tire o «-e» final do infinitivo e acrescente as terminações: -ò, -ai, -à, -emo, -ete, -anno. Os verbos em -are mudam o «a» do infinitivo para «e»: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. PASSO 3: -ere e -ire: vendere → venderò; partire → partirò. PASSO 4: as terminações levam acento escrito só em «io» (-ò) e «lui/lei» (-à): «parlerò», «parlerà». PASSO 5: ortografia: os verbos em -care e -gare ganham um «h» para manter o som duro: cercare → cercherò, pagare → pagherò. PASSO 6: os verbos em -ciare e -giare perdem o «i»: cominciare → comincerò, mangiare → mangerò. PASSO 7: em parlerò e parlerà o acento tônico cai na última sílaba; nas outras formas (parleremo, parlerete, parleranno), na penúltima. PASSO 8: o futuro de «Lei» usa a terceira pessoa: «Lei verrà domani?» PASSO 9: o presente com sentido de futuro é muito comum no dia a dia, sobretudo quando há uma palavra de tempo: «Domani vado a Roma» ao lado de «Domani andrò a Roma».', {
        tag: 'Futuro',
        comparacao: 'o português usa mais o futuro perifrástico («vou falar») do que o simples («falarei»). O italiano usa muito o presente com marcador de tempo («domani vado») e o futuro semplice para planos mais formais ou previsões. Quanto à forma, o futuro italiano é parecido com o português: «parlerò» e «falarei», «venderò» e «venderei». Essa semelhança ajuda, mas o acento final de «-ò» e «-à» é obrigatório.',
        tabelas: [
          { titulo: 'Os três modelos regulares', linhas: [
            { pessoa: 'io', parlare: 'parlerò', vendere: 'venderò', partire: 'partirò' }, { pessoa: 'tu', parlare: 'parlerai', vendere: 'venderai', partire: 'partirai' }, { pessoa: 'lui / lei / Lei', parlare: 'parlerà', vendere: 'venderà', partire: 'partirà' },
            { pessoa: 'noi', parlare: 'parleremo', vendere: 'venderemo', partire: 'partiremo' }, { pessoa: 'voi', parlare: 'parlerete', vendere: 'venderete', partire: 'partirete' }, { pessoa: 'loro', parlare: 'parleranno', vendere: 'venderanno', partire: 'partiranno' },
          ] },
          { titulo: 'Ortografia dos verbos em -care, -gare, -ciare, -giare', linhas: [
            { infinito: 'cercare', futuro: 'cercherò', regra: 'ganha h' }, { infinito: 'pagare', futuro: 'pagherò', regra: 'ganha h' }, { infinito: 'cominciare', futuro: 'comincerò', regra: 'perde i' }, { infinito: 'mangiare', futuro: 'mangerò', regra: 'perde i' },
          ] },
        ],
        erros: [['Parlarò italiano.', 'Parlerò italiano.', 'Nos verbos em -are, o «a» vira «e»: parler-.'], ['Domani cercarò un lavoro.', 'Domani cercherò un lavoro.', 'Cercare mantém o som duro com «h».'], ['Mangiarò domani.', 'Mangerò domani.', 'Mangiare perde o «i» antes do «e».'], ['Io parlera domani.', 'Io parlerò domani.', 'A primeira pessoa tem acento: -ò.']],
      }),
      producao(5, 'Diga em voz alta cinco planos para a semana que vem: «La settimana prossima lavorerò… Andrò… Chiamerò…»'),
    ]),
    sessao('S2', 'Irregulares e usos', [
      revisao(4, 'Conjugue em voz alta «parlare», «vendere» e «partire» no futuro com «io», «tu» e «noi».'),
      palavras(6, [
        ['sarò', 'saró', 'serei, estarei', ''], ['avrò', 'avró', 'terei', ''], ['andrò', 'andró', 'irei', ''], ['verrò', 'verró', 'virei', ''], ['farò', 'faró', 'farei', ''], ['vedrò', 'vedró', 'verei', ''],
      ]),
      gramatica(12, 'Radicais irregulares e usos do futuro', 'PASSO 1: os radicais irregulares mudam, mas as terminações são as mesmas: essere → sarò; avere → avrò; andare → andrò; venire → verrò; fare → farò; dare → darò; stare → starò; potere → potrò; dovere → dovrò; volere → vorrò; sapere → saprò; vedere → vedrò; bere → berrò; dire → dirò. PASSO 2: o futuro exprime planos: «Il mese prossimo andrò a Firenze.» PASSO 3: previsões: «Domani pioverà.» «Sarà una bella estate.» PASSO 4: promessas: «Ti chiamerò stasera.» «Non lo farò più.» PASSO 5: intenções e esperanças: «Un giorno vivrò in Italia.» PASSO 6: depois de «se» de condição possível, a prática mais comum é presente na condição e futuro (ou presente) no resultado: «Se piove, resterò a casa.» O futuro também aparece depois de «se» na escrita cuidada («Se avrò tempo, verrò»), mas para começar use o presente. PASSO 7: depois de «quando», o futuro vale: «Quando arriverò, ti chiamerò.» PASSO 8: a data usa «tra» ou «fra» (daqui a): «Partirò tra due giorni.»', {
        tag: 'Futuro',
        comparacao: 'o português usa o subjuntivo futuro em «se eu tiver tempo, eu irei» e em «quando eu chegar». O italiano usa o presente depois de «se» («se ho tempo») e o futuro depois de «quando» («quando arriverò»). O brasileiro costuma errar o «quando»: em italiano o padrão é «quando arriverò, ti chiamerò» (na fala também se ouve «quando arrivo»).',
        tabela: [
          { infinito: 'essere', futuro: 'sarò', exemplo: 'Domani sarò a casa.' }, { infinito: 'avere', futuro: 'avrò', exemplo: 'Avrò più tempo.' }, { infinito: 'andare', futuro: 'andrò', exemplo: 'Andrò in Italia.' }, { infinito: 'venire', futuro: 'verrò', exemplo: 'Verrò con te.' }, { infinito: 'fare', futuro: 'farò', exemplo: 'Farò una torta.' }, { infinito: 'potere', futuro: 'potrò', exemplo: 'Non potrò venire.' }, { infinito: 'dovere', futuro: 'dovrò', exemplo: 'Dovrò studiare.' }, { infinito: 'volere', futuro: 'vorrò', exemplo: 'Vorrò restare.' },
        ],
        erros: [['Domani anderò a Roma.', 'Domani andrò a Roma.', 'Andare tem radicale irregular: andr-.'], ['Verirò con te.', 'Verrò con te.', 'Venire: verr-.'], ['Quando arrivavo, ti chiamerò.', 'Quando arriverò, ti chiamerò.', 'Ação futura depois de «quando»: futuro.'], ['Farerò una torta.', 'Farò una torta.', 'Fare: far- + terminação.']],
      }),
      producao(8, 'Faça em voz alta oito previsões ou promessas: «Domani pioverà. Ti chiamerò. Un giorno andrò a… Dovrò…»'),
    ]),
    sessao('S3', 'Planos e condições', [
      revisao(4, 'Diga em voz alta seis radicais irregulares do futuro: sarò, avrò, andrò, verrò, farò, potrò.'),
      palavras(5, [
        ['il progetto', 'il prodjétto', 'o projeto', ''], ['le vacanze', 'le vakántse', 'as férias', ''], ['il programma', 'il prográmma', 'o programa, o plano', ''], ['sperare', 'speráre', 'esperar, ter esperança', ''], ['forse', 'fórse', 'talvez', ''],
      ]),
      gramatica(8, 'Se + presente, futuro e outras construções', 'PASSO 1: condição possível: «Se + presente, futuro»: «Se domani fa bel tempo, andremo al mare.» PASSO 2: o futuro pode vir antes ou depois: «Andremo al mare se farà bel tempo.» PASSO 3: marcadores de incerteza: «forse» (talvez), «probabilmente», «credo di»: «Forse verrò», «Probabilmente partiremo domenica». PASSO 4: marcadores de prazo: «tra due giorni», «fra un mese», «entro venerdì» (até sexta), «dopodomani». PASSO 5: a esperança ou o desejo usa «spero di» + infinitivo: «Spero di vederti presto.» PASSO 6: o plano muito próximo usa o presente: «Stasera esco con Marco.» O futuro semplice dá um tom um pouco mais distante ou formal: «Uscirò con Marco la settimana prossima.» PASSO 7: o futuro também serve de ordem suave: «Mi telefonerai domani, vero?» PASSO 8: cuidado: o presente é o tempo comum quando há uma palavra de tempo que já marca o futuro.', {
        tag: 'Futuro',
        comparacao: 'em português, a ideia de futuro é mais frequente com «ir + infinitivo» («vou viajar») ou com o presente («amanhã eu viajo»). O italiano usa o presente do mesmo jeito. O futuro semplice é bem mais frequente em italiano escrito, em previsões do tempo e em planos distantes. Um bom critério: use o presente para o amanhã e para planos certos, e o futuro para o que está mais longe ou incerto.',
        tabela: [
          { construcao: 'se + presente, futuro', exemplo: 'Se piove, resteremo a casa.' }, { construcao: 'quando + futuro', exemplo: 'Quando arriverò, ti scriverò.' }, { construcao: 'forse + futuro', exemplo: 'Forse verrò con voi.' }, { construcao: 'tra + período', exemplo: 'Partiremo tra una settimana.' }, { construcao: 'spero di + infinitivo', exemplo: 'Spero di vederti presto.' },
        ],
        erros: [['Se piove, restavo a casa.', 'Se piove, resterò a casa.', 'Plano futuro: o resultado fica no futuro.'], ['Partirò in due giorni.', 'Partirò tra due giorni.', '«Daqui a»: tra ou fra.'], ['Spero che verrò.', 'Spero di venire.', 'Mesmo sujeito: «spero di» + infinitivo.'], ['Domani andrei a Roma.', 'Domani andrò a Roma.', 'O condicional não afirma o plano; use o futuro.']],
      }),
      dialogo(8, 'I nostri progetti / Nossos projetos', 'Ilaria e Roberto falam das férias do ano que vem.', [
        ['Ilaria', 'Roberto, dove andremo in vacanza l\'anno prossimo?', 'Roberto, aonde iremos nas férias do ano que vem?'], ['Roberto', 'Forse in Sicilia. Partiremo a luglio, se riesco a prendere le ferie.', 'Talvez na Sicília. Partiremos em julho, se eu conseguir tirar as férias.'], ['Ilaria', 'Io avrò due settimane libere. Prenoterò l\'albergo entro marzo.', 'Eu terei duas semanas livres. Reservarei o hotel até março.'], ['Roberto', 'Perfetto. Tra un mese ti dirò la data esatta.', 'Perfeito. Daqui a um mês te direi a data exata.'], ['Ilaria', 'E se fa troppo caldo?', 'E se fizer calor demais?'], ['Roberto', 'Se fa troppo caldo, andremo al mare presto la mattina.', 'Se fizer calor demais, iremos à praia cedo de manhã.'],
      ]),
      producao(5, 'Conte em voz alta o seu plano para as próximas férias, com três verbos no futuro e um «se».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 27', [
      revisao(5, 'Diga em voz alta o que você fará amanhã, na semana que vem e no ano que vem, dois verbos para cada.'),
      exercicios(20, [
        ouvir('Domani andrò a Roma', ['Domani andrò a Roma', 'Domani andai a Roma', 'Ieri sono andato a Roma'], 'Domani andrò a Roma', 'Futuro irregular: andrò.'), ouvir('Partiremo tra una settimana', ['Partiremo tra una settimana', 'Siamo partiti una settimana fa', 'Partiamo una settimana'], 'Partiremo tra una settimana', 'Ouça «tra» e «-emo».'), ouvir('Se piove, resterò a casa', ['Se piove, resterò a casa', 'Se pioverà, resterò a casa', 'Se pioveva, resto a casa'], 'Se piove, resterò a casa', 'Se + presente.'),
        ditado('Domani pioverà', 'Escreva: Domani pioverà.'), ditado('Ti chiamerò stasera', 'Escreva: Ti chiamerò stasera.'), ditado('Cercherò un lavoro', 'Escreva: Cercherò un lavoro.'),
        mc('Qual é o futuro de «parlare» com «io»?', ['parlerò', 'parlarò', 'parlerai'], 'parlerò', '-are → -er-.'), mc('Qual é o futuro de «venire» com «io»?', ['verrò', 'venirò', 'vengerò'], 'verrò', 'Radical irregular.'), mc('Qual frase está correta?', ['Partirò tra tre giorni.', 'Partirò in tre giorni.', 'Partirò fa tre giorni.'], 'Partirò tra tre giorni.', '«Tra»: daqui a.'), mc('Qual é o futuro de «pagare» com «io»?', ['pagherò', 'pagarò', 'pagerò'], 'pagherò', 'Mantém o som duro.'),
        lacuna('Domani ___ a Milano. (essere, io)', ['sarò', 'ero', 'sono stato'], 'sarò', 'Futuro irregular.'), lacuna('Noi ___ domenica. (partire)', ['partiremo', 'partivamo', 'partimmo'], 'partiremo', 'Futuro de noi.'), lacuna('Se ho tempo, ti ___. (chiamare, io)', ['chiamerò', 'chiamavo', 'chiamerei'], 'chiamerò', 'Principal no futuro.'), lacuna('Quando ___, ti scriverò. (arrivare, io)', ['arriverò', 'arrivavo', 'sono arrivato'], 'arriverò', 'Quando + futuro.'),
        ordem('Ordene: «Domani andrò al mare.»', ['Domani', 'andrò', 'al', 'mare.'], 'Domani andrò al mare.', 'Marcador + futuro.'), ordem('Ordene: «Forse verrò con voi.»', ['Forse', 'verrò', 'con', 'voi.'], 'Forse verrò con voi.', 'Incerteza + futuro.'),
        livre('Escreva em italiano: No ano que vem irei à Itália. Se tiver tempo, visitarei Roma e Florença.', 'L\'anno prossimo andrò in Italia. Se avrò tempo, visiterò Roma e Firenze.'),
        lacuna('Voi ___ tra due giorni. (partirão)', ['partirai', 'partirete', 'partiranno'], 'partirete', 'Com «voi», o futuro termina em «-ete».'),
        lacuna('Loro ___ a Roma l\'anno prossimo. (irão)', ['andranno', 'andrà', 'andremo'], 'andranno', 'O radical é «andr-» e a terminação de «loro» é «-anno».'),
        lacuna('Tu ___ più tempo domani. (terás)', ['avrei', 'avrà', 'avrai'], 'avrai', 'Futuro de «avere» com «tu»: «avrai».'),
        lacuna('Domani ___ bel tempo. (fará)', ['farà', 'fa', 'farò'], 'farà', 'Futuro de «fare» com «lui»: «farà».'),
        lacuna('Se avrò tempo, ti ___. (escreverei)', ['scrivo', 'scriverò', 'scrivarò'], 'scriverò', 'Futuro regular de «scrivere»: «scriverò».'),
        mc('Qual é o futuro de «fare» com «io»?', ['farò', 'farerò', 'fo'], 'farò', 'Radical irregular: «far-».'),
        mc('Qual é o futuro de «mangiare» com «noi»?', ['mangiaremo', 'mangiamo', 'mangeremo'], 'mangeremo', 'Em «-giare» o «i» cai antes do «e»: «mangerò, mangeremo».'),
        mc('O que significa «entro venerdì»?', ['depois de sexta', 'até sexta', 'em sexta'], 'até sexta', '«Entro» indica o prazo final.'),
        mc('Qual frase está correta?', ['Quando arrivavo, ti chiamerò.', 'Quando sono arrivando, ti chiamerò.', 'Quando arriverò, ti chiamerò.'], 'Quando arriverò, ti chiamerò.', 'Depois de «quando», sobre o futuro, usa-se o futuro.'),
        ordem('Ordene: «Il mese prossimo andrò a Firenze.»', ['Il', 'mese', 'prossimo', 'andrò', 'a', 'Firenze.'], 'Il mese prossimo andrò a Firenze.', 'Plano futuro com o radical irregular «andr-».'),
        ordem('Ordene: «Se avrò tempo, verrò con voi.»', ['Se', 'avrò', 'tempo,', 'verrò', 'con', 'voi.'], 'Se avrò tempo, verrò con voi.', 'Dois futuros irregulares: «avrò» e «verrò».'),
        livre('Escreva em italiano: Amanhã choverá e ficarei em casa.', 'Domani pioverà e resterò a casa.'),
        livre('Escreva em italiano: Na semana que vem terei férias e verei meus avós.', 'La settimana prossima avrò le vacanze e vedrò i miei nonni.'),
      ]),
      producao(5, 'Conte em um minuto o que você fará depois de terminar este curso, com cinco verbos no futuro.'),
    ]),
  ],
});
