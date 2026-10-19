// Mede somente arquivos rastreados no commit; não lê segredos nem altera o repositório.
import { execFileSync } from 'node:child_process';

const ref = process.argv[2] ?? 'HEAD';
if (!/^[A-Za-z0-9_./-]+$/.test(ref) || ref.startsWith('-')) throw new Error('Referência Git inválida');
const commit = execFileSync('git', ['rev-parse', '--verify', ref + '^{commit}'], { encoding: 'utf8' }).trim();
const raw = execFileSync('git', ['ls-tree', '-r', '-l', '-z', commit], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
const arquivos = raw.split('\0').filter(Boolean).map(linha => {
  const m = linha.match(/^([0-9]+) ([a-z]+) ([a-f0-9]+)\s+(\d+|-)\t([\s\S]*)$/);
  if (!m) throw new Error('Entrada Git não reconhecida');
  return { tipo: m[2], sha: m[3], bytes: m[4] === '-' ? 0 : Number(m[4]), caminho: m[5] };
}).filter(f => f.tipo === 'blob');
const categorias = new Map();
for (const f of arquivos) {
  const partes = f.caminho.split('/');
  const nome = partes.length === 1 ? '(raiz)' : ['public', 'server', 'content'].includes(partes[0]) && partes.length > 2 ? partes.slice(0, 2).join('/') : partes[0];
  const r = categorias.get(nome) ?? { caminho: nome, arquivos: 0, bytes: 0 };
  r.arquivos++; r.bytes += f.bytes; categorias.set(nome, r);
}
const mp3 = arquivos.filter(f => f.caminho.endsWith('.mp3') && (f.caminho.startsWith('public/audio/') || f.caminho.startsWith('server/audio-privado/')));
const grupos = new Map();
for (const f of mp3) { const g = grupos.get(f.sha) ?? []; g.push(f); grupos.set(f.sha, g); }
const publico = new Map(mp3.filter(f => f.caminho.startsWith('public/audio/')).map(f => [f.caminho.slice('public/audio/'.length), f]));
const sobreposicoes = mp3.filter(f => f.caminho.startsWith('server/audio-privado/')).flatMap(f => {
  const chave = f.caminho.slice('server/audio-privado/'.length), outro = publico.get(chave);
  return outro ? [{ chave, mesmosBytes: outro.sha === f.sha }] : [];
});
const soma = a => ({ arquivos: a.length, bytes: a.reduce((s, f) => s + f.bytes, 0) });
console.log(JSON.stringify({
  commit, unidade: 'bytes; MB decimal = bytes / 1000000',
  escopo: 'Árvore atual rastreada, sem histórico, node_modules, dist ou dados remotos',
  total: soma(arquivos), categorias: [...categorias.values()].sort((a, b) => b.bytes - a.bytes),
  audio: { total: soma(mp3), publico: soma(mp3.filter(f => f.caminho.startsWith('public/'))), privado: soma(mp3.filter(f => f.caminho.startsWith('server/'))),
    blobsUnicos: grupos.size, gruposDuplicados: [...grupos.values()].filter(g => g.length > 1).length,
    bytesRepetidos: [...grupos.values()].reduce((s, g) => s + g[0].bytes * (g.length - 1), 0),
    sobreposicoesPublicoPrivado: sobreposicoes
  }
}, null, 2));
