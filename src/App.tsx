import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
const Curso = lazy(() => import('./pages/Curso'));
const Portugues = lazy(() => import('./pages/Portugues'));
const Dia = lazy(() => import('./pages/Dia'));
const Conta = lazy(() => import('./pages/Conta'));
const Assinatura = lazy(() => import('./pages/Assinatura'));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const Gramatica = lazy(() => import('./pages/Gramatica'));
const LivroGramatica = lazy(() => import('./pages/LivroGramatica'));
const LivrosIndice = lazy(() => import('./pages/Livros').then((m) => ({ default: m.LivrosIndice })));
const LivroPagina = lazy(() => import('./pages/Livros').then((m) => ({ default: m.LivroPagina })));
const LivroCapitulo = lazy(() => import('./pages/Livros').then((m) => ({ default: m.LivroCapitulo })));
const Sobre = lazy(() => import('./pages/Sobre'));
import { BarraTopo } from './components/BarraTopo';
import NaoEncontrada from './pages/NaoEncontrada';
import { useT } from './i18n';

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
  const t = useT();
  return (
    <>
      <a href="#conteudo" className="skip-link">{t.geral.pular}</a>
      <RolarAoTopo />
      <BarraTopo semNovidades={AREA_ALUNO.test(pathname)} />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Suspense fallback={<p className="resultado pagina" role="status">{t.geral.carregando}</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/portugues" element={<Portugues />} />
          <Route path="/brazilian-portuguese" element={<Navigate to="/portugues" replace />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/curso/:id/dia/:n" element={<Dia />} />
          <Route path="/entrar" element={<Conta modo="entrar" />} />
          <Route path="/cadastro" element={<Conta modo="cadastro" />} />
          <Route path="/gramatica" element={<Gramatica />} />
          <Route path="/gramatica/:id" element={<Gramatica />} />
          <Route path="/livro/gramatica-ru" element={<LivroGramatica />} />
          <Route path="/livros" element={<LivrosIndice />} />
          <Route path="/livros/:id" element={<LivroPagina />} />
          <Route path="/livros/:id/capitulo/:n" element={<LivroCapitulo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/assinatura" element={<Assinatura />} />
          <Route path="/privacidade" element={<Legal tipo="privacidade" />} />
          <Route path="/termos" element={<Legal tipo="termos" />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
        </Suspense>
      </main>
      {!AREA_ALUNO.test(pathname) && <Footer />}
    </>
  );
}
