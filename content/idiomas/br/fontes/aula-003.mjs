import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 3, titulo: 'Introductions, countries, numbers 0-20 and age', nivel: 'a1',
  objetivo: 'Introduce yourself and others, ask and say where someone is from, name countries and nationalities, count from 0 to 20 and say your age with «ter».',
  nota: 'You can meet someone, say your name, your country and your age, and ask the same questions back, in an informal and in a polite way. Next lesson: the present tense of the regular «-ar» verbs, negation and questions.',
  sessoes: [
    sessao('S1', 'Introducing yourself', [
      revisao(5, 'Say the present of «ser» aloud. Then say who you are with your profession (for example «Eu sou estudante»), describe a friend with two adjectives, and make one negative sentence.'),
      palavras(8, [
        ['prazer', 'prah-ZEH', 'nice to meet you (literally «pleasure»)', ''], ['muito prazer', 'MOY~-too prah-ZEH', 'very nice to meet you', ''], ['igualmente', 'ee-gwah-oo-MEH~-tchee', 'likewise, same here', ''],
        ['meu nome é', 'MEH-oo NOH-mee EH', 'my name is', ''], ['qual é o seu nome?', 'KWAH-oo EH oo SEH-oo NOH-mee', 'what is your name?', ''], ['como você se chama? / eu me chamo', 'KOH-moo voh-SEH see SHAH~-mah / EH-oo mee SHAH~-moo', 'what are you called? / I am called', ''],
        ['de onde você é?', 'djee OH~-djee voh-SEH EH', 'where are you from?', ''], ['o senhor, a senhora', 'oo seh-NYOR, ah seh-NYOH-rah', 'you (polite: sir, madam)', ''], ['este é, esta é', 'ES-tchee EH, ES-tah EH', 'this is (introducing a man, a woman)', ''],
      ]),
      gramatica(12, 'Meeting people: names, origin and the polite «you»', "STEP 1: you can say your name in three ways, all very common: «Eu sou Marina», «Meu nome é Marina» or «Eu me chamo Marina». After the introduction, the other person says «Prazer!» or «Muito prazer!», and you answer «Prazer!» or «Igualmente!». STEP 2: to ask for a name, use «Qual é o seu nome?» (literally «which is your name?») or «Como você se chama?» (literally «how do you call yourself?»). Learn both as whole phrases for now: «meu» and «seu» (my, your) come in lesson 7, and verbs like «se chamar» in lesson 14. STEP 3: to ask where someone is from, say «De onde você é?». The answer is «Sou de…» followed by a city: «Sou de São Paulo». With countries it is a little different, and you will see it in the next session. STEP 4: to introduce another person, say «Este é Pedro» (a man) and «Esta é Ana» (a woman). It means «this is». STEP 5: «o senhor» (to a man) and «a senhora» (to a woman) are the polite way to say «you», for older people, in a formal service, with a boss or with someone you have just met in a formal setting. The verb is the same as for «você»: «O senhor é médico?», «A senhora é de onde?». Among friends and in most casual situations use «você». STEP 6: for older people you can also use «Seu» (short for «senhor») or «Dona» before the first name: «Seu José», «Dona Marta». It is respectful and warm, not cold. STEP 7: in a formal or first meeting people often shake hands. Among friends and acquaintances, especially with women, a kiss on the cheek or a hug is common, and the number of kisses varies by region. Follow the other person's lead.", {
        tag: 'Introductions',
        comparacao: "In English one «you» works for the king and for your best friend. In Portuguese the choice of «você» or «o senhor/a senhora» tells how formal the situation is. Do not worry: «você» is correct almost everywhere in Brazil. English «How do you do?» is more formal than Portuguese «Prazer», which people use all the time, even with young colleagues. Also note the question «De onde você é?»: the verb is «ser» (to be from), not «vir».",
        exemplos: [
          ['Oi, eu sou Marina. Prazer!', 'Hi, I am Marina. Nice to meet you!'], ['Prazer, Pedro. — Igualmente!', 'Nice to meet you, Pedro. — Likewise!'], ['Qual é o seu nome?', 'What is your name?'], ['Como você se chama?', 'What are you called?'],
          ['De onde você é? — Sou de São Paulo.', 'Where are you from? — I am from São Paulo.'], ['O senhor é de onde?', 'Where are you from, sir? (polite)'], ['Esta é Ana. Este é Rafael.', 'This is Ana. This is Rafael.'],
        ],
        tabela: [
          { situation: 'a friend, a classmate, a colleague', you_say: 'você', example: 'Você é de onde?' },
          { situation: 'an older man, formal service', you_say: 'o senhor', example: 'O senhor é médico?' },
          { situation: 'an older woman, formal service', you_say: 'a senhora', example: 'A senhora é professora?' },
          { situation: 'an older acquaintance, warm and respectful', you_say: 'Seu / Dona + first name', example: 'Seu José, Dona Marta' },
        ],
        erros: [['Meu nome sou Marina.', 'Meu nome é Marina.', 'The subject is «nome», so the verb is «é». «Sou» goes only with «eu».'], ['Eu sou chamo Marina.', 'Eu me chamo Marina.', '«Me chamo» is one expression. Do not add «sou».'], ['Como você chama?', 'Como você se chama?', 'The «se» is part of the expression.'], ['Answering «Prazer!» with «De nada».', 'Igualmente! / Prazer!', '«De nada» answers «obrigado». To a «prazer» you answer «prazer» or «igualmente».']],
      }),
      producao(5, 'Do a short role play out loud. First with a friend: say your name, ask the name, answer «Prazer!», ask where they are from. Then do it again in a polite way with «o senhor» or «a senhora».'),
    ]),
    sessao('S2', 'Countries and nationalities', [
      revisao(4, 'Introduce yourself in two ways («Eu sou…» and «Meu nome é…»). Ask «Qual é o seu nome?» and «De onde você é?». Say «Prazer» and «Igualmente».'),
      palavras(6, [
        ['Estados Unidos', 'ees-TAH-dooz oo-NEE-dooz', 'United States', ''], ['Inglaterra', 'ee~-glah-TEH-hah', 'England', ''], ['Canadá', 'kah-nah-DAH', 'Canada', ''], ['Portugal', 'por-too-GAH-oo', 'Portugal', ''],
        ['Alemanha', 'ah-leh-MAH~-nyah', 'Germany', ''], ['França', 'FRAH~-sah', 'France', ''], ['México', 'MEH-shee-koo', 'Mexico', ''], ['Japão', 'zhah-POW~', 'Japan', ''], ['Argentina', 'ar-zheh~-TCHEE-nah', 'Argentina', ''],
      ]),
      gramatica(12, 'Where you are from and your nationality', "STEP 1: to say where you are from, use «ser de»: «Eu sou de Portugal», «Eu sou de São Paulo». STEP 2: many country names are used with an article in Portuguese: «o Brasil», «a Alemanha», «os Estados Unidos». The preposition «de» joins the article: «de + o = do», «de + a = da», «de + os = dos». So you say «Sou do Brasil», «Sou da Alemanha», «Sou dos Estados Unidos». Articles have their own lesson (lesson 5); for now learn the combinations as whole phrases from the table. STEP 3: a few names have no article and need only «de»: «Sou de Portugal». Most cities also take just «de»: «Sou de Salvador». A few well-known ones have an article: «Sou do Rio». STEP 4: the nationality is an adjective, so it agrees with the person: «Ele é americano», «Ela é americana», «Eles são americanos». It is not written with a capital letter. STEP 5: there are patterns. Most end in «-o»/«-a» (americano, americana, mexicano). Nationalities ending in «-ês» become «-esa» in the feminine («inglês, inglesa»), and they lose the accent in the plural («ingleses»). Those in «-ão» become «-ã» and the plural is «-ães» («alemão, alemã, alemães»). The ending «-ense» does not change («canadense»). STEP 6: in Brazil people say «americano» for a person from the United States; you will also read «norte-americano» and, formally, «estadunidense». The word «gringo» is used for any foreigner and can be friendly or not, depending on the tone.", {
        tag: 'Countries',
        comparacao: "In English country names rarely take an article («the Netherlands» is an exception) and nationalities are written with a capital: «She is German». In Portuguese many countries take an article («a Alemanha», «o Canadá»), which merges with «de» (do, da, dos), and nationalities are lowercase adjectives that agree: «ela é alemã». English «I am from Canada» is simply «Sou do Canadá».",
        tabelas: [
          { titulo: 'Where you are from', linhas: [
            { country: 'Brasil', where_from: 'Sou do Brasil.' }, { country: 'Estados Unidos', where_from: 'Sou dos Estados Unidos.' }, { country: 'Inglaterra', where_from: 'Sou da Inglaterra.' }, { country: 'Canadá', where_from: 'Sou do Canadá.' },
            { country: 'Portugal', where_from: 'Sou de Portugal.' }, { country: 'Alemanha', where_from: 'Sou da Alemanha.' }, { country: 'França', where_from: 'Sou da França.' }, { country: 'México', where_from: 'Sou do México.' },
            { country: 'Japão', where_from: 'Sou do Japão.' }, { country: 'Argentina', where_from: 'Sou da Argentina.' },
          ] },
          { titulo: 'Nationalities', linhas: [
            { country: 'Brasil', man: 'brasileiro', woman: 'brasileira', plural: 'brasileiros' }, { country: 'Estados Unidos', man: 'americano', woman: 'americana', plural: 'americanos' }, { country: 'Inglaterra', man: 'inglês', woman: 'inglesa', plural: 'ingleses' },
            { country: 'Canadá', man: 'canadense', woman: 'canadense', plural: 'canadenses' }, { country: 'Portugal', man: 'português', woman: 'portuguesa', plural: 'portugueses' }, { country: 'Alemanha', man: 'alemão', woman: 'alemã', plural: 'alemães' },
            { country: 'França', man: 'francês', woman: 'francesa', plural: 'franceses' }, { country: 'México', man: 'mexicano', woman: 'mexicana', plural: 'mexicanos' }, { country: 'Japão', man: 'japonês', woman: 'japonesa', plural: 'japoneses' },
            { country: 'Argentina', man: 'argentino', woman: 'argentina', plural: 'argentinos' },
          ] },
        ],
        erros: [['Sou de Brasil.', 'Sou do Brasil.', '«Brasil» takes the article «o», so «de + o» becomes «do».'], ['Ela é alemão.', 'Ela é alemã.', 'A woman is «alemã». The ending «-ão» becomes «-ã».'], ['Eu sou Americana.', 'Eu sou americana.', 'Nationalities are written with a small letter in Portuguese.'], ['Ele é francêsa.', 'Ele é francês. / Ela é francesa.', 'The accent stays only in the masculine «francês». The feminine is «francesa», without accent.']],
      }),
      dialogo(4, 'At the hostel', 'Camila meets John at a hostel in Salvador.', [
        ['Camila', 'Oi, tudo bem? Eu sou Camila.', 'Hi, how are you? I am Camila.'], ['John', 'Oi, Camila! Eu sou John. Prazer!', 'Hi, Camila! I am John. Nice to meet you!'], ['Camila', 'Igualmente! Você é americano?', 'Likewise! Are you American?'],
        ['John', 'Sou, sim. Sou dos Estados Unidos. E você?', 'Yes, I am. I am from the United States. And you?'], ['Camila', 'Sou brasileira, sou de São Paulo.', 'I am Brazilian, I am from São Paulo.'], ['John', 'Legal! Você não é de Salvador?', 'Cool! You are not from Salvador?'], ['Camila', 'Não, não sou.', 'No, I am not.'],
      ]),
      producao(4, 'Say where you are from and your nationality, then do the same for three people from different countries: «Ele é… Ele é do/da/de…». Pay attention to the feminine forms.'),
    ]),
    sessao('S3', 'Numbers 0 to 20 and age', [
      revisao(4, 'Name six countries with «Sou do/da/de…» and the nationality in masculine and feminine. Ask a friend «De onde você é?» and answer.'),
      palavras(5, [
        ['zero', 'ZEH-roo', '0', ''], ['um, uma', 'OO~, OO-mah', '1', ''], ['dois, duas', 'DOYS, DOO-ahs', '2', ''], ['três', 'TREHS', '3', ''], ['quatro', 'KWAH-troo', '4', ''], ['cinco', 'SEE~-koo', '5', ''],
        ['seis', 'SAYS', '6', ''], ['sete', 'SEH-tchee', '7', ''], ['oito', 'OY-too', '8', ''], ['nove', 'NAW-vee', '9', ''], ['dez', 'DEHS', '10', ''], ['ano, anos', 'AH~-noo, AH~-nooz', 'year, years (age)', ''],
      ]),
      gramatica(8, 'Counting to 20 and saying your age', "STEP 1: learn 0 to 10 from the list, then 11 to 20 from the table: onze, doze, treze, catorze (also written quatorze), quinze, dezesseis, dezessete, dezoito, dezenove, vinte. Watch the spelling of «dezesseis» and «dezessete»: two s's. STEP 2: only «1» and «2» have a feminine form, because they agree with the noun: «um amigo, uma amiga», «dois amigos, duas amigas». The other numbers never change. STEP 3: you say your age with the verb «ter» (to have), not with «ser»: «Eu tenho vinte anos». For now you only need two forms: «eu tenho» and «ele/ela/você tem». The full conjugation comes in lesson 7. STEP 4: to ask the age, say «Quantos anos você tem?» (literally «how many years do you have?»). Answer «Tenho dezoito anos». For one year it is singular: «Ela tem um ano». STEP 5: in phone numbers people usually say each digit, and many Brazilians say «meia» (half a dozen) for the digit six, to avoid confusion with «três» and «seis» on a noisy line. Mobile numbers have nine digits and start with a «9».", {
        tag: 'Numbers',
        comparacao: "English says «I am 20 years old» with the verb «to be». Portuguese says «I have 20 years»: «Tenho vinte anos». Using «sou vinte anos» is the most common mistake. English numbers do not change for gender; in Portuguese, only «um/uma» and «dois/duas» do.",
        tabelas: [
          { titulo: 'Numbers 11 to 20', linhas: [
            { number: '11', word: 'onze', respelling: 'OH~-zee' }, { number: '12', word: 'doze', respelling: 'DOH-zee' }, { number: '13', word: 'treze', respelling: 'TREH-zee' }, { number: '14', word: 'catorze', respelling: 'kah-TOR-zee' }, { number: '15', word: 'quinze', respelling: 'KEE~-zee' },
            { number: '16', word: 'dezesseis', respelling: 'deh-zeh-SAYS' }, { number: '17', word: 'dezessete', respelling: 'deh-zeh-SEH-tchee' }, { number: '18', word: 'dezoito', respelling: 'deh-ZOY-too' }, { number: '19', word: 'dezenove', respelling: 'deh-zeh-NAW-vee' }, { number: '20', word: 'vinte', respelling: 'VEE~-tchee' },
          ] },
          { titulo: 'Age with «ter»', linhas: [
            { person: 'eu', form: 'tenho', example: 'Eu tenho dezenove anos.' }, { person: 'você, ele, ela', form: 'tem', example: 'Ela tem vinte anos.' }, { person: 'question', form: 'Quantos anos…?', example: 'Quantos anos você tem?' },
          ] },
        ],
        erros: [['Eu sou vinte anos.', 'Eu tenho vinte anos.', 'Age uses «ter» (to have), not «ser».'], ['Eu tenho dois amigas.', 'Eu tenho duas amigas.', '«Dois» becomes «duas» with a feminine noun.'], ['dezeseis', 'dezesseis', 'The word has two s: «dezesseis».'], ['Quantos anos você é?', 'Quantos anos você tem?', 'The verb of the question is «ter».']],
      }),
      dialogo(8, 'Signing up for a course', 'John goes to the front desk of a language school in São Paulo. The receptionist helps him with the form.', [
        ['The receptionist', 'Bom dia! Qual é o seu nome?', 'Good morning! What is your name?'], ['John', 'Bom dia! Meu nome é John.', 'Good morning! My name is John.'], ['The receptionist', 'Prazer, John! Você é de onde?', 'Nice to meet you, John! Where are you from?'],
        ['John', 'Sou dos Estados Unidos.', 'I am from the United States.'], ['The receptionist', 'Você é americano, então. Quantos anos você tem?', 'So you are American. How old are you?'], ['John', 'Tenho dezenove anos.', 'I am nineteen years old.'],
        ['The receptionist', 'Dezenove! E quem é ela?', 'Nineteen! And who is she?'],
        ['John', 'Esta é Emma. Ela é canadense.', 'This is Emma. She is Canadian.'], ['Emma', 'Oi! Prazer! Eu tenho dezoito anos.', 'Hi! Nice to meet you! I am eighteen years old.'], ['The receptionist', 'Muito bem! Obrigada, John e Emma.', 'Very good! Thank you, John and Emma.'], ['John', 'De nada! Até logo!', "You're welcome! See you soon!"],
      ]),
      producao(5, 'Say your age and the age of three people in your family or among your friends: «Eu tenho… anos. Ele/Ela tem… anos». Then count from 0 to 20 and back, aloud, without looking.'),
    ]),
    sessao('S4', 'Review and practice of lesson 3', [
      revisao(5, 'Introduce yourself completely: name, country, nationality and age. Then introduce a friend in the same way, and do it again politely with «o senhor».'),
      exercicios(20, [
        ouvir('Muito prazer', ['Muito prazer', 'Muito obrigado', 'Muito bem'], 'Muito prazer', 'Listen for «prazer» at the end.'), ouvir('Sou dos Estados Unidos', ['Sou dos Estados Unidos', 'Sou de Estados Unidos', 'Sou do Estados Unidos'], 'Sou dos Estados Unidos', '«Dos» agrees with the plural «os Estados Unidos».'),
        ouvir('Ela é alemã', ['Ela é alemã', 'Ela é alemão', 'Ele é alemão'], 'Ela é alemã', 'The feminine ends in «-ã».'), ouvir('Tenho dezessete anos', ['Tenho dezessete anos', 'Tenho dezesseis anos', 'Tenho dezenove anos'], 'Tenho dezessete anos', '«Dezessete» ends in «-sete».'),
        ouvir('Quantos anos você tem?', ['Quantos anos você tem?', 'De onde você é?', 'Qual é o seu nome?'], 'Quantos anos você tem?', 'The question asks for the age.'), ouvir('quatorze', ['quatorze', 'quinze', 'treze'], 'quatorze', 'You may also hear «catorze».'),
        ditado('Eu me chamo Marina', 'Write: Eu me chamo Marina.'), ditado('Ele é canadense', 'Write: Ele é canadense.'), ditado('Ela tem vinte anos', 'Write: Ela tem vinte anos. Age uses «ter».'),
        mc('How do you say your age correctly?', ['Eu tenho vinte anos.', 'Eu sou vinte anos.', 'Eu estou vinte anos.'], 'Eu tenho vinte anos.', 'Age uses «ter».'), mc('Which one is the polite way to say «you» to an older woman?', ['a senhora', 'você', 'ela'], 'a senhora', '«A senhora» is the polite form for a woman.'),
        mc('How does a woman from Germany say her nationality?', ['Sou alemã.', 'Sou alemão.', 'Sou Alemã.'], 'Sou alemã.', 'The feminine of «alemão» is «alemã» and it is written with a small letter.'), mc('What do you answer to «Prazer!»?', ['Igualmente!', 'De nada!', 'Até logo!'], 'Igualmente!', '«Igualmente» means likewise.'),
        mc('Which is the feminine of «dois»?', ['duas', 'dois', 'dua'], 'duas', 'Only «um» and «dois» have a feminine form.'), mc('Which question asks where someone is from?', ['De onde você é?', 'Qual é o seu nome?', 'Quantos anos você tem?'], 'De onde você é?', '«De onde» means «from where».'),
        lacuna('Ela é ___ . (Canadian)', ['canadense', 'canadensa', 'canadeiro'], 'canadense', 'The ending «-ense» does not change.'), lacuna('Eu sou ___ Brasil.', ['do', 'da', 'de'], 'do', '«Brasil» takes «o»: de + o = do.'),
        lacuna('Eu ___ dezoito anos.', ['tenho', 'sou', 'tem'], 'tenho', '«Tenho» goes with «eu».'), lacuna('Eu tenho ___ amigas. (2)', ['duas', 'dois', 'dua'], 'duas', 'Feminine noun, so «duas».'),
        ordem('Put in order: «Qual é o seu nome?»', ['Qual', 'é', 'o', 'seu', 'nome?'], 'Qual é o seu nome?', 'A fixed question for now.'), ordem('Put in order: «Eu sou da Alemanha.»', ['Eu', 'sou', 'da', 'Alemanha.'], 'Eu sou da Alemanha.', '«Da» is «de + a».'),
        livre('Write in Portuguese: My name is Pedro. I am from Portugal. I am nineteen years old.', 'Meu nome é Pedro. Sou de Portugal. Tenho dezenove anos.'),
        livre('Write in Portuguese: Where are you from? I am Mexican.', 'De onde você é? Sou mexicano.'),
      ]),
      producao(5, 'Speak for a minute as if you were at a language school desk: your name, where you are from, your nationality and your age. Then ask the same four questions, first to a friend and then politely to «a senhora».'),
    ]),
  ],
});
