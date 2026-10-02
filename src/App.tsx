import React, { useState } from 'react';

interface FoodMascot {
  id: string;
  name: string;
  lang: string;
  native: string;
  file: string;
  quote: string;
  flag: string;
}

const FOOD_MASCOTS: Record<string, FoodMascot> = {
  de: {
    id: 'de',
    name: 'Pretzel',
    lang: 'Alemão',
    native: 'Deutsch',
    file: '/assets/mascots/pretzel-de.png',
    quote: 'Estrutura lógica, casos e fonética sem mistérios.',
    flag: '🇩🇪',
  },
  ru: {
    id: 'ru',
    name: 'Pelmeni',
    lang: 'Russo',
    native: 'Русский',
    file: '/assets/mascots/pelmeni-ru.png',
    quote: 'Do cirílico à autonomia de leitura em 30 dias.',
    flag: '🇷🇺',
  },
  fr: {
    id: 'fr',
    name: 'Croissant',
    lang: 'Francês',
    native: 'Français',
    file: '/assets/mascots/croissant-fr.png',
    quote: 'Ritmo suave e pronúncia natural do francês culto.',
    flag: '🇫🇷',
  },
  es: {
    id: 'es',
    name: 'Tomate',
    lang: 'Espanhol',
    native: 'Español',
    file: '/assets/mascots/tomate-es.png',
    quote: 'Expressão viva, verbos no ponto e sem sotaque de livro.',
    flag: '🇪🇸',
  },
  en: {
    id: 'en',
    name: 'Batata',
    lang: 'Inglês',
    native: 'English',
    file: '/assets/mascots/batata-en.png',
    quote: 'Conversas da vida real e domínio de phrasal verbs.',
    flag: '🇬🇧',
  },
  pt: {
    id: 'pt',
    name: 'Pastel',
    lang: 'Português',
    native: 'Português',
    file: '/assets/mascots/pastel-pt.png',
    quote: 'Da base às nuances culturais do dia a dia.',
    flag: '🇧🇷',
  },
};

const LEVELS = [
  { id: 'zero', name: 'Zero Absoluto', desc: 'Primeiro contato' },
  { id: 'a1', name: 'Básico A1', desc: 'Sons e frases' },
  { id: 'a2', name: 'Básico A2', desc: 'Cotidiano' },
  { id: 'b1', name: 'Intermediário B1', desc: 'Conversação' },
  { id: 'b2', name: 'Intermediário B2', desc: 'Autonomia' },
  { id: 'c1', name: 'Avançado C1', desc: 'Domínio fluente' },
];

const COSMOS = [
  { hello: 'Привет', formula: 'E = mc²' },
  { hello: 'Hallo', formula: 'e^{iπ} + 1 = 0' },
  { hello: 'Bonjour', formula: 'λ = h / p' },
  { hello: '¡Hola!', formula: 'F = G (m₁m₂ / r²)' },
  { hello: 'Hello', formula: '∇ × B = μ₀J' },
  { hello: 'Olá', formula: 'ds² = -(1 - 2M/r)dt² + ...' },
  { hello: '🧲 Ímã Cósmico', formula: 'Física das Forças' },
  { hello: '⏳ Ampulheta', formula: 'Matemática dos 30 Dias' },
];

