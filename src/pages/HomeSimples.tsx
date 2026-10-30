import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CURSOS, aulaTraduzida, gruposDoCurso } from '../lib/content';
import { LOCALE } from '../i18n';
import { Newsletter } from '../components/Newsletter';
import { usePageTitle } from '../lib/usePageTitle';

const SAUDACAO: Record<string, string> = { en: 'Hello', es: 'Hola', ru: 'Привет', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', br: 'Olá' };

const TX = {
  en: { h1: 'Which language do you want to learn?', sub: 'Short sessions with audio, dialogues and speaking practice. The first 2 lessons are free.', pronto: 'Start free', espera: 'Get notified', metodo: ['Listen', 'Understand', 'Practise'], metodoD: ['Real dialogues with audio for every sentence.', 'Short explanations, in your language.', 'Exercises corrected on the spot.'], lista: (n: string) => `${n}, explained in English, is coming`, listaD: 'Leave your e-mail and we will tell you the day it opens. One e-mail, no spam.', saiba: 'Lessons in your language: coming soon' },
  es: { h1: '¿Qué idioma quieres aprender?', sub: 'Sesiones cortas con audio, diálogos y práctica oral. Las 2 primeras lecciones son gratis.', pronto: 'Empezar gratis', espera: 'Avisarme', metodo: ['Escucha', 'Entiende', 'Practica'], metodoD: ['Diálogos reales con audio en cada frase.', 'Explicaciones breves, en tu idioma.', 'Ejercicios corregidos al instante.'], lista: (n: string) => `${n}, explicado en español, llega pronto`, listaD: 'Deja tu e-mail y te avisamos el día que abra. Un solo e-mail, sin spam.', saiba: 'Lecciones en tu idioma: próximamente' },
} as const;

/** Home simples e igual para todos os públicos (modelo Babbel): uma pergunta, os idiomas, o método em três passos. Só afirma "explicado em <língua>" onde há tradução completa; no resto capta o e-mail. */
export default function HomeSimples() {
  usePageTitle();
  const t = TX[LOCALE.codigo === 'es' ? 'es' : 'en'];
  const cursos = LOCALE.ordem.map((id) => CURSOS.find((c) => c.id === id)).filter((c): c is NonNullable<typeof c> => !!c);
  // compara com a língua DO SITE (LOCALE.explicacao), não com a preferência salva, que cai para o português quando falta tradução
  const pronto = (id: string) => { const g = gruposDoCurso(id); return g.length > 0 && g.every((x) => aulaTraduzida(id, x.aula, LOCALE.explicacao)); };
  const [espera, setEspera] = useState<string | null>(null);
  const alvo = cursos.find((c) => c.id === espera);
  return (
    <>
      <section className="lv-hero">
        <div className="lv-hero-in">
          <div>
            <h1>{t.h1}</h1>
            <p className="lv-hero-sub">{t.sub}</p>
            <ul className="lv-grade" style={{ marginTop: 32 }}>
              {cursos.map((c) => pronto(c.id)
                ? <li key={c.id} className="lv-card"><Link to={`/curso/${c.id}/dia/1`}><span className="lv-saud" lang={c.id === 'br' ? 'pt-BR' : c.id} aria-hidden="true">{SAUDACAO[c.id]}</span><h2 className="lv-card-t">{c.nome}</h2><span className="lv-card-meta">{t.pronto}</span></Link></li>
                : <li key={c.id} className="lv-card"><button type="button" className="btn-reset" onClick={() => { setEspera(c.id); document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' }); }}><span className="lv-saud" lang={c.id === 'br' ? 'pt-BR' : c.id} aria-hidden="true">{SAUDACAO[c.id]}</span><h2 className="lv-card-t">{c.nome}</h2><span className="lv-card-meta">{t.espera}</span></button></li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="lv-sec" aria-label="Method">
        <ol className="lv-passos">
          {t.metodo.map((m, i) => <li key={m}><strong>{m}</strong><p>{t.metodoD[i]}</p></li>)}
        </ol>
      </section>
      <section className="lv-sec lv-sec-papel" id="lista" aria-labelledby="h-lista">
        <h2 id="h-lista">{alvo ? t.lista(alvo.nome) : t.saiba}</h2>
        <p>{t.listaD}</p>
        <Newsletter key={espera ?? 'geral'} origem={`${LOCALE.codigo}-lista-${espera ?? 'geral'}`} />
      </section>
    </>
  );
}
