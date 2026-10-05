import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 2, titulo: 'Quem sou eu', nivel: 'a1',
  objetivo: 'Apresentar-se, perguntar o nome e a origem e usar «sein» no presente, com «du», «ihr» e «Sie».',
  nota: 'Você se apresenta e diz de onde é. Próxima aula: os substantivos e os artigos.',
  sessoes: [
    sessao('S1', 'Ich heiße…', [
      revisao(5, 'Leia em voz alta as saudações da aula anterior e as combinações «ei, ie, sch, ch».'),
      palavras(10, [
        ['heißen', 'háissen', 'chamar-se', 'to be called'], ['der Name', 'der náme', 'nome', 'name'], ['der Vorname', 'der fórname', 'nome próprio', 'first name'], ['der Nachname', 'der nárrname', 'sobrenome', 'last name'], ['kommen', 'kómen', 'vir', 'to come'],
        ['aus', 'aus', 'de (origem)', 'from'], ['woher', 'vôher', 'de onde', 'where from'], ['wer', 'ver', 'quem', 'who'], ['wie', 'vi', 'como', 'how'], ['und', 'unt', 'e', 'and'],
      ]),
      gramatica(10, 'A ordem da frase e as primeiras perguntas', 'O verbo conjugado fica sempre na SEGUNDA posição da frase afirmativa e das perguntas com palavra interrogativa: «Ich heiße Anna.», «Wie heißt du?», «Woher kommst du?». A pergunta de sim ou não começa pelo verbo: «Heißt du Anna?». Os pronomes pessoais são: ich, du, er, sie, es, wir, ihr, sie e Sie (formal).', {
        tag: 'Frase',
        comparacao: 'em português o verbo também vem logo depois do sujeito, mas o alemão fixa o verbo na segunda posição mesmo quando outro termo abre a frase.',
        tabela: [
          { pergunta: 'Wie heißt du?', resposta: 'Ich heiße Anna.', pt: 'Como você se chama? Eu me chamo Anna.' }, { pergunta: 'Wie heißen Sie?', resposta: 'Ich heiße Müller.', pt: 'Como o senhor se chama? Eu me chamo Müller.' },
          { pergunta: 'Woher kommst du?', resposta: 'Ich komme aus Brasilien.', pt: 'De onde você vem? Venho do Brasil.' }, { pergunta: 'Wer ist das?', resposta: 'Das ist Ben.', pt: 'Quem é este? É o Ben.' },
        ],
        erros: [['Ich Anna heiße.', 'Ich heiße Anna.', 'O verbo conjugado fica na segunda posição.']],
      }),
      producao(5, 'Diga: «Ich heiße … Ich komme aus Brasilien.» Depois pergunte: «Wie heißt du? Woher kommst du?»'),
    ]),
    sessao('S2', 'Sein: ser e estar', [
      revisao(5, 'Escreva os pronomes pessoais em alemão: eu, tu, ele, ela, nós, vós, eles.'),
      palavras(6, [
        ['müde', 'múde', 'cansado', 'tired'], ['glücklich', 'glúkliç', 'feliz', 'happy'], ['hier', 'hir', 'aqui', 'here'], ['da', 'da', 'lá, ali', 'there'], ['auch', 'aurr', 'também', 'also'], ['nicht', 'niçt', 'não', 'not'],
      ]),
      gramatica(14, 'Sein: ser e estar, e o tratamento du, ihr e Sie', '«Sein» é ao mesmo tempo «ser» e «estar»: «Ich bin Brasilianer» (sou brasileiro), «Ich bin müde» (estou cansado). É irregular, e é um dos verbos mais importantes. O tratamento: «du» (você, uma pessoa próxima: amigo, família, criança), «ihr» (vocês, várias pessoas próximas) e «Sie» (o senhor, a senhora, os senhores: formal, para um ou vários desconhecidos), sempre com S maiúsculo. Com «Sie», o verbo fica na 3ª pessoa do plural: «Sie sind».', {
        tag: 'Verbos',
        comparacao: 'o português tem dois verbos («ser» e «estar»). O alemão tem um só, «sein», e o contexto diz qual dos dois se quer dizer.',
        tabelas: [
          { titulo: 'sein no presente', linhas: [
            { pronome: 'ich', sein: 'bin', exemplo: 'Ich bin Brasilianer.' }, { pronome: 'du', sein: 'bist', exemplo: 'Du bist müde.' }, { pronome: 'er / sie / es', sein: 'ist', exemplo: 'Er ist hier.' },
            { pronome: 'wir', sein: 'sind', exemplo: 'Wir sind glücklich.' }, { pronome: 'ihr', sein: 'seid', exemplo: 'Ihr seid hier.' }, { pronome: 'sie / Sie', sein: 'sind', exemplo: 'Sie sind aus Berlin.' },
          ] },
          { titulo: 'du, ihr ou Sie?', linhas: [
            { pronome: 'du', significado: 'uma pessoa próxima', exemplo: 'Wie heißt du?' }, { pronome: 'ihr', significado: 'várias pessoas próximas', exemplo: 'Woher kommt ihr?' }, { pronome: 'Sie', significado: 'uma ou várias pessoas, formal', exemplo: 'Wie heißen Sie?' },
          ] },
        ],
      }),
      producao(5, 'Diga: «Ich bin müde. Du bist hier. Wir sind glücklich.» Depois pergunte a um amigo e a um desconhecido como se chamam.'),
    ]),
    sessao('S3', 'Países, nacionalidades e diálogo', [
      revisao(5, 'Escreva as 6 formas de «sein» de memória.'),
      palavras(8, [
        ['Brasilien', 'brasílien', 'Brasil', 'Brazil'], ['Deutschland', 'dóitxlant', 'Alemanha', 'Germany'], ['Österreich', 'österraiç', 'Áustria', 'Austria'], ['die Schweiz', 'di xvaits', 'Suíça', 'Switzerland'],
        ['Portugal', 'pórtugal', 'Portugal', 'Portugal'], ['Spanien', 'xpánien', 'Espanha', 'Spain'], ['Frankreich', 'fránkraiç', 'França', 'France'], ['Italien', 'itálien', 'Itália', 'Italy'],
      ]),
      gramatica(8, 'Nacionalidades', 'Para dizer a nacionalidade, o feminino costuma acrescentar -in ao masculino: der Brasilianer → die Brasilianerin. A maioria dos países não leva artigo: «Ich komme aus Brasilien» (exceção que você verá mais adiante: «die Schweiz»). Os idiomas também não: «Ich spreche Deutsch» (sprechen: ich spreche, du sprichst — irregular).', {
        tag: 'Substantivos',
        tabela: [
          { masculino: 'der Brasilianer', feminino: 'die Brasilianerin', pt: 'brasileiro / brasileira' }, { masculino: 'der Deutsche', feminino: 'die Deutsche', pt: 'alemão / alemã' }, { masculino: 'der Portugiese', feminino: 'die Portugiesin', pt: 'português / portuguesa' },
          { masculino: 'der Spanier', feminino: 'die Spanierin', pt: 'espanhol / espanhola' }, { masculino: 'der Franzose', feminino: 'die Französin', pt: 'francês / francesa' }, { masculino: 'der Italiener', feminino: 'die Italienerin', pt: 'italiano / italiana' },
          { masculino: 'der Österreicher', feminino: 'die Österreicherin', pt: 'austríaco / austríaca' }, { masculino: 'der Schweizer', feminino: 'die Schweizerin', pt: 'suíço / suíça' },
        ],
        exemplos: [['Ich komme aus Brasilien. Ich bin Brasilianer.', 'Venho do Brasil. Sou brasileiro.'], ['Sie kommt aus Deutschland. Sie ist Deutsche.', 'Ela vem da Alemanha. Ela é alemã.']],
      }),
      dialogo(9, 'Wer bist du? / Quem é você?', 'Dois estudantes se conhecem num curso de alemão.', [
        ['Lara', 'Hallo! Ich heiße Lara. Und du?', 'Oi! Eu me chamo Lara. E você?'], ['Tom', 'Hallo, Lara! Ich bin Tom. Woher kommst du?', 'Oi, Lara! Eu sou o Tom. De onde você vem?'], ['Lara', 'Ich komme aus Deutschland, aus Berlin. Und du?', 'Venho da Alemanha, de Berlim. E você?'],
        ['Tom', 'Ich komme aus Brasilien. Ich bin Brasilianer.', 'Venho do Brasil. Sou brasileiro.'], ['Lara', 'Sprichst du Deutsch?', 'Você fala alemão?'], ['Tom', 'Ja, ein bisschen. Sprichst du Portugiesisch?', 'Sim, um pouco. Você fala português?'],
        ['Lara', 'Nein, nur Deutsch und Englisch.', 'Não, só alemão e inglês.'], ['Tom', 'Das ist okay!', 'Tudo bem!'], ['Lara', 'Freut mich, Tom!', 'Muito prazer, Tom!'],
      ]),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: seu nome, de onde você vem, sua nacionalidade e como você está.'),
      exercicios(20, [
        mc('Em «Ich heiße Anna», o verbo «heiße» está:', ['na 2ª posição', 'na 1ª posição', 'no fim'], 'na 2ª posição', 'O verbo conjugado fica na segunda posição.'),
        ordem('Ordene: «Eu venho do Brasil.»', ['Ich', 'komme', 'aus', 'Brasilien'], 'Ich komme aus Brasilien.', 'Sujeito + verbo + complemento.'),
        lacuna('Ich ___ Brasilianer. (sein)', ['bin', 'bist', 'ist'], 'bin', 'ich → bin.'),
        lacuna('Du ___ müde. (sein)', ['bist', 'bin', 'ist'], 'bist', 'du → bist.'),
        lacuna('Wir ___ glücklich. (sein)', ['sind', 'seid', 'ist'], 'sind', 'wir → sind.'),
        lacuna('Ihr ___ hier. (sein)', ['seid', 'sind', 'bist'], 'seid', 'ihr → seid.'),
        mc('Para falar com um desconhecido (o senhor), use:', ['Sie', 'du', 'ihr'], 'Sie', 'Tratamento formal.'),
        mc('Para falar com um amigo, use:', ['du', 'Sie', 'er'], 'du', 'Tratamento informal.'),
        mc('O feminino de «der Brasilianer» é:', ['die Brasilianerin', 'die Brasilianer', 'das Brasilianerin'], 'die Brasilianerin', 'Feminino: -in.'),
        ouvir('Woher kommst du?', ['Woher kommst du?', 'Wie heißt du?', 'Wer bist du?'], 'Woher kommst du?', '«woher» = de onde.'),
        ditado('Ich heiße Anna', 'Ich + heiße.'),
        mc('«Sein» significa:', ['ser e estar', 'só ser', 'só estar'], 'ser e estar', 'Um só verbo para os dois.'),
        ordem('Ordene: «Como você se chama?»', ['Wie', 'heißt', 'du'], 'Wie heißt du?', 'Palavra interrogativa + verbo + sujeito.'),
        mc('«Ich bin müde» significa:', ['Estou cansado', 'Sou cansado', 'Tenho cansaço'], 'Estou cansado', 'sein = estar.'),
        livre('Escreva 4 frases: seu nome, de onde você vem, sua nacionalidade e como você está.', 'Ich heiße Anna. Ich komme aus Brasilien. Ich bin Brasilianerin. Ich bin glücklich.'),
      ]),
      producao(5, 'Grave-se: «Hallo! Ich heiße … Ich komme aus … Ich bin … Freut mich!»'),
    ]),
  ],
});
