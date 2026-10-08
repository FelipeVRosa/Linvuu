// Título, descrição e endereço de cada rota, para o servidor entregar o HTML já com as metatags certas
// (o WhatsApp, o Facebook e outros robôs não executam JavaScript; sem isto, todo link mostraria o texto da página inicial).
import fs from 'node:fs';
import path from 'node:path';

export type DadosMeta = {
  cursos: { id: string; nome: string; descricao: string; status?: string }[];
  indice: Record<string, { total: number; grupos?: { aula: number; titulo: string; dias: [number, number] }[] }>;
};
export type MetaRota = { status: number; titulo?: string; descricao?: string; caminho: string; semIndice?: boolean; jsonld?: object[] };

export function carregarDadosMeta(raiz: string): DadosMeta | null {
  try {
    const cursos = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'cursos.json'), 'utf8')).cursos;
    const indice = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'indice.json'), 'utf8')).cursos;
    return { cursos, indice };
  } catch {
    return null;
  }
}

export function metaDaRota(pathname: string, d: DadosMeta | null): MetaRota {
  const p = (pathname.replace(/\/+$/, '') || '/');
  if (p === '/') return { status: 200, caminho: '/' };
  const fixas: Record<string, { titulo: string; descricao?: string; semIndice?: boolean }> = {
    '/cursos': { titulo: 'Cursos' },
    '/entrar': { titulo: 'Entrar', semIndice: true },
    '/cadastro': { titulo: 'Cadastre-se', semIndice: true },
    '/assinatura': { titulo: 'Assinatura', semIndice: true },
    '/privacidade': { titulo: 'Política de privacidade', descricao: 'Quais dados a Linvuu coleta, para quê e quais são os seus direitos pela LGPD.' },
    '/termos': { titulo: 'Termos de uso', descricao: 'Regras de uso do site e dos cursos da Linvuu.' },
  };
  if (fixas[p]) return { status: 200, caminho: p, ...fixas[p] };
  if (!d) return { status: 200, caminho: p }; // sem dados: entrega a página padrão, sem inventar nada
  let m = p.match(/^\/curso\/([^/]+)$/);
  if (m) {
    const c = d.cursos.find((x) => x.id === m![1]);
    if (!c) return naoEncontrada(p);
    const url = `${SITE}${p}`;
    return {
      status: 200, caminho: p, titulo: `${c.nome}: curso de ${c.nome.toLowerCase()} do zero`, descricao: c.descricao,
      semIndice: c.status === 'em-breve' || undefined,
      jsonld: [
        { '@context': 'https://schema.org', '@type': 'Course', name: `${c.nome} para quem fala português`, description: c.descricao, inLanguage: 'pt-BR', url, provider: { '@type': 'Organization', name: 'Linvuu', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Cursos', item: `${SITE}/cursos` }, { '@type': 'ListItem', position: 3, name: c.nome, item: url }] },
      ],
    };
  }
  m = p.match(/^\/curso\/([^/]+)\/dia\/(\d+)$/);
  if (m) {
    const c = d.cursos.find((x) => x.id === m![1]);
    const n = Number(m[2]);
    const total = d.indice[m[1]]?.total ?? 0;
    if (!c || n < 1 || n > total) return naoEncontrada(p);
    const g = d.indice[m[1]].grupos?.find((x) => n >= x.dias[0] && n <= x.dias[1]);
    return g
      ? { status: 200, caminho: p, titulo: `Aula ${g.aula}: ${g.titulo} · ${c.nome}`, descricao: `${c.nome}, aula ${g.aula} (${g.titulo}), sessão ${n} de ${total}: explicação em português, áudio em cada frase e exercícios com correção.` }
      : { status: 200, caminho: p, titulo: `Sessão ${n} · ${c.nome}`, descricao: `${c.nome}, sessão ${n} de ${total}.` };
  }
  m = p.match(/^\/gramatica(?:\/([^/]+))?$/);
  if (m) {
    if (!m[1]) return { status: 200, caminho: p, titulo: 'Gramática' };
    const c = d.cursos.find((x) => x.id === m![1]);
    return c ? { status: 200, caminho: p, titulo: `Gramática do ${c.nome.toLowerCase()}`, descricao: `Gramática do ${c.nome.toLowerCase()} explicada em português, tópico por tópico, com tabelas, exemplos e erros comuns.` } : naoEncontrada(p);
  }
  return naoEncontrada(p);
}

const SITE = 'https://linvuu.com.br';
const naoEncontrada = (p: string): MetaRota => ({ status: 404, caminho: p, titulo: 'Página não encontrada', semIndice: true });
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function aplicarMeta(html: string, m: MetaRota, site: string): string {
  let out = html;
  const troca = (re: RegExp, valor: string) => { out = out.replace(re, (_t, a: string, b: string) => a + valor + b); };
  if (m.titulo) {
    const tit = esc(`${m.titulo} · Linvuu`);
    out = out.replace(/<title>[^<]*<\/title>/, () => `<title>${tit}</title>`);
    troca(/(<meta property="og:title" content=")[^"]*(")/, tit);
  }
  if (m.descricao) {
    const desc = esc(m.descricao);
    troca(/(<meta name="description" content=")[^"]*(")/, desc);
    troca(/(<meta property="og:description" content=")[^"]*(")/, desc);
  }
  const url = esc(site + m.caminho);
  troca(/(<meta property="og:url" content=")[^"]*(")/, url);
  troca(/(<link rel="canonical" href=")[^"]*(")/, url);
  troca(/(<link rel="alternate" hreflang="pt-BR" href=")[^"]*(")/, url);
  troca(/(<meta name="twitter:card" content=")[^"]*(")/, 'summary_large_image');
  if (m.jsonld?.length) out = out.replace('</head>', () => m.jsonld!.map((j) => `    <script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>\n`).join('') + '  </head>');
  if (m.semIndice) out = out.replace('</head>', () => '    <meta name="robots" content="noindex" />\n  </head>');
  return out;
}
