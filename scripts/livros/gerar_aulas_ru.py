"""Gera as sessões das aulas de russo a partir do livro (content/livros-privado/ru). Mesma regra: aula dona = 4 sessões; reforço = exercícios na sessão 4.
Uso: python3 -I scripts/livros/gerar_aulas_ru.py --aulas 11,12 [--seco]"""
import json, re, argparse
ap = argparse.ArgumentParser(); ap.add_argument('--aulas', required=True); ap.add_argument('--seco', action='store_true'); a = ap.parse_args()
PRIV = 'content/livros-privado/ru'; ali = json.load(open(f'{PRIV}/alinhamento.json'))
aula_cap = {r['aula']: r['capitulos'][0] for r in ali['aulas']}
cap_aulas = {}
for r in ali['aulas']: cap_aulas.setdefault(r['capitulos'][0], []).append(r['aula'])
rel = []
def exp(p): return ' '.join(f'PASSO {i+1}: {t}' for i, t in enumerate(p) if t)
def secoes(c):
    S, cur, intro = [], None, []
    for b in c['blocos']:
        if b['t'] == 'h2': cur = {'titulo': re.sub(r'^\d+\.\d+\s*', '', b['texto']), 'b': []}; S.append(cur)
        elif cur is not None: cur['b'].append(b)
        else: intro.append(b)
    return intro, S
def chaves(cab):
    out, vis = [], {}
    for i, h in enumerate(cab):
        h = h.strip() or f'coluna {i+1}'; vis[h] = vis.get(h, 0) + 1; out.append(h if vis[h] == 1 else f'{h} ({vis[h]})')
    return out
def tabelas(bs):
    out = []
    for b in bs:
        if b['t'] == 'tabela' and b['linhas'] and any(any(c for c in l) for l in b['linhas']):
            k = chaves(b['cabecalho']); out.append({'linhas': [dict(zip(k, l + [''] * (len(k) - len(l)))) for l in b['linhas']]})
    return out
def paras(bs):
    o = []
    for b in bs:
        if b['t'] == 'p': o.append(b['texto'])
        elif b['t'] in ('li', 'item'): o.append('• ' + b['texto'])
    return o
def bloco_sec(s, tag):
    p = paras(s['b']); t = tabelas(s['b'])
    if not p and not t: return None
    g = {'tipo': 'gramatica', 'min': 6, 'titulo': s['titulo'], 'explicacao': exp(p) if len(p) >= 3 else ' '.join(p) or s['titulo'], 'tag': tag}
    if t: g['tabelas'] = t
    return g
def bloco_grupo(secs):
    passos, tabs = [], []
    for s in secs:
        p = paras(s['b'])
        passos.append(f"{s['titulo']}. " + ' '.join(p) if p else s['titulo'])
        for t in tabelas(s['b']): tabs.append({'titulo': s['titulo'], 'linhas': t['linhas']})
    tit = secs[0]['titulo'] if len(secs) == 1 else f"{secs[0]['titulo']} · {secs[-1]['titulo']}" if len(secs) == 2 else f"{secs[0]['titulo']} e mais {len(secs)-1}"
    g = {'tipo': 'gramatica', 'min': 8, 'titulo': tit[:90], 'explicacao': exp(passos) if len(passos) >= 3 else ' '.join(passos), 'tag': 'Livro'}
    if tabs: g['tabelas'] = tabs
    return g
def agrupa(corpo, alvo=2600):
    gr, cur, w = [], [], 0
    for s in corpo:
        sw = sum(len(x.get('texto', '')) for x in s['b'] if x['t'] != 'tabela') + 500 * sum(1 for x in s['b'] if x['t'] == 'tabela')
        if cur and w + sw > alvo: gr.append(cur); cur, w = [], 0
        cur.append(s); w += sw
    if cur: gr.append(cur)
    return [bloco_grupo(g) for g in gr if any(paras(x['b']) or tabelas(x['b']) for x in g)]
