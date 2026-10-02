// Preencha só as URLs. Enquanto estiver vazio, o ícone aparece e avisa "link em breve".
export interface Rede { id: string; nome: string; url: string }

export const REDES: Rede[] = [
  { id: 'instagram', nome: 'Instagram', url: '' },
  { id: 'youtube', nome: 'YouTube', url: '' },
  { id: 'tiktok', nome: 'TikTok', url: '' },
  { id: 'x', nome: 'X', url: '' },
  { id: 'linkedin', nome: 'LinkedIn', url: '' },
  { id: 'facebook', nome: 'Facebook', url: '' },
  { id: 'telegram', nome: 'Telegram', url: '' },
  { id: 'whatsapp', nome: 'WhatsApp', url: '' },
];
