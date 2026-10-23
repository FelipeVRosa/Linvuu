/** Assinatura pelo Google Play Billing (via SDK do RevenueCat). Desligado no build padrão.
 *  A chave aqui é a pública do SDK Android (goog_), feita para ficar no app; a secreta (sk_) fica só no servidor.
 *  A compra é vinculada ao uid do Firebase (appUserID). Quem libera conteúdo é o servidor, nunca este arquivo. */
import { Capacitor } from '@capacitor/core';
import { Purchases, type PurchasesPackage } from '@revenuecat/purchases-capacitor';
import { configuracaoPlay } from './comprasPlayModelo';

const env = import.meta.env ?? {};
export const comprasPlayDisponiveis = () => configuracaoPlay(env.VITE_BILLING_MODE, env.VITE_REVENUECAT_ANDROID_KEY, Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android');

let uidAtual: string | null = null, configurado = false, fila = Promise.resolve();
/** Uma operação por vez; troca de conta faz logIn com o novo uid antes de qualquer compra. */
function operacao<T>(uid: string, acao: () => Promise<T>): Promise<T> {
  const executar = async () => {
    if (!comprasPlayDisponiveis() || !uid) throw new Error('play-indisponivel');
    if (!configurado) { await Purchases.configure({ apiKey: env.VITE_REVENUECAT_ANDROID_KEY, appUserID: uid }); configurado = true; uidAtual = uid; }
    else if (uidAtual !== uid) { await Purchases.logIn({ appUserID: uid }); uidAtual = uid; }
    return acao();
  };
  const r = fila.then(executar);
  fila = r.then(() => {}, () => {});
  return r;
}

export const ofertasPlay = (uid: string) => operacao(uid, async () => (await Purchases.getOfferings()).current?.availablePackages ?? []);
export const comprarPlay = (uid: string, pacote: PurchasesPackage) => operacao(uid, () => Purchases.purchasePackage({ aPackage: pacote }));
export const restaurarPlay = (uid: string) => operacao(uid, () => Purchases.restorePurchases());
