import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 60, titulo: 'Pronomes e preposições difíceis', nivel: 'b1',
  objetivo: 'Usar com segurança o «a» pessoal, reconhecer o leísmo sem adotá-lo, escolher a preposição certa depois de verbos comuns (e o «de que»), rever «por» e «para» e colocar corretamente os pronomes com infinitivo, gerúndio e imperativo.',
  nota: 'Você já usa o «a» pessoal, escolhe melhor as preposições e coloca os pronomes no lugar certo, com acento escrito quando preciso. Esses são os pontos em que brasileiros mais tropeçam. Próxima aula: revisão dos tempos.',
  sessoes: [
    sessao('S1', 'O «a» pessoal e os pronomes de objeto', [
      revisao(5, 'Reveja a aula 59. Explique em voz alta, sem dizer o nome, dois objetos de casa com «sirve para» e «se parece a».'),
      palavras(8, [
        ['ayudar a alguien', 'aiudár a álguien', 'ajudar alguém', ''], ['preguntar a alguien', 'pregüntar a álguien', 'perguntar a alguém', ''], ['llamar a alguien', 'lhamár a álguien', 'chamar ou ligar para alguém', ''], ['esperar a alguien', 'esperár a álguien', 'esperar alguém', ''],
        ['conocer a alguien', 'konothér a álguien', 'conhecer alguém', ''], ['visitar a alguien', 'bisitár a álguien', 'visitar alguém', ''], ['querer a alguien', 'kerér a álguien', 'amar ou gostar de alguém', ''], ['invitar a alguien', 'imbitár a álguien', 'convidar alguém', ''],
      ]),
      gramatica(12, 'O «a» pessoal e o leísmo', 'PASSO 1: o objeto direto é quem recebe a ação do verbo: «Veo la casa», «Veo a Ana». Quando esse objeto é uma pessoa determinada, o espanhol põe «a» antes dele: «Veo a Ana», «Llamo a mi hermano». Isso se chama «a» pessoal. PASSO 2: o «a» pessoal também vale para o animal que tem nome ou é querido («Quiero mucho a mi gato»), para «alguien», «nadie» e «quién» («No veo a nadie», «¿A quién esperas?»). PASSO 3: não se usa depois de «tener» nem de «hay» para dizer o que há: «Tengo dos hermanos», «Hay muchos estudiantes». PASSO 4: não se usa com coisas: «Busco un hotel», e não «busco a un hotel». PASSO 5: com pessoa indeterminada (qualquer uma), o «a» some: «Busco un médico que hable alemán»; com pessoa determinada, ele volta: «Busco al médico de mi madre». PASSO 6: os pronomes de objeto direto são «lo» (ele), «la» (ela), «los» e «las»; o de objeto indireto é «le» (a ele, a ela, a usted) e «les». «Lo vi» = vi o Pablo; «Le di el libro» = dei o livro a ele ou a ela. PASSO 7: CAUTELA, leísmo: na Espanha muitas pessoas dizem «le» no lugar de «lo» quando o objeto direto é um homem: «Le vi ayer» em vez de «Lo vi ayer». A norma culta aceita esse uso só para pessoa masculina no singular. Na América Latina predomina «lo». PASSO 8: já o laísmo («La dije la verdad») e o loísmo («Lo di un libro») são considerados incorretos pela norma: o que se dá a alguém é objeto indireto, e para isso o pronome é «le», seja homem ou mulher: «Le dije la verdad», «Le di un libro». PASSO 9: como estudante, use «lo» e «la» para objeto direto e «le» para objeto indireto; reconheça o leísmo quando ouvir, sem precisar adotá-lo.', {
        tag: 'Pronomes',
        comparacao: 'em português escrevemos «vejo a Ana» e «vejo o Pedro» sem preposição, e dizemos «chamo o meu irmão». Em espanhol, o «a» é obrigatório diante de pessoa determinada: «veo a Ana», «llamo a mi hermano». Além disso, «tener» com pessoa não leva «a»: «tengo dos hermanos». O leísmo, que o português europeu e o brasileiro não têm, é só um uso regional da Espanha.',
        exemplos: [
          ['Veo a Ana todos los días.', 'Vejo a Ana todos os dias.'],
          ['Tengo dos hermanos.', 'Tenho dois irmãos.'],
          ['Busco un médico que hable alemán.', 'Procuro um médico que fale alemão (qualquer um).'],
          ['Busco al médico de mi madre.', 'Procuro o médico da minha mãe (um específico).'],
          ['Quiero mucho a mi gato.', 'Gosto muito do meu gato.'],
          ['¿A quién esperas?', 'Quem você espera?'],
          ['Lo vi ayer en la calle. (Pablo)', 'Eu o vi ontem na rua. (Pablo)'],
          ['Le dije la verdad a mi madre.', 'Eu disse a verdade à minha mãe.'],
        ],
        tabela: [
          { pronome: 'lo, la', funcao: 'objeto direto (pessoa ou coisa)', exemplo: 'La llamo mañana. (a Ana)' },
          { pronome: 'los, las', funcao: 'objeto direto, plural', exemplo: 'Los veo luego.' },
          { pronome: 'le, les', funcao: 'objeto indireto (para quem)', exemplo: 'Le escribo un correo.' },
          { pronome: 'le (leísmo)', funcao: 'objeto direto, homem (Espanha)', exemplo: 'Le vi ayer. (a Pablo)' },
          { pronome: 'la dije, lo di', funcao: 'laísmo e loísmo: incorretos', exemplo: 'Correto: Le dije, le di.' },
        ],
        erros: [['Veo Ana todos los días.', 'Veo a Ana todos los días.', 'Pessoa determinada como objeto direto pede «a».'], ['Tengo a dos hermanos.', 'Tengo dos hermanos.', 'Depois de «tener», não se usa o «a» pessoal.'], ['La dije la verdad.', 'Le dije la verdad.', 'O que se diz a alguém é objeto indireto: «le», sem distinguir gênero.'], ['Busco a un hotel barato.', 'Busco un hotel barato.', 'Coisas não levam «a» pessoal.']],
      }),
      producao(5, 'Diga seis frases com o «a» pessoal: «Veo a… Llamo a… Espero a… Conozco a… Invito a… Quiero a…». Depois repita três delas trocando o objeto por um pronome: «La llamo», «Los invito».'),
    ]),
    sessao('S2', 'Verbos com preposição, «de que» e por × para', [
      revisao(4, 'Diga cinco frases com o «a» pessoal e depois troque o objeto por «lo», «la», «los» ou «las».'),
      palavras(6, [
        ['pensar en', 'pensár en', 'pensar em', ''], ['soñar con', 'sonhár kon', 'sonhar com', ''], ['depender de', 'dependér de', 'depender de', ''], ['acordarse de', 'akordárse de', 'lembrar-se de', ''], ['contar con', 'kontár kon', 'contar com', ''], ['tratarse de', 'tratárse de', 'tratar-se de', ''],
      ]),
      gramatica(12, 'Verbos com preposição, «de que» e por × para', 'PASSO 1: em espanhol, muitos verbos pedem uma preposição fixa. O melhor é aprender o verbo com a sua preposição, como um bloco. PASSO 2: vários são iguais ao português: «pensar en», «soñar con», «casarse con», «enamorarse de», «depender de», «contar con», «acordarse de». PASSO 3: outros pedem «a» antes de infinitivo: «empezar a», «aprender a», «ayudar a», «volver a» (fazer de novo): «Vuelvo a llamar mañana». Os que pedem «de»: «dejar de» (parar de), «acabar de» (acabar de, há pouco), «tratar de» (tentar). E «tardar en» (demorar a), «insistir en», «consistir en», «fijarse en» (reparar em). PASSO 4: alguns verbos que em português levam preposição, em espanhol não: «buscar trabajo» (procurar trabalho), «pedir ayuda» (pedir ajuda), «esperar el autobús» (esperar o ônibus), «mirar la tele» (olhar a TV), «recordar algo» (lembrar algo; já «acordarse de algo» leva «de»). PASSO 5: se depois do verbo vem uma oração com «que», mantenha a preposição quando o verbo a pede: «Me di cuenta de que era tarde», «Estoy seguro de que viene», «Depende de que llueva» (com subjuntivo). Esquecer esse «de» chama-se queísmo e a norma culta evita. PASSO 6: o contrário também é erro: não acrescente «de» onde o verbo não o pede: «Creo que vienes», e não «creo de que vienes» (dequeísmo). PASSO 7: revisão de «por» e «para» (aula 31). «Por» indica causa («Gracias por tu ayuda»), troca («Pago diez euros por el libro»), trajeto e lugar vago («Viajo por Sudamérica»), parte do dia («por la mañana»), duração («por un año») e agente («escrito por mi hermana»). «Para» indica finalidade («Estudio para aprobar»), destinatário («Es para ti»), prazo («Lo necesito para el lunes»), destino («Salgo para Madrid») e opinião («Para mí, es fácil»). PASSO 8: truque: se você puder trocar por «por causa de» ou «em troca de», é «por»; se puder trocar por «com o objetivo de» ou «em direção a», é «para».', {
        tag: 'Preposições',
        comparacao: 'em português dizemos «sonhar com», «pensar em», «depender de» e «contar com», e o espanhol faz quase o mesmo. As armadilhas são os verbos que mudam: «dejar de + infinitivo» (parar de), «volver a» (voltar a fazer), «buscar» sem preposição (procurar) e «me di cuenta de que» (nunca «me di cuenta que»). Em português, «por» e «para» também existem, e o espanhol os usa de modo parecido, com exceções: «Gracias por», «para mí».',
        tabelas: [
          { titulo: 'Verbos e preposições', linhas: [
            { verbo: 'pensar en', significado: 'pensar em', exemplo: 'Pienso en mi familia.' }, { verbo: 'soñar con', significado: 'sonhar com', exemplo: 'Sueño con viajar a Chile.' }, { verbo: 'depender de (que)', significado: 'depender de', exemplo: 'Depende de que haga buen tiempo.' },
            { verbo: 'acordarse de', significado: 'lembrar-se de', exemplo: 'Me acuerdo de tu cumpleaños.' }, { verbo: 'dejar de + inf.', significado: 'parar de', exemplo: 'Dejé de fumar.' }, { verbo: 'volver a + inf.', significado: 'fazer de novo', exemplo: 'Vuelvo a intentarlo.' },
            { verbo: 'darse cuenta de (que)', significado: 'perceber', exemplo: 'Me di cuenta de que era tarde.' }, { verbo: 'buscar (sem prep.)', significado: 'procurar', exemplo: 'Busco trabajo.' },
          ] },
          { titulo: 'por × para', linhas: [
            { palavra: 'por', ideia: 'causa, troca, trajeto, duração', exemplo: 'Gracias por venir. Pago diez euros por esto.' }, { palavra: 'para', ideia: 'finalidade, destinatário, prazo, destino', exemplo: 'Estudio para aprobar. Es para ti.' },
            { palavra: 'por', ideia: 'parte do dia, agente', exemplo: 'Trabajo por la mañana. Escrito por ella.' }, { palavra: 'para', ideia: 'opinião, comparação', exemplo: 'Para mí, es fácil. Para su edad, canta bien.' },
          ] },
        ],
        erros: [['Sueño de viajar a Chile.', 'Sueño con viajar a Chile.', '«Soñar» pede «con».'], ['Dejé fumar el año pasado.', 'Dejé de fumar el año pasado.', '«Dejar de» + infinitivo = parar de.'], ['Me di cuenta que era tarde.', 'Me di cuenta de que era tarde.', '«Darse cuenta» pede «de» antes de «que» (evite o queísmo).'], ['Creo de que tienes razón.', 'Creo que tienes razón.', '«Creer» não leva «de» (evite o dequeísmo).'], ['Busco por trabajo.', 'Busco trabajo.', '«Buscar» não leva preposição antes do objeto.']],
      }),
      producao(8, 'Escreva e diga em voz alta seis frases: três com verbos e preposição («Sueño con… Dependo de… Me acuerdo de…») e três com «por» e «para» («Gracias por… Estudio para… Lo necesito para…»). Inclua uma frase com «de que».'),
    ]),
    sessao('S3', 'Pronomes com infinitivo, gerúndio e imperativo', [
      revisao(4, 'Faça seis frases com verbo + preposição e depois diga a que serve cada «por» e «para» que usou.'),
      palavras(5, [
        ['quiero comprarlo', 'kiéro komprárlo', 'quero comprá-lo', ''], ['lo quiero comprar', 'lo kiéro komprár', 'quero comprá-lo (outra posição)', ''], ['estoy leyéndolo', 'estói leiéndolo', 'estou lendo-o', ''], ['dímelo', 'dímelo', 'diga-me isso', ''], ['no me lo digas', 'no me lo dígas', 'não me diga isso', ''],
      ]),
      gramatica(8, 'Onde pôr os pronomes', 'PASSO 1: lembre da ordem (aulas 23 a 25): o pronome de objeto indireto vem antes do direto: «me lo», «te la», «se lo». Com «le» ou «les» antes de «lo, la, los, las», troca-se por «se»: «Se lo doy». PASSO 2: com um infinitivo, o pronome pode ir antes do verbo conjugado ou colado ao infinitivo: «Lo quiero comprar» = «Quiero comprarlo». Com «ir a»: «Te lo voy a decir» = «Voy a decírtelo». PASSO 3: com o gerúndio, o mesmo: «Lo estoy leyendo» = «Estoy leyéndolo». Quando o pronome se cola, aparece acento escrito para manter a sílaba forte: «leyéndolo», «diciéndomelo». PASSO 4: no imperativo afirmativo, o pronome vai sempre colado: «Cómpralo», «Dímelo», «Dáselo». Quando colam dois pronomes, ou o verbo é longo, quase sempre aparece acento escrito. PASSO 5: no imperativo negativo, o pronome vai antes do verbo: «No lo compres», «No me lo digas». PASSO 6: com «vosotros» afirmativo, o «-d» final cai antes de «os»: «sentaos», «levantaos» (exceção: «idos»). PASSO 7: o pronome nunca fica no meio de uma sequência: não se diz «puedes me explicar», e sim «puedes explicarme» ou «me puedes explicar».', {
        tag: 'Pronomes',
        comparacao: 'em português o pronome pode vir antes ou depois do verbo («quero comprá-lo», «vou te dizer»). Em espanhol, existem as duas posições com o infinitivo e o gerúndio, mas com o imperativo afirmativo o pronome sempre se cola ao verbo, sem hífen: «dímelo». O acento escrito é a marca de que o verbo continua com a mesma sílaba forte.',
        tabela: [
          { caso: 'infinitivo', forma: 'Quiero comprarlo. / Lo quiero comprar.', exemplo: 'Voy a decírtelo. / Te lo voy a decir.' },
          { caso: 'gerúndio', forma: 'Estoy leyéndolo. / Lo estoy leyendo.', exemplo: 'Está contándomelo. / Me lo está contando.' },
          { caso: 'imperativo afirmativo', forma: 'sempre colado', exemplo: 'Cómpralo. Dímelo. Dáselo.' },
          { caso: 'imperativo negativo', forma: 'antes do verbo', exemplo: 'No lo compres. No me lo digas.' },
          { caso: 'vosotros afirmativo', forma: 'cai o -d', exemplo: 'Sentaos. Levantaos.' },
        ],
        erros: [['Estoy leyendolo.', 'Estoy leyéndolo.', 'Ao colar o pronome ao gerúndio, escreve-se o acento.'], ['Dime-lo.', 'Dímelo.', 'Sem hífen; o pronome se cola e leva acento.'], ['No dímelo.', 'No me lo digas.', 'No negativo, o pronome vem antes e o verbo vai ao subjuntivo.'], ['Quiero lo comprar.', 'Quiero comprarlo. / Lo quiero comprar.', 'O pronome vai colado ao infinitivo ou antes do verbo conjugado.'], ['Le lo digo.', 'Se lo digo.', 'Dois pronomes de terceira pessoa: «le» vira «se».']],
      }),
      texto(8, 'Una mudanza con amigos / Uma mudança com amigos', 'El sábado Inés se mudó a un piso nuevo y sus amigos la ayudaron. Pablo llevó el camión y no quiso dárselo a nadie: «Lo conduzco yo», dijo. Carlos estaba metiendo los libros en cajas. Cuando Inés le preguntó si los había contado, él respondió: «Estoy contándolos ahora». Para subir el sofá, Inés les dijo a los demás: «No lo levantéis solos; esperadme y os ayudo». Más tarde, al ver que la lámpara estaba rota, Inés llamó a su hermana: «Cómprame una igual, por favor, y tráemela mañana». Su hermana contestó: «Te la compro hoy y te la llevo». Al final, todos se sentaron en el suelo y comieron pizza. Inés dijo: «Gracias a todos. Sentaos y comed, que lo merecéis».', 'No sábado Inés se mudou para um apartamento novo e os amigos a ajudaram. Pablo levou o caminhão e não quis dá-lo a ninguém: «Eu o dirijo», disse. Carlos estava colocando os livros em caixas. Quando Inés lhe perguntou se os tinha contado, ele respondeu: «Estou contando-os agora». Para subir o sofá, Inés disse aos outros: «Não o levantem sozinhos; esperem por mim e eu ajudo vocês». Mais tarde, ao ver que a lâmpada estava quebrada, Inés ligou para a irmã: «Compre-me uma igual, por favor, e traga-a amanhã». A irmã respondeu: «Compro-a hoje e a levo». No fim, todos se sentaram no chão e comeram pizza. Inés disse: «Obrigada a todos. Sentem-se e comam, porque vocês merecem».', [
        ['¿Quién llevó el camión?', 'Pablo.'], ['¿Qué estaba haciendo Carlos?', 'Metía los libros en cajas.'], ['¿Qué dijo Inés sobre el sofá?', 'Que no lo levantaran solos y que la esperaran.'], ['¿Qué pidió Inés a su hermana?', 'Que le comprara una lámpara igual y se la llevara al día siguiente.'], ['¿Qué comieron al final?', 'Pizza.'],
      ]),
      producao(5, 'Dê cinco ordens a um amigo trocando o objeto por pronome: «Cómpralo», «Dímelo», «Dáselo», «No me lo digas», «Ayúdame». Depois diga a mesma ideia com «estar» + gerúndio e com «ir a» + infinitivo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 60', [
      revisao(5, 'Diga em voz alta: uma frase com «a» pessoal, uma com verbo e preposição, uma com «por», uma com «para» e uma com pronome colado ao imperativo.'),
      exercicios(20, [
        ouvir('Veo a Ana todos los días', ['Veo a Ana todos los días', 'Veo Ana todos los días', 'Tengo a Ana todos los días'], 'Veo a Ana todos los días', 'Ouça o «a» pessoal antes de «Ana».'),
        ouvir('Sueño con viajar a Chile', ['Sueño con viajar a Chile', 'Sueño de viajar a Chile', 'Sueño viajar a Chile'], 'Sueño con viajar a Chile', '«Soñar» pede «con».'),
        ouvir('No me lo digas', ['No me lo digas', 'No dímelo', 'No me lo dices'], 'No me lo digas', 'Imperativo negativo: pronomes antes do verbo.'),
        ditado('Estoy leyéndolo ahora', 'Escreva: Estoy leyéndolo ahora.'), ditado('Me di cuenta de que era tarde', 'Escreva: Me di cuenta de que era tarde.'), ditado('Dímelo ahora', 'Escreva: Dímelo ahora.'),
        mc('Qual frase está correta?', ['Llamo a mi hermano.', 'Llamo mi hermano.', 'Llamo a mi mesa.'], 'Llamo a mi hermano.', 'Pessoa determinada como objeto direto leva «a».'),
        mc('Qual frase está correta?', ['Tengo dos hermanos.', 'Tengo a dos hermanos.', 'Tengo de dos hermanos.'], 'Tengo dos hermanos.', 'Depois de «tener», não se usa o «a» pessoal.'),
        mc('Qual pronome é recomendado para o objeto indireto («disse a verdade a ela»)?', ['Le dije la verdad.', 'La dije la verdad.', 'Lo dije la verdad.'], 'Le dije la verdad.', 'Objeto indireto: «le», para homem ou mulher; laísmo e loísmo são incorretos.'),
        mc('Qual frase usa corretamente a preposição?', ['Dejé de fumar.', 'Dejé fumar.', 'Dejé en fumar.'], 'Dejé de fumar.', '«Dejar de» + infinitivo.'),
        mc('Qual frase está correta?', ['Me di cuenta de que era tarde.', 'Me di cuenta que era tarde.', 'Me di cuenta de qué era tarde.'], 'Me di cuenta de que era tarde.', 'Mantenha o «de» antes de «que».'),
        mc('Qual frase usa «por» corretamente?', ['Gracias por tu ayuda.', 'Gracias para tu ayuda.', 'Gracias de tu ayuda.'], 'Gracias por tu ayuda.', '«Por» indica causa.'),
        mc('Qual frase usa «para» corretamente?', ['Lo necesito para el lunes.', 'Lo necesito por el lunes.', 'Lo necesito de el lunes.'], 'Lo necesito para el lunes.', '«Para» marca prazo.'),
        mc('Qual forma é correta?', ['Cómpralo.', 'Compra-lo.', 'Compralo.'], 'Cómpralo.', 'Imperativo afirmativo: pronome colado e acento escrito.'),
        lacuna('Busco ___ trabajo en Madrid.', ['un', 'a un', 'por un'], 'un', '«Buscar» não leva preposição antes de coisa.'),
        lacuna('No veo ___ nadie.', ['a', 'en', 'de'], 'a', 'Depois de «nadie», como objeto direto, vem «a».'),
        lacuna('Estoy ___ el libro. (leer + lo)', ['leyéndolo', 'leyendolo', 'leyéndole'], 'leyéndolo', 'Gerúndio com pronome colado leva acento escrito.'),
        lacuna('Voy a ___. (decir + te + lo)', ['decírtelo', 'decirte lo', 'decírlote'], 'decírtelo', 'O pronome indireto vem antes do direto: «decírtelo».'),
        ordem('Ordene: «No me lo digas.»', ['No', 'me', 'lo', 'digas.'], 'No me lo digas.', 'No negativo, os pronomes vão antes do verbo.'),
        ordem('Ordene: «Estudio para aprobar el examen.»', ['Estudio', 'para', 'aprobar', 'el', 'examen.'], 'Estudio para aprobar el examen.', '«Para» + infinitivo expressa finalidade.'),
        livre('Escreva em espanhol, tratando por «tú»: Diga-me isso. Estou escutando-o agora. Não o compre.', 'Dímelo. Lo estoy escuchando ahora. No lo compres.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você faz por semana e para quê, com pelo menos dois verbos com preposição, um «a» pessoal e um pronome colado.'),
    ]),
  ],
});
