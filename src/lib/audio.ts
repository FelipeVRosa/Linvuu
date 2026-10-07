// Áudio das aulas. Ordem: MP3 salvo no site (public/audio/<idioma>/<hash>.mp3, listado em index.json) → voz do navegador (provisória).
// Nome do arquivo = hash do texto SEM acento tônico (o acento é só gráfico). A lista vem de content/audio/<idioma>-gravar.csv.
const BASE = (((import.meta.env ?? {}) as Record<string, string | undefined>).VITE_AUDIO_BASE_URL ?? '/audio').replace(/\/$/, '');
const LANG: Record<string, string> = { ru: 'ru-RU', de: 'de-DE', en: 'en-US', es: 'es-ES', fr: 'fr-FR', br: 'pt-BR' };

/** O que a voz lê e o que entra no hash: sem acento tônico (U+0301). Mantenha igual a scripts/aulas.mjs. */
export const textoParaAudio = (t: string) => t.normalize('NFC').replace(/\u0301/g, '').trim();
export const hashTexto = (t: string) => {
  let h = 0x811c9dc5;
  for (const c of new TextEncoder().encode(textoParaAudio(t))) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
};

export type FonteAudio = 'gravacao' | 'voz-do-navegador';
const avisar = (fonte: FonteAudio) => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent<FonteAudio>('linvuu:fonte-audio', { detail: fonte })); };

const indices = new Map<string, Promise<Set<string>>>();
/** Hashes dos MP3 que existem para o idioma (public/audio/<idioma>/index.json). Falha = conjunto vazio. */
const indice = (idioma: string) => {
  if (!indices.has(idioma)) {
    indices.set(idioma, fetch(`${BASE}/${idioma}/index.json`).then((r) => (r.ok ? r.json() : [])).then((l) => new Set<string>(Array.isArray(l) ? l : [])).catch(() => new Set<string>()));
  }
  return indices.get(idioma)!;
};

let atual: HTMLAudioElement | null = null;
let cancelar = 0;

export const parar = () => {
  cancelar++;
  atual?.pause(); atual = null;
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
};

const vozDoNavegador = (texto: string, idioma: string) => new Promise<void>((ok) => {
  if (typeof speechSynthesis === 'undefined') return ok();
  const u = new SpeechSynthesisUtterance(textoParaAudio(texto).replace(/[—…]/g, ' '));
  u.lang = LANG[idioma] ?? idioma; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find((x) => x.lang.toLowerCase().startsWith(u.lang.slice(0, 2).toLowerCase()));
  if (v) u.voice = v;
  u.onend = () => ok(); u.onerror = () => ok();
  speechSynthesis.speak(u);
});

/** Toca um texto com o token `minha` (se `parar()` for chamado, o token muda e a fala é abandonada). */
async function tocar(texto: string, idioma: string, minha: number) {
  const h = hashTexto(texto);
  const tem = (await indice(idioma)).has(h);
  if (minha !== cancelar) return;
  if (tem) {
    try {
      const a = new Audio(`${BASE}/${idioma}/${h}.mp3`);
      atual = a;
      await new Promise<void>((ok, erro) => { a.onended = () => ok(); a.onerror = () => erro(new Error('sem arquivo')); a.play().then(() => avisar('gravacao')).catch(erro); });
      return;
    } catch { if (minha !== cancelar) return; }
  }
  avisar('voz-do-navegador');
  await vozDoNavegador(texto, idioma);
}

export async function falar(texto: string, idioma = 'ru'): Promise<void> {
  parar();
  await tocar(texto, idioma, cancelar);
}

export async function falarLista(textos: string[], idioma = 'ru') {
  parar();
  const minha = cancelar;
  for (const t of textos) {
    if (minha !== cancelar) return;
    await tocar(t, idioma, minha);
  }
}

/** true = há áudio (gravado ou voz do navegador) no idioma; false = não há. */
export const temVoz = async (idioma: string): Promise<boolean> => {
  if ((await indice(idioma)).size > 0) return true;
  return new Promise((ok) => {
    if (typeof speechSynthesis === 'undefined') return ok(false);
    const prefixo = (LANG[idioma] ?? idioma).slice(0, 2).toLowerCase();
    const checar = () => speechSynthesis.getVoices().some((v) => v.lang.toLowerCase().startsWith(prefixo));
    if (speechSynthesis.getVoices().length) return ok(checar());
    const fim = setTimeout(() => ok(false), 1500);
    speechSynthesis.addEventListener('voiceschanged', () => { clearTimeout(fim); ok(checar()); }, { once: true });
  });
};
