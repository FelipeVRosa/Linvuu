import React, { useState, useMemo } from 'react';
import type { CEFRLevel, LessonSummary, NativeLanguage } from '../types';
import { getLocalized } from '../utils/i18n';

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

  return (
    <aside className="kosmos-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <h2>Programa (100 Dias)</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--ouro)', fontWeight: 600 }}>
            {lessons.filter((l) => l.isCompleted).length}/100 Concluídas
          </span>
        </div>

        {/* Level Filter Bar */}
        <div className="level-filter-bar">
          {levels.map((lvl) => (
            <button
              key={lvl}
              className={`filter-chip ${levelFilter === lvl ? 'active' : ''}`}
              onClick={() => setLevelFilter(lvl)}
            >
              {lvl === 'ALL' ? 'Todos' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Search Filter */}
      <div className="sidebar-search-box">
        <input
          type="text"
          className="sidebar-search-input"
          placeholder="Pesquisar gramática, dia, tema..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Scrollable 100 Lessons List */}
      <div className="lessons-scroll-list">
        {filteredLessons.map((l) => {
          const isActive = l.day === activeDay;
          const title = getLocalized(l.title, nativeLang);
          const sub = getLocalized(l.subtitle, nativeLang);

          return (
            <div
              key={l.id}
              className={`lesson-item-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectDay(l.day)}
            >
              <div className="day-badge">
                {l.isCompleted ? '✓ D' : 'D'}
                {l.day < 10 ? `0${l.day}` : l.day}
              </div>

              <div className="lesson-item-info">
                <div className="lesson-item-title">{title}</div>
                <div className="lesson-item-sub">
                  <span style={{ color: 'var(--ouro)', fontWeight: 600, marginRight: '0.35rem' }}>
                    [{l.level}]
                  </span>
                  {sub}
                </div>
              </div>

              {/* Security Status (Rule 5: Days 1 & 2 Free, Day 3+ Locked) */}
              {l.isFree ? (
                <span className="free-pill">GRÁTIS</span>
              ) : l.isLocked ? (
                <span className="lock-status-icon" title="Bloqueado: Requer subscrição Kosmos">
                  🔒
                </span>
              ) : (
                <span style={{ fontSize: '0.8rem', color: 'var(--sucesso)' }} title="Desbloqueado">
                  🔓
                </span>
              )}
            </div>
          );
        })}

        {filteredLessons.length === 0 && (
          <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--texto-terciario)', fontSize: '0.85rem' }}>
            Nenhuma lição encontrada com esses critérios.
          </div>
        )}
      </div>
    </aside>
  );
};
