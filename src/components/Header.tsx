import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CURSOS } from '../lib/content';
import { useAuth } from '../lib/AuthContext';
import { Bandeira } from './Bandeira';
import { Chevron, IconeIdiomas, IconeStem } from './Icones';

export function Header() {
  const [menu, setMenu] = useState(false);
  const [explorar, setExplorar] = useState(false);
  const [conta, setConta] = useState(false);
  const [q, setQ] = useState('');
  const nav = useNavigate();
  const loc = useLocation();
  const { usuario, carregando, sair } = useAuth();
  const refExplorar = useRef<HTMLDivElement>(null);
  const refConta = useRef<HTMLDivElement>(null);

  useEffect(() => { setMenu(false); setExplorar(false); setConta(false); }, [loc.pathname, loc.search]);
  useEffect(() => {
    const fora = (e: MouseEvent) => {
      if (refExplorar.current && !refExplorar.current.contains(e.target as Node)) setExplorar(false);
      if (refConta.current && !refConta.current.contains(e.target as Node)) setConta(false);
    };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setExplorar(false); setMenu(false); setConta(false); } };
    document.addEventListener('mousedown', fora);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', fora); document.removeEventListener('keydown', esc); };
  }, []);

  const buscar = (e: FormEvent) => {
    e.preventDefault();
    nav(q.trim() ? `/cursos?q=${encodeURIComponent(q.trim())}` : '/cursos');
  };
  const deslogar = async () => { await sair(); setConta(false); setMenu(false); nav('/'); };

  return (
    <header className="nav-bar">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Linvuu, página inicial">
          <img className="logo-img" src="/brand/linvuu-logo.png" alt="Linvuu" width="127" height="28" />
        </Link>

        <div className="nav-explorar" ref={refExplorar}>
          <button type="button" className="nav-btn" aria-expanded={explorar} aria-controls="menu-explorar" onClick={() => setExplorar((v) => !v)}>
            Explorar cursos <Chevron dir="down" />
          </button>
          {explorar && (
            <div className="mega" id="menu-explorar">
              <div>
                <span className="mega-h"><IconeIdiomas size={18} /> Idiomas</span>
                {CURSOS.filter((c) => c.area === 'idiomas').map((c) => (
                  <Link key={c.id} to={`/curso/${c.id}`} className="mega-item"><Bandeira id={c.id} size={22} /> <span>{c.nome}</span></Link>
                ))}
              </div>
              <div>
                <span className="mega-h"><IconeStem size={18} /> STEM</span>
                {CURSOS.filter((c) => c.area === 'stem').map((c) => (
                  <Link key={c.id} to={`/curso/${c.id}`} className="mega-item"><span>{c.nome}</span></Link>
                ))}
                <Link to="/cursos" className="mega-todos">Ver todos os cursos →</Link>
              </div>
            </div>
          )}
        </div>

        <form className="nav-busca" role="search" onSubmit={buscar}>
          <label htmlFor="busca-topo" className="sr-only">Buscar cursos</label>
          <input id="busca-topo" type="search" placeholder="Buscar cursos" value={q} onChange={(e) => setQ(e.target.value)} />
          <button type="submit" aria-label="Buscar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
          </button>
        </form>

        <nav className="nav-links" aria-label="Principal">
          <Link to="/#metodo" className="nav-item">Método</Link>
          <Link to="/#avaliacoes" className="nav-item">Avaliações</Link>
          <Link to="/#faq" className="nav-item">Dúvidas</Link>
        </nav>

        <div className="nav-conta" ref={refConta}>
          {carregando ? null : usuario ? (
            <>
              <button type="button" className="avatar-btn" aria-expanded={conta} aria-label={`Conta de ${usuario.nome}`} onClick={() => setConta((v) => !v)}>
                {usuario.foto ? <img src={usuario.foto} alt="" referrerPolicy="no-referrer" /> : usuario.nome.slice(0, 1).toUpperCase()}
              </button>
              {conta && (
                <div className="menu-conta">
                  <strong>{usuario.nome}</strong>
                  <span>{usuario.email}</span>
                  <button type="button" onClick={deslogar}>Sair</button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/entrar" className="nav-entrar">Entrar</Link>
              <Link to="/cadastro" className="nav-cta">Cadastre-se grátis</Link>
            </>
          )}
        </div>

        <button type="button" className="nav-burger" aria-label="Menu" aria-expanded={menu} aria-controls="menu-mobile" onClick={() => setMenu((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menu && (
        <div className="menu-mobile" id="menu-mobile">
          <form role="search" onSubmit={buscar}>
            <label htmlFor="busca-mobile" className="sr-only">Buscar cursos</label>
            <input id="busca-mobile" type="search" placeholder="Buscar cursos" value={q} onChange={(e) => setQ(e.target.value)} />
          </form>
          {CURSOS.map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
          <Link to="/cursos">Todos os cursos</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/#avaliacoes">Avaliações</Link>
          <Link to="/#faq">Dúvidas</Link>
          {usuario ? <button type="button" className="menu-mobile-sair" onClick={deslogar}>Sair ({usuario.nome})</button> : (
            <div className="menu-mobile-conta">
              <Link to="/entrar" className="btn btn-ghost">Entrar</Link>
              <Link to="/cadastro" className="btn btn-primary">Cadastre-se grátis</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
