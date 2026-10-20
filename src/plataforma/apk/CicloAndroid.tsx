import { pausar } from './audio';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

/** O botão físico volta dentro do app; na raiz, minimiza sem forçar encerramento. */
export function CicloAndroid({ painelAberto, fecharPainel }: { painelAberto: boolean; fecharPainel: () => void }) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const aoOcultar=()=>{if(document.hidden)pausar();};
    document.addEventListener('visibilitychange',aoOcultar);
    const listener=Capacitor.isNativePlatform()?App.addListener('pause',pausar):null;
    return ()=>{document.removeEventListener('visibilitychange',aoOcultar);void listener?.then(h=>h.remove()).catch(()=>{});};
  }, []);
  useEffect(() => {
    if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') return;
    const listener = App.addListener('backButton', ({ canGoBack }) => {
      if (painelAberto) { fecharPainel(); return; }
      if (pathname === '/') { void App.minimizeApp().catch(() => {}); return; }
      if (canGoBack && (window.history.state?.idx ?? 0) > 0) nav(-1);
      else nav('/', { replace: true });
    });
    void listener.catch(() => {});
    return () => { void listener.then(h => h.remove()).catch(() => {}); };
  }, [nav, pathname, painelAberto, fecharPainel]);
  return null;
}
