import React, { useState, useEffect, useCallback } from 'react';
import type {
  DailyLesson,
  LessonSummary,
  NativeLanguage,
  SpacedRepetitionCard,
  TargetLanguage,
  UserProfile,
} from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { PaywallModal } from './components/PaywallModal';
import { PhilologistModal } from './components/PhilologistModal';
import { SpacedRepetitionModal } from './components/SpacedRepetitionModal';
import { LinvuuAvatar } from './components/LinvuuAvatar';

export default function App() {
  const [user, setUser] = useState<UserProfile>({
    id: 'usr_linvuu_001',
    name: 'Estudante Linvuu',
    email: 'estudante@linvuu.com',
    nativeLanguage: 'pt',
    targetLanguage: 'de',
    hasSubscription: false,
    xp: 120,
    streakDays: 4,
    completedLessons: ['de-01'],
    lastActiveDate: new Date().toISOString(),
  });

  const [lessons, setLessons] = useState<LessonSummary[]>([]);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [currentLesson, setCurrentLesson] = useState<DailyLesson | null>(null);
  const [isLessonLocked, setIsLessonLocked] = useState<boolean>(false);
  const [loadingLesson, setLoadingLesson] = useState<boolean>(true);

  // Modals state
  const [isPaywallOpen, setIsPaywallOpen] = useState<boolean>(false);
  const [isPhilologistOpen, setIsPhilologistOpen] = useState<boolean>(false);
  const [philologistInitialSentence, setPhilologistInitialSentence] = useState<string>('');
  const [philologistInitialFocus, setPhilologistInitialFocus] = useState<string>('');
  const [isSpacedRepetitionOpen, setIsSpacedRepetitionOpen] = useState<boolean>(false);
  const [srCards, setSrCards] = useState<SpacedRepetitionCard[]>([]);

  // 1. Fetch User Profile
  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch('/api/user/profile');
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.error('Erro ao carregar perfil:', err);
    }
  }, []);

  // 2. Fetch Lesson List (100 lessons)
  const fetchLessonsList = useCallback(async (targetLang: TargetLanguage) => {
    try {
      const res = await fetch(`/api/lessons/${targetLang}`);
      if (res.ok) {
        const data = await res.json();
        setLessons(data.lessons);
      }
    } catch (err) {
      console.error('Erro ao carregar catálogo de lições:', err);
    }
  }, []);

  // 3. Fetch Specific Lesson with Server-side Paywall Check (Rule 5)
  const fetchLesson = useCallback(async (lang: TargetLanguage, day: number) => {
    setLoadingLesson(true);
    setIsLessonLocked(false);
    try {
      const res = await fetch(`/api/lessons/${lang}/${day}`);

      if (res.status === 403) {
        // SERVER ENFORCED PAYWALL: Backend returned 403 Forbidden!
        setIsLessonLocked(true);
        setCurrentLesson(null);
        setIsPaywallOpen(true);
      } else if (res.ok) {
        const data = await res.json();
        setCurrentLesson(data.lesson);
        setIsLessonLocked(false);
      } else {
        setCurrentLesson(null);
      }
    } catch (err) {
      console.error('Erro ao carregar lição:', err);
    } finally {
      setLoadingLesson(false);
    }
  }, []);

  // 4. Fetch Spaced Repetition Queue
  const fetchSrQueue = useCallback(async () => {
    try {
      const res = await fetch('/api/spaced-repetition/queue');
      if (res.ok) {
        const data = await res.json();
        setSrCards(data.cards);
      }
    } catch (err) {
      console.error('Erro ao buscar cartões de repetição espaçada:', err);
    }
  }, []);

  // Initial Load
  useEffect(() => {
    fetchProfile();
    fetchSrQueue();
  }, [fetchProfile, fetchSrQueue]);

  useEffect(() => {
    fetchLessonsList(user.targetLanguage);
    fetchLesson(user.targetLanguage, activeDay);
  }, [user.targetLanguage, fetchLessonsList, fetchLesson, activeDay]);

  // Target Language Switch
  const handleUpdateTargetLang = async (lang: TargetLanguage) => {
    setUser((prev) => ({ ...prev, targetLanguage: lang }));
    setActiveDay(1);
    await fetch('/api/user/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetLanguage: lang }),
    });
    fetchLessonsList(lang);
    fetchLesson(lang, 1);
  };

  // Native Language Switch (Rule 3)
  const handleUpdateNativeLang = async (lang: NativeLanguage) => {
    setUser((prev) => ({ ...prev, nativeLanguage: lang }));
    await fetch('/api/user/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nativeLanguage: lang }),
    });
  };

  // Select Day in Sidebar
  const handleSelectDay = (day: number) => {
    setActiveDay(day);
    fetchLesson(user.targetLanguage, day);
  };

  // Complete Practice Exercise
  const handleCompleteExercise = async (xp: number, newCards: any[]) => {
    try {
      const res = await fetch('/api/progress/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId: `${user.targetLanguage}-${activeDay < 10 ? '0' + activeDay : activeDay}`,
          xpEarned: xp,
          newCards,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setUser((prev) => ({
          ...prev,
          xp: data.xp,
          completedLessons: data.completedLessons,
        }));
        fetchLessonsList(user.targetLanguage);
        fetchSrQueue();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Open Philologist Modal with sentence
  const handleOpenPhilologistForText = (sentence: string, focus: string) => {
    setPhilologistInitialSentence(sentence);
    setPhilologistInitialFocus(focus);
    setIsPhilologistOpen(true);
  };

  return (
    <div className="kosmos-app">
      {/* Top Header */}
      <Header
        user={user}
        onUpdateTargetLang={handleUpdateTargetLang}
        onUpdateNativeLang={handleUpdateNativeLang}
        onOpenPhilologist={() => {
          setPhilologistInitialSentence('');
          setPhilologistInitialFocus('');
          setIsPhilologistOpen(true);
        }}
        onOpenSpacedRepetition={() => setIsSpacedRepetitionOpen(true)}
        onOpenSubscriptionModal={() => setIsPaywallOpen(true)}
        dueCardsCount={srCards.length}
      />

      {/* Main App Layout */}
      <div className="kosmos-layout">
        {/* Sidebar: Full 100 Days Curriculum */}
        <Sidebar
          lessons={lessons}
          activeDay={activeDay}
          onSelectDay={handleSelectDay}
          nativeLang={user.nativeLanguage}
          userHasSubscription={user.hasSubscription}
        />

        {/* Central Workspace */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {loadingLesson ? (
            <div style={{ padding: '5rem 2rem', textAlign: 'center', color: 'var(--texto-secundario)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--ouro)' }}>
                Carregando a aula do Dia {activeDay}...
              </p>
            </div>
          ) : isLessonLocked ? (
            /* Locked Content Banner (Emotional, Inspiring, High-converting) */
            <div className="p-6 sm:p-12 max-w-3xl mx-auto my-8">
              <div className="relative p-8 sm:p-12 rounded-3xl bg-[#121622] border border-amber-500/30 shadow-2xl text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex justify-center mb-6">
                  <LinvuuAvatar
                    emotion="inspired"
                    size={80}
                    color="#F59E0B"
                    fillColor="#1A202E"
                    speechBubble="O mais difícil você já fez: começou! Agora é só continuar conectado."
                  />
                </div>

                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  Lição {activeDay} de 100 · Continuação da Trilha
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  A sua mente já começou a pensar em outro idioma.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
                  Nos dois primeiros dias gratuitos, você sentiu a virada de chave: os sons começaram a fazer sentido de verdade. 
                  Essa é a sensação de liberdade que só falar uma nova língua proporciona. Não deixe o ritmo parar agora que as conexões estão fortes.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all active:scale-[0.98] cursor-pointer"
                    onClick={() => setIsPaywallOpen(true)}
                  >
                    ⭐ Continuar Minha Jornada de 100 Dias
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-400">
                  Acesso imediato a todos os dias · Cancele quando quiser · Garantia total de 7 dias
                </p>
              </div>
            </div>
          ) : currentLesson ? (
            /* Active Full 5-Part Lesson Workspace */
            <LessonView
              lesson={currentLesson}
              nativeLang={user.nativeLanguage}
              onCompleteExercise={handleCompleteExercise}
              onOpenPhilologistForText={handleOpenPhilologistForText}
            />
          ) : (
            <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
              <p>Lição não encontrada.</p>
            </div>
          )}
        </main>
      </div>

      {/* Paywall & Stripe Modal */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        day={activeDay}
        nativeLang={user.nativeLanguage}
        isSubscribed={user.hasSubscription}
        onSubscriptionChanged={async () => {
          await fetchProfile();
          await fetchLessonsList(user.targetLanguage);
          await fetchLesson(user.targetLanguage, activeDay);
        }}
      />

      {/* High Thinking Philologist Modal (Gemini 3.1 Pro with ThinkingLevel.HIGH) */}
      <PhilologistModal
        isOpen={isPhilologistOpen}
        onClose={() => setIsPhilologistOpen(false)}
        targetLang={user.targetLanguage}
        nativeLang={user.nativeLanguage}
        initialSentence={philologistInitialSentence}
        initialFocus={philologistInitialFocus}
      />

      {/* Spaced Repetition (SM-2) Modal */}
      <SpacedRepetitionModal
        isOpen={isSpacedRepetitionOpen}
        onClose={() => setIsSpacedRepetitionOpen(false)}
        cards={srCards}
        nativeLang={user.nativeLanguage}
        onCardReviewed={async () => {
          await fetchProfile();
          await fetchSrQueue();
        }}
      />
    </div>
  );
}
