"""Extrai o PDF oficial do livro de russo (layout Linvuu: títulos 17 pt, corpo 10 pt, tabelas ruled) para cap-NN.json.
Uso: python3 -I scripts/livros/extrair_pdf_ru.py --pdf ARQ.pdf --saida content/livros-privado/ru [--ini 1 --fim 263]"""
import json, re, argparse, os, logging
import pdfplumber
logging.getLogger('pdfminer').setLevel(logging.ERROR)
ap = argparse.ArgumentParser(); ap.add_argument('--pdf', required=True); ap.add_argument('--saida', required=True); ap.add_argument('--ini', type=int, default=1); ap.add_argument('--fim', type=int, default=9999); a = ap.parse_args()
pdf = pdfplumber.open(a.pdf)
# correções do texto do PDF oficial a avisar ao revisor (resto de uma autocorreção no meio da frase)

VOG = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ'
def conserta_acento(t):
    """O PDF às vezes põe o acento tônico na consoante seguinte à vogal (кни́га sai книѓа):
    desloca a marca para a vogal imediatamente anterior."""
    t = t.replace('\u0453', 'г\u0301').replace('\u045c', 'к\u0301')
    return re.sub(r'([%s])([бвгджзклмнпрстфхцчшщйьъБВГДЖЗКЛМНПРСТФХЦЧШЩ])\u0301' % VOG, lambda m: m.group(1) + '\u0301' + m.group(2), t)
CORRECOES = {'; mês (месяц? não, mês é месяц, consoante)': ''}
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
def novo_cap(n, titulo): 
    global atual, ult_tab, prev
    atual = {'n': n, 'idioma': 'ru', 'titulo': titulo, 'nivel': 'a1' if n <= 8 else 'a2', 'paginas': '', 'blocos': []}; caps.append(atual); ult_tab = None; prev = None
buf_par = None
def fecha():
    global buf_par
    if buf_par and atual is not None: atual['blocos'].append(buf_par)
    buf_par = None
for pi in range(a.ini - 1, min(len(pdf.pages), a.fim)):
    els = pagina(pdf.pages[pi]); topo = True; prev_line = None
    for e in els:
        if e['k'] == 't':
            fecha()
            if atual is None: continue
            rows = e['rows']; cab, lin = rows[0], rows[1:]
            if ult_tab is not None and topo and ult_tab['cabecalho'] == cab: ult_tab['linhas'] += lin
            else:
                if len(rows) == 1: atual['blocos'].append({'t': 'p', 'texto': ' | '.join(rows[0])}); ult_tab = None
                else: ult_tab = {'t': 'tabela', 'cabecalho': cab, 'linhas': lin}; atual['blocos'].append(ult_tab)
            topo = False; prev_line = None; continue
        topo = False; txt = e['texto']; sz = e['size']
        m = re.match(r'^AULA\s+(\d+)\s*[—–-]\s*(.*)$', txt)
        if sz >= 20:
            if m and (atual is None or atual['n'] != int(m.group(1)) or True) and not (atual and atual['n'] == int(m.group(1))):
                fecha(); novo_cap(int(m.group(1)), m.group(2).strip()); prev_line = e; continue
            if atual is not None and prev_line and prev_line.get('size', 0) >= 20 and atual['blocos'] == []:
                atual['titulo'] = (atual['titulo'] + ' ' + txt).strip(); prev_line = e; continue
        if atual is None: continue
        ult_tab = ult_tab if False else None
        if sz >= 15:
            fecha()
            if atual['blocos'] and atual['blocos'][-1]['t'] == 'h2' and prev_line is not None and prev_line.get('size', 0) >= 15: atual['blocos'][-1]['texto'] += ' ' + txt
            else: atual['blocos'].append({'t': 'h2', 'texto': txt})
            prev_line = e; continue
        item = re.match(r'^(\d{1,2})\.\s+(.*)$', txt)
        pto = re.match(r'^[•▪\-–]\s+(.*)$', txt)
        gap = (e['top'] - prev_line['top']) if prev_line and 'top' in prev_line and prev_line.get('size') == e['size'] else 99
        if item and e['x0'] < 70: fecha(); buf_par = {'t': 'item', 'n': int(item.group(1)), 'texto': txt, '_x': e['x0']}
        elif pto: fecha(); buf_par = {'t': 'li', 'texto': pto.group(1), '_x': e['x0']}
        elif buf_par is not None and gap <= 17.5 and not (re.match(r'^(Exercício|\d+\.\d+\s)', txt)):
            buf_par['texto'] += ' ' + txt
        else:
            fecha(); buf_par = {'t': 'li' if (prev_line and prev_line.get('x0', 0) < e['x0'] - 8 and False) else 'p', 'texto': txt, '_x': e['x0']}
        prev_line = e
    fecha()
    if pi % 40 == 0: print('página', pi + 1, flush=True)
fecha()
os.makedirs(a.saida, exist_ok=True)
for c in list(caps):  # o apêndice de vocabulário vira o capítulo 16 (não é aula)
    i = next((k for k, b in enumerate(c['blocos']) if b['t'] == 'h2' and re.match(r'^Vocabul', b['texto'])), None)
    if i is not None:
        ap_ = {'n': c['n'] + 1, 'idioma': 'ru', 'titulo': 'Vocabulário oficial para os exames de russo', 'nivel': 'a2', 'paginas': '', 'blocos': c['blocos'][i + 1:]}
        c['blocos'] = c['blocos'][:i]; caps.append(ap_)
for c in caps:
    for b in c['blocos']:
        if 'texto' in b: b['texto'] = conserta_acento(b['texto'].replace('of icial', 'oficial'))
        for l_ in b.get('linhas', []):
            for j_ in range(len(l_)): l_[j_] = conserta_acento(l_[j_])
        for k_, v_ in CORRECOES.items():
            if 'texto' in b: b['texto'] = b['texto'].replace(k_, v_)
            for l_ in b.get('linhas', []):
                for j_ in range(len(l_)): l_[j_] = l_[j_].replace(k_, v_)
for c in caps:
    for b in c['blocos']: b.pop('_x', None)
    json.dump(c, open(f"{a.saida}/cap-{c['n']:02d}.json", 'w'), ensure_ascii=False, indent=1)
    print(c['n'], c['titulo'][:50], len(c['blocos']), 'blocos', sum(1 for b in c['blocos'] if b['t'] == 'h2'), 'h2', sum(1 for b in c['blocos'] if b['t'] == 'tabela'), 'tabelas')
