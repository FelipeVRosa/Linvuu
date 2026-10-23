import {useEffect,useState} from 'react';
import type {PurchasesPackage} from '@revenuecat/purchases-capacitor';
import {comprasTesteDisponiveis,ofertasTeste,comprarPacoteTeste,restaurarComprasTeste} from './comprasTeste';
/** Painel de laboratório: não aparece no build padrão nem usa preço inventado. */
export function PagamentosTeste({uid}:{uid:string}){
 const [pacotes,setPacotes]=useState<PurchasesPackage[]>([]),[ocupado,setOcupado]=useState(false),[mensagem,setMensagem]=useState('');
 useEffect(()=>{let vivo=true;if(comprasTesteDisponiveis())void ofertasTeste(uid).then(p=>{if(vivo)setPacotes(p);}).catch(()=>{if(vivo)setMensagem('Não foi possível carregar as ofertas de teste.');});return ()=>{vivo=false;};},[uid]);
 if(!comprasTesteDisponiveis())return null;
 const executar=async(acao:()=>Promise<unknown>)=>{if(ocupado)return;setOcupado(true);setMensagem('');try{await acao();setMensagem('Operação concluída no Test Store. O acesso ao conteúdo depende da validação do servidor.');}catch(e){setMensagem((e as {userCancelled?:boolean})?.userCancelled?'Compra de teste cancelada.':'Operação de teste não concluída. Tente novamente.');}finally{setOcupado(false);}};
 return <section className="app-exclusao" aria-label="Laboratório de pagamentos"><h2>Pagamentos — Test Store</h2><p>Ambiente técnico de teste. Não é Google Play Billing e não libera conteúdo pago.</p>{pacotes.map(p=><button className="btn btn-ghost" disabled={ocupado} key={p.identifier} onClick={()=>void executar(()=>comprarPacoteTeste(uid,p))}>{p.product.title} · {p.product.priceString}</button>)}<button type="button" className="btn btn-ghost" disabled={ocupado} onClick={()=>void executar(()=>restaurarComprasTeste(uid))}>Restaurar compras de teste</button><p role="status" aria-live="polite">{mensagem}</p></section>;
}
