"""Gera as sessões das aulas a partir dos capítulos do livro.
Uso: python3 -I scripts/livros/gerar_aulas.py --idioma en --aulas 3,4,5 [--seco]
Regra: a primeira aula de cada capítulo em alinhamento.json é a dona (4 sessões completas); as outras recebem reforço na sessão 4."""
import json, re, argparse, sys
ap = argparse.ArgumentParser(); ap.add_argument('--idioma', default='en'); ap.add_argument('--aulas', required=True); ap.add_argument('--seco', action='store_true')
a = ap.parse_args()
PRIV = f'content/livros-privado/{a.idioma}'
ali = json.load(open(f'{PRIV}/alinhamento.json'))
cap_aulas = {}
for r in ali['aulas']:
    for c in r['capitulos']: cap_aulas.setdefault(c, []).append(r['aula'])
aula_caps = {r['aula']: r['capitulos'] for r in ali['aulas']}
limpa = lambda s: re.sub(r'\*\*|\*|~~', '', s).replace('’', "'").strip()
relatorio = []

def secoes(cap):
    S, atual = {}, None
    global H; H = {}
    for b in cap['blocos']:
        if b['t'] == 'h2':
            t = re.sub(r'^\d+\.\s*', '', b['texto']).lower()
            atual = next((k for k, w in [('cena', 'cena'), ('armadilha', 'armadilha'), ('descubra', 'descubra'), ('seg', 'em 30'), ('dentro', 'por dentro'), ('ouro', 'frases de ouro'), ('treino', 'treino'), ('erro', 'erro típico'), ('retorno', 'retorno'), ('resumo', 'resumo'), ('glossario', 'glossário'), ('chave', 'chave')] if w in t), t)
            H[atual] = re.sub(r'^\d+\.\s*', '', b['texto'])
            S[atual] = []
        elif atual: S[atual].append(b)
    return S
def exp(passos): return ' '.join(f'PASSO {i+1}: {t}' for i, t in enumerate(passos) if t)
def ps(bl): return [limpa(b['texto']) for b in bl if b['t'] == 'p']
def tabela(bl): return next((b for b in bl if b['t'] == 'tabela'), None)
def linhas(t): return [[limpa(c) for c in l] for l in t['linhas']] if t else []
def semnum(s): return re.sub(r'^\d+\.\s*', '', s)

def cena_bloco(S):
    d = next((b for b in S['cena'] if b['t'] == 'dialogo'), None)
    if not d: return None
    ctx = limpa(S['cena'][0]['texto']) if S['cena'][0]['t'] == 'p' else ''
    trad = next((limpa(b['texto']) for b in S['cena'] if b['t'] == 'p' and b['texto'].startswith('Em português')), '')
    pt = [x.strip() for x in trad.replace('Em português:', '').split(' / ')]
    if len(pt) != len(d['falas']): pt = [''] * len(d['falas']); relatorio.append('tradução da cena não alinhou')
    return {'tipo': 'dialogo', 'min': 6, 'titulo': re.sub(r'^Cena:\s*', '', H.get('cena', 'Cena')).capitalize(), 'contexto': ctx,
            'linhas': [{'personagem': f['quem'], 'ru': '— ' + limpa(f['texto']), 'pt': ('— ' + p) if p else '', 'audio': limpa(f['texto'])} for f, p in zip(d['falas'], pt)]}

def parse_chave(S, k):
    txt = ' '.join(ps(S['chave']))
    m = re.search(rf'Degrau {k}\.\s*(.*?)(?=Degrau {k+1}\.|Retorno\.|$)', txt)
    return m.group(1) if m else ''
def respostas(chave, n):
    pos = []; ini = 0
    for i in range(1, n + 1):
        m = re.search(rf'(?:(?<=\s)|^){i}\s(?=\S)', chave[ini:])
        if not m: return None
        pos.append(ini + m.start()); ini = ini + m.end()
    out = []
    for i, p in enumerate(pos):
        seg = chave[p:(pos[i + 1] if i + 1 < len(pos) else len(chave))]
        seg = re.sub(r'^\d+\s', '', seg); seg = re.sub(r'\s*\(.*?\)\s*\.?\s*$', '', seg.strip()).strip(' .')
        out.append(seg)
    return out
def itens(S, k):
    """itens do degrau k (lista de textos)."""
    tr = S['treino']; out = []; on = False
    for b in tr:
        if b['t'] == 'p' and b['texto'].startswith(f'Degrau {k}'): on = True; continue
        if b['t'] == 'p' and b['texto'].startswith('Degrau'): on = False
        if on and b['t'] == 'item': out.append(limpa(b['texto']))
        if on and b['t'] == 'p' and not b['texto'].startswith('Degrau'): pass
    return out

