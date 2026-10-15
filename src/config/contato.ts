// Canais de contato da Linvuu. Os ícones do rodapé e a página /contato leem tudo daqui.
// Para ativar o WhatsApp, preencha só WHATSAPP_NUMERO (dígitos, com país e DDD, sem + nem espaços: 5511999999999).
// Para ter um ícone de LinkedIn da empresa, preencha LINKEDIN_EMPRESA; sem ele, o ícone leva à página /contato,
// onde estão os perfis dos dois autores.
import { EMAIL_OFICIAL, SITE_URL } from './site.ts';

export const WHATSAPP_NUMERO = '';
export const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site da Linvuu e queria tirar uma dúvida.';
export const LINKEDIN_EMPRESA = '';

export type IdContato = 'site' | 'email' | 'whatsapp' | 'linkedin';
export interface Contato { id: IdContato; nome: string; rotulo: string; href: string; externo: boolean }

export const whatsappUrl = (): string => (WHATSAPP_NUMERO ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}` : '');

/** Só entram os canais que existem de verdade: nada de ícone que leva a lugar nenhum. */
export function contatos(): Contato[] {
  const lista: Contato[] = [
    { id: 'site', nome: 'Site', rotulo: SITE_URL.replace('https://', ''), href: SITE_URL, externo: false },
    { id: 'email', nome: 'E-mail', rotulo: EMAIL_OFICIAL, href: `mailto:${EMAIL_OFICIAL}`, externo: false },
  ];
  if (WHATSAPP_NUMERO) lista.push({ id: 'whatsapp', nome: 'WhatsApp', rotulo: 'Falar pelo WhatsApp', href: whatsappUrl(), externo: true });
  lista.push(LINKEDIN_EMPRESA
    ? { id: 'linkedin', nome: 'LinkedIn', rotulo: 'Linvuu no LinkedIn', href: LINKEDIN_EMPRESA, externo: true }
    : { id: 'linkedin', nome: 'LinkedIn', rotulo: 'Perfis dos autores', href: '/contato#linkedin', externo: false });
  return lista;
}
