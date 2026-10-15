import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 17, titulo: 'Passato prossimo com avere', nivel: 'a1',
  objetivo: 'Contar o que aconteceu no passado recente com o passato prossimo dos verbos que usam «avere», formar os particípios regulares e os irregulares mais comuns, e usar os marcadores de tempo e os advérbios «già», «ancora» e «mai».',
  nota: 'Você conta o que fez ontem, na semana passada e no fim de semana, com os verbos que usam «avere». Na próxima aula você faz o simulado do A1. Os verbos com «essere» (sono andato) vêm no A2.',
  sessoes: [
    sessao('S1', 'Formar o passato prossimo', [
      revisao(5, 'Diga em voz alta o que você gosta de fazer no tempo livre. Depois diga as formas de «avere»: ho, hai, ha, abbiamo, avete, hanno.'),
      palavras(8, [
        ['ieri', 'iéri', 'ontem', ''], ['ieri sera', 'iéri sêra', 'ontem à noite', ''], ['stamattina', 'stamattína', 'esta manhã', ''], ['la settimana scorsa', 'la settimána skôrsa', 'a semana passada', ''], ['due giorni fa', 'dúe djôrni fa', 'há dois dias', ''], ['l\'anno scorso', 'lánno skôrso', 'o ano passado', ''], ['il fine settimana', 'il fíne settimána', 'o fim de semana', ''], ['già', 'djá', 'já', ''],
      ]),
      gramatica(12, 'Passato prossimo com avere', 'PASSO 1: o passato prossimo é o tempo do passado mais usado na conversa. Ele é composto por duas partes: o presente de um verbo auxiliar («avere» ou «essere») e o particípio passado do verbo principal. PASSO 2: nesta aula, o auxiliar é «avere»: ho, hai, ha, abbiamo, avete, hanno. PASSO 3: o particípio regular se forma trocando a terminação do infinitivo: «-are» → «-ato» (parlare → parlato); «-ere» → «-uto» (vendere → venduto); «-ire» → «-ito» (finire → finito). PASSO 4: exemplos completos: «Ho parlato con Marco.» «Hai venduto la macchina?» «Ha finito il lavoro.» «Abbiamo mangiato la pizza.» «Avete dormito bene?» «Hanno capito la lezione.» PASSO 5: o particípio não muda com «avere» quando o objeto vem depois: «Ho comprato le scarpe.» PASSO 6: o passato prossimo corresponde, em português, ao pretérito perfeito: «Ho mangiato» = «comi». PASSO 7: use os marcadores: ieri, ieri sera, stamattina, la settimana scorsa, due giorni fa, l\'anno scorso, il fine settimana scorso. PASSO 8: a ordem normal é sujeito + auxiliar + particípio + resto: «Ieri ho studiato due ore.» ou «Ho studiato due ore ieri.» PASSO 9: alguns verbos de movimento e de estado (andare, venire, uscire, stare, arrivare, partire…) usam «essere». Eles vêm no A2; por ora, use «avere» apenas com os verbos desta aula.', {
        tag: 'Passato prossimo',
        comparacao: 'o português também forma tempos compostos com «ter» («tenho comido»), mas o sentido é diferente: o português diz «comi» para ação terminada, e «tenho comido» para ação repetida até agora. O italiano «ho mangiato» equivale ao pretérito perfeito «comi»: não o traduza por «tenho comido». O auxiliar vem antes do particípio e, entre os dois, só entram alguns advérbios curtos («già», «mai», «ancora»).',
        tabelas: [
          { titulo: 'avere (ter), presente', linhas: [
            { pronome: 'io', forma: 'ho', exemplo: 'Ho mangiato.' }, { pronome: 'tu', forma: 'hai', exemplo: 'Hai capito?' }, { pronome: 'lui / lei / Lei', forma: 'ha', exemplo: 'Ha finito.' },
            { pronome: 'noi', forma: 'abbiamo', exemplo: 'Abbiamo parlato.' }, { pronome: 'voi', forma: 'avete', exemplo: 'Avete dormito?' }, { pronome: 'loro', forma: 'hanno', exemplo: 'Hanno comprato il pane.' },
          ] },
          { titulo: 'Particípios regulares', linhas: [
            { infinitivo: 'parlare', participio: 'parlato', exemplo: 'Ieri ho parlato con lui.' }, { infinitivo: 'mangiare', participio: 'mangiato', exemplo: 'Ha mangiato al bar.' }, { infinitivo: 'vendere', participio: 'venduto', exemplo: 'Hanno venduto la casa.' },
            { infinitivo: 'ricevere', participio: 'ricevuto', exemplo: 'Ho ricevuto un messaggio.' }, { infinitivo: 'finire', participio: 'finito', exemplo: 'Abbiamo finito alle sei.' }, { infinitivo: 'dormire', participio: 'dormito', exemplo: 'Hai dormito bene?' },
          ] },
        ],
        erros: [['Ho parlo con Marco.', 'Ho parlato con Marco.', 'Particípio de «-are»: «-ato».'], ['Ho mangiare la pizza.', 'Ho mangiato la pizza.', 'Depois de «avere», o particípio, não o infinitivo.'], ['Io ha finito.', 'Io ho finito.', 'Auxiliar concorda: «io ho».'], ['Ho dormiuto bene.', 'Ho dormito bene.', 'Particípio de «-ire»: «-ito».']],
      }),
      producao(5, 'Diga em voz alta seis frases sobre ontem com os verbos parlare, mangiare, finire, dormire, ricevere e vendere.'),
    ]),
    sessao('S2', 'Particípios irregulares', [
      revisao(4, 'Diga em voz alta cinco particípios regulares: -ato, -uto, -ito. Depois use cada um numa frase com «ieri».'),
      palavras(6, [
        ['fare, fatto', 'fáre, fátto', 'fazer, feito', ''], ['dire, detto', 'díre, dêtto', 'dizer, dito', ''], ['leggere, letto', 'lédjere, létto', 'ler, lido', ''], ['scrivere, scritto', 'skrívere, skrítto', 'escrever, escrito', ''], ['vedere, visto', 'vedêre, vísto', 'ver, visto', ''], ['prendere, preso', 'préndere, prêzo', 'pegar, pegado', ''],
      ]),
      gramatica(12, 'Particípios irregulares mais frequentes', 'PASSO 1: nem todos os particípios são regulares. Os verbos em «-ere» são os mais irregulares. PASSO 2: decore os mais usados com «avere»: fare → fatto; dire → detto; leggere → letto; scrivere → scritto; vedere → visto; prendere → preso; aprire → aperto; chiudere → chiuso; mettere → messo; avere → avuto; bere → bevuto. PASSO 3: os modais e «sapere» têm particípio regular em «-uto»: volere → voluto, potere → potuto, dovere → dovuto, sapere → saputo. PASSO 4: «conoscere → conosciuto». PASSO 5: «ho fatto» (fiz), «ho detto» (disse), «ho letto» (li), «ho scritto» (escrevi), «ho visto» (vi), «ho preso» (peguei, tomei), «ho aperto» (abri), «ho chiuso» (fechei), «ho messo» (pus), «ho avuto» (tive), «ho bevuto» (bebi). PASSO 6: «prendere» é usado para transporte, comida e bebida: «Ho preso il treno.» «Ho preso un caffè.» PASSO 7: o passato prossimo de «essere» usa o próprio «essere»: «sono stato». Isso fica para a aula 19. PASSO 8: a pronúncia de «letto» e «detto» tem consoante dobrada: ouça os áudios.', {
        tag: 'Passato prossimo',
        comparacao: 'muitos particípios italianos lembram os portugueses: fatto (feito), detto (dito), scritto (escrito), aperto (aberto), visto (visto), messo (posto). Use isso a seu favor. Mas atenção ao falso amigo «preso», que é o particípio de «prendere» (pegar), e não «preso» no sentido de detido (que se diz «arrestato»).',
        tabela: [
          { infinitivo: 'fare', participio: 'fatto', exemplo: 'Ho fatto la spesa.' }, { infinitivo: 'dire', participio: 'detto', exemplo: 'Hai detto la verità.' }, { infinitivo: 'leggere', participio: 'letto', exemplo: 'Ho letto un libro.' }, { infinitivo: 'scrivere', participio: 'scritto', exemplo: 'Ha scritto un messaggio.' },
          { infinitivo: 'vedere', participio: 'visto', exemplo: 'Abbiamo visto un film.' }, { infinitivo: 'prendere', participio: 'preso', exemplo: 'Ho preso il treno.' }, { infinitivo: 'aprire', participio: 'aperto', exemplo: 'Ha aperto la finestra.' }, { infinitivo: 'chiudere', participio: 'chiuso', exemplo: 'Hanno chiuso il bar.' },
          { infinitivo: 'mettere', participio: 'messo', exemplo: 'Ho messo le chiavi sul tavolo.' }, { infinitivo: 'bere', participio: 'bevuto', exemplo: 'Ho bevuto un tè.' }, { infinitivo: 'avere', participio: 'avuto', exemplo: 'Ho avuto un problema.' },
        ],
        erros: [['Ho fato la spesa.', 'Ho fatto la spesa.', 'Dois «t» em «fatto».'], ['Ho leggeto un libro.', 'Ho letto un libro.', 'Particípio irregular de «leggere».'], ['Ho prendato il treno.', 'Ho preso il treno.', 'Particípio de «prendere»: «preso».'], ['Ha scrivuto un messaggio.', 'Ha scritto un messaggio.', 'Particípio de «scrivere»: «scritto».']],
      }),
      producao(8, 'Conte em voz alta o que você fez ontem, usando pelo menos cinco particípios irregulares: fatto, letto, visto, preso, scritto, detto.'),
    ]),
    sessao('S3', 'Negação, perguntas e advérbios', [
      revisao(4, 'Diga em voz alta o particípio de dez verbos: fare, dire, leggere, scrivere, vedere, prendere, aprire, chiudere, mettere, bere.'),
      palavras(5, [
        ['già', 'djá', 'já', ''], ['non… ancora', 'non ankôra', 'ainda não', ''], ['mai', 'mái', 'nunca, alguma vez', ''], ['sempre', 'sêmpre', 'sempre', ''], ['appena', 'appêna', 'acabou de, mal', ''], ['una volta', 'úna vôlta', 'uma vez', ''],
      ]),
      gramatica(8, 'Não, já, ainda não e perguntas', 'PASSO 1: a negação entra antes do auxiliar: «Non ho mangiato.» «Non abbiamo visto il film.» PASSO 2: nas perguntas, a ordem da frase não muda; a entonação e o ponto de interrogação marcam a pergunta: «Hai mangiato?» «Avete finito?». PASSO 3: com palavras interrogativas, elas vêm antes: «Che cosa hai fatto?» «Dove hai mangiato?» «Con chi hai parlato?». PASSO 4: «già» (já) fica entre o auxiliar e o particípio: «Hai già mangiato?» PASSO 5: «non… ancora» (ainda não): «Non ho ancora mangiato.» PASSO 6: «mai» (alguma vez, em perguntas): «Hai mai visto il mare?» E com negação, «non… mai»: «Non ho mai visto il mare.» PASSO 7: «sempre» (sempre) fica entre o auxiliar e o particípio: «Ho sempre studiato italiano.» PASSO 8: «appena» (acabei de) também: «Ho appena finito.» PASSO 9: respostas curtas: «Sì, ho già mangiato.» «No, non ancora.»', {
        tag: 'Passato prossimo',
        comparacao: 'em português, «já» e «ainda não» ficam em posições mais livres («já comi», «comi já»). Em italiano, o normal é ficarem entre o auxiliar e o particípio: «ho già mangiato». Outra diferença: em português dizemos «nunca vi o mar»; o italiano, com «mai» depois do auxiliar, pede «non»: «non ho mai visto il mare».',
        tabela: [
          { italiano: 'Hai già mangiato?', pt: 'Você já comeu?', posicao: 'já' }, { italiano: 'Non ho ancora mangiato.', pt: 'Ainda não comi.', posicao: 'ainda não' }, { italiano: 'Hai mai visto il mare?', pt: 'Você já viu o mar alguma vez?', posicao: 'alguma vez' }, { italiano: 'Non ho mai visto Venezia.', pt: 'Nunca vi Veneza.', posicao: 'nunca' }, { italiano: 'Ho sempre studiato italiano.', pt: 'Sempre estudei italiano.', posicao: 'sempre' }, { italiano: 'Ho appena finito.', pt: 'Acabei de terminar.', posicao: 'acabei de' },
        ],
        erros: [['Ho mangiato già.', 'Ho già mangiato.', '«Già» entra entre o auxiliar e o particípio.'], ['Ho non mangiato.', 'Non ho mangiato.', 'O «non» vem antes do auxiliar.'], ['Non ho visto mai il mare.', 'Non ho mai visto il mare.', '«Mai» fica entre o auxiliar e o particípio.'], ['Hai fatto che cosa?', 'Che cosa hai fatto?', 'A palavra interrogativa abre a frase.']],
      }),
      dialogo(8, 'Cosa hai fatto ieri? / O que você fez ontem?', 'Elena e Giorgio conversam na segunda-feira.', [
        ['Elena', 'Ciao, Giorgio! Cosa hai fatto nel fine settimana?', 'Oi, Giorgio! O que você fez no fim de semana?'], ['Giorgio', 'Sabato ho dormito fino a tardi, poi ho preparato il pranzo per i miei amici.', 'No sábado dormi até tarde, depois preparei o almoço para os meus amigos.'], ['Elena', 'Bello! Che cosa avete mangiato?', 'Que legal! O que vocês comeram?'], ['Giorgio', 'Abbiamo mangiato la pasta e abbiamo bevuto un buon vino. E tu? Hai già visto il nuovo film?', 'Comemos massa e bebemos um bom vinho. E você? Já viu o filme novo?'], ['Elena', 'Non ancora. Domenica ho letto un libro e ho scritto a mia sorella.', 'Ainda não. No domingo li um livro e escrevi para a minha irmã.'], ['Giorgio', 'Allora andiamo insieme al cinema sabato prossimo!', 'Então vamos juntos ao cinema no próximo sábado!'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Depois conte você o seu último fim de semana, em cinco frases com o passato prossimo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 17', [
      revisao(5, 'Conte em voz alta o que você fez ontem, em oito frases, com verbos regulares e irregulares.'),
      exercicios(20, [
        ouvir('Ieri ho mangiato la pizza', ['Ieri ho mangiato la pizza', 'Ieri mangio la pizza', 'Ieri ha mangiato la pizza'], 'Ieri ho mangiato la pizza', 'Ouça «ho mangiato».'), ouvir('Non ho ancora finito', ['Non ho ancora finito', 'Ho già finito', 'Non ho mai finito'], 'Non ho ancora finito', 'Ouça «non… ancora».'), ouvir('Abbiamo visto un film', ['Abbiamo visto un film', 'Abbiamo letto un film', 'Hanno visto un film'], 'Abbiamo visto un film', 'Ouça o particípio.'),
        ditado('Ho letto un libro', 'Escreva: Ho letto un libro.'), ditado('Hai già mangiato', 'Escreva: Hai già mangiato.'), ditado('Ha preso il treno stamattina', 'Escreva: Ha preso il treno stamattina.'),
        mc('Qual é o particípio de «finire»?', ['finito', 'finuto', 'finato'], 'finito', 'Verbos em «-ire»: «-ito».'), mc('Qual é o particípio de «fare»?', ['fatto', 'fato', 'fatuto'], 'fatto', 'Irregular, com dois «t».'), mc('Qual é a ordem mais natural?', ['Ho già mangiato.', 'Ho mangiato già.', 'Già ho mangiato.'], 'Ho già mangiato.', '«Già» entre auxiliar e particípio.'), mc('Como se diz «nunca vi o mar»?', ['Non ho mai visto il mare.', 'Ho mai visto non il mare.', 'Ho non mai visto il mare.'], 'Non ho mai visto il mare.', '«Non… mai».'),
        lacuna('Ieri io ___ molto. (studiare)', ['ho studiato', 'ha studiato', 'studio'], 'ho studiato', 'Passato prossimo.'), lacuna('Loro ___ la casa. (vendere)', ['hanno venduto', 'hanno vendato', 'hanno vendiuto'], 'hanno venduto', 'Particípio em «-uto».'), lacuna('Noi ___ un messaggio. (scrivere)', ['abbiamo scritto', 'abbiamo scrivuto', 'abbiamo scritti'], 'abbiamo scritto', 'Irregular.'), lacuna('Tu ___ aperto la finestra? (já)', ['hai già', 'hai ancora', 'hai mai'], 'hai già', 'Pergunta com «già».'),
        ordem('Ordene: «Ieri ho letto un libro.»', ['Ieri', 'ho', 'letto', 'un', 'libro'], 'Ieri ho letto un libro.', 'Tempo, auxiliar, particípio.'), ordem('Ordene: «Non ho ancora mangiato.»', ['Non', 'ho', 'ancora', 'mangiato'], 'Non ho ancora mangiato.', 'Negação antes do auxiliar.'),
        livre('Escreva em italiano: Ontem eu li um livro e vi um filme. Ainda não escrevi para minha irmã.', 'Ieri ho letto un libro e ho visto un film. Non ho ancora scritto a mia sorella.'),
        lacuna('Stamattina ho ___ un caffè. (bebi)', ['bevato', 'bevuto', 'beviuto'], 'bevuto', '«Bere» tem o particípio «bevuto».'),
        lacuna('Marco ha ___ un messaggio. (escreveu)', ['scrivuto', 'scrivato', 'scritto'], 'scritto', 'Particípio irregular de «scrivere»: «scritto».'),
        lacuna('Voi avete ___ la finestra? (fechado)', ['chiuso', 'chiudato', 'chiuduto'], 'chiuso', 'Particípio irregular de «chiudere»: «chiuso».'),
        lacuna('Non ho ___ capito. (ainda)', ['mai', 'ancora', 'già'], 'ancora', '«Non… ancora» é «ainda não».'),
        lacuna('Ieri sera ___ dormito molto. (eu)', ['ho', 'hanno', 'abbiamo'], 'ho', 'Com «io» o auxiliar é «ho».'),
        mc('Qual é o particípio de «vedere»?', ['vedeto', 'visto', 'veduto'], 'visto', 'Particípio irregular: «visto».'),
        mc('Qual é o particípio de «aprire»?', ['aprito', 'aprato', 'aperto'], 'aperto', 'Particípio irregular: «aperto».'),
        mc('Como se diz «Ainda não vi o filme»?', ['Ho non ancora visto il film.', 'Non ho ancora visto il film.', 'Non ancora ho visto il film.'], 'Non ho ancora visto il film.', 'A negação vem antes do auxiliar, e «ancora» antes do particípio.'),
        mc('O que significa «due giorni fa»?', ['há dois dias', 'daqui a dois dias', 'dois dias depois'], 'há dois dias', '«Fa» depois de um período indica tempo passado.'),
        ordem('Ordene: «Stamattina abbiamo preso il caffè al bar.»', ['Stamattina', 'abbiamo', 'preso', 'il', 'caffè', 'al', 'bar.'], 'Stamattina abbiamo preso il caffè al bar.', 'Auxiliar «abbiamo» + particípio «preso».'),
        ordem('Ordene: «Hai già letto il messaggio?»', ['Hai', 'già', 'letto', 'il', 'messaggio?'], 'Hai già letto il messaggio?', '«Già» fica entre o auxiliar e o particípio.'),
        livre('Escreva em italiano: Ontem escrevi uma mensagem e li um livro.', 'Ieri ho scritto un messaggio e ho letto un libro.'),
        livre('Escreva em italiano: Você já viu o filme? Ainda não.', 'Hai già visto il film? Non ancora.'),
      ]),
      producao(5, 'Conte em voz alta o seu último fim de semana, em dez frases, com marcadores de tempo e pelo menos quatro particípios irregulares.'),
    ]),
  ],
});
