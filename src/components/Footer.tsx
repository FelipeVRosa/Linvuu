import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#e1ddd1] mt-20 py-9 pb-12">
      <div className="max-w-[1080px] mx-auto px-7 flex justify-between gap-5 flex-wrap">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8f9d9a] leading-loose">
          <strong className="text-[#6b7280] font-medium">LINVUU</strong> · IDIOMAS SEM ESFORÇO
          <br />
          SÃO PAULO · 2026
        </span>
        <nav className="flex gap-5.5 flex-wrap items-center">
          <a
            href="#idiomas"
            className="text-xs font-medium tracking-[0.08em] uppercase text-[#6b7280] hover:text-[#d64000] transition-colors"
          >
            Idiomas
          </a>
          <a
            href="#profissoes"
            className="text-xs font-medium tracking-[0.08em] uppercase text-[#6b7280] hover:text-[#d64000] transition-colors"
          >
            Profissões
          </a>
          <a
            href="#praticar"
            className="text-xs font-medium tracking-[0.08em] uppercase text-[#6b7280] hover:text-[#d64000] transition-colors"
          >
            Praticar
          </a>
          <a
            href="#familia"
            className="text-xs font-medium tracking-[0.08em] uppercase text-[#6b7280] hover:text-[#d64000] transition-colors"
          >
            Família
          </a>
        </nav>
      </div>
    </footer>
  );
};
