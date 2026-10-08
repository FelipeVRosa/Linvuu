import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 22, titulo: 'Indefinido × imperfecto', nivel: 'a2',
  objetivo: 'Escolher entre o pretérito indefinido e o imperfecto ao contar uma história: o imperfecto monta o cenário, o indefinido faz a história andar, e o mesmo verbo muda de sentido (sabía × supe, conocía × conocí, quería × quise). Aprender «había» e «hubo» e a diferença entre «salir de» e «irse».',
  nota: 'Você conta uma história completa, com cenário, acontecimento e resultado. Próxima aula: os pronomes de objeto direto (lo, la, los, las).',
  sessoes: [
    sessao('S1', 'Cenário e acontecimento', [
      revisao(5, 'Conjugue «ser», «ir» e «ver» no imperfecto e «ir» no indefinido. Diga uma frase de hábito no passado e outra com um fato único.'),
      palavras(8, [
        ['un día', 'un día', 'um dia (num passado)', ''], ['aquel día', 'akél día', 'naquele dia', ''], ['de repente', 'de repénte', 'de repente', ''], ['cuando', 'kuándo', 'quando', ''],
        ['sonar', 'sonár', 'tocar, soar', ''], ['llover', 'lhobér', 'chover', ''], ['esperar', 'esperár', 'esperar', ''], ['perder', 'perdér', 'perder', ''],
      ]),
      gramatica(12, 'Imperfecto para o cenário, indefinido para o fato', 'PASSO 1: pense em uma história como em um filme. Primeiro vem o cenário: a hora, o tempo, o lugar, como estavam as pessoas. Depois vêm os acontecimentos, um após o outro. PASSO 2: o cenário vai para o imperfecto, porque está em andamento e não tem começo nem fim marcado: «Eran las ocho, hacía frío y yo esperaba el autobús». PASSO 3: cada acontecimento vai para o indefinido, porque começa e termina: «De repente llegó Marta y me saludó». PASSO 4: faça duas perguntas a cada verbo. «Isso aconteceu uma vez e acabou?» Então use o indefinido. «Isso era assim, ou estava em andamento naquele momento?» Então use o imperfecto. PASSO 5: quando uma ação em andamento é interrompida, a que estava em andamento vai para o imperfecto e a que interrompe vai para o indefinido: «Dormía cuando sonó el teléfono». PASSO 6: uma sequência de fatos, um depois do outro, fica toda no indefinido: «Llegué, abrí la puerta, vi una carta y la leí». PASSO 7: os marcadores ajudam. Indefinido: ayer, un día, aquel día, de repente, el lunes, una vez, a las tres. Imperfecto: siempre, cada día, todos los veranos, de niño, mientras, normalmente. PASSO 8: na Espanha, para um período que não acabou (esta mañana, hoy), o fato usa o pretérito perfecto, e o cenário continua no imperfecto: «Esta mañana llovía y he llevado el paraguas». Na América Latina se diz «Esta mañana llovía y llevé el paraguas».', {
        tag: 'Indefinido × imperfecto',
        comparacao: 'o português faz a mesma separação, quase sempre nos mesmos lugares: «eu dormia quando o telefone tocou» corresponde a «dormía cuando sonó el teléfono». Por isso, o brasileiro costuma acertar a escolha; os erros vêm das formas (acentos, irregulares) e do uso do pretérito perfecto na Espanha para o que aconteceu hoje.',
        tabela: [
          { pergunta: 'O fato começou e terminou?', tempo: 'indefinido', exemplo: 'De repente sonó el teléfono.' },
          { pergunta: 'Era costume, repetido?', tempo: 'imperfecto', exemplo: 'Todos los veranos íbamos al pueblo.' },
          { pergunta: 'É descrição, hora, idade, tempo?', tempo: 'imperfecto', exemplo: 'Eran las ocho y hacía frío.' },
          { pergunta: 'Estava em andamento quando algo aconteceu?', tempo: 'imperfecto + indefinido', exemplo: 'Cocinaba cuando llegó Pablo.' },
          { pergunta: 'Fatos em sequência?', tempo: 'indefinido, indefinido', exemplo: 'Llegué, comí y salí.' },
        ],
        exemplos: [['Eran las diez y yo leía cuando oí un ruido.', 'Eram dez horas e eu lia quando ouvi um barulho.'], ['Llovía mucho, así que me quedé en casa.', 'Chovia muito, então fiquei em casa.'], ['Mientras esperaba el tren, perdí el teléfono.', 'Enquanto esperava o trem, perdi o celular.'], ['Un día mi hermano llegó muy contento.', 'Um dia meu irmão chegou muito contente.']],
        erros: [['Ayer iba al cine.', 'Ayer fui al cine.', '«Ayer» indica um fato único e terminado, que pede o indefinido.'], ['De niño fui al pueblo cada verano.', 'De niño iba al pueblo cada verano.', 'Hábito do passado pede o imperfecto.'], ['Dormí cuando sonaba el teléfono.', 'Dormía cuando sonó el teléfono.', 'A ação em andamento é imperfecto; a que interrompe é indefinido.'], ['Llovía y de repente un coche paraba.', 'Llovía y de repente un coche paró.', '«De repente» marca um fato pontual: indefinido.']],
      }),
      producao(5, 'Conte em voz alta uma pequena cena com cenário e acontecimento, como «Eran las… y hacía… cuando de repente…». Use pelo menos um verbo no imperfecto e dois no indefinido.'),
    ]),
    sessao('S2', 'Mesmo verbo, outro sentido', [
      revisao(4, 'Faça duas frases com «cuando»: uma ação em andamento no imperfecto e outra que a interrompe no indefinido.'),
      palavras(6, [
        ['había', 'abía', 'havia, tinha (existência no passado)', ''], ['hubo', 'úbo', 'houve', ''], ['irse', 'írse', 'ir embora', ''], ['salir de', 'salír de', 'sair de', ''], ['conocer', 'konothér', 'conhecer', ''], ['el accidente', 'el akthidénte', 'o acidente', ''],
      ]),
      gramatica(12, 'Sabía × supe, había × hubo e salir × irse', 'PASSO 1: quatro verbos mudam de sentido conforme o tempo. «Sabía» é «eu já sabia»; «supe» é «fiquei sabendo». «Conocía a Ana» é «eu já a conhecia»; «conocí a Ana» é «conheci a Ana, pela primeira vez». PASSO 2: «quería salir» é «eu queria sair», sem dizer se saí; «quise salir» é «eu tentei sair» e «no quise salir» é «eu me recusei a sair». PASSO 3: «podía salir» é «eu tinha a possibilidade de sair»; «pude salir» é «consegui sair» e «no pude salir» é «não consegui sair». PASSO 4: «había» é o imperfecto de «hay» e serve para o cenário: «Había mucha gente en la plaza». PASSO 5: «hubo» é o indefinido de «hay» e serve para um acontecimento: «Hubo un accidente en la plaza». Os dois são invariáveis: «había dos personas», «hubo dos accidentes», nunca «habían» nem «hubieron». PASSO 6: valorizar um evento inteiro e terminado pede o indefinido: «La fiesta fue genial». Descrever como a festa estava naquele momento pede o imperfecto: «La fiesta era genial, pero yo estaba cansado». PASSO 7: um período fechado, mesmo longo, pede o indefinido: «Viví tres años en Lima»; sem limite dito, imperfecto: «Vivía en Lima». PASSO 8: «salir de» é sair de um lugar («Salí del trabajo a las seis»); «irse» é ir embora («Se fue a las seis»); «salir con alguien» é sair com alguém, em sentido de encontro ou namoro («Salió con Marta»).', {
        tag: 'Indefinido × imperfecto',
        comparacao: 'o português tem os mesmos pares com sentidos diferentes: «eu sabia» e «eu soube», «eu queria» e «eu quis», «eu podia» e «eu pude». O espanhol segue a mesma lógica. A diferença nova é o par «había» e «hubo», que em português é «havia» e «houve» (e em linguagem do dia a dia, «tinha» e «teve»), e o uso de «salir» e «irse» em lugar de um «sair» só.',
        tabela: [
          { verbo: 'saber', imperfecto: 'sabía = já sabia', indefinido: 'supe = fiquei sabendo' },
          { verbo: 'conocer', imperfecto: 'conocía = já conhecia', indefinido: 'conocí = conheci' },
          { verbo: 'querer', imperfecto: 'quería = queria', indefinido: 'quise / no quise = tentei / recusei' },
          { verbo: 'poder', imperfecto: 'podía = tinha possibilidade', indefinido: 'pude / no pude = consegui / não consegui' },
          { verbo: 'haber (hay)', imperfecto: 'había = havia (cenário)', indefinido: 'hubo = houve (acontecimento)' },
        ],
        exemplos: [['Ya sabía la noticia, pero ayer supe los detalles.', 'Eu já sabia da notícia, mas ontem fiquei sabendo dos detalhes.'], ['Había mucha gente y de repente hubo un accidente.', 'Havia muita gente e de repente houve um acidente.'], ['Quería ir, pero no pude.', 'Eu queria ir, mas não consegui.']],
        erros: [['Habían muchas personas en la plaza.', 'Había muchas personas en la plaza.', '«Haber» como existência é impessoal: «había» não varia.'], ['Hubieron dos accidentes.', 'Hubo dos accidentes.', 'O mesmo vale para «hubo»: é invariável.'], ['Ayer sabía la noticia. (querendo dizer: fiquei sabendo)', 'Ayer supe la noticia.', 'Para a descoberta de um fato, use o indefinido.'], ['Salí de el trabajo a las seis.', 'Salí del trabajo a las seis.', 'A preposição «de» mais o artigo «el» se contrai em «del».']],
      }),
      producao(8, 'Conte em voz alta, com pelo menos oito frases, um acontecimento inesperado. Comece com o cenário no imperfecto («Eran las… Había…») e continue com o que ocorreu no indefinido («De repente… Hubo… Pude… Supe…»).'),
    ]),
    sessao('S3', 'Contar uma história do começo ao fim', [
      revisao(4, 'Diga a diferença entre «sabía» e «supe» e entre «había» e «hubo», cada uma com uma frase.'),
      palavras(5, [
        ['al principio', 'al printhípio', 'no começo', ''], ['por eso', 'por éso', 'por isso', ''], ['al final', 'al final', 'no fim, por fim', ''], ['la parada', 'la paráda', 'o ponto (de ônibus)', ''], ['cumplir años', 'kumplír ánhos', 'fazer aniversário', ''],
      ]),
      gramatica(8, 'Estrutura de uma narração', 'PASSO 1: uma boa narração tem três partes: o cenário (imperfecto), o problema ou o acontecimento (indefinido) e o desfecho (indefinido). PASSO 2: conectores úteis: «al principio» abre, «entonces» e «de repente» fazem a história andar, «por eso» dá a consequência e «al final» fecha. PASSO 3: o cenário pode voltar no meio da história, quando precisa de explicação: «Tenía prisa, porque mi hermana cumplía años». PASSO 4: o tempo atmosférico também segue a regra. «Llovía mucho» descreve o cenário; «Llovió toda la noche» resume um período fechado. PASSO 5: na América Latina, «parada» e «cumplir años» se entendem sem problema; para «ônibus», algumas regiões dizem «colectivo», «guagua» ou «camión», conforme o país.', {
        tag: 'Indefinido × imperfecto',
        comparacao: 'os conectores do português têm equivalentes diretos: «no começo» é «al principio», «por isso» é «por eso» e «no fim» é «al final». Atenção à diferença entre «al final» (no fim, no desfecho) e «por fin» (finalmente, depois de esperar): «Al final fuimos» e «¡Por fin llegó el autobús!»',
        tabela: [
          { parte: 'cenário', tempo: 'imperfecto', exemplo: 'Llovía y tenía prisa.' },
          { parte: 'acontecimento', tempo: 'indefinido', exemplo: 'De repente vi un taxi.' },
          { parte: 'desfecho', tempo: 'indefinido', exemplo: 'Al final llegué a tiempo.' },
        ],
        erros: [['Llovió mucho cuando salí de la oficina.', 'Llovía mucho cuando salí de la oficina.', 'A chuva como cenário, em andamento, pede o imperfecto.'], ['Llegué tarde, por que llovía.', 'Llegué tarde porque llovía.', 'Para dar a causa, escreva «porque», uma palavra.']],
      }),
      texto(8, 'Un día de lluvia / Um dia de chuva', 'El martes pasado llovía mucho cuando salí de la oficina. Eran las seis y yo tenía prisa, porque mi hermana cumplía años y la cena empezaba a las siete. Esperé el autobús veinte minutos, pero no llegó. Entonces vi un taxi, levanté la mano y el conductor paró. Llegué a casa a las siete y diez. Mi hermana estaba en la cocina y me dio un abrazo. Cenamos tarde, pero la tarta era exquisita.', 'Na terça-feira passada chovia muito quando saí do escritório. Eram seis horas e eu estava com pressa, porque minha irmã fazia aniversário e o jantar começava às sete. Esperei o ônibus vinte minutos, mas ele não chegou. Então vi um táxi, levantei a mão e o motorista parou. Cheguei em casa às sete e dez. Minha irmã estava na cozinha e me deu um abraço. Jantamos tarde, mas o bolo era delicioso.', [
        ['¿Qué tiempo hacía el martes?', 'Llovía mucho.'], ['¿Por qué tenía prisa?', 'Porque su hermana cumplía años y la cena empezaba a las siete.'], ['¿Cuánto tiempo esperó el autobús?', 'Veinte minutos.'], ['¿Qué hizo después?', 'Levantó la mano y un taxi paró.'], ['¿A qué hora llegó a casa?', 'A las siete y diez.'],
      ]),
      producao(5, 'Escreva cinco frases sobre um dia de chuva, ou de calor, em que algo aconteceu. Use um verbo de cenário no imperfecto e um acontecimento no indefinido.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 22', [
      revisao(5, 'Conte em duas frases o que aconteceu hoje de manhã e em duas frases como estava o tempo. Pense no tempo verbal de cada uma.'),
      exercicios(20, [
        ouvir('Dormía cuando sonó el teléfono', ['Dormía cuando sonó el teléfono', 'Dormí cuando sonaba el teléfono', 'Duermo cuando suena el teléfono'], 'Dormía cuando sonó el teléfono', 'A ação em andamento (dormía) é interrompida pelo fato (sonó).'),
        ouvir('Hacía frío y llovía', ['Hacía frío y llovía', 'Hizo frío y llovió', 'Hace frío y llueve'], 'Hacía frío y llovía', 'O tempo como cenário vai para o imperfecto.'),
        ouvir('Ayer conocí a tu hermana', ['Ayer conocí a tu hermana', 'Ayer conocía a tu hermana', 'Ayer conoce a tu hermana'], 'Ayer conocí a tu hermana', '«Conocí» significa conheci pela primeira vez.'),
        ditado('De repente sonó el teléfono', 'Escreva: De repente sonó el teléfono. «Sonó» leva acento.'),
        ditado('Era tarde y llovía mucho', 'Escreva: Era tarde y llovía mucho. Duas descrições de cenário.'),
        ditado('Hubo un accidente en la plaza', 'Escreva: Hubo un accidente en la plaza. «Hubo» é invariável.'),
        mc('Qual frase conta um fato único e terminado?', ['Ayer fui al cine.', 'Antes iba al cine.', 'Siempre iba al cine.'], 'Ayer fui al cine.', '«Ayer» indica um momento fechado: indefinido.'),
        mc('Qual frase descreve um hábito do passado?', ['De niño jugaba en la calle.', 'Ayer jugué en la calle.', 'De repente jugó en la calle.'], 'De niño jugaba en la calle.', '«De niño» pede o imperfecto.'),
        mc('O que significa «Supe la noticia»?', ['Fiquei sabendo da notícia.', 'Eu já sabia da notícia.', 'Não quis saber da notícia.'], 'Fiquei sabendo da notícia.', 'No indefinido, «saber» indica o momento em que se descobriu.'),
        mc('O que significa «Había mucha gente»?', ['Havia muita gente (cenário).', 'Houve muita gente (acontecimento).', 'Há muita gente agora.'], 'Havia muita gente (cenário).', '«Había» descreve; «hubo» relata um fato.'),
        mc('Como se diz «Houve um acidente»?', ['Hubo un accidente.', 'Había un accidente.', 'Hubieron un accidente.'], 'Hubo un accidente.', '«Hubo» é invariável e conta um acontecimento.'),
        mc('Como se diz «ir embora»?', ['irse', 'salirse', 'ir fuera'], 'irse', '«Irse» é ir embora; «salir de» é sair de um lugar.'),
        mc('O que significa «No quise ir»?', ['Recusei-me a ir.', 'Não consegui ir.', 'Não sabia ir.'], 'Recusei-me a ir.', 'No indefinido, «no quise» indica recusa.'),
        lacuna('Cuando llegué, mis amigos ___. (cenar)', ['cenaban', 'cenaron', 'cenan'], 'cenaban', 'Eles estavam em andamento quando eu cheguei: imperfecto.'),
        lacuna('Ayer ___ al cine. (ir)', ['fui', 'iba', 'voy'], 'fui', '«Ayer» pede indefinido.'),
        lacuna('De niño ___ al pueblo cada verano. (ir)', ['iba', 'fui', 'fue'], 'iba', 'Hábito do passado: imperfecto.'),
        lacuna('De repente, ___ el teléfono. (sonar)', ['sonó', 'sonaba', 'suena'], 'sonó', '«De repente» marca um fato pontual.'),
        lacuna('Eran las tres y ___ mucho. (llover)', ['llovía', 'llovió', 'llueve'], 'llovía', 'O tempo no cenário vai para o imperfecto.'),
        ordem('Ordene: «Dormía cuando sonó el teléfono.»', ['Dormía', 'cuando', 'sonó', 'el', 'teléfono.'], 'Dormía cuando sonó el teléfono.', 'Ação em andamento, «cuando» e a interrupção.'),
        ordem('Ordene: «De repente llegó Marta.»', ['De', 'repente', 'llegó', 'Marta.'], 'De repente llegó Marta.', 'Marcador de fato pontual e verbo no indefinido.'),
        livre('Escreva em espanhol: Eu dormia quando o telefone tocou.', 'Dormía cuando sonó el teléfono.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, uma história curta (cinco frases ou mais) que começa com o cenário e continua com o que aconteceu.'),
    ]),
  ],
});
