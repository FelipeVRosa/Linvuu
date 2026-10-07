import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 48, titulo: 'Dar opinião, concordar e debater', nivel: 'b1',
  objetivo: 'Expressar opinião, concordar, discordar e argumentar com educação em uma conversa ou debate.',
  nota: 'Você já consegue defender uma ideia em francês. Próxima aula: e-mail e carta formais.',
  sessoes: [
    sessao('S1', 'Expressar a opinião', [
      revisao(5, 'Faça um texto curto com «d\'abord, ensuite, enfin» e dois conectores de oposição.'),
      palavras(8, [
        ['à mon avis', 'a mõn avi', 'na minha opinião', ''], ['selon moi', 'sölõ muá', 'segundo eu', ''], ['je pense que', 'jö põs kö', 'acho que', ''], ['je trouve que', 'jö truv kö', 'acho que (sensação)', ''], ['il me semble que', 'il mö sãbl kö', 'me parece que', ''], ['en ce qui me concerne', 'ã sö ki mö kõsérn', 'no que me diz respeito', ''], ['d\'après', 'daprè', 'segundo', ''], ['pour moi', 'pur muá', 'para mim', ''],
      ]),
      gramatica(12, 'À mon avis, je trouve que', 'PASSO 1: opinião direta: «à mon avis», «selon moi», «pour moi», «d\'après moi». PASSO 2: com verbo: «je pense que», «je crois que», «je trouve que» + indicativo: «Je trouve que c\'est une bonne idée.» PASSO 3: com cautela: «il me semble que», «j\'ai l\'impression que» + indicativo: «J\'ai l\'impression qu\'il est fatigué.» PASSO 4: opinião negativa pede subjuntivo: «Je ne pense pas que ce soit possible.» PASSO 5: pedir a opinião: «Qu\'en penses-tu ?», «Que penses-tu de… ?», «Tu es d\'accord ?», «Quel est ton avis ?» PASSO 6: «penser à» (refletir sobre) × «penser de» (opinião): «À quoi penses-tu ?» × «Que penses-tu de ce film ?» PASSO 7: «en ce qui me concerne» é mais formal: «En ce qui me concerne, c\'est trop cher.» PASSO 8: «d\'après» + pessoa ou fonte: «D\'après le journal, il va pleuvoir.»', {
        tag: 'Opinião',
        comparacao: 'em português «acho que» serve para tudo. Em francês escolha: «je pense que» (reflexão), «je trouve que» (sensação ou gosto), «il me semble que» (cautela). Depois da forma negativa («je ne pense pas que»), o modo muda para subjuntivo.',
        tabela: [
          { expressao: 'à mon avis', uso: 'opinião direta', exemplo: 'À mon avis, c\'est une bonne idée.' }, { expressao: 'je trouve que', uso: 'impressão pessoal', exemplo: 'Je trouve que c\'est trop cher.' }, { expressao: 'il me semble que', uso: 'com cautela', exemplo: 'Il me semble qu\'il a raison.' }, { expressao: 'selon moi', uso: 'formal', exemplo: 'Selon moi, c\'est faux.' }, { expressao: 'qu\'en penses-tu ?', uso: 'pedir opinião', exemplo: 'Qu\'en penses-tu ?' }, { expressao: 'd\'après', uso: 'citar fonte', exemplo: 'D\'après le journal…' },
        ],
        erros: [['Je pense à ce film que c\'est bon.', 'Je pense que ce film est bon.', '«Penser que» sem preposição.'], ['Je ne pense pas qu\'il a raison.', 'Je ne pense pas qu\'il ait raison.', 'Negação: subjuntivo.'], ['À mon avis que c\'est faux.', 'À mon avis, c\'est faux.', 'Sem «que».'], ['Que penses-tu à ce film ?', 'Que penses-tu de ce film ?', 'Opinião: «penser de».']],
      }),
      producao(5, 'Dê em voz alta cinco opiniões sobre filmes, comida ou cidades, com expressões diferentes.'),
    ]),
    sessao('S2', 'Concordar e discordar', [
      revisao(4, 'Dê a sua opinião sobre três temas, com «je trouve que» e «je ne pense pas que».'),
      palavras(6, [
        ['je suis d\'accord', 'jö süi dacor', 'concordo', ''], ['pas du tout', 'pa dü tu', 'de modo algum', ''], ['tout à fait', 'tu ta fé', 'completamente', ''], ['absolument', 'absolümã', 'absolutamente', ''], ['pas vraiment', 'pa vrémã', 'não exatamente', ''], ['au contraire', 'o kõtrér', 'ao contrário', ''],
      ]),
      gramatica(12, 'Concordar, discordar, nuançar', 'PASSO 1: concordar: «je suis d\'accord», «tout à fait», «exactement», «absolument», «c\'est vrai», «tu as raison». PASSO 2: concordar parcialmente: «oui, mais…», «dans un sens, oui, mais…», «c\'est vrai, cependant…» PASSO 3: discordar com educação: «je ne suis pas d\'accord», «je ne suis pas tout à fait d\'accord», «pas vraiment», «je vois les choses autrement». PASSO 4: discordar com força: «pas du tout», «absolument pas», «c\'est faux». PASSO 5: «avoir raison» × «avoir tort»: «Tu as raison.» «Il a tort.» PASSO 6: «être d\'accord» não tem artigo: «Je suis d\'accord avec toi.» PASSO 7: pedir esclarecimento: «Qu\'est-ce que tu veux dire ?», «Peux-tu préciser ?» PASSO 8: usar «si» para contrariar uma negação: «— Tu n\'es pas d\'accord ? — Si, je suis d\'accord !»', {
        tag: 'Opinião',
        comparacao: 'em português «concordo» é verbo; em francês, «être d\'accord» é uma expressão com «être». O verbo «concorder» não existe como «concorder». E «tu as raison» usa «avoir», não «être».',
        tabela: [
          { expressao: 'tout à fait', uso: 'concordar forte', exemplo: 'Tout à fait, tu as raison.' }, { expressao: 'oui, mais…', uso: 'concordar em parte', exemplo: 'Oui, mais c\'est cher.' }, { expressao: 'pas vraiment', uso: 'discordar suave', exemplo: 'Pas vraiment, je préfère le thé.' }, { expressao: 'pas du tout', uso: 'discordar forte', exemplo: 'Pas du tout, c\'est faux.' }, { expressao: 'tu as raison', uso: 'dar razão', exemplo: 'Tu as raison, excuse-moi.' }, { expressao: 'si', uso: 'contrariar negação', exemplo: 'Si, je suis d\'accord !' },
        ],
        erros: [['Je suis raison.', 'J\'ai raison.', '«Avoir raison».'], ['Je suis d\'accord de toi.', 'Je suis d\'accord avec toi.', '«Avec».'], ['Tu n\'es pas d\'accord ? Oui, je suis d\'accord.', 'Tu n\'es pas d\'accord ? Si, je suis d\'accord.', 'Contrariar negação: «si».'], ['Je concorde.', 'Je suis d\'accord.', '«Concorder» não existe.']],
      }),
      producao(8, 'Simule em voz alta uma conversa em que você concorda em parte e depois discorda com educação.'),
    ]),
    sessao('S3', 'Argumentar num debate', [
      revisao(4, 'Diga «tu as raison», «pas du tout» e «oui, mais» em frases completas.'),
      palavras(5, [
        ['un argument', 'ẽn argümã', 'um argumento', ''], ['un avantage', 'ẽn avãtaj', 'uma vantagem', ''], ['un inconvénient', 'ẽn ẽkõvenhiã', 'uma desvantagem', ''], ['pour', 'pur', 'a favor', ''], ['contre', 'kõtr', 'contra', ''],
      ]),
      gramatica(8, 'Estrutura de um argumento', 'PASSO 1: posição: «Je suis pour / contre…» PASSO 2: argumento: «Premièrement… Deuxièmement…» PASSO 3: exemplo: «Par exemple…» PASSO 4: contra-argumento: «On pourrait dire que… mais…» PASSO 5: conclusão: «C\'est pourquoi je pense que…»', {
        tag: 'Argumentação',
        comparacao: 'o francês valoriza argumentos organizados: tese, argumento, exemplo, concessão e conclusão. Seguir esta ordem faz o seu discurso parecer muito natural para ouvidos franceses.',
        tabela: [
          { etapa: 'posição', exemplo: 'Je suis pour le télétravail.' }, { etapa: 'argumento', exemplo: 'Premièrement, on gagne du temps.' }, { etapa: 'exemplo', exemplo: 'Par exemple, plus de transports.' }, { etapa: 'concessão', exemplo: 'On pourrait dire que c\'est isolant, mais…' }, { etapa: 'conclusão', exemplo: 'C\'est pourquoi je suis pour.' }, { etapa: 'pergunta', exemplo: 'Et toi, qu\'en penses-tu ?' },
        ],
        erros: [['Je suis pour à le télétravail.', 'Je suis pour le télétravail.', 'Sem «à».'], ['On pourrait dire que, mais je pense.', 'On pourrait dire que c\'est isolant, mais je pense que c\'est utile.', 'Complete a ideia.'], ['Premièrement je pense.', 'Premièrement, je pense que…', 'Vírgula e «que».'], ['C\'est pourquoi que je suis pour.', 'C\'est pourquoi je suis pour.', 'Sem «que».']],
      }),
      dialogo(8, 'Le télétravail / O teletrabalho', 'Camille e Hugo debatem.', [
        ['Camille', 'À mon avis, le télétravail est une excellente idée : on gagne du temps et de l\'argent.', 'Na minha opinião, o teletrabalho é uma excelente ideia: ganha-se tempo e dinheiro.'], ['Hugo', 'C\'est vrai, mais je trouve qu\'on perd le contact avec les collègues.', 'É verdade, mas acho que se perde o contato com os colegas.'], ['Camille', 'Tu as raison, cependant on peut organiser des réunions en ligne.', 'Você tem razão, mas pode-se organizar reuniões online.'], ['Hugo', 'Oui, mais ce n\'est pas la même chose qu\'un café ensemble.', 'Sim, mas não é a mesma coisa que um café juntos.'], ['Camille', 'D\'accord. Alors, que penses-tu de deux jours chez soi et trois au bureau ?', 'De acordo. Então, o que acha de dois dias em casa e três no escritório?'], ['Hugo', 'Tout à fait, je trouve que c\'est un bon compromis.', 'Completamente, acho que é um bom compromisso.'],
      ]),
      producao(5, 'Defenda em voz alta uma posição sobre teletrabalho ou estudos online, em quatro passos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 48', [
      revisao(5, 'Debata em voz alta um tema simples: tese, argumento, concessão e conclusão.'),
      exercicios(20, [
        ouvir('À mon avis, c\'est une bonne idée', ['À mon avis, c\'est une bonne idée', 'À mon avis, c\'est une mauvaise idée', 'À ton avis, c\'est une bonne idée'], 'À mon avis, c\'est une bonne idée', 'Ouça «mon avis».'), ouvir('Tu as raison', ['Tu as raison', 'Tu as tort', 'Tu es raison'], 'Tu as raison', 'Ouça «raison».'), ouvir('Je ne suis pas tout à fait d\'accord', ['Je ne suis pas tout à fait d\'accord', 'Je suis tout à fait d\'accord', 'Je ne suis pas du tout d\'accord'], 'Je ne suis pas tout à fait d\'accord', 'Ouça «tout à fait».'),
        ditado('Je trouve que c\'est trop cher', 'Escreva: Je trouve que c\'est trop cher.'), ditado('Que penses-tu de ce film', 'Escreva: Que penses-tu de ce film ?'), ditado('Oui, mais ce n\'est pas la même chose', 'Escreva: Oui, mais ce n\'est pas la même chose.'),
        mc('Para contrariar uma negação:', ['si', 'oui', 'non'], 'si', '— Tu n\'es pas d\'accord ? — Si !'), mc('«Je ne pense pas que» pede:', ['subjuntivo', 'indicativo', 'condicional'], 'subjuntivo', 'Negação.'), mc('Qual frase está correta?', ['J\'ai raison.', 'Je suis raison.', 'Je fais raison.'], 'J\'ai raison.', '«Avoir raison».'), mc('Que penses-tu ___ ce film ?', ['de', 'à', 'sur'], 'de', 'Opinião: penser de.'),
        lacuna('Je suis d\'accord ___ toi.', ['avec', 'de', 'à'], 'avec', 'Concordar com alguém.'), lacuna('___ moi, c\'est trop cher. (para)', ['Pour', 'Par', 'En'], 'Pour', 'Opinião.'), lacuna('Il ___ tort. (avoir)', ['a', 'est', 'fait'], 'a', 'Avoir tort.'), lacuna('Je ne pense pas qu\'il ___ raison. (avoir)', ['ait', 'a', 'aura'], 'ait', 'Subjuntivo.'),
        ordem('Ordene: «Je trouve que c\'est trop cher.»', ['Je', 'trouve', 'que', 'c\'est', 'trop', 'cher'], 'Je trouve que c\'est trop cher.', 'Opinião.'), ordem('Ordene: «Tu as raison, mais c\'est cher.»', ['Tu', 'as', 'raison,', 'mais', 'c\'est', 'cher'], 'Tu as raison, mais c\'est cher.', 'Concessão.'),
        livre('Escreva em francês: Na minha opinião, o teletrabalho é uma boa ideia, mas acho que se perde o contato. Você tem razão.', 'À mon avis, le télétravail est une bonne idée, mais je trouve qu\'on perd le contact. Tu as raison.'),
      ]),
      producao(5, 'Fale 1 minuto defendendo ou criticando uma ideia, com tese, argumento e conclusão.'),
    ]),
  ],
});
