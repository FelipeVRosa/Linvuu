import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 2, titulo: 'Quem sou eu', nivel: 'a1',
  objetivo: 'Apresentar-se, perguntar o nome e a origem e usar «sein» no presente, com «du», «ihr» e «Sie».',
  nota: 'Você se apresenta e diz de onde é. Próxima aula: os substantivos e os artigos.',
  sessoes: [
    sessao('S1', 'Ich heiße…', [
      dialogo(5, 'Hallo! Wie heißt du? / Oi! Como você se chama?', 'Lea e Paul se conhecem na fila de um curso de idiomas.', [
        ['Lea', 'Hallo! Ich heiße Lea. Wie heißt du?', 'Oi! Eu me chamo Lea. Como você se chama?'], ['Paul', 'Hallo, Lea! Ich heiße Paul.', 'Oi, Lea! Eu me chamo Paul.'], ['Lea', 'Woher kommst du, Paul?', 'De onde você vem, Paul?'], ['Paul', 'Ich komme aus Brasilien. Und du?', 'Venho do Brasil. E você?'],
        ['Lea', 'Ich komme aus Hamburg.', 'Venho de Hamburgo.'], ['Paul', 'Freut mich, Lea!', 'Muito prazer, Lea!'], ['Lea', 'Freut mich auch, Paul!', 'Muito prazer também, Paul!'],
      ]),
      revisao(2, 'Ouça de novo as saudações da aula anterior e repita: «Hallo», «Guten Morgen», «Guten Tag», «Guten Abend», «Wie geht’s?» e «Tschüs». Depois leia em voz alta «ich», «Schule» e «Buch».'),
      palavras(4, [
        ['heißen', 'háissen', 'chamar-se', 'to be called'], ['der Name', 'der náme', 'nome', 'name'], ['der Vorname', 'der fórname', 'nome próprio', 'first name'], ['der Nachname', 'der nárrname', 'sobrenome', 'last name'], ['kommen', 'kómen', 'vir', 'to come'],
        ['aus', 'aus', 'de (origem)', 'from'], ['woher', 'vôher', 'de onde', 'where from'], ['wer', 'ver', 'quem', 'who'], ['wie', 'vi', 'como', 'how'], ['und', 'unt', 'e', 'and'], ['ja', 'ia', 'sim', 'yes'], ['nein', 'nain', 'não', 'no'], ['Freut mich', 'fróit miç', 'muito prazer', 'nice to meet you'],
      ]),
      gramatica(7, 'A ordem da frase e as primeiras perguntas', 'PASSO 1: ouça «Ich heiße Lea.» e depois «Wie heißt du?». Para dizer o nome, o verbo é «heißen», que quer dizer chamar-se. PASSO 2: em alemão, o verbo conjugado fica sempre na SEGUNDA posição da frase. Em «Ich heiße Lea», o «ich» ocupa a primeira posição, e «heiße» ocupa a segunda. PASSO 3: nas perguntas com palavra interrogativa, essa palavra ocupa o primeiro lugar. Exemplos: «wie», que quer dizer como e se lê «vi», e «woher», que quer dizer de onde e se lê «vô-hér». O verbo continua em segundo: «Wie heißt du?» e «Woher kommst du?». PASSO 4: na pergunta de sim ou não, o verbo vai para o começo: «Heißt du Lea?». Responda «Ja» ou «Nein». PASSO 5: o verbo muda de final conforme a pessoa. Com «ich», termina em «e»: «ich heiße», «ich komme». Com «du», termina em «st»: «du kommst». Em «heißen», o «ß» já faz o som de «s». Por isso se acrescenta só o «t»: «du heißt». PASSO 6: não esqueça o pronome. Em português dizemos só «Venho do Brasil». Em alemão o «ich» é obrigatório: «Ich komme aus Brasilien». PASSO 7: um aviso. Nas palavras «der Name» e «der Vorname», o «der» é um artigo. Você aprende os artigos na aula 3. Por enquanto, repita o «der» junto com a palavra.', {
        tag: 'Frase',
        comparacao: 'em português o verbo também vem logo depois do sujeito, mas dá para dizer «Venho do Brasil» sem o «eu» e mudar a ordem à vontade. O alemão exige o pronome e fixa o verbo na segunda posição, mesmo quando outra palavra abre a frase.',
        tabelas: [
          { titulo: 'heißen, chamar-se', linhas: [
            { pronome: 'ich', forma: 'heiße', exemplo: 'Ich heiße Lea.' }, { pronome: 'du', forma: 'heißt', exemplo: 'Wie heißt du?' }, { pronome: 'er / sie / es', forma: 'heißt', exemplo: 'Er heißt Paul.' },
            { pronome: 'wir', forma: 'heißen', exemplo: 'Wir heißen Müller.' }, { pronome: 'ihr', forma: 'heißt', exemplo: 'Wie heißt ihr?' }, { pronome: 'sie / Sie', forma: 'heißen', exemplo: 'Wie heißen Sie?' },
          ] },
          { titulo: 'kommen, vir', linhas: [
            { pronome: 'ich', forma: 'komme', exemplo: 'Ich komme aus Brasilien.' }, { pronome: 'du', forma: 'kommst', exemplo: 'Woher kommst du?' }, { pronome: 'er / sie / es', forma: 'kommt', exemplo: 'Sie kommt aus Hamburg.' },
            { pronome: 'wir', forma: 'kommen', exemplo: 'Wir kommen aus Brasilien.' }, { pronome: 'ihr', forma: 'kommt', exemplo: 'Woher kommt ihr?' }, { pronome: 'sie / Sie', forma: 'kommen', exemplo: 'Woher kommen Sie?' },
          ] },
          { titulo: 'Perguntas e respostas', linhas: [
            { pergunta: 'Wie heißt du?', resposta: 'Ich heiße Anna.', pt: 'Como você se chama? Eu me chamo Anna.' }, { pergunta: 'Wie heißen Sie?', resposta: 'Ich heiße Müller.', pt: 'Como o senhor se chama? Eu me chamo Müller.' },
            { pergunta: 'Woher kommst du?', resposta: 'Ich komme aus Brasilien.', pt: 'De onde você vem? Venho do Brasil.' }, { pergunta: 'Woher kommen Sie?', resposta: 'Ich komme aus Brasilien.', pt: 'De onde o senhor vem? Venho do Brasil.' },
          ] },
        ],
        erros: [['Ich Anna heiße.', 'Ich heiße Anna.', 'O verbo conjugado fica na segunda posição, logo depois do «ich».'], ['Wie du heißt?', 'Wie heißt du?', 'Na pergunta com «wie», o verbo vem logo depois da palavra de pergunta.'], ['Du kommen aus Brasilien.', 'Du kommst aus Brasilien.', 'Com «du», o verbo termina em «st».'], ['Heiße Anna.', 'Ich heiße Anna.', 'O pronome «ich» não pode sumir, como pode em português.']],
      }),
      exercicios(8, [
        ouvir('Wie heißt du?', ['Wie heißt du?', 'Woher kommst du?', 'Wie geht’s?'], 'Wie heißt du?', 'Você ouve «vi haist du»: a pergunta pelo nome usa o verbo «heißen». «Woher kommst du?» pergunta a origem, e «Wie geht’s?» pergunta como a pessoa está.'),
        ouvir('Ich komme aus Brasilien.', ['Ich komme aus Brasilien.', 'Ich heiße Paul.', 'Ich komme aus Hamburg.'], 'Ich komme aus Brasilien.', 'A frase tem o verbo «komme» e termina com «Brasilien». «Ich heiße Paul» diz o nome, e «Hamburg» é outra cidade.'),
        ditado('Ich heiße Lea.', 'Escreva «heiße» com «ß», que soa como «ss». O verbo vem logo depois do «ich», na segunda posição.'),
        ditado('Guten Morgen, Lea!', 'Retomando a aula 1: «Guten Morgen» é a saudação da manhã, e o nome da pessoa vem depois, separado por vírgula.'),
        lacuna('Ich ___ Anna. (heißen)', ['heiße', 'heißt', 'heißen'], 'heiße', 'Com «ich», o verbo termina em «e»: «ich heiße». A forma «heißt» é de «du», «er» ou «ihr».'),
        lacuna('Du ___ aus Brasilien. (kommen)', ['kommst', 'komme', 'kommt'], 'kommst', 'Com «du», o verbo termina em «st»: «du kommst». O final «e» é de «ich», e o final «t» é de «er».'),
        mc('Qual frase está correta?', ['Ich heiße Paul.', 'Ich Paul heiße.', 'Heiße ich Paul.'], 'Ich heiße Paul.', 'O verbo conjugado fica na segunda posição, logo depois do «ich». A ordem «Heiße ich Paul?» seria uma pergunta de sim ou não.'),
        ordem('Ordene: «De onde você vem?»', ['kommst', 'du', 'Woher'], 'Woher kommst du?', 'A palavra de pergunta «Woher» vem primeiro, o verbo «kommst» fica em segundo e o «du» vem depois.'),
        ordem('Ordene: «Você se chama Lea?»', ['Lea', 'du', 'Heißt'], 'Heißt du Lea?', 'Na pergunta de sim ou não, o verbo abre a frase: «Heißt», depois «du», depois o nome.'),
      ]),
      producao(4, 'Diga em voz alta: «Hallo! Ich heiße … Ich komme aus Brasilien. Freut mich!». Depois faça as duas perguntas a uma pessoa de verdade ou imaginária: «Wie heißt du? Woher kommst du?». Se puder, grave-se por 20 segundos e ouça.'),
    ]),
    sessao('S2', 'Sein: ser e estar', [
      dialogo(4, 'Guten Morgen! / Bom dia!', 'Numa escola de idiomas em Berlim, a professora recebe um aluno novo. Ela o trata de «Sie». Depois ele fala com uma colega, de «du».', [
        ['Lehrerin', 'Guten Morgen! Sind Sie Herr Silva?', 'Bom dia! O senhor é o senhor Silva?'], ['Paul', 'Ja, ich bin Paul Silva. Ich bin aus Brasilien.', 'Sim, eu sou Paul Silva. Sou do Brasil.'], ['Lehrerin', 'Freut mich, Herr Silva! Ich bin Frau Becker.', 'Muito prazer, senhor Silva! Eu sou a senhora Becker.'],
        ['Paul', 'Freut mich auch, Frau Becker!', 'Muito prazer também, senhora Becker!'], ['Lea', 'Hallo! Ich bin Lea. Bist du auch hier?', 'Oi! Eu sou a Lea. Você também está aqui?'], ['Paul', 'Ja, ich bin hier. Ich bin ein bisschen müde.', 'Sim, estou aqui. Estou um pouco cansado.'],
        ['Lea', 'Ich bin auch müde.', 'Eu também estou cansada.'], ['Paul', 'Wir sind hier. Wir sind glücklich!', 'Nós estamos aqui. Estamos felizes!'],
      ]),
      revisao(2, 'Olhe as tabelas dos verbos «heißen» e «kommen» da sessão anterior e diga em voz alta os pronomes pessoais com a tradução: «ich», «du», «er», «sie», «es», «wir», «ihr», «sie» e «Sie».'),
      palavras(4, [
        ['müde', 'múde', 'cansado', 'tired'], ['glücklich', 'glúkliç', 'feliz', 'happy'], ['hier', 'hir', 'aqui', 'here'], ['da', 'da', 'lá, ali', 'there'], ['auch', 'aurr', 'também', 'also'], ['nicht', 'niçt', 'não', 'not'], ['Herr', 'hér', 'senhor', 'Mr'], ['Frau', 'frau', 'senhora', 'Mrs'], ['das ist', 'das ist', 'este é, esta é, isto é', 'this is'],
      ]),
      gramatica(7, 'Sein: ser e estar', 'PASSO 1: em português temos dois verbos, «ser» e «estar». Em alemão há um só, «sein», que se lê «zain». PASSO 2: «sein» é irregular e muda muito. Ouça as formas: «ich bin», «du bist», «er, sie, es ist», «wir sind», «ihr seid», «sie sind». Atenção: «sind» lê-se «zint» e «seid» lê-se «zait». PASSO 3: use «sein» para dizer quem você é: «Ich bin Brasilianer» ou «Das ist Lea». PASSO 4: use também para dizer como você está ou onde você está: «Ich bin müde» e «Wir sind hier». O contexto mostra se é «ser» ou «estar». PASSO 5: para negar, coloque «nicht» depois do verbo: «Ich bin nicht müde». PASSO 6: na pergunta de sim ou não, o verbo vai para o começo: «Bist du müde?». Responda: «Ja, ich bin müde.» ou «Nein, ich bin nicht müde.»', {
        tag: 'Verbos',
        comparacao: 'o português tem dois verbos, «ser» e «estar». O alemão tem um só, «sein», e o contexto diz qual dos dois se quer dizer. Em compensação, cada pessoa tem uma forma bem diferente, e é preciso decorar.',
        tabelas: [
          { titulo: 'sein no presente', linhas: [
            { pronome: 'ich', sein: 'bin', exemplo: 'Ich bin Brasilianer.' }, { pronome: 'du', sein: 'bist', exemplo: 'Du bist müde.' }, { pronome: 'er / sie / es', sein: 'ist', exemplo: 'Er ist hier.' },
            { pronome: 'wir', sein: 'sind', exemplo: 'Wir sind glücklich.' }, { pronome: 'ihr', sein: 'seid', exemplo: 'Ihr seid hier.' }, { pronome: 'sie / Sie', sein: 'sind', exemplo: 'Sie sind aus Berlin.' },
          ] },
        ],
        exemplos: [['Das ist Lea.', 'Esta é a Lea.'], ['Ich bin müde.', 'Estou cansado.'], ['Ich bin nicht müde.', 'Não estou cansado.'], ['Bist du müde?', 'Você está cansado?'], ['Wir sind hier.', 'Nós estamos aqui.']],
        erros: [['Ich bist müde.', 'Ich bin müde.', 'Cada pessoa tem a sua forma. Com «ich», a forma é sempre «bin».'], ['Wir ist hier.', 'Wir sind hier.', 'Com «wir», a forma é «sind». A forma «ist» é de «er», «sie» e «es».'], ['Ich nicht bin müde.', 'Ich bin nicht müde.', 'O verbo fica na segunda posição, e o «nicht» vem depois dele.']],
      }),
      gramatica(5, 'Você, vocês, o senhor: du, ihr e Sie', 'PASSO 1: para falar com UMA pessoa próxima, como amigo, família, criança ou colega jovem, use «du». PASSO 2: para falar com VÁRIAS pessoas próximas, use «ihr». PASSO 3: para falar com alguém que você não conhece bem, ou com respeito, use «Sie», que se lê «zi». Serve para o senhor, a senhora ou os senhores, uma pessoa ou várias. No texto, «Sie» formal sempre começa com S maiúsculo. PASSO 4: com «Sie» o verbo tem a mesma forma de «eles»: «Sie sind» e «Wie heißen Sie?». PASSO 5: na dúvida, use «Sie». A outra pessoa vai lhe oferecer o «du» quando quiser.', {
        tag: 'Tratamento',
        comparacao: 'em português, «você» serve para quase todo mundo, e «o senhor» é opcional. Em alemão a escolha entre «du» e «Sie» é obrigatória e muda o verbo da frase inteira.',
        tabela: [
          { pronome: 'du', significado: 'uma pessoa próxima', exemplo: 'Wie heißt du?' }, { pronome: 'ihr', significado: 'várias pessoas próximas', exemplo: 'Woher kommt ihr?' }, { pronome: 'Sie', significado: 'uma ou várias pessoas, formal', exemplo: 'Wie heißen Sie?' },
        ],
        erros: [['Wie heißt Sie?', 'Wie heißen Sie?', 'Com «Sie» o verbo fica no plural, mesmo para uma só pessoa.'], ['Sind du müde?', 'Bist du müde?', 'Com «du», a forma de «sein» é «bist». «Sind» é de «wir» e «sie».']],
      }),
      exercicios(5, [
        ouvir('Du bist müde.', ['Du bist müde.', 'Ich bin müde.', 'Wir sind müde.'], 'Du bist müde.', 'Você ouve «du bist»: a forma «bist» vai com «du». «Ich bin» e «wir sind» têm outros sons.'),
        ouvir('Wir sind glücklich.', ['Wir sind glücklich.', 'Ihr seid glücklich.', 'Sie ist glücklich.'], 'Wir sind glücklich.', 'O começo é «vir zint»: com «wir», a forma é «sind». Em «Ihr seid» você ouviria «zait».'),
        ditado('Ich bin müde.', 'Escreva «bin» com «i» e «müde» com «ü». O «ü» é o «u» com a língua de «i», que você treinou na aula 1.'),
        lacuna('Ich ___ Brasilianer. (sein)', ['bin', 'bist', 'ist'], 'bin', 'Com «ich», a forma de «sein» é «bin». A forma «bist» é de «du» e «ist» é de «er».'),
        lacuna('Du ___ müde. (sein)', ['bist', 'bin', 'ist'], 'bist', 'Com «du», a forma de «sein» é «bist». A forma «bin» é só de «ich».'),
        lacuna('Wir ___ glücklich. (sein)', ['sind', 'seid', 'ist'], 'sind', 'Com «wir», a forma é «sind». A forma «seid» é de «ihr».'),
        lacuna('Ihr ___ hier. (sein)', ['seid', 'sind', 'bist'], 'seid', 'Com «ihr», vocês, a forma é «seid». É a única que termina em «d» sem ser «sind».'),
        mc('Para falar com um desconhecido, o senhor, use:', ['Sie', 'du', 'ihr'], 'Sie', 'O tratamento formal é «Sie», com S maiúsculo. O «du» fica para pessoas próximas e o «ihr» para várias pessoas próximas.'),
        mc('Para falar com um amigo, use:', ['du', 'Sie', 'er'], 'du', 'O tratamento informal, para uma pessoa próxima, é «du». O «Sie» é formal, e «er» quer dizer ele, não é tratamento direto.'),
      ]),
      producao(3, 'Diga em voz alta: «Ich bin müde. Du bist hier. Wir sind glücklich.». Depois faça duas perguntas de sim ou não com «sein»: uma a um amigo, «Bist du müde?», e uma a um desconhecido, «Sind Sie müde?».'),
    ]),
    sessao('S3', 'Países, nacionalidades e diálogo', [
      dialogo(5, 'Wer bist du? / Quem é você?', 'Dois estudantes se conhecem num curso de alemão.', [
        ['Lara', 'Hallo! Ich heiße Lara. Und du?', 'Oi! Eu me chamo Lara. E você?'], ['Tom', 'Hallo, Lara! Ich bin Tom. Woher kommst du?', 'Oi, Lara! Eu sou o Tom. De onde você vem?'], ['Lara', 'Ich komme aus Deutschland, aus Berlin. Und du?', 'Venho da Alemanha, de Berlim. E você?'],
        ['Tom', 'Ich komme aus Brasilien. Ich bin Brasilianer.', 'Venho do Brasil. Sou brasileiro.'], ['Lara', 'Sprichst du Deutsch?', 'Você fala alemão?'], ['Tom', 'Ja, ein bisschen. Sprichst du Portugiesisch?', 'Sim, um pouco. Você fala português?'],
        ['Lara', 'Nein, nur Deutsch und Englisch.', 'Não, só alemão e inglês.'], ['Tom', 'Das ist okay!', 'Tudo bem!'], ['Lara', 'Freut mich, Tom!', 'Muito prazer, Tom!'],
      ]),
      revisao(2, 'Diga em voz alta as seis formas de «sein», de memória: «bin», «bist», «ist», «sind», «seid» e «sind». Depois diga uma frase curta com cada uma, por exemplo «Ich bin hier».'),
      palavras(4, [
        ['Brasilien', 'brasílien', 'Brasil', 'Brazil'], ['Deutschland', 'dóitxlant', 'Alemanha', 'Germany'], ['Österreich', 'österraiç', 'Áustria', 'Austria'], ['die Schweiz', 'di xvaits', 'Suíça', 'Switzerland'],
        ['Portugal', 'pórtugal', 'Portugal', 'Portugal'], ['Spanien', 'xpánien', 'Espanha', 'Spain'], ['Frankreich', 'fránkraiç', 'França', 'France'], ['Italien', 'itálien', 'Itália', 'Italy'],
        ['Englisch', 'énglix', 'inglês (idioma)', 'English'], ['Portugiesisch', 'portuguízix', 'português (idioma)', 'Portuguese'], ['sprechen', 'xpréçen', 'falar', 'to speak'], ['ein bisschen', 'ain bíss-çen', 'um pouco', 'a little'], ['nur', 'nur', 'só, somente', 'only'],
      ]),
      gramatica(6, 'Nacionalidades e idiomas', 'PASSO 1: para dizer de onde você vem, use «Ich komme aus» e o país: «Ich komme aus Brasilien». PASSO 2: a maioria dos países não leva artigo: «Brasilien», «Deutschland», «Portugal». A Suíça é exceção, e tem o artigo «die»: «die Schweiz». Por enquanto, decore a frase pronta: «Ich komme aus der Schweiz». Mais adiante você vai entender por quê. PASSO 3: para dizer a nacionalidade de um homem, use «Brasilianer». Para uma mulher, acrescente «in»: «Brasilianerin». PASSO 4: depois de «sein», a nacionalidade vem sem artigo, como em português: «Ich bin Brasilianer», sou brasileiro. PASSO 5: os idiomas também não levam artigo, e se escrevem com letra maiúscula: «Ich spreche Deutsch». PASSO 6: o verbo «sprechen», que quer dizer falar, é irregular com «du» e «er»: «ich spreche», «du sprichst», «er spricht». O «sp» no começo soa «xp», como você viu na aula 1.', {
        tag: 'Substantivos',
        comparacao: 'em português usamos uma palavra para a pessoa e para o idioma: «brasileiro» e «português» são o que a pessoa é, e «o português» é o idioma. Em alemão são três palavras diferentes: o país, «Brasilien», a pessoa, «Brasilianer», e o idioma, «Portugiesisch».',
        tabelas: [
          { titulo: 'Nacionalidades', linhas: [
            { masculino: 'der Brasilianer', feminino: 'die Brasilianerin', pt: 'brasileiro / brasileira' }, { masculino: 'der Deutsche', feminino: 'die Deutsche', pt: 'alemão / alemã' }, { masculino: 'der Portugiese', feminino: 'die Portugiesin', pt: 'português / portuguesa' },
            { masculino: 'der Spanier', feminino: 'die Spanierin', pt: 'espanhol / espanhola' }, { masculino: 'der Franzose', feminino: 'die Französin', pt: 'francês / francesa' }, { masculino: 'der Italiener', feminino: 'die Italienerin', pt: 'italiano / italiana' },
            { masculino: 'der Österreicher', feminino: 'die Österreicherin', pt: 'austríaco / austríaca' }, { masculino: 'der Schweizer', feminino: 'die Schweizerin', pt: 'suíço / suíça' },
          ] },
          { titulo: 'sprechen, falar', linhas: [
            { pronome: 'ich', forma: 'spreche', exemplo: 'Ich spreche Deutsch.' }, { pronome: 'du', forma: 'sprichst', exemplo: 'Sprichst du Englisch?' }, { pronome: 'er / sie / es', forma: 'spricht', exemplo: 'Er spricht Portugiesisch.' },
            { pronome: 'wir', forma: 'sprechen', exemplo: 'Wir sprechen Deutsch.' }, { pronome: 'ihr', forma: 'sprecht', exemplo: 'Sprecht ihr Deutsch?' }, { pronome: 'sie / Sie', forma: 'sprechen', exemplo: 'Sprechen Sie Englisch?' },
          ] },
        ],
        exemplos: [['Ich komme aus Brasilien. Ich bin Brasilianer.', 'Venho do Brasil. Sou brasileiro.'], ['Sie kommt aus Deutschland. Sie ist Deutsche.', 'Ela vem da Alemanha. Ela é alemã.'], ['Ich spreche ein bisschen Deutsch.', 'Eu falo um pouco de alemão.']],
        erros: [['Ich bin ein Brasilianer.', 'Ich bin Brasilianer.', 'Para nacionalidade, o natural é dizer sem artigo, como em português.'], ['Sie ist Brasilianer.', 'Sie ist Brasilianerin.', 'Para uma mulher, a palavra recebe o final «in».'], ['Ich spreche Deutsche.', 'Ich spreche Deutsch.', 'O idioma tem forma própria, sem final: «Deutsch».']],
      }),
      texto(4, 'Lara und Tom / Lara e Tom', 'Das ist Lara. Sie ist Deutsche und kommt aus Berlin. Lara spricht Deutsch und Englisch. Das ist Tom. Er ist Brasilianer und kommt aus Brasilien. Tom spricht Portugiesisch und ein bisschen Deutsch. Lara und Tom sind hier. Tom ist ein bisschen müde, Lara ist auch müde. Sie sind glücklich.',
        'Esta é a Lara. Ela é alemã e vem de Berlim. Lara fala alemão e inglês. Este é o Tom. Ele é brasileiro e vem do Brasil. Tom fala português e um pouco de alemão. Lara e Tom estão aqui. Tom está um pouco cansado, Lara também está cansada. Eles estão felizes.',
        [['De onde Lara vem?', 'De Berlim, na Alemanha («aus Berlin»).'], ['Que idiomas Lara fala?', 'Alemão e inglês («Deutsch und Englisch»).'], ['Tom fala bem alemão?', 'Só um pouco («ein bisschen Deutsch»).']]),
      exercicios(6, [
        mc('O feminino de «der Brasilianer» é:', ['die Brasilianerin', 'die Brasilianer', 'das Brasilianerin'], 'die Brasilianerin', 'Para o feminino acrescenta-se «in» ao masculino: «Brasilianer», «Brasilianerin». A forma «die Brasilianer» não muda nada, e «das» não é artigo de mulher.'),
        mc('Qual frase diz de que país você vem?', ['Ich komme aus Brasilien.', 'Ich bin Brasilianer.', 'Ich spreche Portugiesisch.'], 'Ich komme aus Brasilien.', 'O país vem depois de «Ich komme aus». As outras duas dizem a nacionalidade e o idioma.'),
        mc('Uma mulher alemã diz de si mesma:', ['Ich bin Deutsche.', 'Ich bin Deutscher.', 'Ich bin Deutschin.'], 'Ich bin Deutsche.', 'Para a nacionalidade alemã a mulher usa «Deutsche». A forma «Deutscher» é de homem, e «Deutschin» não existe.'),
        ouvir('Ich komme aus Frankreich.', ['Ich komme aus Frankreich.', 'Ich komme aus Italien.', 'Ich komme aus Spanien.'], 'Ich komme aus Frankreich.', 'Você ouve «fránkraiç», com o «ch» suave no fim. «Italien» e «Spanien» terminam em «ien» e começam com outros sons.'),
        ouvir('Sprichst du Deutsch?', ['Sprichst du Deutsch?', 'Sprichst du Englisch?', 'Woher kommst du?'], 'Sprichst du Deutsch?', 'A pergunta termina em «dóitx», o idioma alemão. Em «Englisch» você ouviria «énglix», e «Woher kommst du?» é outra pergunta.'),
        ditado('Ich spreche Deutsch.', 'Escreva «Deutsch» com «sch» e com letra maiúscula: os idiomas são escritos com maiúscula em alemão. O «sp» de «spreche» soa «xp».'),
        lacuna('Ich ___ Deutsch. (sprechen)', ['spreche', 'sprichst', 'spricht'], 'spreche', 'Com «ich», o verbo termina em «e»: «ich spreche». As formas «sprichst» e «spricht» têm o «i» e são de «du» e «er».'),
        lacuna('Du ___ Englisch. (sprechen)', ['sprichst', 'spreche', 'sprecht'], 'sprichst', 'Com «du», «sprechen» muda o «e» para «i» e termina em «st»: «du sprichst». A forma «sprecht» é de «ihr».'),
        ordem('Ordene: «Eu falo um pouco de alemão.»', ['Deutsch', 'Ich', 'bisschen', 'spreche', 'ein'], 'Ich spreche ein bisschen Deutsch.', 'O verbo «spreche» fica na segunda posição, depois do «ich». «Ein bisschen» vem antes do idioma.'),
        livre('Escreva de onde você vem e que idiomas você fala.', 'Ich komme aus Brasilien. Ich spreche Portugiesisch und ein bisschen Deutsch.'),
      ]),
      producao(3, 'Complete em voz alta com a sua informação: «Ich komme aus … Ich bin … Ich spreche …». Depois pergunte a uma pessoa imaginária: «Woher kommst du? Sprichst du Deutsch?».'),
    ]),
    sessao('S4', 'Prática', [
      dialogo(5, 'An der Rezeption / Na recepção', 'Paul chega a um hotel em Berlim. A recepcionista o trata de «Sie».', [
        ['Rezeptionistin', 'Guten Tag! Wie heißen Sie?', 'Bom dia! Como o senhor se chama?'], ['Paul', 'Guten Tag! Ich heiße Paul Silva.', 'Bom dia! Eu me chamo Paul Silva.'], ['Rezeptionistin', 'Woher kommen Sie, Herr Silva?', 'De onde o senhor vem, senhor Silva?'],
        ['Paul', 'Ich komme aus Brasilien, aus São Paulo.', 'Venho do Brasil, de São Paulo.'], ['Rezeptionistin', 'Sie sprechen gut Deutsch!', 'O senhor fala bem alemão!'], ['Paul', 'Danke! Ich spreche nur ein bisschen.', 'Obrigado! Falo só um pouco.'],
        ['Rezeptionistin', 'Freut mich, Herr Silva!', 'Muito prazer, senhor Silva!'], ['Paul', 'Freut mich auch!', 'Muito prazer também!'],
      ]),
      revisao(2, 'Ouça de novo o diálogo «Wer bist du?» da sessão anterior e repita cada fala em voz alta, imitando o ritmo e a entonação.'),
      exercicios(18, [
        mc('Em «Ich heiße Anna», o verbo «heiße» está:', ['na 2ª posição', 'na 1ª posição', 'no fim'], 'na 2ª posição', 'O verbo conjugado fica na segunda posição: primeiro vem «Ich», depois «heiße», depois «Anna».'),
        ordem('Ordene: «Eu venho do Brasil.»', ['aus', 'Brasilien', 'Ich', 'komme'], 'Ich komme aus Brasilien.', 'O sujeito «Ich» vem primeiro, o verbo «komme» fica em segundo, e «aus Brasilien» completa a frase.'),
        lacuna('Er ___ aus Wien. (sein)', ['ist', 'bist', 'sind'], 'ist', 'Com «er», «sie» e «es», a forma de «sein» é «ist». A forma «bist» é só de «du».'),
        lacuna('Frau Becker, ___ Sie müde? (sein)', ['sind', 'seid', 'bist'], 'sind', 'O tratamento formal «Sie» usa a forma de «eles»: «sind». A forma «seid» é de «ihr» e «bist» é de «du».'),
        lacuna('Ihr ___ aus Brasilien. (kommen)', ['kommt', 'kommen', 'kommst'], 'kommt', 'Com «ihr», o verbo termina em «t»: «ihr kommt». O final «st» é de «du» e o final «en» é de «wir», «sie» e «Sie».'),
        lacuna('Ich ___ nicht müde. (sein)', ['bin', 'bist', 'ist'], 'bin', 'A frase negativa mantém a forma de «sein»: com «ich» é «bin». O «nicht» vem depois do verbo.'),
        mc('O feminino de «der Brasilianer» é:', ['die Brasilianerin', 'die Brasilianer', 'das Brasilianerin'], 'die Brasilianerin', 'Acrescenta-se «in» ao masculino para formar o feminino. O artigo da mulher é «die».'),
        mc('«Sein» significa:', ['ser e estar', 'só ser', 'só estar'], 'ser e estar', 'O alemão tem um só verbo para os dois sentidos. O contexto mostra se é «ser» ou «estar».'),
        mc('«Ich bin müde» significa:', ['Estou cansado', 'Sou cansado', 'Tenho cansaço'], 'Estou cansado', 'Aqui o «sein» faz papel de «estar», porque «müde» é um estado passageiro. Em português não se diz «sou cansado».'),
        mc('Com «Sie», o senhor, o verbo «kommen» fica:', ['kommen', 'kommst', 'kommt'], 'kommen', 'O «Sie» formal tem o verbo igual ao de «sie», eles: «kommen». As formas «kommst» e «kommt» são de «du» e de «er» ou «ihr».'),
        ordem('Ordene: «Como você se chama?»', ['du', 'Wie', 'heißt'], 'Wie heißt du?', 'A palavra de pergunta «Wie» abre a frase, o verbo «heißt» fica em segundo, e o «du» vem depois.'),
        ouvir('Woher kommst du?', ['Woher kommst du?', 'Wie heißt du?', 'Wer bist du?'], 'Woher kommst du?', '«Woher» quer dizer de onde. É a pergunta sobre a origem, e começa com «vô-hér».'),
        ouvir('Sie sind aus Berlin.', ['Sie sind aus Berlin.', 'Sie ist aus Berlin.', 'Wir sind aus Berlin.'], 'Sie sind aus Berlin.', 'Você ouve «zi zint»: com «sie» no plural, ou com «Sie» formal, a forma é «sind». Em «Sie ist» você ouviria «zi ist».'),
        ouvir('Wie heißen Sie?', ['Wie heißen Sie?', 'Wie heißt du?', 'Woher kommen Sie?'], 'Wie heißen Sie?', 'A pergunta pelo nome termina em «zi», o tratamento formal. Com «du» o final seria «heißt du».'),
        ditado('Ich heiße Anna.', 'Escreva «Ich» e «heiße», com «ß». O verbo fica na segunda posição, logo depois do «ich».'),
        ditado('Wir sind glücklich.', 'Escreva «Wir» com «w» e «sind» com «d» no fim. O «glücklich» tem «ü» e termina em «ch» suave.'),
        livre('Escreva 4 frases: seu nome, de onde você vem, sua nacionalidade e como você está.', 'Ich heiße Anna. Ich komme aus Brasilien. Ich bin Brasilianerin. Ich bin glücklich.'),
        livre('Escreva como você pergunta o nome e a origem a um desconhecido, usando «Sie».', 'Wie heißen Sie? Woher kommen Sie?'),
        livre('Escreva 3 frases sobre uma pessoa que você conhece: como ela se chama, de onde vem e que idioma fala.', 'Sie heißt Maria. Sie kommt aus Portugal. Sie spricht Portugiesisch.'),
      ]),
      producao(5, 'Grave-se por cerca de 30 segundos: «Hallo! Ich heiße … Ich komme aus … Ich bin … Ich spreche … Freut mich!». Depois grave a versão formal, para um desconhecido: «Guten Tag! Ich heiße … Woher kommen Sie?».'),
    ]),
  ],
});
