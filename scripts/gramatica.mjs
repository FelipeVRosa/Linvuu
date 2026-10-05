// Monta a aba Gramática a partir dos blocos de gramática das aulas (nada é escrito duas vezes).
//   node scripts/gramatica.mjs ru  →  content/gramatica/ru.json
import fs from 'node:fs';
import path from 'node:path';

const id = process.argv[2] ?? 'ru';
const raiz = path.resolve(import.meta.dirname, '..');
const dirAulas = path.join(raiz, 'content', 'idiomas', id, 'aulas');
// Categoria para blocos sem `tag` (aulas 1 a 10). Blocos novos usam gramatica(..., { tag }).
const CATEGORIAS = [
  [/c[óo]pula|profiss[ãa]o|negar com/i, 'Frase básica'], [/ty|ты.*вы|zовут|зовут/i, 'Pronomes'], [/g[êe]nero|plurais/i, 'Substantivos'],
  [/у меня есть|verbos|presente dos verbos|pedir/i, 'Verbos'], [/preposicional|acusativo|n[ãa]o tenho|нет/i, 'Casos'], [/n[úu]mero|рубль/i, 'Números'],
];
const ORDEM = ['Frase básica', 'Substantivos', 'Adjetivos e possessivos', 'Pronomes', 'Verbos', 'Preposições', 'Advérbios', 'Perguntas', 'Números', 'Tempo', 'Aspecto e futuro', 'Verbos de movimento', 'Casos', 'Revisão'];
const categoria = (b) => b.tag ?? CATEGORIAS.find(([re]) => re.test(b.titulo))?.[1] ?? 'Outros';

const topicos = [];
for (const f of fs.readdirSync(dirAulas).filter((x) => /^aula-\d+\.json$/.test(x)).sort()) {
  const a = JSON.parse(fs.readFileSync(path.join(dirAulas, f), 'utf8'));
  a.sessoes.forEach((s, i) => s.blocos.forEach((b, k) => {
    if (b.tipo !== 'gramatica') return;
    const { tipo, min, tag, ...resto } = b;
    topicos.push({ id: `a${a.aula}-${s.sessao.toLowerCase()}-${k}`, categoria: categoria(b), aula: a.aula, aulaTitulo: a.titulo, sessao: s.sessao, dia: (a.aula - 1) * 4 + i + 1, ...resto });
  }));
}
const categorias = ORDEM.filter((c) => topicos.some((t) => t.categoria === c)).concat([...new Set(topicos.map((t) => t.categoria))].filter((c) => !ORDEM.includes(c)));
fs.mkdirSync(path.join(raiz, 'content', 'gramatica'), { recursive: true });
fs.writeFileSync(path.join(raiz, 'content', 'gramatica', `${id}.json`), JSON.stringify({ idioma: id, categorias, topicos }) + '\n');
console.log(`gramática (${id}): ${topicos.length} tópicos em ${categorias.length} categorias`);
