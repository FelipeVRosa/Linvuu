import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 11, titulo: 'Cidade e direções', nivel: 'a1',
  objetivo: 'Nomear lugares da cidade, perguntar onde fica algo, entender e dar direções simples («todo recto, gire a la derecha, la segunda calle»), usar os meios de transporte com «en» e «a pie» e pedir um bilhete.',
  nota: 'Você pergunta o caminho, entende indicações e pede uma passagem. Próxima aula: os verbos irregulares essenciais, como «ir», «hacer», «salir» e «decir».',
  sessoes: [
    sessao('S1', 'Lugares da cidade', [
      revisao(5, 'Conjugue «estar» de memória e descreva onde ficam três objetos da sua casa com «encima de, debajo de, al lado de». Diga as horas: 2:15, 5:40, 9:30.'),
      palavras(8, [
        ['la calle', 'la kálhe', 'a rua', ''], ['la farmacia', 'la farmáthia', 'a farmácia', ''], ['el supermercado', 'el supermerkádo', 'o supermercado', ''], ['la estación', 'la estathión', 'a estação', ''],
        ['el museo', 'el muséo', 'o museu', ''], ['el mercado', 'el merkádo', 'o mercado', ''], ['el ayuntamiento', 'el aiuntamiénto', 'a prefeitura', ''], ['la parada', 'la paráda', 'o ponto (de ônibus)', ''],
      ]),
      gramatica(12, 'Perguntar onde fica algo', 'PASSO 1: para chamar a atenção de um desconhecido, comece com «Perdone» ou «Disculpe» (usted), ou «Perdona» e «Disculpa» (tú). PASSO 2: a pergunta principal é «¿Dónde está…?»: «¿Dónde está la farmacia?», «¿Dónde están los baños?». Lembre-se: coisa determinada pede «estar». PASSO 3: se você não sabe se existe, pergunte com «hay»: «¿Hay una farmacia por aquí?». «Por aquí» é «por perto, por aqui». PASSO 4: «¿Está lejos?» e «¿Está cerca?» ajudam a saber a distância. A resposta pode ser «Está a diez minutos andando» ou «Está a dos calles». PASSO 5: «¿Cómo llego a…?» pergunta como chegar: «¿Cómo llego a la estación?». «Llegar» é regular (llego, llegas, llega…). A preposição é «a». PASSO 6: pergunte também «¿Para ir a…?»: «Perdone, ¿para ir al museo?». Aqui «ir» está no infinitivo, e sua conjugação virá na próxima aula. PASSO 7: os lugares da cidade têm gênero e seguem o plural da aula 5: «el museo, los museos», «la farmacia, las farmacias», «la estación, las estaciones». PASSO 8: palavras que enganam: «ayuntamiento» é a prefeitura (em português, «ajuntamento» é outra coisa); «estación» pode ser a estação de trem, de metro, de ônibus ou do ano (primavera, verão…); «manzana» é maçã e também o quarteirão da cidade; «calle» é a rua; «avenida» e «paseo» são ruas largas. PASSO 9: na América Latina, a prefeitura tem nomes que variam por país (por exemplo, «alcaldía» ou «municipalidad»). PASSO 10: «el centro» é o centro da cidade; para o bairro, «el barrio».', {
        tag: 'Cidade',
        comparacao: 'a pergunta «onde fica a farmácia?» em português usa «ficar», mas o espanhol usa «estar» para o lugar: «¿Dónde está la farmacia?». «Quedar» também se ouve, como em «¿Dónde queda la farmacia?», mais na América Latina, mas «estar» é a forma segura em qualquer lugar. Já o falso amigo «ayuntamiento» é prefeitura, e não «ajuntamento».',
        tabela: [
          { pergunta: '¿Dónde está la farmacia?', funcao: 'lugar conhecido', traducao: 'Onde fica a farmácia?' },
          { pergunta: '¿Hay un banco por aquí?', funcao: 'saber se existe', traducao: 'Há um banco por aqui?' },
          { pergunta: '¿Está lejos?', funcao: 'distância', traducao: 'É longe?' },
          { pergunta: '¿Cómo llego a la estación?', funcao: 'como chegar', traducao: 'Como chego à estação?' },
          { pergunta: 'Perdone, ¿para ir al museo?', funcao: 'chamar a atenção e perguntar', traducao: 'Com licença, para ir ao museu?' },
        ],
        exemplos: [['Perdone, ¿dónde está el mercado?', 'Com licença, onde fica o mercado?'], ['¿Hay una farmacia por aquí?', 'Há uma farmácia por aqui?'], ['La estación está cerca del ayuntamiento.', 'A estação fica perto da prefeitura.'], ['¿Cómo llego al museo?', 'Como chego ao museu?']],
        erros: [['¿Dónde es la farmacia?', '¿Dónde está la farmacia?', 'Para localizar um lugar, use «estar».'], ['¿Cómo llego en la estación?', '¿Cómo llego a la estación?', 'O destino pede «a».'], ['¿Hay la farmacia por aquí?', '¿Hay una farmacia por aquí?', 'Depois de «hay», artigo indefinido.'], ['¿Dónde está los baños?', '¿Dónde están los baños?', 'Plural: «están».']],
      }),
      producao(5, 'Pergunte em voz alta, com «usted», onde fica cada um dos seis lugares da lista: «Perdone, ¿dónde está…?». Depois pergunte se existe um perto: «¿Hay… por aquí?»'),
    ]),
    sessao('S2', 'Dar e entender direções', [
      revisao(4, 'Faça quatro perguntas sobre o caminho com «dónde está», «hay», «cómo llego a» e «para ir a».'),
      palavras(6, [
        ['todo recto', 'tódo rrékto', 'sempre em frente', ''], ['a la derecha', 'a la derétcha', 'à direita', ''], ['a la izquierda', 'a la ithkiérda', 'à esquerda', ''], ['la esquina', 'la eskína', 'a esquina', ''], ['el semáforo', 'el semáforo', 'o semáforo', ''], ['el cruce', 'el krúthe', 'o cruzamento', ''],
      ]),
      gramatica(12, 'Direções: siga, gire, cruce', 'PASSO 1: as indicações usam verbos no imperativo, uma forma que você estudará na aula 28. Por ora, reconheça-as como frases prontas. PASSO 2: com «usted»: «Siga todo recto», «Gire a la derecha», «Cruce la plaza», «Tome la segunda calle». Com «tú»: «Sigue todo recto», «Gira a la derecha», «Cruza la plaza», «Toma la segunda calle». PASSO 3: outro verbo que aparece muito é «doblar»: «Doble a la izquierda» (usted), «Dobla a la izquierda» (tú). Ele quer dizer virar. PASSO 4: «todo recto» é em frente na Espanha; em partes da América Latina se diz «todo derecho». «Derecha» é lado direito; não confunda. PASSO 5: os ordinais ajudam a contar ruas: «la primera calle, la segunda, la tercera». Antes de masculino singular, «primero» e «tercero» perdem o «o»: «el primer semáforo», «el tercer cruce». PASSO 6: referências úteis: «al final de la calle», «en la esquina», «enfrente de», «al lado de», «después de», «antes de». PASSO 7: para dizer a distância: «a dos calles», «a cinco minutos andando», «a diez minutos en autobús». PASSO 8: use o gerúndio fixo «andando» (a pé): é comum dizer «andando» ou «a pie». PASSO 9: confirme o que entendeu: «¿A la izquierda y luego a la derecha?» e, se não entender, peça: «¿Puede repetir, por favor?» ou «Más despacio, por favor».', {
        tag: 'Direções',
        comparacao: 'o português diz «vire à direita» e «siga em frente»; o espanhol diz «gire a la derecha» e «siga todo recto». Preste atenção ao verbo «seguir» (que muda o «e» para «i»: «siga»), e à preposição «a» antes de «la derecha»; e os ordinais «primero» e «tercero» se encurtam antes de masculino singular: «primer», «tercer».',
        tabela: [
          { funcao: 'seguir em frente', usted: 'Siga todo recto.', tu: 'Sigue todo recto.' },
          { funcao: 'virar', usted: 'Gire / Doble a la derecha.', tu: 'Gira / Dobla a la derecha.' },
          { funcao: 'atravessar', usted: 'Cruce la plaza.', tu: 'Cruza la plaza.' },
          { funcao: 'tomar a rua', usted: 'Tome la segunda calle.', tu: 'Toma la segunda calle.' },
          { funcao: 'distância', usted: 'Está a cinco minutos andando.', tu: 'Está a cinco minutos andando.' },
        ],
        exemplos: [['Siga todo recto hasta el semáforo.', 'Siga em frente até o semáforo.'], ['Gire a la izquierda en la esquina.', 'Vire à esquerda na esquina.'], ['Tome la segunda calle a la derecha.', 'Pegue a segunda rua à direita.'], ['La estación está al final de la calle.', 'A estação fica no fim da rua.'], ['Está a diez minutos andando.', 'Fica a dez minutos a pé.']],
        erros: [['Gire en la derecha.', 'Gire a la derecha.', 'A direção leva «a», e não «en».'], ['Siga todo derecha.', 'Siga todo recto.', '«Recto» é masculino; «derecha» é o lado.'], ['Tome la primero calle.', 'Tome la primera calle.', 'O ordinal concorda com «calle».'], ['Tome el primero semáforo.', 'Tome el primer semáforo.', 'Antes de masculino singular, «primero» vira «primer».'], ['Está a cinco minutos a pie andando.', 'Está a cinco minutos andando.', 'Escolha «andando» ou «a pie».']],
      }),
      producao(8, 'Dê em voz alta um caminho de três passos do ponto de ônibus até a farmácia, com «siga, gire, tome» e «a la derecha / a la izquierda». Depois dê o mesmo caminho com «tú».'),
    ]),
    sessao('S3', 'Transporte e bilhetes', [
      revisao(4, 'Diga os ordinais de primeiro a quinto no feminino, e dois caminhos curtos com «usted».'),
      palavras(5, [
        ['el metro', 'el métro', 'o metrô', ''], ['el autobús', 'el autobús', 'o ônibus', ''], ['el billete', 'el bilhéte', 'a passagem (Espanha)', ''], ['la parada', 'la paráda', 'o ponto de ônibus; a parada', ''], ['a pie', 'a pié', 'a pé', ''],
      ]),
      gramatica(8, 'Meios de transporte e quanto tempo demora', 'PASSO 1: para dizer o meio, use «en»: «en autobús», «en metro», «en tren», «en coche», «en taxi», «en bicicleta», «en avión». Para a pé, «a pie» ou «andando». PASSO 2: «tomar» é pegar um transporte: «Tomo el autobús». Para pegar, também se escuta «coger» na Espanha; em boa parte da América Latina, este verbo é ofensivo e deve ser evitado. PASSO 3: «llegar» é chegar: «Llego en metro», «Llegamos a pie». PASSO 4: «viajar» é viajar: «Viajo en tren a Sevilla». PASSO 5: a duração se pergunta com «¿Cuánto tarda?» e se responde com «Tarda diez minutos». «Tardar» é regular. PASSO 6: «un billete» é a passagem na Espanha; na América Latina, é «un boleto» ou «un pasaje». «Billete de ida» é só ida, «billete de ida y vuelta» é ida e volta. PASSO 7: o ônibus tem nomes locais: «autobús» na Espanha; «colectivo» na Argentina, «camión» no México, «guagua» em partes do Caribe e nas Ilhas Canárias, «micro» no Chile. PASSO 8: para pedir o bilhete: «Un billete de ida y vuelta a Sevilla, por favor». PASSO 9: na Espanha, o metrô e o ônibus têm bilhete simples ou cartão recarregável; as regras mudam por cidade, então pergunte na bilheteria.', {
        tag: 'Transporte',
        comparacao: 'em português dizemos «de ônibus», «de metrô», «de carro», «a pé». O espanhol usa «en» para os veículos («en autobús», «en coche») e «a pie» para caminhar. A confusão típica é traduzir «de ônibus» por «de autobús». Outro cuidado é com o verbo «coger»: na Espanha é comum; em muitas regiões da América Latina é ofensivo.',
        tabela: [
          { meio: 'en autobús', exemplo: 'Llego en autobús.', traducao: 'Chego de ônibus.' },
          { meio: 'en metro', exemplo: 'Viajo en metro.', traducao: 'Viajo de metrô.' },
          { meio: 'en tren', exemplo: 'Viajo en tren.', traducao: 'Viajo de trem.' },
          { meio: 'en coche', exemplo: 'Llegamos en coche.', traducao: 'Chegamos de carro.' },
          { meio: 'a pie, andando', exemplo: 'Llego a pie.', traducao: 'Chego a pé.' },
        ],
        erros: [['Llego de autobús.', 'Llego en autobús.', 'O meio de transporte pede «en».'], ['Llego en pie.', 'Llego a pie.', 'A pé é «a pie».'], ['Cojo el autobús. (na América Latina)', 'Tomo el autobús.', '«Coger» pode ser ofensivo em muitos países latino-americanos.'], ['Un boleto de ida y vuelta a Sevilla, por favor. (na Espanha)', 'Un billete de ida y vuelta a Sevilla, por favor.', 'Na Espanha se diz «billete»; «boleto» é usado em países da América Latina.']],
      }),
      dialogo(8, 'Perdone, ¿para ir a la estación? / Com licença, para ir à estação?', 'Lucía, uma turista, pede o caminho a um policial.', [
        ['Lucía', 'Perdone, ¿para ir a la estación?', 'Com licença, para ir à estação?'], ['El policía', 'Siga todo recto hasta el semáforo.', 'Siga em frente até o semáforo.'],
        ['Lucía', '¿Está lejos?', 'É longe?'], ['El policía', 'No, está a diez minutos andando. Gire a la izquierda en el semáforo y tome la segunda calle a la derecha.', 'Não, fica a dez minutos a pé. Vire à esquerda no semáforo e pegue a segunda rua à direita.'],
        ['Lucía', '¿A la izquierda y luego a la derecha?', 'À esquerda e depois à direita?'], ['El policía', 'Eso es. La estación está enfrente del museo.', 'Isso mesmo. A estação fica em frente ao museu.'],
        ['Lucía', 'Muchas gracias.', 'Muito obrigada.'],
      ]),
      producao(5, 'Descreva em voz alta como você chega, na vida real, à casa de um amigo e ao trabalho: meio de transporte, quanto demora, o que há perto. Use «en», «a pie» e «tarda».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 11', [
      revisao(5, 'Dê um caminho de quatro passos até a farmácia e pergunte a distância. Depois diga como você viaja para o trabalho.'),
      exercicios(20, [
        ouvir('Siga todo recto hasta el semáforo', ['Siga todo recto hasta el semáforo', 'Gire a la derecha en el semáforo', 'Siga todo recto hasta la esquina'], 'Siga todo recto hasta el semáforo', 'Ouça «todo recto» e «semáforo».'),
        ouvir('Está a diez minutos andando', ['Está a diez minutos andando', 'Está a dos minutos andando', 'Está a diez minutos en metro'], 'Está a diez minutos andando', 'Ouça «diez» e «andando».'),
        ouvir('Tome la segunda calle', ['Tome la segunda calle', 'Tome la primera calle', 'Tome la tercera calle'], 'Tome la segunda calle', 'Ouça «segunda».'),
        ditado('¿Dónde está la farmacia?', 'Escreva: ¿Dónde está la farmacia?'), ditado('Gire a la izquierda', 'Escreva: Gire a la izquierda.'), ditado('Un billete de ida y vuelta', 'Escreva: Un billete de ida y vuelta.'),
        mc('Como se pergunta onde fica a estação?', ['¿Dónde está la estación?', '¿Dónde es la estación?', '¿Dónde hay la estación?'], '¿Dónde está la estación?', 'Lugar: «estar».'),
        mc('Qual preposição se usa com os meios de transporte?', ['en', 'de', 'por'], 'en', 'En autobús, en metro, en tren.'),
        mc('Como se diz «a pé»?', ['a pie', 'en pie', 'de pie'], 'a pie', '«A pie» é a pé; «de pie» é em pé.'),
        mc('O que é «el ayuntamiento»?', ['a prefeitura', 'um ajuntamento', 'uma reunião'], 'a prefeitura', 'Falso amigo: «ayuntamiento» é a prefeitura.'),
        mc('Qual frase está correta?', ['el primer semáforo', 'el primero semáforo', 'el primer semáforos'], 'el primer semáforo', '«Primero» perde o «o» antes de masculino singular.'),
        mc('Como se diz «ida e volta»?', ['de ida y vuelta', 'ida volta', 'de idas y vueltas'], 'de ida y vuelta', 'Forma fixa do bilhete.'),
        lacuna('Gire ___ la derecha.', ['a', 'en', 'por'], 'a', 'A direção leva «a».'), lacuna('Llego ___ metro.', ['en', 'de', 'a'], 'en', 'O meio de transporte leva «en».'), lacuna('Tome la ___ calle. (segunda)', ['segunda', 'segundo', 'dos'], 'segunda', 'O ordinal concorda com «calle».'),
        lacuna('La estación está ___ museo. (em frente do)', ['enfrente del', 'enfrente de el', 'enfrente en el'], 'enfrente del', 'De + el = del.'), lacuna('¿Cómo ___ a la estación? (chego)', ['llego', 'llega', 'llegas'], 'llego', 'Com «yo», «llego».'),
        ordem('Ordene: «Siga todo recto y gire a la izquierda.»', ['Siga', 'todo', 'recto', 'y', 'gire', 'a', 'la', 'izquierda.'], 'Siga todo recto y gire a la izquierda.', 'Duas instruções ligadas com «y».'), ordem('Ordene: «¿Hay una farmacia por aquí?»', ['¿Hay', 'una', 'farmacia', 'por', 'aquí?'], '¿Hay una farmacia por aquí?', 'Pergunta de existência.'),
        livre('Escreva em espanhol: Com licença, onde fica a estação? Fica a dez minutos a pé.', 'Perdone, ¿dónde está la estación? Está a diez minutos andando.'),
      ]),
      producao(5, 'Encene com um amigo, em voz alta, uma conversa na rua: um turista pergunta o caminho até o museu e a outra pessoa responde com três passos.'),
    ]),
  ],
});
