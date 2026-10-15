"""Piloto: aplica o capítulo 1 do livro em inglês às sessões da aula 2 (dias 5 a 8). Idempotente: lê o capítulo e reescreve os blocos."""
import json, re
cap = json.load(open('content/livros-privado/en/cap-01.json'))
B = cap['blocos']
def limpa(s): return re.sub(r'\*\*|\*|~~', '', s).replace('’', "'").strip()
def tab(i): return [[limpa(c) for c in l] for l in B[i]['linhas']]
def dia(n): return json.load(open(f'content/idiomas/en/dia-{n:03d}.json'))
def salva(n, d): json.dump(d, open(f'content/idiomas/en/dia-{n:03d}.json', 'w'), ensure_ascii=False, indent=2); open(f'content/idiomas/en/dia-{n:03d}.json', 'a').write('\n')
def acha(blocos, tipo): return [b for b in blocos if b['tipo'] == tipo]
def ajusta(blocos, mins):
    for b, m in zip(blocos, mins): b['min'] = m
    assert sum(mins) == 30, sum(mins)

# --- Cena
falas = B[4]['falas']
pt = [x.strip() for x in limpa(B[5]['texto']).replace('Em português:', '').split(' / ')]
assert len(pt) == len(falas), (len(pt), len(falas))
cena = {'tipo': 'dialogo', 'min': 6, 'titulo': 'Check-in no coworking em Toronto',
  'contexto': limpa(B[2]['texto']),
  'linhas': [{'personagem': f['quem'], 'ru': '— ' + limpa(f['texto']), 'pt': '— ' + p, 'audio': limpa(f['texto'])} for f, p in zip(falas, pt)]}
def exp(passos): return ' '.join(f'PASSO {i+1}: {t}' for i, t in enumerate(passos))
def erros(i): return [{'errado': c[0], 'certo': c[1], 'motivo': c[2]} for c in tab(i)]

# --- Dia 5
d = dia(5); bl = d['sessao']['blocos']
palavras = acha(bl, 'palavras')[0]; gram = acha(bl, 'gramatica')[0]; prod = acha(bl, 'producao')[0]; rev = acha(bl, 'revisao')[0]
intro = {'tipo': 'intro', 'min': 1, 'texto': limpa(B[0]['texto']).replace('Meta do capítulo. Ao final,', 'Meta da aula. Ao final das quatro sessões,')}
armadilha = {'tipo': 'gramatica', 'min': 7, 'titulo': 'A armadilha do português',
  'explicacao': exp([limpa(B[6]['texto'].replace('Repare que', 'Repare:', 1)) if False else 'Repare na cena: um único verbo em inglês (am / is / are) resolve o nosso «ser» e o nosso «estar», a profissão no singular pede «a» ou «an» (a product manager, an engineer) e, para falar do clima, entra o sujeito obrigatório «it» (it\'s a bit cold).',
    limpa(B[10]['texto'])[3:].strip(), limpa(B[11]['texto'])[3:].strip(), limpa(B[12]['texto'])[3:].strip()]),
  'comparacao': 'em português dizemos «tenho 30 anos», «estou com fome», «sou médico» e «está frio» sem sujeito. Traduzir ao pé da letra leva a quatro erros: usar «have» para idade e sensações, esquecer «a/an», começar a frase em «is» e deixar o «it» de fora.',
  'tabela': [{'portugues': c[0], 'ingles': c[1], 'evite': c[2]} for c in tab(9)], 'tag': 'Armadilha'}
palavras['min'] = 4; gram['min'] = 8; prod['min'] = 3; rev['min'] = 1
d['sessao']['blocos'] = [intro, cena, armadilha, palavras, gram, prod, rev]
ajusta(d['sessao']['blocos'], [1, 6, 7, 4, 8, 3, 1]); salva(5, d)

# --- Dia 6
d = dia(6); bl = d['sessao']['blocos']
palavras = acha(bl, 'palavras')[0]; gram = acha(bl, 'gramatica')[0]; prod = acha(bl, 'producao')[0]; rev = acha(bl, 'revisao')[0]
descubra = {'tipo': 'gramatica', 'min': 6, 'titulo': 'Descubra você mesmo',
  'explicacao': exp(['Observe as três colunas: afirmativa contraída, negativa e pergunta com resposta curta.',
    'Olhe a posição do verbo (am / is / are) quando a afirmação vira pergunta: ele salta para antes da pessoa.',
    'Olhe as respostas curtas afirmativas (Yes, I am / Yes, he is / Yes, it is): o verbo não se contrai no final. Nunca diga «Yes, I\'m» nem «Yes, it\'s».']),
  'tabela': [{'afirmativa': c[0], 'negativa': c[1], 'resposta': c[2]} for c in tab(15)], 'tag': 'Descubra'}
