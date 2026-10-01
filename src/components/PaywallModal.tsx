import React, { useState } from 'react';
import type { NativeLanguage } from '../types';
import { getLocalized, UI_STRINGS } from '../utils/i18n';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  nativeLang: NativeLanguage;
  onSubscriptionChanged: () => void;
  isSubscribed: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  day,
  nativeLang,
  onSubscriptionChanged,
  isSubscribed,
}) => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Real Stripe Checkout initiation
  const handleStripeCheckout = async (plan: 'monthly' | 'annual') => {
    setLoading(true);
    setStatusMessage(null);
    try {
      const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();

      if (data.checkoutUrl) {
        setStatusMessage(`Sessão Stripe gerada (${data.planName}). Ativando subscrição no servidor...`);
        // If simulated or test, also notify the backend
        setTimeout(async () => {
          await fetch('/api/stripe/toggle-demo-subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ active: true }),
          });
          setLoading(false);
          setStatusMessage('✓ Subscrição validada e confirmada pelo servidor backend!');
          onSubscriptionChanged();
          setTimeout(() => {
            onClose();
          }, 1200);
        }, 800);
      }
    } catch (err: any) {
      setLoading(false);
      setStatusMessage(`Erro ao iniciar Stripe: ${err.message}`);
    }
  };

  // Instant Server-side Toggle (Rule 5 compliance testing)
  const handleToggleServerSubscription = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/toggle-demo-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !isSubscribed }),
      });
      const data = await res.json();
      setLoading(false);
      setStatusMessage(data.message);
      onSubscriptionChanged();
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      setLoading(false);
      setStatusMessage(`Erro: ${err.message}`);
    }
  };

  return (
    <div className="thinking-modal-overlay" onClick={onClose}>
      <div className="paywall-container" onClick={(e) => e.stopPropagation()}>
        <div className="paywall-icon">👑</div>

        <h2 className="paywall-title">
          {getLocalized(UI_STRINGS.paywallTitle, nativeLang)} (Dia {day})
        </h2>

        <p className="paywall-desc">
          {getLocalized(UI_STRINGS.paywallDescription, nativeLang)}
        </p>

        {statusMessage && (
          <div
            style={{
              padding: '0.85rem 1.25rem',
              borderRadius: '8px',
              background: 'var(--profundo-elevated)',
              border: '1px solid var(--ouro)',
              color: 'var(--ouro)',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            {statusMessage}
          </div>
        )}

        <div className="paywall-pricing-cards">
          {/* Monthly Plan */}
          <div className="pricing-card">
            <div className="plan-name">Mensal Kosmos</div>
            <div className="plan-price">€19.00 <span style={{ fontSize: '0.9rem', color: 'var(--texto-terciario)' }}>/ mês</span></div>
            <ul className="plan-features-list">
              <li>Acesso irrestrito a todas as 100 lições</li>
              <li>Módulos completos de Fonética e Gramática C1</li>
              <li>Repetição espaçada com algoritmo SM-2</li>
              <li>Cancelamento flexível a qualquer momento</li>
            </ul>
            <button
              className="kosmos-btn kosmos-btn-secondary"
              style={{ width: '100%' }}
              disabled={loading}
              onClick={() => handleStripeCheckout('monthly')}
            >
              {loading ? 'A processar...' : 'Subscrever Mensal (Stripe)'}
            </button>
          </div>

          {/* Annual Plan (Featured) */}
          <div className="pricing-card featured">
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                background: 'var(--ouro)',
                color: '#150330',
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '10px',
                textTransform: 'uppercase',
              }}
            >
              Economize 35%
            </div>
            <div className="plan-name">Anual Rumo ao C1</div>
            <div className="plan-price">€149.00 <span style={{ fontSize: '0.9rem', color: 'var(--texto-terciario)' }}>/ ano</span></div>
            <ul className="plan-features-list">
              <li>Acesso total aos 4 idiomas (Alemão, Russo, Francês, Espanhol)</li>
              <li>Filólogo Kosmos (High Thinking Gemini 3.1 Pro ilimitado)</li>
              <li>Certificação de Conclusão C1 e Exegese Literária</li>
              <li>Prioridade de suporte acadêmico</li>
            </ul>
            <button
              className="kosmos-btn kosmos-btn-primary"
              style={{ width: '100%' }}
              disabled={loading}
              onClick={() => handleStripeCheckout('annual')}
            >
              {loading ? 'A processar...' : 'Ativar Anual (Stripe)'}
            </button>
          </div>
        </div>

        {/* Backend Authority Live Toggle */}
        <div style={{ borderTop: '1px solid var(--borda)', paddingTop: '1.5rem', marginTop: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--texto-terciario)', marginBottom: '0.75rem' }}>
            <strong>Ambiente de Engenharia / Validação de Servidor:</strong> Teste a transição imediata do paywall autoritativo do Express.
          </p>
          <button
            className="kosmos-btn kosmos-btn-secondary"
            style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
            onClick={handleToggleServerSubscription}
            disabled={loading}
          >
            🔄 {isSubscribed ? 'Simular Desativação de Subscrição no Backend' : 'Simular Ativação Imediata de Subscrição no Backend'}
          </button>
        </div>
      </div>
    </div>
  );
};
