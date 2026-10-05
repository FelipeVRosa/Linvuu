import { carregarDb } from './firebase';

/** Coleção do Firestore com um documento por usuário (id = uid do Auth). Precisa bater com as regras publicadas. */
export const COLECAO_USUARIOS = 'users';

export interface Perfil {
  nome: string;
  email: string;
  xp: number;
  streak: number;
  /** Aulas concluídas, no formato "idioma:dia" (ex.: "ru:3"). */
  licoesCompletas: string[];
  criadoEm: unknown;
}

export const perfilInicial = (nome: string, email: string, criadoEm: unknown): Perfil => ({
  nome, email, xp: 0, streak: 0, licoesCompletas: [], criadoEm,
});

/**
 * Cria o documento do usuário se ainda não existir. Nunca sobrescreve um perfil existente
 * (transação), então é seguro chamar a cada login. Devolve false se o Firestore recusar.
 */
export async function garantirPerfil(uid: string, nome: string, email: string, acesso: typeof carregarDb = carregarDb): Promise<boolean> {
  try {
    const { db, f } = await acesso();
    const ref = f.doc(db, COLECAO_USUARIOS, uid);
    await f.runTransaction(db, async (tx) => {
      const snap = await tx.get(ref);
      if (!snap.exists()) tx.set(ref, perfilInicial(nome, email, f.serverTimestamp()));
    });
    return true;
  } catch (e) {
    console.warn('[linvuu] Não foi possível salvar o perfil no Firestore:', (e as { code?: string })?.code ?? e);
    return false;
  }
}
