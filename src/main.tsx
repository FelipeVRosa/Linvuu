import '@fontsource-variable/newsreader/opsz.css';
import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/literata';
import './tokens.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import './redesign.css';
import App from './App.tsx';
// Aba aberta antes de um deploy: os arquivos antigos sumiram. Recarrega uma vez para pegar a versão nova.
window.addEventListener('vite:preloadError', (e) => {
  try {
    if (sessionStorage.getItem('linvuu:recarregou-preload')) return;
    sessionStorage.setItem('linvuu:recarregou-preload', '1');
  } catch { /* sem sessionStorage: recarrega mesmo assim */ }
  e.preventDefault();
  window.location.reload();
});
import { useAuth, AuthProvider } from './lib/AuthContext';
import { LOCALE, localeLembrado, urlEm } from './i18n';
import { carregarTraducoes } from './lib/content';

// Quem já escolheu outro idioma na barra do topo volta a ele ao abrir um endereço sem prefixo (ex.: um link compartilhado).
const lembrado = localeLembrado();
if (lembrado && lembrado !== LOCALE.codigo && !LOCALE.prefixo) window.location.replace(urlEm(lembrado));
document.documentElement.lang = LOCALE.codigo;

function AplicacaoDaConta() {
  const { usuario, carregando } = useAuth();
  if (carregando) return null;
  return <App key={usuario?.uid ?? 'visitante'} />;
}

// Em inglês e espanhol, os títulos traduzidos das aulas chegam antes da primeira tela (um arquivo pequeno, só do idioma escolhido).
carregarTraducoes().finally(() => createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={LOCALE.prefixo || undefined}>
    <AuthProvider>
      <AplicacaoDaConta />
    </AuthProvider>
  </BrowserRouter>
));
