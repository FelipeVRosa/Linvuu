// Áudio das aulas. Ordem: gravação (se VITE_AUDIO_BASE_URL existir e o arquivo existir) → voz do navegador.
// Nome do arquivo = hash do texto + .mp3 (lista em content/audio/<idioma>-gravar.csv, gerada por scripts/aulas.mjs).
const BASE = ((import.meta.env ?? {}) as Record<string, string | undefined>).VITE_AUDIO_BASE_URL?.replace(/\/$/, '');
const LANG: Record<string, string> = { ru: 'ru-RU', de: 'de-DE', gb: 'en-GB', es: 'es-ES', fr: 'fr-FR', br: 'pt-BR' };

export const hashTexto = (t: string) => {
  let h = 0x811c9dc5;
  for (const c of new TextEncoder().encode(t.normalize('NFC').trim())) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
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
  const u = new SpeechSynthesisUtterance(texto.replace(/[—…]/g, ' '));
  u.lang = LANG[idioma] ?? idioma; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find((x) => x.lang.toLowerCase().startsWith(u.lang.slice(0, 2).toLowerCase()));
  if (v) u.voice = v;
  u.onend = () => ok(); u.onerror = () => ok();
  speechSynthesis.speak(u);
});

export async function falar(texto: string, idioma = 'ru'): Promise<void> {
  parar();
  const minha = cancelar;
  if (BASE) {
    try {
      const a = new Audio(`${BASE}/${idioma}/${hashTexto(texto)}.mp3`);
      atual = a;
      await new Promise<void>((ok, erro) => { a.onended = () => ok(); a.onerror = () => erro(new Error('sem arquivo')); a.play().catch(erro); });
      return;
    } catch { if (minha !== cancelar) return; }
  }
  await vozDoNavegador(texto, idioma);
}

export async function falarLista(textos: string[], idioma = 'ru') {
  parar();
  const minha = cancelar;
  for (const t of textos) {
    if (minha !== cancelar) return;
    if (BASE) { try { await falar(t, idioma); cancelar = minha; continue; } catch { /* usa a voz */ } }
    await vozDoNavegador(t, idioma);
  }
}

/** true = há voz no idioma; false = não há; null = ainda carregando. */
export const temVoz = (idioma: string): Promise<boolean> => new Promise((ok) => {
  if (BASE) return ok(true);
  if (typeof speechSynthesis === 'undefined') return ok(false);
  const prefixo = (LANG[idioma] ?? idioma).slice(0, 2).toLowerCase();
  const checar = () => speechSynthesis.getVoices().some((v) => v.lang.toLowerCase().startsWith(prefixo));
  if (speechSynthesis.getVoices().length) return ok(checar());
  const fim = setTimeout(() => ok(false), 1500);
  speechSynthesis.addEventListener('voiceschanged', () => { clearTimeout(fim); ok(checar()); }, { once: true });
});
