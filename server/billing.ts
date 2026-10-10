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
const PRECO_TRIMESTRAL = 41700; // 3 x R$ 139, pagamento único (cartão ou boleto), sem renovação automática
const PRECO_MES_PIX = 16000; // primeiro mês, só Pix, uma vez por cliente
const PRECO_TRIMESTRAL_PIX = 29190; // 30% de desconto sobre R$ 417 (41700 x 0,7), só no Pix, pagamento único
const PLANOS_PACOTE = ['trimestral', 'trimestral-pix', 'mes-pix'];
const somaMeses = (t: number, m: number) => { const d = new Date(t * 1000); d.setMonth(d.getMonth() + m); return Math.floor(d.getTime() / 1000); };

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

type Acesso = { ativa: boolean; via: 'assinatura' | 'trimestral' | null; status: string | null; cancelaEm: number | null; ate: number | null };

/** Acesso = assinatura mensal ativa OU pacote de 3 meses pago (Pix e boleto só contam depois de pagos). Stripe é a fonte da verdade. */
async function acesso(u: { uid: string; email?: string }): Promise<Acesso> {
  const c = await cliente(u);
  const [subs, sessoes] = await Promise.all([
    stripe!.subscriptions.list({ customer: c, status: 'all', limit: 10 }),
    stripe!.checkout.sessions.list({ customer: c, limit: 30 }),
  ]);
  const s = subs.data.find((x) => x.status === 'active' || x.status === 'trialing');
  const agora = Math.floor(Date.now() / 1000);
  const pacotes = sessoes.data.filter((x) => x.mode === 'payment' && PLANOS_PACOTE.includes(String(x.metadata?.plano)) && x.payment_status === 'paid').map((x) => somaMeses(x.created, x.metadata?.plano === 'mes-pix' ? 1 : 3));
  const ate = pacotes.length ? Math.max(...pacotes) : null;
  if (s) return { ativa: true, via: 'assinatura', status: s.status, cancelaEm: s.cancel_at_period_end ? s.items.data[0]?.current_period_end ?? null : null, ate: null };
  if (ate && ate > agora) return { ativa: true, via: 'trimestral', status: 'paid', cancelaEm: null, ate };
  return { ativa: false, via: null, status: null, cancelaEm: null, ate };
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
        if (!(await acesso(u)).ativa) { res.status(403).json({ error: 'Assinatura necessária.' }); return; }
      } catch (e) { console.error('aula', e); res.status(500).json({ error: 'Não foi possível verificar a assinatura.' }); return; }
    }
    res.set('Cache-Control', 'private, no-store').type('json').send(fs.readFileSync(arq, 'utf8'));
  });

  app.get('/api/billing/status', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      res.json(await acesso(u));
    } catch (e) { console.error('billing/status', e); res.status(500).json({ error: 'Não foi possível consultar a assinatura.' }); }
  });

  app.post('/api/billing/checkout', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      const base = urlBase();
      const plano = req.body?.plano;
      const pix = plano === 'mes-pix' || plano === 'trimestral-pix';
      const pacote = plano === 'trimestral' || pix;
      const c = await cliente(u);
      if (plano === 'mes-pix') {
        const hist = await stripe!.checkout.sessions.list({ customer: c, limit: 30 });
        if (hist.data.some((x) => x.metadata?.plano === 'mes-pix' && x.payment_status === 'paid')) {
          res.status(409).json({ error: 'O primeiro mês no Pix vale só uma vez. Escolha outro plano.' }); return;
        }
      }
      const comum = { customer: c, locale: 'pt-BR' as const, success_url: `${base}/assinatura?ok=1`, cancel_url: `${base}/assinatura`, client_reference_id: u.uid, allow_promotion_codes: true };
      const s = pix
        ? await stripe!.checkout.sessions.create({
            ...comum, mode: 'payment', allowed_payment_method_types: ['pix'],
            payment_method_options: { pix: { expires_after_seconds: 86400 } },
            line_items: [{ quantity: 1, price_data: { currency: 'brl', unit_amount: plano === 'mes-pix' ? PRECO_MES_PIX : PRECO_TRIMESTRAL_PIX, product_data: { name: plano === 'mes-pix' ? 'Linvuu: 1 mês de acesso (primeiro mês, Pix)' : 'Linvuu: 3 meses de acesso (Pix, 30% de desconto)' } } }],
            metadata: { plano, uid: u.uid },
            custom_text: { submit: { message: 'Pagamento único por Pix, sem renovação automática. O QR code aparece na tela seguinte. Reembolso integral em até 7 dias.' } },
          })
        : pacote
        ? await stripe!.checkout.sessions.create({
            ...comum, mode: 'payment', allowed_payment_method_types: ['card', 'boleto'],
            payment_method_options: { boleto: { expires_after_days: 3 } },
            line_items: [{ quantity: 1, price_data: { currency: 'brl', unit_amount: PRECO_TRIMESTRAL, product_data: { name: 'Linvuu: 3 meses de acesso' } } }],
            metadata: { plano: 'trimestral', uid: u.uid },
            custom_text: { submit: { message: 'Pagamento único, sem renovação automática, com reembolso integral em até 7 dias.' } },
          })
        : await stripe!.checkout.sessions.create({
            ...comum, mode: 'subscription',
            custom_text: { submit: { message: 'Reembolso integral em até 7 dias. Cancele quando quiser, sem multa.' } },
            line_items: [{ price: await preco(), quantity: 1 }],
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
