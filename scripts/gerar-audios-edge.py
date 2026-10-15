"""Gera os MP3 que faltam com o edge-tts (Python), mesmas vozes e mesmo texto limpo do scripts/gerar-audios.mjs.
Útil onde o Node não alcança o Edge mas o Python alcança (proxy: a biblioteca aceita proxy=).
Uso: python3 -I scripts/gerar-audios-edge.py --idioma de [--limite N] [--simultaneos 6]
Grava em public/audio/<idioma>/<hash>.mp3; depois rode `node scripts/proteger-audio.mjs` para separar os privados."""
import asyncio, csv, os, re, argparse, pathlib, sys
import edge_tts
ap = argparse.ArgumentParser(); ap.add_argument('--idioma', required=True); ap.add_argument('--limite', type=int, default=0); ap.add_argument('--simultaneos', type=int, default=6); a = ap.parse_args()
VOZES = {'de': ('de-DE-ConradNeural', 'de-DE-KatjaNeural'), 'ru': ('ru-RU-DmitryNeural', 'ru-RU-SvetlanaNeural'), 'en': ('en-US-GuyNeural', 'en-US-JennyNeural'),
         'es': ('es-ES-AlvaroNeural', 'es-ES-ElviraNeural'), 'fr': ('fr-FR-HenriNeural', 'fr-FR-DeniseNeural'), 'it': ('it-IT-DiegoNeural', 'it-IT-ElsaNeural'), 'br': ('pt-BR-AntonioNeural', 'pt-BR-FranciscaNeural')}
M, F = VOZES[a.idioma]
raiz = pathlib.Path(__file__).resolve().parent.parent
pub = raiz / 'public' / 'audio' / a.idioma; priv = raiz / 'server' / 'audio-privado' / a.idioma
pub.mkdir(parents=True, exist_ok=True)
def limpar(t):
    t = t.replace('́', '').replace('—', ', ').replace('–', ', ').replace('…', '...')
    t = re.sub(r'[<>&]', ' ', t); return re.sub(r'\s+', ' ', t).strip()
linhas, vistos = [], set()
for nome in (f'{a.idioma}-gravar.csv', f'{a.idioma}-livro-gravar.csv'):
    p = raiz / 'content' / 'audio' / nome
    if not p.exists(): continue
    for r in csv.DictReader(open(p, encoding='utf-8')):
        if r['arquivo'] in vistos: continue
        vistos.add(r['arquivo']); linhas.append(r)
pend = [r for r in linhas if not (pub / r['arquivo']).exists() and not (priv / r['arquivo']).exists()]
if a.limite: pend = pend[:a.limite]
print(f"{a.idioma}: {len(linhas)} frases, {len(pend)} a gerar", flush=True)
proxy = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy')
sem = asyncio.Semaphore(a.simultaneos); ok = 0; falhas = []
async def um(r):
    global ok
    alvo = pub / r['arquivo']; voz = F if r['voz'] == 'f' else M
    async with sem:
        for t in range(1, 5):
            try:
                await asyncio.wait_for(edge_tts.Communicate(limpar(r['texto']), voz, proxy=proxy).save(str(alvo)), timeout=max(25, len(r['texto']) * 0.12))
                if alvo.stat().st_size < 1000: raise RuntimeError('arquivo pequeno')
                ok += 1
                if ok % 100 == 0: print(f'  {ok}/{len(pend)}', flush=True)
                return
            except Exception as e:
                alvo.unlink(missing_ok=True); await asyncio.sleep(1.5 * t)
        falhas.append(r['arquivo'] + ' ' + r['texto'][:40])
async def main(): await asyncio.gather(*(um(r) for r in pend))
asyncio.run(main())
presentes = sorted(f.stem for f in pub.glob('*.mp3'))
(pub / 'index.json').write_text('["' + '","'.join(presentes) + '"]\n' if presentes else '[]\n')
print(f'gerados {ok}, falhas {len(falhas)}'); [print('FALHA', x) for x in falhas[:20]]
