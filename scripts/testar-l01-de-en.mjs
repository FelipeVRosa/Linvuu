// Independent quality gate for the original English German Lesson 1.
// Run: node scripts/testar-l01-de-en.mjs
// It validates authoring structure, not sound files or browser presentation.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const index=read('content/indice.en.json').de;
const grammar=read('content/gramatica/de.en.json');
const lessonNames=['Your First German Conversation','German Sounds English Speakers Misread','Read German with Confidence','Your First Real-World Interaction'];
const norm=s=>s.normalize('NFC').toLowerCase().replace(/[.,!?¿¡«»—…:;"'()]/g,'').replace(/\s+/g,' ').trim();
assert.equal(index.g['1'],'First Steps in German');
assert.ok(!index.aulas.includes(1),'Never publish L01 solely because a draft exists');
let exercises=[],minutes=0,dialogues=0;
for(let day=1;day<=4;day++){
 const p='content/idiomas/de/en/dia-'+String(day).padStart(3,'0')+'.json';
 const x=read(p), s=x.sessao;
 assert.equal(x.explicacao,'en',p);
 assert.equal(x.aula.numero,1,p);
 assert.equal(x.aula.titulo,index.g['1'],p);
 assert.equal(x.titulo,index.s[String(day)],p);
 assert.equal(s.titulo,lessonNames[day-1],p);
 assert.equal(s.sessao,'S'+day,p);
 assert.equal(s.duracaoMin,30,p);
 assert.equal(s.blocos.reduce((n,b)=>n+b.min,0),30,p+' block minutes');
 minutes+=s.duracaoMin;
 const blocks=s.blocos;
 assert.equal(blocks[0].tipo,'intro',p+' mission first');
 assert.equal(blocks.at(-1).tipo,'producao',p+' transfer task last');
 for(const b of blocks){
   if(b.tipo==='dialogo'){
     dialogues++;
     assert.ok(b.linhas.length>=4,p+' dialogue');
     for(const l of b.linhas)assert.ok(l.ru&&l.pt&&l.audio,p+' German, English and audio cues');
   }
   if(b.tipo==='texto')assert.equal(b.perguntas.length,3,p+' reading questions');
 }
 const qb=blocks.find(b=>b.tipo==='exercicios');
 assert.ok(qb&&qb.itens.length>=9,p+' exercises');
 for(const q of qb.itens){
   assert.ok(q.id&&q.enunciado&&q.explicacao,p+' exercise fields');
   if(q.opcoes && q.tipo!=='sentence-ordering')assert.ok(q.opcoes.includes(q.gabarito),q.id+' answer among options');
   if(q.tipo==='sentence-ordering'){
     const a=norm(q.gabarito).split(' ').sort(),b=q.opcoes.map(norm).sort();
     assert.deepEqual(a,b,q.id+' pieces match answer');
   }
   if(q.tipo==='audio-recognition')assert.ok(q.audio,q.id+' audio cue');
   exercises.push(q.id);
 }
}
const graded=exercises.filter(id=>/-e\d+$/.test(id));
const expected=Array.from({length:44},(_,i)=>'de-001-e'+String(i+1).padStart(2,'0'));
assert.deepEqual(graded.sort(),expected.sort(),'44 distinct assessment IDs');
assert.equal(exercises.length,47,'44 graded plus 3 repeat tasks');
assert.equal(new Set(exercises).size,47,'unique exercise IDs');
assert.equal(dialogues,2,'opening and capstone conversations');
assert.equal(minutes,120);
for(const id of ['a1-s3-1','a1-s3-2','a1-s4-3'])assert.equal(grammar.topicos.find(x=>x.id===id)?.aulaTitulo,'First Steps in German');
console.log('L01 de/en structural gate passed: 4 sessions, 120 min, 44 assessed tasks, 3 repeats and linked grammar.');
console.log('NOT tested: browser render, native-language review, sound asset availability or production deployment.');
