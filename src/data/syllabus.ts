import type { CEFRLevel, LocalizedText, TargetLanguage } from '../types';

export interface SyllabusDayMeta {
  day: number;
  level: CEFRLevel;
  title: LocalizedText;
  subtitle: LocalizedText;
  isFree: boolean;
  topicTag: string;
}

export const SYLLABUS: Record<TargetLanguage, SyllabusDayMeta[]> = {
  de: [
    {
      day: 1,
      level: 'A1',
      isFree: true,
      topicTag: 'Phonetik & Satzbau V2',
      title: {
        pt: 'Dia 1: A Fonética das Vogais Longas e a Regra Inviolável do Verbo na Segunda Posição (V2)',
        en: 'Day 1: Long Vowels Phonetics & The Inviolable Verb-Second (V2) Rule',
        es: 'Día 1: Fonética de Vocales Largas y la Regla Inviolable del Verbo en Segunda Posición (V2)',
      },
      subtitle: {
        pt: 'Oclusivas glotais (Knacklaut), pares mínimos e a estrutura sintática canônica da oração principal.',
        en: 'Glottal stops (Knacklaut), minimal pairs, and canonical main-clause syntax.',
        es: 'Oclusiva glotal (Knacklaut), pares mínimos y sintaxis canónica de la oración principal.',
      }
    },
    {
      day: 2,
      level: 'A1',
      isFree: true,
      topicTag: 'Genus & Akkusativ',
      title: {
        pt: 'Dia 2: O Gênero Tripartite (der/die/das) e a Oposição Essencial: Nominativ vs. Akkusativ',
        en: 'Day 2: Tripartite Grammatical Gender and the Primary Distinction: Nominativ vs. Akkusativ',
        es: 'Día 2: Género Tripartito y la Oposición Primaria: Nominativ vs. Akkusativ',
      },
      subtitle: {
        pt: 'Declinação do artigo definido e indefinido no acusativo masculino (den/einen) e transitividade direta.',
        en: 'Definite and indefinite masculine accusative declension (den/einen) and direct transitivity.',
        es: 'Declinación acusativa masculina definida e indefinida (den/einen) y transitividad directa.',
      }
    },
    {
      day: 3,
      level: 'A1',
      isFree: false,
      topicTag: 'Dativ & Wechselpräpositionen',
      title: {
        pt: 'Dia 3: O Sistema do Dativo e as Preposições Bidirecionais (Wechselpräpositionen)',
        en: 'Day 3: The Dative Case System and Two-Way Prepositions (Wechselpräpositionen)',
        es: 'Día 3: El Sistema del Dativo y las Preposiciones Bidireccionales (Wechselpräpositionen)',
      },
      subtitle: {
        pt: 'Wohin (Akkusativ) vs. Wo (Dativ): a geometria do espaço no pensamento germânico.',
        en: 'Wohin (Akkusativ) vs. Wo (Dativ): spatial geometry in German thought.',
        es: 'Wohin (Akkusativ) vs. Wo (Dativ): la geometría del espacio en el pensamiento germánico.',
      }
    },
    {
      day: 4,
      level: 'A1',
      isFree: false,
      topicTag: 'Trennbare Verben & Satzklammer',
      title: {
        pt: 'Dia 4: Verbos Separáveis e a Tenaz Oracional (Satzklammer)',
        en: 'Day 4: Separable Verbs and Sentence Bracketing (Satzklammer)',
        es: 'Día 4: Verbos Separables y el Paréntesis Oracional (Satzklammer)',
      },
      subtitle: {
        pt: 'Prefixos átonos vs. tônicos (be-/ver- vs. an-/auf-) e o enquadramento do predicado.',
        en: 'Unstressed vs. stressed prefixes and verb bracket framework.',
        es: 'Prefijos átonos vs. tónicos y estructura del marco oracional.',
      }
    },
    {
      day: 5,
      level: 'A1',
      isFree: false,
      topicTag: 'Modalverben',
      title: {
        pt: 'Dia 5: A Arquitetura dos Verbos Modais: können, müssen, dürfen, sollen, wollen, möchten',
        en: 'Day 5: Architecture of Modal Verbs: Nuances and Strict Syntax',
        es: 'Día 5: Arquitectura de los Verbos Modales: Matices y Sintaxis Estricta',
      },
      subtitle: {
        pt: 'O infinitivo no extremo final da frase e a modalização subjetiva do enunciado.',
        en: 'The sentence-final infinitive and subjective modalization.',
        es: 'El infinitivo en el extremo final y la modalización subjetiva.',
      }
    },
    {
      day: 10,
      level: 'A2',
      isFree: false,
      topicTag: 'Perfekt & Partizip II',
      title: {
        pt: 'Dia 10: O Pretérito Perfeito (Perfekt): Verbos Fracos, Fortes e Regência de Haben vs. Sein',
        en: 'Day 10: The Present Perfect (Perfekt): Auxiliary Selection and Strong Participles',
        es: 'Día 10: El Pretérito Perfecto: Selección de Haben vs. Sein y Participios Fuertes',
      },
      subtitle: {
        pt: 'Critérios aspectuais de mudança de estado e deslocamento físico na escolha de sein.',
        en: 'Aspectual criteria of state change and physical movement in sein selection.',
        es: 'Criterios aspectuales de cambio de estado y desplazamiento físico.',
      }
    },
    {
      day: 20,
      level: 'A2',
      isFree: false,
      topicTag: 'Adjektivdeklination Typ I/II/III',
      title: {
        pt: 'Dia 20: A Declinação Tripla do Adjetivo: Forte, Fraca e Mista',
        en: 'Day 20: The Triple Adjective Declension: Strong, Weak, and Mixed',
        es: 'Día 20: Declinación Triple del Adjetivo: Fuerte, Débil y Mixta',
      },
      subtitle: {
        pt: 'O princípio da marcação única de caso e a terminação -en generalizada no dativo/genitivo.',
        en: 'The single inflection marker principle and widespread -en in oblique cases.',
        es: 'El principio del marcador de flexión único y terminación -en generalizada.',
      }
    },
    {
      day: 35,
      level: 'B1',
      isFree: false,
      topicTag: 'Nebensätze & Konjunktionen',
      title: {
        pt: 'Dia 35: Orações Subordinadas e o Verbo Conjugado no Final Absoluto (weil, dass, obwohl)',
        en: 'Day 35: Subordinate Clauses and Absolute Final Verb Position',
        es: 'Día 35: Oraciones Subordinadas y el Verbo Conjugado al Final Absoluto',
      },
      subtitle: {
        pt: 'A transição de coordenação para subordinação e a hierarquização lógica do raciocínio.',
        en: 'Coordination to subordination shift and logical hierarchy.',
        es: 'Transición de coordinación a subordinación y jerarquización lógica.',
      }
    },
    {
      day: 50,
      level: 'B2',
      isFree: false,
      topicTag: 'Passiv (Vorgangs- & Zustandspassiv)',
      title: {
        pt: 'Dia 50: A Voz Passiva Germânica: Processo (werden) vs. Estado (sein) e a Despersonalização',
        en: 'Day 50: German Passive: Process (werden) vs. State (sein) and Impersonal Passive',
        es: 'Día 50: Voz Pasiva Germánica: Proceso (werden) vs. Estado (sein) y Pasiva Impersonal',
      },
      subtitle: {
        pt: 'O uso de \'von\' (agente pessoal) vs. \'durch\' (causa instrumental) e o passivo sem sujeito.',
        en: 'Use of \'von\' vs. \'durch\' and subjectless passive structures.',
        es: 'Uso de \'von\' vs. \'durch\' y la pasiva impersonal sin sujeto.',
      }
    },
    {
      day: 75,
      level: 'C1',
      isFree: false,
      topicTag: 'Partizipialattribute & Nominalstil',
      title: {
        pt: 'Dia 75: Construções Participiais Expandidas e o Estilo Nominal Acadêmico (Nominalstil)',
        en: 'Day 75: Expanded Participial Attributes and Academic Nominal Style',
        es: 'Día 75: Construcciones Participiales Expandidas y el Estilo Nominal Académico',
      },
      subtitle: {
        pt: 'Compactação oracional germânica: transformar orações relativas em adjetivos antepostos complexos.',
        en: 'German clause condensation: translating relative clauses into elaborate pre-nominal modifiers.',
        es: 'Condensación oracional: transformar oraciones de relativo en adjetivos antepuestos complejos.',
      }
    },
    {
      day: 100,
      level: 'C1',
      isFree: false,
      topicTag: 'Konjunktiv I & Filosofia Germânica',
      title: {
        pt: 'Dia 100: Discurso Indireto C1 (Konjunktiv I), Modalpartikeln e Alta Filosofia (Kant & Hegel)',
        en: 'Day 100: C1 Indirect Speech (Konjunktiv I), Modal Particles, and High Philosophical Prose',
        es: 'Día 100: Discurso Indirecto C1 (Konjunktiv I), Partículas Modales y Alta Filosofía',
      },
      subtitle: {
        pt: 'Distanciamento epistêmico, nuances das partículas modais (doch, ja, wohl, halt) e rigor C1.',
        en: 'Epistemic distancing, subtle modal particles, and total mastery of late philosophical German.',
        es: 'Distanciamiento epistémico, partículas modales y dominio pleno del alemán filosófico.',
      }
    }
  ],
  ru: [
    {
      day: 1,
      level: 'A1',
      isFree: true,
      topicTag: 'Кириллица и Палатализация',
      title: {
        pt: 'Dia 1: O Alfabeto Cirílico, Iotação e a Oposição Fonológica Forte/Suave',
        en: 'Day 1: Cyrillic Alphabet, Iotation, and the Hard/Soft Phonemic Opposition',
        es: 'Día 1: El Alfabeto Cirílico, Yotación y la Oposición Fonológica Dura/Blanda',
      },
      subtitle: {
        pt: 'Consoantes duras vs. palatalizadas (твёрдые и мягкие согласные) e o papel de ь/ъ.',
        en: 'Hard vs. palatalized consonants and the functional role of the soft sign (ь) and hard sign (ъ).',
        es: 'Consonantes duras vs. palatalizadas y el papel fundamental de ь y ъ.',
      }
    },
    {
      day: 2,
      level: 'A1',
      isFree: true,
      topicTag: 'Редукция гласных & Быть',
      title: {
        pt: 'Dia 2: A Redução Vocálica (Аканье e Иканье) e a Frase Nominal no Presente com нулевая связка',
        en: 'Day 2: Vowel Reduction (Akan\'e / Ikan\'e) and Zero Copula Present Predication',
        es: 'Día 2: La Reducción Vocálica (Akan\'e e Ikan\'e) y la Frase Nominal con Cópula Cero',
      },
      subtitle: {
        pt: 'A influência da tônica móvel na pronúncia e a estrutura existencial "У меня есть".',
        en: 'Mobile stress impact on pronunciation and the possessive existential construction "У меня есть".',
        es: 'Influencia del acento móvil en la pronunciación y la estructura posesiva "У меня есть".',
      }
    },
    {
      day: 3,
      level: 'A1',
      isFree: false,
      topicTag: 'Предложный падеж',
      title: {
        pt: 'Dia 3: O Caso Prepositivo (Предложный падеж) e a Semântica Locativa de В e НА',
        en: 'Day 3: The Prepositional Case and Spatial Semantics of В and НА',
        es: 'Día 3: El Caso Prepositivo y la Semántica Locativa de В y НА',
      },
      subtitle: {
        pt: 'Diferenciação entre espaços fechados vs. superfícies abertas/eventos e a terminação -е.',
        en: 'Enclosed containers vs. open surfaces/events and the nominal ending -е.',
        es: 'Espacios cerrados vs. superficies abiertas/eventos y la terminación -е.',
      }
    },
    {
      day: 50,
      level: 'B2',
      isFree: false,
      topicTag: 'Вид глагола (НСВ/СВ)',
      title: {
        pt: 'Dia 50: O Aspecto Verbal Eslavo: Imperfeito (НСВ) vs. Perfeito (СВ)',
        en: 'Day 50: Slavic Verbal Aspect: Imperfective (НСВ) vs. Perfective (СВ)',
        es: 'Día 50: El Aspecto Verbal Eslavo: Imperfectivo (НСВ) vs. Perfectivo (СВ)',
      },
      subtitle: {
        pt: 'Processo, habitualidade e anulação vs. resultado singular pontual e delimitação temporal.',
        en: 'Process, habituality, and annulled action vs. singular point-result and temporal boundary.',
        es: 'Proceso, habitualidad y anulación vs. resultado puntual y delimitación temporal.',
      }
    },
    {
      day: 100,
      level: 'C1',
      isFree: false,
      topicTag: 'Деепричастия & Достоевский',
      title: {
        pt: 'Dia 100: Gerúndios (Деепричастия), Particípios e Alta Prosa Filosófica de Dostoiévski',
        en: 'Day 100: Verbal Adverbs (Gerunds), Participles, and Dostoevskian C1 Philosophical Prose',
        es: 'Día 100: Gerundios Verbales (Деепричастия), Participios y Prosa Filosófica de Dostoievski',
      },
      subtitle: {
        pt: 'Subordinação sintética sem conjunções, ritmo oracional eslavo e profundidade existencial.',
        en: 'Synthetic non-conjunction subordination, Slavic prose rhythm, and existential depth.',
        es: 'Subordinación sintética sin conjunciones, ritmo oracional y profundidad existencial.',
      }
    }
  ],
  fr: [
    {
      day: 1,
      level: 'A1',
      isFree: true,
      topicTag: 'Voyelles Nasales & Liaisons',
      title: {
        pt: 'Dia 1: A Fonética das Vogais Nasais [ɑ̃, ɔ̃, ɛ̃] e a Mecânica das Liaisons Obrigatórias',
        en: 'Day 1: French Nasal Vowels [ɑ̃, ɔ̃, ɛ̃] and the Mechanics of Mandatory Liaisons',
        es: 'Día 1: La Fonética de Vocales Nasales [ɑ̃, ɔ̃, ɛ̃] y la Mecánica de las Liaisons Obligatorias',
      },
      subtitle: {
        pt: 'Resonância nasal pura (sem n final) e a prosódia oracional contínua em blocos acentuais.',
        en: 'Pure nasal vowel resonance (no consonant n coda) and stress-group prosody.',
        es: 'Resonancia nasal pura y prosodia continua en grupos acentuales.',
      }
    },
    {
      day: 2,
      level: 'A1',
      isFree: true,
      topicTag: 'Négation & Inversion',
      title: {
        pt: 'Dia 2: A Negação Dupla Envolvente (Ne... pas) e a Inversão do Sujeito Literária',
        en: 'Day 2: The Embracing Negative (Ne... pas) and Literary Subject Inversion',
        es: 'Día 2: La Negación Doble Envolvente (Ne... pas) y la Inversión Literaria del Sujeto',
      },
      subtitle: {
        pt: 'A elisão eufônica e a diferença de registro entre a linguagem oral coloquial e o padrão C1.',
        en: 'Euphonic elision and register contrast between colloquial speech and C1 academic prose.',
        es: 'Elisión eufónica y contraste de registros entre habla cotidiana y prosa formal C1.',
      }
    },
    {
      day: 3,
      level: 'A1',
      isFree: false,
      topicTag: 'Passé Composé vs Imparfait',
      title: {
        pt: 'Dia 3: A Tensão Aspectual: Passé Composé vs. Imparfait na Narrativa Histórica',
        en: 'Day 3: Aspectual Tension: Passé Composé vs. Imparfait in Historical Narrative',
        es: 'Día 3: La Tensión Aspectual: Passé Composé vs. Imparfait en la Narrativa Histórica',
      },
      subtitle: {
        pt: 'Acontecimentos pontuais sucessivos versus cenário contínuo, estado de espírito e duração.',
        en: 'Successive punctual events vs. descriptive background context, mental states, and duration.',
        es: 'Sucesos puntuales vs. marco contextual descriptivo, estados de ánimo y duración.',
      }
    },
    {
      day: 100,
      level: 'C1',
      isFree: false,
      topicTag: 'Subjonctif Imparfait & Proust',
      title: {
        pt: 'Dia 100: O Subjonctif Imparfait / Plus-que-parfait e a Alta Prosa de Marcel Proust',
        en: 'Day 100: Imperfect Subjunctive, Concordance des Temps, and Proustian Long-Period Prose',
        es: 'Día 100: El Subjuntivo Imperfecto, Concordancia de Tiempos y la Alta Prosa de Marcel Proust',
      },
      subtitle: {
        pt: 'Concordância temporal clássica, nuances de estilo editorial e orações de densidade máxima.',
        en: 'Classical tense agreement, editorial nuances, and maximum sentence architecture.',
        es: 'Concordancia temporal clásica, matices de estilo editorial y oraciones de máxima densidad.',
      }
    }
  ],
  es: [
    {
      day: 1,
      level: 'A1',
      isFree: true,
      topicTag: 'Alófonos Oclusivos/Fricativos & R',
      title: {
        pt: 'Dia 1: Alófonos Espanhóis [b/β, d/ð, g/ɣ] e a Vibração Múltipla [r] vs. Simples [ɾ]',
        en: 'Day 1: Spanish Approximant Allophones [b/β, d/ð, g/ɣ] and Trill [r] vs. Tap [ɾ]',
        es: 'Día 1: Alófonos Españoles [b/β, d/ð, g/ɣ] y la Vibración Múltiple [r] vs. Simple [ɾ]',
      },
      subtitle: {
        pt: 'A pronúncia nativa real: o relaxamento intervocálico consonantal e o ritmo silábico isócrono.',
        en: 'Real native pronunciation: intervocalic consonant weakening and syllable-timed cadence.',
        es: 'Pronunciación nativa real: debilitamiento intervocálico y cadencia silábica regular.',
      }
    },
    {
      day: 2,
      level: 'A1',
      isFree: true,
      topicTag: 'Ser vs. Estar',
      title: {
        pt: 'Dia 2: A Distinção Ontológica Fundamental: Ser (Essência) vs. Estar (Circunstância)',
        en: 'Day 2: The Fundamental Ontological Distinction: Ser (Essence) vs. Estar (Circumstance)',
        es: 'Día 2: La Distinción Ontológica Fundamental: Ser (Esencia) vs. Estar (Circunstancia)',
      },
      subtitle: {
        pt: 'Mudanças semânticas radicais de adjetivos com ser e estar (ser listo vs. estar listo).',
        en: 'Radical semantic shifts of adjectives depending on copula choice.',
        es: 'Cambios semánticos radicales de adjetivos según la elección de ser o estar.',
      }
    },
    {
      day: 3,
      level: 'A1',
      isFree: false,
      topicTag: 'Por vs. Para & Objeto Indireto',
      title: {
        pt: 'Dia 3: A Demarcação Teleológica: Por vs. Para e a Duplicação Pronominal do Objeto',
        en: 'Day 3: Teleological Demarcation: Por vs. Para and Clitic Pronoun Reduplication',
        es: 'Día 3: La Demarcación Teleológica: Por vs. Para y la Reduplicación Pronominal del Objeto',
      },
      subtitle: {
        pt: 'Causa motriz versus finalidade intrínseca; e o uso obrigatório de \'A Juan le di el libro\'.',
        en: 'Motive cause vs. destination goal; and mandatory clitic doubling in standard Spanish.',
        es: 'Causa motriz versus finalidad intrínseca; y reduplicación obligatoria del clítico.',
      }
    },
    {
      day: 100,
      level: 'C1',
      isFree: false,
      topicTag: 'Subjuntivo en -ra/-se & Borges',
      title: {
        pt: 'Dia 100: Formas em -ra e -se do Subjuntivo Imperfeito, Valores de "Se" e a Prosa de Borges',
        en: 'Day 100: Imperfect Subjunctive Forms in -ra/-se, Multifunctional "Se", and Borges Prose',
        es: 'Día 100: Formas en -ra y -se del Subjuntivo Imperfecto, Valores de "Se" y la Prosa de Borges',
      },
      subtitle: {
        pt: 'Evolução etimológica latina, passiva reflexa vs. impessoal e o ensaio filosófico C1.',
        en: 'Latin etymological evolution, reflexive passive vs. impersonal, and C1 essays.',
        es: 'Evolución etimológica latina, pasiva refleja vs. impersonal y el ensayo filosófico C1.',
      }
    }
  ]
};

