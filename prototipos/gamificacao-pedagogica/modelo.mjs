/**
 * Prototipo editorial Linvuu — NAO usado no site nem no APK.
 * Os limiares (5 itens, 80%) sao hipoteses, NAO certificacao CEFR.
 * Em um produto real, evidencias devem ser verificadas pelo backend.
 */
export const ETAPAS = Object.freeze({
  NUNCA: 'ainda não praticada',
  INICIADA: 'em descoberta',
  PRATICADA: 'prática independente demonstrada',
  CONSOLIDANDO: 'em consolidação',
  DEMONSTRADA: 'domínio demonstrado nesta competência',
});
const formato = e => e && typeof e === 'object' && typeof e.skill_id === 'string' &&
  typeof e.item_id === 'string' && Number.isInteger(e.tentativa) && e.tentativa >= 1 &&
  ['guided','independent','review','transfer'].includes(e.kind);
const primeiraSemDicas = e => e.tentativa === 1 && e.ajudas === 0;

export function avaliarCompetencia(skillId, evidencias = []) {
  if(typeof skillId!=='string'||!skillId) throw new TypeError('skillId obrigatório');
  if(!Array.isArray(evidencias)) throw new TypeError('evidencias deve ser array');
  const ev=evidencias.filter(e=>formato(e)&&e.skill_id===skillId);
  const unicos=new Map();
  for(const e of ev.filter(e=>e.kind==='independent'&&primeiraSemDicas(e))) {
    if(!unicos.has(e.item_id)) unicos.set(e.item_id,e);
  }
  const tentativas=[...unicos.values()];
  const acertos=tentativas.filter(e=>e.correto===true).length;
  const aproveitamento=tentativas.length?acertos/tentativas.length:null;
  const pratica=tentativas.length>=5&&aproveitamento>=.8;
  const intervalos=[...new Set(ev.filter(e=>e.kind==='review'&&primeiraSemDicas(e)&&e.correto===true&&[1,7,30].includes(e.intervalo_dias))
    .map(e=>e.intervalo_dias))].sort((a,b)=>a-b);
  const transferencia=ev.some(e=>e.kind==='transfer'&&e.novo_contexto===true&&e.sem_ajuda===true&&e.avaliacao_independente==='aprovado'&&e.correto===true);
  let etapa=ETAPAS.NUNCA;
  if(ev.length) etapa=ETAPAS.INICIADA;
  if(pratica) etapa=ETAPAS.PRATICADA;
  if(pratica&&intervalos.includes(1)&&intervalos.includes(7)) etapa=ETAPAS.CONSOLIDANDO;
  if(pratica&&[1,7,30].every(x=>intervalos.includes(x))&&transferencia) etapa=ETAPAS.DEMONSTRADA;
  return {etapa,exercicios_validos:tentativas.length,acertos_primeira_tentativa:acertos,
    aproveitamento,intervalos_verificados:intervalos,transferencia_revisada:transferencia,
    dominio_demonstrado:etapa===ETAPAS.DEMONSTRADA};
}
export function progressoPercurso(concluidas, disponiveis) {
  if(!Number.isInteger(concluidas)||!Number.isInteger(disponiveis)||concluidas<0||disponiveis<0||concluidas>disponiveis) throw new RangeError('contagem inválida');
  return {concluidas,disponiveis,proporcao:disponiveis?concluidas/disponiveis:null,
    rotulo:`${concluidas} de ${disponiveis} sessões concluídas`};
}
export function mensagemDeConquista({tipo,idioma,competencia,acertos,total,confirmou=false}) {
  if(tipo==='leitura') return `Leitura concluída. Agora você pode praticar ${competencia}.`;
  if(tipo==='pratica'&&confirmou&&Number.isInteger(acertos)&&Number.isInteger(total)&&total>0&&acertos>=0&&acertos<=total)
    return `Parabéns! Você acertou ${acertos} de ${total} questões em ${idioma}. Continue praticando ${competencia}.`;
  if(tipo==='transferencia'&&confirmou) return `Parabéns! Você aplicou ${competencia} em uma situação nova, sem ajuda.`;
  if(tipo==='retencao'&&confirmou) return `Você recuperou ${competencia} depois de um intervalo. Esse avanço merece reconhecimento.`;
  return 'Mais um passo no seu percurso. Continue no seu ritmo.';
}
