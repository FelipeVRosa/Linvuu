// Assinatura comprada no app (Google Play Billing, recibos validados pelo RevenueCat).
// O servidor pergunta ao RevenueCat, com a chave SECRETA (só no servidor, nunca no app), se o uid do Firebase
// tem o entitlement ativo. O app nunca decide acesso: só a resposta do servidor libera aula, áudio e gramática.
// Desligado sem REVENUECAT_SECRET_KEY. Compras de testadores (sandbox) só contam com REVENUECAT_ACEITAR_SANDBOX=true.

export interface AcessoPlay { ativa: boolean; ate: number | null; cancelaEm: number | null; sandbox: boolean; produto: string | null }
const NADA: AcessoPlay = { ativa: false, ate: null, cancelaEm: null, sandbox: false, produto: null };

const segredo = () => process.env.REVENUECAT_SECRET_KEY || '';
export const entitlementPlay = () => process.env.REVENUECAT_ENTITLEMENT || 'Premium';
/** Só chave secreta v1 (sk_). Chave pública do app (goog_/test_) aqui seria erro de configuração. */
export const playConfigurado = () => segredo().startsWith('sk_');
const aceitaSandbox = () => process.env.REVENUECAT_ACEITAR_SANDBOX === 'true';

type Assinante = {
  subscriber?: {
    entitlements?: Record<string, { expires_date?: string | null; grace_period_expires_date?: string | null; product_identifier?: string }>;
    subscriptions?: Record<string, { is_sandbox?: boolean; unsubscribe_detected_at?: string | null; refunded_at?: string | null; expires_date?: string | null }>;
  };
};
const ms = (s?: string | null) => (s ? Date.parse(s) : NaN);

/** Lê a resposta de GET /v1/subscribers/{uid}. Pura: testada em Node sem rede. */
export function lerAcessoPlay(j: Assinante, entitlement: string, agora: number, sandboxPermitido: boolean): AcessoPlay {
  const e = j.subscriber?.entitlements?.[entitlement];
  if (!e) return NADA;
  const produto = e.product_identifier ?? null;
  const assinatura = produto ? j.subscriber?.subscriptions?.[produto] : undefined;
  const sandbox = !!assinatura?.is_sandbox;
  if (sandbox && !sandboxPermitido) return { ...NADA, sandbox, produto };
  if (assinatura?.refunded_at) return { ...NADA, sandbox, produto };
  // Sem data de expiração = compra vitalícia; com período de carência, vale até o fim da carência.
  const datas = [ms(e.expires_date), ms(e.grace_period_expires_date)].filter(Number.isFinite);
  const fim = datas.length ? Math.max(...datas) : NaN; // Math.max com NaN daria NaN e negaria acesso a quem pagou
  const vitalicia = e.expires_date === null;
  const ativa = vitalicia || (Number.isFinite(fim) && fim > agora);
  const ate = vitalicia || !Number.isFinite(fim) ? null : Math.floor(fim / 1000);
  return { ativa, ate, cancelaEm: ativa && assinatura?.unsubscribe_detected_at ? ate : null, sandbox, produto };
}

/** Consulta o RevenueCat. Falha de rede ou resposta inválida = erro (o chamador responde 500, nunca libera por engano). */
export async function consultarPlay(uid: string, f: typeof fetch = fetch): Promise<AcessoPlay> {
  if (!playConfigurado()) return NADA;
  const r = await f(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`, {
    headers: { Authorization: `Bearer ${segredo()}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(8000),
  });
  if (r.status === 404) return NADA;
  if (!r.ok) throw new Error(`revenuecat ${r.status}`);
  return lerAcessoPlay((await r.json()) as Assinante, entitlementPlay(), Date.now(), aceitaSandbox());
}