/**
 * Generate synthetic syllabus metadata up to Day 100 for any language
 */
export function getFullSyllabus(lang: TargetLanguage): SyllabusDayMeta[] {
  const curated = SYLLABUS[lang] || [];
  const map = new Map<number, SyllabusDayMeta>();
  curated.forEach(item => map.set(item.day, item));

  const result: SyllabusDayMeta[] = [];
  for (let d = 1; d <= 100; d++) {
    if (map.has(d)) {
      result.push(map.get(d)!);
    } else {
      // Determine CEFR level
      let level: CEFRLevel = 'A1';
      if (d > 15) level = 'A2';
      if (d > 35) level = 'B1';
      if (d > 60) level = 'B2';
      if (d > 80) level = 'C1';

      const isFree = d <= 2;
      const langNames: Record<TargetLanguage, { pt: string; en: string }> = {
        de: { pt: 'Alemão', en: 'German' },
        ru: { pt: 'Russo', en: 'Russian' },
        fr: { pt: 'Francês', en: 'French' },
        es: { pt: 'Espanhol', en: 'Spanish' },
      };

      result.push({
        day: d,
        level,
        isFree,
        topicTag: `Módulo Intensivo ${level} • Dia ${d}`,
        title: {
          pt: `Dia ${d}: Domínio Gramatical & Fluência Rigorosa (${level})`,
          en: `Day ${d}: Grammatical Mastery & Rigorous Fluency (${level})`,
          es: `Día ${d}: Dominio Gramatical y Fluidez Rigurosa (${level})`,
        },
        subtitle: {
          pt: `Construção progressiva de estruturas sintáticas complexas para o domínio C1 em ${langNames[lang].pt}.`,
          en: `Progressive buildup of complex syntactic structures towards C1 fluency in ${langNames[lang].en}.`,
          es: `Construcción progresiva de estructuras sintácticas complejas hacia el dominio C1 en ${langNames[lang].pt}.`,
        }
      });
    }
  }
  return result;
}
