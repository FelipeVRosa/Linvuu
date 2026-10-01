import type { DailyLesson } from '../types';

export const LESSONS_ES: Record<number, DailyLesson> = {
  1: {
    id: 'es-01',
    day: 1,
    targetLanguage: 'es',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 1: Alófonos Espanhóis [b/β, d/ð, g/ɣ] e a Vibração Múltipla [r] vs. Simples [ɾ]',
      en: 'Day 1: Spanish Approximant Allophones [b/β, d/ð, g/ɣ] and Trill [r] vs. Tap [ɾ]',
      es: 'Día 1: Alófonos Españoles [b/β, d/ð, g/ɣ] y la Vibración Múltiple [r] vs. Simple [ɾ]'
    },
    subtitle: {
      pt: 'A física da pronúncia nativa real: o enfraquecimento consonantal intervocálico e a isocronia silábica.',
      en: 'Real native pronunciation physics: intervocalic consonant weakening and syllable-timed cadence.',
      es: 'La física de la pronunciación nativa real: debilitamiento intervocálico y la isocronía silábica.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: { pt: 'Masterclass: Fonética Acústica Espanhola com Foneticista da Universidade de Salamanca', en: 'Masterclass: Spanish Acoustic Phonetics with Salamanca Phonetician', es: 'Masterclass: Fonética Acústica Española' },
      nativeSpeaker: 'Prof. Dr. Santiago Valenzuela (Universidade de Salamanca)',
      description: { pt: 'Por que em "nada" o D quase não encosta nos dentes e a diferença fonêmica entre pero e perro.', en: 'Why D in "nada" is an approximant and the phonemic difference between pero and perro.', es: 'Por qué en "nada" la D es aproximante y la diferencia entre pero y perro.' },
      durationMinutes: 20
    },
    phonetics: {
      title: { pt: 'Módulo Fonético: Os Três Alófonos Fricativos/Aproximantes [β, ð, ɣ]', en: 'Phonetic Module: Spanish Approximants [β, ð, ɣ]', es: 'Módulo Fonético: Alófonos Aproximantes [β, ð, ɣ]' },
      drillInstructions: {
        pt: 'Em espanhol, as letras b/v, d, g SÓ são oclusivas duras [b, d, g] no início absoluto de fala ou após nasal/lateral. Entre vogais, os órgãos articulatórios NUNCA se fecham completamente: o ar continua fluindo suavemente em [β, ð, ɣ].',
        en: 'In Spanish, b/v, d, g are stops ONLY utterance-initially or after nasals/laterals. Intervocalically they become soft approximants [β, ð, ɣ].',
        es: 'En español, b/v, d, g solo son oclusivas al inicio absoluto o tras nasal/lateral. Entre vocales son aproximantes [β, ð, ɣ].'
      },
      rules: [
        {
          symbol: '[ð] (D intervocálico)',
          name: { pt: 'Fricativa Dental Sonora', en: 'Voiced Dental Approximant', es: 'Aproximante Dental Sonora' },
          articulationNotes: { pt: 'A ponta da língua apenas se aproxima dos incisivos superiores sem encostar com força, igual ao "th" inglês de "this".', en: 'Tongue tip approaches upper incisors without full blockage, like "th" in "this".', es: 'La lengua se acerca a los incisivos superiores sin oclusión brusca.' },
          audioSampleText: 'nada, todo, cada, verdad',
          examples: [
            { word: 'nada', ipa: '[ˈna.ða]', translation: { pt: 'nada (o segundo d não bate ocluido)', en: 'nothing', es: 'nada' } },
            { word: 'perro vs. pero', ipa: '[ˈpe.ro] vs. [ˈpe.ɾo]', translation: { pt: 'cão (múltipla) vs. mas (simples)', en: 'dog (trill) vs. but (tap)', es: 'perro vs. pero' } }
          ]
        }
      ]
    },
    grammar: {
      topic: { pt: 'A Arquitetura dos Artigos Espanhóis e o Neutro Invariável "Lo"', en: 'Spanish Article Architecture and Neuter "Lo"', es: 'Arquitectura de Artículos y el Neutro "Lo"' },
      summary: { pt: 'O espanhol possui artigos definidos masculinos (el, los) e femininos (la, las) — e um determinante abstrato neutro fundamental: "lo" (lo bueno, lo difícil, lo que pienso).', en: 'Spanish features masculine and feminine articles, plus the unique neuter abstract particle "lo".', es: 'El español tiene el, la, los, las y el neutro sustantivador "lo".' },
      sections: [
        { heading: { pt: 'O Neutro "Lo" como Nominalizador Abstrato', en: 'Neuter "Lo" as Abstract Nominalizer', es: 'El Neutro "Lo" como Nominalizador' }, explanation: { pt: '"Lo" NUNCA acompanha um substantivo diretamente. Ele é usado antes de adjetivos e particípios para extrair o conceito abstrato essencial: "Lo importante es comprender".', en: '"Lo" never modifies a noun directly. It precedes adjectives to extract the pure abstract concept.', es: '"Lo" nunca acompaña a un sustantivo directamente. Sustantiva adjetivos: "Lo importante".' } }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Encontro na Plaza Mayor de Salamanca', en: 'Immersion: Plaza Mayor in Salamanca', es: 'Inmersión: Plaza Mayor' },
      sourceContext: { pt: 'Crônica de observação em espanhol literário.', en: 'Observational prose in literary Spanish.', es: 'Crónica en español literario.' },
      text: 'Bajo los arcos dorados de la plaza, los estudiantes debaten con pasión. Lo fascinante de esta ciudad no es solo su historia milenaria, sino la precisión con que se articulan las ideas en sus aulas.',
      tokens: [
        { word: 'Lo fascinante', lemma: 'lo + adjetivo', grammarTag: 'Neutro abstrato substantivador', translation: { pt: 'O que há de fascinante / O fascinante', en: 'The fascinating thing / What is fascinating', es: 'Lo fascinante' } }
      ]
    },
    practice: {
      totalXp: 120,
      exercises: [
        {
          id: 'es01-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Qual é a função gramatical correta da palavra "lo" na frase "Lo difícil es mantener la disciplina"?',
            en: 'What is the grammatical function of "lo" in "Lo difícil es mantener la disciplina"?',
            es: '¿Cuál es la función gramatical de "lo" en "Lo difícil es mantener la disciplina"?'
          },
          options: [
            'Artigo neutro substantivador que transforma o adjetivo num conceito abstrato.',
            'Artigo definido masculino em substituição a "el".',
            'Pronome de objeto direto.',
            'Pronome possessivo arcaico.'
          ],
          correctAnswer: 'Artigo neutro substantivador que transforma o adjetivo num conceito abstrato.',
          explanation: {
            pt: '"Lo" seguido de adjetivo ("lo difícil", "lo bueno") atua como um nominalizador neutro abstrato. Não pode ser usado com substantivos concretos.',
            en: '"Lo" preceding an adjective operates as an abstract neuter nominalizer.',
            es: '"Lo" ante adjetivo funciona como nominalizador neutro abstracto.'
          },
          xp: 40
        }
      ]
    }
  },
  2: {
    id: 'es-02',
    day: 2,
    targetLanguage: 'es',
    level: 'A1',
    isFree: true,
    title: {
      pt: 'Dia 2: A Distinção Ontológica Fundamental: Ser (Essência) vs. Estar (Circunstância)',
      en: 'Day 2: The Fundamental Ontological Distinction: Ser (Essence) vs. Estar (Circumstance)',
      es: 'Día 2: La Distinción Ontológica Fundamental: Ser (Esencia) vs. Estar (Circunstancia)'
    },
    subtitle: {
      pt: 'A metafísica das cópulas hispânicas e as alterações semânticas completas de adjetivos pareados.',
      en: 'Metaphysics of Hispanic copulas and semantic mutations of paired adjectives.',
      es: 'Metafísica de las cópulas hispánicas y mutaciones semánticas completas de adjetivos emparejados.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: { pt: 'Masterclass: Ontologia e Sintaxe de Ser vs. Estar', en: 'Masterclass: Ontology and Syntax of Ser vs. Estar', es: 'Masterclass: Ser vs. Estar' },
      nativeSpeaker: 'Prof. Dr. Santiago Valenzuela',
      description: { pt: 'Análise minuciosa de por que ser listo significa ser inteligente, mas estar listo significa estar pronto.', en: 'Detailed analysis of adjective shifts with ser and estar.', es: 'Análisis minucioso del cambio de significado con ser y estar.' },
      durationMinutes: 22
    },
    phonetics: {
      title: { pt: 'A Articulação do Sibilante Espanhol Peninsular [s̺] Apicoalveolar', en: 'Peninsular Spanish Apico-Alveolar [s̺]', es: 'La [s̺] Apicoalveolar Peninsular' },
      drillInstructions: { pt: 'A ponta da língua encosta nos alvéolos superiores em concha, criando um chiado nobre.', en: 'Concave tongue tip against alveolar ridge.', es: 'Punta de la lengua en los alvéolos superiores.' },
      rules: [
        { symbol: '[s̺]', name: { pt: 'S Apicoalveolar Castellano', en: 'Apico-Alveolar S', es: 'S Apicoalveolar' }, articulationNotes: { pt: 'Não é um "s" dental plano latino-americano; tem um timbre quase de leve chiado.', en: 'Distinctive peninsular acoustic character.', es: 'Timbre acústico característico peninsular.' }, audioSampleText: 'saber, sentir, estar, siempre', examples: [{ word: 'estar', ipa: '[es̺ˈtaɾ]', translation: { pt: 'estar', en: 'to be (state)', es: 'estar' } }] }
      ]
    },
    grammar: {
      topic: { pt: 'Critérios Rígidos de Seleção entre Ser e Estar', en: 'Strict Criteria for Ser vs. Estar', es: 'Criterios de Selección: Ser vs. Estar' },
      summary: { pt: 'SER expressa identidade ontológica intrínseca, origem, matéria, profissão e localização temporal de eventos ("La fiesta es a las ocho"). ESTAR expressa localização espacial física ("El libro está en la mesa"), estado resultante de uma transformação circunstancial e percepção subjetiva do falante.', en: 'Ser denotes inherent ontological essence, origin, materials, professions, and temporal event location. Estar denotes spatial physical location, resultant conditions, and subjective perception.', es: 'Ser expresa esencia ontológica, origen, profesión y tiempo de eventos. Estar expresa localización espacial y estados circunstanciales resultantes.' },
      sections: [
        { heading: { pt: 'Tabela de Mutações Semânticas Radicais', en: 'Adjective Semantic Shifts', es: 'Cambios Semánticos de Adjetivos' }, explanation: { pt: 'Muitos adjetivos mudam de significado: ser listo (inteligente) / estar listo (pronto); ser rico (abastado) / estar rico (saboroso); ser bueno (bondoso) / estar bueno (atraente/com boa saúde).', en: 'Semantic shifts: ser listo (clever) / estar listo (ready); ser rico (wealthy) / estar rico (delicious).', es: 'Cambios: ser listo (inteligente) / estar listo (preparado); ser rico (adinerado) / estar rico (sabroso).' } }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Retrato Psicológico em Madri', en: 'Immersion: A Psychological Portrait in Madrid', es: 'Inmersión: Retrato Psicológico' },
      sourceContext: { pt: 'Texto descritivo contrastando ser e estar.', en: 'Text contrasting ser and estar.', es: 'Texto contrastando ser y estar.' },
      text: 'Elena es una destacada investigadora de biotecnología. Es una persona muy reflexiva y serena. Sin embargo, hoy está extremadamente inquieta y preocupada porque los resultados de su experimento están a punto de publicarse.',
      tokens: [
        { word: 'Es una persona', lemma: 'ser', grammarTag: 'Identidade intrínseca permanente', translation: { pt: 'É uma pessoa (essência)', en: 'She is a person (essence)', es: 'Es una persona' } },
        { word: 'está ... inquieta', lemma: 'estar', grammarTag: 'Estado emocional passageiro circunstancial', translation: { pt: 'está inquieta (circunstância presente)', en: 'is agitated (state)', es: 'está inquieta' } }
      ]
    },
    practice: {
      totalXp: 130,
      exercises: [
        {
          id: 'es02-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Complete a oração: "El banquete ___ en el jardín del palacio, pero la vajilla de oro ___ guardada en la caja fuerte."',
            en: 'Complete: "El banquete ___ en el jardín, pero la vajilla ___ guardada en la caja fuerte."',
            es: 'Completa con la cópula adecuada:'
          },
          options: [
            'es (evento tem lugar) / está (localização física e estado resultante)',
            'está / es',
            'es / es',
            'está / está'
          ],
          correctAnswer: 'es (evento tem lugar) / está (localização física e estado resultante)',
          explanation: {
            pt: 'REGRA FUNDAMENTAL: A localização de EVENTOS (celebrações, concertos, banquetes) faz-se com SER ("El banquete es en el jardín"). A localização e estado de objetos físicos faz-se com ESTAR ("La vajilla está guardada").',
            en: 'Events take SER for location ("El banquete es en el jardín"). Physical objects and resultant states take ESTAR ("La vajilla está guardada").',
            es: 'La celebración de EVENTOS se expresa con SER. La localización de objetos físicos con ESTAR.'
          },
          xp: 45
        }
      ]
    }
  },
  3: {
    id: 'es-03',
    day: 3,
    targetLanguage: 'es',
    level: 'A1',
    isFree: false, // Paywall protected!
    title: {
      pt: 'Dia 3: A Demarcação Teleológica: Por vs. Para e a Duplicação Pronominal do Objeto',
      en: 'Day 3: Teleological Demarcation: Por vs. Para and Clitic Pronoun Reduplication',
      es: 'Día 3: La Demarcación Teleológica: Por vs. Para y la Reduplicación Pronominal del Objeto'
    },
    subtitle: {
      pt: 'Causa motriz eficiente vs. finalidade projetada no futuro; e a obrigatoriedade da reduplicação clítica ("A Juan le di el libro").',
      en: 'Motive cause vs. prospective goal; and the syntax of clitic doubling in standard Spanish.',
      es: 'Causa motriz vs. finalidad prospectiva; y la sintaxis de la reduplicación de clíticos.'
    },
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      title: { pt: 'Masterclass C1: A Lógica Implacável de Por e Para com Nativo', en: 'Masterclass: Implacable Logic of Por and Para', es: 'Masterclass: La Lógica de Por y Para' },
      nativeSpeaker: 'Prof. Dr. Santiago Valenzuela',
      description: { pt: 'Conteúdo reservado a subscritores Linvuu Kosmos.', en: 'Reserved for Kosmos Subscribers.', es: 'Contenido reservado para suscriptores Kosmos.' },
      durationMinutes: 24
    },
    phonetics: {
      title: { pt: 'A Enclise Pronominal e o Deslocamento do Acento Gráfico (dámelo)', en: 'Pronominal Enclisis and Accent Shifts', es: 'Enclisis Pronominal y Acentuación' },
      drillInstructions: { pt: 'Quando pronomes clíticos se unem ao imperativo ou gerúndio, a palavra ganha acento gráfico obrigatório.', en: 'Enclitic pronouns trigger written stress markers.', es: 'Los clíticos enclíticos exigen tilde gráfica.' },
      rules: [
        { symbol: '[ˈda.me.lo]', name: { pt: 'Sobreesdrújula', en: 'Stress on Antepenultimate', es: 'Sobresdrújula' }, articulationNotes: { pt: 'A tônica se mantém firme na raiz verbal.', en: 'Stress stays locked on root.', es: 'El acento se mantiene en la raíz.' }, audioSampleText: 'dámelo, diciéndomelo', examples: [{ word: 'dámelo', ipa: '[ˈda.me.lo]', translation: { pt: 'dá-mo / entrega-mo', en: 'give it to me', es: 'dámelo' } }] }
      ]
    },
    grammar: {
      topic: { pt: 'Vetores Semânticos Opostos: POR (Origem/Causa) vs. PARA (Destino/Meta)', en: 'POR vs. PARA Semantic Vectors', es: 'POR vs. PARA' },
      summary: { pt: 'POR olha para trás: é a causa, o motivo, o meio, o autor da passiva, o tempo aproximado e o preço. PARA olha para frente: é o destino final, o prazo fatal limite (dead-line), o destinatário e a finalidade.', en: 'POR points backwards: cause, motive, agent. PARA points forwards: destination, deadline, recipient, purpose.', es: 'POR mira hacia atrás (causa, motivo). PARA mira hacia adelante (meta, plazo, destinatario).' },
      sections: [
        { heading: { pt: 'A Duplicação Pronominal do Objeto Indireto', en: 'Clitic Indirect Object Doubling', es: 'Reduplicación del Objeto Indirecto' }, explanation: { pt: 'No espanhol padrão culto, quando o objeto indireto está explícito na frase ("a mis padres"), a presença do pronome clítico "les" é OBRIGATÓRIA: "Les escribí una carta a mis padres" (dizer apenas "Escribí una carta a mis padres" é considerado agramatical ou incompleto).', en: 'In standard Spanish, explicit indirect objects demand clitic doubling: "Les escribí a mis padres".', es: 'La presencia del clítico es obligatoria: "Les escribí a mis padres".' } }
      ]
    },
    immersion: {
      title: { pt: 'Imersão: Um Ensaio sobre a Vontade Humana', en: 'Immersion: Essay on Human Will', es: 'Inmersión: Ensayo sobre la Voluntad Humana' },
      sourceContext: { pt: 'Texto reflexivo com jogo refinado de preposições.', en: 'Reflective essay contrasting prepositions.', es: 'Texto reflexivo contrastando preposiciones.' },
      text: 'El filósofo no escribe por vanidad, sino para esclarecer los dilemas de su tiempo. A los lectores les corresponde meditar sobre cada argumento.',
      tokens: [
        { word: 'por vanidad', lemma: 'por', grammarTag: 'Causa motriz impulsora', translation: { pt: 'por vaidade (motivo)', en: 'out of vanity (cause)', es: 'por vanidad' } },
        { word: 'para esclarecer', lemma: 'para + infinitivo', grammarTag: 'Finalidade e objetivo teleológico', translation: { pt: 'a fim de esclarecer', en: 'in order to clarify', es: 'para esclarecer' } },
        { word: 'A los lectores les', lemma: 'duplicación de clítico', grammarTag: 'Duplicação obrigatória de OI', translation: { pt: 'Aos leitores lhes corresponde', en: 'To the readers it falls upon them', es: 'A los lectores les corresponde' } }
      ]
    },
    practice: {
      totalXp: 150,
      exercises: [
        {
          id: 'es03-ex1',
          type: 'multiple-choice',
          prompt: {
            pt: 'Complete: "Trabajo intensamente ___ (motivo/causa) mi familia, pero este informe debe estar terminado ___ (prazo limite) el próximo lunes."',
            en: 'Complete: "Trabajo intensamente ___ mi familia, pero este informe debe estar terminado ___ el próximo lunes."',
            es: 'Completa con POR o PARA según causa y fecha límite:'
          },
          options: [
            'por (por causa de) / para (data limite fatal)',
            'para / por',
            'por / por',
            'para / para'
          ],
          correctAnswer: 'por (por causa de) / para (data limite fatal)',
          explanation: {
            pt: '"Por mi familia" expressa a causa motriz/motivação interna ("por amor a"). "Para el próximo lunes" expressa um prazo limite temporal inescapável.',
            en: '"Por mi familia" indicates internal motive. "Para el próximo lunes" marks a strict deadline.',
            es: '"Por mi familia" expresa causa motriz. "Para el próximo lunes" marca un plazo límite.'
          },
          xp: 50
        }
      ]
    }
  }
};
