# App Linvuu (Android e iOS)

## Como o app é feito
- **Capacitor** empacota o site (`dist/`) dentro de um app nativo. O código é o mesmo do site, então correções valem para os dois.
- As chamadas à API (`/api/billing/*`, `/api/aula/*`) vão para `https://linvuu.com.br`, com o token do Firebase no cabeçalho. O servidor confere o token e a assinatura; o app nunca decide acesso sozinho.
- Os áudios estão dentro do pacote (`public/audio/`), então tocam sem internet.
- Origens liberadas no servidor para o app: `https://localhost`, `capacitor://localhost`, `http://localhost` (ver `server/seguranca.ts`).
- Compra **desligada** dentro do app (`compraNoAppDisponivel()` em `src/lib/assinatura.ts`) até a decisão sobre cobrança pela loja (ver abaixo).

## Como gerar o app
| O que | Como |
|---|---|
| Android (APK de teste) | GitHub → Actions → **App Android (APK de teste)** → Run workflow. Baixe o artifact `linvuu-debug-apk` e instale no aparelho (ative "instalar apps desconhecidos"). |
| Android (no seu computador) | `npm install` e depois `npm run app:android`. Abra a pasta `android/` no Android Studio e rode em um emulador ou aparelho. Requer JDK 21 e Android SDK. |
| iOS | Ainda não criado. Exige macOS e Xcode, e uma conta de desenvolvedor Apple. |

## Antes de publicar nas lojas
1. **Cobrança.** Conteúdo digital vendido dentro do app precisa usar a cobrança da loja (Google Play Billing; no iOS, compra no app da Apple). Não é permitido vender a assinatura Stripe dentro do app. Opções: (a) integrar a cobrança da loja e o servidor reconhecer a compra; (b) publicar o app sem venda e deixar a assinatura no site. Verifique as regras vigentes antes de decidir, porque elas mudam e variam por país.
2. **Login com Google** dentro do app: o popup não funciona no WebView. Usar o plugin nativo do Firebase.
3. **Firebase:** adicionar `localhost` nos domínios autorizados (Authentication → Configurações).
4. **Conteúdo:** o Google Play rejeita um app que é só um site empacotado. O app precisa de funções nativas (ex.: aulas baixadas, lembretes locais, modo offline). Planeje isso antes do envio.
5. **Assinatura de release:** gerar uma keystore, guardar em GitHub Secrets (nunca no repositório) e configurar o `signingConfig` no `android/app/build.gradle`.
6. **Ícone e splash:** usar a marca oficial, sem emoji nem bandeiras.
7. **Política de privacidade e exclusão de conta** publicadas (ver `docs/SEGURANCA.md`, item 4).

## Auditoria
Checklist com o estado de cada item e as perguntas em aberto: `docs/AUDITORIA-APP.md`.

## Não feito ainda
- iOS (exige Mac).
- Ícone, splash, assinatura de release e ficha de loja.
- Cobrança pela loja.
- Login com Google no app.
