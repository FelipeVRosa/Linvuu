// Auditorias de visitantes em servidor local, sem credenciais ou relatórios públicos de terceiros.
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'node scripts/iniciar-servidor-lhci.mjs',
      startServerReadyPattern: 'LINVUU_LHCI_READY',
      startServerReadyTimeout: 30000,
      url: ['http://127.0.0.1:4398/', 'http://127.0.0.1:4398/curso/de', 'http://127.0.0.1:4398/gramatica/ru'],
      numberOfRuns: 3,
      settings: { onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] },
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.65 }],
        'is-crawlable': 'error',
        'robots-txt': 'error',
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/relatorios' },
  },
};
