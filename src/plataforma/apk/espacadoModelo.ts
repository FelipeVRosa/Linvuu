/** Reforço espaçado (modelo puro, sem DOM): depois que o aluno corrige os erros de um bloco,
 *  eles voltam em intervalos crescentes — 1, 3 e 7 dias — até três relembranças certas seguidas.
 *  Base: recuperação espaçada e "successive relearning" (Cepeda et al., 2006; Rawson & Dunlosky, 2011),
 *  a mesma família de método do SRS de Mondly/Memrise/Anki e da regressão de meia-vida do Duolingo.
 *  Não é nota nem autorização: só decide quando lembrar o aluno. */
export const INTERVALOS_DIAS = [1, 3, 7] as const;
export const DIA_MS = 86_400_000;

export interface Espacado { tipo: 'espacado'; versao: 1; passo: number; proxima: string; em: string }

const data = (v: unknown) => typeof v === 'string' && Number.isFinite(Date.parse(v));
export function validarEspacado(v: unknown): v is Espacado {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
  const o = v as Record<string, unknown>;
  return o.tipo === 'espacado' && o.versao === 1 && Number.isInteger(o.passo) && Number(o.passo) >= 0 && Number(o.passo) <= INTERVALOS_DIAS.length && data(o.proxima) && data(o.em);
}

/** Quando o bloco volta, sem registro espaçado: um intervalo depois da revisão concluída. */
export const primeiraVolta = (revisaoEm: string) => new Date(Date.parse(revisaoEm) + INTERVALOS_DIAS[0] * DIA_MS).toISOString();

/** Próximo estado depois de uma rodada espaçada. Acertar tudo de primeira avança um passo;
 *  errar algo mantém o passo e traz o bloco de volta no menor intervalo. */
export function registrarVolta(atual: Espacado | null, acertouDePrimeira: boolean, agora: number): Espacado {
  const passo = Math.min((atual?.passo ?? 0) + (acertouDePrimeira ? 1 : 0), INTERVALOS_DIAS.length);
  const dias = !acertouDePrimeira ? INTERVALOS_DIAS[0] : passo < INTERVALOS_DIAS.length ? INTERVALOS_DIAS[passo] : 0;
  return { tipo: 'espacado', versao: 1, passo, proxima: new Date(agora + dias * DIA_MS).toISOString(), em: new Date(agora).toISOString() };
}

/** Estado do bloco para o reforço: `null` quando já completou os três intervalos. */
export function situacaoEspacada(revisaoEm: string, esp: Espacado | null): { passo: number; proxima: string } | null {
  if (esp && esp.passo >= INTERVALOS_DIAS.length) return null;
  return esp ? { passo: esp.passo, proxima: esp.proxima } : { passo: 0, proxima: primeiraVolta(revisaoEm) };
}
