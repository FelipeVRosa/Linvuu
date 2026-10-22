// Página pública de exclusão de conta (/excluir-conta), exigida pela Google Play para apps com conta.
// Um só texto para a página React e para o HTML pré-renderizado (funciona sem JavaScript).
// Não tem preço nem link de pagamento. Revisão jurídica recomendada antes de alterar o que é conservado.
export interface SecaoExclusao { titulo: string; paragrafos?: string[]; itens?: string[]; passos?: string[] }
export interface TextoExclusao {
  titulo: string; descricao: string; lead: string; secoes: SecaoExclusao[];
  formulario: { rotulo: string; botao: string; aviso: string; alternativa: string; assunto: string; corpo: string };
}

export const EXCLUSAO: Record<'pt-BR' | 'en' | 'es', TextoExclusao> = {
  'pt-BR': {
    titulo: 'Excluir conta e dados da Linvuu',
    descricao: 'Como pedir a exclusão da sua conta Linvuu e dos dados associados, no site e no aplicativo Linvuu para Android.',
    lead: 'Esta página vale para o site linvuu.com.br e para o aplicativo Linvuu na Google Play. Você pode pedir a exclusão daqui, sem entrar no app e sem instalá-lo de novo.',
    secoes: [
      { titulo: 'Como pedir', passos: [
        'Se você tem assinatura, cancele antes (veja abaixo). Excluir a conta não interrompe cobranças da loja nem do cartão.',
        'Envie o pedido a partir do e-mail da conta, pelo botão abaixo ou escrevendo direto para o nosso endereço.',
        'Vamos confirmar que o pedido é do titular da conta e responder com a confirmação da exclusão. Não envie senha nem documentos.',
      ] },
      { titulo: 'O que é apagado', itens: [
        'Conta: nome, e-mail e acesso de login.',
        'Progresso guardado na conta: sessões concluídas e prática.',
        'Vínculo entre a conta e a assinatura (no site ou no Google Play).',
        'Inscrição na newsletter, se houver.',
      ] },
      { titulo: 'O que pode ser conservado', paragrafos: [
        'Registros de pagamento e documentos fiscais podem ser mantidos pela Linvuu, pelo Stripe e pelo Google pelo prazo exigido por lei. A mensagem do seu pedido é guardada como comprovante do atendimento.',
        'Dados de análise e de medição do aprendizado usam um identificador aleatório que não é ligado à sua conta. Para apagá-los, limpe os dados do navegador ou, no app, use "Apagar progresso deste aparelho" na tela Conta.',
      ] },
      { titulo: 'Cancelar a assinatura antes', itens: [
        'Assinatura pelo Google Play: no celular, abra Google Play › Pagamentos e assinaturas › Assinaturas › Linvuu › Cancelar.',
        'Assinatura pelo site: entre na sua conta em linvuu.com.br/assinatura e use "Gerenciar ou cancelar".',
      ] },
      { titulo: 'Só limpar este aparelho', paragrafos: [
        'Se você quer apenas apagar o progresso salvo no celular, sem excluir a conta, use "Apagar progresso deste aparelho" na tela Conta do aplicativo.',
      ] },
    ],
    formulario: { rotulo: 'E-mail da conta', botao: 'Preparar e-mail de exclusão', aviso: 'O botão abre uma mensagem pronta no seu aplicativo de e-mail. Você precisa enviá-la; a conta não é excluída ao tocar aqui.', alternativa: 'Se o e-mail não abrir, envie o pedido para', assunto: 'Linvuu — solicitação de exclusão de conta e dados', corpo: 'Solicito excluir minha conta Linvuu e os dados associados. E-mail da conta: ' },
  },
  en: {
    titulo: 'Delete your Linvuu account and data',
    descricao: 'How to request deletion of your Linvuu account and associated data, on the website and in the Linvuu Android app.',
    lead: 'This page covers the linvuu.com.br website and the Linvuu app on Google Play. You can request deletion here without signing in to the app or reinstalling it.',
    secoes: [
      { titulo: 'How to request it', passos: [
        'If you have a subscription, cancel it first (see below). Deleting your account does not stop store or card charges.',
        'Send the request from your account email, using the button below or writing to our address directly.',
        'We will confirm the request comes from the account holder and reply confirming the deletion. Do not send passwords or documents.',
      ] },
      { titulo: 'What is deleted', itens: [
        'Account: name, email and sign-in access.',
        'Progress stored in your account: completed sessions and practice.',
        'The link between your account and your subscription (on the website or Google Play).',
        'Newsletter subscription, if any.',
      ] },
      { titulo: 'What may be kept', paragrafos: [
        'Payment records and tax documents may be kept by Linvuu, Stripe and Google for the period required by law. Your request message is kept as a record of the service.',
        'Analytics and learning measurement data use a random identifier that is not linked to your account. To delete it, clear your browser data or, in the app, use "Delete progress on this device" on the Account screen.',
      ] },
      { titulo: 'Cancel your subscription first', itens: [
        'Google Play subscription: on your phone, open Google Play › Payments & subscriptions › Subscriptions › Linvuu › Cancel.',
        'Website subscription: sign in at linvuu.com.br/en/assinatura and use "Manage or cancel".',
      ] },
      { titulo: 'Only clear this device', paragrafos: [
        'If you only want to delete progress saved on your phone, without deleting your account, use "Delete progress on this device" on the app’s Account screen.',
      ] },
    ],
    formulario: { rotulo: 'Account email', botao: 'Prepare deletion email', aviso: 'The button opens a ready-made message in your email app. You must send it; tapping here does not delete your account.', alternativa: 'If your email app does not open, send your request to', assunto: 'Linvuu — account and data deletion request', corpo: 'Please delete my Linvuu account and associated data. Account email: ' },
  },
  es: {
    titulo: 'Eliminar tu cuenta y datos de Linvuu',
    descricao: 'Cómo solicitar la eliminación de tu cuenta Linvuu y de los datos asociados, en el sitio y en la app Linvuu para Android.',
    lead: 'Esta página vale para el sitio linvuu.com.br y para la app Linvuu en Google Play. Puedes solicitar la eliminación desde aquí, sin entrar en la app y sin volver a instalarla.',
    secoes: [
      { titulo: 'Cómo solicitarla', passos: [
        'Si tienes una suscripción, cancélala antes (ver abajo). Eliminar la cuenta no detiene los cobros de la tienda ni de la tarjeta.',
        'Envía la solicitud desde el correo de la cuenta, con el botón de abajo o escribiendo directamente a nuestra dirección.',
        'Confirmaremos que la solicitud es del titular de la cuenta y responderemos confirmando la eliminación. No envíes contraseñas ni documentos.',
      ] },
      { titulo: 'Qué se elimina', itens: [
        'Cuenta: nombre, correo y acceso de inicio de sesión.',
        'Progreso guardado en la cuenta: sesiones completadas y práctica.',
        'El vínculo entre la cuenta y la suscripción (en el sitio o en Google Play).',
        'Suscripción al boletín, si la hay.',
      ] },
      { titulo: 'Qué puede conservarse', paragrafos: [
        'Los registros de pago y los documentos fiscales pueden ser conservados por Linvuu, Stripe y Google durante el plazo que exige la ley. El mensaje de tu solicitud se guarda como comprobante de la atención.',
        'Los datos de análisis y de medición del aprendizaje usan un identificador aleatorio que no está vinculado a tu cuenta. Para borrarlos, limpia los datos del navegador o, en la app, usa "Borrar progreso de este dispositivo" en la pantalla Cuenta.',
      ] },
      { titulo: 'Cancela la suscripción antes', itens: [
        'Suscripción de Google Play: en el teléfono, abre Google Play › Pagos y suscripciones › Suscripciones › Linvuu › Cancelar.',
        'Suscripción del sitio: entra en tu cuenta en linvuu.com.br/es/assinatura y usa "Gestionar o cancelar".',
      ] },
      { titulo: 'Solo limpiar este dispositivo', paragrafos: [
        'Si solo quieres borrar el progreso guardado en el teléfono, sin eliminar la cuenta, usa "Borrar progreso de este dispositivo" en la pantalla Cuenta de la app.',
      ] },
    ],
    formulario: { rotulo: 'Correo de la cuenta', botao: 'Preparar correo de eliminación', aviso: 'El botón abre un mensaje listo en tu aplicación de correo. Debes enviarlo; tocar aquí no elimina tu cuenta.', alternativa: 'Si el correo no se abre, envía tu solicitud a', assunto: 'Linvuu — solicitud de eliminación de cuenta y datos', corpo: 'Solicito eliminar mi cuenta Linvuu y los datos asociados. Correo de la cuenta: ' },
  },
};
