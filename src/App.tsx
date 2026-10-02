import React, { useMemo, useState } from 'react';

const FLAGS: Record<string, (s?: number) => string> = {
  gb: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="8"/>
      <path d="M0 0 60 40M60 0 0 40" stroke="#C8102E" stroke-width="4"/>
      <path d="M30 0V40M0 20H60" stroke="#fff" stroke-width="13"/>
      <path d="M30 0V40M0 20H60" stroke="#C8102E" stroke-width="8"/>
    </svg>
  `,
  es: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#aa151b"/>
      <rect y="5" width="30" height="10" fill="#f1bf00"/>
    </svg>
  `,
  fr: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#fff"/>
      <rect width="10" height="20" fill="#002395"/>
      <rect x="20" width="10" height="20" fill="#ed2939"/>
    </svg>
  `,
  de: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#000"/>
      <rect y="6.67" width="30" height="6.67" fill="#dd0000"/>
      <rect y="13.33" width="30" height="6.67" fill="#ffce00"/>
    </svg>
  `,
  it: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#fff"/>
      <rect width="10" height="20" fill="#009246"/>
      <rect x="20" width="10" height="20" fill="#ce2b37"/>
    </svg>
  `,
  ru: (s = 44) => `
    <svg width="${s}" height="${Math.round(s * 0.667)}" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#fff"/>
      <rect y="6.67" width="30" height="6.67" fill="#0039a6"/>
      <rect y="13.33" width="30" height="6.67" fill="#d52b1e"/>
    </svg>
  `,
};

const LANGS: Record<string, { label: string; flag: string }> = {
  en: { label: 'Inglês', flag: 'gb' },
  es: { label: 'Espanhol', flag: 'es' },
  fr: { label: 'Francês', flag: 'fr' },
  de: { label: 'Alemão', flag: 'de' },
  it: { label: 'Italiano', flag: 'it' },
  ru: { label: 'Russo', flag: 'ru' },
};

const PROFS: Record<string, { label: string; icon: string }> = {
  med: { label: 'Medicina', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>' },
  tec: { label: 'Tecnologia', icon: '<path d="M8 6 3 12l5 6M16 6l5 6-5 6"/>' },
  eng: { label: 'Engenharia', icon: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M18.4 5.6l-2.2 2.2M7.8 16.2l-2.2 2.2"/>' },
  dir: { label: 'Direito', icon: '<path d="M12 4v16M8 20h8M5 8h14M12 4 6 8M12 4l6 4"/><path d="M6 8l-2.4 5.2a2.9 2.9 0 0 0 4.8 0zM18 8l-2.4 5.2a2.9 2.9 0 0 0 4.8 0z"/>' },
  neg: { label: 'Negócios', icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>' },
  hot: { label: 'Hotelaria', icon: '<path d="M6 8a6 6 0 0 1 12 0c0 7 2 8 2 8H4s2-1 2-8"/><path d="M10 20a2 2 0 0 0 4 0"/>' },
};

const LESSONS: Record<string, any> = {
  en: {
    med: { s: [['Doctor, the patient in room four ___ chest pain.', 'has'], ['Please ___ his temperature every hour.', 'take']], alt: ['makes', 'bring'] },
    tec: { s: [['The ___ crashed again last night.', 'server'], ['Try to ___ the bug before Friday.', 'fix']], alt: ['kitchen', 'cook'] },
    eng: { s: [['The ___ of the bridge took three years.', 'construction'], ['Check the ___ before the storm arrives.', 'cables']], alt: ['contract', 'defendant'] },
    dir: { s: [['The client signed the ___ yesterday.', 'contract'], ['The judge will ___ the case next week.', 'review']], alt: ['server', 'cables'] },
    neg: { s: [['Our ___ grew twenty percent this year.', 'revenue'], ['We need to ___ a new supplier.', 'find']], alt: ['temperature', 'fever'] },
    hot: { s: [['Your room is on the third ___ , sir.', 'floor'], ['Breakfast is ___ from six to ten.', 'served']], alt: ['contract', 'analyzed'] },
  },
  es: {
    med: { s: [['Doctor, el paciente de la habitación cuatro ___ dolor de pecho.', 'tiene'], ['Por favor, ___ su temperatura cada hora.', 'tome']], alt: ['hace', 'come'] },
    tec: { s: [['El ___ falló otra vez anoche.', 'servidor'], ['Intenta ___ el error antes del viernes.', 'arreglar']], alt: ['cocina', 'comer'] },
    eng: { s: [['La ___ del puente duró tres años.', 'construcción'], ['Revisa los ___ antes de la tormenta.', 'cables']], alt: ['contrato', 'juez'] },
    dir: { s: [['El cliente firmó el ___ ayer.', 'contrato'], ['El juez ___ el caso la próxima semana.', 'analizará']], alt: ['servidor', 'cables'] },
    neg: { s: [['Nuestros ___ crecieron veinte por ciento este año.', 'ingresos'], ['Necesitamos ___ un nuevo proveedor.', 'buscar']], alt: ['temperatura', 'fiebre'] },
    hot: { s: [['Su habitación está en el tercer ___ , señor.', 'piso'], ['El desayuno se ___ de seis a diez.', 'sirve']], alt: ['contrato', 'juzgado'] },
  },
  fr: {
    med: { s: [['Docteur, le patient de la chambre quatre ___ mal à la poitrine.', 'a'], ['Prenez sa ___ toutes les heures.', 'température']], alt: ['mange', 'serveur'] },
    tec: { s: [['Le ___ est tombé en panne cette nuit.', 'serveur'], ['Essaie de ___ le bug avant vendredi.', 'corriger']], alt: ['température', 'manger'] },
    eng: { s: [['La ___ du pont a duré trois ans.', 'construction'], ['Vérifie les ___ avant la tempête.', 'câbles']], alt: ['contrat', 'client'] },
    dir: { s: [['Le client a signé le ___ hier.', 'contrat'], ['Le juge ___ l\'affaire la semaine prochaine.', 'examinera']], alt: ['serveur', 'câbles'] },
    neg: { s: [['Nos ___ ont augmenté de vingt pour cent.', 'ventes'], ['Nous devons ___ un nouveau fournisseur.', 'trouver']], alt: ['température', 'juge'] },
    hot: { s: [['Votre chambre est au ___ étage, monsieur.', 'troisième'], ['Le petit-déjeuner est ___ de six à dix heures.', 'servi']], alt: ['contrat', 'juge'] },
  },
  de: {
    med: { s: [['Herr Doktor, der Patient in Zimmer vier ___ Brustschmerzen.', 'hat'], ['Bitte ___ Sie seine Temperatur jede Stunde.', 'messen']], alt: ['isst', 'bringt'] },
    tec: { s: [['Der ___ ist letzte Nacht wieder abgestürzt.', 'Server'], ['Versuch, den Fehler bis Freitag zu ___ .', 'beheben']], alt: ['Küche', 'essen'] },
    eng: { s: [['Der ___ der Brücke dauerte drei Jahre.', 'Bau'], ['Prüfe die ___ vor dem Sturm.', 'Kabel']], alt: ['Vertrag', 'Richter'] },
    dir: { s: [['Der Kunde hat den ___ gestern unterschrieben.', 'Vertrag'], ['Der Richter wird den Fall nächste Woche ___ .', 'prüfen']], alt: ['Server', 'Kabel'] },
    neg: { s: [['Unser ___ ist dieses Jahr um zwanzig Prozent gestiegen.', 'Umsatz'], ['Wir müssen einen neuen Lieferanten ___ .', 'finden']], alt: ['Temperatur', 'Fieber'] },
    hot: { s: [['Ihr Zimmer ist im dritten ___ , mein Herr.', 'Stock'], ['Das Frühstück wird von sechs bis zehn Uhr ___ .', 'serviert']], alt: ['Vertrag', 'Richter'] },
  },
  it: {
    med: { s: [['Dottore, il paziente della camera quattro ___ dolori al petto.', 'ha'], ['Per favore, ___ la temperatura ogni ora.', 'misuri']], alt: ['mangia', 'porta'] },
    tec: { s: [['Il ___ è andato in crash stanotte.', 'server'], ['Prova a ___ il bug entro venerdì.', 'correggere']], alt: ['cucina', 'mangiare'] },
    eng: { s: [['La ___ del ponte è durata tre anni.', 'costruzione'], ['Controlla i ___ prima della tempesta.', 'cavi']], alt: ['contratto', 'giudice'] },
    dir: { s: [['Il cliente ha firmato il ___ ieri.', 'contratto'], ['Il giudice ___ il caso la prossima settimana.', 'esaminerà']], alt: ['server', 'cavi'] },
    neg: { s: [['Le nostre ___ sono cresciute del venti per cento.', 'vendite'], ['Dobbiamo ___ un nuovo fornitore.', 'trovare']], alt: ['temperatura', 'febbre'] },
    hot: { s: [['La sua camera è al ___ piano, signore.', 'terzo'], ['La colazione è ___ dalle sei alle dieci.', 'servita']], alt: ['contratto', 'giudice'] },
  },
  ru: {
    med: { s: [['Доктор, у пациента в четвёртой палате ___ боль в груди.', 'есть'], ['Пожалуйста, ___ его температуру каждый час.', 'измеряйте']], alt: ['ест', 'приносите'] },
    tec: { s: [['___ снова упал этой ночью.', 'Сервер'], ['Попробуй ___ ошибку до пятницы.', 'исправить']], alt: ['кухня', 'есть'] },
    eng: { s: [['___ моста длилась три года.', 'Строительство'], ['Проверь ___ перед бурей.', 'тросы']], alt: ['договор', 'судья'] },
    dir: { s: [['Клиент подписал ___ вчера.', 'договор'], ['Судья ___ дело на следующей неделе.', 'рассмотрит']], alt: ['сервер', 'тросы'] },
    neg: { s: [['Наши ___ выросли на двадцать процентов в этом году.', 'продажи'], ['Нам нужно ___ нового поставщика.', 'найти']], alt: ['температура', 'жар'] },
    hot: { s: [['Ваш номер на ___ этаже.', 'третьем'], ['Завтрак ___ с шести до десяти.', 'подают']], alt: ['договор', 'судья'] },
  },
};

const FAMILY = [
  ['tomate', 'Tomate', 'Dia 1 · boas-vindas'],
  ['puff', 'Puff', 'Vocabulário do trabalho'],
  ['nuvem', 'Nuvem', 'Imersão e áudio'],
  ['u', 'U', 'Gramática na prática'],
  ['fantasma', 'Fantasma', 'Revisão espaçada'],
  ['ampulheta', 'Ampulheta', 'Rotina de 30 dias'],
  ['coracao', 'Coração', 'Motivação e sequência'],
];

const FACE = (x1: number, x2: number, ey: number, my: number) => `
  <rect x="${x1 - 5.5}" y="${ey - 11}" width="11" height="22" rx="5.5" fill="#5d5d5d"/>
  <rect x="${x2 - 5.5}" y="${ey - 11}" width="11" height="22" rx="5.5" fill="#5d5d5d"/>
  <rect x="42" y="${my - 3.5}" width="16" height="7" rx="3.5" fill="#c9c9c9"/>
`;
const SHINE = (d: string) => `<path d="${d}" stroke="#cbcbcb" stroke-width="7" stroke-linecap="round" fill="none"/>`;
const DOTS = (pts: [number, number][], r = 6.5) => pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="#cbcbcb"/>`).join('');
const W = 'fill="#ffffff"';

