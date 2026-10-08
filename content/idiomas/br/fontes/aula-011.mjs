import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 11, titulo: 'City and directions', nivel: 'a1',
  objetivo: 'Ask where a place is with «onde fica…?», understand and give simple directions (straight, left, right, until the traffic light) and say how to get somewhere and how long it takes.',
  nota: 'You can ask where places are, follow short directions on the street and say how far something is and how to get there. Next lesson: the essential irregular verbs «ir, fazer, poder, ver, vir, dizer, pôr, saber, conhecer».',
  sessoes: [
    sessao('S1', 'Places in the city and «onde fica…?»', [
      revisao(5, 'Say where you are with «Estou no… / Estou na… / Estou em…» and where two objects around you are with «está» and «estão». Then say how you feel today with «estar».'),
      palavras(8, [
        ['a cidade', 'ah see-DAH-djee', 'city, town', ''], ['o bairro', 'oo BY-hoo', 'neighborhood', ''], ['o centro', 'oo SEH~-troo', 'downtown, city center', ''], ['a praça', 'ah PRAH-sah', 'square, plaza', ''],
        ['a farmácia', 'ah fahr-MAH-see-ah', 'pharmacy', ''], ['o supermercado', 'oo soo-pehr-mehr-KAH-doo', 'supermarket', ''], ['o hospital', 'oo ohs-pee-TAH-oo', 'hospital', ''], ['o correio', 'oo koh-HAY-oo', 'post office', ''],
        ['o ponto de ônibus', 'oo POH~-too djee OH-nee-boos', 'bus stop', ''], ['a estação de metrô', 'ah ehs-tah-SOW~ djee meh-TROH', 'subway station', ''], ['a rodoviária', 'ah hoh-doh-vee-AH-ree-ah', 'intercity bus station', ''], ['o banheiro', 'oo bah-NYAY-roo', 'bathroom, restroom', ''],
      ]),
      gramatica(12, '«Onde fica…?» and the verb «ficar»', "STEP 1: to ask where a building, a street or a city is, Brazilians say «Onde fica…?»: «Onde fica o banco?», «Onde fica a farmácia?». The verb «ficar» here means «to be located». It is used for things that do not move. For a person or an object that can move, you still use «estar» (lesson 10): «Onde está a Ana?». STEP 2: «ficar» is a regular -ar verb. Eu fico, você fica, ele fica, ela fica, nós ficamos, a gente fica, vocês ficam, eles ficam, elas ficam. Be careful with the plural: «Onde ficam as farmácias?». STEP 3: to get the attention of a stranger say «Com licença» (excuse me): «Com licença, onde fica o correio?». STEP 4: the answer says how far it is. «Fica perto» (it is near), «Fica longe» (it is far), «Fica aqui do lado» (it is right here beside us), «Fica a dois quarteirões daqui» (it is two blocks from here), «Fica a cinco minutos a pé» (it is five minutes on foot). «Daqui» is «de» + «aqui», and «dali» is «de» + «ali». STEP 5: to ask whether something exists nearby say «Tem uma farmácia por aqui?» (is there a pharmacy around here?) or «Tem banheiro?». «Por aqui» means around here. STEP 6: in Brazil, «banheiro» is the room with the toilet, in a house or in public. In Portugal people say «casa de banho». The bus is «ônibus» in Brazil and «autocarro» in Portugal, the train is «trem» in Brazil and «comboio» in Portugal. STEP 7: a city is divided into «bairros» (neighborhoods). Large cities in Brazil also have a «centro», a main «praça» and many «avenidas». Names of streets use «Rua», «Avenida» or «Praça»: Rua Augusta, Avenida Paulista.", {
        tag: 'Places',
        comparacao: "In English you often ask «Where is the bank?». In Portuguese «Onde está o banco?» is understood, but «Onde fica o banco?» is what locals say for a fixed place. English «Is there a pharmacy around here?» becomes «Tem uma farmácia por aqui?» with «tem» (lesson 5), not with «é».",
        tabela: [
          { person: 'eu', form: 'fico', example: 'Eu fico no centro.' },
          { person: 'você, ele, ela', form: 'fica', example: 'O correio fica na praça.' },
          { person: 'nós / a gente', form: 'ficamos / fica', example: 'A gente fica perto do hospital.' },
          { person: 'vocês, eles, elas', form: 'ficam', example: 'As farmácias ficam no centro.' },
        ],
        erros: [['Onde fica as farmácias?', 'Onde ficam as farmácias?', 'The verb agrees with the plural subject: «ficam».'], ['O hospital fica a dois quarteirão.', 'O hospital fica a dois quarteirões.', 'The plural of «quarteirão» is «quarteirões».'], ['A farmácia fica longe o hospital.', 'A farmácia fica longe do hospital.', '«Longe de» + «o» becomes «longe do».'], ['Onde fica a banheiro?', 'Onde fica o banheiro?', '«Banheiro» is masculine.']],
      }),
      producao(5, 'Ask out loud where five places are: «Com licença, onde fica o/a…?» Use the pharmacy, the supermarket, the post office, the bus stop and the bathroom. Then answer for each one: «Fica perto» or «Fica longe».'),
    ]),
    sessao('S2', 'Directions: right, left, straight', [
      revisao(4, 'Conjugate «ficar» (eu fico, você fica, nós ficamos, vocês ficam) and say two sentences about places in your own city with «fica» and «ficam».'),
      palavras(6, [
        ['à direita', 'ah djee-RAY-tah', 'to the right', ''], ['à esquerda', 'ah ehs-KEHR-dah', 'to the left', ''], ['reto', 'HEH-too', 'straight', ''], ['a esquina', 'ah ehs-KEE-nah', 'corner', ''], ['o quarteirão', 'oo kwar-tay-ROW~', 'block (of buildings)', ''], ['o semáforo', 'oo seh-MAH-foh-roo', 'traffic light', ''],
        ['virar', 'vee-HAR', 'to turn', ''], ['atravessar', 'ah-trah-veh-SAR', 'to cross', ''], ['seguir', 'seh-GEER', 'to follow, to keep going', ''], ['até', 'ah-TEH', 'until, as far as', ''], ['depois', 'deh-POYS', 'then, afterwards', ''],
      ]),
      gramatica(12, 'Giving and understanding directions', "STEP 1: the simplest way to give directions is the present tense with «você»: «Você segue reto até o semáforo. Depois você vira à direita.» (You keep straight until the traffic light. Then you turn right.) «Virar» and «atravessar» are regular -ar verbs: vira, atravessa. «Seguir» changes its vowel: eu sigo, você segue. STEP 2: «reto» or «em frente» means straight on: «Você segue reto» or «Você segue em frente». STEP 3: to say right and left use «à direita» and «à esquerda». The «à» is the contraction «a» + «a»: it has a grave accent, so it must be written «à direita», never «a direita». STEP 4: use «até» before the landmark where something happens: «até o semáforo», «até a esquina», «até a praça». STEP 5: to count streets or blocks use the ordinals, which agree with the noun: «a primeira rua» (the first street), «a segunda rua», «a terceira rua»; and for blocks: «um quarteirão», «dois quarteirões». «Vire na segunda rua à esquerda.» STEP 6: you will also hear the polite command forms. They are the same verbs in a different form: «Vire à direita», «Siga em frente», «Atravesse a rua». The imperative has its own lesson later; for now you only need to recognize them. STEP 7: the usual closing sentences are «Fica na esquina», «Fica do outro lado da rua» (it is on the other side of the street), «Fica em frente à farmácia» (opposite the pharmacy; the «à» again). STEP 8: to ask how to get somewhere say «Como eu chego ao hospital?» (how do I get to the hospital?); «chegar a» becomes «ao» before a masculine noun and «à» before a feminine one: «ao hospital», «à rodoviária». The contraction table of the preposition «a»: a + o = ao, a + a = à, a + os = aos, a + as = às. STEP 9: if you are lost, say «Estou perdido» (man) or «Estou perdida» (woman).", {
        tag: 'Directions',
        comparacao: "In English you say «Turn right at the traffic light»; in Portuguese the structure is «Você vira à direita no semáforo». English «straight» and «straight ahead» are «reto» and «em frente». The English preposition «to» in «to the right» is built into «à direita», with the accent that marks the contraction.",
        tabela: [
          { you_say: 'Você segue reto até o semáforo.', meaning: 'You keep straight until the traffic light.', note: 'segue = seguir' },
          { you_say: 'Você vira à direita.', meaning: 'You turn right.', note: 'à = a + a' },
          { you_say: 'Você vira à esquerda na esquina.', meaning: 'You turn left at the corner.', note: 'na = em + a' },
          { you_say: 'Você atravessa a praça.', meaning: 'You cross the square.', note: 'regular -ar verb' },
          { you_say: 'É a segunda rua à esquerda.', meaning: "It's the second street on the left.", note: 'ordinal: segunda' },
          { you_say: 'Vire à direita. / Siga em frente.', meaning: 'Turn right. / Keep going straight.', note: 'what you will hear (polite command)' },
        ],
        erros: [['Você vira a direita.', 'Você vira à direita.', '«À direita» needs the accent, because it is «a» + «a».'], ['É o segundo rua.', 'É a segunda rua.', '«Rua» is feminine, so «segunda».'], ['Você segue em reto.', 'Você segue reto.', 'No «em» before «reto». «Em frente» is a separate expression.'], ['Você atravessa o rua.', 'Você atravessa a rua.', '«Rua» is feminine: «a rua».']],
      }),
      producao(8, 'Give directions out loud from your home to the nearest supermarket, using at least four of these: «segue reto», «vira à direita», «vira à esquerda», «até», «depois», «a segunda rua», «na esquina». Then ask in Portuguese how to get to the hospital: «Como eu chego ao hospital?»'),
    ]),
    sessao('S3', 'Getting around: bus, subway, on foot', [
      revisao(4, 'Say the directions «segue reto», «vira à direita», «vira à esquerda» and the words «até o semáforo». Ask where the bathroom is: «Com licença, onde fica o banheiro?»'),
      palavras(5, [
        ['o ônibus', 'oo OH-nee-boos', 'bus', ''], ['o metrô', 'oo meh-TROH', 'subway', ''], ['o trem', 'oo TREH~ee', 'train', ''], ['o táxi', 'oo TAHK-see', 'taxi', ''], ['a pé', 'ah PEH', 'on foot', ''], ['pegar', 'peh-GAR', 'to take (a vehicle), to catch', ''],
      ]),
      gramatica(8, 'By bus, by metro, on foot: how to get there', "STEP 1: to say how you travel use «de» + the vehicle: «de ônibus», «de metrô», «de trem», «de carro», «de táxi», «de bicicleta». The exception is «a pé» (on foot). Notice that there is no article in «de ônibus». STEP 2: «pegar» means to take or to catch a vehicle: «Você pega o ônibus 175 no ponto da praça.» «Pegar» is a regular -ar verb: pego, pega, pegamos, pegam. STEP 3: ask how long something takes with «Quanto tempo leva?» and answer with «Leva» + time: «Leva vinte minutos.» «Levar» is a regular -ar verb: leva, levam. STEP 4: combine the distance with the vehicle: «Fica a dez minutos de ônibus», «Fica a cinco minutos a pé», «Fica a uma hora de trem». STEP 5: ask «É longe?» (is it far?) or «É perto?». Questions and answers about distance in general use «ser»: «É perto», «É longe», «Não é longe». For the exact position of a place, keep using «ficar». STEP 6: a note on the city: only some large Brazilian cities have a subway («metrô»); in others buses are the main transport. The long-distance bus station is the «rodoviária». Buses have a number and, often, the name of the final destination on the front. STEP 7: in Minas Gerais and in some other regions «trem» is also a colloquial word for «thing», but in the city context it is the vehicle.", {
        tag: 'Transport',
        comparacao: "English uses «by» («by bus»), «on» («on foot») and «take» («take the bus»). Portuguese uses «de» («de ônibus»), «a» («a pé») and «pegar» («pegar o ônibus»). English says «It takes ten minutes»; Portuguese says «Leva dez minutos», with no «it».",
        tabela: [
          { you_say: 'de ônibus', meaning: 'by bus', example: 'Fica a dez minutos de ônibus.' },
          { you_say: 'de metrô', meaning: 'by subway', example: 'Eu pego o metrô no centro.' },
          { you_say: 'de trem', meaning: 'by train', example: 'Fica a uma hora de trem.' },
          { you_say: 'de táxi', meaning: 'by taxi', example: 'De táxi leva cinco minutos.' },
          { you_say: 'a pé', meaning: 'on foot', example: 'Fica a cinco minutos a pé.' },
        ],
        erros: [['Fica a dez minutos de pé.', 'Fica a dez minutos a pé.', '«On foot» is «a pé», not «de pé» (which means «standing up»).'], ['Fica a cinco minutos em ônibus.', 'Fica a cinco minutos de ônibus.', '«By» + vehicle is «de» + vehicle.'], ['Eu pego a metrô.', 'Eu pego o metrô.', '«Metrô» is masculine.'], ['Leva cinco minuto.', 'Leva cinco minutos.', 'More than one minute: plural «minutos».']],
      }),
      dialogo(8, 'Where is the metro station?', 'John is a tourist in a city. He stops a woman on the street.', [
        ['John', 'Com licença, onde fica a estação de metrô?', 'Excuse me, where is the subway station?'], ['The woman', 'Fica perto. Você segue reto até o semáforo e vira à direita.', 'It is near. You keep straight until the traffic light and turn right.'], ['John', 'Reto até o semáforo e à direita. É longe?', 'Straight to the traffic light and right. Is it far?'],
        ['The woman', 'Não, fica a cinco minutos a pé. A estação fica na esquina, em frente à farmácia.', 'No, it is five minutes on foot. The station is on the corner, opposite the pharmacy.'], ['John', 'Obrigado! Tem um banheiro por aqui?', 'Thank you! Is there a bathroom around here?'], ['The woman', 'Tem, sim. Tem um banheiro no supermercado, ao lado da padaria.', 'Yes. There is one in the supermarket, next to the bakery.'],
        ['John', 'Muito obrigado!', 'Thank you very much!'], ['The woman', 'De nada. Boa tarde!', "You're welcome. Good afternoon!"],
      ]),
      producao(5, 'Role-play: you are lost. Stop an imaginary person with «Com licença», ask where a place is, ask if it is far, ask how long it takes by bus or on foot and thank them.'),
    ]),
    sessao('S4', 'Review and practice of lesson 11', [
      revisao(5, 'Say the names of eight places in the city and ask where each one is with «Onde fica…?». Give directions from your home to a pharmacy.'),
      exercicios(20, [
        ouvir('Onde fica o banco?', ['Onde fica o banco?', 'Onde fica o banheiro?', 'Onde ficam os bancos?'], 'Onde fica o banco?', 'Listen to the difference between «banco» and «banheiro».'),
        ouvir('Você vira à esquerda.', ['Você vira à esquerda.', 'Você vira à direita.', 'Você segue reto.'], 'Você vira à esquerda.', 'Listen for «esquerda».'),
        ouvir('Fica a dois quarteirões daqui.', ['Fica a dois quarteirões daqui.', 'Fica a três quarteirões daqui.', 'Fica a dois minutos daqui.'], 'Fica a dois quarteirões daqui.', 'Listen for «dois» and «quarteirões».'),
        ouvir('Siga em frente.', ['Siga em frente.', 'Vire à direita.', 'Atravesse a rua.'], 'Siga em frente.', '«Siga em frente» is the polite command for «seguir».'),
        ouvir('Fica a cinco minutos a pé.', ['Fica a cinco minutos a pé.', 'Fica a cinco minutos de ônibus.', 'Fica a quinze minutos a pé.'], 'Fica a cinco minutos a pé.', '«A pé» is on foot.'),
        ouvir('Tem uma farmácia por aqui?', ['Tem uma farmácia por aqui?', 'Tem um hospital por aqui?', 'Tem uma padaria por aqui?'], 'Tem uma farmácia por aqui?', 'Listen for «farmácia».'),
        ditado('Com licença, onde fica o correio?', 'Write: Com licença, onde fica o correio?'), ditado('Você segue reto até o semáforo.', 'Write: Você segue reto até o semáforo.'), ditado('Fica em frente à farmácia.', 'Write: Fica em frente à farmácia.'), ditado('Eu pego o ônibus.', 'Write: Eu pego o ônibus.'),
        mc('How do you ask where a bank is?', ['Onde fica o banco?', 'Onde tem o banco?', 'Como fica o banco?'], 'Onde fica o banco?', '«Onde fica…?» for a fixed place.'),
        mc('How do you say «on the right»?', ['à direita', 'a direita', 'de direita'], 'à direita', 'The accent shows the contraction «a» + «a».'),
        mc('How do you say «by bus»?', ['de ônibus', 'em ônibus', 'por ônibus'], 'de ônibus', '«De» + vehicle.'),
        mc('How do you say «on foot»?', ['a pé', 'de pé', 'em pé'], 'a pé', '«De pé» means standing.'),
        mc('What is «o semáforo»?', ['the traffic light', 'the corner', 'the block'], 'the traffic light', '«Semáforo» is the traffic light.'),
        lacuna('Onde ___ as farmácias?', ['ficam', 'fica', 'ficamos'], 'ficam', 'The plural subject needs «ficam».'),
        lacuna('Você ___ reto até a esquina.', ['segue', 'seguo', 'segues'], 'segue', '«Você» takes the third person: «segue».'),
        lacuna('Fica ___ dez minutos de ônibus.', ['a', 'em', 'por'], 'a', 'The distance in time uses «a».'),
        lacuna('É ___ segunda rua à esquerda.', ['a', 'o', 'um'], 'a', '«Rua» is feminine: «a segunda rua».'),
        ordem('Put in order: «Você vira à direita no semáforo.»', ['Você', 'vira', 'à', 'direita', 'no', 'semáforo.'], 'Você vira à direita no semáforo.', 'Subject, verb, direction, place.'),
        ordem('Put in order: «Quanto tempo leva de ônibus?»', ['Quanto', 'tempo', 'leva', 'de', 'ônibus?'], 'Quanto tempo leva de ônibus?', 'Question word, verb, transport.'),
        livre('Write in Portuguese: Excuse me, where is the pharmacy? Is it far?', 'Com licença, onde fica a farmácia? É longe?'),
        livre('Write in Portuguese: You keep straight until the corner and turn left.', 'Você segue reto até a esquina e vira à esquerda.'),
      ]),
      producao(5, 'Tell an imaginary tourist how to get from the bus station (rodoviária) to the city center: what to take, how long it takes and where to turn.'),
    ]),
  ],
});
