import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 25, titulo: 'Ci e ne', nivel: 'a2',
  objetivo: 'Usar «ci» para lugar e para «nisso», usar «ne» para quantidade e para «disso», e reconhecer expressões frequentes como ci vuole, ci metto, che ne pensi e ne ho abbastanza.',
  nota: 'Você evita repetir lugares, quantidades e assuntos com ci e ne. Próxima aula: comparativos e superlativos.',
  sessoes: [
    sessao('S1', 'Ci: lugar e assunto', [
      revisao(5, 'Responda com pronome: «Hai visto Anna? Scrivi a Luca? Conosci Marco?»'),
      palavras(8, [
        ['andarci', 'andártchi', 'ir lá', ''], ['starci', 'stártchi', 'ficar lá; topar', ''], ['pensarci', 'pensártchi', 'pensar nisso', ''], ['crederci', 'crédertchi', 'acreditar nisso', ''], ['riuscirci', 'riuxírtchi', 'conseguir', ''], ['tenerci', 'tenértchi', 'dar valor a', ''], ['c\'è, ci sono', 'tchè, tchi sóno', 'há, tem', ''], ['lì, là, qui', 'li, la, kuí', 'ali, lá, aqui', ''],
      ]),
      gramatica(12, 'Ci: lugar e «a isso»', 'PASSO 1: «ci» substitui um lugar já mencionado, com os verbos de lugar (andare, stare, essere, venire, tornare): «Vai a Roma? Sì, ci vado domani.» PASSO 2: «ci» fica antes do verbo conjugado: «Ci vado», «Non ci vado». PASSO 3: com o infinitivo, grudado: «Voglio andarci», ou antes do modal: «Ci voglio andare». PASSO 4: no passato prossimo, antes do auxiliar: «Ci sono stato ieri», «Non ci siamo mai andati». O particípio de «essere» concorda com o sujeito: «Ci sono stata». PASSO 5: «ci» também substitui «a isso» ou «em algo» depois de verbos com «a» ou «in»: pensarci («Ci penso»), crederci («Non ci credo»), riuscirci («Ci riesco»), tenerci («Ci tengo»). PASSO 6: «c\'è» e «ci sono» (há) vêm do mesmo «ci»: «C\'è un bar qui». PASSO 7: «ci» também aparece em verbos pronominais: «Ci vuole», «Ci metto» (veja a S3 desta aula). PASSO 8: não confunda o «ci» de lugar com o «ci» pronome de «nós» (aula 23 e 24): «Ci vedono» (veem-nos) e «Ci vado» (vou lá).', {
        tag: 'Pronomes',
        comparacao: 'o português substitui o lugar por «lá», «aí» ou «ali», e muitas vezes repete o lugar: «vou lá amanhã». O italiano tem uma partícula curta antes do verbo: «ci vado». O brasileiro tende a esquecer o «ci» e repetir: «vado a Roma domani, ci vado», que soa pesado. Outro contraste: «não acredito nisso» é «non ci credo», sem o «nisso».',
        tabela: [
          { uso: 'lugar', frase: 'Vai a Roma?', resposta: 'Sì, ci vado domani.' }, { uso: 'lugar, passado', frase: 'Sei stato a Napoli?', resposta: 'Sì, ci sono stato due volte.' }, { uso: 'pensar', frase: 'Pensi al viaggio?', resposta: 'Sì, ci penso spesso.' }, { uso: 'acreditar', frase: 'Credi a questa storia?', resposta: 'No, non ci credo.' }, { uso: 'conseguir', frase: 'Riesci a salire?', resposta: 'Sì, ci riesco.' }, { uso: 'infinitivo', frase: 'Vuoi andare in centro?', resposta: 'Sì, voglio andarci.' },
        ],
        erros: [['Vado ci domani.', 'Ci vado domani.', 'O «ci» fica antes do verbo conjugado.'], ['Ho andato a Roma e ci ho andato.', 'Sono andato a Roma e ci sono andato.', 'O auxiliar é «essere» e o «ci» vai antes.'], ['Non credo ci.', 'Non ci credo.', 'Pronome antes do verbo.'], ['Penso a esso.', 'Ci penso.', 'Em vez de «a esso», use o «ci».']],
      }),
      producao(5, 'Responda em voz alta com «ci»: «Vai spesso al cinema? Sei stato in Italia? Pensi alle vacanze? Credi agli oroscopi?»'),
    ]),
    sessao('S2', 'Ne: quantidade e assunto', [
      revisao(4, 'Diga em voz alta três frases com «ci» de lugar e duas com «ci» de «nisso».'),
      palavras(6, [
        ['un po\' di', 'um pó di', 'um pouco de', ''], ['abbastanza', 'abbastántsa', 'bastante', ''], ['troppo', 'tróppo', 'demais', ''], ['parlarne', 'parlárne', 'falar disso', ''], ['pensarne', 'pensárne', 'ter opinião sobre', ''], ['averne abbastanza', 'avérne abbastántsa', 'estar farto', ''],
      ]),
      gramatica(12, 'Ne: «dele», «disso», «de nós»', 'PASSO 1: «ne» significa «de isso», «dele», «deles», «dali» e substitui a coisa de que se fala ou a parte de um conjunto. PASSO 2: quantidade: «Quanti caffè bevi? Ne bevo tre» (bebo três deles). O número ou a palavra de quantidade fica NA frase: «ne ho due», «ne voglio un po\'», «ne mangio tanti». PASSO 3: sem quantidade, «ne» aparece na negação: «Non ne voglio» (não quero), «Non ne ho». PASSO 4: assunto, com verbos que levam «di»: parlare di, pensare di, avere bisogno di, ridere di, dubitare di. «Parli di lavoro? Sì, ne parlo spesso.» PASSO 5: pergunta de opinião muito usada: «Che ne pensi?» e «Che ne dici?» (o que acha disso?): «Andiamo al mare. Che ne dici?» PASSO 6: no passato prossimo, antes do auxiliar, com concordância do particípio ao objeto quantificado: «Quante pizze hai mangiato? Ne ho mangiate due». PASSO 7: com infinitivo, grudado: «Posso prenderne uno?» PASSO 8: «ne» também pode vir de lugar (de lá), em registro mais formal: «Ne esco ora» (saio de lá agora); no dia a dia, usa-se «Ne» para quantidade e assunto.', {
        tag: 'Pronomes',
        comparacao: 'o português não tem esse pronome. Dizemos «quantos você bebe? Bebo três», sem nada que corresponda ao «de eles». O italiano exige o «ne» sempre que a coisa não aparece, e o número fica solto: «ne bevo tre». O erro típico do brasileiro é dizer «bevo tre» sozinho, que fica incompleto. Cuidado também com a concordância no passato prossimo: «ne ho mangiate due», e não «ne ho mangiato due» (comum na fala, mas a norma padrão concorda).',
        tabela: [
          { uso: 'quantidade', pergunta: 'Quanti caffè bevi?', resposta: 'Ne bevo tre.' }, { uso: 'quantidade, passado', pergunta: 'Quante mele hai comprato?', resposta: 'Ne ho comprate cinque.' }, { uso: 'um pouco', pergunta: 'Vuoi del latte?', resposta: 'Sì, ne voglio un po\'.' }, { uso: 'nenhum', pergunta: 'Hai fratelli?', resposta: 'No, non ne ho.' }, { uso: 'assunto', pergunta: 'Parlate del lavoro?', resposta: 'Sì, ne parliamo.' }, { uso: 'opinião', pergunta: 'Andiamo al mare?', resposta: 'Che ne dici?' },
        ],
        erros: [['Bevo tre.', 'Ne bevo tre.', 'Sem o «ne», a quantidade fica sem referência.'], ['Ne ho comprato cinque mele.', 'Ne ho comprate cinque.', 'O particípio concorda com o objeto quantificado, e a coisa não se repete.'], ['Non voglio ne.', 'Non ne voglio.', '«Ne» vem antes do verbo conjugado.'], ['Parlo ne spesso.', 'Ne parlo spesso.', 'Pronome antes do verbo.']],
      }),
      producao(8, 'Responda em voz alta com «ne»: «Quanti caffè bevi al giorno? Quanti fratelli hai? Quanti libri hai letto quest\'anno? Parli spesso di sport?»'),
    ]),
    sessao('S3', 'Ci vuole, ci metto, c\'è', [
      revisao(4, 'Diga em voz alta quando usar «ci» e quando usar «ne» em duas frases cada.'),
      palavras(5, [
        ['ci vuole', 'tchi vuóle', 'é preciso (singular)', ''], ['ci vogliono', 'tchi vólhono', 'são necessários', ''], ['ci metto', 'tchi métto', 'eu levo (tempo)', ''], ['ce l\'ho', 'tche lô', 'eu o tenho (expressão)', ''], ['ne ho abbastanza', 'ne ó abbastántsa', 'estou farto', ''],
      ]),
      gramatica(8, 'Expressões fixas com ci e ne', 'PASSO 1: «ci vuole» (singular) e «ci vogliono» (plural) dizem o que é necessário, em tempo ou quantidade: «Ci vuole un\'ora», «Ci vogliono tre ore». PASSO 2: com quem faz algo, usa-se «metterci» (levar tempo): «Quanto ci metti?» — «Ci metto venti minuti». O tempo exprime um período. PASSO 3: não confunda: «ci vuole» é geral e vale para todos; «ci metto» fala de uma pessoa. PASSO 4: «ce l\'ho» e «ce l\'hai?» aparecem muito na fala (eu tenho, você tem?): «Hai una penna? — Sì, ce l\'ho.» Os pronomes combinados são a aula 41. Por ora, aprenda a expressão como bloco. PASSO 5: «Non ce la faccio» (não aguento, não consigo) e «Ce la faccio» (consigo, dou conta) são expressões prontas. PASSO 6: «Ne ho abbastanza» (estou farto), «Che ne so?» (sei lá!), «Ne vale la pena» (vale a pena): três blocos úteis. PASSO 7: «Ci sei?» (você está aí? Entendeu?), «Ci siamo» (chegamos; estamos lá), «Non c\'è problema». PASSO 8: dar atenção à diferença entre «ci» (lugar, assunto) e «ce» (quando o «ci» vem antes de «la», «lo», «li», «le», «ne»).', {
        tag: 'Pronomes',
        comparacao: 'em português, «quanto tempo leva?» e «quanto tempo você leva?» têm o mesmo verbo («levar»). O italiano separa: «Quanto ci vuole?» pergunta o tempo em geral, «Quanto ci metti?» pergunta quanto você mesmo gasta. As frases com «ce la faccio» e «ce l\'ho» não se traduzem palavra por palavra; trate-as como blocos.',
        tabela: [
          { expressao: 'Ci vuole un\'ora.', sentido: 'É preciso uma hora.', uso: 'tempo geral' }, { expressao: 'Ci vogliono tre uova.', sentido: 'São precisos três ovos.', uso: 'quantidade plural' }, { expressao: 'Ci metto dieci minuti.', sentido: 'Levo dez minutos.', uso: 'tempo de uma pessoa' }, { expressao: 'Ce la faccio.', sentido: 'Dou conta.', uso: 'expressão pronta' }, { expressao: 'Ne ho abbastanza.', sentido: 'Estou farto.', uso: 'expressão pronta' }, { expressao: 'Che ne so?', sentido: 'Sei lá!', uso: 'expressão pronta' },
        ],
        erros: [['Ci voglio un\'ora per arrivare.', 'Ci vuole un\'ora per arrivare.', '«Ci vuole» é impessoal.'], ['Ci vuole tre ore.', 'Ci vogliono tre ore.', 'Plural pede «vogliono».'], ['Quanto ci vuoi per arrivare?', 'Quanto ci metti per arrivare?', 'Tempo de uma pessoa: metterci.'], ['Non la faccio.', 'Non ce la faccio.', 'A expressão leva «ce la» como bloco.']],
      }),
      dialogo(8, 'In viaggio / Em viagem', 'Fabio e Paola vão de carro a Bologna.', [
        ['Paola', 'Fabio, quanto ci vuole per arrivare a Bologna?', 'Fabio, quanto tempo é preciso para chegar a Bolonha?'], ['Fabio', 'In macchina ci vogliono circa due ore. Tu ci sei mai stata?', 'De carro são necessárias cerca de duas horas. Você já esteve lá?'], ['Paola', 'Sì, ci sono stata due volte per lavoro. Ne ho bei ricordi.', 'Sim, estive lá duas vezes a trabalho. Tenho boas lembranças.'], ['Fabio', 'Allora ci fermiamo per il pranzo. Che ne dici?', 'Então paramos lá para o almoço. O que acha?'], ['Paola', 'Perfetto, ci sto. Hai le mappe? Io non ce le ho.', 'Perfeito, topo. Você tem os mapas? Eu não os tenho.'], ['Fabio', 'Sì, ce le ho nel telefono. Non ci mettiamo molto.', 'Sim, tenho no celular. Não levamos muito tempo.'],
      ]),
      producao(5, 'Diga em voz alta quanto tempo leva para ir de casa ao trabalho, à escola ou ao centro, com «ci vuole» e «ci metto».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 25', [
      revisao(5, 'Responda em voz alta: «Vai spesso in centro? Quante ore dormi? Pensi al weekend? Parli di politica?» Use ci e ne.'),
      exercicios(20, [
        ouvir('Ci vado domani', ['Ci vado domani', 'Ne vado domani', 'Lo vado domani'], 'Ci vado domani', 'Ouça o «ci» de lugar.'), ouvir('Ne ho mangiate due', ['Ne ho mangiate due', 'Ne ho mangiato due', 'Le ho mangiate due'], 'Ne ho mangiate due', 'Concordância com as maçãs.'), ouvir('Ci vogliono tre ore', ['Ci vogliono tre ore', 'Ci vuole tre ore', 'Ci metto tre ore'], 'Ci vogliono tre ore', 'Plural: vogliono.'),
        ditado('Non ci credo', 'Escreva: Non ci credo.'), ditado('Che ne pensi', 'Escreva: Che ne pensi.'), ditado('Ne voglio un po\'', 'Escreva: Ne voglio un po\'.'),
        mc('Qual pronome substitui «a Milano»?', ['ci', 'ne', 'lo'], 'ci', 'Lugar: ci.'), mc('Qual pronome vem em «Quanti caffè bevi? ___ bevo tre»?', ['Ne', 'Ci', 'Li'], 'Ne', 'Quantidade: ne.'), mc('Qual frase está correta?', ['Ci metto venti minuti.', 'Ci voglio venti minuti.', 'Ne metto venti minuti.'], 'Ci metto venti minuti.', 'Tempo de uma pessoa.'), mc('«Sei lá!» em italiano:', ['Che ne so?', 'Chi lo sa ci?', 'Ci so che?'], 'Che ne so?', 'Expressão pronta.'),
        lacuna('Sei mai stato a Torino? Sì, ___ sono stato.', ['ci', 'ne', 'lo'], 'ci', 'Lugar.'), lacuna('Hai fratelli? Sì, ___ ho due.', ['ne', 'ci', 'li'], 'ne', 'Quantidade.'), lacuna('Per arrivare ___ vogliono due ore.', ['ci', 'ne', 'lo'], 'ci', 'Ci vogliono.'), lacuna('Parli del viaggio? Sì, ___ parlo spesso.', ['ne', 'ci', 'la'], 'ne', 'Assunto: parlare di.'),
        ordem('Ordene: «Ci vado ogni domenica.»', ['Ci', 'vado', 'ogni', 'domenica.'], 'Ci vado ogni domenica.', 'Ci antes do verbo.'), ordem('Ordene: «Non ne voglio più.»', ['Non', 'ne', 'voglio', 'più.'], 'Non ne voglio più.', 'Negação + ne + verbo.'),
        livre('Escreva em italiano: Você já esteve em Roma? Sim, estive lá duas vezes. Levo duas horas para chegar lá.', 'Sei mai stato a Roma? Sì, ci sono stato due volte. Ci metto due ore per arrivarci.'),
        lacuna('Vai in ufficio? Sì, ___ vado ora. (lá)', ['ne', 'ci', 'lo'], 'ci', '«Ci» substitui um lugar já mencionado.'),
        lacuna('Quante sorelle hai? ___ ho due. (delas)', ['Ci', 'Le', 'Ne'], 'Ne', '«Ne» indica a quantidade de um conjunto.'),
        lacuna('Pensi all\'esame? Sì, ___ penso spesso. (nisso)', ['ci', 'ne', 'lo'], 'ci', '«Pensare a» pede «ci».'),
        lacuna('Quanto ___ metti per arrivare? (você leva)', ['ne', 'si', 'ci'], 'ci', '«Metterci» exprime o tempo que alguém leva.'),
        lacuna('Hai del pane? Sì, ___ ho un po\'. (dele)', ['ne', 'ci', 'lo'], 'ne', '«Ne» + quantidade ao responder.'),
        mc('Qual pronome responde a «Parli di lavoro?»', ['ci', 'ne', 'lo'], 'ne', '«Parlare di» pede «ne».'),
        mc('Como se diz «Quero ir lá»?', ['Voglio andarne.', 'Voglio andare ci.', 'Voglio andarci.'], 'Voglio andarci.', 'Com infinitivo, «ci» se une ao verbo.'),
        mc('Como se diz «São precisas duas horas»?', ['Ci vogliono due ore.', 'Ci vuole due ore.', 'Ci metto due ore.'], 'Ci vogliono due ore.', 'Plural pede «ci vogliono».'),
        mc('Quantas maçãs você comprou? Qual resposta está correta?', ['Ne ho comprato cinque.', 'Ne ho comprate cinque.', 'Ho comprate ne cinque.'], 'Ne ho comprate cinque.', 'Com «ne» de quantidade, o particípio concorda com o objeto (por ex. mele).'),
        ordem('Ordene: «Quanto ci metti per arrivare?»', ['Quanto', 'ci', 'metti', 'per', 'arrivare?'], 'Quanto ci metti per arrivare?', '«Ci metti» é o tempo que você leva.'),
        ordem('Ordene: «Ci siamo stati due volte.»', ['Ci', 'siamo', 'stati', 'due', 'volte.'], 'Ci siamo stati due volte.', '«Ci» antes do auxiliar «essere».'),
        livre('Escreva em italiano: Você já foi a Veneza? Sim, fui lá uma vez.', 'Sei mai stato a Venezia? Sì, ci sono stato una volta.'),
        livre('Escreva em italiano: Quantos cafés você bebe? Bebo dois.', 'Quanti caffè bevi? Ne bevo due.'),
      ]),
      producao(5, 'Conte em voz alta uma ida a um lugar e quanto tempo você levou, com «ci» e «ci metto».'),
    ]),
  ],
});
