import { useState } from 'react';
import HomeBrasileiros from './HomeBrasileiros';
import { Link } from 'react-router-dom';
import { COMUNIDADE } from '../lib/comunidade';
import { CURSOS_ATIVOS, IDIOMAS_GRAMATICA, statusDoCurso } from '../lib/content';
import { LOCALE } from '../i18n';
import { falar } from '../lib/audio';
import { CursoCard } from '../components/CursoCard';
import { Faq } from '../components/Faq';
import { Vitrine } from '../components/Vitrine';
import { Avaliacoes } from '../components/Avaliacoes';
import { Traco } from '../components/Traco';
import { DEPOIMENTOS } from '../config/equipe';
import { CARTA } from '../config/carta';
import { LIVROS } from '../config/livros';
import { ROTULO_BLOCO } from '../lib/aulas';
import { usePageTitle } from '../lib/usePageTitle';
import { useRetomadaGeral } from '../lib/retomar';
import { useT } from '../i18n';
import { JsonLd } from '../components/JsonLd';
import { SITE_URL, EMAIL_OFICIAL } from '../config/site';
import { REDES } from '../config/social';
import { COMECAR } from '../lib/comecar';

// Frase de amostra de cada curso: a mesma situação (pedir um café) em cada idioma.
const AMOSTRA: Record<string, { frase: string; lang: string }> = {
  en: { frase: 'Hello. A coffee, please.', lang: 'en' },
  ru: { frase: 'Здравствуйте. Мне кофе, пожалуйста.', lang: 'ru' },
  de: { frase: 'Guten Tag. Einen Kaffee, bitte.', lang: 'de' },
  es: { frase: 'Hola. Un café, por favor.', lang: 'es' },
  it: { frase: 'Buongiorno. Un caffè, per favore.', lang: 'it' },
  fr: { frase: 'Bonjour. Un café, s’il vous plaît.', lang: 'fr' },
  br: { frase: 'Oi, bom dia. Um café, por favor.', lang: 'pt-BR' },
};
// A vitrine já vem na ordem pensada para cada público (src/i18n/locales.ts): o primeiro abre selecionado.
const NO_AR = CURSOS_ATIVOS.filter((c) => AMOSTRA[c.id] && (statusDoCurso(c.id)?.publicadas ?? 0) > 0);
const PADRAO = NO_AR[0]?.id;
const FOTOS = ['/fotos/comece.jpg', '/fotos/imersao.jpg', '/fotos/pratica.jpg'];

export default function Home() {
  return LOCALE.codigo === 'pt-BR' ? <HomeBrasileiros /> : <HomeOriginal />;
}

