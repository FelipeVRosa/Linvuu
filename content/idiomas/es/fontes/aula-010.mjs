import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 10, titulo: 'Estar, ubicação e preposições', nivel: 'a1',
  objetivo: 'Conjugar «estar» no presente, usá-lo para dizer onde algo está e como alguém se sente, distinguir «ser» de «estar» nos casos mais comuns, usar as preposições de lugar («encima de, debajo de, al lado de…») e não confundir «hay» com «está».',
  nota: 'Você diz onde as coisas estão, como você está e escolhe entre «ser» e «estar» em frases comuns. Próxima aula: cidade e direções.',
  sessoes: [
    sessao('S1', 'Estar: lugar e estado', [
      revisao(5, 'Diga a hora em voz alta de três maneiras e conte o que você faz às segundas e aos sábados. Depois conjugue «querer» de memória.'),
      palavras(8, [
        ['bien', 'bién', 'bem', ''], ['mal', 'mal', 'mal', ''], ['cansado, cansada', 'kansádo, kansáda', 'cansado, cansada', ''], ['contento, contenta', 'konténto, konténta', 'contente', ''],
        ['ocupado, ocupada', 'okupádo, okupáda', 'ocupado, ocupada', ''], ['enfadado, enfadada', 'enfadádo, enfadáda', 'zangado, zangada', ''], ['preocupado, preocupada', 'preokupádo, preokupáda', 'preocupado, preocupada', ''], ['tranquilo, tranquila', 'trankílo, trankíla', 'tranquilo, tranquila', ''],
      ]),
      gramatica(12, 'O verbo estar', 'PASSO 1: «estar» corresponde ao nosso «estar». Conjuga-se assim: «estoy, estás, está, estamos, estáis, están». É irregular só na primeira pessoa («estoy»), e leva til em «estás», «está» e «están». PASSO 2: use «estar» para dizer onde alguém ou algo se encontra: «Estoy en casa», «El banco está en la plaza», «Madrid está en España». Isso vale para pessoas, coisas e cidades. PASSO 3: use «estar» para estados que podem mudar: «Estoy cansado», «Ella está contenta», «Están ocupados». PASSO 4: a pergunta mais comum é «¿Cómo estás?» (tú) e «¿Cómo está usted?» (usted). A resposta é «Estoy bien» ou «Estoy mal», com o advérbio, que não muda. PASSO 5: o adjetivo concorda com o sujeito, e quem fala se descreve com a própria forma: um homem diz «estoy cansado» e uma mulher diz «estoy cansada». PASSO 6: «estar de acuerdo» é uma expressão fixa: «Estoy de acuerdo» é «concordo». PASSO 7: «ser» mostra o que algo é, de modo mais estável: identidade, origem, profissão, nacionalidade e hora. «Soy profesor», «Soy de Brasil», «Son las tres». PASSO 8: depois de «ser» ou «estar» com um adjetivo, o sentido pode mudar (veja a sessão 3). Por isso, o adjetivo é aprendido com o verbo. PASSO 9: falso amigo: «enfadado» é zangado, e não «enfadonho» (que é «aburrido» ou «pesado»). «Estoy enfadado» é «estou zangado». PASSO 10: eventos usam «ser» para dizer onde acontecem: «La fiesta es en mi casa», e não «está». Para um evento, o lugar se liga a «ser».', {
        tag: 'Ser e estar',
        comparacao: 'em português também há «ser» e «estar», e muitos usos coincidem: «estou em casa», «sou professor». O espanhol segue a mesma lógica no lugar («estar») e na identidade («ser»), mas os pontos de atenção são: o evento no lugar leva «ser» («la fiesta es en mi casa»), «estar de acuerdo» é fixo (não «ser de acordo»), e com alguns adjetivos o significado muda, como veremos.',
        tabelas: [
          { titulo: 'estar (estar)', linhas: [
            { pronome: 'yo', forma: 'estoy', exemplo: 'Estoy en casa.' },
            { pronome: 'tú', forma: 'estás', exemplo: '¿Cómo estás?' },
            { pronome: 'él / ella / usted', forma: 'está', exemplo: 'Usted está en Madrid.' },
            { pronome: 'nosotros, nosotras', forma: 'estamos', exemplo: 'Estamos contentos.' },
            { pronome: 'vosotros, vosotras', forma: 'estáis', exemplo: '¿Estáis cansados?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'están', exemplo: 'Ellos están ocupados.' },
          ] },
          { titulo: 'Ser × estar: primeira regra', linhas: [
            { usa: 'ser', para: 'identidade, origem, profissão, hora', exemplo: 'Soy médico. Son las dos.' },
            { usa: 'estar', para: 'lugar e estado', exemplo: 'Estoy en casa. Estoy cansado.' },
            { usa: 'ser', para: 'onde acontece um evento', exemplo: 'La fiesta es en mi casa.' },
            { usa: 'estar', para: 'expressão fixa de concordar', exemplo: 'Estoy de acuerdo.' },
          ] },
        ],
        exemplos: [['¿Cómo estás? — Estoy bien, gracias.', 'Como você está? — Estou bem, obrigado.'], ['Mi madre está en el trabajo.', 'Minha mãe está no trabalho.'], ['Ellas están contentas.', 'Elas estão contentes.'], ['La clase es en la biblioteca.', 'A aula é na biblioteca.'], ['Estoy de acuerdo contigo.', 'Concordo com você.']],
        erros: [['Soy en casa.', 'Estoy en casa.', 'Lugar pede «estar».'], ['Estoy profesor.', 'Soy profesor.', 'Profissão pede «ser».'], ['Soy de acuerdo.', 'Estoy de acuerdo.', 'A expressão é fixa, com «estar».'], ['Madrid es en España.', 'Madrid está en España.', 'Localização de cidade pede «estar».'], ['La fiesta está en mi casa.', 'La fiesta es en mi casa.', 'Evento no lugar pede «ser».'], ['Estoy cansada. (dito por um homem)', 'Estoy cansado.', 'O adjetivo concorda com quem fala.']],
      }),
      producao(5, 'Diga em voz alta: como você está hoje, onde você está, onde estão sua família e seus amigos, e uma frase com «estar de acuerdo». Depois pergunte com «usted»: «¿Cómo está usted? ¿Dónde está?»'),
    ]),
    sessao('S2', 'As preposições de lugar', [
      revisao(4, 'Conjugue «estar» de memória e diga seis frases curtas, três de lugar e três de estado.'),
      palavras(6, [
        ['encima de', 'enthíma de', 'em cima de', ''], ['debajo de', 'debáho de', 'embaixo de', ''], ['delante de', 'delánte de', 'diante de', ''], ['detrás de', 'detrás de', 'atrás de', ''], ['al lado de', 'al ládo de', 'ao lado de', ''], ['entre', 'éntre', 'entre', ''],
      ]),
      gramatica(12, 'Dizer onde está algo', 'PASSO 1: a estrutura é «estar» + preposição de lugar + coisa de referência: «El libro está encima de la mesa». PASSO 2: as preposições mais úteis são: «en» (em, dentro), «encima de» (em cima de), «debajo de» (embaixo de), «delante de» (diante de), «detrás de» (atrás de), «al lado de» (ao lado de), «entre… y…» (entre… e…), «cerca de» (perto de), «lejos de» (longe de), «enfrente de» (em frente de), «dentro de» (dentro de), «fuera de» (fora de). PASSO 3: a maioria leva «de» no fim: «cerca de la plaza», «lejos del centro». Por isso, a contração «de + el = del» aparece sempre: «detrás del banco», «al lado del parque». PASSO 4: sem a coisa de referência, tire o «de»: «Está cerca», «Está lejos», «Está detrás», «Está enfrente». PASSO 5: para esquerda e direita, use «a la izquierda» e «a la derecha»: «A la derecha de la puerta», «a la izquierda del banco». PASSO 6: «aquí» é aqui (perto de quem fala), «ahí» é aí (perto de quem ouve ou a média distância) e «allí» é lá (longe de ambos). Na América Latina também se diz «acá» e «allá». PASSO 7: «sobre» e «encima de» são parecidos: «sobre la mesa» e «encima de la mesa» mostram a mesma ideia. Para não errar, prefira «encima de». PASSO 8: «hay» e «está» respondem a perguntas diferentes. «¿Qué hay en la mesa?» pede uma lista de coisas: «Hay un libro». «¿Dónde está el libro?» pede um lugar: «Está encima de la mesa». PASSO 9: pergunte «¿Dónde está…?» para um objeto e «¿Dónde están…?» para vários.', {
        tag: 'Preposições',
        comparacao: 'o português também usa «em cima de», «embaixo de», «ao lado de», «perto de». A diferença está na ortografia (uma só palavra em «encima», «debajo», «detrás», «delante», «enfrente») e na contração («del»). O erro típico é escrever «en cima» em duas palavras, como em português se diz «em cima».',
        tabela: [
          { preposicao: 'encima de', exemplo: 'El gato está encima de la mesa.', traducao: 'O gato está em cima da mesa.' },
          { preposicao: 'debajo de', exemplo: 'La mochila está debajo de la silla.', traducao: 'A mochila está embaixo da cadeira.' },
          { preposicao: 'delante de / detrás de', exemplo: 'El coche está delante del banco.', traducao: 'O carro está diante do banco.' },
          { preposicao: 'al lado de', exemplo: 'La tienda está al lado del parque.', traducao: 'A loja está ao lado do parque.' },
          { preposicao: 'entre… y…', exemplo: 'El banco está entre la tienda y el bar.', traducao: 'O banco está entre a loja e o bar.' },
          { preposicao: 'cerca de / lejos de', exemplo: 'Mi casa está cerca de la plaza.', traducao: 'Minha casa fica perto da praça.' },
        ],
        exemplos: [['¿Dónde está el libro? — Está encima de la mesa.', 'Onde está o livro? — Está em cima da mesa.'], ['Hay un libro encima de la mesa.', 'Há um livro em cima da mesa.'], ['La biblioteca está a la derecha del banco.', 'A biblioteca fica à direita do banco.'], ['Los niños están detrás de la casa.', 'As crianças estão atrás da casa.']],
        erros: [['El libro está en cima de la mesa.', 'El libro está encima de la mesa.', '«Encima» se escreve numa só palavra.'], ['Está al lado la casa.', 'Está al lado de la casa.', 'Falta o «de» depois de «al lado».'], ['Está detrás el banco.', 'Está detrás del banco.', 'De + el = del.'], ['Mi casa está lejos la plaza.', 'Mi casa está lejos de la plaza.', 'Falta o «de» depois de «lejos».'], ['Hay el libro encima de la mesa.', 'El libro está encima de la mesa.', 'Com «el libro» (determinado), use «estar».']],
      }),
      producao(8, 'Descreva em voz alta onde estão seis objetos do seu quarto ou da sua mesa, com seis preposições diferentes. Depois pergunte a um amigo: «¿Dónde está tu libro?»'),
    ]),
    sessao('S3', 'Ser ou estar? Os adjetivos que mudam', [
      revisao(4, 'Diga seis preposições de lugar com um exemplo cada. Depois explique a diferença entre «Hay un libro» e «El libro está encima de la mesa».'),
      palavras(5, [
        ['listo, lista', 'lísto, lísta', 'esperto; pronto (com estar)', ''], ['aburrido, aburrida', 'aburrído, aburrída', 'chato; entediado (com estar)', ''], ['de acuerdo', 'de akuérdo', 'de acordo', ''], ['¿Dónde está?', 'dónde está', 'onde está?', ''], ['aquí, ahí, allí', 'akí, aí, alhí', 'aqui, aí, lá', ''],
      ]),
      gramatica(8, 'Ser × estar: o sentido muda', 'PASSO 1: com certos adjetivos, o verbo muda o significado. «Ser» fala de uma qualidade da pessoa ou coisa; «estar» fala de como está agora ou de um resultado. PASSO 2: «Es listo» é «ele é esperto»; «Está listo» é «ele está pronto». PASSO 3: «Es aburrido» é «é chato»; «Está aburrido» é «está entediado». PASSO 4: «Es guapo» é «é bonito»; «Está guapo» é «hoje está bonito» (bem arrumado). PASSO 5: «Es rico» é «tem dinheiro» (ou é rico em algo); «Está rico» é «está gostoso». PASSO 6: «Es verde» é «é da cor verde»; «Está verde» é «está verde» (fruta que não amadureceu). PASSO 7: a regra prática: se você pode substituir por «hoje, agora, desta vez», prefira «estar»; se for sempre ou quase sempre assim, use «ser». PASSO 8: «estar» pode vir com «bien, mal, así». «Está bien» é «está bem»; «es bueno» é «é bom». PASSO 9: com particípios que mostram resultado, use «estar»: «La tienda está cerrada», «La puerta está abierta». PASSO 10: na dúvida, pergunte: a frase diz como a coisa é (ser) ou onde e como ela está agora (estar)?', {
        tag: 'Ser e estar',
        comparacao: 'o português tem os mesmos dois verbos e muda o sentido da mesma forma em muitos casos («ele é chato» × «ele está chato», com sentidos diferentes). Os pares da tabela valem a pena decorar de uma vez, porque aparecem o tempo todo.',
        tabela: [
          { adjetivo: 'listo', com_ser: 'Es listo. (esperto)', com_estar: 'Está listo. (pronto)' },
          { adjetivo: 'aburrido', com_ser: 'Es aburrido. (chato)', com_estar: 'Está aburrido. (entediado)' },
          { adjetivo: 'guapo', com_ser: 'Es guapo. (bonito)', com_estar: 'Está guapo. (hoje está bonito)' },
          { adjetivo: 'rico', com_ser: 'Es rico. (tem dinheiro)', com_estar: 'Está rico. (gostoso)' },
          { adjetivo: 'verde', com_ser: 'Es verde. (da cor)', com_estar: 'Está verde. (sem amadurecer)' },
        ],
        erros: [['El plátano es verde todavía.', 'El plátano está verde todavía.', 'Fruta que ainda não amadureceu: «estar verde».'], ['Mi hermano está listo, siempre gana.', 'Mi hermano es listo, siempre gana.', 'Característica estável pede «ser».'], ['El libro está aburrido.', 'El libro es aburrido.', 'Para dizer que o livro é chato, use «ser»; «estar aburrido» é o que a pessoa sente.']],
      }),
      dialogo(8, '¿Dónde estás? / Onde você está?', 'Inés liga para Tomás para saber onde ele está.', [
        ['Inés', 'Hola, Tomás. ¿Dónde estás?', 'Oi, Tomás. Onde você está?'], ['Tomás', 'Estoy en la biblioteca, cerca de la plaza.', 'Estou na biblioteca, perto da praça.'],
        ['Inés', '¿Estás ocupado?', 'Você está ocupado?'], ['Tomás', 'Un poco. Estoy cansado, pero estoy contento: mi trabajo ya está listo.', 'Um pouco. Estou cansado, mas contente: meu trabalho já está pronto.'],
        ['Inés', 'Entonces la fiesta es a las ocho, en casa de Clara.', 'Então a festa é às oito, na casa da Clara.'], ['Tomás', 'Perfecto, estoy de acuerdo. Hasta luego.', 'Perfeito, concordo. Até logo.'],
      ]),
      producao(5, 'Escreva e diga cinco frases com pares de «ser» e «estar», por exemplo «Es listo / Está listo», sobre pessoas ou coisas à sua volta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 10', [
      revisao(5, 'Conjugue «estar» e «ser», lado a lado. Diga duas frases de lugar e duas de estado com «estar», e duas de identidade com «ser».'),
      exercicios(20, [
        ouvir('El libro está encima de la mesa', ['El libro está encima de la mesa', 'El libro está debajo de la mesa', 'Hay un libro encima de la mesa'], 'El libro está encima de la mesa', 'Ouça «encima» e o verbo «está».'),
        ouvir('Estamos contentos', ['Estamos contentos', 'Estáis contentos', 'Están contentos'], 'Estamos contentos', 'Ouça o «-mos» de «estamos».'),
        ouvir('La fiesta es en mi casa', ['La fiesta es en mi casa', 'La fiesta está en mi casa', 'La casa es mía'], 'La fiesta es en mi casa', 'Evento no lugar: «es en».'),
        ditado('Estoy en casa', 'Escreva: Estoy en casa.'), ditado('El banco está al lado del parque', 'Escreva: El banco está al lado del parque.'), ditado('Estoy de acuerdo', 'Escreva: Estoy de acuerdo.'),
        mc('Qual verbo se usa para dizer onde uma cidade fica?', ['estar', 'ser', 'hay'], 'estar', 'Localização pede «estar».'),
        mc('Como se diz «Concordo»?', ['Estoy de acuerdo.', 'Soy de acuerdo.', 'Estoy en acuerdo.'], 'Estoy de acuerdo.', 'Expressão fixa com «estar de».'),
        mc('Qual é a forma de «tú» de «estar»?', ['estás', 'está', 'estáis'], 'estás', 'Com «tú», «estás», com til.'),
        mc('O que significa «Está listo»?', ['está pronto', 'é esperto', 'está doente'], 'está pronto', 'Com «estar», «listo» é pronto.'),
        mc('Qual frase diz que a banana ainda não amadureceu?', ['El plátano está verde.', 'El plátano es verde.', 'El plátano hay verde.'], 'El plátano está verde.', '«Estar verde» é sem amadurecer; «ser verde» é a cor.'),
        mc('Qual é a ortografia correta?', ['encima', 'en cima', 'encíma'], 'encima', 'Uma só palavra, sem acento.'),
        lacuna('Yo ___ en casa. (estar)', ['estoy', 'soy', 'estás'], 'estoy', 'Com «yo», «estoy».'), lacuna('Ellos ___ cansados. (estar)', ['están', 'son', 'estamos'], 'están', 'Estado: «están».'), lacuna('El banco está ___ parque. (ao lado do)', ['al lado del', 'al lado de el', 'lado del'], 'al lado del', 'De + el = del.'),
        lacuna('Madrid ___ en España.', ['está', 'es', 'hay'], 'está', 'Localização: «está».'), lacuna('Yo ___ profesor. (ser)', ['soy', 'estoy', 'estás'], 'soy', 'Profissão: «soy».'),
        ordem('Ordene: «El libro está encima de la mesa.»', ['El', 'libro', 'está', 'encima', 'de', 'la', 'mesa.'], 'El libro está encima de la mesa.', 'Sujeito, verbo, preposição e referência.'), ordem('Ordene: «¿Dónde está la biblioteca?»', ['¿Dónde', 'está', 'la', 'biblioteca?'], '¿Dónde está la biblioteca?', 'O interrogativo abre a pergunta.'),
        livre('Escreva em espanhol: O banco está ao lado do parque, e eu estou cansado.', 'El banco está al lado del parque y estoy cansado.'),
      ]),
      producao(5, 'Descreva em voz alta o seu dia: onde você está agora, como se sente, onde ficam sua casa, sua escola ou seu trabalho, e uma frase com «ser».'),
    ]),
  ],
});
