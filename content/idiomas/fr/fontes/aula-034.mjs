import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 34, titulo: 'Perguntas completas e conectores', nivel: 'a2',
  objetivo: 'Fazer perguntas de três formas, usar «quel», «lequel» e «qu\'est-ce que», e ligar ideias com «mais», «parce que», «donc», «pourtant», «alors» e «d\'abord… ensuite».',
  nota: 'Você pergunta e argumenta com clareza. Próxima aula: revisão geral do A2 (parte 1).',
  sessoes: [
    sessao('S1', 'Três formas de perguntar', [
      revisao(5, 'Responda a perguntas negativas com «si» e «moi non plus».'),
      palavras(8, [
        ['quel', 'kél', 'qual, que', ''], ['lequel', 'lökél', 'qual (dentre)', ''], ['qu\'est-ce que', 'késkö', 'o que (objeto)', ''], ['qu\'est-ce qui', 'késki', 'o que (sujeito)', ''], ['pourquoi', 'purkuá', 'por que', ''], ['comment', 'komã', 'como', ''], ['combien', 'kõbiẽ', 'quanto', ''], ['où', 'u', 'onde', ''],
      ]),
      gramatica(12, 'Como fazer uma pergunta em francês', 'PASSO 1: há três formas de perguntar. FORMA 1 (informal): entonação: «Tu viens ?» FORMA 2 (neutra): «est-ce que»: «Est-ce que tu viens ?» FORMA 3 (formal): inversão: «Viens-tu ?» «Venez-vous ?» PASSO 2: com palavra interrogativa (informal): «Tu vas où ?» «Tu travailles comment ?» (neutro): «Où est-ce que tu vas ?» (formal): «Où vas-tu ?» PASSO 3: «qu\'est-ce que» + sujeito + verbo (o que): «Qu\'est-ce que tu fais ?» (forma curta: «Que fais-tu ?») PASSO 4: «qu\'est-ce qui» + verbo (o que, sujeito): «Qu\'est-ce qui se passe ?» PASSO 5: «quel/quelle/quels/quelles» concordam com o substantivo: «Quel âge as-tu ?» «Quelle heure est-il ?» «Quels films aimes-tu ?» PASSO 6: «lequel / laquelle / lesquels / lesquelles» (qual dentre): «J\'ai deux livres. Lequel veux-tu ?» PASSO 7: inversão com «t» entre vogais: «Parle-t-il français ?» «A-t-elle faim ?» PASSO 8: pergunta de «sim/não» no passado: «Est-ce que tu as mangé ?» «As-tu mangé ?»', {
        tag: 'Perguntas',
        comparacao: 'em português a pergunta muda quase só pela entonação («você vem?»). O francês também permite isso («tu viens ?»), mas oferece «est-ce que» e a inversão, que o português não tem. Na fala informal, a entonação basta; por escrito e em situações formais, prefira «est-ce que» ou a inversão.',
        tabela: [
          { registro: 'informal', frase: 'Tu vas où ?' }, { registro: 'neutro', frase: 'Où est-ce que tu vas ?' }, { registro: 'formal', frase: 'Où vas-tu ?' }, { registro: 'o que (objeto)', frase: 'Qu\'est-ce que tu fais ?' }, { registro: 'o que (sujeito)', frase: 'Qu\'est-ce qui se passe ?' }, { registro: 'qual', frase: 'Quelle heure est-il ?' }, { registro: 'qual dentre', frase: 'Lequel veux-tu ?' },
        ],
        erros: [['Qu\'est-ce que se passe ?', 'Qu\'est-ce qui se passe ?', 'Sujeito: «qui».'], ['Quel heure est-il ?', 'Quelle heure est-il ?', '«Heure» é feminino.'], ['Où est-ce que vas-tu ?', 'Où vas-tu ? / Où est-ce que tu vas ?', 'Escolha uma forma.'], ['Parle il français ?', 'Parle-t-il français ?', 'Hífen e «t».']],
      }),
      producao(5, 'Faça em voz alta a mesma pergunta nas três formas: «Tu viens ? Est-ce que tu viens ? Viens-tu ?»'),
    ]),
    sessao('S2', 'Conectores', [
      revisao(4, 'Faça cinco perguntas diferentes a um colega em voz alta.'),
      palavras(6, [
        ['mais', 'mé', 'mas', ''], ['parce que', 'pars kö', 'porque', ''], ['donc', 'dõk', 'portanto', ''], ['pourtant', 'purtã', 'no entanto', ''], ['alors', 'alór', 'então', ''], ['cependant', 'sepãdã', 'porém', ''],
      ]),
      gramatica(12, 'Ligar as ideias', 'PASSO 1: para dar causa: «parce que» (resposta a «pourquoi»): «Pourquoi tu pars ? — Parce que je suis fatigué.» PASSO 2: «car» (pois, formal): «Je reste, car il pleut.» PASSO 3: para dar consequência: «donc» (portanto) e «alors» (então): «Il pleut, donc je reste.» «Il pleut, alors je reste.» PASSO 4: para opor: «mais» (mas): «Je veux sortir, mais il pleut.» «pourtant» (no entanto): «Il pleut ; pourtant, je sors.» PASSO 5: para somar: «et» (e), «aussi» (também), «en plus» (além disso): «J\'aime le cinéma, et en plus j\'aime la musique.» PASSO 6: para ordenar: «d\'abord, ensuite, puis, enfin, finalement». PASSO 7: para concluir: «en conclusion, pour finir». PASSO 8: para dar exemplo: «par exemple», «comme».', {
        tag: 'Conectores',
        comparacao: 'em português «porque» tem dois usos: pergunta («por quê?») e resposta («porque…»). O francês separa: «pourquoi» pergunta e «parce que» responde. Nunca use «pourquoi» para responder.',
        tabela: [
          { funcao: 'causa', conector: 'parce que', exemplo: 'Je reste parce qu\'il pleut.' }, { funcao: 'consequência', conector: 'donc / alors', exemplo: 'Il pleut, donc je reste.' }, { funcao: 'oposição', conector: 'mais / pourtant', exemplo: 'Il pleut ; pourtant, je sors.' }, { funcao: 'adição', conector: 'en plus', exemplo: 'J\'aime le cinéma, et en plus la musique.' }, { funcao: 'ordem', conector: 'd\'abord, ensuite, enfin', exemplo: 'D\'abord, je mange ; ensuite, je sors.' }, { funcao: 'exemplo', conector: 'par exemple', exemplo: 'Par exemple, le football.' },
        ],
        erros: [['Pourquoi tu pars ? — Pourquoi je suis fatigué.', 'Pourquoi tu pars ? — Parce que je suis fatigué.', 'Resposta: «parce que».'], ['Je reste mais il pleut.', 'Je reste parce qu\'il pleut.', '«Mais» não dá causa.'], ['Parce de la pluie, je reste.', 'À cause de la pluie, je reste.', 'Com substantivo: «à cause de».'], ['Il pleut, donc je reste donc.', 'Il pleut, donc je reste.', 'Um «donc».']],
      }),
      producao(8, 'Dê em voz alta oito opiniões com «parce que», «donc», «mais», «pourtant» e «en plus».'),
    ]),
    sessao('S3', 'Argumentar de forma simples', [
      revisao(4, 'Explique em voz alta por que você gosta de uma cidade, com «parce que» e «donc».'),
      palavras(5, [
        ['à cause de', 'a kôz dö', 'por causa de (negativo)', ''], ['grâce à', 'grâs a', 'graças a', ''], ['pour', 'pur', 'para', ''], ['afin de', 'afẽ dö', 'a fim de', ''], ['malgré', 'malgrê', 'apesar de', ''],
      ]),
      gramatica(8, 'Causa, finalidade e concessão', 'PASSO 1: «parce que» + frase; «à cause de» + substantivo (causa negativa): «Je suis en retard à cause du trafic.» PASSO 2: «grâce à» + substantivo (causa positiva): «J\'ai réussi grâce à toi.» PASSO 3: «pour» + infinitivo (finalidade): «Je travaille pour gagner de l\'argent.» PASSO 4: «afin de» é mais formal: «Je pars tôt afin d\'arriver à l\'heure.» PASSO 5: «malgré» + substantivo (apesar de): «Je sors malgré la pluie.»', {
        tag: 'Conectores',
        comparacao: 'em português usamos «por causa de» para o bom e o ruim. O francês separa: «grâce à» (efeito positivo) e «à cause de» (efeito negativo). Misturar os dois soa estranho.',
        tabela: [
          { conector: 'à cause de', uso: 'causa negativa', exemplo: 'Je suis en retard à cause du trafic.' }, { conector: 'grâce à', uso: 'causa positiva', exemplo: 'J\'ai réussi grâce à toi.' }, { conector: 'pour + infinitivo', uso: 'finalidade', exemplo: 'Je travaille pour gagner de l\'argent.' }, { conector: 'afin de', uso: 'finalidade formal', exemplo: 'Je pars tôt afin d\'arriver à l\'heure.' }, { conector: 'malgré', uso: 'apesar de', exemplo: 'Je sors malgré la pluie.' },
        ],
        erros: [['J\'ai réussi à cause de toi. (elogio)', 'J\'ai réussi grâce à toi.', 'Efeito positivo: «grâce à».'], ['Je travaille pour que gagner.', 'Je travaille pour gagner.', 'Com o mesmo sujeito: infinitivo.'], ['Malgré il pleut, je sors.', 'Malgré la pluie, je sors.', '«Malgré» + substantivo.'], ['Je suis en retard grâce au trafic.', 'Je suis en retard à cause du trafic.', 'Efeito negativo: «à cause de».']],
      }),
      texto(8, 'Pourquoi j\'apprends le français / Por que aprendo francês', 'J\'apprends le français parce que j\'aime la culture française. D\'abord, j\'ai commencé avec une application, mais c\'était trop facile. Alors j\'ai cherché un cours plus sérieux. Maintenant, je fais des progrès grâce à mes exercices quotidiens. Pourtant, c\'est parfois difficile à cause de la prononciation. Malgré cela, je continue, car je veux voyager en France l\'année prochaine.', 'Aprendo francês porque gosto da cultura francesa. Primeiro, comecei com um aplicativo, mas era fácil demais. Então procurei um curso mais sério. Agora faço progressos graças aos meus exercícios diários. No entanto, às vezes é difícil por causa da pronúncia. Apesar disso, continuo, pois quero viajar à França no ano que vem.', [['Pourquoi l\'auteur apprend-il le français ?', 'Parce qu\'il aime la culture française.'], ['Pourquoi a-t-il changé de méthode ?', 'Parce que l\'application était trop facile.'], ['Grâce à quoi fait-il des progrès ?', 'Grâce à ses exercices quotidiens.'], ['Quand veut-il voyager en France ?', 'L\'année prochaine.']]),
      producao(5, 'Explique em voz alta por que você aprende francês, com «parce que», «grâce à», «pourtant» e «malgré».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 34', [
      revisao(5, 'Faça perguntas e responda com conectores, em voz alta.'),
      exercicios(20, [
        ouvir('Qu\'est-ce que tu fais ?', ['Qu\'est-ce que tu fais ?', 'Qu\'est-ce qui se passe ?', 'Que fais-tu ?'], 'Qu\'est-ce que tu fais ?', 'Ouça «qu\'est-ce que».'), ouvir('Je reste parce qu\'il pleut', ['Je reste parce qu\'il pleut', 'Je reste donc il pleut', 'Je reste mais il pleut'], 'Je reste parce qu\'il pleut', 'Ouça «parce que».'), ouvir('J\'ai réussi grâce à toi', ['J\'ai réussi grâce à toi', 'J\'ai réussi à cause de toi', 'J\'ai réussi pour toi'], 'J\'ai réussi grâce à toi', 'Ouça «grâce à».'),
        ditado('Où est-ce que tu vas', 'Escreva: Où est-ce que tu vas.'), ditado('Parle-t-il français', 'Escreva: Parle-t-il français.'), ditado('Il pleut, donc je reste', 'Escreva: Il pleut, donc je reste.'),
        mc('Pergunta formal:', ['Où vas-tu ?', 'Tu vas où ?', 'Où tu vas ?'], 'Où vas-tu ?', 'Inversão.'), mc('Qual frase está correta?', ['Qu\'est-ce qui se passe ?', 'Qu\'est-ce que se passe ?', 'Qu\'est-ce que il se passe ?'], 'Qu\'est-ce qui se passe ?', 'Sujeito: «qui».'), mc('Responder a «Pourquoi» :', ['Parce que je suis fatigué.', 'Pourquoi je suis fatigué.', 'Donc je suis fatigué.'], 'Parce que je suis fatigué.', '«Parce que».'), mc('Causa negativa:', ['à cause de', 'grâce à', 'pour'], 'à cause de', 'Negativo.'),
        lacuna('___ heure est-il ? (que)', ['Quelle', 'Quel', 'Quels'], 'Quelle', 'Feminino.'), lacuna('J\'ai deux livres. ___ veux-tu ?', ['Lequel', 'Quel', 'Que'], 'Lequel', 'Escolha entre.'), lacuna('Il pleut, ___ je reste. (portanto)', ['donc', 'mais', 'pourtant'], 'donc', 'Consequência.'), lacuna('Je sors ___ la pluie. (apesar de)', ['malgré', 'grâce', 'parce'], 'malgré', 'Concessão.'),
        ordem('Ordene: «Où est-ce que tu habites ?»', ['Où', 'est-ce', 'que', 'tu', 'habites'], 'Où est-ce que tu habites ?', 'Forma neutra.'), ordem('Ordene: «Je reste parce qu\'il pleut.»', ['Je', 'reste', 'parce', 'qu\'il', 'pleut'], 'Je reste parce qu\'il pleut.', 'Causa.'),
        livre('Escreva em francês: Por que você aprende francês? Porque quero viajar à França. Apesar da pronúncia, continuo.', 'Pourquoi apprends-tu le français ? Parce que je veux voyager en France. Malgré la prononciation, je continue.'),
        lacuna('Je suis en retard ___ du trafic. (por causa)', ['grâce', 'à cause', 'malgré'], 'à cause', 'Causa negativa: «à cause de».'),
        lacuna('Il pleut ; ___ , je sors. (no entanto)', ['donc', 'parce que', 'pourtant'], 'pourtant', '«Pourtant» marca oposição.'),
        lacuna('Parle-___-il français ?', ['t', 's', 'd'], 't', 'Na inversão, põe-se «-t-» entre duas vogais.'),
        lacuna('Je travaille ___ gagner de l\'argent. (para)', ['car', 'pour', 'parce que'], 'pour', '«Pour» + infinitivo indica finalidade.'),
        lacuna('___ films aimes-tu ? (quais)', ['Quel', 'Quelles', 'Quels'], 'Quels', '«Films» é masculino plural: «quels».'),
        mc('Para agradecer («consegui por sua causa»), qual expressão se usa?', ['grâce à toi', 'à cause de toi', 'malgré toi'], 'grâce à toi', '«Grâce à» indica causa positiva.'),
        mc('Como perguntar «O que está acontecendo?»', ['Qu\'est-ce que se passe ?', 'Qu\'est-ce qui se passe ?', 'Quoi est-ce qui passe ?'], 'Qu\'est-ce qui se passe ?', 'O que é sujeito: «qu\'est-ce qui».'),
        mc('Qual é a forma formal de «Tu viens ?»', ['Est-ce que viens-tu ?', 'Tu viens-tu ?', 'Viens-tu ?'], 'Viens-tu ?', 'Inversão: verbo + pronome, com hífen.'),
        mc('Qual conector marca oposição?', ['mais', 'donc', 'alors'], 'mais', '«Mais» = mas.'),
        ordem('Ordene: «Está chovendo, então eu fico em casa.»', ['Il', 'pleut,', 'donc', 'je', 'reste', 'à', 'la', 'maison'], 'Il pleut, donc je reste à la maison.', '«Donc» marca a consequência.'),
        ordem('Ordene: «Eu saio apesar da chuva.»', ['Je', 'sors', 'malgré', 'la', 'pluie'], 'Je sors malgré la pluie.', '«Malgré» + substantivo.'),
        livre('Escreva em francês (use «alors»): Quero sair, mas está chovendo. Então eu fico em casa.', 'Je veux sortir, mais il pleut. Alors je reste à la maison.'),
        livre('Escreva em francês: Estou atrasado por causa da chuva. Trabalho para ganhar dinheiro.', 'Je suis en retard à cause de la pluie. Je travaille pour gagner de l\'argent.'),
      ]),
      producao(5, 'Fale 1 minuto explicando uma decisão sua, com conectores de causa, consequência e oposição.'),
    ]),
  ],
});
