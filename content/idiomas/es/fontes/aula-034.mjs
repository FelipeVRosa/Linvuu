import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 34, titulo: 'Viagem: aeroporto, trem e hotel', nivel: 'a2',
  objetivo: 'Comprar passagem de trem e perguntar horário, plataforma e duração («tarda», «dura»), usar o meio de transporte com «en», resolver o aeroporto (facturar, puerta de embarque, equipaje) e reservar e usar um hotel.',
  nota: 'Você se vira em estação, aeroporto e hotel, com pedidos educados e perguntas claras. Próxima aula: trabalho e apresentação profissional.',
  sessoes: [
    sessao('S1', 'De trem: bilhetes, horários e plataformas', [
      revisao(5, 'Diga em voz alta o que dói e há quanto tempo, e como você pediria algo na farmácia (aula 33).'),
      palavras(8, [
        ['el billete', 'el bilhéte', 'a passagem, o bilhete (Espanha); na América Latina: el boleto, el pasaje', ''], ['de ida', 'de ída', 'só de ida', ''], ['de ida y vuelta', 'de ída i buélta', 'de ida e volta', ''], ['el andén', 'el andén', 'a plataforma', ''],
        ['la estación', 'la estathión', 'a estação', ''], ['la taquilla', 'la takílha', 'a bilheteria (também o armário de academia)', ''], ['el horario', 'el orário', 'o horário (de trens, de ônibus)', ''], ['el retraso', 'el rretráso', 'o atraso', ''],
      ]),
      gramatica(12, 'Comprar passagem, horário, plataforma e duração', 'PASSO 1: para pedir a passagem, use o pedido educado da aula 29: «Quisiera un billete de ida y vuelta a Valencia, por favor.» Para mais de uma: «Dos billetes para Sevilla, para el viernes.» PASSO 2: o horário se pergunta com «¿A qué hora sale el próximo tren a Madrid?» e se responde com «Sale a las diez y cuarto.» Para a chegada: «¿A qué hora llega?» «Llega a las doce y cuarenta.» As horas, da aula 9, sempre levam «a las» (e «a la» para a uma). PASSO 3: a plataforma é «el andén», e se pergunta: «¿De qué andén sale?» Resposta: «Sale del andén cuatro.» (de + el = del). PASSO 4: para a duração, o espanhol tem duas formas. Com «dura», fala-se do evento: «El viaje dura dos horas.» Com «tarda», fala-se do tempo que algo leva para chegar: «El tren tarda dos horas en llegar», «Tardo veinte minutos en llegar al trabajo». Pergunte: «¿Cuánto dura el viaje?» e «¿Cuánto tarda el tren?». PASSO 5: o meio de transporte leva «en», e não «de»: «Voy en tren», «en autobús», «en avión», «en coche», «en barco». A única exceção é a pé: «Voy a pie.» PASSO 6: para o atraso: «El tren lleva un retraso de quince minutos» ou «El tren va con retraso». PASSO 7: para a baldeação: «Hay que cambiar de tren en Zaragoza» (hay que + infinitivo, é preciso trocar de trem). PASSO 8: cuidado com «largo»: em espanhol significa comprido, e não «largo» no sentido de folgado. O viaje pode ser «largo» (comprido, demorado). PASSO 9: «asiento» é o lugar sentado; «ventanilla» é a janela do trem e também o guichê.', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «vou de trem», «vou de ônibus». O espanhol usa «en»: «voy en tren», «voy en autobús». Em português, «demorar» e «levar» servem para a duração, e em espanhol a escolha é entre «durar» (o evento) e «tardar» (o tempo que alguém ou algo leva para chegar). O bilhete e a plataforma não são difíceis, mas as horas pedem sempre «a las».',
        tabela: [
          { situacao: 'pedir', frase: 'Quisiera un billete de ida y vuelta a Valencia.', traducao: 'Queria uma passagem de ida e volta para Valência.' },
          { situacao: 'saída', frase: '¿A qué hora sale el próximo tren?', traducao: 'A que horas sai o próximo trem?' },
          { situacao: 'chegada', frase: 'Llega a las doce y cuarenta.', traducao: 'Chega às doze e quarenta.' },
          { situacao: 'plataforma', frase: '¿De qué andén sale?', traducao: 'De qual plataforma sai?' },
          { situacao: 'duração', frase: 'El viaje dura dos horas.', traducao: 'A viagem dura duas horas.' },
          { situacao: 'tempo para chegar', frase: 'Tarda dos horas en llegar.', traducao: 'Leva duas horas para chegar.' },
          { situacao: 'atraso', frase: 'El tren lleva un retraso de quince minutos.', traducao: 'O trem está com quinze minutos de atraso.' },
        ],
        erros: [['Quiero un billete a ida y vuelta.', 'Quisiera un billete de ida y vuelta.', 'A fórmula leva «de» («de ida y vuelta»), e o pedido educado é «quisiera».'], ['Voy de tren a Sevilla.', 'Voy en tren a Sevilla.', 'Meio de transporte se diz com «en».'], ['Llego a Madrid en las diez.', 'Llego a Madrid a las diez.', 'As horas pedem «a las».'], ['El tren sale de la andén cuatro.', 'El tren sale del andén cuatro.', '«Andén» é masculino e com «de + el» forma «del».']],
      }),
      producao(5, 'Peça em voz alta, na bilheteria, uma passagem de ida e volta para a cidade que você escolher, pergunte a hora de saída, a plataforma e a duração. Use «usted».'),
    ]),
    sessao('S2', 'No aeroporto', [
      revisao(4, 'Diga de memória três frases com «sale a las…», «llega a las…», «tarda…» e «dura…».'),
      palavras(6, [
        ['el vuelo', 'el buélo', 'o voo', ''], ['la puerta de embarque', 'la puérta de embárke', 'o portão de embarque', ''], ['la tarjeta de embarque', 'la tarhéta de embárke', 'o cartão de embarque', ''], ['facturar', 'faktuár', 'despachar a bagagem (fazer o check-in dela)', ''], ['la maleta', 'la maléta', 'a mala (de viagem; «maleta» em português é uma mala pequena)', ''], ['el equipaje de mano', 'el ekipáhe de máno', 'a bagagem de mão', ''],
      ]),
      gramatica(12, 'Check-in, embarque e bagagem', 'PASSO 1: no balcão, diga o que você quer fazer: «Quisiera facturar esta maleta.» O funcionário pergunta: «¿Cuántas maletas lleva?» Você responde: «Una maleta y un equipaje de mano.» PASSO 2: «equipaje» (bagagem) é um substantivo que se usa no singular: «mi equipaje», «el equipaje de mano». Para contar, use «maleta»: «dos maletas». PASSO 3: a pergunta do portão: «¿Cuál es la puerta de embarque?» Resposta: «Puerta doce.» PASSO 4: o horário do embarque e do voo: «El embarque empieza a las seis», «El vuelo sale a las seis y media». O atraso: «El vuelo lleva retraso» ou «El vuelo está retrasado». O cancelamento: «Se ha cancelado el vuelo.» PASSO 5: para obrigação, use «hay que» e «tiene que» (aula 13): «Hay que pasar por el control de seguridad», «Tiene que presentar el pasaporte.» PASSO 6: para perguntar onde fica algo, use «perdone» ou «disculpe» (imperativo de usted): «Perdone, ¿dónde está el mostrador de la compañía?» PASSO 7: com o pretérito perfecto (aula 17) e o pronome de objeto direto (aula 23), diga: «Ya he facturado la maleta» ou, sem repetir, «Ya la he facturado.» PASSO 8: para um problema com a bagagem: «Mi maleta no ha llegado», «He perdido mi tarjeta de embarque». PASSO 9: falsos amigos: «bolso» é bolsa (de mão), «bolsillo» é bolso de roupa, e «bolsa» é sacola ou saco.', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «despachar a bagagem» e «cartão de embarque»; em espanhol, «facturar» e «tarjeta de embarque». A grande diferença é «maleta» (mala de viagem) e «equipaje» (que não tem plural no uso diário). Também aparece «puerta», que em português é o portão do aeroporto.',
        tabela: [
          { situacao: 'no balcão', frase: 'Quisiera facturar esta maleta.', traducao: 'Queria despachar esta mala.' },
          { situacao: 'pergunta', frase: '¿Cuántas maletas lleva?', traducao: 'Quantas malas leva?' },
          { situacao: 'portão', frase: '¿Cuál es la puerta de embarque?', traducao: 'Qual é o portão de embarque?' },
          { situacao: 'atraso', frase: 'El vuelo lleva retraso.', traducao: 'O voo está atrasado.' },
          { situacao: 'obrigação', frase: 'Hay que pasar por el control de seguridad.', traducao: 'É preciso passar pelo controle de segurança.' },
          { situacao: 'problema', frase: 'Mi maleta no ha llegado.', traducao: 'Minha mala não chegou.' },
        ],
        erros: [['Tengo dos equipajes.', 'Tengo dos maletas.', '«Equipaje» é a bagagem toda; conte as malas.'], ['Quiero despachar la maleta.', 'Quisiera facturar la maleta.', 'Em espanhol, o verbo é «facturar», e o pedido é educado.'], ['¿Donde está el control de seguridad?', '¿Dónde está el control de seguridad?', 'Na pergunta, «dónde» leva til.']],
      }),
      producao(8, 'Faça o check-in sozinho, em voz alta: diga quantas malas você tem, pergunte o portão, pergunte se há atraso e, por fim, diga que a sua mala não chegou.'),
    ]),
    sessao('S3', 'No hotel', [
      revisao(4, 'Diga em voz alta como você pediria uma passagem e uma mala despachada, em «usted».'),
      palavras(5, [
        ['la reserva', 'la rresérba', 'a reserva', ''], ['la habitación individual', 'la abitathión individuál', 'o quarto de solteiro (América Latina: el cuarto)', ''], ['la habitación doble', 'la abitathión dóble', 'o quarto duplo', ''], ['el desayuno incluido', 'el desaiúno inclúido', 'o café da manhã incluído', ''], ['la recepción', 'la rrethepthión', 'a recepção', ''],
      ]),
      gramatica(8, 'Reservar e usar um hotel', 'PASSO 1: para reservar: «Quisiera reservar una habitación doble para dos noches, del tres al cinco de mayo.» PASSO 2: ao chegar, diga: «Tengo una reserva a nombre de Silva.» A fórmula é fixa: «a nombre de». PASSO 3: perguntas úteis: «¿Está incluido el desayuno?», «¿A qué hora es el desayuno?», «¿Hay wifi en la habitación?», «¿A qué hora hay que dejar la habitación?» PASSO 4: problemas: «No funciona el aire acondicionado», «No hay agua caliente», «La ducha está rota» (estar + particípio). Peça com educação: «¿Podría cambiarme de habitación?» PASSO 5: ao sair: «Quisiera dejar la habitación» e «La cuenta, por favor.» PASSO 6: falsos amigos: «completo» é lotado, sem vagas («El hotel está completo»). «Habitación doble» é para duas pessoas; a cama pode ser «de matrimonio» (casal) ou «dos camas». PASSO 7: em vários países da América Latina, ouve-se «cuarto» no lugar de «habitación».', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «tenho uma reserva no nome de Silva», e em espanhol é «a nombre de Silva». «Completo» é uma armadilha: em português é «completo, inteiro», mas num hotel, «completo» é «sem vagas».',
        erros: [['Tengo una reserva en el nombre de Silva.', 'Tengo una reserva a nombre de Silva.', 'Fórmula fixa: «a nombre de».'], ['El hotel es completo.', 'El hotel está completo.', 'O estado ocupado pede «estar».'], ['¿Hay incluido el desayuno?', '¿Está incluido el desayuno?', 'Para algo incluído, usa-se «estar incluido».'], ['Quiero cambiar de habitación.', '¿Podría cambiarme de habitación?', 'Com desconhecidos, prefira o pedido educado.']],
      }),
      dialogo(8, 'En la recepción / Na recepção', 'Marcos chega ao hotel à noite e faz o check-in.', [
        ['La recepcionista', 'Buenas noches. ¿En qué puedo ayudarle?', 'Boa noite. Em que posso ajudá-lo?'], ['Marcos', 'Buenas noches. Tengo una reserva a nombre de Marcos Silva, para tres noches.', 'Boa noite. Tenho uma reserva no nome de Marcos Silva, para três noites.'], ['La recepcionista', 'Un momento, por favor. Sí, una habitación doble con desayuno incluido. ¿Me permite su pasaporte?', 'Um momento, por favor. Sim, um quarto duplo com café da manhã incluído. Posso ver o seu passaporte?'],
        ['Marcos', 'Aquí tiene. ¿A qué hora es el desayuno?', 'Aqui está. A que horas é o café da manhã?'], ['La recepcionista', 'De siete a diez, en la planta baja. Su habitación es la trescientos cinco y el ascensor está a la izquierda.', 'Das sete às dez, no térreo. O seu quarto é o trezentos e cinco e o elevador fica à esquerda.'], ['Marcos', '¿Hay wifi en la habitación?', 'Há wifi no quarto?'],
        ['La recepcionista', 'Sí, la contraseña está en la tarjeta. Y hay que dejar la habitación antes de las doce.', 'Sim, a senha está no cartão. E é preciso deixar o quarto antes do meio-dia.'], ['Marcos', 'Perfecto. Muchas gracias.', 'Perfeito. Muito obrigado.'],
      ]),
      producao(5, 'Faça o papel de Marcos em voz alta, mudando a reserva: uma noite, quarto individual, sem café da manhã. Pergunte se há wifi.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 34', [
      revisao(5, 'Diga em voz alta, em «usted», cinco pedidos de viagem: passagem, plataforma, mala, reserva de hotel e wifi.'),
      exercicios(20, [
        ouvir('Quisiera un billete de ida y vuelta', ['Quisiera un billete de ida y vuelta', 'Quisiera un billete a ida y vuelta', 'Quiero un billete de ida'], 'Quisiera un billete de ida y vuelta', 'A fórmula é «de ida y vuelta».'),
        ouvir('El tren sale del andén cuatro', ['El tren sale del andén cuatro', 'El tren sale de la andén cuatro', 'El tren llega del andén cuatro'], 'El tren sale del andén cuatro', '«Andén» é masculino: «del andén».'),
        ouvir('Tengo una reserva a nombre de Silva', ['Tengo una reserva a nombre de Silva', 'Tengo una reserva en el nombre de Silva', 'Tengo una reserva con nombre de Silva'], 'Tengo una reserva a nombre de Silva', 'Fórmula fixa: «a nombre de».'),
        ditado('El vuelo lleva retraso', 'Escreva: El vuelo lleva retraso.'), ditado('Voy en tren a Sevilla', 'Escreva: Voy en tren a Sevilla.'), ditado('Quisiera facturar esta maleta', 'Escreva: Quisiera facturar esta maleta.'),
        mc('Como se diz «Vou de trem»?', ['Voy en tren.', 'Voy de tren.', 'Voy por tren.'], 'Voy en tren.', 'Transporte com «en»; a pé é «a pie».'),
        mc('Qual verbo se usa em «O trem leva duas horas para chegar»?', ['tarda', 'dura', 'lleva'], 'tarda', '«Tarda dos horas en llegar»: tempo que algo leva para chegar.'),
        mc('O que significa «El hotel está completo»?', ['O hotel não tem quartos livres.', 'O hotel está inteiro.', 'O hotel está caro.'], 'O hotel não tem quartos livres.', 'Falso amigo: «completo» é lotado.'),
        mc('O que é «la ventanilla»?', ['a janela do trem ou o guichê', 'a bagagem', 'o horário'], 'a janela do trem ou o guichê', 'As duas coisas, pelo contexto.'),
        lacuna('¿A qué hora ___ el tren? (sai)', ['sale', 'salgo', 'sales'], 'sale', '«El tren» é terceira pessoa: «sale».'), lacuna('El tren llega ___ las doce y cuarenta.', ['a', 'en', 'de'], 'a', 'As horas pedem «a las».'), lacuna('El viaje ___ dos horas. (dura)', ['dura', 'tardo', 'duro'], 'dura', '«Dura» para a duração do evento.'), lacuna('Mi maleta no ___ llegado.', ['ha', 'he', 'está'], 'ha', 'Pretérito perfecto: «ha llegado».'), lacuna('Hay que ___ la habitación antes de las doce. (deixar)', ['dejar', 'dejo', 'deja'], 'dejar', '«Hay que» + infinitivo.'),
        ordem('Ordene: «¿A qué hora sale el próximo tren?»', ['¿A', 'qué', 'hora', 'sale', 'el', 'próximo', 'tren?'], '¿A qué hora sale el próximo tren?', 'Pergunta de horário.'), ordem('Ordene: «Quisiera reservar una habitación doble.»', ['Quisiera', 'reservar', 'una', 'habitación', 'doble.'], 'Quisiera reservar una habitación doble.', 'Pedido educado.'),
        livre('Escreva em espanhol: Eu tenho uma reserva no nome de Silva. O café da manhã está incluído?', 'Tengo una reserva a nombre de Silva. ¿Está incluido el desayuno?'),
      ]),
      producao(5, 'Descreva em voz alta uma viagem imaginária: de que cidade você sai, em que transporte, onde dorme e a que horas chega.'),
    ]),
  ],
});
