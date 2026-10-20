import assert from 'node:assert/strict';
class Memoria {
 constructor(){Object.defineProperty(this,'valores',{value:new Map(),enumerable:false});}
 declare valores:Map<string,string>;
 getItem(k:string){return this.valores.get(k)??null;}
 setItem(k:string,v:string){this.valores.set(k,String(v));Object.defineProperty(this,k,{value:String(v),enumerable:true,configurable:true});}
 removeItem(k:string){this.valores.delete(k);delete (this as unknown as Record<string,unknown>)[k];}
 clear(){for(const k of this.valores.keys())this.removeItem(k);}
}
const local=new Memoria(),sessao=new Memoria();
Object.assign(globalThis,{Storage:Memoria,localStorage:local,sessionStorage:sessao,window:new EventTarget()});
const {prepararArmazenamento,sincronizarArmazenamento,apagarEstudoDaConta}=await import('../src/plataforma/apk/armazenamento');
const {CHAVE_JOURNAL,lerJournal}=await import('../src/plataforma/apk/recuperacao');
const escritas=new Map<string,string>();let primeira=true;
await prepararArmazenamento({snapshot:async()=>{if(primeira){primeira=false;throw Error('ponte indisponível na partida');}return {values:Object.fromEntries(escritas)};},set:async({key,value})=>{escritas.set(key,value);},remove:async({key})=>{escritas.delete(key);}},true);
local.setItem('linvuu:dias-concluidos:v1:uid:a','["en:1"]');local.setItem('linvuu:dias-concluidos:v1:uid:b','["en:2"]');
local.setItem('firebase:authUser:privado','nao-copiar');sessao.setItem('linvuu:sons','sim');await sincronizarArmazenamento();
let j=lerJournal(escritas.get(CHAVE_JOURNAL)!)!;assert.equal(j.entradas['linvuu:dias-concluidos:v1:uid:a'].valor,'["en:1"]');assert.equal(j.entradas['firebase:authUser:privado'],undefined);assert.equal(j.entradas['linvuu:sons'],undefined);
await apagarEstudoDaConta('a');j=lerJournal(escritas.get(CHAVE_JOURNAL)!)!;assert.equal(j.entradas['linvuu:dias-concluidos:v1:uid:a'].valor,null);assert.equal(j.entradas['linvuu:dias-concluidos:v1:uid:b'].valor,'["en:2"]');assert.equal(local.getItem('firebase:authUser:privado'),'nao-copiar');
local.clear();await sincronizarArmazenamento();j=lerJournal(escritas.get(CHAVE_JOURNAL)!)!;assert.ok(Object.values(j.entradas).every(e=>e.valor===null));assert.ok(local.getItem(CHAVE_JOURNAL));
console.log('ok: retry após falha inicial, hooks Storage, isolamento de sessionStorage, exclusão por conta e clear com tombstones');
