// Cobrança da Linvuu: Stripe é a fonte da verdade (sem banco próprio). O navegador manda o token de login (Firebase);
// o servidor confere o token, acha o cliente no Stripe pelo uid e responde se a assinatura está ativa.
import fs from 'node:fs';
import path from 'node:path';
import type { Express, Request, Response } from 'express';
import Stripe from 'stripe';
import { getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const chave = process.env.STRIPE_SECRET_KEY;
const projeto = process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID;
const stripe = chave ? new Stripe(chave) : null;
let precoCache: string | null = process.env.STRIPE_PRICE_ID || null;

const PRECO_CENTAVOS = 13900;

export const cobrancaConfigurada = () => !!(stripe && projeto);

async function usuario(req: Request): Promise<{ uid: string; email?: string } | null> {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ') || !projeto) return null;
  try {
    if (!getApps().length) initializeApp({ projectId: projeto });
    const t = await getAuth().verifyIdToken(h.slice(7));
    return { uid: t.uid, email: t.email };
  } catch {
    return null;
  }
}

async function preco(): Promise<string> {
  if (precoCache) return precoCache;
  const achados = await stripe!.prices.search({ query: "active:'true' AND metadata['linvuu']:'mensal'" });
  if (achados.data[0]) return (precoCache = achados.data[0].id);
  const produto = await stripe!.products.create({ name: 'Linvuu Mensal', metadata: { linvuu: 'mensal' } });
  const p = await stripe!.prices.create({ product: produto.id, currency: 'brl', unit_amount: PRECO_CENTAVOS, recurring: { interval: 'month' }, metadata: { linvuu: 'mensal' } });
  return (precoCache = p.id);
}

async function cliente(u: { uid: string; email?: string }): Promise<string> {
  const r = await stripe!.customers.search({ query: `metadata['uid']:'${u.uid}'` });
  if (r.data[0]) return r.data[0].id;
  return (await stripe!.customers.create({ email: u.email, metadata: { uid: u.uid } })).id;
}

async function assinaturaAtiva(uid: string, email?: string): Promise<boolean> {
  const c = await cliente({ uid, email });
  const subs = await stripe!.subscriptions.list({ customer: c, status: 'all', limit: 10 });
  return subs.data.some((x) => x.status === 'active' || x.status === 'trialing');
}

export function registrarCobranca(app: Express, urlBase: () => string) {
  const nao = (res: Response) => res.status(503).json({ error: 'Pagamento ainda não configurado.' });
  const guarda = async (req: Request, res: Response) => {
    if (!cobrancaConfigurada()) { nao(res); return null; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta.' }); return null; }
    return u;
  };

  // Sessões depois da 8ª (as 2 primeiras aulas são grátis): só saem do servidor para quem tem assinatura ativa.
  app.get('/api/aula/:idioma/:n', async (req: Request, res: Response) => {
    const idioma = String(req.params.idioma), n = Number(req.params.n);
    if (!/^[a-z]{2}$/.test(idioma) || !Number.isInteger(n) || n < 1 || n > 999) { res.status(404).json({ error: 'Aula não encontrada.' }); return; }
    const arq = path.join(process.cwd(), 'content', 'idiomas', idioma, `dia-${String(n).padStart(3, '0')}.json`);
    if (!fs.existsSync(arq)) { res.status(404).json({ error: 'Aula não encontrada.' }); return; }
    const livre = n <= 8 || (process.env.NODE_ENV !== 'production' && !cobrancaConfigurada());
    if (!livre) {
      const u = await guarda(req, res); if (!u) return;
      try {
        if (!(await assinaturaAtiva(u.uid, u.email))) { res.status(403).json({ error: 'Assinatura necessária.' }); return; }
      } catch (e) { console.error('aula', e); res.status(500).json({ error: 'Não foi possível verificar a assinatura.' }); return; }
    }
    res.set('Cache-Control', 'private, no-store').type('json').send(fs.readFileSync(arq, 'utf8'));
  });

  app.get('/api/billing/status', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      const c = await cliente(u);
      const subs = await stripe!.subscriptions.list({ customer: c, status: 'all', limit: 10 });
      const s = subs.data.find((x) => x.status === 'active' || x.status === 'trialing' || x.status === 'past_due');
      res.json({ ativa: !!s && s.status !== 'past_due', status: s?.status ?? null, cancelaEm: s?.cancel_at_period_end ? s.items.data[0]?.current_period_end ?? null : null });
    } catch (e) { console.error('billing/status', e); res.status(500).json({ error: 'Não foi possível consultar a assinatura.' }); }
  });

  app.post('/api/billing/checkout', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      const base = urlBase();
      const s = await stripe!.checkout.sessions.create({
        mode: 'subscription', customer: await cliente(u), locale: 'pt-BR', allow_promotion_codes: true,
        line_items: [{ price: await preco(), quantity: 1 }],
        success_url: `${base}/assinatura?ok=1`, cancel_url: `${base}/assinatura`,
        client_reference_id: u.uid,
      });
      res.json({ url: s.url });
    } catch (e) { console.error('billing/checkout', e); res.status(500).json({ error: 'Não foi possível abrir o pagamento.' }); }
  });

  app.post('/api/billing/portal', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      const s = await stripe!.billingPortal.sessions.create({ customer: await cliente(u), return_url: `${urlBase()}/assinatura` });
      res.json({ url: s.url });
    } catch (e) { console.error('billing/portal', e); res.status(500).json({ error: 'Não foi possível abrir o portal.' }); }
  });
}
