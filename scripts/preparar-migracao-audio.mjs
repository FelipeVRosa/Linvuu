// Só planeja/verifica arquivos locais: não faz upload, não apaga e não chama serviços.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export function planejar(entradas, commit, versao = 'r20261019') {
  if (!/^[a-f0-9]{40}$/.test(commit) || !/^[a-zA-Z0-9_-]+$/.test(versao)) throw new Error('Commit ou versão inválidos');
  const vistos = new Set(), itens = [];
  for (const e of entradas) {
    const m = e.caminho.match(/^(public\/audio|server\/audio-privado)\/([a-z]{2})\/([a-f0-9]{8}\.mp3)$/);
    if (!m || !/^[a-f0-9]{40}$/.test(e.sha) || !Number.isSafeInteger(e.bytes) || e.bytes <= 0)
      throw new Error('Entrada de áudio inválida: ' + e.caminho);
    if (vistos.has(e.caminho)) throw new Error('Origem duplicada: ' + e.caminho);
    vistos.add(e.caminho);
    const publico = m[1] === 'public/audio';
    itens.push({ origem: e.caminho, blobGit: e.sha, bytes: e.bytes, visibilidade: publico ? 'publico' : 'privado',
      bucketProposto: publico ? 'linvuu-audio-publico' : 'linvuu-audio-privado',
      chave: versao + '/' + m[2] + '/' + m[3], idioma: m[2], arquivo: m[3],
      estado: 'aguardando-transferencia' });
  }
  const lotes = new Map();
  for (const item of itens) {
    const grupo = item.visibilidade + '-' + item.idioma;
    const a = lotes.get(grupo) ?? []; a.push(item); lotes.set(grupo, a);
  }
  return { esquema: 1, commit, versao, modo: 'simulacao-sem-upload',
    arquivos: itens.length, bytes: itens.reduce((s, i) => s + i.bytes, 0),
    lotes: [...lotes.entries()].map(([id, arquivos]) => ({ id, arquivos })) };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some(a => a.startsWith('--') && !['--verificar-local'].includes(a))) throw new Error('Opção desconhecida');
  const posicionais = args.filter(a => !a.startsWith('--'));
  const ref = posicionais[0] ?? 'HEAD', destino = path.resolve(posicionais[1] ?? 'migracao-audio');
  if (!/^[A-Za-z0-9_./-]+$/.test(ref) || ref.startsWith('-')) throw new Error('Referência inválida');
  const commit = execFileSync('git', ['rev-parse', '--verify', ref + '^{commit}'], { encoding: 'utf8' }).trim();
  const raiz = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
  const raw = execFileSync('git', ['ls-tree', '-r', '-l', '-z', commit, '--', 'public/audio', 'server/audio-privado'], { maxBuffer: 32*1024*1024 }).toString('utf8');
  const entradas = raw.split('\0').filter(Boolean).flatMap(linha => {
    const m = linha.match(/^([0-9]+) blob ([a-f0-9]+)\s+(\d+)\t([\s\S]+)$/);
    if (!m || !m[4].endsWith('.mp3')) return [];
    if (!['100644','100755'].includes(m[1])) throw new Error('Modo Git não permitido: ' + m[4]);
    return [{ caminho: m[4], sha: m[2], bytes: Number(m[3]) }];
  });
  const plano = planejar(entradas, commit);
  if (args.includes('--verificar-local')) {
    const itens = plano.lotes.flatMap(l => l.arquivos); let n = 0;
    const verificar = async () => {
      while (n < itens.length) {
        const i = itens[n++], arquivo = path.join(raiz, i.origem), st = await fs.lstat(arquivo);
        if (!st.isFile() || st.isSymbolicLink() || st.size !== i.bytes) throw new Error('Arquivo local diverge: ' + i.origem);
        const dados = await fs.readFile(arquivo);
        const git = createHash('sha1').update('blob ' + dados.length + '\0').update(dados).digest('hex');
        if (git !== i.blobGit) throw new Error('Conteúdo local diverge: ' + i.origem);
        i.sha256Local = createHash('sha256').update(dados).digest('hex');
      }
    };
    await Promise.all(Array.from({length:4}, verificar));
    plano.verificacaoLocal = 'todos-conferidos-com-o-commit';
  }
  // Não sobrescreve resultados de uma execução anterior.
  await fs.mkdir(destino, { recursive: true });
  for (const l of plano.lotes) await fs.writeFile(path.join(destino, l.id + '.json'), JSON.stringify({
    esquema: plano.esquema, commit, versao: plano.versao, lote: l.id, arquivos: l.arquivos
  }, null, 2) + '\n', { flag: 'wx' });
  const resumo = { ...plano, lotes: plano.lotes.map(l => ({ id: l.id, arquivos: l.arquivos.length, bytes: l.arquivos.reduce((s,i)=>s+i.bytes,0) })) };
  await fs.writeFile(path.join(destino,'resumo.json'), JSON.stringify(resumo,null,2)+'\n', {flag:'wx'});
  console.log(JSON.stringify(resumo,null,2));
}
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch(e => { console.error(e.message); process.exitCode=1; });
}
