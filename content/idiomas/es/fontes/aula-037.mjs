import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 37, titulo: 'Casa, aluguel e vizinhos', nivel: 'a2',
  objetivo: 'Descrever a casa e os andares (cômodos, ordinais, preposições de lugar), procurar e alugar um imóvel (alquiler, fianza, gastos, centenas) e falar com a proprietária e com os vizinhos com educação, relatando defeitos e pedindo conserto.',
  nota: 'Você descreve onde mora, procura casa e resolve problemas com o proprietário e com os vizinhos. Próxima aula: revisão e simulado do A2.',
  sessoes: [
    sessao('S1', 'A casa e os andares', [
      revisao(5, 'Ligue em voz alta para um amigo, convide-o para algo e combine o lugar e a hora (aula 36).'),
      palavras(8, [
        ['el piso', 'el píso', 'o apartamento (Espanha); México e Argentina: el departamento', ''], ['el salón', 'el salón', 'a sala de estar', ''], ['la cocina', 'la kothína', 'a cozinha', ''], ['el dormitorio, la habitación', 'el dormitório, la abitathión', 'o quarto', ''],
        ['el baño', 'el bánho', 'o banheiro', ''], ['la terraza', 'la terrátha', 'o terraço', ''], ['el ascensor', 'el asthensór', 'o elevador', ''], ['la planta baja', 'la plánta bása', 'o térreo', ''],
      ]),
      gramatica(12, 'Cômodos, andares e onde estão as coisas', 'PASSO 1: para descrever a casa, use «tener» e «hay» (aulas 5 e 10): «Mi piso tiene tres habitaciones, un salón, una cocina y un baño», «En el salón hay un sofá». PASSO 2: na Espanha, o térreo é «la planta baja», e o andar acima dele é «el primer piso» ou «la primera planta». Em seguida vêm o segundo, o terceiro e assim por diante. PASSO 3: os ordinais são: primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. «Primero» e «tercero» perdem o «-o» final antes de um substantivo masculino singular: «el primer piso», «el tercer piso». No feminino não mudam: «la primera planta», «la tercera planta». PASSO 4: para dizer em que andar mora, diga «Vivo en el tercero» (o terceiro) ou «Vivo en el tercer piso». A pergunta é «¿En qué piso vives?». PASSO 5: «piso» é apartamento e também andar; o chão é «el suelo», e a parede é «la pared». O teto é «el techo». PASSO 6: as preposições de lugar da aula 10 servem para a mobília: «La lámpara está encima de la mesa», «El libro está debajo de la cama», «El sofá está al lado de la ventana», «La mesa está entre la silla y el sofá». Atenção: «encima de» e «debajo de» são uma palavra só. PASSO 7: algumas coisas de casa: «la cama», «la mesa», «la silla», «el armario», «la lavadora» (máquina de lavar roupa), «la nevera» ou «el frigorífico» (Espanha; México: el refrigerador; Argentina: la heladera). PASSO 8: para dizer que a casa tem ou não tem algo: «Tiene ascensor», «No tiene terraza». PASSO 9: o nome do imóvel varia por país: «piso» (Espanha), «departamento» (México e Argentina, entre outros) e «apartamento» (outros países). Quem fala em «apartamento» na Espanha também é entendido.', {
        tag: 'Casa',
        comparacao: 'em português, o térreo é «térreo» e o primeiro andar é o primeiro acima dele, como no espanhol. A diferença é o falso amigo «piso», que em espanhol é apartamento ou andar (o chão é «suelo»). E os ordinais «primero» e «tercero» ficam «primer» e «tercer» antes de um substantivo masculino, algo que o português não faz.',
        tabela: [
          { ordinal: 'primero (primer)', exemplo: 'Vivo en el primer piso.', traducao: 'Moro no primeiro andar.' },
          { ordinal: 'segundo', exemplo: 'Mi tía vive en el segundo.', traducao: 'Minha tia mora no segundo.' },
          { ordinal: 'tercero (tercer)', exemplo: 'Mi tía vive en el tercer piso.', traducao: 'Meu apartamento fica no terceiro andar.' },
          { ordinal: 'cuarto', exemplo: 'La oficina está en la cuarta planta.', traducao: 'O escritório fica no quarto andar.' },
          { ordinal: 'quinto', exemplo: 'El quinto piso no tiene terraza.', traducao: 'O quinto andar não tem terraço.' },
        ],
        erros: [['Vivo en el primero piso.', 'Vivo en el primer piso.', '«Primero» perde o «-o» antes de substantivo masculino.'], ['Mi piso es en el tercero.', 'Mi piso está en el tercero.', 'Localização pede «estar».'], ['La lámpara está en cima de la mesa.', 'La lámpara está encima de la mesa.', '«Encima de» é uma palavra só.'], ['Vivo en la tercer planta.', 'Vivo en la tercera planta.', 'No feminino, «tercera» não perde o «-a».']],
      }),
      producao(5, 'Descreva em voz alta a sua casa: andar, número de cômodos, o que tem no salão e no quarto, e onde está cada móvel.'),
    ]),
    sessao('S2', 'Procurar e alugar', [
      revisao(4, 'Diga de memória cinco cômodos e cinco móveis, cada um com uma preposição de lugar.'),
      palavras(6, [
        ['el alquiler', 'el alkilér', 'o aluguel', ''], ['la casera, el casero', 'la kaséra, el kaséro', 'a proprietária, o proprietário (coloquial)', ''], ['el contrato', 'el kontráto', 'o contrato', ''], ['la fianza', 'la fiántha', 'a caução', ''], ['amueblado', '', 'mobiliado', ''], ['los gastos', 'los gástos', 'as despesas (luz, água, condomínio)', ''],
      ]),
      gramatica(12, 'Perguntar as condições e entender os preços', 'PASSO 1: nos anúncios, o espanhol usa o «se» impessoal: «Se alquila piso» (aluga-se apartamento), «Se vende casa» (vende-se casa). PASSO 2: para perguntar as condições: «¿Cuánto es el alquiler?», «¿Los gastos están incluidos?», «¿Está amueblado?», «¿Cuántas habitaciones tiene?», «¿Tiene ascensor?», «¿Tiene calefacción?», «¿Se admiten mascotas?». PASSO 3: para marcar visita, use o condicional de cortesia (aula 29): «Quisiera ver el piso», «¿Cuándo puedo ir a verlo?». O pronome fica ligado ao infinitivo: «verlo». PASSO 4: para o contrato: «¿De cuánto tiempo es el contrato?», «¿Cuánto es la fianza?», «¿Qué incluye el precio?». PASSO 5: as centenas completam os números da aula 8: 100 (cien, ciento + número), 200 doscientos, 300 trescientos, 400 cuatrocientos, 500 quinientos, 600 seiscientos, 700 setecientos, 800 ochocientos, 900 novecientos. Atenção ao 500, 700 e 900, que são irregulares. Entre centenas e dezenas não há «y»: «cuatrocientos cincuenta», e só há «y» entre dezenas e unidades: «cuatrocientos cincuenta y cinco». PASSO 6: o preço: «Son setecientos cincuenta euros al mes» (por mês). PASSO 7: «alquilar» serve para quem aluga e para quem dá em aluguel. Para o dono, também se diz «el propietario» (mais formal) ou «el casero»; para quem mora, «el inquilino». Em muitos países da América Latina, usa-se «arrendar» e «el arrendador». PASSO 8: com «busco» e uma coisa que você quer, use «con»: «Busco un piso con dos habitaciones y con terraza».', {
        tag: 'Casa',
        comparacao: 'em português, aluguel é «aluguel» e alugar é «alugar». Em espanhol, o aluguel é «el alquiler» e o verbo é «alquilar»; o «alquilo» (eu alugo) é uma forma do verbo, e não o substantivo. A fórmula «se alquila» corresponde ao «aluga-se» dos anúncios. As centenas têm três formas irregulares (quinientos, setecientos, novecientos), que não correspondem ao português.',
        tabela: [
          { pergunta: '¿Cuánto es el alquiler?', resposta: 'Son setecientos cincuenta euros al mes.', traducao: 'Quanto é o aluguel? / São setecentos e cinquenta euros por mês.' },
          { pergunta: '¿Los gastos están incluidos?', resposta: 'No, la luz y el agua se pagan aparte.', traducao: 'As despesas estão incluídas? / Não, luz e água são pagas à parte.' },
          { pergunta: '¿Está amueblado?', resposta: 'Sí, tiene cama, mesa y armarios.', traducao: 'É mobiliado? / Sim, tem cama, mesa e armários.' },
          { pergunta: '¿Cuánto es la fianza?', resposta: 'Hay que pagar un mes de fianza.', traducao: 'Quanto é a caução? / É preciso pagar um mês de caução.' },
          { pergunta: '¿Cuándo puedo ver el piso?', resposta: 'Mañana a las cinco.', traducao: 'Quando posso ver o apartamento? / Amanhã às cinco.' },
        ],
        erros: [['¿Cuánto es el alquilo?', '¿Cuánto es el alquiler?', '«Alquiler» é o substantivo; «alquilo» é o verbo (eu alugo).'], ['Quiero alugar un piso.', 'Quiero alquilar un piso.', 'O verbo em espanhol é «alquilar».'], ['Cuatrocientos y cincuenta euros.', 'Cuatrocientos cincuenta euros.', 'Só há «y» entre dezenas e unidades.'], ['El piso es amueblado.', 'El piso está amueblado.', 'O estado de mobiliado pede «estar».']],
      }),
      producao(8, 'Ligue em voz alta para um anúncio: peça para ver o piso, pergunte o aluguel, as despesas, a caução e se é mobiliado. Responda também como a pessoa do anúncio.'),
    ]),
    sessao('S3', 'Com a proprietária e os vizinhos', [
      revisao(4, 'Diga em voz alta cinco perguntas que você faria antes de alugar um apartamento.'),
      palavras(5, [
        ['la avería', 'la abería', 'o defeito, a avaria', ''], ['estropeado, roto', 'estropeádo, rróto', 'estragado, quebrado', ''], ['el grifo', 'el grífo', 'a torneira', ''], ['el ruido', 'el rruído', 'o barulho', ''], ['el vecino de arriba', '', 'o vizinho de cima', ''],
      ]),
      gramatica(8, 'Relatar um defeito e pedir silêncio com educação', 'PASSO 1: para um defeito, diga o que não funciona: «No funciona la calefacción», «No hay agua caliente», «La lavadora está estropeada», «El grifo gotea» ou «El grifo está goteando» (aula 30). Algo que quebrou há pouco: «Se ha estropeado el ascensor». PASSO 2: para pedir conserto: «¿Podría venir alguien a arreglarlo?», «¿Podría arreglar el grifo esta semana?» (condicional de cortesia, aula 29). PASSO 3: para pedir um favor a um vizinho, use «¿Le importa…?» ou «¿Le molesta…?»: «¿Le importa bajar un poco la música?», «¿Le molesta si abro la ventana?». Atenção: responder «No» é dar permissão. «No, claro que no» quer dizer «não me importo, pode fazer». PASSO 4: para dizer o que já foi avisado, use os dois pronomes da aula 25: «¿Le ha dicho la avería a la casera?» «Sí, se lo dije ayer.» («le lo» vira «se lo»). PASSO 5: para prazos: «hasta el viernes», «dentro de dos días». PASSO 6: para agradecer, use fórmulas educadas: «Muchas gracias por su ayuda», «Se lo agradezco mucho». PASSO 7: «arreglar» é consertar, mas também arrumar: «arreglar la habitación» é arrumar o quarto.', {
        tag: 'Casa',
        comparacao: 'em português dizemos «você se importa de baixar a música?», e responder «não» é dar permissão. O espanhol funciona igual: «¿Le importa bajar la música?» — «No, claro que no». O que muda é a construção de «importar» e «molestar» (sem preposição antes do infinitivo) e a troca «le lo» por «se lo».',
        erros: [['La lavadora es estropeada.', 'La lavadora está estropeada.', 'O estado de algo estragado pede «estar».'], ['No funciona el calefacción.', 'No funciona la calefacción.', '«Calefacción» é feminino.'], ['Ya le lo dije.', 'Ya se lo dije.', 'Dois pronomes de terceira pessoa: «le lo» vira «se lo».'], ['¿Puedes bajar la música?', '¿Podría bajar un poco la música, por favor?', 'Com um vizinho que você mal conhece, prefira o pedido educado.']],
      }),
      dialogo(8, 'Una avería / Um defeito', 'Diego liga para a proprietária por causa de dois problemas no apartamento.', [
        ['Diego', 'Buenos días, señora. Le llamo porque hay una avería en el piso.', 'Bom dia, senhora. Ligo porque há um defeito no apartamento.'], ['La casera', 'Buenos días, Diego. ¿Qué ha pasado?', 'Bom dia, Diego. O que aconteceu?'], ['Diego', 'Desde ayer no funciona la calefacción y el grifo de la cocina gotea.', 'Desde ontem o aquecimento não funciona e a torneira da cozinha pinga.'],
        ['La casera', 'Vaya, lo siento. ¿Hay agua caliente en el baño?', 'Puxa, sinto muito. Há água quente no banheiro?'], ['Diego', 'Sí, agua caliente sí hay. Solo falla la calefacción.', 'Sim, água quente tem. Só o aquecimento falha.'], ['La casera', 'De acuerdo. Mañana por la mañana va a pasar un técnico. ¿Estará usted en casa?', 'Certo. Amanhã de manhã um técnico vai passar. O senhor estará em casa?'],
        ['Diego', 'Sí, estaré hasta las doce. Después tengo que ir a trabajar.', 'Sim, estarei até meio-dia. Depois tenho que ir trabalhar.'], ['La casera', 'Perfecto. El técnico llegará antes de las doce. Si hay algún problema, me llama.', 'Perfeito. O técnico chegará antes do meio-dia. Se houver algum problema, me ligue.'], ['Diego', 'Muchas gracias, señora. Hasta mañana.', 'Muito obrigado, senhora. Até amanhã.'],
      ]),
      producao(5, 'Faça o papel de Diego em voz alta, mudando o defeito: o ascensor, la lavadora, o aire acondicionado, e o horário.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 37', [
      revisao(5, 'Descreva em voz alta a sua casa, pergunte as condições de um aluguel e relate um defeito, em cinco frases.'),
      exercicios(20, [
        ouvir('Vivo en el tercer piso', ['Vivo en el tercer piso', 'Vivo en el tercero piso', 'Vivo en la tercer piso'], 'Vivo en el tercer piso', '«Tercero» perde o «-o» antes de substantivo masculino.'),
        ouvir('¿Los gastos están incluidos?', ['¿Los gastos están incluidos?', '¿Los gastos son incluidos?', '¿Los gastos hay incluidos?'], '¿Los gastos están incluidos?', 'Estado: «estar incluido».'),
        ouvir('Ya se lo dije ayer', ['Ya se lo dije ayer', 'Ya le lo dije ayer', 'Ya lo le dije ayer'], 'Ya se lo dije ayer', 'Dois pronomes: «se lo».'),
        ditado('La lámpara está encima de la mesa', 'Escreva: La lámpara está encima de la mesa.'), ditado('No funciona la calefacción', 'Escreva: No funciona la calefacción.'), ditado('Son setecientos cincuenta euros al mes', 'Escreva: Son setecientos cincuenta euros al mes.'),
        mc('O que significa «el piso» na Espanha?', ['apartamento ou andar', 'chão', 'telhado'], 'apartamento ou andar', 'O chão é «el suelo».'),
        mc('Como se diz «o terceiro andar» (masculino)?', ['el tercer piso', 'el tercero piso', 'el tres piso'], 'el tercer piso', 'Ordinal reduzido antes de masculino singular.'),
        mc('Qual número é 500?', ['quinientos', 'cincocientos', 'cinco cientos'], 'quinientos', 'O 500 é irregular.'),
        mc('Qual frase está correta?', ['Cuatrocientos cincuenta euros', 'Cuatrocientos y cincuenta euros', 'Cuatro cientos cincuenta euros'], 'Cuatrocientos cincuenta euros', 'Sem «y» entre centenas e dezenas.'),
        mc('Respondendo a «¿Le molesta si abro la ventana?», o que significa «No, claro que no»?', ['Pode abrir.', 'Não pode abrir.', 'Não entendi.'], 'Pode abrir.', '«No» a «¿le molesta?» é dar permissão.'),
        lacuna('El piso ___ amueblado. (está)', ['está', 'es', 'hay'], 'está', 'Estado: «estar».'), lacuna('La lavadora ___ estropeada.', ['está', 'es', 'tiene'], 'está', 'Defeito: «estar estropeado».'), lacuna('Quisiera ___ el piso. (ver)', ['ver', 'veo', 'visto'], 'ver', 'Pedido educado + infinitivo.'), lacuna('Ya ___ lo dije. (a ela)', ['se', 'le', 'lo'], 'se', '«Le lo» vira «se lo».'), lacuna('El grifo ___ . (está pingando)', ['gotea', 'gotean', 'goteo'], 'gotea', 'Terceira pessoa do singular.'),
        ordem('Ordene: «¿Cuánto es el alquiler al mes?»', ['¿Cuánto', 'es', 'el', 'alquiler', 'al', 'mes?'], '¿Cuánto es el alquiler al mes?', 'Pergunta de preço mensal.'), ordem('Ordene: «Mi piso está en el segundo.»', ['Mi', 'piso', 'está', 'en', 'el', 'segundo.'], 'Mi piso está en el segundo.', 'Localização com «estar».'),
        livre('Escreva em espanhol: Quisiera ver o apartamento. O aluguel inclui as despesas? Não funciona o aquecimento.', 'Quisiera ver el piso. ¿El alquiler incluye los gastos? No funciona la calefacción.'),
      ]),
      producao(5, 'Descreva em voz alta o apartamento dos seus sonhos: andar, cômodos, preço mensal e o que ele tem.'),
    ]),
  ],
});
