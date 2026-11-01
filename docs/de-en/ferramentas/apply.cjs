// uso: node apply.cjs [dia-inicial dia-final]  -> grava content/idiomas/de/en/dia-NNN.json e content/gramatica/de.en.json no worktree
const fs = require('fs');
const L = require('./lib.cjs');
const SP = __dirname.replace(/\\/g, '/');
const out = SP + '/out/';
// Os mapas sh/out não foram versionados. Nunca sobrescrever as 288 sessões já traduzidas por engano.
if (!process.argv.includes('--permitir-sobrescrita')) {
  console.error('Proteção editorial: apply.cjs sobrescreve sessões. Requer --permitir-sobrescrita e mapas completos conferidos.');
  process.exit(2);
}
if (!fs.existsSync(out) || fs.readdirSync(out).filter(f => /^out.*\.json$/.test(f)).length === 0) {
  console.error('Mapas de tradução ausentes em docs/de-en/ferramentas/out/. Nada foi alterado.');
  process.exit(2);
}
const M = {}, KEYS = {}, TL = {};
for (const f of fs.readdirSync(out).filter((x) => /\.json$/.test(x))) {
  const j = JSON.parse(fs.readFileSync(out + f, 'utf8'));
  if (/^outchaves/.test(f)) Object.assign(KEYS, j);
  else if (/^outtranslit/.test(f)) Object.assign(TL, j);
  else Object.assign(M, j);
}
const faltas = new Map();
const falta = (k, s) => faltas.set(s, k);
const tr = (s, k) => {
  const f = L.FIXAS(s); if (f) return f;
  if (s in M) return M[s];
  if (L.esPT(s)) { falta(k, s); }
  return s;
};
function conv(o, k = '', pai = null, tab = false) {
  if (Array.isArray(o)) return o.map((x) => conv(x, k, pai, tab || L.TAB.has(k)));
  if (o && typeof o === 'object') {
    const r = {};
    for (const a in o) {
      const dentro = tab || L.TAB.has(k);
      // chave de coluna: só quando o valor é folha (texto) dentro de tabela
      const nk = dentro && typeof o[a] !== 'object' && KEYS[a] ? KEYS[a] : a;
      r[nk] = conv(o[a], a, o, dentro);
    }
    return r;
  }
  if (typeof o !== 'string') return o;
  if (L.SKIP.has(k)) {
    if (k === 'translit' && pai && typeof pai.ru === 'string') { const t = TL[pai.ru + '|' + o]; if (!t) falta('translit', pai.ru + '|' + o); return t || o; }
    return o;
  }
  if (k === 'pt' && pai && typeof pai.en === 'string') return pai.en;
  if (k === 'titulo' && o.includes(': ')) return o.split(': ').map((p) => tr(p, k)).join(': ');
  return tr(o, k);
}
const a = Number(process.argv[2] || 1), b = Number(process.argv[3] || 288);
const dir = L.REPO + 'content/idiomas/de/';
const dest = dir + 'en/';
fs.mkdirSync(dest, { recursive: true });
let n = 0;
for (let i = a; i <= b; i++) {
  const f = `dia-${String(i).padStart(3, '0')}.json`;
  if (!fs.existsSync(dir + f)) continue;
  const src = JSON.parse(fs.readFileSync(dir + f, 'utf8'));
  const r = conv(src);
  const o = { idioma: r.idioma, explicacao: 'en', ...r };
  fs.writeFileSync(dest + f, JSON.stringify(o, null, 2) + '\n');
  n++;
}
if (a === 1 && b === 288) {
  const g = JSON.parse(fs.readFileSync(L.REPO + 'content/gramatica/de.json', 'utf8'));
  const r = conv(g);
  const o = { idioma: r.idioma, explicacao: 'en', semTraducao: 0, ...r };
  for (const t of o.topicos) { delete t.semTraducao; delete t.explicacaoEm; }
  fs.writeFileSync(L.REPO + 'content/gramatica/de.en.json', JSON.stringify(o, null, 2) + '\n');
  console.log('gramatica gravada');
}
console.log(`sessoes gravadas ${n} | faltas ${faltas.size}`);
for (const [s, k] of [...faltas].slice(0, 25)) console.log('FALTA', k, '|', s.slice(0, 100));
