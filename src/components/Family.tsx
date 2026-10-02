import React from 'react';
import { Mascot } from './Mascot';

const FAMILY_MEMBERS: [
  'tomate' | 'puff' | 'nuvem' | 'u' | 'fantasma' | 'ampulheta' | 'coracao',
  string,
  string
][] = [
  ['tomate', 'Tomate', 'Dia 1 · boas-vindas'],
  ['puff', 'Puff', 'Vocabulário do trabalho'],
  ['nuvem', 'Nuvem', 'Imersão e áudio'],
  ['u', 'U', 'Gramática na prática'],
  ['fantasma', 'Fantasma', 'Revisão espaçada'],
  ['ampulheta', 'Ampulheta', 'Rotina de 30 dias'],
  ['coracao', 'Coração', 'Motivação e sequência'],
];

export const Family: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3.5">
      {FAMILY_MEMBERS.map(([type, name, role]) => (
        <div
          key={type}
          className="bg-white border border-[#e1ddd1] rounded-md p-5.5 px-3 flex flex-col items-center gap-2.5 text-center shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] hover:-translate-y-1 transition-transform"
        >
          <div className="shrink-0">
            <Mascot type={type} size={92} />
          </div>
          <span className="text-sm font-bold text-[#00262b]">{name}</span>
          <span className="text-xs text-[#6b7280] leading-snug">{role}</span>
        </div>
      ))}
    </div>
  );
};
