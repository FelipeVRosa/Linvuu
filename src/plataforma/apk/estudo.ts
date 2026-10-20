import {usuarioDoProgresso} from '../../lib/progresso';
export type Pratica={acertos:number;total:number;em:string};
const chave=(sessao:string)=>`linvuu:pratica-apk:v1:${usuarioDoProgresso()??'visitante'}:${sessao}`;
export function lerPratica(sessao:string):Pratica|null{try{const p=JSON.parse(localStorage.getItem(chave(sessao))??'null');return p&&Number.isInteger(p.acertos)&&Number.isInteger(p.total)&&p.total>0&&p.acertos>=0&&p.acertos<=p.total&&typeof p.em==='string'?p:null;}catch{return null;}}
export function salvarPratica(sessao:string,acertos:number,total:number){const p={acertos,total,em:new Date().toISOString()};try{localStorage.setItem(chave(sessao),JSON.stringify(p));}catch{/* resumo permanece em memória */}return p;}
