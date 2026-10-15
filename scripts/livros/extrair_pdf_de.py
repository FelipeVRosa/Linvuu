"""Extrai o PDF oficial do livro de alemão (capítulos 34,5 pt, seções 21 pt, corpo 12,4 pt, tabelas em retângulos) para cap-NN.json.
Uso: python3 -I scripts/livros/extrair_pdf_de.py --pdf ARQ.pdf --saida content/livros-privado/de [--ini 9 --fim 395]"""
import json, re, argparse, os, logging
import pdfplumber
logging.getLogger('pdfminer').setLevel(logging.ERROR)
logging.disable(logging.WARNING)
ap = argparse.ArgumentParser(); ap.add_argument('--pdf', required=True); ap.add_argument('--saida', required=True); ap.add_argument('--ini', type=int, default=1); ap.add_argument('--fim', type=int, default=9999); a = ap.parse_args()
pdf = pdfplumber.open(a.pdf)
# correções do texto do PDF oficial a avisar ao revisor (resto de uma autocorreção no meio da frase)

FOOT = re.compile(r'^(LINVUU\s*·|L\s*I\s*N\s*V\s*U\s*U)')
def juntaespacado(s):  # "S E A PA L AV RA" (títulos com espaçamento) -> mantém como está
    return s
import unicodedata
def texto_linha(chars):
    """Remonta o texto de uma linha: cada acento (marca combinante, largura zero) vai para a letra sob ele; espaços vêm das lacunas."""
    marcas = [c for c in chars if unicodedata.combining(c['text'][:1]) or c['text'] == '\u0301']
    bases = sorted([c for c in chars if c not in marcas], key=lambda c: (round(c['x0'], 1)))
    anexos = {id(b): '' for b in bases}
    for m in marcas:
        if not bases: break
        b = min(bases, key=lambda c: 0 if c['x0'] - 0.6 <= m['x0'] <= c['x1'] + 0.6 else min(abs(m['x0'] - c['x0']), abs(m['x0'] - c['x1'])) + 100)
        anexos[id(b)] += m['text']
    import statistics
    reais = [b for b in bases if b['text'].strip() != '']
    gaps = [reais[i + 1]['x0'] - reais[i]['x1'] for i in range(len(reais) - 1)]
    lim = (statistics.median(gaps) if gaps else 0) + 1.2
    out, prev = '', None
    for b in bases:
        if b['text'].strip() == '':
            if out and not out.endswith(' '): out += ' '
            continue
        if prev is not None and b['x0'] - prev['x1'] > lim and not out.endswith(' '): out += ' '
        t = b['text'].replace('\u0453', 'г\u0301').replace('\u045c', 'к\u0301')
        out += t + anexos[id(b)]; prev = b
    return out
def funde_acentos(pg):
    """Devolve uma página cujos 'chars' já trazem cada acento colado na letra sob ele."""
    chars = pg.chars; marcas = [c for c in chars if unicodedata.combining(c['text'][:1]) or c['text'] == '\u0301']
    if not marcas: return pg
    ids = {id(m) for m in marcas}; bases = [dict(c) for c in chars if id(c) not in ids]
    for m in marcas:
        cand = [b for b in bases if b['text'].strip() and abs(b['top'] - m['top']) < 12 and b['x0'] - 0.6 <= m['x0'] <= b['x1'] + 0.6]
        if not cand: cand = [b for b in bases if b['text'].strip() and abs(b['top'] - m['top']) < 12]
        if not cand: continue
        b = min(cand, key=lambda b: abs((b['x0'] + b['x1']) / 2 - m['x0']))
        b['text'] += m['text']
    for b in bases: b['text'] = b['text'].replace('\u0453', 'г\u0301').replace('\u045c', 'к\u0301')
    novo = pg.filter(lambda o: True); objs = dict(novo.objects); objs['char'] = bases; novo._objects = objs
    return novo
def texto_area(pg):
    return ' '.join(l['text'] for l in funde_acentos(pg).extract_text_lines()).strip()