artigos = {'tipo': 'gramatica', 'min': 7, 'titulo': 'A regra completa de a, an e the',
  'explicacao': exp([limpa(B[38]['texto']).replace(':', '.') + ' O som decide, não a letra: «a university», «an hour».',
    limpa(B[22]['texto'])[3:].strip(), limpa(B[24]['texto'])[3:].strip(), limpa(B[25]['texto'])[3:].strip()]),
  'tabela': [{'regra': c[0], 'exemplo': c[1], 'motivo': c[2]} for c in tab(39)], 'erros': erros(78)[:3] if False else [{'errado': 'an university / a hour', 'certo': 'a university / an hour', 'motivo': 'a/an seguem o som inicial (iu é consoante; o h de hour é mudo).'}, {'errado': 'I live in the Brazil.', 'certo': 'I live in Brazil.', 'motivo': 'Países no singular não levam o artigo the.'}], 'tag': 'Artigos'}
palavras['min'] = 3; gram['min'] = 8; prod['min'] = 3; rev['min'] = 1
d['sessao']['blocos'] = [descubra, palavras, gram, artigos, prod, rev]
ajusta(d['sessao']['blocos'], [6, 3, 8, 7, 3, 3]); salva(6, d)

# --- Dia 7
d = dia(7); bl = d['sessao']['blocos']
palavras = acha(bl, 'palavras')[0]; gram = acha(bl, 'gramatica')[0]; dlg = acha(bl, 'dialogo')[0]; prod = acha(bl, 'producao')[0]; rev = acha(bl, 'revisao')[0]
ouro = {'tipo': 'palavras', 'min': 5, 'itens': [{'ru': limpa(c[0]), 'translit': '', 'pt': c[1], 'en': '', 'audio': limpa(c[0])} for c in tab(41)]}
def mc(i, enun, ops, gab, why): return {'tipo': 'multiple-choice', 'enunciado': enun, 'opcoes': ops, 'gabarito': gab, 'explicacao': why, 'id': f'en-002-g{i:02d}'}
def fg(i, enun, resp, why): return {'tipo': 'fill-gap', 'enunciado': enun, 'respostaEsperada': resp, 'explicacao': why, 'id': f'en-002-g{i:02d}'}
g1 = [
 mc(1, 'She ___ from Canada.', ['is', 'are', 'am'], 'is', 'she pede «is».'),
 mc(2, 'She is ___ architect.', ['an', 'a'], 'an', 'architect começa com som de vogal.'),
 mc(3, 'My brother is studying at ___ university.', ['a', 'an'], 'a', 'university começa com o som consonantal «iu».'),
 mc(4, '— ___ thirty years old? — No, I\'m not. I\'m twenty-eight!', ['Are you', 'Have you'], 'Are you', 'idade usa to be, nunca have.'),
 mc(5, '— Is the hotel near the subway? — Yes, ___!', ['it is', 'it\'s'], 'it is', 'a resposta curta afirmativa nunca contrai.'),
 mc(6, '___ very hot in Rio today.', ['It\'s', 'Is'], 'It\'s', 'clima exige o sujeito «It».'),
 mc(7, 'My meeting is in ___ hour.', ['an', 'a'], 'an', 'hour tem h mudo: som de vogal.'),
 mc(8, '___ your parents at home right now?', ['Are', 'Is'], 'Are', 'your parents = they, plural.')]
g2 = [
 fg(9, 'Hi! My name ___ Rafael, and I ___ from Brazil. (is / \'m)', 'is \'m', 'Brasil, no singular, não leva «the».'),
 fg(10, '— ___ you hungry? — No, I ___ not, thanks.', 'Are am', 'sem contração na resposta com «am not».'),
 fg(11, 'Where ___ the keys? They ___ on the table.', 'are are', 'keys = they, plural.'),
 fg(12, '___ cold in this room! (use a contração)', 'It\'s', 'sujeito neutro «It».'),
 fg(13, '— Is Lucas in Toronto on vacation? — No, he ___.', 'isn\'t', 'resposta curta negativa.'),
 fg(14, '— Are your coworkers ready for the call? — Yes, they ___.', 'are', 'a resposta afirmativa não contrai.')]
