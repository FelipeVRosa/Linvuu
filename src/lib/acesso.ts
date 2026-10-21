import { LOCALE, T } from '../i18n';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { carregarAuth } from './firebase';
import { api } from './api';

export type Assinatura = { carregando: boolean; ativa: boolean; indisponivel: boolean; cancelaEm: number | null; via: 'assinatura' | 'trimestral' | 'play' | null; ate: number | null; recarregar: () => void };

async function chamar(caminho: string, metodo: 'GET' | 'POST', corpo?: object) {
  const { auth } = await carregarAuth();
  const token = await auth.currentUser?.getIdToken();
  const r = await fetch(api(`/api/billing/${caminho}`), { method: metodo, headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(corpo ? { 'Content-Type': 'application/json' } : {}) }, body: corpo ? JSON.stringify(corpo) : undefined });
  const j = await r.json().catch(() => ({}));
  // a mensagem sai no idioma do site (o servidor responde em português)
  if (!r.ok) throw new Error(r.status === 401 ? T.erros.entreConta : r.status === 503 ? T.erros.pagamentoIndisponivel : r.status === 429 ? T.erros['auth/too-many-requests'] : T.erros.padrao);
  return j;
}

export function useAssinatura(): Assinatura {
  const { usuario, carregando: auth } = useAuth();
  const [estado, setEstado] = useState({ carregando: true, ativa: false, indisponivel: false, cancelaEm: null as number | null, via: null as 'assinatura' | 'trimestral' | 'play' | null, ate: null as number | null });
  const [n, setN] = useState(0);
  const recarregar = useCallback(() => setN((x) => x + 1), []);
  useEffect(() => {
    if (auth) return;
    if (!usuario) { setEstado({ carregando: false, ativa: false, indisponivel: false, cancelaEm: null, via: null, ate: null }); return; }
    let vivo = true;
    setEstado({ carregando: true, ativa: false, indisponivel: false, cancelaEm: null, via: null, ate: null });
    chamar('status', 'GET')
      .then((j) => vivo && setEstado({ carregando: false, ativa: !!j.ativa, indisponivel: false, cancelaEm: j.cancelaEm ?? null, via: j.via ?? null, ate: j.ate ?? null }))
      .catch(() => vivo && setEstado({ carregando: false, ativa: false, indisponivel: true, cancelaEm: null, via: null, ate: null }));
    return () => { vivo = false; };
  }, [usuario, auth, n]);
  return { ...estado, recarregar };
}

