import { useState } from 'react';
import { Link } from 'react-router-dom';
import { falar } from '../lib/audio';
import { usePageTitle } from '../lib/usePageTitle';
import { JsonLd } from '../components/JsonLd';
import { useRetomadaGeral } from '../lib/retomar';
import './home-brasileiros.css';

const idiomas = [
  { id: 'en', nome: 'Inglês', oi: 'Hello', frase: 'Hello. A coffee, please.', lang: 'en', detalhe: 'Do primeiro hello às suas próximas conversas.' },
  { id: 'es', nome: 'Espanhol', oi: 'Hola', frase: 'Hola. Un café, por favor.', lang: 'es', detalhe: 'Vá além do portunhol, com explicações que fazem sentido.' },
  { id: 'fr', nome: 'Francês', oi: 'Bonjour', frase: 'Bonjour. Un café, s’il vous plaît.', lang: 'fr', detalhe: 'Descubra os sons e entenda a lógica do francês.' },
  { id: 'it', nome: 'Italiano', oi: 'Ciao', frase: 'Buongiorno. Un caffè, per favore.', lang: 'it', detalhe: 'Aproxime a vontade de falar da prática diária.' },
  { id: 'de', nome: 'Alemão', oi: 'Hallo', frase: 'Guten Tag. Einen Kaffee, bitte.', lang: 'de', detalhe: 'Descomplique os primeiros passos, uma regra de cada vez.' },
  { id: 'ru', nome: 'Russo', oi: 'Привет', frase: 'Здравствуйте. Мне кофе, пожалуйста.', lang: 'ru', detalhe: 'Comece pelo cirílico. Construa o resto com orientação.' },
];
const planos = [
  { nome: 'Start', quantidade: '1 idioma', limite: 1, texto: 'Foco no seu primeiro objetivo.' },
  { nome: 'Basic', quantidade: '2 idiomas', limite: 2, texto: 'Espaço para uma nova possibilidade.' },
  { nome: 'Intermediário', quantidade: '3 idiomas', limite: 3, texto: 'Mais caminhos para a sua curiosidade.' },
  { nome: 'Premium', quantidade: 'Todos os idiomas', limite: 6, texto: 'Liberdade para explorar mais.' },
];
const perguntas = [
  ['Preciso saber alguma coisa para começar?', 'Não. Você pode começar do zero. As explicações são em português e a trilha apresenta o idioma passo a passo.'],
  ['Como posso conhecer as aulas?', 'As duas primeiras aulas de cada curso são gratuitas. Você pode experimentar antes de decidir pela assinatura.'],
  ['Os novos planos já estão disponíveis?', 'Start, Basic, Intermediário e Premium estão em preparação. A comparação nesta página apresenta a proposta; os preços e as condições serão informados antes da contratação. A seleção de idiomas aqui não altera sua conta.'],
  ['Qual é a diferença do apoio no Premium?', 'A proposta do Premium inclui professor para dúvidas específicas sobre o conteúdo pelo WhatsApp Business. Horários e prazo de resposta serão definidos antes do lançamento. Todos os planos terão a mesma qualidade de conteúdo e suporte técnico.'],
  ['Quanto tempo preciso reservar?', 'As sessões são organizadas para cerca de 30 minutos. Você pode estudar no seu ritmo e voltar para continuar.'],
];
export default function HomeBrasileiros() {
  usePageTitle();
  const retomada = useRetomadaGeral();
  const [idioma, setIdioma] = useState(idiomas[0]);
  const [tocando, setTocando] = useState(false);
  const [erro, setErro] = useState('');
  const [plano, setPlano] = useState<number | null>(null);
  const [escolhas, setEscolhas] = useState<string[]>([]);
  const ouvir = async () => {
    setErro(''); setTocando(true);
    try { await falar(idioma.frase, idioma.id); }
    catch { setErro('Não foi possível tocar o áudio. Tente novamente.'); }
    finally { setTocando(false); }
  };
  const escolherPlano = (n: number) => { setPlano(n); setEscolhas([]); };
  return <div className="br-home">
    {retomada && <div className="br-resume"><span>Seu próximo passo: {retomada.nome}</span><Link to={`/curso/${retomada.idioma}/dia/${retomada.dia}`}>Continuar minha sessão →</Link></div>}
    <section className="br-hero">
      <div className="br-hero-copy"><p className="br-eyebrow">CURSOS DE IDIOMAS FEITOS PARA BRASILEIROS</p>
        <h1>O mundo tem<br />muito a dizer.<br /><em>Entre na conversa.</em></h1>
        <p className="br-lead">Aprenda um novo idioma com explicações que fazem sentido para brasileiros. Ouça, entenda e pratique — um passo possível de cada vez.</p>
        <div className="br-actions"><a className="br-button" href="#planos">Encontrar meu plano <span aria-hidden="true">↗</span></a><a className="br-text-link" href="#experimente">Experimentar o método ↓</a></div>
        <p className="br-fine">2 primeiras aulas grátis · Sem cartão para experimentar</p>
      </div>
      <div className="br-scene" id="experimente">
        <span className="br-orbit br-orbit-one" aria-hidden="true">Olá, mundo.</span><span className="br-orbit br-orbit-two" aria-hidden="true">Um novo começo ↗</span>
        <div className="br-demo"><div className="br-demo-top"><span className="br-dot" /> UM GOSTINHO DO SEU PRÓXIMO IDIOMA</div>
          <label htmlFor="br-idioma">Quero ouvir em</label><select id="br-idioma" value={idioma.id} disabled={tocando} onChange={e => {setIdioma(idiomas.find(i => i.id === e.target.value)!); setErro('');}}>{idiomas.map(i => <option key={i.id} value={i.id}>{i.nome}</option>)}</select>
          <span className="br-demo-context">NO CAFÉ</span><p className="br-phrase" lang={idioma.lang}>{idioma.frase}</p><p className="br-translation">Olá. Um café, por favor.</p>
          <div className="br-sound"><button type="button" onClick={ouvir} disabled={tocando} aria-label={`Ouvir frase em ${idioma.nome}`}><span aria-hidden="true">{tocando ? '…' : '▶'}</span></button><div className={tocando ? 'br-wave playing' : 'br-wave'} aria-hidden="true">{Array.from({length: 23}, (_, i) => <i key={i} style={{height: `${12 + (i * 17 % 35)}px`, animationDelay: `${i * 45}ms`}} />)}</div><span>{tocando ? 'Ouvindo…' : 'Ouça. Repita.'}</span></div>
          <p role="status" className="br-error">{erro}</p><div className="br-demo-foot"><span>Pequenas frases. Novas possibilidades.</span><Link to={`/curso/${idioma.id}/dia/1`}>Abrir aula grátis →</Link></div>
        </div>
      </div>
    </section>
    <div className="br-benefits"><span><strong>Em português.</strong> Desde a explicação.</span><span><strong>Com áudio.</strong> Para ouvir e repetir.</span><span><strong>No seu ritmo.</strong> Uma sessão por vez.</span></div>
    <section className="br-section" id="metodo"><div className="br-section-head"><div><p className="br-eyebrow">MENOS ADIVINHAÇÃO. MAIS COMPREENSÃO.</p><h2>Entender muda<br />o jeito de aprender.</h2></div><p>Você traz o português. A Linvuu usa essa base para explicar os sons, as estruturas e os erros comuns no novo idioma.</p></div>
      <div className="br-method">{[
        ['01', 'Ouça o idioma acontecer.', 'Palavras e diálogos com áudio para ligar o que você lê ao que você escuta.', '◉', '/fotos/comece.jpg'],
        ['02', 'Entenda o porquê.', 'Explicações em português, exemplos e comparações para construir uma base.', 'Aa', '/fotos/imersao.jpg'],
        ['03', 'Coloque em prática.', 'Exercícios com correção e atividades de fala e escrita para usar o que aprendeu.', '↗', '/fotos/pratica.jpg'],
      ].map(([n, titulo, texto, icon, foto]) => <article key={n}><img className="br-method-foto" src={foto} alt="" width="1000" height="600" loading="lazy" decoding="async" /><div className="br-method-top"><span>{n}</span><b aria-hidden="true">{icon}</b></div><h3>{titulo}</h3><p>{texto}</p></article>)}</div>
    </section>
    <section className="br-plans-wrap" id="planos"><div className="br-section"><div className="br-section-head"><div><p className="br-eyebrow">SEU OBJETIVO. SEU ESPAÇO PARA CRESCER.</p><h2>Quanto do mundo<br />você quer conhecer?</h2></div><p>Compare a proposta dos novos planos. Depois, explore os idiomas que combinam com você.</p></div>
      <p className="br-status">Novos planos em preparação · Preços ainda não definidos</p>
      <div className="br-plans">{planos.map((p, n) => <article key={p.nome} className={plano === n ? 'br-plan selected' : 'br-plan'}><span className="br-plan-name">{p.nome}</span><h3>{p.quantidade}</h3><p>{p.texto}</p><ul><li>Conteúdo com explicações em português</li><li>Áudio e exercícios</li><li>Suporte técnico</li>{n === 3 && <li>Professor para dúvidas específicas pelo WhatsApp Business</li>}</ul><button type="button" className="br-button" aria-pressed={plano === n} onClick={() => escolherPlano(n)}>{plano === n ? 'Selecionado ✓' : 'Explorar este plano'}</button></article>)}</div>
      <p className="br-plan-note">A mesma qualidade de ensino em todos os planos. O nome Intermediário indica a quantidade de idiomas, não o seu nível de conhecimento.</p>
      {plano !== null && <div className="br-choose"><h3>Quais idiomas despertam sua curiosidade?</h3><p id="br-choose-help">{planos[plano].nome}: escolha até {planos[plano].limite} {planos[plano].limite === 1 ? 'idioma' : 'idiomas'} para explorar. Esta é uma prévia, sem contratação.</p><div className="br-choices" role="group" aria-describedby="br-choose-help" aria-label="Idiomas de interesse">{idiomas.map(i => <button key={i.id} type="button" aria-pressed={escolhas.includes(i.id)} disabled={!escolhas.includes(i.id) && escolhas.length >= planos[plano].limite} onClick={() => setEscolhas(v => v.includes(i.id) ? v.filter(x => x !== i.id) : [...v, i.id])}>{i.nome}{escolhas.includes(i.id) ? ' ✓' : ''}</button>)}</div><p aria-live="polite">{escolhas.length} de {planos[plano].limite} selecionados</p>{escolhas.map(id => <Link key={id} className="br-sample-link" to={`/curso/${id}/dia/1`}>Experimentar {idiomas.find(i => i.id === id)?.nome} →</Link>)}</div>}
      <div className="br-current"><span>Quer consultar a oferta disponível hoje?</span><Link to="/assinatura">Ver assinatura atual →</Link></div>
    </div></section>
    <section className="br-section" id="idiomas"><div className="br-section-head"><div><p className="br-eyebrow">UMA VONTADE JÁ É UM COMEÇO</p><h2>Qual será o seu<br />próximo “olá”?</h2></div><p>Para viajar, se aproximar de outras culturas ou realizar um objetivo seu. Encontre um idioma para começar.</p></div><div className="br-languages">{idiomas.map((i, n) => <Link key={i.id} to={`/curso/${i.id}`} className={`br-language br-language-${n}`}><span className="br-greeting" lang={i.lang}>{i.oi}<span aria-hidden="true">.</span></span><div><h3>{i.nome}</h3><span aria-hidden="true">↗</span></div><p>{i.detalhe}</p></Link>)}</div></section>
    <section className="br-book"><div className="br-book-art" aria-hidden="true"><span>COLEÇÃO LINVUU</span><strong>Um idioma.<br />Muitas<br /><em>descobertas.</em></strong><span>LEIA · OUÇA · EXPLORE</span></div><div><p className="br-eyebrow">PARA QUEM GOSTA DE IR ALÉM</p><h2>Seu aprendizado<br />também tem páginas.</h2><p>Explore os livros da Linvuu, leia com calma e volte aos assuntos que merecem mais atenção.</p><Link className="br-text-link" to="/livros">Conhecer a coleção →</Link></div></section>
    <section className="br-section br-faq" id="faq"><div><p className="br-eyebrow">VAMOS COMEÇAR BEM</p><h2>Uma dúvida<br />antes do primeiro passo?</h2><Link to="/contato" className="br-text-link">Fale com a Linvuu →</Link></div><div>{perguntas.map(([p,r]) => <details key={p}><summary>{p}</summary><p>{r}</p></details>)}</div></section>
    <section className="br-last"><p className="br-eyebrow">SEU PRÓXIMO IDIOMA COMEÇA COM UM PASSO</p><h2>Abra espaço para<br /><em>novas conversas.</em></h2><a href="#planos" className="br-button">Encontrar meu plano ↗</a><p>Conheça a proposta. Explore os idiomas. Experimente uma aula.</p></section>
    <JsonLd dados={{'@context':'https://schema.org','@type':'EducationalOrganization',name:'Linvuu',url:'https://linvuu.com.br',logo:'https://linvuu.com.br/brand/linvuu-logo.png'}} />
  </div>;
}
