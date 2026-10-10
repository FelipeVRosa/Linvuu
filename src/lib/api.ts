// Endereço da API. No site, o caminho é relativo (mesma origem). No app, o site roda dentro do aparelho,
// então a API precisa do endereço completo do servidor de produção (VITE_API_BASE_URL, definido no build do app).
const BASE = ((import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '').replace(/\/$/, '');
export const api = (caminho: string) => `${BASE}${caminho}`;
