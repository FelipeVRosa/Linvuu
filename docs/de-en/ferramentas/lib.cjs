// biblioteca comum: detecção de português, varredura e regras de modelo (alemão para falantes de inglês)
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '../../..') + path.sep;
const SKIP = new Set(['id', 'tipo', 'audio', 'idioma', 'status', 'origem', 'ipa', 'maiuscula', 'minuscula', 'en', 'responsavel', 'sessao', 'nivel', 'ru', 'translit', 'dia', 'fase', 'min', 'duracaoMin', 'sessoes', 'numero', 'aula', 'personagem', 'de', 'ingles']);
const SW = /(^|[^\p{L}])(o|os|as|do|dos|em|no|na|nos|nas|uma|que|é|não|com|para|por|ou|ao|mais|como|você|isso|esta|este|são|ser|ouça|escolha|escreva|palavra|letra|sílaba|vogal|sim|aqui|quando|onde|quem|qual|quais|foi|era|tem|têm|muito|sempre|depois|antes|porque|também|só|seu|sua|meu|minha|nosso|nossa|nós|eu|ele|ela|eles|elas|dele|dela|pelo|pela|num|numa|sobre|entre|até|ainda|já|mesmo|cada|todo|toda|todos|todas|outro|outra|fala|diz|use|usa|veja|leia|complete|traduza|marque|responda|masculino|feminino|neutro|português|alemão|inglês|artigo|verbo)([^\p{L}]|$)/iu;
const PTC = /[ãõçêâôáíóúà]/i;
const esPT = (s) => s.length > 2 && (SW.test(s) || PTC.test(s));
const OBJ = /^Aula (\d+), sessão (\d+) de (\d+) · (\d+) min$/;
const FIXAS = (s) => { const m = OBJ.exec(s); return m ? `Lesson ${m[1]}, session ${m[2]} of ${m[3]} · ${m[4]} min` : null; };
const TAB = new Set(['tabela', 'tabelas', 'linhas']);

/** percorre um objeto; chama f(valor, chave, pai, dentroDeTabela). */
function walk(o, f, k = '', pai = null, tab = false) {
  if (Array.isArray(o)) o.forEach((x) => walk(x, f, k, pai, tab || TAB.has(k)));
  else if (o && typeof o === 'object') for (const a in o) walk(o[a], f, a, o, tab || TAB.has(k));
  else f(o, k, pai, tab);
}
/** candidatos a tradução: strings em português (fora das chaves técnicas) e títulos partidos em ': ' */
function candidatas(o, saida, chavesTab, traducoes) {
  walk(o, (v, k, pai, tab) => {
    if (typeof v !== 'string') return;
    if (SKIP.has(k)) return;
    if (k === 'pt' && pai && typeof pai.en === 'string') return; // glosa que já tem inglês
    if (FIXAS(v)) return;
    if (k === 'titulo' && v.includes(': ')) { for (const p of v.split(': ')) if (esPT(p)) saida.add(p); return; }
    if (esPT(v)) saida.add(v);
  });
  // chaves de coluna (dentro de tabelas) em português
  walk(o, (v, k, pai, tab) => { if (tab && pai && !SKIP.has(k)) chavesTab.add(k); });
}
module.exports = { REPO, SKIP, esPT, FIXAS, walk, candidatas, TAB };
