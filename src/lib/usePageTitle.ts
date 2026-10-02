import { useEffect } from 'react';

export function usePageTitle(titulo?: string) {
  useEffect(() => {
    document.title = titulo ? `${titulo} · Linvuu` : 'Linvuu · 100 dias para um mundo novo';
  }, [titulo]);
}
