// Segurança do servidor Express: cabeçalhos HTTP, Content-Security-Policy, limite de requisições e tratamento de erros.
// Sem dependência extra: cada peça é pequena e está coberta por scripts/testar-seguranca.mjs.
import type { Express, NextFunction, Request, Response } from 'express';

/** Política de conteúdo. Fontes e scripts são do próprio site; o resto é só o que o login (Firebase/Google) exige. */
export function politicaCSP(extraMidia = ''): string {
  const firebase = ['https://*.googleapis.com', 'https://*.firebaseio.com', 'wss://*.firebaseio.com', 'https://*.firebaseapp.com', 'https://*.google.com'];
  const d: Record<string, string[]> = {
    'default-src': ["'self'"],
    'script-src': ["'self'", 'https://apis.google.com'],
    'style-src': ["'self'", "'unsafe-inline'"], // React usa style="" em alguns componentes
    'img-src': ["'self'", 'data:', 'blob:', 'https://*.googleusercontent.com'],
    'media-src': ["'self'", 'blob:', 'data:', ...(extraMidia ? [extraMidia] : [])],
    'font-src': ["'self'", 'data:'],
    'connect-src': ["'self'", ...firebase, ...(extraMidia ? [extraMidia] : [])],
    'frame-src': ['https://*.firebaseapp.com', 'https://accounts.google.com', 'https://*.google.com'],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'", 'https://checkout.stripe.com', 'https://billing.stripe.com'],
    'frame-ancestors': ["'none'"],
  };
  return Object.entries(d).map(([k, v]) => `${k} ${v.join(' ')}`).join('; ') + '; upgrade-insecure-requests';
}

export function cabecalhos(producao: boolean) {
  // CSP_MODO=report põe a política só em observação (sem bloquear), caso algum recurso novo seja barrado por engano.
  const nomeCSP = process.env.CSP_MODO === 'report' ? 'Content-Security-Policy-Report-Only' : 'Content-Security-Policy';
  const audioBase = (process.env.VITE_AUDIO_BASE_URL || '').match(/^https:\/\/[^/]+/)?.[0] ?? '';
  const csp = politicaCSP(audioBase);
  return (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups'); // o login com Google abre uma janela
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    if (producao) {
      res.setHeader('Strict-Transport-Security', 'max-age=15552000'); // 180 dias; sem includeSubDomains nem preload
      res.setHeader(nomeCSP, csp);
    }
    next();
  };
}

type Janela = { n: number; ate: number };
/** Limite por IP e por grupo de rotas (memória do processo; o Render roda uma instância). */
export function limitar(grupo: string, max: number, janelaMs: number) {
  const mapa = new Map<string, Janela>();
  setInterval(() => { const t = Date.now(); for (const [k, v] of mapa) if (v.ate < t) mapa.delete(k); }, 60_000).unref();
  return (req: Request, res: Response, next: NextFunction) => {
    const t = Date.now();
    const chave = `${grupo}:${req.ip}`;
    let j = mapa.get(chave);
    if (!j || j.ate < t) { j = { n: 0, ate: t + janelaMs }; mapa.set(chave, j); }
    j.n++;
    res.setHeader('RateLimit-Limit', String(max));
    res.setHeader('RateLimit-Remaining', String(Math.max(0, max - j.n)));
    if (j.n > max) {
      res.setHeader('Retry-After', String(Math.ceil((j.ate - t) / 1000)));
      res.status(429).json({ error: 'Muitas tentativas. Aguarde um instante e tente de novo.' });
      return;
    }
    next();
  };
}

/** Origens do app nativo (o site empacotado): só elas recebem CORS. O site na web é da mesma origem e não precisa. */
const ORIGENS_APP = new Set(['https://localhost', 'capacitor://localhost', 'http://localhost']);
export function cors(req: Request, res: Response, next: NextFunction) {
  const origem = req.headers.origin;
  if (origem && ORIGENS_APP.has(origem)) {
    res.setHeader('Access-Control-Allow-Origin', origem);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '600');
    if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  }
  next();
}

export function registrarSeguranca(app: Express, producao: boolean) {
  app.disable('x-powered-by');
  app.set('trust proxy', 1); // atrás do proxy do Render: req.ip passa a ser o do visitante
  app.use(cabecalhos(producao));
  app.use('/api', cors);
  app.use('/api/billing', limitar('billing', 30, 60_000));
  app.use('/api/aula', limitar('aula', 120, 60_000));
  app.use('/api', limitar('api', 300, 60_000));
}

/** Fecha a API: o que não existe sob /api responde 404 em JSON (sem cair na página do site). Vem depois das rotas reais. */
export function fecharApi(app: Express) {
  app.use('/api', (_req: Request, res: Response) => { res.status(404).json({ error: 'Não encontrado.' }); });
}

/** Último middleware: erros nunca devolvem detalhes internos. */
export function registrarErros(app: Express) {
  app.use((err: Error & { status?: number; type?: string }, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) { next(err); return; }
    const status = err.type === 'entity.too.large' ? 413 : err.status && err.status >= 400 && err.status < 500 ? err.status : 500;
    if (status === 500) console.error('erro não tratado', err);
    res.status(status).json({ error: status === 413 ? 'Pedido grande demais.' : status === 500 ? 'Erro interno.' : 'Pedido inválido.' });
  });
}
