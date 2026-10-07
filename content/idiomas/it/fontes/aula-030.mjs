import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 30, titulo: 'Stare + gerundio, stare per, appena', nivel: 'a2',
  objetivo: "Dizer o que está acontecendo com «stare + gerundio», o que está prestes a acontecer com «stare per» e o que acabou de acontecer com «appena», no presente e no passado.",
  nota: "Você descreve o momento: o que acontece agora, o que está para acontecer e o que acabou de acontecer. Próxima aula: quantidade, advérbios e preposições.",
  sessoes: [
    sessao('S1', 'Sto + gerundio: o que está acontecendo agora', [
      revisao(5, 'Faça três pedidos educados e dê dois conselhos com o condizionale (aula 29), em voz alta.'),
      palavras(8, [
        ['sto mangiando', 'sto mandjándo', 'estou comendo', ''], ['sto leggendo', 'sto ledjéndo', 'estou lendo', ''], ['sto parlando', 'sto parlándo', 'estou falando', ''], ['sto facendo', 'sto fatchéndo', 'estou fazendo', ''],
        ['sto uscendo', 'sto uxéndo', 'estou saindo', ''], ['in questo momento', 'in kuésto moménto', 'neste momento', ''], ['adesso', 'adésso', 'agora', ''], ['proprio adesso', 'própryo adésso', 'agora mesmo', ''],
      ]),
      gramatica(12, 'Stare + gerundio: a ação em curso', "PASSO 1: para dizer que algo está acontecendo neste momento, use «stare» no presente + o gerúndio: «Sto mangiando.» (estou comendo) PASSO 2: o presente de «stare»: sto, stai, sta, stiamo, state, stanno. PASSO 3: o gerúndio dos verbos em «-are» termina em «-ando»: parlare → parlando; mangiare → mangiando. PASSO 4: nos verbos em «-ere» e «-ire» o gerúndio termina em «-endo»: prendere → prendendo; partire → partendo; dormire → dormendo; uscire → uscendo. PASSO 5: irregulares que vêm do radical antigo: fare → facendo; dire → dicendo; bere → bevendo. PASSO 6: perguntar: «Che cosa stai facendo?» «Sto studiando.» PASSO 7: os pronomes podem ir antes de «stare» ou colados ao gerúndio: «Lo sto leggendo.» = «Sto leggendolo.»; «Mi sto vestendo.» = «Sto vestendomi.» PASSO 8: o presente simples também descreve o que acontece agora: «Che fai?» «Leggo.» A forma com «stare» destaca que a ação está em andamento. PASSO 9: não se usa «stare + gerundio» para o futuro: diz-se «Domani parto», e não «Domani sto partendo». PASSO 10: não se usa com verbos de estado como «avere», «essere», «sapere»: «Ho fame», e não «Sto avendo fame».", {
        tag: 'Gerundio',
        comparacao: "a construção é quase igual à do português: «estou comendo» = «sto mangiando»; «estar» é «stare», nunca «essere». O gerúndio de «-ere» e «-ire» tem a mesma terminação (-endo) em italiano, enquanto o português diferencia «-endo» e «-indo» («partindo»): em italiano é «partendo». O brasileiro também usa o gerúndio para o futuro («amanhã estou viajando»); em italiano isso não funciona: «Domani parto».",
        tabela: [
          { infinito: 'parlare', gerundio: 'parlando', exemplo: 'Sto parlando con Marco.' },
          { infinito: 'prendere', gerundio: 'prendendo', exemplo: 'Sta prendendo un caffè.' },
          { infinito: 'partire', gerundio: 'partendo', exemplo: 'Stiamo partendo.' },
          { infinito: 'fare', gerundio: 'facendo', exemplo: 'Che cosa stai facendo?' },
          { infinito: 'dire', gerundio: 'dicendo', exemplo: 'Che cosa stai dicendo?' },
          { infinito: 'bere', gerundio: 'bevendo', exemplo: 'Stanno bevendo un tè.' },
        ],
        erros: [
          ['Sono mangiando.', 'Sto mangiando.', 'O auxiliar é «stare», não «essere».'],
          ['Sto mangiare.', 'Sto mangiando.', 'Depois de «stare» vai o gerúndio, não o infinitivo.'],
          ['Sto leggindo.', 'Sto leggendo.', 'Os verbos em «-ere» e «-ire» formam o gerúndio em «-endo».'],
          ['Domani sto partendo.', 'Domani parto.', 'Para o futuro não se usa «stare + gerundio».'],
        ],
      }),
      producao(5, 'Diga em voz alta o que você está fazendo agora e o que três pessoas da sua casa provavelmente estão fazendo.', 'Sto studiando italiano. Mia madre sta cucinando. Mio fratello sta guardando la televisione.'),
    ]),
    sessao('S2', 'Stare per e appena', [
      revisao(4, 'Diga cinco frases com «sto», «stai» ou «sta» + gerúndio, em voz alta.'),
      palavras(6, [
        ['sto per uscire', 'sto per uxíre', 'estou prestes a sair', ''], ['sta per piovere', 'sta per pióvere', 'está para chover', ''], ['appena', 'appéna', 'acabou de / assim que', ''], ['ho appena finito', 'o appéna finíto', 'acabei de terminar', ''], ['tra poco', 'tra póko', 'daqui a pouco', ''], ['da poco', 'da póko', 'há pouco tempo', ''],
      ]),
      gramatica(12, 'Stare per + infinito; appena', "PASSO 1: «stare per + infinitivo» indica uma ação iminente, prestes a acontecer: «Sto per uscire.» «Il treno sta per partire.» PASSO 2: no imperfetto, vira «ia fazer» ou «estava para fazer»: «Stavo per chiamarti.» (eu ia te ligar) PASSO 3: «appena + passato prossimo» indica que algo acabou de acontecer. O «appena» fica entre o auxiliar e o particípio: «Sono appena arrivato.» «Ho appena finito.» PASSO 4: o particípio concorda com o sujeito quando o auxiliar é «essere»: «Sono appena arrivata.» «Sono appena usciti.» PASSO 5: «appena» também é conjunção («assim que»): «Appena arrivo, ti chiamo.» ou, de forma mais cuidadosa, «Appena arriverò, ti chiamerò.» PASSO 6: «da poco» significa «há pouco tempo» e se usa com o presente, porque a situação continua: «Abito qui da poco.» PASSO 7: «tra poco» (ou «fra poco») significa «daqui a pouco»: «Arrivo tra poco.» PASSO 8: não confunda «ho appena mangiato» (acabei de comer) com «ho finito di mangiare» (terminei de comer).", {
        tag: 'Gerundio',
        comparacao: "«acabar de + infinitivo» do português (acabei de chegar) não tem equivalente com «finire»: em italiano diz-se «Sono appena arrivato». «Estar para» corresponde a «stare per»: «Il treno sta per partire» = o trem está para partir. Um erro frequente é traduzir «acabei de chegar» como «Ho finito di arrivare».",
        tabela: [
          { estrutura: 'sto / sta per + infinito', sentido: 'prestes a', exemplo: 'Il film sta per cominciare.' },
          { estrutura: 'stavo per + infinito', sentido: 'ia fazer / estava para', exemplo: 'Stavo per uscire quando hai chiamato.' },
          { estrutura: 'appena + passato prossimo', sentido: 'acabou de', exemplo: 'Sono appena arrivato a Roma.' },
          { estrutura: 'appena + presente', sentido: 'assim que', exemplo: 'Appena arrivo, ti chiamo.' },
          { estrutura: 'da poco', sentido: 'há pouco tempo (continua)', exemplo: 'Lavoro qui da poco.' },
          { estrutura: 'tra poco', sentido: 'daqui a pouco', exemplo: 'Il treno parte tra poco.' },
        ],
        erros: [
          ['Sto appena arrivato.', 'Sono appena arrivato.', '«Acabou de chegar»: «appena» + passato prossimo, com «essere».'],
          ['Ho finito appena.', 'Ho appena finito.', '«Appena» fica entre o auxiliar e o particípio.'],
          ['Sto per uscendo.', 'Sto per uscire.', 'Depois de «per» vai o infinitivo.'],
          ['Abito qui poco.', 'Abito qui da poco.', 'Para «há pouco tempo» falta o «da».'],
        ],
      }),
      producao(8, 'Diga oito frases: duas sobre o que acabou de acontecer, duas sobre o que está prestes a acontecer, duas sobre o que você faz «appena» chega em casa e duas com «tra poco».', 'Sono appena tornato a casa. Il film sta per cominciare. Appena arrivo, mangio.'),
    ]),
    sessao('S3', 'Ação em curso no passado: stavo + gerundio', [
      revisao(4, 'Diga em voz alta o que você acabou de fazer, o que está fazendo e o que está para fazer.'),
      palavras(5, [
        ['stavo dormendo', 'stávo dormêndo', 'eu estava dormindo', ''], ['mentre', 'méntre', 'enquanto', ''], ["all'improvviso", 'allimprovvízo', 'de repente', ''], ['stavamo uscendo', 'stavámo uxêndo', 'estávamos saindo', ''], ['che cosa stavi facendo?', 'ke kóza stávi fatchêndo', 'o que você estava fazendo?', ''],
      ]),
      gramatica(8, 'Stavo + gerundio e mentre', "PASSO 1: para uma ação em curso no passado, use o imperfetto de «stare» + gerúndio: «Stavo mangiando quando hai chiamato.» PASSO 2: o imperfetto de «stare»: stavo, stavi, stava, stavamo, stavate, stavano. PASSO 3: o fato que interrompe fica no passato prossimo (aula 22): «Stavo uscendo quando è arrivata Anna.» PASSO 4: «mentre» (enquanto) liga duas ações paralelas ou apresenta o fundo: «Mentre stavo uscendo, ho visto Marco.» PASSO 5: o imperfetto simples também serve: «Mangiavo quando hai chiamato.» A forma com «stavo» realça que a ação estava em pleno andamento. PASSO 6: perguntar e responder: «Che cosa stavi facendo?» «Stavo dormendo.» PASSO 7: não se usa com verbos de estado: «Avevo fame», e não «Stavo avendo fame». PASSO 8: «all'improvviso» (de repente) apresenta o evento que interrompe: «All'improvviso è andata via la luce.»", {
        tag: 'Gerundio',
        comparacao: "o português usa «estava comendo quando você ligou», e o italiano faz exatamente o mesmo com «stavo mangiando». A diferença é que em italiano o imperfetto simples também é muito comum nesses casos, enquanto o brasileiro prefere o gerúndio. Para escolher, a regra prática é: se quer destacar que a ação estava em pleno andamento, use «stavo + gerundio».",
        tabela: [
          { tempo: 'presente', forma: 'sto mangiando', exemplo: 'Sto mangiando adesso.' },
          { tempo: 'imperfetto', forma: 'stavo mangiando', exemplo: 'Stavo mangiando quando hai chiamato.' },
          { tempo: 'imperfetto simples', forma: 'mangiavo', exemplo: 'Mangiavo quando hai chiamato.' },
          { tempo: 'evento que interrompe', forma: 'passato prossimo', exemplo: 'Stavo uscendo quando è arrivata Anna.' },
        ],
        erros: [
          ['Stavo mangiare quando hai chiamato.', 'Stavo mangiando quando hai chiamato.', 'Depois de «stavo» vai o gerúndio.'],
          ['Sto avendo fame.', 'Ho fame.', 'Verbos de estado, como «avere», não usam a forma progressiva.'],
          ['Mentre stato uscendo, ho visto Anna.', 'Mentre stavo uscendo, ho visto Anna.', 'O imperfetto de «stare» é «stavo».'],
          ['Quando hai chiamato, stavo mangiato.', 'Quando hai chiamato, stavo mangiando.', 'Gerúndio, não particípio.'],
        ],
      }),
      dialogo(8, 'Una telefonata / Uma ligação', 'Luca telefona para Silvia, que estava no banho, e combinam de jantar.', [
        ['Luca', 'Silvia, ti ho telefonato due volte! Che cosa stavi facendo?', 'Silvia, liguei duas vezes! O que você estava fazendo?'],
        ['Silvia', 'Scusa, stavo facendo la doccia. E tu, dove sei?', 'Desculpe, estava tomando banho. E você, onde está?'],
        ['Luca', 'Sto uscendo dall\'ufficio. Sto per prendere il treno.', 'Estou saindo do escritório. Estou prestes a pegar o trem.'],
        ['Silvia', 'Allora ci vediamo tra poco: sto preparando la cena.', 'Então nos vemos daqui a pouco: estou preparando o jantar.'],
        ['Luca', 'Ottimo! Appena arrivo, ti aiuto.', 'Ótimo! Assim que eu chegar, te ajudo.'],
        ['Silvia', 'Perfetto. Stavo pensando di fare la pasta: ti va?', 'Perfeito. Estava pensando em fazer macarrão: está bom?'],
      ]),
      producao(5, 'Conte em voz alta o que você estava fazendo ontem às 20h, quando alguém ligou ou chegou.', 'Ieri sera stavo cucinando quando è arrivato mio fratello.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 30', [
      revisao(5, 'Diga em voz alta o que você está fazendo, o que acabou de fazer e o que está para fazer.'),
      exercicios(20, [
        ouvir('Sto leggendo un libro', ['Sto leggendo un libro', 'Sto per leggere un libro', 'Ho letto un libro'], 'Sto leggendo un libro', 'Ouça o gerúndio «leggendo».'),
        ouvir('Sono appena arrivato', ['Sono appena arrivato', 'Sto per arrivare', 'Sono arrivato da poco'], 'Sono appena arrivato', 'Ouça «appena».'),
        ouvir('Il treno sta per partire', ['Il treno sta per partire', 'Il treno sta partendo', 'Il treno è partito'], 'Il treno sta per partire', 'Ouça «sta per».'),
        ditado('Che cosa stai facendo', 'Escreva: Che cosa stai facendo.'),
        ditado('Ho appena finito', 'Escreva: Ho appena finito.'),
        ditado('Stavo dormendo quando hai chiamato', 'Escreva: Stavo dormendo quando hai chiamato.'),
        mc('Qual frase está correta?', ['Sto mangiando.', 'Sono mangiando.', 'Sto mangiare.'], 'Sto mangiando.', 'Stare + gerúndio.'),
        mc('Gerúndio de «bere»:', ['bevendo', 'berendo', 'bevando'], 'bevendo', 'Irregular: «bevendo».'),
        mc('«Acabei de chegar» em italiano:', ['Sono appena arrivato.', 'Ho finito di arrivare.', 'Sto per arrivare.'], 'Sono appena arrivato.', '«Appena» + passato prossimo.'),
        mc('Qual frase está correta para o futuro?', ['Domani parto.', 'Domani sto partendo.', 'Domani stavo partendo.'], 'Domani parto.', 'Futuro próximo: presente, não «stare + gerundio».'),
        lacuna('Il film ___ per cominciare.', ['sta', 'è', 'ha'], 'sta', 'Stare per + infinito.'),
        lacuna('Che cosa ___ facendo ieri sera?', ['stavi', 'stai', 'sei'], 'stavi', 'Imperfetto de «stare».'),
        lacuna('Lavoro qui ___ poco. (há pouco tempo)', ['da', 'fa', 'per'], 'da', '«Da poco» = há pouco tempo.'),
        lacuna('Sono ___ uscita. (acabei de)', ['appena', 'poco', 'ancora'], 'appena', '«Appena» entre auxiliar e particípio.'),
        ordem('Ordene: «Stavo uscendo quando è arrivata Anna.»', ['Stavo', 'uscendo', 'quando', 'è', 'arrivata', 'Anna'], 'Stavo uscendo quando è arrivata Anna.', 'Ação em curso + evento.'),
        ordem('Ordene: «Appena arrivo, ti chiamo.»', ['Appena', 'arrivo', 'ti', 'chiamo'], 'Appena arrivo, ti chiamo.', '«Appena» = assim que.'),
        livre('Escreva em italiano: Estou estudando italiano. O trem está para partir. Acabei de chegar. Eu estava dormindo quando você ligou.', 'Sto studiando italiano. Il treno sta per partire. Sono appena arrivato. Stavo dormendo quando hai chiamato.'),
      ]),
      producao(5, 'Fale 1 minuto descrevendo uma cena (a sua casa agora ou um parque): o que cada pessoa está fazendo, o que está para acontecer e o que acabou de acontecer.'),
    ]),
  ],
});
