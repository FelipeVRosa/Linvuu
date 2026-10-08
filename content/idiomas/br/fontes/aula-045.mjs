import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 45, titulo: 'The imperfect subjunctive', nivel: 'b1',
  objetivo: 'Form the imperfect subjunctive (falasse, comesse, partisse, tivesse, fosse, fizesse, viesse…) and use it after wishes, requests and doubts that lie in the past, after «como se» and in the first conditional sentences with «se».',
  nota: 'You can now say «Eu queria que você viesse», «Ela esperava que ele chegasse», «Ele fala como se soubesse tudo» and «Se eu tivesse tempo, viajaria». Next lesson: the future subjunctive («quando eu for», «se eu puder», «assim que ele chegar»).',
  sessoes: [
    sessao('S1', 'Forming the imperfect subjunctive', [
      revisao(5, 'Say the preterite («pretérito perfeito») of these verbs for «eles»: falar, comer, partir, ter, fazer, ser, vir, ver, dar, saber, querer, poder, dizer. These are the starting point of today.'),
      palavras(8, [
        ['tivesse', 'tchee-VEH-see', '(that) I/he/she/you had', ''], ['fosse', 'FOH-see', '(that) I/he/she/you were or went', ''], ['fizesse', 'fee-ZEH-see', '(that) I/he/she/you did or made', ''], ['pudesse', 'poo-DEH-see', '(that) I/he/she/you could', ''],
        ['quisesse', 'kee-ZEH-see', '(that) I/he/she/you wanted', ''], ['soubesse', 'sow-BEH-see', '(that) I/he/she/you knew', ''], ['viesse', 'vee-EH-see', '(that) I/he/she/you came', ''], ['dissesse', 'djee-SEH-see', '(that) I/he/she/you said', ''],
      ]),
      gramatica(12, 'Forming the imperfect subjunctive', "STEP 1: the imperfect subjunctive (pretérito imperfeito do subjuntivo) is the past-side partner of the present subjunctive. Its source is the «eles» form of the preterite («pretérito perfeito»). Take that form, drop the final «-ram» and add -sse, -sses, -sse, -ssemos, -ssem. STEP 2: «falaram» gives «falasse», «comeram» gives «comesse», «partiram» gives «partisse». The same method works for every verb, including the irregular ones, because the irregularity is already in the preterite: «fizeram» gives «fizesse», «tiveram» gives «tivesse», «viram» gives «visse». STEP 3: «ser» and «ir» are identical: «foram» gives «fosse». Context tells you which verb it is. STEP 4: in the «nós» form, the vowel before «-ssemos» takes a written accent: «falássemos», «comêssemos», «partíssemos», «tivéssemos», «fôssemos». STEP 5: «você», «ele», «ela» and «a gente» share the form of «eu». STEP 6: the full list of irregular preterites is the key: ser/ir (foram → fosse), estar (estiveram → estivesse), ter (tiveram → tivesse), fazer (fizeram → fizesse), ver (viram → visse), vir (vieram → viesse), dar (deram → desse), saber (souberam → soubesse), querer (quiseram → quisesse), poder (puderam → pudesse), dizer (disseram → dissesse), trazer (trouxeram → trouxesse), pôr (puseram → pusesse), haver (houve → houvesse).", {
        tag: 'Subjunctive',
        comparacao: "English has one remaining past subjunctive form: «were» in «If I were you». Portuguese has a whole tense for it, but it is easy to build: eles-form of the preterite, minus -ram, plus -sse. Every Portuguese speaker applies this rule, with no exceptions.",
        tabelas: [
          { titulo: 'Regular verbs', linhas: [
            { person: 'eu, você, ele, ela, a gente', falar: 'falasse', comer: 'comesse', partir: 'partisse' },
            { person: 'tu (regional)', falar: 'falasses', comer: 'comesses', partir: 'partisses' },
            { person: 'nós', falar: 'falássemos', comer: 'comêssemos', partir: 'partíssemos' },
            { person: 'vocês, eles, elas', falar: 'falassem', comer: 'comessem', partir: 'partissem' },
          ] },
          { titulo: 'ser/ir, estar, ter, fazer', linhas: [
            { person: 'eu, você, ele, ela', ser_ir: 'fosse', estar: 'estivesse', ter: 'tivesse', fazer: 'fizesse' },
            { person: 'nós', ser_ir: 'fôssemos', estar: 'estivéssemos', ter: 'tivéssemos', fazer: 'fizéssemos' },
            { person: 'vocês, eles, elas', ser_ir: 'fossem', estar: 'estivessem', ter: 'tivessem', fazer: 'fizessem' },
          ] },
          { titulo: 'ver, vir, dar, saber', linhas: [
            { person: 'eu, você, ele, ela', ver: 'visse', vir: 'viesse', dar: 'desse', saber: 'soubesse' },
            { person: 'nós', ver: 'víssemos', vir: 'viéssemos', dar: 'déssemos', saber: 'soubéssemos' },
            { person: 'vocês, eles, elas', ver: 'vissem', vir: 'viessem', dar: 'dessem', saber: 'soubessem' },
          ] },
          { titulo: 'querer, poder, dizer, haver', linhas: [
            { person: 'eu, você, ele, ela', querer: 'quisesse', poder: 'pudesse', dizer: 'dissesse', haver: 'houvesse' },
            { person: 'nós', querer: 'quiséssemos', poder: 'pudéssemos', dizer: 'disséssemos', haver: 'houvéssemos' },
            { person: 'vocês, eles, elas', querer: 'quisessem', poder: 'pudessem', dizer: 'dissessem', haver: 'houvessem' },
          ] },
        ],
        erros: [['Eu fazesse', 'Eu fizesse', 'The imperfect subjunctive is built from the preterite: «fizeram» gives «fizesse».'], ['Nós falassemos', 'Nós falássemos', 'The «nós» form takes a written accent on the vowel before «-ssemos».'], ['Se eu estasse', 'Se eu estivesse', '«Estar» uses the preterite stem «estiv-»: «estiveram» gives «estivesse».'], ['Eu queria que ele vinha.', 'Eu queria que ele viesse.', 'After «queria que» the verb is in the imperfect subjunctive, not the imperfeito.']],
      }),
      producao(5, 'Choose five irregular verbs. Say the «eles» preterite, then the «eu/ele» imperfect subjunctive: «fizeram, fizesse», «tiveram, tivesse»…'),
    ]),
    sessao('S2', 'Wishes and doubts in the past, and «como se»', [
      revisao(4, 'Say the imperfect subjunctive of falar, comer, partir, ser, ter, fazer, vir, saber (for «ele»). Then say «nós» for each.'),
      palavras(6, [
        ['como se', 'KOH-moo see', 'as if', ''], ['o plano', 'oo PLAH~-noo', 'the plan', ''], ['mudar de ideia', 'moo-DAR djee ee-DEH-yah', 'to change one\'s mind', ''], ['a surpresa', 'ah soor-PREH-zah', 'the surprise', ''], ['o presente', 'oo preh-ZEH~-tchee', 'the gift (also: the present)', ''], ['organizar', 'or-gah-nee-ZAR', 'to organise', ''],
      ]),
      gramatica(12, 'Using the imperfect subjunctive: past wishes and «como se»', "STEP 1: the rule is called the sequence of tenses. If the main verb is in the present or future (or the imperative), the verb after «que» goes into the present subjunctive: «Espero que você venha». If the main verb is in the past or in the conditional, the verb after «que» goes into the imperfect subjunctive: «Eu esperava que você viesse», «Eu queria que você viesse», «Eu gostaria que você viesse». STEP 2: so every trigger you know from lessons 43 and 44 also works in the past: «Eu queria que ele fizesse», «Ela pediu que eles esperassem», «Duvidei que fosse verdade», «Era importante que você soubesse», «Ficou feliz que a gente viesse». STEP 3: «queria que» + imperfect subjunctive is also a very polite way of asking someone to do something: «Eu queria que você me ajudasse» (I was wondering if you could help me). STEP 4: «como se» (as if) is always followed by the imperfect subjunctive, whether the situation is in the past or in the present: «Ele fala como se soubesse tudo», «Ela me olhou como se eu fosse outra pessoa». STEP 5: the conditional of lesson 41 also triggers it: «Seria bom que todo mundo chegasse cedo». STEP 6: when the main verb is a fact in the past («disse que», «sabia que»), the verb after «que» stays in the indicative: «Eu sabia que ele vinha», because a fact is not a wish.", {
        tag: 'Subjunctive',
        comparacao: "English changes the verb in a similar way after «wish» («I wish you were here») and «as if» («he talks as if he knew everything»). Portuguese does it in all past wishes, requests, doubts and emotions, and always after «como se». This is the part to practise most: it makes your Portuguese sound smooth.",
        tabela: [
          { main_verb: 'present, future, imperative', after_que: 'present subjunctive', example: 'Espero que você venha.' },
          { main_verb: 'preterite', after_que: 'imperfect subjunctive', example: 'Pedi que ele esperasse.' },
          { main_verb: 'imperfect', after_que: 'imperfect subjunctive', example: 'Eu queria que você viesse.' },
          { main_verb: 'conditional', after_que: 'imperfect subjunctive', example: 'Eu gostaria que você me ajudasse.' },
          { main_verb: 'como se (always)', after_que: 'imperfect subjunctive', example: 'Ele fala como se soubesse tudo.' },
        ],
        erros: [['Eu queria que você vem.', 'Eu queria que você viesse.', 'A past wish needs the imperfect subjunctive.'], ['Eu esperava que ele chegue.', 'Eu esperava que ele chegasse.', 'Main verb in the past, so the subjunctive goes into the past too.'], ['Pedi que ele espere.', 'Pedi que ele esperasse.', '«Pedi» is in the preterite: imperfect subjunctive after «que».'], ['Ele fala como se sabe tudo.', 'Ele fala como se soubesse tudo.', '«Como se» is always followed by the imperfect subjunctive.']],
      }),
      dialogo(8, 'A surprise party', 'Gabriela and Henrique are planning a birthday surprise for their friend Marcos.', [
        ['Gabriela', 'Henrique, eu queria que você me ajudasse com a surpresa do Marcos.', 'Henrique, I was hoping you could help me with Marcos\'s surprise.'],
        ['Henrique', 'Claro! Você esperava que eu fizesse o bolo?', 'Of course! Did you expect me to make the cake?'],
        ['Gabriela', 'Não, eu pedi que a Aline fizesse o bolo. Queria que você organizasse a música.', 'No, I asked Aline to make the cake. I wanted you to organise the music.'],
        ['Henrique', 'Combinado. Mas o Marcos sempre quis que a gente fizesse uma festa simples.', 'Agreed. But Marcos has always wanted us to throw a simple party.'],
        ['Gabriela', 'Ele fala como se não gostasse de festa, mas adora!', 'He talks as if he did not like parties, but he loves them!'],
        ['Henrique', 'É verdade. Seria bom que todo mundo chegasse antes dele.', 'True. It would be good if everybody arrived before him.'],
        ['Gabriela', 'Vou pedir que os amigos cheguem às seis.', 'I am going to ask the friends to arrive at six.'],
        ['Henrique', 'E eu vou pedir que ninguém conte nada. Eu esperava que fosse mais difícil organizar tudo!', 'And I am going to ask that nobody tells anything. I expected it to be harder to organise everything!'],
      ]),
    ]),
    sessao('S3', 'A first look at «se» + imperfect subjunctive', [
      revisao(4, 'Say three past wishes with «Eu queria que…», «Meus pais esperavam que…» and «Eu pedi que…», each with the imperfect subjunctive.'),
      palavras(5, [
        ['o concerto', 'oo koh~-SEHR-too', 'the concert', ''], ['a profissão', 'ah proh-fee-SOW~', 'the profession', ''], ['o caminho', 'oo kah-MEE-nyoo', 'the way, the path', ''], ['a canção', 'ah kah~-SOW~', 'the song', ''], ['tocar', 'too-KAR', 'to play (an instrument); to touch', ''],
      ]),
      gramatica(8, 'The imperfect subjunctive in «se» sentences', "STEP 1: you will meet the imperfect subjunctive in its best-known job: after «se» (if), to imagine a situation that is not true now or is unlikely. The other half of the sentence uses the conditional of lesson 41. STEP 2: the pattern is «Se» + imperfect subjunctive, conditional: «Se eu tivesse tempo, viajaria», «Se eu fosse você, aceitaria», «Se ele pudesse, viria». STEP 3: the order of the two halves can change. Without the comma: «Eu viajaria se tivesse tempo». STEP 4: in speech, many Brazilians use the imperfeito in the second half: «Se eu tivesse tempo, eu viajava». It is natural and friendly. STEP 5: «fosse» is used both for «ser» and for «ir», so «Se eu fosse a São Paulo» (if I went to São Paulo) and «Se eu fosse médico» (if I were a doctor) share one form. STEP 6: the complete system of hypotheses (real, unreal and past) is the subject of lesson 47. Today, you only need to recognise the pattern and say a few sentences.", {
        tag: 'Subjunctive',
        comparacao: "English says «If I had time, I would travel» and «If I were you, I would accept». The Portuguese pattern is almost word for word: «Se eu tivesse tempo, viajaria», «Se eu fosse você, aceitaria». The big difference is that you have to build the verb after «se» with the rules from today.",
        exemplos: [['Se eu tivesse tempo, viajaria.', 'If I had time, I would travel.'], ['Se eu fosse você, aceitaria.', 'If I were you, I would accept.'], ['Se ela pudesse, viria.', 'If she could, she would come.'], ['Se a gente soubesse, avisaria.', 'If we knew, we would let you know.']],
        erros: [['Se eu tenho tempo, viajaria.', 'Se eu tivesse tempo, viajaria.', 'An imagined situation uses the imperfect subjunctive after «se».'], ['Se eu seria você, aceitaria.', 'Se eu fosse você, aceitaria.', 'The conditional goes only in the result half; after «se» use the imperfect subjunctive.'], ['Se eu teria dinheiro, compraria.', 'Se eu tivesse dinheiro, compraria.', 'After «se», «tivesse» (not «teria»).']],
      }),
      texto(8, 'My parents wanted a doctor', "Quando eu era adolescente, meus pais queriam que eu estudasse medicina. Eles esperavam que eu fosse médico, como meu avô. Mas eu sonhava que a música fosse minha profissão. Um dia, meu professor pediu que eu tocasse num concerto da escola. Meus pais vieram, e depois do concerto eles me olharam como se eu fosse outra pessoa. Foi a primeira vez que eles duvidaram que a medicina fosse o melhor caminho para mim. Hoje eu sou professor de música, e minha mãe sempre pede que eu toque a sua canção favorita.", "When I was a teenager, my parents wanted me to study medicine. They expected me to be a doctor, like my grandfather. But I dreamed that music would be my profession. One day, my teacher asked me to play at a school concert. My parents came, and after the concert they looked at me as if I were a different person. It was the first time they doubted that medicine was the best path for me. Today I am a music teacher, and my mother always asks me to play her favorite song.", [
        ['What did the parents want the narrator to study? (answer in Portuguese)', 'Medicina.'],
        ['Who asked the narrator to play at a concert? (answer in Portuguese)', 'O professor.'],
        ['How did the parents look at the narrator after the concert? (answer in Portuguese)', 'Como se ele fosse outra pessoa.'],
        ['What does the narrator do today? (answer in Portuguese)', 'É professor de música.'],
      ]),
      producao(5, 'Write three sentences about your own past: what your parents or teachers wanted («queriam que…»), what you hoped («eu esperava que…») and one «se» sentence («Se eu tivesse…»).'),
    ]),
    sessao('S4', 'Review and practice of lesson 45', [
      revisao(5, 'Say the imperfect subjunctive of «ser», «ter», «fazer», «vir», «saber», «poder» for «ele» and for «nós», with the accents on the «nós» forms.'),
      exercicios(20, [
        ouvir('Eu queria que você viesse.', ['Eu queria que você viesse.', 'Eu queria que você venha.', 'Eu queria que você vinha.'], 'Eu queria que você viesse.', '«Queria que» is followed by the imperfect subjunctive: «viesse».'),
        ouvir('Ela esperava que ele chegasse.', ['Ela esperava que ele chegasse.', 'Ela esperava que ele chegue.', 'Ela esperava que ele chega.'], 'Ela esperava que ele chegasse.', 'Main verb in the past: imperfect subjunctive.'),
        ouvir('Se eu tivesse tempo, viajaria.', ['Se eu tivesse tempo, viajaria.', 'Se eu tenho tempo, viajaria.', 'Se eu teria tempo, viajaria.'], 'Se eu tivesse tempo, viajaria.', '«Se» + imperfect subjunctive, then the conditional.'),
        ouvir('Ele fala como se soubesse tudo.', ['Ele fala como se soubesse tudo.', 'Ele fala como se sabe tudo.', 'Ele fala como se sabia tudo.'], 'Ele fala como se soubesse tudo.', '«Como se» is always followed by the imperfect subjunctive.'),
        ouvir('Duvidei que fosse verdade.', ['Duvidei que fosse verdade.', 'Duvidei que seja verdade.', 'Duvidei que é verdade.'], 'Duvidei que fosse verdade.', 'Past doubt: imperfect subjunctive.'),
        ditado('Eu queria que você me ajudasse.', 'Write: Eu queria que você me ajudasse.'),
        ditado('Se eu fosse você, aceitaria.', 'Write: Se eu fosse você, aceitaria.'),
        ditado('Era importante que eles soubessem.', 'Write: Era importante que eles soubessem.'),
        mc('What is the imperfect subjunctive of «falar» for «eles»?', ['falassem', 'falam', 'falaram'], 'falassem', 'Eles preterite «falaram» minus -ram plus -ssem.'),
        mc('What is the imperfect subjunctive of «comer» for «nós»?', ['comêssemos', 'comemos', 'comessemos'], 'comêssemos', 'The «nós» form takes a written accent.'),
        mc('Which verbs share the form «fosse»?', ['ser and ir', 'estar and ir', 'ter and ser'], 'ser and ir', 'Both have the preterite «foram».'),
        mc('What goes after «como se»?', ['imperfect subjunctive', 'present indicative', 'future'], 'imperfect subjunctive', '«Como se» always takes the imperfect subjunctive.'),
        mc('Which sentence is correct?', ['Eu esperava que ele chegasse.', 'Eu esperava que ele chegue.', 'Eu esperava que ele chega.'], 'Eu esperava que ele chegasse.', 'A past main verb requires the imperfect subjunctive.'),
        lacuna('Eu queria que você ___ comigo. (vir)', ['viesse', 'vem', 'venha'], 'viesse', 'From «vieram» comes «viesse».'),
        lacuna('Ela esperava que nós ___ cedo. (chegar)', ['chegássemos', 'chegamos', 'cheguemos'], 'chegássemos', 'The «nós» form takes an accent.'),
        lacuna('Pedi que eles ___ um momento. (esperar)', ['esperassem', 'esperam', 'esperem'], 'esperassem', '«Pedi» is in the preterite: imperfect subjunctive.'),
        lacuna('Ele fala como se ___ tudo. (saber)', ['soubesse', 'sabe', 'saiba'], 'soubesse', 'From «souberam» comes «soubesse».'),
        lacuna('Se eu ___ tempo, viajaria. (ter)', ['tivesse', 'tenho', 'teria'], 'tivesse', 'From «tiveram» comes «tivesse».'),
        lacuna('Era importante que ela ___ a verdade. (dizer)', ['dissesse', 'diz', 'diga'], 'dissesse', 'From «disseram» comes «dissesse».'),
        ordem('Put in order: «Se eu tivesse tempo, viajaria.»', ['Se', 'eu', 'tivesse', 'tempo,', 'viajaria.'], 'Se eu tivesse tempo, viajaria.', '«Se» + imperfect subjunctive, then the conditional.'),
        ordem('Put in order: «Eu queria que você viesse.»', ['Eu', 'queria', 'que', 'você', 'viesse.'], 'Eu queria que você viesse.', 'Past wish + «que» + imperfect subjunctive.'),
        livre('Write in Portuguese: I wanted you to help me.', 'Eu queria que você me ajudasse.'),
        livre('Write in Portuguese: If I were you, I would accept.', 'Se eu fosse você, aceitaria.'),
      ]),
      producao(5, 'Tell a short story from your past in which someone wanted something from you: what they wanted («queria que…»), what you hoped, and what you would do differently («Se eu pudesse…»).'),
    ]),
  ],
});
