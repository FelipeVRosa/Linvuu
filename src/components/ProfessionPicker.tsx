import React from 'react';

const PROFS: Record<
  string,
  { label: string; icon: string }
> = {
  med: { label: 'Medicina', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>' },
  tec: { label: 'Tecnologia', icon: '<path d="M8 6 3 12l5 6M16 6l5 6-5 6"/>' },
  eng: {
    label: 'Engenharia',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M18.4 5.6l-2.2 2.2M7.8 16.2l-2.2 2.2"/>',
  },
  dir: {
    label: 'Direito',
    icon: '<path d="M12 4v16M8 20h8M5 8h14M12 4 6 8M12 4l6 4"/><path d="M6 8l-2.4 5.2a2.9 2.9 0 0 0 4.8 0zM18 8l-2.4 5.2a2.9 2.9 0 0 0 4.8 0z"/>',
  },
  neg: {
    label: 'Negócios',
    icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>',
  },
  hot: {
    label: 'Hotelaria',
    icon: '<path d="M6 8a6 6 0 0 1 12 0c0 7 2 8 2 8H4s2-1 2-8"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  },
};

interface ProfessionPickerProps {
  selected: string;
  onSelect: (prof: string) => void;
}

export const ProfessionPicker: React.FC<ProfessionPickerProps> = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5" role="group" aria-label="Escolha uma profissão">
      {Object.entries(PROFS).map(([id, prof]) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`relative bg-white border rounded p-5.5 flex flex-col items-center gap-3 transition-all ${
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
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d64000"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: prof.icon }}
          />
          <span className="text-sm font-medium text-[#00262b]">{prof.label}</span>
        </button>
      ))}
    </div>
  );
};
