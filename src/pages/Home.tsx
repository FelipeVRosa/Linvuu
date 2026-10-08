import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS_ATIVOS, statusDoCurso } from '../lib/content';
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
import { useT } from '../i18n';
import { JsonLd } from '../components/JsonLd';
import { SITE_URL, EMAIL_OFICIAL } from '../config/site';
import { REDES } from '../config/social';
import en1 from '../../content/idiomas/en/aulas/aula-001.json';
import ru1 from '../../content/idiomas/ru/aulas/aula-001.json';
import de1 from '../../content/idiomas/de/aulas/aula-001.json';
import fr1 from '../../content/idiomas/fr/aulas/aula-001.json';
import it1 from '../../content/idiomas/it/aulas/aula-001.json';
import es1 from '../../content/idiomas/es/aulas/aula-001.json';

type Aula = { titulo: string; sessoes: { titulo: string; duracaoMin: number; blocos: { tipo: string; min: number }[] }[] };
// Frase de amostra de cada curso: a mesma situação (pedir um café) em cada idioma.
const AMOSTRA: Record<string, { nome: string; frase: string; aula: Aula }> = {
  en: { nome: 'Inglês', frase: 'Hello. A coffee, please.', aula: en1 as Aula },
  ru: { nome: 'Russo', frase: 'Здравствуйте. Мне кофе, пожалуйста.', aula: ru1 as Aula },
  de: { nome: 'Alemão', frase: 'Guten Tag. Einen Kaffee, bitte.', aula: de1 as Aula },
  es: { nome: 'Espanhol', frase: 'Hola. Un café, por favor.', aula: es1 as Aula },
  it: { nome: 'Italiano', frase: 'Buongiorno. Un caffè, per favore.', aula: it1 as Aula },
  fr: { nome: 'Francês', frase: 'Bonjour. Un café, s’il vous plaît.', aula: fr1 as Aula },
};
const NO_AR = CURSOS_ATIVOS.filter((c) => AMOSTRA[c.id] && (statusDoCurso(c.id)?.publicadas ?? 0) > 0);
const PADRAO = NO_AR.find((c) => c.status === 'disponivel')?.id ?? NO_AR[0]?.id;

const FOTOS = [
  { src: '/fotos/comece.jpg', alt: 'Mãos usando um tablet sobre uma mesa de madeira' },
  { src: '/fotos/imersao.jpg', alt: 'Pessoas lendo em uma livraria com estantes de livros' },
  { src: '/fotos/pratica.jpg', alt: 'Homem escrevendo em um caderno' },
];

// Exercício sem cadastro: a mesma pergunta em cada idioma. A voz usa a gravação, se existir, ou a do navegador.
const EXERCICIO: Record<string, string> = { en: 'Where is the station?', ru: 'Где вокзал?', de: 'Wo ist der Bahnhof?', fr: 'Où est la gare ?', it: 'Dov’è la stazione?', es: '¿Dónde está la estación?' };
const OPCOES = ['Onde fica a estação?', 'Quanto custa isto?', 'Que horas são?'];

function Experimente({ lang }: { lang: string }) {
  const [esc, setEsc] = useState<string | null>(null);
  const [tocando, setTocando] = useState(false);
  const frase = EXERCICIO[lang];
  const ouvir = async () => { setTocando(true); try { await falar(frase, lang); } finally { setTocando(false); } };
  const certo = esc === OPCOES[0];
  return (
    <div className="lv-exp-box">
      <h3>O que ela disse?</h3>
      <button type="button" className="lv-ouvir" onClick={ouvir} aria-label="Ouvir a frase">{tocando ? 'Tocando…' : 'Ouvir a frase'}</button>
      <div className="lv-exp-opc">
        {OPCOES.map((o) => (
          <button key={o} type="button" disabled={certo} className={esc === o ? (o === OPCOES[0] ? 'certo' : 'errado') : ''} onClick={() => setEsc(o)}>{o}</button>
        ))}
      </div>
      <p className="lv-exp-msg" aria-live="polite">
        {esc === null ? '' : certo ? `Isso mesmo: “${frase}” é “Onde fica a estação?”. Na aula 1 você começa assim, ouvindo antes de ler.` : 'Ainda não. Ouça de novo com calma e tente outra vez.'}
      </p>
    </div>
  );
}

