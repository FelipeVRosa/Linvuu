/**
 * LINVUU - Language Platform
 * Core Type Contracts: Multilingual, Pedagogical, and Security
 */

export type NativeLanguage = 'pt' | 'en' | 'es' | 'de' | 'fr' | 'ru';
export type TargetLanguage = 'de' | 'ru' | 'fr' | 'es';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

/**
 * Dynamic internationalization field:
 * Supports dictionary of languages: { pt: "...", en: "...", es: "..." }
 * or a single fallback string.
 */
export type LocalizedText = Record<string, string> | string;

export interface PhoneticExample {
  word: string;
  ipa: string;
  translation: LocalizedText;
  audioText?: string;
  explanation?: LocalizedText;
}

export interface PhoneticRule {
  symbol: string;
  name: LocalizedText;
  articulationNotes: LocalizedText;
  audioSampleText: string;
  examples: PhoneticExample[];
}

export interface PhoneticsModule {
  title: LocalizedText;
  drillInstructions: LocalizedText;
  rules: PhoneticRule[];
}

export interface GrammarTable {
  caption?: LocalizedText;
  headers: LocalizedText[];
  rows: (LocalizedText | string)[][];
}

export interface GrammarSection {
  heading: LocalizedText;
  explanation: LocalizedText;
  tables?: GrammarTable[];
  rulesSummary?: LocalizedText[];
  deepDiveNote?: LocalizedText;
}

export interface GrammarModule {
  topic: LocalizedText;
  summary: LocalizedText;
  sections: GrammarSection[];
}

export interface ImmersionToken {
  word: string;
  lemma?: string;
  grammarTag?: string;
  translation: LocalizedText;
  explanation?: LocalizedText;
}

export interface ComprehensionQuestion {
  question: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  explanation: LocalizedText;
}

export interface ImmersionModule {
  title: LocalizedText;
  sourceContext: LocalizedText;
  text: string;
  audioAvailable?: boolean;
  tokens: ImmersionToken[];
  comprehensionQuestion?: ComprehensionQuestion;
}

export type ExerciseType = 'multiple-choice' | 'fill-gap' | 'case-transformation' | 'sentence-ordering';

export interface PracticeExercise {
  id: string;
  type: ExerciseType;
  prompt: LocalizedText;
  targetSentence?: string;
  gapSentence?: string;
  options?: string[];
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation: LocalizedText; // Red banner feedback explaining grammatical mistake
  xp: number;
}

export interface PracticeModule {
  totalXp: number;
  exercises: PracticeExercise[];
}

export interface VideoModule {
  embedUrl: string;
  title: LocalizedText;
  nativeSpeaker: string;
  description: LocalizedText;
  durationMinutes: number;
  timestamps?: { time: string; label: LocalizedText }[];
}

/**
 * Complete Daily Lesson Skeleton (1 to 100 days)
 */
export interface DailyLesson {
  id: string;
  day: number;
  targetLanguage: TargetLanguage;
  title: LocalizedText;
  subtitle: LocalizedText;
  level: CEFRLevel;
  isFree: boolean; // Days 1 & 2 are true; Day 3+ are false (Paywall)
  video: VideoModule;
  phonetics: PhoneticsModule;
  grammar: GrammarModule;
  immersion: ImmersionModule;
  practice: PracticeModule;
}

/**
 * Public Lesson Meta sent to client before unlocking
 */
export interface LessonSummary {
  id: string;
  day: number;
  targetLanguage: TargetLanguage;
  title: LocalizedText;
  subtitle: LocalizedText;
  level: CEFRLevel;
  isFree: boolean;
  isLocked: boolean; // Computed by backend based on user subscription
  isCompleted: boolean;
  xpEarned: number;
}

/**
 * User Profile & Spaced Repetition (SM-2 Algorithm)
 */
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  nativeLanguage: NativeLanguage;
  targetLanguage: TargetLanguage;
  hasSubscription: boolean;
  subscriptionPlan?: 'monthly' | 'annual' | 'kosmos-patron';
  subscriptionRenewsAt?: string;
  xp: number;
  streakDays: number;
  completedLessons: string[]; // Lesson IDs e.g. ['de-01', 'de-02']
  lastActiveDate: string;
}

export interface SpacedRepetitionCard {
  id: string;
  userId: string;
  language: TargetLanguage;
  item: string;
  ipa?: string;
  grammarTag?: string;
  translation: LocalizedText;
  explanation: LocalizedText;
  intervalDays: number;
  repetitions: number;
  easeFactor: number;
  nextReviewDate: string;
  lastReviewedDate?: string;
}

/**
 * High Thinking Philological AI Request & Response
 */
export interface PhilologicalAnalysisRequest {
  sentence: string;
  targetLanguage: TargetLanguage;
  nativeLanguage: NativeLanguage;
  grammaticalFocus?: string;
  c1Context?: string;
}

export interface PhilologicalAnalysisResponse {
  sentence: string;
  targetLanguage: TargetLanguage;
  nativeLanguage: NativeLanguage;
  literalTranslation: string;
  syntacticTreeAnalysis: string;
  caseGovernmentAndEtymology: string;
  idiomaticAndStylisticNuance: string;
  c1MasteryAdvice: string;
  thinkingModeUsed: boolean;
}