def tabelas_da_pagina(pg):
    """Tabelas desenhadas como retângulos preenchidos (células). Devolve lista de (bbox, linhas de texto)."""
    cel = [r for r in pg.rects if 20 < r['x1'] - r['x0'] < 485 and r['bottom'] - r['top'] > 8]
    linhas = {}
    for r in cel: linhas.setdefault(round(r['top']), []).append(r)
    tops = sorted(linhas); grupos, cur = [], []
    for t in tops:
        row = sorted(linhas[t], key=lambda r: r['x0'])
        if cur and abs(t - max(r['bottom'] for r in cur[-1])) <= 3: cur.append(row)
        else:
            if cur: grupos.append(cur)
            cur = [row]
    if cur: grupos.append(cur)
    out = []
    for g in grupos:
        g = [r for r in g if len(r) >= 2]
        if len(g) < 2 and not (len(g) == 1 and len(g[0]) >= 2): continue
        rows = []
        for row in g:
            rows.append([texto_area(pg.crop((c['x0'] + 1, c['top'] + 1, c['x1'] - 1, c['bottom'] - 1))) for c in row])
        bb = (min(c['x0'] for r in g for c in r), min(c['top'] for r in g for c in r), max(c['x1'] for r in g for c in r), max(c['bottom'] for r in g for c in r))
        out.append((bb, rows, [c for r in g for c in r]))
    return out
def pagina(pg):
    tabs = tabelas_da_pagina(pg); cels = [c for _, _, cs in tabs for c in cs]
    def fora(o):
        if o['object_type'] != 'char': return True
        cx, cy = (o['x0'] + o['x1']) / 2, (o['top'] + o['bottom']) / 2
        return not any(c['x0'] <= cx <= c['x1'] and c['top'] <= cy <= c['bottom'] for c in cels)
    resto = funde_acentos(pg.filter(fora))
    els = []
    linhas = resto.extract_text_lines(return_chars=True)
    # fragmentos de títulos (letra acentuada em linha própria) voltam para a linha do título
    grandes = [l for l in linhas if max(c['size'] for c in l['chars']) >= 15]
    for l in grandes: l['_m'] = False
    for l in sorted(grandes, key=lambda l: l['top']):
        alvo = next((g for g in grandes if g is not l and not g['_m'] and abs(g['top'] - l['top']) < 8 and len(g['chars']) >= len(l['chars']) and g['top'] <= l['top'] + 0.01 and g is not l), None)
        if alvo is not None and abs(alvo['top'] - l['top']) < 8 and alvo is not l:
            alvo['chars'] = alvo['chars'] + l['chars']; l['_m'] = True
    for l in linhas:
        if l.get('_m'): continue
        size = round(max(c['size'] for c in l['chars']), 1); txt = l['text'].strip()
        if not txt or size < 7 or FOOT.match(txt): continue
        els.append({'k': 'l', 'top': l['top'], 'bottom': l['bottom'], 'x0': l['x0'], 'size': size, 'texto': txt})
    for bb, rows, _ in tabs:
        rows = [r for r in rows if any(r)]
        if rows: els.append({'k': 't', 'top': bb[1], 'rows': rows})
    return sorted(els, key=lambda e: e['top'])

caps, atual, ult_tab, prev = [], None, None, None
FALA = re.compile(r'^([A-ZÄÖÜ][\wäöüßÄÖÜ\.\-]*(?: [\wäöüßÄÖÜ\.\-]+){0,2}):\s+(.*)$')
def novo_cap(n, titulo, pi):
    global atual, ult_tab
    atual = {'n': n, 'idioma': 'de', 'titulo': titulo, 'nivel': 'a1' if n <= 12 or n == 23 else 'a2', 'paginas': [pi + 1, pi + 1], 'blocos': []}; caps.append(atual); ult_tab = None
buf_par = None; modo_dialogo = False; dialogo = None
def fecha():
    global buf_par
    if buf_par and atual is not None: atual['blocos'].append(buf_par)
    buf_par = None
def fecha_dialogo():
    global modo_dialogo, dialogo
    if dialogo and atual is not None and dialogo['falas']: atual['blocos'].append(dialogo)
    dialogo = None; modo_dialogo = False
