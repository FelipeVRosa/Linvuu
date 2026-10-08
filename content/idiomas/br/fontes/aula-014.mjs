import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 14, titulo: 'Daily routine and reflexive verbs', nivel: 'a1',
  objetivo: 'Describe your day from waking up to going to bed, say at what time you do things and how often, and use reflexive verbs such as «levantar-se» and «vestir-se» correctly.',
  nota: 'You can now describe a normal day with times, parts of the day, frequency words and reflexive verbs. Next lesson: shopping, clothes, colors and «este / esse / aquele».',
  sessoes: [
    sessao('S1', 'A day from morning to night', [
      revisao(5, 'Say the endings of the present of -ar verbs aloud (o, a, amos, am) with «falar» and «trabalhar». Then say the time on three different clocks: «São sete e meia», «É uma hora», «São dez para as oito».'),
      palavras(8, [
        ['acordar', 'ah-kor-DAR', 'to wake up', ''], ['tomar banho', 'toh-MAR BAH-nyoo', 'to take a shower or bath', ''], ['escovar os dentes', 'ees-koh-VAR oos DEH~-tcheess', 'to brush your teeth', ''], ['tomar café da manhã', 'toh-MAR kah-FEH dah mah-NYAH~', 'to have breakfast', ''],
        ['almoçar', 'ahl-moh-SAR', 'to have lunch', ''], ['jantar', 'zhah~-TAR', 'to have dinner', ''], ['de manhã', 'djee mah-NYAH~', 'in the morning', ''], ['à tarde', 'ah TAR-djee', 'in the afternoon', ''],
        ['à noite', 'ah NOY-tchee', 'in the evening, at night', ''],
      ]),
      gramatica(12, 'Talking about your day: present, clock times and parts of the day', "STEP 1: the present tense is the tense of routine. You already know the endings of -ar verbs: «acordo, acorda, acordamos, acordam». Note the spelling: «almoçar» keeps the sound «s» with a cedilla in «eu almoço», but «você almoça» and «nós almoçamos». STEP 2: to say at what time, use «a» + the article, which gives «às» for plural hours: «às sete», «às sete e meia», «às dez para as oito». One o'clock is singular: «à uma». Noon is «ao meio-dia» and midnight «à meia-noite». STEP 3: for parts of the day use «de manhã» (in the morning), «à tarde» (in the afternoon), «à noite» (in the evening or at night). In speech «de manhã» is often «de manhãzinha» for the early hours. STEP 4: Portuguese says «tomar» (to take) for many daily actions: «tomar banho» (shower), «tomar café da manhã» (breakfast), «tomar um café». It never says «fazer um banho» or «fazer o café da manhã» for eating it; «fazer café» means to make coffee. STEP 5: culture note. Lunch is usually the biggest meal of the day in Brazil, often rice, beans and a protein, around noon or 1 p.m. Dinner is lighter, around 8 p.m. Many people also have a «lanche da tarde» (a snack) in the afternoon.", {
        tag: 'Routine',
        comparacao: "In English you say «at seven», with no article. In Portuguese the article is part of the time: «às sete» (literally «at the seven»). And English says «have breakfast», «have a shower»; Portuguese says «tomar café da manhã» and «tomar banho». Don't translate «have» as «ter» here.",
        tabelas: [
          { titulo: 'Three -ar verbs of the routine', linhas: [
            { person: 'eu', acordar: 'acordo', almoçar: 'almoço', jantar: 'janto' },
            { person: 'você, ele, ela, a gente', acordar: 'acorda', almoçar: 'almoça', jantar: 'janta' },
            { person: 'nós', acordar: 'acordamos', almoçar: 'almoçamos', jantar: 'jantamos' },
            { person: 'vocês, eles, elas', acordar: 'acordam', almoçar: 'almoçam', jantar: 'jantam' },
          ] },
          { titulo: 'Saying the time', linhas: [
            { time: '7:00', say: 'às sete' }, { time: '7:30', say: 'às sete e meia' }, { time: '1:00', say: 'à uma' }, { time: '12:00', say: 'ao meio-dia' }, { time: '0:00', say: 'à meia-noite' },
          ] },
        ],
        exemplos: [['Eu acordo às seis e meia.', 'I wake up at six thirty.'], ['Ela toma banho de manhã.', 'She takes a shower in the morning.'], ['A gente almoça ao meio-dia.', 'We have lunch at noon.'], ['Eles jantam às oito da noite.', 'They have dinner at eight in the evening.'], ['Nós tomamos café da manhã juntos.', 'We have breakfast together.']],
        erros: [['Eu acordo em sete.', 'Eu acordo às sete.', 'Clock times use «a» + the article: «às sete».'], ['Eu faço banho.', 'Eu tomo banho.', 'Portuguese «takes» a shower: «tomar banho».'], ['Eu almoçio às doze.', 'Eu almoço às doze.', 'The «eu» form of «almoçar» is «almoço»; the cedilla keeps the «s» sound.'], ['Eu janto em a noite.', 'Eu janto à noite.', 'The expression is «à noite», a contraction of «a» + «a».']],
      }),
      producao(5, 'Say the first part of your day aloud: when you wake up, take a shower, have breakfast. Use «de manhã» and clock times. For example: «Eu acordo às sete. Eu tomo banho. Eu tomo café da manhã às oito.»'),
    ]),
    sessao('S2', 'Reflexive verbs: me, se, nos', [
      revisao(4, 'Say three sentences about your lunch and your dinner, with clock times: «Eu almoço…», «Eu janto…». Then name the three parts of the day in Portuguese.'),
      palavras(6, [
        ['levantar-se', 'leh-vah~-TAR-see', 'to get up', ''], ['vestir-se', 'vees-TCHEER-see', 'to get dressed', ''], ['deitar-se', 'day-TAR-see', 'to lie down, to go to bed', ''], ['dormir', 'dor-MEER', 'to sleep', ''],
        ['voltar para casa', 'vow-TAR PAH-rah KAH-zah', 'to go back home', ''], ['chegar', 'sheh-GAR', 'to arrive', ''],
      ]),
      gramatica(12, 'Reflexive verbs: the pronoun comes before the verb', "STEP 1: a reflexive verb describes an action that you do to yourself: «levantar-se» (to get yourself up), «vestir-se» (to dress yourself), «deitar-se» (to lie yourself down). In a dictionary the infinitive carries «-se». STEP 2: the reflexive pronoun matches the subject: «eu me», «você / ele / ela / a gente se», «nós nos», «vocês / eles / elas se». In some regions «tu» uses «te»: «tu te levantas». STEP 3: in Brazilian speech, the pronoun goes before the verb: «Eu me levanto às sete», «Ela se veste de manhã», «A gente se deita tarde». In the negative, «não» comes first: «Eu não me levanto cedo». STEP 4: «vestir-se» changes its vowel in «eu»: «eu me visto» (but «você se veste», «nós nos vestimos»). «Dormir» is not reflexive and changes in «eu» too: «eu durmo», «você dorme», «nós dormimos», «vocês dormem». «Deitar-se» is the act of lying down or going to bed; «dormir» is sleeping: «Eu me deito às dez e durmo às onze». STEP 5: not every English reflexive is reflexive in Portuguese. «Acordar» (to wake up) is not reflexive: «eu acordo». Body parts take the article, not «my»: «Escovo os dentes», «Lavo as mãos».", {
        tag: 'Reflexive verbs',
        comparacao: "English has few reflexives («I enjoyed myself», «she hurt herself») and uses «get» or a plain verb for most routines («I get up», «I dress»). Portuguese uses the reflexive pronoun for these: «eu me levanto», «eu me visto». Without the pronoun the verb often changes meaning: «levantar» alone means to lift something.",
        tabela: [
          { person: 'eu', pronoun: 'me', 'levantar-se': 'me levanto', 'vestir-se': 'me visto' },
          { person: 'você, ele, ela, a gente', pronoun: 'se', 'levantar-se': 'se levanta', 'vestir-se': 'se veste' },
          { person: 'nós', pronoun: 'nos', 'levantar-se': 'nos levantamos', 'vestir-se': 'nos vestimos' },
          { person: 'vocês, eles, elas', pronoun: 'se', 'levantar-se': 'se levantam', 'vestir-se': 'se vestem' },
        ],
        exemplos: [['Eu me levanto às sete.', 'I get up at seven.'], ['Ela se veste de manhã.', 'She gets dressed in the morning.'], ['A gente se deita às onze.', 'We go to bed at eleven.'], ['Nós nos vestimos às sete.', 'We get dressed at seven.'], ['Eu durmo muito bem.', 'I sleep very well.'], ['Eu não me levanto cedo.', 'I do not get up early.']],
        erros: [['Eu levanto às sete.', 'Eu me levanto às sete.', 'Without «me», «levantar» means to lift something. To get up you need the reflexive pronoun.'], ['Eu me acordo às sete.', 'Eu acordo às sete.', '«Acordar» (to wake up) is not reflexive.'], ['Eu não levanto me cedo.', 'Eu não me levanto cedo.', 'In Brazilian speech the pronoun goes before the verb, and «não» comes before the pronoun.'], ['Eu escovo meus dentes.', 'Eu escovo os dentes.', 'Parts of the body usually take the article, not the possessive.']],
      }),
      producao(8, 'Describe your morning in six to eight sentences, using at least three reflexive verbs: «Eu me levanto…», «Eu me visto…». Then say what your partner or a friend does, with «ele / ela se…».', 'Eu acordo às seis. Eu me levanto às seis e meia. Eu tomo banho. Eu me visto e tomo café da manhã. Minha irmã se levanta às sete.'),
    ]),
    sessao('S3', 'How often, before and after', [
      revisao(4, 'Conjugate «levantar-se» aloud with eu, você, nós and vocês. Then say a sentence with «dormir» and one with «deitar-se».'),
      palavras(5, [
        ['sempre', 'SEH~-pree', 'always', ''], ['normalmente', 'nor-mahl-MEH~-tchee', 'usually, normally', ''], ['às vezes', 'ahss VEH-zees', 'sometimes', ''], ['nunca', 'NOO~-kah', 'never', ''],
        ['todos os dias', 'TOH-doos oos DJEE-ahss', 'every day', ''], ['cedo', 'SEH-doo', 'early', ''], ['tarde', 'TAR-djee', 'late (also: afternoon)', ''], ['antes de', 'AH~-tcheess djee', 'before', ''], ['depois de', 'deh-POYSS djee', 'after', ''],
      ]),
      gramatica(8, 'How often, and «antes de / depois de» + infinitive', "STEP 1: frequency words go before the verb: «Eu sempre almoço em casa», «Ela às vezes dorme tarde». «Normalmente» and «às vezes» can also start the sentence: «Normalmente eu acordo cedo». STEP 2: «nunca» before the verb works alone, with no «não»: «Eu nunca janto tarde». If «nunca» comes after the verb, you need «não» before the verb: «Eu não janto tarde nunca». STEP 3: «todos os dias» (written) and «todo dia» (spoken) mean every day. You can also say «toda manhã» and «toda noite». STEP 4: «antes de» and «depois de» are followed by an infinitive, never an «-ing» form: «Antes de dormir, escovo os dentes», «Depois de almoçar, a gente descansa». STEP 5: «cedo» is early and «tarde» is late: «Eu acordo cedo», «Ele chega tarde». Remember «tarde» is also the afternoon: «boa tarde», «à tarde».", {
        tag: 'Routine',
        comparacao: "English allows only one negative («I never eat late»). Portuguese lets you say «nunca» alone before the verb, or «não … nunca» after it. Both are correct, but the first one is shorter. And English uses «-ing» after «before» and «after» («before sleeping»); Portuguese uses the infinitive: «antes de dormir».",
        tabela: [
          { frequency: 'sempre', meaning: 'always', example: 'Eu sempre tomo café.' },
          { frequency: 'normalmente', meaning: 'usually', example: 'Normalmente eu almoço em casa.' },
          { frequency: 'às vezes', meaning: 'sometimes', example: 'Às vezes a gente janta tarde.' },
          { frequency: 'nunca', meaning: 'never', example: 'Eu nunca me deito tarde.' },
        ],
        erros: [['Eu não nunca janto tarde.', 'Eu nunca janto tarde.', 'With «nunca» before the verb, do not add «não».'], ['Antes de dormindo, escovo os dentes.', 'Antes de dormir, escovo os dentes.', 'After «antes de», use the infinitive.'], ['Eu levanto sempre me cedo.', 'Eu sempre me levanto cedo.', 'The frequency word sits before the reflexive pronoun and verb.'], ['Eu acordo em cedo.', 'Eu acordo cedo.', '«Cedo» is an adverb: no preposition.']],
      }),
      texto(8, 'A day with Carolina', 'Meu nome é Carolina e eu moro em Belo Horizonte. Todos os dias eu acordo às seis e meia, mas me levanto às sete. Eu tomo banho, escovo os dentes e me visto. Depois tomo café da manhã: café com leite e pão com queijo. Normalmente vou ao trabalho de ônibus. Chego às oito e meia. Almoço ao meio-dia com meus colegas. À tarde trabalho até as cinco e meia. À noite janto em casa com a minha família. Antes de dormir, escuto música. Eu nunca me deito tarde: às dez e meia eu já durmo.', "My name is Carolina and I live in Belo Horizonte. Every day I wake up at six thirty, but I get up at seven. I take a shower, brush my teeth and get dressed. Then I have breakfast: coffee with milk and bread with cheese. I usually go to work by bus. I arrive at eight thirty. I have lunch at noon with my colleagues. In the afternoon I work until five thirty. In the evening I have dinner at home with my family. Before sleeping, I listen to music. I never go to bed late: at ten thirty I am already asleep.", [
        ['At what time does Carolina wake up?', 'At six thirty.'], ['At what time does she get up?', 'At seven.'], ['What does she have for breakfast?', 'Coffee with milk and bread with cheese.'], ['How does she usually go to work?', 'By bus.'], ['With whom does she have lunch?', 'With her colleagues.'], ['What does she do before she sleeps?', 'She listens to music.'],
      ]),
      producao(5, 'Write six sentences about your own day in the style of the text. Use «todos os dias», «normalmente», «nunca», «antes de» and a reflexive verb. Then read them aloud.'),
    ]),
    sessao('S4', 'Review and practice of lesson 14', [
      revisao(5, 'Describe your day aloud in order, from «acordo» to «durmo», with at least four clock times and two reflexive verbs.'),
      exercicios(20, [
        ouvir('Eu me levanto às sete', ['Eu me levanto às sete', 'Eu levanto às sete', 'Eu me deito às sete'], 'Eu me levanto às sete', 'Listen for the pronoun «me» and for «levanto».'),
        ouvir('Ela se veste de manhã', ['Ela se veste de manhã', 'Ela se deita de manhã', 'Eles se vestem de manhã'], 'Ela se veste de manhã', '«Veste» (she dresses) is singular; «vestem» is plural.'),
        ouvir('Nós jantamos às oito', ['Nós jantamos às oito', 'Nós almoçamos às oito', 'Nós jantamos às nove'], 'Nós jantamos às oito', 'Listen for «jantamos» and the number «oito».'),
        ouvir('Antes de dormir, escovo os dentes', ['Antes de dormir, escovo os dentes', 'Depois de dormir, escovo os dentes', 'Antes de almoçar, escovo os dentes'], 'Antes de dormir, escovo os dentes', '«Antes de» + infinitive: before sleeping.'),
        ditado('Eu acordo às seis e meia', 'Write: Eu acordo às seis e meia. Remember the accent in «às» and «seis».'),
        ditado('A gente se deita tarde', 'Write: A gente se deita tarde. Reflexive «se» comes before the verb.'),
        ditado('Normalmente almoço em casa', 'Write: Normalmente almoço em casa. The cedilla in «almoço».'),
        mc('How do you say «I get up at seven»?', ['Eu me levanto às sete.', 'Eu levanto às sete.', 'Eu levanto me às sete.'], 'Eu me levanto às sete.', 'The reflexive pronoun goes before the verb.'),
        mc('What is the reflexive pronoun for «nós»?', ['nos', 'me', 'se'], 'nos', '«Nós nos levantamos».'),
        mc('How do you say «to take a shower»?', ['tomar banho', 'fazer banho', 'pegar banho'], 'tomar banho', 'Portuguese «takes» a shower.'),
        mc('Which word means «sometimes»?', ['às vezes', 'sempre', 'nunca'], 'às vezes', '«Sempre» is always and «nunca» is never.'),
        mc('Which sentence is correct?', ['Eu nunca janto tarde.', 'Eu não nunca janto tarde.', 'Eu nunca não janto tarde.'], 'Eu nunca janto tarde.', '«Nunca» before the verb needs no «não».'),
        mc('How do you say «I wake up at six»?', ['Eu acordo às seis.', 'Eu me acordo às seis.', 'Eu acordo em seis.'], 'Eu acordo às seis.', '«Acordar» is not reflexive, and the time takes «às».'),
        lacuna('Eu ___ levanto às sete.', ['me', 'se', 'nos'], 'me', '«Me» goes with «eu».'),
        lacuna('Ela ___ veste de manhã.', ['se', 'me', 'nos'], 'se', '«Se» goes with «ela».'),
        lacuna('Nós ___ deitamos às onze.', ['nos', 'se', 'me'], 'nos', '«Nos» goes with «nós».'),
        lacuna('Eu ___ às onze. (dormir)', ['durmo', 'dormo', 'dorme'], 'durmo', 'Irregular «eu» form: «durmo».'),
        lacuna('Antes ___ almoçar, eu descanso.', ['de', 'em', 'a'], 'de', 'The expression is «antes de».'),
        ordem('Put in order: «Eu me levanto às sete.»', ['Eu', 'me', 'levanto', 'às', 'sete.'], 'Eu me levanto às sete.', 'Subject, pronoun, verb, time.'),
        ordem('Put in order: «Depois de jantar, a gente descansa.»', ['Depois', 'de', 'jantar,', 'a', 'gente', 'descansa.'], 'Depois de jantar, a gente descansa.', '«Depois de» + infinitive.'),
        livre('Write in Portuguese: I wake up at 6:30 and I get up at 7.', 'Eu acordo às seis e meia e me levanto às sete.'),
        livre('Write in Portuguese: She never goes to bed late.', 'Ela nunca se deita tarde.'),
      ]),
      producao(5, 'Tell a friend what a perfect weekend morning looks like for you: what time you get up, what you eat, what you never do. Use at least two reflexive verbs and one frequency word.'),
    ]),
  ],
});
