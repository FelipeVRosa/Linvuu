import {Capacitor,registerPlugin} from '@capacitor/core';
interface Nativo {snapshot():Promise<{values:Record<string,string>}>;set(o:{key:string;value:string}):Promise<void>;remove(o:{key:string}):Promise<void>}
const plugin=registerPlugin<Nativo>('LinvuuStorage');
export const chavePersistente=(key:string)=>/^linvuu:(progresso:v1|progresso-pendente:v1|dias-concluidos:v1|pratica-apk:v1)(:.*)?$|^linvuu:(tema-app|leitura-app|sons|locale)$/.test(key);
let fila=Promise.resolve(),iniciado=false;
const pendentes=new Map<string,string|null>();
export let armazenamentoFalhou=false;
function avisar(falhou:boolean){armazenamentoFalhou=falhou;window.dispatchEvent(new Event('linvuu:armazenamento'));}
function guardar(key:string,value:string|null){
 pendentes.set(key,value);
 fila=fila.then(async()=>{try{value===null?await plugin.remove({key}):await plugin.set({key,value});if(pendentes.get(key)===value)pendentes.delete(key);if(!pendentes.size)avisar(false);}catch{avisar(true);}});
}
export async function sincronizarArmazenamento(){for(const [k,v]of [...pendentes])guardar(k,v);await fila;}
/** Hidrata antes do React; espelha apenas dados de estudo e preferências, nunca sessões de login. */
export async function prepararArmazenamento(){
 if(iniciado||!Capacitor.isNativePlatform()||Capacitor.getPlatform()!=='android')return;
 iniciado=true;
 const originalSet=Storage.prototype.setItem,originalRemove=Storage.prototype.removeItem,originalClear=Storage.prototype.clear;
 try{
  let timer:ReturnType<typeof setTimeout>|undefined;
  const {values}=await Promise.race([plugin.snapshot(),new Promise<never>((_,reject)=>{timer=setTimeout(()=>reject(new Error('armazenamento-indisponivel')),5000);})]).finally(()=>clearTimeout(timer));
  for(const [k,v]of Object.entries(values))if(chavePersistente(k)&&typeof v==='string')originalSet.call(localStorage,k,v);
  for(const k of Object.keys(localStorage))if(chavePersistente(k)&&!(k in values))guardar(k,localStorage.getItem(k));
  Storage.prototype.setItem=function(k:string,v:string){originalSet.call(this,k,v);if(this===localStorage&&chavePersistente(String(k)))guardar(String(k),String(v));};
  Storage.prototype.removeItem=function(k:string){originalRemove.call(this,k);if(this===localStorage&&chavePersistente(String(k)))guardar(String(k),null);};
  Storage.prototype.clear=function(){const keys=this===localStorage?Object.keys(this).filter(chavePersistente):[];originalClear.call(this);keys.forEach(k=>guardar(k,null));};
  window.addEventListener('online',()=>void sincronizarArmazenamento());
 }catch{avisar(true);}
}
export async function apagarEstudoDaConta(uid:string){
 const keys=Object.keys(localStorage).filter(k=>chavePersistente(k)&&(k.endsWith(`:uid:${uid}`)||k.startsWith(`linvuu:pratica-apk:v1:${uid}:`)));
 keys.forEach(k=>localStorage.removeItem(k));await fila;
}
