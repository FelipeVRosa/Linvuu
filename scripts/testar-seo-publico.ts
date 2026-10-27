import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Traco } from '../src/components/Traco.tsx';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { aplicarMeta, carregarDadosMeta, metaDaRota } from '../src/lib/metaRota.ts';
import { HOME_BR, PLANOS_PREVIA, PLANOS_AVISO } from '../src/config/oferta-publica.ts';
const raiz = process.cwd();
const dados = carregarDadosMeta(raiz);
assert.ok(dados);
const base = fs.readFileSync('index.html', 'utf8');
const html = (url: string) => aplicarMeta(base, metaDaRota(url, dados), 'https://linvuu.com.br', dados);
const home = html('/');
assert.ok(home.includes(`<h1>${HOME_BR.titulo}</h1>`));
assert.ok(home.includes(HOME_BR.descricao));
assert.ok(home.includes(PLANOS_AVISO));
for (const plano of PLANOS_PREVIA) assert.ok(home.includes(`${plano.nome}: ${plano.quantidade}`));
assert.ok(!home.includes('R$ 500'));
assert.ok(!home.includes('Escolha o idioma</strong>'));
assert.ok(html('/cursos').includes('<h1>Cursos</h1>'));
assert.ok(html('/en').includes('Language courses for Brazilian learners'));
assert.ok(html('/en').includes('Explanations in Portuguese'));
assert.ok(!html('/en').includes('lessons explained in English'));
assert.ok(html('/es').includes('Cursos de idiomas para brasileños'));
assert.ok(html('/es').includes('Explicaciones en portugués'));
assert.ok(!html('/es').includes('lecciones explicadas en español'));
assert.ok(!html('/assinatura').includes('name="robots" content="noindex"'));
assert.ok(html('/assinatura').includes('<h1>Planos e assinatura</h1>'));
assert.ok(html('/assinatura').includes('id="oferta-atual"'));
assert.ok(html('/assinatura').includes('R$ 139'));
assert.ok(html('/assinatura').includes(PLANOS_AVISO));
for (const rota of ['/entrar', '/cadastro', '/en/assinatura', '/es/assinatura']) assert.ok(html(rota).includes('name="robots" content="noindex"'));
assert.equal(metaDaRota('/pagina-inexistente-auditoria', dados).status, 404);
assert.ok(!html('/curso/en/dia/9').includes('\"isAccessibleForFree\":true'));
assert.ok(!html('/curso/en/dia/9').includes('<h2>Vocabulário</h2>'));
assert.ok(html('/curso/en/dia/9').includes('name="robots" content="noindex"'), 'sessao paga sem amostra publica tem noindex');
assert.ok(!html('/curso/en').includes('name="robots" content="noindex"'), 'apresentacao publica do curso segue indexavel');
for (const curso of ['en', 'de', 'ru', 'fr', 'it', 'es']) {
  const pagina = html(`/curso/${curso}`);
  assert.ok(pagina.includes('"logo":"https://linvuu.com.br/brand/linvuu-logo.png"'), `organização com logo real no curso ${curso}`);
  assert.ok(pagina.includes('"provider":{'), `provedor de curso registrado ${curso}`);
}

for (const curso of ['en', 'ru']) {
  const links = [...html(`/curso/${curso}`).matchAll(new RegExp(`href="/curso/${curso}/dia/(\\d+)"`, 'g'))].map((x) => Number(x[1]));
  assert.deepEqual(links, [1, 2, 3, 4, 5, 6, 7, 8], 'todas as oito amostras possuem links estaticos, sem sessoes pagas');
}
assert.ok(!/href="\/en\/curso\/de\/dia\//.test(html('/en/curso/de')), 'curso sem aulas traduzidas nao anuncia sessoes inexistentes');
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
assert.ok(sitemap.includes('<loc>https://linvuu.com.br/cursos</loc>'));
assert.ok(sitemap.includes('<loc>https://linvuu.com.br/assinatura</loc>'));
console.log('SEO público: proposta consistente, idiomas preservados e conteúdo pago fora do HTML.');

const traco = (valor: number) => renderToStaticMarkup(createElement(Traco, {valor, exato:true, trilha:true}));
assert.ok(!traco(0).includes('<path'), 'zero não desenha progresso fictício');
assert.ok(traco(1/248).includes('stroke-dasharray:' + (1/248) + ' 1'), 'primeira sessão respeita fração real');
assert.ok(traco(1).includes('stroke-dasharray:1 1'), 'curso completo desenha todo o traço');
assert.ok(renderToStaticMarkup(createElement(Traco, {valor:0})).includes('<path'), 'assinatura decorativa mantém comportamento');
