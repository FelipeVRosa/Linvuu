import React, { useState } from 'react';
import type { DailyLesson, ImmersionToken, NativeLanguage, PracticeExercise } from '../types';
import { getLocalized, UI_STRINGS } from '../utils/i18n';
import { LinvuuAvatar } from './LinvuuAvatar';

interface LessonViewProps {
  lesson: DailyLesson;
  nativeLang: NativeLanguage;
  onCompleteExercise: (xp: number, newCards: any[]) => void;
  onOpenPhilologistForText: (text: string, focus: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  nativeLang,
  onCompleteExercise,
  onOpenPhilologistForText,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'phonetics' | 'grammar' | 'immersion' | 'practice'>('video');
  const [selectedToken, setSelectedToken] = useState<ImmersionToken | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [exerciseFeedback, setExerciseFeedback] = useState<Record<string, { isCorrect: boolean; show: boolean }>>({});
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [comprehensionAnswer, setComprehensionAnswer] = useState<number | null>(null);
  const [showComprehensionFeedback, setShowComprehensionFeedback] = useState(false);

  // Native Speech Synthesis / Audio Drill
  const speakText = (text: string, langCode: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voiceLangMap: Record<string, string> = {
        de: 'de-DE',
        ru: 'ru-RU',
        fr: 'fr-FR',
        es: 'es-ES',
      };
      utterance.lang = voiceLangMap[langCode] || 'de-DE';
      utterance.rate = 0.85; // Slightly slower for crisp pedagogical phonetic clarity
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle Practice Answer Check
  const checkAnswer = (exercise: PracticeExercise, answer: string) => {
    const isCorrect =
      answer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase() ||
      (exercise.acceptableAnswers &&
        exercise.acceptableAnswers.map((a) => a.trim().toLowerCase()).includes(answer.trim().toLowerCase()));

    setSelectedAnswers((prev) => ({ ...prev, [exercise.id]: answer }));
    setExerciseFeedback((prev) => ({
      ...prev,
      [exercise.id]: { isCorrect: !!isCorrect, show: true },
    }));

    if (isCorrect && !completedExercises[exercise.id]) {
      setCompletedExercises((prev) => ({ ...prev, [exercise.id]: true }));
      // Award XP and ingest vocabulary cards into spaced repetition
      const newCard = {
        language: lesson.targetLanguage,
        item: exercise.correctAnswer,
        translation: exercise.prompt,
        explanation: exercise.explanation,
      };
      onCompleteExercise(exercise.xp, [newCard]);
    }
  };

  const title = getLocalized(lesson.title, nativeLang);
  const subtitle = getLocalized(lesson.subtitle, nativeLang);

  return (
    <div className="kosmos-workspace">
      {/* Lesson Hero Header */}
      <div className="lesson-hero">
        <div className="lesson-meta-top">
          <span className="level-tag">Nível {lesson.level}</span>
          <span className="level-tag" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--texto)' }}>
            Dia {lesson.day} de 100
          </span>
          {lesson.isFree ? (
            <span className="access-tag free">✓ Gratuito (Dias 1 e 2)</span>
          ) : (
            <span className="access-tag paid">👑 Membro Linvuu</span>
          )}
        </div>
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>

      {/* 5-Skeleton Tabs (Rule 4) */}
      <nav className="lesson-nav-tabs">
        <button
          className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          <span>🎥</span>
          <span>{getLocalized(UI_STRINGS.lessonVideoTab, nativeLang)}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'phonetics' ? 'active' : ''}`}
          onClick={() => setActiveTab('phonetics')}
        >
          <span>🗣️</span>
          <span>{getLocalized(UI_STRINGS.lessonPhoneticsTab, nativeLang)}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'grammar' ? 'active' : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          <span>📐</span>
          <span>{getLocalized(UI_STRINGS.lessonGrammarTab, nativeLang)}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'immersion' ? 'active' : ''}`}
          onClick={() => setActiveTab('immersion')}
        >
          <span>📖</span>
          <span>{getLocalized(UI_STRINGS.lessonImmersionTab, nativeLang)}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          <span>✍️</span>
          <span>{getLocalized(UI_STRINGS.lessonPracticeTab, nativeLang)}</span>
        </button>
      </nav>

