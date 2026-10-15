#!/usr/bin/env python3
"""Lê o Sumário (primeiras páginas) de um livro e grava content/livros/<idioma>/sumario.json: [{n, titulo, nivel, pagina}].
Uso: python3 -I scripts/livros/extrair_sumario.py --pdf Livro.pdf --idioma en [--saida content/livros]"""
import argparse, json, re, subprocess
from pathlib import Path

ap = argparse.ArgumentParser(); ap.add_argument('--pdf', required=True); ap.add_argument('--idioma', required=True); ap.add_argument('--saida', default='content/livros')
a = ap.parse_args()
txt = subprocess.run(['pdftotext', '-f', '1', '-l', '6', '-layout', a.pdf, '-'], capture_output=True, text=True).stdout
itens, atual = [], None
INI = re.compile(r'^\s+(?:Capítulo\s+(\d{1,2})\.|AULA\s+(\d{1,2})\s+—)\s*(.*)$')
for ln in txt.splitlines():
    if re.search(r'L\s*I\s*N\s*V\s*U\s*U', ln): atual = None; continue
    m = INI.match(ln)
    if m:
        n = int(m.group(1) or m.group(2)); resto = m.group(3).rstrip()
        pg = re.search(r'\s{2,}(\d{1,3})$', resto) or re.search(r'(?<=\S)\s(\d{1,3})$', resto)
        pagina = int(pg.group(1)) if pg else None
        if pg: resto = resto[:pg.start()].rstrip()
        atual = dict(n=n, titulo=resto, pagina=pagina); itens.append(atual); continue
    if atual and ln.strip() and not re.match(r'^\s+(Apêndices|Vocabulário|Sumário|Antes)', ln):
        resto = ln.strip(); pg = re.search(r'\s{2,}(\d{1,3})$', resto) or re.search(r'(?<=\S)\s(\d{1,3})$', resto)
        if pg and atual['pagina'] is None: atual['pagina'] = int(pg.group(1)); resto = resto[:pg.start()].rstrip()
        atual['titulo'] = (atual['titulo'] + ' ' + resto).strip()
    elif atual and not ln.strip(): atual = None
out = []
for i in itens:
    t = re.sub(r'\s+', ' ', i['titulo']).strip()
    nivel = (re.search(r'\((A1|A2|B1|B2|A1–A2)\)\s*$', t) or [None, ''])[1]
    t = re.sub(r'\s*\((A1|A2|B1|B2|A1–A2)\)\s*$', '', t)
    if t.isupper(): t = t.capitalize()
    out.append(dict(n=i['n'], titulo=t, nivel=nivel, pagina=i['pagina']))
dest = Path(a.saida) / a.idioma; dest.mkdir(parents=True, exist_ok=True)
(dest / 'sumario.json').write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf-8')
print(a.idioma, len(out), 'capítulos; último:', out[-1]['n'] if out else '-')