const MASCOT_SHAPES: Record<string, { face: [number, number, number, number]; art: string }> = {
  tomate: { face: [31, 69, 74, 88], art: `<path d="M50 2 L56 13 L74 11 L62 23 L67 35 L50 27 L33 35 L38 23 L26 11 L44 13 Z" ${W}/><path d="M50 22 C74 22 93 41 91 62 C89 82 72 94 50 94 C28 94 11 82 9 62 C7 41 26 22 50 22 Z" ${W}/>${SHINE('M22 34 C17 44 15 56 17 66')}` },
  puff: { face: [31, 69, 74, 88], art: `<path d="M50 8 C57 8 63 12 66 18 C74 15 83 21 82 30 C91 33 94 44 88 51 C95 58 92 70 83 73 C82 83 72 89 63 86 C58 95 42 95 37 86 C28 89 18 83 17 73 C8 70 5 58 12 51 C6 44 9 33 18 30 C17 21 26 15 34 18 C37 12 43 8 50 8 Z" ${W}/>${SHINE('M26 32 C21 42 20 54 23 64')}` },
  nuvem: { face: [33, 67, 72, 86], art: `<path d="M27 34 C20 14 46 4 55 22 C62 8 82 14 79 32 C95 33 100 52 89 62 C100 74 87 91 72 86 C63 98 40 98 31 88 C15 95 3 78 13 66 C3 58 9 39 27 34 Z" ${W}/>${SHINE('M24 38 C20 46 19 54 20 62')}` },
  u: { face: [36, 64, 72, 86], art: `<path fill-rule="evenodd" d="M6 4 H94 C98 4 100 7 99.4 11 L94 50 C90 78 72 96 50 96 C28 96 10 78 6 50 L0.6 11 C0 7 2 4 6 4 Z M36 4 V36 C36 49 41.8 58 50 58 C58.2 58 64 49 64 36 V4 Z" ${W}/>${SHINE('M17 18 C13 30 12 44 14 56')}` },
  fantasma: { face: [31, 69, 76, 90], art: `<path d="M60 8 C84 16 97 42 92 66 C87 88 62 98 38 92 C16 86 2 62 10 42 C18 20 38 1 60 8 Z" ${W}/>${DOTS([[72, 26], [86, 34], [77, 45]])}${SHINE('M24 28 C19 38 17 50 19 60')}` },
  ampulheta: { face: [36, 64, 78, 90], art: `<path d="M12 2 H88 C93 2 95 7 92 11 L58 46 C54 50 46 50 42 46 L8 11 C5 7 7 2 12 2 Z" ${W}/><path d="M12 98 H88 C93 98 95 93 92 89 L58 54 C54 50 46 50 42 54 L8 89 C5 93 7 98 12 98 Z" ${W}/>${DOTS([[45, 20], [58, 25], [51, 33]], 5)}${SHINE('M30 18 C23 25 19 33 18 42')}` },
  coracao: { face: [30, 70, 76, 90], art: `<path d="M50 94 C22 74 4 54 6 34 C8 16 26 6 40 14 C45 17 49 22 50 25 C51 22 55 17 60 14 C74 6 92 16 94 34 C96 54 78 74 50 94 Z" ${W}/>${DOTS([[72, 18], [85, 27], [77, 39]])}<path d="M31 18 C39 25 42 35 36 41 C30 46 22 40 24 30 C25 23 27 20 31 18 Z" fill="#3f3f3f"/><path d="M69 18 C61 25 58 35 64 41 C70 46 78 40 76 30 C75 23 73 20 69 18 Z" fill="#3f3f3f"/><path d="M50 47 C57 47 63 52 63 58 C63 64 56 66 50 66 C44 66 37 64 37 58 C37 52 43 47 50 47 Z" fill="#3f3f3f"/>${SHINE('M26 32 C21 40 19 48 20 56')}` },
};

