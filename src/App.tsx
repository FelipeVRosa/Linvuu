import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Curso from './pages/Curso';
import Dia from './pages/Dia';
import Conta from './pages/Conta';
import NaoEncontrada from './pages/NaoEncontrada';

function RolarAoTopo() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // espera a página montar antes de procurar a âncora
      const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
      return () => clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <RolarAoTopo />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/curso/:id/dia/:n" element={<Dia />} />
          <Route path="/entrar" element={<Conta modo="entrar" />} />
          <Route path="/cadastro" element={<Conta modo="cadastro" />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
