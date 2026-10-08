import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 7, titulo: 'Family and possessives', nivel: 'a1',
  objetivo: 'Name the members of your family, say how many brothers, sisters and children you have with the full present of «ter», use the possessives «meu, minha, seu, sua, nosso, dele, dela» and describe your family in a short text.',
  nota: 'You can talk about your family, say who is who and how old they are, say who owns something and describe your relatives. Next lesson: at the café, with «queria», numbers up to 100 and prices in reais.',
  sessoes: [
    sessao('S1', 'The family and the verb «ter»', [
      revisao(5, 'Conjugate «comer» and «abrir» aloud. Then say four sentences about what you eat, drink and open every day, and ask a friend «Você bebe café ou suco?».'),
      palavras(8, [
        ['a família', 'ah fah-MEE-lyah', 'the family', ''], ['o pai', 'oo PYE', 'the father', ''], ['a mãe', 'ah MAH~ee', 'the mother', ''], ['os pais', 'ooz PYES', 'the parents', ''], ['o irmão', 'oo eer-MOW~', 'the brother', ''],
        ['a irmã', 'ah eer-MAH~', 'the sister', ''], ['o filho', 'oo FEE-lyoo', 'the son', ''], ['a filha', 'ah FEE-lyah', 'the daughter', ''], ['o avô', 'oo ah-VOH', 'the grandfather', ''], ['a avó', 'ah ah-VAW', 'the grandmother', ''],
      ]),
      gramatica(12, 'Family words and the present of «ter»', "STEP 1: most family words come in pairs, a masculine and a feminine form: pai / mãe, irmão / irmã, filho / filha, avô / avó. STEP 2: the masculine plural includes both genders. «Os filhos» are «the children» (sons and daughters), «os irmãos» are «the brothers and sisters», «os avós» are «the grandparents» (grandfather and grandmother). To be specific you say «dois irmãos e uma irmã». STEP 3: «os pais» means «the parents»; the singular «o pai» means «the father». Be careful with «parentes»: it means «relatives» (cousins, uncles and so on), not «parents». STEP 4: to say how many family members you have, use «ter». The present of «ter» is irregular: eu tenho, você tem, ele/ela tem, a gente tem, nós temos, vocês têm, eles/elas têm. The circumflex in «têm» (plural) is only a spelling mark: «tem» and «têm» are said almost the same. STEP 5: the question is «Quantos irmãos você tem?» (how many brothers and sisters do you have?). Notice «quantos» agrees with the noun («Quantas irmãs…?» for a feminine plural). STEP 6: with a negative, you usually drop the article and the number: «Não tenho irmãos». «Filho único» (a man) and «filha única» (a woman) mean «only child». STEP 7: culture. Families in Brazil are often close, and relatives of different generations may live near each other. Lunch together on Sundays is a tradition in many homes. The words «tio» and «tia» are also used warmly for older friends of the family, and children call their teachers «tia» or «tio» in some schools.", {
        tag: 'Family',
        comparacao: "English uses «sister» and «brother» but also «sibling» for both together; Portuguese says «irmãos» (the masculine plural also for mixed groups). English «parents» and Portuguese «parentes» look alike, but «parentes» means «relatives». English asks «Do you have any brothers or sisters?»; Portuguese says «Você tem irmãos?» and the masculine plural already includes the sisters.",
        tabela: [
          { person: 'eu', ter: 'tenho', example: 'Eu tenho um irmão.' },
          { person: 'você, ele, ela, a gente', ter: 'tem', example: 'Ela tem duas irmãs.' },
          { person: 'nós', ter: 'temos', example: 'Nós temos dois filhos.' },
          { person: 'vocês, eles, elas', ter: 'têm', example: 'Eles têm três filhos.' },
        ],
        exemplos: [
          ['Quantos irmãos você tem?', 'How many brothers and sisters do you have?'], ['Eu tenho um irmão e duas irmãs.', 'I have one brother and two sisters.'], ['Ela tem três filhos.', 'She has three children.'], ['Não tenho irmãos. Sou filho único.', 'I have no siblings. I am an only child.'], ['Eles têm dois filhos.', 'They have two children.'],
        ],
        erros: [['Eu tem dois irmãos.', 'Eu tenho dois irmãos.', 'The «eu» form of «ter» is «tenho».'], ['Eu tenho dois irmões.', 'Eu tenho dois irmãos.', 'The plural of «irmão» is «irmãos».'], ['os parentes (meaning: the parents)', 'os pais', '«Parentes» means relatives. For mother and father together say «os pais».'], ['Nós têm um filho.', 'Nós temos um filho.', '«Nós» takes «temos». «Têm» is for «vocês, eles, elas».']],
      }),
      producao(5, 'Say how many brothers, sisters and children you have (or that you have none), using «Eu tenho…» and «Não tenho…». Then ask «Quantos irmãos você tem?» and answer for an imaginary friend.'),
    ]),
    sessao('S2', 'My, your, his, her, our', [
      revisao(4, 'Conjugate «ter» aloud. Name the masculine and feminine family words: pai, mãe, irmão, irmã, filho, filha, avô, avó.'),
      palavras(6, [
        ['o tio, a tia', 'oo TCHEE-oo, ah TCHEE-ah', 'uncle, aunt', ''], ['o primo, a prima', 'oo PREE-moo, ah PREE-mah', 'cousin (male, female)', ''], ['o marido', 'oo mah-REE-doo', 'the husband', ''], ['a esposa', 'ah ees-POH-zah', 'the wife (also: a mulher)', ''],
        ['o namorado, a namorada', 'oo nah-moh-RAH-doo, ah nah-moh-RAH-dah', 'boyfriend, girlfriend', ''], ['os parentes', 'oos pah-REH~-tcheez', 'relatives', ''], ['de quem?', 'djee KEH~ee', 'whose?', ''],
      ]),
      gramatica(12, 'The possessives', "STEP 1: the possessive agrees in gender and number with the thing owned, not with the owner. A man and a woman both say «minha mãe» (mother is feminine) and «meu pai» (father is masculine). The forms for «eu» are: meu, minha, meus, minhas. STEP 2: for «você» the forms are: seu, sua, seus, suas. For «nós» and «a gente»: nosso, nossa, nossos, nossas. Examples: «meu irmão, minha irmã, meus pais, minhas tias»; «seu carro, sua casa»; «nossa família». STEP 3: for «ele», «ela», «eles» and «elas» the usual form in speech is «dele, dela, deles, delas», placed after the noun and never changed: «o carro dele», «a casa dela», «os filhos deles». For «vocês» you say «de vocês»: «a casa de vocês». STEP 4: «seu» and «sua» can also mean «his, her, their», so «seu pai» may be ambiguous: «your father» or «his father»? That is why Brazilians say «o pai dele», «o pai dela» when the owner is a third person. STEP 5: the article is optional before a possessive: «meu livro» and «o meu livro» are both correct. In Brazil «meu livro» is more common in speech; «o meu livro» is usual in Portugal and sounds a little more emphatic. When the possessive is alone, the article is useful: «O meu é azul» (mine is blue). STEP 6: to show ownership with a name use «de + the article»: «o carro do Pedro» (de + o = do), «a casa da Ana» (de + a = da), «os pais dos meus amigos» (de + os = dos), «as irmãs das minhas amigas» (de + as = das). STEP 7: «De quem é…?» means «whose is…?»: «De quem é o livro? — É do Pedro.» or «É meu». In regions that use «tu», you will hear «teu, tua» instead of «seu, sua».", {
        tag: 'Possessives',
        comparacao: "In English the possessive depends on the owner («his mother», «her mother»), while in Portuguese «meu/minha» depend on what is owned: a woman says «meu pai» and a man says «minha mãe». For «his» and «her» English changes with the owner and Portuguese does too, but with «dele» and «dela». Also English uses «'s» («Pedro's car»); Portuguese uses «de»: «o carro do Pedro».",
        tabelas: [
          { titulo: 'Possessives', linhas: [
            { owner: 'eu', masculine: 'meu / meus', feminine: 'minha / minhas', example: 'meu irmão, minhas tias' },
            { owner: 'você', masculine: 'seu / seus', feminine: 'sua / suas', example: 'seu pai, sua mãe' },
            { owner: 'nós, a gente', masculine: 'nosso / nossos', feminine: 'nossa / nossas', example: 'nosso filho, nossa casa' },
            { owner: 'ele, ela', masculine: 'dele, dela', feminine: 'dele, dela', example: 'o pai dele, a mãe dela' },
            { owner: 'eles, elas', masculine: 'deles, delas', feminine: 'deles, delas', example: 'os pais deles' },
            { owner: 'vocês', masculine: 'de vocês', feminine: 'de vocês', example: 'a casa de vocês' },
          ] },
          { titulo: 'Possession with a name', linhas: [
            { form: 'de + o = do', example: 'o carro do Pedro' }, { form: 'de + a = da', example: 'a casa da Ana' }, { form: 'de + os = dos', example: 'os pais dos meus amigos' }, { form: 'de + as = das', example: 'as irmãs das minhas amigas' },
          ] },
        ],
        erros: [['Minha pai é médico.', 'Meu pai é médico.', 'The possessive agrees with the thing owned: «pai» is masculine, so «meu».'], ['Meu pais são médicos.', 'Meus pais são médicos.', '«Pais» is plural, so «meus».'], ['A casa de ele é grande.', 'A casa dele é grande.', 'De + ele becomes one word: «dele».'], ['O carro de o Pedro.', 'O carro do Pedro.', '«De» and «o» must join: de + o = do.']],
      }),
      dialogo(4, 'A family photo', 'Fernanda shows Carlos a photo of her family.', [
        ['Carlos', 'Quem é ela, Fernanda?', 'Who is she, Fernanda?'], ['Fernanda', 'É minha mãe. O nome dela é Rita.', 'She is my mother. Her name is Rita.'], ['Carlos', 'E ele?', 'And him?'],
        ['Fernanda', 'É meu pai. O nome dele é Paulo.', 'He is my father. His name is Paulo.'], ['Carlos', 'E o seu irmão?', 'And your brother?'], ['Fernanda', 'Meu irmão é o Davi. Ele tem quinze anos.', 'My brother is Davi. He is fifteen years old.'], ['Carlos', 'Sua família é grande?', 'Is your family big?'], ['Fernanda', 'É, sim! Eu tenho dois tios e três primos.', 'Yes! I have two uncles and three cousins.'],
      ]),
      producao(4, 'Show an imaginary photo and say: «Esta é minha mãe. O nome dela é… Este é meu pai. O nome dele é…». Include one more person and say how old they are.'),
    ]),
    sessao('S3', 'Describing your family', [
      revisao(4, 'Say six sentences with a possessive: meu, minha, meus, minhas, seu, sua, dele and dela. Ask a friend «De quem é o livro?» and answer.'),
      palavras(5, [
        ['casado, casada', 'kah-ZAH-doo, kah-ZAH-dah', 'married', ''], ['solteiro, solteira', 'soh-oo-TAY-roo, soh-oo-TAY-rah', 'single', ''], ['sozinho, sozinha', 'soh-ZEE-nyoo, soh-ZEE-nyah', 'alone', ''], ['o sobrenome', 'oo soh-bree-NOH-mee', 'the surname, family name', ''], ['filho único, filha única', 'FEE-lyoo OO-nee-koo, FEE-lyah OO-nee-kah', 'only child', ''],
      ]),
      gramatica(8, 'Talking about people: status, living together and names', "STEP 1: marital status uses «ser»: «Sou casado», «Ela é casada», «Eles são solteiros». The adjectives agree: «casado, casada», «solteiro, solteira». «Namorado» and «namorada» are boyfriend and girlfriend. For a spouse, use «marido» (husband) and «esposa» (wife, more formal); in everyday speech «minha mulher» is also common for «my wife». STEP 2: to say who you live with, use «morar com»: «Eu moro com meus pais», «Ela mora com o namorado». To say you live alone, add «sozinho» (a man) or «sozinha» (a woman): «Moro sozinha». STEP 3: to describe family members, use «ser» for identity and traits, and «ter» for age: «Meu irmão é estudante e tem quinze anos». STEP 4: to give more detail, combine «e», «mas» and «também»: «Meu irmão é alto e simpático, mas não é muito feliz hoje». STEP 5: culture. A Brazilian full name usually has a given name and two or more surnames: the mother's surname and then the father's, for example «Ana Souza Lima». People are often called by the given name or a nickname, even at work. When you fill in a form, «sobrenome» is the family name and «nome» is the given name.", {
        tag: 'Describing people',
        comparacao: "English says «I live with my parents»; Portuguese uses «morar com» in the same way, but the family words always agree in number and gender: «com meus pais». English says «My dad is a doctor» with the article; Portuguese says «Meu pai é médico», no «um». For «alone», English has one word; Portuguese has «sozinho» for a man and «sozinha» for a woman.",
        tabela: [
          { structure: 'ser + status', portuguese: 'Eu sou solteiro.', meaning: 'I am single.' },
          { structure: 'morar com', portuguese: 'Moro com meus pais.', meaning: 'I live with my parents.' },
          { structure: 'morar sozinho', portuguese: 'Ela mora sozinha.', meaning: 'She lives alone.' },
          { structure: 'ser + profession', portuguese: 'Minha mãe é professora.', meaning: 'My mother is a teacher.' },
          { structure: 'ter + age', portuguese: 'Meu irmão tem quinze anos.', meaning: 'My brother is fifteen years old.' },
        ],
        erros: [['Eu moro com meu pais.', 'Eu moro com meus pais.', '«Pais» is plural: «meus pais».'], ['Eu sou filha único.', 'Eu sou filha única.', 'A girl is «filha única».'], ['Meu pai é um médico.', 'Meu pai é médico.', 'No «um» before a bare profession.'], ['Ela mora sozinho.', 'Ela mora sozinha.', 'The adjective follows the person: feminine «sozinha».']],
      }),
      texto(8, 'My family', 'Eu sou Aline e tenho dezenove anos. Eu moro em Salvador com meus pais. Meu pai é médico e minha mãe é professora. Eu tenho dois irmãos: meu irmão Davi tem quinze anos e minha irmã Clara tem oito anos. Meus avós moram em Recife. Meu avô é muito simpático e minha avó cozinha muito bem. Eu sou solteira, mas tenho namorado. O nome dele é Lucas.', "I am Aline and I am nineteen years old. I live in Salvador with my parents. My father is a doctor and my mother is a teacher. I have two siblings: my brother Davi is fifteen and my sister Clara is eight. My grandparents live in Recife. My grandfather is very nice and my grandmother cooks very well. I am single, but I have a boyfriend. His name is Lucas.", [
        ['Who does Aline live with?', 'Ela mora com os pais.'], ['What does her father do?', 'O pai dela é médico.'], ['How old is her brother Davi?', 'Ele tem quinze anos.'], ['What is her boyfriend\'s name?', 'O nome dele é Lucas.'],
      ]),
      producao(5, 'Describe your family or an imaginary family in six sentences: who they are, what they do, where they live and how old they are. Use «meu, minha, dele, dela» at least once each.'),
    ]),
    sessao('S4', 'Review and practice of lesson 7', [
      revisao(5, 'Introduce three members of your family: name, profession, age and a quality. Then ask a friend about their family with «Quantos irmãos você tem?» and «Você mora com seus pais?».'),
      exercicios(20, [
        ouvir('Eu tenho dois irmãos', ['Eu tenho dois irmãos', 'Eu tem dois irmãos', 'Eu tenho duas irmãs'], 'Eu tenho dois irmãos', '«Eu» takes «tenho».'), ouvir('Minha mãe é professora', ['Minha mãe é professora', 'Meu pai é professor', 'Minha irmã é professora'], 'Minha mãe é professora', 'Listen for «mãe» and «professora».'),
        ouvir('O nome dele é Lucas', ['O nome dele é Lucas', 'O nome dela é Lucas', 'O nome deles é Lucas'], 'O nome dele é Lucas', '«Dele» is his.'), ouvir('Nossa família é grande', ['Nossa família é grande', 'Nosso família é grande', 'Nossas famílias são grandes'], 'Nossa família é grande', '«Família» is feminine singular.'),
        ouvir('Eles têm três filhos', ['Eles têm três filhos', 'Ele tem três filhos', 'Nós temos três filhos'], 'Eles têm três filhos', 'Plural: «têm».'), ouvir('Moro com meus pais', ['Moro com meus pais', 'Moro com meu pai', 'Moro com minha mãe'], 'Moro com meus pais', '«Pais» is plural, so «meus».'),
        ditado('Quantos irmãos você tem?', 'Write: Quantos irmãos você tem?'), ditado('A casa dela é grande', 'Write: A casa dela é grande.'), ditado('Meus tios moram em Recife', 'Write: Meus tios moram em Recife.'),
        mc('A man says «my mother». Which form is correct?', ['minha mãe', 'meu mãe', 'minho mãe'], 'minha mãe', 'The possessive agrees with the thing owned, not with the owner.'), mc('Which one means «her father»?', ['o pai dela', 'a pai dela', 'seu pai dele'], 'o pai dela', '«Dela» is the usual way to say «her».'),
        mc('Which word means «relatives»?', ['parentes', 'pais', 'primos'], 'parentes', '«Parentes» is a false friend of «parents».'), mc('What does «filho único» mean?', ['only child', 'oldest son', 'son and father'], 'only child', '«Único» means only, single.'),
        mc('What does «os avós» mean?', ['the grandparents', 'the grandfathers only', 'the parents'], 'the grandparents', 'The masculine plural includes both genders.'), mc('How do you ask «whose is the book?»', ['De quem é o livro?', 'Quem é o livro?', 'Qual é o livro?'], 'De quem é o livro?', '«De quem» means whose.'),
        lacuna('Eu ___ dois irmãos. (ter)', ['tenho', 'tem', 'têm'], 'tenho', '«Eu» takes «tenho».'), lacuna('Eles ___ três filhos. (ter)', ['têm', 'tem', 'temos'], 'têm', 'Plural with accent.'),
        lacuna('___ pais moram em Salvador. (my)', ['Meus', 'Meu', 'Minhas'], 'Meus', '«Pais» is masculine plural.'), lacuna('O carro ___ Pedro é novo. (de + o)', ['do', 'da', 'de'], 'do', 'De + o = do.'),
        ordem('Put in order: «Minha irmã tem quinze anos.»', ['Minha', 'irmã', 'tem', 'quinze', 'anos.'], 'Minha irmã tem quinze anos.', 'Age uses «ter».'), ordem('Put in order: «Eu moro com meus pais.»', ['Eu', 'moro', 'com', 'meus', 'pais.'], 'Eu moro com meus pais.', '«Morar com» + possessive + noun.'),
        livre('Write in Portuguese: I have a brother and two sisters. My brother is fifteen.', 'Eu tenho um irmão e duas irmãs. Meu irmão tem quinze anos.'),
        livre('Write in Portuguese: Her mother is a doctor. His father is a teacher.', 'A mãe dela é médica. O pai dele é professor.'),
      ]),
      producao(5, 'Describe your family aloud as if you were presenting it to a new teacher: how many people, who they are, what they do, how old they are and where they live. Then ask the teacher one question about their family.'),
    ]),
  ],
});
