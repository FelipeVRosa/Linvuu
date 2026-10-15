"""Copia as sessões geradas em content/idiomas/<idioma>/dia-NNN.json de volta para content/idiomas/<idioma>/aulas/aula-NNN.json.
O `npm run aulas` recompila os dias a partir das aulas; sem esta cópia, ele apagaria o conteúdo gerado dos livros.
Uso: python3 -I scripts/livros/sincronizar_aulas.py --idioma de [--idioma en ...]"""
import json, glob, re, argparse
ap = argparse.ArgumentParser(); ap.add_argument('--idioma', action='append', required=True); a = ap.parse_args()
for l in a.idioma:
    n = 0
    for f in sorted(glob.glob(f'content/idiomas/{l}/aulas/aula-*.json')):
        au = json.load(open(f)); num = au['aula']; mudou = False
        for i, s in enumerate(au['sessoes']):
            try: d = json.load(open(f'content/idiomas/{l}/dia-{4 * (num - 1) + 1 + i:03d}.json'))
            except FileNotFoundError: continue
            if d['sessao']['blocos'] != s['blocos']: s['blocos'] = d['sessao']['blocos']; mudou = True
        if mudou:
            au['geradaDoLivro'] = True  # o compilar-aulas.mjs não sobrescreve esta aula a partir de fontes/
            open(f, 'w').write(json.dumps(au, ensure_ascii=False, indent=2) + '\n'); n += 1
    print(l, n, 'aulas sincronizadas')
