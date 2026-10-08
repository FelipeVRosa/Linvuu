import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 1, titulo: 'Sons, alfabeto e primeiras palavras', nivel: 'a1',
  objetivo: 'Soletrar em espanhol, ler as letras que mudam de som para um brasileiro (j, g, c, z, qu, ll, ñ, rr, h), manter as vogais inteiras, marcar a sílaba forte e fazer as primeiras saudações, com «tú» e com «usted».',
  nota: 'Você soletra, lê palavras novas com segurança e cumprimenta em espanhol. Próxima aula: o verbo «ser», os pronomes e os adjetivos.',
  sessoes: [
    sessao('S1', 'O alfabeto e as primeiras saudações', [
      intro(3, "Você já conhece muito espanhol: hola, gracias, fiesta, siesta, plaza, paella, amigo, adiós. A escrita é regular e muitas palavras parecem com o português, e é exatamente aí que mora o risco: falar um «portunhol» em que as palavras são espanholas e os sons são portugueses. Esta aula ensina os sons que mudam. Ao lado das palavras há uma pronúncia aproximada em letras do português: «h» é um som áspero (como o «r» de «rato» em partes do Brasil); «th» é o som do «th» de «think» em inglês; «nh» e «lh» são os de «ninho» e «filho»; «tch» é o som de «tchau». O acento (á, é) marca a sílaba forte. O áudio usa o espanhol da Espanha. Na América Latina o «th» vira «s»; avisamos quando isso importar. A respelling ajuda, mas não substitui o áudio: ouça sempre antes de repetir."),
      alfabeto(12, [
        ['Parte 1 — A a G', [
          ['A', 'a', 'nome da letra: «a»', '/a/', 'amigo', 'amigo', 'a'], ['B', 'b', 'nome da letra: «bé»', '/be/', 'bien', 'bem', 'bé'], ['C', 'c', 'nome da letra: «thé» (th como em «think»)', '/θe/', 'casa', 'casa', 'thé'],
          ['D', 'd', 'nome da letra: «dé»', '/de/', 'día', 'dia', 'dé'], ['E', 'e', 'nome da letra: «é»', '/e/', 'escuela', 'escola', 'é'], ['F', 'f', 'nome da letra: «éfe»', '/ˈefe/', 'familia', 'família', 'éfe'],
          ['G', 'g', 'nome da letra: «hé» (h áspero)', '/xe/', 'gato', 'gato', 'hé'],
        ]],
        ['Parte 2 — H a Ñ', [
          ['H', 'h', 'nome da letra: «átche» (a letra h nunca soa)', '/ˈatʃe/', 'hotel', 'hotel', 'átche'], ['I', 'i', 'nome da letra: «i»', '/i/', 'isla', 'ilha', 'i'], ['J', 'j', 'nome da letra: «hóta» (h áspero)', '/ˈxota/', 'jamón', 'presunto', 'hóta'],
          ['K', 'k', 'nome da letra: «ká»', '/ka/', 'kilo', 'quilo', 'ká'], ['L', 'l', 'nome da letra: «éle»', '/ˈele/', 'luz', 'luz', 'éle'], ['M', 'm', 'nome da letra: «éme»', '/ˈeme/', 'mesa', 'mesa', 'éme'],
          ['N', 'n', 'nome da letra: «éne»', '/ˈene/', 'noche', 'noite', 'éne'], ['Ñ', 'ñ', 'nome da letra: «ênhe» (som de «nh»)', '/ˈeɲe/', 'niño', 'menino, criança', 'ênhe'],
        ]],
        ['Parte 3 — O a V', [
          ['O', 'o', 'nome da letra: «ó»', '/o/', 'ojo', 'olho', 'ó'], ['P', 'p', 'nome da letra: «pé»', '/pe/', 'pan', 'pão', 'pé'], ['Q', 'q', 'nome da letra: «kú» (sempre com «u» mudo: que, qui)', '/ku/', 'queso', 'queijo', 'kú'],
          ['R', 'r', 'nome da letra: «érre» (vibrante)', '/ˈere/', 'rojo', 'vermelho', 'érre'], ['S', 's', 'nome da letra: «ése»', '/ˈese/', 'sol', 'sol', 'ése'], ['T', 't', 'nome da letra: «té»', '/te/', 'tres', 'três', 'té'],
          ['U', 'u', 'nome da letra: «ú»', '/u/', 'uno', 'um', 'ú'], ['V', 'v', 'nome da letra: «úbe» (soa como o b)', '/ˈuβe/', 'vino', 'vinho', 'úbe'],
        ]],
        ['Parte 4 — W, X, Y, Z', [
          ['W', 'w', 'nome da letra: «úbe dóble» (só em palavras estrangeiras)', '/ˈuβe ˈðoβle/', 'whisky', 'uísque', 'úbe dóble'], ['X', 'x', 'nome da letra: «ékis»', '/ˈekis/', 'taxi', 'táxi', 'ékis'],
          ['Y', 'y', 'nome da letra: «i griéga»', '/i ˈɡrjeɣa/', 'yo', 'eu', 'i griéga'], ['Z', 'z', 'nome da letra: «théta» (th como em «think»)', '/ˈθeta/', 'zapato', 'sapato', 'théta'],
        ]],
      ]),
      palavras(8, [
        ['hola', 'ôla', 'oi, olá', ''], ['buenos días', 'buénos días', 'bom dia', ''], ['buenas tardes', 'buénas tárdes', 'boa tarde', ''], ['buenas noches', 'buénas nótches', 'boa noite (ao chegar ou ao se despedir)', ''],
        ['adiós', 'adiós', 'tchau, adeus', ''], ['gracias', 'gráthias', 'obrigado, obrigada', ''], ['por favor', 'por fabór', 'por favor', ''], ['de nada', 'de náda', 'de nada', ''],
      ]),
      producao(7, 'Soletre em voz alta o seu nome e o seu sobrenome (por exemplo: F-E-L-I-P-E: éfe, é, éle, i, pé, é). Depois diga: «Hola. Buenos días. Gracias. Adiós.»'),
    ]),
    sessao('S2', 'Os sons que mudam: vogais, j, g, c, z, ll, ñ e rr', [
      revisao(4, 'Soletre o nome da sua cidade em espanhol e diga «hola», «gracias» e «adiós» sem olhar.'),
      palavras(6, [
        ['el jamón', 'el hamón', 'o presunto', ''], ['el queso', 'el késo', 'o queijo', ''], ['el niño', 'el nínho', 'o menino, a criança', ''], ['la calle', 'la cálhe', 'a rua', ''], ['la cena', 'la théna', 'o jantar', ''], ['el zapato', 'el thapáto', 'o sapato', ''],
      ]),
      gramatica(12, 'Vogais inteiras e as letras j, g, c, z, qu, ll, ñ, rr, h', 'PASSO 1: o espanhol tem cinco vogais (a, e, i, o, u), sempre claras e inteiras. O «e» e o «o» finais não viram «i» e «u»: «leche» soa «létche», não «létchi»; «todo» soa «tôdo», não «tôdu». Não há vogal nasal: em «pan» e «mano» o «n» soa por inteiro, sem o nasal de «pão». PASSO 2: «j», e «g» antes de «e» ou «i», soam como um «h» áspero (parecido com o «r» de «rato» em partes do Brasil): «jamón» (hamón), «gente» (hénte), «jefe» (héfe). Nunca soam «dj». PASSO 3: «g» antes de «a», «o», «u» é duro: «gato», «gusto». Para o som duro antes de «e» e «i», escreve-se «gu» e o «u» não soa: «guerra» (guérra), «guitarra». Se o «u» precisa soar, usa-se o trema: «pingüino». PASSO 4: «c» antes de «a», «o», «u» é «k»: «casa», «copa». Para o «k» antes de «e» e «i», escreve-se «qu», com o «u» mudo: «queso» (késo), «quién» (kién). PASSO 5: «c» antes de «e» e «i», e o «z», soam «th» (como o «th» de «think» em inglês) na Espanha: «cena» (théna), «cielo» (thiélo), «zapato». Na América Latina e no sul da Espanha soam como «s»: «séna». As duas pronúncias são corretas; este curso usa a da Espanha. PASSO 6: «ll» e «y» no início de sílaba: na Espanha soam como um «lh» suave ou um «i» curto: «calle» (cálhe), «llave», «yo» (iô). Em muitas regiões os dois se igualam; na Argentina e no Uruguai soam como o «x» de «xícara». PASSO 7: «ñ» soa «nh»: «España» (espánha), «niño». «ch» soa «tch»: «leche», «chico». PASSO 8: o «h» é mudo: «hotel» (otél), «hola» (ôla). PASSO 9: o «r» no início da palavra e o «rr» são vibrantes fortes: «rojo», «perro». Entre vogais, o «r» simples é uma batida só: «pero». Isso muda o sentido: «pero» (mas) e «perro» (cachorro). PASSO 10: «b» e «v» soam igual, como o «b» de «bola»: «vino» é «bino». PASSO 11: «t» e «d» nunca viram «tch» e «dj», mesmo antes de «i»: «tío» (tío), «día» (dia). PASSO 12: o «s» é sempre «s», nunca «z», nem entre vogais: «casa» é «kása», não «káza».', {
        tag: 'Pronúncia',
        comparacao: 'o português tem quase todos esses sons, e por isso o erro é trocar um som espanhol por um português parecido. As armadilhas são cinco: a vogal final que não reduz («leche», não «létchi»), o «j» que é «h» e não «dj», o «s» de «casa» que não é «z», o «t» e o «d» que não viram «tch» e «dj» antes de «i», e o «rr» vibrante. O «lh» e o «nh» do português existem em espanhol como «ll» e «ñ».',
        tabela: [
          { grafia: 'j; g + e, i', som: 'h áspero', exemplos: 'jamón, gente, jefe' },
          { grafia: 'g + a, o, u', som: 'g duro', exemplos: 'gato, gusto, gota' },
          { grafia: 'gu + e, i', som: 'g duro (u mudo)', exemplos: 'guerra, guitarra, guiso' },
          { grafia: 'c + a, o, u; qu + e, i', som: 'k', exemplos: 'casa, copa, queso, quién' },
          { grafia: 'c + e, i; z', som: 'th (Espanha); s (América Latina)', exemplos: 'cena, cielo, zapato' },
          { grafia: 'll; y', som: 'lh suave ou i curto', exemplos: 'calle, llave, yo' },
          { grafia: 'ñ', som: 'nh', exemplos: 'España, niño, mañana' },
          { grafia: 'ch', som: 'tch', exemplos: 'leche, chico, noche' },
          { grafia: 'h', som: 'mudo', exemplos: 'hola, hotel, hoy' },
          { grafia: 'r inicial; rr', som: 'vibrante forte', exemplos: 'rojo, perro, carro' },
          { grafia: 'b; v', som: 'o mesmo som de b', exemplos: 'vino, vaca, bien' },
        ],
        erros: [['ler «jamón» como «djamón»', 'hamón', 'O «j» soa como um «h» áspero, nunca «dj».'], ['ler «queso» como «kuêso»', 'késo', 'Em «que» e «qui» o «u» é mudo.'], ['ler «día» como «djia»', 'día', 'Em espanhol o «d» não vira «dj» antes de «i».'], ['ler «pero» e «perro» da mesma forma', 'péro (batida) e pérro (vibrante)', 'O «rr» vibrante muda a palavra: mas × cachorro.']],
      }),
      producao(8, 'Diga cinco vezes, devagar e depois mais rápido: «Jorge compra jamón y queso. El perro de Rosa corre por la calle.» Cuide do «j» (h), do «rr» e do «s» de «Rosa» (sem «z»).'),
    ]),
    sessao('S3', 'Acento tônico, til, «tú» e «usted»', [
      revisao(4, 'Leia em voz alta: jamón, gente, queso, cena, zapato, calle, niño, perro. Qual é o som de cada grupo de letras?'),
      palavras(5, [
        ['¿Cómo estás?', 'cómo estás', 'como você está? (tú)', ''], ['¿Cómo está usted?', 'cómo está ustéd', 'como o senhor, a senhora está? (usted)', ''], ['Muy bien, gracias.', 'mui bién, gráthias', 'muito bem, obrigado(a)', ''], ['¿Y tú? ¿Y usted?', 'i tú, i ustéd', 'e você? e o senhor, a senhora?', ''], ['Mucho gusto.', 'mútcho gústo', 'muito prazer', ''], ['Hasta luego.', 'ásta luégo', 'até logo', ''],
      ]),
      gramatica(8, 'Sílaba forte, til, perguntas e tratamento', 'PASSO 1: palavras terminadas em vogal, «n» ou «s» têm a sílaba forte na penúltima: «casa», «joven», «mesas». Terminadas em outra consoante, na última: «hotel», «ciudad», «español». PASSO 2: quando a palavra foge dessa regra, o til (´) marca a vogal forte: «café», «avión», «inglés», «fútbol», «teléfono». O espanhol só usa o acento agudo; não existem o circunflexo (^) nem a crase. PASSO 3: o til também separa palavras iguais: «tú» (pronome) × «tu» (seu), «él» (ele) × «el» (o), «sí» (sim) × «si» (se). PASSO 4: perguntas e exclamações abrem com ¿ e ¡ e fecham com ? e !: «¿Cómo estás?», «¡Hola!». As palavras interrogativas levam til: «qué», «quién», «dónde», «cómo», «cuándo». PASSO 5: com amigos, família e jovens se usa «tú» («¿Cómo estás?»). Com desconhecidos, pessoas mais velhas e em contextos formais se usa «usted», com o verbo na terceira pessoa («¿Cómo está usted?»). Na Colômbia, por exemplo, «usted» aparece até em família; na dúvida, use «usted». PASSO 6: para vários, a Espanha usa «vosotros» (informal) e «ustedes» (formal). Na América Latina se usa «ustedes» nos dois casos. PASSO 7: cuidado com os falsos amigos, palavras que parecem portuguesas e significam outra coisa; a tabela traz os primeiros.', {
        tag: 'Pronúncia',
        comparacao: 'o português também usa o til agudo, mas o espanhol não tem circunflexo, crase nem acento grave, e escreve «¿» no começo da pergunta, coisa que o português não faz. Em português «você» serve para quase todos; em espanhol a escolha entre «tú» e «usted» muda o verbo.',
        tabelas: [
          { titulo: 'Onde cai a sílaba forte', linhas: [
            { termina_em: 'vogal, n ou s', forca_na: 'penúltima sílaba', exemplos: 'casa, joven, mesas' },
            { termina_em: 'outra consoante', forca_na: 'última sílaba', exemplos: 'hotel, ciudad, español' },
            { termina_em: 'foge da regra', forca_na: 'sílaba marcada com til', exemplos: 'café, avión, fútbol, teléfono' },
          ] },
          { titulo: 'Falsos amigos para começar', linhas: [
            { palavra: 'exquisito', parece: 'esquisito', significa: 'delicioso, requintado' },
            { palavra: 'embarazada', parece: 'embaraçada', significa: 'grávida' },
            { palavra: 'apellido', parece: 'apelido', significa: 'sobrenome (apelido é «apodo»)' },
            { palavra: 'largo', parece: 'largo', significa: 'comprido (largo é «ancho»)' },
            { palavra: 'oficina', parece: 'oficina', significa: 'escritório (oficina é «taller»)' },
            { palavra: 'vaso', parece: 'vaso', significa: 'copo' },
            { palavra: 'cena', parece: 'cena', significa: 'jantar' },
            { palavra: 'rato', parece: 'rato', significa: 'momento («ratón» é o animal)' },
          ] },
        ],
        erros: [['cafe', 'café', 'Termina em vogal, mas a força está na última sílaba; por isso leva til.'], ['telefono', 'teléfono', 'A força está na antepenúltima sílaba; sempre leva til.'], ['¿Como estás?', '¿Cómo estás?', 'O interrogativo «cómo» leva til; sem ele, «como» é «eu como» ou «como».'], ['¿Cómo estás? (a um senhor desconhecido)', '¿Cómo está usted?', 'Com desconhecidos e pessoas mais velhas, use «usted» e o verbo em terceira pessoa.']],
      }),
      dialogo(8, 'Por la calle / Na rua', 'Pablo cumprimenta o senhor Ruiz, com «usted», e depois a amiga Lucía, com «tú».', [
        ['Pablo', 'Buenos días, señor Ruiz. ¿Cómo está usted?', 'Bom dia, senhor Ruiz. Como o senhor está?'], ['Señor Ruiz', 'Muy bien, gracias. ¿Y usted?', 'Muito bem, obrigado. E o senhor?'], ['Pablo', 'Bien, gracias. Adiós, señor Ruiz.', 'Bem, obrigado. Tchau, senhor Ruiz.'],
        ['Lucía', '¡Hola, Pablo! ¿Cómo estás?', 'Oi, Pablo! Como você está?'], ['Pablo', 'Muy bien, gracias. ¿Y tú?', 'Muito bem, obrigado. E você?'], ['Lucía', 'Bien, gracias. Hasta luego.', 'Bem, obrigada. Até logo.'],
      ]),
      producao(5, 'Leia em voz alta, com as vogais inteiras: «Buenas tardes. ¿Cómo está usted? — Muy bien, gracias. ¿Y usted?» Depois, com um amigo: «¡Hola! ¿Cómo estás?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 1', [
      revisao(5, 'Soletre três palavras do alfabeto de memória e diga as saudações da aula, uma com «tú» e uma com «usted».'),
      exercicios(20, [
        ouvir('jamón', ['jamón', 'camón', 'gamón'], 'jamón', 'Ouça o «j», um «h» áspero.'), ouvir('perro', ['pero', 'perro', 'pelo'], 'perro', 'Ouça o «rr» vibrante de «perro».'), ouvir('buenas tardes', ['buenas tardes', 'buenos días', 'buenas noches'], 'buenas tardes', 'Ouça «tardes» e o «s» final.'),
        ditado('buenos días', 'Escreva: buenos días.'), ditado('por favor', 'Escreva: por favor.'), ditado('¿Cómo está usted?', 'Escreva: ¿Cómo está usted?'),
        mc('Como se lê «jamón»?', ['hamón', 'djamón', 'zamón'], 'hamón', 'O «j» soa como um «h» áspero.'),
        mc('Como se lê «queso»?', ['késo', 'kuéso', 'tchéso'], 'késo', 'Em «que», o «u» é mudo.'),
        mc('Como se lê «niño»?', ['nínho', 'níno', 'nínio'], 'nínho', 'A letra «ñ» soa «nh».'),
        mc('Como se lê «cena» na Espanha?', ['théna', 'kéna', 'tchéna'], 'théna', '«c» antes de «e» soa «th» na Espanha (na América Latina, «s»).'),
        mc('Qual destas palavras precisa de til?', ['cafe → café', 'casa → cása', 'mesa → mesá'], 'cafe → café', 'Termina em vogal, mas a força está na última sílaba.'),
        mc('Com um senhor desconhecido, qual pergunta se usa?', ['¿Cómo está usted?', '¿Cómo estás?', '¿Cómo eres?'], '¿Cómo está usted?', 'Com desconhecidos, usa-se «usted».'),
        lacuna('___ días. (bom dia)', ['Buenos', 'Buenas', 'Bueno'], 'Buenos', '«Días» é masculino plural: «buenos días».'), lacuna('___ tardes. (boa tarde)', ['Buenas', 'Buenos', 'Buena'], 'Buenas', '«Tardes» é feminino plural: «buenas tardes».'),
        lacuna('Muy bien, ___ . (obrigado)', ['gracias', 'adiós', 'hola'], 'gracias', '«Gracias» agradece.'), lacuna('Gracias. — De ___ . (de nada)', ['nada', 'favor', 'luego'], 'nada', '«De nada» responde a «gracias».'),
        ordem('Ordene: «Muy bien, gracias.»', ['Muy', 'bien,', 'gracias.'], 'Muy bien, gracias.', 'Resposta usual a «¿Cómo estás?».'),
        ordem('Ordene: «¿Cómo está usted?»', ['¿Cómo', 'está', 'usted?'], '¿Cómo está usted?', 'A pergunta formal abre com «¿».'),
        livre('Escreva em espanhol: boa tarde, obrigado e até logo.', 'Buenas tardes. Gracias. Hasta luego.'),
      ]),
      producao(5, 'Cumprimente em espanhol um amigo e depois um senhor desconhecido, em voz alta, e despeça-se de cada um.'),
    ]),
  ],
});
