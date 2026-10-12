// Traço de caneta: elemento de assinatura da Linvuu. Linha única, levemente irregular, estável (gerada por semente).
const rng = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

function suave(pts: number[][]) {
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}

const LARGURA = 400;
function caminho(comprimento: number, altura: number, seed: number) {
  const r = rng(seed);
  const pad = Math.max(2, altura * 0.18);
  const L = Math.max(comprimento, pad * 3);
  const n = Math.max(3, Math.round(L / 22));
  const inclina = (r() - 0.5) * altura * 0.3;
  const pts: number[][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push([pad + t * (L - 2 * pad) + (i && i < n ? (r() - 0.5) * 4 : 0), altura / 2 + inclina * (t - 0.5) + (r() - 0.5) * altura * 0.24]);
  }
  return suave(pts);
}

interface Props {
  /** 0 a 1: quanto da largura o traço ocupa (progresso real). */
  valor?: number;
  altura?: number;
  semente?: number;
  /** mostra a trilha pontilhada atrás do traço */
  trilha?: boolean;
  className?: string;
  rotulo?: string;
  /** true: o traço desenha de novo (use com `key` para reiniciar a animação). */
  animar?: boolean;
}

export function Traco({ valor = 1, altura = 14, semente = 5, trilha = false, className, rotulo, animar = false }: Props) {
  const v = Math.min(1, Math.max(0.04, valor));
  return (
    <svg className={`traco${animar ? ' traco-desenhar' : ''}${className ? ` ${className}` : ''}`} viewBox={`0 0 ${LARGURA} ${altura}`} preserveAspectRatio="none" height={altura} width="100%"
      role={rotulo ? 'img' : undefined} aria-label={rotulo} aria-hidden={rotulo ? undefined : true} focusable="false">
      {trilha && <line x1="2" x2={LARGURA - 2} y1={altura / 2} y2={altura / 2} className="traco-trilha" vectorEffect="non-scaling-stroke" />}
      <path d={caminho(LARGURA * v, altura, semente)} pathLength={1} className="traco-linha" vectorEffect="non-scaling-stroke" fill="none" />
    </svg>
  );
}
