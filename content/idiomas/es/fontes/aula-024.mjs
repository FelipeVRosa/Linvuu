import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 24, titulo: 'Pronomes de objeto indireto', nivel: 'a2',
  objetivo: 'Usar os pronomes de objeto indireto (me, te, le, nos, os, les) com verbos como dar, decir, escribir, regalar, prestar e preguntar, distinguir objeto direto e indireto, e evitar falsos amigos como «apellido», «pegar», «prestar» e «regalar».',
  nota: 'Você diz a quem dá, diz, escreve, empresta ou pergunta algo, sem repetir o nome. Próxima aula: os dois pronomes juntos («se lo di», «me lo prestas»).',
  sessoes: [
    sessao('S1', 'Me, te, le, nos, os, les', [
      revisao(5, 'Responda usando um pronome: «¿Compraste el pan?», «¿Ves a Ana?», «¿Tienes las llaves?», «¿Me esperas?»'),
      palavras(8, [
        ['regalar', 'regalár', 'presentear, dar de presente', ''], ['prestar', 'prestár', 'emprestar', ''], ['enviar, mandar', 'embiár, mandár', 'enviar, mandar', ''], ['contar', 'kontár', 'contar, narrar', ''],
        ['preguntar', 'preguntár', 'perguntar', ''], ['explicar', 'eksplikár', 'explicar', ''], ['mostrar', 'mostrár', 'mostrar', ''], ['devolver', 'debolbér', 'devolver', ''],
      ]),
      gramatica(12, 'Le, les e os outros pronomes de objeto indireto', 'PASSO 1: o objeto indireto responde à pergunta «a quem?» ou «para quem?» depois do verbo. Em «Doy un libro a Ana», dou o livro a quem? A Ana. O livro é o objeto direto; Ana é o objeto indireto. PASSO 2: os pronomes do objeto indireto são «me» (eu), «te» (tu), «le» (ele, ela, usted), «nos» (nós), «os» (vosotros) e «les» (ellos, ellas, ustedes). Só a terceira pessoa difere do objeto direto da aula 23: aqui é «le, les», e lá era «lo, la, los, las». PASSO 3: «le» e «les» não variam em gênero: «Le doy un libro» serve para «a ella» e «a él». PASSO 4: a posição é a mesma do objeto direto: antes do verbo conjugado («Le escribo») ou colado ao infinitivo («Quiero escribirle»). PASSO 5: o pronome aparece mesmo quando o nome da pessoa também está na frase: «Le doy el libro a Ana», «Les escribo a mis padres». Isso não é redundância, é o jeito normal de falar. PASSO 6: para dar ênfase ou contraste, acrescenta-se «a mí», «a ti», «a él», «a ella», «a usted», «a nosotros», «a vosotros», «a ellos», «a ustedes»: «A mí me dio un libro y a ti no». PASSO 7: o brasileiro tende a pensar em «pra ele» e dizer «dije a ella» em espanhol. A forma correta é «le dije». PASSO 8: os mesmos pronomes aparecem em «gustar», que você já viu: «A Ana le gusta el té» e «Me gusta el té».', {
        tag: 'Pronomes',
        comparacao: 'o português do Brasil costuma dizer «dei o livro pra ela» e «disse pra ele». O espanhol usa um pronome curto antes do verbo: «le di el libro», «le dije». O português tem «lhe» («dei-lhe o livro»), mas ele quase sumiu da fala. Em espanhol, «le» e «les» são de uso diário, e o brasileiro precisa se acostumar com eles.',
        tabela: [
          { pessoa: 'yo', pronome: 'me', exemplo: 'Me da un regalo.' }, { pessoa: 'tú', pronome: 'te', exemplo: 'Te escribo luego.' }, { pessoa: 'él, ella, usted', pronome: 'le', exemplo: 'Le explico la regla a Ana.' },
          { pessoa: 'nosotros', pronome: 'nos', exemplo: 'Nos cuenta una historia.' }, { pessoa: 'vosotros (Espanha)', pronome: 'os', exemplo: 'Os mando un mensaje.' }, { pessoa: 'ellos, ellas, ustedes', pronome: 'les', exemplo: 'Les enseño la casa.' },
        ],
        exemplos: [['Le regalé un libro a mi hermana.', 'Dei um livro de presente à minha irmã.'], ['Les dije la verdad a mis padres.', 'Disse a verdade aos meus pais.'], ['Quiero mostrarte una foto.', 'Quero te mostrar uma foto.'], ['¿Me prestas el cargador?', 'Você me empresta o carregador?']],
        erros: [['Dije a ella la verdad.', 'Le dije la verdad.', 'Em espanhol, o objeto indireto vira pronome antes do verbo.'], ['Les escribí a mi madre.', 'Le escribí a mi madre.', '«Les» é só para plural; «mi madre» é singular.'], ['Doy-le un regalo.', 'Le doy un regalo.', 'O pronome vem antes do verbo conjugado, sem hífen.'], ['Le doy los libros a mis amigos.', 'Les doy los libros a mis amigos.', 'Quando a pessoa é plural, o pronome também é plural.'], ['Yo dijo a ti la verdad.', 'Te dije la verdad.', 'Use «te» para «a ti» e a forma «dije» para «yo».']],
      }),
      producao(5, 'Diga em voz alta o que você deu, disse ou escreveu a cinco pessoas (a sua mãe, a um amigo, a um colega, a um vizinho, a um professor), com «le» ou «les». Exemplo: «Le regalé un libro a mi hermana.»'),
    ]),
    sessao('S2', 'Direto ou indireto? Verbos e falsos amigos', [
      revisao(4, 'Conjugue mentalmente «yo, tú, él, nosotros, vosotros, ellos» com os pronomes de objeto indireto: «me, te, le, nos, os, les». Diga uma frase com cada um.'),
      palavras(6, [
        ['responder', 'responder', 'responder', ''], ['enseñar', 'ensenhár', 'ensinar, mostrar', ''], ['ofrecer', 'ofrethér', 'oferecer', ''], ['pedir prestado', 'pedír prestádo', 'pedir emprestado', ''], ['el apellido', 'el apelhído', 'o sobrenome', ''], ['el apodo', 'el apódo', 'o apelido (nome informal)', ''],
      ]),
      gramatica(12, 'Direto ou indireto, e falsos amigos', 'PASSO 1: para decidir entre os dois pronomes, pergunte ao verbo. «O quê? Quem?» leva ao direto («lo, la»). «A quem? Para quem?» leva ao indireto («le, les»). «Escribí una carta» responde ao que se escreveu; «Le escribí una carta» responde também a quem. PASSO 2: verbos que quase sempre levam objeto indireto: dar, decir, escribir, contar, preguntar, responder, pedir, prestar, enseñar, ofrecer, regalar, explicar, mostrar, mandar, enviar e também «gustar, interesar, encantar, doler, parecer». «Me duele la cabeza» (dói a cabeça em mim). PASSO 3: verbos que levam objeto direto de pessoa: llamar, ayudar, esperar, visitar, invitar, escuchar, ver, conocer. «La llamo», «Lo ayudo». PASSO 4: «preguntar» e «responder» levam indireto, ao contrário do que o português faz às vezes: «Le pregunté su nombre» e «Le respondí ayer». PASSO 5: «pedir» também leva indireto da pessoa a quem se pede: «Le pedí un café al camarero». «Pedir prestado» é «pedir emprestado»; «prestar» é «emprestar» (e não «prestar serviço»): «Le pedí prestado el coche» e «Le presté el coche». PASSO 6: falsos amigos: «apellido» é sobrenome, e não apelido (que é «apodo» ou «mote»): «Mi apellido es Rosa; mi apodo es Rosi». «Regalar» é presentear, e «un regalo» é presente, e não regalia nem prazer. «Pegar» é bater ou colar, e não pegar: «Le pegó a su hermano» é «bateu no irmão». «Enseñar» é ensinar e também mostrar: «Me enseñó su casa» é «me mostrou a casa dele». PASSO 7: na América Latina, a ordem das palavras e os pronomes são os mesmos; muda o «os», que não existe. Em vez de «os escribo», usa-se «les escribo».', {
        tag: 'Pronomes',
        comparacao: 'o português também separa o direto do indireto («vi a Ana» × «dei a Ana»), mas a fala cotidiana mistura os dois com «ela» e «pra ela». Em espanhol a separação é nítida: «la vi» (direto) e «le di» (indireto). Os falsos amigos desta parte são um pouco cruéis com o brasileiro: «apellido» não é apelido, «prestar» não é prestar, e «pegar» não é pegar.',
        tabela: [
          { verbo: 'dar, decir, escribir', tipo: 'indireto', exemplo: 'Le escribí un correo.' }, { verbo: 'preguntar, responder, pedir', tipo: 'indireto', exemplo: 'Le pregunté la hora.' }, { verbo: 'prestar, ofrecer, mostrar', tipo: 'indireto', exemplo: 'Me ofreció un café.' },
          { verbo: 'llamar, ayudar, esperar', tipo: 'direto', exemplo: 'Lo ayudé con las maletas.' }, { verbo: 'visitar, invitar, escuchar', tipo: 'direto', exemplo: 'La invité a cenar.' }, { verbo: 'apellido × apodo', tipo: 'falso amigo', exemplo: 'Mi apellido es Rosa, mi apodo es Rosi.' },
        ],
        erros: [['Lo pregunté su nombre.', 'Le pregunté su nombre.', '«Preguntar» leva objeto indireto da pessoa.'], ['La escribí un mensaje.', 'Le escribí un mensaje.', '«Escribir algo a alguien» leva «le».'], ['Mi apellido es Pepe. (querendo dizer: apelido)', 'Mi apodo es Pepe.', '«Apellido» é sobrenome; o apelido é «apodo».'], ['Pegué el coche a mi hermano. (querendo dizer: emprestei)', 'Le presté el coche a mi hermano.', '«Pegar» é bater ou colar; emprestar é «prestar».'], ['Yo pido prestado a él.', 'Le pido prestado.', 'O pronome vem antes do verbo.']],
      }),
      producao(8, 'Escreva e diga em voz alta, com pelo menos oito frases, o que você pediu, emprestou e perguntou a amigos ou colegas esta semana. Use «pedí prestado», «presté», «pregunté», «dije» e «escribí», sempre com «le» ou «les».'),
    ]),
    sessao('S3', 'Pedidos, ofertas e um presente', [
      revisao(4, 'Substitua o objeto indireto por um pronome: «Doy el libro a Ana», «Escribo a mis padres», «Cuento una historia a mis hijos».'),
      palavras(5, [
        ['el cumpleaños', 'el kumpleánhos', 'o aniversário', ''], ['la bufanda', 'la bufánda', 'o cachecol', ''], ['la invitación', 'la imbitathión', 'o convite', ''], ['contestar', 'kontestár', 'responder, atender', ''], ['la idea', 'la idéa', 'a ideia', ''],
      ]),
      gramatica(8, 'Pedir e oferecer com «me», e esclarecer o «le»', 'PASSO 1: para pedir algo educadamente, use «me» com um verbo de ação: «¿Me trae la cuenta?», «¿Me pone un café?», «¿Me puede ayudar?». O «me» marca que o pedido é para você. PASSO 2: para oferecer, use «te» ou «le»: «¿Te ayudo?», «¿Le ayudo, señora?», «¿Le pongo algo más?». PASSO 3: com «usted», o «le» não diz o gênero. Se precisar, esclareça: «Le dije a usted, no a ella». PASSO 4: para esclarecer um «le» ambíguo, acrescente «a + pessoa»: «Le escribí a Marta», «Les mandamos una invitación a sus padres». PASSO 5: com o verbo «contestar», o objeto indireto é a pessoa: «Le contesté a Ana» (respondi a Ana). Para atender o telefone, diz-se «contestar el teléfono». PASSO 6: no indefinido, as formas são as de sempre, com o pronome antes: «Le di», «Le dije», «Le escribí», «Nos mandaron».', {
        tag: 'Pronomes',
        comparacao: 'em português, «me traz a conta?», «te ajudo?» e «posso te ajudar?» têm a mesma ordem. O espanhol da cortesia é mais direto: «¿Le ayudo?» ao cliente, «¿Me trae la cuenta?» ao garçom. A frase «pode me dar» tem o equivalente exato «¿Me puede dar…?».',
        tabela: [
          { situacao: 'pedir ao garçom', frase: '¿Me trae la cuenta, por favor?' }, { situacao: 'oferecer ajuda a um amigo', frase: '¿Te ayudo con las maletas?' }, { situacao: 'oferecer ajuda a um cliente', frase: '¿Le ayudo en algo?' }, { situacao: 'esclarecer o «le»', frase: 'Le escribí a Marta, no a su hermana.' },
        ],
        erros: [['¿Puedes ayudar-me?', '¿Puedes ayudarme?', 'O pronome se cola ao infinitivo sem hífen.'], ['¿Le ayudo, Marta?', '¿Te ayudo, Marta?', 'Com «tú», use «te»; «le» é para «usted».'], ['Le dije a usted, no ella.', 'Le dije a usted, no a ella.', 'O «a» não pode faltar antes da pessoa.']],
      }),
      dialogo(8, 'Un regalo para Marta / Um presente para a Marta', 'Camila e Mateo decidem o que dar de presente a uma amiga.', [
        ['Camila', 'Mateo, ¿qué le regalamos a Marta para su cumpleaños?', 'Mateo, o que vamos dar de presente à Marta no aniversário dela?'],
        ['Mateo', 'No sé. El año pasado le regalé un libro y le gustó mucho.', 'Não sei. No ano passado dei a ela um livro e ela gostou muito.'],
        ['Camila', 'Yo le di una bufanda a mi madre y no le gustó.', 'Eu dei um cachecol à minha mãe e ela não gostou.'],
        ['Mateo', 'Podemos preguntarle a su hermano. Él la conoce muy bien.', 'Podemos perguntar ao irmão dela. Ele a conhece muito bem.'],
        ['Camila', 'Buena idea. Voy a escribirle un mensaje ahora.', 'Boa ideia. Vou escrever uma mensagem para ele agora.'],
        ['Mateo', 'Y a sus padres, ¿les decimos algo?', 'E aos pais dela, vamos contar alguma coisa?'],
        ['Camila', 'Sí, les mandamos una invitación para la fiesta. Si su hermano nos contesta esta noche, te llamo y te cuento.', 'Sim, mandamos a eles um convite para a festa. Se o irmão dela nos responder esta noite, eu ligo para você e conto.'],
        ['Mateo', 'Perfecto. Entonces mañana compramos el regalo juntos.', 'Perfeito. Então amanhã compramos o presente juntos.'],
      ]),
      producao(5, 'Escreva uma mensagem de cinco frases a um amigo, em que você pergunta algo, oferece ajuda e conta uma novidade. Use «te», «le» ou «les» pelo menos três vezes.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 24', [
      revisao(5, 'Diga em voz alta o que você disse e deu a três pessoas ontem, usando «le» e «les» sem repetir o nome.'),
      exercicios(20, [
        ouvir('Le di un regalo', ['Le di un regalo', 'Les di un regalo', 'Me di un regalo'], 'Le di un regalo', '«Le» é singular; «les» seria plural.'),
        ouvir('Les escribimos ayer', ['Les escribimos ayer', 'Le escribimos ayer', 'Nos escribimos ayer'], 'Les escribimos ayer', 'Ouça o «s» final de «les», que indica plural.'),
        ouvir('Te cuento una cosa', ['Te cuento una cosa', 'Me cuento una cosa', 'Se cuenta una cosa'], 'Te cuento una cosa', '«Te» é a pessoa a quem se conta.'),
        ditado('Le pregunté su apellido', 'Escreva: Le pregunté su apellido. «Preguntar» leva «le».'),
        ditado('Nos mandaron una invitación', 'Escreva: Nos mandaron una invitación. «Nos» vem antes do verbo.'),
        ditado('¿Me prestas tu cargador?', 'Escreva: ¿Me prestas tu cargador? O «me» marca quem pede.'),
        mc('Como se diz «Eu disse a ela»?', ['Le dije.', 'La dije.', 'Les dije.'], 'Le dije.', 'Objeto indireto singular: «le».'),
        mc('Como se diz «Escrevi aos meus pais»?', ['Les escribí a mis padres.', 'Le escribí a mis padres.', 'Los escribí a mis padres.'], 'Les escribí a mis padres.', 'Plural: «les».'),
        mc('Qual frase está correta?', ['Les di el libro a mis amigos.', 'Lo di el libro a mis amigos.', 'Di-les el libro a mis amigos.'], 'Les di el libro a mis amigos.', 'Objeto indireto plural, antes do verbo, sem hífen.'),
        mc('O que significa «apellido»?', ['sobrenome', 'apelido', 'nome próprio'], 'sobrenome', 'O apelido é «apodo».'),
        mc('Como se diz «apelido» (nome informal)?', ['apodo', 'apellido', 'nombre'], 'apodo', '«Apodo» é o apelido; «apellido» é o sobrenome.'),
        mc('O que significa «prestar»?', ['emprestar', 'pedir emprestado', 'prestar serviço'], 'emprestar', 'Pedir emprestado é «pedir prestado».'),
        mc('O que significa «Le pegó a su hermano»?', ['Bateu no irmão.', 'Pegou o irmão.', 'Deu um presente ao irmão.'], 'Bateu no irmão.', '«Pegar» é bater ou colar.'),
        lacuna('___ escribo a mi madre cada semana. (a ella)', ['Le', 'La', 'Lo'], 'Le', 'Objeto indireto de terceira pessoa singular.'),
        lacuna('A mis padres ___ mando una carta.', ['les', 'los', 'le'], 'les', 'Plural indireto: «les».'),
        lacuna('¿___ prestas tu paraguas? (a mí)', ['Me', 'Te', 'Se'], 'Me', 'A pessoa que pede é «me».'),
        lacuna('Ella ___ dijo la verdad. (a nosotros)', ['nos', 'nosotros', 'les'], 'nos', 'O pronome átono de «nosotros» é «nos».'),
        lacuna('Quiero ___ un regalo a Ana.', ['darle', 'darla', 'dar la'], 'darle', 'O pronome indireto se cola ao infinitivo: «darle».'),
        ordem('Ordene: «Le escribí una carta.»', ['Le', 'escribí', 'una', 'carta.'], 'Le escribí una carta.', 'Pronome, verbo e objeto direto.'),
        ordem('Ordene: «Les mandamos una invitación.»', ['Les', 'mandamos', 'una', 'invitación.'], 'Les mandamos una invitación.', 'Pronome plural antes do verbo.'),
        livre('Escreva em espanhol: Eu disse a verdade a ela.', 'Le dije la verdad.'),
        lacuna('Le ___ un regalo a mi madre. (dar, yo)', ['doy', 'das', 'da'], 'doy', 'Em «yo», «dar» faz «doy».'),
        lacuna('___ mando una carta a mis abuelos. (a eles)', ['Le', 'Les', 'Los'], 'Les', 'Para «a ellos», o objeto indireto é «les».'),
        lacuna('A Marta ___ explico la lección.', ['les', 'la', 'le'], 'le', 'Para «a ella», o objeto indireto é «le».'),
        lacuna('Ella ___ preguntó mi nombre. (a mim)', ['le', 'te', 'me'], 'me', 'Para «a mí», o objeto indireto é «me».'),
        mc('Como se diz «Ele me contou uma coisa»?', ['Me contó una cosa.', 'Lo contó una cosa.', 'Contó me una cosa.'], 'Me contó una cosa.', 'O pronome vem antes do verbo conjugado.'),
        mc('Qual expressão significa «pedir emprestado»?', ['prestar', 'devolver', 'pedir prestado'], 'pedir prestado', '«Prestar» é emprestar; pedir emprestado é «pedir prestado».'),
        mc('Qual frase usa o pronome certo para «a eles»?', ['Le escribo.', 'Les escribo.', 'Los escribo.'], 'Les escribo.', 'Escrever é algo que se faz a alguém: objeto indireto «les».'),
        ordem('Ordene: «Le regalé un libro a Marta.»', ['Le', 'regalé', 'un', 'libro', 'a', 'Marta.'], 'Le regalé un libro a Marta.', 'O «le» repete o «a Marta».'),
        livre('Escreva em espanhol: Eu lhe disse a verdade.', 'Le dije la verdad.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você pediu, disse e deu a diferentes pessoas esta semana, sem repetir os nomes.'),
    ]),
  ],
});
