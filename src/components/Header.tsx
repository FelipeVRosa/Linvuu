import React from 'react';
import type { NativeLanguage, TargetLanguage, UserProfile } from '../types';
import { MASCOTS } from '../assets/mascots';
import { LinvuuLogo } from './LinvuuLogo';
import { getLocalized, UI_STRINGS } from '../utils/i18n';

interface HeaderProps {
  user: UserProfile;
  onUpdateTargetLang: (lang: TargetLanguage) => void;
  onUpdateNativeLang: (lang: NativeLanguage) => void;
  onOpenPhilologist: () => void;
  onOpenSpacedRepetition: () => void;
  onOpenSubscriptionModal: () => void;
  dueCardsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onUpdateTargetLang,
  onUpdateNativeLang,
  onOpenPhilologist,
  onOpenSpacedRepetition,
  onOpenSubscriptionModal,
  dueCardsCount,
}) => {
  const currentMascot = MASCOTS[user.targetLanguage] || MASCOTS.de;

  const targetLangs: { id: TargetLanguage; label: string; icon: string }[] = [
    { id: 'de', label: 'DE (Alemão)', icon: '🥨' },
    { id: 'ru', label: 'RU (Russo)', icon: '🥟' },
    { id: 'fr', label: 'FR (Francês)', icon: '🥐' },
    { id: 'es', label: 'ES (Espanhol)', icon: '🥢' },
  ];

  const nativeLangs: { id: NativeLanguage; label: string; flag: string }[] = [
    { id: 'pt', label: 'Português', flag: '🇵🇹' },
    { id: 'en', label: 'English', flag: '🇬🇧' },
    { id: 'es', label: 'Español', flag: '🇪🇸' },
    { id: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { id: 'fr', label: 'Français', flag: '🇫🇷' },
    { id: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <header className="kosmos-header">
      <div className="kosmos-header-inner">
        {/* Official Brand Logo & Language Identity */}
        <div className="brand-section" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LinvuuLogo height={32} color="var(--ouro)" />

          <div style={{ height: '24px', width: '1px', background: 'var(--borda)', margin: '0 0.25rem' }} />

          <div
            className="brand-mascot-avatar"
            title={`${currentMascot.name}: ${currentMascot.description}`}
            dangerouslySetInnerHTML={{ __html: currentMascot.svgIcon }}
          />

          <div className="brand-text">
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ouro)' }}>
              Kosmos C1
            </span>
            <p>
              {currentMascot.name} • {getLocalized(UI_STRINGS.tagline, user.nativeLanguage)}
            </p>
          </div>
        </div>

        {/* Central Controls */}
        <div className="header-actions">
          {/* Target Language Switcher with Mascots */}
          <div className="lang-selector-group" title="Selecionar idioma de estudo">
            <span className="lang-label">Alvo:</span>
            {targetLangs.map((t) => (
              <button
                key={t.id}
                className={`lang-btn ${user.targetLanguage === t.id ? 'active' : ''}`}
                onClick={() => onUpdateTargetLang(t.id)}
              >
                <span>{t.icon}</span>
                <span>{t.id.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Native Language Adapter (Dynamic i18n Rule 3) */}
          <div className="lang-selector-group" title={getLocalized(UI_STRINGS.nativeLanguageLabel, user.nativeLanguage)}>
            <span className="lang-label">Língua Materna:</span>
            <select
              value={user.nativeLanguage}
              onChange={(e) => onUpdateNativeLang(e.target.value as NativeLanguage)}
              style={{
                background: 'var(--profundo-elevated)',
                color: 'var(--texto)',
                border: '1px solid var(--borda)',
                borderRadius: '14px',
                padding: '0.25rem 0.5rem',
                fontSize: '0.78rem',
                fontFamily: 'inherit',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {nativeLangs.map((nl) => (
                <option key={nl.id} value={nl.id}>
                  {nl.flag} {nl.label}
                </option>
              ))}
            </select>
          </div>

          {/* Spaced Repetition Launcher */}
          <button
            className="stat-pill"
            onClick={onOpenSpacedRepetition}
            title={getLocalized(UI_STRINGS.spacedRepetitionTitle, user.nativeLanguage)}
            style={{ cursor: 'pointer' }}
          >
            <span>🧠</span>
            <span>SM-2 ({dueCardsCount})</span>
          </button>

          {/* High Thinking Philologist Button */}
          <button
            className="stat-pill"
            onClick={onOpenPhilologist}
            title={getLocalized(UI_STRINGS.thinkingPhilologistTitle, user.nativeLanguage)}
            style={{
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgba(37, 9, 82, 0.9) 0%, rgba(29, 6, 64, 0.9) 100%)',
              borderColor: 'var(--ouro-border)',
            }}
          >
            <span>✨</span>
            <span style={{ color: 'var(--ouro)', fontWeight: 700 }}>Filólogo C1</span>
          </button>

          {/* Streak & XP */}
          <div className="stat-pill streak" title="Dias seguidos de dedicação ao idioma">
            <span>🔥</span>
            <span>{user.streakDays}d</span>
          </div>

          <div className="stat-pill" title="Pontos de Experiência (XP)">
            <span>⚡</span>
            <span>{user.xp} XP</span>
          </div>

          {/* Subscription State & Paywall Toggle */}
          <button
            className={`sub-status-btn ${user.hasSubscription ? 'subscribed' : 'free'}`}
            onClick={onOpenSubscriptionModal}
            title="Gerir subscrição Linvuu Kosmos (Stripe)"
          >
            {user.hasSubscription ? (
              <>
                <span>👑</span>
                <span>Kosmos Membro</span>
              </>
            ) : (
              <>
                <span>🔒</span>
                <span>Freemium (Desbloquear)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
