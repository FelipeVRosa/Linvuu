import { useState } from 'react';
import { USAR_MASCOTES } from '../config/mascotes';

/** Mascote do curso. Desligado enquanto as ilustrações não estiverem pintadas. */
export function Mascote({ src, nome, className = '' }: { src: string; nome: string; className?: string }) {
  const [falhou, setFalhou] = useState(false);
  if (!USAR_MASCOTES) return null;
  if (falhou) return <span className={`mascote-vazio ${className}`} aria-hidden="true">{nome.slice(0, 1)}</span>;
  return <img className={className} src={src} alt="" loading="lazy" onError={() => setFalhou(true)} />;
}
