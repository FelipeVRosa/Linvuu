import {Capacitor,registerPlugin} from '@capacitor/core';
import {alterar,CHAVE_JOURNAL,chavePersistente,lerJournal,reconciliar,serializar,valorValido,vazio, type Journal} from './recuperacao';
export {chavePersistente} from './recuperacao';
interface Nativo {snapshot():Promise<{values:Record<string,string>}>;set(o:{key:string;value:string}):Promise<void>;remove(o:{key:string}):Promise<void>}
const plugin=registerPlugin<Nativo>('LinvuuStorage');
export let armazenamentoFalhou=false;
function avisar(falhou:boolean){armazenamentoFalhou=falhou;window.dispatchEvent(new Event('linvuu:armazenamento'));}
/** Motor injetável: testes podem simular reabertura sem depender de uma conta real. */
export function criarArmazenamento(backend:Nativo, storage:Storage, avisarEstado:(falhou:boolean)=>void, limite=1500) {
 const set=storage.setItem.bind(storage),remove=storage.removeItem.bind(storage);
 let journal=vazio();
 try{journal=lerJournal(storage.getItem(CHAVE_JOURNAL))??vazio();}catch{avisarEstado(true);}
 let corrompido=false;
 const quarentena='linvuu:recuperacao-invalida:v1:';
 const legadas=new Set<string>();
 let hidratado=false,leitura:Promise<void>|null=null,fila=Promise.resolve();
 const persistir=(j:Journal)=>{set(CHAVE_JOURNAL,serializar(j));journal=j;};
 const aplicar=()=>{for(const [k,e] of Object.entries(journal.entradas))e.valor===null?remove(k):set(k,e.valor);};
 const enviar=()=>{
  fila=fila.catch(()=>{}).then(async()=>{
   if(!hidratado)return;
   const copia=serializar(journal,true);
   const enviado=journal;
   const demora=setTimeout(()=>avisarEstado(true),limite);
   try {
    await backend.set({key:CHAVE_JOURNAL,value:copia});
    for(const k of [...legadas]){await backend.remove({key:k});legadas.delete(k);}
    const atual:Journal={...journal,entradas:{...journal.entradas}};
    for(const [k,e]of Object.entries(enviado.entradas))if(atual.entradas[k]?.revisao===e.revisao)atual.entradas[k]={...e,pendente:false};
    persistir(atual);
    avisarEstado(corrompido);
   }catch{avisarEstado(true);}finally{clearTimeout(demora);}
  });return fila;
 };
 const hidratar=():Promise<void>=>{
  if(leitura)return leitura;
  leitura=(async()=>{
   let timer:ReturnType<typeof setTimeout>|undefined;
   try {
    const {values}=await Promise.race([backend.snapshot(),new Promise<never>((_,reject)=>{timer=setTimeout(()=>reject(Error('ponte-indisponivel')),limite);})]);
    for(const k of Object.keys(values))if(chavePersistente(k)&&valorValido(k,values[k]))legadas.add(k);
    const raw=values[CHAVE_JOURNAL];
    const remoto=lerJournal(raw??null);
    if(raw!==undefined&&!remoto)throw Error('journal-nativo-invalido'); // não sobrescrever cópia desconhecida
    const legado=vazio();
    for(const [k,v]of Object.entries(values))if(chavePersistente(k)&&valorValido(k,v)&&!remoto?.entradas[k])legado.entradas[k]={revisao:0,valor:v};
    const nativo=reconciliar(legado,remoto??vazio());
    // Importar dados legados locais só quando não existe registro, nem tombstone.
    let atual=journal;
    for(const k of Object.keys(storage))if(chavePersistente(k)&&!atual.entradas[k]&&!remoto?.entradas[k]){
     const v=storage.getItem(k);if(valorValido(k,v))atual=alterar(atual,k,v);
    }
    persistir(reconciliar(atual,nativo));aplicar();hidratado=true;
    window.dispatchEvent(new Event('linvuu:dias'));
    window.dispatchEvent(new Event('storage'));
    void enviar();
   }catch{avisarEstado(true);}finally{clearTimeout(timer);}
  })().finally(()=>{leitura=null;});return leitura;
 };
 // Preserva o valor inválido separado dos leitores antes de remover a chave ativa.
 // Se a cópia de segurança falhar, não apaga o original.
 try{
  aplicar();
  for(const k of Object.keys(storage))if(chavePersistente(k)){
   const raw=storage.getItem(k);
   if(!valorValido(k,raw)){set(quarentena+k,raw!);remove(k);corrompido=true;avisarEstado(true);}
  }
 }catch{avisarEstado(true);}
 return {
  hidratar,
  gravar(k:string,v:string|null){
   try{persistir(alterar(journal,k,v));v===null?remove(k):set(k,v);void enviar();}
   catch(e){avisarEstado(true);throw e;}
  },
  async sincronizar(){if(!hidratado){await hidratar();await fila;}else await enviar();},
  chaves:()=>Object.keys(journal.entradas).filter(k=>journal.entradas[k].valor!==null),
 };
}
let motor:ReturnType<typeof criarArmazenamento>|undefined;
export async function sincronizarArmazenamento(){await motor?.sincronizar();}
/** A leitura inicial tem orçamento de 1,5 s; falha mantém journal local e retry. */
export async function prepararArmazenamento(backend:Nativo=plugin,nativo=Capacitor.isNativePlatform()&&Capacitor.getPlatform()==='android'){
 if(motor||!nativo)return;
 motor=criarArmazenamento(backend,localStorage,avisar);
 const set=Storage.prototype.setItem,remove=Storage.prototype.removeItem,clear=Storage.prototype.clear;
 Storage.prototype.setItem=function(k:string,v:string){if(this===localStorage&&chavePersistente(String(k)))motor!.gravar(String(k),String(v));else set.call(this,k,v);};
 Storage.prototype.removeItem=function(k:string){if(this===localStorage&&chavePersistente(String(k)))motor!.gravar(String(k),null);else remove.call(this,k);};
 Storage.prototype.clear=function(){if(this!==localStorage){clear.call(this);return;}for(const k of new Set([...Object.keys(this).filter(chavePersistente),...motor!.chaves()]))motor!.gravar(k,null);for(const k of Object.keys(this))if(k!==CHAVE_JOURNAL&&!chavePersistente(k))remove.call(this,k);};
 window.addEventListener('online',()=>void sincronizarArmazenamento());
 await motor.hidratar();
}
export async function apagarEstudoDaConta(uid:string){
 const keys=new Set([...Object.keys(localStorage),...(motor?.chaves()??[])]);
 for(const k of keys){
  const original=k.startsWith('linvuu:recuperacao-invalida:v1:')?k.slice('linvuu:recuperacao-invalida:v1:'.length):k;
  if(original!==k&&(original.endsWith(`:uid:${uid}`)||original.startsWith(`linvuu:pratica-apk:v1:${uid}:`)))localStorage.removeItem(k);
 }
 for(const k of keys)if(chavePersistente(k)&&(k.endsWith(`:uid:${uid}`)||k.startsWith(`linvuu:pratica-apk:v1:${uid}:`)))localStorage.removeItem(k);
 await sincronizarArmazenamento();
}
