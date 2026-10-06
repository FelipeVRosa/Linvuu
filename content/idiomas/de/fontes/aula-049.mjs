import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 49, titulo: 'Orações relativas 3: dativo, preposição e genitivo', nivel: 'b1',
  objetivo: 'Formar relativas com o relativo no dativo (dem, der, dem, denen), com preposição antes do relativo (mit dem, in der, für die) e com o genitivo (dessen, deren).',
  nota: 'Você domina as relativas com preposição e com genitivo. Próxima aula: o passivo.',
  sessoes: [
    sessao('S1', 'Relativo no dativo e com preposição', [
      revisao(5, 'Escreva 6 frases com relativas no acusativo e com «was».'),
      palavras(8, [
        ['die Gegend', 'di guéguent', 'região, vizinhança', 'area'], ['der Verein', 'der ferain', 'clube, associação', 'club'], ['die Gruppe', 'di grúpe', 'grupo', 'group'], ['der Chor', 'der kôr', 'coro', 'choir'],
        ['die Freundschaft', 'di fróint-xaft', 'amizade', 'friendship'], ['das Mitglied', 'das mít-glit', 'membro', 'member'], ['die Mitarbeiter', 'di mít-arbaiter', 'colaboradores', 'staff'], ['der Verwandte', 'der fervánte', 'parente', 'relative'],
      ]),
      gramatica(14, 'O relativo no dativo e com preposição, passo a passo', 'PASSO 1: se o relativo é OBJETO INDIRETO, ele fica no DATIVO: «dem» (m), «der» (f), «dem» (n), «DENEN» (plural, forma própria!). PASSO 2: o mesmo vale se uma PREPOSIÇÃO que pede dativo vem antes: «Der Mann, mit dem ich spreche, ist mein Chef.» PASSO 3: REGRA: a PREPOSIÇÃO vai ANTES do relativo (nunca no fim, como em inglês): «mit dem», «in der», «in dem», «mit denen», «bei dem». PASSO 4: o CASO do relativo é o que a preposição pede: «mit» + dativo → «mit dem»; «für» + acusativo → «für den»; «in» + Wo? dativo → «in der». PASSO 5: formas: «Die Stadt, in der ich wohne», «Das Haus, in dem ich lebe», «Die Freunde, mit denen ich reise», «Der Verein, bei dem ich Mitglied bin».', {
        tag: 'Frase',
        comparacao: 'o português diz «o homem com quem falo» e «a cidade em que moro»: a preposição também vem antes. O alemão acrescenta que o relativo muda de caso conforme a preposição.',
        tabela: [
          { genero: 'masculino', relativo: 'dem', exemplo: 'Der Mann, mit dem ich spreche, ist mein Chef.' }, { genero: 'feminino', relativo: 'der', exemplo: 'Die Stadt, in der ich wohne, ist klein.' }, { genero: 'neutro', relativo: 'dem', exemplo: 'Das Haus, in dem ich lebe, ist alt.' }, { genero: 'plural', relativo: 'denen', exemplo: 'Die Freunde, mit denen ich reise, sind nett.' },
        ],
        erros: [['Die Freunde, mit die ich reise, sind nett.', 'Die Freunde, mit denen ich reise, sind nett.', 'Dativo plural do relativo: «denen».'], ['Der Mann, ich spreche mit, ist mein Chef.', 'Der Mann, mit dem ich spreche, ist mein Chef.', 'A preposição vem antes do relativo.'], ['Die Stadt, in die ich wohne, ist klein.', 'Die Stadt, in der ich wohne, ist klein.', 'Wo? pede dativo: «in der».']],
      }),
      producao(3, 'Descreva em voz alta 6 coisas ou pessoas com relativas e preposição: «Die Stadt, in der ich … Die Freunde, mit denen ich …»'),
    ]),
    sessao('S2', 'Relativo com preposição e acusativo', [
      revisao(5, 'Escreva o quadro do relativo no dativo e 4 frases.'),
      palavras(8, [
        ['das Thema', 'das téma', 'tema, assunto', 'topic'], ['die Arbeit', 'di árbait', 'trabalho', 'work'], ['die Prüfung', 'di prüfung', 'prova, exame', 'exam'], ['der Urlaub', 'der úrlaup', 'férias', 'holiday'],
        ['das Projekt', 'das projékt', 'projeto', 'project'], ['der Kurs', 'der kurs', 'curso', 'course'], ['die Zukunft', 'di tsúkunft', 'futuro', 'future'], ['das Fest', 'das fest', 'festa', 'party'],
      ]),
      gramatica(12, 'Relativas com preposições do acusativo e de duas vias', 'PASSO 1: preposições que pedem ACUSATIVO levam «den, die, das, die»: «Die Frau, für die ich arbeite, ist nett.» «Das Thema, über das wir sprechen, ist wichtig.» PASSO 2: preposições de duas vias com movimento: «Der Berg, auf den wir steigen, ist hoch.» PASSO 3: verbos com preposição fixa também criam relativas: «Der Film, auf den ich mich freue, beginnt um acht» (sich freuen auf + Akk); «Das Buch, von dem ich dir erzählt habe …» (erzählen von + Dat). PASSO 4: lembre: a preposição fixa do verbo decide o caso.', {
        tag: 'Frase',
        tabela: [
          { preposicao: 'für + Akk', frase: 'Die Frau, für die ich arbeite, ist nett.' }, { preposicao: 'über + Akk', frase: 'Das Thema, über das wir sprechen, ist wichtig.' }, { preposicao: 'auf + Akk (movimento)', frase: 'Der Berg, auf den wir steigen, ist hoch.' }, { preposicao: 'sich freuen auf + Akk', frase: 'Der Film, auf den ich mich freue, beginnt um acht.' },
          { preposicao: 'erzählen von + Dat', frase: 'Das Buch, von dem ich dir erzählt habe, ist spannend.' },
        ],
        erros: [['Das Thema, über dem wir sprechen, ist wichtig.', 'Das Thema, über das wir sprechen, ist wichtig.', '«sprechen über» pede acusativo.'], ['Der Film, auf dem ich mich freue, beginnt um acht.', 'Der Film, auf den ich mich freue, beginnt um acht.', '«sich freuen auf» pede acusativo.']],
      }),
      producao(5, 'Faça 6 frases com relativas e preposições do acusativo: «Das Thema, über das … Der Film, auf den …»'),
    ]),
    sessao('S3', 'O genitivo: dessen e deren', [
      revisao(5, 'Escreva 6 frases com relativas e preposições.'),
      gramatica(10, 'Dessen e deren: o relativo de posse', 'PASSO 1: para indicar POSSE dentro da relativa («cujo, cuja»), o alemão usa «DESSEN» (masculino e neutro) e «DEREN» (feminino e plural). PASSO 2: o possuidor vem antes; o possuído vem depois e SEM artigo: «Der Mann, dessen Auto dort steht, ist mein Nachbar» (o homem cujo carro está ali). PASSO 3: «Die Frau, deren Tochter Ärztin ist, wohnt hier.» PASSO 4: «Das Kind, dessen Mutter arbeitet, geht in die Schule.» «Die Leute, deren Kinder spielen, sind meine Freunde.» PASSO 5: o verbo conjugado vai ao fim.', {
        tag: 'Frase',
        tabela: [
          { genero: 'masculino', relativo: 'dessen', exemplo: 'Der Mann, dessen Auto dort steht, ist mein Nachbar.' }, { genero: 'feminino', relativo: 'deren', exemplo: 'Die Frau, deren Tochter Ärztin ist, wohnt hier.' }, { genero: 'neutro', relativo: 'dessen', exemplo: 'Das Kind, dessen Mutter arbeitet, geht zur Schule.' }, { genero: 'plural', relativo: 'deren', exemplo: 'Die Leute, deren Kinder spielen, sind Freunde.' },
        ],
        erros: [['Der Mann, dessen das Auto dort steht', 'Der Mann, dessen Auto dort steht', 'Depois de «dessen/deren», sem artigo.'], ['Die Frau, dessen Tochter Ärztin ist', 'Die Frau, deren Tochter Ärztin ist', 'Feminino: «deren».']],
      }),
      dialogo(10, 'Die Nachbarschaft / A vizinhança', 'Duas pessoas falam dos vizinhos.', [
        ['Mia', 'Kennst du die Frau, die im dritten Stock wohnt?', 'Você conhece a mulher que mora no terceiro andar?'], ['Jonas', 'Ja, das ist die Frau, deren Sohn Musiker ist.', 'Sim, é a mulher cujo filho é músico.'], ['Mia', 'Und der Mann, der neben ihr wohnt?', 'E o homem que mora ao lado dela?'],
        ['Jonas', 'Das ist der Mann, dessen Hund immer bellt.', 'É o homem cujo cachorro sempre late.'], ['Mia', 'Die Gegend, in der wir wohnen, ist wirklich schön.', 'A região em que moramos é realmente bonita.'], ['Jonas', 'Ja, aber die Leute, mit denen ich arbeite, wohnen weit weg.', 'Sim, mas as pessoas com quem trabalho moram longe.'],
        ['Mia', 'Der Verein, bei dem ich Mitglied bin, trifft sich am Samstag.', 'O clube de que sou membro se reúne no sábado.'], ['Jonas', 'Das Thema, über das ihr sprecht, interessiert mich auch.', 'O tema sobre o qual vocês falam também me interessa.'],
      ]),
      producao(5, 'Descreva em voz alta os seus vizinhos e o bairro, com «dessen», «deren», «mit dem», «in der» e «mit denen».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases com relativas no dativo, com preposição e no genitivo.'),
      exercicios(20, [
        lacuna('Der Mann, mit ___ ich spreche, ist mein Chef.', ['dem', 'den', 'der'], 'dem', '«mit» + dativo masculino.'), lacuna('Die Stadt, in ___ ich wohne, ist klein.', ['der', 'die', 'dem'], 'der', 'Wo? dativo feminino.'), lacuna('Das Haus, in ___ ich lebe, ist alt.', ['dem', 'das', 'den'], 'dem', 'Wo? dativo neutro.'),
        lacuna('Die Freunde, mit ___ ich reise, sind nett.', ['denen', 'die', 'den'], 'denen', 'Dativo plural do relativo.'), lacuna('Die Frau, für ___ ich arbeite, ist nett.', ['die', 'der', 'den'], 'die', '«für» + acusativo feminino.'), lacuna('Das Thema, über ___ wir sprechen, ist wichtig.', ['das', 'dem', 'den'], 'das', '«über» + acusativo neutro.'),
        lacuna('Der Mann, ___ Auto dort steht, ist mein Nachbar.', ['dessen', 'deren', 'dem'], 'dessen', 'Posse masculino: dessen.'), lacuna('Die Frau, ___ Tochter Ärztin ist, wohnt hier.', ['deren', 'dessen', 'der'], 'deren', 'Posse feminino: deren.'), mc('A preposição, na relativa, vem:', ['antes do relativo', 'no fim da relativa', 'depois do verbo'], 'antes do relativo', 'mit dem, in der.'),
        mc('O caso do relativo com preposição vem de:', ['da preposição', 'do sujeito da principal', 'da posição na frase'], 'da preposição', 'mit + dativo, für + acusativo.'), mc('«Dessen» e «deren» indicam:', ['posse (cujo, cuja)', 'lugar', 'tempo'], 'posse (cujo, cuja)', 'Genitivo.'), ordem('Ordene: «A cidade em que moro é pequena.»', ['Die', 'Stadt', 'in', 'der', 'ich', 'wohne', 'ist', 'klein'], 'Die Stadt, in der ich wohne, ist klein.', 'Preposição + relativo.'),
        ouvir('Die Freunde, mit denen ich reise, sind nett', ['Die Freunde, mit denen ich reise, sind nett', 'Die Freunde, die ich reise, sind nett', 'Die Freunde reisen mit mir'], 'Die Freunde, mit denen ich reise, sind nett', 'denen.'), ditado('Der Mann, dessen Auto dort steht, ist mein Nachbar', 'dessen + substantivo sem artigo.'),
        livre('Escreva 5 frases: uma com «mit dem», uma com «in der», uma com «mit denen», uma com «für die» e uma com «dessen» ou «deren».', 'Der Mann, mit dem ich spreche, ist mein Chef. Die Stadt, in der ich wohne, ist klein. Die Freunde, mit denen ich reise, sind nett. Die Frau, für die ich arbeite, ist nett. Der Mann, dessen Auto dort steht, ist mein Nachbar.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua vida com relativas completas: pessoas, lugares, grupos e posses.'),
    ]),
  ],
});
