// Substitui `../comprasPlay` no build do APK da v1 (sem compras no app). Nenhuma biblioteca de cobrança entra no pacote.
// Para vender no app: gerar o APK com VITE_BILLING_MODE definido (o build usa os módulos reais) e incluir o plugin no capacitor.config.
export const comprasPlayDisponiveis = () => false;
export const ofertasPlay = async (_uid: string): Promise<never[]> => [];
export const comprarPlay = async (_uid: string, _pacote: unknown): Promise<never> => { throw new Error('compras-desativadas'); };
export const restaurarPlay = async (_uid: string): Promise<never> => { throw new Error('compras-desativadas'); };
