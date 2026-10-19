import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOCALE, LOCALES, lembrarLocale, urlEm, useT } from '../../i18n';
import type { CodigoLocale } from '../../i18n/locales';
import { useAuth } from '../../lib/AuthContext';
import { appTextos } from './textos';
import { CicloAndroid } from './CicloAndroid';
import './app.css';

export function Header() {
  const t = useT(), a = appTextos();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { usuario, sair } = useAuth();
  const [aberto, setAberto] = useState(false);
  const [online, setOnline] = useState(() => navigator.onLine);
  const [saindo, setSaindo] = useState(false);
  const [erro, setErro] = useState(false);
  useEffect(() => { setAberto(false); setErro(false); }, [pathname]);
  useEffect(() => {
    const sync = () => setOnline(navigator.onLine);
    window.addEventListener('online', sync); window.addEventListener('offline', sync);
    return () => { window.removeEventListener('online', sync); window.removeEventListener('offline', sync); };
  }, []);
  const idioma = (codigo: CodigoLocale) => {
    if (codigo === LOCALE.codigo) return;
    if (/\/dia\//.test(pathname) && !window.confirm(a.trocarIdioma)) return;
    lembrarLocale(codigo); window.location.assign(urlEm(codigo));
  };
  const deslogar = async () => {
    setSaindo(true); setErro(false);
    try { await sair(); setAberto(false); nav('/', { replace: true }); }
    catch { setErro(true); }
    finally { setSaindo(false); }
  };
  return <>
    <CicloAndroid />
    <header className="app-header">
      {pathname !== '/' ? <button type="button" className="app-touch" aria-label={a.voltar} onClick={() => (window.history.state?.idx ?? 0) > 0 ? nav(-1) : nav('/')}>←</button> : <span />}
      <Link to="/" aria-label={t.geral.paginaInicial}><img src="/brand/linvuu-wordmark-verde.svg" alt="Linvuu" width="104" height="33" /></Link>
      <button type="button" className="app-touch" aria-expanded={aberto} aria-controls="app-ajustes" onClick={() => setAberto(v => !v)}>{a.ajustes}</button>
    </header>
    {aberto && <section id="app-ajustes" className="app-ajustes" aria-label={a.ajustes}>
      <label>{t.barra.idioma}<select value={LOCALE.codigo} onChange={e => idioma(e.target.value as CodigoLocale)}>{LOCALES.map(l => <option key={l.codigo} value={l.codigo}>{l.nome}</option>)}</select></label>
      <p>{a.avisoIdiomas}</p>
      <Link to="/assinatura">{t.nav.assinatura}</Link>
      <Link to="/privacidade">{t.rodape.privacidade}</Link>
      <Link to="/termos">{t.assinatura.termos}</Link>
      {usuario ? <button type="button" disabled={saindo} onClick={deslogar}>{saindo ? t.geral.carregando : t.nav.sair}</button> : <Link to="/entrar">{t.nav.entrar}</Link>}
      {erro && <p role="alert">{a.erroSair}</p>}
    </section>}
    {!online && <p className="app-rede" role="status">{a.semRede}</p>}
  </>;
}
