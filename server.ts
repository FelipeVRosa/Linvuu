import express from 'express';
import compression from 'compression';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { registrarCobranca, registrarLivroProtegido } from './server/billing';
import { registrarProgresso } from './server/progresso';
import { credencialConfigurada } from './server/firebase-admin';
import { fecharApi, registrarErros, registrarSeguranca } from './server/seguranca';
import { aplicarMeta, carregarDadosMeta, metaDaRota } from './src/lib/metaRota.ts';
import { SITE_URL } from './src/config/site.ts';

dotenv.config();

// Uma falha assíncrona esquecida não pode derrubar o site: registra e segue.
process.on('unhandledRejection', (e) => { console.error('[Linvuu] promessa rejeitada sem tratamento:', e instanceof Error ? e.message : e); });
process.on('uncaughtException', (e) => { console.error('[Linvuu] erro não capturado:', e.message); });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  // Porta: usa process.env.PORT (Render) ou 3000 em desenvolvimento
  const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  const producao = process.env.NODE_ENV === 'production';
  if (producao && !credencialConfigurada()) console.error('[Linvuu] ATENÇÃO: Firebase Admin sem credencial. Login no servidor, progresso e áreas pagas ficam indisponíveis até definir FIREBASE_SERVICE_ACCOUNT_JSON.');
  registrarSeguranca(app, producao);
  // HTML, JS, CSS e JSON comprimidos (o pacote principal cai para cerca de um quarto). MP3 já vem comprimido e fica de fora.
  app.use(compression({ filter: (req, res) => !/\.mp3$/.test(req.path) && compression.filter(req, res) }));
  app.use(express.json({ limit: '10kb' }));

  // Saúde do serviço (para o Render e para monitoramento).
  app.get('/healthz', (_req: Request, res: Response) => { res.json({ ok: true }); });

  registrarCobranca(app, () => process.env.APP_URL || (producao ? SITE_URL : `http://localhost:${PORT}`));
  registrarLivroProtegido(app);
  registrarProgresso(app);
  fecharApi(app);

  // -------------------------------------------------------------
  // 7. Vite Middleware Integration (Dev) or Static dist (Prod)
  // -------------------------------------------------------------
  if (process.env.NODE_ENV === 'production') {
    // sitemap.xml e robots.txt: rota explícita ANTES do express.static e do catch-all. Saem do dist como arquivo puro, com o tipo certo, e nunca
    // viram o HTML da SPA (o Search Console recusa um sitemap que chega como text/html).
    const arquivoEstatico = (nome: string, tipo: string) => (_req: Request, res: Response) => {
      const arq = path.resolve(__dirname, 'dist', nome);
      if (!fs.existsSync(arq)) { res.status(404).type('text/plain; charset=utf-8').send('Not found'); return; }
      res.set({ 'Content-Type': tipo, 'Cache-Control': 'public, max-age=3600', 'X-Content-Type-Options': 'nosniff' }).send(fs.readFileSync(arq));
    };
    app.get('/sitemap.xml', arquivoEstatico('sitemap.xml', 'application/xml; charset=utf-8'));
    app.get('/robots.txt', arquivoEstatico('robots.txt', 'text/plain; charset=utf-8'));
    // index: false — a página inicial também passa pelo catch-all abaixo, que coloca as metatags (sem isso, «/» saía sem hreflang).
    app.use(express.static(path.resolve(__dirname, 'dist'), {
      index: false,
      setHeaders: (res, arquivo) => {
        // MP3 tem o nome do hash do texto: nunca muda, pode ficar em cache por um ano. A lista (index.json) muda e fica 5 minutos.
        if (arquivo.includes(`${path.sep}assets${path.sep}`)) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        else if (arquivo.endsWith('.mp3')) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        else if (arquivo.includes(`${path.sep}audio${path.sep}`) && arquivo.endsWith('index.json')) res.setHeader('Cache-Control', 'public, max-age=300');
        // sitemap e robots: o Google relê com frequência; uma hora de cache basta
        else if (/(sitemap\.xml|robots\.txt)$/.test(arquivo)) res.setHeader('Cache-Control', 'public, max-age=3600');
      },
    }));
    // Cada rota recebe o HTML com título, descrição e endereço próprios (prévia de compartilhamento correta) e o status certo (404 de verdade).
    const dadosMeta = carregarDadosMeta(__dirname);
    let htmlBase: string | null = null;
    // Arquivo de /assets que não existe mais (aba aberta antes de um deploy) deve dar 404 de verdade, não o HTML do site.
    app.get('/assets/*', (_req: Request, res: Response) => { res.status(404).type('text/plain').send('Not found'); });
    // Endereços que mudaram de lugar: redirecionamento permanente (o Google transfere a relevância).
    app.get(['/brazilian-portuguese', '/en/brazilian-portuguese', '/es/brazilian-portuguese'], (_req: Request, res: Response) => { res.redirect(301, '/en/portugues'); });
    // O curso de português para estrangeiros não existe no site em português: vai para a versão em inglês.
    app.get(/^\/curso\/br(\/.*)?$/, (req: Request, res: Response) => { res.redirect(301, `/en${req.path}`); });
    app.get('*', (req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-cache');
      htmlBase ??= fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf8');
      const m = metaDaRota(req.path, dadosMeta);
      res.status(m.status).type('html').send(aplicarMeta(htmlBase, m, SITE_URL));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  registrarErros(app);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ [Linvuu Server] Porta ${PORT}`);
    console.log(`🌐 Acesse o site em: http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});