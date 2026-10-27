# Conexão de auditoria Firebase pelo GitHub

## Objetivo e estado

Preparar auditorias de configuração acionáveis pelo GitHub que ChatGPT/Codex e Claude já conseguem consultar. A conexão usa Workload Identity Federation (OIDC), não uma chave JSON compartilhada em conversa. Apenas o workflow `.github/workflows/auditoria-firebase.yml` da main de FelipeVRosa/Linvuu pode obter a identidade.

Estado em 27/10/2026: ponte integrada no PR #371; proprietário reportou configuração Google aplicada sem chaves. A primeira execução 40451944964 falhou no início, sem jobs ou coleta. A política Actions exclui google-github-actions e o repositório está público. A proteção atual impede coleta detalhada nesse contexto. A autenticação Google ainda não foi verificada. Isso NÃO significa Firebase conectado ou seguro. Não substitui os testes de login, billing, revogação e aplicativo.

## Identidades e limites

- Projeto confirmado pela captura do Console: `linvuu`, número `982052790317`; não usar `linvuu-995d0`.
- Conta informada pelo Felipe para esse Firebase: `hello.linvuu@gmail.com`; conferir a conta logada.
- Acesso humano sugerido para `felipevaleevarosa@gmail.com`: Firebase Viewer + Security Reviewer. Isso não autoriza automaticamente o workflow nem conecta a sessão de um assistente.
- Conta dedicada do workflow: `auditoria-github@linvuu.iam.gserviceaccount.com`.
- Papel personalizado com leitura de metadados de projeto, bancos, regras, IAM e chaves. Sem `datastore.entities.*`, `firebaseauth.users.*`, `apikeys.keys.getKeyString`, criação de chaves, deploy ou escrita IAM.
- O provider valida IDs numéricos do repositório e proprietário, ref main e caminho do workflow. PRs, forks e outros workflows não recebem a identidade.
- Disparo manual; não há cron, `push`, `pull_request_target` nem comandos arbitrários fornecidos como entrada.
- Actions fixadas por SHA. Credencial federada temporária criada pela action oficial, fora da pasta de resultados, com limpeza automática da action. Somente `auditoria-firebase/` pode ser enviada por três dias, quando o evento confirmar repositório privado. Artefatos não são privados por si: sua leitura acompanha o acesso ao repositório. A descrição anterior de artefato privado estava incorreta para a visibilidade pública atual.

## Configuração inicial — pelo proprietário do projeto

1. Baixar `scripts/auditoria_firebase/configurar.py` deste repositório (ou o arquivo entregue na conversa) e enviar ao Cloud Shell da conta `hello.linvuu@gmail.com`.
2. Conferir `gcloud auth list` e executar `python3 configurar.py`. Sem `--apply`, isso só mostra o plano.
3. Após revisar o plano, executar `python3 configurar.py --apply` nessa conta. O instalador valida ID e número antes de alterar recursos.

O instalador habilita IAM, IAM Credentials e STS, cria um papel de leitura, pool, provider e conta dedicada, e adiciona dois vínculos IAM. Exige privilégios para criar esses recursos; as permissões Viewer da conta pessoal não bastam para instalá-lo. Ele não cria chaves, banco, recursos pagos nem chama APIs de alteração de faturamento. Se uma API exigir faturamento ou uma política impedir a configuração, parar e registrar o erro; não alterar o plano Firebase para contornar isso.

Recursos compatíveis existentes são reaproveitados. Divergência de papel/provider, conta desativada ou outros papéis de projeto na conta de auditoria interrompem a instalação sem sobrescrever o recurso conflitante. Pode haver recursos de etapas anteriores já criados se uma etapa posterior falhar; consultar o erro e o estado antes de repetir.

Pools com outros providers e contas com outros vínculos de confiança também interrompem a instalação antes dos vínculos da ponte. A propagação de IAM/federação pode levar alguns minutos; um primeiro erro de propagação não justifica ampliar os papéis.

## Uso após a configuração

1. O workflow precisa estar mergeado na main e o destino dos relatórios precisa ser privado. No estado público atual, a coleta é bloqueada antes de obter token. Não remover esse bloqueio para executar.
2. Após decisão explícita do proprietário sobre privacidade, revisar a allowlist Actions. Preservar a política selected e as outras entradas; liberar apenas as duas actions oficiais nos SHAs usados:
   - `google-github-actions/auth@7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`
   - `google-github-actions/setup-gcloud@aa5489c8933f4cc7a4f7d45035b3b1440c9c10db`
3. Abrir https://github.com/FelipeVRosa/Linvuu/actions/workflows/auditoria-firebase.yml e executar `Run workflow` na main; o assistente também pode usar a operação de dispatch do conector GitHub, quando exposta e autorizada.
4. Ler `resultado.json` e os JSON de configuração no artefato da execução. Registrar run ID, SHA, horário e erros no assunto da auditoria.

Saída 0: coleta prevista concluída e ruleset padrão textualmente igual ao arquivo versionado. Não equivale a aprovação de segurança.
Saída 1: coleta concluída com diferença textual de regras; investigar antes de publicar qualquer mudança.
Saída 2: falha de acesso, projeto não confirmado ou comparação incompleta. Não interpretar ausência de dados como sucesso.

O coletor não lista documentos nem contas de usuários, não lê chaves privadas nem valores de API keys. O IAM de organização/pasta e todos os recursos externos continuam fora do escopo. Regras de bancos nomeados são coletadas quando retornadas nas releases; a comparação automática é do ruleset padrão.

Manter o código público e executar a auditoria em outro repositório privado exige revisar os IDs, condição de confiança OIDC, caminhos e validação do coletor. Isso ainda não foi implementado. Não compartilhar políticas IAM detalhadas em issues, logs ou artefatos públicos.

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
