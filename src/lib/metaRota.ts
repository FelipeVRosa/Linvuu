// Título, descrição e endereço de cada rota, para o servidor entregar o HTML já com as metatags certas
// (o WhatsApp, o Facebook e outros robôs não executam JavaScript; sem isto, todo link mostraria o texto da página inicial).
// Vale para os três idiomas do site: / (português), /en e /es.
import fs from 'node:fs';
import path from 'node:path';
import { LOCALES, Locale, caminhoEm, localeDoCaminho, semPrefixo } from '../i18n/locales.ts';
import { EMAIL_OFICIAL } from '../config/site.ts';
import { AUTORES, LIVROS_META, capituloParaHtml, livroMeta, minutosDeLeitura, tituloLivro, type CapituloLivro, type ItemSumario } from './livros.ts';

type CursoMeta = { id: string; nome: string; descricao: string; status?: string; i18n?: Record<string, { nome: string; descricao: string }> };
export type DadosMeta = {
  livros: Record<string, { sumario: ItemSumario[]; caps: Record<number, CapituloLivro> }>;
  cursos: CursoMeta[];
  indice: Record<string, { total: number; grupos?: { aula: number; titulo: string; dias: [number, number] }[]; fonte?: string; tr?: Record<string, { g: Record<string, string>; aulas?: number[] }> }>;
};
export type MetaRota = { status: number; titulo?: string; descricao?: string; caminho: string; semIndice?: boolean; jsonld?: object[]; locale?: Locale; /** idiomas em que a página existe (hreflang); padrão: os três */ em?: Locale['codigo'][] };

export function carregarDadosMeta(raiz: string): DadosMeta | null {
  try {
    const cursos = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'cursos.json'), 'utf8')).cursos;
    const indice = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'indice.json'), 'utf8')).cursos;
    // títulos traduzidos (content/indice.en.json, indice.es.json) entram no índice de cada curso
    for (const l of ['en', 'es']) {
      const f = path.join(raiz, 'content', `indice.${l}.json`);
      if (!fs.existsSync(f)) continue;
      for (const [id, t] of Object.entries(JSON.parse(fs.readFileSync(f, 'utf8')) as Record<string, { g: Record<string, string>; aulas?: number[] }>)) if (indice[id]) (indice[id].tr ??= {})[l] = t;
    }
    return { cursos, indice, livros: carregarLivros(raiz) };
  } catch {
    return null;
  }
}

/** Sumário e capítulos de amostra de cada livro (content/livros/<idioma>/). */
function carregarLivros(raiz: string): DadosMeta['livros'] {
  const out: DadosMeta['livros'] = {};
  for (const m of LIVROS_META) {
    const dir = path.join(raiz, 'content', 'livros', m.id);
    if (!fs.existsSync(dir)) continue;
    const caps: Record<number, CapituloLivro> = {};
    for (const f of fs.readdirSync(dir)) {
      const n = f.match(/^cap-(\d+)\.json$/)?.[1];
      if (n) caps[Number(n)] = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    }
    const fs0 = path.join(dir, 'sumario.json');
    out[m.id] = { sumario: fs.existsSync(fs0) ? JSON.parse(fs.readFileSync(fs0, 'utf8')) : [], caps };
  }
  return out;
}

