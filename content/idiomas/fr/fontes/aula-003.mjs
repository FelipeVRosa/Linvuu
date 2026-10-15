import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 3, titulo: 'Apresentações, países e números', nivel: 'a1',
  objetivo: 'Apresentar-se e apresentar alguém, dizer de onde você é e onde mora, usar «en», «au» e «aux» com os países, e contar de 0 a 20, incluindo a idade com «avoir».',
  nota: 'Você se apresenta, fala de onde é e diz a sua idade. Próxima aula: o presente dos verbos em -er.',
  sessoes: [
    sessao('S1', 'Cumprimentos e apresentações', [
      revisao(5, 'Responda em voz alta: «Tu es fatigué ? Tu es français ? Est-ce que tu es à Paris ?»'),
      palavras(6, [
        ['Je m\'appelle', 'je mapél', 'eu me chamo', ''], ['Comment tu t\'appelles ?', 'komã tü tapél', 'como você se chama? (informal)', ''], ['Enchanté, enchantée', 'ãxãté', 'prazer (homem, mulher)', ''], ['Comment allez-vous ?', 'komãt alé vu', 'como vai o senhor, a senhora? (formal)', ''], ['Je vais bien', 'je vé biẽ', 'vou bem', ''], ['Et vous ?', 'é vu', 'e o senhor, a senhora?', ''],
      ]),
      gramatica(10, 'Apresentar-se e apresentar alguém', 'PASSO 1: para dizer o seu nome, use «Je m\'appelle Ana.» Literalmente, «eu me chamo». PASSO 2: para perguntar o nome: informal, «Comment tu t\'appelles ?»; formal, «Comment vous appelez-vous ?» ou «Vous vous appelez comment ?». PASSO 3: para perguntar como a pessoa está: informal, «Ça va ?» ou «Comment tu vas ?»; formal, «Comment allez-vous ?». PASSO 4: ao conhecer alguém, o homem diz «Enchanté» e a mulher diz «Enchantée» (o som é igual; só a escrita muda). PASSO 5: para apresentar outra pessoa: «Voici Lucas.» ou «C\'est Léa.» Para dizer «este é meu amigo», use «Voici mon ami Lucas» (os possessivos entram na aula 6). PASSO 6: a escolha entre «tu» e «vous» muda o verbo e o tom: na dúvida, use «vous» e deixe o outro propor o «tu».', {
        tag: 'Frases básicas',
        comparacao: 'em português «me chamo» também é pronominal, mas o francês usa o verbo «appeler» com «m\'», «t\'», «s\'»: «je m\'appelle», «tu t\'appelles», «il s\'appelle». Ao dizer «prazer», o português não muda; o francês concorda com quem fala: «enchanté» ou «enchantée».',
        tabela: [
          { situacao: 'dizer o nome', informal: 'Je m\'appelle Ana.', formal: 'Je m\'appelle Ana Silva.' }, { situacao: 'perguntar o nome', informal: 'Comment tu t\'appelles ?', formal: 'Comment vous appelez-vous ?' }, { situacao: 'perguntar como está', informal: 'Ça va ?', formal: 'Comment allez-vous ?' },
          { situacao: 'responder', informal: 'Ça va bien, merci.', formal: 'Je vais bien, merci. Et vous ?' }, { situacao: 'apresentar', informal: 'C\'est Léa.', formal: 'Voici madame Martin.' },
        ],
        erros: [['Je suis appelle Ana.', 'Je m\'appelle Ana.', 'Verbo pronominal: «eu me chamo».'], ['Comment tu appelles ?', 'Comment tu t\'appelles ?', 'Falta o «t\'» (te).'], ['Uma mulher diz «Enchanté».', 'Enchantée.', 'A escrita concorda com quem fala.'], ['Je vais bien. Et tu ? (com um desconhecido)', 'Et vous ?', 'Com desconhecidos, use «vous».']],
      }),
      dialogo(5, 'Premier contact / Primeiro contato', 'Madame Martin e Ana se apresentam num curso.', [
        ['Madame Martin', 'Bonjour, je m\'appelle Claire Martin. Comment vous appelez-vous ?', 'Bom dia, me chamo Claire Martin. Como a senhora se chama?'], ['Ana', 'Bonjour, madame. Je m\'appelle Ana. Enchantée.', 'Bom dia, senhora. Me chamo Ana. Prazer.'], ['Madame Martin', 'Enchantée, Ana. Comment allez-vous ?', 'Prazer, Ana. Como vai?'], ['Ana', 'Je vais bien, merci. Et vous ?', 'Vou bem, obrigada. E a senhora?'], ['Madame Martin', 'Très bien, merci. Voici mon ami Paul.', 'Muito bem, obrigada. Este é meu amigo Paul.'], ['Paul', 'Bonjour, Ana. Enchanté.', 'Bom dia, Ana. Prazer.'],
      ]),
      producao(4, 'Apresente-se em voz alta: «Bonjour, je m\'appelle… Enchanté(e).» Depois apresente um amigo: «Voici mon ami…»'),
    ]),
    sessao('S2', 'Países e nacionalidades', [
      revisao(5, 'Diga em voz alta: «Je m\'appelle… Je suis… Et vous ?» e responda como se fosse a outra pessoa.'),
      palavras(10, [
        ['le Brésil, brésilien', 'lê brezil, brezilyẽ', 'Brasil, brasileiro', ''], ['la France, français', 'la frãs, frãsé', 'França, francês', ''], ['le Portugal, portugais', 'lê portügal, portügé', 'Portugal, português', ''], ['l\'Espagne, espagnol', 'lespãnh, espanhól', 'Espanha, espanhol', ''], ['l\'Italie, italien', 'litali, italyẽ', 'Itália, italiano', ''],
        ['l\'Allemagne, allemand', 'lalemãnh, alemã', 'Alemanha, alemão', ''], ['les États-Unis, américain', 'lêzétazüni, amerikẽ', 'Estados Unidos, americano', ''], ['le Canada, canadien', 'lê kanada, kanadyẽ', 'Canadá, canadense', ''], ['la Suisse, suisse', 'la süis, süis', 'Suíça, suíço', ''], ['la Belgique, belge', 'la belj, belj', 'Bélgica, belga', ''],
      ]),
      gramatica(10, 'Origem, nacionalidade e onde você mora', 'PASSO 1: para dizer a origem, use «être de» + cidade ou país: «Je suis de Paris.» «Je suis du Brésil.» PASSO 2: para a nacionalidade, use «être» + adjetivo, que concorda com o gênero: «Je suis brésilien / brésilienne.» O adjetivo de nacionalidade escreve-se em minúscula. PASSO 3: todo país tem gênero. Os que terminam em «-e» são quase sempre femininos: «la France, l\'Italie, l\'Espagne». Os outros são masculinos: «le Brésil, le Canada, le Portugal». Plurais: «les États-Unis». PASSO 4: para dizer onde você mora, use «habiter» com a preposição certa: «à» + cidade («à Paris»); «en» + país feminino ou país masculino que começa por vogal («en France», «en Italie»); «au» + país masculino («au Brésil», «au Canada»); «aux» + país plural («aux États-Unis»). PASSO 5: a mesma regra serve para «ir»: «Je vais à Paris, en France, au Canada, aux États-Unis».', {
        tag: 'Preposições',
        comparacao: 'em português dizemos «moro em Paris», «na França», «no Brasil», «nos Estados Unidos». O francês divide em quatro: «à», «en», «au» e «aux». Escolha pelo gênero do país e não pelo som.',
        tabela: [
          { tipo: 'cidade', preposicao: 'à', exemplo: 'J\'habite à Paris.' }, { tipo: 'país feminino (e masculino com vogal)', preposicao: 'en', exemplo: 'J\'habite en France.' }, { tipo: 'país masculino', preposicao: 'au', exemplo: 'J\'habite au Brésil.' }, { tipo: 'país plural', preposicao: 'aux', exemplo: 'J\'habite aux États-Unis.' },
        ],
        erros: [['J\'habite à Brésil.', 'J\'habite au Brésil.', 'País masculino: «au».'], ['J\'habite au France.', 'J\'habite en France.', 'País feminino: «en».'], ['Elle est français.', 'Elle est française.', 'O adjetivo concorda com o gênero.'], ['Je suis Brésilien.', 'Je suis brésilien.', 'Nacionalidade (adjetivo) em minúscula.']],
      }),
      producao(5, 'Diga: «Je suis… (nacionalidade). J\'habite à/en/au… Mon ami est… Il/Elle habite…» Use três países diferentes.'),
    ]),
    sessao('S3', 'Números de 0 a 20 e a idade', [
      revisao(4, 'Diga de memória o nome de seis países em francês, com «en», «au» ou «aux».'),
      palavras(10, [
        ['un', 'ẽ', 'um', ''], ['deux', 'dö', 'dois', ''], ['trois', 'truá', 'três', ''], ['quatre', 'katr', 'quatro', ''], ['cinq', 'sẽk', 'cinco', ''], ['six', 'sis', 'seis', ''], ['sept', 'sét', 'sete', ''], ['huit', 'üit', 'oito', ''], ['neuf', 'nöf', 'nove', ''], ['dix', 'dis', 'dez', ''],
      ]),
      gramatica(10, 'Os números de 11 a 20 e a idade com avoir', 'PASSO 1: 0 a 10: zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix. PASSO 2: 11 a 16 são formas próprias: onze, douze, treize, quatorze, quinze, seize. PASSO 3: 17 a 19 somam: dix-sept, dix-huit, dix-neuf. 20 é vingt. PASSO 4: antes de uma palavra com vogal, a consoante final soa e liga: «deux amis» (dö-zami), «trois amis» (truá-zami). Antes de consoante, o final de «cinq, six, huit, dix» costuma cair: «six garçons» (si garsõ). PASSO 5: para dizer a idade, o francês usa «avoir» (ter), nunca «être»: «J\'ai vingt ans.» PASSO 6: para perguntar: «Quel âge as-tu ?» (informal) ou «Quel âge avez-vous ?» (formal). PASSO 7: «ans» é o plural de «an»: «un an, deux ans».', {
        tag: 'Números',
        comparacao: 'em português a idade também é «ter»: «tenho vinte anos». Mas o inglês e o alemão usam «ser». Você não vai errar se pensar «tenho», e o francês escreve «j\'ai».',
        tabelas: [
          { titulo: 'avoir (ter)', linhas: [
            { pronome: 'j\'', forma: 'ai', exemplo: 'J\'ai vingt ans.' }, { pronome: 'tu', forma: 'as', exemplo: 'Tu as quinze ans.' }, { pronome: 'il / elle / on', forma: 'a', exemplo: 'Il a dix-huit ans.' },
            { pronome: 'nous', forma: 'avons', exemplo: 'Nous avons seize ans.' }, { pronome: 'vous', forma: 'avez', exemplo: 'Vous avez douze ans.' }, { pronome: 'ils / elles', forma: 'ont', exemplo: 'Elles ont treize ans.' },
          ] },
          { titulo: 'Os números de 11 a 20', linhas: [
            { numero: '11', forma: 'onze (õz)', exemplo: 'J\'ai onze ans.' }, { numero: '12', forma: 'douze (duz)', exemplo: 'Il a douze ans.' }, { numero: '13', forma: 'treize (trez)', exemplo: 'Elle a treize ans.' },
            { numero: '14', forma: 'quatorze (katórz)', exemplo: 'Nous avons quatorze ans.' }, { numero: '15', forma: 'quinze (kẽz)', exemplo: 'Tu as quinze ans.' }, { numero: '16', forma: 'seize (sez)', exemplo: 'Ils ont seize ans.' },
            { numero: '17', forma: 'dix-sept (dissét)', exemplo: 'J\'ai dix-sept ans.' }, { numero: '18', forma: 'dix-huit (dizüít)', exemplo: 'Il a dix-huit ans.' }, { numero: '19', forma: 'dix-neuf (diznöf)', exemplo: 'Elle a dix-neuf ans.' }, { numero: '20', forma: 'vingt (vẽ)', exemplo: 'J\'ai vingt ans.' },
          ] },
        ],
        erros: [['Je suis vingt ans.', 'J\'ai vingt ans.', 'A idade usa «avoir».'], ['J\'ai vingt années.', 'J\'ai vingt ans.', 'Para a idade, use «ans».'], ['Tu es quel âge ?', 'Tu as quel âge ?', 'A pergunta também usa «avoir».'], ['dizer o «t» de «vingt»', 'vẽ', 'O «t» de «vingt» é mudo no número isolado.']],
      }),
      producao(6, 'Conte de 0 a 20 em voz alta, devagar. Depois diga a sua idade e a de três pessoas: «J\'ai… ans. Il/Elle a… ans.»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 3', [
      revisao(5, 'Apresente-se em francês: nome, país, idade e onde mora, em 6 frases.'),
      exercicios(20, [
        ouvir('J\'ai vingt ans', ['J\'ai vingt ans', 'J\'ai quinze ans', 'Il a vingt ans'], 'J\'ai vingt ans', 'Ouça «vingt», soa «vẽ».'), ouvir('J\'habite au Brésil', ['J\'habite au Brésil', 'J\'habite en France', 'J\'habite aux États-Unis'], 'J\'habite au Brésil', 'Ouça «au», «en», «aux».'), ouvir('Comment tu t\'appelles', ['Comment tu t\'appelles', 'Comment vous appelez-vous', 'Comment ça va'], 'Comment tu t\'appelles', 'Ouça o «t\'appelles».'),
        ditado('Je m\'appelle Ana', 'Escreva: Je m\'appelle Ana.'), ditado('J\'habite en France', 'Escreva: J\'habite en France.'), ditado('Il a dix-huit ans', 'Escreva: Il a dix-huit ans.'),
        mc('Como dizer «tenho 20 anos»?', ['J\'ai vingt ans.', 'Je suis vingt ans.', 'Je vingt ans.'], 'J\'ai vingt ans.', 'Idade com «avoir».'), mc('Qual preposição acompanha «le Brésil»?', ['au', 'en', 'à'], 'au', 'País masculino: «au».'), mc('Qual preposição acompanha «la France»?', ['en', 'au', 'aux'], 'en', 'País feminino: «en».'), mc('Como uma mulher diz «prazer»?', ['Enchantée', 'Enchanté', 'Enchantez'], 'Enchantée', 'Concorda com quem fala.'),
        lacuna('Elle ___ treize ans. (tem)', ['a', 'est', 'ont'], 'a', '«elle a».'), lacuna('Nous ___ seize ans. (temos)', ['avons', 'sommes', 'avez'], 'avons', '«nous avons».'), lacuna('J\'habite ___ États-Unis.', ['aux', 'au', 'en'], 'aux', 'País plural: «aux».'), lacuna('Je ___ Ana. (me chamo)', ['m\'appelle', 'suis', 'ai'], 'm\'appelle', '«je m\'appelle».'),
        ordem('Ordene: «Je m\'appelle Ana et j\'ai vingt ans.»', ['Je', 'm\'appelle', 'Ana', 'et', 'j\'ai', 'vingt', 'ans'], 'Je m\'appelle Ana et j\'ai vingt ans.', 'Nome e idade.'), ordem('Ordene: «Elle est brésilienne.»', ['Elle', 'est', 'brésilienne'], 'Elle est brésilienne.', 'Nacionalidade concorda no feminino.'),
        livre('Escreva em francês: Eu me chamo Carlos. Tenho vinte anos. Moro no Brasil.', 'Je m\'appelle Carlos. J\'ai vingt ans. J\'habite au Brésil.'),
        lacuna('Il habite ___ Portugal. (em)', ['au', 'en', 'à'], 'au', '«Le Portugal» é masculino: «au Portugal».'),
        lacuna('Nous habitons ___ Espagne. (em)', ['au', 'en', 'aux'], 'en', '«L\'Espagne» é feminino: «en Espagne».'),
        lacuna('Elle a ___ ans. (14)', ['quatre', 'seize', 'quatorze'], 'quatorze', '14 é «quatorze»; a idade usa «avoir».'),
        lacuna('Elle ___ Sofia. (se chama)', ['s\'appelle', 'm\'appelle', 't\'appelles'], 's\'appelle', 'Com «elle», usa-se «s\'appelle».'),
        lacuna('Julie est ___ . (italiana)', ['italien', 'italienne', 'italiens'], 'italienne', 'Feminino de «-ien» é «-ienne».'),
        mc('Como se diz «dezoito»?', ['dix-sept', 'dix-neuf', 'dix-huit'], 'dix-huit', '18 é «dix-huit».'),
        mc('Como perguntar a idade a um desconhecido, de modo formal?', ['Quel âge avez-vous ?', 'Quel âge êtes-vous ?', 'Combien d\'ans êtes-vous ?'], 'Quel âge avez-vous ?', 'A idade usa «avoir»: «Quel âge avez-vous ?».'),
        mc('Qual frase está correta?', ['Je suis de le Brésil.', 'Je suis du Brésil.', 'Je suis à Brésil.'], 'Je suis du Brésil.', '«De + le» vira «du»: «du Brésil».'),
        mc('Qual destes países é feminino?', ['le Canada', 'le Portugal', 'l\'Allemagne'], 'l\'Allemagne', 'Países terminados em «-e» são quase sempre femininos.'),
        ordem('Ordene: «Ele mora na Itália.»', ['Il', 'habite', 'en', 'Italie'], 'Il habite en Italie.', 'País feminino pede «en».'),
        ordem('Ordene: «Este é meu amigo Paul.»', ['Voici', 'mon', 'ami', 'Paul'], 'Voici mon ami Paul.', '«Voici» apresenta alguém.'),
        livre('Escreva em francês: Eu sou do Canadá. Moro em Paris.', 'Je suis du Canada. J\'habite à Paris.'),
        livre('Escreva em francês: Ele tem dezesseis anos. Ele é belga.', 'Il a seize ans. Il est belge.'),
      ]),
      producao(5, 'Apresente, em voz alta, um amigo imaginário de outro país: nome, idade, nacionalidade e onde mora.'),
    ]),
  ],
});
