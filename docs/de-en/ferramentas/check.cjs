// uso: node check.cjs NN   (lote sh/shNN.json -> out/outNN.json ou out/outNN_p1.json, _p2...)
//      node check.cjs chaves | node check.cjs translit
const fs = require('fs');
const SP = __dirname.replace(/\\/g, '/');
const arg = process.argv[2];
const dir = SP + '/out/';
let fonte, nomeOut;
if (arg === 'chaves') { fonte = JSON.parse(fs.readFileSync(SP + '/sh/chaves.json', 'utf8')); nomeOut = /^outchaves(_p\d+)?\.json$/; }
else if (arg === 'translit') { fonte = JSON.parse(fs.readFileSync(SP + '/sh/translit.json', 'utf8')).map((x) => x.w + '|' + x.old); nomeOut = /^outtranslit(_p\d+)?\.json$/; }
else if (/^rb/.test(arg)) { fonte = JSON.parse(fs.readFileSync(`${SP}/sh/${arg}.json`, 'utf8')).map((x) => x[1]); nomeOut = new RegExp('^out' + arg + '(_p\\d+)?\\.json$'); }
else { fonte = JSON.parse(fs.readFileSync(`${SP}/sh/sh${arg}.json`, 'utf8')); nomeOut = new RegExp('^out' + arg + '(_p\\d+)?\\.json$'); }
const M = {};
for (const f of fs.readdirSync(dir).filter((x) => nomeOut.test(x))) {
  try { Object.assign(M, JSON.parse(fs.readFileSync(dir + f, 'utf8'))); } catch (e) { console.log('JSON INVALIDO em', f, e.message); process.exit(1); }
}
const PTC = /[ãõçêâôáíóúà]/;
const PTW = /(^|[^\p{L}])(que|não|você|uma|para|com|é|são|ouça|escolha|escreva|palavra|letra|masculino|feminino|alemão|inglês|português|também|quando|sempre|porque)([^\p{L}]|$)/iu;
const q = (s) => (s.match(/[«»]/g) || []).length;
let falta = 0, vazio = 0, pt = 0, aspas = 0;
for (const s of fonte) {
  const v = M[s];
  if (v === undefined) { falta++; if (falta <= 8) console.log('FALTA:', s.slice(0, 90)); continue; }
  if (typeof v !== 'string' || !v.trim()) { vazio++; console.log('VAZIO:', s.slice(0, 80)); continue; }
  if (arg !== 'translit' && arg !== 'chaves') {
    const fora = v.replace(/«[^»]*»/g, '');
    if (PTC.test(fora) || PTW.test(fora)) { pt++; if (pt <= 8) console.log('PORTUGUES?:', JSON.stringify(v.slice(0, 110))); }
    if (q(s) !== q(v)) { aspas++; if (aspas <= 5) console.log('ASPAS:', JSON.stringify(s.slice(0, 70)), '->', JSON.stringify(v.slice(0, 70))); }
  }
}
const extra = Object.keys(M).filter((k) => !fonte.includes(k)).length;
console.log(`lote ${arg}: ${fonte.length} frases | faltam ${falta} | vazias ${vazio} | portugues? ${pt} | aspas diferentes ${aspas} | chaves extras ${extra}`);
process.exit(falta || vazio ? 1 : 0);