const TX = {
  'pt-BR': {
    cursos: 'Cursos', entrar: 'Entrar', cadastro: 'Cadastre-se', assinatura: 'Assinatura', priv: 'Política de privacidade', privD: 'Quais dados a Linvuu coleta, para quê e quais são os seus direitos pela LGPD.', termos: 'Termos de uso', termosD: 'Regras de uso do site e dos cursos da Linvuu.',
    pt: 'Português para estrangeiros · Brazilian Portuguese', ptD: 'Curso de português do Brasil para estrangeiros, do A1 ao B1, com aulas explicadas em inglês ou espanhol. 62 aulas.',
    curso: (n: string) => `${n}: curso para quem fala português, do zero ao B1`, cursoJ: (n: string) => `${n} para quem fala português`, inicio: 'Início',
    aula: (a: number, t: string, n: string) => `Aula ${a}: ${t} · ${n}`, aulaD: (n: string, a: number, t: string, s: number, tot: number) => `${n}, aula ${a} (${t}), sessão ${s} de ${tot}: explicação em português, áudio em cada frase e exercícios com correção.`,
    sessao: (s: number, n: string) => `Sessão ${s} · ${n}`, gram: 'Gramática', gramC: (n: string) => `Gramática: ${n.toLowerCase()}`, gramD: (n: string) => `Gramática de ${n.toLowerCase()} explicada em português, tópico por tópico, com tabelas, exemplos e erros comuns.`, nao: 'Página não encontrada',
  },
  en: {
    cursos: 'Courses', entrar: 'Sign in', cadastro: 'Sign up', assinatura: 'Subscription', priv: 'Privacy policy', privD: 'What data Linvuu collects, why, and what your rights are.', termos: 'Terms of use', termosD: 'Rules for using the Linvuu site and courses.',
    pt: 'Brazilian Portuguese for English speakers, A1 to B1', ptD: 'Learn Brazilian Portuguese from zero to B1 in 62 lessons explained in English, with audio, dialogues, grammar and exercises.',
    curso: (n: string) => `${n} for English speakers, from zero to B1`, cursoJ: (n: string) => `${n} for English speakers`, inicio: 'Home',
    aula: (a: number, t: string, n: string) => `Lesson ${a}: ${t} · ${n}`, aulaD: (n: string, a: number, t: string, s: number, tot: number) => `${n}, lesson ${a} (${t}), session ${s} of ${tot}: explained in English, with audio for every sentence and exercises.`,
    sessao: (s: number, n: string) => `Session ${s} · ${n}`, gram: 'Grammar', gramC: (n: string) => `${n} grammar`, gramD: (n: string) => `${n} grammar explained in English, topic by topic, with tables, examples and common mistakes.`, nao: 'Page not found',
  },
  es: {
    cursos: 'Cursos', entrar: 'Entrar', cadastro: 'Regístrate', assinatura: 'Suscripción', priv: 'Política de privacidad', privD: 'Qué datos recoge Linvuu, para qué y cuáles son tus derechos.', termos: 'Términos de uso', termosD: 'Reglas de uso del sitio y de los cursos de Linvuu.',
    pt: 'Portugués de Brasil para hispanohablantes, de A1 a B1', ptD: 'Aprende portugués de Brasil de cero a B1 en 62 lecciones explicadas en español, con audio, diálogos, gramática y ejercicios.',
    curso: (n: string) => `${n} para hispanohablantes, de cero a B1`, cursoJ: (n: string) => `${n} para hispanohablantes`, inicio: 'Inicio',
    aula: (a: number, t: string, n: string) => `Lección ${a}: ${t} · ${n}`, aulaD: (n: string, a: number, t: string, s: number, tot: number) => `${n}, lección ${a} (${t}), sesión ${s} de ${tot}: explicado en español, con audio en cada frase y ejercicios.`,
    sessao: (s: number, n: string) => `Sesión ${s} · ${n}`, gram: 'Gramática', gramC: (n: string) => `Gramática: ${n.toLowerCase()}`, gramD: (n: string) => `Gramática de ${n.toLowerCase()} explicada en español, tema por tema, con tablas, ejemplos y errores frecuentes.`, nao: 'Página no encontrada',
  },
} as const;
const HOME = {
  'pt-BR': { titulo: undefined, descricao: undefined },
  en: { titulo: 'Languages explained in English', descricao: 'Learn Brazilian Portuguese, Spanish, German, French, Italian and Russian with lessons explained in English. 30-minute sessions, audio for every sentence and exercises corrected on the spot. 2 free lessons.' },
  es: { titulo: 'Idiomas explicados en español', descricao: 'Aprende portugués de Brasil, inglés, alemán, francés, italiano y ruso con lecciones explicadas en español. Sesiones de 30 minutos, audio en cada frase y ejercicios corregidos al instante. 2 lecciones gratis.' },
};

export function metaDaRota(pathname: string, d: DadosMeta | null): MetaRota {
  const loc = localeDoCaminho(pathname);
  const r = metaSemLocale(semPrefixo(pathname.replace(/\/+$/, '') || '/'), d, loc);
  return { ...r, caminho: caminhoEm(loc.codigo, r.caminho), locale: loc };
}

