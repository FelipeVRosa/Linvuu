// Auditoria objetiva das aulas: confere alfabeto, letras usadas antes de ensinadas, duplicatas, minutos e números prometidos.
//   node scripts/auditar-aulas.mjs ru        imprime o relatório
//   node scripts/auditar-aulas.mjs ru --md   grava docs/REVISAO-<ID>-AULAS.md
import fs from 'node:fs';
import path from 'node:path';

const id = process.argv[2] ?? 'ru';
const gravar = process.argv.includes('--md');
const raiz = path.resolve(import.meta.dirname, '..');
const dir = path.join(raiz, 'content', 'idiomas', id, 'aulas');
const aulas = fs.readdirSync(dir).filter((f) => /^aula-\d+\.json$/.test(f)).sort().map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
const ALFABETO = [...'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'];
const norm = (s) => s.toLowerCase().replace(/ё/g, 'е'); // só para comparar palavras
const lc = (s) => s.toLowerCase(); // letras: Ё e Е são letras diferentes
const letrasDe = (s) => [...s.matchAll(/[А-Яа-яЁё]/g)].map((m) => m[0]);

const blocos = (s, tipo) => s.blocos.filter((b) => b.tipo === tipo || (tipo === 'palavras' && b.tipo === 'vocabulario'));
const out = [];
const p = (t = '') => out.push(t);

const ensinadas = new Set();
const letrasPorAula = {};
const achados = { antes: [], duplicatas: [], minutos: [], promessas: [] };
const resumo = [];

for (const a of aulas) {
  const novasNaAula = [];
  let palavrasUnicas = new Set(), falas = 0, exerc = 0, minBlocos = 0;
  for (const s of a.sessoes) {
    for (const b of blocos(s, 'alfabeto')) for (const g of b.grupos) for (const l of g.letras) { ensinadas.add(lc(l.maiuscula)); novasNaAula.push(l.maiuscula); }
    // texto russo da sessão
    const textos = [];
    for (const b of blocos(s, 'palavras')) b.itens.forEach((i) => textos.push({ onde: 'palavra', t: i.ru }));
    for (const b of blocos(s, 'dialogo')) b.linhas.forEach((l) => textos.push({ onde: 'diálogo', t: l.ru }));
    for (const b of blocos(s, 'texto')) textos.push({ onde: 'texto', t: b.ru });
    for (const b of blocos(s, 'alfabeto')) for (const g of b.grupos) g.letras.forEach((l) => textos.push({ onde: 'exemplo de letra', t: l.exemplo }));
    const fora = new Map();
    for (const { onde, t } of textos) for (const w of t.split(/[\s—.,!?«»…:;()\-/]+/).filter(Boolean)) {
      const faltam = [...new Set(letrasDe(w).map(lc))].filter((c) => !ensinadas.has(c));
      if (faltam.length && !fora.has(norm(w))) fora.set(norm(w), { w, faltam: faltam.map((c) => c.toUpperCase()).join(''), onde });
    }
    const total = new Set(textos.map((x) => norm(x.t))).size;
    achados.antes.push({ aula: a.aula, sessao: s.sessao, n: fora.size, de: total, ex: [...fora.values()].slice(0, 6).map((x) => `${x.w} (${x.faltam})`).join(', ') });
    // duplicatas
    for (const b of blocos(s, 'palavras')) {
      const vistos = new Map();
      b.itens.forEach((i) => vistos.set(norm(i.ru), (vistos.get(norm(i.ru)) ?? 0) + 1));
      [...vistos].filter(([, n]) => n > 1).forEach(([w, n]) => achados.duplicatas.push(`Aula ${a.aula} ${s.sessao}: «${w}» aparece ${n}×`));
      b.itens.forEach((i) => palavrasUnicas.add(norm(i.ru)));
    }
    for (const b of blocos(s, 'dialogo')) falas += b.linhas.length;
    for (const b of blocos(s, 'exercicios')) exerc += b.itens.length;
    const soma = s.blocos.reduce((x, b) => x + (b.min ?? 0), 0);
    minBlocos += soma;
    if (soma !== s.duracaoMin) achados.minutos.push(`Aula ${a.aula} ${s.sessao}: blocos somam ${soma} min, mas a sessão declara ${s.duracaoMin}`);
  }
  if (minBlocos !== a.duracaoTotalMin) achados.minutos.push(`Aula ${a.aula}: blocos somam ${minBlocos} min, a aula declara ${a.duracaoTotalMin}`);
  letrasPorAula[a.aula] = novasNaAula;
  const o = a.objetivo;
  const claim = (re) => { const m = o.match(re); return m ? Number(m[1]) : null; };
  const cs = claim(/(\d+)\s*(?:primeiros\s*)?(?:sons|letras)/) ?? claim(/primeiros\s*(\d+)/);
  if (cs !== null) achados.promessas.push({ aula: a.aula, texto: `${cs} sons/letras`, real: novasNaAula.length });
  const cp = claim(/(\d+)\s*palavras/);
  if (cp !== null) achados.promessas.push({ aula: a.aula, texto: `${cp} palavras`, real: palavrasUnicas.size });
  resumo.push({ aula: a.aula, titulo: a.titulo, letras: novasNaAula.length, palavras: palavrasUnicas.size, falas, exerc, declarado: a.duracaoTotalMin, blocos: minBlocos });
}
const faltantes = ALFABETO.filter((c) => !ensinadas.has(lc(c)));

