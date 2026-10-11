import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { registrarCobranca, registrarLivroProtegido } from './server/billing';
import { fecharApi, registrarErros, registrarSeguranca } from './server/seguranca';
import { aplicarMeta, carregarDadosMeta, metaDaRota } from './src/lib/metaRota.ts';
import { SITE_URL } from './src/config/site.ts';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  // Porta: usa process.env.PORT (Render) ou 3000 em desenvolvimento
  const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  const producao = process.env.NODE_ENV === 'production';
  registrarSeguranca(app, producao);
  app.use(express.json({ limit: '10kb' }));

  // Saúde do serviço (para o Render e para monitoramento).
  app.get('/healthz', (_req: Request, res: Response) => { res.json({ ok: true }); });

  registrarCobranca(app, () => process.env.APP_URL || (producao ? SITE_URL : `http://localhost:${PORT}`));
  registrarLivroProtegido(app);
  fecharApi(app);

  // -------------------------------------------------------------
  // 7. Vite Middleware Integration (Dev) or Static dist (Prod)
  // -------------------------------------------------------------
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist'), {
      setHeaders: (res, arquivo) => {
        // MP3 tem o nome do hash do texto: nunca muda, pode ficar em cache por um ano. A lista (index.json) muda e fica 5 minutos.
        if (arquivo.endsWith('.mp3')) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        else if (arquivo.includes(`${path.sep}audio${path.sep}`) && arquivo.endsWith('index.json')) res.setHeader('Cache-Control', 'public, max-age=300');
      },
    }));
    // Cada rota recebe o HTML com título, descrição e endereço próprios (prévia de compartilhamento correta) e o status certo (404 de verdade).
    const dadosMeta = carregarDadosMeta(__dirname);
    let htmlBase: string | null = null;
    app.get('*', (req: Request, res: Response) => {
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