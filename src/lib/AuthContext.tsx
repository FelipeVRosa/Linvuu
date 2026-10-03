import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { authConfigurado, carregarAuth } from './firebase';

export interface Usuario { uid: string; nome: string; email: string; foto: string | null }

interface Ctx {
  usuario: Usuario | null;
  carregando: boolean;
  configurado: boolean;
  entrarComGoogle: () => Promise<void>;
  entrarComEmail: (email: string, senha: string) => Promise<void>;
  criarConta: (nome: string, email: string, senha: string) => Promise<void>;
  recuperarSenha: (email: string) => Promise<void>;
  sair: () => Promise<void>;
}

const AuthCtx = createContext<Ctx | null>(null);
export const useAuth = () => {
  const c = useContext(AuthCtx);
  if (!c) throw new Error('useAuth fora do AuthProvider');
  return c;
};

const paraUsuario = (u: import('firebase/auth').User): Usuario => ({
  uid: u.uid, nome: u.displayName || (u.email ?? '').split('@')[0], email: u.email ?? '', foto: u.photoURL,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(authConfigurado);

  useEffect(() => {
    if (!authConfigurado) return;
    let cancelado = false;
    let parar = () => {};
    carregarAuth().then(({ auth, m }) => {
      if (cancelado) return;
      parar = m.onAuthStateChanged(auth, (u) => { setUsuario(u ? paraUsuario(u) : null); setCarregando(false); });
    }).catch(() => setCarregando(false));
    return () => { cancelado = true; parar(); };
  }, []);

  const valor = useMemo<Ctx>(() => ({
    usuario, carregando, configurado: authConfigurado,
    entrarComGoogle: async () => {
      const { auth, m } = await carregarAuth();
      await m.signInWithPopup(auth, new m.GoogleAuthProvider());
    },
    entrarComEmail: async (email, senha) => {
      const { auth, m } = await carregarAuth();
      await m.signInWithEmailAndPassword(auth, email.trim(), senha);
    },
    criarConta: async (nome, email, senha) => {
      const { auth, m } = await carregarAuth();
      const cred = await m.createUserWithEmailAndPassword(auth, email.trim(), senha);
      if (nome.trim()) await m.updateProfile(cred.user, { displayName: nome.trim() });
      setUsuario(paraUsuario(cred.user));
    },
    recuperarSenha: async (email) => {
      const { auth, m } = await carregarAuth();
      await m.sendPasswordResetEmail(auth, email.trim());
    },
    sair: async () => {
      const { auth, m } = await carregarAuth();
      await m.signOut(auth);
    },
  }), [usuario, carregando]);

  return <AuthCtx.Provider value={valor}>{children}</AuthCtx.Provider>;
}
