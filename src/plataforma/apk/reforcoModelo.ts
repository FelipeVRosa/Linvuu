/** Modelo puro do reforço entre sessões (sem conteúdo nem DOM), para teste em Node. */
import { validarPratica } from './estudoModelo';
import { pendentesRevisao, validarRevisao } from './revisaoModelo';

export interface ItemReforco { dia: number; bloco: number; pendentes: number; em: string }
type Leitor = Pick<Storage, 'getItem' | 'key' | 'length'>;
const PADRAO = /^linvuu:pratica-apk:v1:([^:]+):([a-z]{2,3}):(\d{1,3}):S(\d{1,2}):bloco:(\d{1,2})$/;

/** Blocos com erros ainda não revistos, do mais antigo ao mais novo. `diaDe` converte aula+sessão no dia do percurso. */
export function listarReforco(idioma: string, dono: string, storage: Leitor, diaDe: (aula: number, sessao: number) => number | null): ItemReforco[] {
  const itens: ItemReforco[] = [];
  try {
    for (let i = 0; i < storage.length; i++) {
      const k = storage.key(i);
      const m = k ? PADRAO.exec(k) : null;
      if (!m || m[1] !== dono || m[2] !== idioma) continue;
      let pratica: unknown;
      try { pratica = JSON.parse(storage.getItem(k!) ?? 'null'); } catch { continue; }
      if (!validarPratica(pratica) || pratica.acertos >= pratica.total) continue;
      let pendentes = pratica.total - pratica.acertos;
      try {
        const rev: unknown = JSON.parse(storage.getItem(`${k}:revisao-erros`) ?? 'null');
        if (validarRevisao(rev)) pendentes = pendentesRevisao(rev).length;
      } catch { /* sem revisão salva: vale a primeira tentativa */ }
      if (pendentes <= 0) continue;
      const dia = diaDe(Number(m[3]), Number(m[4]));
      if (dia) itens.push({ dia, bloco: Number(m[5]), pendentes, em: pratica.em });
    }
  } catch { return []; }
  // O erro que está há mais tempo sem revisão é o que mais se beneficia de ser lembrado agora.
  return itens.sort((a, b) => a.em.localeCompare(b.em) || a.dia - b.dia);
}
