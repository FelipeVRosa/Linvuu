import React from 'react';

interface LinvuuLogoProps {
  height?: number;
  color?: string;
  showWordmark?: boolean;
  showIcon?: boolean;
  className?: string;
}

/**
 * Official Linvuu Brand Logomark & Wordmark.
 * Keep the icon optional so the product can use the wordmark alone,
 * as in the provided logo reference.
 */
export const LinvuuLogo: React.FC<LinvuuLogoProps> = ({
  height = 36,
  color = '#F5A623',
  showWordmark = true,
  showIcon = false,
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
      {showIcon && (
        <svg
          height={height}
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <rect x="0" y="8" width="62" height="26" rx="4" fill={color} />
          <rect x="0" y="42" width="105" height="26" rx="4" fill={color} />
          <rect x="0" y="76" width="42" height="26" rx="4" fill={color} />
        </svg>
      )}

      {showWordmark && (
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: `${height * 1.12}px`,
            letterSpacing: '-0.08em',
            color: '#F2EFE8',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            textShadow: '0 0 14px rgba(255, 255, 255, 0.12)',
          }}
        >
          Lin<span style={{ color }}>vuu</span>
        </span>
      )}
    </div>
  );
};
