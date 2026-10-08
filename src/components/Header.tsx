import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CURSOS_ATIVOS } from '../lib/content';
import { useAuth } from '../lib/AuthContext';

export function Header() {
  const [menu, setMenu] = useState(false);
  const [conta, setConta] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();
  const { usuario, carregando, sair } = useAuth();
  const refConta = useRef<HTMLDivElement>(null);

  useEffect(() => { setMenu(false); setConta(false); }, [loc.pathname, loc.search]);
  useEffect(() => {
    const fora = (e: MouseEvent) => {
      if (refConta.current && !refConta.current.contains(e.target as Node)) setConta(false);
    };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenu(false); setConta(false); } };
    document.addEventListener('mousedown', fora);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', fora); document.removeEventListener('keydown', esc); };
  }, []);

  const deslogar = async () => { await sair(); setConta(false); setMenu(false); nav('/'); };

  return (
    <header className="lv-head">
      <div className="lv-head-in">
        <Link to="/" className="lv-logo" aria-label="Linvuu, página inicial">
          <img src="/brand/linvuu-wordmark-verde.svg" alt="Linvuu" width="104" height="33" />
        </Link>

        <nav className="lv-nav" aria-label="Principal">
          <Link to="/cursos">Cursos</Link>
          <Link to="/gramatica/en">Gramática</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/assinatura">Preço</Link>
          <Link to="/#faq">Dúvidas</Link>
        </nav>

        <div className="lv-conta" ref={refConta}>
          {carregando ? null : usuario ? (
            <>
              <button type="button" className="avatar-btn" aria-expanded={conta} aria-label={`Conta de ${usuario.nome}`} onClick={() => setConta((v) => !v)}>
                {usuario.foto ? <img src={usuario.foto} alt="" referrerPolicy="no-referrer" /> : usuario.nome.slice(0, 1).toUpperCase()}
              </button>
              {conta && (
                <div className="menu-conta">
                  <strong>{usuario.nome}</strong>
                  <span>{usuario.email}</span>
                  <Link to="/assinatura" onClick={() => setConta(false)}>Assinatura</Link>
                  <button type="button" onClick={deslogar}>Sair</button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/entrar" className="lv-entrar">Entrar</Link>
              <Link to="/cadastro" className="btn btn-primary lv-head-cta">Começar grátis</Link>
            </>
          )}
        </div>

        <button type="button" className="lv-burger" aria-label="Menu" aria-expanded={menu} aria-controls="menu-mobile" onClick={() => setMenu((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {menu && (
        <div className="lv-mobile" id="menu-mobile">
          {CURSOS_ATIVOS.map((c) => <Link key={c.id} to={`/curso/${c.id}`}>{c.nome}</Link>)}
          <Link to="/cursos">Todos os cursos</Link>
          <Link to="/gramatica/en">Gramática</Link>
          <Link to="/#metodo">Método</Link>
          <Link to="/assinatura">Preço e assinatura</Link>
          <Link to="/#faq">Dúvidas</Link>
          {usuario ? <button type="button" className="menu-mobile-sair" onClick={deslogar}>Sair ({usuario.nome})</button> : (
            <div className="menu-mobile-conta">
              <Link to="/entrar" className="btn btn-ghost">Entrar</Link>
              <Link to="/cadastro" className="btn btn-primary">Começar grátis</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