def exercicios(S, num, pref):
    """Cada lacuna vira um exercício corrigível (as outras lacunas do item já vêm preenchidas). Sem resposta alinhada, vira escrita livre."""
    ex, auto, livre = [], 0, 0
    for k in (1, 2):
        its = itens(S, k); resp = respostas(parse_chave(S, k), len(its)) if its else None
        for i, t in enumerate(its):
            r = resp[i] if resp else None
            lac = t.count('____'); ident = f'{pref}-{k}{i+1:02d}'
            resps = [x.strip().strip('.') for x in re.split(r',\s*', r)] if r else []
            if k == 1:
                grupos = re.findall(r'\(([^()]*/[^()]*)\)', t); base = re.sub(r'\s*\([^()]*/[^()]*\)', '', t)
                ok = lac >= 1 and len(resps) == lac and len(grupos) == lac
                if ok:
                    partes = base.split('____'); feito = []
                    for b in range(lac):
                        opc = [o.strip() for o in grupos[b].split('/')]
                        gab = next((o for o in opc if limpa(o).lower().replace("'", '') == resps[b].lower().replace("'", '')), None)
                        if not gab: ok = False; break
                        frase = ''.join(partes[x] + ('___' if x == b else resps[x]) for x in range(lac)) + partes[lac]
                        feito.append({'tipo': 'multiple-choice', 'enunciado': frase.strip(), 'opcoes': opc, 'gabarito': gab, 'explicacao': 'Veja a chave comentada no livro.', 'id': ident + chr(97 + b)})
                    if ok: ex += feito; auto += len(feito); continue
            else:
                if lac >= 1 and len(resps) == lac:
                    toks = re.split(r'(____(?:\s*\([^()]*\))?)', t); n = -1; feito = []
                    for b in range(lac):
                        out = ''; n = -1
                        for tk in toks:
                            if tk.startswith('____'):
                                n += 1
                                out += (re.sub(r'____', '___', tk) if n == b else resps[n].replace('–', ''))
                            else: out += tk
                        feito.append({'tipo': 'fill-gap', 'enunciado': out.strip(), 'respostaEsperada': resps[b].replace('–', '').strip(), 'explicacao': 'Veja a chave comentada no livro.', 'id': ident + chr(97 + b)})
                    ex += feito; auto += len(feito); continue
            ex.append({'tipo': 'producao', 'enunciado': t.replace('____', '___'), 'respostaEsperada': (r or ''), 'id': ident}); livre += 1
    return ex, auto, livre

def blocos_degrau34(S, pref):
    out = []
    for k in (3, 4):
        its = itens(S, k)
        if k == 3:
            m = re.search(r'Degrau 3\.[^M]*Modelo:\s*(.*?)(?=Degrau 4|$)', ' '.join(ps(S['chave'])))
            modelos = [x.strip() for x in re.split(r'\s\d\.\s', ' ' + (m.group(1) if m else ''))[1:]] if m else []
            for i, t in enumerate(its):
                out.append({'tipo': 'producao', 'enunciado': t, 'respostaEsperada': modelos[i] if i < len(modelos) else '', 'id': f'{pref}-p{i+1:02d}'})
        else:
            txt = ' '.join(ps(S['chave'])); m = re.search(r'Degrau 4\.\s*(.*?)(?=Retorno\.|$)', txt)
            corr = []
            if m:
                parts = re.split(r'\s(?=\d\.\s)', ' ' + m.group(1))
                corr = [re.sub(r'\s*\(.*?\)\s*\.?\s*$', '', p.strip()[2:].strip()).strip() for p in parts if re.match(r'^\s*\d\.', p)]
            for i, t in enumerate(its):
                if i < len(corr) and 'está certa' not in corr[i].lower():
                    out.append({'tipo': 'fill-gap', 'enunciado': 'Corrija: ' + t, 'respostaEsperada': corr[i], 'explicacao': 'Veja a chave comentada no livro.', 'id': f'{pref}-c{i+1:02d}'})
                else:
                    out.append({'tipo': 'producao', 'enunciado': 'Esta frase tem erro? Corrija ou escreva «OK»: ' + t, 'respostaEsperada': ('OK' if i < len(corr) and 'está certa' in corr[i].lower() else (corr[i] if i < len(corr) else '')), 'id': f'{pref}-c{i+1:02d}'})
    return out

