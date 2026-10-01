/**
 * Kosmos Mascots & Language Visual Identities
 * Pretzel (German), Pelmeni (Russian), Potato (English), Croissant (French), Churro (Spanish)
 */

export interface MascotInfo {
  id: string;
  name: string;
  language: string;
  nativeName: string;
  symbol: string;
  description: string;
  color: string;
  svgIcon: string;
}

export const MASCOTS: Record<string, MascotInfo> = {
  de: {
    id: 'pretzel_de',
    name: 'Pretzel Alemão',
    language: 'Alemão (Deutsch)',
    nativeName: 'Deutsch',
    symbol: '🥨',
    description: 'Guardião da sintaxe germânica, declinações e compostos infinitos.',
    color: '#F5A623',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1D0640" stroke="#F5A623" stroke-width="3"/>
      <path d="M30 40 C 22 25, 45 18, 50 32 C 55 18, 78 25, 70 40 C 65 52, 55 60, 50 68 C 45 60, 35 52, 30 40 Z" fill="#D9822B" stroke="#F5A623" stroke-width="4" stroke-linejoin="round"/>
      <path d="M32 42 C 38 52, 45 56, 50 64 C 55 56, 62 52, 68 42" stroke="#B25E16" stroke-width="4" stroke-linecap="round"/>
      <circle cx="42" cy="36" r="3" fill="#FFE2B0"/>
      <circle cx="58" cy="36" r="3" fill="#FFE2B0"/>
      <circle cx="36" cy="46" r="2.5" fill="#FFE2B0"/>
      <circle cx="64" cy="46" r="2.5" fill="#FFE2B0"/>
      <circle cx="50" cy="48" r="2.5" fill="#FFE2B0"/>
      <circle cx="50" cy="28" r="2" fill="#FFE2B0"/>
      <!-- Monocle for academic rigor -->
      <circle cx="40" cy="35" r="7" stroke="#F5A623" stroke-width="2" fill="none"/>
      <line x1="47" y1="35" x2="52" y2="35" stroke="#F5A623" stroke-width="1.5"/>
      <path d="M33 35 Q30 42 28 50" stroke="#F5A623" stroke-width="1.5" fill="none"/>
    </svg>`
  },
  ru: {
    id: 'pelmeni_ru',
    name: 'Pelmeni Russo',
    language: 'Russo (Русский)',
    nativeName: 'Русский',
    symbol: '🥟',
    description: 'Mestre da fonética eslava, seis casos declináveis e verbos de movimento.',
    color: '#E06C75',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1D0640" stroke="#E06C75" stroke-width="3"/>
      <path d="M22 55 C 20 35, 45 28, 50 28 C 55 28, 80 35, 78 55 C 75 75, 25 75, 22 55 Z" fill="#F2EFE8" stroke="#D1CDC2" stroke-width="3"/>
      <!-- Ruffled dumpling fold -->
      <path d="M24 50 Q 30 44, 36 48 Q 42 43, 50 47 Q 58 43, 64 48 Q 70 44, 76 50" fill="none" stroke="#B8B0A2" stroke-width="3" stroke-linecap="round"/>
      <path d="M26 56 C 35 66, 65 66, 74 56" stroke="#B8B0A2" stroke-width="2.5" fill="none"/>
      <!-- Ushanka hat touch -->
      <path d="M32 30 C 35 22, 65 22, 68 30 L 72 38 L 28 38 Z" fill="#7D2E35" stroke="#E06C75" stroke-width="2"/>
      <circle cx="50" cy="27" r="4" fill="#F5A623"/>
    </svg>`
  },
  en: {
    id: 'potato_en',
    name: 'Batata Inglesa',
    language: 'Inglês (English)',
    nativeName: 'English',
    symbol: '🥔',
    description: 'Cartola vitoriana e fluência global, base universal de referências.',
    color: '#98C379',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1D0640" stroke="#98C379" stroke-width="3"/>
      <ellipse cx="50" cy="56" rx="26" ry="22" fill="#C99757" stroke="#9C6F35" stroke-width="3"/>
      <circle cx="42" cy="50" r="2" fill="#755020"/>
      <circle cx="60" cy="54" r="2" fill="#755020"/>
      <circle cx="48" cy="64" r="2" fill="#755020"/>
      <!-- Victorian Top Hat -->
      <path d="M34 40 L66 40 L64 24 L36 24 Z" fill="#150330" stroke="#98C379" stroke-width="2.5"/>
      <rect x="28" y="38" width="44" height="4" rx="2" fill="#150330" stroke="#98C379" stroke-width="2"/>
      <rect x="35" y="34" width="30" height="4" fill="#F5A623"/>
    </svg>`
  },
  fr: {
    id: 'croissant_fr',
    name: 'Croissant Francês',
    language: 'Francês (Français)',
    nativeName: 'Français',
    symbol: '🥐',
    description: 'Arquitetura dos tempos verbais do subjuntivo, liaisons e elegância.',
    color: '#61AFEF',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1D0640" stroke="#61AFEF" stroke-width="3"/>
      <path d="M22 62 C 26 40, 42 32, 50 32 C 58 32, 74 40, 78 62 C 68 55, 58 52, 50 52 C 42 52, 32 55, 22 62 Z" fill="#E5A65D" stroke="#BC792D" stroke-width="3"/>
      <path d="M32 45 C 38 41, 62 41, 68 45" stroke="#8A5116" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M38 52 C 44 48, 56 48, 62 52" stroke="#8A5116" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Beret -->
      <ellipse cx="50" cy="30" rx="18" ry="7" fill="#150330" stroke="#61AFEF" stroke-width="2"/>
      <circle cx="50" cy="23" r="2" fill="#61AFEF"/>
    </svg>`
  },
  es: {
    id: 'churro_es',
    name: 'Churro Espanhol',
    language: 'Espanhol (Español)',
    nativeName: 'Español',
    symbol: '🥢',
    description: 'Ritmo hispânico, modos verbais e precisão lexical ibérica e latina.',
    color: '#E5C07B',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1D0640" stroke="#E5C07B" stroke-width="3"/>
      <path d="M32 74 C 28 60, 30 38, 45 26 C 60 26, 68 38, 68 55" stroke="#C48439" stroke-width="14" stroke-linecap="round" fill="none"/>
      <path d="M32 74 C 28 60, 30 38, 45 26 C 60 26, 68 38, 68 55" stroke="#E5B26E" stroke-width="8" stroke-linecap="round" fill="none"/>
      <!-- Sugar crystals & chocolate dip -->
      <path d="M56 48 Q 66 50, 68 55" stroke="#4A2613" stroke-width="12" stroke-linecap="round" fill="none"/>
      <circle cx="42" cy="32" r="1.5" fill="#FFFFFF"/>
      <circle cx="48" cy="28" r="1.5" fill="#FFFFFF"/>
      <circle cx="34" cy="45" r="1.5" fill="#FFFFFF"/>
    </svg>`
  }
};
