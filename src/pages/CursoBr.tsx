import { Link } from 'react-router-dom';
import { gruposDoCurso, statusDoCurso } from '../lib/content';
import { Navegacao } from '../components/Navegacao';
import { JsonLd } from '../components/JsonLd';
import { usePageTitle } from '../lib/usePageTitle';
import { SITE_URL } from '../config/site';
import { SESSOES_GRATIS } from '../config/planos';

const NIVEIS: { k: string; titulo: string; resumo: string }[] = [
  { k: 'a1', titulo: 'A1 · Beginner', resumo: 'Greet people, introduce yourself, order food, ask the way, talk about family, daily routine and plans. You will read and say Brazilian Portuguese sounds correctly.' },
  { k: 'a2', titulo: 'A2 · Elementary', resumo: 'Tell what happened and what used to happen, use object pronouns the way Brazilians speak, give instructions, handle health, travel, work, the phone and renting a home.' },
  { k: 'b1', titulo: 'B1 · Intermediate', resumo: 'Use the subjunctive, hypotheses, indirect speech and the passive; write formal e-mails; follow the news; handle a job interview, a bank and everyday life in Brazil.' },
];

export default function CursoBr() {
  usePageTitle('Brazilian Portuguese for English speakers: A1 to B1 · Português para estrangeiros', 'Learn Brazilian Portuguese in 62 lessons (A1 to B1), explained in English. Sessions of about 30 minutes, with audio, dialogues, grammar and exercises. Português do Brasil para estrangeiros.');
  const grupos = gruposDoCurso('br');
  const stats = statusDoCurso('br');
  return (
    <div className="pagina" lang="en">
      <JsonLd dados={{ '@context': 'https://schema.org', '@type': 'Course', name: 'Brazilian Portuguese for English speakers', alternateName: 'Português do Brasil para estrangeiros', description: 'Brazilian Portuguese from A1 to B1, in 62 lessons explained in English.', inLanguage: 'en', teaches: 'Brazilian Portuguese', provider: { '@type': 'Organization', name: 'Linvuu', url: SITE_URL } }} />
      <Navegacao idioma="br" pai="/portugues" trilha={[{ rotulo: 'Home', para: '/' }, { rotulo: 'Português para estrangeiros', para: '/portugues' }, { rotulo: 'Brazilian Portuguese' }]} />
      <header className="curso-topo">
        <div>
          <h1 className="pagina-h1">Brazilian Portuguese <em>Português do Brasil</em></h1>
          <p className="lead">A complete course from zero to B1, explained in English. {grupos.length || 62} lessons of four sessions each (about 30 minutes per session), with audio, dialogues, grammar, common mistakes of English speakers and exercises with instant feedback.</p>
          <div className="curso-fatos">
            <span>{stats?.total ?? 248} sessions</span><span>Starts from zero</span><span>First {SESSOES_GRATIS} sessions free</span>
            <Link to="/portugues" className="link-gramatica">About the course →</Link>
          </div>
        </div>
      </header>
      {NIVEIS.map((n) => {
        const lista = grupos.filter((g) => (g.nivel ?? 'a1') === n.k);
        if (!lista.length) return null;
        return (
          <section key={n.k}>
            <h2 className="pagina-h2">{n.titulo}</h2>
            <p className="nota">{n.resumo}</p>
            {lista.map((g, i) => (
              <details key={g.aula} className="fase-bloco" open={n.k === 'a1' && i === 0}>
                <summary>
                  <span className="fase-num">Lesson {g.aula}</span>
                  <strong>{g.titulo}</strong>
                  <span className="fase-dias">Sessions {g.dias[0]}–{g.dias[1]}</span>
                </summary>
                <ol className="dias" start={g.dias[0]}>
                  {Array.from({ length: g.dias[1] - g.dias[0] + 1 }, (_, k) => g.dias[0] + k).map((d, k) => (
                    <li key={d}>
                      <Link to={`/curso/br/dia/${d}`}>
                        <span className="dia-n">{d}</span>
                        <span className="dia-t">{g.titulo}<small>Session {k + 1} of 4{d > SESSOES_GRATIS ? ' · subscribers' : ' · free'}</small></span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </section>
        );
      })}
    </div>
  );
}
