import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 10, titulo: 'Preposições simples e articuladas', nivel: 'a1',
  objetivo: 'Usar as preposições simples (di, a, da, in, con, su, per, tra / fra), fundi-las ao artigo (al, nella, sul, dal, del...) e usar os pronomes depois de preposição («con me», «per te»).',
  nota: 'Você diz onde as coisas estão, de quem são, com quem você vai e para quem é. Próxima aula: cidade, lugares e direções.',
  sessoes: [
    sessao('S1', 'Di, a, da e in', [
      revisao(5, 'Retome a aula 9: diga em voz alta a hora de cinco momentos do dia e a data de hoje. Marque um encontro com «A che ora?».'),
      palavras(8, [
        ['di', 'di', 'de (posse, origem, matéria)', ''], ['a', 'a', 'a, em (cidade, hora)', ''], ['da', 'da', 'de (origem), desde, na casa de', ''], ['in', 'in', 'em (país, mês, lugar fechado, transporte)', ''], ['con', 'kon', 'com', ''], ['su', 'su', 'sobre, em cima de', ''], ['per', 'per', 'para, por', ''], ['tra / fra', 'tra / fra', 'entre, daqui a', ''],
      ]),
      gramatica(12, 'As quatro preposições mais importantes: di, a, da, in', 'PASSO 1: «di» indica posse, origem e matéria: «la casa di Marco» (a casa do Marco), «Sono di Roma» (sou de Roma), «un bicchiere di vino» (um copo de vinho), «parlare di» (falar de). PASSO 2: «a» indica cidade, hora e destino: «Abito a Roma», «Alle otto», e em expressões fixas: «a casa» (em casa), «a scuola» (na escola), «a letto» (na cama). PASSO 3: «da» indica origem e procedência: «Vengo da Roma» (venho de Roma); com pessoas, indica a casa ou o consultório delas: «Vado da Marco» (vou à casa do Marco), «Sono dal dottore» (estou no médico); e, com tempo, «desde» ou «há»: «Abito qui da due anni» (moro aqui há dois anos). PASSO 4: «in» indica país, região, mês, estação, meios de transporte e lugares fechados: «in Italia», «in luglio», «in estate», «in treno», «in macchina», «in ufficio», «in banca». Atenção: «a piedi» (a pé) é uma exceção. PASSO 5: contraste de lugar: «Sono a Roma» (cidade), mas «sono in Italia» (país); «sono a casa» (em casa), mas «sono in ufficio» (no escritório). PASSO 6: o português «em» corresponde a «a», «in» e «su» conforme o contexto; o português «de» corresponde a «di» ou «da». Aprenda em blocos, com exemplos, não palavra por palavra.', {
        tag: 'Preposições',
        comparacao: 'o português usa «em» para quase tudo (em Roma, em casa, no trem, na Itália), mas o italiano divide: cidade e hora usam «a»; país, mês e transporte usam «in»; sobre uma superfície, «su». E o português «de» se divide em «di» (posse, matéria) e «da» (origem, procedência).',
        tabela: [
          { preposicao: 'di', uso: 'posse, origem, matéria', exemplo: 'La casa di Marco. Sono di Roma.' }, { preposicao: 'a', uso: 'cidade, hora, a casa, a scuola', exemplo: 'Abito a Roma. Alle otto.' }, { preposicao: 'da', uso: 'origem; casa de alguém; desde', exemplo: 'Vengo da Roma. Vado da Marco.' }, { preposicao: 'in', uso: 'país, mês, transporte, lugar fechado', exemplo: 'Sono in Italia. Viaggio in treno.' },
        ],
        erros: [['Abito in Roma.', 'Abito a Roma.', 'Cidade pede «a».'], ['Sono a Italia.', 'Sono in Italia.', 'País pede «in».'], ['Lavoro a ufficio.', 'Lavoro in ufficio.', 'Lugar fechado pede «in».'], ['Il libro è da Marco.', 'Il libro è di Marco.', 'Posse pede «di»; «da Marco» é «na casa do Marco».']],
      }),
      producao(5, 'Diga em voz alta seis frases: onde você mora (a / in), de onde você é (di), onde trabalha ou estuda (in), como viaja (in) e a casa de alguém (da).'),
    ]),
    sessao('S2', 'Preposições articuladas', [
      revisao(4, 'Diga quando se usa «a», «in», «di» e «da» com um exemplo de cada. Quais são as suas frases mais fáceis?'),
      palavras(6, [
        ['al bar', 'al bar', 'no bar', ''], ['alla stazione', 'alla statsióne', 'na estação', ''], ['nel negozio', 'nel negótsio', 'na loja', ''], ['sul tavolo', 'sul távolo', 'em cima da mesa', ''], ['dal dottore', 'dal dottôre', 'no médico', ''], ['del professore', 'del professôre', 'do professor', ''],
      ]),
      gramatica(12, 'Preposição + artigo: al, nella, sul, dal, del', 'PASSO 1: quando «di», «a», «da», «in» e «su» vêm antes de um artigo definido, as duas palavras se fundem em uma: «a + il» vira «al», «in + la» vira «nella», «su + il» vira «sul», «da + il» vira «dal», «di + il» vira «del». PASSO 2: a tabela mostra todas as formas. Memorize por coluna: cada preposição fica com o mesmo padrão. PASSO 3: as preposições «con», «per», «tra / fra» não se fundem com o artigo na escrita comum: «con il», «per la», «tra gli amici». PASSO 4: o artigo é obrigatório depois dessas preposições quando o substantivo é determinado: «Sono al bar», «Vado alla stazione», «Il libro è sul tavolo», «Il libro del professore». PASSO 5: sem artigo, quando o substantivo é geral, nome de cidade ou de país no singular: «a Roma», «in Italia», «in ufficio», «a casa». PASSO 6: com pessoas, não há artigo: «da Marco», «a Giulia». Mas com o título: «dal dottore», «dalla professoressa». PASSO 7: pronúncia: nas formas com «ll», como «alla», «nella», «sulla», a consoante dobrada é longa. A forma «al» só tem um «l», curto. PASSO 8: «del», «dello», «della» são as mesmas formas do partitivo (aula 8): o sentido é «de + o», «do», «da», ou «um pouco de».', {
        tag: 'Preposições',
        comparacao: 'o português também funde preposição e artigo («em + o = no», «de + a = da», «a + o = ao»). A lógica é a mesma. Em italiano são mais formas, porque o artigo tem mais variações (il, lo, l\', la, i, gli, le).',
        tabela: [
          { artigo: 'il', di: 'del', a: 'al', da: 'dal', in: 'nel', su: 'sul' }, { artigo: 'lo', di: 'dello', a: 'allo', da: 'dallo', in: 'nello', su: 'sullo' }, { artigo: 'l\'', di: 'dell\'', a: 'all\'', da: 'dall\'', in: 'nell\'', su: 'sull\'' }, { artigo: 'la', di: 'della', a: 'alla', da: 'dalla', in: 'nella', su: 'sulla' },
          { artigo: 'i', di: 'dei', a: 'ai', da: 'dai', in: 'nei', su: 'sui' }, { artigo: 'gli', di: 'degli', a: 'agli', da: 'dagli', in: 'negli', su: 'sugli' }, { artigo: 'le', di: 'delle', a: 'alle', da: 'dalle', in: 'nelle', su: 'sulle' },
        ],
        erros: [['Sono a il bar.', 'Sono al bar.', '«A» + «il» sempre se funde em «al».'], ['Il libro è su il tavolo.', 'Il libro è sul tavolo.', '«Su» + «il» vira «sul».'], ['Sono in la stazione.', 'Sono nella stazione.', '«In» + «la» vira «nella».'], ['Il libro di il professore.', 'Il libro del professore.', '«Di» + «il» vira «del».']],
      }),
      dialogo(8, 'Dov\'è il libro? / Onde está o livro?', 'Marco procura o livro de italiano.', [
        ['Marco', 'Giulia, dov\'è il mio libro di italiano?', 'Giulia, onde está o meu livro de italiano?'], ['Giulia', 'È sul tavolo, vicino alla finestra.', 'Está em cima da mesa, perto da janela.'], ['Marco', 'Non c\'è. Guarda, non c\'è sul tavolo.', 'Não está. Olhe, não está na mesa.'], ['Giulia', 'Allora è nello zaino, con i quaderni.', 'Então está na mochila, com os cadernos.'], ['Marco', 'Ecco, è qui! Grazie, Giulia.', 'Aqui está! Obrigado, Giulia.'], ['Giulia', 'Prego! Ora c\'è la lezione.', 'De nada! Agora tem a aula.'],
      ]),
    ]),
    sessao('S3', 'Con, per, tra e su, e os pronomes depois de preposição', [
      revisao(4, 'Diga em voz alta cinco frases com preposições articuladas: duas com «al», «alla», uma com «nel», uma com «sul» e uma com «dal».'),
      palavras(5, [
        ['con te', 'kon te', 'com você', ''], ['per te', 'per te', 'para você', ''], ['con me', 'kon me', 'comigo', ''], ['tra due ore', 'tra dúe ôre', 'daqui a duas horas', ''], ['insieme', 'insiéme', 'juntos', ''],
      ]),
      gramatica(8, 'Con, per, tra / fra e su', 'PASSO 1: «con» é «com»: «con Marco», «con il latte», «con me» (comigo), «con te» (contigo). PASSO 2: «per» é «para» (destinatário ou finalidade) e também «por» (motivo, duração): «Un caffè per me», «Un regalo per te», «Grazie per tutto», «Studio per due ore». Com infinitivo: «per mangiare». PASSO 3: depois de preposição, os pronomes mudam: «me, te, lui, lei, Lei, noi, voi, loro»: «con me», «per te», «da lui», «di noi». Nunca «con io» ou «per tu». PASSO 4: «tra» e «fra» são equivalentes e significam «entre»: «tra amici», e também «daqui a», para o futuro: «Tra due ore parto» (parto daqui a duas horas), «Fra tre giorni». Use um ou outro; prefira o que soe melhor. PASSO 5: «su» é «sobre» ou «em cima de»: «Il libro è sul tavolo». Também significa «sobre» um assunto: «un libro su Roma» (um livro sobre Roma). PASSO 6: «insieme» é um advérbio, sozinho ou com «a»: «Studiamo insieme», «insieme a Marco».', {
        tag: 'Preposições',
        comparacao: 'o português tem «comigo» e «contigo» (formas fundidas); em italiano, são duas palavras: «con me» e «con te». E depois de preposição o português também troca «eu» por «mim» («para mim»); o italiano troca por «me».',
        tabela: [
          { preposicao: 'con', significado: 'com', exemplo: 'Studio con te.' }, { preposicao: 'per', significado: 'para, por', exemplo: 'Un caffè per me.' }, { preposicao: 'tra / fra', significado: 'entre; daqui a', exemplo: 'Tra due ore parto.' }, { preposicao: 'su', significado: 'sobre, em cima de', exemplo: 'Un libro su Roma.' },
        ],
        erros: [['Un caffè per io.', 'Un caffè per me.', 'Depois de preposição, usa-se «me».'], ['Parlo con tu.', 'Parlo con te.', 'Depois de preposição, usa-se «te».'], ['Un libro sopra Roma.', 'Un libro su Roma.', 'Para o assunto, use «su».'], ['Grazie a tutto.', 'Grazie per tutto.', 'O motivo de agradecer pede «per».']],
      }),
      texto(8, 'Una giornata di Giulia', 'Giulia è in ufficio. Lavora con due amici, Luca e Sara. All\'una mangia un panino sul tavolo vicino alla finestra. Tra due ore ha lezione di italiano con la professoressa Bianchi, nell\'aula tre. Dopo prende un caffè con Marco e ha un regalo per lui: un libro su Roma.', 'Giulia está no escritório. Trabalha com dois amigos, Luca e Sara. À uma hora come um sanduíche na mesa perto da janela. Daqui a duas horas tem aula de italiano com a professora Bianchi, na sala três. Depois toma um café com Marco e tem um presente para ele: um livro sobre Roma.', [['Con chi lavora Giulia?', 'Lavora con Luca e Sara.'], ['Dove mangia il panino?', 'Sul tavolo vicino alla finestra.'], ['Quando ha lezione?', 'Tra due ore.'], ['Che regalo ha per Marco?', 'Un libro su Roma.']]),
      producao(5, 'Descreva em voz alta onde estão cinco objetos do seu quarto ou da sua mesa: «Il libro è sul…, il telefono è nel…, la penna è vicino a…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 10', [
      revisao(5, 'Diga em voz alta onde você está agora, com quem, para quem é o próximo café que vai tomar e quando você sai de casa.'),
      exercicios(20, [
        ouvir('Sono al bar', ['Sono al bar', 'Sono nel bar', 'Sono sul bar'], 'Sono al bar', 'Ouça «al» (a + il).'), ouvir('Il libro è sul tavolo', ['Il libro è sul tavolo', 'Il libro è nel tavolo', 'Il libro è dal tavolo'], 'Il libro è sul tavolo', 'Ouça «sul».'), ouvir('Un caffè per me', ['Un caffè per me', 'Un caffè con me', 'Un caffè da me'], 'Un caffè per me', 'Ouça «per me».'),
        ditado('Sono nella stazione', 'Escreva: Sono nella stazione.'), ditado('Studio con te', 'Escreva: Studio con te.'), ditado('Il libro del professore', 'Escreva: Il libro del professore.'),
        mc('Qual forma está certa?', ['alla stazione', 'a la stazione', 'alle stazione'], 'alla stazione', '«A» + «la» vira «alla».'), mc('Qual forma está certa?', ['negli uffici', 'nei uffici', 'nelli uffici'], 'negli uffici', '«In» + «gli» vira «negli».'), mc('Como se diz «comigo»?', ['con me', 'con io', 'con mi'], 'con me', 'Depois de preposição, usa-se «me».'), mc('Qual preposição acompanha «Italia»?', ['in', 'a', 'al'], 'in', 'País pede «in».'),
        lacuna('Il libro è ___ tavolo. (em cima da mesa)', ['sul', 'su il', 'nel'], 'sul', '«Su» + «il» vira «sul».'), lacuna('Vado ___ dottore. (ao médico)', ['dal', 'al', 'del'], 'dal', 'Com pessoas, «da» + artigo.'), lacuna('Un regalo ___ te. (para)', ['per', 'con', 'tra'], 'per', '«Per» indica o destinatário.'), lacuna('Tra due ore ___ . (parto)', ['parto', 'partiamo', 'parti'], 'parto', '«Io parto».'),
        ordem('Ordene: «Il libro è sul tavolo vicino alla finestra.»', ['Il', 'libro', 'è', 'sul', 'tavolo', 'vicino', 'alla', 'finestra'], 'Il libro è sul tavolo vicino alla finestra.', 'Duas preposições articuladas.'), ordem('Ordene: «Studio con te al bar.»', ['Studio', 'con', 'te', 'al', 'bar'], 'Studio con te al bar.', 'Com «te» e «al».'),
        livre('Escreva em italiano: Estou no escritório com dois amigos. O café é para você.', 'Sono in ufficio con due amici. Il caffè è per te.'),
      ]),
      producao(5, 'Conte em voz alta uma cena curta: onde você está, com quem, o que há em cima da mesa e para quem é o presente.'),
    ]),
  ],
});
