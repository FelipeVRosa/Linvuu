// Substitui o SDK no teste de tela: o roteiro em window.__play decide ofertas e resultado da compra.
type Roteiro = { ofertas: () => Promise<unknown[]>; comprar: () => Promise<unknown>; restaurar: () => Promise<unknown>; chamadas: string[] };
const r = () => (window as unknown as { __play: Roteiro }).__play;
export const comprasPlayDisponiveis = () => true;
export const ofertasPlay = () => { r().chamadas.push('ofertas'); return r().ofertas(); };
export const comprarPlay = (_u: string, p: { identifier: string }) => { r().chamadas.push('comprar:' + p.identifier); return r().comprar(); };
export const restaurarPlay = () => { r().chamadas.push('restaurar'); return r().restaurar(); };
