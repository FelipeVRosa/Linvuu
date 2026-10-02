import React, { useState } from 'react';
import type { NativeLanguage, TargetLanguage, UserProfile } from '../types';
import { MASCOTS } from '../assets/mascots';
import { LinvuuLogo } from './LinvuuLogo';
import { LinvuuAvatar } from './LinvuuAvatar';
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
  const [mascotBubble, setMascotBubble] = useState<string | null>(null);

  const targets: { id: TargetLanguage; label: string; symbol: string; mascotKey: string }[] = [
    { id: 'de', label: 'DE', symbol: '🥨', mascotKey: 'de' },
    { id: 'ru', label: 'RU', symbol: '🥟', mascotKey: 'ru' },
    { id: 'fr', label: 'FR', symbol: '🥐', mascotKey: 'fr' },
    { id: 'es', label: 'ES', symbol: '🍅', mascotKey: 'es' },
  ];

  const nativeLangs: { id: NativeLanguage; label: string; flag: string }[] = [
    { id: 'pt', label: 'Português', flag: '🇧🇷' },
    { id: 'en', label: 'English', flag: '🇬🇧' },
    { id: 'es', label: 'Español', flag: '🇪🇸' },
    { id: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { id: 'fr', label: 'Français', flag: '🇫🇷' },
    { id: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  const handleMascotClick = () => {
    setMascotBubble(currentMascot.voiceQuote);
    setTimeout(() => setMascotBubble(null), 5000);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D1017]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* ======================================================== */}
        {/* ZONE 1: BRAND LOGO + INTERACTIVE TALKING LINVUU MASCOT   */}
        {/* ======================================================== */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            title="Linvuu - Página Inicial"
          >
            <LinvuuLogo height={32} color="#F59E0B" />
          </a>

          <div className="h-6 w-px bg-white/10 hidden sm:block" />

          {/* Interactive Mascot with dynamic emotion and quotes */}
          <div className="relative flex items-center gap-2">
            <LinvuuAvatar
              emotion="happy"
              size={40}
              color={currentMascot.color}
              fillColor="#151A24"
              speechBubble={mascotBubble || undefined}
              onClick={handleMascotClick}
              showBadge={user.targetLanguage.toUpperCase()}
            />
            <div className="hidden lg:block text-xs">
              <span className="font-bold text-white block leading-none">{currentMascot.name}</span>
              <span className="text-[11px] text-slate-400 block mt-0.5 leading-none">
                {currentMascot.greeting}
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ZONE 2: APRENDENDO SELECTOR (Target Languages & Mascots)  */}
        {/* ======================================================== */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs">
            <span className="px-2.5 py-1 text-xs font-semibold text-slate-400 select-none">
              Aprendendo:
            </span>

            {targets.map((t) => {
              const isSelected = user.targetLanguage === t.id;
              const mascot = MASCOTS[t.mascotKey];
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onUpdateTargetLang(t.id);
                    setMascotBubble(mascot.greeting);
                    setTimeout(() => setMascotBubble(null), 4000);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  title={`${mascot.name} (${mascot.language})`}
                >
                  <span className="text-sm leading-none">{t.symbol}</span>
                  <span className="tracking-wide">{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Native Language Selector */}
          <div className="hidden md:flex items-center">
            <select
              value={user.nativeLanguage}
              onChange={(e) => onUpdateNativeLang(e.target.value as NativeLanguage)}
              className="bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs rounded-xl border border-white/[0.08] px-2.5 py-2 font-medium cursor-pointer outline-none transition-colors"
              title="Sua Língua Materna para explicações"
            >
              {nativeLangs.map((nl) => (
                <option key={nl.id} value={nl.id} className="bg-[#11141E] text-white">
                  {nl.flag} {nl.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ZONE 3: ACTIONS, TUTOR, STREAK & SUBSCRIPTION STATUS     */}
        {/* ======================================================== */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Spaced Repetition Flashcards */}
          <button
            onClick={onOpenSpacedRepetition}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-slate-200 transition-colors"
            title="Praticar vocabulário com Repetição Espaçada"
          >
            <span>🧠</span>
            <span>Revisão ({dueCardsCount})</span>
          </button>

          {/* Personal Tutor Linvuu */}
          <button
            onClick={onOpenPhilologist}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-300 transition-all active:scale-95 shadow-sm"
            title="Abrir o Tutor Pessoal Linvuu para tirar dúvidas profundas"
          >
            <span>✨</span>
            <span className="hidden xs:inline">Tutor Linvuu</span>
            <span className="xs:hidden">Tutor</span>
          </button>

          {/* Streak Days */}
          <div
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold"
            title={`${user.streakDays} dias consecutivos de dedicação`}
          >
            <span>🔥</span>
            <span>{user.streakDays}d</span>
          </div>

          {/* Subscription Status Button */}
          <button
            onClick={onOpenSubscriptionModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-sm ${
              user.hasSubscription
                ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/20 active:scale-95'
            }`}
            title="Gerenciar assinatura Linvuu"
          >
            <span>{user.hasSubscription ? '👑' : '⭐'}</span>
            <span className="hidden sm:inline">
              {user.hasSubscription ? 'Membro Linvuu' : 'Desbloquear 100 Dias'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
