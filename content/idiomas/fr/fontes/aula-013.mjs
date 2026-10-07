import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 13, titulo: 'Gostos, pronomes tônicos e pronomes de objeto direto', nivel: 'a1',
  objetivo: 'Falar de gostos e opiniões, usar os pronomes tônicos («moi», «toi», «lui»…) e substituir um objeto direto por «le», «la», «l\'» e «les».',
  nota: 'Você dá opinião e evita repetir palavras. Próxima aula: querer, poder, dever e saber.',
  sessoes: [
    sessao('S1', 'Gostos e os pronomes tônicos', [
      revisao(5, 'Descreva em voz alta uma roupa e diga quanto você pagaria por ela.'),
      palavras(8, [
        ['adorer', 'adoré', 'adorar', ''], ['détester', 'detesté', 'detestar', ''], ['préférer', 'preferé', 'preferir', ''], ['moi', 'muá', 'eu, mim', ''], ['toi', 'tuá', 'você, ti', ''], ['lui', 'lüi', 'ele, a ele', ''], ['elle', 'él', 'ela', ''], ['eux', 'ö', 'eles (pronome tônico)', ''],
      ]),
      gramatica(12, 'Moi, toi, lui: os pronomes tônicos', 'PASSO 1: os pronomes tônicos são «moi, toi, lui, elle, nous, vous, eux, elles». Eles são usados quando o pronome fica sozinho ou fora do verbo. PASSO 2: depois de uma preposição: «avec moi», «chez lui», «pour toi», «sans elles». PASSO 3: sozinhos, em respostas curtas: «Qui parle ? — Moi.» PASSO 4: para dar ênfase ao sujeito: «Moi, j\'aime le fromage. Et toi, tu aimes ça ?» PASSO 5: depois de «c\'est»: «C\'est moi.» «C\'est lui.» PASSO 6: em comparações e com «aussi»: «Moi aussi.» «Moi non plus.» PASSO 7: «aimer», «adorer», «détester» + artigo definido: «J\'adore la musique. Je déteste le bruit.» «Préférer» muda de grafia: «je préfère, tu préfères, nous préférons, vous préférez, ils préfèrent». PASSO 8: depois de «préférer», o infinitivo: «Je préfère rester ici.»', {
        tag: 'Pronomes',
        comparacao: 'em português usamos «eu, tu, ele» como sujeito e «mim, ti» depois da preposição («comigo, contigo»). O francês tem uma série própria para a ênfase e para depois da preposição: «avec moi», «chez lui», sem formas de «comigo» como palavra única.',
        tabela: [
          { sujeito: 'je', tonico: 'moi', exemplo: 'Moi, j\'aime le café.' }, { sujeito: 'tu', tonico: 'toi', exemplo: 'Et toi ?' }, { sujeito: 'il', tonico: 'lui', exemplo: 'Je vais chez lui.' }, { sujeito: 'elle', tonico: 'elle', exemplo: 'Je parle avec elle.' }, { sujeito: 'nous', tonico: 'nous', exemplo: 'Nous, on aime ça.' }, { sujeito: 'vous', tonico: 'vous', exemplo: 'Et vous ?' }, { sujeito: 'ils', tonico: 'eux', exemplo: 'Je pars avec eux.' }, { sujeito: 'elles', tonico: 'elles', exemplo: 'C\'est pour elles.' },
        ],
        erros: [['Je vais avec je.', 'Je vais avec moi.', 'Depois de preposição, use o tônico.'], ['C\'est je.', 'C\'est moi.', 'Depois de «c\'est», o tônico.'], ['Je aime la musique.', 'J\'aime la musique.', 'Elisão diante de vogal.'], ['J\'aime musique.', 'J\'aime la musique.', 'O artigo definido é obrigatório depois de «aimer».']],
      }),
      producao(5, 'Responda em voz alta: «Qui aime le café ? Qui déteste la pluie ? Avec qui tu habites ?» usando «moi», «lui», «elle», «eux».'),
    ]),
    sessao('S2', 'Os pronomes de objeto direto', [
      revisao(4, 'Diga cinco frases com «moi», «toi», «lui», «elle» e «eux».'),
      palavras(6, [
        ['le', 'lê', 'o (ele, isso)', ''], ['la', 'la', 'a (ela)', ''], ['l\'', 'l', 'o, a (diante de vogal)', ''], ['les', 'lê', 'os, as', ''], ['me', 'me', 'me', ''], ['te', 'te', 'te, lhe', ''],
      ]),
      gramatica(12, 'Je le regarde: pronomes de objeto direto', 'PASSO 1: para não repetir o objeto, substitua-o por um pronome: «Je regarde le film» → «Je le regarde.» PASSO 2: «le» (masculino), «la» (feminino), «l\'» (vogal), «les» (plural). Também há «me, te, nous, vous»: «Il me regarde.» «Je vous écoute.» PASSO 3: o pronome vem ANTES do verbo conjugado, ao contrário do português («eu o vejo» é possível, mas «eu vejo ele» é comum): «Je le vois.» PASSO 4: na negação, o pronome fica entre o «ne» e o verbo: «Je ne le regarde pas.» PASSO 5: no futuro próximo, o pronome vai antes do infinitivo: «Je vais le regarder.» PASSO 6: respostas: «Tu aimes le fromage ? — Oui, je l\'aime.» «Tu regardes la télé ? — Non, je ne la regarde pas.» PASSO 7: no imperativo afirmativo, o pronome vai depois do verbo, com hífen: «Regarde-le !»; no negativo, antes: «Ne le regarde pas !» PASSO 8: para pessoas, o objeto direto pode ser «me, te, le, la, nous, vous, les»; o objeto indireto («à lui», «lui») é assunto da aula 17.', {
        tag: 'Pronomes',
        comparacao: 'em português dizemos «eu vejo ele» ou «eu o vejo». O francês usa sempre o pronome antes do verbo: «je le vois». O pronome de objeto direto francês substitui o substantivo na posição de pergunta «o quê?» ou «quem?».',
        tabela: [
          { objeto: 'le film (m.)', pronome: 'le', exemplo: 'Je le regarde.' }, { objeto: 'la télé (f.)', pronome: 'la', exemplo: 'Je la regarde.' }, { objeto: 'l\'ami (vogal)', pronome: 'l\'', exemplo: 'Je l\'écoute.' }, { objeto: 'les amis (pl.)', pronome: 'les', exemplo: 'Je les écoute.' }, { objeto: 'negativa', pronome: 'ne… le… pas', exemplo: 'Je ne le regarde pas.' }, { objeto: 'futuro próximo', pronome: 'aller + le + infinitivo', exemplo: 'Je vais le regarder.' },
        ],
        erros: [['Je regarde le.', 'Je le regarde.', 'O pronome vem antes do verbo.'], ['Je ne regarde pas le.', 'Je ne le regarde pas.', 'O pronome fica entre «ne» e o verbo.'], ['Je vais regarder le.', 'Je vais le regarder.', 'No futuro próximo, antes do infinitivo.'], ['Je la aime. (o filme)', 'Je l\'aime.', 'Elisão diante de vogal.']],
      }),
      producao(8, 'Responda a oito perguntas com pronomes: «Tu regardes la télé ? Tu écoutes la radio ? Tu manges le pain ? Tu aimes les enfants ?» etc.'),
    ]),
    sessao('S3', 'Opiniões em uma conversa', [
      revisao(4, 'Substitua o objeto por um pronome: «Je prends le bus. Je regarde la télé. J\'aime les fruits.»'),
      palavras(5, [
        ['intéressant', 'ẽteresã', 'interessante', ''], ['ennuyeux', 'ãnüiyö', 'chato', ''], ['drôle', 'drôl', 'engraçado', ''], ['facile', 'fasil', 'fácil', ''], ['difficile', 'difisil', 'difícil', ''],
      ]),
      gramatica(8, 'Dar opinião e reagir', 'PASSO 1: para opinar: «Je trouve que c\'est intéressant.» «Je pense que c\'est difficile.» «À mon avis, c\'est drôle.» PASSO 2: para reagir: «C\'est vrai.» «Je suis d\'accord.» «Je ne suis pas d\'accord.» «Ce n\'est pas vrai.» PASSO 3: para generalizar, use «c\'est» + adjetivo, que fica no masculino: «C\'est intéressant.» «C\'est facile.» PASSO 4: para gostar de uma coisa específica, «ça me plaît» ou «j\'aime ça»: «Ce film me plaît.» PASSO 5: «ça» (isto) é o pronome da fala: «J\'aime ça.» «Ça va ?» «Ça dépend.»', {
        tag: 'Opinião',
        comparacao: 'em português dizemos «eu acho que é interessante». O francês pede «que» depois de «je trouve» e «je pense»: «je trouve que c\'est intéressant». O «que» nunca some.',
        tabela: [
          { funcao: 'opinar', frase: 'Je trouve que c\'est intéressant.' }, { funcao: 'concordar', frase: 'Je suis d\'accord.' }, { funcao: 'discordar', frase: 'Je ne suis pas d\'accord.' }, { funcao: 'generalizar', frase: 'C\'est difficile, mais c\'est drôle.' }, { funcao: 'gostar', frase: 'Ce film me plaît.' },
        ],
        erros: [['Je pense c\'est intéressant.', 'Je pense que c\'est intéressant.', 'O «que» é obrigatório.'], ['Je suis agree.', 'Je suis d\'accord.', 'Expressão fixa.'], ['C\'est intéressante. (generalizando)', 'C\'est intéressant.', 'Fica no masculino.'], ['Je trouve que ça est difficile.', 'Je trouve que c\'est difficile.', '«Ça» não se junta a «est».']],
      }),
      dialogo(8, 'Au cinéma / No cinema', 'Emma e Thomas conversam sobre um filme.', [
        ['Emma', 'Tu as aimé le film ?', 'Você gostou do filme?'], ['Thomas', 'Oui, je l\'ai adoré ! Je trouve que c\'est très drôle. Et toi ?', 'Sim, adorei! Acho muito engraçado. E você?'], ['Emma', 'Moi aussi, j\'aime beaucoup. Mais je trouve que c\'est un peu long.', 'Eu também gosto muito. Mas acho que é um pouco longo.'], ['Thomas', 'À mon avis, ce n\'est pas long. C\'est intéressant du début à la fin.', 'Na minha opinião, não é longo. É interessante do começo ao fim.'], ['Emma', 'Tu as peut-être raison.', 'Talvez você tenha razão.'], ['Thomas', 'On regarde un autre film ce week-end ? Avec moi ?', 'Vemos outro filme no fim de semana? Comigo?'],
      ]),
      producao(5, 'Dê a sua opinião sobre três filmes, músicas ou comidas que você conhece, com «je trouve que» e «à mon avis».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 13', [
      revisao(5, 'Dê uma opinião, concorde e discorde de uma opinião em voz alta.'),
      exercicios(20, [
        ouvir('Je le regarde', ['Je le regarde', 'Je la regarde', 'Je les regarde'], 'Je le regarde', 'Ouça «le».'), ouvir('Moi, j\'aime le café', ['Moi, j\'aime le café', 'Toi, tu aimes le café', 'Lui, il aime le café'], 'Moi, j\'aime le café', 'Ouça «moi».'), ouvir('Je trouve que c\'est intéressant', ['Je trouve que c\'est intéressant', 'Je trouve que c\'est difficile', 'Je pense que c\'est drôle'], 'Je trouve que c\'est intéressant', 'Ouça «intéressant».'),
        ditado('Je ne le regarde pas', 'Escreva: Je ne le regarde pas.'), ditado('Je vais avec toi', 'Escreva: Je vais avec toi.'), ditado('À mon avis, c\'est facile', 'Escreva: À mon avis, c\'est facile.'),
        mc('Qual frase está correta?', ['Je le regarde.', 'Je regarde le.', 'Je regarde il.'], 'Je le regarde.', 'Pronome antes do verbo.'), mc('Como responder «C\'est qui ?»', ['C\'est moi.', 'C\'est je.', 'C\'est mon.'], 'C\'est moi.', 'Depois de «c\'est», o tônico.'), mc('Qual frase está correta na negação?', ['Je ne la regarde pas.', 'Je ne regarde pas la.', 'Je la ne regarde pas.'], 'Je ne la regarde pas.', 'Entre «ne» e o verbo.'), mc('Qual frase está correta?', ['Je pense que c\'est difficile.', 'Je pense c\'est difficile.', 'Je pense de c\'est difficile.'], 'Je pense que c\'est difficile.', '«Que» obrigatório.'),
        lacuna('Je vais chez ___ . (ele)', ['lui', 'il', 'son'], 'lui', 'Depois de preposição, tônico.'), lacuna('Tu aimes le fromage ? — Oui, je ___ aime.', ['l\'', 'le', 'la'], 'l\'', 'Elisão: «je l\'aime».'), lacuna('Je vais ___ regarder. (o filme)', ['le', 'la', 'les'], 'le', 'Antes do infinitivo.'), lacuna('Je ne suis pas ___ . (de acordo)', ['d\'accord', 'accord', 'd\'accorde'], 'd\'accord', 'Expressão fixa.'),
        ordem('Ordene: «Je ne le regarde pas.»', ['Je', 'ne', 'le', 'regarde', 'pas'], 'Je ne le regarde pas.', 'ne + pronome + verbo + pas.'), ordem('Ordene: «Moi aussi, j\'aime ça.»', ['Moi', 'aussi,', 'j\'aime', 'ça'], 'Moi aussi, j\'aime ça.', 'Ênfase + verbo.'),
        livre('Escreva em francês: Eu assisto ao filme. Eu o assisto. Eu não o assisto. Eu vou assisti-lo.', 'Je regarde le film. Je le regarde. Je ne le regarde pas. Je vais le regarder.'),
      ]),
      producao(5, 'Fale 1 minuto sobre as coisas de que você gosta e não gosta, com pronomes para não repetir as palavras.'),
    ]),
  ],
});
