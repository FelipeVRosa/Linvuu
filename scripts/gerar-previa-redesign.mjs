import { chromium } from 'playwright';
import fs from 'node:fs';
const pages=[['inicio','Início'],['catalogo','Biblioteca'],['percurso','Percurso'],['aula','Aula']];
const browser=await chromium.launch({args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1140,height:760},deviceScaleFactor:1});
 const cards=pages.map(([id,label])=>`<figure><figcaption>${label}</figcaption><div class="phone"><img src="data:image/png;base64,${fs.readFileSync(`design/apk/v3-${id}.png`).toString('base64')}" alt="Tela ${label}"></div></figure>`).join('');
 await page.setContent(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Linvuu · Android v3</title><style>*{box-sizing:border-box}body{margin:0;background:#e8e6dd;color:#1e3b2f;font:16px system-ui;padding:28px}h1{font-size:25px;margin:0 0 6px}p{font-size:13px;margin:0 0 22px;color:#424d43}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}figure{margin:0;min-width:0}figcaption{font-size:14px;font-weight:600;margin-bottom:10px}.phone{border:5px solid #1e3b2f;border-radius:27px;overflow:hidden;background:#f5f1e8;box-shadow:0 8px 18px #1e3b2f14}img{display:block;width:100%;height:auto}footer{font-size:12px;margin-top:20px;color:#424d43}</style><h1>Linvuu · experiência Android</h1><p>Uma ação principal, percurso claro e espaço para aprender.</p><div class="grid">${cards}</div><footer>Telas reais da prévia web do APK. Testes nativos e TalkBack em aparelho ainda pendentes.</footer></html>`);
 await page.screenshot({path:'design/apk/v3-visao-geral.png',fullPage:true});
}finally{await browser.close();}
