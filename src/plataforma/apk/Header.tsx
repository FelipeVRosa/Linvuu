import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOCALE, LOCALES, lembrarLocale, urlEm, useT } from '../../i18n';
import type { CodigoLocale } from '../../i18n/locales';
import { useAuth } from '../../lib/AuthContext';
import { appTextos } from './textos';
import { CicloAndroid } from './CicloAndroid';
import './app.css';
import { experiencia } from './experiencia';

export function Header() {
  const t = useT(), a = appTextos(), x = experiencia();
  const nav = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    let encerrado = false;
    const focar = () => {
      const titulo = document.querySelector<HTMLElement>('#conteudo h1');
      if (!titulo || encerrado) return false;
      titulo.tabIndex = -1; titulo.focus({preventScroll:true}); return true;
    };
    const observer = new MutationObserver(() => { if(focar()) observer.disconnect(); });
    const frame = requestAnimationFrame(() => { if(!focar()) observer.observe(document.getElementById('conteudo') ?? document.body,{childList:true,subtree:true}); });
    const limite = setTimeout(() => observer.disconnect(),5000);
    return () => { encerrado=true; cancelAnimationFrame(frame); clearTimeout(limite); observer.disconnect(); };
  }, [pathname]);
  const { usuario, sair } = useAuth();
  const [aberto, setAberto] = useState(false);
  const [tema, setTema] = useState(() => { try { return localStorage.getItem('linvuu:tema-app') || 'sistema'; } catch { return 'sistema'; } });
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const aplicar = () => { document.documentElement.dataset.temaAluno = tema === 'sistema' ? (media.matches ? 'escuro' : 'claro') : tema; };
    aplicar(); media.addEventListener('change', aplicar);
    try { localStorage.setItem('linvuu:tema-app', tema); } catch { /* preferência válida nesta sessão */ }
    return () => media.removeEventListener('change', aplicar);
  }, [tema]);
  const [escala, setEscala] = useState(() => { try { const v=localStorage.getItem('linvuu:leitura-app'); return ['1','1.25','1.5'].includes(v ?? '') ? v! : '1'; } catch { return '1'; } });
  useEffect(() => {
    document.documentElement.style.setProperty('--app-text-scale', escala);
    try { localStorage.setItem('linvuu:leitura-app', escala); } catch { /* permanece nesta tela */ }
  }, [escala]);
  const primeiroAjuste = useRef<HTMLSelectElement>(null);
  useEffect(() => { if(aberto) primeiroAjuste.current?.focus(); }, [aberto]);
  const botaoAjustes = useRef<HTMLButtonElement>(null);
  const fecharPainel = useCallback(() => { setAberto(false); botaoAjustes.current?.focus(); }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape' && aberto) fecharPainel(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [aberto, fecharPainel]);
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
    <CicloAndroid painelAberto={aberto} fecharPainel={fecharPainel} />
    <header className="app-header">
      {pathname !== '/' ? <button type="button" className="app-touch" aria-label={a.voltar} onClick={() => (window.history.state?.idx ?? 0) > 0 ? nav(-1) : nav('/')}>←</button> : <span />}
      <Link to="/" aria-label={`Linvuu, ${t.geral.paginaInicial}`}><img className="app-emblema" src="/brand/linvuu-app-emblema.svg" alt="" width="34" height="34" /><img src="/brand/linvuu-wordmark-verde.svg" alt="Linvuu" width="104" height="33" /></Link>
      <button ref={botaoAjustes} type="button" className="app-touch" aria-expanded={aberto} aria-controls="app-ajustes" onClick={() => setAberto(v => !v)}>{a.ajustes}</button>
    </header>
    {aberto && <section id="app-ajustes" className="app-ajustes" aria-label={a.ajustes}>
      <label>{t.barra.idioma}<select ref={primeiroAjuste} id="app-idioma" value={LOCALE.codigo} onChange={e => idioma(e.target.value as CodigoLocale)}>{LOCALES.map(l => <option key={l.codigo} value={l.codigo}>{l.nome}</option>)}</select></label>
      <label>{x.aparencia}<select id="app-tema" value={tema} onChange={e => setTema(e.target.value)}><option value="sistema">{x.sistema}</option><option value="claro">{x.claro}</option><option value="escuro">{x.escuro}</option></select></label>
      <label>{x.leitura}<select id="app-leitura" value={escala} onChange={e => setEscala(e.target.value)}><option value="1">{x.normal}</option><option value="1.25">{x.ampliado}</option><option value="1.5">{x.grande}</option></select></label>
      <button type="button" className="app-ajustes-fechar" onClick={fecharPainel}>{x.fechar}</button>
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
