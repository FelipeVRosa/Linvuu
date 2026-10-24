import { SESSOES_GRATIS } from '../config/planos';

/** Navegação, não autorização: o servidor continua decidindo quem pode ler cada aula. */
export function destinoSessao(curso: string, dia: number, temConta: boolean, nativo = false): string {
  return dia > SESSOES_GRATIS && !temConta && !nativo ? '/assinatura' : `/curso/${curso}/dia/${dia}`;
}
