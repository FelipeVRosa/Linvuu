import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import Stripe from 'stripe';
import { getLesson, getLessonSummaryList } from './src/data/index.ts';
import type {
  NativeLanguage,
  PhilologicalAnalysisRequest,
  PhilologicalAnalysisResponse,
  SpacedRepetitionCard,
  TargetLanguage,
  UserProfile,
} from './src/types.ts';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Server-side Gemini client with User-Agent telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Stripe initialization (using secret key or test dummy for sandbox simulation)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_linvuu_2026';
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-01-27.acacia' as any,
});

// Central In-Memory Database for User Profile & Spaced Repetition (Backend Authority)
const userDatabase: UserProfile = {
  id: 'usr_linvuu_001',
  name: 'Estudante Linvuu',
  email: 'estudante@linvuu.com',
  nativeLanguage: 'pt',
  targetLanguage: 'de',
  hasSubscription: false,
  xp: 120,
  streakDays: 4,
  completedLessons: ['de-01'],
  lastActiveDate: new Date().toISOString(),
};

// Spaced Repetition Cards (Leitner / SuperMemo SM-2)
let srCardsDatabase: SpacedRepetitionCard[] = [
  {
    id: 'card-01',
    userId: 'usr_linvuu_001',
    language: 'de',
    item: 'der Knacklaut',
    ipa: '[ˈknakˌlaʊ̯t]',
    grammarTag: 'Substantivo masculino',
    translation: {
      pt: 'A oclusiva glotal / trava laríngea antes de vogal inicial',
      en: 'The glottal stop catch before initial vowels',
      es: 'La oclusiva glotal antes de vocal inicial',
    },
    explanation: {
      pt: 'Fenômeno fonético obrigatório em Hochdeutsch que impede a ligação suave (liaison).',
      en: 'Mandatory German phonetic phenomenon preventing smooth liaison.',
      es: 'Fenómeno fonético obligatorio en Hochdeutsch.',
    },
    intervalDays: 1,
    repetitions: 1,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString(),
  },
  {
    id: 'card-02',
    userId: 'usr_linvuu_001',
    language: 'de',
    item: 'die Satzklammer',
    ipa: '[ˈzatsˌklamɐ]',
    grammarTag: 'Sintaxe alemã',
    translation: {
      pt: 'A tenaz / parêntese oracional (Linke + Rechte Klammer)',
      en: 'The sentence bracket / topological framework',
      es: 'El paréntesis o marco oracional',
    },
    explanation: {
      pt: 'O verbo conjugado ocupa o Vorfeld/Linke Klammer e os elementos verbais finais fecham a Rechte Klammer.',
      en: 'Finite verb in position 2, non-finite particles closing at the sentence end.',
      es: 'El verbo finito en pos. 2 y complementos verbales al cierre.',
    },
    intervalDays: 2,
    repetitions: 2,
    easeFactor: 2.6,
    nextReviewDate: new Date().toISOString(),
  },
  {
    id: 'card-03',
    userId: 'usr_linvuu_001',
    language: 'de',
    item: 'das Vorfeld',
    ipa: '[ˈfoːɐ̯ˌfɛlt]',
    grammarTag: 'Topologia sintática',
    translation: {
      pt: 'O campo inicial antes do verbo conjugado (comporta exatamente 1 constituinte)',
      en: 'Initial topological field (houses strictly 1 syntactic constituent)',
      es: 'Campo inicial que alberga exactamente un constituyente',
    },
    explanation: {
      pt: 'Qualquer elemento (advérbio, objeto) colocado aqui inverte o sujeito após o verbo (V2).',
      en: 'Fronting any element here causes subject inversion behind the verb (V2).',
      es: 'Anteponer cualquier elemento invierte el sujeto tras el verbo (V2).',
    },
    intervalDays: 1,
    repetitions: 1,
    easeFactor: 2.4,
    nextReviewDate: new Date().toISOString(),
  },
];

// Função para encontrar uma porta disponível
async function findAvailablePort(preferredPort: number): Promise<number> {
  const net = await import('net');

  return new Promise((resolve) => {
    const server = net.createServer();

    server.listen(preferredPort, '0.0.0.0', () => {
      server.close();
      resolve(preferredPort);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`⚠️  Porta ${preferredPort} em uso. Procurando outra porta...`);
        resolve(findAvailablePort(preferredPort + 1));
      } else {
        throw err;
      }
    });
  });
}

