// Gera os MP3 de um idioma com o Edge TTS (voz neural) e os salva em public/audio/<idioma>/<hash>.mp3.
// A lista vem de content/audio/<idioma>-gravar.csv (criada por `npm run aulas`).
//
//   node scripts/gerar-audios.mjs --idioma=de                 gera só o que falta (nunca sobrescreve)
//   node scripts/gerar-audios.mjs --idioma=de --simular       só mostra o que seria gerado
//   node scripts/gerar-audios.mjs --idioma=de --limite=15     no máximo 15 novos
//   node scripts/gerar-audios.mjs --idioma=de --limite=15 --amostra   escolhe 15 espalhados pela lista (piloto de vozes)
//   node scripts/gerar-audios.mjs --idioma=de --refazer=b42c0ebf,1a8c8415   regera esses arquivos
//
// Vozes: padrão por idioma abaixo; troque com EDGE_VOZ_<IDIOMA>_M / EDGE_VOZ_<IDIOMA>_F (ex.: EDGE_VOZ_DE_F=de-DE-AmalaNeural).
// O texto lido pela voz NÃO tem acento tônico (U+0301): o acento é só gráfico.
import fs from 'node:fs';
import path from 'node:path';
import pkg from 'node-edge-tts';

const { EdgeTTS } = pkg;
const raiz = path.resolve(import.meta.dirname, '..');
const args = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const [k, v = 'true'] = a.slice(2).split('='); return [k, v]; }));
const idioma = args.idioma ?? 'de';
const limite = Number(args.limite ?? 0);
const simular = args.simular === 'true';
const amostra = args.amostra === 'true';
const refazer = new Set((args.refazer ?? '').split(',').filter(Boolean));

const VOZES = {
  de: { lang: 'de-DE', m: 'de-DE-ConradNeural', f: 'de-DE-KatjaNeural' },
  ru: { lang: 'ru-RU', m: 'ru-RU-DmitryNeural', f: 'ru-RU-SvetlanaNeural' },
  en: { lang: 'en-US', m: 'en-US-GuyNeural', f: 'en-US-JennyNeural' },
  es: { lang: 'es-ES', m: 'es-ES-AlvaroNeural', f: 'es-ES-ElviraNeural' },
  fr: { lang: 'fr-FR', m: 'fr-FR-HenriNeural', f: 'fr-FR-DeniseNeural' },
  br: { lang: 'pt-BR', m: 'pt-BR-AntonioNeural', f: 'pt-BR-FranciscaNeural' },
};
const cfg = VOZES[idioma];
if (!cfg) { console.error(`idioma sem voz configurada: ${idioma}`); process.exit(1); }
const voz = (g) => process.env[`EDGE_VOZ_${idioma.toUpperCase()}_${g.toUpperCase()}`] ?? cfg[g];

/** Texto que a voz vai ler: sem acento tônico, sem travessões e sem caracteres que quebram o XML do Edge. */
export const limpar = (t) => t.normalize('NFC').replace(/\u0301/g, '').replace(/[—–]/g, ', ').replace(/…/g, '...').replace(/[<>&]/g, ' ').replace(/\s+/g, ' ').trim();

/** CSV simples com aspas duplas. */
export function lerCsv(texto) {
  const linhas = []; let campo = ''; let linha = []; let aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) { if (c === '"') { if (texto[i + 1] === '"') { campo += '"'; i++; } else aspas = false; } else campo += c; }
    else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo); linhas.push(linha); linha = []; campo = ''; }
    else if (c !== '\r') campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  const [cab, ...resto] = linhas;
  return resto.filter((r) => r.length >= cab.length).map((r) => Object.fromEntries(cab.map((k, i) => [k, r[i]])));
}

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
const dir = path.join(raiz, 'public', 'audio', idioma);
const tts = {};
const LIMITE_BASE_MS = 20000; // tempo máximo por tentativa: a biblioteca às vezes não rejeita e o job ficaria parado
const sintetizar = async (texto, g, arquivo) => {
  const LIMITE_MS = Math.max(LIMITE_BASE_MS, texto.length * 90); // textos longos (leituras) precisam de mais tempo
  // uma conexão nova por frase: uma conexão presa não contamina as seguintes
  const motor = new EdgeTTS({ voice: voz(g), lang: cfg.lang, outputFormat: 'audio-24khz-48kbitrate-mono-mp3', timeout: LIMITE_MS });
  let relogio;
  const prazo = new Promise((_, rej) => { relogio = setTimeout(() => rej(new Error(`sem resposta em ${LIMITE_MS / 1000}s`)), LIMITE_MS + 2000); });
  try { await Promise.race([motor.ttsPromise(texto, arquivo), prazo]); } finally { clearTimeout(relogio); }
};

