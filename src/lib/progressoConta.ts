// Progresso na conta do aluno. Sem login ou sem servidor, o progresso continua só neste navegador.
import { carregarAuth } from './firebase';
import { api } from './api';
import { diasConcluidos, marcarDia, usuarioDoProgresso } from './progresso';

async function tokenAtual(): Promise<{ token: string; uid: string } | null> {
  try {
    const { auth } = await carregarAuth();
    const u = auth.currentUser;
    if (!u) return null;
    const token = await u.getIdToken();
    return auth.currentUser?.uid === u.uid ? { token, uid: u.uid } : null;
  } catch {
    return null;
  }
}

/** Junta o que está na conta com o que está neste navegador (a união vale nos dois lados). */
export async function sincronizarConta(idioma: string): Promise<void> {
  const uid = usuarioDoProgresso();
  const t = await tokenAtual();
  if (!t || t.uid !== uid || t.uid !== usuarioDoProgresso()) return;
  try {
    const r = await fetch(api('/api/progresso'), { headers: { Authorization: `Bearer ${t.token}` } });
    if (!r.ok) return;
    const { licoes } = (await r.json()) as { licoes: string[] };
    if (usuarioDoProgresso() !== t.uid || !Array.isArray(licoes)) return;
    const naConta = new Set(licoes.filter((k) => k.startsWith(`${idioma}:`)).map((k) => Number(k.split(':')[1])));
    const local = diasConcluidos(idioma);
    naConta.forEach((n) => { if (!local.includes(n)) marcarDia(idioma, n, true); });
    for (const n of local) {
      if (usuarioDoProgresso() !== t.uid) return;
      if (!naConta.has(n)) await salvarDiaConta(idioma, n, true);
    }
  } catch { /* sem rede: segue com o que está neste navegador */ }
}

/** Grava um dia concluído (ou desmarcado) na conta. Devolve false se não foi possível. */
export async function salvarDiaConta(idioma: string, dia: number, feito: boolean): Promise<boolean> {
  const uid = usuarioDoProgresso();
  const t = await tokenAtual();
  if (!t || t.uid !== uid || t.uid !== usuarioDoProgresso()) return false;
  try {
    const r = await fetch(api('/api/progresso'), {
      method: 'POST',
      headers: { Authorization: `Bearer ${t.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ idioma, dia, feito }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
