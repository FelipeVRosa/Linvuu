// Gera a estrutura de conteúdo: 100 arquivos por idioma + content/indice.json.
//   node scripts/conteudo.mjs          cria o que falta (nunca sobrescreve aula já editada)
//   node scripts/conteudo.mjs --check  só valida (usado em `npm run content:check`)
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'content');
const trilha = JSON.parse(fs.readFileSync(path.join(root, 'trilha-100-dias.json'), 'utf8'));
const { cursos } = JSON.parse(fs.readFileSync(path.join(root, 'cursos.json'), 'utf8'));
const check = process.argv.includes('--check');
const STATUS = ['planejada', 'em-producao', 'publicada'];
const pad = (n) => String(n).padStart(3, '0');
const erros = [];
const indice = { cursos: {} };

for (const c of cursos.filter((x) => x.area === 'idiomas')) {
  const dir = path.join(root, 'idiomas', c.id);
  fs.mkdirSync(dir, { recursive: true });
  const status = [];
  const sobrescritos = {};
  for (const d of trilha.dias) {
    const file = path.join(dir, `dia-${pad(d.dia)}.json`);
    if (!fs.existsSync(file)) {
      if (check) { erros.push(`falta ${c.id}/dia-${pad(d.dia)}.json`); status.push('planejada'); continue; }
      const aula = {
        idioma: c.id, dia: d.dia, fase: d.fase, nivel: d.nivel, status: 'planejada',
        titulo: d.titulo, objetivo: d.objetivo,
        video: { status: 'pendente', url: null, duracaoMin: null },
        imersao: { status: 'pendente', texto: null, audio: null, vocabulario: [] },
        pratica: { status: 'pendente', exercicios: [] },
        responsavel: null,
      };
      fs.writeFileSync(file, JSON.stringify(aula, null, 2) + '\n');
    }
    const aula = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (aula.dia !== d.dia || aula.idioma !== c.id) erros.push(`${file}: dia/idioma não confere`);
    if (!STATUS.includes(aula.status)) erros.push(`${file}: status inválido "${aula.status}"`);
    status.push(aula.status);
    const m = trilha.dias[d.dia - 1];
    if (aula.titulo !== m.titulo || aula.objetivo !== m.objetivo) sobrescritos[d.dia] = { t: aula.titulo, o: aula.objetivo };
  }
  indice.cursos[c.id] = {
    total: status.length,
    publicadas: status.filter((s) => s === 'publicada').length,
    emProducao: status.filter((s) => s === 'em-producao').length,
    planejadas: status.filter((s) => s === 'planejada').length,
    status,
    sobrescritos,
  };
}
if (!check) fs.writeFileSync(path.join(root, 'indice.json'), JSON.stringify(indice) + '\n');
if (erros.length) { console.error(erros.join('\n')); process.exit(1); }
console.log(`ok: ${Object.keys(indice.cursos).length} idiomas × ${trilha.dias.length} dias`);
