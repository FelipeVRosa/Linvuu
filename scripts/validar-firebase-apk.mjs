// Configuração pública do cliente, nunca credenciais administrativas.
import {pathToFileURL} from 'node:url';
export const obrigatorias=['VITE_FIREBASE_API_KEY','VITE_FIREBASE_AUTH_DOMAIN','VITE_FIREBASE_PROJECT_ID','VITE_FIREBASE_APP_ID'];
export function validarFirebaseApk(env){
 const faltam=obrigatorias.filter(k=>typeof env[k]!=='string'||!env[k].trim());
 if(faltam.length)throw new Error(`APK bloqueado: configure no GitHub Actions ${faltam.join(', ')}. Nenhum valor foi registrado.`);
 for(const k of obrigatorias)if(/\s/.test(env[k])||/^(undefined|null|CHANGEME|YOUR_)/i.test(env[k]))throw new Error(`APK bloqueado: configuração inválida em ${k}`);
 if(!/^AIza[\w-]{35}$/.test(env.VITE_FIREBASE_API_KEY))throw new Error('APK bloqueado: formato inválido de VITE_FIREBASE_API_KEY');
 if(!/^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(env.VITE_FIREBASE_AUTH_DOMAIN))throw new Error('APK bloqueado: domínio Firebase inválido');
 if(!/^1:\d+:web:[a-f0-9]+$/i.test(env.VITE_FIREBASE_APP_ID))throw new Error('APK bloqueado: appId do cliente web inválido');
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){validarFirebaseApk(process.env);console.log('ok: configuração Firebase presente; login real ainda exige validação conectada');}
