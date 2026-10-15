"""Extrai um livro em .docx (via pandoc) para capítulos JSON no mesmo formato do extrair_capitulos.py.
Uso: python3 -I scripts/livros/extrair_docx.py --docx ARQ.docx --idioma ru --saida content/livros-privado/ru --nivel a1"""
import json, re, subprocess, argparse, os
ap = argparse.ArgumentParser(); ap.add_argument('--docx', required=True); ap.add_argument('--idioma', required=True); ap.add_argument('--saida', required=True); ap.add_argument('--nivel', default='a1')
a = ap.parse_args()
ast = json.loads(subprocess.check_output(['pandoc', a.docx, '-t', 'json']))
def inl(xs):
    o = ''
    for x in xs:
        t = x['t']
        if t == 'Str': o += x['c']
        elif t == 'Space' or t == 'SoftBreak': o += ' '
        elif t == 'LineBreak': o += '\n'
        elif t in ('Emph', 'Italic'): o += '*' + inl(x['c']) + '*'
        elif t in ('Strong', 'Span', 'Quoted', 'SmallCaps', 'Underline'): o += inl(x['c'] if t != 'Span' and t != 'Quoted' else x['c'][-1])
        elif t == 'Strikeout': o += '~~' + inl(x['c']) + '~~'
        elif t in ('Superscript', 'Subscript'): o += inl(x['c'])
        elif t == 'Link': o += inl(x['c'][1])
        elif t == 'Code': o += x['c'][1]
    return o.replace('*  *', ' ').replace('**', '')
def plain(bs):
    return ' '.join(blk(b)[0]['texto'] if blk(b) and 'texto' in blk(b)[0] else '' for b in bs).strip()
def cel(c): return ' '.join(x for x in (plain(c[4]),) if x)
def blk(b):
    t = b['t']
    if t in ('Para', 'Plain'):
        s = inl(b['c']).strip(); return [{'t': 'p', 'texto': s}] if s else []
    if t == 'BulletList': return [{'t': 'li', 'texto': plain(i)} for i in b['c']]
    if t == 'OrderedList': return [{'t': 'item', 'n': b['c'][0][0] + k, 'texto': plain(i)} for k, i in enumerate(b['c'][1])]
    if t == 'Table':
        c = b['c']; head = c[3][1]; body = c[4][0][3] if c[4] else []
        def linhas(rows): return [[cel(x) for x in r[1]] for r in rows]
        cab = linhas(head); lin = linhas(body)
        if not cab and lin: cab, lin = [lin[0]], lin[1:]
        if not cab: return []
        return [{'t': 'tabela', 'cabecalho': cab[0], 'linhas': lin}]
    return []
caps, atual = [], None
for b in ast['blocks']:
    for x in blk(b):
        if x['t'] == 'p':
            m = re.match(r'^AULA\s+(\d+)\s*[—–-]+\s*(.*)$', x['texto'])
            if m:
                atual = {'n': int(m.group(1)), 'idioma': a.idioma, 'titulo': m.group(2).strip().capitalize(), 'nivel': a.nivel, 'paginas': '', 'blocos': []}; caps.append(atual); continue
        if not atual: continue
        if x['t'] == 'p':
            s = x['texto']
            if re.match(r'^\d+\.\d+\s', s) or re.match(r'^(EXERCÍCIOS|GABARITO|RESUMO DE BOLSO.*|O que vem na próxima aula)$', s, re.I):
                x = {'t': 'h2', 'texto': s}
            elif re.match(r'^\([^)]*\)$', s) and not atual['blocos']: x = {'t': 'p', 'texto': s}
        atual['blocos'].append(x)
os.makedirs(a.saida, exist_ok=True)
for c in caps:
    json.dump(c, open(f"{a.saida}/cap-{c['n']:02d}.json", 'w'), ensure_ascii=False, indent=1)
    print(c['n'], c['titulo'], len(c['blocos']), 'blocos', sum(1 for b in c['blocos'] if b['t'] == 'h2'), 'h2', sum(1 for b in c['blocos'] if b['t'] == 'tabela'), 'tabelas')
