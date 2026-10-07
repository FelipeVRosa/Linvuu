import fs from 'node:fs';
// uso: node scripts/validar-aulas.mjs <idioma> <aulas...>
const [idioma, ...nums] = process.argv.slice(2);
const vozes = JSON.parse(fs.readFileSync(`content/idiomas/${idioma}/vozes.json`, 'utf8')).personagens;
const strip = (s) => s.replace(/[.,?!]/g, '');
for (const n of nums) {
  const f = `content/idiomas/${idioma}/aulas/aula-${String(n).padStart(3, '0')}.json`;
  const a = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const s of a.sessoes) {
    const sum = s.blocos.reduce((t, b) => t + b.min, 0);
    if (sum !== 30) console.log(n, s.id ?? s.titulo, 'minutos', sum);
    const walk = (o, path) => {
      if (Array.isArray(o)) return o.forEach((x, i) => walk(x, path));
      if (o && typeof o === 'object') {
        if (o.opcoes) {
          if (!/ordem|order/.test(o.tipo ?? '') && !o.opcoes.includes(o.gabarito)) console.log(n, 'gabarito fora', o.gabarito);
          if (new Set(o.opcoes).size !== o.opcoes.length) console.log(n, 'opcoes duplicadas', o.opcoes);
          if (/ordem|order/.test(o.tipo ?? '')) {
            const a1 = o.opcoes.map(strip).sort().join('|'), a2 = strip(o.gabarito).split(/\s+/).sort().join('|');
            if (a1 !== a2) console.log(n, 'ordem difere', o.gabarito, o.opcoes);
          }
        }
        if (o.linhas && o.titulo !== undefined) for (const l of o.linhas) if (l.personagem && !vozes[l.personagem]) console.log(n, 'personagem sem voz', l.personagem);
        if (o.erros) for (const e of o.erros) { const [x, y] = Array.isArray(e) ? e : [e.errado ?? e.errada, e.certo ?? e.certa]; if (x === y) console.log(n, 'erro igual', x); };
        Object.values(o).forEach((v) => walk(v, path));
      }
    };
    walk(s, '');
  }
}
console.log('validado', nums.join(','));
