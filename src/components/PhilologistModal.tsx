import React, { useState } from 'react';
import type { NativeLanguage, TargetLanguage } from '../types';
import { MASCOTS } from '../assets/mascots';
import { LinvuuAvatar } from './LinvuuAvatar';

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

  const currentMascot = MASCOTS[targetLang] || MASCOTS.de;

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
      setAnalysis(data.syntacticTreeAnalysis || data.literalTranslation || 'Explicação detalhada pronta.');
    } catch (err: any) {
      setAnalysis(`Não foi possível conectar com o Tutor: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Inspiring practical presets for the target language
  const presets: Record<TargetLanguage, { label: string; text: string; focus: string }[]> = {
    de: [
      {
        label: 'Alemão Natural: Como estruturar pensamentos no dia a dia',
        text: 'Ich habe gestern mit meiner Freundin darüber gesprochen, aber wir haben uns noch nicht entschieden.',
        focus: 'Ordem natural dos verbos no passado e uso do reflexivo com preposição',
      },
      {
        label: 'Alemão Profissional: Explicar planos com clareza',
        text: 'Es wäre für uns von großem Vorteil, wenn wir das Treffen auf nächste Woche verschieben könnten.',
        focus: 'Como soar educado e persuasivo usando o Konjunktiv II',
      },
    ],
    ru: [
      {
        label: 'Russo Prático: Conversação e sentimentos',
        text: 'Мне очень нравится этот город, хотя погода сегодня немного холодная.',
        focus: 'Construção do verbo gostar com dativo e ritmo da fala russa',
      },
    ],
    fr: [
      {
        label: 'Francês Elegante: Opiniões e vida cotidiana',
        text: 'Je ne pense pas que ce soit la meilleure solution, mais on peut essayer.',
        focus: 'Subjuntivo em frases cotidianas de opinião sem parecer formal demais',
      },
    ],
    es: [
      {
        label: 'Espanhol Fluente: Expressões autênticas',
        text: 'Ojalá tengamos tiempo de recorrer todo el centro histórico antes de que anochezca.',
        focus: 'Uso de ojalá com subjuntivo e ritmo conversacional natural',
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl bg-[#11141E] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <LinvuuAvatar
              emotion={loading ? 'thinking' : analysis ? 'talking' : 'happy'}
              size={48}
              color={currentMascot.color}
              fillColor="#1A202E"
            />
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Tutor Pessoal Linvuu
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {currentMascot.language}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Tire dúvidas de frases, sotaque, origens e como soar como um nativo.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          {/* Quick Presets */}
          {presets[targetLang] && (
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                💡 Exemplos recomendados para praticar:
              </label>
              <div className="space-y-1.5">
                {presets[targetLang].map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSentence(p.text);
                      setFocus(p.focus);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-xs transition-colors flex items-center justify-between group"
                  >
                    <span className="text-slate-300 group-hover:text-amber-200">{p.label}</span>
                    <span className="text-[10px] text-amber-400 font-bold">Usar →</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Sentence */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Frase ou palavra que você quer entender a fundo:
            </label>
            <textarea
              rows={2}
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              placeholder={`Digite ou cole uma frase em ${currentMascot.language}...`}
              className="w-full bg-white/[0.04] focus:bg-white/[0.07] border border-white/10 focus:border-amber-500/50 rounded-xl p-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Focus or Question */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              O que você quer que o Tutor explique? (Opcional)
            </label>
            <input
              type="text"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              placeholder="Ex: Como pronunciar essa parte? Por que essa ordem? Como usar em uma conversa?"
              className="w-full bg-white/[0.04] focus:bg-white/[0.07] border border-white/10 focus:border-amber-500/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || !sentence.trim()}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Consultando o Tutor...' : '✨ Explicar com o Tutor Linvuu'}</span>
          </button>

          {/* Result Output */}
          {analysis && (
            <div className="p-4 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-slate-200 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <span>💬</span>
                <span>Explicação do Tutor Linvuu:</span>
              </div>
              <p className="whitespace-pre-line text-slate-200">{analysis}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
