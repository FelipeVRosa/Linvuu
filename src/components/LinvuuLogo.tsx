import React from 'react';

interface LinvuuLogoProps {
  height?: number;
  color?: string;
  showWordmark?: boolean;
  className?: string;
}

/**
 * Linvuu Logo - Minimalist Educational Style
 * Inspired by edX & Assimil: Clean, Geometric, Professional
 */
export const LinvuuLogo: React.FC<LinvuuLogoProps> = ({
  height = 36,
  color = '#0066CC',
  showWordmark = true,
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${height * 0.4}px`,
        userSelect: 'none',
      }}
    >
      {/* Minimalist Mark: Single Gradient Bar + Accent Dot */}
      <svg
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="linvuuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Primary bar: represents learning progression */}
        <rect x="4" y="16" width="32" height="6" rx="3" fill="url(#linvuuGradient)" />
        
        {/* Accent dot: represents student engagement */}
        <circle cx="40" cy="19" r="3" fill={color} />
      </svg>

      {/* Clean Wordmark */}
      {showWordmark && (
        <span
          style={{
            fontFamily: "'-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 600,
            fontSize: `${height * 0.85}px`,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color }}>L</span>invuu
        </span>
      )}
    </div>
  );
};
