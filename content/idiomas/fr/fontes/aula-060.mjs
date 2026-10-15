import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 60, titulo: 'Estratégias para entender e para se fazer entender', nivel: 'b1',
  objetivo: 'Entender mais do que você sabe (palavras parecidas, famílias de palavras, falsos amigos), contornar palavras que faltam e pedir ajuda sem travar a conversa.',
  nota: 'Você tem ferramentas para continuar aprendendo sozinho. Próxima aula: revisão do B1.',
  sessoes: [
    sessao('S1', 'Entender mais do que você sabe', [
      revisao(5, 'Relate em voz alta uma conversa recente com três verbos de relato diferentes.'),
      palavras(8, [
        ['deviner', 'döviné', 'adivinhar', ''], ['le contexte', 'lö kõtékst', 'o contexto', ''], ['la racine', 'la rasin', 'a raiz', ''], ['le préfixe', 'lö préfiks', 'o prefixo', ''], ['le suffixe', 'lö süfiks', 'o sufixo', ''], ['un mot apparenté', 'ẽ mô aparãté', 'uma palavra aparentada', ''], ['un faux ami', 'ẽ fô zami', 'um falso amigo', ''], ['comprendre l\'essentiel', 'kõprãdr lésãsiél', 'entender o essencial', ''],
      ]),
      gramatica(12, 'Quatro atalhos de leitura e escuta', 'PASSO 1: palavras aparentadas: muitas palavras francesas se parecem com as portuguesas (-tion = -ção: «la décision», «l\'information»; -ité = -idade: «la qualité», «la liberté»; -eur = -or: «le professeur», «l\'acteur»). PASSO 2: família de palavras: «travailler, travail, travailleur, travaillé» partilham a raiz. Se você conhece uma, entende as outras. PASSO 3: prefixos: «re-» = de novo («refaire»), «in-/im-» = negação («impossible»), «dé-» = desfazer («défaire»), «pré-» = antes («prévoir»). PASSO 4: contexto: leia a frase toda e pergunte-se que tipo de palavra falta (pessoa, ação, lugar). PASSO 5: na escuta, procure primeiro as palavras que você conhece e as numerais e nomes próprios; o essencial costuma estar aí. PASSO 6: não pare em uma palavra desconhecida: continue e volte depois.', {
        tag: 'Estratégias',
        comparacao: 'em português, as terminações «-ção» e «-dade» têm correspondente em francês («-tion», «-té»). Isso dá um vocabulário passivo enorme de graça. Cuidado só com os falsos amigos, que veremos a seguir.',
        tabela: [
          { expressao: '-tion = -ção', funcao: 'palavras aparentadas', exemplo: 'la décision, l\'information' }, { expressao: '-té = -dade', funcao: 'palavras aparentadas', exemplo: 'la qualité, la liberté' }, { expressao: '-eur = -or', funcao: 'palavras aparentadas', exemplo: 'le professeur, l\'acteur' }, { expressao: 're-', funcao: 'de novo', exemplo: 'refaire, relire' }, { expressao: 'in-, im-', funcao: 'negação', exemplo: 'impossible, inutile' }, { expressao: 'dé-', funcao: 'desfazer', exemplo: 'défaire, décoller' },
        ],
        erros: [['Il est impossible. (por «possível»)', 'Il est possible.', 'Prefixo «im-» nega.'], ['la libertad', 'la liberté', 'Terminação francesa «-té».'], ['l\'informaçion', 'l\'information', 'Terminação «-tion».'], ['le professor', 'le professeur', 'Terminação «-eur».']],
      }),
      producao(5, 'Leia em voz alta o texto «Un message de l\'hôtel» abaixo e diga só o essencial em português.'),
    ]),
    sessao('S2', 'Falsos amigos', [
      revisao(4, 'Dê um exemplo de cada atalho: palavra aparentada, família, prefixo.'),
      palavras(6, [
        ['rester', 'résté', 'ficar (não «restar»)', ''], ['demander', 'dömãdé', 'pedir, perguntar (não «demandar»)', ''], ['attendre', 'atãdr', 'esperar (não «atender»)', ''], ['exprès', 'ékspré', 'de propósito (não «expresso»)', ''], ['sale', 'sal', 'sujo (não «sal»)', ''], ['ignorer', 'iniôré', 'não saber (não «ignorar»)', ''],
      ]),
      gramatica(12, 'Cuidado com as armadilhas', 'PASSO 1: «rester» = ficar: «Je reste à Paris.» (não «restar») PASSO 2: «demander» = pedir ou perguntar: «Il demande un café.» «Elle demande l\'heure.» PASSO 3: «attendre» = esperar: «J\'attends le bus.» PASSO 4: «exprès» = de propósito: «Il l\'a fait exprès.» PASSO 5: «sale» = sujo: «Mes mains sont sales.» PASSO 6: «ignorer» = não saber: «J\'ignore la réponse.» PASSO 7: «magasin» = loja (não «magazine»): «Il y a un magasin près d\'ici.» PASSO 8: «blesser» = ferir: «Il s\'est blessé à la jambe.» PASSO 9: «tirer» = puxar: «Tirez la porte.»', {
        tag: 'Falsos amigos',
        comparacao: 'em português «esperar» e «atender» são os que mais confundem: o francês «attendre» é esperar, não atender. E «ignorer» não é fingir que não vê, e sim não saber: «j\'ignore» = «eu não sei».',
        tabela: [
          { expressao: 'rester', funcao: 'ficar', exemplo: 'Je reste à Paris.' }, { expressao: 'demander', funcao: 'pedir, perguntar', exemplo: 'Elle demande l\'heure.' }, { expressao: 'attendre', funcao: 'esperar', exemplo: 'J\'attends le bus.' }, { expressao: 'exprès', funcao: 'de propósito', exemplo: 'Il l\'a fait exprès.' }, { expressao: 'sale', funcao: 'sujo', exemplo: 'Mes mains sont sales.' }, { expressao: 'ignorer', funcao: 'não saber', exemplo: 'J\'ignore la réponse.' },
        ],
        erros: [['J\'attends le client. (por «atendo»)', 'Je reçois le client. / Je sers le client.', '«Attendre» é esperar.'], ['Il a fait ça expresso.', 'Il a fait ça exprès.', '«Exprès»: de propósito.'], ['Je demande si tu as faim. (por «exijo»)', 'Je te demande si tu as faim.', '«Demander» é pedir ou perguntar, nunca exigir.'], ['Mon pull est sal.', 'Mon pull est sale.', 'Adjetivo «sale».']],
      }),
      producao(8, 'Diga em voz alta seis frases, uma com cada falso amigo: rester, demander, attendre, exprès, sale, ignorer.'),
    ]),
    sessao('S3', 'Quando faltam palavras', [
      revisao(4, 'Explique em francês uma palavra sem dizê-la: «un truc qui sert à…».'),
      palavras(5, [
        ['comment dit-on…', 'komã di tõ', 'como se diz…', ''], ['c\'est-à-dire', 'sé ta dir', 'ou seja', ''], ['un truc qui sert à', 'ẽ trük ki sér a', 'uma coisa que serve para', ''], ['je veux dire', 'jö vö dir', 'quero dizer', ''], ['répéter', 'répété', 'repetir', ''],
      ]),
      gramatica(8, 'Contornar e pedir ajuda', 'PASSO 1: pergunte a palavra: «Comment dit-on "ferramenta" en français ?» PASSO 2: descreva: «C\'est un truc qui sert à couper.» «C\'est quelque chose qu\'on utilise pour…» PASSO 3: use outra palavra mais simples: «Je veux dire…», «c\'est-à-dire…» PASSO 4: peça para repetir: «Pouvez-vous répéter, s\'il vous plaît ?» «Pouvez-vous parler plus lentement ?» PASSO 5: confirme: «Si j\'ai bien compris, vous voulez dire que…» PASSO 6: ganhe tempo: «Euh… comment dire…», «Attendez, je réfléchis.»', {
        tag: 'Compensação',
        comparacao: 'em português dizemos «aquela coisa que serve pra…» sem constrangimento. Em francês, «un truc qui sert à…» faz o mesmo papel e é completamente natural; usar isso é sinal de estratégia, não de fraqueza.',
        tabela: [
          { situacao: 'pedir uma palavra', formal: 'Comment dit-on… en français ?', informal: 'Ça se dit comment ?' }, { situacao: 'descrever', formal: 'C\'est un objet qui sert à…', informal: 'C\'est un truc pour…' }, { situacao: 'repetir', formal: 'Pourriez-vous répéter ?', informal: 'Tu peux répéter ?' }, { situacao: 'devagar', formal: 'Pourriez-vous parler plus lentement ?', informal: 'Plus doucement, s\'il te plaît.' }, { situacao: 'confirmar', formal: 'Si j\'ai bien compris, vous voulez dire…', informal: 'Donc tu veux dire que…' }, { situacao: 'ganhar tempo', formal: 'Attendez, je réfléchis.', informal: 'Euh… comment dire…' },
        ],
        erros: [['Comment dit-on en français "ferramenta" ?', 'Comment dit-on "ferramenta" en français ?', 'Ordem.'], ['Pouvez-vous répéter plus devagar ?', 'Pouvez-vous parler plus lentement ?', 'Sem misturar idiomas.'], ['J\'ai pas compris rien.', 'Je n\'ai rien compris.', 'Negação.'], ['Parlez plus lent.', 'Parlez plus lentement.', 'Advérbio.']],
      }),
      texto(8, 'Un message de l\'hôtel / Uma mensagem do hotel', 'Madame, Monsieur, nous vous informons que la piscine sera fermée demain pour des raisons de sécurité. Le petit déjeuner sera servi à partir de huit heures dans la salle principale. Si vous avez des questions, vous pouvez demander à la réception. Nous vous remercions de votre compréhension et vous souhaitons un agréable séjour.', 'Senhora, Senhor, informamos que a piscina estará fechada amanhã por razões de segurança. O café da manhã será servido a partir das oito horas no salão principal. Se tiverem dúvidas, podem perguntar na recepção. Agradecemos a compreensão e desejamos uma agradável estadia.', [['O que estará fechado amanhã?', 'A piscina.'], ['Onde será servido o café da manhã?', 'No salão principal.'], ['A quem fazer perguntas?', 'À recepção.']]),
      producao(5, 'Simule em voz alta: você não sabe uma palavra e precisa explicá-la a um francês sem dizer o equivalente em português.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 60', [
      revisao(5, 'Diga em voz alta cinco palavras francesas que você entendeu só por parecerem com o português.'),
      exercicios(20, [
        ouvir('Il l\'a fait exprès', ['Il l\'a fait exprès', 'Il l\'a fait expresso', 'Il l\'a fait express'], 'Il l\'a fait exprès', 'De propósito.'), ouvir('J\'attends le bus', ['J\'attends le bus', 'J\'atends le bus', 'J\'attend le bus'], 'J\'attends le bus', 'Esperar.'), ouvir('J\'ignore la réponse', ['J\'ignore la réponse', 'J\'ignore à la réponse', 'Je ignore la réponse'], 'J\'ignore la réponse', 'Não saber.'),
        ditado('Comment dit-on ferramenta en français', 'Escreva: Comment dit-on ferramenta en français.'), ditado('Pouvez-vous répéter, s\'il vous plaît', 'Escreva: Pouvez-vous répéter, s\'il vous plaît.'), ditado('Mes mains sont sales', 'Escreva: Mes mains sont sales.'),
        mc('«Attendre» significa:', ['esperar', 'atender', 'alcançar'], 'esperar', 'Falso amigo.'), mc('«Sale» significa:', ['sujo', 'sal', 'sala'], 'sujo', 'Falso amigo.'), mc('«Ignorer» significa:', ['não saber', 'fingir que não vê', 'esquecer'], 'não saber', 'Falso amigo.'), mc('Para pedir que repitam:', ['Pourriez-vous répéter ?', 'Vous répétez !', 'Répétez-vous ?'], 'Pourriez-vous répéter ?', 'Educado.'),
        lacuna('La ___ est une qualité. (-dade)', ['liberté', 'libertad', 'libertade'], 'liberté', 'Terminação «-té».'), lacuna('C\'est un truc ___ sert à couper.', ['qui', 'que', 'dont'], 'qui', 'Sujeito.'), lacuna('Elle ___ l\'heure. (perguntar)', ['demande', 'attend', 'reste'], 'demande', '«Demander».'), lacuna('Je ___ à Paris. (ficar)', ['reste', 'rest', 'restar'], 'reste', '«Rester».'),
        ordem('Ordene: «Si j\'ai bien compris, vous voulez dire non.»', ['Si', 'j\'ai', 'bien', 'compris,', 'vous', 'voulez', 'dire', 'non'], 'Si j\'ai bien compris, vous voulez dire non.', 'Confirmar.'), ordem('Ordene: «Parlez plus lentement, s\'il vous plaît.»', ['Parlez', 'plus', 'lentement,', 's\'il', 'vous', 'plaît'], 'Parlez plus lentement, s\'il vous plaît.', 'Pedido.'),
        livre('Escreva em francês: Como se diz «tesoura» em francês? Pode repetir, por favor? Ele fez isso de propósito.', 'Comment dit-on « tesoura » en français ? Pouvez-vous répéter, s\'il vous plaît ? Il l\'a fait exprès.'),
        lacuna('«Informação» em francês é «l\'___ ».', ['information', 'informacion', 'informação'], 'information', '-ção corresponde a «-tion».'),
        lacuna('Il a quitté la pièce ___ . (de propósito)', ['expresso', 'exprès', 'express'], 'exprès', '«Exprès» = de propósito.'),
        lacuna('Mes chaussures sont ___ . (sujas)', ['sels', 'sal', 'sales'], 'sales', '«Sale» = sujo; o plural leva «s».'),
        lacuna('Pouvez-vous parler plus ___ ? (devagar)', ['lentement', 'lent', 'lente'], 'lentement', 'Advérbio de modo: «lentement».'),
        lacuna('J\'___ la réponse. (não sei)', ['ignorer', 'ignore', 'ignores'], 'ignore', '«Ignorer» = não saber.'),
        mc('O que significa «rester»?', ['restar', 'descansar', 'ficar'], 'ficar', '«Rester» = ficar.'),
        mc('O que significa «demander»?', ['pedir ou perguntar', 'atender', 'esperar'], 'pedir ou perguntar', '«Demander» = pedir, perguntar.'),
        mc('O que significa «magasin»?', ['revista', 'loja', 'magazine de TV'], 'loja', '«Magasin» = loja.'),
        mc('Qual frase confirma a compreensão?', ['Je comprends rien du tout, merci.', 'Répétez !', 'Si j\'ai bien compris, vous voulez dire que…'], 'Si j\'ai bien compris, vous voulez dire que…', 'É a fórmula para checar o que se entendeu.'),
        ordem('Ordene: «Quero dizer que é difícil.»', ['Je', 'veux', 'dire', 'que', 'c\'est', 'difficile'], 'Je veux dire que c\'est difficile.', '«Je veux dire que» reformula.'),
        ordem('Ordene: «Espere, estou pensando.»', ['Attendez,', 'je', 'réfléchis'], 'Attendez, je réfléchis.', 'Ganhar tempo na fala.'),
        livre('Escreva em francês: Estou esperando meu amigo. Ela pergunta as horas.', 'J\'attends mon ami. Elle demande l\'heure.'),
        livre('Escreva em francês: Pode falar mais devagar, por favor? Quero dizer que não entendi.', 'Pouvez-vous parler plus lentement, s\'il vous plaît ? Je veux dire que je n\'ai pas compris.'),
      ]),
      producao(5, 'Fale 1 minuto descrevendo um objeto sem dizer seu nome, até alguém adivinhar.'),
    ]),
  ],
});
