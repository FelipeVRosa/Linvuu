// Verifica integridade do mapa editorial de/en: leitura apenas; não é certificado linguístico.
// Uso: node scripts/testar-mapa-de-en.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname,'..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const json = p => JSON.parse(read(p));
const base='docs/de-en/mapa/';
const group=json('content/indice.json').cursos.de.grupos;
const names=json('content/indice.en.json').de;
const topics=json('content/gramatica/de.en.json').topicos;
assert.equal(group.length,72,'Aulas do currículo');
assert.equal(topics.length,302,'Tópicos do currículo');
assert.equal(Object.keys(names.g).length,72,'Títulos EN no índice');
assert.equal(Object.keys(names.s).length,288,'Sessões EN nomeadas');
assert.ok(Array.isArray(names.aulas),'Índice EN exige campo aulas');
const legalSources=fs.readdirSync(path.join(root,base,'fontes')).filter(f=>f.endsWith('.md'));
assert.equal(legalSources.length,15,'Registros de fontes e licenças');
assert.match(read(base+'fontes/LibreLingoDEEN.md'),/NÃO COMERCIAL|NÃO IMPORTAR|CC BY-NC/i,'Fonte NC deve ficar bloqueada');
let approved=0, translated=0;
for(const g of group){
 const id=String(g.aula).padStart(2,'0');
 const note=read(base+'aulas/L'+id+'.md');
 assert.match(note,new RegExp('aula: '+g.aula+'(?:\\r?\\n|$)'),'Número da aula em nota');
 assert.ok(note.includes(names.g[String(g.aula)]),'Título inglês em nota '+id);
 const a=note.match(/^aprovada:\s*(true|false)$/m)?.[1];
 assert.ok(a,'Aprovação explícita em nota '+id);
 if(a==='true')approved++;
 for(let n=g.dias[0];n<=g.dias[1];n++){
   const f='content/idiomas/de/en/dia-'+String(n).padStart(3,'0')+'.json';
   assert.ok(fs.existsSync(path.join(root,f)),'Arquivo traduzido ausente: '+f);
   const s=json(f);assert.equal(s.dia,n,f+' número');
   assert.equal(s.idioma,'de',f+' idioma');
   assert.equal(s.explicacao,'en',f+' explicação');
   assert.equal(s.aula?.numero,g.aula,f+' vínculo com aula');
   translated++;
 }
}
for(const n of names.aulas) assert.ok(group.some(g=>g.aula===n),'Índice anuncia aula inexistente: '+n);
assert.equal(names.aulas.length,approved,'O número de aulas anunciadas deve coincidir com notas aprovadas');
console.log('OK: '+group.length+' notas de aula, '+translated+' sessões geradas, '+topics.length+' tópicos, '+legalSources.length+' fontes; '+approved+' aulas editorialmente aprovadas.');
console.log('Aviso: este teste verifica arquivos, referências e gates; NÃO revisa inglês, gramática ou autorização de material externo.');