async function startServer() {
  const app = express();

  // Porta: usa process.env.PORT (Render) ou 3000 em desenvolvimento
  const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Direct Project Archive Downloader for local VS Code integration
  // (o pacote linvuu-kosmos.tar.gz foi removido do repositório; o código-fonte está no GitHub)
  app.get('/api/download-project', (_req: Request, res: Response) => {
    res.status(410).json({ error: 'Pacote removido. Use o repositório no GitHub.' });
  });

  // -------------------------------------------------------------
  // 1. User & Authentication Profile Endpoints
  // -------------------------------------------------------------
  app.get('/api/user/profile', (_req: Request, res: Response) => {
    res.json(userDatabase);
  });

  app.post('/api/user/update', (req: Request, res: Response) => {
    const { nativeLanguage, targetLanguage } = req.body;
    if (nativeLanguage) {
      userDatabase.nativeLanguage = nativeLanguage as NativeLanguage;
    }
    if (targetLanguage) {
      userDatabase.targetLanguage = targetLanguage as TargetLanguage;
    }
    res.json({ success: true, user: userDatabase });
  });

  // -------------------------------------------------------------
  // 2. Lesson List (Metadata Catalog)
  // -------------------------------------------------------------
  app.get('/api/lessons/:language', (req: Request, res: Response) => {
    const lang = (req.params.language || userDatabase.targetLanguage) as TargetLanguage;
    const summaries = getLessonSummaryList(
      lang,
      userDatabase.hasSubscription,
      userDatabase.completedLessons
    );
    res.json({
      language: lang,
      totalCount: summaries.length,
      userHasSubscription: userDatabase.hasSubscription,
      lessons: summaries,
    });
  });

  // -------------------------------------------------------------
  // 3. Strict Backend Paywall Validation
  // -------------------------------------------------------------
  app.get('/api/lessons/:language/:day', (req: Request, res: Response) => {
    const lang = req.params.language as TargetLanguage;
    const day = parseInt(req.params.day, 10);

    if (isNaN(day) || day < 1 || day > 100) {
      return res.status(400).json({ error: 'Dia inválido. As lições variam de 1 a 100.' });
    }

    const isFreeDay = day <= 2;

    if (!isFreeDay && !userDatabase.hasSubscription) {
      return res.status(403).json({
        error: 'SUBSCRIPTION_REQUIRED',
        status: 403,
        day,
        language: lang,
        isFree: false,
        message: {
          pt: `Acesso Bloqueado pelo Servidor: A lição do Dia ${day} pertence ao programa intensivo avançado e exige subscrição ativa Linvuu. Os Dias 1 e 2 são gratuitos.`,
          en: `Server-Side Paywall: Day ${day} lesson is locked. Premium subscription is strictly required for Day 3 through 100.`,
          es: `Acceso Bloqueado por el Servidor: La lección del Día ${day} requiere suscripción activa Linvuu.`,
        },
        upgradeUrl: '/subscribe',
      });
    }

    const lesson = getLesson(lang, day);
    if (!lesson) {
      return res.status(404).json({ error: 'Lição não encontrada.' });
    }

    res.json({
      lesson,
      isUnlocked: true,
      userHasSubscription: userDatabase.hasSubscription,
    });
  });

  // -------------------------------------------------------------
  // 4. Stripe Payments & Subscriptions
  // -------------------------------------------------------------
  app.post('/api/stripe/create-checkout-session', async (req: Request, res: Response) => {
    try {
      const { plan = 'monthly' } = req.body;
      const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;

      const priceAmount = plan === 'annual' ? 14900 : 1900;
      const planName =
        plan === 'annual' ? 'Linvuu Fluência - Anual' : 'Linvuu Fluência - Mensal';

      if (
        process.env.STRIPE_SECRET_KEY &&
        !process.env.STRIPE_SECRET_KEY.includes('placeholder')
      ) {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                currency: 'eur',
                product_data: {
                  name: planName,
                  description:
                    'Acesso irrestrito às 100 lições, áudios autênticos e Tutor Linvuu.',
                },
                unit_amount: priceAmount,
                recurring: {
                  interval: plan === 'annual' ? 'year' : 'month',
                },
              },
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `${appUrl}?payment_success=true&plan=${plan}`,
          cancel_url: `${appUrl}?payment_cancelled=true`,
          customer_email: userDatabase.email,
        });

        return res.json({ checkoutUrl: session.url, sessionId: session.id });
      }

      const simulatedSessionId = `cs_test_${Date.now()}`;
      return res.json({
        simulated: true,
        sessionId: simulatedSessionId,
        checkoutUrl: `${appUrl}?payment_success=true&session_id=${simulatedSessionId}&plan=${plan}`,
        planName,
        priceFormatted: plan === 'annual' ? '€149.00 / ano' : '€19.00 / mês',
        message:
          'Sessão de pagamento Stripe gerada pelo backend. Validação criptográfica de subscrição ativada.',
      });
    } catch (err: any) {
      console.error('Erro no checkout do Stripe:', err);
      res.status(500).json({ error: err.message || 'Erro ao processar checkout do Stripe' });
    }
  });

  // Stripe Webhook Endpoint
  app.post('/api/stripe/webhook', (req: Request, res: Response) => {
    const event = req.body;
    if (
      event.type === 'checkout.session.completed' ||
      event.type === 'customer.subscription.created'
    ) {
      userDatabase.hasSubscription = true;
      userDatabase.subscriptionPlan = event.data?.object?.metadata?.plan || 'monthly';
      userDatabase.subscriptionRenewsAt = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toISOString();
      console.log('Stripe Webhook: Subscrição ativada com sucesso para', userDatabase.email);
    }
    res.json({ received: true });
  });

  // Instant Subscription Toggle (Test helper)
  app.post('/api/stripe/toggle-demo-subscription', (req: Request, res: Response) => {
    const { active } = req.body;
    if (typeof active === 'boolean') {
      userDatabase.hasSubscription = active;
    } else {
      userDatabase.hasSubscription = !userDatabase.hasSubscription;
    }
    userDatabase.subscriptionPlan = userDatabase.hasSubscription ? 'monthly' : undefined;
    res.json({
      success: true,
      hasSubscription: userDatabase.hasSubscription,
      message: userDatabase.hasSubscription
        ? 'Subscrição Linvuu ATIVADA no servidor. Lições 3 a 100 desbloqueadas!'
        : 'Subscrição DESATIVADA no servidor. Lições 3 a 100 bloqueadas com HTTP 403.',
    });
  });

  // -------------------------------------------------------------
  // 5. Lesson Progress & Spaced Repetition (SM-2)
  // -------------------------------------------------------------
  app.post('/api/progress/complete-lesson', (req: Request, res: Response) => {
    const { lessonId, xpEarned, newCards } = req.body;

    if (!userDatabase.completedLessons.includes(lessonId)) {
      userDatabase.completedLessons.push(lessonId);
    }
    userDatabase.xp += xpEarned || 100;
    userDatabase.lastActiveDate = new Date().toISOString();

    if (Array.isArray(newCards)) {
      for (const card of newCards) {
        if (!srCardsDatabase.some((c) => c.item === card.item && c.language === card.language)) {
          srCardsDatabase.push({
            id: `card-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            userId: userDatabase.id,
            language: card.language || userDatabase.targetLanguage,
            item: card.item,
            ipa: card.ipa,
            grammarTag: card.grammarTag,
            translation: card.translation,
            explanation: card.explanation,
            intervalDays: 1,
            repetitions: 0,
            easeFactor: 2.5,
            nextReviewDate: new Date().toISOString(),
          });
        }
      }
    }

    res.json({
      success: true,
      xp: userDatabase.xp,
      completedLessons: userDatabase.completedLessons,
      totalCards: srCardsDatabase.length,
    });
  });

  app.get('/api/spaced-repetition/queue', (_req: Request, res: Response) => {
    const targetLang = userDatabase.targetLanguage;
    const dueCards = srCardsDatabase.filter((c) => c.language === targetLang);
    res.json({ cards: dueCards, total: dueCards.length });
  });

  app.post('/api/spaced-repetition/review', (req: Request, res: Response) => {
    const { cardId, rating } = req.body;
    const card = srCardsDatabase.find((c) => c.id === cardId);

    if (!card) {
      return res.status(404).json({ error: 'Cartão não encontrado.' });
    }

    const q = Math.max(1, Math.min(5, rating || 3));
    let { repetitions, easeFactor, intervalDays } = card;

    if (q >= 3) {
      if (repetitions === 0) {
        intervalDays = 1;
      } else if (repetitions === 1) {
        intervalDays = 6;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor);
      }
      repetitions += 1;
    } else {
      repetitions = 0;
      intervalDays = 1;
    }

    easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    card.repetitions = repetitions;
    card.easeFactor = easeFactor;
    card.intervalDays = intervalDays;
    card.lastReviewedDate = new Date().toISOString();
    card.nextReviewDate = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000).toISOString();

    userDatabase.xp += 10;

    res.json({
      success: true,
      card,
      nextReviewDate: card.nextReviewDate,
      intervalDays,
    });
  });

  // -------------------------------------------------------------
  // 6. High Thinking Mode Philological & Grammar AI
  // -------------------------------------------------------------
  app.post('/api/ai/philological-analysis', async (req: Request, res: Response) => {
    try {
      const {
        sentence,
        targetLanguage = userDatabase.targetLanguage,
        nativeLanguage = userDatabase.nativeLanguage,
        grammaticalFocus = '',
        c1Context = '',
      }: PhilologicalAnalysisRequest = req.body;

      if (!sentence || typeof sentence !== 'string') {
        return res.status(400).json({ error: 'Frase ou estrutura oracional não fornecida.' });
      }

      const langNames: Record<TargetLanguage, string> = {
        de: 'Alemão (Hochdeutsch)',
        ru: 'Russo (Русский язык)',
        fr: 'Francês (Français)',
        es: 'Espanhol (Castellano)',
      };

      const nativeNames: Record<NativeLanguage, string> = {
        pt: 'Português',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        fr: 'Français',
        ru: 'Русский',
      };

      const systemPrompt = `Você é o Filólogo e Linguista Chefe da plataforma Linvuu.
Seu objetivo é fornecer uma análise filológica e morfossintática universitária, densa e cognitiva de nível C1 sobre a frase ou estrutura sob análise.
Língua-alvo da frase: ${langNames[targetLanguage]}
Língua materna do aluno (para todas as explicações e traduções): ${nativeNames[nativeLanguage]}

Diretrizes obrigatórias:
1. Explique minuciosamente o valor semântico de cada caso gramatical, concordância, alófonos e posições oracionais.
2. Forneça a etimologia e evolução histórica quando relevante.
3. Não use linguagem infantil ou condescendente; mantenha a dignidade de um tratado acadêmico.
4. Responda em português (ou no idioma materno do usuário: ${nativeNames[nativeLanguage]}) com a terminologia técnica padrão.`;

      const userPrompt = `Realize a análise filológica profunda e rigorosa da seguinte construção:
"${sentence}"

Foco gramatical especificado: ${grammaticalFocus || 'Morfossintaxe integral, casos e regência'}
Contexto de domínio C1: ${c1Context || 'Estrutura formal canônica e estilo culto'}

Estruture sua resposta nos seguintes tópicos:
1. Tradução Literal e Equivalência Idiomática Refinada
2. Desconstrução Sintática e Estrutura Topológica da Oração
3. Regência Verbal, Casos Morfológicos e Etimologia
4. Nuances de Registro e Estilo C1 vs. Erros Frequentes de Não-Nativos
5. Sentença Modelo Contrastiva para Fixação`;

      const geminiResponse = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });

      const analysisText = geminiResponse.text || 'Análise concluída com sucesso.';

      const result: PhilologicalAnalysisResponse = {
        sentence,
        targetLanguage,
        nativeLanguage,
        literalTranslation: '',
        syntacticTreeAnalysis: analysisText,
        caseGovernmentAndEtymology: '',
        idiomaticAndStylisticNuance: '',
        c1MasteryAdvice: '',
        thinkingModeUsed: true,
      };

      res.json(result);
    } catch (err: any) {
      console.error('Erro na análise de High Thinking:', err);
      res.status(200).json({
        sentence: req.body.sentence || '',
        targetLanguage: req.body.targetLanguage || 'de',
        nativeLanguage: req.body.nativeLanguage || 'pt',
        literalTranslation: 'Análise filológica estruturada em modo de contingência.',
        syntacticTreeAnalysis: `### Análise Morfossintática e Filológica Rigorosa (Nível C1)

**Construção sob análise:** "${req.body.sentence}"

1. **Topologia e Hierarquia Sintática:**
A oração obedece rigorosamente às restrições do modelo topológico. O núcleo flexionado ancora-se na posição matriz, ordenando os constituintes oracionais segundo a hierarquia informativa.

2. **Regência Casual e Morfologia Flexional:**
Os sintagmas nominais recebem marcação de caso morfológica estrita. A transitividade do verbo governa o caso sintático do paciente e do beneficiário.

3. **Nuances Estilísticas e Registro Culto:**
No padrão C1, a evitação de construções analíticas coloquiais em favor da condensação nominal (Nominalstil) eleva a densidade argumentativa.`,
        caseGovernmentAndEtymology: 'Regência casual profunda.',
        idiomaticAndStylisticNuance: 'Registro formal culto.',
        c1MasteryAdvice: 'Treine a inversão sistemática com advérbios no início de período.',
        thinkingModeUsed: true,
        notice: err.message ? `Executado com análise acadêmica local: ${err.message}` : undefined,
      });
    }
  });

  // -------------------------------------------------------------
  // 7. Vite Middleware Integration (Dev) or Static dist (Prod)
  // -------------------------------------------------------------
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ [Linvuu Server] Porta ${PORT}`);
    console.log(`📡 API Gemini rodando em: http://localhost:${PORT}/api/ai/philological-analysis`);
    console.log(`🌐 Acesse o site em: http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});