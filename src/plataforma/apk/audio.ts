/** Motor de gravações exclusivo do APK. Sem síntese automática nem armazenamento offline. */
import { carregarAuth } from '../../lib/firebase';
import { api } from '../../lib/api';
const BASE=(import.meta.env.VITE_AUDIO_BASE_URL || 'https://linvuu.com.br/audio').replace(/\/$/,'');
export const textoParaAudio=(t:string)=>t.normalize('NFC').replace(/\u0301/g,'').trim();
export function hashTexto(t:string){let h=0x811c9dc5;for(const c of new TextEncoder().encode(textoParaAudio(t))){h^=c;h=Math.imul(h,0x01000193)>>>0;}return h.toString(16).padStart(8,'0');}
export type FonteAudio='gravacao'|'voz-do-navegador';
export type EstadoAudio={fase:'parado'|'carregando'|'tocando'|'pausado'|'concluido'|'erro';velocidade:number;erro:'rede'|'arquivo'|'acesso'|null;trecho:number;total:number;repetivel:boolean};
let estado:EstadoAudio={fase:'parado',velocidade:1,erro:null,trecho:0,total:0,repetivel:false};
const ouvintes=new Set<()=>void>();
export const lerEstadoAudio=()=>estado;
export const observarAudio=(fn:()=>void)=>{ouvintes.add(fn);return ()=>{ouvintes.delete(fn);};};
function informar(p:Partial<EstadoAudio>){estado={...estado,...p};ouvintes.forEach(fn=>fn());}
const indices=new Map<string,Promise<Set<string>>>();
const validades=new Map<string,number>();
const falhas=new Map<string,{n:number;ate:number}>();
async function buscar(url:string,init:RequestInit={}){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10000);
 try{const r=await fetch(url,{...init,signal:controller.signal});if(!r.ok)return r;const body=await r.arrayBuffer();return new Response(body,{status:r.status,headers:r.headers});}finally{clearTimeout(timer);}
}
export async function indiceAudio(idioma:string):Promise<Set<string>>{
 if((validades.get(idioma)??0)<Date.now())indices.delete(idioma);
 if(indices.has(idioma))return indices.get(idioma)!;
 const f=falhas.get(idioma);if(f&&Date.now()<f.ate)throw new Error('rede');
 const pedido=(async()=>{
  try{const r=await buscar(`${BASE}/${idioma}/index.json`);if(!r.ok)throw new Error('rede');const lista:unknown=await r.json();if(!Array.isArray(lista)||!lista.every(x=>typeof x==='string'&&/^[a-f0-9]{8}$/.test(x)))throw new Error('rede');falhas.delete(idioma);validades.set(idioma,Date.now()+5*60*1000);return new Set<string>(lista);}
  catch(e){indices.delete(idioma);const n=(falhas.get(idioma)?.n??0)+1;falhas.set(idioma,{n,ate:Date.now()+Math.min(30000,1000*2**(n-1))});throw e;}
 })();validades.set(idioma,Date.now()+5*60*1000);indices.set(idioma,pedido);return pedido;
}
// Voz nova (ElevenLabs): MP3 públicos em /audio/v2/<idioma>/. Se o índice novo não carregar, segue só com o antigo (nunca derruba o áudio).
const indicesV2=new Map<string,Promise<Set<string>>>(),validadesV2=new Map<string,number>();
export async function indiceAudioV2(idioma:string):Promise<Set<string>>{
 if((validadesV2.get(idioma)??0)<Date.now())indicesV2.delete(idioma);
 if(indicesV2.has(idioma))return indicesV2.get(idioma)!;
 const pedido=(async()=>{try{const r=await buscar(`${BASE}/v2/${idioma}/index.json`);if(!r.ok)return new Set<string>();const l:unknown=await r.json();return new Set<string>(Array.isArray(l)?l.filter((x):x is string=>typeof x==='string'&&/^[a-f0-9]{8}$/.test(x)):[]);}catch{indicesV2.delete(idioma);return new Set<string>();}})();
 validadesV2.set(idioma,Date.now()+5*60*1000);indicesV2.set(idioma,pedido);return pedido;
}
export function recuperarRedeAudio(){falhas.clear();indices.clear();validades.clear();indicesV2.clear();validadesV2.clear();}
if(typeof window!=='undefined')window.addEventListener('online',recuperarRedeAudio);
let atual:HTMLAudioElement|null=null,geracao=0,finalizar:(()=>void)|null=null;
type Trecho={texto:string;idioma:string};
let ultima:Trecho[]=[],posicao=0;
const privados=new Map<string,string>();
let geracaoConta=0;
export const audioTocando=()=>estado.fase==='tocando'||estado.fase==='carregando';
function interromper(){geracao++;atual?.pause();if(atual){atual.onended=null;atual.onerror=null;atual.removeAttribute('src');atual.load();}atual=null;finalizar?.();finalizar=null;}
export function parar(){interromper();informar({fase:'parado',erro:null});}
export function limparAudioPrivado(){geracaoConta++;parar();for(const url of privados.values())URL.revokeObjectURL(url);privados.clear();ultima=[];informar({repetivel:false,total:0,trecho:0});}
async function origem(t:Trecho){
 const h=hashTexto(t.texto);
 if((await indiceAudioV2(t.idioma)).has(h))return `${BASE}/v2/${t.idioma}/${h}.mp3`;
 const lista=await indiceAudio(t.idioma);
 if(lista.has(h))return `${BASE}/${t.idioma}/${h}.mp3`;
 const chave=`${t.idioma}/${h}`;if(privados.has(chave))return privados.get(chave)!;
 const conta=geracaoConta;let token:string|undefined;
 try{const {auth}=await carregarAuth();token=await auth.currentUser?.getIdToken();}catch{/* autorização final é do servidor */}
 const r=await buscar(api(`/api/audio/${t.idioma}/${h}.mp3`),{headers:token?{Authorization:`Bearer ${token}`}:{}});
 if(r.status===401||r.status===403)throw new Error('acesso');if(!r.ok)throw new Error(r.status===404?'arquivo':'rede');
 const blob=await r.blob();if(conta!==geracaoConta)throw new Error('acesso');
 const url=URL.createObjectURL(blob);privados.set(chave,url);
 // Cache volátil limitado; não revoga o arquivo que está tocando.
 for(const [k,v]of privados){if(privados.size<=16)break;if(v===atual?.src||v===url)continue;URL.revokeObjectURL(v);privados.delete(k);}
 return url;
}
async function executar(itens:Trecho[]){
 interromper();ultima=itens.map(t=>({...t}));const minha=geracao;
 informar({fase:'carregando',erro:null,trecho:1,total:itens.length,repetivel:itens.length>0});
 try{
  for(let i=0;i<itens.length;i++){
   posicao=i;informar({fase:'carregando',trecho:i+1});const url=await new Promise<string|null>((resolve,reject)=>{
    finalizar=()=>resolve(null);
    void origem(itens[i]).then(url=>{if(minha===geracao)finalizar=null;resolve(url);},reject);
   });if(!url||minha!==geracao)return;
   const a=new Audio();a.crossOrigin='anonymous';a.src=url;a.playbackRate=estado.velocidade;atual=a;
   await new Promise<void>((resolve,reject)=>{
    let pronto=false;let timer:ReturnType<typeof setTimeout>;const esperar=()=>{clearTimeout(timer);timer=setTimeout(()=>terminar(new Error('rede')),15000);};
    const terminar=(erro?:Error)=>{if(pronto)return;pronto=true;clearTimeout(timer);finalizar=null;a.onended=null;a.onerror=null;a.onwaiting=null;a.onplaying=null;a.onpause=null;erro?reject(erro):resolve();};
    esperar();a.onwaiting=esperar;a.onplaying=()=>clearTimeout(timer);a.onpause=()=>clearTimeout(timer);
    finalizar=()=>terminar();a.onended=()=>terminar();a.onerror=()=>terminar(new Error('arquivo'));
    a.play().then(()=>{clearTimeout(timer);if(minha!==geracao){a.pause();return;}informar({fase:'tocando'});window.dispatchEvent(new CustomEvent('linvuu:fonte-audio',{detail:'gravacao'}));}).catch(()=>terminar(new Error('arquivo')));
   });if(minha!==geracao)return;
  }
  atual=null;informar({fase:'concluido'});
 }catch(e){if(minha!==geracao)return;atual?.pause();atual=null;const msg=e instanceof Error?e.message:'';informar({fase:'erro',erro:msg==='acesso'?'acesso':msg==='arquivo'?'arquivo':'rede'});}
}
export async function falar(texto:string,idioma='ru'){await executar([{texto,idioma}]);}
export async function falarLista(textos:string[],idioma='ru'){await executar(textos.map(texto=>({texto,idioma})));}
export async function falarTrechos(itens:Trecho[]){await executar(itens);}
export function pausar(){if(estado.fase==='tocando'&&atual){atual.pause();informar({fase:'pausado'});}else if(estado.fase==='carregando')parar();}
export async function retomar(){if(estado.fase!=='pausado'||!atual)return;const alvo=atual,minha=geracao;try{await alvo.play();if(minha===geracao&&atual===alvo)informar({fase:'tocando'});}catch{if(minha===geracao&&atual===alvo)informar({fase:'erro',erro:'arquivo'});}}
export function definirVelocidade(v:number){if(![0.75,1,1.25].includes(v))return;informar({velocidade:v});if(atual)atual.playbackRate=v;}
export async function repetirTrecho(){const t=ultima[posicao];if(t)await executar([t]);}
export async function tentarNovamente(){recuperarRedeAudio();if(ultima.length)await executar(ultima);}
export async function temVoz(idioma:string){try{return(await indiceAudio(idioma)).size>0;}catch{return false;}}
