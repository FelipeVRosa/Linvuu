import { Link } from 'react-router-dom';
import { Curso, coberturaDoCurso, statusDoCurso } from '../lib/content';
import { useT } from '../i18n';

const SAUDACAO: Record<string, string> = { en: 'Hello', es: 'Hola', ru: 'Привет', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', br: 'Olá' };

export function CursoCard({ curso }: { curso: Curso }) {
  const t = useT();
  const aulas = Math.floor((statusDoCurso(curso.id)?.publicadas ?? 0) / 4);
  const cob = coberturaDoCurso(curso.id);
  const cobertura = t.card.cobertura(cob.traduzidas, cob.total);
  return (
    <Link to={`/curso/${curso.id}`} className="lv-card">
      {SAUDACAO[curso.id] && <span className="lv-saud" lang={curso.id === 'br' ? 'pt-BR' : curso.id} aria-hidden="true">{SAUDACAO[curso.id]}</span>}
      <h3>{curso.nome}</h3>
      <span className="lv-nativo" lang={curso.id === 'br' ? 'pt-BR' : curso.id}>{curso.nomeNativo !== curso.nome ? curso.nomeNativo : ' '}</span>
      <p>{curso.descricao}</p>
      <span className="lv-card-meta">{aulas > 0 ? t.card.noAr(aulas) : t.card.preparo} · {t.card.ate}{cobertura && <><br />{cobertura}</>}</span>
    </Link>
  );
}
