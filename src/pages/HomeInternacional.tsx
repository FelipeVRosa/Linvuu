import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS, coberturaDoCurso, statusDoCurso } from '../lib/content';
import { LOCALE, LOCALES, lembrarLocale, urlEm } from '../i18n';
import { Newsletter } from '../components/Newsletter';
import { usePageTitle } from '../lib/usePageTitle';

/**
 * Home de /en: para quem fala inglês (americano, indiano, qualquer pessoa que lê inglês) e quer estudar outro idioma.
 * Só promete "explicado em inglês" onde há aulas traduzidas (coberturaDoCurso); nos demais cursos capta o e-mail da lista de espera.
 */
export default function HomeInternacional() {
  usePageTitle();
  const [querEstudar, setQuerEstudar] = useState('ru');
  const cursos = LOCALE.ordem.map((id) => CURSOS.find((c) => c.id === id)).filter((c): c is NonNullable<typeof c> => !!c);
  const emIngles = (id: string) => { const c = coberturaDoCurso(id); return c.total > 0 && c.traduzidas >= c.total; };
  const escolhido = cursos.find((c) => c.id === querEstudar);
  return (
    <>
      <section className="lv-hero">
        <div className="lv-hero-in">
          <div>
            <p className="lv-kicker">For English speakers</p>
            <h1>Learn Russian, German, Spanish and more, starting from English.</h1>
            <p className="lv-hero-sub">Short sessions with audio, dialogues and speaking practice. Tell us your native language and pick what you want to learn.</p>
            <div className="lv-hero-botoes">
              <a href="#start" className="btn btn-primary">Choose your language</a>
              <Link to="/curso/br/dia/1" className="lv-link-claro">Try Brazilian Portuguese free →</Link>
            </div>
            <p className="lv-hero-nota">The first two lessons of every course are free, no card needed.</p>
          </div>
        </div>
      </section>

      <section className="lv-sec" id="start" aria-labelledby="h-start">
          <p className="lv-kicker">Step 1</p>
          <h2 id="h-start">What is your native language?</h2>
          <div className="lv-hero-botoes" role="group" aria-label="Native language">
            {LOCALES.map((l) => l.codigo === LOCALE.codigo
              ? <span key={l.codigo} className="btn btn-primary" lang={l.codigo} aria-current="true">{l.nome}</span>
              : <a key={l.codigo} className="btn" lang={l.codigo} hrefLang={l.codigo} href={urlEm(l.codigo)} onClick={() => lembrarLocale(l.codigo)}>{l.nome}</a>)}
            <a className="btn" href="#waitlist" onClick={() => setQuerEstudar('outra')}>Another language</a>
          </div>
          <p className="lv-hero-nota">Another native language? Leave your e-mail below and we will tell you when it is ready.</p>
      </section>

      <section className="lv-sec lv-sec-papel" id="cursos" aria-labelledby="h-cursos">
          <p className="lv-kicker">Step 2</p>
          <h2 id="h-cursos">What do you want to learn?</h2>
          <ul className="lv-grade">
            {cursos.map((c) => {
              const aulas = Math.floor((statusDoCurso(c.id)?.publicadas ?? 0) / 4);
              const pronto = emIngles(c.id);
              return (
                <li key={c.id} className="lv-card">
                  <h3 className="lv-card-t">{c.nome}</h3>
                  <span className="lv-nativo" lang={c.id === 'br' ? 'pt-BR' : c.id}>{c.nomeNativo !== c.nome ? c.nomeNativo : ' '}</span>
                  <p>{c.descricao}</p>
                  <span className="lv-card-meta">{aulas} lessons · zero to B1<br />{pronto ? 'Explained in English' : 'English explanations in preparation'}</span>
                  {pronto
                    ? <Link className="btn btn-primary" to={`/curso/${c.id}/dia/1`}>Start lesson 1 free</Link>
                    : <a className="btn" href="#waitlist" onClick={() => setQuerEstudar(c.id)}>Notify me when it is in English</a>}
                </li>
              );
            })}
          </ul>
      </section>

      <section className="lv-sec" id="waitlist" aria-labelledby="h-waitlist">
          <p className="lv-kicker">Step 3</p>
          <h2 id="h-waitlist">{escolhido ? `Want ${escolhido.nome} explained in English?` : 'Want your language next?'}</h2>
          <p>We are translating the lessons, one course at a time. Leave your e-mail and you will be among the first to know. One e-mail when it is ready, no spam; you can unsubscribe at any time.</p>
          <Newsletter key={querEstudar} origem={`en-lista-${querEstudar}`} />
      </section>
    </>
  );
}
