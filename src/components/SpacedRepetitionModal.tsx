import React, { useState } from 'react';
import type { NativeLanguage, SpacedRepetitionCard } from '../types';
import { getLocalized } from '../utils/i18n';

interface SpacedRepetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: SpacedRepetitionCard[];
  nativeLang: NativeLanguage;
  onCardReviewed: () => void;
}

export const SpacedRepetitionModal: React.FC<SpacedRepetitionModalProps> = ({
  isOpen,
  onClose,
  cards,
  nativeLang,
  onCardReviewed,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentCard = cards[currentIndex];

  const handleRate = async (rating: number) => {
    if (!currentCard || submitting) return;
    setSubmitting(true);

    try {
      await fetch('/api/spaced-repetition/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: currentCard.id, rating }),
      });

      setIsFlipped(false);
      setSubmitting(false);

      if (currentIndex + 1 < cards.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onCardReviewed();
        onClose();
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="thinking-modal-overlay" onClick={onClose}>
      <div className="thinking-modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <div className="thinking-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🧠</span>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--ouro)' }}>
                Repetição Espaçada (SuperMemo SM-2)
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--texto-secundario)' }}>
                Memorização cognitiva de longo prazo para vocabulário e estruturas C1
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--texto-secundario)',
              fontSize: '1.4rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        <div className="thinking-modal-body" style={{ textAlign: 'center' }}>
          {cards.length === 0 || !currentCard ? (
            <div style={{ padding: '3rem 1rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: 'var(--ouro)', marginBottom: '0.5rem' }}>
                Fila de Revisão em Dia!
              </h3>
              <p style={{ color: 'var(--texto-secundario)', fontSize: '0.95rem' }}>
                Completaste todos os cartões agendados pelo algoritmo SM-2 para hoje. Continua as tuas aulas diárias para desbloquear novos termos e regras sintáticas.
              </p>
              <button
                className="kosmos-btn kosmos-btn-primary"
                style={{ marginTop: '1.5rem' }}
                onClick={onClose}
              >
                Voltar às Aulas
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--texto-terciario)' }}>
                <span>Cartão {currentIndex + 1} de {cards.length}</span>
                <span>Intervalo atual: {currentCard.intervalDays} dia(s)</span>
              </div>

              {/* Flashcard Body */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  background: 'var(--profundo-card)',
                  border: '2px solid var(--ouro-border)',
                  borderRadius: '14px',
                  padding: '3rem 2rem',
                  cursor: 'pointer',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  boxShadow: 'var(--sombra-card)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--ouro)' }}>
                  {currentCard.item}
                </div>

                {currentCard.ipa && (
                  <div style={{ fontFamily: 'Times New Roman, serif', color: 'var(--texto-secundario)', fontSize: '1.1rem' }}>
                    {currentCard.ipa}
                  </div>
                )}

                {currentCard.grammarTag && (
                  <span className="level-tag" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--texto-secundario)' }}>
                    {currentCard.grammarTag}
                  </span>
                )}

                {isFlipped ? (
                  <div style={{ borderTop: '1px solid var(--borda)', paddingTop: '1.25rem', width: '100%', marginTop: '0.5rem' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--texto)', marginBottom: '0.5rem' }}>
                      {getLocalized(currentCard.translation, nativeLang)}
                    </div>
                    {currentCard.explanation && (
                      <div style={{ fontSize: '0.88rem', color: 'var(--texto-secundario)', lineHeight: 1.6 }}>
                        {getLocalized(currentCard.explanation, nativeLang)}
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: 'var(--texto-terciario)', fontStyle: 'italic', marginTop: '1rem' }}>
                    (Clica no cartão para revelar a tradução e explicação)
                  </div>
                )}
              </div>

              {/* Recall Rating Buttons (SM-2) */}
              {isFlipped && (
                <div style={{ marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--texto-secundario)', marginBottom: '0.75rem' }}>
                    Avalia a facilidade de recuperação da memória:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                    <button
                      className="kosmos-btn kosmos-btn-secondary"
                      style={{ borderColor: 'var(--erro-border)', color: '#FF8F94' }}
                      onClick={() => handleRate(1)}
                      disabled={submitting}
                    >
                      1. Esqueci
                    </button>
                    <button
                      className="kosmos-btn kosmos-btn-secondary"
                      onClick={() => handleRate(3)}
                      disabled={submitting}
                    >
                      3. Difícil
                    </button>
                    <button
                      className="kosmos-btn kosmos-btn-secondary"
                      style={{ color: 'var(--ouro)' }}
                      onClick={() => handleRate(4)}
                      disabled={submitting}
                    >
                      4. Bom
                    </button>
                    <button
                      className="kosmos-btn kosmos-btn-primary"
                      onClick={() => handleRate(5)}
                      disabled={submitting}
                    >
                      5. Perfeito
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
