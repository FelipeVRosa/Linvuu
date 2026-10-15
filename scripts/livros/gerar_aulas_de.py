"""Gera as sessões das aulas a partir dos capítulos do livro.
Uso: python3 -I scripts/livros/gerar_aulas_de.py --idioma de --aulas 3,4,5 [--seco]
Regra: a primeira aula de cada capítulo em alinhamento.json é a dona (4 sessões completas); as outras recebem reforço na sessão 4."""
import json, re, argparse, sys
ap = argparse.ArgumentParser(); ap.add_argument('--idioma', default='de'); ap.add_argument('--aulas', required=True); ap.add_argument('--seco', action='store_true')
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
    pt = [x.strip() for x in trad.replace('Em português:', '').replace(' // ', ' / ').split(' / ')]
    nd = sum(len(b['falas']) for b in S['cena'] if b['t'] == 'dialogo')
    if len(pt) == nd: pt = pt[:len(d['falas'])]  # várias cenas no capítulo: a tradução vem junta
    if len(pt) != len(d['falas']): pt = [''] * len(d['falas']); relatorio.append('tradução da cena não alinhou')
    return {'tipo': 'dialogo', 'min': 6, 'titulo': re.sub(r'^Cena:\s*', '', H.get('cena', 'Cena')).capitalize(), 'contexto': ctx,
            'linhas': [{'personagem': f['quem'], 'ru': '— ' + limpa(f['texto']), 'pt': ('— ' + p) if p else '', 'audio': limpa(f['texto'])} for f, p in zip(d['falas'], pt)]}

def chave_txt(S): return ' '.join(limpa(b['texto']) for b in S['chave'] if b['t'] == 'p')
def parse_chave(S, k):
    m = re.search(rf'Degrau {k}\.\s*(.*?)(?=Degrau {k+1}\b|Retorno\.|$)', chave_txt(S))
    return m.group(1).strip() if m else ''
def respostas(chave, n):
    """quebra 'Degrau k. 1 x. 2 y. 3 z' em n respostas (numeração sequencial)."""
    pos = []; ini = 0
    for i in range(1, n + 1):
        m = re.search(rf'(?:(?<=\s)|^){i}\.?\s(?=\S)', chave[ini:])
        if not m: return None
        pos.append(ini + m.start()); ini = ini + m.end()
    out = []
    for i, p in enumerate(pos):
        seg = chave[p:(pos[i + 1] if i + 1 < len(pos) else len(chave))]
        out.append(re.sub(r'^\d+\.?\s', '', seg).strip().rstrip('.').strip())
    return out
def itens(S, k):
    """itens do degrau k em ordem, cada um com a instrução do grupo ao qual pertence."""
    out, on, inst = [], False, ''
    for b in S['treino']:
        if b['t'] == 'p' and re.match(rf'^Degrau {k}\b', b['texto']): on = True; inst = ''; continue
        if b['t'] == 'p' and b['texto'].startswith('Degrau'): on = False
        if not on: continue
        if b['t'] == 'p': inst = limpa(b['texto'])
        elif b['t'] == 'item': out.append((inst, re.sub(r'^\d+\.\s*', '', limpa(b['texto']))))
    return out
def lista_chave(S, k, n=0):
    """respostas do degrau k na chave: itens numerados ou parágrafo 'Degrau k. 1 ... 2 ...'."""
    out, on = [], False
    for b in S['chave']:
        if b['t'] == 'p' and re.match(rf'^Degrau {k}\b', b['texto']): on = True; continue
        if b['t'] == 'p' and re.match(r'^(Degrau|Retorno)', b['texto']): on = False
        if on and b['t'] == 'item': out.append(re.split(r'\s+Retorno\b', re.sub(r'^\d+\.\s*', '', limpa(b['texto'])))[0].strip())
    if out or not n: return out
    txt = re.sub(r'^\s*(\(Respostas-modelo\)\.?|Modelo:?|Modelos?:)\s*', '', parse_chave(S, k))
    return respostas(txt, n) or []
