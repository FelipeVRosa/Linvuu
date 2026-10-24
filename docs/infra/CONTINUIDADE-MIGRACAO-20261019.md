# Continuidade: migração massiva de áudio para Cloudflare R2
Atualizado em 19/10/2026, a pedido de Felipe.

## Pendências administrativas
O nome usado no cadastro/faturamento está em atualização e Felipe ainda providenciará um cartão internacional.
A ativação R2 ficará pendente até essa etapa ser concluída. Não contratar planos, aceitar checkout ou mudar dados fiscais automaticamente.
Nenhuma chave, credencial ou dado de cartão deve ser colocado no GitHub.
Este registro não altera o nome legal, o perfil GitHub, o nome da empresa nem a titularidade de serviços.

## Preparação concluída
- Acervo: 16.569 MP3, 305.478.000 bytes; 5.504 públicos e 11.065 privados.
- Inventários separados em 15 lotes por idioma e visibilidade.
- Verificação local leu todos os arquivos e calculou SHA256, além de conferir blob Git e tamanho.
- A conferência remota confirmou todas as 16.569 origens, blob IDs e tamanhos contra main 1b7687bf61e93d9ba0ac590e2adf1e5948d2e85c.
- O checkout local usado na leitura ainda tem commit sintético bc1406c91eaa8915df8315f2d8dd14948b69af18; ele não foi publicado ou usado para substituir main. A igualdade do acervo de áudio foi comprovada independentemente.
- Três testes Node passaram: público/privado com mesmo nome continuam separados; entradas inválidas/duplicadas são recusadas; versões mudam o caminho sem mudar nomes.
- Nenhum upload, exclusão, alteração de DNS/cache ou deploy foi feito por esta preparação.

## Ferramenta salva
    node --test scripts/preparar-migracao-audio.test.mjs
    node scripts/preparar-migracao-audio.mjs HEAD migracao-audio --verificar-local

Executar na raiz de um clone atualizado e limpo para os arquivos de áudio. O diretório de saída precisa ser novo: a ferramenta recusa sobrescrever inventários anteriores.
A versão inicial das chaves é r20261019/<idioma>/<hash>.mp3. Nome do arquivo e IDs permanecem intactos.
Buckets propostos: linvuu-audio-publico e linvuu-audio-privado. Não foram criados. As 25 sobreposições público/privado não serão fundidas.
A ferramenta só gera inventário e verifica arquivos locais. Não faz upload, não possui credenciais, não instala dependências e não é um processo de sincronização em segundo plano.
Os inventários individuais são reproduzíveis e ficam fora do Git; o resumo da simulação está versionado. Nada depende de manter esta conversa aberta para reconstruir a seleção a partir do commit.

## Execução quando R2 estiver ativo
1. Reconfirmar main e inventário caso Claude ou outro trabalho tenha mudado áudios.
2. Criar e testar o bucket piloto com os 20 arquivos públicos já conferidos; sem mudar a base global.
3. Validar método de upload autenticado e retomada, tamanho/hash no destino, CORS, MIME, HEAD e Range/206.
4. Copiar os lotes públicos com checkpoints; manter os arquivos de origem.
5. Preparar entrega privada autenticada no servidor; somente depois copiar os lotes privados, mantendo acesso público desabilitado.
6. Integrar web/APK gradualmente; testar contas com e sem acesso, expiração, reprodução e fallback.
7. Depois da estabilização e de backup independente, avaliar remoção de cópias antigas. Reescrever histórico Git exige planejamento separado.

A transferência será massiva no volume total, mas gradual na execução e verificação. Inventário local conferido não significa upload feito, qualidade linguística aprovada ou implementação offline concluída.
Consultar também ARMAZENAMENTO-20261019.md e PILOTO-R2-20261019.md.
