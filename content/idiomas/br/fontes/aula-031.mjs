import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 31, titulo: 'Por and para', nivel: 'a2',
  objetivo: 'Choose between «por» and «para» in everyday sentences: say what something is for, where you are going, who it is for, thank someone for something, say how long, by what means and for how much, and ask and answer «por que?».',
  nota: 'You can use «para» for goals, destinations, receivers and deadlines, and «por» for causes, routes, time, price and means, including the contractions «pelo», «pela», «pelos» and «pelas». Next lesson: relative words («que», «onde», «quem»).',
  sessoes: [
    sessao('S1', 'Para: goal, destination, receiver, deadline', [
      revisao(5, 'Say aloud three sentences from lesson 30: one with «estar + gerund», one with «acabar de» and one with «ficar». Then say where you are going tomorrow.'),
      palavras(8, [
        ['para', 'PAH-rah', 'for; to; in order to (in speech: «pra»)', ''], ['prazo', 'PRAH-zoo', 'deadline', ''], ['presente', 'preh-ZEH~-tchee', 'gift; present (time)', ''], ['entregar', 'eh~-treh-GAR', 'to deliver, to hand in', ''],
        ['encomenda', 'eh~-koh-MEH~-dah', 'parcel; order', ''], ['mandar', 'mah~-DAR', 'to send', ''], ['viagem', 'vee-AH-zheh~ee', 'trip, journey', ''], ['opinião', 'oh-pee-nee-OW~', 'opinion', ''],
      ]),
      gramatica(12, 'Para: goal, destination, receiver, deadline, opinion', "STEP 1: «para» + infinitive says what something is for, the goal: «Estudo português para trabalhar no Brasil.» The question is «para quê?» (what for?). STEP 2: «para» also shows the destination: «Vou para o Rio.» «Este ônibus vai para Salvador.» STEP 3: «para» introduces the person who receives something: «O presente é para você.» «Comprei flores para a minha mãe.» STEP 4: «para» gives a deadline or a date: «Preciso do relatório para sexta-feira.» «O prazo é para amanhã.» STEP 5: «para mim», «para ela» give an opinion: «Para mim, o trânsito é o maior problema.» STEP 6: «para» can also compare: «Para um iniciante, ele fala bem.» STEP 7: in speech «para» is shortened to «pra» and «para o» to «pro»: «Vou pra casa», «É pro meu pai». Write the full forms «para» and «para o» in formal writing. The article never fuses with «para» in writing.", {
        tag: 'Prepositions',
        comparacao: "In English «for» covers almost everything: for you, for a week, for ten reais, for a reason, for sale. Portuguese divides the work between «para» and «por». A simple image: «para» looks forward, to a goal, a place, a person or a date; «por» looks back to a cause, or passes through something. English also says «in order to» or just «to» before a verb; Portuguese needs «para» there: «I study to learn» is «Estudo para aprender».",
        tabela: [
          { use: 'goal (+ infinitive)', example: 'Estudo para passar no exame.', translation: 'I study to pass the exam.' },
          { use: 'destination', example: 'Vou para São Paulo.', translation: 'I am going to São Paulo.' },
          { use: 'receiver', example: 'Este café é para você.', translation: 'This coffee is for you.' },
          { use: 'deadline', example: 'Preciso disso para segunda.', translation: 'I need this by Monday.' },
          { use: 'opinion', example: 'Para mim, é caro.', translation: 'In my opinion, it is expensive.' },
        ],
        erros: [['Estudo português por trabalhar no Brasil', 'Estudo português para trabalhar no Brasil', 'A goal before an infinitive uses «para».'], ['Este ônibus vai por Salvador', 'Este ônibus vai para Salvador', 'The destination is «para»; «por» would mean «through Salvador».'], ['Este presente é por você', 'Este presente é para você', 'The receiver is introduced by «para».'], ['Preciso disso por sexta-feira', 'Preciso disso para sexta-feira', 'A deadline uses «para».']],
      }),
      producao(5, 'Say four sentences about your week with «para»: where you are going («Vou para…»), who you are buying or sending something to («Comprei… para…»), a goal («Estudo… para…») and a deadline («Preciso… para…»).'),
    ]),
    sessao('S2', 'Por: cause, route, time, price, means', [
      revisao(4, 'Say aloud: «Vou para casa», «O presente é para você», «Estudo para aprender», «Preciso disso para sexta». Then translate each into English.'),
      palavras(6, [
        ['por', 'POOR', 'for; by; through; per', ''], ['pelo, pela, pelos, pelas', 'PEH-loo, PEH-lah', 'por + o, a, os, as', ''], ['passar por', 'pah-SAR poor', 'to pass by, to go through', ''], ['agradecer', 'ah-grah-deh-SEHR', 'to thank', ''],
        ['durante', 'doo-RAH~-tchee', 'during', ''], ['barulho', 'bah-ROO-lyoo', 'noise', ''],
      ]),
      gramatica(12, 'Por: cause, route, time, price, means and «pelo, pela»', "STEP 1: «por» gives the cause or the reason you thank or apologize for: «Obrigado pela ajuda.» «Desculpe pelo barulho.» «Cheguei atrasado por causa do trânsito.» STEP 2: «por» shows the route, the place you pass through: «Passamos pelo centro.» «Andamos pela praia.» «O ônibus passa por aqui?» STEP 3: «por» gives the length of time: «Morei em Recife por dois anos.» «Estudei por três horas.» And it shows the part of the day: «pela manhã, pela tarde, pela noite». STEP 4: «por» shows exchange and price: «Paguei trinta reais por este livro.» «Troquei a camisa por outra.» STEP 5: «por» shows the means: «por telefone, por e-mail, pelo WhatsApp, pela internet, pelo correio». STEP 6: «por» shows «per»: «duas vezes por semana», «cem reais por dia», «dez por cento». STEP 7: «por» fuses with the articles: «por + o = pelo», «por + a = pela», «por + os = pelos», «por + as = pelas». Never write «por o» or «por a». Before nothing there is no article: «por aqui», «por favor», «por telefone».", {
        tag: 'Prepositions',
        comparacao: "English uses «for», «by», «through», «per» and «during» where Portuguese uses «por». Many of these meanings feel unrelated, but they share an idea: «por» is the path or the reason, not the goal. Careful: English «thank you for the help» is «obrigado pela ajuda», not «para a ajuda».",
        tabelas: [
          { titulo: 'Uses of «por»', linhas: [
            { use: 'cause', example: 'Obrigada pelo presente.', translation: 'Thank you for the gift.' },
            { use: 'route', example: 'Passei pela farmácia.', translation: 'I passed by the pharmacy.' },
            { use: 'time', example: 'Trabalho pela manhã.', translation: 'I work in the morning.' },
            { use: 'price', example: 'Paguei vinte reais por isso.', translation: 'I paid twenty reais for this.' },
            { use: 'means', example: 'Falamos por telefone.', translation: 'We talk by phone.' },
            { use: 'per', example: 'Estudo três vezes por semana.', translation: 'I study three times a week.' },
          ] },
          { titulo: 'Contractions with «por»', linhas: [
            { with: 'por + o', form: 'pelo', example: 'Passamos pelo parque.' },
            { with: 'por + a', form: 'pela', example: 'Andei pela rua.' },
            { with: 'por + os', form: 'pelos', example: 'Obrigado pelos conselhos.' },
            { with: 'por + as', form: 'pelas', example: 'Passei pelas lojas.' },
          ] },
        ],
        erros: [['Obrigado para a ajuda', 'Obrigado pela ajuda', 'The thing you thank for is introduced by «por» (here «pela»).'], ['Estudei para três horas', 'Estudei por três horas', 'A length of time uses «por».'], ['Passei por o centro', 'Passei pelo centro', 'Always fuse «por» with «o, a, os, as»: «pelo, pela, pelos, pelas».'], ['Paguei vinte reais para este livro', 'Paguei vinte reais por este livro', 'Price and exchange use «por».']],
      }),
      producao(8, 'Say six sentences with «por»: thank someone for something («Obrigado/Obrigada pelo/pela…»), say a route («Passo pelo/pela… todos os dias»), a duration («Estudei… por…»), a price («Paguei… por…»), a means («Falo com… por…») and a frequency («… vezes por semana»).'),
    ]),
    sessao('S3', 'Por or para? And the four «porques»', [
      revisao(4, 'Say two sentences with «por» and two with «para». Then say what you thank someone for: «Obrigado/Obrigada pelo/pela…».'),
      palavras(5, [
        ['por isso', 'poor EE-soo', 'that is why, so', ''], ['por exemplo', 'poor eh-ZEH~-ploo', 'for example', ''], ['por que', 'poor KEE', 'why', ''], ['porque', 'poor-KEE', 'because', ''],
        ['motivo', 'moh-TCHEE-voo', 'reason', ''],
      ]),
      gramatica(8, 'Por or para? A quick test, and the four «porques»', "STEP 1: a quick test. If you can ask «para quê?» (what for?), or if the word introduces a destination, a receiver or a deadline, use «para». If it introduces a cause («por quê?»), a route, a length of time, a price or a means, use «por». STEP 2: sometimes the two change the meaning: «Ele viajou para o Nordeste» (he went to the Northeast) × «Ele viajou pelo Nordeste» (he travelled around the Northeast). «Fiz isso para você» (I did it for your benefit) × «Fiz isso por você» (I did it because of you, on your behalf). STEP 3: four forms sound the same but are written differently. «Por que» (two words) starts a question: «Por que você chegou tarde?» «Por quê?» with an accent comes at the end of a sentence: «Você chegou tarde por quê?» «Porque» (one word) is the answer: «Porque o ônibus atrasou.» «Porquê» (one word, accent, with an article) is a noun, «the reason»: «Não entendo o porquê.» STEP 4: two fixed phrases to learn: «por isso» (that is why) and «por exemplo».", {
        tag: 'Prepositions',
        comparacao: "English separates «why» (question) and «because» (answer), and so does Portuguese. The extra difficulty is spelling: «por que», «por quê», «porque», «porquê». In speech they all sound similar, but the written form depends on the position in the sentence.",
        tabela: [
          { form: 'por que', use: 'question, start or middle', example: 'Por que você estuda português?' },
          { form: 'por quê', use: 'end of a question', example: 'Você estuda português por quê?' },
          { form: 'porque', use: 'answer: because', example: 'Porque quero viver no Brasil.' },
          { form: 'porquê', use: 'noun: the reason', example: 'Não sei o porquê.' },
          { form: 'por isso', use: 'that is why', example: 'Estou cansado, por isso vou dormir.' },
        ],
        erros: [['Porque você chegou tarde?', 'Por que você chegou tarde?', 'In a question, «why» is written as two words: «por que».'], ['Por que eu estudo? Por que gosto.', 'Por que eu estudo? Porque gosto.', 'The answer «because» is one word: «porque».'], ['Fiz isso por aprender', 'Fiz isso para aprender', 'A goal before an infinitive uses «para».']],
      }),
      texto(8, 'A gift for my mother', 'Minha mãe faz aniversário na sexta-feira. Ela mora em Recife e eu moro em Belo Horizonte, por isso preciso mandar o presente pelo correio. Comprei uma bolsa por oitenta reais, pela internet. A loja disse que a encomenda chega em quatro dias. Para mim, é um bom prazo. Na sexta-feira, vou ligar para ela e dar os parabéns por telefone. Para ela, a ligação é o melhor presente.', "My mother has her birthday on Friday. She lives in Recife and I live in Belo Horizonte, so I need to send the gift by mail. I bought a bag for eighty reais, on the internet. The shop said the parcel arrives in four days. In my opinion, it is a good deadline. On Friday I will call her and wish her a happy birthday by phone. For her, the call is the best gift.", [
        ['When is the mother\'s birthday?', 'Na sexta-feira.'], ['Why does he need to send the gift by mail?', 'Porque a mãe mora em Recife e ele mora em Belo Horizonte.'], ['How much did the bag cost?', 'Oitenta reais.'], ['How will he greet his mother on her birthday?', 'Por telefone.'],
      ]),
      producao(5, 'Answer aloud in a full sentence with «porque»: «Por que você estuda português?» «Por que você gosta da sua cidade?» Then say one thing you do «para» yourself and one thing you do «por» someone else.'),
    ]),
    sessao('S4', 'Review and practice of lesson 31', [
      revisao(5, 'Say aloud: «Obrigado pela ajuda», «O presente é para você», «Estudei por três horas», «Vou para o Rio». Then ask «Por que?» and answer with «Porque».'),
      exercicios(20, [
        ouvir('Obrigado pela ajuda', ['Obrigado pela ajuda', 'Obrigado para a ajuda', 'Obrigado pelo ajuda'], 'Obrigado pela ajuda', 'The reason you thank for uses «por»: «por + a = pela».'),
        ouvir('Este presente é para você', ['Este presente é para você', 'Este presente é por você', 'Este presente é pelo você'], 'Este presente é para você', 'The receiver uses «para».'),
        ouvir('Passamos pelo centro', ['Passamos pelo centro', 'Passamos para o centro', 'Passamos por o centro'], 'Passamos pelo centro', 'A route uses «por»: «por + o = pelo».'),
        ouvir('Estudo português para trabalhar no Brasil', ['Estudo português para trabalhar no Brasil', 'Estudo português por trabalhar no Brasil', 'Estudo português pelo trabalhar no Brasil'], 'Estudo português para trabalhar no Brasil', 'A goal before an infinitive uses «para».'),
        ditado('Preciso disso para sexta-feira', 'Write: Preciso disso para sexta-feira.'),
        ditado('Paguei trinta reais por este livro', 'Write: Paguei trinta reais por este livro.'),
        ditado('Por que você chegou tarde?', 'Write: Por que você chegou tarde?'),
        mc('Este ônibus vai ___ Salvador.', ['para', 'por', 'pelo'], 'para', 'The destination uses «para».'),
        mc('Obrigada ___ presente.', ['pelo', 'para o', 'por o'], 'pelo', 'The reason for thanks uses «por»; «por + o = pelo».'),
        mc('Which sentence means «I studied for three hours»?', ['Estudei por três horas', 'Estudei para três horas', 'Estudei pelo três horas'], 'Estudei por três horas', 'A duration uses «por».'),
        mc('How do you write «why» at the end of a question?', ['por quê', 'porque', 'porquê'], 'por quê', 'At the end of a question the form is «por quê», with an accent.'),
        mc('Which form is the answer «because»?', ['porque', 'por que', 'por quê'], 'porque', 'The answer is one word: «porque».'),
        mc('What is «por + as»?', ['pelas', 'pelos', 'pela'], 'pelas', '«Por» + feminine plural article = «pelas».'),
        lacuna('Falamos ___ telefone.', ['por', 'para', 'pelo'], 'por', 'The means («by phone») uses «por», without an article.'),
        lacuna('Passei ___ praça ontem. (por + a)', ['pela', 'pelo', 'para a'], 'pela', '«Praça» is feminine: «pela».'),
        lacuna('Comprei flores ___ minha mãe.', ['para', 'por', 'pela'], 'para', 'The receiver uses «para».'),
        lacuna('___ você chegou tarde? (question)', ['Por que', 'Porque', 'Porquê'], 'Por que', 'The question is written as two words.'),
        lacuna('Trabalho duas vezes ___ semana.', ['por', 'para', 'pela'], 'por', '«Por semana» means «per week», without an article.'),
        ordem('Put in order: «Preciso do relatório para segunda-feira»', ['Preciso', 'do', 'relatório', 'para', 'segunda-feira'], 'Preciso do relatório para segunda-feira', 'A deadline uses «para».'),
        ordem('Put in order: «Obrigado pelos conselhos»', ['Obrigado', 'pelos', 'conselhos'], 'Obrigado pelos conselhos', '«Por + os = pelos».'),
        livre('Write in Portuguese: This gift is for you. Thank you for the help.', 'Este presente é para você. Obrigado pela ajuda.'),
        livre('Write in Portuguese: I study Portuguese because I want to live in Brazil.', 'Estudo português porque quero morar no Brasil.'),
      ]),
      producao(5, 'Tell a friend about a trip you want to take: where you are going («para»), how you will go («por»/«de»), how long you will stay, who the gifts are for and why you are going («porque»).'),
    ]),
  ],
});