      {/* -------------------------------------------------------------
          1. Video com Nativo
          ------------------------------------------------------------- */}
      {activeTab === 'video' && (
        <div className="tab-content-panel">
          <div className="video-module-wrapper">
            <div className="video-player-frame">
              <iframe
                src={lesson.video.embedUrl}
                title={getLocalized(lesson.video.title, nativeLang)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="video-speaker-card">
              <div className="speaker-info">
                <h3>{getLocalized(lesson.video.title, nativeLang)}</h3>
                <p>
                  <strong>Docente Nativo:</strong> {lesson.video.nativeSpeaker} • {lesson.video.durationMinutes} min de imersão
                </p>
                <p style={{ marginTop: '0.4rem', color: 'var(--texto-secundario)' }}>
                  {getLocalized(lesson.video.description, nativeLang)}
                </p>
              </div>
            </div>

            {lesson.video.timestamps && lesson.video.timestamps.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--ouro)', marginBottom: '0.5rem' }}>
                  Marcadores de Conteúdo (Timestamps):
                </h4>
                <div className="video-timestamps">
                  {lesson.video.timestamps.map((ts, idx) => (
                    <div key={idx} className="timestamp-chip">
                      <strong style={{ color: 'var(--ouro)', marginRight: '0.4rem' }}>{ts.time}</strong>
                      <span>{getLocalized(ts.label, nativeLang)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          2. Fonética Rigorosa
          ------------------------------------------------------------- */}
      {activeTab === 'phonetics' && (
        <div className="tab-content-panel">
          <div className="phonetics-module">
            <div className="phonetic-intro-box">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--ouro)', marginBottom: '0.5rem' }}>
                {getLocalized(lesson.phonetics.title, nativeLang)}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto)' }}>
                {getLocalized(lesson.phonetics.drillInstructions, nativeLang)}
              </p>
            </div>

            {lesson.phonetics.rules.map((rule, idx) => (
              <div key={idx} className="phonetic-rule-card">
                <div className="phonetic-rule-header">
                  <div className="ipa-badge">{rule.symbol}</div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--texto)' }}>
                      {getLocalized(rule.name, nativeLang)}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--texto-secundario)', marginTop: '0.2rem' }}>
                      {getLocalized(rule.articulationNotes, nativeLang)}
                    </p>
                  </div>
                </div>

                <button
                  className="audio-play-btn"
                  onClick={() => speakText(rule.audioSampleText, lesson.targetLanguage)}
                  title="Ouvir pronúncia nativa e modelo acústico"
                >
                  <span>🔊</span>
                  <span>Ouvir Exemplo: &quot;{rule.audioSampleText}&quot;</span>
                </button>

                <div className="phonetic-examples-grid">
                  {rule.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="example-card">
                      <div className="word-ipa-row">
                        <span className="example-word">{ex.word}</span>
                        <span className="example-ipa">{ex.ipa}</span>
                      </div>
                      <div className="example-trans">{getLocalized(ex.translation, nativeLang)}</div>
                      {ex.explanation && (
                        <div style={{ fontSize: '0.78rem', color: 'var(--ouro)', fontStyle: 'italic', marginTop: '0.2rem' }}>
                          {getLocalized(ex.explanation, nativeLang)}
                        </div>
                      )}
                      <button
                        className="audio-play-btn"
                        style={{ alignSelf: 'flex-start', marginTop: '0.4rem', fontSize: '0.72rem', padding: '0.25rem 0.5rem' }}
                        onClick={() => speakText(ex.audioText || ex.word, lesson.targetLanguage)}
                      >
                        <span>🔊 Pronunciar</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          3. Gramática Profunda
          ------------------------------------------------------------- */}
      {activeTab === 'grammar' && (
        <div className="tab-content-panel">
          <div className="grammar-module">
            <div style={{ borderBottom: '1px solid var(--borda)', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--ouro)', marginBottom: '0.5rem' }}>
                {getLocalized(lesson.grammar.topic, nativeLang)}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--texto-secundario)', lineHeight: 1.6 }}>
                {getLocalized(lesson.grammar.summary, nativeLang)}
              </p>
            </div>

            {lesson.grammar.sections.map((section, sIdx) => (
              <div key={sIdx} className="grammar-section">
                <h3>{getLocalized(section.heading, nativeLang)}</h3>
                <div className="grammar-explanation-text">
                  {getLocalized(section.explanation, nativeLang)}
                </div>

                {/* Grammatical Tables */}
                {section.tables &&
                  section.tables.map((tbl, tIdx) => (
                    <div key={tIdx} className="grammar-table-wrapper">
                      {tbl.caption && (
                        <div style={{ padding: '0.6rem 1rem', background: 'var(--profundo-elevated)', color: 'var(--ouro)', fontWeight: 600, fontSize: '0.85rem' }}>
                          {getLocalized(tbl.caption, nativeLang)}
                        </div>
                      )}
                      <table className="kosmos-table">
                        <thead>
                          <tr>
                            {tbl.headers.map((h, hIdx) => (
                              <th key={hIdx}>{getLocalized(h, nativeLang)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tbl.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx}>{getLocalized(cell, nativeLang)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}

                {/* Rules Summary */}
                {section.rulesSummary && section.rulesSummary.length > 0 && (
                  <div style={{ background: 'var(--profundo)', border: '1px solid var(--borda)', borderRadius: '8px', padding: '1.25rem', marginTop: '0.5rem' }}>
                    <h4 style={{ color: 'var(--ouro)', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                      Pontos Cardeais de Domínio:
                    </h4>
                    <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.92rem', color: 'var(--texto)' }}>
                      {section.rulesSummary.map((r, rIdx) => (
                        <li key={rIdx}>{getLocalized(r, nativeLang)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deep Dive Philology Box */}
                {section.deepDiveNote && (
                  <div className="philology-note-box">
                    <h4>
                      <span>🏛️</span>
                      <span>Fundamento Filológico &amp; Histórico (C1):</span>
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--texto-secundario)', lineHeight: 1.7 }}>
                      {getLocalized(section.deepDiveNote, nativeLang)}
                    </p>
                    <button
                      className="kosmos-btn kosmos-btn-secondary"
                      style={{ marginTop: '0.85rem', fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                      onClick={() =>
                        onOpenPhilologistForText(
                          getLocalized(lesson.grammar.topic, nativeLang),
                          getLocalized(section.heading, nativeLang)
                        )
                      }
                    >
                      <span>✨ Tirar dúvidas com o Tutor Linvuu</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          4. Imersão & Texto Autêntico
          ------------------------------------------------------------- */}
      {activeTab === 'immersion' && (
        <div className="tab-content-panel">
          <div className="immersion-module">
            <div style={{ borderBottom: '1px solid var(--borda)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--ouro)' }}>
                  {getLocalized(lesson.immersion.title, nativeLang)}
                </h3>
                <button
                  className="audio-play-btn"
                  onClick={() => speakText(lesson.immersion.text, lesson.targetLanguage)}
                >
                  <span>🔊 Ouvir Texto Autêntico</span>
                </button>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--texto-secundario)', marginTop: '0.25rem' }}>
                {getLocalized(lesson.immersion.sourceContext, nativeLang)} • <em>Clica nas palavras destacadas para abrir a análise morfossintática sob demanda.</em>
              </p>
            </div>

            {/* Interactive Reader */}
            <div className="immersion-text-reader">
              {lesson.immersion.text.split(' ').map((chunk, idx) => {
                // Check if chunk matches any token
                const cleanChunk = chunk.replace(/[.,!?;:()]/g, '');
                const matchedToken = lesson.immersion.tokens.find(
                  (t) => t.word.toLowerCase() === cleanChunk.toLowerCase() || t.word.includes(cleanChunk)
                );

                if (matchedToken) {
                  const isSelected = selectedToken?.word === matchedToken.word;
                  return (
                    <span
                      key={idx}
                      className={`immersion-token ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedToken(matchedToken)}
                    >
                      {chunk}{' '}
                    </span>
                  );
                }

                return <span key={idx}>{chunk} </span>;
              })}
            </div>

            {/* Clicked Token Popover Detail */}
            {selectedToken && (
              <div className="token-detail-card">
                <div className="token-title-row">
                  <div>
                    <span className="token-word">{selectedToken.word}</span>
                    {selectedToken.lemma && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--texto-terciario)', marginLeft: '0.6rem' }}>
                        (Lema: {selectedToken.lemma})
                      </span>
                    )}
                  </div>
                  {selectedToken.grammarTag && (
                    <span className="token-grammar-tag">{selectedToken.grammarTag}</span>
                  )}
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--texto)', fontWeight: 600 }}>
                  Tradução: {getLocalized(selectedToken.translation, nativeLang)}
                </div>
                {selectedToken.explanation && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--texto-secundario)', lineHeight: 1.6, marginTop: '0.25rem' }}>
                    {getLocalized(selectedToken.explanation, nativeLang)}
                  </div>
                )}
                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem' }}>
                  <button
                    className="audio-play-btn"
                    onClick={() => speakText(selectedToken.word, lesson.targetLanguage)}
                  >
                    <span>🔊 Ouvir Palavra</span>
                  </button>
                  <button
                    className="audio-play-btn"
                    style={{ borderColor: 'var(--borda)', color: 'var(--texto-secundario)' }}
                    onClick={() =>
                      onOpenPhilologistForText(
                        selectedToken.word,
                        `Análise etimológica e de regência da palavra "${selectedToken.word}" no contexto da frase: "${lesson.immersion.text}"`
                      )
                    }
                  >
                    <span>✨ Inquirir Filólogo (High Thinking)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Comprehension Question */}
            {lesson.immersion.comprehensionQuestion && (
              <div style={{ background: 'var(--profundo)', border: '1px solid var(--borda)', borderRadius: '10px', padding: '1.5rem', marginTop: '1rem' }}>
                <h4 style={{ color: 'var(--ouro)', fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                  Pergunta de Compreensão e Raciocínio Sintático:
                </h4>
                <p style={{ fontSize: '0.98rem', marginBottom: '1rem', fontWeight: 600 }}>
                  {getLocalized(lesson.immersion.comprehensionQuestion.question, nativeLang)}
                </p>

                <div className="options-list">
                  {lesson.immersion.comprehensionQuestion.options.map((opt, oIdx) => {
                    const isSelected = comprehensionAnswer === oIdx;
                    return (
                      <div
                        key={oIdx}
                        className={`option-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          setComprehensionAnswer(oIdx);
                          setShowComprehensionFeedback(true);
                        }}
                      >
                        <span style={{ fontWeight: 700, color: 'var(--ouro)', minWidth: '24px' }}>
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span>{getLocalized(opt, nativeLang)}</span>
                      </div>
                    );
                  })}
                </div>

                {showComprehensionFeedback && comprehensionAnswer !== null && (
                  <div
                    className={`feedback-banner ${
                      comprehensionAnswer === lesson.immersion.comprehensionQuestion.correctIndex
                        ? 'correct'
                        : 'incorrect'
                    }`}
                  >
                    <div className="feedback-title">
                      {comprehensionAnswer === lesson.immersion.comprehensionQuestion.correctIndex ? (
                        <>✓ Compreensão Exata (+30 XP)</>
                      ) : (
                        <>✗ Raciocínio Incorreto</>
                      )}
                    </div>
                    <div className="feedback-explanation">
                      {getLocalized(lesson.immersion.comprehensionQuestion.explanation, nativeLang)}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          5. Prática & XP (Immediate Red/Green Feedback)
          ------------------------------------------------------------- */}
      {activeTab === 'practice' && (
        <div className="tab-content-panel">
          <div className="practice-module">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--borda)', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--ouro)' }}>
                  {getLocalized(UI_STRINGS.lessonPracticeTab, nativeLang)}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--texto-secundario)' }}>
                  Responde com precisão rigorosa. Cada erro é acompanhado de explicação detalhada para eliminação imediata de dúvidas.
                </p>
              </div>
              <div className="stat-pill" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}>
                <span>⚡ Total do Módulo: {lesson.practice.totalXp} XP</span>
              </div>
            </div>

            {lesson.practice.exercises.map((ex, eIdx) => {
              const currentAnswer = selectedAnswers[ex.id] || '';
              const feedback = exerciseFeedback[ex.id];

              return (
                <div key={ex.id} className="exercise-container">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--ouro)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Exercício {eIdx + 1} de {lesson.practice.exercises.length} • +{ex.xp} XP
                    </span>
                    {completedExercises[ex.id] && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--sucesso)', fontWeight: 700 }}>
                        ✓ Concluído
                      </span>
                    )}
                  </div>

                  <div className="exercise-prompt">{getLocalized(ex.prompt, nativeLang)}</div>

                  {/* Multiple Choice Type */}
                  {ex.type === 'multiple-choice' && ex.options && (
                    <div className="options-list">
                      {ex.options.map((opt, oIdx) => {
                        const isSelected = currentAnswer === opt;
                        return (
                          <div
                            key={oIdx}
                            className={`option-item ${isSelected ? 'selected' : ''}`}
                            onClick={() => checkAnswer(ex, opt)}
                          >
                            <span style={{ fontWeight: 700, color: 'var(--ouro)', minWidth: '24px' }}>
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Fill Gap Type */}
                  {ex.type === 'fill-gap' && (
                    <div style={{ marginBottom: '1.25rem' }}>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          checkAnswer(ex, currentAnswer);
                        }}
                        style={{ display: 'flex', gap: '0.75rem' }}
                      >
                        <input
                          type="text"
                          className="sidebar-search-input"
                          style={{ maxWidth: '400px', fontSize: '1rem', padding: '0.65rem 1rem' }}
                          placeholder="Digite a resposta correta..."
                          value={currentAnswer}
                          onChange={(e) =>
                            setSelectedAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))
                          }
                        />
                        <button type="submit" className="kosmos-btn kosmos-btn-primary">
                          Verificar
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Red (Error) or Green (Success) Feedback Banner */}
                  {feedback && feedback.show && (
                    <div className={`feedback-banner ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
                      <div className="feedback-title">
                        {feedback.isCorrect ? (
                          <>
                            <span>✓</span>
                            <span>Resposta Exata! Ganhaste +{ex.xp} XP</span>
                          </>
                        ) : (
                          <>
                            <span>✗</span>
                            <span>Desvio Gramatical Detectado (Análise de Erro):</span>
                          </>
                        )}
                      </div>
                      <div className="feedback-explanation">
                        {getLocalized(ex.explanation, nativeLang)}
                      </div>
                      {!feedback.isCorrect && (
                        <div style={{ marginTop: '0.5rem' }}>
                          <button
                            className="audio-play-btn"
                            style={{ borderColor: 'var(--erro-border)', color: '#FF8F94' }}
                            onClick={() =>
                              onOpenPhilologistForText(
                                ex.targetSentence || ex.gapSentence || currentAnswer,
                                `Explique minuciosamente por que a resposta "${currentAnswer}" está incorreta e por que a resposta correta é "${ex.correctAnswer}". Forneça as regras morfológicas e fonéticas pertinentes.`
                              )
                            }
                          >
                            <span>✨ Consultar Filólogo C1 sobre este erro</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
