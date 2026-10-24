import { gratis } from '../../config/planos';
/** Destino da aba de estudo: nunca uma sessão bloqueada. No fim do gratuito, o percurso (com revisão e reforço). */
export function destinoEstudo(ret: { idioma: string; dia: number } | undefined, ativa: boolean) {
  if (!ret) return '/cursos';
  if (!gratis(ret.dia) && !ativa) return `/curso/${ret.idioma}`;
  return `/curso/${ret.idioma}/dia/${ret.dia}`;
}
