import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/literata';
import './tokens.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import './redesign.css';
import App from './App.tsx';
import { AuthProvider } from './lib/AuthContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
