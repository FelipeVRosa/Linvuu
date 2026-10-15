import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 22, titulo: 'Passato prossimo × imperfetto', nivel: 'a2',
  objetivo: 'Decidir entre passato prossimo (o fato) e imperfetto (o fundo), combinar os dois tempos em uma história curta e reconhecer verbos que mudam de sentido.',
  nota: 'Você conta histórias com fundo e fatos. Próxima aula: os pronomes diretos (lo, la, li, le).',
  sessoes: [
    sessao('S1', 'Fundo e fato', [
      revisao(5, 'Diga em voz alta três frases com imperfetto de infância e três com passato prossimo de ontem.'),
      palavras(8, [
        ['all\'improvviso', 'allimprovvízo', 'de repente', ''], ['a un certo punto', 'a un tchérto púnto', 'em certo momento', ''], ['un giorno', 'un djórno', 'um dia', ''], ['poi', 'pói', 'depois, então', ''], ['dopo', 'dópo', 'depois', ''], ['mentre', 'méntre', 'enquanto', ''], ['intanto', 'intánto', 'enquanto isso', ''], ['quella sera', 'kuélla séra', 'naquela noite', ''],
      ]),
      gramatica(12, 'Dois tempos, duas funções', 'PASSO 1: o passato prossimo conta o que aconteceu: fatos, ações terminadas, a linha principal da história. PASSO 2: o imperfetto descreve o que havia ao redor: o cenário, o clima, as pessoas, os sentimentos e as ações em curso. PASSO 3: uma boa pergunta para escolher: «isto avança a história, ou explica a situação?». Avança: passato prossimo. Explica: imperfetto. PASSO 4: ação em curso interrompida por outra: imperfetto para a que estava em curso e passato prossimo para a que interrompeu: «Dormivo quando è suonato il telefono.» PASSO 5: ações encadeadas, uma depois da outra: só passato prossimo: «Mi sono alzata, ho fatto colazione e sono uscita.» PASSO 6: ações paralelas e longas: imperfetto com «mentre»: «Mentre mangiavo, leggevo.» PASSO 7: o passato prossimo exprime o número de vezes: «Ho visto quel film tre volte.» O imperfetto dá o hábito: «Vedevo quel film ogni anno.» PASSO 8: duração com limite claro (per due anni, tutta la sera, dalle otto alle dieci) pede passato prossimo: «Ho abitato a Roma per due anni.»', {
        tag: 'Passato',
        comparacao: 'o português tem a mesma oposição, mas o pretérito perfeito simples («eu comi») é o tempo do fato. No italiano da Itália, esse mesmo fato costuma vir no passato prossimo («ho mangiato»). Para o brasileiro, a regra prática é trocar mentalmente «eu fiz, comi, saí» por «ho fatto, ho mangiato, sono uscito», e o resto (cenário e hábito) pelo imperfetto.',
        tabela: [
          { funcao: 'fato terminado', tempo: 'passato prossimo', exemplo: 'Ieri ho visto Marco.' }, { funcao: 'fatos em sequência', tempo: 'passato prossimo', exemplo: 'Sono entrato, ho salutato e mi sono seduto.' }, { funcao: 'cenário e clima', tempo: 'imperfetto', exemplo: 'Pioveva e faceva freddo.' }, { funcao: 'ação em curso interrompida', tempo: 'os dois', exemplo: 'Leggevo quando è arrivato Luca.' }, { funcao: 'hábito', tempo: 'imperfetto', exemplo: 'Ogni sabato andavo al mercato.' }, { funcao: 'duração delimitada', tempo: 'passato prossimo', exemplo: 'Ho lavorato lì per tre anni.' },
        ],
        erros: [['Ha piovuto quando sono uscito.', 'Pioveva quando sono uscito.', 'O clima é fundo: imperfetto.'], ['Dormivo quando il telefono suonava.', 'Dormivo quando il telefono ha suonato.', 'O que interrompe é um fato: passato prossimo.'], ['Ieri andavo al cinema e ho visto un film.', 'Ieri sono andato al cinema e ho visto un film.', 'Fatos de ontem: passato prossimo.'], ['Per due anni abitavo a Roma.', 'Per due anni ho abitato a Roma.', 'Duração delimitada pede passato prossimo.']],
      }),
      producao(5, 'Diga em voz alta: «Leggevo quando… Camminavo quando… Dormivo quando…», completando com um fato.'),
    ]),
    sessao('S2', 'Estrutura de uma história', [
      revisao(4, 'Complete em voz alta: «Mentre (io) cucinare…, (squillare) il telefono.»'),
      palavras(6, [
        ['incontrare', 'inkontráre', 'encontrar', ''], ['accorgersi', 'akkórdjersi', 'perceber', ''], ['perdere', 'pérdere', 'perder', ''], ['cadere', 'kadére', 'cair', ''], ['gridare', 'gridáre', 'gritar', ''], ['spaventarsi', 'spaventársi', 'assustar-se', ''],
      ]),
      gramatica(12, 'Montar o relato em cinco passos', 'PASSO 1: comece pelo cenário, com o imperfetto: «Era una sera di novembre e pioveva.» PASSO 2: apresente o primeiro fato, com o passato prossimo: «Sono uscita dall\'ufficio e ho preso l\'autobus.» PASSO 3: dê um sinal de virada: «All\'improvviso», «a un certo punto», «quando»: «All\'improvviso l\'autobus si è fermato.» PASSO 4: mostre a reação e o estado das pessoas com o imperfetto: «Tutti erano nervosi e io avevo freddo.» PASSO 5: feche com um fato final e, se quiser, com a situação atual no presente: «Alla fine ho chiamato un taxi.» PASSO 6: o discurso direto dentro da história usa passato prossimo para o que foi dito: «Ho detto: Aspetto qui.» PASSO 7: «era» e «c\'era» abrem histórias e descrições: «C\'era una volta… » é a abertura do conto; na conversa, «c\'era» descreve o cenário. PASSO 8: os verbos de pensamento e sentimento (pensavo, credevo, volevo, speravo) ficam no imperfetto porque descrevem o estado da pessoa naquele momento.', {
        tag: 'Passato',
        comparacao: 'em português a alternância é a mesma: «era uma noite de novembro e chovia; saí do escritório e peguei o ônibus». O italiano pede o passato prossimo no lugar do pretérito simples. Verbos de pensamento ficam no fundo: «eu achava que estava atrasado» é «pensavo di essere in ritardo».',
        tabela: [
          { etapa: 'cenário', tempo: 'imperfetto', exemplo: 'Era sera e pioveva.' }, { etapa: 'primeiro fato', tempo: 'passato prossimo', exemplo: 'Sono uscita dall\'ufficio.' }, { etapa: 'virada', tempo: 'passato prossimo', exemplo: 'All\'improvviso l\'autobus si è fermato.' }, { etapa: 'reação e estado', tempo: 'imperfetto', exemplo: 'Avevo paura e pensavo a casa.' }, { etapa: 'fecho', tempo: 'passato prossimo', exemplo: 'Alla fine ho preso un taxi.' },
        ],
        erros: [['Ogni estate sono andato dai nonni da piccolo.', 'Ogni estate andavo dai nonni da piccolo.', 'Hábito repetido: imperfetto.'], ['Era una sera e sono piovuto.', 'Era una sera e pioveva.', 'Clima de fundo: imperfetto.'], ['Alle otto sono stato a casa quando è arrivato Luca.', 'Alle otto ero a casa quando è arrivato Luca.', 'Estado de fundo: imperfetto.'], ['Mentre ho camminato, ho visto un amico.', 'Mentre camminavo, ho visto un amico.', 'Após «mentre», a ação em curso fica no imperfetto.']],
      }),
      producao(8, 'Conte em voz alta uma história de oito frases que comece com «Era…», tenha uma virada com «all\'improvviso» e termine com um fato.'),
    ]),
    sessao('S3', 'Verbos que mudam de sentido', [
      revisao(4, 'Conte em voz alta uma história de quatro frases, com um cenário e dois fatos.'),
      palavras(5, [
        ['sapere, ho saputo', 'sapére, ó sapúto', 'saber, fiquei sabendo', ''], ['conoscere, ho conosciuto', 'konóxere, ó konoxúto', 'conhecer, conheci', ''], ['potere, ho potuto', 'potére, ó potúto', 'poder, consegui', ''], ['volere, ho voluto', 'volére, ó volúto', 'querer, insisti em', ''], ['avere paura', 'avére páura', 'ter medo', ''],
      ]),
      gramatica(8, 'Sapere, conoscere, potere, volere', 'PASSO 1: alguns verbos mudam de sentido conforme o tempo. PASSO 2: «sapere»: imperfetto «sapevo» (eu sabia) × passato prossimo «ho saputo» (fiquei sabendo, descobri): «Sapevo la verità» × «Ho saputo la notizia ieri». PASSO 3: «conoscere»: «Conoscevo Paolo» (eu o conhecia) × «Ho conosciuto Paolo a Milano» (eu o conheci, o encontrei pela primeira vez). PASSO 4: «potere»: «Potevo uscire» (eu podia, mas talvez não saí) × «Non ho potuto uscire» (não consegui, não pude de fato). PASSO 5: «volere»: «Volevo uscire» (eu queria) × «Non ho voluto uscire» (recusei, não quis mesmo). PASSO 6: no passato prossimo com «volere», «potere» e «dovere» o auxiliar segue o infinitivo que vem depois: «Ho dovuto lavorare», «Sono dovuto partire», «Non sono potuto venire». No italiano cotidiano, «avere» também é aceito nos casos com «essere», sem erro de comunicação. PASSO 7: «avere paura» e «avere bisogno»: no imperfetto são estados («Avevo paura»); no passato prossimo indicam um susto: «Ho avuto paura» (levei um susto).', {
        tag: 'Passato',
        comparacao: 'o português também varia: «eu sabia» e «eu soube», «eu conhecia» e «eu conheci», «eu podia» e «eu pude». O italiano repete essa lógica com o imperfetto e o passato prossimo. A armadilha é «ho saputo», que significa «fiquei sabendo», e não «eu sabia» (que é «sapevo»).',
        tabela: [
          { verbo: 'sapere', imperfetto: 'Sapevo la strada.', passato_prossimo: 'Ho saputo la notizia.' }, { verbo: 'conoscere', imperfetto: 'Conoscevo Paolo.', passato_prossimo: 'Ho conosciuto Paolo nel 2019.' }, { verbo: 'potere', imperfetto: 'Potevo venire.', passato_prossimo: 'Non ho potuto venire.' }, { verbo: 'volere', imperfetto: 'Volevo partire.', passato_prossimo: 'Non ho voluto partire.' }, { verbo: 'avere paura', imperfetto: 'Avevo paura.', passato_prossimo: 'Ho avuto paura.' },
        ],
        erros: [['Anni fa ho saputo bene l\'italiano.', 'Anni fa sapevo bene l\'italiano.', 'Estado de conhecimento: imperfetto.'], ['Ho conosciuto Paolo da anni.', 'Conoscevo Paolo da anni.', 'Conhecer há anos é estado: imperfetto.'], ['Ho volevo un caffè.', 'Volevo un caffè.', 'Não junte «avere» ao imperfetto.'], ['Ho potevo venire.', 'Potevo venire.', 'Imperfetto não leva auxiliar.']],
      }),
      dialogo(8, 'Che cosa è successo? / O que aconteceu?', 'Sofia e Luca falam de uma noite em que Sofia ficou sem as chaves.', [
        ['Luca', 'Sofia, ieri sera ti ho chiamata tre volte. Dov\'eri?', 'Sofia, ontem à noite liguei três vezes. Onde você estava?'], ['Sofia', 'Ero fuori casa e pioveva. Cercavo le chiavi quando mi sono accorta di averle dimenticate in ufficio.', 'Eu estava fora de casa e chovia. Procurava as chaves quando percebi que as tinha esquecido no escritório.'], ['Luca', 'Che sfortuna! E che cosa hai fatto?', 'Que azar! E o que você fez?'], ['Sofia', 'Ho chiamato la vicina. Non ha risposto subito, perché dormiva.', 'Liguei para a vizinha. Ela não respondeu logo, porque dormia.'], ['Luca', 'Alla fine come sei entrata?', 'No fim, como você entrou?'], ['Sofia', 'Sono rimasta un\'ora in strada, poi è arrivata la vicina con le chiavi di riserva.', 'Fiquei uma hora na rua, depois a vizinha chegou com as chaves reserva.'],
      ]),
      producao(5, 'Conte em voz alta um imprevisto seu, com cenário (imperfetto) e dois fatos (passato prossimo).'),
    ]),
    sessao('S4', 'Revisão e prática da aula 22', [
      revisao(5, 'Conte em voz alta, em oito frases, o dia em que algo inesperado aconteceu com você, alternando cenário e fato.'),
      exercicios(20, [
        ouvir('Pioveva quando sono uscito', ['Pioveva quando sono uscito', 'Ha piovuto quando sono uscito', 'Piove quando esco'], 'Pioveva quando sono uscito', 'Ouça os dois tempos.'), ouvir('Dormivo quando ha suonato il telefono', ['Dormivo quando ha suonato il telefono', 'Ho dormito quando suonava il telefono', 'Dormo quando suona il telefono'], 'Dormivo quando ha suonato il telefono', 'Fundo, depois fato.'), ouvir('Ho conosciuto Paolo a Roma', ['Ho conosciuto Paolo a Roma', 'Conoscevo Paolo a Roma', 'Conosco Paolo a Roma'], 'Ho conosciuto Paolo a Roma', 'Conheci: passato prossimo.'),
        ditado('Era sera e faceva freddo', 'Escreva: Era sera e faceva freddo.'), ditado('All\'improvviso ho sentito un rumore', 'Escreva: All\'improvviso ho sentito un rumore.'), ditado('Non ho potuto venire', 'Escreva: Non ho potuto venire.'),
        mc('Fato isolado: qual está correta?', ['Ieri ho incontrato Anna.', 'Ieri incontravo Anna.', 'Ieri incontrerei Anna.'], 'Ieri ho incontrato Anna.', 'Fato: passato prossimo.'), mc('Hábito: qual está correta?', ['Da piccola mangiavo sempre il riso.', 'Da piccola ho mangiato sempre il riso.', 'Da piccola mangio sempre il riso.'], 'Da piccola mangiavo sempre il riso.', 'Hábito: imperfetto.'), mc('«Fiquei sabendo da notícia»:', ['Ho saputo la notizia.', 'Sapevo la notizia.', 'So la notizia.'], 'Ho saputo la notizia.', 'Descoberta: passato prossimo.'), mc('«Não consegui ir» (não pude de fato):', ['Non sono potuto andare.', 'Non potevo andare.', 'Non posso andare.'], 'Non sono potuto andare.', 'Impossibilidade concreta.'),
        lacuna('Mentre ___ la cena, è arrivato Marco. (preparare, io)', ['preparavo', 'ho preparato', 'preparo'], 'preparavo', 'Ação em curso.'), lacuna('Quando ___ a casa, ho visto la luce accesa. (arrivare, io)', ['sono arrivato', 'arrivavo', 'arrivo'], 'sono arrivato', 'Fato pontual.'), lacuna('Quando sono uscito, ___ molto freddo. (fare)', ['faceva', 'ha fatto', 'fa'], 'faceva', 'Clima de fundo.'), lacuna('Ho ___ per tre anni a Napoli. (abitare)', ['abitato', 'abitavo', 'abitata'], 'abitato', 'Duração delimitada.'),
        ordem('Ordene: «Leggevo quando è arrivato Luca.»', ['Leggevo', 'quando', 'è', 'arrivato', 'Luca.'], 'Leggevo quando è arrivato Luca.', 'Ação em curso + interrupção.'), ordem('Ordene: «Era tardi e avevo sonno.»', ['Era', 'tardi', 'e', 'avevo', 'sonno.'], 'Era tardi e avevo sonno.', 'Cenário.'),
        livre('Escreva em italiano: Chovia e eu esperava o ônibus quando vi um velho amigo.', 'Pioveva e aspettavo l\'autobus quando ho visto un vecchio amico.'),
        lacuna('Mentre ___ la radio, ho sentito un rumore. (eu escutava)', ['ascoltavo', 'ho ascoltato', 'ascoltai'], 'ascoltavo', 'Ação em curso no cenário: imperfetto.'),
        lacuna('Ieri ___ un vecchio amico. (encontrei)', ['incontravo', 'ho incontrato', 'incontrato'], 'ho incontrato', 'Fato terminado: passato prossimo.'),
        lacuna('Era tardi e ___ stanchi. (estávamos)', ['siamo', 'siamo stati', 'eravamo'], 'eravamo', 'Estado como cenário: imperfetto.'),
        lacuna('Quel giorno ___ molto freddo. (fazia)', ['faceva', 'ha fatto', 'fa'], 'faceva', 'O clima descreve o cenário: imperfetto.'),
        lacuna('Per tre anni ___ a Milano. (ele viveu)', ['abitava', 'ha abitato', 'abita'], 'ha abitato', 'Período delimitado e terminado: passato prossimo.'),
        mc('Qual tempo descreve o cenário de uma história?', ['imperfetto', 'passato prossimo', 'presente'], 'imperfetto', 'Cenário, clima e sentimentos ficam no imperfetto.'),
        mc('Como se diz «Eu sabia a verdade»?', ['Ho saputo la verità.', 'Sapevo la verità.', 'So la verità.'], 'Sapevo la verità.', '«Sapevo» é saber como estado; «ho saputo» é ficar sabendo.'),
        mc('Qual palavra marca uma virada na história?', ['Ogni giorno', 'Mentre', 'All\'improvviso'], 'All\'improvviso', '«All\'improvviso» (de repente) introduz um fato novo.'),
        mc('Qual frase está correta?', ['Mentre camminavo, ho visto un amico.', 'Mentre ho camminato, ho visto un amico.', 'Mentre camminavo, vedevo un amico ieri.'], 'Mentre camminavo, ho visto un amico.', 'Ação em curso no imperfetto; fato que interrompe no passato prossimo.'),
        ordem('Ordene: «Mentre camminavamo, ha cominciato a piovere.»', ['Mentre', 'camminavamo,', 'ha', 'cominciato', 'a', 'piovere.'], 'Mentre camminavamo, ha cominciato a piovere.', 'Imperfetto para a ação em curso e passato prossimo para o fato novo.'),
        ordem('Ordene: «Quella sera pioveva e io ero a casa.»', ['Quella', 'sera', 'pioveva', 'e', 'io', 'ero', 'a', 'casa.'], 'Quella sera pioveva e io ero a casa.', 'Clima e situação ficam no imperfetto.'),
        livre('Escreva em italiano: Eu estava cansado e tinha frio quando cheguei em casa.', 'Ero stanco e avevo freddo quando sono arrivato a casa.'),
        livre('Escreva em italiano: Era noite e chovia. De repente ouvi um barulho.', 'Era sera e pioveva. All\'improvviso ho sentito un rumore.'),
      ]),
      producao(5, 'Conte em um minuto a história de um filme ou livro que você conhece, com cenário e fatos.'),
    ]),
  ],
});
