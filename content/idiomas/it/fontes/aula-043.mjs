import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 43, titulo: 'Condizionale passato', nivel: 'b1',
  objetivo: 'Formar o condizionale passato e usá-lo para falar de desejos não realizados, dar conselhos e críticas sobre o passado, relatar planos futuros vistos de um momento passado e dar notícias ainda não confirmadas.',
  nota: 'O condizionale passato é a base de «avrei voluto», «avrei dovuto» e «ha detto che sarebbe venuto». Próxima aula: congiuntivo presente.',
  sessoes: [
    sessao('S1', 'Avrei voluto, sarei andato', [
      revisao(5, 'Diga em voz alta cinco frases com o condizionale presente: «Vorrei un caffè», «Potresti aiutarmi?», «Mi piacerebbe viaggiare».'),
      palavras(8, [
        ['avrei voluto', 'avréi volúto', 'eu teria querido', ''], ['avrei dovuto', 'avréi dovúto', 'eu deveria (ter feito)', ''], ['avrei potuto', 'avréi potúto', 'eu poderia (ter feito)', ''], ['il rimpianto', 'il rimpiánto', 'o arrependimento', ''], ['annullare', 'annulláre', 'cancelar', ''], ['invece', 'invêtche', 'em vez disso', ''], ['peccato', 'pekkáto', 'pena, que pena', ''], ['purtroppo', 'purtrôppo', 'infelizmente', ''],
      ]),
      gramatica(12, 'Avrei mangiato, sarei partito', 'PASSO 1: o condizionale passato forma-se com o CONDIZIONALE PRESENTE de «avere» ou «essere» + particípio passado: «avrei mangiato, avresti finito, avrebbe detto, avremmo visto, avreste letto, avrebbero capito»; «sarei andato/a, saresti partito/a, sarebbe uscito/a, saremmo arrivati/e, sareste tornati/e, sarebbero stati/e». PASSO 2: o auxiliar e a concordância seguem as regras do passato prossimo. PASSO 3: primeiro uso: desejo ou ação que não se realizou: «Avrei voluto venire, ma ho dovuto lavorare.» PASSO 4: segundo uso: conselho ou crítica sobre o passado: «Avresti dovuto avvisarmi.» (você deveria ter me avisado). PASSO 5: depois de «volere, dovere, potere» + infinitivo, a forma mais comum usa «avrei» como auxiliar: «Avrei voluto andare», «Avrei potuto aiutarti», «Avrei dovuto dirtelo». Com infinitivos que pedem «essere», a norma culta também aceita (e muitos preferem) o auxiliar do infinitivo: «Sarei voluto andare», «Sarei dovuto partire». PASSO 6: o infinitivo que vem depois não leva preposição: «Avrei dovuto dirtelo», e não «avrei dovuto di dirtelo». PASSO 7: os pronomes vão antes do auxiliar («Te l\'avrei detto») ou, com modal, colam no infinitivo («Avrei dovuto dirtelo»). PASSO 8: negação: «Non sarei mai venuto» (eu nunca teria vindo).', {
        tag: 'Condicional',
        comparacao: 'o português tem «eu teria comido» (condicional composto) e «eu deveria ter feito». O italiano usa a forma equivalente: «avrei mangiato», «avrei dovuto fare». A diferença está no auxiliar: o italiano escolhe entre «avere» e «essere» conforme o verbo («sarei andato», «avrei mangiato»), e o particípio de «essere» concorda.',
        tabela: [
          { pessoa: 'io', avere: 'avrei mangiato', essere: 'sarei andato / andata' }, { pessoa: 'tu', avere: 'avresti mangiato', essere: 'saresti andato / andata' }, { pessoa: 'lui / lei', avere: 'avrebbe mangiato', essere: 'sarebbe andato / andata' }, { pessoa: 'noi', avere: 'avremmo mangiato', essere: 'saremmo andati / andate' }, { pessoa: 'voi', avere: 'avreste mangiato', essere: 'sareste andati / andate' }, { pessoa: 'loro', avere: 'avrebbero mangiato', essere: 'sarebbero andati / andate' },
        ],
        erros: [['Avrei andato al mare.', 'Sarei andato al mare.', '«Andare» usa «essere».'], ['Maria sarebbe venuto con noi.', 'Maria sarebbe venuta con noi.', 'O particípio concorda com «Maria».'], ['Avrei dovuto di dirtelo.', 'Avrei dovuto dirtelo.', 'Sem preposição depois de «dovere».'], ['Avrei volere venire.', 'Avrei voluto venire.', 'O modal leva o particípio: voluto.']],
      }),
      producao(5, 'Diga em voz alta três coisas que você teria feito se tivesse tido mais tempo no último fim de semana.'),
    ]),
    sessao('S2', 'Disse que viria: o futuro no passado', [
      revisao(4, 'Conjugue em voz alta «partire, fare, essere, volere» no condizionale passato com «noi».'),
      palavras(6, [
        ['promettere', 'promêttere', 'prometer', ''], ['giurare', 'djuráre', 'jurar', ''], ['annunciare', 'annuntchiáre', 'anunciar', ''], ['pensare che', 'pensáre ke', 'achar que', ''], ['secondo il giornale', 'sekôndo il djornále', 'segundo o jornal', ''], ['la notizia', 'la notítsia', 'a notícia', ''],
      ]),
      gramatica(12, 'Ha detto che sarebbe venuto', 'PASSO 1: quando o verbo principal está no passado («ha detto, pensavo, mi aveva promesso»), o futuro da frase original vira condizionale passato. PASSO 2: «Arriverò alle otto» (futuro) → «Ha detto che sarebbe arrivato alle otto». PASSO 3: «Ti chiamerò» → «Mi aveva promesso che mi avrebbe chiamato». PASSO 4: «Vincerò» → «Pensava che avrebbe vinto». PASSO 5: se o verbo principal está no presente, o futuro continua: «Dice che arriverà alle otto». PASSO 6: segundo uso jornalístico: notícias não confirmadas: «Secondo il giornale, il ministro avrebbe lasciato l\'incarico». Quem escreve assim não afirma o fato; apenas o relata. PASSO 7: para dizer que algo já tinha acontecido sem confirmar, use o mesmo tempo: «Il sindaco avrebbe firmato il contratto». PASSO 8: cuidado: «sarebbe arrivato» exprime o futuro visto de um ponto do passado; o condizionale presente «arriverebbe» não é a forma padrão para isso.', {
        tag: 'Condicional',
        comparacao: 'aqui o português engana: dizemos «ele disse que chegaria» (futuro do pretérito SIMPLES). O italiano pede a forma COMPOSTA: «ha detto che sarebbe arrivato». «Ha detto che arriverebbe» não é a forma padrão. Aprenda o par: «ele disse que chegaria» = «ha detto che sarebbe arrivato».',
        tabela: [
          { original: 'Arriverò alle otto.', relato: 'Ha detto che sarebbe arrivato alle otto.' }, { original: 'Ti chiamerò.', relato: 'Mi aveva promesso che mi avrebbe chiamato.' }, { original: 'Vincerò.', relato: 'Pensava che avrebbe vinto.' }, { original: 'Verremo domani.', relato: 'Hanno detto che sarebbero venuti il giorno dopo.' }, { original: 'Il ministro ha lasciato l\'incarico.', relato: 'Il ministro avrebbe lasciato l\'incarico, secondo il giornale.' },
        ],
        erros: [['Ha detto che arriverebbe alle otto.', 'Ha detto che sarebbe arrivato alle otto.', 'Futuro no passado: condizionale passato.'], ['Mi ha promesso che telefonerebbe.', 'Mi ha promesso che avrebbe telefonato.', 'Mesma regra.'], ['Il ministro avrebbe lasciare l\'incarico.', 'Il ministro avrebbe lasciato l\'incarico.', 'Falta o particípio passado.'], ['Se avrei saputo, sarei venuto.', 'Se avessi saputo, sarei venuto.', 'Depois de «se» usa-se congiuntivo (aula 47).']],
      }),
      producao(8, 'Conte em voz alta oito coisas que alguém prometeu ou disse que faria, usando «ha detto che sarebbe…» e «mi aveva promesso che avrebbe…».'),
    ]),
    sessao('S3', 'Uma carta de desculpas', [
      revisao(4, 'Diga em voz alta duas críticas com «avresti dovuto» e duas com «avrei dovuto».'),
      palavras(5, [
        ['sarebbe stato meglio', 'sarêbbe státo mélio', 'teria sido melhor', ''], ['sarebbe stato bello', 'sarêbbe státo bêllo', 'teria sido bom', ''], ['avrei preferito', 'avréi preferíto', 'eu teria preferido', ''], ['mi sarebbe piaciuto', 'mi sarêbbe piatchúto', 'eu teria gostado', ''], ['cambiare idea', 'kambiáre idéa', 'mudar de ideia', ''],
      ]),
      gramatica(8, 'Lamentar, preferir e sugerir', 'PASSO 1: para lamentar: «Peccato! Sarebbe stato bello vederti.» PASSO 2: para preferências do passado: «Avrei preferito restare a casa.» PASSO 3: para algo que teria agradado: «Mi sarebbe piaciuto venire.» PASSO 4: para dizer o que seria melhor: «Sarebbe stato meglio partire prima.» PASSO 5: os verbos impessoais «sarebbe stato + adjetivo» não mudam de forma, mesmo com um complemento plural: «Sarebbe stato meglio avvisare i genitori».', {
        tag: 'Condicional',
        comparacao: 'o português diz «teria sido melhor / teria sido bom». O italiano usa a mesma estrutura, mas a forma «sarebbe stato» fica sempre no masculino singular com um infinitivo. «Mi sarebbe piaciuto» concorda com a coisa que agradaria: «Mi sarebbero piaciuti i tuoi amici».',
        tabela: [
          { ideia: 'lamento', frase: 'Sarebbe stato bello esserci.' }, { ideia: 'preferência', frase: 'Avrei preferito restare a casa.' }, { ideia: 'gosto', frase: 'Mi sarebbe piaciuto cantare con voi.' }, { ideia: 'melhor opção', frase: 'Sarebbe stato meglio partire prima.' },
        ],
        erros: [['Sarebbe stata meglio partire.', 'Sarebbe stato meglio partire.', 'Forma impessoal, sempre masculino singular.'], ['Avrei preferito di restare.', 'Avrei preferito restare.', 'Sem «di» depois de «preferire».'], ['Mi sarebbe piaciuto i tuoi amici.', 'Mi sarebbero piaciuti i tuoi amici.', 'O verbo concorda com a coisa que agrada.'], ['Mi piacerebbe stato venire.', 'Mi sarebbe piaciuto venire.', 'Passado: sarebbe piaciuto.']],
      }),
      texto(8, 'Una lettera a Paolo', 'Caro Paolo, ti scrivo per scusarmi di non essere venuto alla tua festa sabato scorso. Avrei voluto esserci, ma all\'ultimo momento mio padre ha avuto bisogno di me e sono dovuto rimanere a casa. Avrei dovuto avvisarti prima, lo so, ma non ho pensato al telefono. Sarebbe stato bello rivedere tutti gli amici e conoscere la tua nuova casa. Mi hanno detto che avete cantato fino a tardi: mi sarebbe piaciuto cantare con voi! Domenica prossima ti invito a pranzo da me, così mi farò perdonare. Un abbraccio, Marco.', 'Querido Paolo, escrevo para me desculpar por não ter ido à sua festa no sábado passado. Eu queria ter estado lá, mas no último momento meu pai precisou de mim e tive que ficar em casa. Eu deveria ter avisado antes, eu sei, mas não pensei no telefone. Teria sido bom rever todos os amigos e conhecer sua casa nova. Disseram-me que vocês cantaram até tarde: eu teria gostado de cantar com vocês! No próximo domingo convido você para almoçar na minha casa, assim eu me redimo. Um abraço, Marco.', [['Perché Marco non è andato alla festa?', 'Perché suo padre aveva bisogno di lui.'], ['Che cosa avrebbe dovuto fare?', 'Avvisare Paolo prima.'], ['Che cosa gli sarebbe piaciuto fare alla festa?', 'Cantare con gli altri.'], ['Che cosa propone per domenica?', 'Un pranzo a casa sua.']]),
      producao(5, 'Escreva (ou diga) em voz alta um bilhete curto de desculpas por algo que você não pôde fazer, com «avrei voluto» e «avrei dovuto».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 43', [
      revisao(5, 'Diga em voz alta o que você teria feito diferente na semana passada.'),
      exercicios(20, [
        ouvir('Avrei voluto venire alla festa', ['Avrei voluto venire alla festa', 'Volevo venire alla festa', 'Vorrei venire alla festa'], 'Avrei voluto venire alla festa', 'Ouça «avrei voluto».'),
        ouvir('Ha detto che sarebbe arrivato alle otto', ['Ha detto che sarebbe arrivato alle otto', 'Ha detto che arriverebbe alle otto', 'Ha detto che arriverà alle otto'], 'Ha detto che sarebbe arrivato alle otto', 'Ouça «sarebbe arrivato».'),
        ouvir('Avresti dovuto avvisarmi', ['Avresti dovuto avvisarmi', 'Dovresti avvisarmi', 'Avevi dovuto avvisarmi'], 'Avresti dovuto avvisarmi', 'Crítica ao passado.'),
        ditado('Sarebbe stato meglio partire prima', 'Escreva: Sarebbe stato meglio partire prima.'), ditado('Mi sarebbe piaciuto cantare con voi', 'Escreva: Mi sarebbe piaciuto cantare con voi.'), ditado('Mi aveva promesso che avrebbe telefonato', 'Escreva: Mi aveva promesso che avrebbe telefonato.'),
        mc('«Eu teria ido» em italiano:', ['Sarei andato.', 'Avrei andato.', 'Andrei.'], 'Sarei andato.', 'Condizionale passato com «essere».'),
        mc('«Ele disse que viria» em italiano:', ['Ha detto che sarebbe venuto.', 'Ha detto che verrebbe.', 'Ha detto che viene.'], 'Ha detto che sarebbe venuto.', 'Futuro no passado.'),
        mc('Qual frase está correta?', ['Maria sarebbe venuta.', 'Maria sarebbe venuto.', 'Maria avrebbe venuta.'], 'Maria sarebbe venuta.', 'Concordância.'),
        mc('«Você deveria ter me dito» em italiano:', ['Avresti dovuto dirmelo.', 'Dovresti dirmelo.', 'Avrai dovuto dirmelo.'], 'Avresti dovuto dirmelo.', 'Crítica sobre o passado.'),
        lacuna('___ voluto venire, ma ho lavorato. (eu)', ['Avrei', 'Avevo', 'Avrò'], 'Avrei', 'Condizionale passato com «volere».'),
        lacuna('Mi ha promesso che mi ___ chiamato. (ele)', ['avrebbe', 'avrà', 'aveva'], 'avrebbe', 'Futuro no passado.'),
        lacuna('Noi ___ andati volentieri. (teríamos)', ['saremmo', 'avremmo', 'saremo'], 'saremmo', '«Andare» usa «essere».'),
        lacuna('Sarebbe ___ meglio avvisare.', ['stato', 'stata', 'stati'], 'stato', 'Forma impessoal.'),
        ordem('Ordene: «Avrei dovuto avvisarti prima.»', ['Avrei', 'dovuto', 'avvisarti', 'prima'], 'Avrei dovuto avvisarti prima.', 'Condizionale passato com modal.'),
        ordem('Ordene: «Ha detto che sarebbe arrivato tardi.»', ['Ha', 'detto', 'che', 'sarebbe', 'arrivato', 'tardi'], 'Ha detto che sarebbe arrivato tardi.', 'Futuro no passado.'),
        livre('Escreva em italiano: Eu queria ter vindo, mas não pude. Ele disse que me ligaria, mas não ligou.', 'Avrei voluto venire, ma non ho potuto. Ha detto che mi avrebbe chiamato, ma non ha chiamato.'),
        lacuna('Noi ___ potuto aiutarti. (teríamos)', ['avremo', 'saremmo', 'avremmo'], 'avremmo', 'Condizionale passato: condizionale de «avere» + particípio.'),
        lacuna('Lei ___ venuta volentieri. (teria)', ['sarebbe', 'avrebbe', 'sarà'], 'sarebbe', '«Venire» usa «essere»: «sarebbe venuta».'),
        lacuna('Avrei preferito ___ a casa. (ficar)', ['restare', 'rimasto', 'restando'], 'restare', '«Avrei preferito» pede infinitivo, sem «di».'),
        lacuna('Voi ___ andati al mare. (teriam)', ['sareste', 'avreste', 'sarete'], 'sareste', '«Andare» usa «essere»: «sareste andati».'),
        lacuna('Peccato! Sarebbe stato ___ vederti. (bom)', ['bella', 'bello', 'belli'], 'bello', '«Sarebbe stato» + adjetivo fica no masculino singular.'),
        mc('Como se diz «Eu teria feito»?', ['Avrei fatto.', 'Sarei fatto.', 'Avevo fatto.'], 'Avrei fatto.', '«Fare» usa «avere» no condizionale passato.'),
        mc('Como se diz «Ele disse que chegaria às nove»?', ['Ha detto che arriverebbe alle nove.', 'Ha detto che sarebbe arrivato alle nove.', 'Ha detto che sarà arrivato alle nove.'], 'Ha detto che sarebbe arrivato alle nove.', 'Futuro do passado: condizionale passato.'),
        mc('Qual tempo marca uma notícia não confirmada?', ['passato remoto', 'imperfetto', 'condizionale passato'], 'condizionale passato', '«Secondo il giornale… avrebbe lasciato l\'incarico».'),
        mc('O que expressa «Mi sarebbe piaciuto»?', ['Eu gostei.', 'Eu teria gostado.', 'Eu gosto.'], 'Eu teria gostado.', 'Condizionale passato de «piacere».'),
        ordem('Ordene: «Avrei preferito restare a casa.»', ['Avrei', 'preferito', 'restare', 'a', 'casa.'], 'Avrei preferito restare a casa.', 'Preferência do passado.'),
        ordem('Ordene: «Saremmo venuti volentieri con voi.»', ['Saremmo', 'venuti', 'volentieri', 'con', 'voi.'], 'Saremmo venuti volentieri con voi.', '«Venire» usa «essere»; o particípio concorda.'),
        livre('Escreva em italiano: Eu teria ido à festa, mas tive de trabalhar.', 'Sarei andato alla festa, ma ho dovuto lavorare.'),
        livre('Escreva em italiano: Que pena! Teria sido bom vê-lo. Ele disse que viria.', 'Peccato! Sarebbe stato bello vederti. Ha detto che sarebbe venuto.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma oportunidade que você perdeu e o que teria feito de outro modo.'),
    ]),
  ],
});
