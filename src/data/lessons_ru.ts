import type { DailyLesson } from '../types';

export const LESSONS_RU: Record<number, DailyLesson> = {
  1: {
    id: 'ru-01',
    day: 1,
    targetLanguage: 'ru',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 1: O Alfabeto Cirílico, Iotação e a Oposição Fonológica Forte/Suave (Твёрдые и Мягкие)',
      en: 'Day 1: Cyrillic Alphabet, Iotation, and the Hard/Soft Phonemic Opposition',
      es: 'Día 1: El Alfabeto Cirílico, Yotación y la Oposición Fonológica Dura/Blanda'
    },
    subtitle: {
      pt: 'A física articulatória da palatalização eslava, o sinal suave (ь) e a leitura autêntica.',
      en: 'The articulatory physics of Slavic palatalization, the soft sign (ь), and authentic reading.',
      es: 'La física articulatoria de la palatalización eslava, el signo blando (ь) y la lectura auténtica.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass: Fonética do Cirílico e Palatalização Eslava com Nativo',
        en: 'Masterclass: Cyrillic Phonetics and Slavic Palatalization with Native Speaker',
        es: 'Masterclass: Fonética del Cirílico y Palatalización Eslava con Nativo'
      },
      nativeSpeaker: 'Prof. Yulia Borodinova (Universidade Estatal de São Petersburgo)',
      description: {
        pt: 'Aprenda a posição do dorso da língua contra o palato duro que divide todas as consoantes russas em pares duros e suaves.',
        en: 'Master the tongue dorsum positioning against the hard palate that divides Russian consonants into paired hard and soft phonemes.',
        es: 'Domina la posición de la lengua contra el paladar que divide las consonantes rusas en duras y blandas.'
      },
      durationMinutes: 22
    },
    phonetics: {
      title: {
        pt: 'Módulo Fonético Obrigatório: A Palatalização das Consoantes Russas',
        en: 'Mandatory Phonetic Module: Palatalization of Russian Consonants',
        es: 'Módulo Fonético Obligatorio: Palatalización de las Consonantes Rusas'
      },
      drillInstructions: {
        pt: 'No russo, 15 pares de consoantes opõem-se pelo traço de palatalização (suavidade). Uma consoante torna-se suave quando seguida pelas vogais suaves (я, е, ё, и, ю) ou pelo sinal suave (ь). Pratique a elevação do dorso da língua!',
        en: 'In Russian, 15 consonant pairs contrast by palatalization (softness). A consonant softens before soft vowels (я, е, ё, и, ю) or the soft sign (ь).',
        es: 'En ruso, 15 pares de consonantes contrastan por palatalización. Una consonante se suaviza ante vocales blandas o el signo blando (ь).'
      },
      rules: [
        {
          symbol: '[m] vs. [mʲ]',
          name: { pt: 'Contraste M Duro vs. M Suave (Palatalizado)', en: 'Hard M vs. Soft M', es: 'M Dura vs. M Blanda' },
          articulationNotes: { pt: 'Em [mʲ], arqueie a língua em direção ao céu da boca enquanto os lábios se tocam.', en: 'In [mʲ], arch the tongue dorsum toward hard palate as lips close.', es: 'En [mʲ], arquea la lengua hacia el paladar mientras cierras los labios.' },
          audioSampleText: 'мат vs. мать; мел vs. мол',
          examples: [
            { word: 'мат', ipa: '[mat]', translation: { pt: 'palavrão / tapete de ginástica (T duro)', en: 'obscene language / mat', es: 'estera' } },
            { word: 'мать', ipa: '[matʲ]', translation: { pt: 'mãe (T suave com sinal ь)', en: 'mother (soft t)', es: 'madre' }, explanation: { pt: 'O sinal suave ь transforma o significado de "tapete/palavrão" em "mãe"!', en: 'The soft sign ь transforms meaning completely from mat to mother!', es: 'El signo ь cambia completamente el significado.' } }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'A Arquitetura Gráfica do Cirílico e a Regra das 10 Letras Vocálicas',
        en: 'Cyrillic Graphic Architecture and the 10 Vowel Letters Rule',
        es: 'Arquitectura Gráfica del Cirílico y la Regla de las 10 Letras Vocálicas'
      },
      summary: {
        pt: 'O russo possui 5 fonemas vocálicos básicos, mas usa 10 letras para representá-los em pares: As "Vogais Duras" (а, э, ы, о, у) que indicam que a consoante precedente é dura; e as "Vogais Suaves/Iotadas" (я, е, и, ё, ю) que indicam palatalização da consoante precedente.',
        en: 'Russian has 5 basic vowel phonemes but utilizes 10 letters organized in parallel hard/soft pairs. Hard: (а, э, ы, о, у). Soft/Iotated: (я, е, и, ё, ю).',
        es: 'El ruso tiene 5 fonemas vocálicos pero 10 letras organizadas en pares duros y blandos.'
      },
      sections: [
        {
          heading: { pt: 'Tabela dos Pares Vocálicos Russos', en: 'Russian Vowel Pairs Paradigm', es: 'Pares Vocálicos Rusos' },
          explanation: {
            pt: 'Memorize os 5 pares verticais. A letra suave amacia a consoante anterior, ou se estiver no início de palavra/após vogal, pronuncia-se com um [j] inicial (iotação): я = [ja], е = [je], ё = [jo], ю = [ju].',
            en: 'Memorize the 5 vertical pairs. Soft vowels palatalize preceding consonants or carry initial [j] when word-initial.',
            es: 'Memoriza los 5 pares verticales. La vocal blanda suaviza la consonante previa o lleva [j] al inicio de palabra.'
          },
          tables: [
            {
              caption: { pt: 'Pares Vocálicos Paralelos Duro / Suave', en: 'Hard / Soft Vowel Pairs', es: 'Pares Vocálicos Duro / Blando' },
              headers: [
                { pt: 'Série Dura (preserva dureza)', en: 'Hard Series', es: 'Serie Dura' },
                { pt: 'Série Suave (palataliza / iota)', en: 'Soft Series', es: 'Serie Blanda' },
                { pt: 'Valor Fonético Iotado', en: 'Iotated Value', es: 'Valor Yotado' }
              ],
              rows: [
                ['А а', 'Я я', '[ja] / [ʲa]'],
                ['Э э', 'Е е', '[je] / [ʲe]'],
                ['Ы ы', 'И и', '[i] / [ʲi]'],
                ['О о', 'Ё ё (sempre tônico!)', '[jo] / [ʲo]'],
                ['У у', 'Ю ю', '[ju] / [ʲu]']
              ]
            }
          ]
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Primeiro Encontro em Moscou', en: 'Immersion: First Encounter in Moscow', es: 'Inmersión: Primer Encuentro en Moscú' },
      sourceContext: { pt: 'Diálogo autêntico em cirílico padrão.', en: 'Authentic dialogue in standard Cyrillic.', es: 'Diálogo auténtico en cirílico estándar.' },
      text: 'Здравствуйте! Меня зовут Антон. Я студент Московского государственного университета. Я изучаю русскую литературу и философию. А как вас зовут?',
      tokens: [
        { word: 'Здравствуйте', lemma: 'здравствовать', grammarTag: 'Imperativo formal (a letra в é muda!)', translation: { pt: 'Olá / Saúde a você', en: 'Hello / Greetings', es: 'Hola formal' } },
        { word: 'Меня зовут', lemma: 'звать', grammarTag: 'Acusativo de меня + 3ª pess. plural de зовут', translation: { pt: 'Chamo-me (lit.: Chamam-me)', en: 'My name is (lit.: They call me)', es: 'Me llamo' } }
      ]
    },
    practice: {
      totalXp: 120,
      exercises: [
        {
          id: 'ru01-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual é o papel fundamental do sinal suave (ь - мягкий знак) na palavra russa "мать"?',
            en: 'What is the crucial role of the soft sign (ь) in the Russian word "мать"?',
            es: '¿Cuál es el papel del signo blando (ь) en "мать"?'
          },
          options: [
            'Ele não possui som próprio, mas ordena que a consoante precedente (т) seja pronunciada de forma palatalizada / suave [tʲ].',
            'Ele representa o som de um "i" longo tônico.',
            'Ele indica que a palavra é masculina.',
            'Ele torna a consoante т muda.'
          ],
          correctAnswer: 'Ele não possui som próprio, mas ordena que a consoante precedente (т) seja pronunciada de forma palatalizada / suave [tʲ].',
          explanation: {
            pt: 'Exatamente. O sinal suave ь é um grafema puramente diacrítico: ele não soa por si só, mas transfere palatalização para a consoante anterior.',
            en: 'Correct. The soft sign has no phoneme of its own; it instructs the preceding consonant to soften (palatalize).',
            es: 'Correcto. El signo blando no tiene sonido propio; indica la palatalización de la consonante precedente.'
          },
          xp: 40
        }
      ]
    }
  },
  2: {
    id: 'ru-02',
    day: 2,
    targetLanguage: 'ru',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 2: A Redução Vocálica (Аканье e Иканье) e a Frase Nominal com Cópula Zero (Нулевая связка)',
      en: 'Day 2: Vowel Reduction (Akan\'e / Ikan\'e) and the Zero-Copula Nominal Sentence',
      es: 'Día 2: La Reducción Vocálica (Akan\'e e Ikan\'e) y la Frase Nominal con Cópula Cero'
    },
    subtitle: {
      pt: 'Por que "молоко" soa como "малако" e como expressar "eu sou / isto é" sem verbo no presente.',
      en: 'Why "молоко" is pronounced "malako" and how to construct present tense equative clauses without copula.',
      es: 'Por qué "молоко" se pronuncia "malako" y cómo construir oraciones copulativas en presente sin verbo.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass: O Acento Tônico Russo e a Dança das Vogais Reduzidas',
        en: 'Masterclass: Russian Stress and Vowel Reduction Mechanics',
        es: 'Masterclass: El Acento Ruso y la Reducción Vocálica'
      },
      nativeSpeaker: 'Prof. Mikhail Kazantsev (Moscou)',
      description: {
        pt: 'O acento tônico no russo é móvel, imprevisível e altera radicalmente o timbre das vogais não tônicas.',
        en: 'Russian word stress is dynamic and shifts vowel timbres dramatically.',
        es: 'El acento en ruso es dinámico y altera radicalmente el timbre vocálico.'
      },
      durationMinutes: 19
    },
    phonetics: {
      title: {
        pt: 'Módulo Fonético: Akan\'e (Аканье) e Ikan\'e (Иканье)',
        en: 'Phonetic Module: Akan\'e and Ikan\'e Phonological Rules',
        es: 'Módulo Fonético: Las Reglas de Akan\'e e Ikan\'e'
      },
      drillInstructions: {
        pt: 'A letra "O" russa SÓ soa como [o] quando está sob a tônica (udarenie). Em qualquer sílaba átona, sofre redução: imediatamente antes da tônica vira [ɐ] (um "a" breve); em outras posições vira [ə] (schwa). As letras "e" e "я" átonas reduzem para [ɪ] (ikan\'e).',
        en: 'Russian "O" only sounds like [o] when stressed. In unstressed syllables it reduces to [ɐ] or [ə]. Letters "e" and "я" reduce to [ɪ].',
        es: 'La letra "O" solo suena como [o] bajo el acento. Átona se reduce a [ɐ] o [ə]. Las letras "e" y "я" se reducen a [ɪ].'
      },
      rules: [
        {
          symbol: 'O átono -> [ɐ] / [ə]',
          name: { pt: 'Redução do O (Akan\'e)', en: 'Akan\'e Phenomenon', es: 'Fenómeno de Akan\'e' },
          articulationNotes: { pt: 'Pronuncie "молоко" com o acento na última sílaba: [məlɐˈko].', en: 'Pronounce "молоко" with final stress: [məlɐˈko].', es: 'Pronuncia "молоко" con acento en la última sílaba: [məlɐˈko].' },
          audioSampleText: 'молоко, хорошо, Москва, окно',
          examples: [
            { word: 'Москва', ipa: '[mɐsˈkva]', translation: { pt: 'Moscou (note o O átono soando como A)', en: 'Moscow', es: 'Moscú' } },
            { word: 'хорошо', ipa: '[xərɐˈʂo]', translation: { pt: 'bem / ótimo (o último O é tônico, os dois primeiros são reduzidos)', en: 'good / well', es: 'bien' } }
          ]
        }
      ]
    },
    grammar: {
      topic: {
        pt: 'A Cópula Zero no Presente e a Estrutura Existencial "У меня есть"',
        en: 'Zero Copula in Present Tense and the Existential Construction "У меня есть"',
        es: 'La Cópula Cero en Presente y la Construcción Existencial "У меня есть"'
      },
      summary: {
        pt: 'O verbo ser/estar (быть) não é empregado no tempo presente no russo padrão moderno. Em vez de "Eu sou professor", diz-se simplesmente "Я преподаватель" (com cópula zero). E a posse não usa "ter", mas a locução "Junto a mim há": "У меня есть книга" (Genitivo com preposição у + Nominativo do objeto possuído).',
        en: 'The verb "быть" (to be) is omitted in the present tense (zero copula). Possession is expressed not by "to have", but existentially: "У меня есть книга" (Prep. У + Genitive pronoun + есть + Nominative noun).',
        es: 'El verbo "быть" (ser/estar) se omite en presente. La posesión se expresa: "У меня есть..." (Preposición у + Genitivo + есть + Nominativo).'
      },
      sections: [
        {
          heading: { pt: 'A Construção de Posse "У + Genitivo + есть + Nominativo"', en: 'Possession Construction Structure', es: 'Estructura de Posesión' },
          explanation: {
            pt: 'O sujeito sintático em "У меня есть книга" é a própria palavra "книга" (Nominativo)! "У меня" é um adjunto adverbial de lugar/pessoa no caso Genitivo.',
            en: 'The syntactic subject of "У меня есть книга" is actually "книга" in the Nominative case! "У меня" is an adverbial modifier in the Genitive.',
            es: '¡El sujeto sintáctico de "У меня есть книга" es "книга" en Nominativo!'
          }
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Em Casa em São Petersburgo', en: 'Immersion: At Home in Saint Petersburg', es: 'Inmersión: En Casa en San Petersburgo' },
      sourceContext: { pt: 'Cena cotidiana demonstrando a cópula zero e a posse existencial.', en: 'Everyday dialogue demonstrating zero copula.', es: 'Escena cotidiana mostrando la cópula cero.' },
      text: 'Это моя комната. Вот большой стол и удобное кресло. У меня есть новый словарь и старая книга. Я студент, а мой друг — инженер.',
      tokens: [
        { word: 'Это', lemma: 'это', grammarTag: 'Pronome demonstrativo neutro (Isto é)', translation: { pt: 'Isto é', en: 'This is', es: 'Esto es' } },
        { word: 'У меня есть', lemma: 'у + genitivo + есть', grammarTag: 'Construção existencial de posse', translation: { pt: 'Eu tenho (lit.: Junto a mim há)', en: 'I have', es: 'Tengo' } }
      ]
    },
    practice: {
      totalXp: 130,
      exercises: [
        {
          id: 'ru02-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Como se diz "Eu sou linguista" em russo no tempo presente?',
            en: 'How do you say "I am a linguist" in Russian in the present tense?',
            es: '¿Cómo se dice "Yo soy lingüista" en ruso en presente?'
          },
          options: [
            'Я лингвист. (com cópula zero, sem verbo ser no presente)',
            'Я есть лингвист.',
            'Я быть лингвист.',
            'Я являться лингвист.'
          ],
          correctAnswer: 'Я лингвист. (com cópula zero, sem verbo ser no presente)',
          explanation: {
            pt: 'No russo contemporâneo padrão, a cópula do verbo "быть" no presente caiu em desuso total. Dizer "Я есть лингвист" soa artificial ou arcaico bíblico.',
            en: 'Standard Russian omits the copular verb in the present tense. "Я есть лингвист" is an artificial calque.',
            es: 'En ruso contemporáneo se usa la cópula cero: "Я лингвист".'
          },
          xp: 50
        }
      ]
    }
  },
  3: {
    id: 'ru-03',
    day: 3,
    targetLanguage: 'ru',
    level: 'A1',
    isFree: false, // Paywall protected!
    title: {
      pt: 'Dia 3: O Caso Prepositivo (Предложный падеж) e a Semântica Espacial de В e НА',
      en: 'Day 3: The Prepositional Case and Spatial Semantics of В and НА',
      es: 'Día 3: El Caso Prepositivo y la Semántica Espacial de В y НА'
    },
    subtitle: {
      pt: 'A desinência -e e o critério cognitivo entre recipientes fechados (в) e superfícies abertas / eventos (на).',
      en: 'The inflectional ending -e and cognitive distinction between enclosed containers (в) and surfaces/events (на).',
      es: 'La terminación -e y el criterio entre recipientes cerrados (в) y superficies/eventos (на).'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass: O Caso Prepositivo e os Mistérios de В vs. НА com Professor Nativo',
        en: 'Masterclass: Prepositional Case and В vs. НА with Native Professor',
        es: 'Masterclass: Caso Prepositivo y В vs. НА'
      },
      nativeSpeaker: 'Prof. Andrei Voronin (Universidade de São Petersburgo)',
      description: {
        pt: 'Conteúdo reservado a subscritores Linvuu. O primeiro caso flexional russo desvendado com rigor.',
        en: 'Reserved for Linvuu Subscribers.',
        es: 'Contenido reservado para suscriptores Linvuu.'
      },
      durationMinutes: 25
    },
    phonetics: {
      title: { pt: 'Articulação da Desinência -e e Assimilação de Preposições Monoconsonânticas (в, к, с)', en: 'Assimilation of Proclitic Prepositions', es: 'Asimilación de Preposiciones' },
      drillInstructions: { pt: 'A preposição "в" funde-se foneticamente com a palavra seguinte sem pausa.', en: 'Preposition "в" becomes an acoustic proclitic attached to the noun.', es: 'La preposición "в" se une a la palabra siguiente.' },
      rules: [
        { symbol: '[v-]', name: { pt: 'Preposição Proclítica', en: 'Proclitic Preposition', es: 'Preposición Proclítica' }, articulationNotes: { pt: 'Diante de consoante surda, "в" soa como [f]. Diante de sonora, soa como [v].', en: 'Before voiceless consonants, "в" devoices to [f].', es: 'Ante consonante sorda se ensordece a [f].' }, audioSampleText: 'в Москве [vmɐsˈkvʲe]; в Петербурге [fpʲɪtʲɪrˈburɡʲɪ]', examples: [{ word: 'в Москве', ipa: '[vmɐsˈkvʲe]', translation: { pt: 'em Moscou', en: 'in Moscow', es: 'en Moscú' } }] }
      ]
    },
    grammar: {
      topic: { pt: 'O Caso Prepositivo: Onde? (Где?)', en: 'Prepositional Case: Where? (Где?)', es: 'Caso Prepositivo: ¿Dónde? (Где?)' },
      summary: { pt: 'O caso prepositivo é o único caso do russo que NUNCA pode ser usado sem preposição (por isso chama-se predlozhny). Responde à pergunta "Где?" (Onde?). A grande maioria dos substantivos masculinos, femininos e neutros recebe a terminação -е.', en: 'The prepositional case can never occur without a preposition. Most nouns take -е.', es: 'El caso prepositivo nunca se usa sin preposición. La mayoría de los sustantivos reciben la terminación -е.' },
      sections: [
        {
          heading: { pt: 'Oposição Cognitiva: В (recipiente/país/cidade) vs. НА (superfície/ilha/evento)', en: 'Cognitive Distinction: В vs. НА', es: 'Distinción Cognitiva: В vs. НА' },
          explanation: { pt: 'Use В para espaços fechados (в комнате, в музее). Use НА para superfícies planas (на столе) e eventos/atividades (на концерте, на лекции, на работе).', en: 'Use В for enclosed volumes; use НА for surfaces and dynamic social events.', es: 'Usa В para espacios cerrados; usa НА para superficies y eventos.' }
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Dia na Universidade de São Petersburgo', en: 'Immersion: At St. Petersburg University', es: 'Inmersión: En la Universidad' },
      sourceContext: { pt: 'Texto repleto de termos no caso prepositivo.', en: 'Text rich in prepositional case forms.', es: 'Texto con formas en caso prepositivo.' },
      text: 'Сейчас Антон находится в университете. Он сидит на интересной лекции по истории, а затем будет заниматься в библиотеке.',
      tokens: [
        { word: 'в университете', lemma: 'университет', grammarTag: 'Prepositivo singular masculino (-е)', translation: { pt: 'na universidade', en: 'at the university', es: 'en la universidad' } },
        { word: 'на интересной лекции', lemma: 'интересная лекция', grammarTag: 'Prepositivo feminino com terminação -ии -> -ии', translation: { pt: 'numa palestra interessante', en: 'at an interesting lecture', es: 'en una conferencia interesante' } }
      ]
    },
    practice: {
      totalXp: 140,
      exercises: [
        {
          id: 'ru03-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual preposição e terminação completam a frase: "Профессор сейчас ___ (работа / f) [evento/atividade]?"',
            en: 'Which preposition and ending complete: "Профессор сейчас ___ (работа)?"',
            es: '¿Qué preposición y terminación completan la frase?'
          },
          options: [
            'на работе',
            'в работе',
            'на работа',
            'в работу'
          ],
          correctAnswer: 'на работе',
          explanation: {
            pt: 'Atividades e locais de trabalho socialmente constituídos regem a preposição "НА" no caso prepositivo: "на работе".',
            en: 'Social activities and events strictly govern "НА" in the prepositional case: "на работе".',
            es: 'Las actividades sociales rigen "НА" en caso prepositivo: "на работе".'
          },
          xp: 50
        }
      ]
    }
  }
};
