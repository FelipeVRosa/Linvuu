import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 50, titulo: 'Gerundio e participio', nivel: 'b1',
  objetivo: 'Formar e usar o gerundio (presente e passato) para modo, tempo, causa, condição e concessão, e entender o participio passato assoluto e o participio presente em textos escritos e na fala de trabalho.',
  nota: 'O gerundio e o participio deixam o texto mais compacto e mais natural. Lembre a regra de ouro: o gerundio costuma ter o mesmo sujeito da oração principal. Próxima aula: si impersonale e si passivante.',
  sessoes: [
    sessao('S1', 'Il gerundio presente', [
      revisao(5, 'Diga em voz alta cinco frases com «stare + gerundio»: «Sto leggendo», «Stiamo cucinando».'),
      palavras(8, [
        ['mentre', 'méntre', 'enquanto', ''], ['pur', 'púr', 'embora (com gerúndio)', ''], ['siccome', 'sikkóme', 'como, já que', ''], ['imparare', 'imparáre', 'aprender', ''], ['cucinare', 'kutchináre', 'cozinhar', ''], ['camminare', '', 'caminhar', ''], ['guardare', 'guardáre', 'olhar, assistir', ''], ['ascoltare', 'askoltáre', 'escutar', ''],
      ]),
      gramatica(12, 'Imparare guardando film', 'PASSO 1: o gerundio presente forma-se trocando -are por -ando e -ere/-ire por -endo: «parlando, vendendo, dormendo, finendo». PASSO 2: irregulares: «fare → facendo, dire → dicendo, bere → bevendo, porre → ponendo, tradurre → traducendo». PASSO 3: uso de modo (como): «Imparo l\'italiano guardando film». PASSO 4: uso de tempo (enquanto): «Camminando, ho incontrato Luca» (enquanto caminhava). PASSO 5: uso de causa (porque): «Essendo stanco, sono andato a letto». PASSO 6: uso de condição (se): «Studiando di più, passeresti l\'esame». PASSO 7: o gerundio costuma ter o MESMO sujeito do verbo principal: «Uscendo di casa, ho preso l\'ombrello» (eu saí e eu peguei). PASSO 8: os pronomes colam ao gerundio: «guardandola, leggendolo, dicendoci».', {
        tag: 'Gerúndio',
        comparacao: 'o gerúndio português tem a mesma forma (-ando, -endo, -indo): «falando, vendendo, dormindo». A diferença está no uso: o português usa o gerúndio como complemento («vi ele correndo»), e o italiano não: «l\'ho visto correre» ou «l\'ho visto mentre correva». Também em português «ao chegar» vira «arrivando» ou «quando sono arrivato». Para «caminhando» como adjetivo de pessoa, o italiano usa uma oração: «una ragazza che cammina».',
        tabela: [
          { infinito: 'parlare', gerundio: 'parlando', exemplo: 'Parlando con lui, ho capito.' }, { infinito: 'vendere', gerundio: 'vendendo', exemplo: 'Vendendo la casa, ha guadagnato.' }, { infinito: 'dormire', gerundio: 'dormendo', exemplo: 'Dormendo poco, sono stanco.' }, { infinito: 'fare', gerundio: 'facendo', exemplo: 'Facendo colazione, leggo il giornale.' }, { infinito: 'dire', gerundio: 'dicendo', exemplo: 'Dicendo la verità, si sta meglio.' }, { infinito: 'bere', gerundio: 'bevendo', exemplo: 'Bevendo molta acqua, stai meglio.' },
        ],
        erros: [['Mangiendo, guardo la TV.', 'Mangiando, guardo la TV.', '-are → -ando.'], ['Fando colazione, leggo il giornale.', 'Facendo colazione, leggo il giornale.', '«Fare» é irregular: facendo.'], ['Ho incontrato una ragazza parlando inglese.', 'Ho incontrato una ragazza che parlava inglese.', 'O gerundio refere-se ao sujeito, não a um substantivo qualquer.'], ['Ho visto Marco correndo.', 'Ho visto Marco correre. / Ho visto Marco mentre correva.', 'Não se usa gerundio como complemento de «vedere».']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você faz e o modo, por exemplo: «Imparo l\'italiano ascoltando musica».'),
    ]),
    sessao('S2', 'Gerundio passato, causa e concessão', [
      revisao(4, 'Passe para o gerundio em voz alta: «finire, partire, fare, dire, bere, uscire».'),
      palavras(6, [
        ['avendo', 'avêndo', 'tendo', ''], ['essendo', 'essêndo', 'sendo, estando', ''], ['pur essendo', 'púr essêndo', 'embora seja', ''], ['stando a', 'stándo a', 'segundo, de acordo com', ''], ['proprio perché', 'própio perké', 'justamente porque', ''], ['di conseguenza', 'di konsegüêntsa', 'em consequência', ''],
      ]),
      gramatica(12, 'Avendo finito, essendo arrivato', 'PASSO 1: o gerundio passato forma-se com «avendo» ou «essendo» + particípio passado: «avendo finito, avendo mangiato, essendo arrivato/a, essendo partiti/e». PASSO 2: expressa anterioridade: «Avendo finito il lavoro, sono uscito». PASSO 3: causa anterior: «Essendo arrivata tardi, ho perso il treno». PASSO 4: o particípio concorda quando o auxiliar é «essere»: «essendo arrivata», «essendo partiti». PASSO 5: concessão com «pur»: «Pur essendo stanco, ha continuato a lavorare», «Pur avendo studiato, non ha passato l\'esame». PASSO 6: condição: «Avendo più tempo, viaggerei di più». PASSO 7: negação: «Non avendo capito, ho chiesto di nuovo». PASSO 8: os pronomes colam ao auxiliar: «avendolo visto, essendosi alzato».', {
        tag: 'Gerúndio',
        comparacao: 'em português «tendo terminado o trabalho, saí» é um registro formal. O italiano usa o equivalente em textos e na fala cuidada: «avendo finito il lavoro, sono uscito». Cuidado com o auxiliar: «avendo arrivato» está errado, o correto é «essendo arrivato».',
        tabela: [
          { funcao: 'anterioridade', exemplo: 'Avendo finito, sono uscito.' }, { funcao: 'causa', exemplo: 'Essendo arrivata tardi, ho perso il treno.' }, { funcao: 'concessão', exemplo: 'Pur avendo studiato, non ha passato.' }, { funcao: 'condição', exemplo: 'Avendo più tempo, viaggerei di più.' }, { funcao: 'negação', exemplo: 'Non avendo capito, ho chiesto di nuovo.' },
        ],
        erros: [['Avendo arrivato tardi, ho perso il treno.', 'Essendo arrivato tardi, ho perso il treno.', '«Arrivare» usa «essere».'], ['Essendo arrivata tardi, lui ha perso il treno.', 'Essendo arrivata tardi, lei ha perso il treno.', 'O sujeito deve ser o mesmo.'], ['Pur avendo studiato molto, ma non ha passato.', 'Pur avendo studiato molto, non ha passato.', '«Pur» já indica concessão, sem «ma».'], ['Non avendo capito, ho chiedere.', 'Non avendo capito, ho chiesto di nuovo.', 'Verbo conjugado no passato prossimo.']],
      }),
      producao(8, 'Escreva (ou diga) em voz alta oito frases de causa e concessão: «Essendo stanco, sono andato a letto» e «Pur essendo tardi, ho continuato».'),
    ]),
    sessao('S3', 'Il participio', [
      revisao(4, 'Diga em voz alta três frases com gerundio passato.'),
      palavras(5, [
        ['lo studente', 'lo studênte', 'o estudante', ''], ['il cantante', 'il kantánte', 'o cantor', ''], ['l\'assistente', 'lassistênte', 'o assistente', ''], ['interessante', 'interessánte', 'interessante', ''], ['la richiesta', 'la rikiésta', 'o pedido', ''],
      ]),
      gramatica(8, 'Finita la lezione, siamo usciti', 'PASSO 1: o participio passato assoluto abrevia uma oração temporal: «Finita la lezione, siamo usciti» (quando a aula acabou, saímos). PASSO 2: o particípio concorda com o substantivo: «Finita la lezione», «Letti i giornali», «Arrivati a Roma, abbiamo preso un taxi». PASSO 3: com «una volta» o efeito é mais claro: «Una volta finito il lavoro, vado a casa». PASSO 4: o participio presente termina em -ante (verbos em -are) ou -ente (-ere/-ire) e funciona como substantivo ou adjetivo: «cantante, studente, presidente, assistente, interessante». PASSO 5: forma de participio presente: «interessare → interessante, divertire → divertente, presiedere → presidente». PASSO 6: na língua comum, o participio presente não faz o papel de verbo: diga «una ragazza che parla inglese», não «una ragazza parlante inglese». Em textos burocráticos ele aparece como verbo (ex.: «le persone aventi diritto»), mas isso é registro formal. PASSO 7: os adjetivos em -ante e -ente fazem o plural em -i: «una persona sorridente», «due persone sorridenti».', {
        tag: 'Gerúndio',
        comparacao: 'o português também tem a forma curta com o particípio: «terminada a aula, saímos». O italiano a usa com a mesma estrutura: «finita la lezione, siamo usciti». O particípio presente português («cantante, estudante, presidente») é igual em italiano, e a maior parte dessas palavras tem a mesma raiz, o que facilita.',
        tabela: [
          { infinito: 'cantare', participio: 'cantante', sentido: 'o cantor' }, { infinito: 'studiare', participio: 'studente', sentido: 'o estudante' }, { infinito: 'presiedere', participio: 'presidente', sentido: 'o presidente' }, { infinito: 'interessare', participio: 'interessante', sentido: 'interessante' }, { infinito: 'divertire', participio: 'divertente', sentido: 'divertido' },
        ],
        erros: [['Finito la lezione, siamo usciti.', 'Finita la lezione, siamo usciti.', 'O particípio concorda com «la lezione».'], ['Letto i giornali, ha chiamato.', 'Letti i giornali, ha chiamato.', 'Concordância com «i giornali».'], ['Una ragazza parlante inglese.', 'Una ragazza che parla inglese.', 'O participio presente não funciona como verbo.'], ['Una persona sorridente, due persone sorridente.', 'Una persona sorridente, due persone sorridenti.', 'Adjetivo com plural em -i.']],
      }),
      dialogo(8, 'Una consegna urgente', 'Stefano e Silvia, colegas de trabalho, organizam uma entrega com prazo curto.', [
        ['Stefano', 'Ciao Silvia, come va il progetto? Finita la riunione, ti ho cercata dappertutto.', 'Oi Silvia, como vai o projeto? Quando a reunião acabou, procurei você por toda parte.'],
        ['Silvia', 'Scusa, sono uscita subito. Avendo un appuntamento dal dentista, non potevo restare.', 'Desculpe, saí logo. Como tinha consulta no dentista, não podia ficar.'],
        ['Stefano', 'Capisco. Parlando con il direttore, ho saputo che il cliente vuole una consegna anticipata.', 'Entendo. Falando com o diretor, soube que o cliente quer uma entrega antecipada.'],
        ['Silvia', 'Davvero? Pur avendo già lavorato tutta la settimana, possiamo provarci.', 'Sério? Embora já tenhamos trabalhado a semana inteira, podemos tentar.'],
        ['Stefano', 'Lavorando insieme, ce la facciamo di sicuro. Letta la richiesta, mi sembra fattibile.', 'Trabalhando juntos, certamente conseguimos. Lido o pedido, parece-me factível.'],
        ['Silvia', 'Dividiamo i compiti: io scrivo il testo, tu prepari le immagini.', 'Vamos dividir as tarefas: eu escrevo o texto, você prepara as imagens.'],
        ['Stefano', 'Perfetto. Finito il testo, me lo mandi per una revisione?', 'Perfeito. Terminado o texto, você me manda para uma revisão?'],
        ['Silvia', 'Certo, te lo mando appena finito. Tornando a casa, controllo anche i numeri.', 'Claro, mando assim que terminar. Voltando para casa, confiro também os números.'],
        ['Stefano', 'Grazie. Parlando di numeri, il cliente è molto attento ai costi.', 'Obrigado. Falando em números, o cliente é muito atento aos custos.'],
        ['Silvia', 'Lo so. Siccome è un cliente nuovo, vogliamo fare buona impressione.', 'Eu sei. Como é um cliente novo, queremos causar boa impressão.'],
      ]),
      producao(5, 'Descreva em voz alta uma rotina de trabalho ou de estudo com cinco gerúndios e dois particípios absolutos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 50', [
      revisao(5, 'Conte em voz alta seu dia usando gerundio presente e passato.'),
      exercicios(20, [
        ouvir('Imparo l\'italiano guardando film', ['Imparo l\'italiano guardando film', 'Imparo l\'italiano guardo film', 'Imparo l\'italiano guardato film'], 'Imparo l\'italiano guardando film', 'Ouça «guardando».'),
        ouvir('Essendo stanco, sono andato a letto', ['Essendo stanco, sono andato a letto', 'Avendo stanco, sono andato a letto', 'Essere stanco, sono andato a letto'], 'Essendo stanco, sono andato a letto', 'Ouça «essendo».'),
        ouvir('Finita la lezione, siamo usciti', ['Finita la lezione, siamo usciti', 'Finito la lezione, siamo usciti', 'Finendo la lezione, siamo usciti'], 'Finita la lezione, siamo usciti', 'Ouça «finita».'),
        ditado('Avendo finito il lavoro, sono uscito', 'Escreva: Avendo finito il lavoro, sono uscito.'), ditado('Pur essendo stanco, ha continuato', 'Escreva: Pur essendo stanco, ha continuato.'), ditado('Parlando con lui, ho capito', 'Escreva: Parlando con lui, ho capito.'),
        mc('O gerundio de «fare» é:', ['facendo', 'fando', 'faciendo'], 'facendo', 'Irregular.'),
        mc('Qual frase está correta?', ['Essendo arrivato tardi, ho perso il treno.', 'Avendo arrivato tardi, ho perso il treno.', 'Arrivando stato tardi, ho perso il treno.'], 'Essendo arrivato tardi, ho perso il treno.', '«Arrivare» usa «essere».'),
        mc('«Terminada a aula, saímos» em italiano:', ['Finita la lezione, siamo usciti.', 'Finito la lezione, siamo usciti.', 'Finendo la lezione, siamo usciti.'], 'Finita la lezione, siamo usciti.', 'Particípio absoluto concorda.'),
        mc('«Vi ele correndo» em italiano:', ['L\'ho visto correre.', 'L\'ho visto correndo.', 'Ho visto lui corso.'], 'L\'ho visto correre.', 'Não se usa gerundio com «vedere».'),
        lacuna('___ stanco, sono andato a letto. (sendo)', ['Essendo', 'Avendo', 'Stando'], 'Essendo', 'Gerundio de «essere».'),
        lacuna('Imparo l\'italiano ___ musica. (ascoltare)', ['ascoltando', 'ascoltato', 'ascoltare'], 'ascoltando', 'Gerundio de modo.'),
        lacuna('___ finito il lavoro, sono uscito.', ['Avendo', 'Essendo', 'Facendo'], 'Avendo', 'Gerundio passado com «finire».'),
        lacuna('Una persona ___ (interessare).', ['interessante', 'interessando', 'interessarsi'], 'interessante', 'Participio presente.'),
        ordem('Ordene: «Parlando con lui, ho capito.»', ['Parlando', 'con', 'lui', 'ho', 'capito'], 'Parlando con lui, ho capito.', 'Gerundio de tempo.'),
        ordem('Ordene: «Pur essendo stanco, ha continuato.»', ['Pur', 'essendo', 'stanco', 'ha', 'continuato'], 'Pur essendo stanco, ha continuato.', 'Concessão.'),
        livre('Escreva em italiano: Aprendo italiano vendo filmes. Sendo cansado, fui dormir. Terminada a reunião, saímos.', 'Imparo l\'italiano guardando film. Essendo stanco, sono andato a dormire. Finita la riunione, siamo usciti.'),
        lacuna('___ poco, sono sempre stanco. (dormindo)', ['Dormiendo', 'Dormendo', 'Dormando'], 'Dormendo', 'O gerúndio de «-ire» termina em «-endo».'),
        lacuna('___ studiato molto, ha passato l\'esame. (tendo)', ['Essendo', 'Avuto', 'Avendo'], 'Avendo', 'Gerúndio passado de «studiare»: «avendo studiato».'),
        lacuna('___ partiti presto, siamo arrivati in tempo. (tendo)', ['Essendo', 'Avendo', 'Essere'], 'Essendo', '«Partire» usa «essere»: «essendo partiti».'),
        lacuna('Una ragazza molto ___. (sorridente)', ['sorridante', 'sorridente', 'sorridendo'], 'sorridente', 'O participio presente de «-ire» termina em «-ente».'),
        lacuna('Fatta la spesa, ___ a casa. (voltamos)', ['siamo tornati', 'abbiamo tornato', 'tornavamo'], 'siamo tornati', '«Tornare» usa «essere»: «siamo tornati».'),
        mc('Qual é o gerúndio de «bere»?', ['bevendo', 'bevando', 'bevuto'], 'bevendo', 'Radical irregular: «bevendo».'),
        mc('Qual é o gerúndio de «dire»?', ['diendo', 'dicendo', 'dindo'], 'dicendo', 'Radical irregular: «dicendo».'),
        mc('Qual frase está correta?', ['Camminato, ho incontrato Luca.', 'Cammino, ho incontrato Luca.', 'Camminando, ho incontrato Luca.'], 'Camminando, ho incontrato Luca.', 'O gerúndio indica simultaneidade: enquanto caminhava.'),
        mc('O que expressa «Pur essendo stanco»?', ['causa', 'concessão', 'condição'], 'concessão', '«Pur» + gerúndio equivale a «embora».'),
        ordem('Ordene: «Avendo finito il lavoro, sono tornato a casa.»', ['Avendo', 'finito', 'il', 'lavoro,', 'sono', 'tornato', 'a', 'casa.'], 'Avendo finito il lavoro, sono tornato a casa.', 'Gerúndio passado expressa anterioridade.'),
        ordem('Ordene: «Letti i giornali, ha chiamato Anna.»', ['Letti', 'i', 'giornali,', 'ha', 'chiamato', 'Anna.'], 'Letti i giornali, ha chiamato Anna.', 'Particípio absoluto concorda com «giornali».'),
        livre('Escreva em italiano: Aprendo italiano ouvindo música e vendo filmes.', 'Imparo l\'italiano ascoltando musica e guardando film.'),
        livre('Escreva em italiano: Tendo chegado tarde, perdi o trem. Embora cansada, ela continuou.', 'Essendo arrivato tardi, ho perso il treno. Pur essendo stanca, ha continuato.'),
      ]),
      producao(5, 'Fale 1 minuto sobre como você aprende italiano, usando gerundio de modo, de causa e de concessão.'),
    ]),
  ],
});