const mascotSVG = (id: string, size = 120) => {
  const m = MASCOT_SHAPES[id];
  if (!m) return '';
  return `<svg class="mascot-svg" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">${m.art}${FACE(...m.face)}</svg>`;
};

const shuffle = (items: string[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function App() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [selectedProf, setSelectedProf] = useState('tec');
  const [placed, setPlaced] = useState<[string | null, string | null]>([null, null]);
  const [done, setDone] = useState(false);
  const [mascot, setMascot] = useState({ id: 'tomate', anim: 'idle', msg: 'Complete as lacunas com as palavras do banco.' });

  const lesson = LESSONS[selectedLang][selectedProf];
  const bankWords = useMemo(() => shuffle([lesson.s[0][1], lesson.s[1][1], lesson.alt[0], lesson.alt[1]]), [lesson]);

  const resetLesson = () => {
    setPlaced([null, null]);
    setDone(false);
    setMascot({ id: 'tomate', anim: 'idle', msg: 'Complete as lacunas com as palavras do banco.' });
  };

  const handleLangChange = (next: string) => {
    setSelectedLang(next);
    setPlaced([null, null]);
    setDone(false);
    setMascot({ id: 'tomate', anim: 'idle', msg: 'Complete as lacunas com as palavras do banco.' });
  };

  const handleProfChange = (next: string) => {
    setSelectedProf(next);
    setPlaced([null, null]);
    setDone(false);
    setMascot({ id: 'tomate', anim: 'idle', msg: 'Complete as lacunas com as palavras do banco.' });
  };

  const handleWordClick = (word: string) => {
    if (done) return;
    const index = placed.findIndex((value) => value === null);
    if (index === -1) return;
    const next = [...placed] as [string | null, string | null];
    next[index] = word;
    setPlaced(next);
  };

  const handleGapClick = (index: number) => {
    if (done) return;
    if (!placed[index]) return;
    const next = [...placed] as [string | null, string | null];
    next[index] = null;
    setPlaced(next);
  };

  const handleCheck = () => {
    if (done) return;
    if (placed.some((value) => !value)) {
      setMascot({ id: 'tomate', anim: 'idle', msg: 'Preencha as duas lacunas antes de verificar.' });
      return;
    }

    let allOk = true;
    const current = [...placed] as [string | null, string | null];
    lesson.s.forEach((pair: [string, string], index: number) => {
      if (current[index] !== pair[1]) allOk = false;
    });

    if (allOk) {
      setDone(true);
      setMascot({ id: 'coracao', anim: 'pop', msg: 'Muito bem! Lição concluída sem esforço.' });
    } else {
      setMascot({ id: 'fantasma', anim: 'sad', msg: 'Quase! Toque nas lacunas vermelhas para trocar a palavra.' });
    }
  };

  return (
    <div className="page-shell">
      <header className="nav-bar">
        <div className="nav-inner">
          <a href="#" className="logo" aria-label="Linvuu home">
            <svg width="26" height="20" viewBox="0 0 32 24" aria-hidden="true">
              <rect width="11" height="6" fill="currentColor" />
              <rect y="9" width="22" height="6" fill="currentColor" />
              <rect y="18" width="7" height="6" fill="currentColor" />
            </svg>
            <span className="logo-text">Linvuu</span>
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#idiomas">Idiomas</a>
            <a href="#profissoes">Profissões</a>
            <a href="#praticar">Praticar</a>
            <a href="#familia">Família</a>
          </nav>

          <a href="#idiomas" className="nav-cta">Começar</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="kicker">Método Linvuu · sem esforço</div>
              <h1 className="hero-h1">
                O idioma da sua
                <br />
                profissão, <em>em 30 dias.</em>
              </h1>
              <p className="hero-sub">Diálogos reais do seu trabalho. Complete as lacunas e avance um passo por dia.</p>

              <div className="hero-cta">
                <a href="#idiomas" className="btn btn-primary">Escolher idioma</a>
                <a href="#praticar" className="btn btn-ghost">Experimentar</a>
              </div>

              <div className="hero-meta">
                <span>01 · Ouça e leia</span>
                <span>02 · Complete as lacunas</span>
                <span>03 · Revise sem esforço</span>
              </div>
            </div>

            <div className="hero-stage" aria-hidden="true">
              <div className="hs hs-a1"><div className="hs-anim" dangerouslySetInnerHTML={{ __html: mascotSVG('nuvem', 84) }} /></div>
              <div className="hs hs-big"><div className="hs-anim" dangerouslySetInnerHTML={{ __html: mascotSVG('tomate', 160) }} /></div>
              <div className="hs hs-a2"><div className="hs-anim" dangerouslySetInnerHTML={{ __html: mascotSVG('coracao', 76) }} /></div>
            </div>
          </div>
        </section>

        <section className="section" id="idiomas">
          <div className="section-head">
            <span className="step-tag">Passo 01</span>
            <h2 className="h2">Escolha um <em>idioma</em></h2>
            <p className="sub">Seis trilhas. Áudio nativo desde o primeiro dia.</p>
          </div>

          <div className="pick-grid" role="group" aria-label="Escolha um idioma">
            {Object.entries(LANGS).map(([id, lang]) => (
              <button
                key={id}
                className={`card ${id === selectedLang ? 'on' : ''}`}
                data-lang={id}
                onClick={() => handleLangChange(id)}
                aria-pressed={id === selectedLang}
                type="button"
              >
                <span className="card-check">✓</span>
                <span className="card-flag" dangerouslySetInnerHTML={{ __html: FLAGS[lang.flag](52) }} />
                <span className="card-label">{lang.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="profissoes">
          <div className="section-head">
            <span className="step-tag">Passo 02</span>
            <h2 className="h2">Escolha uma <em>profissão</em></h2>
            <p className="sub">O vocabulário que você realmente usa no trabalho.</p>
          </div>

          <div className="pick-grid" role="group" aria-label="Escolha uma profissão">
            {Object.entries(PROFS).map(([id, prof]) => (
              <button
                key={id}
                className={`card ${id === selectedProf ? 'on' : ''}`}
                data-prof={id}
                onClick={() => handleProfChange(id)}
                aria-pressed={id === selectedProf}
                type="button"
              >
                <span className="card-check">✓</span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: prof.icon }}
                />
                <span className="card-label">{prof.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="praticar">
          <div className="section-head">
            <span className="step-tag">Passo 03</span>
            <h2 className="h2">Complete as <em>lacunas</em></h2>
            <p className="sub">Toque nas palavras do banco para preencher. A família Lin confere por você.</p>
          </div>

          <div className="lab">
            <aside className="lab-side">
              <div className={`lab-mascot anim-${mascot.anim}`} dangerouslySetInnerHTML={{ __html: mascotSVG(mascot.id, 110) }} />
              <p className="lab-msg">{mascot.msg}</p>
            </aside>

            <div className="lab-main">
              <div className="lab-top">
                <span className="flag-inline" dangerouslySetInnerHTML={{ __html: FLAGS[LANGS[selectedLang].flag](30) }} />
                <b>{LANGS[selectedLang].label} · {PROFS[selectedProf].label}</b>
                <span className="lab-chip">Lição 01</span>
              </div>

              <div id="labSentences">
                {lesson.s.map((pair: [string, string], index: number) => {
                  const [before, after] = pair[0].split('___');
                  return (
                    <p className="lab-line" key={`${pair[0]}-${index}`}>
                      <span className="lab-num">{String(index + 1).padStart(2, '0')}</span>
                      {before}
                      <button
                        type="button"
                        className={`gap ${placed[index] ? 'filled' : ''} ${done && placed[index] === lesson.s[index][1] ? 'ok' : ''} ${done && placed[index] !== lesson.s[index][1] && placed[index] ? 'err' : ''}`}
                        data-g={index}
                        onClick={() => handleGapClick(index)}
                        aria-label={`Lacuna ${index + 1}`}
                      >
                        <span className="gap-w">{placed[index] ?? ''}</span>
                      </button>
                      {after}
                    </p>
                  );
                })}
              </div>

              <div className="lab-bank" aria-label="Banco de palavras">
                {bankWords.map((word) => {
                  const used = placed.includes(word);
                  return (
                    <button
                      key={`${word}-${Math.random()}`}
                      type="button"
                      className="chip"
                      data-w={word}
                      disabled={done || used}
                      onClick={() => handleWordClick(word)}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

              <div className="lab-actions">
                <button type="button" className="btn btn-primary" onClick={handleCheck} disabled={done}>Verificar</button>
                <button type="button" className="btn btn-ghost" onClick={resetLesson}>Recomeçar</button>
                {done && <span className="lab-xp">+10 XP · sequência +1</span>}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="familia">
          <div className="section-head">
            <span className="step-tag">Companhia</span>
            <h2 className="h2">A família <em>Lin</em></h2>
            <p className="sub">Sete companheiros — um para cada etapa da trilha.</p>
          </div>

          <div className="family-grid">
            {FAMILY.map(([id, name, role]) => (
              <div key={id} className="f-card">
                <div dangerouslySetInnerHTML={{ __html: mascotSVG(id, 92) }} />
                <span className="f-name">{name}</span>
                <span className="f-role">{role}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-inner">
          <span className="foot-copy"><strong>LINVUU</strong> · IDIOMAS SEM ESFORÇO<br />SÃO PAULO · 2026</span>
          <nav className="foot-links" aria-label="Links finais">
            <a href="#idiomas">Idiomas</a>
            <a href="#profissoes">Profissões</a>
            <a href="#praticar">Praticar</a>
            <a href="#familia">Família</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