p(`# Revisão objetiva: aulas ${aulas[0].aula} a ${aulas.at(-1).aula} (${id})`);
p('');
p('Gerado por `node scripts/auditar-aulas.mjs ' + id + ' --md`. Números calculados direto nos arquivos de `content/idiomas/' + id + '/aulas/`.');
p('');
p('## Resumo por aula');
p('| Aula | Título | Letras novas | Palavras únicas | Falas | Exercícios | Min declarados | Min somando blocos |');
p('|---|---|---|---|---|---|---|---|');
for (const r of resumo) p(`| ${r.aula} | ${r.titulo} | ${r.letras} | ${r.palavras} | ${r.falas} | ${r.exerc} | ${r.declarado} | ${r.blocos} |`);
p(`| **Total** | | ${resumo.reduce((x, r) => x + r.letras, 0)} | ${resumo.reduce((x, r) => x + r.palavras, 0)} | ${resumo.reduce((x, r) => x + r.falas, 0)} | ${resumo.reduce((x, r) => x + r.exerc, 0)} | ${resumo.reduce((x, r) => x + r.declarado, 0)} | ${resumo.reduce((x, r) => x + r.blocos, 0)} |`);
p('');
if (id === 'ru') {
  p('## 1. O alfabeto não fecha');
  p(`O russo tem 33 letras. As aulas ensinam **${ensinadas.size}**. ${faltantes.length ? `**Faltam: ${faltantes.join(', ')}.**` : 'Alfabeto completo.'}`);
  p('A aula 3 promete "fechar o alfabeto cirílico", mas só fecha com У e Х.');
  p('');
  p('## 2. Palavras usam letras que ainda não foram ensinadas');
  p('Para cada sessão: palavras (de palavras, diálogos, textos e exemplos de letras) com alguma letra que o aluno ainda não viu.');
  p('| Aula | Sessão | Palavras com letra não ensinada | Exemplos (letras que faltam) |');
  p('|---|---|---|---|');
  for (const x of achados.antes) p(`| ${x.aula} | ${x.sessao} | ${x.n} de ${x.de} | ${x.ex || '—'} |`);
  p('');
}
p('## 3. Números prometidos x reais');
p('| Aula | Promessa no objetivo | Real |');
p('|---|---|---|');
for (const x of achados.promessas) p(`| ${x.aula} | ${x.texto} | ${x.real} |`);
p('');
p('## 4. Duplicatas');
(achados.duplicatas.length ? achados.duplicatas : ['Nenhuma.']).forEach((d) => p(`- ${d}`));
p('');
p('## 5. Minutos');
(achados.minutos.length ? achados.minutos : ['Todos batem.']).forEach((d) => p(`- ${d}`));
p('');
const totalMin = resumo.reduce((x, r) => x + r.declarado, 0);
const mediaAula = totalMin / resumo.length;
p('## 6. Horas reais do ciclo (calculadas)');
p(`- ${resumo.length} aulas declaram ${totalMin} min = **${(totalMin / 60).toFixed(1)} h** (média de ${mediaAula} min por aula).`);
p(`- Um ciclo de 10 aulas nesse formato teria **${((mediaAula * 10) / 60).toFixed(1)} h**, não 80 h.`);
p(`- A 40 min por dia, ${resumo.length} aulas levam ${Math.ceil(totalMin / 40)} dias; 10 aulas levam ${Math.ceil((mediaAula * 10) / 40)} dias.`);
p('- Para o ciclo ter 80 h, cada aula teria de ter 8 h (16 sessões de 30 min), ou o ciclo teria de ter 40 aulas.');
if (id === 'ru') {
  p('');
  p('## 7. Achados de leitura (não automáticos)');
  [
    'Aula 4 testa concordância de gênero (новый/новая/новое, старая nos exercícios e07, e09 e e11) e usa мой/моя/моё no texto, mas o gênero só é explicado na aula 5, sessão 1.',
    'Transliteração de «что» e «не за что» como "chto" e "nié za chto": em russo «что» soa "shto". A grafia engana o aluno.',
    'Aula 1, S3: o diálogo soa pouco natural em russo («Она мама» repete «Это мама»; «А, вот кто!» e «Нет, не за что» não são naturais). Vale revisão de um falante nativo.',
    'Aulas 1 e 4: «Nunca use есть» é forte demais. Em contexto formal e em definições «есть» aparece. Sugestão: "no dia a dia, não use".',
    'Aula 3, S3: o texto «На уроке» usa vocabulário não ensinado (преподаватель, входит, класс, студентка, говорит, отвечает). Com tradução funciona, mas pesa para a aula 3.',
    'Aula 5, S1: «мои друзья» mostra plural irregular (друг → друзья) sem aviso.',
    'Aula 5, S2 tem 6 palavras e 4 exercícios; as outras sessões têm de 10 a 20 itens. A carga fica desigual.',
    'Aula 1, S1: a introdução promete 8 palavras; a lista tem 7 diferentes (мама repetida).',
    'Aula 6: o bloco de palavras se chama "vocabulario" (nas aulas 1 a 5 é "palavras") e as tabelas de gramática usam colunas diferentes (pronome/forma, singular/plural). Falta um contrato único de esquema.',
    'Aula 6: «родители» está nas duas listas de palavras (S1 e S2).',
    'Aula 6, exercício e07: «ребята» é um distrator arriscado, porque no russo falado também significa "crianças/pessoal". Troque por uma forma que não exista.',
    'Aula 6, exercício e11 explica «в + preposicional», que não foi ensinado em nenhuma aula anterior.',
    'Aula 6: ensina «У меня есть» mas não «У меня нет» (não tenho). O aluno só consegue afirmar; a negação precisa vir logo depois.',
    'Aula 6: as formas «него, неё, них» ganham um «н-» depois de «у». A tabela mostra, mas não explica.',
    'Aula 6: «Não existe verbo ter» é uma simplificação: «иметь» existe, só é raro na fala.',
  ].forEach((t) => p(`- ${t}`));
}
const texto = out.join('\n') + '\n';
if (gravar) { fs.writeFileSync(path.join(raiz, 'docs', `REVISAO-${id.toUpperCase()}-AULAS.md`), texto); console.log('gravado'); } else console.log(texto);
