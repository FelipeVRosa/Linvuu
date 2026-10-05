import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 18, titulo: 'Tempo livre, clima e hobbies', nivel: 'a1',
  objetivo: 'Falar dos hobbies e do que você prefere (gern, lieber, am liebsten), descrever o tempo e as estações e combinar o fim de semana.',
  nota: 'Você fala do tempo livre, do clima e combina planos. Próxima aula: viagens e transporte.',
  sessoes: [
    sessao('S1', 'Hobbies e preferências', [
      revisao(5, 'Escreva 5 frases com «es gibt» e «haben» sobre a sua casa.'),
      palavras(10, [
        ['die Freizeit', 'di fráitsait', 'tempo livre', 'free time'], ['das Hobby', 'das hóbi', 'hobby', 'hobby'], ['wandern', 'vándern', 'fazer trilha, caminhar', 'to hike'], ['Rad fahren', 'rat fáren', 'andar de bicicleta', 'to cycle'], ['spazieren gehen', 'xpatsíren géen', 'passear a pé', 'to go for a walk'],
        ['joggen', 'djógen', 'correr, fazer cooper', 'to jog'], ['Sport machen', 'xport márren', 'praticar esporte', 'to do sports'], ['Freunde treffen', 'fróinde tréfen', 'encontrar amigos', 'to meet friends'], ['Musik hören', 'muzík hörren', 'ouvir música', 'to listen to music'], ['Karten spielen', 'kárten xpílen', 'jogar cartas', 'to play cards'],
      ]),
      gramatica(12, 'Gern, lieber, am liebsten: o que eu gosto e prefiro', 'PASSO 1: «gern» (com prazer) vem DEPOIS do verbo e diz que você gosta de fazer algo: «Ich schwimme gern.» Não existe verbo «gostar» aqui. PASSO 2: «nicht gern» diz que você não gosta: «Ich koche nicht gern.» PASSO 3: «lieber» diz o que você PREFERE: «Ich lese lieber.» PASSO 4: «am liebsten» diz o que você MAIS gosta: «Am liebsten tanze ich.» A ordem é: gern → lieber → am liebsten. PASSO 5: perguntas úteis: «Was machst du gern?», «Was machst du am Wochenende?», «Was ist dein Hobby?» PASSO 6: «Mein Hobby ist Fußball» (um) ou «Meine Hobbys sind Lesen und Tanzen» (vários).', {
        tag: 'Verbos',
        comparacao: 'em português usamos «gostar de» + verbo. Em alemão não há esse verbo: o advérbio «gern» vai junto do verbo que você faz («schwimme gern»).',
        tabela: [
          { grau: 'gern', pt: 'gosto de', exemplo: 'Ich schwimme gern.' }, { grau: 'nicht gern', pt: 'não gosto de', exemplo: 'Ich koche nicht gern.' }, { grau: 'lieber', pt: 'prefiro', exemplo: 'Ich lese lieber.' }, { grau: 'am liebsten', pt: 'gosto mais de tudo', exemplo: 'Am liebsten tanze ich.' }, { grau: 'sehr gern', pt: 'gosto muito de', exemplo: 'Ich wandere sehr gern.' },
        ],
        erros: [['Ich gern schwimme.', 'Ich schwimme gern.', '«gern» vem depois do verbo.'], ['Ich mag gern Fußball.', 'Ich spiele gern Fußball.', 'Não se junta «mögen» com «gern».'], ['Ich lese mehr gern.', 'Ich lese lieber.', 'Preferir = «lieber».']],
      }),
      producao(3, 'Diga o que você faz gern, nicht gern, lieber e am liebsten.'),
    ]),
    sessao('S2', 'O tempo e as estações', [
      revisao(5, 'Escreva 4 frases com «gern», «nicht gern», «lieber» e «am liebsten».'),
      palavras(8, [
        ['das Wetter', 'das véter', 'tempo (clima)', 'weather'], ['der Regen', 'der régen', 'chuva', 'rain'], ['der Schnee', 'der xné', 'neve', 'snow'], ['der Wind', 'der vint', 'vento', 'wind'],
        ['die Wolke', 'di vólke', 'nuvem', 'cloud'], ['kühl', 'kül', 'fresco', 'cool'], ['die Temperatur', 'di temperatúr', 'temperatura', 'temperature'], ['das Grad', 'das grat', 'grau (de temperatura)', 'degree'],
      ]),
      gramatica(12, 'Falar do tempo: o «es» impessoal, passo a passo', 'PASSO 1: pergunte «Wie ist das Wetter?» PASSO 2: para a chuva e a neve, o alemão usa o verbo com «es»: «Es regnet», «Es schneit». O «es» é obrigatório e não substitui nenhuma palavra (como o «it» do inglês). PASSO 3: com adjetivos: «Es ist warm / kalt / heiß / kühl / windig / sonnig / bewölkt.» PASSO 4: a temperatura: «Es sind zwanzig Grad.» PASSO 5: as estações são palavras «der» e usam «im»: «im Frühling», «im Sommer», «im Herbst», «im Winter»: «Im Sommer ist es heiß.» PASSO 6: «Mir ist kalt» é uma expressão pronta para «estou com frio» (aprendida como bloco).', {
        tag: 'Tempo',
        tabela: [
          { frase: 'Es regnet.', pt: 'Está chovendo.' }, { frase: 'Es schneit.', pt: 'Está nevando.' }, { frase: 'Es ist sonnig und warm.', pt: 'Está ensolarado e quente.' }, { frase: 'Es ist kalt und windig.', pt: 'Está frio e ventando.' }, { frase: 'Es sind zwanzig Grad.', pt: 'Fazem vinte graus.' }, { frase: 'Im Winter ist es kalt.', pt: 'No inverno faz frio.' }, { frase: 'Mir ist kalt.', pt: 'Estou com frio.' },
        ],
        erros: [['Regnet.', 'Es regnet.', 'Falta o «es» impessoal.'], ['Ich bin kalt.', 'Mir ist kalt.', 'Para sensação, use «Mir ist kalt», não «ich bin».'], ['In Sommer ist es heiß.', 'Im Sommer ist es heiß.', 'Estação: «im».']],
      }),
      producao(5, 'Descreva o tempo de hoje e de cada estação do ano onde você mora.'),
    ]),
    sessao('S3', 'Combinar o fim de semana', [
      revisao(5, 'Escreva 4 frases sobre o tempo e as estações.'),
      gramatica(8, 'Propor, concordar e combinar', 'Para propor algo: «Wollen wir …?» (vamos?), «Hast du Lust auf …?» (você tem vontade de …?). Depois de «Lust auf» vem um substantivo no acusativo: «Hast du Lust auf Kino?», «Lust auf ein Picknick?». Para concordar: «Gute Idee!», «Einverstanden!» (combinado!). Para propor outra coisa: «Dann …» (então …), «Oder …?» (ou …?). Com mau tempo: «Bei Regen gehen wir ins Kino.»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'propor', exemplo: 'Wollen wir wandern gehen? / Hast du Lust auf Kino?' }, { funcao: 'concordar', exemplo: 'Gute Idee! / Einverstanden! / Ja, gern!' }, { funcao: 'recusar', exemplo: 'Nein, leider nicht. Ich muss arbeiten.' }, { funcao: 'propor outra coisa', exemplo: 'Dann gehen wir ins Kino. / Oder wollen wir Rad fahren?' }, { funcao: 'plano com mau tempo', exemplo: 'Bei Regen bleiben wir zu Hause.' },
        ],
      }),
      dialogo(10, 'Am Wochenende / No fim de semana', 'Dois amigos combinam o sábado.', [
        ['Mia', 'Was machst du am Wochenende, Jonas?', 'O que você faz no fim de semana, Jonas?'], ['Jonas', 'Am Samstag will ich wandern. Es ist bestimmt sonnig.', 'No sábado quero fazer trilha. Com certeza vai estar ensolarado.'], ['Mia', 'Ich wandere nicht gern. Ich fahre lieber Rad.', 'Eu não gosto de fazer trilha. Prefiro andar de bicicleta.'],
        ['Jonas', 'Dann können wir mit dem Fahrrad zum See fahren.', 'Então podemos ir de bicicleta ao lago.'], ['Mia', 'Gute Idee! Hast du Lust auf ein Picknick?', 'Boa ideia! Você tem vontade de fazer um piquenique?'], ['Jonas', 'Ja, gern! Ich bringe Brot und Käse mit.', 'Sim, com prazer! Eu levo pão e queijo.'],
        ['Mia', 'Und ich mache einen Salat. Was machen wir bei Regen?', 'E eu faço uma salada. O que fazemos se chover?'], ['Jonas', 'Bei Regen gehen wir ins Kino.', 'Se chover, vamos ao cinema.'], ['Mia', 'Einverstanden! Bis Samstag!', 'Combinado! Até sábado!'],
      ]),
      texto(5, 'Meine Freizeit / O meu tempo livre', 'Am Samstag fahre ich gern Rad. Am Sonntag koche ich mit Freunden. Im Sommer schwimme ich gern im See. Im Winter lese ich lieber zu Hause. Am liebsten reise ich.',
        'No sábado gosto de andar de bicicleta. No domingo cozinho com amigos. No verão gosto de nadar no lago. No inverno prefiro ler em casa. O que mais gosto é de viajar.',
        [['Was macht der Autor am Samstag gern?', 'Rad fahren'], ['Was macht er im Winter lieber?', 'Zu Hause lesen'], ['Was macht er am liebsten?', 'Reisen']]),
      producao(2, 'Combine um programa em voz alta com um amigo: proponha, concorde e dê uma alternativa para o caso de chuva.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno diálogo de 6 falas combinando o fim de semana.'),
      exercicios(20, [
        lacuna('Ich schwimme ___. (gosto)', ['gern', 'lieber', 'am liebsten'], 'gern', '«gern» = gosto de.'), lacuna('Ich lese ___ als ich fernsehe. (prefiro)', ['lieber', 'gern', 'mehr'], 'lieber', 'Preferir = «lieber».'), lacuna('___ tanze ich. (o que mais gosto)', ['Am liebsten', 'Gern', 'Lieber'], 'Am liebsten', 'O máximo: «am liebsten».'),
        mc('Qual frase está certa?', ['Ich koche nicht gern.', 'Ich nicht gern koche.', 'Ich koche gern nicht.'], 'Ich koche nicht gern.', '«nicht gern» depois do verbo.'), lacuna('___ regnet. (impessoal)', ['Es', 'Das', 'Sie'], 'Es', 'O «es» impessoal é obrigatório.'), lacuna('___ Winter ist es kalt.', ['Im', 'In', 'Am'], 'Im', 'Estação: «im».'),
        mc('«Es sind zwanzig Grad» significa:', ['Fazem vinte graus', 'Há vinte pessoas', 'Faltam vinte graus'], 'Fazem vinte graus', 'Temperatura.'), mc('Como dizer «estou com frio»?', ['Mir ist kalt.', 'Ich bin kalt.', 'Ich habe kalt.'], 'Mir ist kalt.', 'Expressão pronta.'),
        lacuna('Hast du Lust ___ Kino? (de)', ['auf', 'für', 'mit'], 'auf', '«Lust auf» + acusativo.'), lacuna('___ Regen gehen wir ins Kino. (se chover)', ['Bei', 'Mit', 'Von'], 'Bei', '«bei Regen» = se chover.'), ordem('Ordene: «Eu prefiro andar de bicicleta.»', ['Ich', 'fahre', 'lieber', 'Rad'], 'Ich fahre lieber Rad.', '«lieber» depois do verbo.'),
        ordem('Ordene: «Vamos fazer uma trilha?»', ['Wollen', 'wir', 'wandern', 'gehen'], 'Wollen wir wandern gehen?', 'Pergunta com «wollen».'), ouvir('Bei Regen gehen wir ins Kino', ['Bei Regen gehen wir ins Kino', 'Bei Sonne gehen wir ins Kino', 'Bei Regen bleiben wir zu Hause'], 'Bei Regen gehen wir ins Kino', '«bei Regen» = se chover.'),
        ditado('Am liebsten reise ich', 'am liebsten = o que mais gosto.'), livre('Escreva 5 frases: dois hobbies com «gern», uma preferência com «lieber», o tempo de hoje e um plano para o fim de semana.', 'Ich schwimme gern. Ich lese gern. Ich fahre lieber Rad. Heute ist es sonnig. Am Samstag will ich wandern.'),
      ]),
      producao(5, 'Grave-se falando do seu tempo livre e do clima da sua cidade em cada estação.'),
    ]),
  ],
});