async function main() {
  const csv = path.join(raiz, 'content', 'audio', `${idioma}-gravar.csv`);
  if (!fs.existsSync(csv)) { console.error(`não achei ${path.relative(raiz, csv)}; rode npm run aulas`); process.exit(1); }
  const linhas = lerCsv(fs.readFileSync(csv, 'utf8'));
  fs.mkdirSync(dir, { recursive: true });
  const existe = (l) => fs.existsSync(path.join(dir, l.arquivo));
  let pendentes = linhas.filter((l) => refazer.has(l.arquivo.replace('.mp3', '')) || !existe(l));
  const pulados = linhas.length - pendentes.length;
  if (limite > 0 && pendentes.length > limite) {
    if (amostra) {
      const todos = pendentes; const passo = todos.length / limite;
      pendentes = Array.from({ length: limite }, (_, i) => todos[Math.floor(i * passo)]);
      const fem = todos.find((l) => l.voz === 'f'); // o piloto tem de trazer as duas vozes
      if (fem && !pendentes.some((l) => l.voz === 'f')) pendentes[pendentes.length - 1] = fem;
    }
    else pendentes = pendentes.slice(0, limite);
  }
  const caracteres = pendentes.reduce((x, l) => x + limpar(l.texto).length, 0);
  console.log(`${idioma}: ${linhas.length} frases na lista; ${pulados} já existem; ${pendentes.length} a gerar (${caracteres} caracteres); voz m = ${voz('m')}, voz f = ${voz('f')}`);
  if (simular) { pendentes.slice(0, 12).forEach((l) => console.log(`  ${l.arquivo}  [${l.voz}]  ${l.texto}`)); if (pendentes.length > 12) console.log(`  … e mais ${pendentes.length - 12}`); console.log(`tamanho estimado: ~${Math.round((caracteres * 430 + pendentes.length * 3000) / 1024)} KB`); return; }

  let gerados = 0; const falhas = []; let bytes = 0; const feitos = []; let seguidas = 0;
  for (const l of pendentes) {
    const alvo = path.join(dir, l.arquivo); const g = l.voz === 'f' ? 'f' : 'm'; let ok = false;
    for (let tentativa = 1; tentativa <= 3 && !ok; tentativa++) {
      const t0 = Date.now();
      try {
        await sintetizar(limpar(l.texto), g, alvo);
        const tam = fs.statSync(alvo).size;
        if (tam < 1000) throw new Error(`arquivo pequeno demais (${tam} bytes)`);
        bytes += tam; gerados++; ok = true; feitos.push(l); seguidas = 0;
        console.log(`ok     ${l.arquivo} [${g}] ${Date.now() - t0}ms  ${l.texto.slice(0, 50)}`);
      } catch (e) {
        fs.rmSync(alvo, { force: true });
        console.log(`FALHA  ${l.arquivo} [${g}] tentativa ${tentativa} ${Date.now() - t0}ms  ${l.texto.slice(0, 50)}  → ${e?.message ?? e}`);
        if (tentativa === 3) { falhas.push(`${l.arquivo} (${l.texto}): ${e?.message ?? e}`); seguidas++; }
        else await dormir(1000 * tentativa);
      }
    }
    if (seguidas >= 8) { console.error('8 frases seguidas falharam: parando para não gastar o tempo do GitHub (serviço limitando ou fora do ar?)'); break; }
    await dormir(250); // sem rajadas: o serviço não é oficial
  }
  const presentes = fs.readdirSync(dir).filter((f) => f.endsWith('.mp3')).map((f) => f.replace('.mp3', '')).sort();
  fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(presentes) + '\n');
  const total = presentes.reduce((x, f) => x + fs.statSync(path.join(dir, `${f}.mp3`)).size, 0);
  console.log(`gerados: ${gerados} (${(bytes / 1024).toFixed(0)} KB) | pulados (já existiam): ${pulados} | falhas: ${falhas.length} | na pasta: ${presentes.length} arquivos, ${(total / 1024 / 1024).toFixed(2)} MB`);
  if (feitos.length && feitos.length <= 40) console.log('--- o que cada arquivo diz (arquivo, voz, texto):\n' + feitos.map((l) => `${l.arquivo} [${l.voz}] ${l.texto}`).join('\n'));
  if (falhas.length) { console.error('Falhas:\n' + falhas.slice(0, 20).join('\n')); process.exitCode = 1; }
}

if (import.meta.url === `file://${process.argv[1]}`) main();
