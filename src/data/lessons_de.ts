import type { DailyLesson } from '../types';

export const LESSONS_DE: Record<number, DailyLesson> = {
  1: {
    id: 'de-01',
    day: 1,
    targetLanguage: 'de',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 1: Fonética das Vogais Longas e a Inviolabilidade do Verbo na Segunda Posição (V2)',
      en: 'Day 1: Long Vowels Phonetics and the Inviolable Verb-Second (V2) Rule',
      es: 'Día 1: Fonética de Vocales Largas y la Inviolabilidad del Verbo en Segunda Posición (V2)'
    },
    subtitle: {
      pt: 'A oclusiva glotal (Knacklaut), a oposição entre vogais abertas e fechadas, e a sintaxe canônica da oração matriz.',
      en: 'The glottal stop (Knacklaut), open vs. closed vowel opposition, and canonical main-clause syntax.',
      es: 'La oclusiva glotal (Knacklaut), la oposición entre vocales abiertas y cerradas, y la sintaxis canónica de la oración principal.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/9g_G3b6L7mY',
      title: {
        pt: 'Masterclass: Articulação Fonética Alemã e a Posição V2 com Falante Nativo',
        en: 'Masterclass: German Phonetic Articulation and V2 Position with Native Speaker',
        es: 'Masterclass: Articulación Fonética Alemana y la Posición V2 con Hablante Nativo'
      },
      nativeSpeaker: 'Dr. Florian von Steinberg (Universidade Humboldt de Berlim)',
      description: {
        pt: 'Análise minuciosa da tensão muscular nos lábios, a oclusiva glotal antes de qualquer vogal inicial de morfema, e a arquitetura do Vorfeld germânico.',
        en: 'Detailed analysis of muscular tension in lips, glottal stop before morpheme-initial vowels, and the Germanic Vorfeld structure.',
        es: 'Análisis minucioso de la tensión muscular en los labios, la oclusiva glotal antes de vocal inicial y la arquitectura del Vorfeld.'
      },
      durationMinutes: 18,
      timestamps: [
        { time: '00:00', label: { pt: 'Introdução e a física fonética do alemão padrão (Hochdeutsch)', en: 'Intro & Hochdeutsch phonetics', es: 'Introducción y fonética del Hochdeutsch' } },
        { time: '04:15', label: { pt: 'O Knacklaut: a trava laríngea antes de vogais', en: 'The Knacklaut: laryngeal vocal cord catch', es: 'El Knacklaut: cierre glotal antes de vocales' } },
        { time: '09:30', label: { pt: 'A Regra V2: Por que o verbo conjugado não pode sair da posição 2', en: 'V2 Rule: Why conjugated verb stays in position 2', es: 'Regla V2: Por qué el verbo se mantiene en posición 2' } },
        { time: '14:20', label: { pt: 'Inversão do sujeito quando um advérbio ocupa o Vorfeld', en: 'Subject inversion with adverb in Vorfeld', es: 'Inversión del sujeto con adverbio en Vorfeld' } },
      ]
    },
    phonetics: {
      title: {
        pt: 'Módulo Fonético Obrigatório: Vogais Longas Tônicas vs. Breves e o Knacklaut',
        en: 'Mandatory Phonetics Module: Long Tense Vowels vs. Short Lax Vowels and Knacklaut',
        es: 'Módulo Fonético Obligatorio: Vocales Largas Tensas vs. Breves y el Knacklaut'
      },
      drillInstructions: {
        pt: 'No alemão, a extensão vocálica altera o significado da palavra. Se a vogal for seguida por uma única consoante, ela é LONGA e FECHADA [aː, eː, iː, oː, uː]. Se seguida por consoante dupla, é BREVE e ABERTA [a, ɛ, ɪ, ɔ, ʊ]. Execute os pares mínimos em voz alta.',
        en: 'In German, vowel length is phonemic. A vowel followed by a single consonant is LONG and TENSE [aː, eː, iː, oː, uː]. If followed by double consonants, it is SHORT and LAX [a, ɛ, ɪ, ɔ, ʊ]. Practice these minimal pairs aloud.',
        es: 'En alemán, la duración vocálica es fonémica. Una vocal seguida de consonante única es LARGA y TENSA. Si va seguida de doble consonante, es BREVE y ABIERTA. Practica los pares mínimos en voz alta.'
      },
      rules: [
        {
          symbol: '[ʔ] (Knacklaut)',
          name: {
            pt: 'Oclusiva Glotal Inicial (Trava Laríngea)',
            en: 'Glottal Stop (Knacklaut)',
            es: 'Oclusiva Glotal Inicial'
          },
          articulationNotes: {
            pt: 'Nunca faça ligação suave (liaison) entre palavras quando a segunda começar com vogal. As cordas vocais devem fechar-se completamente por um milissegundo antes de liberar o ar.',
            en: 'Never link words smoothly when the second word begins with a vowel. The vocal cords snap shut momentarily before releasing airflow.',
            es: 'Nunca enlaces suavemente cuando la segunda palabra empiece por vocal. Cierre momentáneo de cuerdas vocales antes de liberar el aire.'
          },
          audioSampleText: 'Ich ?esse ?einen ?Apfel.',
          examples: [
            {
              word: 'der Apfel',
              ipa: '[deːɐ̯ ˈʔapfl̩]',
              translation: { pt: 'a maçã', en: 'the apple', es: 'la manzana' },
              explanation: { pt: 'Note a explosão nítida antes do "A".', en: 'Notice the crisp pop before "A".', es: 'Nota la pequeña explosión antes de la "A".' }
            },
            {
              word: 'vereinbaren',
              ipa: '[fɛɐ̯ˈʔaɪ̯nbaːʁən]',
              translation: { pt: 'combinar / acordar', en: 'to agree upon', es: 'acordar' },
              explanation: { pt: 'O Knacklaut ocorre até no interior da palavra na junção de prefixo + raiz: ver-?ein-baren.', en: 'Glottal stop occurs at internal morpheme boundaries: ver-?ein-baren.', es: 'Ocurre incluso dentro de la palabra entre prefijo y raíz: ver-?ein-baren.' }
            }
          ]
        },
        {
          symbol: '[iː] vs [ɪ]',
          name: {
            pt: 'Oposição Longa Tensa [iː] vs. Breve Frouxa [ɪ]',
            en: 'Long Tense [iː] vs. Short Lax [ɪ]',
            es: 'Oposición Larga Tensa [iː] vs. Breve Abierta [ɪ]'
          },
          articulationNotes: {
            pt: '[iː] exige estiramento labial firme e dorso da língua contra o palato duro. [ɪ] relaxa a mandíbula para baixo.',
            en: '[iː] requires firm lip spreading and high tongue body. [ɪ] drops the jaw slightly with reduced tension.',
            es: '[iː] exige estiramiento labial firme. [ɪ] relaja la mandíbula hacia abajo.'
          },
          audioSampleText: 'ihm vs im; bieten vs bitten',
          examples: [
            {
              word: 'bieten',
              ipa: '[ˈbiːtn̩]',
              translation: { pt: 'oferecer (vogal longa)', en: 'to offer (long vowel)', es: 'ofrecer (vocal larga)' },
            },
            {
              word: 'bitten',
              ipa: '[ˈbɪtn̩]',
              translation: { pt: 'pedir / rogar (vogal breve)', en: 'to request / ask (short vowel)', es: 'pedir (vocal breve)' },
            }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'A Arquitetura Sintática Germânica: A Posição V2 e o Topologische Feldermodel',
        en: 'Germanic Syntactic Architecture: Verb-Second (V2) and the Topological Field Model',
        es: 'La Arquitectura Sintáctica Germánica: La Posición V2 y el Modelo de Campos Topológicos'
      },
      summary: {
        pt: 'Em toda oração declarativa principal em alemão, o verbo finito conjugado DEVE ocupar a segunda posição estrutural. Qualquer elemento que ocupe a primeira posição (Vorfeld) força o sujeito a posicionar-se imediatamente após o verbo (Inversão).',
        en: 'In every German independent declarative clause, the finite verb MUST occupy the second topological position. Any constituent occupying the initial position (Vorfeld) forces the subject directly behind the verb (Inversion).',
        es: 'En toda oración enunciativa principal alemana, el verbo conjugado DEBE ocupar la segunda posición sintáctica. Si otro constituyente ocupa la primera posición, el sujeto pasa tras el verbo.'
      },
      sections: [
        {
          heading: {
            pt: '1. O Princípio Topológico do Vorfeld e a Linke Satzklammer',
            en: '1. The Topological Field Principle: Vorfeld and Left Sentence Bracket',
            es: '1. El Principio Topológico del Vorfeld y el Paréntesis Izquierdo'
          },
          explanation: {
            pt: 'A oração alemã divide-se em: [Vorfeld] + [Linke Klammer (Verbo Conjugado)] + [Mittelfeld] + [Rechte Klammer]. O Vorfeld admite exatamente UM constituinte oracional sintático — pode ser uma única palavra (Heute), um sintagma nominal longo (Der alte Professor aus Heidelberg) ou uma oração inteira. Em seguida, vem incondicionalmente o verbo conjugado.',
            en: 'The German clause is divided into: [Vorfeld] + [Left Bracket (Finite Verb)] + [Mittelfeld] + [Right Bracket]. The Vorfeld accepts exactly ONE syntactic constituent — whether a single adverb (Heute), an extended noun phrase (Der alte Professor aus Heidelberg), or an entire adverbial clause. Immediately thereafter comes the finite verb.',
            es: 'La oración alemana se divide en: [Vorfeld] + [Paréntesis Izquierdo (Verbo Conjugado)] + [Mittelfeld] + [Paréntesis Derecho]. En el Vorfeld cabe exactamente UN constituyente sintáctico. Inmediatamente después va el verbo finito.'
          },
          tables: [
            {
              caption: {
                pt: 'Tabela de Campos Topológicos (Vorfeld - Verbo V2 - Mittelfeld)',
                en: 'Topological Field Model Table',
                es: 'Tabla de Campos Topológicos'
              },
              headers: [
                { pt: 'Vorfeld (Posição 1)', en: 'Vorfeld (Pos. 1)', es: 'Vorfeld (Pos. 1)' },
                { pt: 'Linke Klammer (Posição 2: Verbo)', en: 'Left Bracket (Pos. 2: Verb)', es: 'Posición 2 (Verbo)' },
                { pt: 'Mittelfeld (Sujeito / Objeto / Advérbio)', en: 'Mittelfeld (Subject / Object / Adverb)', es: 'Mittelfeld (Sujeto / Objeto)' },
                { pt: 'Rechte Klammer (Fim)', en: 'Right Bracket (End)', es: 'Cierre (Final)' }
              ],
              rows: [
                [
                  { pt: 'Ich (Sujeito)', en: 'Ich (Subject)', es: 'Ich (Sujeto)' },
                  'lerne',
                  { pt: 'heute fleißig Deutsch', en: 'German diligently today', es: 'alemán con dedicación hoy' },
                  '—'
                ],
                [
                  { pt: 'Heute (Advérbio Temporal)', en: 'Heute (Time Adverb)', es: 'Heute (Adverbio)' },
                  'lerne',
                  { pt: 'ich (Sujeito Invertido!) Deutsch', en: 'I (Inverted Subject!) German', es: 'ich (¡Sujeto Invertido!) Deutsch' },
                  '—'
                ],
                [
                  { pt: 'Deutsch (Objeto Direto em Ênfase)', en: 'Deutsch (Topicalized Object)', es: 'Deutsch (Objeto Tematizado)' },
                  'lerne',
                  { pt: 'ich heute mit großer Begeisterung', en: 'I today with great enthusiasm', es: 'yo hoy con gran entusiasmo' },
                  '—'
                ]
              ]
            }
          ],
          rulesSummary: [
            {
              pt: 'A regra não é "o verbo é a segunda palavra", mas sim "o verbo é o segundo constituinte sintático". Uma oração como "Der kluge und erfahrene Arzt [constituinte único de 5 palavras] kommt [V2] morgen." está perfeitamente em V2.',
              en: 'The rule is not "the verb is the second word", but "the verb is the second syntactic constituent". "Der kluge und erfahrene Arzt [single 5-word constituent] kommt [V2] morgen" strictly respects V2.',
              es: 'La regla no dice "segunda palabra", sino "segundo constituyente sintáctico". Un sintagma complejo cuenta como una sola posición.'
            },
            {
              pt: 'Nunca coloque vírgula entre o elemento inicial do Vorfeld e o verbo conjugado!',
              en: 'Never place a comma between the initial constituent and the finite verb!',
              es: '¡Nunca pongas coma entre el constituyente inicial del Vorfeld y el verbo conjugado!'
            }
          ],
          deepDiveNote: {
            pt: 'Filologia Histórica: O alemão preservou o padrão V2 das línguas germânicas continentais antigas, derivado da transição do Proto-Indo-Europeu SOV para SVO, congelando a exigência de que a raiz oracional matriz ancore o núcleo flexionado na segunda posição da árvore sintática.',
            en: 'Historical Philology: German retained the robust V2 pattern of Old Continental Germanic, transitioning from Proto-Indo-European SOV to SVO by freezing the finite verb in the second syntactic projection.',
            es: 'Filología Histórica: El alemán conservó el patrón V2 de las antiguas lenguas germánicas continentales en su evolución desde el orden SOV protoindoeuropeo.'
          }
        }
      ]
    },
    immersion: {
      title: {
        pt: 'Imersão em Texto Autêntico: Diário Filosófico de Berlim',
        en: 'Authentic Text Immersion: Berlin Philosophical Journal',
        es: 'Inmersión en Texto Auténtico: Diario Filosófico de Berlín'
      },
      sourceContext: {
        pt: 'Fragmento editorial adaptado sobre o ritmo acadêmico e a precisão do pensamento.',
        en: 'Adapted editorial fragment on academic life and intellectual precision.',
        es: 'Fragmento editorial adaptado sobre el ritmo académico y la precisión del pensamiento.'
      },
      text: 'Jeden Morgen erwacht die Stadt im Nebel. Heute beginne ich mein Studium der Philosophie an der Humboldt-Universität zu Berlin. Die deutsche Sprache verlangt von mir eine absolute grammatische Disziplin. Zuerst analysiere ich die Begriffe, dann formuliere ich den Gedanken.',
      tokens: [
        {
          word: 'Jeden Morgen',
          lemma: 'jeder Morgen',
          grammarTag: 'Akkusativ temporale (sem preposição)',
          translation: { pt: 'Todas as manhãs / Cada manhã', en: 'Every morning', es: 'Cada mañana' },
          explanation: { pt: 'Expressões de tempo definido sem preposição exigem obrigatoriamente o caso Acusativo em alemão: Jeden (m) Morgen.', en: 'Definite time expressions without a preposition strictly require Accusative case: Jeden Morgen.', es: 'Las expresiones temporales definidas sin preposición exigen caso Acusativo.' }
        },
        {
          word: 'erwacht',
          lemma: 'erwachen',
          grammarTag: 'Verbo conjugado 3ª pess. sing. (V2)',
          translation: { pt: 'desperta', en: 'awakens', es: 'despierta' },
          explanation: { pt: 'Como "Jeden Morgen" ocupa o Vorfeld, o verbo "erwacht" vem na posição 2.', en: 'Since "Jeden Morgen" fills the Vorfeld, "erwacht" directly takes position 2.', es: 'Como "Jeden Morgen" ocupa el Vorfeld, el verbo "erwacht" toma la posición 2.' }
        },
        {
          word: 'die Stadt',
          lemma: 'die Stadt',
          grammarTag: 'Substantivo feminino, Nominativ (Sujeito invertido)',
          translation: { pt: 'a cidade', en: 'the city', es: 'la ciudad' }
        },
        {
          word: 'Heute',
          lemma: 'heute',
          grammarTag: 'Advérbio de tempo no Vorfeld',
          translation: { pt: 'Hoje', en: 'Today', es: 'Hoy' }
        },
        {
          word: 'beginne',
          lemma: 'beginnen',
          grammarTag: 'Verbo na posição 2 (V2)',
          translation: { pt: 'começo / inicio', en: 'I begin', es: 'comienzo' }
        },
        {
          word: 'ich',
          lemma: 'ich',
          grammarTag: 'Pronome pessoal (Sujeito posposto)',
          translation: { pt: 'eu', en: 'I', es: 'yo' }
        },
        {
          word: 'verlangt',
          lemma: 'verlangen',
          grammarTag: 'Verbo V2 transitivo com preposição von',
          translation: { pt: 'exige', en: 'demands / requires', es: 'exige' }
        }
      ],
      comprehensionQuestion: {
        question: {
          pt: 'Por que na oração "Heute beginne ich mein Studium..." a palavra "ich" vem imediatamente após "beginne"?',
          en: 'Why does "ich" immediately follow "beginne" in "Heute beginne ich mein Studium..."?',
          es: '¿Por qué en "Heute beginne ich mein Studium..." la palabra "ich" va justo después de "beginne"?'
        },
        options: [
          { pt: 'Porque o advérbio "Heute" ocupa o Vorfeld (posição 1), forçando o verbo para a posição 2 e o sujeito para a posição 3 (Inversão V2).', en: 'Because "Heute" occupies the Vorfeld (pos. 1), locking the verb in pos. 2 and displacing the subject (V2 inversion).', es: 'Porque "Heute" ocupa el Vorfeld, forzando el verbo a la posición 2 y el sujeto a la posición 3.' },
          { pt: 'Porque em alemão o pronome "ich" nunca pode começar uma frase.', en: 'Because the pronoun "ich" can never start a sentence in German.', es: 'Porque "ich" nunca puede iniciar una frase en alemán.' },
          { pt: 'Porque verbos que denotam estudo têm uma ordem especial irregular.', en: 'Because verbs of academic study have irregular sentence order.', es: 'Porque los verbos de estudio tienen un orden irregular.' }
        ],
        correctIndex: 0,
        explanation: {
          pt: 'Exatamente. A oração matriz alemã não tolera dois elementos antes do verbo flexionado. Ao trazer "Heute" para o início, o verbo ocupa a 2ª posição e o sujeito "ich" é invertido para a 3ª.',
          en: 'Spot on. German main clauses do not permit two constituents ahead of the finite verb. Fronting "Heute" forces the verb into position 2 and the subject into position 3.',
          es: 'Correcto. La oración principal no permite dos constituyentes antes del verbo finito. Al anteponer "Heute", el verbo toma la posición 2 y el sujeto se invierte.'
        }
      }
    },
    practice: {
      totalXp: 120,
      exercises: [
        {
          id: 'de01-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual das seguintes sentenças respeita rigorosamente a sintaxe V2 do alemão culto?',
            en: 'Which of the following sentences strictly adheres to standard German V2 syntax?',
            es: '¿Cuál de las siguientes oraciones respeta rigurosamente la sintaxis V2 del alemán culto?'
          },
          options: [
            'Morgen ich gehe in die Universität.',
            'Morgen gehe ich in die Universität.',
            'Morgen in die Universität ich gehe.',
            'Ich morgen gehe in die Universität.'
          ],
          correctAnswer: 'Morgen gehe ich in die Universität.',
          explanation: {
            pt: 'ERRO GRAVE DE V2: Em "Morgen ich gehe...", colocaste o advérbio e o sujeito antes do verbo, violando o princípio topológico. Quando "Morgen" está na posição 1, o verbo "gehe" TEM de vir obrigatoriamente na posição 2: "Morgen gehe ich...".',
            en: 'SEVERE V2 VIOLATION: In "Morgen ich gehe...", both adverb and subject were placed before the verb. When "Morgen" occupies pos. 1, "gehe" must be in pos. 2: "Morgen gehe ich...".',
            es: 'ERROR GRAVE DE V2: En "Morgen ich gehe...", pusiste el adverbio y el sujeto antes del verbo. Con "Morgen" en pos. 1, el verbo "gehe" DEBE ir en la posición 2.'
          },
          xp: 40
        },
        {
          id: 'de01-ex2',
          type: 'fill-gap',
          prompt: {
            pt: 'Complete a frase aplicando a inversão sujeito-verbo com o verbo "schreiben" (3ª pessoa do singular: schreibt) e o sujeito "der Philosoph": "Heute ___ ___ einen Aufsatz."',
            en: 'Complete the sentence with V2 inversion using "schreiben" (3rd person sing.: schreibt) and subject "der Philosoph": "Heute ___ ___ einen Aufsatz."',
            es: 'Completa la frase aplicando la inversión sujeto-verbo: "Heute ___ ___ einen Aufsatz."'
          },
          gapSentence: 'Heute [schreibt der Philosoph] einen Aufsatz.',
          correctAnswer: 'schreibt der Philosoph',
          acceptableAnswers: ['schreibt der Philosoph', 'schreibt der philosoph'],
          explanation: {
            pt: 'Atenção: O elemento temporal "Heute" já ocupa a posição 1 (Vorfeld). O verbo conjugado "schreibt" deve vir na posição 2, seguido imediatamente pelo sujeito "der Philosoph".',
            en: 'Attention: The time adverb "Heute" already occupies pos. 1. The conjugated verb "schreibt" must occupy pos. 2, followed immediately by "der Philosoph".',
            es: 'Atención: "Heute" ya ocupa la pos. 1. El verbo conjugado "schreibt" debe ocupar la pos. 2, seguido de "der Philosoph".'
          },
          xp: 40
        },
        {
          id: 'de01-ex3',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual é a transcrição fonética e regra para a palavra "der Apfel" no início de enunciado?',
            en: 'What is the phonetic transcription and rule for "der Apfel" at the beginning of an utterance?',
            es: '¿Cuál es la transcripción fonética y regla para "der Apfel"?'
          },
          options: [
            '[deːɐ̯ ˈʔapfl̩] — com Knacklaut (oclusiva glotal) antes da vogal inicial tônica.',
            '[deːɐ̯ ˈlapfl̩] — com fusão contínua sem interrupção de ar.',
            '[deːɐ̯ ˈapfl̩] — sem qualquer trava laríngea.',
            '[deːɐ̯ ˈhaf-fel] — com aspiração glotal [h].'
          ],
          correctAnswer: '[deːɐ̯ ˈʔapfl̩] — com Knacklaut (oclusiva glotal) antes da vogal inicial tônica.',
          explanation: {
            pt: 'O alemão exige a oclusiva glotal [ʔ] (Knacklaut) antes de qualquer raiz com vogal inicial. Não fazer essa trava gera pronúncia com forte sotaque estrangeiro.',
            en: 'Standard German strictly requires the glottal stop [ʔ] before morpheme-initial vowels. Skipping it results in a non-native acoustic accent.',
            es: 'El alemán exige la oclusiva glotal [ʔ] antes de cualquier raíz con vocal inicial.'
          },
          xp: 40
        }
      ]
    }
  },
  2: {
    id: 'de-02',
    day: 2,
    targetLanguage: 'de',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 2: O Gênero Gramatical Tripartite e a Oposição Primária: Nominativ vs. Akkusativ',
      en: 'Day 2: Tripartite Grammatical Gender and the Primary Distinction: Nominativ vs. Akkusativ',
      es: 'Día 2: Género Gramatical Tripartito y la Oposición Primaria: Nominativ vs. Akkusativ'
    },
    subtitle: {
      pt: 'A marcação morfológica exclusiva do acusativo masculino (den/einen) e a transitividade direta.',
      en: 'The exclusive morphological marking of masculine accusative (den/einen) and direct transitivity.',
      es: 'La marca morfológica exclusiva del acusativo masculino (den/einen) y la transitividad directa.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/jZ_yP2k3u7c',
      title: {
        pt: 'Masterclass: Gêneros Gramaticais e a Lógica do Acusativo com Professor Nativo',
        en: 'Masterclass: Grammatical Gender & Accusative Logic with Native Professor',
        es: 'Masterclass: Género Gramatical y la Lógica del Acusativo'
      },
      nativeSpeaker: 'Frau Dr. Anneliese Weber (Universidade de Viena)',
      description: {
        pt: 'Compreenda por que os substantivos alemães têm gênero inerente e como o caso Acusativo assinala o paciente da ação verbal direta.',
        en: 'Understand inherent German noun gender and how the Accusative case marks direct verbal patients.',
        es: 'Comprende el género inherente de los sustantivos y cómo el Acusativo señala el objeto directo.'
      },
      durationMinutes: 20,
      timestamps: [
        { time: '00:00', label: { pt: 'O mito do gênero biológico vs. gênero gramatical formal', en: 'Biological vs. formal grammatical gender', es: 'Género biológico vs. género gramatical formal' } },
        { time: '05:30', label: { pt: 'Sufixos determinantes de gênero (-ung, -heit, -keit, -ling, -chen)', en: 'Gender suffix markers', es: 'Sufijos determinantes de género' } },
        { time: '11:00', label: { pt: 'A transformação do masculino: der -> den, ein -> einen', en: 'Masculine mutation: der -> den, ein -> einen', es: 'Transformación del masculino: der -> den, ein -> einen' } },
        { time: '16:45', label: { pt: 'Verbos com regência acusativa obrigatória (haben, brauchen, suchen)', en: 'Mandatory accusative verbs', es: 'Verbos de régimen acusativo obligatorio' } },
      ]
    },
    phonetics: {
      title: {
        pt: 'Módulo Fonético: As Consoantes Fricativas Dorsais Alemãs [ç] (ich-Laut) vs. [x] (ach-Laut)',
        en: 'Phonetic Module: German Dorsal Fricatives [ç] (ich-Laut) vs. [x] (ach-Laut)',
        es: 'Módulo Fonético: Fricativas Dorsales Alemanas [ç] (ich-Laut) vs. [x] (ach-Laut)'
      },
      drillInstructions: {
        pt: 'A grafia "ch" tem dois alófonos estritos em alemão: após vogais anteriores (e, i, ä, ö, ü, ei, eu) ou consoantes, soa como a fricativa palatal [ç] (língua arqueada no céu da boca, sussurro suave). Após vogais posteriores (a, o, u, au), soa como a fricativa velar/uvular [x] (fricção no fundo da garganta). Nunca os confunda!',
        en: 'The spelling "ch" possesses two complementary allophones: after front vowels (e, i, ä, ö, ü, ei, eu) or consonants, it is the palatal fricative [ç]. After back vowels (a, o, u, au), it is the velar/uvular fricative [x]. Never substitute [ʃ] (sh) for [ç]!',
        es: 'La grafía "ch" tiene dos alófonos complementarios: tras vocales anteriores es palatal [ç]; tras vocales posteriores es velar [x]. ¡Nunca pronuncies [ʃ]!'
      },
      rules: [
        {
          symbol: '[ç] (ich-Laut)',
          name: { pt: 'Fricativa Palatal Surda', en: 'Voiceless Palatal Fricative', es: 'Fricativa Palatal Sorda' },
          articulationNotes: {
            pt: 'Coloque a língua na posição da vogal "i" e sopre ar suavemente sem vibrar as cordas vocais. Parece o sussurro da palavra "yes" ou o sibilar de um gato.',
            en: 'Shape tongue as if pronouncing "ee" [i], then blow air without voicing. Similar to the initial sound in "huge" or "human".',
            es: 'Coloca la lengua en la posición de la "i" y sopla suavemente sin vibrar las cuerdas vocales.'
          },
          audioSampleText: 'ich, nicht, echt, Bücher',
          examples: [
            { word: 'ich', ipa: '[ʔɪç]', translation: { pt: 'eu', en: 'I', es: 'yo' } },
            { word: 'das Buch -> die Bücher', ipa: '[diː ˈbyːçɐ]', translation: { pt: 'os livros (plural com trema muda de [x] para [ç])', en: 'the books (umlaut shifts [x] to [ç])', es: 'los libros' } }
          ]
        },
        {
          symbol: '[x] (ach-Laut)',
          name: { pt: 'Fricativa Velar Surda', en: 'Voiceless Velar Fricative', es: 'Fricativa Velar Sorda' },
          articulationNotes: {
            pt: 'Ocorre após a, o, u, au. O dorso da língua recua em direção ao palato mole (véu palatino).',
            en: 'Occurs exclusively after a, o, u, au. Tongue dorsum approaches the soft palate with audible friction.',
            es: 'Ocurre tras a, o, u, au. El dorso de la lengua se acerca al velo del paladar.'
          },
          audioSampleText: 'ach, das Buch, die Sprache, kochen',
          examples: [
            { word: 'das Buch', ipa: '[das buːx]', translation: { pt: 'o livro (com [x] após [uː])', en: 'the book (with [x] after [uː])', es: 'el libro' } },
            { word: 'die Sprache', ipa: '[diː ˈʃpʁaːxə]', translation: { pt: 'a língua / idioma', en: 'the language', es: 'la lengua' } }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'A Morfologia do Acusativo Alemão e a Marcação Exclusiva do Masculino',
        en: 'German Accusative Morphology and the Exclusive Masculine Marking',
        es: 'Morfología del Acusativo Alemán y la Marca Exclusiva del Masculino'
      },
      summary: {
        pt: 'No sistema casual germânico, o Nominativo expressa o sujeito da oração e o predicativo do sujeito com verbos de ligação (sein, werden, bleiben). O Acusativo assinala o objeto direto de verbos transitivos. Crucial: APENAS o gênero masculino modifica seu artigo no acusativo (der -> den; ein -> einen). Os gêneros feminino (die/eine), neutro (das/ein) e plural (die/keine) permanecem idênticos ao nominativo.',
        en: 'Nominative marks the subject and predicate nominatives with copular verbs (sein, werden, bleiben). Accusative marks direct objects of transitive verbs. Crucially: ONLY masculine changes form in the accusative (der -> den; ein -> einen). Feminine (die/eine), neuter (das/ein), and plural remain visually identical to nominative.',
        es: 'El Nominativo marca el sujeto. El Acusativo marca el objeto directo. Fundamental: SOLO el género masculino altera su forma en acusativo (der -> den; ein -> einen). Femenino, neutro y plural se mantienen idénticos.'
      },
      sections: [
        {
          heading: {
            pt: 'Declinação dos Artigos Definidos e Indefinidos: Nominativ vs. Akkusativ',
            en: 'Definite and Indefinite Article Declension: Nominativ vs. Akkusativ',
            es: 'Declinación de Artículos Definidos e Indefinidos'
          },
          explanation: {
            pt: 'O morfema flexional flexivo "-en" é a assinatura universal do masculino acusativo em artigos (den, einen, keinen, meinen, diesen) e pronomes pessoais (ihn).',
            en: 'The inflectional suffix "-en" is the universal signature of the masculine accusative across articles (den, einen, keinen, meinen, diesen) and personal pronouns (ihn).',
            es: 'El sufijo de flexión "-en" es la marca universal del acusativo masculino en artículos (den, einen, keinen, meinen) y pronombres personales (ihn).'
          },
          tables: [
            {
              caption: { pt: 'Contraste Nominativ vs. Akkusativ', en: 'Nominativ vs. Akkusativ Paradigm', es: 'Paradigma Nominativ vs. Akkusativ' },
              headers: [
                { pt: 'Caso', en: 'Case', es: 'Caso' },
                { pt: 'Masculino (der Tisch)', en: 'Masculine', es: 'Masculino' },
                { pt: 'Feminino (die Lampe)', en: 'Feminine', es: 'Femenino' },
                { pt: 'Neutro (das Buch)', en: 'Neuter', es: 'Neutro' },
                { pt: 'Plural (die Bücher)', en: 'Plural', es: 'Plural' }
              ],
              rows: [
                [
                  { pt: 'Nominativ (Sujeito)', en: 'Nominativ (Subject)', es: 'Nominativ (Sujeto)' },
                  'der / ein Tisch',
                  'die / eine Lampe',
                  'das / ein Buch',
                  'die / — Bücher'
                ],
                [
                  { pt: 'Akkusativ (Objeto Direto)', en: 'Akkusativ (Object)', es: 'Akkusativ (Objeto)' },
                  'den / einen Tisch [MUDOU!]',
                  'die / eine Lampe [igual]',
                  'das / ein Buch [igual]',
                  'die / — Bücher [igual]'
                ]
              ]
            }
          ]
        }
      ]
    },
    immersion: {
      title: {
        pt: 'Imersão: Na Biblioteca Universitária de Heidelberg',
        en: 'Immersion: Inside the Heidelberg University Library',
        es: 'Inmersión: En la Biblioteca Universitaria de Heidelberg'
      },
      sourceContext: {
        pt: 'Texto descritivo em alemão autêntico destacando os objetos em acusativo.',
        en: 'Descriptive authentic German text highlighting accusative objects.',
        es: 'Texto descriptivo en alemán auténtico destacando los objetos en acusativo.'
      },
      text: 'Der Student betritt am Nachmittag den Lesesaal. Er sucht einen freien Tisch und findet schließlich einen bequemen Stuhl. Auf dem Tisch sieht er das alte Wörterbuch und die philosophische Abhandlung. Er öffnet den schweren Band und beginnt die Lektüre.',
      tokens: [
        {
          word: 'Der Student',
          lemma: 'der Student',
          grammarTag: 'Nominativ (Sujeito da oração)',
          translation: { pt: 'O estudante', en: 'The student', es: 'El estudiante' }
        },
        {
          word: 'den Lesesaal',
          lemma: 'der Lesesaal',
          grammarTag: 'Akkusativ masculino (objeto direto de betreten)',
          translation: { pt: 'a sala de leitura', en: 'the reading room', es: 'la sala de lectura' },
          explanation: { pt: 'O substantivo é masculino (der Saal). Como é objeto direto do verbo "betreten" (adentrar), declina para "den Lesesaal".', en: 'Masculine noun (der Saal). Direct object of "betreten" triggers accusative "den Lesesaal".', es: 'Sustantivo masculino (der Saal). Objeto directo de "betreten", declina a "den Lesesaal".' }
        },
        {
          word: 'einen freien Tisch',
          lemma: 'ein freier Tisch',
          grammarTag: 'Akkusativ masculino indefinido + adjetivo fraco',
          translation: { pt: 'uma mesa livre', en: 'a free table', es: 'una mesa libre' },
          explanation: { pt: 'Der Tisch é masculino. Com o verbo "suchen" (procurar), o artigo indefinido torna-se "einen" e o adjetivo recebe "-en".', en: 'Der Tisch is masculine. Governed by "suchen", article becomes "einen" and adjective receives "-en".', es: 'Der Tisch es masculino. Objeto directo de "suchen", el artículo pasa a "einen".' }
        },
        {
          word: 'den schweren Band',
          lemma: 'der Band',
          grammarTag: 'Akkusativ masculino (o volume / tomo de livro)',
          translation: { pt: 'o pesado volume (livro)', en: 'the heavy volume (tome)', es: 'el pesado volumen' },
          explanation: { pt: 'Atenção aos homônimos: der Band (o tomo/livro) é masculino (den Band); das Band é a fita/laço; die Band é a banda musical!', en: 'Homophone trap: der Band (book tome) is masculine (den Band); das Band (ribbon/tie); die Band (music band)!', es: 'Cuidado con homónimos: der Band (tomo) es masculino; das Band (cinta); die Band (grupo musical).' }
        }
      ],
      comprehensionQuestion: {
        question: {
          pt: 'Por que o texto utiliza "den Lesesaal" e "einen freien Tisch" em vez de "der" e "ein"?',
          en: 'Why does the text employ "den Lesesaal" and "einen freien Tisch" instead of "der" and "ein"?',
          es: '¿Por qué el texto utiliza "den Lesesaal" y "einen freien Tisch" en lugar de "der" y "ein"?'
        },
        options: [
          { pt: 'Porque ambos são substantivos masculinos e funcionam como objetos diretos (caso Acusativo) dos verbos transitivos "betreten" e "suchen".', en: 'Because both are masculine nouns acting as direct objects (Accusative case) of transitive verbs "betreten" and "suchen".', es: 'Porque ambos son sustantivos masculinos y funcionan como objetos directos (caso Acusativo).' },
          { pt: 'Porque estão no final da frase.', en: 'Because they are at the end of the sentence.', es: 'Porque están al final de la frase.' },
          { pt: 'Porque substantivos em bibliotecas recebem sempre a terminação -en.', en: 'Because nouns in libraries always end in -en.', es: 'Porque los sustantivos en bibliotecas terminan siempre en -en.' }
        ],
        correctIndex: 0,
        explanation: {
          pt: 'Exato. "Betreten" e "suchen" são verbos transitivos diretos que regem Acusativo. No masculino, der -> den e ein -> einen.',
          en: 'Correct. "Betreten" and "suchen" take direct accusative objects. Masculine inflects to den / einen.',
          es: 'Correcto. "Betreten" y "suchen" rigen Acusativo directo. En masculino, der -> den y ein -> einen.'
        }
      }
    },
    practice: {
      totalXp: 130,
      exercises: [
        {
          id: 'de02-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Complete a frase: "Der Professor hat ___ (der Stift / m) und liest ___ (das Manuskript / n)."',
            en: 'Complete: "Der Professor hat ___ (der Stift / m) und liest ___ (das Manuskript / n)."',
            es: 'Completa: "Der Professor hat ___ (der Stift / m) und liest ___ (das Manuskript / n)."'
          },
          options: [
            'den Stift / das Manuskript',
            'der Stift / das Manuskript',
            'den Stift / den Manuskript',
            'dem Stift / dem Manuskript'
          ],
          correctAnswer: 'den Stift / das Manuskript',
          explanation: {
            pt: 'ERRO NO ACUSATIVO: "Der Stift" é masculino, logo sob o verbo transitivo "haben" passa a "den Stift". "Das Manuskript" é neutro e NÃO se altera no acusativo (permanece "das").',
            en: 'ACCUSATIVE ERROR: "Der Stift" is masculine, thus under transitive verb "haben" it becomes "den Stift". "Das Manuskript" is neuter and remains "das".',
            es: 'ERROR EN EL ACUSATIVO: "Der Stift" es masculino, con "haben" pasa a "den Stift". "Das Manuskript" es neutro y no cambia.'
          },
          xp: 40
        },
        {
          id: 'de02-ex2',
          type: 'fill-gap',
          prompt: {
            pt: 'Insira o artigo indefinido correto no caso acusativo masculino para "einen" na lacuna: "Ich brauche ___ (ein) neuen Computer."',
            en: 'Insert the correct indefinite masculine accusative article "einen": "Ich brauche ___ (ein) neuen Computer."',
            es: 'Inserta el artículo indefinido correcto en acusativo masculino para "einen": "Ich brauche ___ (ein) neuen Computer."'
          },
          gapSentence: 'Ich brauche [einen] neuen Computer.',
          correctAnswer: 'einen',
          explanation: {
            pt: '"Computer" é substantivo masculino (der Computer). O verbo "brauchen" exige objeto direto no caso Acusativo: ein -> einen.',
            en: '"Computer" is masculine (der Computer). "Brauchen" governs direct accusative: ein -> einen.',
            es: '"Computer" es masculino (der Computer). "Brauchen" exige acusativo directo: ein -> einen.'
          },
          xp: 45
        },
        {
          id: 'de02-ex3',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual par de palavras demonstra a diferença entre o som [ç] (ich-Laut) e [x] (ach-Laut)?',
            en: 'Which pair illustrates the phonemic contrast between [ç] (ich-Laut) and [x] (ach-Laut)?',
            es: '¿Qué par ilustra el contraste entre [ç] (ich-Laut) y [x] (ach-Laut)?'
          },
          options: [
            'ich [ʔɪç] vs. ach [ʔax]',
            'Schule [ʃuːlə] vs. Spiel [ʃpiːl]',
            'bitten [ˈbɪtn̩] vs. bieten [ˈbiːtn̩]',
            'gehen [ˈɡeːən] vs. sehen [ˈzeːən]'
          ],
          correctAnswer: 'ich [ʔɪç] vs. ach [ʔax]',
          explanation: {
            pt: '"ich" tem vogal anterior e produz a fricativa palatal [ç]; "ach" tem vogal posterior "a" e produz a fricativa velar [x].',
            en: '"ich" has a front vowel producing palatal [ç]; "ach" has back vowel "a" triggering velar [x].',
            es: '"ich" tiene vocal anterior produciendo [ç]; "ach" tiene vocal posterior produciendo [x].'
          },
          xp: 45
        }
      ]
    }
  },
  3: {
    id: 'de-03',
    day: 3,
    targetLanguage: 'de',
    level: 'A1',
    isFree: false, // Day 3+: PAYWALL PROTECTED!
    title: {
      pt: 'Dia 3: O Sistema do Dativo e as Preposições Bidirecionais (Wechselpräpositionen)',
      en: 'Day 3: The Dative Case System and Two-Way Prepositions (Wechselpräpositionen)',
      es: 'Día 3: El Sistema del Dativo y las Preposiciones Bidireccionales (Wechselpräpositionen)'
    },
    subtitle: {
      pt: 'A geometria espacial germânica: Wohin (direção dinâmica = Akkusativ) vs. Wo (repouso estático = Dativ).',
      en: 'German spatial geometry: Wohin (dynamic direction = Akkusativ) vs. Wo (static location = Dativ).',
      es: 'La geometría espacial germánica: Wohin (dirección = Akkusativ) vs. Wo (reposo = Dativ).'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass C1: A Geometria do Dativo e a Física das Wechselpräpositionen',
        en: 'Masterclass: Dative Geometry and Physics of Wechselpräpositionen',
        es: 'Masterclass: Geometría del Dativo y Wechselpräpositionen'
      },
      nativeSpeaker: 'Prof. Dr. Maximilian Lindemann (Munique)',
      description: {
        pt: 'Conteúdo reservado aos subscritores Linvuu Kosmos. Análise exaustiva das 9 preposições bidirecionais: in, an, auf, neben, hinter, über, unter, vor, zwischen.',
        en: 'Reserved for Linvuu Kosmos Subscribers. Exhaustive analysis of the 9 two-way prepositions.',
        es: 'Contenido reservado para suscriptores Linvuu Kosmos.'
      },
      durationMinutes: 24,
      timestamps: [
        { time: '00:00', label: { pt: 'A metafísica do repouso vs. movimento vetorial', en: 'Metaphysics of state vs. vector motion', es: 'Reposo vs. movimiento vectorial' } },
        { time: '08:15', label: { pt: 'Verbos causativos pareados: stellen/stehen, legen/liegen, setzen/sitzen', en: 'Paired causative verbs', es: 'Verbos causativos emparejados' } },
        { time: '18:30', label: { pt: 'Declinações do Dativo: dem, der, dem, den (+n plural)', en: 'Dative declension paradigms', es: 'Declinaciones del Dativo' } }
      ]
    },
    phonetics: {
      title: {
        pt: 'Módulo Fonético: A Consoante R Germânica: Fricativa Uvular Sonora [ʁ] vs. R Vocalizado [ɐ]',
        en: 'Phonetic Module: German R Varieties: Uvular Fricative [ʁ] vs. Vocalized R [ɐ]',
        es: 'Módulo Fonético: La R Germánica: Fricativa Uvular [ʁ] vs. R Vocalizada [ɐ]'
      },
      drillInstructions: {
        pt: 'No Hochdeutsch moderno, o "r" pós-vocálico ou na terminação átona "-er" quase nunca é pronunciado como consoante de garganta: ele é vocalizado em [ɐ], uma espécie de "a" breve e centralizado (ex: der [deːɐ̯], Vater [ˈfaːtɐ]). O [ʁ] consonantal ocorre apenas no início de sílaba (ex: rot [ʁoːt]).',
        en: 'In modern Hochdeutsch, post-vocalic "r" or unstressed "-er" endings are vocalized into [ɐ], a centralized low vowel. Consonantal uvular [ʁ] occurs primarily at syllable onset.',
        es: 'En el Hochdeutsch moderno, la "r" postvocálica se vocaliza en [ɐ]. La [ʁ] consonántica solo se usa al inicio de sílaba.'
      },
      rules: [
        {
          symbol: '[ɐ] (Vokalisiertes R)',
          name: { pt: 'R Vocalizado Semivocálico', en: 'Vocalized R', es: 'R Vocalizada' },
          articulationNotes: { pt: 'Relaxe o maxilar e emita um "a" breve e preguiçoso.', en: 'Relax jaw and emit a short, low central schwa-like vowel.', es: 'Relaja la mandíbula y emite una "a" breve y central.' },
          audioSampleText: 'der Lehrer, das Wasser, hier, wir',
          examples: [
            { word: 'der Lehrer', ipa: '[deːɐ̯ ˈleːʁɐ]', translation: { pt: 'o professor (inicia com [ʁ] e termina com [ɐ])', en: 'the teacher', es: 'el profesor' } }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'Wechselpräpositionen: As 9 Preposições de Duplo Regime',
        en: 'Wechselpräpositionen: The 9 Two-Way Prepositions',
        es: 'Wechselpräpositionen: Las 9 Preposiciones de Doble Régimen'
      },
      summary: {
        pt: 'As preposições: an, auf, hinter, in, neben, über, unter, vor, zwischen mudam de caso conforme o vetor semântico: Pergunta "Wo?" (onde? localização estática) -> DATIVO. Pergunta "Wohin?" (para onde? vetor de deslocamento com limite) -> ACUSATIVO.',
        en: 'The 9 prepositions take Dative for static location (Wo? Where?) and Accusative for directional movement towards a target (Wohin? Whither?).',
        es: 'Las 9 preposiciones rigen Dativo para ubicación estática (¿Dónde?) y Acusativo para dirección con destino (¿Adónde?).'
      },
      sections: [
        {
          heading: { pt: 'Os Verbos de Posição Pareados (Causativo / Transitivo vs. Estático / Intransitivo)', en: 'Paired Positional Verbs', es: 'Verbos de Posición Emparejados' },
          explanation: {
            pt: 'O alemão tem pares verbais rigorosos: stellen (pôr em pé + Akkusativ) / stehen (estar em pé + Dativ); legen (pôr deitado + Akkusativ) / liegen (estar deitado + Dativ); setzen (sentar alguém + Akkusativ) / sitzen (estar sentado + Dativ).',
            en: 'German pairs transitive actions with stative positions: stellen (to put upright + Akk) / stehen (to stand + Dat); legen (to lay flat + Akk) / liegen (to lie + Dat).',
            es: 'Pares verbales estrictos: stellen (poner de pie + Akk) / stehen (estar de pie + Dat); legen (poner tumbado + Akk) / liegen (yacer + Dat).'
          }
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão C1: O Gabinete de Trabalho do Escritor', en: 'Immersion: The Writer\'s Study', es: 'Inmersión: El Estudio del Escritor' },
      sourceContext: { pt: 'Prosa descritiva densa explorando o jogo de preposições.', en: 'Dense descriptive prose on spatial placement.', es: 'Prosa descriptiva densa sobre ubicación espacial.' },
      text: 'Der Gelehrte sitzt an dem alten Eichentisch. Auf dem Regal über seinem Kopf stehen unzählige Manuskripte. Plötzlich stellt er die Tasse auf den Tisch und legt das Manuskript in die Schublade.',
      tokens: [
        { word: 'sitzt an dem', lemma: 'sitzen an + Dativ', grammarTag: 'Dativ de repouso (am Tisch)', translation: { pt: 'está sentado junto à mesa', en: 'sits at the table', es: 'está sentado junto a la mesa' } },
        { word: 'stellt ... auf den Tisch', lemma: 'stellen auf + Akkusativ', grammarTag: 'Akkusativ de movimento', translation: { pt: 'coloca em pé sobre a mesa', en: 'places upon the table', es: 'coloca de pie sobre la mesa' } }
      ]
    },
    practice: {
      totalXp: 150,
      exercises: [
        {
          id: 'de03-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Complete: "Das Bild hängt an ___ (die Wand / f) [repouso], aber ich hänge die Lampe an ___ (die Decke / f) [movimento]."',
            en: 'Complete: "Das Bild hängt an ___ Wand [static], aber ich hänge die Lampe an ___ Decke [action]."',
            es: 'Completa con Dativo (repouso) y Acusativo (movimiento):'
          },
          options: [
            'der Wand (Dativ) / die Decke (Akkusativ)',
            'die Wand (Akkusativ) / der Decke (Dativ)',
            'den Wand / das Decke',
            'dem Wand / dem Decke'
          ],
          correctAnswer: 'der Wand (Dativ) / die Decke (Akkusativ)',
          explanation: {
            pt: '"hängen" no sentido intransitivo de estar pendurado rege DATIVO (die Wand -> der Wand). No sentido transitivo de pendurar algo rege ACUSATIVO (die Decke -> die Decke).',
            en: 'Intransitive "hängen" (to be hanging) takes Dative (der Wand). Transitive "hängen" (to hang something) takes Accusative (die Decke).',
            es: '"hängen" intransitivo (estar colgado) rige Dativo (der Wand). Transitivo rige Acusativo (die Decke).'
          },
          xp: 50
        }
      ]
    }
  },
  100: {
    id: 'de-100',
    day: 100,
    targetLanguage: 'de',
    level: 'C1',
    isFree: false, // Day 100 is strictly paid
    title: {
      pt: 'Dia 100: O Konjunktiv I, Modalpartikeln e a Alta Prosa Filosófica de Kant e Adorno',
      en: 'Day 100: Subjunctive I (Konjunktiv I), Modal Particles, and Late Philosophical Prose',
      es: 'Día 100: El Konjunktiv I, Partículas Modales y la Alta Prosa Filosófica de Kant y Adorno'
    },
    subtitle: {
      pt: 'O cume do C1: discurso indireto erudito, distanciamento enunciativo e a sintaxe periódica alemã.',
      en: 'The C1 pinnacle: erudite indirect discourse, epistemic distancing, and German periodic syntax.',
      es: 'La cumbre del C1: discurso indirecto erudito, distanciamiento epistémico y sintaxis periódica.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass C1 Magna: De Kant a Adorno — A Estética da Sintaxe Alemã',
        en: 'C1 Magna Masterclass: From Kant to Adorno — Aesthetics of German Syntax',
        es: 'Masterclass C1 Magna: De Kant a Adorno — La Estética de la Sintaxis Alemana'
      },
      nativeSpeaker: 'Prof. Dr. Dr. Heinrich von Weizsäcker (Universidade de Tübingen)',
      description: {
        pt: 'Aula magna de coroamento das 100 lições. Exegese sintática da Crítica da Razão Pura e Teoria Crítica.',
        en: 'Grand capstone lecture of the 100 lessons. Syntactic exegesis of the Critique of Pure Reason.',
        es: 'Clase magistral de coronación de las 100 lecciones. Exégesis sintáctica de la Crítica de la Razón Pura.'
      },
      durationMinutes: 45
    },
    phonetics: {
      title: {
        pt: 'Prosódia Oracional C1: Curvas Entoacionais de Longos Períodos Hipotáticos',
        en: 'C1 Sentence Prosody: Intonational Contours of Extended Hypotactic Periods',
        es: 'Prosodia Oracional C1: Curvas de Entonación de Largos Períodos Hipotácticos'
      },
      drillInstructions: {
        pt: 'A cadência oracional de um período de 40 palavras exige sustentação do tom suspensivo (Progredienz) em cada oração subordinada antes da queda conclusiva (Terminalität) no verbo final.',
        en: 'The cadence of an extended 40-word clause requires sustained suspension tone on sub-clauses until terminal cadence on final verb.',
        es: 'La cadencia de un período de 40 palabras exige mantener el tono suspensivo hasta la caída terminal en el verbo final.'
      },
      rules: [
        {
          symbol: '[↗ ... ↘]',
          name: { pt: 'Entoação Hipotática Germânica', en: 'German Hypotactic Intonation', es: 'Entonación Hipotáctica Germánica' },
          articulationNotes: { pt: 'A voz eleva-se no início de cada oração relativa ou subordinada e desce apenas no último verbo do período.', en: 'Pitch rises into each dependent clause and resolves only at ultimate finite verb.', es: 'La voz asciende en las oraciones subordinadas y solo desciende en el verbo final.' },
          audioSampleText: 'Dass die Vernunft, welche sich selbst befragt, zu Widersprüchen gelangt, ist unvermeidlich.',
          examples: [
            { word: 'unvermeidlich', ipa: '[ˈʔʊnfɛɐ̯ˌmaɪ̯tlɪç]', translation: { pt: 'inevitável', en: 'unavoidable', es: 'inevitable' } }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'Konjunktiv I no Discurso Indireto e as Nuances das Modalpartikeln (ja, doch, wohl, eben)',
        en: 'Konjunktiv I in Indirect Discourse and Subtle Modal Particles',
        es: 'Konjunktiv I en Discurso Indirecto y Partículas Modales'
      },
      summary: {
        pt: 'O Konjunktiv I é o marcador gramatical de neutralidade e distanciamento científico/jornalístico. Ele assinala que a proposição reproduz o discurso de outrem sem endosso de veracidade pelo autor.',
        en: 'Subjunctive I is the grammatical hallmark of epistemic objectivity and scholarly reporting, showing reportage without epistemic commitment.',
        es: 'El Konjunktiv I es la marca gramatical de neutralidad y distanciamiento en el discurso indirecto formal.'
      },
      sections: [
        {
          heading: { pt: 'Formação Rigorosa do Konjunktiv I', en: 'Strict Konjunktiv I Inflection', es: 'Formación Rigurosa del Konjunktiv I' },
          explanation: {
            pt: 'Obtido diretamente da raiz do infinitivo + terminações: -e, -est, -e, -en, -et, -en. (Ex: er sei, er habe, er wisse, er komme). Se idêntico ao presente do indicativo, substitui-se pelo Konjunktiv II.',
            en: 'Formed from infinitive stem + endings: -e, -est, -e, -en, -et, -en (er sei, er habe, er wisse). When identical to indicative, Konjunktiv II is substituted.',
            es: 'Raíz del infinitivo + terminaciones: -e, -est, -e, -en, -et, -en (er sei, er habe). Si coincide con indicativo, se sustituye por Konjunktiv II.'
          }
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão Filosófica C1: Crítica da Dialética Negativa', en: 'Philosophical Immersion: Critical Theory Text', es: 'Inmersión Filosófica C1: Dialéctica Negativa' },
      sourceContext: { pt: 'Trecho editorial de alta densidade ensaística.', en: 'High-density essayistic excerpt.', es: 'Fragmento ensayístico de alta densidad.' },
      text: 'Der Philosoph behauptet, die Wirklichkeit sei keineswegs mit dem rationalen Begriff identisch, sondern berge vielmehr einen unauflösbaren Widerspruch in sich. Wer dies leugne, verfalle dem Dogmatismus.',
      tokens: [
        { word: 'sei', lemma: 'sein', grammarTag: 'Konjunktiv I (3ª pess. sing.)', translation: { pt: 'seja (discurso indireto)', en: 'is (allegedly, reported speech)', es: 'sea (discurso indirecto)' } },
        { word: 'berge', lemma: 'bergen', grammarTag: 'Konjunktiv I (3ª pess. sing.)', translation: { pt: 'abrigue / encerre', en: 'harbors (reported speech)', es: 'albergue' } },
        { word: 'leugne', lemma: 'leugnen', grammarTag: 'Konjunktiv I condicional generalizante', translation: { pt: 'negue', en: 'denies', es: 'niegue' } }
      ]
    },
    practice: {
      totalXp: 200,
      exercises: [
        {
          id: 'de100-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Transponha a afirmação do cientista para o discurso indireto acadêmico (Konjunktiv I): "Der Forscher sagt: \'Ich habe neue Beweise gefunden.\'"',
            en: 'Transpose to academic indirect speech: "Der Forscher sagt: \'Ich habe neue Beweise gefunden.\'"',
            es: 'Transpón al discurso indirecto académico (Konjunktiv I):'
          },
          options: [
            'Der Forscher sagt, er habe neue Beweise gefunden.',
            'Der Forscher sagt, er hat neue Beweise gefunden.',
            'Der Forscher sagt, er hätte neue Beweise gefunden.',
            'Der Forscher sagt, dass er neue Beweise gefunden hätte.'
          ],
          correctAnswer: 'Der Forscher sagt, er habe neue Beweise gefunden.',
          explanation: {
            pt: 'No discurso indireto rigoroso de nível C1, a 3ª pessoa do singular de "haben" no Konjunktiv I é "er habe" (indicando citação neutra sem juízo de valor). "Er hat" é coloquial indicativo.',
            en: 'In rigorous C1 indirect speech, 3rd person singular of "haben" in Konjunktiv I is "er habe" (neutral reporting). "Er hat" is informal indicative.',
            es: 'En el discurso indirecto formal C1 se emplea el Konjunktiv I "er habe".'
          },
          xp: 100
        }
      ]
    }
  }
};