def monta(aula, cap_n, dono):
    cap = json.load(open(f'{PRIV}/cap-{cap_n:02d}.json')); S = secoes(cap)
    pref = f'{a.idioma}-{aula:03d}-L'  # L = livro
    dias = [4 * (aula - 1) + 1 + i for i in range(4)]
    D = [json.load(open(f'content/idiomas/{a.idioma}/dia-{n:03d}.json')) for n in dias]
    site = [{b['tipo']: b for b in d['sessao']['blocos']} for d in D]
    novo = [[], [], [], []]
    if dono:
        novo[0] += [{'tipo': 'intro', 'min': 1, 'texto': limpa(cap['blocos'][0]['texto']).replace('Meta do capítulo. Ao final,', 'Meta da aula. Ao final das quatro sessões,')}]
        c = cena_bloco(S)
        if c: novo[0].append(c)
        arm = ps(S['armadilha']); t = tabela(S['armadilha'])
        novo[0].append({'tipo': 'gramatica', 'min': 7, 'titulo': 'A armadilha do português', 'explicacao': exp([semnum(x) for x in arm[1:]]) or arm[0], 'comparacao': arm[0] if arm else '', 'tabela': [dict(zip(['portugues', 'ingles', 'evite'], r)) for r in linhas(t)], 'tag': 'Armadilha'})
        dsc = tabela(S['descubra']); dp = ps(S['descubra'])
        novo[1].append({'tipo': 'gramatica', 'min': 6, 'titulo': 'Descubra você mesmo', 'explicacao': exp([dp[0]] + [semnum(x) for x in dp[1:-1]]) if len(dp) > 1 else dp[0] if dp else '',
                        'tabela': [dict(zip([f'c{i+1}' for i in range(len(r))], r)) for r in linhas(dsc)], 'tag': 'Descubra'})
        seg = [semnum(x).strip() for x in ps(S['seg'])]
        novo[1].append({'tipo': 'gramatica', 'min': 5, 'titulo': 'Em 30 segundos', 'explicacao': exp(seg), 'tag': 'Resumo'})
        ouro = tabela(S['ouro'])
        novo[2].append({'tipo': 'palavras', 'min': 5, 'itens': [{'ru': r[0], 'translit': '', 'pt': r[1], 'en': '', 'audio': r[0]} for r in linhas(ouro)]})
        ex, au, li = exercicios(S, aula, pref)
        novo[2].append({'tipo': 'exercicios', 'min': 10, 'itens': ex}); relatorio.append(f'aula {aula} cap {cap_n}: {au} corrigidos automaticamente, {li} em escrita livre')
    # degraus 3 e 4 + erro típico + retorno + já consigo (dono e reforço)
    ex34 = blocos_degrau34(S, pref)
    er = tabela(S['erro']); erros = [{'errado': r[0].replace('ERRADO ', ''), 'certo': r[1].replace('CERTO ', ''), 'motivo': r[2].replace('POR QUÊ ', '')} for r in linhas(er) if len(r) >= 3]
    novo[3].append({'tipo': 'exercicios', 'min': 10, 'itens': ex34})
    novo[3].append({'tipo': 'gramatica', 'min': 4, 'titulo': 'O erro típico do brasileiro', 'explicacao': exp([ps(S['erro'])[0] if ps(S['erro']) else '', 'Releia a tabela e diga cada frase certa em voz alta antes de olhar o motivo.']), 'erros': erros, 'tag': 'Erro típico'})
    ret = [x for x in ps(S['retorno'])[:3]]
    novo[3].append({'tipo': 'revisao', 'min': 3, 'enunciado': 'Retorno. ' + ' '.join(ret)})
    jc = ps(S['resumo']); idx = next((i for i, x in enumerate(jc) if x.startswith('Já consigo')), len(jc))
    novo[3].append({'tipo': 'intro', 'min': 1, 'texto': 'Já consigo? ' + ' · '.join(jc[idx + 1:])})
    return dias, D, site, novo

def aplica(aula):
    caps = aula_caps[aula]
    donos = [c for c in caps if cap_aulas[c][0] == aula]; cap_n = donos[0] if donos else caps[0]; dono = bool(donos)
    dias, D, site, novo = monta(aula, cap_n, dono)
    for i, d in enumerate(D):
        antigos = d['sessao']['blocos']
        if dono:
            if i == 0: bl = novo[0] + [b for b in antigos if b['tipo'] in ('palavras', 'gramatica', 'producao', 'revisao')]
            elif i == 1: bl = novo[1][:1] + [b for b in antigos if b['tipo'] in ('palavras', 'gramatica')] + novo[1][1:] + [b for b in antigos if b['tipo'] in ('producao', 'revisao')]
            elif i == 2: bl = [b for b in antigos if b['tipo'] in ('palavras', 'gramatica', 'dialogo')] + novo[2] + [b for b in antigos if b['tipo'] in ('producao', 'revisao')]
            else: bl = [b for b in antigos if b['tipo'] == 'exercicios'] + novo[3]
        else:
            bl = antigos + (novo[3] if i == 3 else [])
        # remove vazios e normaliza minutos em 30
        bl = [b for b in bl if not (b['tipo'] == 'gramatica' and not b.get('explicacao') and not b.get('tabela'))]
        tot = sum(b.get('min', 0) for b in bl) or 1
        for b in bl: b['min'] = max(1, round(b.get('min', 1) * 30 / tot))
        diff = 30 - sum(b['min'] for b in bl); bl[max(range(len(bl)), key=lambda j: bl[j]['min'])]['min'] += diff
        d['sessao']['blocos'] = bl
        if not a.seco:
            p = f'content/idiomas/{a.idioma}/dia-{dias[i]:03d}.json'
            open(p, 'w').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
    relatorio.append(f'aula {aula}: capítulo {cap_n} ({"dona" if dono else "reforço"}) → dias {dias[0]}-{dias[-1]}')
for n in [int(x) for x in a.aulas.split(',')]: aplica(n)
print('\n'.join(relatorio))