def sa(x): return re.sub(r'[^\w]', '', x.lower())
def corta_vizinhas(resp, pre, pos):
    """tira da resposta o que o enunciado já traz ao redor da lacuna (palavras vizinhas, prefixo/sufixo colado, 'X = ' do alfabeto)."""
    resp = re.sub(r'^[A-Za-zÄÖÜäöüß]{1,3}\s=\s*', '', resp.strip())
    resp = re.sub(r'^[A-Za-zçãõéíú]+:\s+(?=\S)', '', resp) if re.match(r'^[A-Za-zçãõéíú]+:\s', resp) else resp
    r = resp.split(); p, q = pre.split(), pos.split()
    for m in range(min(4, len(p), len(r) - 1), 0, -1):
        if [sa(x) for x in p[-m:]] == [sa(x) for x in r[:m]]: r = r[m:]; break
    for m in range(min(4, len(q), len(r) - 1), 0, -1):
        if [sa(x) for x in q[:m]] == [sa(x) for x in r[-m:]]: r = r[:-m]; break
    a_ = ' '.join(r)
    if pos and not pos[0].isspace() and q:
        tok = q[0].strip('.,;:!?)(')
        if tok and a_.lower().endswith(tok.lower()) and len(a_) > len(tok): a_ = a_[:-len(tok)]
    if pre and not pre[-1].isspace() and p:
        tok = p[-1].strip('.,;:!?)(')
        if tok and a_.lower().startswith(tok.lower()) and len(a_) > len(tok): a_ = a_[len(tok):]
    return a_

def exercicios(S, num, pref):
    ex, auto, livre = [], 0, 0
    for k in (1, 2):
        its = itens(S, k); resp = respostas(parse_chave(S, k), len(its)) if its else None
        for i, (inst, t) in enumerate(its):
            r = resp[i] if resp else None; ident = f'{pref}-{k}{i+1:02d}'
            if r:
                # múltipla escolha (a)(b)(c)
                mo = re.search(r'\(a\)\s*(.*)$', t)
                if mo and re.match(r'^\(([a-c])\)', r):
                    opts = [o.strip(' .') for o in re.split(r'\s*\([a-c]\)\s*', '(a) ' + mo.group(1))[1:] if o.strip()]
                    L = re.match(r'^\(([a-c])\)', r).group(1); gi = ord(L) - 97
                    if gi < len(opts) and len(opts) >= 2:
                        ex.append({'tipo': 'multiple-choice', 'enunciado': (t[:mo.start()].strip() or inst or ('Qual frase está correta?' if min(len(o.split()) for o in opts) >= 3 else 'Escolha a opção correta.')).replace('____', '___'), 'opcoes': opts, 'gabarito': opts[gi], 'explicacao': ('Veja a chave comentada no livro: ' + r) if len(r) > 4 else 'Veja a chave comentada no livro.', 'id': ident}); auto += 1; continue
                # (der, die, das) / (er, sie, es)
                mp = re.search(r'\(([^()]*[,/][^()]*)\)\s*$', t)
                if mp and '____' in t and t.count('____') == 1:
                    opts = [o.strip() for o in re.split(r'[,/]', mp.group(1)) if o.strip()]
                    a1 = re.split(r'[\s(]', r)[0].strip(' .,;')
                    gab = next((o for o in opts if sa(o) == sa(a1)), None)
                    if gab and len(opts) >= 2:
                        ex.append({'tipo': 'multiple-choice', 'enunciado': (inst + ' ' if inst and len(inst) < 70 else '') + t[:mp.start()].strip().replace('____', '___'), 'opcoes': opts, 'gabarito': gab, 'explicacao': 'Veja a chave comentada no livro: ' + r, 'id': ident}); auto += 1; continue
            # lacunas simples
            lac = len(re.findall(r'_{3,}', t))
            if r and k == 2 and lac >= 1:
                partes = [x.strip() for x in re.split(r'\s*/\s*|,\s+(?=\S)', r)] if False else None
                cand = None
                for sep in (r'\s/\s', r',\s+'):
                    ps_ = [x.strip(' .') for x in re.split(sep, r) if x.strip(' .')]
                    if len(ps_) == lac: cand = ps_; break
                if cand:
                    toks = re.split(r'(_{3,})', t); feito = []
                    for b in range(lac):
                        out, n, pre_b, pos_b = '', -1, '', ''
                        # contexto imediato antes/depois da lacuna b, para limpar a resposta
                        seq = []
                        for tk in toks:
                            if re.fullmatch(r'_{3,}', tk): n += 1; seq.append(('B', n))
                            else: seq.append(('T', tk))
                        idx = seq.index(('B', b)); pre_b = seq[idx - 1][1].split('·')[-1].split('→')[-1] if idx > 0 else ''; pos_b = seq[idx + 1][1].split('·')[0].split('→')[0] if idx + 1 < len(seq) else ''
                        pos_b = re.sub(r'^\s*\([^)]*\)', '', pos_b)
                        ans = []
                        for q_, a_ in enumerate(cand):
                            ans.append(corta_vizinhas(a_, seq[seq.index(('B', q_)) - 1][1].split('·')[-1].split('→')[-1] if seq.index(('B', q_)) > 0 else '', re.sub(r'^\s*\([^)]*\)', '', seq[seq.index(('B', q_)) + 1][1].split('·')[0].split('→')[0]) if seq.index(('B', q_)) + 1 < len(seq) else ''))
                        for tk in seq: out += tk[1] if tk[0] == 'T' else ('___' if tk[1] == b else ans[tk[1]])
                        feito.append({'tipo': 'fill-gap', 'enunciado': ((inst + ' ') if inst and len(inst) < 80 else '') + out.strip(), 'respostaEsperada': ans[b], 'explicacao': 'Veja a chave comentada no livro: ' + r, 'id': ident + chr(97 + b)})
                    if all(len(f['respostaEsperada'].split()) <= 3 and f['respostaEsperada'] for f in feito):
                        ex += feito; auto += len(feito); continue
            if r and k == 2 and re.search(r'\w_{2,}|_{2,}\w', t) and len(r.split()) == 1:
                ex.append({'tipo': 'fill-gap', 'enunciado': 'Escreva a palavra completa: ' + t, 'respostaEsperada': r.strip(' .'), 'explicacao': 'Veja a chave comentada no livro.', 'id': ident}); auto += 1; continue
            ex.append({'tipo': 'producao', 'enunciado': ((inst + ' ') if inst and len(inst) < 80 else '') + t.replace('____', '___'), 'respostaEsperada': (r or ''), 'id': ident}); livre += 1
    return ex, auto, livre