function HomeOriginal() {
  usePageTitle();
  const t = useT();
  const retomada = useRetomadaGeral();
  const [lang, setLang] = useState(PADRAO);
  const [tocando, setTocando] = useState(false);
  const amostra = lang ? AMOSTRA[lang] : undefined;
  const sessao = lang ? statusDoCurso(lang)?.amostra : undefined;
  const aulasNoAr = NO_AR.map((c) => `${c.nome} (${Math.floor((statusDoCurso(c.id)?.publicadas ?? 0) / 4)})`).join(', ');

  const comecar = COMECAR[LOCALE.codigo as 'pt-BR' | 'en' | 'es'] ?? COMECAR['pt-BR'];
  const destinos = { cursos: '/cursos', gramatica: `/gramatica/${CURSOS_ATIVOS.find((c) => IDIOMAS_GRAMATICA.includes(c.id))?.id ?? 'en'}`, livros: '/livros', duvidas: '/#faq' };

  const ouvir = async () => {
    if (!lang || !amostra) return;
    setTocando(true);
    try { await falar(amostra.frase, lang); } finally { setTocando(false); }
  };

  return (
    <>
      {retomada && (
        <section className="lv-retomar" aria-label={t.cursoPagina.retomarKicker(retomada.nome)}>
          <div className="lv-retomar-in">
            <div>
              <p className="lv-retomar-kicker">{t.cursoPagina.retomarKicker(retomada.nome)}</p>
              <p className="lv-retomar-titulo">{t.cursoPagina.sessaoTitulo(retomada.dia, retomada.titulo)}</p>
              <p className="lv-retomar-prog">{t.cursoPagina.feitas(retomada.feitos, retomada.total)}</p>
            </div>
            <Link to={`/curso/${retomada.idioma}/dia/${retomada.dia}`} className="btn btn-primary">{t.cursoPagina.continuarBtn}</Link>
          </div>
        </section>
      )}
      <section className="lv-hero">
        <div className="lv-hero-in">
          <div className="lv-hero-main">
            <p className="lv-kicker">{t.hero.kicker}</p>
            <h1>{t.hero.titulo}</h1>
            <p className="lv-hero-sub">{t.hero.sub}</p>
            <div className="lv-hero-botoes">
              <Link to={lang ? `/curso/${lang}/dia/1` : '/cursos'} className="btn btn-primary">{t.hero.botao}</Link>
              <Link to="/cursos" className="lv-link-claro">{t.hero.verCursos}</Link>
            </div>
            <p className="lv-hero-nota">{t.hero.nota(aulasNoAr)}</p>
          </div>

          {amostra && sessao && lang && (
            <aside className="lv-amostra" aria-label={t.hero.amostraRotulo}>
              <div className="lv-abas" role="tablist" aria-label={t.hero.amostraAbas}>
                {NO_AR.map((c) => (
                  <button key={c.id} type="button" role="tab" aria-selected={lang === c.id} className={lang === c.id ? 'on' : ''} onClick={() => setLang(c.id)}>{c.nome}</button>
                ))}
              </div>
              <p className="lv-am-pt" lang={LOCALE.codigo}>{t.hero.amostraFrase}</p>
              <div className="lv-am-alvo">
                <p lang={amostra.lang}>{amostra.frase}</p>
                <button type="button" className={`lv-play${tocando ? ' tocando' : ''}`} aria-label={`${t.hero.ouvir}: ${amostra.frase}`} onClick={ouvir}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" /></svg>
                </button>
              </div>
              <p className="lv-am-meta">{t.hero.amostraMeta(sessao.min)}</p>
              <ol className="lv-am-lista">
                {[...sessao.blocos.filter(([tipo]) => tipo !== 'revisao'), ...sessao.blocos.filter(([tipo]) => tipo === 'revisao')].map(([tipo, min], i) => (
                  <li key={i}><span>{ROTULO_BLOCO[tipo as keyof typeof ROTULO_BLOCO]}</span><small>{min} min</small></li>
                ))}
              </ol>
              <Traco valor={0.12} altura={12} semente={7} trilha rotulo={t.hero.inicioCaminho} />
            </aside>
          )}
        </div>
      </section>

      <section className="lv-prova" aria-label={t.provaRotulo}>
        <ul>
          {t.prova.map((x) => <li key={x.t}><strong>{x.t}</strong><span>{x.d}</span></li>)}
        </ul>
      </section>

      <section className="lv-sec" id="como-comecar" aria-labelledby="h-comecar">
        <p className="lv-kicker lv-kicker-esc">{comecar.kicker}</p>
        <h2 id="h-comecar">{comecar.titulo}</h2>
        <p className="lv-sec-sub">{comecar.lead}</p>
        <ol className="lv-passos lv-passos-4">
          {comecar.passos.map((m) => (
            <li key={m.n}><span className="lv-num" aria-hidden="true">{m.n}</span><h3>{m.t}</h3><p>{m.d}</p></li>
          ))}
        </ol>
        <h3 className="lv-mapa-t">{comecar.mapaTitulo}</h3>
        <ul className="lv-mapa">
          {comecar.mapa.filter((x) => !x.soPt || LOCALE.codigo === 'pt-BR').map((x) => (
            <li key={x.id}>
              <Link to={destinos[x.id]}><strong>{x.t}</strong><span>{x.d}</span></Link>
            </li>
          ))}
        </ul>
        <p className="lv-dica">{comecar.dica}</p>
      </section>

      <section className="lv-sec" id="cursos" aria-labelledby="h-cursos">
        <p className="lv-kicker lv-kicker-esc">{t.explorar.kicker}</p>
        <h2 id="h-cursos">{t.explorar.titulo}</h2>
        <p className="lv-sec-sub">{t.explorar.idiomasTexto}</p>
        <div className="lv-grade">{CURSOS_ATIVOS.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
      </section>

      <section className="lv-sec" id="metodo" aria-labelledby="h-metodo">
        <p className="lv-kicker lv-kicker-esc">{t.metodo.kicker}</p>
        <h2 id="h-metodo">{t.metodo.titulo} {t.metodo.destaque}</h2>
        <p className="lv-sec-sub">{t.metodo.sub}</p>
        <div className="lv-fotos">
          {FOTOS.map((src, i) => <img key={src} src={src} alt={t.metodo.fotos[i]} width="1000" height="750" loading="lazy" decoding="async" />)}
        </div>
        <div className="lv-passos">
          {t.metodo.passos.map((m) => (
            <div key={m.n}><span className="lv-num">{m.n}</span><h3>{m.t}</h3><p>{m.d}</p></div>
          ))}
        </div>
      </section>

      {LOCALE.codigo === 'pt-BR' && (
        <section className="lv-sec" id="comunidade" aria-labelledby="h-comunidade">
          <p className="lv-kicker lv-kicker-esc">{COMUNIDADE.kicker}</p>
          <h2 id="h-comunidade">{COMUNIDADE.titulo}</h2>
          <p className="lv-sec-sub">{COMUNIDADE.lead}</p>
          <div className="lv-passos">
            {COMUNIDADE.itens.map((m) => (
              <div key={m.n}><span className="lv-num" aria-hidden="true">{m.n}</span><h3>{m.t}</h3><p>{m.d}</p></div>
            ))}
          </div>
          <p className="lv-dica">{COMUNIDADE.premium}</p>
          <div className="lv-hero-botoes"><Link to="/contato" className="btn btn-primary">{COMUNIDADE.botao}</Link></div>
        </section>
      )}

      {CARTA.paragrafos.length > 0 && CARTA.assinatura && (
        <section className="lv-sec" aria-labelledby="h-carta">
          <p className="lv-kicker lv-kicker-esc">{t.carta.kicker}</p>
          <h2 id="h-carta" className="sr-only">{t.carta.titulo}</h2>
          <div className="lv-carta">{CARTA.paragrafos.map((p, i) => <p key={i}>{p}</p>)}<p className="lv-carta-ass">{CARTA.assinatura}</p></div>
        </section>
      )}

      {DEPOIMENTOS.length > 0 && (
        <section className="lv-sec" id="avaliacoes" aria-labelledby="h-aval">
          <p className="lv-kicker lv-kicker-esc">{t.avaliacoes.kicker}</p>
          <h2 id="h-aval">{t.avaliacoes.titulo}</h2>
          <Avaliacoes />
        </section>
      )}

      {LIVROS.length > 0 && (
        <section className="lv-sec lv-sec-papel" id="livros" aria-labelledby="h-livros">
          <p className="lv-kicker lv-kicker-esc">{t.livros.kicker}</p>
          <h2 id="h-livros">{t.livros.titulo}</h2>
          <Vitrine />
        </section>
      )}

      <section className="lv-sec" id="portugues" aria-labelledby="h-pt-est">
        <p className="lv-kicker lv-kicker-esc">{t.portuguesHome.kicker}</p>
        <h2 id="h-pt-est">{t.portuguesHome.titulo}</h2>
        <p className="lv-sec-sub">{t.portuguesHome.texto}</p>
        <div className="lv-hero-botoes">
          <Link to="/portugues" className="btn btn-primary">{t.portuguesHome.botao}</Link>
          {LOCALE.codigo === 'pt-BR'
            ? <a href="/en/portugues" hrefLang="en" className="btn btn-ghost">{t.portuguesHome.botao2}</a>
            : <Link to="/curso/br/dia/1" className="btn btn-ghost">{t.portuguesHome.botao2}</Link>}
        </div>
      </section>

      <section className="lv-sec lv-sec-papel" id="faq" aria-labelledby="h-faq">
        <p className="lv-kicker lv-kicker-esc">{t.faq.kicker}</p>
        <h2 id="h-faq">{t.faq.titulo}</h2>
        <Faq />
      </section>

      <section className="lv-cta">
        <h2>{t.cta.titulo}</h2>
        <p>{t.cta.texto}</p>
        <div className="lv-hero-botoes">
          <Link to={lang ? `/curso/${lang}/dia/1` : '/cursos'} className="btn btn-claro">{t.cta.primario}</Link>
          <Link to="/cursos" className="lv-link-claro">{t.cta.secundario} →</Link>
        </div>
      </section>

      <JsonLd dados={{
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'EducationalOrganization', name: 'Linvuu', url: SITE_URL, logo: `${SITE_URL}/brand/linvuu-logo.png`, email: EMAIL_OFICIAL, sameAs: REDES.filter((r) => r.url).map((r) => r.url) },
          { '@type': 'WebSite', name: 'Linvuu', url: SITE_URL, inLanguage: LOCALE.codigo },
          { '@type': 'FAQPage', mainEntity: t.faqItens.map((i) => ({ '@type': 'Question', name: i.p, acceptedAnswer: { '@type': 'Answer', text: i.r } })) },
        ],
      }} />
    </>
  );
}
