import test from 'node:test';
import assert from 'node:assert/strict';
import { planejar } from './preparar-migracao-audio.mjs';
const sha = 'a'.repeat(40), commit = 'b'.repeat(40);
test('mesmo idioma/nome público e privado nunca é fundido no mesmo bucket', () => {
 const p=planejar([{caminho:'public/audio/en/12345678.mp3',sha,bytes:10},{caminho:'server/audio-privado/en/12345678.mp3',sha:'c'.repeat(40),bytes:20}],commit);
 assert.equal(p.arquivos,2);assert.equal(p.bytes,30);assert.equal(p.lotes.length,2);
 const [a,b]=p.lotes.flatMap(l=>l.arquivos);assert.equal(a.arquivo,b.arquivo);assert.notEqual(a.bucketProposto,b.bucketProposto);
});
test('recusa caminho fora do acervo, vazios e origem duplicada',()=>{
 const e={caminho:'public/audio/en/12345678.mp3',sha,bytes:10};
 assert.throws(()=>planejar([{...e,caminho:'public/audio/../12345678.mp3'}],commit));
 assert.throws(()=>planejar([{...e,bytes:0}],commit));
 assert.throws(()=>planejar([e,e],commit));
});
test('preserva nome e separa versões sem mudar ID de arquivo',()=>{
 const e={caminho:'public/audio/ru/12345678.mp3',sha,bytes:10};
 const a=planejar([e],commit,'v1').lotes[0].arquivos[0],b=planejar([e],commit,'v2').lotes[0].arquivos[0];
 assert.equal(a.arquivo,'12345678.mp3');assert.notEqual(a.chave,b.chave);
});
test('voz ElevenLabs (v2) fica separada da voz antiga, com o mesmo nome de arquivo',()=>{
 const p=planejar([
  {caminho:'public/audio/en/12345678.mp3',sha,bytes:10},
  {caminho:'public/audio/v2/en/12345678.mp3',sha:'d'.repeat(40),bytes:11},
  {caminho:'server/audio-privado-v2/en/87654321.mp3',sha:'e'.repeat(40),bytes:12}],commit);
 assert.equal(p.arquivos,3);assert.equal(p.lotes.length,3);
 const it=p.lotes.flatMap(l=>l.arquivos), v1=it[0], v2=it[1], priv=it[2];
 assert.equal(v1.chave,'r20261019/en/12345678.mp3');assert.equal(v2.chave,'r20261019/v2/en/12345678.mp3');
 assert.equal(v2.geracao,'v2');assert.equal(priv.visibilidade,'privado');assert.equal(priv.bucketProposto,'linvuu-audio-privado');
 assert.throws(()=>planejar([{caminho:'public/audio/v3/en/12345678.mp3',sha,bytes:10}],commit));
});
