// App Android (e iOS, depois) da Linvuu. O site é empacotado dentro do app (dist/); as chamadas à API vão para o domínio de produção.
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.linvuu.app',
  appName: 'Linvuu',
  webDir: 'dist-apk',
  plugins: { SystemBars: { insetsHandling: 'native', initialViewportFitValueHint: 'cover', style: 'LIGHT' } },
  // Usa https://localhost dentro do Android: as origens liberadas no servidor (CORS) dependem disso.
  android: { allowMixedContent: false, webContentsDebuggingEnabled: false },
  server: { androidScheme: 'https', cleartext: false },
};

export default config;

