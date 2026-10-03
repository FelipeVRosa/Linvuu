// Ícones de área: balão de conversa para Idiomas, átomo para STEM.
const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export const IconeIdiomas = ({ size = 24 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M4 5h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-3 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M17 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3-3h-3" />
    <path d="M6 9h5" />
  </svg>
);

export const IconeStem = ({ size = 24 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="12" cy="12" r="1.6" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
  </svg>
);

export const IconeAspas = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true"><path fill="currentColor" d="M0 20V11C0 4.4 3.4.9 10 0v4C6.8 4.7 5.2 6.4 5 9h5v11H0zm15 0V11c0-6.6 3.4-10.1 10-11v4c-3.2.7-4.8 2.4-5 5h5v11H15z" /></svg>
);

export const Chevron = ({ dir = 'right' }: { dir?: 'left' | 'right' | 'down' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: dir === 'left' ? 'rotate(180deg)' : dir === 'down' ? 'rotate(90deg)' : undefined }}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
