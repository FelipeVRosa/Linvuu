import { chavePersistente } from './recuperacao';
import { sincronizarArmazenamento } from './armazenamento';

/** Chaves de estudo deste aparelho que pertencem a quem está usando o app agora (conta ou visitante).
 *  Preferências (tema, tamanho do texto, idioma, sons) ficam: não são dados de estudo. */
export function chavesDeEstudo(uid: string | null, chaves: string[]): string[] {
  const preferencia = /^linvuu:(tema-app|leitura-app|sons|locale)$/;
  return chaves.filter((k) => {
    if (!chavePersistente(k) || preferencia.test(k)) return false;
    if (k.startsWith('linvuu:pratica-apk:v1:')) return k.startsWith(`linvuu:pratica-apk:v1:${uid ?? 'visitante'}:`);
    return uid ? k.endsWith(`:uid:${uid}`) : !k.includes(':uid:');
  });
}

/** Apaga o progresso local de quem está usando o app (sem tocar no servidor) e espelha a remoção. */
export async function apagarEstudoDesteAparelho(uid: string | null): Promise<number> {
  const alvo = chavesDeEstudo(uid, Object.keys(localStorage));
  for (const k of alvo) localStorage.removeItem(k);
  await sincronizarArmazenamento();
  window.dispatchEvent(new Event('linvuu:dias'));
  window.dispatchEvent(new Event('storage'));
  return alvo.length;
}
