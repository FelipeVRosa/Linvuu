// Compara os MP3 do Edge TTS (pastas antigas) com os da ElevenLabs (v2), arquivo a arquivo (mesmo hash = mesmo texto).
//   node scripts/comparar-audio-edge-eleven.mjs                     só relatório (JSON em stdout, resumo em stderr)
//   node scripts/comparar-audio-edge-eleven.mjs --aplicar           apaga os MP3 antigos que têm gêmeo v2 aceitável
//   node scripts/comparar-audio-edge-eleven.mjs --saida=arq.json    grava os dados por arquivo
// Aceitável = a v2 tem pelo menos 0,5 s, o tamanho do arquivo confere com o manifesto e a duração fica entre 0,25x e 3x da antiga.
// (Palavras e letras soltas têm razão baixa porque o Edge acrescenta ~1,5 s de silêncio; abaixo de 0,25x ou acima de 3x o antigo fica até ouvir.)
// Com --aplicar, o index.json público antigo é reescrito só com o que sobrou.
// Só compara dentro do mesmo nível (público com público, privado com privado). Arquivos sem gêmeo ficam: são o que ainda falta gerar.
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const ex = promisify(execFile);
const raiz = path.resolve(import.meta.dirname, '..');
const args = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, v = 'true'] = a.replace(/^--/, '').split('='); return [k, v]; }));
const LIM = [0.25, 3.0];
const IDIOMAS = ['br', 'de', 'en', 'es', 'fr', 'it', 'pt', 'ru'];
const NIVEIS = { publico: ['public/audio', 'public/audio/v2'], privado: ['server/audio-privado', 'server/audio-privado-v2'] };
const lista = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /^[0-9a-f]{8}\.mp3$/.test(f)).map((f) => f.slice(0, 8)) : []);
const duracao = async (arq) => { try { const { stdout } = await ex('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', arq]); return Number(stdout.trim()); } catch { return NaN; } };

async function emLote(itens, n, fn) { const out = new Array(itens.length); let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < itens.length) { const k = i++; out[k] = await fn(itens[k]); } })); return out; }

const linhas = [];
for (const [nivel, [d1, d2]] of Object.entries(NIVEIS)) for (const idioma of IDIOMAS) {
  const a = new Set(lista(path.join(raiz, d1, idioma))), b = new Set(lista(path.join(raiz, d2, idioma)));
  let manifesto = {}; try { manifesto = JSON.parse(fs.readFileSync(path.join(raiz, d2, idioma, 'manifest.json'), 'utf8')).arquivos ?? {}; } catch { /* sem manifesto: mede com ffprobe */ }
  const comuns = [...a].filter((h) => b.has(h));
  const medidas = await emLote(comuns, 12, async (h) => {
    const p1 = path.join(raiz, d1, idioma, h + '.mp3'), p2 = path.join(raiz, d2, idioma, h + '.mp3');
    const s1 = await duracao(p1); const s2 = manifesto[h]?.seg ?? (await duracao(p2));
    const tam = fs.statSync(p2).size, tamOk = manifesto[h]?.bytes === undefined || manifesto[h].bytes === tam;
    return { nivel, idioma, hash: h, antigo: s1, novo: s2, tamOk, bytesAntigo: fs.statSync(p1).size, bytesNovo: tam, razao: s2 / s1, caminho: path.relative(raiz, p1) };
  });
  linhas.push(...medidas);
  console.error(`${nivel} ${idioma}: antigo=${a.size} novo=${b.size} gêmeos=${comuns.length} só-antigo=${a.size - comuns.length}`);
}
const ok = (l) => Number.isFinite(l.razao) && l.novo >= 0.5 && l.tamOk && l.razao >= LIM[0] && l.razao <= LIM[1];
const bons = linhas.filter(ok), fora = linhas.filter((l) => !ok(l));
const med = (v) => { const s = [...v].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
console.error(`gêmeos=${linhas.length} aceitáveis=${bons.length} fora de ${LIM.join('–')}x=${fora.length} razão mediana=${med(linhas.map((l) => l.razao).filter(Number.isFinite)).toFixed(2)} bytes antigos aceitáveis=${(bons.reduce((s, l) => s + l.bytesAntigo, 0) / 1048576).toFixed(1)} MiB`);
if (args.saida) fs.writeFileSync(args.saida, JSON.stringify({ limites: LIM, linhas }, null, 1));
if (args.aplicar === 'true') {
  for (const l of bons) fs.rmSync(path.join(raiz, l.caminho));
  for (const idioma of IDIOMAS) { // o índice público antigo lista só o que ainda existe na pasta antiga
    const dir = path.join(raiz, 'public/audio', idioma);
    if (fs.existsSync(path.join(dir, 'index.json'))) fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(lista(dir).sort()));
  }
  console.error(`apagados ${bons.length} MP3 antigos com gêmeo ElevenLabs aceitável; ${fora.length} mantidos para conferência`);
}
