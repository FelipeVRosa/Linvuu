#!/usr/bin/env python3
"""Converte os capítulos extraídos (JSON) em Markdown, um arquivo por capítulo, para edição e revisão.
Uso: python3 -I scripts/livros/exportar_md.py --entrada content/livros-privado --idioma en --saida content/livros-privado
Gera <saida>/<idioma>/cap-NN.md. Marcas do JSON: *idioma estudado* vira itálico; ~~forma errada~~ continua riscado."""
import argparse, json, pathlib

def celula(t): return t.replace('|', '\\|').replace('\n', ' ')

def capitulo_md(c):
    L = [f"# Capítulo {c['n']}: {c['titulo']}", '', f"*Nível {c.get('nivel','')} · páginas {c['paginas'][0]}–{c['paginas'][1]} do livro*", '']
    lista = False
    for b in c['blocos']:
        t = b['t']
        if t not in ('li', 'item') and lista: L.append(''); lista = False
        if t == 'h2': L += ['', f"## {b['texto']}", '']
        elif t == 'h3': L += ['', f"### {b['texto']}", '']
        elif t == 'h4': L += ['', f"#### {b['texto']}", '']
        elif t == 'p': L += [b['texto'], '']
        elif t == 'rotulo': L += [f"**{b['texto']}**", '']
        elif t == 'li': L.append(f"- {b['texto']}"); lista = True
        elif t == 'item': L.append(f"{b['n']}. {b['texto']}"); lista = True
        elif t == 'aviso': L += [f"> **{b['rotulo']}** {b['texto']}", '']
        elif t == 'dialogo': L += [f"**{f['quem']}:** {f['texto']}  " for f in b['falas']] + ['']
        elif t == 'tabela':
            L.append('| ' + ' | '.join(celula(x) for x in b['cabecalho']) + ' |')
            L.append('|' + '---|' * len(b['cabecalho']))
            for l in b['linhas']: L.append('| ' + ' | '.join(celula(x) for x in l) + ' |')
            L.append('')
    return '\n'.join(L).strip() + '\n'

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('--entrada', required=True); ap.add_argument('--idioma', required=True); ap.add_argument('--saida', required=True)
    a = ap.parse_args()
    ent = pathlib.Path(a.entrada) / a.idioma; sai = pathlib.Path(a.saida) / a.idioma; sai.mkdir(parents=True, exist_ok=True)
    for f in sorted(ent.glob('cap-*.json')):
        c = json.loads(f.read_text(encoding='utf-8'))
        (sai / f.name.replace('.json', '.md')).write_text(capitulo_md(c), encoding='utf-8')
        print('ok', f.name)
