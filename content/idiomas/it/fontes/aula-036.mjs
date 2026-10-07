import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 36, titulo: 'Telefone, convites e marcar encontro', nivel: 'a2',
  objetivo: "Atender e fazer ligações («Pronto?», «Chi parla?», «Posso parlare con…»), deixar recado, convidar («Ti va di…?», «Che ne dici di…?»), aceitar e recusar com educação e combinar hora e lugar («Ci vediamo…»).",
  nota: "Você telefona, convida e combina encontros em italiano. Próxima aula: casa, aluguel e vizinhos.",
  sessoes: [
    sessao('S1', 'Atender e fazer uma ligação', [
      revisao(5, 'Apresente-se profissionalmente em voz alta em 30 segundos (aula 35).'),
      palavras(8, [
        ['Pronto?', 'Prónto', 'Alô?', ''], ['Chi parla?', 'ki párla', 'Quem fala?', ''], ['un attimo', 'un áttimo', 'um momento', ''], ["non c'è", 'non tchê', 'não está', ''],
        ['lasciare un messaggio', 'laxáre un messádjo', 'deixar um recado', ''], ['richiamare', 'rikiamáre', 'ligar de volta', ''], ['la linea', 'la línea', 'a linha', ''], ['il numero', 'il número', 'o número', ''],
      ]),
      gramatica(12, 'Pronto? Chi parla?', "PASSO 1: ao atender o telefone, diz-se «Pronto?». Aqui «pronto» significa «alô». Fora do telefone, «pronto» também é «preparado»: «Sei pronto?» PASSO 2: identifique-se: «Sono Marco.» «Sono Marco Rossi della ditta Bianchi.» Para perguntar quem fala: «Chi parla?» (com Lei) ou «Chi è?» (em casa). PASSO 3: pedir alguém: «Posso parlare con Anna?» «Vorrei parlare con la dottoressa Conti.» PASSO 4: respostas: «Un attimo, la chiamo.» «Resti in linea.» (fique na linha, Lei) «Non c'è al momento.» «È in riunione.» PASSO 5: recado: «Vuole lasciare un messaggio?» «Può dirle di richiamarmi?» «La richiamo io.» PASSO 6: problemas de linha: «Non La sento bene.» «La linea è disturbata.» «Può ripetere, per favore?» «Può parlare più lentamente?» PASSO 7: despedida: «Grazie e arrivederLa.» (formal) ou «Grazie, a presto.» PASSO 8: «chiamare» é ligar para alguém e vem com objeto direto: «Ti chiamo». «Telefonare» leva a + pessoa: «Telefono ad Anna.» «Le telefono domani.»", {
        tag: 'Telefone',
        comparacao: "em português atendemos com «alô»; o italiano usa «Pronto?». Atenção ao falso amigo: «pronto» também significa «preparado», e só nas ligações vale como saudação. Outra diferença: perguntamos «quem fala?» com o verbo na terceira pessoa («Chi parla?»), nunca «Chi parlo?». E «Posso falar com Anna?» é «con» (com), não «a»: «Posso parlare con Anna».",
        tabela: [
          { situacao: 'atender', frase: 'Pronto? Sono Marco.' },
          { situacao: 'perguntar quem fala', frase: 'Chi parla?' },
          { situacao: 'pedir alguém', frase: 'Posso parlare con Anna?' },
          { situacao: 'esperar', frase: 'Un attimo, la chiamo. Resti in linea.' },
          { situacao: 'recado', frase: 'Vuole lasciare un messaggio?' },
          { situacao: 'linha ruim', frase: 'Non La sento bene. Può ripetere?' },
        ],
        erros: [
          ['Posso parlare a Anna?', 'Posso parlare con Anna?', 'Falar com alguém: «con».'],
          ['Chi parlo?', 'Chi parla?', 'Para perguntar quem fala usa-se a terceira pessoa: «parla».'],
          ['Telefono Anna domani.', 'Telefono ad Anna domani.', '«Telefonare» leva «a» + pessoa (ou diga «chiamo Anna»).'],
          ['Non ti sento buono.', 'Non ti sento bene.', 'Advérbio de modo: «bene».'],
        ],
      }),
      producao(5, 'Encene em voz alta uma ligação: você atende, identifica-se, pede para falar com alguém que não está e deixa um recado.', 'Pronto? Posso parlare con Anna? Può dirle di richiamarmi?'),
    ]),
    sessao('S2', 'Convidar, aceitar e recusar', [
      revisao(4, 'Diga em voz alta cinco frases de ligação: atender, pedir alguém, esperar, deixar recado e despedir-se.'),
      palavras(6, [
        ['Ti va di uscire?', 'ti va di uxíre', 'Você topa sair?', ''], ['Che ne dici di…?', 'ke ne dítchi di', 'Que tal…?', ''], ['volentieri', 'volentiéri', 'com prazer', ''], ['ho un impegno', 'o un impénho', 'tenho um compromisso', ''], ['con piacere', 'kon piatchêre', 'com prazer', ''], ["un'altra volta", 'un áltra vólta', 'outra vez', ''],
      ]),
      gramatica(12, 'Convidar e responder', "PASSO 1: convite informal: «Ti va di + infinitivo?» «Ti va di andare al cinema?» «Ti va di cenare con me?» PASSO 2: «Che ne dici di + infinitivo / substantivo?» «Che ne dici di una pizza?» «Che ne dici di andare al mare?» PASSO 3: «Perché non + presente (noi)?» «Perché non andiamo al mare?» PASSO 4: formal: «Le va di cenare con noi?» ou, mais cortês, «Le andrebbe di cenare con noi?» PASSO 5: aceitar: «Volentieri!» «Con piacere!» «Ottima idea!» «Perché no?» PASSO 6: recusar com educação: «Mi dispiace, ma non posso: ho un impegno.» «Purtroppo devo lavorare.» «Magari un'altra volta.» PASSO 7: agradecer: «Grazie per l'invito.» PASSO 8: propor outra data: «Possiamo vederci un altro giorno?» PASSO 9: «ti va» usa o pronome indireto «ti» (a ti): quando é para você, «ti va»; quando é para alguém que você respeita, «Le va».", {
        tag: 'Convites',
        comparacao: "o português diz «topa?» ou «que tal ir?»; o italiano usa «ti va di + infinitivo?» (literalmente «te vai bem…?»). O «ti» é pronome indireto: «tu vai di» não existe. Depois de «di» vem sempre o infinitivo, não o presente: «che ne dici di andare», e não «che ne dici di andiamo». Ao recusar, o italiano explica o motivo; dizer apenas «no» soa seco.",
        tabela: [
          { funcao: 'convite (tu)', frase: 'Ti va di andare al cinema?', registro: 'informal' },
          { funcao: 'convite (tu)', frase: 'Che ne dici di una pizza?', registro: 'informal' },
          { funcao: 'convite (Lei)', frase: 'Le andrebbe di cenare con noi?', registro: 'formal' },
          { funcao: 'aceitar', frase: 'Volentieri! Ottima idea!', registro: 'neutro' },
          { funcao: 'recusar', frase: 'Mi dispiace, ho un impegno.', registro: 'neutro' },
          { funcao: 'adiar', frase: "Magari un'altra volta.", registro: 'neutro' },
        ],
        erros: [
          ['Ti va uscire?', 'Ti va di uscire?', 'Falta o «di» antes do infinitivo.'],
          ['Tu vai di andare al cinema?', 'Ti va di andare al cinema?', 'A estrutura é «ti va di», com pronome indireto.'],
          ['Perché non andare al mare?', 'Perché non andiamo al mare?', 'Para propor algo a «noi», use o presente: «andiamo».'],
          ['Che ne dici di andiamo?', 'Che ne dici di andare?', 'Depois de «di», infinitivo.'],
        ],
      }),
      producao(8, 'Faça em voz alta três convites diferentes (cinema, jantar, passeio) e responda a cada um uma vez aceitando e uma vez recusando.', 'Ti va di andare al cinema? Volentieri! Mi dispiace, ho un impegno.'),
    ]),
    sessao('S3', 'Combinar hora e lugar', [
      revisao(4, 'Faça em voz alta um convite, aceite-o e proponha uma hora.'),
      palavras(5, [
        ['ci vediamo', 'tchi vediámo', 'nos vemos', ''], ['davanti a', 'davánti a', 'em frente a', ''], ['verso le otto', 'vérso le ótto', 'por volta das oito', ''], ["non vedo l'ora", 'non védo lôra', 'mal posso esperar', ''], ['sono in ritardo', 'sóno in ritárdo', 'estou atrasado', ''],
      ]),
      gramatica(8, 'Ci vediamo alle otto', "PASSO 1: «Dove ci vediamo?» «Ci vediamo davanti al cinema.» PASSO 2: hora: «A che ora?» «Alle otto.» «Verso le otto.» (por volta das oito) PASSO 3: dias: «stasera, domani sera, dopodomani, sabato prossimo, tra una settimana». PASSO 4: «Ci vediamo» (nos vemos) é o verbo reflexivo recíproco: «ci» = um ao outro. Também se despede com «Ci vediamo!» PASSO 5: avisar atraso: «Sono in ritardo, arrivo tra dieci minuti.» «Scusa il ritardo.» PASSO 6: confirmar e despedir: «Allora a stasera!» «A domani!» (a + dia) PASSO 7: entusiasmo: «Non vedo l'ora!» «Non vedo l'ora di vederti.» PASSO 8: cancelar: «Mi dispiace, non riesco a venire.» «Possiamo spostare a domani?»", {
        tag: 'Convites',
        comparacao: "«nos vemos» em português é reflexivo recíproco e o italiano faz o mesmo: «ci vediamo». Atenção: «appuntamento» é a hora marcada (médico, reunião ou encontro amoroso), e «incontro» é uma reunião ou um evento. «Verso» (por volta de) vale para a hora; «circa» (cerca de) vale para quantidades.",
        tabela: [
          { quando: 'esta noite', italiano: 'stasera' }, { quando: 'amanhã à noite', italiano: 'domani sera' }, { quando: 'depois de amanhã', italiano: 'dopodomani' }, { quando: 'sábado que vem', italiano: 'sabato prossimo' }, { quando: 'daqui a uma semana', italiano: 'tra una settimana' }, { quando: 'por volta das oito', italiano: 'verso le otto' },
        ],
        erros: [
          ['Ci vediamo a le otto.', 'Ci vediamo alle otto.', '«A» + «le» formam «alle».'],
          ['Ci vediamo davanti il cinema.', 'Ci vediamo davanti al cinema.', '«Davanti a» + artigo: «al».'],
          ['Arrivo dieci minuti.', 'Arrivo tra dieci minuti.', 'Daqui a: «tra / fra».'],
          ["Non vedo l'ora per partire.", "Non vedo l'ora di partire.", '«Non vedo l\'ora di» + infinitivo.'],
        ],
      }),
      dialogo(8, 'Un invito / Um convite', 'Davide telefona a Chiara para convidá-la para jantar.', [
        ['Davide', 'Pronto, Chiara? Sono Davide. Ti disturbo?', 'Alô, Chiara? É o Davide. Estou te incomodando?'],
        ['Chiara', 'No, dimmi pure. Ciao Davide!', 'Não, pode falar. Oi, Davide!'],
        ['Davide', 'Sabato sera facciamo una cena a casa mia. Ti va di venire?', 'Sábado à noite vamos fazer um jantar na minha casa. Topa vir?'],
        ['Chiara', 'Volentieri! A che ora?', 'Com prazer! A que horas?'],
        ['Davide', 'Verso le otto. Posso mandarti l\'indirizzo per messaggio?', 'Por volta das oito. Posso te mandar o endereço por mensagem?'],
        ['Chiara', 'Perfetto. Posso portare qualcosa? Ci vediamo sabato, non vedo l\'ora!', 'Perfeito. Posso levar algo? Nos vemos sábado, mal posso esperar!'],
      ]),
      producao(5, 'Combine um encontro em voz alta: convide, diga onde, a que horas e avise que vai se atrasar dez minutos.', 'Ci vediamo davanti al bar alle otto. Sono in ritardo, arrivo tra dieci minuti.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 36', [
      revisao(5, 'Encene em voz alta: você liga, convida, recebe uma recusa e propõe outro dia.'),
      exercicios(20, [
        ouvir('Pronto? Chi parla?', ['Pronto? Chi parla?', 'Pronto? Chi è?', 'Pronto? Sono io'], 'Pronto? Chi parla?', 'Ouça «chi parla».'),
        ouvir('Ti va di andare al cinema?', ['Ti va di andare al cinema?', 'Che ne dici di andare al cinema?', 'Ti va il cinema?'], 'Ti va di andare al cinema?', 'Ouça «ti va di».'),
        ouvir('Ci vediamo alle otto davanti al bar', ['Ci vediamo alle otto davanti al bar', 'Ci vediamo verso le otto al bar', 'Ci vediamo alle nove davanti al bar'], 'Ci vediamo alle otto davanti al bar', 'Ouça a hora e o lugar.'),
        ditado('Posso parlare con Anna', 'Escreva: Posso parlare con Anna.'),
        ditado('Mi dispiace, ho un impegno', 'Escreva: Mi dispiace, ho un impegno.'),
        ditado('Non vedo l\'ora di partire', 'Escreva: Non vedo l\'ora di partire.'),
        mc('Qual frase está correta?', ['Ti va di uscire?', 'Ti va uscire?', 'Tu vai di uscire?'], 'Ti va di uscire?', '«Ti va di» + infinitivo.'),
        mc('Como se atende o telefone?', ['Pronto?', 'Ciao?', 'Buono?'], 'Pronto?', '«Pronto» = alô.'),
        mc('«Daqui a dez minutos»:', ['tra dieci minuti', 'dieci minuti fa', 'da dieci minuti'], 'tra dieci minuti', 'Futuro: tra / fra.'),
        mc('Recusar com educação:', ['Mi dispiace, ho un impegno.', 'No.', 'Non voglio.'], 'Mi dispiace, ho un impegno.', 'Educação: pedir desculpas e explicar.'),
        lacuna('Posso parlare ___ Anna?', ['con', 'a', 'di'], 'con', 'Falar com alguém.'),
        lacuna('Che ne dici ___ andare al mare?', ['di', 'a', 'da'], 'di', '«Che ne dici di» + infinitivo.'),
        lacuna('Ci vediamo ___ otto.', ['alle', 'a le', 'le'], 'alle', 'A + le = alle.'),
        lacuna('Perché non ___ al mare? (noi)', ['andiamo', 'andare', 'andate'], 'andiamo', 'Perché non + presente.'),
        ordem('Ordene: «Posso parlare con la dottoressa Conti?»', ['Posso', 'parlare', 'con', 'la', 'dottoressa', 'Conti'], 'Posso parlare con la dottoressa Conti?', 'Pedido ao telefone.'),
        ordem('Ordene: «Ci vediamo davanti al cinema alle otto.»', ['Ci', 'vediamo', 'davanti', 'al', 'cinema', 'alle', 'otto'], 'Ci vediamo davanti al cinema alle otto.', 'Combinar lugar e hora.'),
        livre('Escreva em italiano: Alô? Posso falar com Anna? Você topa ir ao cinema? Sinto muito, tenho um compromisso. Nos vemos às oito em frente ao bar.', 'Pronto? Posso parlare con Anna? Ti va di andare al cinema? Mi dispiace, ho un impegno. Ci vediamo alle otto davanti al bar.'),
      ]),
      producao(5, 'Fale 1 minuto: ligue para um amigo, convide-o para algo, combine lugar e hora e despeça-se.'),
    ]),
  ],
});
