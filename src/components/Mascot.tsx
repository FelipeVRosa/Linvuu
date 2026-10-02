import React from 'react';

interface MascotProps {
  type: 'tomate' | 'puff' | 'nuvem' | 'u' | 'fantasma' | 'ampulheta' | 'coracao';
  size?: number;
  className?: string;
}

const FACE = (x1: number, x2: number, ey: number, my: number) => (
  <>
    <rect x={x1 - 5.5} y={ey - 11} width="11" height="22" rx="5.5" fill="#5d5d5d" />
    <rect x={x2 - 5.5} y={ey - 11} width="11" height="22" rx="5.5" fill="#5d5d5d" />
    <rect x="42" y={my - 3.5} width="16" height="7" rx="3.5" fill="#c9c9c9" />
  </>
);

const SHINE = (d: string) => (
  <path d={d} stroke="#cbcbcb" strokeWidth="7" strokeLinecap="round" fill="none" />
);

const DOTS = (pts: [number, number][], r = 6.5) => (
  <>
    {pts.map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#cbcbcb" />
    ))}
  </>
);

export const Mascot: React.FC<MascotProps> = ({ type, size = 120, className = '' }) => {
  return (
    <svg
      className={`block filter drop-shadow-[0_4px_10px_rgba(0,38,43,0.14)] ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {type === 'tomate' && (
        <>
          <path d="M50 2 L56 13 L74 11 L62 23 L67 35 L50 27 L33 35 L38 23 L26 11 L44 13 Z" fill="#ffffff" />
          <path d="M50 22 C74 22 93 41 91 62 C89 82 72 94 50 94 C28 94 11 82 9 62 C7 41 26 22 50 22 Z" fill="#ffffff" />
          {SHINE('M22 34 C17 44 15 56 17 66')}
          {FACE(31, 69, 74, 88)}
        </>
      )}

      {type === 'puff' && (
        <>
          <path d="M50 8 C57 8 63 12 66 18 C74 15 83 21 82 30 C91 33 94 44 88 51 C95 58 92 70 83 73 C82 83 72 89 63 86 C58 95 42 95 37 86 C28 89 18 83 17 73 C8 70 5 58 12 51 C6 44 9 33 18 30 C17 21 26 15 34 18 C37 12 43 8 50 8 Z" fill="#ffffff" />
          {SHINE('M26 32 C21 42 20 54 23 64')}
          {FACE(31, 69, 74, 88)}
        </>
      )}

      {type === 'nuvem' && (
        <>
          <path d="M27 34 C20 14 46 4 55 22 C62 8 82 14 79 32 C95 33 100 52 89 62 C100 74 87 91 72 86 C63 98 40 98 31 88 C15 95 3 78 13 66 C3 58 9 39 27 34 Z" fill="#ffffff" />
          {SHINE('M24 38 C20 46 19 54 20 62')}
          {FACE(33, 67, 72, 86)}
        </>
      )}

      {type === 'u' && (
        <>
          <path fillRule="evenodd" d="M6 4 H94 C98 4 100 7 99.4 11 L94 50 C90 78 72 96 50 96 C28 96 10 78 6 50 L0.6 11 C0 7 2 4 6 4 Z M36 4 V36 C36 49 41.8 58 50 58 C58.2 58 64 49 64 36 V4 Z" fill="#ffffff" />
          {SHINE('M17 18 C13 30 12 44 14 56')}
          {FACE(36, 64, 72, 86)}
        </>
      )}

      {type === 'fantasma' && (
        <>
          <path d="M60 8 C84 16 97 42 92 66 C87 88 62 98 38 92 C16 86 2 62 10 42 C18 20 38 1 60 8 Z" fill="#ffffff" />
          {DOTS([[72, 26], [86, 34], [77, 45]])}
          {SHINE('M24 28 C19 38 17 50 19 60')}
          {FACE(31, 69, 76, 90)}
        </>
      )}

      {type === 'ampulheta' && (
        <>
          <path d="M12 2 H88 C93 2 95 7 92 11 L58 46 C54 50 46 50 42 46 L8 11 C5 7 7 2 12 2 Z" fill="#ffffff" />
          <path d="M12 98 H88 C93 98 95 93 92 89 L58 54 C54 50 46 50 42 54 L8 89 C5 93 7 98 12 98 Z" fill="#ffffff" />
          {DOTS([[45, 20], [58, 25], [51, 33]], 5)}
          {SHINE('M30 18 C23 25 19 33 18 42')}
          {FACE(36, 64, 78, 90)}
        </>
      )}

      {type === 'coracao' && (
        <>
          <path d="M50 94 C22 74 4 54 6 34 C8 16 26 6 40 14 C45 17 49 22 50 25 C51 22 55 17 60 14 C74 6 92 16 94 34 C96 54 78 74 50 94 Z" fill="#ffffff" />
          {DOTS([[72, 18], [85, 27], [77, 39]])}
          <path d="M31 18 C39 25 42 35 36 41 C30 46 22 40 24 30 C25 23 27 20 31 18 Z" fill="#3f3f3f" />
          <path d="M69 18 C61 25 58 35 64 41 C70 46 78 40 76 30 C75 23 73 20 69 18 Z" fill="#3f3f3f" />
          <path d="M50 47 C57 47 63 52 63 58 C63 64 56 66 50 66 C44 66 37 64 37 58 C37 52 43 47 50 47 Z" fill="#3f3f3f" />
          {SHINE('M26 32 C21 40 19 48 20 56')}
          {FACE(30, 70, 76, 90)}
        </>
      )}
    </svg>
  );
};
