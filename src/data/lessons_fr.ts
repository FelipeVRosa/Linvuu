import type { DailyLesson } from '../types';

export const LESSONS_FR: Record<number, DailyLesson> = {
  1: {
    id: 'fr-01',
    day: 1,
    targetLanguage: 'fr',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 1: A Fonética das Vogais Nasais Francesas [ɑ̃, ɔ̃, ɛ̃] e a Mecânica da Liaison Obrigatória',
      en: 'Day 1: French Nasal Vowels [ɑ̃, ɔ̃, ɛ̃] and the Mechanics of Mandatory Liaisons',
      es: 'Día 1: La Fonética de Vocales Nasales [ɑ̃, ɔ̃, ɛ̃] y la Mecánica de la Liaison Obligatoria'
    },
    subtitle: {
      pt: 'O abaixamento do véu palatino sem resíduo consonantal de [n] e os grupos rítmicos da frase francesa.',
      en: 'Lowering the soft palate without consonant [n] release and French rhythmic breath groups.',
      es: 'El descenso del velo del paladar sin residuo de [n] y los grupos rítmicos franceses.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: {
        pt: 'Masterclass: Ressonância Nasal e a Fluidez da Liaison com Foneticista da Sorbonne',
        en: 'Masterclass: Nasal Resonance and Liaison Fluency with Sorbonne Phonetician',
        es: 'Masterclass: Resonancia Nasal y Liaison con Fonetista de la Sorbona'
      },
      nativeSpeaker: 'Prof. Éléonore de Montalembert (Universidade de Paris - Sorbonne)',
      description: {
        pt: 'Aprenda por que no francês nunca se pronuncia o som da consoante "n" ou "m" no final de uma sílaba nasal autêntica.',
        en: 'Learn why French never releases consonant "n" or "m" at the conclusion of true nasal syllables.',
        es: 'Descubre por qué nunca se pronuncia la consonante "n" o "m" en una sílaba nasal francesa.'
      },
      durationMinutes: 21
    },
    phonetics: {
      title: { pt: 'Módulo Fonético: As Três Grandes Vogais Nasais [ɑ̃, ɔ̃, ɛ̃]', en: 'Phonetic Module: Three Major Nasal Vowels', es: 'Módulo Fonético: Las Tres Grandes Vocales Nasales' },
      drillInstructions: {
        pt: 'No francês culto, o fluxo de ar divide-se entre a cavidade oral e nasal simultaneamente. A língua NUNCA encosta no palato nem nos dentes ao pronunciar a vogal nasal.',
        en: 'Airflow splits simultaneously between oral and nasal cavities without tongue contact with teeth or palate.',
        es: 'El flujo de aire se divide entre la cavidad oral y nasal sin que la lengua toque los dientes.'
      },
      rules: [
        {
          symbol: '[ɑ̃] vs [ɔ̃] vs [ɛ̃]',
          name: { pt: 'Triângulo das Nasais Francesas', en: 'French Nasal Triangle', es: 'Triángulo de Nasales Francesas' },
          articulationNotes: { pt: '[ɑ̃] boca bem aberta (vent, blanc). [ɔ̃] lábios arredondados bem fechados (bon, pont). [ɛ̃] lábios estirados (vin, pain).', en: '[ɑ̃] open mouth. [ɔ̃] rounded pursed lips. [ɛ̃] spread lips smile.', es: '[ɑ̃] boca abierta. [ɔ̃] labios redondeados. [ɛ̃] labios estirados.' },
          audioSampleText: 'un bon vin blanc [œ̃ bɔ̃ vɛ̃ blɑ̃]',
          examples: [
            { word: 'un bon vin blanc', ipa: '[œ̃ bɔ̃ vɛ̃ blɑ̃]', translation: { pt: 'um bom vinho branco (as 4 nasais em sequência!)', en: 'a good white wine (all 4 nasals in one phrase)', es: 'un buen vino blanco' } }
          ]
        }
      ]
    },
    grammar: {
      topic: { pt: 'A Estrutura do Sintagma Nominal Francês e o Gênero Inerente', en: 'French Noun Phrase Structure & Gender', es: 'Estructura del Sintagma Nominal Francés' },
      summary: { pt: 'O francês não possui neutro: todos os substantivos são masculinos ou femininos. A marcação de gênero é transmitida primariamente pelos determinantes (le/la, un/une).', en: 'French has no neuter gender: all nouns are masculine or feminine, signified primarily through determiners.', es: 'El francés no tiene neutro: todos los sustantivos son masculinos o femeninos.' },
      sections: [
        {
          heading: { pt: 'Artigos Definidos e a Elisão Obrigatória', en: 'Definite Articles and Mandatory Elision', es: 'Artículos Definidos y Elisión' },
          explanation: { pt: 'Diante de vogal ou "h" mudo, "le" e "la" contraem-se incondicionalmente para l\': l\'homme, l\'amie, l\'enfant.', en: 'Before vowels or mute h, "le" and "la" contract into l\': l\'homme, l\'amie.', es: 'Ante vocal o h muda, "le" y "la" se eliden a l\'.' }
        }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Passeio pelo Quartier Latin', en: 'Immersion: A Stroll in the Latin Quarter', es: 'Inmersión: Paseo por el Barrio Latino' },
      sourceContext: { pt: 'Texto autêntico enfatizando liaisons obrigatórias.', en: 'Text showcasing mandatory liaisons.', es: 'Texto con liaisons obligatorias.' },
      text: 'Les étudiants avancent dans les anciennes rues de Paris. C\'est un bel après-midi d\'automne. Dans un petit café, ils discutent de philosophie et de littérature.',
      tokens: [
        { word: 'Les étudiants', lemma: 'l\'étudiant', grammarTag: 'Liaison obrigatória com som de [z]: [le.ze.ty.djɑ̃]', translation: { pt: 'Os estudantes', en: 'The students', es: 'Los estudiantes' } }
      ]
    },
    practice: {
      totalXp: 120,
      exercises: [
        {
          id: 'fr01-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Em qual das seguintes combinações a "liaison" (ligação com som de [z]) é estritamente obrigatória no francês culto?',
            en: 'In which combination is the liaison with [z] strictly mandatory in standard French?',
            es: '¿En qué combinación es la liaison con [z] estrictamente obligatoria?'
          },
          options: [
            'Les amis [le.za.mi] (artigo plural + substantivo com vogal)',
            'Le garçon intelligent (substantivo singular + adjetivo)',
            'Il mange et il dort (conjunção et nunca faz liaison)',
            'Paris est beau'
          ],
          correctAnswer: 'Les amis [le.za.mi] (artigo plural + substantivo com vogal)',
          explanation: {
            pt: 'Entre determinante (les, des, mes, ces, un) e o substantivo que se segue iniciado por vogal, a liaison é ESTRITAMENTE OBRIGATÓRIA. Jamais faça pausa.',
            en: 'Between a determiner (les, des, ces) and a noun beginning with a vowel, liaison is strictly mandatory in standard French.',
            es: 'Entre determinante y sustantivo iniciado por vocal, la liaison es estrictamente obligatoria.'
          },
          xp: 40
        }
      ]
    }
  },
  2: {
    id: 'fr-02',
    day: 2,
    targetLanguage: 'fr',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 2: A Negação Dupla Envolvente (Ne... pas) e a Inversão do Sujeito Formal',
      en: 'Day 2: The Embracing Negative (Ne... pas) and Formal Subject Inversion',
      es: 'Día 2: La Negación Doble Envolvente (Ne... pas) y la Inversión Formal del Sujeto'
    },
    subtitle: {
      pt: 'A tenaz oracional francesa e a diferença radical entre o registro coloquial oral e a norma culta escrita.',
      en: 'The French negative bracket and the sharp distinction between informal spoken drop and formal C1 prose.',
      es: 'El paréntesis negativo francés y la diferencia entre el habla informal y la prosa formal C1.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: { pt: 'Masterclass: A Negação Erudita e as Interrogações Formais', en: 'Masterclass: Erudite Negation and Inversion', es: 'Masterclass: Negación Erudita' },
      nativeSpeaker: 'Prof. Éléonore de Montalembert',
      description: { pt: 'Domínio das partículas ne... jamais, ne... rien e inversão de sujeito.', en: 'Mastering negative particles.', es: 'Dominio de partículas negativas.' },
      durationMinutes: 18
    },
    phonetics: {
      title: { pt: 'A Elisão Fonética de "Ne" diante de Vogal: N\'', en: 'Phonetic Elision of "Ne"', es: 'Elisión Fonética de "Ne"' },
      drillInstructions: { pt: '"Je ne sais pas" vs. "Il n\'aime pas".', en: 'Practice elision before vowels.', es: 'Practica la elisión ante vocales.' },
      rules: [
        { symbol: '[n‿]', name: { pt: 'Elisão de ne -> n\'', en: 'Elision of ne -> n\'', es: 'Elisión de ne -> n\'' }, articulationNotes: { pt: 'Junte diretamente a consoante n ao início da vogal seguinte.', en: 'Attach consonant n directly to subsequent vowel onset.', es: 'Une la consonante n al inicio de la vocal siguiente.' }, audioSampleText: 'Il n\'écoute rien', examples: [{ word: 'n\'écoute', ipa: '[ne.kut]', translation: { pt: 'não escuta', en: 'does not listen', es: 'no escucha' } }] }
      ]
    },
    grammar: {
      topic: { pt: 'A Estrutura Bipartida da Negação Francesa (Ne + Verbo + Pas/Rien/Jamais)', en: 'Bipartite Negative Structure', es: 'Estructura Bipartita de la Negación' },
      summary: { pt: 'A negação envolve o verbo finito conjugado: "Je ne comprends pas". No registro C1, omitir o "ne" constitui erro crasso.', en: 'In formal C1 French, omission of "ne" is considered an ungrammatical colloquialism.', es: 'En el registro culto C1, omitir "ne" es un error grave.' },
      sections: [
        { heading: { pt: 'Sintaxe da Negação com Tempos Compostos', en: 'Negation with Compound Tenses', es: 'Negación en Tiempos Compuestos' }, explanation: { pt: 'Com o Passé Composé, o bloco negativo abraça APENAS o verbo auxiliar: "Je n\'ai pas compris" (nunca "Je n\'ai compris pas").', en: 'In compound tenses, the negation embraces ONLY the auxiliary verb: "Je n\'ai pas compris".', es: 'En tiempos compuestos abraza SOLO al auxiliar: "Je n\'ai pas compris".' } }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Debate Epistemológico em Paris', en: 'Immersion: Epistemological Debate in Paris', es: 'Inmersión: Debate Epistemológico' },
      sourceContext: { pt: 'Prosa argumentativa em francês acadêmico.', en: 'Scholarly argumentative French prose.', es: 'Prosa argumentativa en francés académico.' },
      text: 'Le chercheur affirme qu\'il ne partage pas cette hypothèse. Selon lui, cette théorie n\'explique rien de manière satisfaisante. Nous ne devons jamais oublier la rigueur empirique.',
      tokens: [
        { word: 'ne partage pas', lemma: 'partager', grammarTag: 'Negação padrão presente', translation: { pt: 'não compartilha', en: 'does not share', es: 'no comparte' } },
        { word: 'n\'explique rien', lemma: 'expliquer', grammarTag: 'Negação negativa com rien (nada)', translation: { pt: 'não explica nada', en: 'explains nothing', es: 'no explica nada' } }
      ]
    },
    practice: {
      totalXp: 130,
      exercises: [
        {
          id: 'fr02-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual é a estrutura correta para "Nós nunca esquecemos" em registro formal C1?',
            en: 'What is the correct formal structure for "We never forget"?',
            es: '¿Cuál es la estructura formal correcta para "Nosotros nunca olvidamos"?'
          },
          options: [
            'Nous n\'oublions jamais.',
            'Nous oublions jamais.',
            'Nous ne jamais oublions.',
            'Nous n\'oublions pas jamais.'
          ],
          correctAnswer: 'Nous n\'oublions jamais.',
          explanation: {
            pt: '"Jamais" substitui "pas". O verbo conjugado fica no meio de "ne" (elisado em n\') e "jamais": "Nous n\'oublions jamais". Colocar "pas jamais" é redundância incorreta.',
            en: '"Jamais" replaces "pas". The finite verb is embraced by n\' and jamais: "Nous n\'oublions jamais".',
            es: '"Jamais" sustituye a "pas". El verbo queda entre n\' y jamais: "Nous n\'oublions jamais".'
          },
          xp: 45
        }
      ]
    }
  },
  3: {
    id: 'fr-03',
    day: 3,
    targetLanguage: 'fr',
    level: 'A1',
    isFree: false, // Paywalled!
    title: {
      pt: 'Dia 3: A Tensão Aspectual: Passé Composé vs. Imparfait na Narrativa Histórica',
      en: 'Day 3: Aspectual Tension: Passé Composé vs. Imparfait in Historical Narrative',
      es: 'Día 3: La Tensión Aspectual: Passé Composé vs. Imparfait en la Narrativa Histórica'
    },
    subtitle: {
      pt: 'A oposição entre ação pontual delimitada e o cenário descritivo durativo; e a concordância do particípio com avoir.',
      en: 'Punctual delimited actions vs. descriptive durative background; and past participle agreement with avoir.',
      es: 'Acción puntual delimitada vs. escenario descriptivo durativo; y concordancia del participio.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: { pt: 'Masterclass C1: A Dialética Temporal no Francês Literário', en: 'Masterclass: Temporal Dialectics in Literary French', es: 'Masterclass: La Dialéctica Temporal' },
      nativeSpeaker: 'Prof. Éléonore de Montalembert',
      description: { pt: 'Conteúdo reservado a membros Linvuu.', en: 'Reserved for Linvuu Members.', es: 'Contenido reservado para miembros Linvuu.' },
      durationMinutes: 26
    },
    phonetics: {
      title: { pt: 'A Oposição [e] (é) vs. [ɛ] (è/ai/imparfait)', en: 'The [e] vs. [ɛ] Phonemic Contrast', es: 'Contraste [e] vs. [ɛ]' },
      drillInstructions: { pt: 'Passé composé (j\'ai parlé [e]) vs. Imparfait (je parlais [ɛ]).', en: 'Practice closed [e] vs open [ɛ].', es: 'Practica [e] cerrada vs [ɛ] abierta.' },
      rules: [
        { symbol: '[e] vs [ɛ]', name: { pt: 'Contraste Aspectual Vocálico', en: 'Vocalic Aspect Contrast', es: 'Contraste Vocálico' }, articulationNotes: { pt: '[e] é tenso e semifechado. [ɛ] abre a mandíbula.', en: '[e] is tense; [ɛ] drops lower jaw.', es: '[e] es tensa; [ɛ] abre la mandíbula.' }, audioSampleText: 'j\'ai aimé vs. j\'aimais', examples: [{ word: 'parlé', ipa: '[paʁ.le]', translation: { pt: 'falado (Passé composé)', en: 'spoken', es: 'hablado' } }, { word: 'parlais', ipa: '[paʁ.lɛ]', translation: { pt: 'falava (Imparfait)', en: 'was speaking', es: 'hablaba' } }] }
      ]
    },
    grammar: {
      topic: { pt: 'Critérios Aspectuais de Passé Composé vs. Imparfait', en: 'Aspectual Criteria of Past Tenses', es: 'Criterios Aspectuales de Tiempos Pasados' },
      summary: { pt: 'O Passé Composé expressa eventos pontuais concluídos com início e fim demarcados. O Imparfait pinta o cenário descritivo de fundo, ações habituais contínuas e estados mentais sem limite temporal explícito.', en: 'Passé Composé denotes punctual, perfected historical events. Imparfait provides continuous atmospheric backdrop.', es: 'Passé Composé para eventos concluidos. Imparfait para fondo descriptivo y hábitos.' },
      sections: [
        { heading: { pt: 'A Regra Áurea de Concordância do Particípio com Avoir', en: 'Past Participle Agreement with Avoir', es: 'Concordancia del Participio con Avoir' }, explanation: { pt: 'Com o auxiliar "avoir", o particípio passado concorda em gênero e número com o objeto direto SOMENTE se esse objeto estiver anteposto ao verbo: "Les lettres qu\'il a écrites".', en: 'With "avoir", the participle agrees in gender and number with the direct object ONLY when the object precedes the verb.', es: 'Con "avoir", el participio solo concuerda si el objeto directo antecede al verbo.' } }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Uma Noite de Inverno na Comédie-Française', en: 'Immersion: Winter Night at Comédie-Française', es: 'Inmersión: Noche de Invierno' },
      sourceContext: { pt: 'Narrativa histórica alternando tempos verbais.', en: 'Historical narrative alternating past tenses.', es: 'Narrativa histórica alternando tiempos pasados.' },
      text: 'Il neigeait doucement sur les boulevards parisiens lorsque la cloche du théâtre sonna. Les spectateurs entraient lentement dans la salle dorée.',
      tokens: [
        { word: 'Il neigeait', lemma: 'neiger', grammarTag: 'Imparfait (cenário atmosférico contínuo)', translation: { pt: 'Nevava suavemente', en: 'It was snowing gently', es: 'Nevaba suavemente' } },
        { word: 'sonna', lemma: 'sonner', grammarTag: 'Passé simple (evento pontual repentino)', translation: { pt: 'tocou / soou', en: 'rang', es: 'sonó' } }
      ]
    },
    practice: {
      totalXp: 150,
      exercises: [
        {
          id: 'fr03-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual frase contém a concordância correta do particípio passado?',
            en: 'Which sentence exhibits correct past participle agreement?',
            es: '¿Qué frase contiene la concordancia correcta del participio?'
          },
          options: [
            'Les pommes que j\'ai mangées étaient délicieuses.',
            'Les pommes que j\'ai mangé étaient délicieuses.',
            'J\'ai mangées les pommes.',
            'Les pommes que j\'ai mangés étaient délicieuses.'
          ],
          correctAnswer: 'Les pommes que j\'ai mangées étaient délicieuses.',
          explanation: {
            pt: 'O objeto direto "que" refere-se a "les pommes" (feminino plural) e precede o verbo conjugado com avoir ("j\'ai mangées"), exigindo a concordância em -es.',
            en: 'The direct object pronoun "que" refers to feminine plural "les pommes" and precedes auxiliary avoir, triggering agreement "-ées".',
            es: 'El objeto directo antecede al verbo con avoir, exigiendo concordancia en femenino plural (-ées).'
          },
          xp: 50
        }
      ]
    }
  }
};
