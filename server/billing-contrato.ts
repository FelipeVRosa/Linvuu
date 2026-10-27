/** Contrato sem efeitos colaterais para planos do site (nunca cria cobranças nem preços). */
export const PLANOS_WEB = ['mensal', 'trimestral', 'trimestral-pix', 'anual'] as const;
export type PlanoWeb = (typeof PLANOS_WEB)[number];

/** Validação explícita; não confiar em valores enviados pelo navegador. */
export function planoSiteValido(value: unknown): value is PlanoWeb {
  return typeof value === 'string' && (PLANOS_WEB as readonly string[]).includes(value);
}

/** Em produção, ID criado e revisado no Stripe; a rota não pode criar preço novo silenciosamente. */
export function precoMensalObrigatorio(id: string | undefined): string {
  if (!id || !/^price_[A-Za-z0-9]+$/.test(id)) {
    throw new Error('STRIPE_PRICE_ID ausente ou inválido: confira configuração comercial no Render.');
  }
  return id;
}
