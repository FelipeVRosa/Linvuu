# Conexão de auditoria Firebase pelo GitHub

## Objetivo e estado

Preparar auditorias de configuração acionáveis pelo GitHub que ChatGPT/Codex e Claude já conseguem consultar. A conexão usa Workload Identity Federation (OIDC), não uma chave JSON compartilhada em conversa. Apenas o workflow `.github/workflows/auditoria-firebase.yml` da main de FelipeVRosa/Linvuu pode obter a identidade.

Estado inicial: implementado e testado offline. A configuração Google ainda depende da conta administradora e o primeiro workflow autenticado ainda não foi executado. Isso NÃO significa Firebase conectado ou seguro. Não substitui os testes de login, billing, revogação e aplicativo.

## Identidades e limites

- Projeto confirmado pela captura do Console: `linvuu`, número `982052790317`; não usar `linvuu-995d0`.
- Conta informada pelo Felipe para esse Firebase: `hello.linvuu@gmail.com`; conferir a conta logada.
- Acesso humano sugerido para `felipevaleevarosa@gmail.com`: Firebase Viewer + Security Reviewer. Isso não autoriza automaticamente o workflow nem conecta a sessão de um assistente.
- Conta dedicada do workflow: `auditoria-github@linvuu.iam.gserviceaccount.com`.
- Papel personalizado com leitura de metadados de projeto, bancos, regras, IAM e chaves. Sem `datastore.entities.*`, `firebaseauth.users.*`, `apikeys.keys.getKeyString`, criação de chaves, deploy ou escrita IAM.
- O provider valida IDs numéricos do repositório e proprietário, ref main e caminho do workflow. PRs, forks e outros workflows não recebem a identidade.
- Disparo manual; não há cron, `push`, `pull_request_target` nem comandos arbitrários fornecidos como entrada.
- Actions fixadas por SHA. Credencial federada temporária criada pela action oficial, fora da pasta de resultados, com limpeza automática da action. Somente `auditoria-firebase/` é enviada como artefato privado por três dias.

## Configuração inicial — pelo proprietário do projeto

1. Baixar `scripts/auditoria_firebase/configurar.py` deste repositório (ou o arquivo entregue na conversa) e enviar ao Cloud Shell da conta `hello.linvuu@gmail.com`.
2. Conferir `gcloud auth list` e executar `python3 configurar.py`. Sem `--apply`, isso só mostra o plano.
3. Após revisar o plano, executar `python3 configurar.py --apply` nessa conta. O instalador valida ID e número antes de alterar recursos.

O instalador habilita IAM, IAM Credentials e STS, cria um papel de leitura, pool, provider e conta dedicada, e adiciona dois vínculos IAM. Exige privilégios para criar esses recursos; as permissões Viewer da conta pessoal não bastam para instalá-lo. Ele não cria chaves, banco, recursos pagos nem chama APIs de alteração de faturamento. Se uma API exigir faturamento ou uma política impedir a configuração, parar e registrar o erro; não alterar o plano Firebase para contornar isso.

Recursos compatíveis existentes são reaproveitados. Divergência de papel/provider, conta desativada ou outros papéis de projeto na conta de auditoria interrompem a instalação sem sobrescrever o recurso conflitante. Pode haver recursos de etapas anteriores já criados se uma etapa posterior falhar; consultar o erro e o estado antes de repetir.

## Uso após a configuração

1. O workflow precisa estar mergeado na main.
2. Abrir https://github.com/FelipeVRosa/Linvuu/actions/workflows/auditoria-firebase.yml e executar `Run workflow` na main; o assistente também pode usar a operação de dispatch do conector GitHub, quando exposta e autorizada.
3. Ler `resultado.json` e os JSON de configuração no artefato da execução. Registrar run ID, SHA, horário e erros no assunto da auditoria.

Saída 0: coleta prevista concluída e ruleset padrão textualmente igual ao arquivo versionado. Não equivale a aprovação de segurança.
Saída 1: coleta concluída com diferença textual de regras; investigar antes de publicar qualquer mudança.
Saída 2: falha de acesso, projeto não confirmado ou comparação incompleta. Não interpretar ausência de dados como sucesso.

O coletor não lista documentos nem contas de usuários, não lê chaves privadas nem valores de API keys. O IAM de organização/pasta e todos os recursos externos continuam fora do escopo. Regras de bancos nomeados são coletadas quando retornadas nas releases; a comparação automática é do ruleset padrão.

## Desativar a conexão

Remover apenas a confiança da conta de auditoria com a conta administradora:

```bash
gcloud iam service-accounts remove-iam-policy-binding auditoria-github@linvuu.iam.gserviceaccount.com \
  --project=linvuu --role=roles/iam.workloadIdentityUser --condition=None \
  --member='principalSet://iam.googleapis.com/projects/982052790317/locations/global/workloadIdentityPools/linvuu-auditoria/attribute.repository_id/1400441159'
```

Isso impede novas trocas de identidade; credenciais já emitidas podem continuar até expirar. Recursos de auditoria podem ser removidos depois de revisar o uso. Não revogar a credencial de produção do Render como reversão desta integração.

## Referências oficiais

- https://cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines
- https://github.com/google-github-actions/auth
- https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/list
