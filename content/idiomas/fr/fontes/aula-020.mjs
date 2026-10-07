import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 20, titulo: 'Passé composé ou imparfait?', nivel: 'a2',
  objetivo: 'Escolher entre o passé composé (o que aconteceu) e o imparfait (o cenário e o hábito) e contar uma história curta com os dois tempos.',
  nota: 'Você já conta histórias com cenário e acontecimentos. Próxima aula: pronomes de objeto indireto.',
  sessoes: [
    sessao('S1', 'Cenário e acontecimento', [
      revisao(5, 'Descreva em voz alta a sua infância com o imparfait.'),
      palavras(8, [
        ['soudain', 'sudẽ', 'de repente', ''], ['tout à coup', 'tu ta ku', 'de repente', ''], ['pendant que', 'pãdã kö', 'enquanto', ''], ['quand', 'kã', 'quando', ''], ['alors', 'alór', 'então', ''], ['ce jour-là', 'sö jur la', 'naquele dia', ''], ['un jour', 'ẽ jur', 'um dia', ''], ['à ce moment-là', 'a sö momã la', 'naquele momento', ''],
      ]),
      gramatica(12, 'Passé composé × imparfait', 'PASSO 1: o imparfait é o cenário, o fundo do quadro: o tempo, o clima, os sentimentos, os hábitos. O passé composé é o acontecimento, a ação que avança a história. PASSO 2: «Il pleuvait (cenário) quand je suis sorti (acontecimento).» PASSO 3: ações que acontecem uma depois da outra: passé composé: «Je me suis levé, j\'ai pris mon café et je suis parti.» PASSO 4: ação em curso interrompida por outra: imparfait + passé composé: «Je mangeais quand le téléphone a sonné.» PASSO 5: duas ações simultâneas longas: imparfait + imparfait, com «pendant que»: «Il cuisinait pendant que je lisais.» PASSO 6: palavras de acontecimento: «soudain, tout à coup, un jour, ce jour-là, alors». Palavras de cenário: «toujours, souvent, d\'habitude, pendant que, chaque jour». PASSO 7: ação limitada com duração fixa: passé composé: «J\'ai habité deux ans à Paris.» PASSO 8: estado prolongado sem fim marcado: imparfait: «J\'habitais à Paris.» PASSO 9: o mesmo verbo muda o sentido: «Je savais» (eu sabia) × «J\'ai su» (eu fiquei sabendo).', {
        tag: 'Passado',
        comparacao: 'em português a diferença é a mesma entre «eu falei» (pretérito perfeito) e «eu falava» (imperfeito). A diferença em francês é que o perfeito é o «passé composé», não um tempo simples: «j\'ai parlé». O truque é perguntar: «isto é cenário ou acontecimento?»',
        tabela: [
          { tempo: 'imparfait', funcao: 'cenário, hábito, descrição', exemplo: 'Il faisait froid.' }, { tempo: 'passé composé', funcao: 'acontecimento, ação terminada', exemplo: 'Je suis sorti.' }, { tempo: 'os dois', funcao: 'ação interrompida', exemplo: 'Je mangeais quand tu as appelé.' }, { tempo: 'imparfait + imparfait', funcao: 'ações paralelas', exemplo: 'Il lisait pendant que je cuisinais.' }, { tempo: 'passé composé em sequência', funcao: 'ações encadeadas', exemplo: 'Je me suis levé, j\'ai mangé, je suis parti.' },
        ],
        erros: [['Il a plu quand je suis sorti.', 'Il pleuvait quand je suis sorti.', 'Cenário de fundo: imparfait.'], ['Je mangeais quand le téléphone sonnait.', 'Je mangeais quand le téléphone a sonné.', 'A ação que interrompe é pontual: passé composé.'], ['Hier, j\'étais allé au cinéma.', 'Hier, je suis allé au cinéma.', 'Acontecimento: passé composé.'], ['Chaque jour, j\'ai pris le bus.', 'Chaque jour, je prenais le bus.', 'Hábito: imparfait.']],
      }),
      producao(5, 'Conte em voz alta uma situação: «Il pleuvait quand… Je lisais quand… Il faisait chaud quand…»'),
    ]),
    sessao('S2', 'Contar uma história', [
      revisao(4, 'Escolha: «Il (pleuvoir) quand je (sortir).» «Je (dormir) quand tu (appeler).»'),
      palavras(6, [
        ['rencontrer', 'rãkõtré', 'encontrar', ''], ['découvrir', 'dékuvrir', 'descobrir', ''], ['perdre', 'pérdr', 'perder', ''], ['trouver', 'truvé', 'encontrar, achar', ''], ['tomber', 'tõbé', 'cair', ''], ['crier', 'kriê', 'gritar', ''],
      ]),
      gramatica(12, 'A estrutura de uma história', 'PASSO 1: comece pelo cenário (imparfait): «C\'était un samedi. Il faisait beau.» PASSO 2: introduza o acontecimento com «un jour» ou «soudain»: «Soudain, j\'ai entendu un bruit.» PASSO 3: conte a sequência (passé composé): «J\'ai ouvert la porte, j\'ai vu un chat.» PASSO 4: volte ao imparfait para a reação, o sentimento: «J\'avais peur, mais le chat était gentil.» PASSO 5: termine com o resultado (passé composé) ou com uma conclusão (présent): «Depuis ce jour, il habite chez moi.» PASSO 6: «alors» e «puis» ligam acontecimentos; «parce que» liga a causa (imparfait): «Je suis rentré parce que j\'étais fatigué.» PASSO 7: o pronome vai antes do auxiliar: «Je l\'ai vu.» PASSO 8: negação envolve o auxiliar: «Je n\'ai rien entendu.»', {
        tag: 'Passado',
        comparacao: 'em português contamos histórias com «era uma vez… de repente…», alternando imperfeito e perfeito. O francês faz o mesmo e a lógica é igual: cenário no imparfait, acontecimento no passé composé, reação de novo no imparfait.',
        tabela: [
          { parte: 'cenário', tempo: 'imparfait', exemplo: 'C\'était un samedi, il faisait beau.' }, { parte: 'acontecimento', tempo: 'passé composé', exemplo: 'Soudain, j\'ai entendu un bruit.' }, { parte: 'sequência', tempo: 'passé composé', exemplo: 'J\'ai ouvert la porte et j\'ai vu un chat.' }, { parte: 'reação', tempo: 'imparfait', exemplo: 'J\'avais peur.' }, { parte: 'conclusão', tempo: 'passé composé / présent', exemplo: 'Depuis, il habite chez moi.' },
        ],
        erros: [['C\'a été un samedi.', 'C\'était un samedi.', 'Cenário: «c\'était».'], ['Soudain, j\'entendais un bruit.', 'Soudain, j\'ai entendu un bruit.', 'Acontecimento pontual.'], ['J\'ai eu peur parce que j\'ai été seul.', 'J\'ai eu peur parce que j\'étais seul.', 'Causa/estado: imparfait.'], ['J\'ai vu le.', 'Je l\'ai vu.', 'Pronome antes do auxiliar.']],
      }),
      producao(8, 'Conte em voz alta uma história de oito frases, começando com «C\'était…» e incluindo «soudain».'),
    ]),
    sessao('S3', 'Uma história completa', [
      revisao(4, 'Diga três frases com imparfait de cenário e três com passé composé de acontecimento.'),
      palavras(5, [
        ['la clé', 'la klê', 'a chave', ''], ['la porte', 'la pórt', 'a porta', ''], ['le bruit', 'lö brüi', 'o barulho', ''], ['la rue', 'la rü', 'a rua', ''], ['la peur', 'la pör', 'o medo', ''],
      ]),
      gramatica(8, 'Verbos que mudam de sentido', 'PASSO 1: alguns verbos mudam de sentido entre os dois tempos. PASSO 2: «savoir»: «Je savais la réponse» (eu sabia) × «J\'ai su la nouvelle» (eu fiquei sabendo). PASSO 3: «pouvoir»: «Je pouvais venir» (eu podia) × «J\'ai pu venir» (consegui vir). PASSO 4: «vouloir»: «Je voulais partir» (eu queria) × «J\'ai voulu partir» (eu tentei, decidi partir). PASSO 5: «connaître»: «Je connaissais Paul» × «J\'ai connu Paul en 2010» (eu o conheci). PASSO 6: na dúvida, o imparfait descreve o estado e o passé composé marca o momento.', {
        tag: 'Passado',
        comparacao: 'o português também varia: «eu sabia» e «eu soube», «eu podia» e «eu pude». O francês faz a mesma distinção com os dois tempos do passado.',
        tabela: [
          { verbo: 'savoir', imparfait: 'Je savais la réponse.', pc: 'J\'ai su la nouvelle.' }, { verbo: 'pouvoir', imparfait: 'Je pouvais venir.', pc: 'J\'ai pu venir.' }, { verbo: 'vouloir', imparfait: 'Je voulais partir.', pc: 'J\'ai voulu partir.' }, { verbo: 'connaître', imparfait: 'Je connaissais Paul.', pc: 'J\'ai connu Paul en 2010.' },
        ],
        erros: [['J\'ai su la réponse depuis toujours.', 'Je savais la réponse depuis toujours.', 'Estado longo: imparfait.'], ['Hier, je pouvais venir enfin.', 'Hier, j\'ai pu venir enfin.', 'Conseguiu: passé composé.'], ['J\'ai connaissais Paul.', 'Je connaissais Paul.', 'Sem auxiliar no imparfait.'], ['Je connaissais Paul en 2010.', 'J\'ai connu Paul en 2010.', 'Momento: passé composé.']],
      }),
      texto(8, 'Un soir à la maison / Uma noite em casa', 'C\'était un vendredi soir. Il pleuvait et j\'étais seul à la maison. Je regardais un film quand j\'ai entendu un grand bruit dans la rue. J\'ai ouvert la porte et j\'ai vu un petit chat sous la pluie. Il avait froid et il avait peur. Je l\'ai pris dans mes bras, je lui ai donné du lait et il s\'est endormi. Depuis ce jour, il habite chez moi.', 'Era uma sexta-feira à noite. Chovia e eu estava sozinho em casa. Eu assistia a um filme quando ouvi um grande barulho na rua. Abri a porta e vi um gatinho sob a chuva. Ele estava com frio e com medo. Peguei-o nos braços, dei-lhe leite e ele adormeceu. Desde aquele dia, ele mora comigo.', [['Quel temps faisait-il ?', 'Il pleuvait.'], ['Que faisait l\'auteur quand il a entendu un bruit ?', 'Il regardait un film.'], ['Qu\'est-ce qu\'il a vu devant la porte ?', 'Un petit chat sous la pluie.'], ['Où habite le chat maintenant ?', 'Chez l\'auteur.']]),
      producao(5, 'Conte uma pequena história sua, com cenário e acontecimentos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 20', [
      revisao(5, 'Conte em voz alta o que aconteceu na última vez em que você saiu de casa.'),
      exercicios(20, [
        ouvir('Il pleuvait quand je suis sorti', ['Il pleuvait quand je suis sorti', 'Il a plu quand je suis sorti', 'Il pleut quand je sors'], 'Il pleuvait quand je suis sorti', 'Ouça os dois tempos.'), ouvir('Soudain, j\'ai entendu un bruit', ['Soudain, j\'ai entendu un bruit', 'Soudain, j\'entendais un bruit', 'Soudain, j\'entends un bruit'], 'Soudain, j\'ai entendu un bruit', 'Ouça «ai entendu».'), ouvir('Je mangeais quand tu as appelé', ['Je mangeais quand tu as appelé', 'J\'ai mangé quand tu appelais', 'Je mange quand tu appelles'], 'Je mangeais quand tu as appelé', 'Ouça a ordem.'),
        ditado('C\'était un samedi, il faisait beau', 'Escreva: C\'était un samedi, il faisait beau.'), ditado('Un jour, j\'ai rencontré Paul', 'Escreva: Un jour, j\'ai rencontré Paul.'), ditado('Je savais la réponse', 'Escreva: Je savais la réponse.'),
        mc('Cenário (fundo): qual está correto?', ['Il faisait froid.', 'Il a fait froid.', 'Il fera froid.'], 'Il faisait froid.', 'Cenário: imparfait.'), mc('Acontecimento: qual está correto?', ['Soudain, la porte s\'est ouverte.', 'Soudain, la porte s\'ouvrait.', 'Soudain, la porte s\'ouvre.'], 'Soudain, la porte s\'est ouverte.', 'Acontecimento: passé composé.'), mc('Qual frase está correta?', ['Je lisais quand tu es entré.', 'Je lis quand tu es entré.', 'J\'ai lu quand tu entrais.'], 'Je lisais quand tu es entré.', 'Ação em curso + interrupção.'), mc('«Eu conheci Paul em 2010» em francês:', ['J\'ai connu Paul en 2010.', 'Je connaissais Paul en 2010.', 'Je connais Paul en 2010.'], 'J\'ai connu Paul en 2010.', 'Momento: passé composé.'),
        lacuna('Il ___ quand je suis sorti. (pleuvoir)', ['pleuvait', 'a plu', 'pleut'], 'pleuvait', 'Cenário.'), lacuna('Hier, je ___ au cinéma. (aller)', ['suis allé', 'allais', 'ai allé'], 'suis allé', 'Acontecimento.'), lacuna('Elle ___ peur parce qu\'il faisait nuit. (avoir)', ['avait', 'a eu', 'aura'], 'avait', 'Estado: imparfait.'), lacuna('Pendant que je cuisinais, il ___. (lire)', ['lisait', 'a lu', 'lit'], 'lisait', 'Ações paralelas.'),
        ordem('Ordene: «Je mangeais quand tu as appelé.»', ['Je', 'mangeais', 'quand', 'tu', 'as', 'appelé'], 'Je mangeais quand tu as appelé.', 'Imparfait + passé composé.'), ordem('Ordene: «Il faisait beau, alors je suis sorti.»', ['Il', 'faisait', 'beau,', 'alors', 'je', 'suis', 'sorti'], 'Il faisait beau, alors je suis sorti.', 'Cenário + ação.'),
        livre('Escreva em francês: Era sábado e chovia. De repente, eu ouvi um barulho. Abri a porta.', 'C\'était samedi et il pleuvait. Soudain, j\'ai entendu un bruit. J\'ai ouvert la porte.'),
      ]),
      producao(5, 'Conte em 1 minuto uma história curta (real ou inventada) com cenário e acontecimento.'),
    ]),
  ],
});
