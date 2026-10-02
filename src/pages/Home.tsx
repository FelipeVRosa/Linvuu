import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CURSOS, DIAS, FASES, NIVEL_CURTO, NIVEL_LABEL, TITULO_TRILHA } from '../lib/content';
import { CursoCard } from '../components/CursoCard';
import { Faq } from '../components/Faq';
import { DEPOIMENTOS, EQUIPE } from '../config/equipe';
import { usePageTitle } from '../lib/usePageTitle';

const IDIOMAS = CURSOS.filter((c) => c.area === 'idiomas');
const NIVEIS = ['zero', 'a1', 'a2', 'b1', 'b2', 'c1'];

const METODO = [
  { n: '01', t: 'Vídeo-aula', d: 'Aula curta, dividida em capítulos. Você assiste no seu ritmo e volta ao ponto de que precisa.' },
  { n: '02', t: 'Imersão', d: 'Texto curto com áudio nativo e tradução sob demanda. O vocabulário aparece destacado no contexto.' },
  { n: '03', t: 'Prática', d: 'Exercício com feedback imediato e revisão espaçada do que você errou.' },
];

type Filtro = 'todos' | 'idiomas' | 'stem';

export default function Home() {
  usePageTitle();
  const nav = useNavigate();
  const [tgt, setTgt] = useState('ru');
  const [nivel, setNivel] = useState('zero');
  const [filtro, setFiltro] = useState<Filtro>('todos');

  const buscar = (e: FormEvent) => { e.preventDefault(); nav(`/curso/${tgt}?nivel=${nivel}`); };
  const visiveis = CURSOS.filter((c) => filtro === 'todos' || c.area === filtro);

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-main">
            <span className="hero-kicker">Idiomas e STEM</span>
            <h1 className="hero-h1">{TITULO_TRILHA}.</h1>
            <p className="hero-sub">Uma trilha de quinze minutos por dia, com vídeo-aula, imersão e prática com feedback. Do zero à autonomia, com pessoas reais do outro lado.</p>
            <form className="hero-search" onSubmit={buscar}>
              <div className="search-field">
                <label htmlFor="tgt-lang">Quero aprender</label>
                <select id="tgt-lang" value={tgt} onChange={(e) => setTgt(e.target.value)}>
                  {IDIOMAS.map((c) => <option key={c.id} value={c.id}>{c.nome} · {c.nomeNativo}</option>)}
                </select>
              </div>
              <div className="search-field">
                <label htmlFor="level">Meu nível</label>
                <select id="level" value={nivel} onChange={(e) => setNivel(e.target.value)}>
                  {NIVEIS.map((n) => <option key={n} value={n}>{NIVEL_LABEL[n]}</option>)}
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
              <li><span>01</span> Vídeo-aula</li>
              <li><span>02</span> Imersão</li>
              <li><span>03</span> Prática</li>
            </ol>
            <span className="hoje-meta">15 minutos</span>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="h-explorar">
        <div className="section-head">
          <span className="section-kicker">Explore</span>
          <h2 className="section-h2" id="h-explorar">Escolha o que aprender</h2>
        </div>
        <div className="areas">
          <Link to="/cursos?area=idiomas" className="area-card">
            <h3>Idiomas</h3>
            <p>Russo, alemão, inglês, espanhol, francês e português. Seis trilhas de 100 dias, do zero a uma base B1.</p>
            <span>Ver idiomas →</span>
          </Link>
          <Link to="/cursos?area=stem" className="area-card">
            <h3>STEM</h3>
            <p>Matemática e física com o mesmo rigor: definição precisa, exemplo resolvido e exercício com feedback.</p>
            <span>Ver STEM →</span>
          </Link>
        </div>

        <div className="chips" role="group" aria-label="Filtrar cursos">
          {(['todos', 'idiomas', 'stem'] as Filtro[]).map((f) => (
            <button key={f} type="button" className={filtro === f ? 'on' : ''} aria-pressed={filtro === f} onClick={() => setFiltro(f)}>
              {f === 'todos' ? 'Todos' : f === 'idiomas' ? 'Idiomas' : 'STEM'}
            </button>
          ))}
        </div>
        <div className="curso-grid">{visiveis.map((c) => <CursoCard key={c.id} curso={c} />)}</div>
      </section>

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

      <section className="section" id="metodo" aria-labelledby="h-metodo">
        <div className="section-head">
          <span className="section-kicker">Método</span>
          <h2 className="section-h2" id="h-metodo">Três camadas, <em>um dia</em></h2>
          <p className="section-sub">Toda aula segue a mesma estrutura: assistir, ler, praticar. Sem aula longa, sem teoria solta.</p>
        </div>
        <div className="method-grid">
          {METODO.map((m) => (
            <div key={m.n} className="method"><span className="method-num">{m.n}</span><h3 className="method-h3">{m.t}</h3><p>{m.d}</p></div>
          ))}
        </div>
      </section>

      {EQUIPE.length > 0 && (
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
      )}

      {DEPOIMENTOS.length > 0 && (
        <section className="section" aria-labelledby="h-dep">
          <div className="section-head"><span className="section-kicker">Alunos</span><h2 className="section-h2" id="h-dep">Quem já aprendeu</h2></div>
          <div className="pessoas">
            {DEPOIMENTOS.map((d) => (
              <figure key={d.nome} className="pessoa">
                {d.foto && <img src={d.foto} alt={`Foto de ${d.nome}`} loading="lazy" />}
                <blockquote>{d.texto}</blockquote><figcaption>{d.nome} · {d.curso}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section" id="faq" aria-labelledby="h-faq">
        <div className="section-head"><span className="section-kicker">Dúvidas</span><h2 className="section-h2" id="h-faq">Antes de começar</h2></div>
        <Faq />
      </section>

      <section className="cta-band">
        <h2>Comece pelo dia 1.</h2>
        <p>Escolha um idioma e veja a trilha completa, dia por dia.</p>
        <Link to="/cursos" className="btn btn-primary">Ver todos os cursos</Link>
      </section>
    </>
  );
}
