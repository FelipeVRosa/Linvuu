import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Curso from './pages/Curso';
import Portugues from './pages/Portugues';
import Dia from './pages/Dia';
import Conta from './pages/Conta';
import Assinatura from './pages/Assinatura';
import { Legal } from './pages/Legal';
import Gramatica from './pages/Gramatica';
import LivroGramatica from './pages/LivroGramatica';
import { BarraTopo } from './components/BarraTopo';
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

// Páginas de dia da área do aluno (/curso/:id/dia/:n): sem bloco de newsletter no rodapé.
const AREA_ALUNO = /^\/curso\/[^/]+\/dia\//;

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <RolarAoTopo />
      <BarraTopo />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/portugues" element={<Portugues />} />
          <Route path="/brazilian-portuguese" element={<Portugues />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/curso/:id/dia/:n" element={<Dia />} />
          <Route path="/entrar" element={<Conta modo="entrar" />} />
          <Route path="/cadastro" element={<Conta modo="cadastro" />} />
          <Route path="/gramatica" element={<Gramatica />} />
          <Route path="/gramatica/:id" element={<Gramatica />} />
          <Route path="/livro/gramatica-ru" element={<LivroGramatica />} />
          <Route path="/assinatura" element={<Assinatura />} />
          <Route path="/privacidade" element={<Legal tipo="privacidade" />} />
          <Route path="/termos" element={<Legal tipo="termos" />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer semNovidades={AREA_ALUNO.test(pathname)} />
    </>
  );
}
