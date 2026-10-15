import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 33, titulo: 'Saúde: médico e farmácia', nivel: 'a2',
  objetivo: 'Nomear partes do corpo, dizer o que dói e o que você sente («me duele», «tengo dolor de», «tengo fiebre»), pedir consulta, entender o que o médico pede (usted e imperativo) e pedir um medicamento na farmácia.',
  nota: 'Você explica o que sente, entende as perguntas do médico e do farmacêutico e pede um remédio. Este conteúdo é só de comunicação e vocabulário e não substitui orientação médica. Próxima aula: viagem, aeroporto, trem e hotel.',
  sessoes: [
    sessao('S1', 'O corpo e os sintomas', [
      revisao(5, 'Una duas frases com «que» e duas com «donde» ou «con quien», em voz alta (aula 32). Depois diga três partes do corpo em espanhol.'),
      palavras(8, [
        ['la cabeza', 'la kabétha', 'a cabeça', ''], ['la garganta', 'la gargánta', 'a garganta', ''], ['el estómago', 'el estómago', 'o estômago (a barriga é «la barriga»)', ''], ['la espalda', 'la espálda', 'as costas (em espanhol é singular)', ''],
        ['la mano', 'la máno', 'a mão (feminino, apesar do «-o»)', ''], ['la pierna', 'la piérna', 'a perna', ''], ['el pie', 'el pié', 'o pé', ''], ['la muela', 'la muéla', 'o dente molar («dolor de muelas» é dor de dente)', ''],
      ]),
      gramatica(12, 'Doler, tener dolor de e tener fiebre', 'PASSO 1: para dizer o que dói, use o verbo «doler» do mesmo jeito que «gustar» (aula 16). A parte do corpo é o sujeito e a pessoa aparece no pronome «me, te, le»: «Me duele la cabeza.» Literalmente, a cabeça «dói-me». PASSO 2: se a parte do corpo está no plural, o verbo também: «Me duelen los pies.» PASSO 3: «doler» troca o «o» do radical por «ue» (duele, duelen); o infinitivo é «doler». As formas com pessoa: me duele, te duele, le duele, nos duele, os duele (Espanha), les duele. PASSO 4: com partes do corpo, o espanhol usa o artigo («la cabeza», «los pies»), e não o possessivo («mi cabeza»). Quem sente a dor já aparece no «me». PASSO 5: outra forma de dizer o mesmo é «tener dolor de» + parte do corpo, sem artigo: «Tengo dolor de cabeza», «Tengo dolor de estómago», «Tengo dolor de espalda». «Dolor» é masculino: «un dolor fuerte». PASSO 6: os sintomas se dizem, de preferência, com «tener» (em vez de «estar com»): «Tengo fiebre», «Tengo tos», «Tengo alergia», «Tengo náuseas». Sem artigo. PASSO 7: para estados gerais, use «estar» e «sentirse»: «Estoy mareado», «Me siento mal», «Me encuentro mal». PASSO 8: para dizer há quanto tempo, use «desde hace» + período («desde hace tres días»), «desde» + ponto no tempo («desde ayer», «desde el lunes») ou «llevar» + período + «con» + problema: «Llevo tres días con fiebre.» PASSO 9: o médico pergunta: «¿Qué le pasa?», «¿Dónde le duele?», «¿Desde cuándo tiene fiebre?». PASSO 10: falso amigo: «constipado» na Espanha é «resfriado» («Estoy constipado»). Na América Latina, o mais comum é «resfriado» ou «estar resfriado».', {
        tag: 'Saúde',
        comparacao: 'em português dizemos «minha cabeça dói» ou «estou com dor de cabeça». Em espanhol, o corpo vem com artigo («me duele la cabeza»), e o mais natural para sintomas é «tener»: «tengo fiebre» (em parte da América Latina também se ouve «estoy con fiebre»). A construção de «doler» é a mesma de «gustar», o que facilita se você já dominou a aula 16.',
        tabela: [
          { parte: 'la cabeza', frase: 'Me duele la cabeza.', traducao: 'Estou com dor de cabeça.' },
          { parte: 'la garganta', frase: 'Me duele la garganta.', traducao: 'Estou com dor de garganta.' },
          { parte: 'el estómago', frase: 'Tengo dolor de estómago.', traducao: 'Estou com dor de estômago.' },
          { parte: 'la espalda', frase: 'Me duele mucho la espalda.', traducao: 'Minhas costas doem muito.' },
          { parte: 'los pies', frase: 'Me duelen los pies.', traducao: 'Meus pés doem.' },
          { parte: 'la muela', frase: 'Tengo dolor de muelas desde ayer.', traducao: 'Estou com dor de dente desde ontem.' },
          { parte: 'sintomas', frase: 'Tengo fiebre y tos.', traducao: 'Estou com febre e tosse.' },
        ],
        erros: [['Mi cabeza duele.', 'Me duele la cabeza.', 'Em espanhol, o corpo tem artigo e a pessoa aparece no «me».'], ['Me duele los pies.', 'Me duelen los pies.', 'O verbo concorda com a parte do corpo: plural, «duelen».'], ['Tengo una fiebre.', 'Tengo fiebre.', 'Sintomas em geral se dizem com «tener», sem artigo.'], ['Tengo una dolor de cabeza.', 'Tengo dolor de cabeza. / Tengo un dolor de cabeza fuerte.', '«Dolor» é masculino, e na frase geral não leva artigo.'], ['Me duele la cabeza desde tres días.', 'Me duele la cabeza desde hace tres días.', '«Desde» com um período de tempo pede «hace».']],
      }),
      producao(5, 'Diga em voz alta o que dói numa pessoa que está muito cansada: «Me duele…, me duelen…, tengo dolor de…, tengo…» Use pelo menos quatro partes do corpo.'),
    ]),
    sessao('S2', 'No médico', [
      revisao(4, 'Diga de memória cinco frases com «me duele», «me duelen» e «tengo dolor de». Depois diga um sintoma com «desde hace».'),
      palavras(6, [
        ['la cita', 'la thíta', 'o horário marcado, a consulta marcada', ''], ['el médico, la médica', 'el médiko, la médika', 'o médico, a médica', ''], ['la consulta', 'la konsúlta', 'o consultório; a consulta', ''], ['el centro de salud', 'el théntro de salúd', 'o posto de saúde público (Espanha)', ''], ['la receta', 'la rrethéta', 'a receita médica (também a receita de cozinha)', ''], ['las urgencias', 'las urhénthias', 'o pronto-socorro', ''],
      ]),
      gramatica(12, 'Marcar consulta e entender o que o médico pede', 'PASSO 1: para marcar, use o pedido educado da aula 29: «Quisiera pedir una cita con el médico.» ou «Necesito una cita para el jueves.» Pergunte: «¿Tiene hueco esta tarde?» (hueco = vaga) ou «¿A qué hora puedo ir?». PASSO 2: o médico e o paciente se tratam por «usted», então tudo vem na terceira pessoa: «¿Qué le pasa?», «¿Dónde le duele?», «¿Desde cuándo tiene fiebre?». PASSO 3: as instruções usam o imperativo de usted (aula 28): para os verbos em -ar, a terminação é «-e»; para -er e -ir, «-a». Assim: «respire hondo», «abra la boca», «tosa», «siéntese», «descanse», «beba mucha agua», «tome una pastilla», «vuelva en una semana». PASSO 4: a frequência se diz com «cada» + tempo (cada ocho horas) ou «veces al día»: «dos veces al día», «una vez a la semana». «Cada» não varia. PASSO 5: o conselho vem com «tiene que» ou «debe» (aula 13): «Tiene que descansar», «Debe beber agua». Também com «hay que» (é preciso): «Hay que esperar dos días.» PASSO 6: você responde com frases curtas: «Desde ayer», «Me duele aquí», «Sí, soy alérgico a la penicilina», «No, no tengo fiebre». PASSO 7: falsos amigos: «pastilla» é comprimido (e também pastilha para a garganta), «receta» é a receita médica, «embarazada» é grávida, e «constipado» é resfriado. PASSO 8: cuidado: aqui você aprende a se comunicar, e não a se tratar. Para qualquer dúvida de saúde, fale com um profissional.', {
        tag: 'Saúde',
        comparacao: 'em português o médico diz «o senhor tem febre?» e usa o imperativo («abra a boca»). Em espanhol é igual, com «usted». A diferença está em falsos amigos: «embarazada» não é «embaraçada» (isso é «avergonzada», se for vergonha), e «receta» serve tanto para o remédio quanto para o bolo.',
        tabela: [
          { medico: '¿Qué le pasa?', paciente: 'Me duele la garganta y tengo tos.', traducao: 'O que o senhor tem? / Dói a garganta e tenho tosse.' },
          { medico: '¿Desde cuándo tiene fiebre?', paciente: 'Desde ayer por la noche.', traducao: 'Desde quando tem febre? / Desde ontem à noite.' },
          { medico: 'Abra la boca, por favor.', paciente: '(abre a boca)', traducao: 'Abra a boca, por favor.' },
          { medico: 'Respire hondo.', paciente: '(respira fundo)', traducao: 'Respire fundo.' },
          { medico: 'Tiene que descansar.', paciente: 'Vale, gracias.', traducao: 'O senhor precisa descansar. / Certo, obrigado.' },
          { medico: 'Vuelva en una semana.', paciente: 'De acuerdo. ¿Puedo pedir la cita ahora?', traducao: 'Volte em uma semana. / De acordo. Posso marcar agora?' },
        ],
        erros: [['Abre la boca, señora García.', 'Abra la boca, señora García.', 'Com «usted», o imperativo de abrir é «abra».'], ['Tengo cita por el jueves.', 'Tengo cita el jueves.', 'Dia da semana não leva preposição.'], ['Soy embarazada.', 'Estoy embarazada.', 'A gravidez é um estado e pede «estar».'], ['Tomo dos pastillas cada de ocho horas.', 'Tomo dos pastillas cada ocho horas.', '«Cada» vai direto antes do tempo, sem «de».']],
      }),
      producao(8, 'Faça um diálogo sozinho, em voz alta: primeiro peça uma cita («Quisiera pedir una cita…»), depois, como paciente, descreva três sintomas e há quanto tempo os tem, e por fim, como médico, diga três instruções de usted.'),
    ]),
    sessao('S3', 'Na farmácia', [
      revisao(4, 'Diga três instruções do médico com o imperativo de usted: «Abra…, Respire…, Tome…». Depois diga duas frases de frequência: «dos veces al día», «cada ocho horas».'),
      palavras(5, [
        ['la farmacia', 'la farmáthia', 'a farmácia', ''], ['el jarabe', 'el harábe', 'o xarope', ''], ['la pomada', 'la pomáda', 'a pomada', ''], ['la tirita', 'la tiríta', 'o band-aid, o curativo (Espanha); na América Latina se diz «curita»', ''], ['sin receta', 'sin rrethéta', 'sem receita', ''],
      ]),
      gramatica(8, 'Pedir algo para um problema', 'PASSO 1: na farmácia, peça com «¿Tiene algo para…?» ou «Necesito algo para…». O «para» aqui indica a finalidade, como na aula 31: «algo para la tos», «algo para el dolor de cabeza». PASSO 2: o farmacêutico pergunta: «¿Es para usted?», «¿Tiene receta?», «¿Es alérgico a algún medicamento?». Note o «alérgico a». PASSO 3: a dosagem se diz com «cada», «veces al día» e «antes / después de las comidas»: «Una pastilla cada ocho horas, después de comer.» PASSO 4: o «se» serve para dizer o que se vende (fórmula pronta; a regra completa vem mais tarde): «Se vende sin receta», «Se vende con receta». PASSO 5: antes de tomar, leia a caixa e as instruções. O farmacêutico pode dizer: «Lea el prospecto», o folheto que vem dentro. PASSO 6: se você já usou algo, diga «Ya he tomado…» (aula 17) ou «Ayer tomé…» (aula 19). PASSO 7: o vocabulário varia: «tirita» na Espanha e «curita» na América Latina.', {
        tag: 'Saúde',
        comparacao: 'em português dizemos «algo para tosse» ou «algo contra a tosse», e em espanhol o mais comum é «algo para la tos». O «para» dá a finalidade. Outra diferença: «alérgico a» pede «a», e não «de».',
        erros: [['Necesito algo por la tos.', 'Necesito algo para la tos.', 'Finalidade pede «para», não «por».'], ['Soy alérgico de la penicilina.', 'Soy alérgico a la penicilina.', '«Alérgico» pede a preposição «a».'], ['Tengo alergia de la penicilina.', 'Tengo alergia a la penicilina.', 'Com «alergia», a preposição é «a».'], ['Quiero una pastilla para dolor.', 'Quisiera algo para el dolor de cabeza.', 'Seja específico e use o pedido educado da aula 29.']],
      }),
      dialogo(8, 'En la farmacia / Na farmácia', 'Javier vai à farmácia porque tem tosse e dor de garganta.', [
        ['La farmacéutica', 'Buenas tardes. ¿Qué desea?', 'Boa tarde. O que deseja?'], ['Javier', 'Buenas tardes. Tengo tos desde hace tres días y me duele la garganta. ¿Tiene algo para eso?', 'Boa tarde. Estou com tosse há três dias e a garganta dói. A senhora tem algo para isso?'], ['La farmacéutica', '¿Tiene fiebre?', 'O senhor tem febre?'],
        ['Javier', 'No, fiebre no tengo. Solo estoy un poco cansado.', 'Não, febre não tenho. Só estou um pouco cansado.'], ['La farmacéutica', '¿Es alérgico a algún medicamento?', 'O senhor é alérgico a algum medicamento?'], ['Javier', 'No, a ninguno.', 'Não, a nenhum.'],
        ['La farmacéutica', 'Tome este jarabe como indica la caja. Y si sigue mal dentro de una semana, hable con su médico.', 'Tome este xarope como a caixa indica. E se continuar mal em uma semana, fale com o seu médico.'], ['Javier', '¿Se vende sin receta?', 'Vende-se sem receita?'], ['La farmacéutica', 'Sí, sin receta. Son nueve euros con cincuenta.', 'Sim, sem receita. São nove euros e cinquenta.'],
      ]),
      producao(5, 'Faça o papel de Javier em voz alta. Mude os sintomas: dor de cabeça, ou dor de estômago, e a duração: «desde ayer», «desde hace dos días».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 33', [
      revisao(5, 'Diga em voz alta o que dói, quanto tempo faz e o que você pediria numa farmácia, em cinco frases.'),
      exercicios(20, [
        ouvir('Me duele la cabeza', ['Me duele la cabeza', 'Me duelen las cabezas', 'Mi cabeza duele'], 'Me duele la cabeza', 'Corpo no singular: «duele».'),
        ouvir('Tengo fiebre desde ayer', ['Tengo fiebre desde ayer', 'Tengo fiebre desde anoche', 'Tengo fiebre desde hace ayer'], 'Tengo fiebre desde ayer', '«Tener fiebre» e «desde ayer».'),
        ouvir('¿Es alérgico a algún medicamento?', ['¿Es alérgico a algún medicamento?', '¿Es alérgico de algún medicamento?', '¿Está alérgico a algún medicamento?'], '¿Es alérgico a algún medicamento?', '«Alérgico a», com «ser».'),
        ditado('Me duelen los pies', 'Escreva: Me duelen los pies. Plural: duelen.'), ditado('Tengo dolor de garganta', 'Escreva: Tengo dolor de garganta.'), ditado('Respire hondo, por favor', 'Escreva: Respire hondo, por favor. Imperativo de usted.'),
        mc('Como se diz «Minha cabeça dói»?', ['Me duele la cabeza.', 'Mi cabeza duele.', 'Tengo duele la cabeza.'], 'Me duele la cabeza.', 'Corpo com artigo e pessoa no «me».'),
        mc('Qual frase está correta?', ['Me duelen los pies.', 'Me duele los pies.', 'Me duelen el pie.'], 'Me duelen los pies.', 'O verbo concorda com o plural.'),
        mc('Como se diz «Estou com febre»?', ['Tengo fiebre.', 'Estoy fiebre.', 'Soy fiebre.'], 'Tengo fiebre.', 'Sintomas com «tener».'),
        mc('Qual é o imperativo de usted do verbo «abrir»?', ['abra', 'abre', 'abri'], 'abra', 'Verbos em -er e -ir: terminação «-a» na forma de usted.'),
        mc('O que significa «pastilla» na farmácia?', ['comprimido', 'pomada', 'xarope'], 'comprimido', '«Pastilla» é o comprimido (e também a pastilha para a garganta).'),
        lacuna('Tengo tos ___ hace tres días.', ['desde', 'por', 'en'], 'desde', '«Desde hace» + período.'), lacuna('Necesito algo ___ la tos.', ['para', 'por', 'de'], 'para', 'Finalidade: «para».'), lacuna('Soy alérgico ___ la penicilina.', ['a', 'de', 'con'], 'a', '«Alérgico a».'), lacuna('Tome una pastilla ___ ocho horas.', ['cada', 'por', 'en'], 'cada', '«Cada ocho horas».'), lacuna('Mi hermana está ___ . (grávida)', ['embarazada', 'embarazado', 'embarazosa'], 'embarazada', 'Falso amigo: «embarazada» é grávida; «embarazoso» seria algo constrangedor.'),
        ordem('Ordene: «Me duele la garganta desde ayer.»', ['Me', 'duele', 'la', 'garganta', 'desde', 'ayer.'], 'Me duele la garganta desde ayer.', 'Pessoa, verbo, parte do corpo e tempo.'), ordem('Ordene: «¿Dónde le duele?»', ['¿Dónde', 'le', 'duele?'], '¿Dónde le duele?', 'Pergunta do médico, em «usted».'),
        livre('Escreva em espanhol: Estou com febre e dor de garganta desde ontem. Preciso de uma consulta.', 'Tengo fiebre y me duele la garganta desde ayer. Necesito una cita.'),
        lacuna('A mi hermano le ___ las muelas. (doler)', ['duele', 'duelen', 'duelan'], 'duelen', '«Las muelas» é plural, então «duelen».'),
        lacuna('Tengo dolor de ___ . (cabeça)', ['la cabeza', 'cabezas', 'cabeza'], 'cabeza', 'Em «dolor de» + parte do corpo, não há artigo.'),
        lacuna('Tome dos pastillas ___ doce horas.', ['por', 'cada', 'de'], 'cada', '«Cada ocho horas» indica o intervalo.'),
        lacuna('Tengo cita ___ jueves.', ['por', 'el', 'en'], 'el', 'Para o dia, usa-se «el» sem preposição.'),
        mc('Qual é o imperativo de «usted» de «tomar»?', ['toma', 'tomad', 'tome'], 'tome', 'Com «usted», verbos em -ar usam «-e».'),
        mc('O que significa «las urgencias»?', ['receita', 'pronto-socorro', 'consulta'], 'pronto-socorro', '«Urgencias» é o pronto-socorro.'),
        mc('Como se diz «desde há três dias»?', ['desde tres días', 'hace desde tres días', 'desde hace tres días'], 'desde hace tres días', 'Usa-se «desde hace» + período.'),
        ordem('Ordene: «Me duele la garganta desde hace tres días.»', ['Me', 'duele', 'la', 'garganta', 'desde', 'hace', 'tres', 'días.'], 'Me duele la garganta desde hace tres días.', '«Doler» concorda com a parte do corpo.'),
        ordem('Ordene: «¿Tiene algo para la tos?»', ['¿Tiene', 'algo', 'para', 'la', 'tos?'], '¿Tiene algo para la tos?', '«Algo para» + problema.'),
        livre('Escreva em espanhol: Minha cabeça dói e estou com febre.', 'Me duele la cabeza y tengo fiebre.'),
        livre('Escreva em espanhol: Preciso de uma consulta para quinta-feira.', 'Necesito una cita para el jueves.'),
      ]),
      producao(5, 'Diga em voz alta, como paciente, o que você sente e há quanto tempo; depois diga três frases do médico em «usted».'),
    ]),
  ],
});
