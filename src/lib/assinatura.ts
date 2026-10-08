import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { carregarAuth } from './firebase';

export type Assinatura = { carregando: boolean; ativa: boolean; indisponivel: boolean; cancelaEm: number | null; recarregar: () => void };

async function chamar(caminho: string, metodo: 'GET' | 'POST') {
  const { auth } = await carregarAuth();
  const token = await auth.currentUser?.getIdToken();
  const r = await fetch(`/api/billing/${caminho}`, { method: metodo, headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || 'Erro');
  return j;
}

export async function abrir(tipo: 'checkout' | 'portal') {
  const j = await chamar(tipo, 'POST');
  if (j.url) window.location.href = j.url;
}

export function useAssinatura(): Assinatura {
  const { usuario, carregando: auth } = useAuth();
  const [estado, setEstado] = useState({ carregando: true, ativa: false, indisponivel: false, cancelaEm: null as number | null });
  const [n, setN] = useState(0);
  const recarregar = useCallback(() => setN((x) => x + 1), []);
  useEffect(() => {
    if (auth) return;
    if (!usuario) { setEstado({ carregando: false, ativa: false, indisponivel: false, cancelaEm: null }); return; }
    let vivo = true;
    chamar('status', 'GET')
      .then((j) => vivo && setEstado({ carregando: false, ativa: !!j.ativa, indisponivel: false, cancelaEm: j.cancelaEm ?? null }))
      .catch(() => vivo && setEstado({ carregando: false, ativa: false, indisponivel: true, cancelaEm: null }));
    return () => { vivo = false; };
  }, [usuario, auth, n]);
  return { ...estado, recarregar };
}
