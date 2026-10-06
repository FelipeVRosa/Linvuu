import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CURSOS, NIVEL_LABEL, statusDoCurso } from '../lib/content';
import { TrilhaIdioma } from '../components/TrilhaIdioma';
import { CursoCard } from '../components/CursoCard';
import { Faq } from '../components/Faq';
import { Vitrine } from '../components/Vitrine';
import { Avaliacoes } from '../components/Avaliacoes';
import { IconeIdiomas, IconeStem } from '../components/Icones';
import { EQUIPE } from '../config/equipe';
import aula1 from '../../content/idiomas/ru/aulas/aula-001.json';
import { ROTULO_BLOCO } from '../lib/aulas';
import { usePageTitle } from '../lib/usePageTitle';
import { useT } from '../i18n';
import { JsonLd } from '../components/JsonLd';
import { SITE_URL, EMAIL_OFICIAL } from '../config/site';
import { REDES } from '../config/social';

const IDIOMAS = CURSOS.filter((c) => c.area === 'idiomas');
const STEM = CURSOS.filter((c) => c.area === 'stem');
const NIVEIS = ['zero', 'a1', 'a2', 'b1', 'b2', 'c1'];
const rotulo = (nome: string, nativo: string) => (nome === nativo ? nome : `${nome} · ${nativo}`);


type Filtro = 'todos' | 'idiomas' | 'stem';

