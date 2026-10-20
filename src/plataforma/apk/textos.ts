import { LOCALE } from '../../i18n';
const textos = {
  'pt-BR': {
    preparacao: 'Em preparação neste idioma', semAcesso: 'Esta conta ainda não tem acesso a este conteúdo.', tentarNovamente: 'Tentar novamente',
    compras: 'Compras dentro do aplicativo ainda não estão disponíveis.', teste: 'Versão em testes. As duas primeiras aulas de cada curso são gratuitas.', inicio: 'O que vamos estudar hoje?', bloqueado: 'Entre na sua conta para consultar seu acesso.', livro: 'A leitura deste livro no aplicativo está em preparação.',
    ajustes: 'Ajustes', voltar: 'Voltar', estudo: 'Seu espaço de estudo', catalogo: 'Cursos com explicações neste idioma', progresso: 'Sessões concluídas',
    avisoIdiomas: 'O idioma da interface não garante que todas as aulas estejam adaptadas. A cobertura disponível é informada em cada curso.',
    semRede: 'Você está sem conexão. O download de aulas para estudo offline ainda está em preparação.',
    semCursos: 'Ainda não há aulas adaptadas para este idioma de explicação.', erroSair: 'Não foi possível sair. Tente novamente.',
    trocarIdioma: 'Mudar o idioma recarrega a tela. Respostas ainda não concluídas podem ser perdidas. Continuar?',
    cobertura: (n: number, total: number) => n >= total ? `${n} aulas com explicações adaptadas.` : `${n} de ${total} aulas com explicações adaptadas. As demais ainda estão em preparação.`,
    concluidas: (n: number, total: number) => `${n} de ${total} sessões concluídas`,
  },
  en: {
    preparacao: 'Not yet adapted to this language', semAcesso: 'This account does not have access to this content yet.', tentarNovamente: 'Try again',
    compras: 'In-app purchases are not available yet.', teste: 'Test version. The first two lessons of every course are free.', inicio: 'What shall we study today?', bloqueado: 'Sign in to check your access.', livro: 'Reading this book in the app is being prepared.',
    ajustes: 'Settings', voltar: 'Back', estudo: 'Your study space', catalogo: 'Courses with explanations in this language', progresso: 'Completed sessions',
    avisoIdiomas: 'The interface language does not mean every lesson has been adapted. Each course shows its available coverage.',
    semRede: 'You are offline. Lesson downloads for offline study are not available yet.',
    semCursos: 'There are no adapted lessons in this explanation language yet.', erroSair: 'Could not sign out. Please try again.',
    trocarIdioma: 'Changing language reloads this screen. Unfinished answers may be lost. Continue?',
    cobertura: (n: number, total: number) => n >= total ? `${n} lessons with adapted explanations.` : `${n} of ${total} lessons have adapted explanations. The others are not available in this language yet.`,
    concluidas: (n: number, total: number) => `${n} of ${total} sessions completed`,
  },
  es: {
    preparacao: 'En preparación en este idioma', semAcesso: 'Esta cuenta aún no tiene acceso a este contenido.', tentarNovamente: 'Intentar de nuevo',
    compras: 'Las compras dentro de la aplicación aún no están disponibles.', teste: 'Versión de prueba. Las dos primeras lecciones de cada curso son gratuitas.', inicio: '¿Qué vamos a estudiar hoy?', bloqueado: 'Inicia sesión para consultar tu acceso.', livro: 'La lectura de este libro en la aplicación está en preparación.',
    ajustes: 'Ajustes', voltar: 'Volver', estudo: 'Tu espacio de estudio', catalogo: 'Cursos con explicaciones en este idioma', progresso: 'Sesiones completadas',
    avisoIdiomas: 'El idioma de la interfaz no significa que todas las lecciones estén adaptadas. Cada curso muestra la cobertura disponible.',
    semRede: 'No tienes conexión. Las descargas de lecciones para estudiar sin conexión aún están en preparación.',
    semCursos: 'Aún no hay lecciones adaptadas a este idioma de explicación.', erroSair: 'No se pudo cerrar la sesión. Inténtalo de nuevo.',
    trocarIdioma: 'Cambiar el idioma recarga la pantalla. Las respuestas sin terminar pueden perderse. ¿Continuar?',
    cobertura: (n: number, total: number) => n >= total ? `${n} lecciones con explicaciones adaptadas.` : `${n} de ${total} lecciones tienen explicaciones adaptadas. Las demás aún están en preparación.`,
    concluidas: (n: number, total: number) => `${n} de ${total} sesiones completadas`,
  },
};
export const appTextos = () => textos[LOCALE.codigo];
