// Cliente do pedido de exclusão da conta (POST /api/conta/excluir). Usado no app e no site, só para quem está logado.
import { api } from './api';
import { carregarAuth } from './firebase';

export type ResultadoExclusao = 'ok' | 'sem-login' | 'erro';

export async function pedirExclusaoDaConta(origem: 'app' | 'site'): Promise<ResultadoExclusao> {
  try {
    const { auth } = await carregarAuth();
    const u = auth.currentUser;
    if (!u) return 'sem-login';
    const token = await u.getIdToken(true);
    const r = await fetch(api('/api/conta/excluir'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ origem }),
    });
    if (r.status === 401) return 'sem-login';
    if (!r.ok) return 'erro';
    // O servidor desativou o login: encerra a sessão local também.
    try { await auth.signOut(); } catch { /* a sessão já foi revogada no servidor */ }
    return 'ok';
  } catch {
    return 'erro';
  }
}
