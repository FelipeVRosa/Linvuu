import type { LocalizedText, NativeLanguage } from '../types';

/**
 * Dynamic Localizer:
 * Extracts the appropriate string based on the user's nativeLanguage.
 * Falls back gracefully to 'pt', 'en', or first available key.
 */
export function getLocalized(text: LocalizedText | undefined | null, nativeLang: NativeLanguage = 'pt'): string {
  if (!text) return '';
  if (typeof text === 'string') return text;

  if (text[nativeLang]) {
    return text[nativeLang];
  }
  if (text['pt']) {
    return text['pt'];
  }
  if (text['en']) {
    return text['en'];
  }
  if (text['es']) {
    return text['es'];
  }

  const keys = Object.keys(text);
  if (keys.length > 0 && text[keys[0]]) {
    return text[keys[0]];
  }

  return '';
}

/**
 * UI Interface translations for Linvuu Platform
 */
export const UI_STRINGS: Record<string, Record<NativeLanguage, string>> = {
  appName: {
    pt: 'Linvuu',
    en: 'Linvuu',
    es: 'Linvuu',
    de: 'Linvuu',
    fr: 'Linvuu',
    ru: 'Linvuu',
  },
  tagline: {
    pt: 'Fluência real e natural passo a passo',
    en: 'Real and natural fluency step by step',
    es: 'Fluidez real y natural paso a paso',
    de: 'Echte und natürliche Sprachgewandtheit Schritt für Schritt',
    fr: 'Une aisance réelle et naturelle pas à pas',
    ru: 'Настоящая естественная беглость шаг за шагом',
  },
  nativeLanguageLabel: {
    pt: 'A tua língua materna (explicações & traduções):',
    en: 'Your native language (explanations & translations):',
    es: 'Tu lengua materna (explicaciones y traducciones):',
    de: 'Deine Muttersprache (Erklärungen & Übersetzungen):',
    fr: 'Votre langue maternelle (explications & traductions):',
    ru: 'Ваш родной язык (объяснения и переводы):',
  },
  targetLanguageLabel: {
    pt: 'Idioma em estudo:',
    en: 'Target language:',
    es: 'Idioma de estudio:',
    de: 'Zielsprache:',
    fr: 'Langue cible:',
    ru: 'Изучаемый язык:',
  },
  lessonVideoTab: {
    pt: '1. Vídeo com Nativo',
    en: '1. Native Speaker Video',
    es: '1. Video con Nativo',
    de: '1. Video mit Muttersprachler',
    fr: '1. Vidéo avec Locuteur Natif',
    ru: '1. Видео с носителем',
  },
  lessonPhoneticsTab: {
    pt: '2. Fonética Rigorosa',
    en: '2. Strict Phonetics',
    es: '2. Fonética Rigurosa',
    de: '2. Strenge Phonetik',
    fr: '2. Phonétique Rigoureuse',
    ru: '2. Строгая фонетика',
  },
  lessonGrammarTab: {
    pt: '3. Gramática Profunda',
    en: '3. Deep Grammar',
    es: '3. Gramática Profunda',
    de: '3. Tiefe Grammatik',
    fr: '3. Grammaire Approfondie',
    ru: '3. Глубокая грамматика',
  },
  lessonImmersionTab: {
    pt: '4. Imersão & Texto Autêntico',
    en: '4. Authentic Immersion',
    es: '4. Inmersión Auténtica',
    de: '4. Authentische Immersion',
    fr: '4. Immersion Authentique',
    ru: '4. Аутентичное погружение',
  },
  lessonPracticeTab: {
    pt: '5. Prática & XP',
    en: '5. Practice & XP',
    es: '5. Práctica y XP',
    de: '5. Praxis & XP',
    fr: '5. Pratique & XP',
    ru: '5. Практика и XP',
  },
  paywallTitle: {
    pt: 'Lição Exclusiva para Membros Linvuu (A partir do Dia 3)',
    en: 'Exclusive Lesson for Linvuu Members (From Day 3)',
    es: 'Lección Exclusiva para Miembros Linvuu (A partir del Día 3)',
    de: 'Exklusive Lektion für Linvuu-Mitglieder (Ab Tag 3)',
    fr: 'Leçon Exclusive pour les Membres Linvuu (À partir du Jour 3)',
    ru: 'Урок доступен для участников Linvuu (с 3-го дня)',
  },
  paywallDescription: {
    pt: 'Os Dias 1 e 2 são gratuitos para você comprovar como o método funciona. O acesso completo aos 100 dias é desbloqueado com a sua assinatura Linvuu.',
    en: 'Days 1 and 2 are free for you to experience how the method works. Full access to all 100 days is unlocked with your Linvuu subscription.',
    es: 'Los Días 1 y 2 son gratuitos para comprobar cómo funciona el método. El acceso completo a los 100 días se desbloquea con tu suscripción Linvuu.',
    de: 'Tage 1 und 2 sind kostenlos. Der vollständige Zugang zu allen 100 Tagen wird mit Ihrer Linvuu-Mitgliedschaft freigeschaltet.',
    fr: 'Les Jours 1 et 2 sont gratuits. L\'accès complet aux 100 jours est débloqué avec votre abonnement Linvuu.',
    ru: 'Дни 1 и 2 бесплатны. Полный доступ ко всем 100 дням открывается с подпиской Linvuu.',
  },
  upgradeButton: {
    pt: 'Destravar Fluência no Linvuu (Stripe)',
    en: 'Unlock Fluency on Linvuu (Stripe)',
    es: 'Desbloquear Fluidez en Linvuu (Stripe)',
    de: 'Sprachgewandtheit freischalten (Stripe)',
    fr: 'Débloquer l\'Aisance sur Linvuu (Stripe)',
    ru: 'Открыть беглость в Linvuu (Stripe)',
  },
  thinkingPhilologistTitle: {
    pt: 'Tutor Pessoal Linvuu (Tire Dúvidas de Fala e Estrutura)',
    en: 'Linvuu Personal Tutor (Ask Questions on Speech & Grammar)',
    es: 'Tutor Personal Linvuu (Resuelve Dudas de Habla y Gramática)',
    de: 'Linvuu-Tutor (Fragen zu Sprache und Grammatik)',
    fr: 'Tuteur Personnel Linvuu (Questions d\'Élocution et de Grammaire)',
    ru: 'Персональный репетитор Linvuu (Вопросы по речи и грамматике)',
  },
  spacedRepetitionTitle: {
    pt: 'Repetição Espaçada (Algoritmo SM-2)',
    en: 'Spaced Repetition (SM-2 Algorithm)',
    es: 'Repetición Espaciada (Algoritmo SM-2)',
    de: 'Spaced Repetition (SM-2-Algorithmus)',
    fr: 'Répétition Espacée (Algorithme SM-2)',
    ru: 'Интервальное повторение (Алгоритм SM-2)',
  }
};
