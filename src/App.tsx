import React, { useEffect, useRef, useState } from 'react';

/* ---------- Mascotes: comida típica de cada idioma ---------- */
const MASCOTS: Record<string, string> = {
  ru: '/mascots/pelmeni-ru.png',
  de: '/mascots/pretzel-de.png',
  gb: '/mascots/batata-en.png',
  es: '/mascots/tomate-es.png',
  fr: '/mascots/croissant-fr.png',
  br: '/mascots/pastel-pt.png', // salve o PNG do pastel com esse nome
};

/* ---------- Bandeiras ---------- */
const FLAGS: Record<string, string> = {
  ru: '<rect width="30" height="20" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0039a6"/><rect y="13.33" width="30" height="6.67" fill="#d52b1e"/>',
  de: '<rect width="30" height="20" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#dd0000"/><rect y="13.33" width="30" height="6.67" fill="#ffce00"/>',
  es: '<rect width="30" height="20" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/>',
  fr: '<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/><rect x="20" width="10" height="20" fill="#ed2939"/>',
  br: '<rect width="30" height="20" fill="#009c3b"/><path d="M15 2 28 10 15 18 2 10Z" fill="#ffdf00"/><circle cx="15" cy="10" r="4" fill="#002776"/>',
};

const Flag: React.FC<{ id: string; size?: number }> = ({ id, size = 40 }) => {
  if (id === 'gb') {
    return (
      <svg width={size} height={Math.round(size * 0.667)} viewBox="0 0 60 40" aria-hidden="true">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="13" />
        <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="8" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={Math.round(size * 0.667)}
      viewBox="0 0 30 20"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: FLAGS[id] ?? '' }}
    />
  );
};

/* ---------- Dados ---------- */
const TARGETS = [
  { id: 'ru', label: 'Russo · Русский' },
  { id: 'de', label: 'Alemão · Deutsch' },
  { id: 'gb', label: 'Inglês · English' },
  { id: 'es', label: 'Espanhol · Español' },
  { id: 'fr', label: 'Francês · Français' },
  { id: 'br', label: 'Português · Português' },
];

const SOURCES = [
  { id: 'pt', label: 'Português' },
  { id: 'en', label: 'English' },
  { id: 'es', label: 'Español' },
  { id: 'de', label: 'Deutsch' },
  { id: 'fr', label: 'Français' },
  { id: 'ru', label: 'Русский' },
];

const LEVELS = [
  { id: 'zero', label: 'Zero absoluto' },
  { id: 'a1', label: 'Básico · A1' },
  { id: 'a2', label: 'Básico · A2' },
  { id: 'b1', label: 'Intermediário · B1' },
  { id: 'b2', label: 'Intermediário · B2' },
  { id: 'c1', label: 'Avançado · C1' },
];

type Track = { id: string; num: string; name: string; nameEm: string; desc: string; days: string; badge: string };

const TRACKS_ACTIVE: Track[] = [
  { id: 'ru', num: '01', name: 'Russo', nameEm: 'Русский', desc: 'Do alfabeto cirílico à leitura de um texto autoral. Oito módulos, trinta dias, focados em decifrar o alfabeto nos primeiros cinco dias e ler com autonomia nos últimos cinco.', days: '30 dias · 8 módulos', badge: 'No ar' },
  { id: 'de', num: '02', name: 'Alemão', nameEm: 'Deutsch', desc: 'Do zero às primeiras conversas. Casos, gêneros e a estrutura da frase alemã explicados sem decoreba — a gramática aparece onde ela serve, não antes.', days: '30 dias · 8 módulos', badge: 'No ar' },
];

