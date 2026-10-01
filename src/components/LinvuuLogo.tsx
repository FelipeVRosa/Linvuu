import React from 'react';

interface LinvuuLogoProps {
  height?: number;
  color?: string;
  showWordmark?: boolean;
  className?: string;
}

/**
 * Official Linvuu Brand Logomark & Wordmark
 * Derived from the official brand identity:
 * Tiered tripartite horizontal signal blocks + Geometric wordmark
 */
export const LinvuuLogo: React.FC<LinvuuLogoProps> = ({
  height = 36,
  color = '#F5A623',
  showWordmark = true,
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${height * 0.35}px`,
        userSelect: 'none',
      }}
    >
      {/* Three Horizontal Tiered Signal Blocks */}
      <svg
        height={height}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Top Block: Short */}
        <rect x="0" y="8" width="62" height="26" rx="4" fill={color} />
        {/* Middle Block: Extended */}
        <rect x="0" y="42" width="105" height="26" rx="4" fill={color} />
        {/* Bottom Block: Compact */}
        <rect x="0" y="76" width="42" height="26" rx="4" fill={color} />
      </svg>

      {/* Wordmark Linvuu */}
      {showWordmark && (
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: `${height * 0.95}px`,
            letterSpacing: '-0.03em',
            color: '#F2EFE8',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Lin<span style={{ color: color }}>vuu</span>
        </span>
      )}
    </div>
  );
};
