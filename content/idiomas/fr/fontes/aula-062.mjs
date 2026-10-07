import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 62, titulo: 'Revisão e simulado do B1', nivel: 'b1',
  objetivo: 'Fazer um balanço honesto do seu nível, treinar leitura, escuta, escrita e fala no formato B1 e fazer um simulado original.',
  nota: 'Você fechou o B1 do francês na Linvuu. Repita o simulado até acertar quase tudo. Para uma certificação oficial, prepare-se com provas reais (como o DELF B1) e, se possível, com um professor nativo.',
  sessoes: [
    sessao('S1', 'O que você consegue fazer no B1', [
      revisao(5, 'Releia em voz alta os dois mapas do B1 da aula 61 e marque os temas em que você ainda hesita.'),
      gramatica(15, 'Uma lista honesta do que você faz no B1', 'Leia cada linha e responda sinceramente: faço com facilidade, faço com esforço ou ainda não faço. Para o que ainda não faz, volte à aula indicada. Esta lista é um instrumento de estudo da Linvuu, não uma avaliação oficial.', {
        tag: 'Balanço',
        tabela: [
          { tema: 'Conversar', regra: 'começar, manter e encerrar uma conversa sobre assuntos conhecidos; dar opinião e concordar ou discordar com educação.', aula: '48, 56' },
          { tema: 'Contar', regra: 'narrar um acontecimento passado, um filme ou um livro, com sequência e causa.', aula: '39, 55, 57' },
          { tema: 'Planejar e hipóteses', regra: 'falar do futuro, de condições e de situações irreais no presente e no passado.', aula: '44, 59' },
          { tema: 'Viajar e resolver problemas', regra: 'se virar em viagem, reclamar com educação e pedir reembolso.', aula: '58' },
          { tema: 'Trabalho e estudo', regra: 'escrever e-mails formais, participar de reuniões simples, falar de currículo e entrevista.', aula: '49, 50, 59' },
          { tema: 'Entender', regra: 'entender o essencial de textos e conversas claras sobre assuntos comuns; usar o contexto e as palavras aparentadas.', aula: '51, 60' },
          { tema: 'Escrever', regra: 'escrever textos simples e coesos com articuladores sobre temas familiares.', aula: '47, 56' },
          { tema: 'Quando falta uma palavra', regra: 'pedir repetição, descrever com outras palavras e confirmar o que entendeu.', aula: '60' },
        ],
      }),
      producao(10, 'Para cada linha da lista, fale 30 segundos em francês sobre um exemplo real da sua vida.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato B1, original)', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Changer de ville / Mudar de cidade', 'Il y a deux ans, Léa a quitté Paris pour s\'installer à Lyon. Elle pensait que la vie serait plus calme, et en effet, elle a gagné du temps. En revanche, elle a dû se faire de nouveaux amis, ce qui n\'a pas été facile. Elle a décidé de s\'inscrire à un club de randonnée afin de rencontrer des gens. Aujourd\'hui, bien qu\'elle regrette parfois Paris, elle ne retournerait pas en arrière. Si on lui avait proposé ce changement plus tôt, elle l\'aurait accepté sans hésiter.', 'Há dois anos, Léa deixou Paris para se instalar em Lyon. Ela achava que a vida seria mais calma e, de fato, ganhou tempo. Em compensação, teve que fazer novos amigos, o que não foi fácil. Decidiu se inscrever num clube de caminhada a fim de conhecer pessoas. Hoje, embora às vezes sinta falta de Paris, não voltaria atrás. Se lhe tivessem proposto essa mudança antes, ela a teria aceitado sem hesitar.', [['Por que Léa foi para Lyon?', 'Achava que a vida seria mais calma.'], ['O que foi difícil?', 'Fazer novos amigos.'], ['O que ela fez para conhecer pessoas?', 'Entrou num clube de caminhada.']]),
      dialogo(8, 'Chez le médecin du travail / No médico do trabalho', 'Marc conversa com a médica sobre o estresse no trabalho.', [
        ['La médecin', 'Marc, vous avez l\'air fatigué. Que se passe-t-il ?', 'Marc, você parece cansado. O que está acontecendo?'], ['Marc', 'Je dors mal depuis que mon chef a annoncé que notre équipe serait réduite.', 'Durmo mal desde que meu chefe anunciou que nossa equipe seria reduzida.'], ['La médecin', 'Il faudrait que vous parliez à votre directeur, à moins que vous ne préfériez changer de poste.', 'Seria preciso que você falasse com seu diretor, a menos que prefira mudar de cargo.'], ['Marc', 'J\'ai déjà demandé un rendez-vous, mais il n\'a pas répondu.', 'Já pedi um encontro, mas ele não respondeu.'], ['La médecin', 'Insistez, et reposez-vous ce week-end. Je vous donne un arrêt de travail de trois jours.', 'Insista e descanse neste fim de semana. Dou a você um atestado de três dias.'],
      ]),
      producao(7, 'Responda em voz alta: o que Léa fez, por que e o que você faria no lugar dela. Depois diga o que Marc deveria fazer.'),
    ]),
    sessao('S3', 'Escrita e fala (formato B1)', [
      revisao(5, 'Releia seus erros mais comuns do B1 da aula 61.'),
      gramatica(15, 'Como escrever e falar bem no B1', 'PASSO 1: planeje em três partes: introdução (tema e posição), desenvolvimento (dois ou três argumentos com exemplos) e conclusão. PASSO 2: use um articulador por parágrafo: «d\'abord», «en revanche», «par conséquent», «bref». PASSO 3: varie os tempos: passé composé e imparfait para contar; condicional para opinião ou hipótese; subjuntivo depois de «il faut que», «bien que», «pour que». PASSO 4: releia sempre a concordância (particípios, adjetivos) e a ordem dos pronomes. PASSO 5: na prova oral, descreva e opine: «à mon avis», «ce qui m\'intéresse», «je suis convaincu que». PASSO 6: se faltar uma palavra, contorne: «un truc qui sert à…». PASSO 7: gerencie o tempo: 2 minutos para planejar, 8 para escrever, 2 para reler.', {
        tag: 'Provas',
        tabela: [
          { etapa: '1', funcao: 'Planejar (2 min)', exemplo: 'tema, posição, três ideias.' }, { etapa: '2', funcao: 'Introduzir', exemplo: '«De nos jours, beaucoup de gens pensent que…»' }, { etapa: '3', funcao: 'Desenvolver', exemplo: '«D\'abord… En effet… Par exemple…»' }, { etapa: '4', funcao: 'Contrastar', exemplo: '«Cependant… En revanche…»' }, { etapa: '5', funcao: 'Concluir', exemplo: '«En conclusion, il me semble que…»' }, { etapa: '6', funcao: 'Reler (2 min)', exemplo: 'concordância, pronomes, acentos.' },
        ],
      }),
      producao(10, 'Escreva um texto de 120 palavras: «Faut-il apprendre une langue étrangère pour travailler ?». Use pelo menos quatro articuladores. Depois leia em voz alta.'),
    ]),
    sessao('S4', 'Simulado do B1', [
      revisao(5, 'Respire e releia os dois mapas do B1 por um minuto.'),
      exercicios(20, [
        ouvir('Si on lui avait proposé ce changement, elle l\'aurait accepté', ['Si on lui avait proposé ce changement, elle l\'aurait accepté', 'Si on lui proposait ce changement, elle l\'accepterait', 'Si on lui aurait proposé ce changement, elle l\'a accepté'], 'Si on lui avait proposé ce changement, elle l\'aurait accepté', 'Escuta: hipótese irreal no passado.'), ouvir('Il faudrait que vous parliez à votre directeur', ['Il faudrait que vous parliez à votre directeur', 'Il faudrait que vous parlez à votre directeur', 'Il faut vous parler à votre directeur'], 'Il faudrait que vous parliez à votre directeur', 'Escuta: subjuntivo.'), ouvir('Le vol a été annulé par la compagnie', ['Le vol a été annulé par la compagnie', 'Le vol a annulé la compagnie', 'Le vol est annulé de la compagnie'], 'Le vol a été annulé par la compagnie', 'Escuta: passiva.'),
        mc('Leia: «Elle a décidé de s\'inscrire à un club afin de rencontrer des gens.» Por que ela entrou no clube?', ['para conhecer pessoas', 'para fazer esporte', 'porque um amigo pediu'], 'para conhecer pessoas', 'Leitura: «afin de» = finalidade.'), mc('Qual frase está correta?', ['Bien qu\'il soit fatigué, il travaille.', 'Bien qu\'il est fatigué, il travaille.', 'Bien qu\'il sera fatigué, il travaille.'], 'Bien qu\'il soit fatigué, il travaille.', '«Bien que» + subjuntivo.'), mc('Qual frase está correta?', ['Je le lui ai donné.', 'Je lui le ai donné.', 'Je lui l\'ai donné.'], 'Je le lui ai donné.', 'Ordem dos pronomes.'), mc('«Il a dit : Je viendrai» no relato:', ['Il a dit qu\'il viendrait.', 'Il a dit qu\'il viendra.', 'Il a dit qu\'il vient.'], 'Il a dit qu\'il viendrait.', 'Recuo.'),
        mc('Para destacar o sujeito:', ['C\'est Paul qui a gagné.', 'C\'est Paul que a gagné.', 'Ce Paul qui a gagné.'], 'C\'est Paul qui a gagné.', '«C\'est… qui».'), mc('Qual palavra francesa NÃO significa o que parece em português?', ['attendre (= esperar)', 'décision (= decisão)', 'qualité (= qualidade)'], 'attendre (= esperar)', 'Parece «atender», mas é esperar.'), mc('Objeção educada em reunião:', ['Je comprends, mais je crains que ce ne soit pas réaliste.', 'Non, c\'est faux.', 'Vous ne comprenez rien.'], 'Je comprends, mais je crains que ce ne soit pas réaliste.', 'Tom profissional.'),
        lacuna('Si j\'___ su, je serais venu.', ['avais', 'aurais', 'ai'], 'avais', 'Si + plus-que-parfait.'), lacuna('Il faut que nous ___ à l\'heure. (être)', ['soyons', 'sommes', 'serons'], 'soyons', 'Subjuntivo de «être».'), lacuna('C\'est demain ___ je pars.', ['que', 'qui', 'dont'], 'que', 'Destaque de tempo.'), lacuna('Elle a insisté ___ la qualité.', ['sur', 'de', 'à'], 'sur', '«Insister sur».'), lacuna('Je n\'ai ___ compris. (nada)', ['rien', 'personne', 'jamais'], 'rien', 'Negação: «rien» entre o auxiliar e o particípio.'),
        ordem('Ordene: «Si j\'avais su, je serais venu.»', ['Si', 'j\'avais', 'su,', 'je', 'serais', 'venu'], 'Si j\'avais su, je serais venu.', 'Condicional passado.'), ordem('Ordene: «Ce que je veux, c\'est du calme.»', ['Ce', 'que', 'je', 'veux,', 'c\'est', 'du', 'calme'], 'Ce que je veux, c\'est du calme.', 'Destaque.'),
        ditado('Je souhaiterais être remboursé', 'Escreva: Je souhaiterais être remboursé.'), ditado('Il a été décidé que nous commencerions lundi', 'Escreva: Il a été décidé que nous commencerions lundi.'),
        livre('Escreva em francês: Embora eu esteja cansado, vou trabalhar. Ele anunciou que o projeto seria adiado. Se eu tivesse sabido, teria vindo.', 'Bien que je sois fatigué, je vais travailler. Il a annoncé que le projet serait reporté. Si j\'avais su, je serais venu.'),
      ]),
      producao(5, 'Releia os itens que você errou e diga a regra de cada um em voz alta.'),
    ]),
  ],
});