export default function App() {
  const [selectedLang, setSelectedLang] = useState('de');
  const [selectedLevel, setSelectedLevel] = useState('zero');

  const currentMascot = FOOD_MASCOTS[selectedLang] || FOOD_MASCOTS.de;

  const TRACKS = [
    {
      id: 'de',
      num: '01',
      name: 'Alemão',
      native: 'Deutsch',
      desc: 'Casos, gêneros e a estrutura da frase explicados com lógica cristalina, da pronúncia à conversação.',
      mascot: '/assets/mascots/pretzel-de.png',
    },
    {
      id: 'ru',
      num: '02',
      name: 'Russo',
      native: 'Русский',
      desc: 'Alfabeto cirílico decifrado nos primeiros cinco dias. Fonética viva e leitura de textos de autores nativos.',
      mascot: '/assets/mascots/pelmeni-ru.png',
    },
    {
      id: 'fr',
      num: '03',
      name: 'Francês',
      native: 'Français',
      desc: 'Ritmo fonético, liaisons e elegância estrutural para se comunicar com autenticidade.',
      mascot: '/assets/mascots/croissant-fr.png',
    },
    {
      id: 'es',
      num: '04',
      name: 'Espanhol',
      native: 'Español',
      desc: 'Da base comunicativa à fluência expressiva, sem cair em armadilhas de portunhol.',
      mascot: '/assets/mascots/tomate-es.png',
    },
    {
      id: 'en',
      num: '05',
      name: 'Inglês',
      native: 'English',
      desc: 'Phrasal verbs essenciais, entonação e linguagem falada no ambiente de trabalho global.',
      mascot: '/assets/mascots/batata-en.png',
    },
    {
      id: 'pt',
      num: '06',
      name: 'Português',
      native: 'Português',
      desc: 'Expressões reais, concordâncias naturais e pronúncia para uso prático diário.',
      mascot: '/assets/mascots/pastel-pt.png',
    },
  ];

  return (
    <div className="bg-[#f9f8f6] text-[#374151] min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f9f8f6]/95 border-b border-[#e1ddd1]">
        <div className="max-w-[1140px] mx-auto px-7 py-3.5 flex items-center justify-between gap-5">
          <a href="#" className="inline-flex items-center gap-3">
            <svg className="w-[26px] h-auto shrink-0" viewBox="0 0 32 24" aria-hidden="true">
              <rect x="0" y="0" width="11" height="6" fill="#00262b" />
              <rect x="0" y="9" width="22" height="6" fill="#00262b" />
              <rect x="0" y="18" width="7" height="6" fill="#00262b" />
            </svg>
            <span className="font-black text-[22px] tracking-[-0.04em] text-[#00262b]">Linvuu</span>
          </a>

          <nav className="hidden md:flex gap-1">
            <a
              href="#trilhas"
              className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#6b7280] hover:text-[#00262b] rounded transition-colors"
            >
              Trilhas
            </a>
            <a
              href="#metodo"
              className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#6b7280] hover:text-[#00262b] rounded transition-colors"
            >
              Método
            </a>
            <a
              href="#sobre"
              className="px-3.5 py-2 text-[13px] font-medium tracking-[0.05em] uppercase text-[#6b7280] hover:text-[#00262b] rounded transition-colors"
            >
              Sobre
            </a>
          </nav>

          <a
            href={`app.html?lang=${selectedLang}&level=${selectedLevel}`}
            className="bg-[#d64000] text-white font-medium text-[14px] tracking-[0.08em] uppercase px-5.5 py-2.5 rounded-[94px] border border-[#d64000] shadow-[0_1px_3px_rgba(0,0,0,.10)] hover:bg-[#b33600] transition-colors"
          >
            Começar
          </a>
        </div>
      </header>

      <main className="max-w-[1140px] mx-auto px-7">
        {/* HERO */}
        <section className="py-14 pb-12">
          <div className="flex items-center justify-between text-xs font-medium tracking-[0.12em] uppercase text-[#9ca3af] pb-4 mb-8 border-b border-[#e1ddd1]">
            <span>Linvuu · Idiomas em Trilhas</span>
            <span>desde 2026 · São Paulo</span>
          </div>

          <div className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] mb-4.5">
            <span className="w-6.5 h-px bg-[#d64000]"></span>
            Trilhas de 30 dias
          </div>

          <h1 className="font-black text-[clamp(36px,5.8vw,64px)] tracking-[-0.03em] leading-[1.08] text-[#00262b] mb-4.5 max-w-[920px]">
            Um idioma por vez.<br />
            <em className="font-serif italic font-normal text-[#d64000]">Trinta dias por trilha.</em>
          </h1>

          <p className="font-serif italic text-[clamp(17px,2vw,19px)] text-[#6b7280] max-w-[680px] mb-8 leading-[1.55]">
            Do zero absoluto à autonomia de leitura. Cada dia é uma camada: vídeo-aula concisa, imersão em texto nativo e prática com repetição espaçada. Sem atalho, sem gamificação vazia.
          </p>

          {/* SPLIT: SELETORES + COMIDA TÍPICA VS COSMOS */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch mt-6">
            {/* LADO ESQUERDO */}
            <div className="bg-white border border-[#e1ddd1] p-7 sm:p-8 flex flex-col gap-6">
              <div>
                <div className="text-xs font-bold tracking-[0.14em] uppercase text-[#d64000] mb-3.5">
                  Quero aprender
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.values(FOOD_MASCOTS).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedLang(item.id)}
                      className={`p-3 border flex items-center gap-2.5 text-sm font-medium transition-all text-left cursor-pointer ${
                        selectedLang === item.id
                          ? 'border-[#d64000] bg-[#d64000]/10 text-[#d64000] font-bold'
                          : 'border-[#e1ddd1] bg-[#f9f8f6] text-[#00262b] hover:border-[#cccccc] hover:bg-[#edebe3]'
                      }`}
                    >
                      <span className="text-lg">{item.flag}</span>
                      <span>{item.lang}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold tracking-[0.14em] uppercase text-[#d64000] mb-3.5">
                  Meu nível
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setSelectedLevel(lvl.id)}
                      className={`p-3 border flex flex-col items-start gap-1 transition-all cursor-pointer ${
                        selectedLevel === lvl.id
                          ? 'border-[#d64000] bg-[#d64000]/10'
                          : 'border-[#e1ddd1] bg-[#f9f8f6] hover:border-[#cccccc] hover:bg-[#edebe3]'
                      }`}
                    >
                      <span
                        className={`text-[13px] font-bold ${
                          selectedLevel === lvl.id ? 'text-[#d64000]' : 'text-[#00262b]'
                        }`}
                      >
                        {lvl.name}
                      </span>
                      <span className="text-[11px] text-[#6b7280]">{lvl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* MASCOTE DE COMIDA TÍPICA */}
              <div className="flex items-center gap-5 p-5 bg-[#edebe3] border border-[#e1ddd1]">
                <img
                  src={currentMascot.file}
                  alt={currentMascot.name}
                  className="w-[90px] h-[90px] object-contain shrink-0 filter drop-shadow-[0_4px_10px_rgba(0,38,43,0.12)] hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="text-base font-bold text-[#00262b] mb-1">
                    {currentMascot.name} · {currentMascot.lang} ({currentMascot.native})
                  </h3>
                  <p className="font-serif italic text-[13px] text-[#6b7280] leading-snug">
                    {currentMascot.quote}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={`app.html?lang=${selectedLang}&level=${selectedLevel}`}
                  className="inline-flex items-center justify-center w-full font-medium text-sm tracking-[0.06em] uppercase h-[48px] rounded-[94px] bg-[#d64000] text-white shadow-[0_1px_3px_rgba(0,0,0,.10)] hover:bg-[#b33600] transition-colors"
                >
                  Iniciar Trilha de 30 Dias →
                </a>
              </div>
            </div>

            {/* LADO DIREITO: FÓRMULAS & SAUDAÇÕES CÓSMICAS */}
            <aside className="bg-[#111a1f] text-[#f3f4f6] border border-[#23343d] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-80px] right-[-80px] w-60 h-60 bg-[#d64000]/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5.5">
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#ff9d66]">
                    Cosmos &amp; Rigor
                  </span>
                  <div className="flex gap-2.5 items-center">
                    <span className="w-8 h-8 bg-white/10 border border-white/15 flex items-center justify-center">
                      <img src="/assets/mascots/ima-fisica.png" alt="Ímã" className="w-5 h-5 object-contain" />
                    </span>
                    <span className="w-8 h-8 bg-white/10 border border-white/15 flex items-center justify-center">
                      <img src="/assets/mascots/ampulheta-matematica.png" alt="Ampulheta" className="w-5 h-5 object-contain" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 mb-6">
                  {COSMOS.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3.5 py-2.5 bg-white/[0.04] border border-white/[0.08]"
                    >
                      <span className="font-serif italic text-base text-white">{item.hello}</span>
                      <span className="font-mono text-xs text-[#93c5fd]">{item.formula}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>Estrutura editorial autêntica</span>
                <span className="font-mono text-[11px] text-[#ff9d66]">v1.0 Linvuu</span>
              </div>
            </aside>
          </div>
        </section>

        {/* TRILHAS */}
        <section className="py-16" id="trilhas">
          <div className="mb-9">
            <span className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] mb-3">
              <span className="w-5 h-px bg-[#d64000]"></span>
              Catálogo de trilhas
            </span>
            <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold tracking-[-0.018em] text-[#00262b] mb-2.5">
              Idiomas com <em className="font-serif italic font-normal text-[#d64000]">identidade</em>
            </h2>
            <p className="text-[15px] text-[#6b7280] max-w-[620px]">
              Trinta dias, oito módulos progressivos e imersão cultural nativa com a comida típica que acompanha sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#e1ddd1]">
            {TRACKS.map((t) => (
              <a
                key={t.id}
                href={`app.html?lang=${t.id}&level=${selectedLevel}`}
                className="p-8 border-b border-r border-[#e1ddd1] flex flex-col gap-4 hover:bg-[#edebe3] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#d64000]">
                    Trilha {t.num}
                  </span>
                  <img src={t.mascot} alt={t.name} className="w-11 h-11 object-contain filter drop-shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.015em] text-[#00262b]">
                  {t.name} <em className="font-serif italic font-normal text-[#d64000]">{t.native}</em>
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed flex-1">{t.desc}</p>
                <div className="flex items-baseline justify-between pt-4 border-t border-[#e1ddd1] text-xs">
                  <span className="tracking-[0.14em] uppercase text-[#9ca3af]">30 dias · 8 módulos</span>
                  <span className="font-bold tracking-[0.14em] uppercase text-[#d64000]">Disponível</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* MÉTODO */}
        <section className="py-16" id="metodo">
          <div className="mb-9">
            <span className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] mb-3">
              <span className="w-5 h-px bg-[#d64000]"></span>
              Estrutura diária
            </span>
            <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold tracking-[-0.018em] text-[#00262b] mb-2.5">
              Três camadas, <em className="font-serif italic font-normal text-[#d64000]">um dia</em>
            </h2>
            <p className="text-[15px] text-[#6b7280] max-w-[620px]">
              A cada dia, uma experiência completa e contida em 15 minutos: absorção auditiva, leitura com tradução sob demanda e prática com correção imediata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#e1ddd1]">
            <div className="p-8 border-b md:border-b-0 border-r border-[#e1ddd1] flex flex-col gap-3.5 hover:bg-[#edebe3] transition-colors">
              <span className="text-[28px] font-bold tracking-[-0.02em] text-[#d64000] leading-none">01</span>
              <h3 className="text-xl font-bold text-[#00262b]">Vídeo-aula concisa</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Aula em áudio e vídeo de 15 minutos, capitulada e focada em uma única virada de chave gramatical ou fonética por dia.
              </p>
            </div>
            <div className="p-8 border-b md:border-b-0 border-r border-[#e1ddd1] flex flex-col gap-3.5 hover:bg-[#edebe3] transition-colors">
              <span className="text-[28px] font-bold tracking-[-0.02em] text-[#d64000] leading-none">02</span>
              <h3 className="text-xl font-bold text-[#00262b]">Imersão em texto nativo</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Texto curto no idioma com áudio nativo em velocidade real, vocabulário interativo e anotações filológicas profundas.
              </p>
            </div>
            <div className="p-8 border-b md:border-b-0 border-r border-[#e1ddd1] flex flex-col gap-3.5 hover:bg-[#edebe3] transition-colors">
              <span className="text-[28px] font-bold tracking-[-0.02em] text-[#d64000] leading-none">03</span>
              <h3 className="text-xl font-bold text-[#00262b]">Prática com repetição</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Exercícios de preenchimento e fixação com algoritmo espaçado (SM-2) para solidificar o que foi aprendido a longo prazo.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#e1ddd1] mt-18 py-11 pb-16" id="sobre">
        <div className="max-w-[1140px] mx-auto px-7 flex flex-wrap items-start justify-between gap-6">
          <div className="text-xs tracking-[0.22em] uppercase text-[#9ca3af] leading-relaxed">
            <strong className="text-[#6b7280] font-bold">LINVUU</strong> · PLATAFORMA EDITORIAL DE IDIOMAS<br />
            SÃO PAULO · 2026 · CONTATO@LINVUU.COM
          </div>
          <nav className="flex gap-6.5 text-xs font-medium tracking-[0.08em] uppercase text-[#6b7280]">
            <a href="#trilhas" className="hover:text-[#d64000] transition-colors">Trilhas</a>
            <a href="#metodo" className="hover:text-[#d64000] transition-colors">Método</a>
            <a href="app.html" className="hover:text-[#d64000] transition-colors">Sala de Estudos</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
