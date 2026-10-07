import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 15, titulo: 'O passado com «avoir»: passé composé', nivel: 'a1',
  objetivo: 'Contar o que aconteceu usando o passé composé com «avoir», o particípio passado e a negação no passado.',
  nota: 'Você já consegue contar o que fez ontem. Próxima aula: o passado com «être».',
  sessoes: [
    sessao('S1', 'Formar o passé composé', [
      revisao(5, 'Diga o que você quer, pode e deve fazer hoje.'),
      palavras(8, [
        ['hier', 'iér', 'ontem', ''], ['avant-hier', 'avã-tiér', 'anteontem', ''], ['la semaine dernière', 'la sömén dérniér', 'semana passada', ''], ['l\'année dernière', 'lané dérniér', 'ano passado', ''], ['il y a deux jours', 'il i a dö jur', 'há dois dias', ''], ['déjà', 'dejá', 'já', ''], ['pas encore', 'pa zãcór', 'ainda não', ''], ['ce matin', 'sö maté̃', 'esta manhã', ''],
      ]),
      gramatica(12, 'J\'ai mangé: avoir + particípio', 'PASSO 1: o passé composé conta uma ação terminada. Forma-se com «avoir» no presente + particípio passado: «J\'ai mangé.» «Tu as parlé ?» PASSO 2: particípio dos verbos em -er: troque «-er» por «-é»: «parler → parlé, manger → mangé, regarder → regardé, travailler → travaillé». PASSO 3: verbos em -ir regulares: «-i»: «finir → fini, choisir → choisi». PASSO 4: verbos em -re regulares: «-u»: «vendre → vendu, attendre → attendu». PASSO 5: irregulares muito usados: «avoir → eu, être → été, faire → fait, prendre → pris, voir → vu, boire → bu, lire → lu, écrire → écrit, dire → dit, mettre → mis». PASSO 6: a conjugação de «avoir»: j\'ai, tu as, il a, nous avons, vous avez, ils ont. Assim: «Nous avons mangé.» «Ils ont fini.» PASSO 7: o particípio NÃO muda com o sujeito: «Elle a mangé», «Nous avons mangé». PASSO 8: use «hier», «la semaine dernière», «il y a deux jours» com o passé composé.', {
        tag: 'Passado',
        comparacao: 'em português há o pretérito perfeito simples: «comi», «falei». O francês fala assim: «j\'ai mangé», «j\'ai parlé». Escrito e falado, o passé composé é o passado comum.',
        tabela: [
          { infinitivo: 'parler', participio: 'parlé', exemplo: 'J\'ai parlé avec Marie.' }, { infinitivo: 'finir', participio: 'fini', exemplo: 'Tu as fini ?' }, { infinitivo: 'vendre', participio: 'vendu', exemplo: 'Il a vendu sa voiture.' }, { infinitivo: 'faire', participio: 'fait', exemplo: 'Nous avons fait un gâteau.' }, { infinitivo: 'prendre', participio: 'pris', exemplo: 'Elle a pris le bus.' }, { infinitivo: 'voir', participio: 'vu', exemplo: 'J\'ai vu un film.' }, { infinitivo: 'boire', participio: 'bu', exemplo: 'Ils ont bu du café.' },
        ],
        erros: [['J\'ai mange.', 'J\'ai mangé.', 'O particípio de -er termina em «-é».'], ['Je mangé hier.', 'J\'ai mangé hier.', 'Falta o «avoir».'], ['J\'ai prendu le bus.', 'J\'ai pris le bus.', '«Prendre» é irregular: «pris».'], ['Elle a mangée.', 'Elle a mangé.', 'Com «avoir», o particípio não varia (regra básica).']],
      }),
      producao(5, 'Conte em voz alta o que você fez ontem, em cinco frases com «j\'ai» + particípio.'),
    ]),
    sessao('S2', 'A negação e as perguntas no passado', [
      revisao(4, 'Diga o particípio de: «parler, finir, vendre, faire, prendre, voir, boire».'),
      palavras(6, [
        ['jamais', 'jamé', 'nunca', ''], ['rien', 'riã', 'nada', ''], ['personne', 'persón', 'ninguém', ''], ['déjà', 'dejá', 'já', ''], ['encore', 'ãcór', 'ainda, de novo', ''], ['toujours', 'tujur', 'sempre', ''],
      ]),
      gramatica(12, 'Je n\'ai pas mangé: negação no passado', 'PASSO 1: a negação envolve o auxiliar «avoir»: «Je n\'ai pas mangé.» «Tu n\'as pas fini.» «Elle n\'a pas parlé.» PASSO 2: «ne… jamais», «ne… rien», «ne… personne» também: «Je n\'ai jamais vu ça.» «Je n\'ai rien mangé.» PASSO 3: «personne» vai DEPOIS do particípio: «Je n\'ai vu personne.» PASSO 4: pergunta com «est-ce que»: «Est-ce que tu as mangé ?» ou entonação: «Tu as mangé ?» PASSO 5: pergunta com inversão: «As-tu mangé ?» «Avez-vous fini ?» PASSO 6: pronome antes do auxiliar: «Je l\'ai vu.» «Je ne l\'ai pas vu.» «Tu l\'as pris ?» PASSO 7: «déjà» e «encore» entre o auxiliar e o particípio: «Tu as déjà mangé ?» «Je n\'ai pas encore mangé.» PASSO 8: com pronome «en»: «J\'en ai pris deux.»', {
        tag: 'Passado',
        comparacao: 'em português dizemos «eu não comi». O francês nega o auxiliar e deixa o particípio intacto: «je n\'ai pas mangé». O pronome vem antes do auxiliar, não do particípio: «je l\'ai mangé».',
        tabela: [
          { frase: 'Je n\'ai pas mangé.', nota: 'ne + auxiliar + pas + particípio' }, { frase: 'Je n\'ai jamais vu ça.', nota: 'jamais depois do auxiliar' }, { frase: 'Je n\'ai rien pris.', nota: 'rien depois do auxiliar' }, { frase: 'Je n\'ai vu personne.', nota: 'personne depois do particípio' }, { frase: 'Je l\'ai vu.', nota: 'pronome antes do auxiliar' }, { frase: 'Tu as déjà mangé ?', nota: 'déjà entre auxiliar e particípio' },
        ],
        erros: [['Je ne mangé pas.', 'Je n\'ai pas mangé.', 'Falta o auxiliar.'], ['Je n\'ai mangé pas.', 'Je n\'ai pas mangé.', '«Pas» vem antes do particípio.'], ['J\'ai vu le.', 'Je l\'ai vu.', 'Pronome antes do auxiliar.'], ['Je n\'ai pas vu personne.', 'Je n\'ai vu personne.', 'Não use «pas» com «personne».']],
      }),
      producao(8, 'Responda em voz alta com negação: «Tu as mangé ? Tu as vu Marie ? Tu as pris le bus ? Tu as déjà fini ?»'),
    ]),
    sessao('S3', 'Contar uma história curta', [
      revisao(4, 'Substitua por pronomes: «J\'ai vu le film. J\'ai pris la voiture. J\'ai écouté les amis.»'),
      palavras(5, [
        ['d\'abord', 'dabór', 'primeiro', ''], ['puis', 'püi', 'depois', ''], ['ensuite', 'ãsüit', 'em seguida', ''], ['enfin', 'ãfẽ', 'por fim', ''], ['pendant', 'pãdã', 'durante', ''],
      ]),
      gramatica(8, 'Organizar o que aconteceu', 'PASSO 1: para organizar a história: «d\'abord», «puis», «ensuite», «enfin». PASSO 2: o passé composé responde a «o que aconteceu?»: «D\'abord, j\'ai pris le bus. Puis, j\'ai marché. Enfin, j\'ai mangé.» PASSO 3: marcadores de tempo vão no começo ou no fim: «Hier, j\'ai travaillé.» / «J\'ai travaillé hier.» PASSO 4: «pendant» + período: «J\'ai travaillé pendant trois heures.» PASSO 5: «il y a» + tempo = «há»: «Il y a deux jours, j\'ai vu Marc.»', {
        tag: 'Passado',
        comparacao: 'em português dizemos «há dois dias». O francês diz «il y a deux jours» e coloca o verbo no passé composé. Atenção: «il y a» aqui é «há» (tempo), não «existe».',
        tabela: [
          { palavra: 'd\'abord', funcao: 'primeiro' }, { palavra: 'puis / ensuite', funcao: 'depois' }, { palavra: 'enfin', funcao: 'por fim' }, { palavra: 'pendant', funcao: 'durante' }, { palavra: 'il y a', funcao: 'há (tempo)' },
        ],
        erros: [['Il a deux jours, j\'ai vu Marc.', 'Il y a deux jours, j\'ai vu Marc.', 'Expressão com «y».'], ['J\'ai travaillé pendant de trois heures.', 'J\'ai travaillé pendant trois heures.', 'Sem «de».'], ['Hier je travaille.', 'Hier, j\'ai travaillé.', 'Ontem pede o passado.'], ['Enfin, je mange.', 'Enfin, j\'ai mangé.', 'Passado pede «avoir».']],
      }),
      texto(8, 'Ma journée d\'hier / Meu dia de ontem', 'Hier, j\'ai pris le bus à huit heures. J\'ai travaillé pendant six heures. Puis, j\'ai mangé avec Marie. Ensuite, nous avons visité un musée. Enfin, j\'ai regardé un film et j\'ai dormi.', 'Ontem, peguei o ônibus às oito. Trabalhei durante seis horas. Depois, comi com Marie. Em seguida, visitamos um museu. Por fim, assisti a um filme e dormi.', [['Quand l\'auteur a-t-il pris le bus ?', 'Hier, à huit heures.'], ['Pendant combien de temps a-t-il travaillé ?', 'Pendant six heures.'], ['Avec qui a-t-il mangé ?', 'Avec Marie.'], ['Qu\'est-ce que l\'auteur a fait à la fin ?', 'Il a regardé un film et il a dormi.']]),
      producao(5, 'Conte o seu dia de ontem com «d\'abord, puis, ensuite, enfin».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 15', [
      revisao(5, 'Conte o que você fez no fim de semana passado.'),
      exercicios(20, [
        ouvir('J\'ai mangé', ['J\'ai mangé', 'Je mange', 'J\'ai mangée'], 'J\'ai mangé', 'Ouça o «é» final.'), ouvir('Je n\'ai pas fini', ['Je n\'ai pas fini', 'Je ne finis pas', 'Je n\'ai pas fait'], 'Je n\'ai pas fini', 'Ouça «fini».'), ouvir('Il y a deux jours', ['Il y a deux jours', 'Il a deux jours', 'Il y a trois jours'], 'Il y a deux jours', 'Ouça «il y a».'),
        ditado('J\'ai pris le bus', 'Escreva: J\'ai pris le bus.'), ditado('Je ne l\'ai pas vu', 'Escreva: Je ne l\'ai pas vu.'), ditado('Tu as déjà mangé ?', 'Escreva: Tu as déjà mangé ?'),
        mc('Particípio de «parler»:', ['parlé', 'parler', 'parlu'], 'parlé', '-er → -é.'), mc('Particípio de «prendre»:', ['pris', 'prendu', 'pri'], 'pris', 'Irregular.'), mc('Qual frase está correta?', ['Je n\'ai pas mangé.', 'Je ne mangé pas.', 'Je n\'ai mangé pas.'], 'Je n\'ai pas mangé.', 'Negação envolve o auxiliar.'), mc('Qual frase está correta?', ['Je l\'ai vu.', 'J\'ai le vu.', 'J\'ai vu le.'], 'Je l\'ai vu.', 'Pronome antes do auxiliar.'),
        lacuna('Nous ___ mangé. (avoir)', ['avons', 'sommes', 'a'], 'avons', 'Nous avons.'), lacuna('Ils ___ fini. (avoir)', ['ont', 'sont', 'a'], 'ont', 'Ils ont.'), lacuna('Elle a ___ un livre. (lire)', ['lu', 'lit', 'lisé'], 'lu', 'Irregular.'), lacuna('Je n\'ai ___ vu. (ninguém)', ['personne', 'rien', 'jamais'], 'personne', '«Personne» = ninguém.'),
        ordem('Ordene: «Hier, j\'ai travaillé.»', ['Hier,', 'j\'ai', 'travaillé'], 'Hier, j\'ai travaillé.', 'Tempo + auxiliar + particípio.'), ordem('Ordene: «Je n\'ai rien mangé.»', ['Je', 'n\'ai', 'rien', 'mangé'], 'Je n\'ai rien mangé.', 'ne + auxiliar + rien + particípio.'),
        livre('Escreva em francês: Ontem eu comi com Marie. Depois eu não vi ninguém.', 'Hier, j\'ai mangé avec Marie. Puis, je n\'ai vu personne.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você fez nos últimos três dias.'),
    ]),
  ],
});
