import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 29, titulo: 'Condicional de cortesia', nivel: 'a2',
  objetivo: 'Formar o condicional simples (regulares e os dez irregulares) e usá-lo para pedir com delicadeza («¿Podría…?», «Me gustaría…», «Querría…»), aconselhar («Deberías…», «Yo que tú…») e expressar desejos, sem confundir «pedir» com «preguntar».',
  nota: 'Você agora pede, aconselha e deseja com delicadeza, como em situações formais. Próxima aula: «estar» + gerúndio, «ir a» + infinitivo e «acabar de».',
  sessoes: [
    sessao('S1', 'Formar o condicional', [
      revisao(5, 'Diga de memória os dez futuros irregulares na forma de «yo». Depois diga duas frases com o imperativo de «usted» para pedir algo a um desconhecido.'),
      palavras(8, [
        ['el favor', 'el fabór', 'o favor', ''], ['la ayuda', 'la aiúda', 'a ajuda', ''], ['la información', 'la informathión', 'a informação', ''], ['un momento', 'un moménto', 'um momento', ''],
        ['la ventana', 'la bentána', 'a janela', ''], ['el sitio', 'el sítio', 'o lugar', ''], ['importar', 'importár', 'importar-se, incomodar', ''], ['agradecer', 'agradethér', 'agradecer', ''],
      ]),
      gramatica(12, 'O condicional simples: formas', 'PASSO 1: o condicional serve, entre outras coisas, para pedir, aconselhar e desejar com delicadeza. As formas são fáceis de aprender porque seguem o futuro. PASSO 2: tome o infinitivo inteiro (como no futuro): «hablar», «comer», «vivir». PASSO 3: acrescente as terminações do condicional: -ía, -ías, -ía, -íamos, -íais, -ían. São as mesmas para os três grupos. «Hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían.» Todas levam acento no «í». PASSO 4: os dez verbos irregulares do futuro têm o mesmo radical irregular no condicional: «tendr-», «har-», «dir-», «podr-», «pondr-», «saldr-», «vendr-», «sabr-», «querr-», «habr-». Mude só a terminação: «tendría», «haría», «diría», «podría», «pondría», «saldría», «vendría», «sabría», «querría», «habría». PASSO 5: os outros verbos são regulares: «ser → sería», «ir → iría», «estar → estaría», «dar → daría», «ver → vería». PASSO 6: o verbo de cortesia mais usado é «poder»: «¿Podría ayudarme?», «¿Podrías abrir la ventana?». PASSO 7: os outros dois são «gustar» e «querer»: «Me gustaría un café», «Querría hablar con usted». O verbo «gustaría» pede o pronome de objeto indireto, como «gusta» (aula 16): «Me gustaría», «Te gustaría», «Le gustaría». PASSO 8: «quisiera» (aula 8) é outra forma de cortesia. Ela é de um tempo chamado subjuntivo, que vamos ver mais tarde; por ora, use-a como uma fórmula: «Quisiera un café». «Querría» e «quisiera» são equivalentes aqui. PASSO 9: pronomes de objeto ficam antes do verbo conjugado, ou colados ao infinitivo: «¿Me podría ayudar?» e «¿Podría ayudarme?» são ambos corretos.', {
        tag: 'Condicional',
        comparacao: 'em português, o condicional também se forma com o infinitivo + terminação («falaria, falarias, falaria, falaríamos, falariam»), e o espanhol é quase igual: «hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían». O que muda: o radical irregular segue o do futuro espanhol («tendría», «haría», «diría», «saldría»), e a terminação sempre leva o acento no «í».',
        tabelas: [
          { titulo: 'Condicional regular', linhas: [
            { pronome: 'yo', hablar: 'hablaría', comer: 'comería', vivir: 'viviría' },
            { pronome: 'tú', hablar: 'hablarías', comer: 'comerías', vivir: 'vivirías' },
            { pronome: 'él / ella / usted', hablar: 'hablaría', comer: 'comería', vivir: 'viviría' },
            { pronome: 'nosotros, nosotras', hablar: 'hablaríamos', comer: 'comeríamos', vivir: 'viviríamos' },
            { pronome: 'vosotros, vosotras', hablar: 'hablaríais', comer: 'comeríais', vivir: 'viviríais' },
            { pronome: 'ellos, ellas, ustedes', hablar: 'hablarían', comer: 'comerían', vivir: 'vivirían' },
          ] },
          { titulo: 'Dez irregulares: o radical do futuro + -ía', linhas: [
            { infinitivo: 'tener', condicional: 'tendría', infinitivo2: 'poner', condicional2: 'pondría' },
            { infinitivo: 'hacer', condicional: 'haría', infinitivo2: 'salir', condicional2: 'saldría' },
            { infinitivo: 'decir', condicional: 'diría', infinitivo2: 'venir', condicional2: 'vendría' },
            { infinitivo: 'poder', condicional: 'podría', infinitivo2: 'saber', condicional2: 'sabría' },
            { infinitivo: 'querer', condicional: 'querría', infinitivo2: 'haber', condicional2: 'habría' },
          ] },
        ],
        exemplos: [['¿Podría ayudarme, por favor?', 'O senhor poderia me ajudar, por favor?'], ['Me gustaría un café con leche.', 'Eu gostaria de um café com leite.'], ['Querría hablar con la directora.', 'Eu gostaria de falar com a diretora.'], ['¿Te importaría cerrar la ventana?', 'Você se importaria de fechar a janela?']],
        erros: [['Tenería tiempo.', 'Tendría tiempo.', 'O radical irregular de «tener» é «tendr-».'], ['Podria ayudarme.', 'Podría ayudarme.', 'A terminação leva acento no «í».'], ['Hablariamos mañana.', 'Hablaríamos mañana.', 'O condicional sempre tem acento no «í».'], ['Me gustaría ir con tú.', 'Me gustaría ir contigo.', 'Com «con» e «tú», a forma é «contigo».']],
      }),
      producao(5, 'Peça cinco coisas com delicadeza, em voz alta: «¿Podría ayudarme?», «¿Podría repetir?», «Me gustaría…», «Querría…», «¿Te importaría…?»'),
    ]),
    sessao('S2', 'Conselhos e desejos', [
      revisao(4, 'Conjugue «poder» e «tener» no condicional, de «yo» a «ellos». Faça uma frase de pedido com cada um.'),
      palavras(6, [
        ['el consejo', 'el konsého', 'o conselho', ''], ['deberías', 'deberías', 'você deveria', ''], ['yo que tú', 'yo ke tú', 'se eu fosse você', ''], ['en tu lugar', 'en tu lugár', 'no seu lugar', ''], ['me encantaría', 'me enkantaría', 'eu adoraria', ''], ['sería mejor', 'sería mehór', 'seria melhor', ''],
      ]),
      gramatica(12, 'Aconselhar, sugerir e desejar', 'PASSO 1: para aconselhar com suavidade, use o condicional de «deber» e «poder»: «Deberías dormir más», «Podrías hablar con tu jefa». O condicional suaviza o conselho; «Debes dormir más» soa como uma ordem. PASSO 2: a fórmula «Yo que tú» + condicional é muito usada: «Yo que tú, hablaría con ella», que significa «se eu fosse você, eu falaria com ela». Também existe «En tu lugar» + condicional: «En tu lugar, no iría». PASSO 3: com «usted», a fórmula muda: «Yo que usted, esperaría» ou «En su lugar, esperaría». PASSO 4: «sería mejor» + infinitivo ou «sería mejor que» + subjuntivo (que vem mais tarde): «Sería mejor salir pronto». PASSO 5: para dizer um desejo, use «Me gustaría», «Me encantaría» (eu adoraria), «Querría»: «Me encantaría conocer Sevilla.» PASSO 6: o condicional também serve para marcar educação em pedidos de informação: «¿Sabría decirme dónde está la estación?» (O senhor saberia me dizer onde fica a estação?). PASSO 7: não use o condicional para mandar. Em um pedido de amigos, o presente também é natural: «¿Me pasas la sal?» Use o condicional quando quiser ser mais cuidadoso, ou com pessoas que você não conhece. PASSO 8: não troque os dois verbos: «pedir» é solicitar ou encomendar («Te pido un favor», «Pido un café»), e «preguntar» é perguntar («Te pregunto una cosa»). Quem pede uma coisa não usa «por»: o objeto vem direto, «pedir un café».', {
        tag: 'Condicional',
        comparacao: 'em português diz-se «Você deveria dormir mais» e «Se eu fosse você, falaria com ela». Em espanhol: «Deberías dormir más» e «Yo que tú, hablaría con ella». A estrutura é a mesma. Os verbos «pedir» (solicitar) e «preguntar» (perguntar) também são separados nas duas línguas; só tome cuidado para não trocá-los na pressa.',
        tabela: [
          { uso: 'conselho', exemplo: 'Deberías dormir más.', traducao: 'Você deveria dormir mais.' },
          { uso: 'conselho com fórmula', exemplo: 'Yo que tú, hablaría con ella.', traducao: 'Se eu fosse você, falaria com ela.' },
          { uso: 'desejo', exemplo: 'Me encantaría conocer Sevilla.', traducao: 'Eu adoraria conhecer Sevilha.' },
          { uso: 'pedido de informação', exemplo: '¿Sabría decirme dónde está la estación?', traducao: 'O senhor saberia me dizer onde fica a estação?' },
          { uso: 'pedir × perguntar', exemplo: 'Te pido un favor. / Te pregunto una cosa.', traducao: 'Peço um favor a você. / Pergunto uma coisa a você.' },
        ],
        exemplos: [['Deberías descansar un poco.', 'Você deveria descansar um pouco.'], ['Yo en tu lugar, no compraría ese móvil.', 'No seu lugar, eu não compraria esse celular.'], ['Me encantaría ir a Granada contigo.', 'Eu adoraria ir a Granada com você.'], ['Sería mejor llegar antes de las nueve.', 'Seria melhor chegar antes das nove.']],
        erros: [['Te pregunto un favor.', 'Te pido un favor.', '«Preguntar» é perguntar; para solicitar, use «pedir».'], ['Yo que tú, hablo con ella.', 'Yo que tú, hablaría con ella.', 'Depois de «yo que tú», use o condicional.'], ['Debes dormir más. (querendo ser delicado)', 'Deberías dormir más.', 'O condicional suaviza o conselho.'], ['Me encantaría de ir contigo.', 'Me encantaría ir contigo.', 'Depois de «encantaría», o infinitivo vem direto, sem «de».']],
      }),
      producao(8, 'Dê cinco conselhos a um amigo que está cansado e tem pouco dinheiro, com «Deberías…», «Podrías…», «Yo que tú…» e «Sería mejor…». Depois diga dois desejos seus com «Me encantaría…».'),
    ]),
    sessao('S3', 'Pedir com delicadeza em situações formais', [
      revisao(4, 'Diga a diferença entre «pedir» e «preguntar» com dois exemplos. Faça um conselho com «Yo que tú».'),
      palavras(5, [
        ['la recepción', 'la rethepthión', 'a recepção', ''], ['la habitación', 'la abitathión', 'o quarto (de hotel)', ''], ['la llave', 'la lhábe', 'a chave', ''], ['el ruido', 'el ruído', 'o barulho', ''], ['cambiar', 'kambiár', 'trocar', ''], ['la oficina', 'la ofithína', 'o escritório (não «oficina»)', ''],
      ]),
      gramatica(8, 'Graus de cortesia ao pedir', 'PASSO 1: a mesma coisa pode ser pedida de várias maneiras, da mais direta à mais delicada. Com um amigo: «Dame la llave» (direto), «¿Me das la llave?» (natural), «¿Me puedes dar la llave?». PASSO 2: com alguém que você não conhece ou em contexto formal: «¿Podría darme la llave?» ou «Quisiera la llave, por favor». PASSO 3: para pedir algo difícil ou incômodo, use «¿Le importaría…?» (para «usted») ou «¿Te importaría…?» (para «tú»): «¿Le importaría hablar más bajo?». PASSO 4: «¿Sería posible…?» também funciona, com infinitivo: «¿Sería posible cambiar de habitación?» PASSO 5: para explicar um problema com cortesia, não se acusa: «Hay mucho ruido en la habitación» é mais suave que «Usted hace mucho ruido». PASSO 6: para agradecer e fechar: «Muchas gracias por su ayuda», «Se lo agradezco mucho». PASSO 7: falso amigo: «oficina» é escritório; a oficina de carros é «taller». PASSO 8: «cuarto» e «habitación» são quarto; «cuarto de baño» é o banheiro. Em hotel, o mais comum é «habitación»; em casa, «cuarto» ou «habitación».', {
        tag: 'Condicional',
        comparacao: 'em português, as escalas de cortesia são parecidas: «Me dá a chave», «Pode me dar a chave?», «O senhor poderia me dar a chave?». Em espanhol: «Dame la llave», «¿Me puedes dar la llave?», «¿Podría darme la llave?». A diferença está no falso amigo «oficina» e no fato de o tratamento de «usted» e «tú» mudar a forma do verbo e do pronome («le» para «usted», «te» para «tú»).',
        tabela: [
          { nivel: 'direto (amigo)', exemplo: 'Dame la llave.', traducao: 'Me dá a chave.' },
          { nivel: 'natural', exemplo: '¿Me puedes dar la llave?', traducao: 'Você pode me dar a chave?' },
          { nivel: 'cortês', exemplo: '¿Podría darme la llave, por favor?', traducao: 'O senhor poderia me dar a chave, por favor?' },
          { nivel: 'muito cortês', exemplo: '¿Le importaría hablar más bajo?', traducao: 'O senhor se importaria de falar mais baixo?' },
          { nivel: 'formal, em solicitação', exemplo: '¿Sería posible cambiar de habitación?', traducao: 'Seria possível trocar de quarto?' },
        ],
        erros: [['Quiero la llave. (a um desconhecido)', 'Quisiera la llave, por favor.', '«Quiero» soa muito direto com desconhecidos.'], ['La oficina del coche está cerrada.', 'El taller está cerrado.', '«Oficina» é escritório; oficina mecânica é «taller».'], ['¿Le importaría que hablar más bajo?', '¿Le importaría hablar más bajo?', 'Depois de «importaría», o infinitivo vem direto.'], ['Pido por una habitación.', 'Pido una habitación.', '«Pedir» não leva «por»: pede-se algo diretamente.']],
      }),
      dialogo(8, 'En la recepción / Na recepção', 'O senhor Ruiz fala com a recepcionista do hotel sobre o quarto.', [
        ['La recepcionista', 'Buenas tardes, señor Ruiz. ¿En qué puedo ayudarle?', 'Boa tarde, senhor Ruiz. Em que posso ajudá-lo?'],
        ['Señor Ruiz', 'Buenas tardes. Me gustaría hablar de la habitación.', 'Boa tarde. Eu gostaria de falar sobre o quarto.'],
        ['La recepcionista', 'Por supuesto. ¿Hay algún problema?', 'Claro. Há algum problema?'],
        ['Señor Ruiz', 'Hay bastante ruido por la noche. ¿Sería posible cambiar de habitación?', 'Há bastante barulho à noite. Seria possível trocar de quarto?'],
        ['La recepcionista', 'Déjeme ver. Tendría una habitación tranquila en el segundo piso.', 'Deixe-me ver. Eu teria um quarto tranquilo no segundo andar.'],
        ['Señor Ruiz', 'Perfecto. ¿Podría darme la llave ahora?', 'Perfeito. A senhora poderia me dar a chave agora?'],
        ['La recepcionista', 'Claro. Aquí tiene. Muchas gracias por su paciencia.', 'Claro. Aqui está. Muito obrigada pela sua paciência.'],
        ['Señor Ruiz', 'Se lo agradezco mucho. Hasta luego.', 'Agradeço muito. Até logo.'],
      ]),
      producao(5, 'Peça três coisas, em voz alta, para três pessoas: um amigo (direto), um colega (natural) e um desconhecido (muito cortês). Use «Dame», «¿Me puedes…?», «¿Podría…?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 29', [
      revisao(5, 'Peça com delicadeza uma informação, um favor e uma chave. Depois dê dois conselhos com «Deberías» e «Yo que tú».'),
      exercicios(20, [
        ouvir('¿Podría ayudarme, por favor?', ['¿Podría ayudarme, por favor?', '¿Podrías ayudarme, por favor?', '¿Puede ayudarme, por favor?'], '¿Podría ayudarme, por favor?', 'Ouça «podría»: condicional de «poder», com «usted».'),
        ouvir('Me gustaría un café con leche', ['Me gustaría un café con leche', 'Me gusta un café con leche', 'Me gustó un café con leche'], 'Me gustaría un café con leche', 'Ouça o «-ría» de «gustaría».'),
        ouvir('Yo que tú, hablaría con ella', ['Yo que tú, hablaría con ella', 'Yo que tú, hablo con ella', 'Yo que tú, hablé con ella'], 'Yo que tú, hablaría con ella', 'Ouça o condicional «hablaría».'),
        ditado('Tendría una habitación tranquila', 'Escreva: Tendría una habitación tranquila. O radical é «tendr-» e o acento fica no «í».'),
        ditado('¿Te importaría cerrar la ventana?', 'Escreva: ¿Te importaría cerrar la ventana?'),
        ditado('Te pido un favor', 'Escreva: Te pido un favor. Com «favor», o verbo é «pedir».'),
        mc('Qual é o condicional de «yo» de «hacer»?', ['haría', 'haceria', 'haré'], 'haría', 'O radical é «har-», com a terminação «-ía».'),
        mc('Qual é o condicional de «tú» de «poder»?', ['podrías', 'podrás', 'podías'], 'podrías', 'O radical é «podr-», com a terminação «-ías».'),
        mc('Qual verbo se usa para solicitar um favor?', ['pedir', 'preguntar', 'pedir por'], 'pedir', '«Preguntar» é perguntar; «pedir» é solicitar.'),
        mc('Qual é a forma mais delicada de pedir a chave a um desconhecido?', ['¿Podría darme la llave, por favor?', 'Dame la llave.', '¿Me das la llave?'], '¿Podría darme la llave, por favor?', 'O condicional e o «por favor» marcam a cortesia.'),
        mc('Como se diz «Se eu fosse você, esperaria»?', ['Yo que tú, esperaría.', 'Yo que tú, espero.', 'Yo que tú, esperaré.'], 'Yo que tú, esperaría.', 'Depois de «yo que tú», use o condicional.'),
        mc('Como se chama a oficina mecânica em espanhol?', ['el taller', 'la oficina', 'el trabajo'], 'el taller', '«Oficina» é escritório.'),
        lacuna('___ ayudarme, por favor? (usted, poder, condicional)', ['¿Podría', '¿Puedo', '¿Podrá'], '¿Podría', 'O condicional é o mais cortês.'),
        lacuna('Me ___ conocer Sevilla. (encantar, condicional)', ['encantaría', 'encantará', 'encantó'], 'encantaría', 'Para um desejo, use o condicional.'),
        lacuna('___ dormir más. (tú, deber, condicional)', ['Deberías', 'Debes', 'Deberás'], 'Deberías', 'O condicional suaviza o conselho.'),
        lacuna('Te ___ un favor. (pedir)', ['pido', 'pregunto', 'digo'], 'pido', '«Pedir» é solicitar.'),
        ordem('Ordene: «¿Podría darme la llave, por favor?»', ['¿Podría', 'darme', 'la', 'llave,', 'por', 'favor?'], '¿Podría darme la llave, por favor?', 'O pronome vai colado ao infinitivo.'),
        ordem('Ordene: «Yo que tú, hablaría con ella.»', ['Yo', 'que', 'tú,', 'hablaría', 'con', 'ella.'], 'Yo que tú, hablaría con ella.', 'A fórmula vem antes do condicional.'),
        livre('Escreva em espanhol: Eu gostaria de falar com a diretora, por favor.', 'Querría hablar con la directora, por favor.'),
      ]),
      producao(5, 'Escreva e diga cinco frases pedindo com delicadeza algo a um recepcionista, a um professor e a um vizinho. Use o condicional em todas.'),
    ]),
  ],
});
