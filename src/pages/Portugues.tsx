import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';
import { JsonLd } from '../components/JsonLd';
import { SITE_URL } from '../config/site';
import { PRECO_MENSAL, SESSOES_GRATIS } from '../config/planos';

type Par = { pt: string; en: string };
const NIVEIS: { cod: string; pt: string; en: string; aulas: string }[] = [
  { cod: 'A1', aulas: '1–18', pt: 'Você se apresenta, pede comida, pergunta o caminho, fala da família, da rotina e de planos, e lê e pronuncia os sons do português.', en: 'You introduce yourself, order food, ask the way, talk about family, routine and plans, and read and say the sounds of Portuguese.' },
  { cod: 'A2', aulas: '19–38', pt: 'Você conta o que aconteceu, usa os pronomes como os brasileiros falam, dá instruções e resolve saúde, viagem, trabalho, telefone e aluguel.', en: 'You tell what happened, use object pronouns the way Brazilians speak, give instructions, and handle health, travel, work, the phone and renting.' },
  { cod: 'B1', aulas: '39–62', pt: 'Você usa o subjuntivo, hipóteses e discurso indireto, escreve e-mails formais, acompanha notícias e resolve banco, CPF, SUS e Pix.', en: 'You use the subjunctive, hypotheses and indirect speech, write formal e-mails, follow the news and handle a bank, CPF, SUS and Pix.' },
];
const PONTOS: Par[] = [
  { pt: 'Explicações em inglês, feitas para quem fala inglês: sons nasais, o «r», «lh» e «nh», ser × estar, contrações, falsos amigos.', en: 'Explanations in English, made for English speakers: nasal sounds, the «r», «lh» and «nh», ser × estar, contractions, false friends.' },
  { pt: 'Português do Brasil real: «você», «a gente», «tá», «pra», com a forma escrita ao lado e a indicação de quando usar cada uma.', en: 'Real Brazilian Portuguese: «você», «a gente», «tá», «pra», with the written form beside it and a note on when to use each.' },
  { pt: 'Situações de quem vive, estuda ou trabalha no Brasil: café, mercado, ônibus, hotel, médico, aluguel, banco.', en: 'Situations for people who live, study or work in Brazil: café, supermarket, bus, hotel, doctor, renting, bank.' },
  { pt: 'Sessões de cerca de 30 minutos: palavras, gramática, diálogo, exercícios com resposta imediata e uma tarefa para falar ou escrever.', en: 'Sessions of about 30 minutes: words, grammar, dialogue, exercises with instant feedback and a speaking or writing task.' },
];

export default function Portugues() {
  usePageTitle('Português como língua estrangeira · Portuguese as a Foreign Language', 'Curso de português do Brasil para estrangeiros, do A1 ao B1, explicado em inglês. Brazilian Portuguese for English speakers, A1 to B1, 62 lessons.');
  return (
    <div className="pagina pt-estrangeiros">
      <JsonLd dados={{ '@context': 'https://schema.org', '@type': 'Course', name: 'Português como língua estrangeira · Portuguese as a Foreign Language', description: 'Brazilian Portuguese from A1 to B1, explained in English. Português do Brasil para estrangeiros.', inLanguage: ['en', 'pt-BR'], teaches: 'Brazilian Portuguese', url: `${SITE_URL}/portugues`, provider: { '@type': 'Organization', name: 'Linvuu', url: SITE_URL } }} />

      <header className="curso-topo">
        <div>
          <p className="lv-kicker lv-kicker-esc">Português para estrangeiros · Portuguese for foreigners</p>
          <h1 className="pagina-h1">Português como língua estrangeira <em lang="en">Portuguese as a Foreign Language</em></h1>
          <p className="lead" lang="pt-BR">Aprenda o português do Brasil do zero ao nível B1, com aulas explicadas em inglês. São 62 aulas de quatro sessões, com áudio, diálogos, gramática e exercícios.</p>
          <p className="lead" lang="en">Learn Brazilian Portuguese from zero to B1, with every lesson explained in English. 62 lessons of four sessions each, with audio, dialogues, grammar and exercises.</p>
          <div className="lv-hero-botoes">
            <Link to="/curso/br/dia/1" className="btn btn-primary">Start lesson 1 free · Começar a aula 1 grátis</Link>
            <Link to="/curso/br" className="btn btn-ghost">See all lessons · Ver todas as aulas</Link>
          </div>
          <p className="nota">
            <span lang="pt-BR">As primeiras {SESSOES_GRATIS} sessões são grátis. Depois, {PRECO_MENSAL} por mês, com todos os cursos da Linvuu.</span>{' '}
            <span lang="en">The first {SESSOES_GRATIS} sessions are free. After that, {PRECO_MENSAL} per month (about the price of a card charge in reais), all Linvuu courses included.</span>
          </p>
        </div>
      </header>

      <section aria-labelledby="pt-niveis">
        <h2 id="pt-niveis" className="pagina-h2">Níveis · Levels</h2>
        <div className="lv-niveis">
          {NIVEIS.map((n) => (
            <article key={n.cod}>
              <div className="lv-nivel-cod"><span className="lv-cod">{n.cod}</span><span>Lessons {n.aulas}</span></div>
              <p lang="pt-BR">{n.pt}</p>
              <p lang="en">{n.en}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="pt-como">
        <h2 id="pt-como" className="pagina-h2">Como é o curso · How the course works</h2>
        <ul className="pt-pontos">
          {PONTOS.map((p) => <li key={p.en}><span lang="pt-BR">{p.pt}</span><span lang="en">{p.en}</span></li>)}
        </ul>
      </section>

      <section aria-labelledby="pt-honesto">
        <h2 id="pt-honesto" className="pagina-h2">Com honestidade · Straight answers</h2>
        <ul className="pt-pontos">
          <li><span lang="pt-BR">Os níveis A1, A2 e B1 descrevem o que você consegue fazer. Não prometemos fluência, prazo nem equivalência com o Celpe-Bras ou outro exame. Cada nível concluído dá um certificado emitido pela Linvuu.</span><span lang="en">A1, A2 and B1 describe what you can do. We do not promise fluency, a deadline or equivalence with Celpe-Bras or any other exam. Each completed level gives a certificate issued by Linvuu.</span></li>
          <li><span lang="pt-BR">O áudio usa vozes sintéticas do português do Brasil e ainda passa por revisão de professores. Se algo soar errado, avise: <a href="mailto:hello.linvuu@gmail.com">hello.linvuu@gmail.com</a>.</span><span lang="en">The audio uses synthetic Brazilian Portuguese voices and is still being reviewed by teachers. If anything sounds wrong, tell us: <a href="mailto:hello.linvuu@gmail.com">hello.linvuu@gmail.com</a>.</span></li>
          <li><span lang="pt-BR">O site, o pagamento e os termos legais estão em português; as aulas, em inglês. Pagamento por cartão, que converte a moeda; Pix, apenas para quem tem conta no Brasil.</span><span lang="en">The site menus, payment page and legal terms are in Portuguese; the lessons are in English. Pay by card (your bank converts the currency); Pix only works with a Brazilian bank account.</span></li>
        </ul>
        <div className="lv-hero-botoes">
          <Link to="/curso/br/dia/1" className="btn btn-primary">Start lesson 1 free · Começar a aula 1 grátis</Link>
          <Link to="/assinatura" className="btn btn-ghost">Plans · Planos</Link>
        </div>
      </section>
    </div>
  );
}
