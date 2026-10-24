import { Capacitor } from '@capacitor/core';
import { useAuth } from './AuthContext';
import { destinoSessao } from './destinoSessao';

/** A vitrine pública leva à oferta; contas e app conservam a trilha completa. */
export function useDestinoSessao() {
  const { usuario } = useAuth();
  const nativo = (import.meta.env ?? {}).VITE_ALVO === 'apk' || Capacitor.isNativePlatform();
  return (curso: string, dia: number) => destinoSessao(curso, dia, !!usuario, nativo);
}
