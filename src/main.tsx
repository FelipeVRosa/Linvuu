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
import { AuthProvider } from './lib/AuthContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
