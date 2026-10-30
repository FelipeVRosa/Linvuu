import { MARKETING_CHOICE, rotaSeguraParaPixel } from './metaPixel';

export const TIKTOK_PIXEL_ID = 'DBIBAAJC77UF91063L30';
type Choice = 'yes' | 'no' | null;
type Store = Pick<Storage, 'getItem' | 'setItem'>;
type Queue = unknown[][] & { page: () => void; track: (event: string) => void; revokeConsent: () => void; grantConsent: () => void; methods: string[]; setAndDefer: (target: unknown[][], method: string) => void; instance: (id: string) => unknown[][]; load: (id: string) => void; _i: Record<string, unknown[][]>; _t: Record<string, number>; _o: Record<string, object> };
type PixelWindow = Window & { ttq?: Queue; TiktokAnalyticsObject?: string };

export function criarTikTokPixel(store: Store, runtime: () => { win: PixelWindow; doc: Document; path: string; search: string } | null) {
  let initialized = false;
  let granted = false;
  let lastPage = '';
  const choice = (): Choice => { try { const v = store.getItem(MARKETING_CHOICE); return v === 'yes' || v === 'no' ? v : null; } catch { return null; } };
  function choose(value: 'yes' | 'no') {
    if (value === 'no') { lastPage = ''; const w = runtime()?.win; if (initialized && granted) w?.ttq?.revokeConsent(); granted = false; }
  }
  function tracker() {
    const r = runtime();
    if (!r || choice() !== 'yes' || !rotaSeguraParaPixel(r.path, r.search)) return null;
    if (!initialized) {
      const q = [] as unknown as Queue;
      const methods = ['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'] as const;
      q.methods = [...methods];
      q.setAndDefer = (target, method) => { (target as unknown as Record<string, unknown>)[method] = (...args: unknown[]) => target.push([method, ...args]); };
      for (const method of methods) q.setAndDefer(q, method);
      q._i = {}; q._t = {}; q._o = {};
      q.instance = (id) => { const instance = q._i[id] || []; for (const method of methods) q.setAndDefer(instance, method); return instance; };
      r.win.TiktokAnalyticsObject = 'ttq'; r.win.ttq = q;
      q.load = (id) => {
        q._i[id] = []; q._t[id] = Date.now(); q._o[id] = {};
        (q._i[id] as unknown as { _u: string })._u = 'https://analytics.tiktok.com/i18n/pixel/events.js';
        const script = r.doc.createElement('script'); script.async = true;
        script.src = `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}&lib=ttq`;
        r.doc.head.appendChild(script);
      };
      q.load(TIKTOK_PIXEL_ID); initialized = true; granted = true;
    }
    if (!granted) { r.win.ttq?.grantConsent(); granted = true; }
    return r.win.ttq;
  }
  function pageView() {
    const r = runtime(); if (!r) return;
    if (!rotaSeguraParaPixel(r.path, r.search)) {
      lastPage = '';
      if (initialized && granted) { r.win.ttq?.revokeConsent(); granted = false; }
      return;
    }
    const key = r.path + r.search; if (lastPage === key) return; const q = tracker(); if (!q) return; q.page(); lastPage = key;
  }
  function checkout() { tracker()?.track('InitiateCheckout'); }
  return { choose, pageView, checkout };
}
const storage: Store = { getItem: k => localStorage.getItem(k), setItem: (k,v) => localStorage.setItem(k,v) };
export const tiktokPixel = criarTikTokPixel(storage, () => typeof window === 'undefined' || typeof document === 'undefined' ? null : { win: window as PixelWindow, doc: document, path: window.location.pathname, search: window.location.search });
