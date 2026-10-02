import React, { useState } from 'react';
import { LinvuuLogo } from './components/LinvuuLogo';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-brand">
            <LinvuuLogo height={36} showWordmark={true} />
          </a>
          
          <button 
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#sobre">Sobre</a>
            <a href="#idiomas">Idiomas</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#familia">Família</a>
            <a href="#contato">Contato</a>
          </div>

          <a href="#começar" className="navbar-cta">Começar Agora</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-main">
              <div className="hero-kicker">
                <span className="line"></span>
                Método Linvuu · sem esforço
              </div>
              <h1 className="hero-title">
                O idioma da sua<br />
                profissão, <em>em 30 dias.</em>
              </h1>
              <p className="hero-subtitle">
                Diálogos reais do seu trabalho. Complete as lacunas e avance um passo por dia. Repetição espaçada inteligente, profissionais reais, zero filtros.
              </p>
              
              <div className="hero-actions">
                <a href="#começar" className="btn btn-primary">Começar Gratuitamente</a>
                <a href="#como-funciona" className="btn btn-secondary">Ver como funciona</a>
              </div>

              <div className="hero-badges">
                <span>✓ 01 Ouça e leia</span>
                <span>✓ 02 Complete as lacunas</span>
                <span>✓ 03 Revise sem esforço</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-graphic">
                <svg viewBox="0 0 300 300" className="graphic-mascot">
                  {/* Tomate */}
                  <circle cx="150" cy="150" r="80" fill="#D4AF37" opacity="0.1"/>
                  <path d="M150 80 Q200 100 200 150 Q200 200 150 220 Q100 200 100 150 Q100 100 150 80" fill="#F5A623"/>
                  <circle cx="120" cy="130" r="8" fill="#333"/>
                  <circle cx="180" cy="130" r="8" fill="#333"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section section-light">
        <div className="container">
          <div className="section-intro">
            <span className="step-tag">Missão</span>
            <h2>A linguagem real do seu trabalho</h2>
            <p>
              Linvuu não é um app de gamificação. É um programa de imersão profissional estruturado em 30 dias, 
              com diálogos autênticos de medicina, tecnologia, engenharia, direito, negócios e hotelaria.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Vocabulário Profissional</h3>
              <p>Cada lição contém diálogos reais de seu setor. Nada genérico.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Repetição Espaçada SM-2</h3>
              <p>Algoritmo científico que garante retenção de longo prazo. Revisão sem esforço.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Áudio Nativo</h3>
              <p>Falantes profissionais do idioma. Pronúncia, entonação, cadência real.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progressão Transparente</h3>
              <p>100 lições estruturadas. Você sabe exatamente aonde quer chegar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Idiomas */}
      <section id="idiomas" className="section">
        <div className="container">
          <div className="section-intro">
            <span className="step-tag">Trilhas Disponíveis</span>
            <h2>Seis idiomas, seis mundos</h2>
          </div>

          <div className="languages-grid">
            {[
              { flag: '🇬🇧', name: 'Inglês', level: 'A1 → B2', desc: 'Negócios globais, tecnologia, medicina' },
              { flag: '🇪🇸', name: 'Espanhol', level: 'A1 → B2', desc: 'América Latina, comércio, hotelaria' },
              { flag: '🇫🇷', name: 'Francês', level: 'A1 → B2', desc: 'Diplomacia, moda, gastronomia' },
              { flag: '🇩🇪', name: 'Alemão', level: 'A1 → C1', desc: 'Engenharia, filosofia, ciência' },
              { flag: '🇮🇹', name: 'Italiano', level: 'A1 → B1', desc: 'Design, arte, arquitetura' },
              { flag: '🇷🇺', name: 'Russo', level: 'A1 → B2', desc: 'Literatura, negócios, ciência' },
            ].map((lang, i) => (
              <div key={i} className="lang-card">
                <div className="lang-flag">{lang.flag}</div>
                <h3>{lang.name}</h3>
                <p className="lang-level">{lang.level}</p>
                <p className="lang-desc">{lang.desc}</p>
                <a href="#começar" className="btn-link">Começar →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="section section-light">
        <div className="container">
          <div className="section-intro">
            <span className="step-tag">Metodologia</span>
            <h2>Como funciona Linvuu</h2>
            <p>Três passos simples, repetidos 100 vezes, até domínio total.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Ouça e Leia</h3>
              <p>
                Diálogo profissional em áudio nativo. Você lê a transcrição e ouve um falante do seu setor.
                Sem música, sem dramatização — apenas conversa real.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Complete as Lacunas</h3>
              <p>
                Toque em palavras do banco para preencher buracos no texto. Seu mascote, a família Lin,
                confere sua resposta instantaneamente.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Revise sem Esforço</h3>
              <p>
                O algoritmo SM-2 agenda revisões automáticas. Você nunca esquece. Estude 15 minutos por dia
                e chegue ao dia 100 fluente no seu setor.
              </p>
            </div>
          </div>

          <div className="methodology-visual">
            <div className="timeline">
              <div className="timeline-dot">Dia 1</div>
              <div className="timeline-label">Primeiras palavras</div>
              
              <div className="timeline-dot">Dia 30</div>
              <div className="timeline-label">Conversação básica</div>
              
              <div className="timeline-dot">Dia 100</div>
              <div className="timeline-label">Domínio profissional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Família Lin */}
      <section id="familia" className="section">
        <div className="container">
          <div className="section-intro">
            <span className="step-tag">Companheiros</span>
            <h2>A família <em>Lin</em></h2>
            <p>Sete personagens guiam cada etapa da sua jornada.</p>
          </div>

          <div className="family-grid">
            {[
              { name: 'Tomate', role: 'Dia 1 · Boas-vindas', emoji: '🍅' },
              { name: 'Puff', role: 'Vocabulário profissional', emoji: '☁️' },
              { name: 'Nuvem', role: 'Imersão e áudio', emoji: '☁️' },
              { name: 'U', role: 'Gramática na prática', emoji: '𝙐' },
              { name: 'Fantasma', role: 'Revisão espaçada', emoji: '👻' },
              { name: 'Ampulheta', role: 'Rotina de 30 dias', emoji: '⏳' },
              { name: 'Coração', role: 'Motivação e sequência', emoji: '❤️' },
            ].map((member, i) => (
              <div key={i} className="family-card">
                <div className="family-emoji">{member.emoji}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="começar" className="section section-cta">
        <div className="container cta-content">
          <h2>Comece sua jornada hoje</h2>
          <p>Primeiros 2 dias gratuitamente. Sem cartão de crédito.</p>
          <a href="#" className="btn btn-primary btn-large">Começar Agora</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <LinvuuLogo height={28} showWordmark={true} />
              <p>Idiomas sem esforço. Método científico, profissão real.</p>
            </div>
            
            <div className="footer-links">
              <div>
                <h4>Produto</h4>
                <a href="#como-funciona">Como Funciona</a>
                <a href="#idiomas">Idiomas</a>
                <a href="#familia">Família</a>
              </div>
              <div>
                <h4>Empresa</h4>
                <a href="#sobre">Sobre</a>
                <a href="#">Blog</a>
                <a href="#">Contato</a>
              </div>
              <div>
                <h4>Legal</h4>
                <a href="#">Privacidade</a>
                <a href="#">Termos</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Linvuu. Todos os direitos reservados.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
