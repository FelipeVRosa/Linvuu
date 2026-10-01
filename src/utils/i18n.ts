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
 * UI Interface translations for Kosmos Platform
 */
export const UI_STRINGS: Record<string, Record<NativeLanguage, string>> = {
  appName: {
    pt: 'Linvuu Kosmos',
    en: 'Linvuu Kosmos',
    es: 'Linvuu Kosmos',
    de: 'Linvuu Kosmos',
    fr: 'Linvuu Kosmos',
    ru: 'Linvuu Kosmos',
  },
  tagline: {
    pt: 'Imersão de alta densidade cognitiva rumo ao C1',
    en: 'High-density cognitive immersion towards C1 fluency',
    es: 'Inmersión de alta densidad cognitiva hacia el C1',
    de: 'Kognitive Hochdichte-Immersion auf dem Weg zu C1',
    fr: 'Immersion cognitive à haute densité vers le C1',
    ru: 'Глубокое погружение высокой когнитивной плотности к уровню C1',
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
    pt: 'Lição Reservada aos Membros Kosmos (A partir do Dia 3)',
    en: 'Lesson Reserved for Kosmos Members (From Day 3)',
    es: 'Lección Reservada para Miembros Kosmos (A partir del Día 3)',
    de: 'Lektion für Kosmos-Mitglieder reserviert (Ab Tag 3)',
    fr: 'Leçon Réservée aux Membres Kosmos (À partir du Jour 3)',
    ru: 'Урок доступен по подписке Kosmos (с 3-го дня)',
  },
  paywallDescription: {
    pt: 'Os Dias 1 e 2 são gratuitos para avaliares o rigor pedagógico. O acesso integral ao programa de 100 lições até ao nível C1 é protegido pelo nosso servidor via Stripe.',
    en: 'Days 1 and 2 are free to evaluate pedagogical depth. Full access to the 100-lesson C1 syllabus is validated server-side via Stripe.',
    es: 'Los Días 1 y 2 son gratuitos para evaluar el rigor pedagógico. El acceso completo a las 100 lecciones C1 está protegido en el servidor vía Stripe.',
    de: 'Tage 1 und 2 sind kostenlos. Der vollständige Zugang zum 100-Lektionen-C1-Programm wird serverseitig über Stripe gesichert.',
    fr: 'Les Jours 1 et 2 sont gratuits. L\'accès complet au programme de 100 leçons C1 est sécurisé côté serveur via Stripe.',
    ru: 'Дни 1 и 2 бесплатны. Полный доступ к курсу из 100 уроков до уровня C1 проверяется на сервере через Stripe.',
  },
  upgradeButton: {
    pt: 'Ativar Subscrição Kosmos (Stripe)',
    en: 'Activate Kosmos Subscription (Stripe)',
    es: 'Activar Suscripción Kosmos (Stripe)',
    de: 'Kosmos-Abonnement aktivieren (Stripe)',
    fr: 'Activer l\'Abonnement Kosmos (Stripe)',
    ru: 'Оформить подписку Kosmos (Stripe)',
  },
  thinkingPhilologistTitle: {
    pt: 'Filólogo Kosmos (Análise Profunda C1 com High Thinking)',
    en: 'Kosmos Philologist (Deep C1 Analysis with High Thinking)',
    es: 'Filólogo Kosmos (Análisis Profundo C1 con High Thinking)',
    de: 'Kosmos-Philologe (Tiefenanalyse C1 mit High Thinking)',
    fr: 'Philologue Kosmos (Analyse Approfondie C1 avec High Thinking)',
    ru: 'Филолог Kosmos (Глубокий анализ C1 в режиме High Thinking)',
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
