/**
 * Linvuu Mascots & Visual Companions
 * 7 Country & Subject Companions:
 * - Pretzel (Alemão / DE)
 * - Pelmeni (Russo / RU)
 * - Croissant (Francês / FR)
 * - Tomate (Espanhol / ES)
 * - Batata (Inglês / EN)
 * - Ampulheta (Matemática / MAT)
 * - Ímã (Física / FIS)
 */

export interface MascotInfo {
  id: string;
  name: string;
  language: string;
  nativeName: string;
  symbol: string;
  description: string;
  color: string;
  accentColor: string;
  greeting: string;
  voiceQuote: string;
  svgIcon: string;
}

export const MASCOTS: Record<string, MascotInfo> = {
  de: {
    id: 'pretzel_de',
    name: 'Pretzel Alemão',
    language: 'Alemão',
    nativeName: 'Deutsch',
    symbol: '🥨',
    description: 'Guia caloroso da estrutura alemã, fonética precisa e vocabulário sem mistérios.',
    color: '#F59E0B',
    accentColor: '#D97706',
    greeting: 'Hallo! Schön, dass du da bist!',
    voiceQuote: 'O alemão tem uma lógica perfeita. Quando você entende a estrutura, tudo se encaixa como mágica!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1C1814" stroke="#F59E0B" stroke-width="3"/>
      <path d="M30 40 C 22 25, 45 18, 50 32 C 55 18, 78 25, 70 40 C 65 52, 55 60, 50 68 C 45 60, 35 52, 30 40 Z" fill="#D97706" stroke="#FBBF24" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M32 42 C 38 52, 45 56, 50 64 C 55 56, 62 52, 68 42" stroke="#92400E" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Salt crystals -->
      <circle cx="42" cy="36" r="2.5" fill="#FEF3C7"/>
      <circle cx="58" cy="36" r="2.5" fill="#FEF3C7"/>
      <circle cx="36" cy="46" r="2" fill="#FEF3C7"/>
      <circle cx="64" cy="46" r="2" fill="#FEF3C7"/>
      <circle cx="50" cy="48" r="2" fill="#FEF3C7"/>
      <circle cx="50" cy="28" r="2" fill="#FEF3C7"/>
      <!-- Cute eyes & smile -->
      <ellipse cx="44" cy="38" rx="2" ry="3" fill="#1C1814"/>
      <ellipse cx="56" cy="38" rx="2" ry="3" fill="#1C1814"/>
      <path d="M47 43 Q 50 46 53 43" stroke="#1C1814" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  ru: {
    id: 'pelmeni_ru',
    name: 'Pelmeni Russo',
    language: 'Russo',
    nativeName: 'Русский',
    symbol: '🥟',
    description: 'Companheiro fofo e acolhedor para desvendar o cirílico e os sons eslavos.',
    color: '#EF4444',
    accentColor: '#DC2626',
    greeting: 'Привет! Рад тебя видеть!',
    voiceQuote: 'O alfabeto cirílico se aprende nos primeiros dias. Depois disso, um universo inteiro de cultura se abre para você!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1C1518" stroke="#EF4444" stroke-width="3"/>
      <!-- Pelmeni dumpling body -->
      <path d="M22 56 C 20 36, 45 30, 50 30 C 55 30, 80 36, 78 56 C 75 75, 25 75, 22 56 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="3"/>
      <!-- Dumpling folds -->
      <path d="M25 50 Q 31 44, 38 48 Q 44 43, 50 47 Q 56 43, 62 48 Q 69 44, 75 50" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 58 C 36 68, 64 68, 72 58" stroke="#CBD5E1" stroke-width="2" fill="none"/>
      <!-- Warm Russian Ushanka hat -->
      <path d="M30 34 C 34 23, 66 23, 70 34 L 74 42 L 26 42 Z" fill="#991B1B" stroke="#EF4444" stroke-width="2"/>
      <circle cx="50" cy="29" r="3.5" fill="#F59E0B"/>
      <!-- Friendly face -->
      <ellipse cx="43" cy="58" rx="2" ry="3.2" fill="#1E293B"/>
      <ellipse cx="57" cy="58" rx="2" ry="3.2" fill="#1E293B"/>
      <path d="M47 64 Q 50 67 53 64" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <!-- Pink cheeks -->
      <circle cx="39" cy="62" r="3" fill="#FDA4AF" opacity="0.7"/>
      <circle cx="61" cy="62" r="3" fill="#FDA4AF" opacity="0.7"/>
    </svg>`
  },
  fr: {
    id: 'croissant_fr',
    name: 'Croissant Francês',
    language: 'Francês',
    nativeName: 'Français',
    symbol: '🥐',
    description: 'Elegante e charmoso, ensina o ritmo suave e a pronúncia autêntica de Paris.',
    color: '#38BDF8',
    accentColor: '#0284C7',
    greeting: 'Bonjour mon ami! Prêt à parler?',
    voiceQuote: 'O francês é a língua do ritmo e do coração. Pronunciar bem é como cantar uma melodia suave!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#121824" stroke="#38BDF8" stroke-width="3"/>
      <!-- Croissant body -->
      <path d="M22 62 C 26 40, 42 32, 50 32 C 58 32, 74 40, 78 62 C 68 55, 58 52, 50 52 C 42 52, 32 55, 22 62 Z" fill="#F59E0B" stroke="#D97706" stroke-width="3"/>
      <path d="M32 45 C 38 41, 62 41, 68 45" stroke="#B45309" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M38 52 C 44 48, 56 48, 62 52" stroke="#B45309" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Parisian Beret -->
      <ellipse cx="50" cy="30" rx="19" ry="8" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="50" cy="22" r="2.5" fill="#38BDF8"/>
      <!-- Friendly eyes and wink -->
      <ellipse cx="44" cy="50" rx="2" ry="3" fill="#451A03"/>
      <path d="M54 50 Q 57 48 60 50" stroke="#451A03" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M48 55 Q 51 58 54 55" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <!-- French scarf touch -->
      <path d="M43 65 L 57 65 L 53 72 L 47 72 Z" fill="#EF4444"/>
    </svg>`
  },
  es: {
    id: 'tomate_es',
    name: 'Tomate Espanhol',
    language: 'Espanhol',
    nativeName: 'Español',
    symbol: '🍅',
    description: 'Alegre, vibrante e cheio de energia para destravar a fala rápida e natural.',
    color: '#F43F5E',
    accentColor: '#E11D48',
    greeting: '¡Hola! ¡Qué alegría verte por aquí!',
    voiceQuote: 'O espanhol é pura conexão humana! Quando você perde a vergonha de falar, tudo flui com facilidade!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#1C1417" stroke="#F43F5E" stroke-width="3"/>
      <!-- Tomato Body -->
      <ellipse cx="50" cy="55" rx="27" ry="24" fill="#E11D48" stroke="#BE123C" stroke-width="3"/>
      <!-- Highlight -->
      <ellipse cx="38" cy="46" rx="5" ry="3" fill="#FB7185" transform="rotate(-25 38 46)"/>
      <!-- Tomato Stem Leaves -->
      <path d="M50 32 L 50 24" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 32 C 43 28, 37 32, 34 37 C 40 37, 46 35, 50 32 Z" fill="#22C55E"/>
      <path d="M50 32 C 57 28, 63 32, 66 37 C 60 37, 54 35, 50 32 Z" fill="#22C55E"/>
      <path d="M50 32 C 50 39, 50 40, 50 42 C 47 38, 48 35, 50 32 Z" fill="#16A34A"/>
      <!-- Happy Face with Big Smile -->
      <ellipse cx="43" cy="52" rx="2.5" ry="3.5" fill="#1C1917"/>
      <ellipse cx="57" cy="52" rx="2.5" ry="3.5" fill="#1C1917"/>
      <path d="M42 61 Q 50 69 58 61" stroke="#1C1917" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Cheeks -->
      <circle cx="36" cy="57" r="3" fill="#FDA4AF" opacity="0.6"/>
      <circle cx="64" cy="57" r="3" fill="#FDA4AF" opacity="0.6"/>
    </svg>`
  },
  en: {
    id: 'potato_en',
    name: 'Batata Inglesa',
    language: 'Inglês',
    nativeName: 'English',
    symbol: '🥔',
    description: 'Simpática e cosmopolita, ensina o inglês prático das conversas de verdade.',
    color: '#10B981',
    accentColor: '#059669',
    greeting: 'Hello there! Let\'s master this together!',
    voiceQuote: 'O segredo do inglês não é decorar listas de palavras, é entender como as frases conectam no dia a dia!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#131C18" stroke="#10B981" stroke-width="3"/>
      <!-- Potato Body -->
      <ellipse cx="50" cy="57" rx="25" ry="21" fill="#D97706" stroke="#B45309" stroke-width="3"/>
      <!-- Potato Spots -->
      <circle cx="41" cy="50" r="1.8" fill="#92400E"/>
      <circle cx="61" cy="54" r="1.8" fill="#92400E"/>
      <circle cx="49" cy="67" r="1.8" fill="#92400E"/>
      <!-- Victorian / British Gentleman Hat -->
      <path d="M36 41 L 64 41 L 62 26 L 38 26 Z" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
      <rect x="30" y="39" width="40" height="4" rx="2" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
      <rect x="37" y="36" width="26" height="3" fill="#F59E0B"/>
      <!-- Gentleman eyes and mustache -->
      <ellipse cx="44" cy="52" rx="2" ry="3" fill="#1C1917"/>
      <ellipse cx="56" cy="52" rx="2" ry="3" fill="#1C1917"/>
      <path d="M45 61 Q 50 59 55 61" stroke="#92400E" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  mat: {
    id: 'ampulheta_mat',
    name: 'Ampulheta Matemática',
    language: 'Matemática',
    nativeName: 'Matemática',
    symbol: '⏳',
    description: 'Raciocínio puro, harmonia de proporções e clareza de pensamento universal.',
    color: '#8B5CF6',
    accentColor: '#7C3AED',
    greeting: 'O universo é escrito na linguagem dos números.',
    voiceQuote: 'A matemática não é sobre decorar fórmulas; é sobre treinar a mente para enxergar padrões invisíveis!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#181424" stroke="#8B5CF6" stroke-width="3"/>
      <!-- Hourglass Frame -->
      <rect x="32" y="24" width="36" height="6" rx="2" fill="#475569" stroke="#8B5CF6" stroke-width="2"/>
      <rect x="32" y="70" width="36" height="6" rx="2" fill="#475569" stroke="#8B5CF6" stroke-width="2"/>
      <!-- Glass Bulbs -->
      <path d="M36 30 C 36 44, 46 48, 50 50 C 54 48, 64 44, 64 30 Z" fill="#8B5CF6" fill-opacity="0.2" stroke="#A78BFA" stroke-width="2.5"/>
      <path d="M36 70 C 36 56, 46 52, 50 50 C 54 52, 64 56, 64 70 Z" fill="#8B5CF6" fill-opacity="0.2" stroke="#A78BFA" stroke-width="2.5"/>
      <!-- Flowing Sand -->
      <path d="M40 33 C 43 38, 57 38, 60 33 L 53 47 L 47 47 Z" fill="#F59E0B"/>
      <line x1="50" y1="48" x2="50" y2="58" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/>
      <path d="M42 68 C 45 62, 55 62, 58 68 Z" fill="#F59E0B"/>
      <!-- Friendly Glow Eye -->
      <circle cx="50" cy="50" r="3" fill="#FBBF24"/>
    </svg>`
  },
  fis: {
    id: 'ima_fis',
    name: 'Ímã Física',
    language: 'Física',
    nativeName: 'Física',
    symbol: '🧲',
    description: 'Compreenda as forças fundamentais, leis do movimento e mistérios do cosmos.',
    color: '#06B6D4',
    accentColor: '#0891B2',
    greeting: 'A energia nunca morre, ela se transforma.',
    voiceQuote: 'Compreender a física é decifrar o código-fonte da realidade que nos cerca a cada segundo!',
    svgIcon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#131B22" stroke="#06B6D4" stroke-width="3"/>
      <!-- Horseshoe Magnet -->
      <path d="M32 66 L 32 46 C 32 32, 68 32, 68 46 L 68 66" stroke="#E11D48" stroke-width="12" stroke-linecap="round" fill="none"/>
      <!-- Blue Pole Tip -->
      <path d="M68 54 L 68 66" stroke="#2563EB" stroke-width="12" stroke-linecap="round" fill="none"/>
      <!-- Pole Plates -->
      <rect x="26" y="64" width="12" height="4" rx="1" fill="#F8FAFC"/>
      <rect x="62" y="64" width="12" height="4" rx="1" fill="#F8FAFC"/>
      <!-- Magnetic Field Sparks -->
      <path d="M43 66 Q 50 60 57 66" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2" fill="none"/>
      <path d="M40 71 Q 50 63 60 71" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2" fill="none"/>
      <!-- Friendly face inside curve -->
      <ellipse cx="46" cy="40" rx="1.8" ry="2.8" fill="#F8FAFC"/>
      <ellipse cx="54" cy="40" rx="1.8" ry="2.8" fill="#F8FAFC"/>
      <path d="M48 44 Q 50 46 52 44" stroke="#F8FAFC" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`
  }
};
