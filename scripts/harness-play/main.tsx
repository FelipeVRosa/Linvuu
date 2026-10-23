import { createRoot } from 'react-dom/client';
import { useState, useCallback } from 'react';
import { AssinaturaPlay } from '../../src/plataforma/apk/AssinaturaPlay';
import '../../src/plataforma/apk/app.css';
import '../../src/plataforma/apk/rodada4.css';
type W = { __acesso: { ativa: boolean; via: 'play' | 'assinatura' | null; cancelaEm: number | null; ate: number | null }; __recargas: number };
function App() {
  const w = window as unknown as W;
  const [n, setN] = useState(0);
  const recarregar = useCallback(() => { w.__recargas++; setN((x) => x + 1); }, [w]);
  const a = w.__acesso;
  void n;
  return <AssinaturaPlay uid="u1" acesso={{ carregando: false, indisponivel: false, ...a, recarregar }} />;
}
createRoot(document.getElementById('raiz')!).render(<App />);
