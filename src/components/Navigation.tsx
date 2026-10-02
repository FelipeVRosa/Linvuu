import React from 'react';

interface NavigationProps {
  onStart?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStart }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[14px] bg-[#f9f8f6]/90 border-b border-[#e1ddd1]">
      <div className="max-w-[1080px] mx-auto px-7 py-3.5 flex items-center justify-between gap-5">
        <a href="#" className="inline-flex items-center gap-2.5">
          <svg width="26" height="20" viewBox="0 0 32 24" aria-hidden="true" className="shrink-0">
            <rect width="11" height="6" fill="#00262b" />
            <rect y="9" width="22" height="6" fill="#00262b" />
            <rect y="18" width="7" height="6" fill="#00262b" />
          </svg>
          <span className="font-black text-[21px] tracking-[-0.04em] text-[#00262b]">Linvuu</span>
        </a>

        <nav className="hidden md:flex gap-0.5">
          <a
            href="#idiomas"
            className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#8f9d9a] hover:text-[#374151] rounded transition-colors"
          >
            Idiomas
          </a>
          <a
            href="#profissoes"
            className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#8f9d9a] hover:text-[#374151] rounded transition-colors"
          >
            Profissões
          </a>
          <a
            href="#praticar"
            className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#8f9d9a] hover:text-[#374151] rounded transition-colors"
          >
            Praticar
          </a>
          <a
            href="#familia"
            className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#8f9d9a] hover:text-[#374151] rounded transition-colors"
          >
            Família
          </a>
        </nav>

        <button
          onClick={onStart ? onStart : () => {
            const el = document.getElementById('idiomas');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#d64000] text-white font-medium text-[13px] tracking-[0.12em] uppercase px-5.5 py-2.5 rounded-[94px] border border-[#d64000] shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] hover:bg-[#b33600] transition-colors cursor-pointer"
        >
          {onStart ? 'Abrir Plataforma' : 'Começar'}
        </button>
      </div>
    </header>
  );
};
