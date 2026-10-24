// Pedido de exclusão de conta feito pela própria pessoa, logada. POST /api/conta/excluir (Authorization: Bearer <ID token>).
// Exigido pela Google Play: caminho de exclusão dentro do app, sem depender de abrir o cliente de e-mail.
// O que faz, nesta ordem: (1) registra o pedido em `exclusoes/{uid}` (Admin SDK; o navegador não lê nem escreve, as regras negam);
// (2) desativa o login no Firebase Auth e revoga as sessões abertas. A exclusão definitiva dos dados acontece depois da retenção
// de 6 meses (decisão do dono em 21/10/2026, a mesma dita na página pública /excluir-conta). Repetir o pedido é inofensivo.
import type { Express, Request, Response } from 'express';
import { FieldValue, Timestamp, getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { firebaseAdmin, projetoFirebase } from './firebase-admin';
import { usuario } from './billing';

const COLECAO = 'exclusoes';
export const MESES_RETENCAO = 6;
const ORIGEM = new Set(['app', 'site']);

export const apagarApos = (de: Date, meses = MESES_RETENCAO) => { const d = new Date(de); d.setMonth(d.getMonth() + meses); return d; };

/** Só aceita `{origem: 'app' | 'site'}` (ou corpo vazio). Qualquer outro campo é recusado. */
export function validarPedido(corpo: unknown): { origem: 'app' | 'site' } | null {
  if (corpo === undefined || corpo === null || (typeof corpo === 'object' && !Array.isArray(corpo) && Object.keys(corpo as object).length === 0)) return { origem: 'site' };
  const b = corpo as Record<string, unknown>;
  if (typeof corpo !== 'object' || Array.isArray(corpo) || Object.keys(b).some((k) => k !== 'origem')) return null;
  if (typeof b.origem !== 'string' || !ORIGEM.has(b.origem)) return null;
  return { origem: b.origem as 'app' | 'site' };
}

export function registrarExclusao(app: Express) {
  app.post('/api/conta/excluir', async (req: Request, res: Response) => {
    const pedido = validarPedido(req.body);
    if (!pedido) { res.status(400).json({ error: 'Pedido inválido.' }); return; }
    if (!projetoFirebase) { res.status(503).json({ error: 'Indisponível no momento.' }); return; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta para pedir a exclusão.' }); return; }
    try {
      const agora = new Date();
      let jaPedido = false;
      try {
        await getFirestore(firebaseAdmin()).collection(COLECAO).doc(u.uid).create({
          uid: u.uid, email: u.email ?? null, origem: pedido.origem, status: 'pendente',
          solicitadoEm: FieldValue.serverTimestamp(), apagarApos: Timestamp.fromDate(apagarApos(agora)),
        });
      } catch (e) {
        if ((e as { code?: number | string })?.code === 6 || (e as { code?: string })?.code === 'already-exists') jaPedido = true; else throw e;
      }
      const auth = getAuth(firebaseAdmin());
      await auth.updateUser(u.uid, { disabled: true });
      await auth.revokeRefreshTokens(u.uid);
      res.status(200).json({ ok: true, jaPedido, meses: MESES_RETENCAO });
    } catch {
      res.status(500).json({ error: 'Não foi possível registrar o pedido. Tente de novo ou escreva para o nosso e-mail.' });
    }
  });
}
