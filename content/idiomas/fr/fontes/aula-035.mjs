import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 35, titulo: 'Tecnologia, internet e redes sociais', nivel: 'a2',
  objetivo: 'Falar de celular, computador e internet, dar instruções simples de uso, reclamar de um problema técnico e conversar sobre redes sociais.',
  nota: 'Você fala de tecnologia no dia a dia. Próxima aula: o Brasil e a França lado a lado.',
  sessoes: [
    sessao('S1', 'Aparelhos e internet', [
      revisao(5, 'Explique em voz alta uma decisão sua com «parce que», «donc» e «pourtant».'),
      palavras(8, [
        ['l\'ordinateur', 'lordinatör', 'o computador', ''], ['le portable', 'lö portabl', 'o celular', ''], ['l\'écran', 'lekrã', 'a tela', ''], ['le clavier', 'lö klavié', 'o teclado', ''], ['la batterie', 'la batri', 'a bateria', ''], ['le chargeur', 'lö xarjör', 'o carregador', ''], ['le mot de passe', 'lö mô dö pas', 'a senha', ''], ['le réseau', 'lö rezô', 'a rede', ''],
      ]),
      gramatica(12, 'Parler de technologie', 'PASSO 1: verbos de tecnologia: «allumer» (ligar), «éteindre» (desligar), «télécharger» (baixar), «envoyer» (enviar), «charger» (carregar), «cliquer» (clicar), «se connecter» (conectar-se). PASSO 2: «Je me connecte au wifi.» «Je télécharge une application.» «J\'envoie un message.» PASSO 3: problemas: «Mon portable n\'a plus de batterie.» «L\'écran est cassé.» «Je n\'ai pas de réseau.» PASSO 4: pedir ajuda: «Pourriez-vous m\'aider avec mon ordinateur ?» «Comment on fait pour se connecter ?» PASSO 5: dados: «Quel est le mot de passe du wifi ?» «Mon adresse e-mail est…» («arobase» é o @, «point» é o ponto). PASSO 6: «en ligne» (online), «hors ligne» (offline). PASSO 7: o verbo «marcher» (funcionar): «Ça marche !» «Ça ne marche pas.» PASSO 8: pronomes: «Je le charge.» «Je l\'éteins.»', {
        tag: 'Tecnologia',
        comparacao: 'em português usamos muitas palavras em inglês («wifi», «e-mail»). O francês aceita algumas («le wifi», «un e-mail» ou «un courriel» no Canadá), mas muitas são francesas: «un portable» (celular), «un ordinateur» (computador), «télécharger» (baixar).',
        tabela: [
          { termo: 'un ordinateur', sentido: 'computador' }, { termo: 'un portable', sentido: 'celular' }, { termo: 'télécharger', sentido: 'baixar' }, { termo: 'se connecter', sentido: 'conectar-se' }, { termo: 'le mot de passe', sentido: 'senha' }, { termo: 'en ligne', sentido: 'online' }, { termo: 'ça marche', sentido: 'funciona' },
        ],
        erros: [['Je download une application.', 'Je télécharge une application.', 'Verbo francês.'], ['Mon portable est sans batterie.', 'Mon portable n\'a plus de batterie.', 'Expressão natural.'], ['Je connecte au wifi.', 'Je me connecte au wifi.', '«Se connecter» é pronominal.'], ['Le mot passe.', 'Le mot de passe.', '«Mot de passe».']],
      }),
      producao(5, 'Descreva em voz alta os aparelhos que você usa e o que faz com cada um.'),
    ]),
    sessao('S2', 'Mensagens, chamadas e redes sociais', [
      revisao(4, 'Dê em voz alta instruções para conectar um celular ao wifi.'),
      palavras(6, [
        ['le message', 'lö mesaj', 'a mensagem', ''], ['l\'appel', 'lapél', 'a chamada', ''], ['le réseau social', 'lö rezô sosial', 'a rede social', ''], ['poster', 'posté', 'postar', ''], ['partager', 'partajé', 'compartilhar', ''], ['suivre', 'süivr', 'seguir', ''],
      ]),
      gramatica(12, 'Communiquer en ligne', 'PASSO 1: mensagens: «Je t\'envoie un message.» «Il m\'a envoyé une photo.» «Réponds-moi vite.» PASSO 2: chamadas: «Je t\'appelle ce soir.» «Peux-tu me rappeler ?» «Il ne répond pas.» PASSO 3: redes sociais: «Je poste des photos.» «Je partage une vidéo.» «Je suis beaucoup de comptes.» PASSO 4: opiniões: «Je trouve que les réseaux sociaux prennent trop de temps.» «À mon avis, c\'est utile pour garder le contact.» PASSO 5: expressões: «un like» (curtida), «un abonné» (seguidor), «un compte» (conta), «un fil d\'actualité» (feed). PASSO 6: frases do dia a dia: «Je n\'ai pas vu ton message.» «Je n\'ai pas de réseau.» «Mon portable s\'est éteint.» PASSO 7: tempo de tela: «Je passe deux heures par jour sur mon portable.» «Je passe du temps à…». PASSO 8: «passer du temps à» + infinitivo: «Je passe du temps à regarder des vidéos.»', {
        tag: 'Tecnologia',
        comparacao: 'em português dizemos «mandar mensagem» e «ligar para alguém». O francês usa «envoyer un message à» e «appeler» (sem preposição): «je t\'appelle». «Passer du temps à» + infinitivo corresponde a «passar tempo fazendo».',
        tabela: [
          { acao: 'enviar mensagem', frase: 'Je t\'envoie un message.' }, { acao: 'ligar', frase: 'Je t\'appelle ce soir.' }, { acao: 'postar', frase: 'Je poste des photos.' }, { acao: 'seguir', frase: 'Je suis beaucoup de comptes.' }, { acao: 'tempo de tela', frase: 'Je passe deux heures par jour sur mon portable.' },
        ],
        erros: [['Je t\'appelle à ce soir.', 'Je t\'appelle ce soir.', 'Sem preposição.'], ['Je passe du temps de regarder des vidéos.', 'Je passe du temps à regarder des vidéos.', '«Passer du temps à».'], ['Il m\'envoie un message à moi.', 'Il m\'envoie un message.', 'Não repita o pronome.'], ['Mon portable a éteint.', 'Mon portable s\'est éteint.', 'Verbo pronominal.']],
      }),
      producao(8, 'Diga em voz alta como você usa o celular durante o dia: mensagens, chamadas, redes e vídeos.'),
    ]),
    sessao('S3', 'Opinião sobre a tecnologia', [
      revisao(4, 'Diga três vantagens e três desvantagens do celular.'),
      palavras(5, [
        ['un avantage', 'ẽ avãtaj', 'uma vantagem', ''], ['un inconvénient', 'ẽ ẽkõvenié̃', 'uma desvantagem', ''], ['dépendant', 'depãdã', 'dependente', ''], ['gagner du temps', 'gañé dü tã', 'ganhar tempo', ''], ['perdre du temps', 'pérdr dü tã', 'perder tempo', ''],
      ]),
      gramatica(8, 'Vantagens e desvantagens', 'PASSO 1: «Un avantage, c\'est que…» «Un inconvénient, c\'est que…»: «Un avantage, c\'est que je peux parler à ma famille.» PASSO 2: «d\'un côté… de l\'autre…» (por um lado… por outro): «D\'un côté, c\'est pratique ; de l\'autre, c\'est addictif.» PASSO 3: «grâce à» e «à cause de»: «Grâce à internet, je peux étudier.» «À cause du portable, je dors mal.» PASSO 4: dar a opinião final: «Je pense qu\'il faut l\'utiliser avec modération.»', {
        tag: 'Tecnologia',
        comparacao: 'em português dizemos «por um lado… por outro». O francês é «d\'un côté… de l\'autre…». «Un inconvénient» é a desvantagem, e é um falso amigo de «inconveniente» (que em português é uma coisa chata).',
        tabela: [
          { estrutura: 'um avantage, c\'est que…', exemplo: 'Un avantage, c\'est que je suis joignable.' }, { estrutura: 'un inconvénient, c\'est que…', exemplo: 'Un inconvénient, c\'est que je perds du temps.' }, { estrutura: 'd\'un côté… de l\'autre…', exemplo: 'D\'un côté, c\'est pratique ; de l\'autre, c\'est addictif.' }, { estrutura: 'il faut + infinitivo', exemplo: 'Il faut l\'utiliser avec modération.' },
        ],
        erros: [['Por um lado… pour autre…', 'D\'un côté… de l\'autre…', 'Expressão fixa.'], ['Un avantage est que…', 'Un avantage, c\'est que…', 'Forma natural.'], ['À cause de internet, je peux étudier.', 'Grâce à internet, je peux étudier.', 'Efeito positivo.'], ['Il faut de l\'utiliser.', 'Il faut l\'utiliser.', 'Sem preposição.']],
      }),
      dialogo(8, 'Au téléphone / Ao celular', 'Antoine e Sophie conversam sobre o celular.', [
        ['Antoine', 'Tu as vu mon message ? Je t\'ai envoyé une photo.', 'Você viu a minha mensagem? Mandei uma foto.'], ['Sophie', 'Non, mon portable n\'a plus de batterie. Je le charge depuis une heure.', 'Não, meu celular está sem bateria. Estou carregando faz uma hora.'], ['Antoine', 'Ah, d\'accord. Tu passes beaucoup de temps sur ton téléphone ?', 'Ah, certo. Você passa muito tempo no celular?'], ['Sophie', 'Oui, trop ! D\'un côté, c\'est pratique ; de l\'autre, je perds du temps.', 'Sim, demais! Por um lado é prático; por outro, perco tempo.'], ['Antoine', 'Moi aussi. J\'essaie de l\'éteindre le soir.', 'Eu também. Tento desligá-lo à noite.'], ['Sophie', 'Bonne idée. Je vais faire pareil.', 'Boa ideia. Vou fazer o mesmo.'],
      ]),
      producao(5, 'Dê a sua opinião em voz alta sobre as redes sociais, com vantagens e desvantagens.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 35', [
      revisao(5, 'Explique em voz alta como você usa a internet no dia a dia.'),
      exercicios(20, [
        ouvir('Mon portable n\'a plus de batterie', ['Mon portable n\'a plus de batterie', 'Mon ordinateur n\'a plus de batterie', 'Mon portable est cassé'], 'Mon portable n\'a plus de batterie', 'Ouça «plus de batterie».'), ouvir('Je me connecte au wifi', ['Je me connecte au wifi', 'Je télécharge le wifi', 'Je me déconnecte du wifi'], 'Je me connecte au wifi', 'Ouça «connecte».'), ouvir('D\'un côté, c\'est pratique', ['D\'un côté, c\'est pratique', 'De l\'autre, c\'est pratique', 'D\'un côté, c\'est cher'], 'D\'un côté, c\'est pratique', 'Ouça «d\'un côté».'),
        ditado('Je télécharge une application', 'Escreva: Je télécharge une application.'), ditado('Je t\'appelle ce soir', 'Escreva: Je t\'appelle ce soir.'), ditado('Quel est le mot de passe', 'Escreva: Quel est le mot de passe.'),
        mc('«Baixar» um arquivo em francês:', ['télécharger', 'downloader', 'baisser'], 'télécharger', 'Verbo francês.'), mc('Qual frase está correta?', ['Je me connecte au wifi.', 'Je connecte au wifi.', 'Je me connecte à le wifi.'], 'Je me connecte au wifi.', 'Pronominal.'), mc('«Senha» em francês:', ['le mot de passe', 'le mot passe', 'la senha'], 'le mot de passe', 'Expressão fixa.'), mc('«Por um lado… por outro» em francês:', ['d\'un côté… de l\'autre', 'por un côté… pour autre', 'du côté… à l\'autre'], 'd\'un côté… de l\'autre', 'Expressão fixa.'),
        lacuna('Je passe du temps ___ regarder des vidéos.', ['à', 'de', 'en'], 'à', '«Passer du temps à».'), lacuna('Mon portable ___ éteint. (apagou)', ['s\'est', 'a', 'est'], 's\'est', 'Pronominal.'), lacuna('Je ___ appelle ce soir. (te)', ['t\'', 'te', 'ton'], 't\'', 'Elisão.'), lacuna('___ à internet, je peux étudier.', ['Grâce', 'Cause', 'Pour'], 'Grâce', 'Efeito positivo.'),
        ordem('Ordene: «Je n\'ai pas de réseau.»', ['Je', 'n\'ai', 'pas', 'de', 'réseau'], 'Je n\'ai pas de réseau.', 'Negação com «de».'), ordem('Ordene: «Je t\'envoie un message.»', ['Je', 't\'envoie', 'un', 'message'], 'Je t\'envoie un message.', 'Pronome antes do verbo.'),
        livre('Escreva em francês: Meu celular está sem bateria. Eu te ligo esta noite. Por um lado é prático, por outro perco tempo.', 'Mon portable n\'a plus de batterie. Je t\'appelle ce soir. D\'un côté, c\'est pratique ; de l\'autre, je perds du temps.'),
        lacuna('Je ___ l\'ordinateur. (ligo)', ['éteins', 'clique', 'allume'], 'allume', '«Allumer» = ligar.'),
        lacuna('Je ___ une photo sur Instagram. (posto)', ['poste', 'éteins', 'clique'], 'poste', '«Poster» = postar.'),
        lacuna('Il m\'a ___ une photo. (enviou)', ['envoyer', 'envoyé', 'envoie'], 'envoyé', 'Passé composé: «a» + particípio «envoyé».'),
        lacuna('Quel est le mot de ___ du wifi ? (senha)', ['pas', 'passé', 'passe'], 'passe', '«Mot de passe» = senha.'),
        lacuna('Un ___ , c\'est que je perds du temps. (inconveniente)', ['inconvénient', 'avantage', 'abonné'], 'inconvénient', '«Inconvénient» = desvantagem.'),
        mc('Qual frase está correta?', ['L\'écran est cassée.', 'L\'écran est cassé.', 'L\'écran est casser.'], 'L\'écran est cassé.', '«Écran» é masculino: «cassé».'),
        mc('Como se lê «@» em um endereço de e-mail?', ['point', 'tiret', 'arobase'], 'arobase', '«Arobase» = @.'),
        mc('O que significa «en ligne»?', ['online', 'desligado', 'na fila'], 'online', '«En ligne» = online.'),
        mc('Qual frase está correta?', ['Je passe du temps de jouer.', 'Je passe du temps à jouer.', 'Je passe du temps jouer.'], 'Je passe du temps à jouer.', '«Passer du temps à» + infinitivo.'),
        ordem('Ordene: «Minha tela está quebrada desde ontem.»', ['Mon', 'écran', 'est', 'cassé', 'depuis', 'hier'], 'Mon écran est cassé depuis hier.', '«Depuis» + presente.'),
        ordem('Ordene: «Ele me enviou uma foto.»', ['Il', 'm\'a', 'envoyé', 'une', 'photo'], 'Il m\'a envoyé une photo.', 'Pronome «me» antes do auxiliar.'),
        livre('Escreva em francês: Qual é a senha do wifi? Eu não vi sua mensagem.', 'Quel est le mot de passe du wifi ? Je n\'ai pas vu ton message.'),
        livre('Escreva em francês: Eu passo duas horas por dia no celular. Por um lado, é útil.', 'Je passe deux heures par jour sur mon portable. D\'un côté, c\'est utile.'),
      ]),
      producao(5, 'Fale 1 minuto sobre como a tecnologia mudou a sua vida.'),
    ]),
  ],
});
