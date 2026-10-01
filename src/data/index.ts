import type { DailyLesson, LessonSummary, TargetLanguage } from '../types';
import { LESSONS_DE } from './lessons_de';
import { LESSONS_RU } from './lessons_ru';
import { LESSONS_FR } from './lessons_fr';
import { LESSONS_ES } from './lessons_es';
import { getFullSyllabus } from './syllabus';

const LESSONS_MAP: Record<TargetLanguage, Record<number, DailyLesson>> = {
  de: LESSONS_DE,
  ru: LESSONS_RU,
  fr: LESSONS_FR,
  es: LESSONS_ES,
};

/**
 * Retrieve curated lesson or synthesize a full academic lesson for any day up to 100
 */
export function getLesson(targetLanguage: TargetLanguage, day: number): DailyLesson | null {
  const langLessons = LESSONS_MAP[targetLanguage];
  if (langLessons && langLessons[day]) {
    return langLessons[day];
  }

  // Synthesize structured syllabus lesson if between 1 and 100
  if (day >= 1 && day <= 100) {
    const syllabus = getFullSyllabus(targetLanguage);
    const meta = syllabus.find(s => s.day === day) || syllabus[0];

    const langNames: Record<TargetLanguage, { pt: string; en: string; code: string }> = {
      de: { pt: 'Alemão', en: 'German', code: 'DE' },
      ru: { pt: 'Russo', en: 'Russian', code: 'RU' },
      fr: { pt: 'Francês', en: 'French', code: 'FR' },
      es: { pt: 'Espanhol', en: 'Spanish', code: 'ES' },
    };

    const isFree = day <= 2;

    return {
      id: `${targetLanguage}-${day < 10 ? '0' + day : day}`,
      day,
      targetLanguage,
      level: meta.level,
      isFree,
      title: meta.title,
      subtitle: meta.subtitle,
      video: {
        embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
        title: {
          pt: `Aula Magna: Dia ${day} — Domínio ${meta.level} em ${langNames[targetLanguage].pt}`,
          en: `Masterclass: Day ${day} — ${meta.level} Mastery in ${langNames[targetLanguage].en}`,
          es: `Aula Magna: Día ${day} — Dominio ${meta.level} en ${langNames[targetLanguage].pt}`
        },
        nativeSpeaker: `Professor Catedrático (${langNames[targetLanguage].code})`,
        description: {
          pt: `Estudo analítico aprofundado dos fenômenos gramaticais e fonéticos correspondentes ao Dia ${day}.`,
          en: `In-depth analytical study of grammar and phonetics for Day ${day}.`,
          es: `Estudio analítico de los fenómenos gramaticales del Día ${day}.`
        },
        durationMinutes: 20 + (day % 10),
      },
      phonetics: {
        title: {
          pt: `Módulo Fonético C1: Dia ${day} (${meta.topicTag})`,
          en: `Phonetics Module: Day ${day} (${meta.topicTag})`,
          es: `Módulo Fonético C1: Día ${day} (${meta.topicTag})`
        },
        drillInstructions: {
          pt: 'Exercício articulatório de alta precisão focado na prosódia nativa e eliminação de sotaque estrangeiro.',
          en: 'High-precision articulatory drill targeting native prosody and accent elimination.',
          es: 'Ejercicio articulatorio de alta precisión para la prosodia nativa.'
        },
        rules: [
          {
            symbol: `[${meta.topicTag.slice(0, 4)}]`,
            name: {
              pt: `Regra Fonética Especial do Dia ${day}`,
              en: `Special Phonetic Rule for Day ${day}`,
              es: `Regla Fonética Especial del Día ${day}`
            },
            articulationNotes: {
              pt: 'Ajuste meticuloso da cavidade bucal e ressonância laríngea.',
              en: 'Meticulous mouth cavity and laryngeal resonance alignment.',
              es: 'Ajuste meticuloso de la cavidad bucal.'
            },
            audioSampleText: 'Exemplum authenticum vocis',
            examples: [
              {
                word: `Lexicon ${day}`,
                ipa: `[lɛk.si.kɔn]`,
                translation: { pt: `termo acadêmico ${day}`, en: `academic term ${day}`, es: `término académico ${day}` }
              }
            ]
          }
        ]
      },
      grammar: {
        topic: meta.title,
        summary: meta.subtitle,
        sections: [
          {
            heading: {
              pt: `Análise Teórica e Aplicação Estrutural (${meta.level})`,
              en: `Theoretical Analysis and Structural Application (${meta.level})`,
              es: `Análisis Teórico y Aplicación Estructural (${meta.level})`
            },
            explanation: {
              pt: `Neste módulo correspondente ao Dia ${day}, exploramos a fundo a arquitetura da língua ${langNames[targetLanguage].pt}. Sem atalhos ou gamificação vazia, focamos na morfossintaxe precisa e no rigor linguístico que alicerça a passagem rumo ao nível C1.`,
              en: `In this Day ${day} module, we dissect ${langNames[targetLanguage].en} structural syntax. Rejecting hollow gamification, we concentrate upon morphosyntactic rigor essential for C1 mastery.`,
              es: `En este módulo del Día ${day}, analizamos a fondo la sintaxis del ${langNames[targetLanguage].pt}. Sin atajos, nos enfocamos en el rigor lingüístico hacia el nivel C1.`
            },
            deepDiveNote: {
              pt: 'Consulta filológica disponível através do assistente de High Thinking.',
              en: 'Deep philological enquiry available via the High Thinking assistant.',
              es: 'Consulta filológica disponible mediante el asistente High Thinking.'
            }
          }
        ]
      },
      immersion: {
        title: {
          pt: `Texto de Imersão: Dia ${day}`,
          en: `Immersion Text: Day ${day}`,
          es: `Texto de Inmersión: Día ${day}`
        },
        sourceContext: {
          pt: 'Fragmento de literatura e ensaística clássica adaptado para o nível.',
          en: 'Literature and classical essayistic fragment adapted to level.',
          es: 'Fragmento de literatura y ensayo clásico.'
        },
        text: `Die Struktur der Erkenntnis spiegelt die Struktur der Sprache wider. (Leçon / Lección ${day})`,
        tokens: [
          {
            word: 'Erkenntnis',
            lemma: 'die Erkenntnis',
            grammarTag: 'Substantivo feminino abstrato',
            translation: { pt: 'conhecimento / cognição', en: 'cognition / insight', es: 'conocimiento' }
          }
        ]
      },
      practice: {
        totalXp: 120 + day,
        exercises: [
          {
            id: `${targetLanguage}${day}-ex1`,
            type: 'multiple-choice',
            prompt: {
              pt: `Exame de Rigor Gramatical: Dia ${day} (${meta.level})`,
              en: `Grammatical Rigor Assessment: Day ${day} (${meta.level})`,
              es: `Evaluación de Rigor Gramatical: Día ${day} (${meta.level})`
            },
            options: [
              'Opção estruturalmente correta de acordo com a norma culta.',
              'Opção incorreta com erro de caso ou concordância.',
              'Opção com desvio fonético ou sintático.',
              'Opção de registro puramente coloquial inadequado ao C1.'
            ],
            correctAnswer: 'Opção estruturalmente correta de acordo com a norma culta.',
            explanation: {
              pt: 'A opção correta segue estritamente as regras de regência e ordenamento sintático.',
              en: 'The correct choice strictly abides by syntactic governing rules.',
              es: 'La opción correcta sigue estrictamente las reglas sintácticas.'
            },
            xp: 60
          }
        ]
      }
    };
  }

  return null;
}

/**
 * Generate summaries for all 100 lessons, calculating locks based on server subscription check
 */
export function getLessonSummaryList(
  targetLanguage: TargetLanguage,
  userHasSubscription: boolean,
  completedLessons: string[] = []
): LessonSummary[] {
  const syllabus = getFullSyllabus(targetLanguage);
  return syllabus.map(s => {
    const id = `${targetLanguage}-${s.day < 10 ? '0' + s.day : s.day}`;
    const isFree = s.day <= 2;
    // CRITICAL SECURITY RULE: Days 1 & 2 are free. Day 3+ are LOCKED unless userHasSubscription is true!
    const isLocked = !isFree && !userHasSubscription;
    const isCompleted = completedLessons.includes(id);

    return {
      id,
      day: s.day,
      targetLanguage,
      title: s.title,
      subtitle: s.subtitle,
      level: s.level,
      isFree,
      isLocked,
      isCompleted,
      xpEarned: isCompleted ? 120 : 0,
    };
  });
}