def exercicios(S, pref):
    ex = next((s for s in S if s['titulo'].upper().startswith('EXERC')), None); gb = next((s for s in S if s['titulo'].upper().startswith('GABARITO')), None)
    if not ex: return [], 0, 0
    gabs, cur = {}, None
    for b in (gb['b'] if gb else []):
        m = re.match(r'^Exercício\s+(\d+)', b.get('texto', '')) if b['t'] == 'p' else None
        if m: cur = int(m.group(1)); gabs[cur] = []
        elif cur is not None: gabs[cur].append(b)
    grupos, cur = [], None
    for b in ex['b']:
        m = re.match(r'^Exercício\s+(\d+)\s*[—-]\s*(.*)', b.get('texto', '')) if b['t'] == 'p' else None
        if m: cur = {'n': int(m.group(1)), 'tit': m.group(2), 'inst': '', 'itens': [], 'resto': []}; grupos.append(cur)
        elif cur is not None:
            if b['t'] == 'item': cur['itens'].append(b['texto'])
            elif b['t'] == 'p' and not cur['inst'] and not cur['itens']: cur['inst'] = b['texto']
            else: cur['resto'].append(b)
    out, auto, livre = [], 0, 0
    for g in grupos:
        gtxt = ' '.join(x.get('texto', '') for x in gabs.get(g['n'], []))
        if g['itens']:
            if len(gabs.get(g['n'], [])) == 1 and gabs[g['n']][0]['t'] == 'item':
                res = re.split(r'\s—\s\d+\.\s', gabs[g['n']][0]['texto'])
            else: res = [x['texto'] for x in gabs.get(g['n'], []) if x['t'] == 'item']
            for i, t in enumerate(g['itens']):
                r = res[i].strip() if len(res) == len(g['itens']) else ''
                resp = re.sub(r'\s*\(.*$', '', r).strip(' .')
                ident = f'{pref}-{g["n"]}{i+1:02d}'
                if '____' in t and resp and len(resp) < 40:
                    enun = re.sub(r'_{3,}', '___', t); pre = enun.split('___')[0].split('→')[-1].strip()
                    if pre and resp.lower().startswith(pre.lower()): resp = resp[len(pre):].strip()
                    inst = g['inst'] if len(g['inst']) <= 70 else g['tit']
                    out.append({'tipo': 'fill-gap', 'enunciado': f'{inst} {enun}'.strip(), 'respostaEsperada': resp.replace('\u0301', ''), 'explicacao': r or 'Veja o gabarito no livro.', 'id': ident, '_g': g['n']}); auto += 1
                else:
                    out.append({'tipo': 'producao', 'enunciado': f'{g["tit"]}: {g["inst"]} {t}'.strip(), 'respostaEsperada': r, 'id': ident, '_g': g['n']}); livre += 1
        else:
            out.append({'tipo': 'producao', 'enunciado': f'{g["tit"]}: {g["inst"]}'.strip(), 'respostaEsperada': gtxt[:300], 'id': f'{pref}-{g["n"]}00'}); livre += 1
    return out, auto, livre
def escolhe(ex, cap):
    auto = [e for e in ex if e['tipo'] == 'fill-gap']; livre = [e for e in ex if e['tipo'] != 'fill-gap'][:4]
    por = {}
    for e in auto: por.setdefault(e['_g'], []).append(e)
    sel = []
    while len(sel) < cap - len(livre) and any(por.values()):
        for k in list(por):
            if por[k] and len(sel) < cap - len(livre): sel.append(por[k].pop(0))
    pick = sel + livre; ids = {e['id'] for e in pick}
    out = [dict((k, v) for k, v in e.items() if k != '_g') for e in ex if e['id'] in ids]
    return out
def jc(S):
    s = next((x for x in S if x['titulo'].upper().startswith('RESUMO')), None)
    if not s: return None
    p = [x for x in paras(s['b'])]; t = tabelas(s['b'])
    return {'tipo': 'gramatica', 'min': 4, 'titulo': 'Resumo de bolso', 'explicacao': exp(p) if len(p) >= 3 else ' '.join(p) or 'Resumo da aula.', 'tabelas': t, 'tag': 'Resumo'} if (p or t) else None
def aplica(aula):
    cn = aula_cap[aula]; dono = cap_aulas[cn][0] == aula
    c = json.load(open(f'{PRIV}/cap-{cn:02d}.json')); intro, S = secoes(c)
    pref = f'ru-{aula:03d}-L'; dias = [4 * (aula - 1) + 1 + i for i in range(4)]
    D = [json.load(open(f'content/idiomas/ru/dia-{n:03d}.json')) for n in dias]
    ex, au, li = exercicios(S, pref); ex = escolhe(ex, 24 if dono else 12)
    rel_n = len(ex)
    exb = {'tipo': 'exercicios', 'min': 12, 'itens': ex} if ex else None
    novos = [[], [], [], []]
    if dono:
        corpo = [s for s in S if not re.match(r'^(EXERC|GABARITO|RESUMO|O que vem|Como estudar)', s['titulo'], re.I)]
        blocos = agrupa(corpo)
        if intro and any(b['t'] == 'p' for b in intro): blocos.insert(0, {'tipo': 'intro', 'min': 1, 'texto': ' '.join(paras(intro))})
        peso = [len(b.get('explicacao', '')) + 400 * len(b.get('tabelas', [])) for b in blocos]; tot = sum(peso) or 1; acc = 0
        for b, w in zip(blocos, peso):
            i = min(2, int(3 * (acc + w / 2) / tot)); novos[i].append(b); acc += w
    j = jc(S)
    if exb: novos[3].append(exb)
    if j: novos[3].append(j)
    for i, d in enumerate(D):
        antigos = d['sessao']['blocos']
        if i < 3: bl = novos[i] + antigos
        else: bl = antigos + novos[3]
        bl = [dict(b) for b in bl]
        tot = sum(b.get('min', 0) for b in bl) or 1
        for b in bl: b['min'] = max(1, round(b.get('min', 1) * 30 / tot))
        diff = 30 - sum(b['min'] for b in bl); bl[max(range(len(bl)), key=lambda k: bl[k]['min'])]['min'] += diff
        d['sessao']['blocos'] = bl
        if not a.seco: open(f'content/idiomas/ru/dia-{dias[i]:03d}.json', 'w').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
    rel.append(f'aula {aula}: cap {cn} ({"dona" if dono else "reforço"}) dias {dias[0]}-{dias[-1]}; exercícios no livro {au} auto + {li} livres; no site {rel_n}')
for n in [int(x) for x in a.aulas.split(',')]: aplica(n)
print('\n'.join(rel))
