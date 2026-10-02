import { REDES } from '../config/social';
import { SOCIAL_PATHS } from '../config/socialIcons';

export function Redes() {
  return (
    <ul className="redes" aria-label="Redes sociais da Linvuu">
      {REDES.map((r) => {
        const icone = (
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d={SOCIAL_PATHS[r.id]} fill="currentColor" /></svg>
        );
        return (
          <li key={r.id}>
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${r.nome} (abre em nova aba)`}>{icone}</a>
            ) : (
              <a href="#redes" aria-label={`${r.nome} (link em breve)`} title="Link em breve" onClick={(e) => e.preventDefault()}>{icone}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
