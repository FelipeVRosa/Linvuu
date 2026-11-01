// Busca de mapa e conteúdos do alemão para falantes de inglês: Node, sem dependências ou escrita.
// node scripts/pesquisar-mapa-de-en.mjs [--json] [--limit=20] palavra [outras palavras]
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const args=process.argv.slice(2);
const json=args.includes('--json');
const max=Number(args.find(s=>s.startsWith('--limit='))?.split('=')[1]??20);
const q=args.filter(s=>!s.startsWith('--')).join(' ').trim();
if(!q){console.error('Uso: node scripts/pesquisar-mapa-de-en.mjs [--json] [--limit=20] Dativ');process.exit(2)}
const clean=x=>String(x).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const words=clean(q).split(/\s+/).filter(Boolean);
const files=[];
function addDir(dir){if(!fs.existsSync(dir))return;for(const name of fs.readdirSync(dir)){const full=path.join(dir,name);if(fs.statSync(full).isDirectory())addDir(full);else if(/\.md$/i.test(name))files.push(full)}}
addDir(path.join(root,'docs/de-en/mapa'));
for(const p of ['content/indice.en.json','content/gramatica/de.en.json','docs/de-en/LEIA-ME-PARA-QUEM-CONTINUA.md']){const full=path.join(root,p);if(fs.existsSync(full))files.push(full)}
const matches=[];
for(const full of files){const content=fs.readFileSync(full,'utf8');const hay=clean(content);if(!words.every(w=>hay.includes(w)))continue;const lines=content.split(/\r?\n/),hit=[];for(let n=0;n<lines.length;n++){const line=clean(lines[n]);if(words.some(w=>line.includes(w))){hit.push({line:n+1,excerpt:lines[n].slice(0,190)});if(hit.length>=3)break}}let rel=path.relative(root,full).replaceAll('\\','/');const base=rel.startsWith('docs/de-en/mapa/aulas')?3:rel.startsWith('docs/de-en/mapa/fontes')?2:1;matches.push({file:rel,score:hit.length+(rel.includes('/aulas/')?1:0),hits:hit});}
matches.sort((a,b)=>b.score-a.score||a.file.localeCompare(b.file));const result={query:q,total:matches.length,matches:matches.slice(0,Math.max(1,max))};
if(json)console.log(JSON.stringify(result,null,2));else{console.log('Resultados: '+result.total+' para '+q);for(const r of result.matches){console.log('\n'+r.file);for(const h of r.hits)console.log('  '+h.line+': '+h.excerpt)}}
