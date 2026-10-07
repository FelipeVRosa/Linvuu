import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 2, titulo: 'Quem sou eu: o verbo être e os adjetivos', nivel: 'a1',
  objetivo: 'Dizer quem você é e como está com «être» (ser e estar), escolher entre «tu» e «vous», usar adjetivos no masculino e no feminino, negar e perguntar.',
  nota: 'Você fala de si com o verbo mais importante do francês. Próxima aula: apresentações, países, números e idade.',
  sessoes: [
    sessao('S1', 'Je suis, tu es, il est', [
      revisao(5, 'Soletre o seu nome em francês e diga as saudações da aula 1.'),
      palavras(8, [
        ['je', 'je', 'eu', ''], ['tu', 'tü', 'você, tu (informal)', ''], ['il', 'il', 'ele', ''], ['elle', 'él', 'ela', ''], ['nous', 'nu', 'nós', ''], ['vous', 'vu', 'você (formal), vocês, o senhor', ''], ['ils', 'il', 'eles', ''], ['elles', 'él', 'elas', ''],
      ]),
      gramatica(12, 'O verbo être: ser e estar', 'PASSO 1: «être» é o verbo mais importante: significa «ser» e «estar». PASSO 2: forma: «je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont». PASSO 3: «tu» é informal (amigos, família, crianças); «vous» é formal (desconhecidos, professores, chefes) e também o plural. Na dúvida, use «vous». PASSO 4: «on» significa «a gente» e, na fala, substitui «nous»: «on est contents». Usa a forma de «il»: «on est». PASSO 5: «je» perde o «e» diante de vogal («j\'ai», «j\'habite»), mas diante de «suis» não: «je suis». PASSO 6: «ils» e «elles» soam igual a «il» e «elle»; o «s» só aparece na ligação: «ils ont» soa «il-zõ».', {
        tag: 'Verbos',
        comparacao: 'o português tem dois verbos («ser» e «estar»); o francês tem um só, «être». O contexto decide: «Je suis fatigué» = estou cansado; «Je suis français» = sou francês. Em português usamos «tu» ou «você»; em francês a escolha entre «tu» e «vous» muda também o verbo.',
        tabela: [
          { pronome: 'je', forma: 'suis', exemplo: 'Je suis brésilien.' }, { pronome: 'tu', forma: 'es', exemplo: 'Tu es fatigué.' }, { pronome: 'il / elle / on', forma: 'est', exemplo: 'Elle est contente.' },
          { pronome: 'nous', forma: 'sommes', exemplo: 'Nous sommes amis.' }, { pronome: 'vous', forma: 'êtes', exemplo: 'Vous êtes madame Martin.' }, { pronome: 'ils / elles', forma: 'sont', exemplo: 'Ils sont ici.' },
        ],
        erros: [['Je suis étudiant. Tu êtes étudiant. (para um amigo)', 'Tu es étudiant.', '«Tu» pede «es»; «êtes» é do «vous».'], ['Il es fatigué.', 'Il est fatigué.', 'Com «il/elle/on», é «est».'], ['Nous êtes amis.', 'Nous sommes amis.', '«Nous» pede «sommes».'], ['Suis fatigué.', 'Je suis fatigué.', 'O sujeito é obrigatório em francês.']],
      }),
      producao(5, 'Diga em voz alta: «Je suis…» (seu nome), «Je suis…» (como você está) e «Nous sommes…».'),
    ]),
    sessao('S2', 'Adjetivos: masculino e feminino', [
      revisao(4, 'Conjugue «être» de memória, com os seis pronomes.'),
      palavras(6, [
        ['content / contente', 'kõtã / kõtãt', 'contente', ''], ['fatigué / fatiguée', 'fatigê / fatigê', 'cansado / cansada', ''], ['grand / grande', 'grã / grãd', 'grande, alto / alta', ''], ['petit / petite', 'peti / petit', 'pequeno / pequena', ''], ['français / française', 'frãsé / frãséz', 'francês / francesa', ''], ['brésilien / brésilienne', 'brezilyẽ / brezilyén', 'brasileiro / brasileira', ''],
      ]),
      gramatica(12, 'O adjetivo concorda em gênero e número', 'PASSO 1: em francês o adjetivo concorda com o substantivo ou com o sujeito. Para o feminino, em geral, acrescenta-se «-e»: «content → contente», «petit → petite». PASSO 2: o «-e» do feminino muda o som, porque a consoante final passa a soar: «petit» (peti) e «petite» (petit). PASSO 3: adjetivos que já terminam em «-e» não mudam: «triste», «jeune», «rouge», «facile». PASSO 4: algumas terminações mudam: «-ien → -ienne» (brésilien, brésilienne), «-eux → -euse» (heureux, heureuse), «-er → -ère» (premier, première). PASSO 5: no plural, acrescenta-se «-s», que não se pronuncia: «petit → petits», «contente → contentes». Se já termina em «-s» ou «-x», fica igual: «français → français». PASSO 6: com «on» o adjetivo pode estar no plural: «On est contents.»', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'em português também concordamos o adjetivo («cansado / cansada»), mas o francês quase sempre acrescenta «-e» e muda o som do final. O «-s» do plural fica mudo.',
        tabela: [
          { regra: 'acrescente -e', masculino: 'petit', feminino: 'petite', exemplo: 'Elle est petite.' }, { regra: 'já termina em -e', masculino: 'triste', feminino: 'triste', exemplo: 'Il est triste. Elle est triste.' }, { regra: '-ien → -ienne', masculino: 'brésilien', feminino: 'brésilienne', exemplo: 'Elle est brésilienne.' },
          { regra: '-eux → -euse', masculino: 'heureux', feminino: 'heureuse', exemplo: 'Elle est heureuse.' }, { regra: 'plural: acrescente -s', masculino: 'petits', feminino: 'petites', exemplo: 'Ils sont petits.' },
        ],
        erros: [['Elle est content.', 'Elle est contente.', 'Feminino: acrescente «-e».'], ['Il est brésilienne.', 'Il est brésilien.', '«-ienne» é só feminino.'], ['Elle est heureux.', 'Elle est heureuse.', '«-eux» vira «-euse» no feminino.'], ['dizer o «s» final de «petits»', 'peti (o «s» do plural é mudo)', 'O «s» do plural não soa.']],
      }),
      producao(8, 'Diga seis frases descrevendo você, um amigo e uma amiga: «Je suis…», «Il est…», «Elle est…» com os adjetivos da aula.'),
    ]),
    sessao('S3', 'Negar e perguntar', [
      revisao(4, 'Passe para o feminino: «Il est content. Il est petit. Il est brésilien.»'),
      palavras(5, [
        ['oui', 'uí', 'sim', ''], ['non', 'nõ', 'não', ''], ['ne… pas', 'ne… pa', 'não (negação)', ''], ['Est-ce que… ?', 'ésk(e)', 'pergunta de sim ou não', ''], ['Qui est-ce ?', 'ki és', 'quem é?', ''],
      ]),
      gramatica(8, 'Negar com ne… pas e fazer perguntas', 'PASSO 1: a negação francesa tem duas partes que envolvem o verbo: «ne» antes e «pas» depois. «Je suis fatigué» → «Je ne suis pas fatigué». PASSO 2: diante de vogal, «ne» vira «n\'»: «Il n\'est pas ici». PASSO 3: na fala informal, o «ne» some e só se ouve «pas»: «Je suis pas fatigué». Por escrito, use as duas partes. PASSO 4: para perguntar sim ou não, o jeito mais simples é subir a voz no fim: «Tu es fatigué ?». PASSO 5: ou antecipe «est-ce que»: «Est-ce que tu es fatigué ?». PASSO 6: respostas curtas: «Oui, je suis fatigué.» «Non, je ne suis pas fatigué.»', {
        tag: 'Negação e interrogação',
        comparacao: 'em português basta «não» antes do verbo. Em francês, a negação envolve o verbo («ne… pas»), e só «pas» costuma aparecer na fala. Para perguntar, o português também sobe a voz; o francês acrescenta «est-ce que».',
        tabela: [
          { tipo: 'afirmativa', frase: 'Tu es fatigué.' }, { tipo: 'negativa', frase: 'Tu n\'es pas fatigué.' }, { tipo: 'pergunta com entonação', frase: 'Tu es fatigué ?' }, { tipo: 'pergunta com est-ce que', frase: 'Est-ce que tu es fatigué ?' }, { tipo: 'resposta curta', frase: 'Oui, je suis fatigué. / Non, je ne suis pas fatigué.' },
        ],
        erros: [['Je ne pas suis fatigué.', 'Je ne suis pas fatigué.', '«ne» e «pas» envolvem o verbo.'], ['Je ne suis fatigué.', 'Je ne suis pas fatigué.', 'Faltou o «pas».'], ['Il ne est pas ici.', 'Il n\'est pas ici.', 'Elisão: «ne» vira «n\'».'], ['Est-ce que il est ici ?', 'Est-ce qu\'il est ici ?', '«que» vira «qu\'» diante de vogal.']],
      }),
      dialogo(8, 'À la gare / Na estação', 'Camille encontra Lucas na estação.', [
        ['Camille', 'Bonjour, Lucas ! Tu es fatigué ?', 'Bom dia, Lucas! Você está cansado?'], ['Lucas', 'Oui, un peu. Et toi, tu es contente ?', 'Sim, um pouco. E você, está contente?'], ['Camille', 'Oui, je suis très contente. Nous sommes en vacances !', 'Sim, estou muito contente. Estamos de férias!'], ['Lucas', 'Est-ce que Léa est ici aussi ?', 'A Léa também está aqui?'], ['Camille', 'Non, elle n\'est pas ici. Elle est à Paris.', 'Não, ela não está aqui. Está em Paris.'], ['Lucas', 'Ah, d\'accord. On est contents, alors !', 'Ah, certo. Estamos contentes, então!'],
      ]),
      producao(5, 'Responda em voz alta: «Tu es fatigué ? Tu es français ? Est-ce que tu es à Paris ?» Depois pergunte o mesmo a um amigo imaginário.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 2', [
      revisao(5, 'Conjugue «être» em voz alta e diga duas frases afirmativas e duas negativas.'),
      exercicios(20, [
        ouvir('Je suis fatigué', ['Je suis fatigué', 'Tu es fatigué', 'Il est fatigué'], 'Je suis fatigué', 'Ouça o pronome.'), ouvir('Elle est contente', ['Elle est contente', 'Il est content', 'Elles sont contentes'], 'Elle est contente', 'Ouça o final: «contente» tem o «t» audível.'), ouvir('Nous sommes amis', ['Nous sommes amis', 'Vous êtes amis', 'Ils sont amis'], 'Nous sommes amis', 'Ouça «sommes».'),
        ditado('Je ne suis pas fatigué', 'Escreva: Je ne suis pas fatigué.'), ditado('Est-ce que tu es content', 'Escreva: Est-ce que tu es content.'),
        mc('Qual é a forma de «être» para «vous»?', ['êtes', 'est', 'sont'], 'êtes', '«vous êtes».'), mc('Qual frase está correta?', ['Elle est contente.', 'Elle est content.', 'Elle es contente.'], 'Elle est contente.', 'Feminino com «-e» e «est».'), mc('Quando usar «vous»?', ['com desconhecidos e com mais de uma pessoa', 'só com amigos', 'só com crianças'], 'com desconhecidos e com mais de uma pessoa', '«Vous» é formal e plural.'),
        mc('Qual é o feminino de «brésilien»?', ['brésilienne', 'brésiliène', 'brésilienn'], 'brésilienne', '«-ien → -ienne».'),
        lacuna('Je ne suis ___ fatigué. (não)', ['pas', 'non', 'jamais'], 'pas', '«Ne… pas».'), lacuna('Tu ___ content. (és)', ['es', 'est', 'êtes'], 'es', '«Tu es».'), lacuna('Ils ___ ici. (estão)', ['sont', 'est', 'sommes'], 'sont', '«Ils sont».'), lacuna('Il ___ est pas ici. (não)', ['n\'', 'ne', 'na'], 'n\'', 'Elisão diante de vogal.'),
        ordem('Ordene: «Elle n\'est pas fatiguée.»', ['Elle', 'n\'est', 'pas', 'fatiguée'], 'Elle n\'est pas fatiguée.', 'ne… pas envolve o verbo.'), ordem('Ordene: «Est-ce que tu es content ?»', ['Est-ce', 'que', 'tu', 'es', 'content'], 'Est-ce que tu es content', 'est-ce que + frase afirmativa.'),
        livre('Escreva em francês: Eu sou brasileiro. Ela não está cansada. Você é feliz?', 'Je suis brésilien. Elle n\'est pas fatiguée. Tu es heureux ?'),
      ]),
      producao(5, 'Apresente, em voz alta, dois amigos imaginários: um francês e uma brasileira, com como eles estão.'),
    ]),
  ],
});