const TRACKS_SOON: Track[] = [
  { id: 'gb', num: '03', name: 'Inglês', nameEm: 'English', desc: 'Da base à fluência conversacional. Foco em phrasal verbs e compreensão oral — o que falta em quase todo curso tradicional.', days: 'Em preparação', badge: 'Em breve' },
  { id: 'es', num: '04', name: 'Espanhol', nameEm: 'Español', desc: 'Da pronúncia ao subjuntivo. Español de verdade, sem sotaque de livro didático.', days: 'Em preparação', badge: 'Em breve' },
  { id: 'fr', num: '05', name: 'Francês', nameEm: 'Français', desc: 'Leitura, pronúncia e frases úteis para o mundo profissional, com foco em contexto real.', days: 'Em preparação', badge: 'Em breve' },
  { id: 'br', num: '06', name: 'Português', nameEm: 'Português', desc: 'Para estrangeiros. Da estrutura básica às expressões do dia a dia no Brasil.', days: 'Em preparação', badge: 'Em breve' },
];

const METHOD = [
  { num: '01', title: 'Vídeo-aula', text: 'Aula curta, capitulada, com saltos navegáveis. Você assiste no seu ritmo e volta ao ponto que precisa.', icon: '<rect x="2" y="5" width="20" height="14" rx="1"/><path d="M10 9l5 3-5 3z"/>' },
  { num: '02', title: 'Imersão', text: 'Texto curto no idioma, com áudio nativo e tradução sob demanda. Vocabulário destacado no contexto.', icon: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>' },
  { num: '03', title: 'Prática', text: 'Exercício com feedback imediato, XP pelo acerto e revisão espaçada do que você errou — em duas rodadas depois.', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
];

/* Painel da direita: astronomia, física, matemática e saudações */
type Cosmo = { t?: string; c?: string; img?: string };
const COSMOS: Cosmo[] = [
  { t: 'E = mc²', c: 'f big' },
  { t: 'Olá', c: 'hi' }, { t: 'Hello', c: 'hi' }, { t: 'Привет', c: 'hi' },
  { t: 'F = G·m₁m₂ / r²', c: 'f' },
  { t: 'Hallo', c: 'hi' }, { t: 'Hola', c: 'hi' }, { t: 'Bonjour', c: 'hi' },
  { t: 'T² ∝ a³', c: 'f' },
  { t: 'v = √(GM / r)', c: 'f' },
  { t: 'λ = h / p', c: 'f' },
  { t: 'e^(iπ) + 1 = 0', c: 'f big' },
  { t: '∫ f(x) dx', c: 'f' },
  { t: 'Σ', c: 'big' }, { t: 'π', c: 'big' }, { t: 'Δ', c: 'big' },
  { t: 'L = 4πR²σT⁴', c: 'f' },
  { t: 'z = Δλ / λ', c: 'f' },
  { img: '/mascots/ima-fisica.png' },
  { img: '/mascots/ampulheta-matematica.png' },
];

const phaseOf = (d = new Date()) => {
  const h = d.getHours();
  if (h >= 5 && h < 8) return 'dawn';
  if (h >= 8 && h < 17) return 'day';
  if (h >= 17 && h < 20) return 'dusk';
  return 'night';
};

const hide = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none';
};

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function App() {
  const [src, setSrc] = useState('pt');
  const [tgt, setTgt] = useState('ru');
  const [level, setLevel] = useState('b1');
  const [mascotSrc, setMascotSrc] = useState(MASCOTS.ru);
  const [swap, setSwap] = useState(false);
  const [mascotEmpty, setMascotEmpty] = useState(false);
  const revealRef = useRef<HTMLElement | null>(null);

  /* tom circadiano */
  useEffect(() => {
    const apply = () => {
      const p = phaseOf();
      const r = document.documentElement;
      r.classList.remove('mood-dawn', 'mood-day', 'mood-dusk', 'mood-night');
      r.classList.add(`mood-${p}`);
      r.dataset.mood = p;
    };
    apply();
    const id = setInterval(apply, 15 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  /* troca do mascote ao mudar "Quero aprender" */
  useEffect(() => {
    setSwap(true);
    const id = setTimeout(() => {
      setMascotEmpty(false);
      setMascotSrc(MASCOTS[tgt] ?? '');
      setSwap(false);
    }, 180);
    return () => clearTimeout(id);
  }, [tgt]);

  /* revelar ao rolar */
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Array.from(els).indexOf(entry.target);
            setTimeout(() => entry.target.classList.add('scroll-reveal-in'), (i % 5) * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById('idiomas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const trackCard = (t: Track, interactive: boolean) => {
    const body = (
      <>
        <div className="track-num">
          <span>Trilha {t.num}</span>
          <span className="track-flag">
            <Flag id={t.id} />
            {MASCOTS[t.id] && <img className="track-mascot" src={MASCOTS[t.id]} alt="" onError={hide} />}
          </span>
        </div>
        <h3 className="track-name">
          {t.name} <em>{t.nameEm}</em>
        </h3>
        <p className="track-desc">{t.desc}</p>
        <div className="track-meta">
          <span className="track-days">{t.days}</span>
          <span className="track-badge">{t.badge}</span>
        </div>
      </>
    );
    return interactive ? (
      <button key={t.id} type="button" className="track scroll-reveal" onClick={() => setTgt(t.id)}>
        {body}
      </button>
    ) : (
      <div key={t.id} className="track soon scroll-reveal">
        {body}
      </div>
    );
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-inner">
          <span className="top-tagline">Linvuu · idiomas em trilhas de 30 dias</span>
          <div className="top-right">
            <div className="lang-picker" role="group" aria-label="Idioma do site">
              {SOURCES.map((s) => (
                <a key={s.id} href="#" className={`lang-code ${s.id === 'pt' ? 'on' : ''}`} onClick={(e) => e.preventDefault()}>
                  {s.id.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="nav-bar">
        <div className="nav-inner">
          <a href="#top" className="logo" aria-label="Linvuu início" onClick={scrollTo('top')}>
            <svg className="logo-mark" viewBox="0 0 32 24" aria-hidden="true">
              <rect x="0" y="0" width="11" height="6" fill="var(--text)" />
              <rect x="0" y="9" width="22" height="6" fill="var(--text)" />
              <rect x="0" y="18" width="7" height="6" fill="var(--text)" />
            </svg>
            <span className="logo-text">Linvuu</span>
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#sobre" className="nav-item" onClick={scrollTo('sobre')}>Sobre a Linvuu</a>
            <div className="nav-item has-dropdown">
              <button type="button" className="nav-link-btn" aria-haspopup="true">
                <span>Aprenda um idioma</span>
                <svg className="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="dropdown" role="menu">
                {TRACKS_ACTIVE.concat(TRACKS_SOON).map((t) => (
                  <a
                    key={t.id}
                    href="#idiomas"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={(e) => { setTgt(t.id); scrollTo('idiomas')(e); }}
                  >
                    <span className="dropdown-flag"><Flag id={t.id} size={20} /></span>
                    <span className="dropdown-label">{t.name}</span>
                    <span className="dropdown-native">{t.nameEm}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="nav-icons">
            <a href="#idiomas" className="nav-cta" onClick={scrollTo('idiomas')}>Começar</a>
          </div>
        </div>
      </header>

      <main className="home" id="top">
        <section className="hero">
          <div className="hero-meta">
            <span>Idiomas</span>
            <span className="hero-meta-right">desde 2026 · São Paulo</span>
          </div>

          <div className="hero-grid">
            <div className="hero-visual">
              <div className={`hero-mascot ${mascotEmpty || !mascotSrc ? 'empty' : ''}`}>
                {mascotSrc && (
                  <img
                    className={swap ? 'swap' : ''}
                    src={mascotSrc}
                    alt="Mascote do idioma"
                    onError={() => setMascotEmpty(true)}
                    onLoad={() => setMascotEmpty(false)}
                    style={mascotEmpty ? { display: 'none' } : undefined}
                  />
                )}
              </div>
            </div>

            <div className="hero-main">
              <span className="hero-kicker">Trilhas de 30 dias</span>
              <h1 className="hero-h1">
                Aprenda um idioma.<br />
                Em trinta dias.<br />
                <em>Do zero à autonomia.</em>
              </h1>
              <p className="hero-sub">
                Russo, alemão, inglês, espanhol, francês, português. Cada idioma em sua própria trilha de 30 dias — vídeo-aula, imersão, prática com feedback.
              </p>

              <form className="hero-search" onSubmit={onSearch}>
                <div className="search-field">
                  <label htmlFor="src-lang">Idioma de origem</label>
                  <select id="src-lang" value={src} onChange={(e) => setSrc(e.target.value)}>
                    {SOURCES.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                  </select>
                </div>
                <div className="search-field">
                  <label htmlFor="tgt-lang">Quero aprender</label>
                  <select id="tgt-lang" value={tgt} onChange={(e) => setTgt(e.target.value)}>
                    {TARGETS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                  </select>
                </div>
                <div className="search-field">
                  <label htmlFor="level">Meu nível</label>
                  <select id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                    {LEVELS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                  </select>
                </div>
                <button type="submit" className="search-btn" aria-label="Buscar trilha">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                  <span>Buscar</span>
                </button>
              </form>
            </div>

            <div className="hero-cosmos" aria-hidden="true">
              {COSMOS.map((x, i) =>
                x.img ? (
                  <img key={i} src={x.img} alt="" onError={hide} />
                ) : (
                  <span key={i} className={`chip ${x.c}`}>{x.t}</span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="section scroll-reveal" id="idiomas">
          <div className="section-head">
            <span className="section-kicker">Trilhas vivas</span>
            <h2 className="section-h2">Seis idiomas. <em>Seis trilhas.</em></h2>
            <p className="section-sub">
              Cada idioma em sua própria jornada de trinta dias — do alfabeto à leitura autônoma.
            </p>
          </div>
          <div className="track-grid">{TRACKS_ACTIVE.map((t) => trackCard(t, true))}</div>
        </section>

        <section className="section scroll-reveal" style={{ paddingTop: 0 }} id="idiomas-em-breve">
          <div className="section-head">
            <span className="section-kicker">Em preparação</span>
            <h2 className="section-h2">Próximos idiomas</h2>
            <p className="section-sub">
              A mesma estrutura de trilha — trinta dias, três camadas por dia. O que muda é o idioma e o texto de imersão.
            </p>
          </div>
          <div className="track-grid">{TRACKS_SOON.map((t) => trackCard(t, false))}</div>
        </section>

        <section className="section scroll-reveal" style={{ paddingTop: 0 }} id="sobre" ref={revealRef}>
          <div className="section-head">
            <span className="section-kicker">Sobre a Linvuu</span>
            <h2 className="section-h2">Três camadas, <em>um dia</em></h2>
            <p className="section-sub">
              Toda trilha obedece à mesma estrutura diária. Assistir, ler, fazer. Sem aula longa, sem teoria solta.
            </p>
          </div>
          <div className="method-grid">
            {METHOD.map((m) => (
              <div key={m.num} className="method scroll-reveal">
                <span className="method-num">{m.num}</span>
                <h3 className="method-h3">{m.title}</h3>
                <p>{m.text}</p>
                <span className="method-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" dangerouslySetInnerHTML={{ __html: m.icon }} />
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-inner">
          <span className="foot-copy">
            <strong>LINVUU</strong> · APRENDIZADO EM TRILHAS<br />
            SÃO PAULO · 2026
          </span>
          <nav className="foot-links">
            <a href="#idiomas" onClick={scrollTo('idiomas')}>Idiomas</a>
            <a href="#sobre" onClick={scrollTo('sobre')}>Sobre</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
