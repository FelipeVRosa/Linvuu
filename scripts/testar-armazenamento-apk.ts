import assert from 'node:assert/strict';
import fs from 'node:fs';
class Memoria {dados=new Map<string,string>();setItem(k:string,v:string){this.dados.set(k,String(v));Object.defineProperty(this,k,{value:String(v),enumerable:true,configurable:true,writable:true});}getItem(k:string){return this.dados.get(k)??null;}removeItem(k:string){this.dados.delete(k);delete (this as unknown as Record<string,unknown>)[k];}clear(){for(const k of this.dados.keys())this.removeItem(k);}}
Object.defineProperty(Memoria.prototype,'dados',{enumerable:false});
const local=new Memoria(),sessao=new Memoria();Object.defineProperty(local,'dados',{value:new Map(),enumerable:false});Object.defineProperty(sessao,'dados',{value:new Map(),enumerable:false});
Object.assign(globalThis,{Storage:Memoria,localStorage:local,sessionStorage:sessao,window:new EventTarget()});
local.setItem('linvuu:progresso:v1','legado');local.setItem('linvuu:tema-app','claro');local.setItem('firebase:authUser:privado','token-nao-migrar');
const modulo=await import('../src/plataforma/apk/armazenamento');const {prepararArmazenamento,sincronizarArmazenamento,apagarEstudoDaConta}=modulo;
const persistido=new Map([['linvuu:tema-app','escuro'],['linvuu:progresso:v1:uid:a','progresso-a'],['linvuu:progresso:v1:uid:b','progresso-b']]);
const backend={snapshot:async()=>({values:Object.fromEntries(persistido)}),set:async({key,value}:{key:string;value:string})=>{persistido.set(key,value);},remove:async({key}:{key:string})=>{persistido.delete(key);}};
await prepararArmazenamento(backend,true);await sincronizarArmazenamento();
assert.equal(local.getItem('linvuu:tema-app'),'escuro');assert.equal(persistido.get('linvuu:progresso:v1'),'legado');assert.equal(persistido.has('firebase:authUser:privado'),false);assert.equal(local.getItem('firebase:authUser:privado'),'token-nao-migrar');
local.setItem('linvuu:progresso:v1:uid:a','novo-1');local.setItem('linvuu:progresso:v1:uid:a','novo-2');sessao.setItem('linvuu:sons','nao-espelhar');await sincronizarArmazenamento();assert.equal(persistido.get('linvuu:progresso:v1:uid:a'),'novo-2');assert.equal(persistido.has('linvuu:sons'),false);
await apagarEstudoDaConta('a');assert.equal(persistido.has('linvuu:progresso:v1:uid:a'),false);assert.equal(persistido.get('linvuu:progresso:v1:uid:b'),'progresso-b');assert.equal(local.getItem('firebase:authUser:privado'),'token-nao-migrar');
const setOriginal=backend.set;backend.set=async()=>{throw new Error('disco indisponível');};local.setItem('linvuu:sons','sim');await sincronizarArmazenamento();assert.equal(modulo.armazenamentoFalhou,true);backend.set=setOriginal;await sincronizarArmazenamento();assert.equal(modulo.armazenamentoFalhou,false);assert.equal(persistido.get('linvuu:sons'),'sim');
local.clear();await sincronizarArmazenamento();assert.equal(persistido.size,0);
const resultado={checks:['hidratação nativa','migração do legado','token não copiado nem alterado','ordem das gravações','sessionStorage não espelhado','limpeza por conta','clear remove espelho','falha visível e retry'],limite:'Storage e ponte Android simulados em Node; teste físico ainda pendente'};fs.writeFileSync('design/apk/armazenamento-rodada3-testes.json',JSON.stringify(resultado,null,2));console.log(JSON.stringify(resultado));
