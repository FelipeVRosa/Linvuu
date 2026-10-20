import assert from 'node:assert/strict';
class Memoria {
 private valores=new Map<string,string>();
 getItem(k:string){return this.valores.get(k)??null;}
 setItem(k:string,v:string){this.valores.set(k,String(v));}
 removeItem(k:string){this.valores.delete(k);}
 clear(){this.valores.clear();}
}
const local=new Memoria();
Object.assign(globalThis,{Storage:Memoria,localStorage:local,window:new EventTarget()});
const {prepararArmazenamento,sincronizarArmazenamento}=await import('../src/plataforma/apk/armazenamento');
const escritas=new Map<string,string>();
await prepararArmazenamento({snapshot:async()=>{throw Error('ponte indisponível na partida');},set:async({key,value})=>{escritas.set(key,value);},remove:async({key})=>{escritas.delete(key);}},true);
local.setItem('linvuu:progresso:v1:uid:teste','{"en:1:s1":{"bloco":1,"completa":false,"em":"2026-10-20"}}');
local.setItem('firebase:authUser:privado','nao-copiar');
await sincronizarArmazenamento();
assert.ok(escritas.has('linvuu:progresso:v1:uid:teste'),'escrita espelhada mesmo após falha inicial');
assert.equal(escritas.has('firebase:authUser:privado'),false);
console.log('ok: falha inicial não desativa espelhamento; credenciais não copiadas (ponte simulada)');