for e in g2[:1]: pass
ex = {'tipo': 'exercicios', 'min': 12, 'itens': g1 + g2}
palavras['min'] = 2; gram['min'] = 5; dlg['min'] = 4; prod['min'] = 1; rev['min'] = 1
d['sessao']['blocos'] = [palavras, gram, dlg, ouro, ex, prod, rev]
ajusta(d['sessao']['blocos'], [2, 5, 4, 5, 12, 1, 1]); salva(7, d)

# --- Dia 8
d = dia(8); bl = d['sessao']['blocos']
ex0 = acha(bl, 'exercicios')[0]; prod = acha(bl, 'producao')[0]; rev = acha(bl, 'revisao')[0]
deg3 = [{'tipo': 'producao', 'enunciado': limpa(B[i]['texto']), 'respostaEsperada': r, 'id': f'en-002-p{k:02d}'} for k, (i, r) in enumerate([
  (63, "Hi, I'm Lucas. I'm from São Paulo, Brazil, and I'm a software engineer."),
  (64, "I'm 30 years old, and my sister is 27."),
  (65, "It's hot in my city today, and I'm hungry and in a hurry."),
  (66, 'Are you from Rio? Yes, I am. Is the meeting at ten? No, it isn\'t.')], 1)]
erros4 = [('I have 32 years, and I\'m project manager in São Paulo.', "I'm 32, and I'm a project manager in São Paulo.", 'idade usa to be e profissão exige «a».'),
 ('Is very cold outside today, so I have cold!', "It's very cold outside today, so I'm cold!", 'sujeito «It» e sensação com to be.'),
 ('My sister is an university student in the Brazil.', 'My sister is a university student in Brazil.', '«a university» e sem «the» antes de Brazil.'),
 ("— Are they in a hurry? — Yes, they're!", '— Are they in a hurry? — Yes, they are!', 'resposta curta afirmativa não contrai.'),
 ('The coffee is a great drink, and I\'m at the home now.', 'Coffee is a great drink, and I\'m at home now.', 'sem «the» para coisas em geral e em «at home».'),
 ('She has afraid of flying.', 'She is afraid of flying.', '«ter medo» é be afraid.')]
deg4 = [{'tipo': 'fill-gap', 'enunciado': 'Corrija: ' + e, 'respostaEsperada': c.replace('— ', '').replace('Are they in a hurry? Yes', 'Yes') if False else c, 'explicacao': w, 'id': f'en-002-c{k:02d}'} for k, (e, c, w) in enumerate(erros4, 1)]
ex0['itens'] += deg3 + deg4
ex0['min'] = 19
tipicos = {'tipo': 'gramatica', 'min': 4, 'titulo': 'O erro típico do brasileiro',
  'explicacao': exp([limpa(B[76]['texto']), 'Releia a tabela e diga cada frase certa em voz alta antes de olhar o motivo.']),
  'erros': [{'errado': c[0], 'certo': c[1], 'motivo': c[2]} for c in tab(78)[:3]] + [{'errado': 'Yes, I\'m. / Yes, it\'s.', 'certo': 'Yes, I am. / Yes, it is.', 'motivo': 'nunca se contrai o verbo no fim de uma resposta curta afirmativa.'}], 'tag': 'Erro típico'}
retorno = {'tipo': 'revisao', 'min': 3, 'enunciado': 'Retorno. 1) Como se diz «Está frio» em inglês, e qual palavra obrigatória abre a frase? 2) Por que «a university», mas «an umbrella» e «an hour»? 3) Quando alguém pergunta «What do you do?», o que a pessoa quer saber e como você responde?'}
jc = {'tipo': 'intro', 'min': 1, 'texto': 'Já consigo? ' + ' · '.join(limpa(B[i]['texto']) for i in (91, 92, 93)) + ' Refaça o degrau 4 daqui a 7 dias, sem olhar a correção.'}
prod['min'] = 3; rev['min'] = 0
d['sessao']['blocos'] = [ex0, tipicos, prod, retorno, jc]
ajusta(d['sessao']['blocos'], [19, 4, 4, 2, 1]); salva(8, d)
