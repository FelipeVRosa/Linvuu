import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 5, titulo: 'Substantivos, artigos e profissões', nivel: 'a1',
  objetivo: 'Reconhecer o gênero e o número dos substantivos, usar os artigos definidos, indefinidos e contraídos, e falar de profissões com «il est» e «c\'est».',
  nota: 'Você nomeia pessoas e coisas com o artigo certo e diz o que as pessoas fazem. Próxima aula: família e possessivos.',
  sessoes: [
    sessao('S1', 'Gênero e número dos substantivos', [
      revisao(5, 'Diga a sua idade, o seu país e onde mora, em três frases, em voz alta.'),
      palavras(8, [
        ['le livre', 'lê livr', 'o livro', ''], ['la table', 'la tabl', 'a mesa', ''], ['le garçon', 'lê garsõ', 'o menino, o garçom', ''], ['la fille', 'la fiy', 'a menina, a filha', ''], ['l\'ami, l\'amie', 'lami', 'o amigo, a amiga', ''], ['le professeur', 'lê profesör', 'o professor', ''], ['la maison', 'la mezõ', 'a casa', ''], ['la voiture', 'la vuatür', 'o carro', ''],
      ]),
      gramatica(12, 'Todo substantivo tem gênero', 'PASSO 1: em francês, todo substantivo é masculino ou feminino. Aprenda cada palavra sempre com o artigo: «le livre», «la table». PASSO 2: para pessoas, o gênero segue o sexo: «un ami / une amie». Muitas profissões e nacionalidades mudam na terminação: «étudiant / étudiante», «vendeur / vendeuse», «boulanger / boulangère». PASSO 3: para coisas, o gênero é arbitrário, mas as terminações ajudam. Costumam ser femininas: «-tion» (la nation), «-té» (la liberté), «-ure» (la voiture), «-ette» (la chaussette). Costumam ser masculinas: «-ment» (le moment), «-age» (le voyage), «-eau» (le bateau), «-isme» (le tourisme). PASSO 4: algumas palavras têm gênero diferente do português: «la dent» (o dente), «la mer» (o mar), «le pont» (a ponte). PASSO 5: para o plural, acrescente «-s», que não se pronuncia: «le livre → les livres». Quem marca o plural no ouvido é o artigo («le» → «les»). Palavras em «-s», «-x», «-z» não mudam: «le bras → les bras». Palavras em «-eau» e «-eu» ganham «-x»: «le bateau → les bateaux». Palavras em «-al» viram «-aux»: «le journal → les journaux».', {
        tag: 'Substantivos',
        comparacao: 'o português também tem gênero, e muitas palavras coincidem («la fleur» é «a flor»). Mas algumas trocam de gênero, e o francês exige o artigo na frente de quase todo substantivo.',
        tabela: [
          { regra: 'masculino / feminino de pessoa', singular: 'un ami / une amie', plural: 'des amis / des amies' }, { regra: 'plural em -s (mudo)', singular: 'le livre', plural: 'les livres' }, { regra: 'não muda (-s, -x, -z)', singular: 'le bras', plural: 'les bras' },
          { regra: '-eau → -eaux', singular: 'le bateau', plural: 'les bateaux' }, { regra: '-al → -aux', singular: 'le journal', plural: 'les journaux' },
        ],
        erros: [['la livre', 'le livre', 'Aprenda cada palavra com o artigo.'], ['une voiture → un voiture', 'une voiture', '«voiture» é feminino.'], ['les journals', 'les journaux', '«-al» vira «-aux» no plural.'], ['les bateaus', 'les bateaux', '«-eau» ganha «-x».']],
      }),
      producao(5, 'Diga dez substantivos que você vê ao redor, sempre com o artigo: «le… la… un… une…»'),
    ]),
    sessao('S2', 'Artigos definidos, indefinidos e contraídos', [
      revisao(4, 'Passe para o plural: «le livre, la table, l\'ami, le bateau, le journal».'),
      palavras(6, [
        ['le, la, l\', les', 'lê, la, l, lê', 'o, a, os, as', ''], ['un, une, des', 'ẽ, ün, dê', 'um, uma, uns, umas', ''], ['au, à la, à l\', aux', 'o, a la, a l, ô', 'ao, à, aos, às', ''], ['du, de la, de l\', des', 'dü, de la, de l, dê', 'do, da, dos, das', ''], ['le café', 'lê kafé', 'o café', ''], ['des amis', 'dê zami', 'amigos', ''],
      ]),
      gramatica(12, 'Le, un, au, du: os artigos', 'PASSO 1: artigos definidos: «le» (masculino), «la» (feminino), «l\'» (diante de vogal ou «h» mudo), «les» (plural). Usam-se para coisas conhecidas ou em geral: «Le café est chaud.» «J\'aime le café.» Em português, «gosto de café» não leva artigo; em francês, depois de «aimer», «adorer» e «détester» o artigo é obrigatório. PASSO 2: artigos indefinidos: «un» (masculino), «une» (feminino), «des» (plural). Servem para algo não identificado: «J\'ai un frère.» «J\'ai des amis.» O «des» não tem equivalente em português: «des amis» = «amigos». PASSO 3: contrações: «à + le = au», «à + les = aux», «de + le = du», «de + les = des». Com «la» e «l\'» não há contração: «à la gare», «de l\'hôtel». Exemplos: «Je vais au café.» «Je parle du film.» «Je parle de la ville.» PASSO 4: na negação, «un», «une» e «des» viram «de» (ou «d\'»): «J\'ai un frère» → «Je n\'ai pas de frère.» Exceção: com «être» não muda: «Ce n\'est pas un livre.» PASSO 5: «du», «de la» e «de l\'» também funcionam como artigos partitivos («un pouco de»): isso é assunto da aula 9.', {
        tag: 'Artigos',
        comparacao: 'em português também há contrações («do», «no», «ao»), mas elas aparecem no lugar do artigo; o francês usa «au», «aux», «du», «des» do mesmo jeito. A grande diferença é o artigo obrigatório antes de substantivos gerais: «J\'aime le café» (e não «J\'aime café»).',
        tabela: [
          { artigo: 'definido', masculino: 'le livre', feminino: 'la table', plural: 'les livres' }, { artigo: 'indefinido', masculino: 'un livre', feminino: 'une table', plural: 'des livres' }, { artigo: 'à + definido', masculino: 'au café', feminino: 'à la gare', plural: 'aux États-Unis' }, { artigo: 'de + definido', masculino: 'du film', feminino: 'de la ville', plural: 'des amis (de les)' },
        ],
        erros: [['J\'aime café.', 'J\'aime le café.', 'O artigo é obrigatório.'], ['Je vais à le café.', 'Je vais au café.', '«à + le = au».'], ['Je n\'ai pas une voiture.', 'Je n\'ai pas de voiture.', 'Depois da negação, «un/une/des» viram «de».'], ['J\'ai amis.', 'J\'ai des amis.', '«Des» é obrigatório.']],
      }),
      producao(8, 'Diga oito frases com artigos: «J\'aime le/la/les…», «J\'ai un/une/des…», «Je vais au/à la/aux…», «Je n\'ai pas de…»'),
    ]),
    sessao('S3', 'C\'est, il est e as profissões', [
      revisao(4, 'Diga o que você gosta e não gosta, com «aimer» e o artigo definido: «J\'aime… Je n\'aime pas…»'),
      palavras(5, [
        ['professeur', 'profesör', 'professor, professora', ''], ['médecin', 'médsẽ', 'médico, médica', ''], ['étudiant', 'étüdyã', 'estudante', ''], ['ingénieur', 'ẽjenyör', 'engenheiro, engenheira', ''], ['avocat', 'avoka', 'advogado', ''],
      ]),
      gramatica(8, 'Dizer a profissão: il est ou c\'est?', 'PASSO 1: para dizer a profissão, use «il est» ou «elle est» sem artigo: «Il est médecin.» «Elle est professeure.» PASSO 2: com artigo, use «c\'est»: «C\'est un médecin.» «C\'est une amie.» PASSO 3: «c\'est» serve para identificar e apresentar: «C\'est Paul.» «C\'est mon professeur.» PASSO 4: «il est» e «elle est» servem para descrever alguém que já sabemos quem é: «Il est grand.» «Elle est contente.» PASSO 5: se há adjetivo junto à profissão, volte ao «c\'est»: «C\'est un bon médecin.» PASSO 6: muitas profissões mudam no feminino: «-eur → -euse» (vendeur, vendeuse), «-ien → -ienne» (technicien, technicienne), «-teur → -trice» (acteur, actrice). Palavras em «-e» não mudam: «un / une dentiste». PASSO 7: pergunte: «Qu\'est-ce que vous faites dans la vie ?» ou «Vous travaillez dans quoi ?»', {
        tag: 'C\'est et il est',
        comparacao: 'em português dizemos «ele é médico» e «é um bom médico». Em francês, a escolha está no artigo: sem artigo, «il est médecin»; com artigo, «c\'est un médecin».',
        tabela: [
          { situacao: 'profissão (sem artigo)', estrutura: 'il / elle est + profissão', exemplo: 'Elle est professeure.' }, { situacao: 'com artigo', estrutura: 'c\'est + un / une + substantivo', exemplo: 'C\'est un médecin.' }, { situacao: 'com adjetivo', estrutura: 'c\'est un bon…', exemplo: 'C\'est un bon avocat.' }, { situacao: 'apresentar', estrutura: 'c\'est + nome', exemplo: 'C\'est Paul.' }, { situacao: 'descrever quem já conhecemos', estrutura: 'il / elle est + adjetivo', exemplo: 'Il est grand.' },
        ],
        erros: [['Il est un médecin.', 'Il est médecin. / C\'est un médecin.', 'Sem artigo com «il est»; com artigo use «c\'est».'], ['C\'est médecin.', 'Il est médecin.', 'Sem artigo, a estrutura é «il est».'], ['Elle est une professeure.', 'Elle est professeure.', 'Sem artigo depois de «elle est».'], ['Il est mon professeur.', 'C\'est mon professeur.', 'Com possessivo, use «c\'est».']],
      }),
      dialogo(8, 'Que faites-vous ? / O que você faz?', 'Camille e Antoine falam do trabalho.', [
        ['Camille', 'Antoine, tu travailles où ?', 'Antoine, onde você trabalha?'], ['Antoine', 'Je suis médecin à l\'hôpital. Et toi ?', 'Sou médico no hospital. E você?'], ['Camille', 'Moi, je suis professeure. Mon ami Paul est ingénieur.', 'Eu sou professora. Meu amigo Paul é engenheiro.'], ['Antoine', 'C\'est un bon travail ?', 'É um bom trabalho?'], ['Camille', 'Oui, j\'aime beaucoup mon travail. C\'est difficile, mais c\'est intéressant.', 'Sim, gosto muito do meu trabalho. É difícil, mas é interessante.'], ['Antoine', 'Moi aussi, j\'aime mon travail. C\'est une belle vie !', 'Eu também gosto do meu trabalho. É uma bela vida!'],
      ]),
      producao(5, 'Diga a sua profissão (ou a que você quer ter) e a de três pessoas, usando «il est», «elle est» e «c\'est un/une».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 5', [
      revisao(5, 'Diga cinco substantivos com artigo, no singular e no plural.'),
      exercicios(20, [
        ouvir('Je vais au café', ['Je vais au café', 'Je vais à la gare', 'Je vais aux États-Unis'], 'Je vais au café', 'Ouça «au».'), ouvir('Elle est professeure', ['Elle est professeure', 'C\'est une professeure', 'Il est professeur'], 'Elle est professeure', 'Ouça «elle est».'), ouvir('Je n\'ai pas de voiture', ['Je n\'ai pas de voiture', 'J\'ai une voiture', 'Je n\'ai pas la voiture'], 'Je n\'ai pas de voiture', 'Ouça «pas de».'),
        ditado('J\'aime le café', 'Escreva: J\'aime le café.'), ditado('Il est médecin', 'Escreva: Il est médecin.'), ditado('C\'est un bon avocat', 'Escreva: C\'est un bon avocat.'),
        mc('Qual é o plural de «le journal»?', ['les journaux', 'les journals', 'les journales'], 'les journaux', '«-al» vira «-aux».'), mc('Qual frase está correta?', ['J\'aime le café.', 'J\'aime café.', 'J\'aime du café.'], 'J\'aime le café.', 'Depois de «aimer», artigo definido.'), mc('«à + le» forma…', ['au', 'à le', 'du'], 'au', 'Contração obrigatória.'), mc('Como dizer «Ele é médico»?', ['Il est médecin.', 'Il est un médecin.', 'C\'est médecin.'], 'Il est médecin.', 'Sem artigo com «il est».'),
        lacuna('Je n\'ai pas ___ frère. (um)', ['de', 'un', 'le'], 'de', 'Depois da negação, «un» vira «de».'), lacuna('Je parle ___ film. (do)', ['du', 'de le', 'des'], 'du', '«de + le = du».'), lacuna('___ est un bon médecin. (É)', ['C\'', 'Il', 'Elle'], 'C\'', 'Com artigo, «c\'est».'), lacuna('J\'ai ___ amis. (amigos)', ['des', 'les', 'de'], 'des', '«Des» é obrigatório.'),
        ordem('Ordene: «Elle est professeure à l\'école.»', ['Elle', 'est', 'professeure', 'à', 'l\'école'], 'Elle est professeure à l\'école.', 'Profissão sem artigo.'), ordem('Ordene: «Je ne parle pas du film.»', ['Je', 'ne', 'parle', 'pas', 'du', 'film'], 'Je ne parle pas du film.', 'ne… pas, du = de + le.'),
        livre('Escreva em francês: Eu sou estudante. Eu gosto do café. Eu não tenho carro.', 'Je suis étudiant. J\'aime le café. Je n\'ai pas de voiture.'),
        lacuna('J\'ai ___ ami brésilien. (um)', ['une', 'des', 'un'], 'un', '«Ami» é masculino: «un ami».'),
        lacuna('Elle parle ___ professeur. (do)', ['du', 'de la', 'des'], 'du', '«De + le» vira «du».'),
        lacuna('Les ___ sont sur la table. (os jornais)', ['journals', 'journaux', 'journales'], 'journaux', 'Palavras em «-al» fazem o plural em «-aux».'),
        lacuna('Elle n\'a pas ___ maison. (uma)', ['une', 'des', 'de'], 'de', 'Na negação, «un/une/des» viram «de».'),
        lacuna('J\'aime ___ maison de Paul. (a)', ['la', 'le', 'les'], 'la', '«Maison» é feminino, e depois de «aimer» o artigo é obrigatório.'),
        mc('Qual é o plural de «le bateau»?', ['les bateaus', 'les bateaux', 'les bateau'], 'les bateaux', 'Palavras em «-eau» ganham «-x».'),
        mc('Qual terminação costuma indicar um substantivo feminino?', ['-ment', '-age', '-tion'], '-tion', '«-tion» é feminino: «la nation»; «-ment» e «-age» são masculinos.'),
        mc('Qual frase está correta?', ['C\'est un médecin.', 'Il est un médecin.', 'C\'est médecin.'], 'C\'est un médecin.', 'Com artigo, usa-se «c\'est»; sem artigo, «il est».'),
        mc('Qual é a negação correta de «J\'ai des amis»?', ['Je n\'ai pas des amis.', 'Je n\'ai pas d\'amis.', 'Je n\'ai pas amis.'], 'Je n\'ai pas d\'amis.', 'Na negação, «des» vira «de» (d\' diante de vogal).'),
        ordem('Ordene: «Nós falamos dos amigos de Paul.»', ['Nous', 'parlons', 'des', 'amis', 'de', 'Paul'], 'Nous parlons des amis de Paul.', '«De + les» vira «des».'),
        ordem('Ordene: «Isto não é um livro.»', ['Ce', 'n\'est', 'pas', 'un', 'livre'], 'Ce n\'est pas un livre.', 'Com «être», o artigo não muda na negação.'),
        livre('Escreva em francês: Os livros são do professor. É um bom médico.', 'Les livres sont du professeur. C\'est un bon médecin.'),
        livre('Escreva em francês: Ela é médica. Eu tenho amigos. Eu não tenho casa.', 'Elle est médecin. J\'ai des amis. Je n\'ai pas de maison.'),
      ]),
      producao(5, 'Apresente em voz alta quatro pessoas imaginárias e diga a profissão de cada uma.'),
    ]),
  ],
});
