// Compras no app (Google Play Billing via RevenueCat). Desligado por padrão:
// só liga com VITE_COMPRAS_ATIVAS=true e uma chave pública do SDK em VITE_REVENUECAT_ANDROID_KEY.
// A chave pública do SDK não é segredo; a chave secreta nunca entra no app.
import { Capacitor } from '@capacitor/core';
import { Purchases } from '@revenuecat/purchases-capacitor';

const CHAVE = (import.meta.env.VITE_REVENUECAT_ANDROID_KEY as string | undefined) || '';
const ATIVO = import.meta.env.VITE_COMPRAS_ATIVAS === 'true';

let configurado = false;

/** Verdadeiro só no app nativo, com a flag ligada e a chave definida. */
export const comprasAtivas = () => ATIVO && !!CHAVE && Capacitor.isNativePlatform();

/** Configura o SDK uma vez. Passe o uid do Firebase para vincular a compra à conta. */
export async function iniciarCompras(uid: string | null): Promise<void> {
  if (!comprasAtivas() || configurado) return;
  await Purchases.configure({ apiKey: CHAVE, appUserID: uid });
  configurado = true;
}