def blocos_degrau34(S, pref):
    out = []
    its3 = itens(S, 3); mod = lista_chave(S, 3, len(its3))
    for i, (inst, t) in enumerate(its3):
        out.append({'tipo': 'producao', 'enunciado': t, 'respostaEsperada': mod[i] if i < len(mod) else '', 'id': f'{pref}-p{i+1:02d}'})
    its4 = itens(S, 4); corr = lista_chave(S, 4, len(its4))
    pal = lambda x: set(re.findall(r'\w+', x.lower()))
    for i, (inst, t) in enumerate(its4):
        c = corr[i] if i < len(corr) else ''
        t0 = re.sub(r'\s*\([^()]*\)\s*$', '', t).strip()
        certa = bool(re.search(r'est[áa] certa', c, re.I)) or not c
        limpo = re.sub(r'\s*\([^()]*\)\s*\.?\s*$', '', c).strip()
        if ': ' in limpo:  # "Falta o pronome: Ich wohne in Recife."
            dep = limpo.split(': ', 1)[1].strip()
            if len(pal(dep) & pal(t0)) >= 0.4 * len(pal(t0)): limpo = dep
        ov = len(pal(limpo) & pal(t0)) / max(1, len(pal(t0)))
        alemao = (not certa) and limpo and len(limpo.split()) >= 2 and ov >= 0.5 and limpo[-1] in '.?!'
        if alemao:
            out.append({'tipo': 'fill-gap', 'enunciado': 'Corrija: ' + t0, 'respostaEsperada': limpo.rstrip('.') if t0[-1:] != '.' else limpo, 'explicacao': c, 'id': f'{pref}-c{i+1:02d}'})
        else:
            out.append({'tipo': 'producao', 'enunciado': 'Esta frase tem erro? Corrija ou escreva «OK»: ' + t0, 'respostaEsperada': 'OK' if certa else c, 'id': f'{pref}-c{i+1:02d}'})
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
    grp = cap_aulas[cap_n]; npos = grp.index(aula) if aula in grp else 0
    if len(grp) > 1:  # as aulas do mesmo capítulo dividem os degraus: produção só na dona, correções em rodízio
        prods = [e for e in ex34 if '-p' in e['id'][-4:]]; corrs = [e for e in ex34 if '-c' in e['id'][-4:]]
        ex34 = (prods if npos == 0 else []) + corrs[npos::len(grp)]
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
