import {Capacitor} from '@capacitor/core';
import {Purchases,type PurchasesPackage} from '@revenuecat/purchases-capacitor';
const env=import.meta.env??{};
export function configuracaoComprasTeste(modo:string|undefined,chave:string|undefined,nativo:boolean){return modo==='revenuecat-test-store'&&!!chave?.startsWith('test_')&&nativo;}
export const comprasTesteDisponiveis=()=>configuracaoComprasTeste(env.VITE_BILLING_MODE,env.VITE_REVENUECAT_TEST_KEY,Capacitor.isNativePlatform()&&Capacitor.getPlatform()==='android');
let uidAtual:string|null=null,configurado=false,fila=Promise.resolve();
/** Test Store somente. Não aceita chave Google/produção e não concede acesso ao acervo. */
export function criarOperacaoTeste<T>(uid:string,acao:()=>Promise<T>):Promise<T>{
 const executar=async()=>{if(!comprasTesteDisponiveis()||!uid)throw new Error('teste-indisponivel');if(!configurado){await Purchases.configure({apiKey:env.VITE_REVENUECAT_TEST_KEY,appUserID:uid});configurado=true;uidAtual=uid;}else if(uidAtual!==uid){await Purchases.logIn({appUserID:uid});uidAtual=uid;}return acao();};
 const resultado=fila.then(executar);fila=resultado.then(()=>{},()=>{});return resultado;
}
export const ofertasTeste=(uid:string)=>criarOperacaoTeste(uid,async()=>{const o=await Purchases.getOfferings();return o.current?.availablePackages??[];});
export const comprarPacoteTeste=(uid:string,pacote:PurchasesPackage)=>criarOperacaoTeste(uid,()=>Purchases.purchasePackage({aPackage:pacote}));
export const restaurarComprasTeste=(uid:string)=>criarOperacaoTeste(uid,()=>Purchases.restorePurchases());
