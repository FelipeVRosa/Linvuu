import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Chevron } from './Icones';

/** Fileira rolável com setas. Sem rotação automática (não rouba o controle do usuário). */
export function Carrossel({ children, rotulo }: { children: ReactNode; rotulo: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pode, setPode] = useState({ esq: false, dir: false });

  const medir = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setPode({ esq: el.scrollLeft > 4, dir: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    medir();
    const el = ref.current;
    el?.addEventListener('scroll', medir, { passive: true });
    window.addEventListener('resize', medir);
    return () => { el?.removeEventListener('scroll', medir); window.removeEventListener('resize', medir); };
  }, [medir]);

  const rolar = (d: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: d * Math.max(260, el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="carrossel">
      <button type="button" className="seta seta-esq" aria-label={`${rotulo}: anterior`} disabled={!pode.esq} onClick={() => rolar(-1)}><Chevron dir="left" /></button>
      <div className="carrossel-trilho" ref={ref} role="list" aria-label={rotulo} tabIndex={0}>{children}</div>
      <button type="button" className="seta seta-dir" aria-label={`${rotulo}: próximo`} disabled={!pode.dir} onClick={() => rolar(1)}><Chevron /></button>
    </div>
  );
}
