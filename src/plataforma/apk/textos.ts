import { LOCALE } from '../../i18n';

const textos = {
  'pt-BR': { compras: 'Compras dentro do aplicativo ainda não estão disponíveis.', teste: 'Versão em testes. As duas primeiras aulas de cada curso são gratuitas.', inicio: 'O que vamos estudar hoje?', bloqueado: 'Entre na sua conta para consultar seu acesso.', livro: 'A leitura deste livro no aplicativo está em preparação.' },
  en: { compras: 'In-app purchases are not available yet.', teste: 'Test version. The first two lessons of every course are free.', inicio: 'What shall we study today?', bloqueado: 'Sign in to check your access.', livro: 'Reading this book in the app is being prepared.' },
  es: { compras: 'Las compras dentro de la aplicación aún no están disponibles.', teste: 'Versión de prueba. Las dos primeras lecciones de cada curso son gratuitas.', inicio: '¿Qué vamos a estudiar hoy?', bloqueado: 'Inicia sesión para consultar tu acceso.', livro: 'La lectura de este libro en la aplicación está en preparación.' },
};
export const appTextos = () => textos[LOCALE.codigo];
