import React, { useState, useMemo } from 'react';
import type { CEFRLevel, LessonSummary, NativeLanguage } from '../types';
import { getLocalized } from '../utils/i18n';
import { LinvuuAvatar } from './LinvuuAvatar';

interface SidebarProps {
  lessons: LessonSummary[];
  activeDay: number;
  onSelectDay: (day: number) => void;
  nativeLang: NativeLanguage;
  userHasSubscription: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  lessons,
  activeDay,
  onSelectDay,
  nativeLang,
  userHasSubscription,
}) => {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('ALL');

  const filteredLessons = useMemo(() => {
    return lessons.filter((l) => {
      const matchesLevel = levelFilter === 'ALL' || l.level === levelFilter;
      const titleStr = getLocalized(l.title, nativeLang).toLowerCase();
      const subStr = getLocalized(l.subtitle, nativeLang).toLowerCase();
      const query = search.toLowerCase();
      const matchesSearch =
        !search ||
        titleStr.includes(query) ||
        subStr.includes(query) ||
        `dia ${l.day}`.includes(query) ||
        `day ${l.day}`.includes(query);
      return matchesLevel && matchesSearch;
    });
  }, [lessons, levelFilter, search, nativeLang]);

  const levels: (string | CEFRLevel)[] = ['ALL', 'A1', 'A2', 'B1', 'B2', 'C1'];
  const completedCount = lessons.filter((l) => l.isCompleted).length;

  return (
    <aside className="w-80 shrink-0 bg-[#0F121B] border-r border-white/[0.08] flex flex-col h-[calc(100vh-65px)] sticky top-[65px]">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-white/[0.08]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Trilha de 100 Dias</h2>
            <p className="text-[11px] text-slate-400">Passo a passo rumo à fluência</p>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            {completedCount}/100 concluídas
          </span>
        </div>

        {/* Level Filter Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {levels.map((lvl) => (
            <button
              key={lvl}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                levelFilter === lvl
                  ? 'bg-white/15 text-white font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setLevelFilter(lvl)}
            >
              {lvl === 'ALL' ? 'Todos' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Search Filter */}
      <div className="px-4 py-2.5 border-b border-white/[0.08]">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-white/[0.04] focus:bg-white/[0.07] border border-white/[0.08] focus:border-amber-500/50 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none transition-all"
            placeholder="Buscar por tema, gramática, dia..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Scrollable 100 Lessons List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredLessons.map((l) => {
          const isActive = l.day === activeDay;
          const title = getLocalized(l.title, nativeLang);
          const sub = getLocalized(l.subtitle, nativeLang);

          return (
            <div
              key={l.id}
              className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-500/40 text-white shadow-sm'
                  : 'hover:bg-white/[0.04] border border-transparent text-slate-300'
              }`}
              onClick={() => onSelectDay(l.day)}
            >
              {/* Day Number Badge */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                    : l.isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/[0.06] text-slate-400 group-hover:text-slate-200'
                }`}
              >
                {l.isCompleted ? '✓' : `D${l.day < 10 ? `0${l.day}` : l.day}`}
              </div>

              {/* Lesson Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/10 text-amber-300">
                    {l.level}
                  </span>
                  <span className={`text-xs font-semibold truncate ${isActive ? 'text-amber-200' : 'text-slate-200'}`}>
                    {title}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 truncate leading-tight">
                  {sub}
                </div>
              </div>

              {/* Status: Free vs Locked */}
              <div className="shrink-0 self-center">
                {l.isFree ? (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                    Grátis
                  </span>
                ) : l.isLocked ? (
                  <span className="text-slate-500 text-xs" title="Exclusivo para membros Linvuu">
                    🔒
                  </span>
                ) : (
                  <span className="text-emerald-400 text-xs" title="Liberado">
                    🔓
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {filteredLessons.length === 0 && (
          <div className="py-8 text-center text-xs text-slate-500">
            Nenhuma lição encontrada para essa busca.
          </div>
        )}
      </div>

      {/* Sidebar Mascot Companion Footer */}
      <div className="p-3 border-t border-white/[0.08] bg-[#0B0E14] flex items-center gap-3">
        <LinvuuAvatar
          emotion={activeDay <= 2 ? 'happy' : 'inspired'}
          size={36}
          color="#F59E0B"
          fillColor="#151A24"
          interactive={true}
        />
        <div className="text-[11px] leading-tight">
          <span className="text-slate-200 font-semibold block">Dia {activeDay} de 100</span>
          <span className="text-slate-400">Você está no caminho certo. Avance!</span>
        </div>
      </div>
    </aside>
  );
};
