import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';
const memoria = new Map();
globalThis.localStorage = { getItem: k => memoria.get(k) ?? null, setItem: (k,v) => memoria.set(k,v) };
globalThis.window = { location: { pathname: '/en/curso/de/dia/1' } };
const server = await createServer({ server: { middlewareMode: true, watch: null }, appType: 'custom' });
try {
 const c = await server.ssrLoadModule('/src/lib/content.ts');
 await c.carregarTraducoes();
 const a = await c.carregarAula('de', 1);
 assert.equal(a.idiomas.interface, 'en');
 assert.equal(a.idiomas.estudado, 'de');
 assert.equal(a.idiomas.explicacaoEfetiva, 'pt');
 const idiomas = ['en','es','fr','it','de','ru','br'];
 let count=0;
 for(const id of idiomas)for(const l of ['pt','en','es']) {
  const d = await c.carregarAula(id, 1, l);
  assert.equal(d.idiomas.estudado,id);
  assert.equal(d.idiomas.explicacaoSolicitada,l);
  assert.ok(d.sessao);
  if(d.semTraducao)assert.equal(d.idiomas.explicacaoEfetiva,c.fonteDoCurso(id));
  count++;
 }
 // Tradução ausente em aula posterior: a reserva segue o original, sem erro 404.
 const indice = JSON.parse(await readFile('content/indice.en.json','utf8'));
 const status=c.statusDoCurso('de');const grupo=status.grupos.find(g=>!indice.de?.aulas.includes(g.aula));
 assert.ok(grupo);
 // Evita API autenticada: disponibilidade é verificada sem solicitar conteúdo pago.
 assert.equal(c.aulaTraduzida('de',grupo.aula,'en'),false);
 console.log(`OK: ${count} carregamentos reais das aulas grátis; interface EN com explicação PT; disponibilidade e idioma efetivo corretos.`);
} finally { await server.close(); }
