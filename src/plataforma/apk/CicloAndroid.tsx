import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

/** O botão físico volta dentro do app; na raiz, minimiza sem forçar encerramento. */
export function CicloAndroid() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') return;
    const listener = App.addListener('backButton', ({ canGoBack }) => {
      if (pathname === '/') { void App.minimizeApp().catch(() => {}); return; }
      if (canGoBack && (window.history.state?.idx ?? 0) > 0) nav(-1);
      else nav('/', { replace: true });
    });
    return () => { void listener.then(h => h.remove()).catch(() => {}); };
  }, [nav, pathname]);
  return null;
}
