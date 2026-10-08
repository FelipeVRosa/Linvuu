import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 24, titulo: 'Indirect object pronouns', nivel: 'a2',
  objetivo: "Say who receives something or who you tell, ask, show or send something to («ele me mandou», «eu te falei», «dei pra ela»), using the spoken forms of Brazil and recognizing the written forms «lhe» and «lhes».",
  nota: "You can say that someone gave, sent, told or showed something to you, to others or to a third person, with «me», «te», «pra ele», «pra gente» and the written «lhe». Next lesson: where the pronouns go in the sentence, and how the spoken norm of Brazil differs from the written norm.",
  sessoes: [
    sessao('S1', 'Me, te and nos: to whom?', [
      revisao(5, "Say aloud, using the direct object pronouns from lesson 23: «Eu te vi ontem.» «Ele me conhece.» «Eu vi ela na rua.» Then explain in English the difference between «eu o vi» (written) and «eu vi ele» (spoken)."),
      palavras(8, [
        ['dar', 'DAR', 'to give (dei = I gave, deu = he/she gave)', ''], ['mandar', 'mah~-DAR', 'to send', ''], ['emprestar', 'eh~-prehs-TAR', 'to lend', ''], ['mostrar', 'mohs-TRAR', 'to show', ''],
        ['ensinar', 'eh~-see-NAR', 'to teach', ''], ['explicar', 'ehs-plee-KAR', 'to explain', ''], ['perguntar', 'per-goo~-TAR', 'to ask (a question)', ''], ['pedir', 'peh-DJEER', 'to ask for, to request', ''],
        ['presente', 'preh-ZEH~-tchee', 'gift; present', ''], ['mensagem', 'meh~-SAH-zheh~ee', 'message', ''],
      ]),
      gramatica(12, "Who receives? The indirect object: me, te, nos", "STEP 1: the direct object answers «what or whom?» (lesson 23). The indirect object answers «to whom?» or «for whom?»: «Ele me deu um livro» = he gave a book (direct) to me (indirect). English often hides the «to»: «give me a book», but Portuguese keeps the idea. STEP 2: for the first and second person, Portuguese uses the same short pronouns as for the direct object: «me» (to me), «te» (to you) and «nos» (to us). So you only learn one new use for words you already know. STEP 3: in everyday speech in Brazil, «te» is the normal pronoun for «você»: «Eu te mandei uma mensagem.» Many speakers use «você» for the person and still say «te». This is the spoken norm, not a mistake. The written, formal alternative is «lhe» (next session). STEP 4: «nos» is common in writing but speech prefers «pra gente»: «Ele deu um presente pra gente.» STEP 5: for now put the pronoun just before the conjugated verb: «Ela me explicou», «Eu te pergunto», «Ele não me deu». Where else it can go is the topic of the next lesson. STEP 6: when the person is placed after the verb with «pra» or «para», the pronoun is not used: «Ele mandou uma mensagem pra mim» also works, but sounds more emphatic.", {
        tag: 'Pronouns',
        comparacao: "In English «She gave me a gift» and «She gave a gift to me» are two patterns. Portuguese has the same two: «Ela me deu um presente» (short pronoun, most common) and «Ela deu um presente pra mim» (with a preposition, for emphasis). Notice that the short pronoun comes before the verb, where English puts «me» after it.",
        tabela: [
          { person: 'eu (me)', pronoun: 'me', example: 'Ela me mandou uma mensagem.', meaning: 'She sent me a message.' },
          { person: 'você, tu (you)', pronoun: 'te', example: 'Eu te emprestei o livro.', meaning: 'I lent you the book.' },
          { person: 'nós, a gente (us)', pronoun: 'nos (written) / pra gente (spoken)', example: 'Ele nos mostrou a cidade. / Ele mostrou a cidade pra gente.', meaning: 'He showed us the city.' },
        ],
        exemplos: [
          ['Meu irmão me emprestou dinheiro.', 'My brother lent me money.'], ['Eu te expliquei a regra ontem.', 'I explained the rule to you yesterday.'], ['A professora me ensinou muitas coisas.', 'The teacher taught me many things.'], ['Ninguém me perguntou nada.', 'Nobody asked me anything.'],
        ],
        erros: [["Ele deu me um presente.", "Ele me deu um presente.", "In Brazil the short pronoun goes before the verb, not after it with a gap. The next lesson explains the other positions."], ["Eu mandei a mensagem para te.", "Eu te mandei a mensagem. / Eu mandei a mensagem para você.", "«Te» is a short pronoun and does not follow a preposition. After «para» use «você» (or «ti»)."], ["Ele perguntou eu uma coisa.", "Ele me perguntou uma coisa.", "You need a pronoun form (me) to show that «eu» is the person who is asked. Subject forms like «eu» do not work as objects here."]],
      }),
      producao(5, "Say five sentences about something someone did for you this week, using «me» and a verb from the list: «Meu amigo me emprestou…», «Minha colega me mandou…», «O professor me explicou…»."),
    ]),
    sessao('S2', 'Third person: lhe, pra ele, pra eles', [
      revisao(4, "Say the sentences from S1 with «me» and «te»: «Ela me mandou uma mensagem.» «Eu te emprestei o livro.» Then say what you lent, sent or showed to a friend."),
      palavras(6, [
        ['entregar', 'eh~-treh-GAR', 'to hand over, to deliver', ''], ['escrever', 'ehs-kreh-VEHR', 'to write', ''], ['trazer', 'trah-ZEHR', 'to bring', ''], ['vender', 'veh~-DEHR', 'to sell', ''],
        ['carta', 'KAR-tah', 'letter', ''], ['conselho', 'koh~-SEH-lyoo', 'advice, a piece of advice', ''],
      ]),
      gramatica(12, "He, she, they: «lhe», «lhes» and the spoken «pra ele»", "STEP 1: for the third person the written, standard pronouns are «lhe» (to him, to her, to you formal) and «lhes» (to them, to you plural): «Eu lhe entreguei a carta.» «Eles lhes venderam a casa.» You will see them in contracts, letters, e-mails, customer service and news, and hear them in formal speech. STEP 2: in everyday speech Brazilians almost always replace «lhe» with a prepositional phrase: «pra ele», «pra ela», «pra eles», «pra elas», «pra você», «pra vocês». The written form of «pra» is «para», and «a ele» also works in careful speech. «Eu entreguei a carta pra ela.» STEP 3: with a name or a noun it is the same: «Eu escrevi uma carta pra Ana», «Ele vendeu o carro pro Marcos» («pro» = para + o). STEP 4: the usual order in a spoken sentence is the verb, then the thing, then the person: «Eu trouxe um presente pra ele.» STEP 5: «te» and «lhe» do not mix in one clear register: if you write to a stranger in a formal letter use «lhe» or «o senhor / a senhora»; with friends use «te». You will hear «te» with «você» everywhere, but a formal text keeps «lhe». STEP 6: some verbs need a preposition before the person even in English: «falar com / pra alguém» (to talk to), «perguntar pra alguém», «responder pra alguém». Do not put the subject form «ele» right after the verb.", {
        tag: 'Pronouns',
        comparacao: "English only has one set of words («him, her, them») for both direct and indirect objects: «I saw him / I gave him a book». Portuguese separates them in writing («o» for direct, «lhe» for indirect), but in speech it has simplified: «eu vi ele» (direct) and «eu dei o livro pra ele» (indirect). The preposition «pra» tells the listener that «ele» is the receiver.",
        tabela: [
          { person: 'eu', written: 'me', spoken: 'me', example: 'Ele me escreveu.' },
          { person: 'você, tu', written: 'lhe / te', spoken: 'te / pra você', example: 'Eu te escrevi. / Escrevi pra você.' },
          { person: 'ele', written: 'lhe', spoken: 'pra ele', example: 'Eu dei o livro pra ele.' },
          { person: 'ela', written: 'lhe', spoken: 'pra ela', example: 'Eu dei o livro pra ela.' },
          { person: 'nós, a gente', written: 'nos', spoken: 'pra gente', example: 'Ele deu um conselho pra gente.' },
          { person: 'vocês', written: 'lhes', spoken: 'pra vocês', example: 'Eu mandei uma carta pra vocês.' },
          { person: 'eles, elas', written: 'lhes', spoken: 'pra eles / pra elas', example: 'Ela vendeu a casa pra eles.' },
        ],
        exemplos: [
          ['Eu lhe disse a verdade. (written)', 'I told him / her / you the truth.'], ['Eu falei pra ele que não podia ir. (spoken)', 'I told him that I could not go.'], ['A empresa lhes entregou os documentos.', 'The company handed them the documents.'], ['Ele deu um conselho pra gente.', 'He gave us a piece of advice.'],
        ],
        erros: [["Eu dei ele o livro.", "Eu dei o livro pra ele. / Eu lhe dei o livro.", "«Ele» is a subject form. To say «to him» use «pra ele» in speech or «lhe» in writing."], ["Eu falei ele que não podia.", "Eu falei pra ele que não podia. / Eu falei com ele.", "In this meaning the verb needs a preposition («pra» or «com») before the person."], ["Eu pedi ele um favor.", "Eu pedi um favor pra ele. / Eu lhe pedi um favor.", "The receiver of the request is introduced by «pra» (speech) or expressed by «lhe» (writing)."], ["Ele lhe mandou uma mensagem, e eu te respondi. (in the same formal letter)", "Ele me mandou uma mensagem, e eu lhe respondi. (formal) / Ele me mandou uma mensagem, e eu respondi pra ele. (spoken)", "In formal writing keep «lhe» for the third person throughout; do not switch between «te» and «lhe» for the same person."]],
      }),
      producao(8, "Describe three things that you gave, sent or told to different people. Use «pra ele», «pra ela» and «pra eles» in speech, then say the same sentence again with «lhe» or «lhes» in a formal version."),
    ]),
    sessao('S3', 'Emphasis, «pra mim» and a gift', [
      revisao(4, "Say in Portuguese: «She gave him a book.» (spoken and written) «He sent us a message.» (spoken and written) «I told her the truth.»"),
      palavras(5, [
        ['dinheiro', 'djee-NYAY-roo', 'money', ''], ['dica', 'DJEE-kah', 'tip, hint', ''], ['ajuda', 'ah-ZHOO-dah', 'help', ''], ['resposta', 'heh-SPOHS-tah', 'answer', ''], ['segredo', 'seh-GREH-doo', 'secret', ''], ['notícia', 'noh-TCHEE-syah', 'piece of news', ''],
      ]),
      gramatica(8, "After a preposition: mim, ti, comigo and «pra mim» = in my opinion", "STEP 1: after a preposition Portuguese uses special forms: «para mim» (for me), «para você» (for you), «para ele», «para ela», «para a gente / para nós», «para eles». The form «mim» only exists after a preposition: «pra mim», «de mim», «sem mim». STEP 2: «com» fuses with some pronouns: «comigo» (with me), «contigo» (with you, used mainly with «tu»), «com você», «com ele», «com a gente», «conosco» (written). So: «Vem comigo!», «Ele fala com a gente.» STEP 3: «pra mim» can also introduce an opinion: «Pra mim, esse livro é caro» = in my opinion, this book is expensive. STEP 4: «mim» never acts as a subject. In the structure «para + a person + infinitive» use «eu»: «É um segredo pra eu guardar» (a secret for me to keep), not «pra mim guardar». Very common in speech, but the careful form is «pra eu».", {
        tag: 'Pronouns',
        comparacao: "English says «for me» and «with me» (both «me»). Portuguese has «para mim» but «comigo», one word. Also, English says «it is easy for me to do it», and Portuguese says «é fácil pra eu fazer», with «eu» because the next verb has its own subject.",
        tabela: [
          { person: 'eu', after_a_preposition: 'mim', with_com: 'comigo' },
          { person: 'você (tu)', after_a_preposition: 'você (ti)', with_com: 'com você (contigo)' },
          { person: 'ele, ela', after_a_preposition: 'ele, ela', with_com: 'com ele, com ela' },
          { person: 'nós, a gente', after_a_preposition: 'nós, a gente', with_com: 'com a gente (conosco)' },
          { person: 'eles, elas', after_a_preposition: 'eles, elas', with_com: 'com eles, com elas' },
        ],
        erros: [["Isso é para eu.", "Isso é para mim.", "After a preposition use «mim», not «eu»."], ["Ele foi com mim.", "Ele foi comigo.", "«Com» + «mim» fuses into «comigo»."], ["É difícil pra mim fazer isso sozinho.", "É difícil pra eu fazer isso sozinho.", "«Eu» is the subject of «fazer», so it cannot be «mim». (In speech you will hear both, but the careful form is «pra eu».)"]],
      }),
      dialogo(8, 'A gift for Camila', "Rafael and Beatriz talk about a party. Camila has a birthday and they want to give her a present.", [
        ['Rafael', 'Oi, Beatriz! Você mandou a mensagem pra Camila?', 'Hi, Beatriz! Did you send the message to Camila?'],
        ['Beatriz', 'Mandei. Eu disse pra ela que a festa é no sábado.', 'I did. I told her the party is on Saturday.'],
        ['Rafael', 'E ela te respondeu?', 'And did she answer you?'],
        ['Beatriz', 'Respondeu. Ela me falou que vai chegar às oito.', 'She did. She told me she will arrive at eight.'],
        ['Rafael', 'Que bom! Eu comprei um livro pra ela. Quer ver?', 'Great! I bought a book for her. Do you want to see it?'],
        ['Beatriz', 'Quero! Você me mostra?', 'Yes! Will you show it to me?'],
        ['Rafael', 'Claro. A loja me deu uma caixa bonita pro presente.', 'Of course. The shop gave me a nice box for the gift.'],
        ['Beatriz', 'Que legal! Ela vai gostar. Você me empresta dez reais? Eu preciso comprar um cartão.', 'How nice! She will like it. Can you lend me ten reais? I need to buy a card.'],
        ['Rafael', 'Empresto, sim. Eu te empresto vinte.', 'Sure. I will lend you twenty.'],
      ]),
      producao(5, "Tell a short story out loud in four sentences: someone sent you a message, you answered, you told something to a friend, and you gave a gift. Use «me», «te» and «pra ele/ela» at least once each."),
    ]),
    sessao('S4', 'Review and practice of lesson 24', [
      revisao(5, "Say: «Ele me deu um presente.» «Eu te mandei uma mensagem.» «Eu falei pra ela.» «Ele lhe entregou a carta.» Explain which sentences are spoken and which are written."),
      exercicios(20, [
        ouvir('Ele me deu um presente.', ['Ele me deu um presente.', 'Ele te deu um presente.', 'Ele deu um presente pra ela.'], 'Ele me deu um presente.', 'Listen for «me deu», with the pronoun before the verb.'),
        ouvir('Eu te mandei uma mensagem.', ['Eu te mandei uma mensagem.', 'Eu me mandei uma mensagem.', 'Eu mandei uma mensagem pra ele.'], 'Eu te mandei uma mensagem.', '«Te» is the spoken pronoun for «você».'),
        ouvir('Ela falou pra ele.', ['Ela falou pra ele.', 'Ela falou pra ela.', 'Ela falou com ele.'], 'Ela falou pra ele.', '«Pra ele» introduces the person who hears.'),
        ouvir('Ele deu um conselho pra gente.', ['Ele deu um conselho pra gente.', 'Ele deu um conselho pra mim.', 'Ele deu um conselho pra eles.'], 'Ele deu um conselho pra gente.', '«Pra gente» is the spoken form of «nos».'),
        ouvir('Isso é pra mim?', ['Isso é pra mim?', 'Isso é pra ele?', 'Isso é comigo?'], 'Isso é pra mim?', 'After «pra» we say «mim».'),
        ouvir('Vem comigo!', ['Vem comigo!', 'Vem com a gente!', 'Vem contigo!'], 'Vem comigo!', '«Comigo» is one word: com + mim.'),
        ditado('Eu te emprestei o livro.', 'Write: Eu te emprestei o livro.'),
        ditado('Ela me mandou uma mensagem.', 'Write: Ela me mandou uma mensagem.'),
        ditado('Eu dei o livro pra ele.', 'Write: Eu dei o livro pra ele.'),
        mc('Which sentence is the usual spoken form of «I told him the truth»?', ['Eu falei a verdade pra ele.', 'Eu falei a verdade ele.', 'Eu ele falei a verdade.'], 'Eu falei a verdade pra ele.', 'The person who receives the information is introduced by «pra».'),
        mc('Which pronoun is the written, formal form for «to him / to her»?', ['lhe', 'te', 'mim'], 'lhe', '«Lhe» is the written third person indirect object pronoun.'),
        mc('Choose the correct word: «Isso é para ___.»', ['mim', 'eu', 'me'], 'mim', 'After a preposition use «mim».'),
        mc('Which means «with me»?', ['comigo', 'contigo', 'conosco'], 'comigo', '«Comigo» = com + mim.'),
        mc('What does «Pra mim, esse prato é caro» mean?', ['In my opinion, this dish is expensive.', 'This dish is for me.', 'I bought this dish.'], 'In my opinion, this dish is expensive.', '«Pra mim» can introduce an opinion.'),
        lacuna('Ele ___ deu um presente. (to me)', ['me', 'mim', 'eu'], 'me', 'The indirect object pronoun for «eu» is «me».'),
        lacuna('Eu ___ mandei uma mensagem. (to you, spoken)', ['te', 'ti', 'tu'], 'te', 'Spoken Portuguese uses «te» for «você».'),
        lacuna('Eles deram um conselho pra ___. (to us, spoken)', ['gente', 'nós', 'eles'], 'gente', 'Spoken: «pra gente».'),
        lacuna('Ela vendeu a casa ___ eles. (for them)', ['pra', 'pro', 'com'], 'pra', '«Pra eles» = to them.'),
        ordem('Put in order: «Ele me deu um livro.»', ['Ele', 'me', 'deu', 'um', 'livro.'], 'Ele me deu um livro.', 'Subject, pronoun, verb, object.'),
        ordem('Put in order: «Eu mandei uma carta pra ela.»', ['Eu', 'mandei', 'uma', 'carta', 'pra', 'ela.'], 'Eu mandei uma carta pra ela.', 'Verb, thing, person with «pra».'),
        livre('Write in Portuguese (spoken style): She sent me a message and I told her the news.', 'Ela me mandou uma mensagem e eu falei a notícia pra ela.'),
        livre('Write in Portuguese: My friend lent me money.', 'Meu amigo me emprestou dinheiro.'),
      ]),
      producao(5, "Say a short thank-you note aloud, in Portuguese: thank a friend for something he or she gave, sent or taught you, using «me» in each sentence."),
    ]),
  ],
});
