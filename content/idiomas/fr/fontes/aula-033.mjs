import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 33, titulo: 'Negações e palavras indefinidas', nivel: 'a2',
  objetivo: 'Usar «ne… jamais», «ne… rien», «ne… personne», «ne… plus», «ne… aucun», «ni… ni…» e os indefinidos «tout», «chaque», «plusieurs», «quelqu\'un», «quelque chose».',
  nota: 'Você nega e generaliza com precisão. Próxima aula: perguntas, conectores e como organizar o discurso.',
  sessoes: [
    sessao('S1', 'As negações além do «pas»', [
      revisao(5, 'Convide alguém e responda a um convite com uma razão.'),
      palavras(8, [
        ['jamais', 'jamé', 'nunca', ''], ['rien', 'riã', 'nada', ''], ['personne', 'persón', 'ninguém', ''], ['plus', 'plü', 'não mais', ''], ['aucun', 'ôkẽ', 'nenhum', ''], ['pas encore', 'pa zãkór', 'ainda não', ''], ['ni… ni…', 'ni… ni…', 'nem… nem…', ''], ['seulement', 'sölmã', 'somente', ''],
      ]),
      gramatica(12, 'Je ne vois rien, je ne vois personne', 'PASSO 1: a negação francesa tem duas partes: «ne» antes do verbo e uma palavra depois: «pas, jamais, rien, personne, plus, aucun, pas encore». PASSO 2: «ne… jamais»: «Je ne mange jamais de viande.» PASSO 3: «ne… rien»: «Je ne vois rien.» «Il n\'y a rien.» PASSO 4: «ne… personne»: «Je ne connais personne ici.» PASSO 5: «ne… plus» (não mais): «Je ne fume plus.» PASSO 6: «ne… aucun(e)» (nenhum): «Je n\'ai aucune idée.» PASSO 7: «ne… pas encore» (ainda não): «Je n\'ai pas encore mangé.» PASSO 8: no passé composé, «pas, jamais, rien, plus» ficam entre o auxiliar e o particípio: «Je n\'ai rien vu.» «Je n\'ai jamais mangé.» Mas «personne» e «aucun» vão DEPOIS do particípio: «Je n\'ai vu personne.» «Je n\'ai lu aucun livre.» PASSO 9: na fala, o «ne» costuma cair: «Je sais pas.» «Je vois rien.» Na escrita e em contextos formais, mantenha o «ne». PASSO 10: «personne», «rien», «jamais» também funcionam sozinhos como resposta: «Qui est là ? — Personne.»', {
        tag: 'Negação',
        comparacao: 'em português dizemos «não vejo nada», «não conheço ninguém», «nunca como carne», com dupla negação. O francês faz o mesmo: «ne… rien», «ne… personne», «ne… jamais». O erro dos brasileiros é esquecer o «ne» na escrita ou pôr um «pas» a mais: «je ne vois pas rien» é erro.',
        tabela: [
          { negacao: 'ne… pas', sentido: 'não', exemplo: 'Je ne parle pas.' }, { negacao: 'ne… jamais', sentido: 'nunca', exemplo: 'Je ne mange jamais de viande.' }, { negacao: 'ne… rien', sentido: 'nada', exemplo: 'Je ne vois rien.' }, { negacao: 'ne… personne', sentido: 'ninguém', exemplo: 'Je ne connais personne.' }, { negacao: 'ne… plus', sentido: 'não mais', exemplo: 'Je ne fume plus.' }, { negacao: 'ne… aucun', sentido: 'nenhum', exemplo: 'Je n\'ai aucune idée.' }, { negacao: 'ne… pas encore', sentido: 'ainda não', exemplo: 'Je n\'ai pas encore mangé.' },
        ],
        erros: [['Je ne vois pas rien.', 'Je ne vois rien.', 'Sem «pas» com «rien».'], ['Je n\'ai vu rien.', 'Je n\'ai rien vu.', '«Rien» entre o auxiliar e o particípio.'], ['Je n\'ai personne vu.', 'Je n\'ai vu personne.', '«Personne» depois do particípio.'], ['Je ne jamais mange de viande.', 'Je ne mange jamais de viande.', '«Jamais» depois do verbo.']],
      }),
      producao(5, 'Responda em voz alta com negação: «Tu manges de la viande ? Tu connais quelqu\'un ici ? Tu vois quelque chose ?»'),
    ]),
    sessao('S2', 'Os indefinidos', [
      revisao(4, 'Diga cinco frases com «ne… rien», «ne… personne», «ne… jamais», «ne… plus» e «ne… aucun».'),
      palavras(6, [
        ['tout', 'tu', 'tudo, todo', ''], ['chaque', 'xak', 'cada', ''], ['plusieurs', 'plüziör', 'vários', ''], ['quelqu\'un', 'kelkẽ', 'alguém', ''], ['quelque chose', 'kelkö xôz', 'alguma coisa', ''], ['quelques', 'kelkö', 'alguns', ''],
      ]),
      gramatica(12, 'Tout, chaque, plusieurs, quelqu\'un', 'PASSO 1: «tout» (todo, tudo): masculino «tout», feminino «toute», plurais «tous» e «toutes»: «tout le monde» (todos), «toute la journée» (o dia todo), «tous les jours» (todos os dias), «toutes les semaines» (todas as semanas). PASSO 2: «tout» como pronome: «Je comprends tout.» «Tout va bien.» «Tous sont venus.» PASSO 3: «chaque» + substantivo no singular (cada): «chaque jour, chaque matin, chaque personne». PASSO 4: «plusieurs» + plural (vários): «plusieurs amis, plusieurs fois». PASSO 5: «quelques» + plural (alguns): «quelques minutes, quelques livres». PASSO 6: «quelqu\'un» (alguém) e «quelque chose» (alguma coisa), com adjetivo, usam «de»: «quelqu\'un de gentil», «quelque chose de bon». PASSO 7: «tout le monde» pede verbo no singular: «Tout le monde est là.» PASSO 8: «n\'importe» (qualquer): «n\'importe qui, n\'importe quoi, n\'importe où, n\'importe quand».', {
        tag: 'Indefinidos',
        comparacao: 'em português «todo mundo» e «todos» são parecidos. O francês exige o artigo depois de «tout»: «tout LE monde», «tous LES jours», «toute LA journée». Sem o artigo, a frase soa estranha.',
        tabela: [
          { palavra: 'tout le monde', sentido: 'todo mundo', exemplo: 'Tout le monde est là.' }, { palavra: 'tous les jours', sentido: 'todos os dias', exemplo: 'Je travaille tous les jours.' }, { palavra: 'toute la journée', sentido: 'o dia todo', exemplo: 'Il pleut toute la journée.' }, { palavra: 'chaque + singular', sentido: 'cada', exemplo: 'Chaque matin, je cours.' }, { palavra: 'plusieurs + plural', sentido: 'vários', exemplo: 'J\'ai plusieurs amis.' }, { palavra: 'quelqu\'un de + adj.', sentido: 'alguém (adjetivo)', exemplo: 'C\'est quelqu\'un de gentil.' },
        ],
        erros: [['Tous jours, je travaille.', 'Tous les jours, je travaille.', 'Falta o artigo.'], ['Chaque jours.', 'Chaque jour.', '«Chaque» + singular.'], ['Tout le monde sont là.', 'Tout le monde est là.', 'Singular.'], ['Quelqu\'un gentil.', 'Quelqu\'un de gentil.', '«De» antes do adjetivo.']],
      }),
      producao(8, 'Descreva em voz alta a sua semana: «Tous les jours… Chaque matin… Plusieurs fois par semaine… Quelqu\'un de… »'),
    ]),
    sessao('S3', 'Ni… ni… e as respostas curtas', [
      revisao(4, 'Diga três frases com «tout», «chaque» e «plusieurs».'),
      palavras(5, [
        ['ni… ni…', 'ni… ni…', 'nem… nem…', ''], ['ne… que', 'nö… kö', 'só', ''], ['non plus', 'nõ plü', 'também não', ''], ['moi non plus', 'muá nõ plü', 'eu também não', ''], ['pas du tout', 'pa dü tu', 'de jeito nenhum', ''],
      ]),
      gramatica(8, 'Respostas curtas e restrição', 'PASSO 1: «ni… ni…» (nem… nem…): «Je ne bois ni café ni thé.» PASSO 2: «ne… que» (só, apenas): «Je n\'ai que dix euros.» (tenho só dez euros) PASSO 3: respostas curtas: «Moi non plus.» (eu também não) «Moi si !» (eu sim, contrariando uma negação) «Pas du tout.» (de jeito nenhum) PASSO 4: «si» contradiz uma frase negativa: «Tu n\'aimes pas le café ? — Si, j\'aime ça !» PASSO 5: «oui» responde a uma pergunta afirmativa; «si» a uma negativa: «Tu viens ? — Oui.» «Tu ne viens pas ? — Si, je viens.»', {
        tag: 'Negação',
        comparacao: 'em português respondemos «sim» a «você não vem?» e a confusão é comum. O francês tem «si» só para contradizer uma negação: «Tu ne viens pas ? — Si !» (venho sim). Dizer «oui» aí soa como «não venho».',
        tabela: [
          { frase: 'Je ne bois ni café ni thé.', sentido: 'nem… nem…' }, { frase: 'Je n\'ai que dix euros.', sentido: 'só tenho dez euros' }, { frase: 'Moi non plus.', sentido: 'eu também não' }, { frase: 'Tu ne viens pas ? — Si !', sentido: 'venho sim' }, { frase: 'Pas du tout.', sentido: 'de jeito nenhum' },
        ],
        erros: [['Tu ne viens pas ? — Oui.', 'Tu ne viens pas ? — Si.', 'Contradizer: «si».'], ['Je ne bois ni café et thé.', 'Je ne bois ni café ni thé.', '«Ni… ni…».'], ['Je n\'ai seulement dix euros.', 'Je n\'ai que dix euros.', '«Ne… que».'], ['Moi aussi pas.', 'Moi non plus.', '«Non plus».']],
      }),
      dialogo(8, 'Au restaurant / No restaurante', 'Julien e Marie conversam à mesa sobre o que não gostam.', [
        ['Julien', 'Tu ne manges pas de viande ?', 'Você não come carne?'], ['Marie', 'Si, mais je n\'en mange jamais le soir. Et toi ?', 'Como sim, mas nunca à noite. E você?'], ['Julien', 'Moi, je n\'aime ni la viande ni le poisson. Je suis végétarien.', 'Eu não gosto nem de carne nem de peixe. Sou vegetariano.'], ['Marie', 'Ah bon ? Alors il n\'y a rien pour toi sur ce menu !', 'Ah, é? Então não há nada para você neste cardápio!'], ['Julien', 'Si, il y a plusieurs plats avec des légumes.', 'Sim, há vários pratos com legumes.'], ['Marie', 'Tant mieux ! Je n\'ai plus faim pour la viande, de toute façon.', 'Que bom! Já não tenho fome de carne, de qualquer forma.'],
      ]),
      producao(5, 'Responda em voz alta a perguntas negativas com «si» e «moi non plus».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 33', [
      revisao(5, 'Diga o que você nunca faz, ninguém que você conhece e o que não vê.'),
      exercicios(20, [
        ouvir('Je ne vois rien', ['Je ne vois rien', 'Je ne vois personne', 'Je ne vois pas'], 'Je ne vois rien', 'Ouça «rien».'), ouvir('Je n\'ai vu personne', ['Je n\'ai vu personne', 'Je n\'ai rien vu', 'Je n\'ai pas vu'], 'Je n\'ai vu personne', 'Ouça «personne».'), ouvir('Tu ne viens pas ? Si !', ['Tu ne viens pas ? Si !', 'Tu viens ? Oui !', 'Tu ne viens pas ? Non !'], 'Tu ne viens pas ? Si !', 'Ouça «si».'),
        ditado('Je ne mange jamais de viande', 'Escreva: Je ne mange jamais de viande.'), ditado('Tout le monde est là', 'Escreva: Tout le monde est là.'), ditado('Je n\'ai rien vu', 'Escreva: Je n\'ai rien vu.'),
        mc('Qual frase está correta?', ['Je ne vois rien.', 'Je ne vois pas rien.', 'Je vois ne rien.'], 'Je ne vois rien.', 'Sem «pas».'), mc('Qual frase está correta?', ['Je n\'ai vu personne.', 'Je n\'ai personne vu.', 'Je n\'ai pas vu personne.'], 'Je n\'ai vu personne.', 'Depois do particípio.'), mc('«Eu também não» em francês:', ['Moi non plus.', 'Moi aussi pas.', 'Moi pas aussi.'], 'Moi non plus.', 'Expressão fixa.'), mc('«Tu ne viens pas ?» Contradizer:', ['Si, je viens.', 'Oui, je viens.', 'Si, je viens pas.'], 'Si, je viens.', '«Si» contradiz a negação.'),
        lacuna('Je travaille ___ les jours. (todos)', ['tous', 'tout', 'toute'], 'tous', 'Plural masculino.'), lacuna('Il pleut ___ la journée.', ['toute', 'tout', 'tous'], 'toute', 'Feminino singular.'), lacuna('C\'est quelqu\'un ___ gentil.', ['de', 'à', 'd\''], 'de', '«Quelqu\'un de».'), lacuna('Je n\'ai ___ dix euros. (só)', ['que', 'seulement', 'rien'], 'que', '«Ne… que».'),
        ordem('Ordene: «Je ne connais personne ici.»', ['Je', 'ne', 'connais', 'personne', 'ici'], 'Je ne connais personne ici.', 'ne + verbo + personne.'), ordem('Ordene: «Je n\'ai rien mangé.»', ['Je', 'n\'ai', 'rien', 'mangé'], 'Je n\'ai rien mangé.', 'ne + auxiliar + rien + particípio.'),
        livre('Escreva em francês: Eu nunca como carne. Não vejo ninguém. Todos os dias eu trabalho. Não tenho nenhuma ideia.', 'Je ne mange jamais de viande. Je ne vois personne. Tous les jours, je travaille. Je n\'ai aucune idée.'),
        lacuna('Il ne mange ___ de viande. (nunca)', ['jamais', 'rien', 'personne'], 'jamais', '«Ne… jamais» = nunca.'),
        lacuna('Elle n\'a lu ___ livre. (nenhum)', ['aucune', 'aucun', 'rien'], 'aucun', '«Livre» é masculino: «aucun».'),
        lacuna('Je ne fume ___ . (não mais)', ['rien', 'personne', 'plus'], 'plus', '«Ne… plus» = não mais.'),
        lacuna('Je ne bois ni café ___ thé. (nem)', ['ni', 'et', 'ou'], 'ni', 'A estrutura é «ni… ni…».'),
        lacuna('Tu n\'aimes pas le café ? — ___ , j\'aime ça ! (sim)', ['Oui', 'Si', 'Non'], 'Si', '«Si» contradiz uma pergunta negativa.'),
        mc('Qual frase está correta?', ['Je n\'ai mangé jamais ça.', 'Je ne jamais ai mangé ça.', 'Je n\'ai jamais mangé ça.'], 'Je n\'ai jamais mangé ça.', '«Jamais» fica entre o auxiliar e o particípio.'),
        mc('Qual frase está correta?', ['Chaque jour, je travaille.', 'Chaque jours, je travaille.', 'Chaque le jour, je travaille.'], 'Chaque jour, je travaille.', '«Chaque» + substantivo singular, sem artigo.'),
        mc('Como se diz «alguma coisa de bom»?', ['quelque chose bon', 'quelque chose de bon', 'quelque chose du bon'], 'quelque chose de bon', 'Com adjetivo, usa-se «de».'),
        mc('O que significa «Je n\'ai que dix euros»?', ['Não tenho dez euros', 'Tenho mais de dez euros', 'Tenho só dez euros'], 'Tenho só dez euros', '«Ne… que» = só.'),
        ordem('Ordene: «Eu não bebo nem café nem chá.»', ['Je', 'ne', 'bois', 'ni', 'café', 'ni', 'thé'], 'Je ne bois ni café ni thé.', '«Ni… ni…» = nem… nem…'),
        ordem('Ordene: «Não há nenhum problema aqui.»', ['Il', 'n\'y', 'a', 'aucun', 'problème', 'ici'], 'Il n\'y a aucun problème ici.', '«Aucun» concorda com «problème».'),
        livre('Escreva em francês: Eu não vejo nada. Ele nunca vem.', 'Je ne vois rien. Il ne vient jamais.'),
        livre('Escreva em francês: Eu só tenho cinco euros. Vários amigos estão aqui.', 'Je n\'ai que cinq euros. Plusieurs amis sont ici.'),
      ]),
      producao(5, 'Fale 1 minuto sobre as coisas que você nunca, quase nunca ou sempre faz, usando as negações e os indefinidos.'),
    ]),
  ],
});