const NIVEIS = [
  { cod: 'A1', nome: 'Do zero', texto: 'Se apresentar, pedir o que precisa e entender frases do dia a dia.', valor: 0.34, sem: 3 },
  { cod: 'A2', nome: 'Dia a dia', texto: 'Falar de rotina, compras, passado e planos, em frases simples.', valor: 0.67, sem: 11 },
  { cod: 'B1', nome: 'Independente', texto: 'Se virar em viagem, estudo e trabalho; contar experiências e dar opinião.', valor: 1, sem: 7 },
];

export default function Home() {
  usePageTitle();
  const t = useT();
  const [lang, setLang] = useState(PADRAO);
  const [tocando, setTocando] = useState(false);
  const amostra = lang ? AMOSTRA[lang] : undefined;
  const sessao = amostra?.aula.sessoes[0];
  const aulasNoAr = NO_AR.map((c) => `${c.nome} (${Math.floor((statusDoCurso(c.id)?.publicadas ?? 0) / 4)})`).join(', ');

  const ouvir = async () => {
    if (!lang || !amostra) return;
    setTocando(true);
    try { await falar(amostra.frase, lang); } finally { setTocando(false); }
  };

  return (
    <>
      <section className="lv-hero">
        <div className="lv-hero-in">
          <div className="lv-hero-main">
            <p className="lv-kicker">{t.hero.kicker}</p>
            <h1>Pare de colecionar apps. Comece a falar o idioma.</h1>
            <p className="lv-hero-sub">{t.hero.sub}</p>
            <div className="lv-hero-botoes">
              <Link to={lang ? `/curso/${lang}/dia/1` : '/cursos'} className="btn btn-primary">Fazer as 2 primeiras aulas grátis</Link>
              <Link to="/cursos" className="lv-link-claro">Ver os cursos →</Link>
            </div>
            <p className="lv-hero-nota">Sem cartão para começar. Depois da 2ª aula, R$ 139/mês. Aulas já no ar: {aulasNoAr}.</p>
          </div>

          {amostra && sessao && lang && (
            <aside className="lv-amostra" aria-label="Exemplo de uma sessão">
              <div className="lv-abas" role="tablist" aria-label="Idioma do exemplo">
                {NO_AR.map((c) => (
                  <button key={c.id} type="button" role="tab" aria-selected={lang === c.id} className={lang === c.id ? 'on' : ''} onClick={() => setLang(c.id)}>{c.nome}</button>
                ))}
              </div>
              <p className="lv-am-pt">Olá. Um café, por favor.</p>
              <div className="lv-am-alvo">
                <p lang={lang}>{amostra.frase}</p>
                <button type="button" className={`lv-play${tocando ? ' tocando' : ''}`} aria-label={`Ouvir: ${amostra.frase}`} onClick={ouvir}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" /></svg>
                </button>
              </div>
              <p className="lv-am-meta">Aula 1 · sessão 1 de 4 · {sessao.duracaoMin} minutos</p>
              <ol className="lv-am-lista">
                {sessao.blocos.map((b, i) => (
                  <li key={i}><span>{ROTULO_BLOCO[b.tipo as keyof typeof ROTULO_BLOCO]}</span><small>{b.min} min</small></li>
                ))}
              </ol>
              <Traco valor={0.12} altura={12} semente={7} trilha rotulo="Início do caminho" />
            </aside>
          )}
        </div>
      </section>

      <section className="lv-prova" aria-label="Por que a Linvuu">
        <ul>
          {t.prova.map((x) => <li key={x.t}><strong>{x.t}</strong><span>{x.d}</span></li>)}
        </ul>
      </section>

      <section className="lv-sec" id="cursos" aria-labelledby="h-cursos">
        <p className="lv-kicker lv-kicker-esc">{t.explorar.kicker}</p>
        <h2 id="h-cursos">{t.explorar.titulo}</h2>
        <p className="lv-sec-sub">{t.explorar.idiomasTexto}</p>
        <div className="lv-grade">{CURSOS_ATIVOS.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
      </section>

      {lang && EXERCICIO[lang] && (
        <section className="lv-sec lv-sec-papel" aria-labelledby="h-exp">
          <div className="lv-exp">
            <div>
              <p className="lv-kicker lv-kicker-esc">Experimente agora</p>
              <h2 id="h-exp">Ouça uma frase e escolha o que ela quer dizer.</h2>
              <p className="lv-sec-sub">Sem cadastro. Você pode ouvir quantas vezes quiser; errar faz parte.</p>
            </div>
            <Experimente key={lang} lang={lang} />
          </div>
        </section>
      )}

      <section className="lv-sec" aria-labelledby="h-niveis">
        <p className="lv-kicker lv-kicker-esc">Níveis</p>
        <h2 id="h-niveis">O que você consegue fazer em cada nível</h2>
        <div className="lv-niveis">
          {NIVEIS.map((n) => (
            <article key={n.cod}>
              <div className="lv-nivel-cod"><span className="lv-cod">{n.cod}</span><span>{n.nome}</span></div>
              <Traco valor={n.valor} altura={12} semente={n.sem} />
              <p>{n.texto}</p>
            </article>
          ))}
        </div>
        <details className="lv-cefr">
          <summary>O que significam A1, A2 e B1?</summary>
          <p>São os níveis do Quadro Europeu Comum de Referência para Línguas, a escala que escolas e exames usam no mundo todo. Organizamos o curso por ela, e a Linvuu emite um certificado a cada nível concluído.</p>
        </details>
      </section>

      <section className="lv-sec" id="metodo" aria-labelledby="h-metodo">
        <p className="lv-kicker lv-kicker-esc">{t.metodo.kicker}</p>
        <h2 id="h-metodo">{t.metodo.titulo} {t.metodo.destaque}</h2>
        <p className="lv-sec-sub">{t.metodo.sub}</p>
        <div className="lv-fotos">
          {FOTOS.map((f) => <img key={f.src} src={f.src} alt={f.alt} width="1000" height="750" loading="lazy" decoding="async" />)}
        </div>
        <div className="lv-passos">
          {t.metodo.passos.map((m) => (
            <div key={m.n}><span className="lv-num">{m.n}</span><h3>{m.t}</h3><p>{m.d}</p></div>
          ))}
        </div>
      </section>

      {CARTA.paragrafos.length > 0 && CARTA.assinatura && (
        <section className="lv-sec" aria-labelledby="h-carta">
          <p className="lv-kicker lv-kicker-esc">Quem faz a Linvuu</p>
          <h2 id="h-carta" className="sr-only">Carta</h2>
          <div className="lv-carta">{CARTA.paragrafos.map((p, i) => <p key={i}>{p}</p>)}<p className="lv-carta-ass">{CARTA.assinatura}</p></div>
        </section>
      )}

      {LIVROS.length > 0 && (
        <section className="lv-sec lv-sec-papel" id="livros" aria-labelledby="h-livros">
          <p className="lv-kicker lv-kicker-esc">{t.livros.kicker}</p>
          <h2 id="h-livros">{t.livros.titulo}</h2>
          <Vitrine />
        </section>
      )}

      {DEPOIMENTOS.length > 0 && (
        <section className="lv-sec" id="avaliacoes" aria-labelledby="h-aval">
          <p className="lv-kicker lv-kicker-esc">{t.avaliacoes.kicker}</p>
          <h2 id="h-aval">{t.avaliacoes.titulo}</h2>
          <Avaliacoes />
        </section>
      )}

      <section className="lv-sec" id="planos" aria-labelledby="h-planos">
          <h2 id="h-planos">Preço</h2>
          <div className="lv-planos">
            <div className="lv-plano">
              <h3>Grátis</h3>
              <p className="lv-plano-preco">R$ 0</p>
              <p>As 2 primeiras aulas de cada curso, sem cartão.</p>
              <Link to={lang ? `/curso/${lang}/dia/1` : '/cursos'} className="btn btn-ghost">Começar grátis</Link>
            </div>
            <div className="lv-plano lv-plano-dest">
              <h3>Assinatura</h3>
              <p className="lv-plano-preco">R$ 139<span> por mês</span></p>
              <p>Todos os cursos e todas as aulas. Cancele quando quiser. Reembolso integral em até 7 dias.</p>
              <Link to="/assinatura" className="btn btn-primary">Assinar</Link>
            </div>
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
          { '@type': 'WebSite', name: 'Linvuu', url: SITE_URL, inLanguage: 'pt-BR' },
          { '@type': 'FAQPage', mainEntity: t.faqItens.map((i) => ({ '@type': 'Question', name: i.p, acceptedAnswer: { '@type': 'Answer', text: i.r } })) },
        ],
      }} />
    </>
  );
}
