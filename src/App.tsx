import React, { useEffect, useState } from 'react';

export default function App() {
  const [linState, setLinState] = useState<'idle' | 'thinking' | 'happy' | 'sad' | 'celebrate'>('idle');
  const [currentMood, setCurrentMood] = useState('day');

  useEffect(() => {
    const updateMood = () => {
      const hour = new Date().getHours();
      let mood = 'day';
      if (hour >= 5 && hour < 8) mood = 'dawn';
      else if (hour >= 8 && hour < 17) mood = 'day';
      else if (hour >= 17 && hour < 20) mood = 'dusk';
      else mood = 'night';
      setCurrentMood(mood);
    };

    updateMood();
    const interval = setInterval(updateMood, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('mood-dawn', 'mood-day', 'mood-dusk', 'mood-night');
    document.documentElement.classList.add(`mood-${currentMood}`);
    document.documentElement.dataset.mood = currentMood;
  }, [currentMood]);

  const TRACKS_ACTIVE = [
    {
      id: 'ru',
      num: '01',
      name: 'Russo',
      nameEm: 'Русский',
      desc: 'Do alfabeto cirílico à leitura de um texto autoral. Oito módulos, trinta dias, focados em decifrar o alfabeto nos primeiros cinco dias e ler com autonomia nos últimos cinco.',
      days: '30 dias · 8 módulos',
      badge: 'No ar',
      flag: '🇷🇺',
    },
    {
      id: 'de',
      num: '02',
      name: 'Alemão',
      nameEm: 'Deutsch',
      desc: 'Do zero às primeiras conversas. Casos, gêneros e a estrutura da frase alemã explicados sem decoreba — a gramática aparece onde ela serve, não antes.',
      days: '30 dias · 8 módulos',
      badge: 'No ar',
      flag: '🇩🇪',
    },
    {
      id: 'gb',
      num: '03',
      name: 'Inglês',
      nameEm: 'English',
      desc: 'Da base à fluência conversacional. Foco em phrasal verbs e compreensão oral — o que falta em quase todo curso tradicional.',
      days: '30 dias · 8 módulos',
      badge: 'Em breve',
      flag: '🇬🇧',
    },
    {
      id: 'es',
      num: '04',
      name: 'Espanhol',
      nameEm: 'Español',
      desc: 'Da pronúncia ao subjuntivo. Español de verdade, sem sotaque de livro didático.',
      days: '30 dias · 8 módulos',
      badge: 'Em breve',
      flag: '🇪🇸',
    },
    {
      id: 'br',
      num: '05',
      name: 'Português',
      nameEm: 'Português',
      desc: 'Para estrangeiros. Da estrutura básica às expressões do dia a dia no Brasil.',
      days: '30 dias · 8 módulos',
      badge: 'Em breve',
      flag: '🇧🇷',
    },
  ];

  const TRACKS_SOON = [
    {
      id: 'fr',
      num: '06',
      name: 'Francês',
      nameEm: 'Français',
      desc: 'Leitura, pronúncia e frases úteis para o mundo profissional, com foco em contexto real.',
      days: 'Em preparação',
      badge: 'Em breve',
      flag: '🇫🇷',
    },
    {
      id: 'it',
      num: '07',
      name: 'Italiano',
      nameEm: 'Italiano',
      desc: 'Melodia, clareza e expressão prática para viagem, estudo e trabalho.',
      days: 'Em preparação',
      badge: 'Em breve',
      flag: '🇮🇹',
    },
  ];

  const FEATURES = [
    {
      title: 'Microaprendizagem',
      text: 'Cada dia entrega uma unidade clara, sem excesso de teoria e com prática imediata.',
      icon: '⏱️',
    },
    {
      title: 'Fixação real',
      text: 'Revisão espaçada, feedback imediato e reforço de pontos que você errou.',
      icon: '🧠',
    },
    {
      title: 'Conteúdo nativo',
      text: 'Textos e áudios autênticos para você entrar em contato com a língua em uso.',
      icon: '🎧',
    },
  ];

  const linSVG = (state: string) => {
    const dark = 'var(--text)';
    const accent = 'var(--accent)';
    const white = '#ffffff';
    const shadow = 'rgba(0,0,0,.08)';

    const eyes: Record<string, string> = {
      idle: `
        <ellipse cx="38" cy="42" rx="6.5" ry="7.5" fill="${white}"/>
        <ellipse cx="62" cy="42" rx="6.5" ry="7.5" fill="${white}"/>
        <circle cx="39" cy="43" r="3.2" fill="${dark}"/>
        <circle cx="63" cy="43" r="3.2" fill="${dark}"/>
        <circle cx="40.5" cy="41.5" r="1.1" fill="${white}"/>
        <circle cx="64.5" cy="41.5" r="1.1" fill="${white}"/>
      `,
      happy: `
        <path d="M32 44 Q38 36 44 44" stroke="${dark}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path d="M56 44 Q62 36 68 44" stroke="${dark}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      `,
      thinking: `
        <path d="M33 44 Q38 39 43 44" stroke="${dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M57 44 Q62 39 67 44" stroke="${dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="48" cy="47" r="2.5" fill="${accent}" opacity="0.8"/>
      `,
    };

    const mouths: Record<string, string> = {
      idle: `<path d="M44 56 Q50 61 56 56" stroke="${dark}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
      happy: `<path d="M42 54 Q50 64 58 54" stroke="${dark}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
      thinking: `<path d="M44 58 Q50 52 56 58" stroke="${dark}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      celebrate: `<path d="M42 57 Q50 68 58 57" stroke="${dark}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`,
      sad: `<path d="M44 60 Q50 54 56 60" stroke="${dark}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    };

    return `<svg width="200" height="200" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <ellipse cx="50" cy="92" rx="22" ry="3" fill="${shadow}"/>
      <ellipse cx="38" cy="86" rx="7" ry="4" fill="${dark}"/>
      <ellipse cx="62" cy="86" rx="7" ry="4" fill="${dark}"/>
      <path d="M50 22 C 72 22, 82 45, 82 62 C 82 78, 68 88, 50 88 C 32 88, 18 78, 18 62 C 18 45, 28 22, 50 22 Z" fill="${dark}"/>
      <ellipse cx="50" cy="68" rx="19" ry="14" fill="${accent}"/>
      ${eyes[state] || eyes.idle}
      ${mouths[state] || mouths.idle}
    </svg>`;
  };

  return (
    <div className="home">
      <header className="nav-bar">
        <div className="nav-inner">
          <a href="#top" className="logo" aria-label="Linvuu home">
            <svg className="logo-mark" viewBox="0 0 32 24" aria-hidden="true">
              <rect x="0" y="0" width="11" height="6" fill="var(--text)" />
              <rect x="0" y="9" width="22" height="6" fill="var(--text)" />
              <rect x="0" y="18" width="7" height="6" fill="var(--text)" />
            </svg>
            <span className="logo-text">Linvuu</span>
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#idiomas">Idiomas</a>
            <a href="#stem">STEM</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <a href="#idiomas" className="nav-cta">Começar</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-meta">
            <span>Idiomas &amp; STEM</span>
            <span className="hero-meta-right">desde 2026 · São Paulo</span>
          </div>
          <span className="hero-kicker">Trilhas de aprendizado</span>
          <h1 className="hero-h1">
            Uma trilha por vez.<br />
            Trinta dias por trilha.<br />
            Um idioma — ou uma ciência —<br />
            <em>para a vida.</em>
          </h1>
          <p className="hero-sub">
            Cada dia é uma camada. Cada semana, um módulo. Cada trilha, do zero ao domínio real — sem promessa de fluência em uma semana.
          </p>
          <p className="hero-desc">
            Russo, alemão, inglês, espanhol, português. Matemática, física. Cada matéria em sua própria trilha de trinta dias: vídeo-aula curta, imersão em texto nativo, prática com feedback e revisão espaçada.
          </p>
          <div className="hero-cta">
            <a href="#idiomas" className="btn btn-primary">Ver trilhas</a>
            <a href="#como-funciona" className="btn btn-ghost">Como funciona</a>
          </div>

          <div className="hero-stats" aria-label="Estatísticas do método Linvuu">
            <div className="stat-box">
              <strong>30 dias</strong>
              <span>por trilha</span>
            </div>
            <div className="stat-box">
              <strong>3 camadas</strong>
              <span>por dia</span>
            </div>
            <div className="stat-box">
              <strong>15 min</strong>
              <span>de prática</span>
            </div>
          </div>
        </section>

        <section className="section" id="idiomas">
          <div className="section-head">
            <span className="section-kicker">Trilhas vivas</span>
            <h2 className="section-h2">
              Cinco idiomas. <em>Cinco trilhas.</em>
            </h2>
            <p className="section-sub">
              Russo, alemão, inglês, espanhol e português. Cada idioma em sua própria jornada de trinta dias — do alfabeto à leitura autônoma.
            </p>
          </div>
          <div className="track-grid">
            {TRACKS_ACTIVE.map((track) => (
              <button
                key={track.id}
                type="button"
                className="track"
                onClick={() => setLinState('happy')}
                aria-label={`Selecionar trilha ${track.name}`}
              >
                <div className="track-num">
                  <span>Trilha {track.num}</span>
                  <span className="track-flag">{track.flag}</span>
                </div>
                <h3 className="track-name">
                  {track.name} <em>{track.nameEm}</em>
                </h3>
                <p className="track-desc">{track.desc}</p>
                <div className="track-meta">
                  <span className="track-days">{track.days}</span>
                  <span className="track-badge">{track.badge}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="idiomas-em-breve">
          <div className="section-head">
            <span className="section-kicker">Em preparação</span>
            <h2 className="section-h2">Próximos idiomas</h2>
            <p className="section-sub">
              A mesma estrutura de trilha — trinta dias, três camadas por dia. O que muda é o idioma e o texto de imersão.
            </p>
          </div>
          <div className="track-grid">
            {TRACKS_SOON.map((track) => (
              <div key={track.id} className="track soon">
                <div className="track-num">
                  <span>Trilha {track.num}</span>
                  <span className="track-flag">{track.flag}</span>
                </div>
                <h3 className="track-name">
                  {track.name} <em>{track.nameEm}</em>
                </h3>
                <p className="track-desc">{track.desc}</p>
                <div className="track-meta">
                  <span className="track-days">{track.days}</span>
                  <span className="track-badge">{track.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="como-funciona">
          <div className="section-head">
            <span className="section-kicker">Por que funciona</span>
            <h2 className="section-h2">
              Aprender sem <em>distância</em>
            </h2>
            <p className="section-sub">
              O método combina a densidade de uma aula, a naturalidade de um texto e a força da revisão para transformar prática em memória.
            </p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="stem">
          <div className="section-head">
            <span className="section-kicker">Ciências exatas · em preparação</span>
            <h2 className="section-h2">STEM</h2>
            <p className="section-sub">
              Matemática e física com o mesmo rigor das trilhas de idioma: definição precisa, exemplo resolvido passo a passo, exercício com feedback, revisão espaçada.
            </p>
          </div>
          <div className="stem-strip">
            <div className="stem">
              <span className="stem-ic">📊</span>
              <div className="stem-body">
                <b>Matemática</b>
                <span>Álgebra · geometria · análise · estatística. Do número natural ao cálculo diferencial, com demonstrações completas.</span>
              </div>
            </div>
            <div className="stem">
              <span className="stem-ic">⚛️</span>
              <div className="stem-body">
                <b>Física</b>
                <span>Mecânica · termodinâmica · eletromagnetismo. Da cinemática ao campo, com problemas resolvidos e intuição geométrica.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="sobre">
          <div className="section-head">
            <span className="section-kicker">Sobre a Linvuu</span>
            <h2 className="section-h2">
              Três camadas, <em>um dia</em>
            </h2>
            <p className="section-sub">
              Toda trilha, de idioma ou de STEM, obedece à mesma estrutura diária. Assistir, ler, fazer. Sem aula longa, sem teoria solta. A Linvuu foi desenhada para quem quer aprender com progresso real.
            </p>
          </div>
          <div className="method-grid">
            <div className="method">
              <span className="method-num">01</span>
              <h3 className="method-h3">Vídeo-aula</h3>
              <p>Aula curta, capitulada, com saltos navegáveis. Você assiste no seu ritmo e volta ao ponto que precisa.</p>
              <span className="method-ic">▶️</span>
            </div>
            <div className="method">
              <span className="method-num">02</span>
              <h3 className="method-h3">Imersão</h3>
              <p>Texto curto no idioma (ou no formalismo), com áudio nativo e tradução sob demanda. Vocabulário destacado no contexto.</p>
              <span className="method-ic">📖</span>
            </div>
            <div className="method">
              <span className="method-num">03</span>
              <h3 className="method-h3">Prática</h3>
              <p>Exercício com feedback imediato, XP pelo acerto e revisão espaçada do que você errou — em duas rodadas depois.</p>
              <span className="method-ic">✓</span>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="lin">
          <div className="section-head">
            <span className="section-kicker">Seu parceiro</span>
            <h2 className="section-h2">
              Conheça o <em>Lin</em>
            </h2>
            <p className="section-sub">
              O Lin caminha com você durante toda a trilha. Conte a ele suas conquistas — ele celebra. Conte suas frustrações — ele ajuda a atravessar.
            </p>
          </div>
          <div className="lin-showcase">
            <div className="lin-stage">
              <div className="lin-scene">
                <div className="lin" dangerouslySetInnerHTML={{ __html: linSVG(linState) }} />
                <h3 className="lin-title" id="linTitle">
                  {linState === 'happy' ? 'Vamos em frente!' : linState === 'thinking' ? 'Pensando no próximo passo...' : linState === 'celebrate' ? 'Você está no caminho certo!' : "Pronto quando você estiver"}
                </h3>
                <p className="lin-desc" id="linDesc">
                  {linState === 'happy'
                    ? 'Você já deu o primeiro passo. Agora é só seguir a trilha e manter o ritmo.'
                    : linState === 'thinking'
                      ? 'Tudo bem parar para revisar: a clareza vem quando o cérebro processa o que aprendeu.'
                      : linState === 'celebrate'
                        ? 'A consistência faz a diferença — e o progresso já começou.'
                        : 'Comece a primeira trilha e o Lin monta o baralho de revisão com você.'}
                </p>
                <button type="button" className="btn btn-primary" id="linCta" onClick={() => setLinState('celebrate')}>
                  Escolher uma trilha
                </button>
              </div>
            </div>
            <div className="lin-picker">
              <span className="lin-picker-label">Estados</span>
              <div className="lin-picker-row" id="linPicker">
                {(['idle', 'thinking', 'happy', 'sad', 'celebrate'] as const).map((state) => (
                  <button
                    key={state}
                    type="button"
                    className={`lin-chip ${linState === state ? 'on' : ''}`}
                    onClick={() => setLinState(state)}
                  >
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </button>
                ))}
              </div>
            </div>
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
            <a href="#idiomas">Idiomas</a>
            <a href="#stem">STEM</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#lin">Lin</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
