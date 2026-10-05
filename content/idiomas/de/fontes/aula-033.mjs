import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 33, titulo: 'Adjetivos 2: com ein, mein, kein (ein großer Mann)', nivel: 'a2',
  objetivo: 'Dar terminação ao adjetivo depois de ein, eine, mein, dein, kein…: o adjetivo ganha as terminações -er, -e, -es onde o artigo não mostra o caso, e -en no resto.',
  nota: 'Você declina o adjetivo depois de ein, mein e kein. Próxima aula: o adjetivo sem artigo.',
  sessoes: [
    sessao('S1', 'Nominativo e acusativo', [
      revisao(5, 'Escreva o quadro do adjetivo depois de der, die, das nos quatro casos.'),
      palavras(8, [
        ['der Hund', 'der hunt', 'cachorro', 'dog'], ['die Katze', 'di kátse', 'gato', 'cat'], ['das Haus', 'das haus', 'casa', 'house'], ['die Freunde', 'di fróinde', 'amigos', 'friends'],
        ['nett', 'net', 'simpático, gentil', 'nice'], ['lustig', 'lústiç', 'engraçado', 'funny'], ['ruhig', 'rúiç', 'calmo, tranquilo', 'quiet'], ['laut', 'laut', 'alto (volume)', 'loud'],
      ]),
      gramatica(14, 'Ein, mein, kein + adjetivo, passo a passo', 'PASSO 1: «ein», «eine», «mein», «kein»… não mostram o caso em TRÊS lugares: nominativo masculino («ein»), nominativo neutro («ein») e acusativo neutro («ein»). Nesses lugares o ADJETIVO assume o trabalho e mostra o caso: «ein großer Mann» (-er), «ein kleines Kind» (-es). PASSO 2: nos outros lugares, o artigo já mostra o caso, e o adjetivo leva «-e» ou «-en» como depois de «der»: «eine kleine Frau», «einen großen Mann». PASSO 3: nominativo: ein großer Mann (-er), eine kleine Frau (-e), ein neues Auto (-es), meine neuen Autos (-en). PASSO 4: acusativo: einen großen Mann (-en), eine kleine Frau (-e), ein neues Auto (-es), meine neuen Autos (-en). PASSO 5: regra de bolso: «-er» e «-es» só aparecem quando «ein» não tem terminação: nominativo masculino e nominativo e acusativo neutros.', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'o português não tem nada parecido. A lógica é simples: o alemão quer que o caso apareça UMA vez; se o artigo (ein) não mostrou, o adjetivo mostra.',
        tabela: [
          { genero: 'masculino', nominativo: 'ein großer Mann', acusativo: 'einen großen Mann' }, { genero: 'feminino', nominativo: 'eine kleine Frau', acusativo: 'eine kleine Frau' }, { genero: 'neutro', nominativo: 'ein neues Auto', acusativo: 'ein neues Auto' }, { genero: 'plural', nominativo: 'meine neuen Autos', acusativo: 'meine neuen Autos' },
        ],
        exemplos: [['Das ist ein netter Mann.', 'Este é um homem simpático.'], ['Ich kenne einen netten Mann.', 'Eu conheço um homem simpático.'], ['Das ist ein neues Auto.', 'Este é um carro novo.'], ['Ich habe eine kleine Katze.', 'Eu tenho uma gatinha.']],
        erros: [['Das ist ein großen Mann.', 'Das ist ein großer Mann.', 'Nominativo masculino: o adjetivo leva «-er».'], ['Das ist ein neu Auto.', 'Das ist ein neues Auto.', 'Neutro: «-es».'], ['Ich habe ein kleine Katze.', 'Ich habe eine kleine Katze.', 'Feminino: «eine».']],
      }),
      producao(3, 'Descreva 6 pessoas ou animais com «ein» e adjetivo: «Das ist ein netter Mann. Ich habe eine kleine Katze …»'),
    ]),
    sessao('S2', 'Dativo e genitivo', [
      revisao(5, 'Escreva os adjetivos declinados depois de ein, eine, mein em nominativo e acusativo.'),
      palavras(8, [
        ['der Nachbar', 'der nárr-bar', 'vizinho', 'neighbour'], ['der Kollege', 'der kolége', 'colega', 'colleague'], ['die Nachbarin', 'di nárr-barin', 'vizinha', 'neighbour (f)'], ['das Kind', 'das kint', 'criança', 'child'],
        ['alt', 'alt', 'velho', 'old'], ['jung', 'iung', 'jovem', 'young'], ['klug', 'kluk', 'inteligente, esperto', 'clever'], ['verrückt', 'ferrükt', 'maluco', 'crazy'],
      ]),
      gramatica(12, 'Dativo e genitivo depois de ein: «-en» e «-er»', 'PASSO 1: no DATIVO, depois de «einem», «einer», «meinen», a terminação do adjetivo é «-en» em todos os gêneros: «mit einem alten Freund», «mit einer netten Frau», «mit meinen alten Freunden». PASSO 2: no GENITIVO: «eines alten Mannes», «einer netten Frau», «meiner alten Freunde» (a terminação também é «-en»). PASSO 3: lembre da regra do dativo plural: o substantivo ganha «-n» (meinen alten Freunden). PASSO 4: junte com as preposições: «mit einem netten Nachbarn» (Declinação-N!).', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { caso: 'Nominativ', masculino: 'ein großer Mann', feminino: 'eine kleine Frau', neutro: 'ein neues Auto', plural: 'meine neuen Autos' }, { caso: 'Akkusativ', masculino: 'einen großen Mann', feminino: 'eine kleine Frau', neutro: 'ein neues Auto', plural: 'meine neuen Autos' },
          { caso: 'Dativ', masculino: 'einem großen Mann', feminino: 'einer kleinen Frau', neutro: 'einem neuen Auto', plural: 'meinen neuen Autos' }, { caso: 'Genitiv', masculino: 'eines großen Mannes', feminino: 'einer kleinen Frau', neutro: 'eines neuen Autos', plural: 'meiner neuen Autos' },
        ],
        erros: [['Ich wohne mit einem alte Freund.', 'Ich wohne mit einem alten Freund.', 'Dativo masculino: «-en».'], ['Ich gebe meiner alte Mutter ein Buch.', 'Ich gebe meiner alten Mutter ein Buch.', 'Dativo feminino: «-en».']],
      }),
      producao(5, 'Descreva em voz alta: com quem você mora ou trabalha, a quem você dá presentes, usando ein/mein e adjetivo no dativo.'),
    ]),
    sessao('S3', 'Descrever pessoas e um apartamento', [
      revisao(5, 'Escreva o quadro completo do adjetivo depois de ein/mein/kein, com as quatro colunas.'),
      gramatica(10, 'As terminações lado a lado', 'PASSO 1: compare as duas famílias: depois de DER/DIE/DAS: -e em Nom. sg. e Akk. fem./neut.; -en em todo o resto. Depois de EIN/MEIN/KEIN: igual, mas com «-er» (Nom. masc.), «-e» (Nom. fem.), «-es» (Nom. e Akk. neut.). PASSO 2: o truque: se o artigo termina em «-r», «-e» ou «-s» (der, die, das), o adjetivo leva «-e/-en»; se o artigo NÃO tem terminação (ein), o adjetivo mostra o caso (-er, -es). PASSO 3: não decore as terminações isoladas: decore as FRASES-MODELO («der große Mann», «ein großer Mann», «den großen Mann», «einen großen Mann», «dem großen Mann», «einem großen Mann»).', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { artigo: 'der, die, das', nominativo: 'der große Mann / die kleine Frau / das neue Auto', acusativo: 'den großen Mann / die kleine Frau / das neue Auto' }, { artigo: 'ein, eine, ein', nominativo: 'ein großer Mann / eine kleine Frau / ein neues Auto', acusativo: 'einen großen Mann / eine kleine Frau / ein neues Auto' },
        ],
      }),
      dialogo(10, 'Eine neue Wohnung / Um apartamento novo', 'Dois amigos falam do novo apartamento de um deles.', [
        ['Mia', 'Hallo Jonas! Du hast eine neue Wohnung, stimmt das?', 'Oi, Jonas! Você tem um apartamento novo, é verdade?'], ['Jonas', 'Ja! Es ist eine kleine, aber schöne Wohnung.', 'Sim! É um apartamento pequeno, mas bonito.'], ['Mia', 'Gibt es auch einen großen Balkon?', 'Também há uma varanda grande?'],
        ['Jonas', 'Ja, es gibt einen großen Balkon und einen kleinen Garten.', 'Sim, há uma varanda grande e um jardim pequeno.'], ['Mia', 'Und wie sind deine Nachbarn?', 'E como são os seus vizinhos?'], ['Jonas', 'Ich habe einen netten Nachbarn und eine freundliche Nachbarin.', 'Tenho um vizinho simpático e uma vizinha amável.'],
        ['Mia', 'Das ist toll! Hast du schon die neuen Möbel gekauft?', 'Que ótimo! Você já comprou os móveis novos?'], ['Jonas', 'Ja, ich habe ein bequemes Sofa und einen modernen Tisch gekauft.', 'Sim, comprei um sofá confortável e uma mesa moderna.'], ['Mia', 'Ich möchte die Wohnung bald sehen!', 'Quero ver o apartamento em breve!'], ['Jonas', 'Komm doch am Samstag. Dann koche ich ein leckeres Essen.', 'Venha no sábado. Então cozinho uma comida gostosa.'],
      ]),
      producao(5, 'Descreva o seu apartamento ou o seu bairro em 6 frases, com «ein/eine» e adjetivos: «Es gibt einen großen … Ich habe ein bequemes …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases com ein/mein/kein, adjetivo e substantivo em casos diferentes.'),
      exercicios(20, [
        lacuna('Das ist ein ___ Mann. (simpático)', ['netter', 'netten', 'nette'], 'netter', 'Nominativo masculino depois de «ein»: -er.'), lacuna('Ich kenne einen ___ Mann.', ['netten', 'netter', 'nette'], 'netten', 'Acusativo masculino: -en.'), lacuna('Das ist ein ___ Auto. (novo)', ['neues', 'neue', 'neuen'], 'neues', 'Nominativo neutro: -es.'),
        lacuna('Ich habe ein ___ Auto.', ['neues', 'neue', 'neuen'], 'neues', 'Acusativo neutro: -es.'), lacuna('Das ist eine ___ Frau. (pequena)', ['kleine', 'kleiner', 'kleinen'], 'kleine', 'Nominativo feminino: -e.'), lacuna('Ich fahre mit einem ___ Auto.', ['neuen', 'neues', 'neue'], 'neuen', 'Dativo: -en.'),
        lacuna('Ich wohne mit meinen ___ Freunden. (velhos)', ['alten', 'alte', 'alter'], 'alten', 'Dativo plural: -en.'), lacuna('Hast du ein ___ Sofa? (confortável)', ['bequemes', 'bequeme', 'bequemen'], 'bequemes', 'Acusativo neutro: -es.'), mc('Depois de «ein», o nominativo masculino leva:', ['-er', '-e', '-en'], '-er', 'ein não tem terminação.'),
        mc('Depois de «ein», o nominativo neutro leva:', ['-es', '-e', '-en'], '-es', 'ein não tem terminação.'), mc('Depois de «einen» (acusativo masculino), o adjetivo leva:', ['-en', '-er', '-es'], '-en', 'O artigo já mostra o caso.'), mc('Depois de «einem», «einer», o adjetivo leva:', ['-en', '-er', '-e'], '-en', 'Dativo: -en.'),
        ordem('Ordene: «Eu tenho um carro novo.»', ['Ich', 'habe', 'ein', 'neues', 'Auto'], 'Ich habe ein neues Auto.', 'Acusativo neutro: ein + -es.'), ouvir('Es gibt einen großen Balkon', ['Es gibt einen großen Balkon', 'Es gibt ein großer Balkon', 'Es gibt eine große Balkon'], 'Es gibt einen großen Balkon', 'Acusativo masculino: -en.'), ditado('Ich habe einen netten Nachbarn', 'Declinação-N e adjetivo.'),
        livre('Escreva 5 frases com ein/eine e adjetivo: nominativo, acusativo e dativo.', 'Das ist ein netter Mann. Ich habe ein neues Auto. Es gibt einen großen Balkon. Ich wohne in einer kleinen Wohnung. Ich fahre mit einem alten Auto.'),
      ]),
      producao(5, 'Grave-se descrevendo as pessoas e as coisas que você tem, com ein/mein e adjetivos.'),
    ]),
  ],
});
