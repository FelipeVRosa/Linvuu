import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CURSOS, DIAS, FASES, NIVEL_CURTO, NIVEL_LABEL } from '../lib/content';
import { CursoCard } from '../components/CursoCard';
import { Faq } from '../components/Faq';
import { Vitrine } from '../components/Vitrine';
import { Avaliacoes } from '../components/Avaliacoes';
import { IconeIdiomas, IconeStem } from '../components/Icones';
import { EQUIPE } from '../config/equipe';
import { usePageTitle } from '../lib/usePageTitle';

const IDIOMAS = CURSOS.filter((c) => c.area === 'idiomas');
const STEM = CURSOS.filter((c) => c.area === 'stem');
const NIVEIS = ['zero', 'a1', 'a2', 'b1', 'b2', 'c1'];
const rotulo = (nome: string, nativo: string) => (nome === nativo ? nome : `${nome} · ${nativo}`);

const METODO = [
  { n: '01', t: 'Comece aqui', d: 'Ouça cada palavra com áudio nativo e leia junto. É o primeiro contato do dia com o idioma, antes de qualquer regra.' },
  { n: '02', t: 'Imersão', d: 'Textos e diálogos curtos para ver o idioma em uso, com tradução sob demanda e vocabulário destacado.' },
  { n: '03', t: 'Prática', d: 'Exercício com feedback imediato e revisão espaçada do que você errou.' },
];

type Filtro = 'todos' | 'idiomas' | 'stem';

export default function Home() {
  usePageTitle();
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
            <span className="hero-kicker">Idiomas e STEM</span>
            <h1 className="hero-h1">100 dias rumo à proficiência.</h1>
            <p className="hero-sub">Quinze minutos por dia: ouça, leia, mergulhe no idioma e pratique com feedback. Do primeiro dia à autonomia, com pessoas reais do outro lado.</p>
            <form className="hero-search" onSubmit={buscar}>
              <div className="search-field">
                <label htmlFor="tgt-lang">Quero aprender</label>
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
                <label htmlFor="level">Meu nível</label>
                <select id="level" value={ehStem ? 'stem' : nivel} disabled={ehStem} onChange={(e) => setNivel(e.target.value)}>
                  {ehStem
                    ? <option value="stem">Em breve para STEM</option>
                    : NIVEIS.map((n) => <option key={n} value={n}>{NIVEL_LABEL[n]}</option>)}
                </select>
              </div>
              <button type="submit" className="search-btn">Ver minha trilha</button>
            </form>
          </div>

          <aside className="hoje" aria-label="Exemplo de um dia da trilha">
            <span className="hoje-kicker">Dia 1 de 100</span>
            <h2>{DIAS[0].titulo}</h2>
            <p>{DIAS[0].objetivo}</p>
            <ol>
              <li><span>01</span> Comece aqui</li>
              <li><span>02</span> Imersão</li>
              <li><span>03</span> Prática</li>
            </ol>
            <span className="hoje-meta">15 minutos</span>
          </aside>
        </div>
      </section>

      <div className="band">
        <section className="section" aria-labelledby="h-explorar">
          <div className="section-head">
            <span className="section-kicker">Explore</span>
            <h2 className="section-h2" id="h-explorar">Escolha o que aprender</h2>
          </div>
          <div className="areas">
            <Link to="/cursos?area=idiomas" className="area-card area-idiomas">
              <span className="area-icone"><IconeIdiomas size={30} /></span>
              <h3>Idiomas</h3>
              <p>Russo, alemão, inglês, espanhol, francês e português. Seis trilhas de 100 dias, do zero a uma base B1.</p>
              <span className="area-ver">Ver idiomas →</span>
            </Link>
            <Link to="/cursos?area=stem" className="area-card area-stem">
              <span className="area-icone"><IconeStem size={30} /></span>
              <h3>STEM</h3>
              <p>Matemática e física com o mesmo rigor: definição precisa, exemplo resolvido e exercício com feedback.</p>
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
            <span className="section-kicker">A trilha</span>
            <h2 className="section-h2" id="h-100">Dez fases, cem dias</h2>
            <p className="section-sub">Cada fase dura dez dias e termina em uma revisão. A mesma trilha vale para todos os idiomas, e cada idioma ganha suas próprias aulas.</p>
          </div>
          <ol className="fases">
            {FASES.map((f) => (
              <li key={f.id}>
                <span className="fase-dias">Dias {f.dias[0]}–{f.dias[1]}</span>
                <h3>{f.titulo}</h3>
                <p>{f.resumo}</p>
                <span className="fase-nivel">{NIVEL_CURTO[f.nivel]}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="band" id="metodo">
        <section className="section" aria-labelledby="h-metodo">
          <div className="section-head">
            <span className="section-kicker">Método</span>
            <h2 className="section-h2" id="h-metodo">Três camadas, <em>um dia</em></h2>
            <p className="section-sub">Toda aula segue a mesma estrutura: ouvir e ler, mergulhar, praticar. Vídeos de apoio entram só onde os alunos mais erram.</p>
          </div>
          <div className="method-grid">
            {METODO.map((m) => (
              <div key={m.n} className="method"><span className="method-num">{m.n}</span><h3 className="method-h3">{m.t}</h3><p>{m.d}</p></div>
            ))}
          </div>
        </section>
      </div>

      <div className="band band-quente" id="livros">
        <section className="section" aria-labelledby="h-livros">
          <div className="section-head">
            <span className="section-kicker">Livros</span>
            <h2 className="section-h2" id="h-livros">Livros da Linvuu</h2>
          </div>
          <Vitrine />
        </section>
      </div>

      <div className="band" id="avaliacoes">
        <section className="section" aria-labelledby="h-aval">
          <div className="section-head">
            <span className="section-kicker">Avaliações</span>
            <h2 className="section-h2" id="h-aval">O que dizem nossos alunos</h2>
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
          <div className="section-head"><span className="section-kicker">Dúvidas</span><h2 className="section-h2" id="h-faq">Antes de começar</h2></div>
          <Faq />
        </section>
      </div>

      <section className="cta-band">
        <h2>Comece pelo dia 1.</h2>
        <p>Crie sua conta grátis e salve seu progresso, ou explore os cursos antes.</p>
        <div className="cta-botoes">
          <Link to="/cadastro" className="btn btn-primary">Cadastre-se grátis</Link>
          <Link to="/cursos" className="btn btn-claro">Ver todos os cursos</Link>
        </div>
      </section>
    </>
  );
}