function metaSemLocale(p: string, d: DadosMeta | null, loc: Locale): MetaRota {
  const tx = TX[loc.codigo];
  const ex = loc.explicacao;
  if (p === '/') return { status: 200, caminho: '/', ...HOME[loc.codigo], jsonld: [organizacao()] };
  // Livros e página Sobre: só em português (nos outros idiomas a página existe, mas não entra na busca)
  const livroBase = { em: ['pt-BR'] as Locale['codigo'][], semIndice: loc.codigo !== 'pt-BR' ? true : undefined };
  if (p === '/sobre') return { status: 200, caminho: p, titulo: 'Quem escreve a Linvuu', descricao: 'A Linvuu é feita por Felipe Nascimento Rosa e Luiza Nascimento Rosa, matemáticos com experiência em linguística e ensino de idiomas. Conheça a autoria, a origem e o método.', ...livroBase, jsonld: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Quem escreve a Linvuu', url: `${SITE}/sobre`, inLanguage: 'pt-BR', mainEntity: { '@id': ORG_ID } }, organizacao(), ...AUTORES.map(pessoa)] };
  if (p === '/livros') return { status: 200, caminho: p, titulo: 'Coleção Linvuu: livros de gramática', descricao: 'Gramática prática de inglês, espanhol, alemão, francês e italiano para quem fala português, do zero ao A2. Leia os dois primeiros capítulos de cada livro, com áudio.', ...livroBase, jsonld: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Coleção Linvuu', itemListElement: LIVROS_META.map((l, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/livros/${l.id}`, name: tituloLivro(l) })) }] };
  let lm = p.match(/^\/livros\/([^/]+)$/);
  if (lm) {
    const l = livroMeta(lm[1]);
    if (!l) return naoEncontrada(p, loc);
    const url = `${SITE}/livros/${l.id}`;
    const caps = Object.values(d?.livros[l.id]?.caps ?? {}).sort((a, b) => a.n - b.n);
    return { status: 200, caminho: p, titulo: tituloLivro(l), descricao: l.descricao, ...livroBase, jsonld: [
      { '@context': 'https://schema.org', '@type': 'Book', '@id': `${url}#livro`, name: tituloLivro(l), url, inLanguage: 'pt-BR', about: l.nome, image: `${SITE}/livros/${l.id}-a1-a2-v1-900.webp`, educationalLevel: 'A1–A2 (CEFR)', author: AUTORES.map((a) => ({ '@type': 'Person', name: a.nome, url: `${SITE}/sobre#${a.id}` })), publisher: { '@id': ORG_ID }, description: l.descricao, hasPart: caps.map((c) => ({ '@type': 'Chapter', name: `Capítulo ${c.n}: ${c.titulo}`, position: c.n, url: `${url}/capitulo/${c.n}`, isAccessibleForFree: true })) },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Livros', item: `${SITE}/livros` }, { '@type': 'ListItem', position: 2, name: l.nome, item: url }] },
    ] };
  }
  lm = p.match(/^\/livros\/([^/]+)\/capitulo\/(\d+)$/);
  if (lm) {
    const l = livroMeta(lm[1]); const c = d?.livros[lm[1]]?.caps[Number(lm[2])];
    if (!l || !c) return naoEncontrada(p, loc);
    const url = `${SITE}/livros/${l.id}/capitulo/${c.n}`;
    return { status: 200, caminho: p, titulo: `Capítulo ${c.n}: ${c.titulo} · ${l.nome}`, descricao: `${l.nome}, capítulo ${c.n} do livro de gramática prática da Coleção Linvuu: ${c.titulo}. Leitura grátis, com áudio.`, ...livroBase, jsonld: [
      { '@context': 'https://schema.org', '@type': 'Chapter', name: `Capítulo ${c.n}: ${c.titulo}`, position: c.n, url, inLanguage: 'pt-BR', isAccessibleForFree: true, educationalLevel: c.nivel || undefined, timeRequired: `PT${minutosDeLeitura(c)}M`, isPartOf: { '@type': 'Book', name: tituloLivro(l), url: `${SITE}/livros/${l.id}` }, author: AUTORES.map((a) => ({ '@type': 'Person', name: a.nome, url: `${SITE}/sobre#${a.id}` })), publisher: { '@id': ORG_ID } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Livros', item: `${SITE}/livros` }, { '@type': 'ListItem', position: 2, name: l.nome, item: `${SITE}/livros/${l.id}` }, { '@type': 'ListItem', position: 3, name: `Capítulo ${c.n}`, item: url }] },
    ] };
  }
  const fixas: Record<string, { titulo: string; descricao?: string; semIndice?: boolean }> = {
    '/cursos': { titulo: tx.cursos },
    '/portugues': { titulo: tx.pt, descricao: tx.ptD },
    '/entrar': { titulo: tx.entrar, semIndice: true },
    '/cadastro': { titulo: tx.cadastro, semIndice: true },
    '/assinatura': { titulo: tx.assinatura, semIndice: true },
    '/privacidade': { titulo: tx.priv, descricao: tx.privD },
    '/termos': { titulo: tx.termos, descricao: tx.termosD },
  };
  if (fixas[p]) return { status: 200, caminho: p, ...fixas[p] };
  if (!d) return { status: 200, caminho: p }; // sem dados: entrega a página padrão, sem inventar nada
  const curso = (id: string) => { const c = d.cursos.find((x) => x.id === id); return c ? { ...c, ...(c.i18n?.[loc.codigo] ?? {}) } : undefined; };
  const tituloAula = (id: string, aula: number, original: string) => ((d.indice[id]?.fonte ?? 'pt') === ex ? original : d.indice[id]?.tr?.[ex]?.g[aula] ?? original);
  let m = p.match(/^\/curso\/([^/]+)$/);
  if (m) {
    const c = curso(m[1]);
    if (!c) return naoEncontrada(p, loc);
    const url = `${SITE}${caminhoEm(loc.codigo, p)}`;
    const aulas = d.indice[c.id]?.grupos?.length ?? 0;
    return {
      status: 200, caminho: p, titulo: tx.curso(c.nome), descricao: c.descricao,
      // o curso escrito para o próprio público deste idioma (ex.: inglês no site em inglês) não entra na busca
      semIndice: c.status === 'em-breve' || c.id === loc.cursoOculto || undefined,
      em: LOCALES.filter((l) => l.cursoOculto !== c.id).map((l) => l.codigo),
      jsonld: [
        // Dados de curso do Google (Course info): provedor, oferta (2 aulas grátis, depois assinatura) e instância online no ritmo do aluno.
        {
          '@context': 'https://schema.org', '@type': 'Course', name: tx.cursoJ(c.nome), description: c.descricao, inLanguage: loc.codigo, url,
          teaches: c.id === 'br' ? 'Brazilian Portuguese' : c.nome, educationalLevel: 'A1–B1 (CEFR)', isAccessibleForFree: false,
          ...(aulas ? { coursePrerequisites: 'None', timeRequired: `PT${aulas * 2}H` } : {}),
          provider: { '@type': 'Organization', name: 'Linvuu', sameAs: SITE },
          offers: [{ '@type': 'Offer', category: 'Subscription', price: 139, priceCurrency: 'BRL', url: `${SITE}${loc.prefixo}/assinatura` }],
          hasCourseInstance: [{ '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: 'PT30M', courseSchedule: { '@type': 'Schedule', repeatFrequency: 'Daily', repeatCount: aulas * 4 } }],
        },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: tx.inicio, item: `${SITE}${loc.prefixo || '/'}` }, { '@type': 'ListItem', position: 2, name: tx.cursos, item: `${SITE}${loc.prefixo}/cursos` }, { '@type': 'ListItem', position: 3, name: c.nome, item: url }] },
      ],
    };
  }
  m = p.match(/^\/curso\/([^/]+)\/dia\/(\d+)$/);
  if (m) {
    const c = curso(m[1]);
    const n = Number(m[2]);
    const total = d.indice[m[1]]?.total ?? 0;
    if (!c || n < 1 || n > total) return naoEncontrada(p, loc);
    const g = d.indice[m[1]].grupos?.find((x) => n >= x.dias[0] && n <= x.dias[1]);
    if (!g) return { status: 200, caminho: p, titulo: tx.sessao(n, c.nome), descricao: `${c.nome}, ${tx.sessao(n, c.nome)}.` };
    const t = tituloAula(m[1], g.aula, g.titulo);
    // A sessão só existe de verdade num idioma quando a explicação está nele: o original ou a tradução daquela aula.
    // Nos outros, a página mostra o texto original com um aviso e não entra na busca (seria conteúdo duplicado).
    const temNo = (l: Locale) => l.cursoOculto !== c.id && ((d.indice[c.id]?.fonte ?? 'pt') === l.explicacao || !!d.indice[c.id]?.tr?.[l.explicacao]?.aulas?.includes(g.aula));
    return { status: 200, caminho: p, titulo: tx.aula(g.aula, t, c.nome), descricao: tx.aulaD(c.nome, g.aula, t, n, total), semIndice: !temNo(loc) || undefined, em: LOCALES.filter(temNo).map((l) => l.codigo) };
  }
  m = p.match(/^\/gramatica(?:\/([^/]+))?$/);
  if (m) {
    if (!m[1]) return { status: 200, caminho: p, titulo: tx.gram };
    const c = curso(m[1]);
    return c ? { status: 200, caminho: p, titulo: tx.gramC(c.nome), descricao: tx.gramD(c.nome) } : naoEncontrada(p, loc);
  }
  return naoEncontrada(p, loc);
}


/**
 * Conteúdo mínimo dentro de <div id="root"> para quem não executa JavaScript (ou ainda não renderizou):
 * título, descrição e links reais. O React substitui tudo isto ao carregar, então o visitante não vê diferença.
 */
export function conteudoRota(m: MetaRota, d: DadosMeta | null, loc: Locale): string {
  if (m.status !== 200 || m.semIndice) return '';
  const tx = TX[loc.codigo];
  const a = (href: string, texto: string) => `<a href="${esc(caminhoEm(loc.codigo, href))}">${esc(texto)}</a>`;
  const li = (itens: string[]) => (itens.length ? `<ul>${itens.map((i) => `<li>${i}</li>`).join('')}</ul>` : '');
  const cabeca = (t: string, desc?: string) => `<h1>${esc(t)}</h1>${desc ? `<p>${esc(desc)}</p>` : ''}`;
  const nome = (c: CursoMeta) => ({ ...c, ...(c.i18n?.[loc.codigo] ?? {}) });
  const visiveis = (d?.cursos ?? []).filter((c) => c.status !== 'em-breve' && c.id !== loc.cursoOculto).map(nome);
  const base = semPrefixo(m.caminho);
  let corpo = '';
  if (base === '/' || base === '/cursos') {
    const home = HOME[loc.codigo];
    corpo = cabeca(home.titulo ?? 'Linvuu · Idiomas para quem fala português', m.descricao ?? home.descricao ?? 'Cursos de inglês, espanhol, alemão, francês, italiano e russo para quem fala português.') + `<h2>${esc(tx.cursos)}</h2>` + li(visiveis.map((c) => `${a(`/curso/${c.id}`, c.nome)}: ${esc(c.descricao)}`));
  } else {
    const ml = base.match(/^\/livros\/([^/]+)$/), mcl = base.match(/^\/livros\/([^/]+)\/capitulo\/(\d+)$/);
    if (base === '/livros') corpo = cabeca(m.titulo ?? '', m.descricao) + li(LIVROS_META.map((l) => `<a href="/livros/${l.id}">${esc(tituloLivro(l))}</a>`));
    else if (ml && livroMeta(ml[1])) {
      const l = livroMeta(ml[1])!; const lv = d?.livros[l.id];
      corpo = cabeca(tituloLivro(l), l.descricao) + `<p>Por ${AUTORES.map((a) => esc(a.nome)).join(' e ')}.</p><h2>Sumário</h2><ol>${(lv?.sumario ?? []).map((x) => `<li>${lv?.caps[x.n] ? `<a href="/livros/${l.id}/capitulo/${x.n}">${esc(x.titulo)}</a>` : esc(x.titulo)}</li>`).join('')}</ol>`;
    } else if (mcl && d?.livros[mcl[1]]?.caps[Number(mcl[2])]) {
      const c = d.livros[mcl[1]].caps[Number(mcl[2])];
      corpo = cabeca(`Capítulo ${c.n}: ${c.titulo}`, undefined) + `<p>${AUTORES.map((a) => esc(a.nome)).join(' e ')}</p>` + capituloParaHtml(c, livroMeta(mcl[1])?.lang ?? mcl[1]) + `<p><a href="/livros/${mcl[1]}">Voltar ao livro</a></p>`;
    }
    const mc = base.match(/^\/curso\/([^/]+)$/);
    const md = base.match(/^\/curso\/([^/]+)\/dia\/(\d+)$/);
    if (corpo) { /* livros */ } else if (mc) {
      const c = visiveis.find((x) => x.id === mc[1]);
      const grupos = d?.indice[mc[1]]?.grupos ?? [];
      const tr = d?.indice[mc[1]]?.tr?.[loc.explicacao]?.g;
      const mesmo = (d?.indice[mc[1]]?.fonte ?? 'pt') === loc.explicacao;
      corpo = cabeca(m.titulo ?? '', c?.descricao) + li(grupos.map((g) => a(`/curso/${mc[1]}/dia/${g.dias[0]}`, `${tx.aula(g.aula, mesmo ? g.titulo : tr?.[g.aula] ?? g.titulo, c?.nome ?? '').split(' · ')[0]}`)));
    } else if (md) {
      corpo = cabeca(m.titulo ?? '', m.descricao) + `<p>${a(`/curso/${md[1]}`, visiveis.find((x) => x.id === md[1])?.nome ?? md[1])}</p>`;
    } else if (m.titulo) {
      corpo = cabeca(m.titulo, m.descricao);
    }
  }
  return corpo ? `<main data-prerender>${corpo}</main>` : '';
}

const SITE = 'https://linvuu.com.br';
const ORG_ID = `${SITE}/#organizacao`;
const organizacao = () => ({ '@context': 'https://schema.org', '@type': 'Organization', '@id': ORG_ID, name: 'Linvuu', alternateName: ['Instituto Valeeva Rosa'], url: SITE, logo: `${SITE}/brand/linvuu-logo.png`, email: EMAIL_OFICIAL, founder: AUTORES.map((a) => ({ '@id': `${SITE}/sobre#${a.id}` })) });
const pessoa = (a: (typeof AUTORES)[number]) => ({ '@context': 'https://schema.org', '@type': 'Person', '@id': `${SITE}/sobre#${a.id}`, name: a.nome, url: `${SITE}/sobre#${a.id}`, worksFor: { '@id': ORG_ID }, knowsAbout: ['Matemática', 'Linguística', 'Ensino de idiomas', 'Inteligência artificial', 'Teoria dos números', 'Álgebra linear'] });
const naoEncontrada = (p: string, loc: Locale): MetaRota => ({ status: 404, caminho: p, titulo: TX[loc.codigo].nao, semIndice: true });
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function aplicarMeta(html: string, m: MetaRota, site: string, d: DadosMeta | null = null): string {
  let out = html;
  const troca = (re: RegExp, valor: string) => { out = out.replace(re, (_t, a: string, b: string) => a + valor + b); };
  const loc = m.locale ?? LOCALES[0];
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
  troca(/(<html lang=")[^"]*(")/, loc.codigo);
  troca(/(<meta property="og:locale" content=")[^"]*(")/, loc.og);
  troca(/(<meta property="og:url" content=")[^"]*(")/, url);
  troca(/(<link rel="canonical" href=")[^"]*(")/, url);
  // uma versão por idioma + x-default (português)
  const em = m.semIndice && !m.em ? [] : LOCALES.filter((l) => !m.em || m.em.includes(l.codigo));
  const alternativos = em.length > 1 ? [...em.map((l) => `<link rel="alternate" hreflang="${l.codigo}" href="${esc(site + caminhoEm(l.codigo, m.caminho))}" />`), ...(em.some((l) => l.codigo === 'pt-BR') ? [`<link rel="alternate" hreflang="x-default" href="${esc(site + caminhoEm('pt-BR', m.caminho))}" />`] : [])].join('\n    ') : '';
  out = out.replace(/<link rel="alternate" hreflang="pt-BR" href="[^"]*" \/>/, () => alternativos);
  troca(/(<meta name="twitter:card" content=")[^"]*(")/, 'summary_large_image');
  if (m.jsonld?.length) out = out.replace('</head>', () => m.jsonld!.map((j) => `    <script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>\n`).join('') + '  </head>');
  const conteudo = conteudoRota(m, d, loc);
  if (conteudo) out = out.replace('<div id="root"></div>', () => `<div id="root">${conteudo}</div>`);
  if (m.semIndice) out = out.replace('</head>', () => '    <meta name="robots" content="noindex" />\n  </head>');
  return out;
}
