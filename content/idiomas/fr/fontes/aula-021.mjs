import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 21, titulo: 'Pronomes de objeto indireto e dois pronomes', nivel: 'a2',
  objetivo: 'Usar «lui» e «leur» para «a ele/a ela» e «a eles/a elas», reconhecer os verbos com «à» e combinar dois pronomes em frases simples.',
  nota: 'Você substitui pessoas e coisas sem repetir. Próxima aula: o futuro simples.',
  sessoes: [
    sessao('S1', 'Lui e leur', [
      revisao(5, 'Conte em voz alta uma pequena história com cenário e acontecimento.'),
      palavras(8, [
        ['donner', 'doné', 'dar', ''], ['dire', 'dir', 'dizer', ''], ['demander', 'dãmãdé', 'pedir, perguntar', ''], ['répondre', 'repõdr', 'responder', ''], ['téléphoner', 'telefoné', 'telefonar', ''], ['offrir', 'ofrir', 'oferecer, presentear', ''], ['envoyer', 'ãvuaié', 'enviar', ''], ['apporter', 'aporté', 'trazer', ''],
      ]),
      gramatica(12, 'Je lui donne un livre', 'PASSO 1: o objeto indireto responde a «a quem?»: «Je donne un livre à Marie.» PASSO 2: para não repetir a pessoa, use «lui» (a ele, a ela) e «leur» (a eles, a elas): «Je lui donne un livre.» «Je leur donne un livre.» PASSO 3: «me, te, nous, vous» servem para objeto direto e indireto: «Il me donne un livre.» «Je te téléphone.» «Elle nous répond.» PASSO 4: a posição é a mesma dos outros pronomes: antes do verbo: «Je lui parle.» «Je ne lui parle pas.» «Je vais lui parler.» PASSO 5: no passé composé, antes do auxiliar: «Je lui ai donné un livre.» PASSO 6: o particípio NÃO concorda com o objeto indireto: «Je lui ai parlé.» (sem «e») PASSO 7: verbos que pedem «à» + pessoa: «donner, dire, demander, répondre, téléphoner, offrir, envoyer, parler, écrire, sourire». PASSO 8: com «penser à» e «s\'intéresser à» use «à + tônico»: «Je pense à lui.» «Je m\'intéresse à elle.»', {
        tag: 'Pronomes',
        comparacao: 'em português dizemos «dou um livro a ela» ou «dou-lhe um livro». O francês usa «lui» antes do verbo: «je lui donne». Para mais de uma pessoa, «leur», sem «s»: «je leur donne».',
        tabela: [
          { pronome: 'me', funcao: 'a mim', exemplo: 'Il me donne un livre.' }, { pronome: 'te', funcao: 'a você', exemplo: 'Je te téléphone.' }, { pronome: 'lui', funcao: 'a ele / a ela', exemplo: 'Je lui parle.' }, { pronome: 'nous', funcao: 'a nós', exemplo: 'Elle nous répond.' }, { pronome: 'vous', funcao: 'a vocês', exemplo: 'Je vous écris.' }, { pronome: 'leur', funcao: 'a eles / a elas', exemplo: 'Je leur donne un cadeau.' },
        ],
        erros: [['Je parle à lui.', 'Je lui parle.', 'Pronome antes do verbo.'], ['Je donne leur un livre.', 'Je leur donne un livre.', 'Antes do verbo.'], ['Je leurs parle.', 'Je leur parle.', '«Leur» não leva «s».'], ['Je lui ai parlée.', 'Je lui ai parlé.', 'Objeto indireto: sem concordância.']],
      }),
      producao(5, 'Responda em voz alta com «lui» ou «leur»: «Tu parles à ta mère ? Tu donnes un cadeau à tes amis ? Tu téléphones à ton frère ?»'),
    ]),
    sessao('S2', 'Direto ou indireto?', [
      revisao(4, 'Substitua: «Je donne le livre à Paul. Je parle à Marie et à Julie.»'),
      palavras(6, [
        ['écrire', 'ekrir', 'escrever', ''], ['sourire', 'surir', 'sorrir', ''], ['plaire', 'plér', 'agradar', ''], ['rendre', 'rãdr', 'devolver', ''], ['prêter', 'prété', 'emprestar', ''], ['montrer', 'mõtré', 'mostrar', ''],
      ]),
      gramatica(12, 'Escolher o pronome certo', 'PASSO 1: pergunte «quê?» ou «quem?» sem preposição: objeto direto (le, la, les). Pergunte «a quem?»: objeto indireto (lui, leur). PASSO 2: «Je vois Paul» (vejo quem?) → «Je le vois.» «Je parle à Paul» (falo a quem?) → «Je lui parle.» PASSO 3: verbos que no português pedem outra preposição: «écouter» (ouvir alguém → direto: «Je l\'écoute»), «attendre» (esperar alguém → direto: «Je l\'attends»), «regarder» (olhar alguém → direto), «chercher» (procurar → direto). PASSO 4: verbos que pedem «à» no francês: «téléphoner à», «répondre à», «obéir à», «ressembler à», «plaire à». PASSO 5: «plaire»: «Ça me plaît.» «Ça lui plaît.» «Ce film leur plaît.» PASSO 6: para presentes e empréstimos: «Je lui prête mon livre.» «Je leur montre la ville.» PASSO 7: no imperativo afirmativo, o pronome vai depois com hífen: «Donne-lui le livre !» «Dis-lui bonjour !» PASSO 8: no imperativo negativo, antes: «Ne lui donne pas ça.»', {
        tag: 'Pronomes',
        comparacao: 'em português «escutar alguém» e «esperar alguém» pedem objeto direto; «telefonar a alguém» pede «a». O francês é igual: «écouter» e «attendre» sem «à»; «téléphoner à» e «répondre à» com «à». Muitos brasileiros erram e escrevem «je lui attends».',
        tabela: [
          { verbo: 'écouter qqn', objeto: 'direto', exemplo: 'Je l\'écoute.' }, { verbo: 'attendre qqn', objeto: 'direto', exemplo: 'Je l\'attends.' }, { verbo: 'regarder qqn', objeto: 'direto', exemplo: 'Je la regarde.' }, { verbo: 'téléphoner à qqn', objeto: 'indireto', exemplo: 'Je lui téléphone.' }, { verbo: 'répondre à qqn', objeto: 'indireto', exemplo: 'Je lui réponds.' }, { verbo: 'plaire à qqn', objeto: 'indireto', exemplo: 'Ça lui plaît.' },
        ],
        erros: [['Je lui attends.', 'Je l\'attends.', '«Attendre» = objeto direto.'], ['Je lui écoute.', 'Je l\'écoute.', '«Écouter» = objeto direto.'], ['Je l\'ai téléphoné.', 'Je lui ai téléphoné.', '«Téléphoner à».'], ['Donne le lui le livre.', 'Donne-lui le livre.', 'Imperativo com hífen.']],
      }),
      producao(8, 'Responda em voz alta com pronomes: «Tu écoutes ta mère ? Tu lui téléphones ? Tu attends tes amis ? Tu leur réponds ?»'),
    ]),
    sessao('S3', 'Dois pronomes juntos', [
      revisao(4, 'Substitua o objeto indireto: «Je donne un cadeau à Marie. Je parle à mes amis.»'),
      palavras(5, [
        ['le', 'lê', 'o (coisa)', ''], ['la', 'la', 'a (coisa)', ''], ['les', 'lê', 'os, as', ''], ['y', 'i', 'lá', ''], ['en', 'ã', 'disso', ''],
      ]),
      gramatica(8, 'Je le lui donne', 'PASSO 1: se há objeto direto (coisa) e objeto indireto (pessoa), os dois pronomes podem aparecer juntos. PASSO 2: com «me, te, nous, vous»: o indireto vem primeiro: «Il me le donne.» «Je te la montre.» PASSO 3: com «lui» ou «leur»: o direto vem primeiro: «Je le lui donne.» «Je la leur envoie.» PASSO 4: na negação, em volta do bloco: «Je ne le lui donne pas.» PASSO 5: no passé composé, antes do auxiliar: «Je le lui ai donné.» PASSO 6: no A2 basta reconhecer e usar as combinações mais comuns: «me le, te le, le lui, la lui, les lui, le leur». PASSO 7: não use três pronomes na mesma frase.', {
        tag: 'Pronomes',
        comparacao: 'em português dizemos «eu dou o livro a ela» ou «dou-lhe o livro»; juntar os dois («dou-lho») é raro. Em francês, o par «le lui», «la lui», «me le» é comum na fala e vale a pena reconhecer.',
        tabela: [
          { frase: 'Il me donne le livre.', com_pronomes: 'Il me le donne.' }, { frase: 'Je te montre la photo.', com_pronomes: 'Je te la montre.' }, { frase: 'Je donne le cadeau à Marie.', com_pronomes: 'Je le lui donne.' }, { frase: 'J\'envoie les lettres à mes amis.', com_pronomes: 'Je les leur envoie.' },
        ],
        erros: [['Il le me donne.', 'Il me le donne.', 'Com «me/te/nous/vous», o indireto vem primeiro.'], ['Je lui le donne.', 'Je le lui donne.', 'Com «lui/leur», o direto vem primeiro.'], ['Je ne le lui donne.', 'Je ne le lui donne pas.', 'Falta o «pas».'], ['J\'ai le lui donné.', 'Je le lui ai donné.', 'Pronomes antes do auxiliar.']],
      }),
      dialogo(8, 'Un cadeau / Um presente', 'Emma e Hugo preparam o aniversário da mãe.', [
        ['Emma', 'Tu as acheté un cadeau pour maman ?', 'Você comprou um presente para a mamãe?'], ['Hugo', 'Oui, je lui ai acheté un livre. Je le lui donne samedi.', 'Sim, comprei um livro para ela. Dou a ela no sábado.'], ['Emma', 'Moi, je lui prépare un gâteau. Tu peux m\'aider ?', 'Eu preparo um bolo para ela. Pode me ajudar?'], ['Hugo', 'Bien sûr. Je t\'apporte les œufs ?', 'Claro. Levo os ovos para você?'], ['Emma', 'Oui, apporte-les-moi demain, s\'il te plaît.', 'Sim, traga-os para mim amanhã, por favor.'], ['Hugo', 'D\'accord. Je te les apporte demain matin.', 'Combinado. Trago-os para você amanhã de manhã.'],
      ]),
      producao(5, 'Diga em voz alta o que você deu, mostrou e enviou a alguém, usando «le lui», «la lui» e «me le».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 21', [
      revisao(5, 'Responda: «Tu parles à ta mère ? Tu écoutes la radio ? Tu donnes le livre à Paul ?»'),
      exercicios(20, [
        ouvir('Je lui donne un livre', ['Je lui donne un livre', 'Je leur donne un livre', 'Je le donne un livre'], 'Je lui donne un livre', 'Ouça «lui».'), ouvir('Je le lui donne', ['Je le lui donne', 'Je lui le donne', 'Je la lui donne'], 'Je le lui donne', 'Ouça a ordem.'), ouvir('Je l\'attends', ['Je l\'attends', 'Je lui attends', 'Je leur attends'], 'Je l\'attends', 'Ouça «l\'attends».'),
        ditado('Je lui téléphone', 'Escreva: Je lui téléphone.'), ditado('Il me le donne', 'Escreva: Il me le donne.'), ditado('Je leur parle', 'Escreva: Je leur parle.'),
        mc('Qual frase está correta?', ['Je lui parle.', 'Je parle lui.', 'Je parle à lui.'], 'Je lui parle.', 'Pronome antes do verbo.'), mc('Qual frase está correta?', ['Je l\'écoute.', 'Je lui écoute.', 'Je leur écoute.'], 'Je l\'écoute.', '«Écouter» = direto.'), mc('Qual frase está correta?', ['Je leur ai téléphoné.', 'Je leurs ai téléphoné.', 'Je les ai téléphoné.'], 'Je leur ai téléphoné.', '«Leur» sem «s».'), mc('Qual frase está correta?', ['Je le lui donne.', 'Je lui le donne.', 'Je donne le lui.'], 'Je le lui donne.', 'Direto antes de «lui».'),
        lacuna('Je ___ donne un cadeau. (a ela)', ['lui', 'leur', 'la'], 'lui', 'Indireto.'), lacuna('Je ___ téléphone. (a eles)', ['leur', 'lui', 'les'], 'leur', 'Plural indireto.'), lacuna('Il ___ le donne. (a mim)', ['me', 'moi', 'je'], 'me', 'Antes de «le».'), lacuna('Je ___ attends. (ela)', ['l\'', 'lui', 'leur'], 'l\'', 'Objeto direto.'),
        ordem('Ordene: «Je ne lui parle pas.»', ['Je', 'ne', 'lui', 'parle', 'pas'], 'Je ne lui parle pas.', 'ne + pronome + verbo + pas.'), ordem('Ordene: «Je le lui ai donné.»', ['Je', 'le', 'lui', 'ai', 'donné'], 'Je le lui ai donné.', 'Pronomes antes do auxiliar.'),
        livre('Escreva em francês: Eu dou um livro a Marie. Eu lhe dou um livro. Eu o dou a ela.', 'Je donne un livre à Marie. Je lui donne un livre. Je le lui donne.'),
        lacuna('Je ___ écris une lettre. (a ele)', ['lui', 'leur', 'l\''], 'lui', 'Objeto indireto singular: «lui».'),
        lacuna('Il ___ répond. (a nós)', ['leur', 'nous', 'lui'], 'nous', '«Nous» serve para objeto direto e indireto.'),
        lacuna('Je ___ ai prêté mon livre. (a eles)', ['leurs', 'les', 'leur'], 'leur', 'Objeto indireto plural: «leur», sem «s».'),
        lacuna('Le livre ? Je le ___ montre. (a ela)', ['lui', 'leur', 'la'], 'lui', 'Com «le» e «lui», o direto vem primeiro: «le lui».'),
        lacuna('Il ne ___ téléphone pas. (a você — tu)', ['toi', 'te', 'lui'], 'te', '«Te» é o pronome átono de «tu».'),
        mc('Qual verbo pede objeto indireto (à + pessoa)?', ['attendre', 'chercher', 'téléphoner'], 'téléphoner', '«Téléphoner à»; os outros são diretos.'),
        mc('Qual é a ordem correta dos pronomes?', ['Il me le donne.', 'Il le me donne.', 'Il me lui donne.'], 'Il me le donne.', 'Com «me», o indireto vem antes do direto.'),
        mc('Como dizer «Dê-lhe o livro!»?', ['Donne le lui livre !', 'Donne-lui le livre !', 'Lui donne le livre !'], 'Donne-lui le livre !', 'No imperativo afirmativo, o pronome vai depois, com hífen.'),
        mc('Como dizer «Ela lhes respondeu»?', ['Elle leur a répondue.', 'Elle les a répondu.', 'Elle leur a répondu.'], 'Elle leur a répondu.', 'Objeto indireto: «leur», e o particípio não concorda.'),
        ordem('Ordene: «Eu lhes envio uma mensagem.»', ['Je', 'leur', 'envoie', 'un', 'message'], 'Je leur envoie un message.', '«Leur» antes do verbo.'),
        ordem('Ordene: «Ele o enviou a eles ontem.»', ['Il', 'le', 'leur', 'a', 'envoyé', 'hier'], 'Il le leur a envoyé hier.', 'Direto antes do indireto: «le leur».'),
        livre('Escreva em francês: Eu lhe falo. Eu não lhes telefono.', 'Je lui parle. Je ne leur téléphone pas.'),
        livre('Escreva em francês: Eu o espero. Eu lhe dei o livro.', 'Je l\'attends. Je lui ai donné le livre.'),
      ]),
      producao(5, 'Fale 1 minuto sobre presentes que você deu e recebeu, usando «lui», «leur» e «me».'),
    ]),
  ],
});
