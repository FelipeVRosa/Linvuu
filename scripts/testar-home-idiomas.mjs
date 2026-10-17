import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import assert from 'node:assert/strict';
const locale=process.argv[2] ?? 'pt-BR';
assert.ok(['pt-BR', 'en', 'es'].includes(locale));
globalThis.window={location:{pathname:locale==='pt-BR'?'/':`/${locale}`}};
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
 const {MemoryRouter}=await import('react-router-dom');
 const {default:Home}=await server.ssrLoadModule('/src/pages/HomeBrasileiros.tsx');
 const html=renderToStaticMarkup(React.createElement(MemoryRouter,null,React.createElement(Home)));
 const expected={'pt-BR':'Entre na conversa.',en:'Join the conversation.',es:'Únete a la conversación.'};
 assert.ok(html.includes(expected[locale]));
 assert.equal((html.match(/class="br-plan-name"/g)||[]).length,4);
 assert.ok(html.includes('br-book')&&html.includes('br-faq')&&html.includes('br-demo'));
 if(locale!=='pt-BR') {
  for(const s of ['Encontrar meu plano','Explorar este plano','UM GOSTINHO','Desde a explicação','Pequenas frases','Quanto do mundo']) assert.ok(!html.includes(s),`Texto não traduzido: ${s}`);
  assert.ok(html.includes('hrefLang="pt-BR"') || html.includes('hreflang="pt-BR"'));
  assert.ok(html.includes(locale==='en'?'adapted materials in English are not available yet':'los materiales adaptados al español aún no están disponibles'));
 }
 console.log(`${locale}: hero, 4 planos, áudio demonstrativo, FAQ e aviso verificados`);
} finally {await server.close();}
