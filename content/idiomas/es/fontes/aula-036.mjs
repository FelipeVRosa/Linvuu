import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 36, titulo: 'Telefone, convites e marcar encontro', nivel: 'a2',
  objetivo: 'Atender e fazer uma ligação («¿Diga?», «Soy…», «¿Está…?»), deixar um recado, convidar com «apetecer» e «¿quieres…?», aceitar e recusar com educação e combinar hora e lugar com «quedar» e «nos vemos».',
  nota: 'Você telefona, convida e combina encontros em espanhol, com «tú» e «usted». Próxima aula: casa, aluguel e vizinhos.',
  sessoes: [
    sessao('S1', 'Atender e fazer uma ligação', [
      revisao(5, 'Apresente-se profissionalmente em voz alta, em 30 segundos, com «soy», «trabajo en» e «tengo experiencia en» (aula 35).'),
      palavras(8, [
        ['¿Diga? ¿Dígame?', 'díga, dígame', 'Alô? (quem atende, Espanha)', ''], ['Soy Marcos.', 'soi márkos', 'Aqui é o Marcos.', ''], ['¿Con quién hablo?', 'kon kién ábló', 'Com quem falo?', ''], ['¿Está Marta?', 'está márta', 'A Marta está?', ''],
        ['Ahora se pone.', 'ahóra se póne', 'Ela já vem ao telefone.', ''], ['Ahora mismo no está.', '', 'Agora mesmo ela não está.', ''], ['dejar un recado', 'dehár un rrekádo', 'deixar um recado', ''], ['el móvil', 'el móbil', 'o celular (Espanha); na América Latina: el celular', ''],
      ]),
      gramatica(12, 'Atender, ligar e pedir para falar com alguém', 'PASSO 1: quem atende o telefone, na Espanha, costuma dizer «¿Diga?» ou «¿Dígame?». Em vários países da América Latina ouve-se «aló» e, no México, «bueno». Também vale «¿Sí?» e «Hola». PASSO 2: quem liga se identifica com «soy» (e não «aquí es»): «Hola, soy Marcos. ¿Está Marta?» Com desconhecidos, use o pedido educado da aula 29: «Buenos días, quisiera hablar con la señora López» ou «¿Podría hablar con el señor Ruiz, por favor?». PASSO 3: quem recebe pode perguntar «¿De parte de quién?» (quem gostaria?) ou «¿Con quién hablo?». Pode responder: «Un momento, por favor», «Ahora se pone» ou «Ahora mismo no está». E pode oferecer: «¿Quiere dejar un recado?». PASSO 4: para o recado, diga «Dígale que he llamado» (imperativo de usted + «le» + pretérito perfecto) ou «Dígale que me llame» (peça que ele ligue de volta). PASSO 5: para pedir ajuda com o som: «¿Puede repetir, por favor?», «Habla más despacio, por favor» (tú), «No le oigo bien», «Se corta» (a linha cai) e «Tengo poca cobertura». PASSO 6: para se despedir: «Te llamo luego», «Te llamo más tarde», «Hablamos pronto», «Gracias por llamar». PASSO 7: «llamar» é ligar e chamar: «Te llamo», «La llamo» (aula 23: pronomes de objeto direto). A ligação é «la llamada». O telefone fixo é «el teléfono fijo», e o celular é «el móvil» (Espanha) ou «el celular» (América Latina). PASSO 8: para número errado: «Se ha equivocado de número» ou «Creo que se ha equivocado». PASSO 9: com amigos, use «tú» e, na Espanha, «vosotros»: «¿Estáis en casa?». Com desconhecidos, use «usted».', {
        tag: 'Telefone',
        comparacao: 'em português dizemos «alô», «aqui é o Marcos» e «posso falar com a Marta?». O espanhol da Espanha usa «¿Diga?», «Soy Marcos» e «¿Está Marta?». Cuidado com «ligar»: em espanhol, «ligar» significa paquerar; para ligar para alguém, diga «llamar».',
        tabela: [
          { papel: 'atender', frase: '¿Diga? / ¿Dígame?', traducao: 'Alô? / Pois não?' },
          { papel: 'identificar-se', frase: 'Hola, soy Marcos. ¿Está Marta?', traducao: 'Oi, aqui é o Marcos. A Marta está?' },
          { papel: 'formal', frase: 'Quisiera hablar con la señora López, por favor.', traducao: 'Gostaria de falar com a senhora López, por favor.' },
          { papel: 'esperar', frase: 'Un momento, por favor. Ahora se pone.', traducao: 'Um momento. Ela já vem ao telefone.' },
          { papel: 'recado', frase: '¿Quiere dejar un recado? / Dígale que he llamado.', traducao: 'Quer deixar um recado? / Diga que eu liguei.' },
          { papel: 'qualidade da ligação', frase: 'Se corta. No le oigo bien.', traducao: 'A linha cai. Não o ouço bem.' },
        ],
        erros: [['Aquí es Marcos.', 'Soy Marcos.', 'Para dizer quem fala, a fórmula usual é «soy».'], ['Voy a ligarte mañana.', 'Voy a llamarte mañana.', 'Na Espanha, «ligar» é coloquial para paquerar; telefonar a alguém é «llamar».'], ['Quiero hablar con el señor Ruiz.', 'Quisiera hablar con el señor Ruiz.', 'Em contexto formal, o pedido educado é preferido.'], ['¿Está la Marta?', '¿Está Marta?', 'Nomes próprios não levam artigo em espanhol.']],
      }),
      producao(5, 'Faça três ligações em voz alta: uma a um amigo (tú), uma a uma empresa (usted) e uma a um número errado. Use «soy», «quisiera hablar con» e «creo que me he equivocado».'),
    ]),
    sessao('S2', 'Convidar, aceitar e recusar', [
      revisao(4, 'Diga em voz alta como você atenderia o telefone, como se identificaria e como pediria para falar com alguém.'),
      palavras(6, [
        ['¿Te apetece…?', 'te apetéthe', 'Você topa…? Tem vontade de…?', ''], ['¿Quieres venir a…?', '', 'Quer vir a…?', ''], ['Me encantaría.', 'me enkantaría', 'Eu adoraria.', ''], ['Vale. / De acuerdo.', 'bále, de akuérdo', 'Combinado. / De acordo. («Vale» é típico da Espanha)', ''], ['Lo siento, no puedo.', '', 'Sinto muito, não posso.', ''], ['Otro día.', '', 'Outro dia.', ''],
      ]),
      gramatica(12, 'Convidar com apetecer, quieres e qué tal si', 'PASSO 1: para convidar, o verbo mais comum na Espanha é «apetecer», que funciona como «gustar»: «¿Te apetece ir al cine?», «¿Te apetece un café?». Para vários: «¿Os apetece cenar con nosotros?». Depois de «apetecer», vem o infinitivo ou um substantivo, sem «de». PASSO 2: outras formas, usadas em todo o mundo hispano, são «¿Quieres venir a cenar el sábado?», «¿Por qué no vamos al cine?», «¿Qué tal si quedamos el viernes?» e, mais educada, «¿Te gustaría venir?». PASSO 3: para aceitar: «Sí, claro», «Vale» (típico da Espanha), «De acuerdo», «Me encantaría», «Con mucho gusto». Na América Latina, é mais comum «de acuerdo» e «bueno». PASSO 4: para recusar com educação, use três partes: agradeça, dê o motivo e proponha outro dia. «Gracias, pero hoy no puedo. Tengo que trabajar. ¿Lo dejamos para otro día?» ou «Me encantaría, pero ya tengo un plan». PASSO 5: para falar de um plano, use «ir a» + infinitivo (aula 30): «Voy a visitar a mi abuela», «Vamos a cenar con unos amigos». PASSO 6: falso amigo: «invitar» tem dois sentidos, convidar e pagar. «Te invito al cine» pode ser «eu te convido para o cinema» e também «eu pago o seu cinema». «Invito yo» é «eu pago esta rodada». PASSO 7: com «tener que» (aula 13), explique o motivo: «Tengo que estudiar», «Tengo que cuidar de mi hermano». PASSO 8: para pedir confirmação, diga «¿Te va bien?», «¿Te viene bien?», «¿Sí o no?».', {
        tag: 'Convites',
        comparacao: 'em português dizemos «está a fim de ir ao cinema?» ou «quer ir ao cinema?». O espanhol da Espanha usa «¿te apetece ir al cine?». Não existe «apetecer de»: o verbo vem direto antes do infinitivo. Outra armadilha é «convidar», que em espanhol é «invitar» e também significa pagar.',
        tabela: [
          { funcao: 'convidar (Espanha)', frase: '¿Te apetece ir al cine?', traducao: 'Você topa ir ao cinema?' },
          { funcao: 'convidar (geral)', frase: '¿Quieres venir a cenar el sábado?', traducao: 'Quer vir jantar no sábado?' },
          { funcao: 'convidar (educado)', frase: '¿Te gustaría venir a mi casa?', traducao: 'Você gostaria de vir à minha casa?' },
          { funcao: 'aceitar', frase: 'Me encantaría. ¿A qué hora?', traducao: 'Eu adoraria. A que horas?' },
          { funcao: 'recusar', frase: 'Gracias, pero hoy no puedo. Tengo que trabajar.', traducao: 'Obrigado, mas hoje não posso. Tenho que trabalhar.' },
          { funcao: 'propor outro dia', frase: '¿Lo dejamos para otro día?', traducao: 'Deixamos para outro dia?' },
          { funcao: 'pagar', frase: 'Hoy invito yo.', traducao: 'Hoje eu pago.' },
        ],
        erros: [['¿Te apetece de ir al cine?', '¿Te apetece ir al cine?', '«Apetecer» não leva «de» antes do infinitivo.'], ['Te convido para el cine.', 'Te invito al cine.', 'O verbo é «invitar», e leva «a» (que forma «al»), não «para».'], ['No quiero ir.', 'Gracias, pero hoy no puedo. ¿Lo dejamos para otro día?', 'A recusa seca soa fria; agradeça, explique e proponha outro dia.'], ['Me encantaría de ir.', 'Me encantaría ir.', 'Depois de «encantar» vem o infinitivo, sem «de».']],
      }),
      producao(8, 'Convide três pessoas diferentes em voz alta: um amigo (tú), um colega (usted) e dois amigos (vosotros, com «os apetece»). Depois aceite um convite e recuse outro com educação.'),
    ]),
    sessao('S3', 'Marcar encontro: hora e lugar', [
      revisao(4, 'Faça em voz alta um convite, uma aceitação e uma recusa educada.'),
      palavras(5, [
        ['quedar con alguien', 'kedár kon álguien', 'marcar de se encontrar com alguém (Espanha)', ''], ['¿Quedamos?', 'kedámos', 'Combinamos?', ''], ['Nos vemos.', 'nos bémos', 'A gente se vê.', ''], ['en punto', 'en púnto', 'em ponto', ''], ['llegar tarde, llegar a tiempo', '', 'chegar tarde, chegar a tempo', ''],
      ]),
      gramatica(8, 'Combinar hora e lugar', 'PASSO 1: na Espanha, «quedar» é combinar um encontro: «¿Cuándo quedamos?», «¿Dónde quedamos?», «Quedamos a las ocho en la plaza.» Na América Latina, é mais comum «¿Cuándo nos vemos?» ou «¿Nos encontramos…?». «Quedar en» + infinitivo (combinar de) vale em toda parte: «Quedamos en vernos el sábado». PASSO 2: a hora leva «a las»: «a las ocho en punto», «a las nueve y media». PASSO 3: o lugar usa as preposições da aula 10: «delante del cine», «enfrente del banco», «al lado de la plaza», «en la puerta». PASSO 4: para verificar se o horário serve, diga «¿Te va bien el sábado?» ou «¿Te viene bien a las ocho?». Sem preposição antes do dia da semana. PASSO 5: para atrasar: «Voy a llegar tarde», «Llego en diez minutos», «Estoy llegando» (aula 30). PASSO 6: para cancelar: «Lo siento, no puedo ir. ¿Lo dejamos para otro día?» PASSO 7: para fechar: «Quedamos así, entonces», «Nos vemos el sábado», «Hasta el sábado».', {
        tag: 'Convites',
        comparacao: 'em português dizemos «vamos nos encontrar às oito» e «a gente se vê no sábado». Na Espanha, o verbo é «quedar»: «quedamos a las ocho». Cuidado: «quedar» também significa ficar e restar (por exemplo, «¿Cuánto queda?»). O contexto mostra qual sentido vale.',
        erros: [['Vamos se encontrar a las ocho.', 'Quedamos a las ocho. / Nos vemos a las ocho.', 'Em espanhol, não se usa «se encontrar» desse jeito; use «quedar» (Espanha) ou «vernos».'], ['Quedamos en las ocho.', 'Quedamos a las ocho.', 'As horas pedem «a las».'], ['Nos vemos en la puerta de el cine.', 'Nos vemos en la puerta del cine.', '«De + el» forma «del».'], ['¿Te va bien en el sábado?', '¿Te va bien el sábado?', 'O dia da semana vem sem preposição.']],
      }),
      dialogo(8, 'Una llamada / Uma ligação', 'Marta liga para Pablo para convidá-lo ao cinema.', [
        ['Pablo', '¿Diga?', 'Alô?'], ['Marta', 'Hola, Pablo, soy Marta. ¿Te molesto?', 'Oi, Pablo, é a Marta. Estou te atrapalhando?'], ['Pablo', 'No, qué va. Dime.', 'Não, de jeito nenhum. Diga.'],
        ['Marta', '¿Te apetece ir al cine el sábado? Hay una película que quiero ver.', 'Você topa ir ao cinema no sábado? Há um filme que quero ver.'], ['Pablo', 'Me encantaría, pero el sábado por la tarde tengo que ayudar a mi hermano con una mudanza.', 'Eu adoraria, mas no sábado à tarde tenho que ajudar meu irmão numa mudança.'], ['Marta', '¿Y por la noche? Podemos quedar a las nueve y media.', 'E à noite? Podemos combinar às nove e meia.'],
        ['Pablo', 'Por la noche sí me va bien. ¿Dónde quedamos?', 'À noite sim, me serve. Onde combinamos?'], ['Marta', 'Delante del cine, en la puerta principal.', 'Na frente do cinema, na porta principal.'], ['Pablo', 'Vale. Y si llego tarde, te escribo un mensaje.', 'Combinado. E se eu chegar tarde, escrevo uma mensagem para você.'], ['Marta', 'Perfecto. Entonces, nos vemos el sábado.', 'Perfeito. Então, nos vemos no sábado.'],
      ]),
      producao(5, 'Faça o papel de Marta ou de Pablo em voz alta, mudando o programa (cenar, pasear, ver un partido), o dia e o lugar.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 36', [
      revisao(5, 'Faça em voz alta uma ligação completa: atender, convidar, recusar o primeiro horário e combinar outro.'),
      exercicios(20, [
        ouvir('¿Te apetece ir al cine?', ['¿Te apetece ir al cine?', '¿Te apetece de ir al cine?', '¿Te apeteces ir al cine?'], '¿Te apetece ir al cine?', '«Apetecer» + infinitivo, sem «de».'),
        ouvir('Hola, soy Marcos. ¿Está Marta?', ['Hola, soy Marcos. ¿Está Marta?', 'Hola, aquí es Marcos. ¿Está la Marta?', 'Hola, estoy Marcos. ¿Es Marta?'], 'Hola, soy Marcos. ¿Está Marta?', 'Ao ligar, diz-se «soy» e «¿Está…?».'),
        ouvir('Quedamos a las ocho en punto', ['Quedamos a las ocho en punto', 'Quedamos en las ocho en punto', 'Quedamos a la ocho en punto'], 'Quedamos a las ocho en punto', 'As horas pedem «a las».'),
        ditado('Gracias, pero hoy no puedo', 'Escreva: Gracias, pero hoy no puedo.'), ditado('Ahora mismo no está', 'Escreva: Ahora mismo no está.'), ditado('Nos vemos el sábado', 'Escreva: Nos vemos el sábado. Sem preposição antes do dia.'),
        mc('Como se diz «Aqui é o Marcos» ao telefone?', ['Soy Marcos.', 'Aquí es Marcos.', 'Estoy Marcos.'], 'Soy Marcos.', 'A fórmula usual é «soy».'),
        mc('O que significa «Te invito al cine» no uso comum?', ['Eu te convido, e posso pagar.', 'Eu te proíbo de ir.', 'Eu te vendo o ingresso.'], 'Eu te convido, e posso pagar.', '«Invitar» é convidar e também pagar.'),
        mc('Qual frase está correta?', ['¿Te apetece ir al cine?', '¿Te apetece de ir al cine?', '¿Tú apeteces ir al cine?'], '¿Te apetece ir al cine?', '«Apetecer» funciona como «gustar».'),
        mc('Qual é uma recusa educada?', ['Gracias, pero hoy no puedo. ¿Lo dejamos para otro día?', 'No quiero.', 'No, adiós.'], 'Gracias, pero hoy no puedo. ¿Lo dejamos para otro día?', 'Agradeça, explique e proponha outro dia.'),
        mc('No uso coloquial da Espanha, o que significa «ligar»?', ['paquerar', 'telefonar', 'chamar'], 'paquerar', 'Para telefonar, diga «llamar».'),
        lacuna('Quedamos ___ las ocho.', ['a', 'en', 'de'], 'a', 'As horas pedem «a las».'), lacuna('¿Te ___ ir al cine?', ['apetece', 'apetecen', 'apeteces'], 'apetece', 'Com infinitivo, «apetece» no singular.'), lacuna('Dígale que he ___ . (telefonado)', ['llamado', 'llamar', 'llamo'], 'llamado', 'Pretérito perfecto: «he llamado».'), lacuna('Nos vemos en la puerta ___ cine.', ['del', 'de el', 'al'], 'del', 'De + el = del.'), lacuna('¿Te va bien ___ sábado?', ['el', 'en el', 'de'], 'el', 'Dia da semana sem preposição.'),
        ordem('Ordene: «¿Dónde quedamos el sábado?»', ['¿Dónde', 'quedamos', 'el', 'sábado?'], '¿Dónde quedamos el sábado?', 'Pergunta de lugar e dia.'), ordem('Ordene: «Gracias, pero tengo que trabajar.»', ['Gracias,', 'pero', 'tengo', 'que', 'trabajar.'], 'Gracias, pero tengo que trabajar.', 'Recusa com motivo.'),
        livre('Escreva em espanhol: Oi, aqui é a Ana. Você topa ir ao cinema no sábado? Combinamos às nove.', 'Hola, soy Ana. ¿Te apetece ir al cine el sábado? Quedamos a las nueve.'),
      ]),
      producao(5, 'Convide em voz alta uma pessoa para um programa, marque a hora e o lugar, e diga o que você faria se chegasse atrasado.'),
    ]),
  ],
});
