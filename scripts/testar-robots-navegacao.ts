import assert from 'node:assert/strict';
import { sincronizarRobots } from '../src/lib/robotsPagina.ts';

// Documento mínimo: representa as metatags que sobrevivem à navegação de uma SPA.
type Tag = { name: string; content: string; remove: () => void };
const tags: Tag[] = [];
const doc = {
  head: {
    querySelectorAll: () => tags.filter(t => t.name === 'robots'),
    appendChild: (el: Tag) => tags.push(el),
  },
  createElement: () => {
    const tag: Tag = { name: '', content: '', remove: () => { const i = tags.indexOf(tag); if (i >= 0) tags.splice(i, 1); } };
    return tag;
  },
} as unknown as Document;
const politica = () => tags.filter(t => t.name === 'robots').map(t => t.content);
sincronizarRobots(doc, true); // entrada direta em login/aula paga
assert.deepEqual(politica(), ['noindex']);
sincronizarRobots(doc, false); // login -> home, sem recarregar documento
assert.deepEqual(politica(), []);
sincronizarRobots(doc, true); // home -> aula paga
assert.deepEqual(politica(), ['noindex']);
sincronizarRobots(doc, true); // sessão 9 -> sessão 10
assert.deepEqual(politica(), ['noindex'], 'não acumula tags');
sincronizarRobots(doc, false); // aula paga -> amostra gratuita
assert.deepEqual(politica(), [], 'a amostra não herda exclusão da aula paga');
console.log('Robots na navegação: login, home, aula paga e amostra sem política residual.');
