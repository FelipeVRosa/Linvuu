import React, { useState } from 'react';
import type { NativeLanguage, TargetLanguage } from '../types';
import { getLocalized, UI_STRINGS } from '../utils/i18n';

interface PhilologistModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetLang: TargetLanguage;
  nativeLang: NativeLanguage;
  initialSentence?: string;
  initialFocus?: string;
}

export const PhilologistModal: React.FC<PhilologistModalProps> = ({
  isOpen,
  onClose,
  targetLang,
  nativeLang,
  initialSentence = '',
  initialFocus = '',
}) => {
  const [sentence, setSentence] = useState(initialSentence);
  const [focus, setFocus] = useState(initialFocus);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAnalyze = async () => {
    if (!sentence.trim()) return;
    setLoading(true);
    setAnalysis(null);

    try {
      const res = await fetch('/api/ai/philological-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sentence,
          grammaticalFocus: focus,
          targetLanguage: targetLang,
          nativeLanguage: nativeLang,
        }),
      });

      const data = await res.json();
      setAnalysis(data.syntacticTreeAnalysis || data.literalTranslation || 'Análise concluída.');
    } catch (err: any) {
      setAnalysis(`Erro na conexão com o servidor de High Thinking: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Quick preset sentences for instant academic testing
  const presets: Record<TargetLanguage, { label: string; text: string; focus: string }[]> = {
    de: [
      {
        label: 'Alemão C1: Período com Particípio Expandido e V2',
        text: 'Die von dem berühmten Philosophen verfassten, jedoch von der zeitgenössischen Kritik missverstandenen Schriften enthalten den Keim einer neuen Ontologie.',
        focus: 'Construção participial anteposta expandida (Partizipialattribut) e sua equivalência com orações relativas',
      },
      {
        label: 'Alemão C1: Konjunktiv I no Discurso Indireto',
        text: 'Der Minister betonte, die Regierung habe alle erforderlichen Maßnahmen ergriffen und werde die Reform ohne Verzögerung umsetzen.',
        focus: 'Konjunktiv I no relato indireto (habe vs. hat; werde vs. wird) e neutralidade enunciativa',
      },
    ],
    ru: [
      {
        label: 'Russo C1: Деепричастный оборот e Aspecto',
        text: 'Прочитав старинную рукопись и поняв её скрытый смысл, исследователь не мог не поразиться глубине средневековой мысли.',
        focus: 'Gerúndio perfeito (Деепричастие совершенного вида) e dupla negação enfática',
      },
    ],
    fr: [
      {
        label: 'Francês C1: Subjonctif no Período Hipotético',
        text: 'Quoi qu\'il en soit et bien que nous n\'ayons encore recueilli que des données parcellaires, la rigueur méthodologique impose la prudence.',
        focus: 'Regência do subjuntivo com locuções concessivas (bien que, quoi que) e negação restritiva',
      },
    ],
    es: [
      {
        label: 'Espanhol C1: Valores de SE e Subjuntivo Imperfeito',
        text: 'Si se hubiera prestado mayor atención a los manuscritos que se conservaban en Toledo, muchas controversias se habrían evitado.',
        focus: 'Valores da partícula "se" (passiva reflexa vs. impessoal) e condicional irreal do passado',
      },
    ],
  };

  return (
    <div className="thinking-modal-overlay" onClick={onClose}>
      <div className="thinking-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="thinking-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🏛️</span>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--ouro)' }}>
                {getLocalized(UI_STRINGS.thinkingPhilologistTitle, nativeLang)}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--texto-secundario)' }}>
                Análise linguística, filológica e sintática avançada C1
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="thinking-badge" title="Raciocínio profundo ativado no Gemini 3.1 Pro">
              ⚡ High Thinking
            </span>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--texto-secundario)',
                fontSize: '1.4rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="thinking-modal-body">
          {/* Quick Academic Presets */}
          {presets[targetLang] && (
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--ouro)', fontWeight: 600, textTransform: 'uppercase' }}>
                Exemplos de Alta Complexidade C1:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.4rem' }}>
                {presets[targetLang].map((p, idx) => (
                  <button
                    key={idx}
                    className="timestamp-chip"
                    onClick={() => {
                      setSentence(p.text);
                      setFocus(p.focus);
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Sentence */}
          <div className="thinking-input-box">
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--texto)' }}>
              Sentença ou Estrutura em Estudo ({targetLang.toUpperCase()}):
            </label>
            <textarea
              className="thinking-textarea"
              placeholder="Insira a frase, construção oracional complexa ou questão gramatical profunda..."
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
            />
          </div>

          <div className="thinking-input-box">
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--texto-secundario)' }}>
              Foco da Análise Gramatical (Opcional):
            </label>
            <input
              type="text"
              className="sidebar-search-input"
              placeholder="Ex: Regência de preposição, inversão V2, casos, subjuntivo, etimologia..."
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            />
          </div>

          <button
            className="kosmos-btn kosmos-btn-primary"
            style={{ width: '100%', marginBottom: '1.5rem' }}
            disabled={loading || !sentence.trim()}
            onClick={handleAnalyze}
          >
            {loading ? (
              <span>⚡ Executando Raciocínio Profundo C1 (High Thinking)...</span>
            ) : (
              <span>✨ Executar Análise Filológica Universitária</span>
            )}
          </button>

          {/* Analysis Result Output */}
          {analysis && (
            <div>
              <h4 style={{ color: 'var(--ouro)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Parecer Filológico &amp; Tratado Gramatical:
              </h4>
              <div className="thinking-response-panel">{analysis}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
