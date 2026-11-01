// Auditoria editorial e estrutural do alemão explicado em inglês.
// Uso: node scripts/auditar-de-en.mjs [--limit=60] [--json]
// Apenas leitura. Nunca altera aulas, índices, áudios ou status da vitrine.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const srcDir = path.join(root, 'content/idiomas/de');
const enDir = path.join(srcDir, 'en');
const issues = [];
const limit = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? '80');
const skip = new Set(['ru','audio','ipa','origem','id','idioma','nivel','status','en','explicacao','responsavel','maiuscula','minuscula','translit']);
const pt = /[ãõêâôáíóúà]|\b(?:você|vocês|ouça|escolha|escreva|responda|corrija|pronúncia|terminação|trema|palavra|letra|vogal|sílaba|certo|errado|livro|língua|alemão|português|inglês|porque|também|não|leia|depois|antes|preposição|conjunção|tudo|algo|jornal|série|esporte|leite|água|casa|maçã|muito|só|quem|livraria|romance|saudação|objeto|sujeito|posse|nada|muita\s+coisa)\b/iu;
const err = (file, at, message, detail = '') => issues.push({file,at,message,detail:String(detail).slice(0,200)});
const read = f => JSON.parse(fs.readFileSync(f,'utf8'));
const englishLessonTitles = read(path.join(root,'content/indice.en.json')).de?.g ?? {};
function visit(value, file, at = '', key = '') {
  if (typeof value === 'string') {
    if (skip.has(key)) return;
    // German examples and words inside guillemets remain in German.
    const cleaned = value.replace(/«[^»]*»/g,'');
    if (pt.test(cleaned)) err(file,at,'possible untranslated Portuguese',value);
    return;
  }
  if (value && typeof value === 'object') for (const [k,v] of Object.entries(value))
    visit(v,file,at ? at + '.' + k : k,k);
}
function collect(value, name, out = []) {
  if (Array.isArray(value)) for (const x of value) collect(x,name,out);
  else if (value && typeof value === 'object') for (const [k,v] of Object.entries(value)) {
    if (k === name && typeof v === 'string') out.push(v);
    else collect(v,name,out);
  }
  return out;
}
function sameShape(a,b,at,file) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) { err(file,at,'array length differs',String(a.length)+' vs '+String(b?.length));return; }
    for (let i=0;i<a.length;i++) sameShape(a[i],b[i],at+'['+i+']',file);
  } else if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object' || Array.isArray(b)) { err(file,at,'object changed type');return; }
    // Table column headings can legitimately be translated; compare shared fields only.
    for (const k of Object.keys(a)) if (k in b) sameShape(a[k],b[k],at+'.'+k,file);
    if (typeof a.pt === 'string' && a.pt === b.pt && a.pt.length > 2 &&
        !new Set(['euro','hotel','taxi','sport','film','pizza','radio','menu','internet','okay','ok']).has(a.pt.toLowerCase()))
      err(file,at+'.pt','gloss identical to Portuguese source: review translation',a.pt);
    const removed = Object.keys(a).filter(k=>!(k in b));
    if (removed.length && !at.includes('.tabela') && !at.includes('.tabelas')) err(file,at,'fields missing',removed.join(','));
  }
}
function validateAnswers(x,file,at='') {
  if (Array.isArray(x)) return x.forEach((v,i)=>validateAnswers(v,file,at+'['+i+']'));
  if (!x || typeof x !== 'object') return;
  if (Array.isArray(x.opcoes) && typeof x.gabarito === 'string' &&
      !['sentence-ordering','producao','repeat','audio-recognition'].includes(x.tipo) &&
      x.opcoes.length && !x.opcoes.includes(x.gabarito))
    err(file,at,'answer absent from options',x.gabarito);
  for (const [k,v] of Object.entries(x)) validateAnswers(v,file,at+'.'+k);
}
let present = 0, checked = 0;
for (let n=1;n<=288;n++) {
  const name = 'dia-'+String(n).padStart(3,'0')+'.json';
  const file = 'content/idiomas/de/en/'+name;
  if (!fs.existsSync(path.join(enDir,name))) {err(file,'','missing translated session');continue;}
  present++;
  const a = read(path.join(srcDir,name)), b = read(path.join(enDir,name));
  if (b.idioma !== 'de' || b.explicacao !== 'en' || b.dia !== n)
    err(file,'','invalid course/language/day metadata');
  if (a.aula?.numero !== b.aula?.numero || a.sessao?.sessao !== b.sessao?.sessao)
    err(file,'','lesson/session number changed');
  const enTitle = englishLessonTitles[String(a.aula?.numero)];
  if (enTitle && b.aula?.titulo !== enTitle)
    err(file,'aula.titulo','lesson title not localised',String(b.aula?.titulo));
  if (enTitle && !String(b.titulo).startsWith(enTitle+': '))
    err(file,'titulo','session title has untranslated lesson prefix',String(b.titulo));
  if (a.aula?.objetivo && a.aula.objetivo === b.aula?.objetivo)
    err(file,'aula.objetivo','lesson objective unchanged from Portuguese',String(b.aula.objetivo));
  // Aula 1 EN é um produto editorial próprio. Seus blocos, frases e chaves de áudio podem
  // diferir legitimamente do português. Preservar IDs; verificar o conteúdo pelo teste L01.
  const editorialIndependente = n >= 1 && n <= 4;
  if (editorialIndependente) {
    const av=collect(a,'id').sort(), bv=collect(b,'id').sort();
    if (JSON.stringify(av)!==JSON.stringify(bv))
      err(file,'id','independent English lesson must preserve the original exercise IDs');
    if (b.sessao?.blocos?.[0]?.tipo !== 'intro' || b.sessao?.blocos?.at(-1)?.tipo !== 'producao')
      err(file,'sessao.blocos','independent lesson lacks an opening mission or transfer task');
    validateAnswers(b,file);
    visit(b,file);
    checked++;
    continue;
  }
  if (JSON.stringify(a.sessao?.blocos?.map(x=>x.tipo)) !== JSON.stringify(b.sessao?.blocos?.map(x=>x.tipo)))
    err(file,'','lesson block types changed');
  for (const key of ['ru','audio','id','ipa','maiuscula','minuscula']) {
    const av=collect(a,key),bv=collect(b,key);
    if (JSON.stringify(av)!==JSON.stringify(bv))
      err(file,key,'immutable German/audio/id sequence changed',av.length+' vs '+bv.length);
  }
  sameShape(a,b,'root',file);
  validateAnswers(b,file);
  visit(b,file);
  checked++;
}
const grammar='content/gramatica/de.en.json';
if (!fs.existsSync(path.join(root,grammar))) err(grammar,'','missing English grammar');
else {
  const a=read(path.join(root,'content/gramatica/de.json')),b=read(path.join(root,grammar));
  if (a.topicos?.length!==b.topicos?.length) err(grammar,'topicos','grammar topic count changed');
  for (const key of ['ru','audio','id','ipa']) if (JSON.stringify(collect(a,key))!==JSON.stringify(collect(b,key))) err(grammar,key,'immutable sequence changed');
  visit(b,grammar);
}
const summary={present,checked,total:288,findings:issues.length,byType:Object.fromEntries([...new Set(issues.map(x=>x.message))].map(t=>[t,issues.filter(x=>x.message===t).length]))};
if (process.argv.includes('--json')) console.log(JSON.stringify({summary,issues},null,2));
else {
  console.log('Alemão em inglês: auditoria NÃO equivale à revisão de falante nativo.');
  console.log(JSON.stringify(summary,null,2));
  for (const x of issues.slice(0,Math.max(0,limit))) console.log(x.file+' '+x.at+' | '+x.message+' | '+x.detail);
  if(issues.length>limit) console.log('... '+(issues.length-limit)+' achados adicionais (use --json).');
}
if (issues.length) process.exitCode=1;
