import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 48, titulo: 'Discurso indireto', nivel: 'b1',
  objetivo: 'Relatar o que alguém disse, perguntou ou pediu, mudando os tempos verbais, os pronomes e as marcas de tempo e lugar, com verbos como «dire, chiedere, rispondere, raccontare» e «dire di + infinito».',
  nota: 'Você aprende a contar o que outras pessoas disseram sem repetir as palavras exatas. Lembre: se o verbo principal está no passado, os tempos recuam. Próxima aula: passiva.',
  sessoes: [
    sessao('S1', 'Ha detto che…', [
      revisao(5, 'Reconte em voz alta um recado que você deu ou recebeu hoje, em uma frase.'),
      palavras(8, [
        ['dire che', 'díre ke', 'dizer que', ''], ['raccontare che', 'rakkontáre ke', 'contar que', ''], ['rispondere che', 'rispôndere ke', 'responder que', ''], ['spiegare che', 'spiegáre ke', 'explicar que', ''], ['aggiungere che', 'addjúndjere ke', 'acrescentar que', ''], ['promettere che', 'promêttere ke', 'prometer que', ''], ['dichiarare che', 'dikiaráre ke', 'declarar que', ''], ['ammettere che', 'ammêttere ke', 'admitir que', ''],
      ]),
      gramatica(12, 'Dice che / ha detto che', 'PASSO 1: no discurso direto você reproduz as palavras: «Luca ha detto: “Sono stanco”». No indireto você as relata: «Luca ha detto che era stanco». PASSO 2: se o verbo principal está no presente («dice che, mi scrive che»), os tempos não mudam: «Luca dice che è stanco». PASSO 3: se o verbo principal está no passado, os tempos recuam: presente → imperfetto; passato prossimo → trapassato prossimo; futuro → condizionale passato; imperfetto → imperfetto. PASSO 4: «“Sono stanco” → Ha detto che era stanco». «“Ho finito” → Ha detto che aveva finito». «“Verrò domani” → Ha detto che sarebbe venuto il giorno dopo». PASSO 5: os pronomes mudam: «io» vira «lui/lei», «mio» vira «suo»: «“Mio padre arriva” → Ha detto che suo padre arrivava». PASSO 6: se o fato continua verdadeiro, o tempo pode ficar: «Ha detto che abita a Milano» (quando ainda mora). PASSO 7: o condizionale presente costuma virar condizionale passato: «“Vorrei restare” → Ha detto che avrebbe voluto restare» (ou «vorrebbe restare», se ainda vale); o congiuntivo presente vira imperfetto: «“Penso che sia tardi” → Ha detto che pensava che fosse tardi»; o congiuntivo imperfetto e o trapassato ficam como estão. PASSO 8: a vírgula antes de «che» não existe: «Ha detto che…», nunca «Ha detto, che…».', {
        tag: 'Discurso',
        comparacao: 'o português faz o mesmo recuo: «ele disse que estava cansado». A diferença: em italiano o futuro vira condizionale passato, composto («sarebbe venuto»), enquanto o português usa o futuro do pretérito simples («viria»). Cuidado também com o pretérito perfeito do português: «ele disse que veio» corresponde a «ha detto che era venuto» (trapassato prossimo), não a «è venuto».',
        tabela: [
          { direto: 'Sono stanco.', indireto: 'Ha detto che era stanco.' }, { direto: 'Ho finito.', indireto: 'Ha detto che aveva finito.' }, { direto: 'Verrò domani.', indireto: 'Ha detto che sarebbe venuto il giorno dopo.' }, { direto: 'Lavoravo a Roma.', indireto: 'Ha detto che lavorava a Roma.' }, { direto: 'Mio padre arriva.', indireto: 'Ha detto che suo padre arrivava.' },
        ],
        erros: [['Marco ha detto: «Sono stanco» → Marco ha detto che sono stanco.', 'Marco ha detto che era stanco.', 'Pessoa e tempo mudam.'], ['Ha detto che verrà domani (já passou).', 'Ha detto che sarebbe venuto il giorno dopo.', 'Futuro visto do passado: condizionale passato.'], ['Ha detto, che era tardi.', 'Ha detto che era tardi.', 'Sem vírgula antes de «che».'], ['Ha detto che ho finito.', 'Ha detto che aveva finito.', 'Pessoa e tempo mudam.']],
      }),
      producao(5, 'Diga em voz alta três frases de um amigo e depois relate-as: «Mi ha detto che…».'),
    ]),
    sessao('S2', 'Perguntas e pedidos', [
      revisao(4, 'Passe para o indireto: «Sono stanca», «Ho mangiato», «Domani parto».'),
      palavras(6, [
        ['chiedere se', 'kiêdere se', 'perguntar se', ''], ['chiedere di + infinito', 'kiêdere di', 'pedir para', ''], ['domandare', 'domandáre', 'perguntar', ''], ['ordinare di', 'ordináre di', 'ordenar que', ''], ['consigliare di', 'konsiliáre di', 'aconselhar a', ''], ['suggerire di', 'suddjeríre di', 'sugerir que', ''],
      ]),
      gramatica(12, 'Mi ha chiesto se…, mi ha detto di…', 'PASSO 1: perguntas sim/não viram «se»: «“Hai fame?” → Mi ha chiesto se avevo fame». PASSO 2: perguntas com palavras interrogativas mantêm a palavra: «“Dove abiti?” → Mi ha chiesto dove abitavo». PASSO 3: não há ponto de interrogação nem inversão no indireto. PASSO 4: ordens e pedidos com imperativo viram «di + infinito»: «“Aspetta!” → Mi ha detto di aspettare». PASSO 5: negativo: «di non + infinito»: «“Non parlare!” → Mi ha detto di non parlare». PASSO 6: pedidos educados: «Mi ha chiesto di aiutarlo». PASSO 7: conselhos: «Mi ha consigliato di restare a casa», «Mi ha suggerito di chiamare un medico». PASSO 8: marcas de tempo e lugar mudam: «oggi → quel giorno», «domani → il giorno dopo», «ieri → il giorno prima», «ora → allora», «qui → lì», «questo → quello».', {
        tag: 'Discurso',
        comparacao: 'o português costuma usar «que» e o subjuntivo: «mandou que eu esperasse». O italiano usa «di + infinito» quando o sujeito é claro: «mi ha detto di aspettare». Também diferente: «chiedere» + «se» em perguntas (não «che»).',
        tabela: [
          { direto: 'Hai fame?', indireto: 'Mi ha chiesto se avevo fame.' }, { direto: 'Dove abiti?', indireto: 'Mi ha chiesto dove abitavo.' }, { direto: 'Aspetta!', indireto: 'Mi ha detto di aspettare.' }, { direto: 'Non parlare!', indireto: 'Mi ha detto di non parlare.' }, { direto: 'Resta a casa, per favore.', indireto: 'Mi ha chiesto di restare a casa.' },
        ],
        erros: [['Mi ha chiesto che se avevo fame.', 'Mi ha chiesto se avevo fame.', 'Só um conector: «se».'], ['Mi ha detto che aspettare.', 'Mi ha detto di aspettare.', 'Imperativo: di + infinito.'], ['Mi ha ordinato di non parlato.', 'Mi ha ordinato di non parlare.', 'Infinitivo.'], ['Mi ha chiesto dove abito oggi (relato de ontem).', 'Mi ha chiesto dove abitavo.', 'O tempo recua.']],
      }),
      producao(8, 'Reconte em voz alta oito conversas curtas: duas perguntas, duas ordens, duas afirmações e duas promessas.'),
    ]),
    sessao('S3', 'Contar uma conversa', [
      revisao(4, 'Diga em voz alta como se relata «Domani sono libero», «Ho perso le chiavi», «Resta qui!».'),
      palavras(5, [
        ['quel giorno', 'kuel djórno', 'naquele dia', ''], ['il giorno dopo', 'il djórno dôpo', 'no dia seguinte', ''], ['il giorno prima', 'il djórno prima', 'no dia anterior', ''], ['lì', 'lì', 'lá', ''], ['allora', 'allôra', 'então, naquele momento', ''],
      ]),
      gramatica(8, 'Dire, chiedere e raccontare', 'PASSO 1: sequência típica: «Ha detto che… Poi ha chiesto se… e mi ha pregato di…». PASSO 2: use verbos específicos para dar cor: «ha risposto, ha aggiunto, ha spiegato, ha promesso, ha ammesso». PASSO 3: evite repetir «ha detto» em todas as frases. PASSO 4: ao relatar boatos, use «dicono che, si dice che, pare che». PASSO 5: para citar sem mudar os tempos, mantenha as aspas: «Ha detto: “Vengo subito”».', {
        tag: 'Discurso',
        comparacao: 'em português contamos fofocas com «ela falou que… e aí ele falou que…», sem mudar muito os tempos. O italiano escrito é mais cuidadoso com o recuo dos tempos; na fala, a pressa pode relaxá-lo, mas o aluno deve dominar a forma completa.',
        tabela: [
          { verbo: 'dire che', funcao: 'afirmação', exemplo: 'Ha detto che era stanca.' }, { verbo: 'chiedere se', funcao: 'pergunta', exemplo: 'Ha chiesto se avevo tempo.' }, { verbo: 'rispondere che', funcao: 'resposta', exemplo: 'Ha risposto che non poteva.' }, { verbo: 'promettere che', funcao: 'promessa', exemplo: 'Ha promesso che avrebbe chiamato.' },
        ],
        erros: [['Ha risposto, che non poteva.', 'Ha risposto che non poteva.', 'Sem vírgula.'], ['Ha promesso che chiamerà (relato de ontem).', 'Ha promesso che avrebbe chiamato.', 'Condizionale passato.'], ['Ha chiesto che avessi tempo.', 'Ha chiesto se avevo tempo.', 'Pergunta indireta com «se».'], ['Ha spiegato di che era stanco.', 'Ha spiegato che era stanco.', 'Sem «di» antes de «che».']],
      }),
      dialogo(8, 'Sai cosa mi ha detto Anna?', 'Francesca conta a Paolo uma conversa que teve com Anna no dia anterior.', [
        ['Francesca', 'Paolo, sai cosa mi ha detto Anna ieri?', 'Paolo, sabe o que Anna me disse ontem?'],
        ['Paolo', 'No, racconta. Mi ha chiesto se eri libera sabato, ma non so altro.', 'Não, conta. Ela me perguntou se você estava livre no sábado, mas não sei mais nada.'],
        ['Francesca', 'Mi ha detto che il suo capo le aveva proposto un lavoro a Milano.', 'Ela me disse que o chefe dela tinha proposto um trabalho em Milão.'],
        ['Paolo', 'Davvero? E lei che cosa ha risposto?', 'Sério? E o que ela respondeu?'],
        ['Francesca', 'Ha risposto che ci avrebbe pensato e che avrebbe deciso il giorno dopo.', 'Respondeu que pensaria e que decidiria no dia seguinte.'],
        ['Paolo', 'E poi ti ha chiesto un consiglio?', 'E depois pediu um conselho a você?'],
        ['Francesca', 'Sì. Mi ha chiesto se secondo me doveva accettare, e io le ho detto di parlarne con la famiglia.', 'Sim. Perguntou se, na minha opinião, devia aceitar, e eu disse a ela que falasse com a família.'],
        ['Paolo', 'Giusto. Ti ha anche detto quando sarebbe partita?', 'Certo. Ela também disse quando partiria?'],
        ['Francesca', 'Ha aggiunto che, se avesse accettato, sarebbe partita a gennaio.', 'Acrescentou que, se aceitasse, partiria em janeiro.'],
        ['Paolo', 'Mi ha promesso che mi avrebbe chiamato lei appena avesse deciso.', 'Ela me prometeu que ligaria assim que decidisse.'],
      ]),
      producao(5, 'Reconte em voz alta, com «ha detto che» e «ha chiesto se», uma conversa que você teve recentemente.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 48', [
      revisao(5, 'Reconte em voz alta o último recado de WhatsApp que você recebeu.'),
      exercicios(20, [
        ouvir('Ha detto che era stanco', ['Ha detto che era stanco', 'Ha detto che è stanco', 'Ha detto che sarà stanco'], 'Ha detto che era stanco', 'Ouça «era».'),
        ouvir('Mi ha chiesto se avevo fame', ['Mi ha chiesto se avevo fame', 'Mi ha chiesto che avevo fame', 'Mi ha chiesto se ho fame'], 'Mi ha chiesto se avevo fame', 'Pergunta indireta.'),
        ouvir('Mi ha detto di aspettare', ['Mi ha detto di aspettare', 'Mi ha detto che aspettare', 'Mi ha detto aspetta'], 'Mi ha detto di aspettare', 'Imperativo vira di + infinito.'),
        ditado('Ha detto che sarebbe venuto il giorno dopo', 'Escreva: Ha detto che sarebbe venuto il giorno dopo.'), ditado('Mi ha consigliato di restare a casa', 'Escreva: Mi ha consigliato di restare a casa.'), ditado('Ha risposto che non poteva', 'Escreva: Ha risposto che non poteva.'),
        mc('«Ele disse que estava cansado» em italiano:', ['Ha detto che era stanco.', 'Ha detto che è stanco.', 'Ha detto che sia stanco.'], 'Ha detto che era stanco.', 'Recuo do presente.'),
        mc('«Pediu-me para esperar» em italiano:', ['Mi ha chiesto di aspettare.', 'Mi ha chiesto che aspettare.', 'Mi ha chiesto aspettare.'], 'Mi ha chiesto di aspettare.', 'Di + infinito.'),
        mc('«Ele disse que ligaria» em italiano:', ['Ha detto che avrebbe telefonato.', 'Ha detto che telefonerebbe.', 'Ha detto che telefonerà (relato antigo).'], 'Ha detto che avrebbe telefonato.', 'Condizionale passato.'),
        mc('«Perguntou se eu tinha fome» em italiano:', ['Ha chiesto se avevo fame.', 'Ha chiesto che avevo fame.', 'Ha chiesto se ho avuto fame.'], 'Ha chiesto se avevo fame.', 'Pergunta indireta.'),
        lacuna('Luca ha detto che ___ finito. (avere)', ['aveva', 'ha', 'avrà'], 'aveva', 'Trapassato.'),
        lacuna('Mi ha chiesto ___ avevo tempo.', ['se', 'che', 'di'], 'se', 'Pergunta sim/não.'),
        lacuna('Mi ha detto ___ non parlare.', ['di', 'che', 'se'], 'di', 'Negativo: di non + infinito.'),
        lacuna('Ha detto che ___ il giorno dopo. (partire)', ['sarebbe partito', 'è partito', 'partirebbe'], 'sarebbe partito', 'Futuro visto do passado.'),
        ordem('Ordene: «Mi ha chiesto se avevo fame.»', ['Mi', 'ha', 'chiesto', 'se', 'avevo', 'fame'], 'Mi ha chiesto se avevo fame.', 'Pergunta indireta.'),
        ordem('Ordene: «Mi ha detto di non parlare.»', ['Mi', 'ha', 'detto', 'di', 'non', 'parlare'], 'Mi ha detto di non parlare.', 'Negativo.'),
        livre('Escreva em italiano: Ela disse que estava cansada. Perguntou se eu podia ajudá-la. Pediu-me para esperar.', 'Ha detto che era stanca. Ha chiesto se potevo aiutarla. Mi ha chiesto di aspettare.'),
      ]),
      producao(5, 'Fale 1 minuto contando uma conversa em que alguém lhe contou algo importante.'),
    ]),
  ],
});
