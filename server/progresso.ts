// Progresso das aulas na conta do aluno (users/{uid}.licoesCompletas, formato "idioma:dia").
// Só o servidor escreve esse campo (as regras do Firestore não deixam o navegador alterá-lo).
import type { Express, Request, Response } from 'express';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { usuario } from './billing';
import { firebaseAdmin, projetoFirebase } from './firebase-admin';

const projeto = projetoFirebase;
const COLECAO = 'users';
const IDIOMA = /^[a-z]{2,3}$/;

function db() {
  return getFirestore(firebaseAdmin());
}

export function registrarProgresso(app: Express) {
  app.get('/api/progresso', async (req: Request, res: Response) => {
    if (!projeto) { res.status(503).json({ error: 'Indisponível no momento.' }); return; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta.' }); return; }
    try {
      const snap = await db().collection(COLECAO).doc(u.uid).get();
      const lista = snap.exists ? (snap.data()?.licoesCompletas ?? []) : [];
      res.setHeader('Cache-Control', 'private, no-store');
      res.json({ licoes: Array.isArray(lista) ? lista : [] });
    } catch {
      res.status(500).json({ error: 'Não foi possível ler o progresso.' });
    }
  });

  app.post('/api/progresso', async (req: Request, res: Response) => {
    if (!projeto) { res.status(503).json({ error: 'Indisponível no momento.' }); return; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta.' }); return; }
    const { idioma, dia, feito } = req.body ?? {};
    if (typeof idioma !== 'string' || !IDIOMA.test(idioma) || !Number.isInteger(dia) || dia < 1 || dia > 1000 || typeof feito !== 'boolean') {
      res.status(400).json({ error: 'Pedido inválido.' });
      return;
    }
    const chave = `${idioma}:${dia}`;
    try {
      await db().collection(COLECAO).doc(u.uid).set(
        { licoesCompletas: feito ? FieldValue.arrayUnion(chave) : FieldValue.arrayRemove(chave) },
        { merge: true },
      );
      res.json({ ok: true });
    } catch {
      res.status(500).json({ error: 'Não foi possível salvar o progresso.' });
    }
  });
}
