import assert from 'node:assert/strict';
import {validarFirebaseApk,obrigatorias} from './validar-firebase-apk.mjs';
const ok={VITE_FIREBASE_API_KEY:'AIza'+'a'.repeat(35),VITE_FIREBASE_AUTH_DOMAIN:'example.firebaseapp.com',VITE_FIREBASE_PROJECT_ID:'example-project',VITE_FIREBASE_APP_ID:'1:123456:web:abcdef'};
validarFirebaseApk(ok);
for(const k of obrigatorias){const e={...ok};delete e[k];assert.throws(()=>validarFirebaseApk(e),new RegExp(k));assert.throws(()=>validarFirebaseApk({...ok,[k]:'   '}),new RegExp(k));}
for(const [k,v] of [['VITE_FIREBASE_API_KEY','placeholder'],['VITE_FIREBASE_AUTH_DOMAIN','https://example.firebaseapp.com'],['VITE_FIREBASE_APP_ID','1:123:android:abcdef']])assert.throws(()=>validarFirebaseApk({...ok,[k]:v}));
try{validarFirebaseApk({...ok,VITE_FIREBASE_APP_ID:''});assert.fail();}catch(e){assert.ok(!e.message.includes(ok.VITE_FIREBASE_API_KEY),'diagnóstico não expõe valores');}
console.log('ok: Firebase APK exige configuração válida sem registrar valores; conta conectada não foi testada');
