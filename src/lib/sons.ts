// Sons de reforço da área do aluno, gerados no navegador (Web Audio, sem arquivos).
// Desligados por padrão. A escolha fica neste aparelho. Áudio é reforço, nunca barreira:
// quem não ouve perde só o reforço, nunca informação.
import { audioTocando } from './audio';

const CHAVE = 'linvuu:sons';
export const EVENTO_SONS = 'linvuu:sons';

export const sonsLigados = (): boolean => {
  try { return localStorage.getItem(CHAVE) === '1'; } catch { return false; }
};

export function definirSons(ligado: boolean) {
  try { localStorage.setItem(CHAVE, ligado ? '1' : '0'); } catch { /* sem armazenamento: vale só nesta página */ }
  window.dispatchEvent(new Event(EVENTO_SONS));
}

let contexto: AudioContext | null = null;
function ctx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  try {
    contexto ??= new AC();
    if (contexto.state === 'suspended') void contexto.resume();
    return contexto;
  } catch { return null; }
}

interface Nota { freq: number; freqFim?: number; inicio: number; duracao: number; pico: number; tipo: OscillatorType }

// pico em dB relativo a 1.0 (ex.: -20 dB = 0.1)
const amp = (db: number) => Math.pow(10, db / 20);

function emitir(notas: Nota[]) {
  // Reforço nunca concorre com a aula: se a voz ou a gravação estiver tocando, o som não sai.
  if (audioTocando()) return;
  const c = ctx();
  if (!c) return;
  const agora = c.currentTime;
  for (const n of notas) {
    const osc = c.createOscillator();
    const ganho = c.createGain();
    const t0 = agora + n.inicio;
    const t1 = t0 + n.duracao;
    osc.type = n.tipo;
    osc.frequency.setValueAtTime(n.freq, t0);
    if (n.freqFim) osc.frequency.linearRampToValueAtTime(n.freqFim, t1);
    ganho.gain.setValueAtTime(0.0001, t0);
    ganho.gain.exponentialRampToValueAtTime(amp(n.pico), t0 + 0.008);
    ganho.gain.exponentialRampToValueAtTime(0.0001, t1);
    osc.connect(ganho).connect(c.destination);
    osc.start(t0);
    osc.stop(t1 + 0.02);
  }
}

/** Clique ao trocar o tema: 40 ms, 800 Hz, -20 dB. */
export function somClique() {
  if (!sonsLigados()) return;
  emitir([{ freq: 800, inicio: 0, duracao: 0.04, pico: -20, tipo: 'sine' }]);
}

/** Dia concluído: arpejo ascendente Dó-Mi-Sol, 200 ms, -15 dB, onda senoidal. */
export function somConcluido() {
  if (!sonsLigados()) return;
  emitir([
    { freq: 523.25, inicio: 0, duracao: 0.09, pico: -15, tipo: 'sine' },
    { freq: 659.25, inicio: 0.055, duracao: 0.09, pico: -15, tipo: 'sine' },
    { freq: 783.99, inicio: 0.11, duracao: 0.09, pico: -15, tipo: 'sine' },
  ]);
}

/** Resposta errada: 300 Hz descendo a 200 Hz em 150 ms, -18 dB. Não é alarme.
 *  `sequencia` é o número de erros seguidos (1 = primeiro). Cada erro seguido baixa 3 dB, até -24 dB. */
export function somErro(sequencia = 1) {
  if (!sonsLigados()) return;
  const degraus = Math.min(Math.max(sequencia, 1), 3) - 1;
  emitir([{ freq: 300, freqFim: 200, inicio: 0, duracao: 0.15, pico: -18 - 3 * degraus, tipo: 'triangle' }]);
}
