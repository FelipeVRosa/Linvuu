// gera os lotes de frases a traduzir (alemão -> inglês) a partir de sessões + gramática
const fs = require('fs');
const L = require('./lib.cjs');
const SP = __dirname.replace(/\\/g, '/');
const set = new Set(), chaves = new Set(), pares = new Map();
const ordem = [];
const add = (o) => { const antes = new Set(set); L.candidatas(o, set, chaves); for (const s of set) if (!antes.has(s)) ordem.push(s); };
const dir = L.REPO + 'content/idiomas/de/';
const fl = fs.readdirSync(dir).filter((x) => /^dia-\d+\.json$/.test(x)).sort();
for (const f of fl) {
  const j = JSON.parse(fs.readFileSync(dir + f, 'utf8'));
  add(j);
  L.walk(j, (v, k, pai) => { if (k === 'translit' && pai && typeof pai.ru === 'string') pares.set(pai.ru + '|' + v, { w: pai.ru, old: v }); });
}
const g = JSON.parse(fs.readFileSync(L.REPO + 'content/gramatica/de.json', 'utf8'));
add(g);
L.walk(g, (v, k, pai) => { if (k === 'translit' && pai && typeof pai.ru === 'string') pares.set(pai.ru + '|' + v, { w: pai.ru, old: v }); });
const frases = ordem.filter((s) => set.has(s));
const chavesPT = [...chaves].filter((k) => L.esPT(k) || /^[a-zà-ú_ ]+$/i.test(k));
fs.mkdirSync(SP + '/sh', { recursive: true });
fs.mkdirSync(SP + '/out', { recursive: true });
const ALVO = 70000; // bytes por lote
let cur = [], bytes = 0, n = 0;
const flush = () => { if (!cur.length) return; n++; fs.writeFileSync(`${SP}/sh/sh${String(n).padStart(2, '0')}.json`, JSON.stringify(cur, null, 0)); cur = []; bytes = 0; };
for (const s of frases) { cur.push(s); bytes += s.length; if (bytes >= ALVO) flush(); }
flush();
fs.writeFileSync(SP + '/sh/chaves.json', JSON.stringify(chavesPT));
fs.writeFileSync(SP + '/sh/translit.json', JSON.stringify([...pares.values()]));
console.log({ frases: frases.length, bytes: frases.reduce((a, s) => a + s.length, 0), lotes: n, chaves: chavesPT.length, translit: pares.size });
console.log('chaves:', chavesPT.slice(0, 60).join(' | '));
