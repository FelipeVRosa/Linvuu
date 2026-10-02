import React from 'react';

export const FLAGS: Record<string, (size?: number) => React.ReactNode> = {
  gb: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 60 40">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 60 40M60 0 0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0 60 40M60 0 0 40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="13" />
      <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  ),
  es: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </svg>
  ),
  fr: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#002395" />
      <rect x="20" width="10" height="20" fill="#ed2939" />
    </svg>
  ),
  de: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </svg>
  ),
  it: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#009246" />
      <rect x="20" width="10" height="20" fill="#ce2b37" />
    </svg>
  ),
  ru: (s = 44) => (
    <svg width={s} height={Math.round(s * 0.667)} viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#fff" />
      <rect y="6.67" width="30" height="6.67" fill="#0039a6" />
      <rect y="13.33" width="30" height="6.67" fill="#d52b1e" />
    </svg>
  ),
};

export const LANGS: Record<string, { label: string; flag: string }> = {
  en: { label: 'Inglês', flag: 'gb' },
  es: { label: 'Espanhol', flag: 'es' },
  fr: { label: 'Francês', flag: 'fr' },
  de: { label: 'Alemão', flag: 'de' },
  it: { label: 'Italiano', flag: 'it' },
  ru: { label: 'Russo', flag: 'ru' },
};

interface LanguagePickerProps {
  selected: string;
  onSelect: (lang: string) => void;
}

export const LanguagePicker: React.FC<LanguagePickerProps> = ({ selected, onSelect }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5"
      role="group"
      aria-label="Escolha um idioma"
    >
      {Object.entries(LANGS).map(([id, l]) => {
        const renderFlag = FLAGS[l.flag] || FLAGS.es;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`relative bg-white border rounded p-5.5 flex flex-col items-center gap-3 transition-all cursor-pointer ${
              id === selected
                ? 'border-[#d64000] shadow-[0_0_0_1px_#d64000,0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)]'
                : 'border-[#e1ddd1] shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] hover:border-[#cccccc] hover:-translate-y-0.5'
            }`}
            aria-pressed={id === selected}
          >
            {id === selected && (
              <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#d64000] text-white text-xs flex items-center justify-center font-medium">
                ✓
              </span>
            )}
            <span className="overflow-hidden rounded-sm">{renderFlag(52)}</span>
            <span className="text-sm font-medium text-[#00262b]">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
};
