import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { carregarAuth } from './firebase';
import { api } from './api';
import { Capacitor } from '@capacitor/core';

/** No app nativo a compra fica desligada até a decisão de cobrança pela loja (Google Play / App Store). Veja docs/APP.md. */
export const compraNoAppDisponivel = () => !Capacitor.isNativePlatform();

export type Assinatura = { carregando: boolean; ativa: boolean; indisponivel: boolean; cancelaEm: number | null; via: 'assinatura' | 'trimestral' | null; ate: number | null; recarregar: () => void };

async function chamar(caminho: string, metodo: 'GET' | 'POST', corpo?: object) {
  const { auth } = await carregarAuth();
  const token = await auth.currentUser?.getIdToken();
  const r = await fetch(api(`/api/billing/${caminho}`), { method: metodo, headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(corpo ? { 'Content-Type': 'application/json' } : {}) }, body: corpo ? JSON.stringify(corpo) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || 'Erro');
  return j;
}

export type Plano = 'mensal' | 'trimestral' | 'trimestral-pix';
export async function abrir(tipo: 'checkout' | 'portal', plano?: Plano) {
  if (!compraNoAppDisponivel()) throw new Error('A compra ainda não está disponível neste aplicativo.');
  const j = await chamar(tipo, 'POST', plano ? { plano } : undefined);
  if (j.url) window.location.href = j.url;
}

export function useAssinatura(): Assinatura {
  const { usuario, carregando: auth } = useAuth();
  const [estado, setEstado] = useState({ carregando: true, ativa: false, indisponivel: false, cancelaEm: null as number | null, via: null as 'assinatura' | 'trimestral' | null, ate: null as number | null });
  const [n, setN] = useState(0);
  const recarregar = useCallback(() => setN((x) => x + 1), []);
  useEffect(() => {
    if (auth) return;
    if (!usuario) { setEstado({ carregando: false, ativa: false, indisponivel: false, cancelaEm: null, via: null, ate: null }); return; }
    let vivo = true;
    chamar('status', 'GET')
      .then((j) => vivo && setEstado({ carregando: false, ativa: !!j.ativa, indisponivel: false, cancelaEm: j.cancelaEm ?? null, via: j.via ?? null, ate: j.ate ?? null }))
      .catch(() => vivo && setEstado({ carregando: false, ativa: false, indisponivel: true, cancelaEm: null, via: null, ate: null }));
    return () => { vivo = false; };
  }, [usuario, auth, n]);
  return { ...estado, recarregar };
}
