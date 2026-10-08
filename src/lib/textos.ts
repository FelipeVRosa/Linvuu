// Textos fixos do player. O curso de português para estrangeiros (id `br`) ensina em inglês; os demais, em português.
export type Lingua = 'pt' | 'en';
export const linguaDoCurso = (idioma?: string): Lingua => (idioma === 'br' ? 'en' : 'pt');

const pt = {
  ouvir: 'Ouvir', ainda: 'ouça e repita', resposta: 'Resposta:', refazer: 'Refazer os exercícios', tocarOuvir: 'Toque para ouvir',
  opcoes: 'Opções', pecas: 'Toque nas peças abaixo', limpar: 'Limpar', escrevaPrivado: 'Escreva aqui (só você vê)', escreva: 'Escreva aqui',
  certo: 'Certo.', errou: 'Não foi dessa vez. Resposta:', compare: 'Compare com um exemplo:', verExemplo: 'Ver exemplo', verificar: 'Verificar',
  verResultado: 'Ver resultado', proximo: 'Próximo', emPortugues: 'Em português:', erros: 'Erros comuns', revisao: 'Revisão.', suaVez: 'Agora é com você.',
  esconder: 'Esconder exemplo', ouvirDialogo: 'Ouvir o diálogo todo', parar: 'Parar', mostrarTrad: 'Mostrar tradução', ouvirTexto: 'Ouvir o texto',
  perguntas: 'Perguntas', blocosSessao: 'Blocos da sessão', voltar: 'Voltar', continuar: 'Continuar', concluir: 'Concluir sessão', concluida: 'Sessão concluída',
  concluidaNav: 'Sessão concluída neste navegador.', proxSessao: 'Ir para a próxima sessão →',
  provisorio: 'Áudio provisório: este trecho usa a voz do seu navegador. A gravação chega em breve.',
  acertou: (c: number, t: number) => `Você acertou ${c} de ${t}`, bloco: (i: number, t: number, m: number) => `Bloco ${i} de ${t} · ~${m} min`,
  rotuloBloco: { intro: 'Introdução', revisao: 'Revisão', producao: 'Fale e escreva', alfabeto: 'Alfabeto', palavras: 'Palavras', dialogo: 'Diálogo', texto: 'Leitura', gramatica: 'Gramática', exercicios: 'Exercícios' },
  // páginas
  inicio: 'Início', cursos: 'Cursos', sessao: 'Dia', carregando: 'Carregando…', semAula: 'Não foi possível carregar esta aula. Recarregue a página.', verTrilha: 'Ver a trilha',
  anterior: (n: number) => `← Dia ${n}`, seguinte: (n: number) => `Dia ${n} →`, navDias: 'Navegar entre dias',
  kickerAula: (a: number, s: string, t: number, m: number) => `Aula ${a} · sessão ${s} de ${t} · ${m} min`,
  objetivoAula: (o: string) => `Objetivo da aula: ${o}`, emRevisao: 'Aula em revisão: o conteúdo está escrito e já dá para estudar, mas ainda passa por revisão e a voz nativa está em gravação (por enquanto o áudio usa a voz do seu navegador).',
  paywallT: (n: number, c: string) => `Você terminou as ${n} aulas grátis de ${c}.`,
  paywallP: (p: string) => `Para continuar, assine a Linvuu: ${p} por mês, todos os cursos, cancele quando quiser. Se não gostar, devolvemos o valor em até 7 dias.`,
  paywallErro: 'Não conseguimos confirmar sua assinatura agora. Recarregue a página em instantes.', abrindo: 'Abrindo…', assinar: (p: string) => `Assinar por ${p}/mês`,
  tres: (p: string) => `3 meses por ${p} (Pix, boleto ou cartão)`, criar: 'Criar conta para assinar', jaTenho: 'Já tenho conta', termos: 'Termos e reembolso',
  voltarBtn: 'Voltar', voceEstaEm: 'Você está em',
};

const en: typeof pt = {
  ouvir: 'Listen', ainda: 'listen and repeat', resposta: 'Answer:', refazer: 'Redo the exercises', tocarOuvir: 'Tap to listen',
  opcoes: 'Options', pecas: 'Tap the pieces below', limpar: 'Clear', escrevaPrivado: 'Write here (only you can see it)', escreva: 'Write here',
  certo: 'Correct.', errou: 'Not this time. Answer:', compare: 'Compare with a sample answer:', verExemplo: 'Show example', verificar: 'Check',
  verResultado: 'See result', proximo: 'Next', emPortugues: 'Compare:', erros: 'Common mistakes', revisao: 'Review.', suaVez: 'Your turn.',
  esconder: 'Hide example', ouvirDialogo: 'Listen to the whole dialogue', parar: 'Stop', mostrarTrad: 'Show translation', ouvirTexto: 'Listen to the text',
  perguntas: 'Questions', blocosSessao: 'Session blocks', voltar: 'Back', continuar: 'Continue', concluir: 'Finish session', concluida: 'Session complete',
  concluidaNav: 'Session completed in this browser.', proxSessao: 'Go to the next session →',
  provisorio: "Temporary audio: this passage uses your browser's voice. The recording is coming soon.",
  acertou: (c, t) => `You got ${c} of ${t} right`, bloco: (i, t, m) => `Block ${i} of ${t} · ~${m} min`,
  rotuloBloco: { intro: 'Introduction', revisao: 'Review', producao: 'Speak and write', alfabeto: 'Alphabet', palavras: 'Words', dialogo: 'Dialogue', texto: 'Reading', gramatica: 'Grammar', exercicios: 'Exercises' },
  inicio: 'Home', cursos: 'Courses', sessao: 'Session', carregando: 'Loading…', semAula: 'We could not load this lesson. Reload the page.', verTrilha: 'See the course map',
  anterior: (n) => `← Session ${n}`, seguinte: (n) => `Session ${n} →`, navDias: 'Move between sessions',
  kickerAula: (a, s, t, m) => `Lesson ${a} · session ${s} of ${t} · ${m} min`,
  objetivoAula: (o) => `Lesson goal: ${o}`, emRevisao: "Lesson under review: the content is written and ready to study, but it is still being reviewed and the recorded voices are in progress (for now the audio may use your browser's voice).",
  paywallT: (n, c) => `You have finished the ${n} free sessions of ${c}.`,
  paywallP: (p) => `To continue, subscribe to Linvuu: ${p} per month, all courses, cancel any time. If you do not like it, we refund you within 7 days. Payment page and legal terms are in Portuguese.`,
  paywallErro: 'We could not confirm your subscription right now. Reload the page in a moment.', abrindo: 'Opening…', assinar: (p) => `Subscribe for ${p}/month`,
  tres: (p) => `3 months for ${p} (card, Pix or boleto)`, criar: 'Create an account to subscribe', jaTenho: 'I already have an account', termos: 'Terms and refunds (Portuguese)',
  voltarBtn: 'Back', voceEstaEm: 'You are here',
};

export const textos = (idioma?: string) => (linguaDoCurso(idioma) === 'en' ? en : pt);
export type Textos = typeof pt;
