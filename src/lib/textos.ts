// Textos fixos do player, no idioma do site (src/i18n). O parâmetro fica por compatibilidade: o idioma do curso não muda mais a interface.
import { T } from '../i18n';

export const textos = (_idioma?: string) => T.player;
export type Textos = typeof T.player;