export default function Home() {
  usePageTitle();
  const t = useT();
  const nav = useNavigate();
  const [tgt, setTgt] = useState('ru');
  const [nivel, setNivel] = useState('zero');
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const ehStem = STEM.some((c) => c.id === tgt);

  const buscar = (e: FormEvent) => { e.preventDefault(); nav(ehStem ? `/curso/${tgt}` : `/curso/${tgt}?nivel=${nivel}`); };
  const visiveis = CURSOS.filter((c) => filtro === 'todos' || c.area === filtro);

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-main">
            <span className="hero-kicker">{t.hero.kicker}</span>
            <h1 className="hero-h1">{t.hero.titulo}</h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <form className="hero-search" onSubmit={buscar}>
              <div className="search-field">
                <label htmlFor="tgt-lang">{t.hero.labelIdioma}</label>
                <select id="tgt-lang" value={tgt} onChange={(e) => setTgt(e.target.value)}>
                  <optgroup label="Idiomas">
                    {IDIOMAS.map((c) => <option key={c.id} value={c.id}>{rotulo(c.nome, c.nomeNativo)}</option>)}
                  </optgroup>
                  <optgroup label="STEM">
                    {STEM.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
                  </optgroup>
                </select>
              </div>
              <div className="search-field">
                <label htmlFor="level">{t.hero.labelNivel}</label>
                <select id="level" value={ehStem ? 'stem' : nivel} disabled={ehStem} onChange={(e) => setNivel(e.target.value)}>
                  {ehStem
                    ? <option value="stem">Em breve para STEM</option>
                    : NIVEIS.map((n) => <option key={n} value={n}>{NIVEL_LABEL[n]}</option>)}
                </select>
              </div>
              <button type="submit" className="search-btn">{t.hero.botao}</button>
            </form>
            <p className="hero-nota">{t.hero.nota.replace('{ru}', String(Math.floor((statusDoCurso('ru')?.publicadas ?? 0) / 4))).replace('{de}', String(Math.floor((statusDoCurso('de')?.publicadas ?? 0) / 4)))}</p>
          </div>

          <aside className="hoje" aria-label="Exemplo de uma sessão">
            <span className="hoje-kicker">Russo · aula 1, sessão 1 de 4</span>
            <h2>{aula1.sessoes[0].titulo}</h2>
            <p>{aula1.titulo}: {aula1.objetivo.charAt(0).toLowerCase() + aula1.objetivo.slice(1)}</p>
            <ol>
              {aula1.sessoes[0].blocos.map((b, i) => (
                <li key={i}><span>{String(i + 1).padStart(2, '0')}</span> {ROTULO_BLOCO[b.tipo as keyof typeof ROTULO_BLOCO]}<small>{b.min} min</small></li>
              ))}
            </ol>
            <span className="hoje-meta">{aula1.sessoes[0].duracaoMin} minutos</span>
          </aside>
        </div>
      </section>

      <section className="prova" aria-label="Por que a Linvuu">
        <ul className="prova-grade">
          {t.prova.map((x) => <li key={x.t}><strong>{x.t}</strong><span>{x.d}</span></li>)}
        </ul>
      </section>

      <div className="band">
        <section className="section" aria-labelledby="h-explorar">
          <div className="section-head">
            <span className="section-kicker">{t.explorar.kicker}</span>
            <h2 className="section-h2" id="h-explorar">{t.explorar.titulo}</h2>
          </div>
          <div className="areas">
            <Link to="/cursos?area=idiomas" className="area-card area-idiomas">
              <span className="area-icone"><IconeIdiomas size={30} /></span>
              <h3>Idiomas</h3>
              <p>{t.explorar.idiomasTexto}</p>
              <span className="area-ver">Ver idiomas →</span>
            </Link>
            <Link to="/cursos?area=stem" className="area-card area-stem">
              <span className="area-icone"><IconeStem size={30} /></span>
              <h3>STEM</h3>
              <p>{t.explorar.stemTexto}</p>
              <span className="area-ver">Ver STEM →</span>
            </Link>
          </div>

          <div className="chips" role="group" aria-label="Filtrar cursos">
            {(['todos', 'idiomas', 'stem'] as Filtro[]).map((f) => (
              <button key={f} type="button" className={filtro === f ? 'on' : ''} aria-pressed={filtro === f} onClick={() => setFiltro(f)}>
                {f === 'idiomas' && <IconeIdiomas size={16} />}{f === 'stem' && <IconeStem size={16} />}
                {f === 'todos' ? 'Todos' : f === 'idiomas' ? 'Idiomas' : 'STEM'}
              </button>
            ))}
          </div>
          <div className="curso-grid">{visiveis.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
        </section>
      </div>

      <div className="band band-cinza">
        <section className="section" aria-labelledby="h-100">
          <div className="section-head">
            <span className="section-kicker">{t.trilha.kicker}</span>
            <h2 className="section-h2" id="h-100">{t.trilha.titulo}</h2>
            <p className="section-sub">{t.trilha.sub}</p>
          </div>
          <TrilhaIdioma />
        </section>
      </div>

      <div className="band" id="metodo">
        <section className="section" aria-labelledby="h-metodo">
          <div className="section-head">
            <span className="section-kicker">{t.metodo.kicker}</span>
            <h2 className="section-h2" id="h-metodo">{t.metodo.titulo} <em>{t.metodo.destaque}</em></h2>
            <p className="section-sub">{t.metodo.sub}</p>
          </div>
          <div className="method-grid">
            {t.metodo.passos.map((m) => (
              <div key={m.n} className="method"><span className="method-num">{m.n}</span><h3 className="method-h3">{m.t}</h3><p>{m.d}</p></div>
            ))}
          </div>
        </section>
      </div>

      <div className="band band-quente" id="livros">
        <section className="section" aria-labelledby="h-livros">
          <div className="section-head">
            <span className="section-kicker">{t.livros.kicker}</span>
            <h2 className="section-h2" id="h-livros">{t.livros.titulo}</h2>
          </div>
          <Vitrine />
        </section>
      </div>

      <div className="band" id="avaliacoes">
        <section className="section" aria-labelledby="h-aval">
          <div className="section-head">
            <span className="section-kicker">{t.avaliacoes.kicker}</span>
            <h2 className="section-h2" id="h-aval">{t.avaliacoes.titulo}</h2>
          </div>
          <Avaliacoes />
        </section>
      </div>

      {EQUIPE.length > 0 && (
        <div className="band band-cinza">
          <section className="section" aria-labelledby="h-equipe">
            <div className="section-head"><span className="section-kicker">Pessoas</span><h2 className="section-h2" id="h-equipe">Quem ensina</h2></div>
            <div className="pessoas">
              {EQUIPE.map((p) => (
                <article key={p.nome} className="pessoa">
                  {p.foto && <img src={p.foto} alt={`Foto de ${p.nome}`} loading="lazy" />}
                  <h3>{p.nome}</h3><span>{p.papel}</span><p>{p.bio}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      <div className="band band-cinza" id="faq">
        <section className="section" aria-labelledby="h-faq">
          <div className="section-head"><span className="section-kicker">{t.faq.kicker}</span><h2 className="section-h2" id="h-faq">{t.faq.titulo}</h2></div>
          <Faq />
        </section>
      </div>

      <section className="cta-band">
        <h2>{t.cta.titulo}</h2>
        <p>{t.cta.texto}</p>
        <div className="cta-botoes">
          <Link to="/curso/ru/dia/1" className="btn btn-primary">{t.cta.primario}</Link>
          <Link to="/cursos" className="btn btn-claro">{t.cta.secundario}</Link>
        </div>
      </section>

      <JsonLd dados={{
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Organization', name: 'Linvuu', url: SITE_URL, logo: `${SITE_URL}/brand/linvuu-logo.png`, email: EMAIL_OFICIAL, sameAs: REDES.filter((r) => r.url).map((r) => r.url) },
          { '@type': 'WebSite', name: 'Linvuu', url: SITE_URL, inLanguage: 'pt-BR' },
          { '@type': 'FAQPage', mainEntity: t.faqItens.map((i) => ({ '@type': 'Question', name: i.p, acceptedAnswer: { '@type': 'Answer', text: i.r } })) },
        ],
      }} />
    </>
  );
}
