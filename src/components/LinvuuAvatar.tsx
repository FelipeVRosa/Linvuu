import React, { useState } from 'react';

export type AvatarEmotion =
  | 'happy'       // joyful arc / smiling
  | 'thinking'    // 3 dots floating on top-right
  | 'listening'   // sound/ear wave on left
  | 'concentrated'// sweat drop/focus bean on left
  | 'inspired'    // 3 dots centered above head
  | 'surprise'    // exclamation bar on left
  | 'talking'     // animated mouth speaking
  | 'neutral';

interface LinvuuAvatarProps {
  emotion?: AvatarEmotion;
  size?: number; // width/height in px
  color?: string; // main body color or highlight
  fillColor?: string; // body background fill
  interactive?: boolean; // click to talk/change quote
  speechBubble?: string; // text in speech bubble
  onClick?: () => void;
  className?: string;
  showBadge?: string; // e.g. "DE", "RU"
}

const INSPIRATIONAL_QUOTES = [
  'A sua mente já começou a pensar em outro idioma!',
  'Cada minuto que você estuda constrói uma ponte para o seu futuro.',
  'Sem pressa, com constância: é assim que os poliglotas aprendem.',
  'Ouça com atenção cada som. A fala natural vem da escuta calma.',
  'Você é mais capaz do que imagina. Continue firme!',
  'Aprender um idioma novo é ganhar uma segunda alma.',
  'Não tenha medo de errar: errar é o cérebro fazendo novas conexões!'
];

export const LinvuuAvatar: React.FC<LinvuuAvatarProps> = ({
  emotion = 'happy',
  size = 56,
  color = '#F59E0B',
  fillColor = '#1A202E',
  interactive = true,
  speechBubble,
  onClick,
  className = '',
  showBadge,
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (interactive) {
      setCurrentQuoteIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 5000);
    }
  };

  const activeQuote = speechBubble || (showQuote ? INSPIRATIONAL_QUOTES[currentQuoteIndex] : null);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title={interactive ? 'Clique para ouvir o Linvuu falar!' : undefined}
    >
      {/* Speech Bubble */}
      {activeQuote && (
        <div
          className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 p-3 bg-slate-900/95 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-2xl text-xs text-amber-100 z-50 animate-in fade-in zoom-in-95 pointer-events-auto"
          style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))' }}
        >
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-bold text-sm leading-none shrink-0">❝</span>
            <p className="font-medium leading-relaxed text-slate-200">{activeQuote}</p>
          </div>
          {/* Speech bubble pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-3 h-3 bg-slate-900 border-r border-b border-amber-500/30 rotate-45" />
        </div>
      )}

      {/* SVG Avatar */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-transform duration-300 ${
          interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
        }`}
      >
        {/* Soft Ambient Glow on Hover */}
        {isHovered && (
          <circle cx="50" cy="50" r="46" fill={color} fillOpacity="0.12" />
        )}

        {/* Mascot Body Container (Clean soft rounded cloud shape) */}
        <path
          d="M 28,42 C 28,26 40,16 50,16 C 60,16 72,26 72,42 C 78,42 86,50 86,62 C 86,76 74,86 50,86 C 26,86 14,76 14,62 C 14,50 22,42 28,42 Z"
          fill={fillColor}
          stroke={color}
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Blush Cheeks */}
        {(emotion === 'happy' || emotion === 'talking' || isHovered) && (
          <>
            <circle cx="28" cy="62" r="4" fill="#F43F5E" fillOpacity="0.45" />
            <circle cx="72" cy="62" r="4" fill="#F43F5E" fillOpacity="0.45" />
          </>
        )}

        {/* ======================================================== */}
        {/* FACIAL EXPRESSIONS & MASCOT MARKS (from uploaded images)  */}
        {/* ======================================================== */}

        {/* 1. Concentrated / Effort: Sweat Bean on Left (Image #4) */}
        {emotion === 'concentrated' && (
          <path
            d="M 16,34 C 13,38 12,43 16,48 C 20,44 20,38 16,34 Z"
            fill={color}
            opacity="0.85"
          />
        )}

        {/* 2. Curious / Thinking: 3 Dots on Top Right (Image #5) */}
        {emotion === 'thinking' && (
          <g opacity="0.9">
            <circle cx="73" cy="24" r="3.5" fill={color} />
            <circle cx="84" cy="30" r="3.5" fill={color} />
            <circle cx="78" cy="38" r="3.5" fill={color} />
          </g>
        )}

        {/* 3. Listening / Phonetics: Ear curve on left (Image #6) */}
        {emotion === 'listening' && (
          <path
            d="M 18,44 C 12,48 12,56 18,60"
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* 4. Happy / Joy: Eyebrow arc on upper left (Image #7) */}
        {emotion === 'happy' && (
          <path
            d="M 22,34 C 26,24 36,22 42,28"
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* 5. Inspired / Eureka: 3 Dots directly above head (Image #8) */}
        {emotion === 'inspired' && (
          <g opacity="0.95">
            <circle cx="43" cy="18" r="3.5" fill="#FBBF24" />
            <circle cx="57" cy="22" r="3.5" fill="#FBBF24" />
            <circle cx="48" cy="28" r="3.5" fill="#FBBF24" />
          </g>
        )}

        {/* 6. Alert / Surprise: Exclamation bar on left (Image #9) */}
        {emotion === 'surprise' && (
          <rect
            x="16"
            y="26"
            width="4.5"
            height="18"
            rx="2.2"
            fill={color}
            opacity="0.95"
          />
        )}

        {/* ======================================================== */}
        {/* EYES (Vertical Pill Shapes as in the official design)    */}
        {/* ======================================================== */}
        {emotion === 'happy' && isHovered ? (
          // Joyful arched eyes on hover
          <>
            <path d="M 34,56 Q 40,48 46,56" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 54,56 Q 60,48 66,56" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            {/* Left Eye */}
            <rect x="36" y="50" width="8" height="16" rx="4" fill="#FFFFFF" />
            {/* Right Eye */}
            <rect x="56" y="50" width="8" height="16" rx="4" fill="#FFFFFF" />
          </>
        )}

        {/* ======================================================== */}
        {/* MOUTH (Horizontal Pill Shape)                            */}
        {/* ======================================================== */}
        {emotion === 'talking' ? (
          // Animated speaking mouth
          <ellipse cx="50" cy="72" rx="6" ry="4" fill="#CBD5E1">
            <animate
              attributeName="ry"
              values="2;5;2"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </ellipse>
        ) : emotion === 'happy' ? (
          <path
            d="M 44,70 Q 50,75 56,70"
            stroke="#CBD5E1"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          // Standard horizontal pill mouth
          <rect x="44" y="70" width="12" height="4.5" rx="2.2" fill="#94A3B8" />
        )}
      </svg>

      {/* Optional Country / Subject Badge */}
      {showBadge && (
        <span
          className="absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[9px] font-bold rounded-md bg-amber-500 text-slate-950 shadow-md uppercase tracking-wider"
          style={{ letterSpacing: '0.05em' }}
        >
          {showBadge}
        </span>
      )}
    </div>
  );
};
