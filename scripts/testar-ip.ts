import { ehCloudflare, ipDoVisitante } from '../server/seguranca';
const t=(n:string,ok:boolean)=>{console.log(ok?'ok   ':'FALHA',n); if(!ok) process.exitCode=1;};
t('cf 172.69.1.1',ehCloudflare('172.69.1.1')); t('cf 104.16.5.5',ehCloudflare('104.16.5.5')); t('cf v6',ehCloudflare('2606:4700:10::1'));
t('não cf 8.8.8.8',!ehCloudflare('8.8.8.8')); t('não cf 104.32.0.1',!ehCloudflare('104.32.0.1')); t('mapeado',ehCloudflare('::ffff:172.64.0.9'));
const r=(ip:string,h?:string)=>({ip,headers:h?{'cf-connecting-ip':h}:{}} as any);
t('usa CF-Connecting-IP vindo da borda',ipDoVisitante(r('172.69.1.1','200.1.2.3'))==='200.1.2.3');
t('ignora cabeçalho forjado',ipDoVisitante(r('8.8.8.8','200.1.2.3'))==='8.8.8.8');
t('sem cabeçalho usa req.ip',ipDoVisitante(r('172.69.1.1'))==='172.69.1.1');
t('cabeçalho inválido ignorado',ipDoVisitante(r('172.69.1.1','x y'))==='172.69.1.1');
