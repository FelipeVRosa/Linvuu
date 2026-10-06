import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 71, titulo: 'Futur II, suposições e partículas modais', nivel: 'b2',
  objetivo: 'Formar o Futur II (werden + Partizip II + haben/sein) para fatos concluídos no futuro e suposições sobre o passado, e entender as partículas modais mais comuns (doch, mal, ja, eben, halt, denn, eigentlich, wohl, schon, aber, ruhig).',
  nota: 'Você faz suposições e entende o tom das partículas. Próxima aula: o discurso indireto.',
  sessoes: [
    sessao('S1', 'O Futur II', [
      revisao(5, 'Escreva 6 frases com adjetivos substantivados.'),
      palavras(8, [
        ['bis dahin', 'bis dá-hin', 'até lá', 'by then'], ['spätestens', 'xpé-tes-tens', 'o mais tardar', 'at the latest'], ['vermutlich', 'fer-múrt-liç', 'presumivelmente', 'presumably'], ['sicherlich', 'zí-çer-liç', 'certamente', 'surely'],
        ['vermuten', 'fer-mú-ten', 'supor', 'to assume'], ['annehmen', 'án-né-men', 'assumir, supor', 'to assume'], ['erledigen', 'er-lé-di-guen', 'resolver, concluir', 'to take care of'], ['schaffen', 'xá-fen', 'conseguir, dar conta', 'to manage'],
      ]),
      gramatica(14, 'O Futur II, passo a passo', 'PASSO 1: o FUTUR II usa «WERDEN» (conjugado) + PARTIZIP II + «HABEN» ou «SEIN» (infinitivo, no fim): «Er wird das Buch gelesen haben», «Er wird angekommen sein.» PASSO 2: USO 1: um fato que estará CONCLUÍDO em um momento do futuro: «Bis morgen werde ich es geschafft haben» (até amanhã terei conseguido). PASSO 3: USO 2: uma SUPOSIÇÃO sobre o PASSADO, com «wohl», «wahrscheinlich», «vermutlich»: «Er wird wohl krank gewesen sein» (ele deve ter estado doente). PASSO 4: a escolha entre «haben» e «sein» é a do Perfekt (movimento e mudança de estado → «sein»). PASSO 5: na prática, o Futur II aparece pouco na fala; a suposição é seu uso mais comum. PASSO 6: compare: Futur I («Er wird kommen»: vai vir) × Futur II («Er wird gekommen sein»: terá vindo, ou deve ter vindo).', {
        tag: 'Verbos',
        comparacao: 'o português tem o futuro do pretérito composto («terá feito») e as suposições sobre o passado («ele deve ter feito»). O alemão usa o Futur II: werden + Partizip II + haben/sein.',
        tabela: [
          { uso: 'concluído no futuro', frase: 'Bis morgen werde ich das Buch gelesen haben.' }, { uso: 'concluído no futuro (sein)', frase: 'Bis zehn Uhr wird er angekommen sein.' }, { uso: 'suposição sobre o passado', frase: 'Er wird wohl krank gewesen sein.' }, { uso: 'suposição sobre o passado', frase: 'Sie wird den Zug verpasst haben.' }, { uso: 'Futur I × Futur II', frase: 'Er wird kommen. × Er wird gekommen sein.' },
        ],
        erros: [['Er wird das Buch gelesen.', 'Er wird das Buch gelesen haben.', 'Futur II: Partizip II + haben.'], ['Er wird angekommen haben.', 'Er wird angekommen sein.', '«ankommen» usa «sein».'], ['Er hat wohl krank gewesen.', 'Er wird wohl krank gewesen sein.', 'Suposição sobre o passado: werden + Partizip II + sein.']],
      }),
      producao(3, 'Faça 6 frases de Futur II em voz alta: «Bis morgen werde ich … gemacht haben. Er wird wohl … gewesen sein.»'),
    ]),
    sessao('S2', 'Partículas modais 1: doch, mal, ja, eben, halt', [
      revisao(5, 'Escreva 6 frases no Futur II, três de suposição.'),
      palavras(8, [
        ['doch', 'dorr', 'mas (reforço), então', 'but, then'], ['mal', 'mal', '(suaviza o pedido) um momento', 'just'], ['ja', 'ia', '(lembra algo conhecido)', 'you know'], ['eben', 'é-ben', 'é assim mesmo', 'just'],
        ['halt', 'halt', 'é assim mesmo (coloquial)', 'simply'], ['die Partikel', 'di partí-kel', 'partícula', 'particle'], ['der Ton', 'der tôn', 'tom', 'tone'], ['die Betonung', 'di be-tô-nung', 'ênfase', 'stress'],
      ]),
      gramatica(12, 'As partículas modais, passo a passo', 'PASSO 1: as PARTÍCULAS MODAIS são palavrinhas curtas que NÃO têm tradução fixa: elas dão um TOM à frase (amigável, insistente, surpreso). Elas ficam no meio da frase, depois do verbo e do sujeito. PASSO 2: «DOCH» reforça um convite ou uma evidência: «Komm doch mit!» (vem logo!), «Das ist doch klar!» (mas isso é óbvio!). PASSO 3: «MAL» suaviza um pedido: «Komm mal her!» (vem cá um instante). PASSO 4: «JA» lembra algo que o outro já sabe: «Du hast ja gestern gearbeitet» (você trabalhou ontem, lembra?). PASSO 5: «EBEN» e «HALT» (mais coloquial) mostram que é assim mesmo: «Das ist eben so», «Das ist halt so.» PASSO 6: a escolha depende do tom: use-as para soar natural, mas não as traduza palavra por palavra.', {
        tag: 'Frase',
        tabela: [
          { particula: 'doch', efeito: 'reforço, convite', frase: 'Komm doch mit! / Das ist doch klar!' }, { particula: 'mal', efeito: 'suaviza o pedido', frase: 'Komm mal her! / Zeig mal!' }, { particula: 'ja', efeito: 'lembra algo conhecido', frase: 'Du hast ja gestern lange gearbeitet.' }, { particula: 'eben / halt', efeito: 'é assim mesmo', frase: 'Das ist eben so. / Das ist halt so.' },
        ],
        erros: [['Komm doch mit! (traduzido: «venha, mas»)', 'Komm doch mit! = vem com a gente!', 'Não traduza «doch» palavra por palavra.'], ['Komm her mal!', 'Komm mal her!', '«mal» fica antes do prefixo/complemento no fim.']],
      }),
      producao(5, 'Diga 6 frases com partículas: «Komm doch mit! Zeig mal! Du weißt ja … Das ist eben so.»'),
    ]),
    sessao('S3', 'Partículas modais 2: denn, eigentlich, wohl, schon, aber, ruhig', [
      revisao(5, 'Escreva 6 frases com «doch», «mal», «ja», «eben» e «halt».'),
      gramatica(10, 'Mais partículas, passo a passo', 'PASSO 1: «DENN» suaviza uma pergunta: «Wie geht es dir denn?» (como você está, afinal?). PASSO 2: «EIGENTLICH» significa «na verdade»: «Was machst du eigentlich?» PASSO 3: «WOHL» expressa suposição: «Er ist wohl krank.» PASSO 4: «SCHON» tranquiliza: «Das wird schon klappen» (vai dar certo, não se preocupe). PASSO 5: «ABER» marca surpresa: «Das ist aber nett!» (que gentil!). PASSO 6: «RUHIG» dá permissão tranquila: «Du kannst ruhig früher gehen.» PASSO 7: «VIELLEICHT» em exclamação: «Das war vielleicht ein Tag!» (que dia aquele!). PASSO 8: use as partículas na fala, não na escrita formal.', {
        tag: 'Frase',
        tabela: [
          { particula: 'denn', efeito: 'pergunta mais amigável', frase: 'Wie geht es dir denn?' }, { particula: 'eigentlich', efeito: 'na verdade', frase: 'Was machst du eigentlich beruflich?' }, { particula: 'wohl', efeito: 'suposição', frase: 'Er ist wohl krank.' }, { particula: 'schon', efeito: 'tranquiliza', frase: 'Das wird schon klappen.' },
          { particula: 'aber', efeito: 'surpresa', frase: 'Das ist aber nett!' }, { particula: 'ruhig', efeito: 'permissão tranquila', frase: 'Du kannst ruhig früher gehen.' }, { particula: 'vielleicht', efeito: 'exclamação', frase: 'Das war vielleicht ein Tag!' },
        ],
      }),
      dialogo(10, 'Ein Gespräch unter Freunden / Uma conversa entre amigos', 'Dois amigos conversam de forma descontraída.', [
        ['Lea', 'Wie geht es dir denn?', 'Como você está, afinal?'], ['Paul', 'Eigentlich ganz gut. Ich bin nur ein bisschen müde.', 'Na verdade bem. Só estou um pouco cansado.'], ['Lea', 'Du hast ja gestern lange gearbeitet.', 'Você trabalhou muito ontem, lembra?'],
        ['Paul', 'Ja, das ist halt so im Moment.', 'Sim, é assim mesmo no momento.'], ['Lea', 'Komm doch mal mit uns ins Kino!', 'Venha ao cinema conosco um dia desses!'], ['Paul', 'Das wird schon klappen, glaube ich.', 'Vai dar certo, acho.'],
        ['Lea', 'Du kannst ruhig früher gehen, wenn du müde bist.', 'Você pode ir mais cedo sem problema, se estiver cansado.'], ['Paul', 'Das ist aber nett von dir!', 'Que gentil da sua parte!'],
      ]),
      producao(5, 'Converse em voz alta com um amigo de forma descontraída, usando «denn», «eigentlich», «wohl», «schon», «aber» e «ruhig».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um diálogo de 8 falas com partículas modais.'),
      exercicios(20, [
        lacuna('Er ___ bis zehn Uhr angekommen sein. (werden)', ['wird', 'ist', 'wurde'], 'wird', 'Futur II: werden + Partizip II + sein.'), lacuna('Bis morgen werde ich das Buch gelesen ___.', ['haben', 'sein', 'werden'], 'haben', 'lesen usa haben.'), lacuna('Er wird wohl krank gewesen ___.', ['sein', 'haben', 'werden'], 'sein', 'Suposição sobre o passado.'),
        lacuna('Komm ___ mit! (reforço)', ['doch', 'mal', 'ja'], 'doch', 'Convite.'), lacuna('Komm ___ her! (suaviza)', ['mal', 'doch', 'wohl'], 'mal', 'Pedido suave.'), lacuna('Wie geht es dir ___? (amigável)', ['denn', 'doch', 'wohl'], 'denn', 'Pergunta amigável.'),
        lacuna('Das wird ___ klappen. (tranquiliza)', ['schon', 'wohl', 'eigentlich'], 'schon', 'Tranquiliza.'), lacuna('Das ist ___ nett! (surpresa)', ['aber', 'denn', 'doch'], 'aber', 'Surpresa.'), mc('As partículas modais:', ['dão um tom à frase e não têm tradução fixa', 'sempre significam «mas»', 'só se usam na escrita'], 'dão um tom à frase e não têm tradução fixa', 'Tom.'),
        mc('O Futur II forma-se com:', ['werden + Partizip II + haben/sein', 'werden + infinitivo', 'wurde + Partizip II'], 'werden + Partizip II + haben/sein', 'Fato concluído ou suposição.'), mc('«Er wird wohl krank gewesen sein» expressa:', ['uma suposição sobre o passado', 'um fato certo', 'uma promessa'], 'uma suposição sobre o passado', 'Deve ter estado doente.'), ordem('Ordene: «Vem comigo, vai!»', ['Komm', 'doch', 'mit'], 'Komm doch mit!', 'doch reforça o convite.'),
        ouvir('Das wird schon klappen', ['Das wird schon klappen', 'Das wird nicht klappen', 'Das hat geklappt'], 'Das wird schon klappen', 'schon tranquiliza.'), ditado('Du kannst ruhig früher gehen', 'ruhig = sem problema.'), livre('Escreva 5 frases: um Futur II de fato concluído, uma suposição e três com partículas modais.', 'Bis morgen werde ich es geschafft haben. Er wird wohl krank gewesen sein. Komm doch mit! Das wird schon klappen. Das ist aber nett!'),
      ]),
      producao(5, 'Grave-se conversando de forma natural, com partículas modais e uma suposição.'),
    ]),
  ],
});