for pi in range(a.ini - 1, min(len(pdf.pages), a.fim)):
    els = pagina(pdf.pages[pi]); topo = True; prev_line = None
    if atual is not None: atual['paginas'][1] = pi + 1
    for e in els:
        if e['k'] == 't':
            fecha(); fecha_dialogo()
            if atual is None: continue
            rows = e['rows']; cab, lin = rows[0], rows[1:]
            if ult_tab is not None and topo and ult_tab['cabecalho'] == cab: ult_tab['linhas'] += lin
            else:
                if len(rows) == 1: atual['blocos'].append({'t': 'p', 'texto': ' | '.join(rows[0])}); ult_tab = None
                else: ult_tab = {'t': 'tabela', 'cabecalho': cab, 'linhas': lin}; atual['blocos'].append(ult_tab)
            topo = False; prev_line = None; continue
        topo = False; txt = e['texto']; sz = e['size']
        m = re.match(r'^Cap[ií]tulo\s+(\d+)\.\s*(.*)$', txt)
        if sz >= 30:
            if m and not (atual and atual['n'] == int(m.group(1))):
                fecha(); fecha_dialogo(); novo_cap(int(m.group(1)), m.group(2).strip(), pi); prev_line = e; continue
            if re.match(r'^(Ap[êe]ndices|Vocabul[áa]rio oficial)', txt) and (atual is None or atual['n'] < 29 or True) and not (atual and atual['titulo'].startswith(txt[:8])):
                fecha(); fecha_dialogo(); novo_cap(29 if txt.startswith('Ap') else 30, txt, pi); prev_line = e; continue
            if atual is not None and prev_line and prev_line.get('size', 0) >= 30 and not atual['blocos']:
                atual['titulo'] = (atual['titulo'] + ' ' + txt).strip(); prev_line = e; continue
        if atual is None: continue
        if sz >= 20:
            fecha(); fecha_dialogo()
            if atual['blocos'] and atual['blocos'][-1]['t'] == 'h2' and prev_line is not None and prev_line.get('size', 0) >= 20 and e['top'] - prev_line['top'] < 35: atual['blocos'][-1]['texto'] += ' ' + txt
            else: atual['blocos'].append({'t': 'h2', 'texto': txt})
            prev_line = e; continue
        if sz < 10.5 and txt.isupper() and len(txt) < 40 and e['x0'] < 70:  # rótulo de caixa (CENA, EM 30 SEGUNDOS…)
            fecha(); fecha_dialogo()
            atual['blocos'].append({'t': 'rotulo', 'texto': txt.capitalize()})
            modo_dialogo = txt == 'CENA'; dialogo = {'t': 'dialogo', 'falas': []} if modo_dialogo else None; prev_line = e; continue
        if modo_dialogo:
            f = FALA.match(txt)
            if f and not txt.startswith('Em português'): dialogo['falas'].append({'quem': f.group(1), 'texto': f.group(2)}); prev_line = e; continue
            if dialogo['falas'] and not txt.startswith('Em português') and prev_line and prev_line.get('size') == sz and e['top'] - prev_line['top'] <= 1.65 * sz and e['x0'] < 60:
                dialogo['falas'][-1]['texto'] += ' ' + txt; prev_line = e; continue
            fecha_dialogo()
        item = re.match(r'^(\d{1,2})\.\s+(.*)$', txt)
        pto = re.match(r'^[•▪\-–]\s+(.*)$', txt)
        gap = (e['top'] - prev_line['top']) if prev_line and 'top' in prev_line and prev_line.get('size') == e['size'] else 99
        if re.match(r'^\d{1,2}\.$', txt): fecha(); buf_par = {'t': 'item', 'n': int(txt[:-1]), 'texto': txt, '_x': e['x0']}; prev_line = e; continue
        if item and e['x0'] < 90: fecha(); buf_par = {'t': 'item', 'n': int(item.group(1)), 'texto': txt, '_x': e['x0']}
        elif pto: fecha(); buf_par = {'t': 'li', 'texto': pto.group(1), '_x': e['x0']}
        elif re.match(r'^(Degrau \d|Retorno\b)', txt): fecha(); buf_par = {'t': 'p', 'texto': txt, '_x': e['x0'], '_s': sz}
        elif buf_par is not None and buf_par['t'] == 'p' and prev_line is None and buf_par.get('_s') == sz and not re.search(r'[.?!:»”)\]]$', buf_par['texto'].strip()):
            buf_par['texto'] += ' ' + txt  # parágrafo que atravessa a quebra de página
        elif buf_par is not None and gap <= 1.65 * sz and abs(e['x0'] - buf_par['_x']) < 40 + (0 if buf_par['t'] == 'p' else 30):
            buf_par['texto'] += ' ' + txt
        else:
            fecha(); buf_par = {'t': 'p', 'texto': txt, '_x': e['x0'], '_s': sz}
        prev_line = e
    fecha_dialogo()
    if pi % 40 == 0: print('página', pi + 1, flush=True)
fecha(); fecha_dialogo()
os.makedirs(a.saida, exist_ok=True)
for c in caps:
    for b in c['blocos']: b.pop('_x', None); b.pop('_s', None)
    pg_ = c['paginas']
    json.dump(c, open(f"{a.saida}/cap-{c['n']:02d}.json", 'w'), ensure_ascii=False, indent=1)
    print(c['n'], c['titulo'][:50], pg_, len(c['blocos']), 'blocos', sum(1 for b in c['blocos'] if b['t'] == 'h2'), 'h2', sum(1 for b in c['blocos'] if b['t'] == 'tabela'), 'tabelas')
