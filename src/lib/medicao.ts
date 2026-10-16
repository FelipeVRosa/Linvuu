// Medição do aprendizado, só com consentimento. Sem nome, e-mail, conta ou terceiros: um identificador aleatório guardado neste navegador
// e eventos do tipo "este exercício foi acertado ou errado". Serve para saber onde as aulas precisam melhorar.
import { api } from './api';

const CHAVE = 'linvuu:medicao:v1';
const CHAVE_ID = 'linvuu:medicao-id:v1';
export type Consentimento = 'sim' | 'nao' | null;
export type Evento =
  | { t: 'ex'; idioma: string; ex: string; tp: string; ok: 0 | 1 }
  | { t: 'fim'; idioma: string; aula: number; ac: number; tot: number };

export const consentimento = (): Consentimento => {
  try { const v = localStorage.getItem(CHAVE); return v === 'sim' || v === 'nao' ? v : null; } catch { return null; }
};

export function definirConsentimento(v: 'sim' | 'nao') {
  try {
    localStorage.setItem(CHAVE, v);
    if (v === 'nao') localStorage.removeItem(CHAVE_ID); // quem recusa (ou volta atrás) não deixa identificador
  } catch { /* navegador sem armazenamento */ }
  if (v === 'nao') fila.length = 0;
  window.dispatchEvent(new Event('linvuu:medicao'));
}

const identificador = (): string | null => {
  try {
    let id = localStorage.getItem(CHAVE_ID);
    if (!id || !/^[a-f0-9]{32}$/.test(id)) {
      const b = crypto.getRandomValues(new Uint8Array(16));
      id = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
      localStorage.setItem(CHAVE_ID, id);
    }
    return id;
  } catch { return null; }
};

const fila: Evento[] = [];
let ligado = false;

export function enviar() {
  if (!fila.length || consentimento() !== 'sim') { fila.length = 0; return; }
  const id = identificador();
  if (!id) { fila.length = 0; return; }
  const eventos = fila.splice(0, 60);
  try {
    void fetch(api('/api/evento'), { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, eventos }) }).catch(() => {});
  } catch { /* sem rede: perde só a medição */ }
  if (fila.length) enviar();
}

export function registrar(e: Evento) {
  if (consentimento() !== 'sim') return;
  if (!ligado && typeof document !== 'undefined') {
    ligado = true;
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') enviar(); });
    window.addEventListener('pagehide', enviar);
  }
  fila.push(e);
  if (fila.length >= 10 || e.t === 'fim') enviar();
}
