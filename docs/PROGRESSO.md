# Progresso por conta

O progresso local é separado pelo uid do Firebase. Dados anteriores sem dono permanecem no espaço visitante: não há migração automática, pois não é possível identificar com segurança a quem pertencem. O progresso já salvo no servidor continua sendo sincronizado.

Ao trocar de conta, a aplicação remonta para descartar o estado visual anterior. Respostas de sincronização atrasadas são ignoradas após troca de uid. Blobs de áudio privado são revogados e downloads em andamento descartados quando a identidade muda.

Regressão automatizada: `npm run testar:progresso` cobre visitante, duas contas, posição da sessão e logout. Teste com duas contas reais e latência de rede continua necessário. Regras publicadas do Firebase não foram alteradas.
