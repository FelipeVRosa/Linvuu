"""Copia capítulos de content/livros-privado/<idioma> para content/livros/<idioma> (amostra pública), marcando o idioma estudado com *...*.
Uso: python3 -I scripts/livros/publicar_capitulos.py --idioma ru --caps 1,2 --paginas 2-22,23-45"""
import json, re, argparse
ap = argparse.ArgumentParser(); ap.add_argument('--idioma', required=True); ap.add_argument('--caps', required=True); ap.add_argument('--paginas', required=True); ap.add_argument('--script', default='cirilico'); a = ap.parse_args()
RUN = re.compile(r'[Ѐ-ӿ́]+(?:[ \-–][Ѐ-ӿ́]+)*')
def marca(s):
    if '*' in s or '~~' in s: return s
    return RUN.sub(lambda m: '*' + m.group(0) + '*', s)
caps = [int(x) for x in a.caps.split(',')]; pags = [tuple(int(y) for y in x.split('-')) for x in a.paginas.split(',')]
for n, pg in zip(caps, pags):
    c = json.load(open(f'content/livros-privado/{a.idioma}/cap-{n:02d}.json'))
    c['paginas'] = list(pg); c['titulo'] = c['titulo'].strip().capitalize() if c['titulo'].isupper() else c['titulo']
    for b in c['blocos']:
        if b['t'] == 'tabela':
            b['cabecalho'] = [marca(x) for x in b['cabecalho']]; b['linhas'] = [[marca(x) for x in l] for l in b['linhas']]
        elif 'texto' in b and b['t'] != 'h2': b['texto'] = marca(b['texto'])
        elif b['t'] == 'h2': b['texto'] = marca(b['texto'])
    json.dump(c, open(f'content/livros/{a.idioma}/cap-{n:02d}.json', 'w'), ensure_ascii=False, indent=1)
    print('publicado', a.idioma, n, c['titulo'], len(c['blocos']), 'blocos')
