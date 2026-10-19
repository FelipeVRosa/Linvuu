import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { corrigirResposta, normalizarResposta, resumirExercicios } from '../src/lib/correcaoExercicios';
import type { Exercicio } from '../src/lib/aulas';

const raiz = path.resolve(import.meta.dirname, '..');
const resposta = (texto: string, escolha: string | null = null, ordem: number[] = []) => ({ texto, escolha, ordem });
const ditado: Exercicio = { id: 'teste', tipo: 'audio-recognition', enunciado: 'Ouça e escreva.', respostaEsperada: '¿Cómo está usted?' };
assert.equal(corrigirResposta(ditado, resposta('Cómo está usted?')), true);
assert.equal(corrigirResposta(ditado, resposta('Como esta usted?')), false, 'acentos continuam necessários');
assert.equal(corrigirResposta({ ...ditado, respostaEsperada: '¡Buenos días!' }, resposta('Buenos días!')), true);
assert.equal(normalizarResposta('cafe\u0301'), normalizarResposta('café'), 'Unicode equivalente');
assert.notEqual(normalizarResposta('sí'), normalizarResposta('si'));
assert.notEqual(normalizarResposta('é'), normalizarResposta('e'));
const escolha: Exercicio = { id: 'ortografia', tipo: 'multiple-choice', enunciado: 'Escolha', opcoes: ["it's", 'its'], gabarito: "it's" };
assert.equal(corrigirResposta(escolha, resposta('', 'its')), false, 'escolhas não usam normalização de ditado');
assert.equal(corrigirResposta(escolha, resposta('', "it's")), true);
const capitalizacao = { ...escolha, opcoes: ['Neues', 'neues'], gabarito: 'Neues' };
assert.equal(corrigirResposta(capitalizacao, resposta('', 'neues')), false);
const montagem: Exercicio = { id: 'montagem', tipo: 'sentence-ordering', enunciado: 'Monte', opcoes: ['is', 'She', 'here.'], gabarito: 'She is here.' };
assert.equal(corrigirResposta(montagem, resposta('', null, [1, 0, 2])), true);
assert.equal(corrigirResposta(montagem, resposta('', null, [0, 1, 2])), false);
const resumo = resumirExercicios([escolha, { ...escolha }, { ...ditado, tipo: 'repeat' }], { 0: true, 1: false, 2: true });
assert.equal(resumo.total, 2);
assert.equal(resumo.acertos, 1, 'IDs repetidos não sobrescrevem respostas distintas');
assert.equal(resumo.erros.length, 1);

function* objetos(valor: unknown): Generator<any> {
  if (Array.isArray(valor)) { for (const item of valor) yield* objetos(item); }
  else if (valor && typeof valor === 'object') { yield valor; for (const item of Object.values(valor)) yield* objetos(item); }
}
let ditadosEspanhol = 0;
const pastas = ['en', 'es', 'fr', 'it', 'de', 'ru', 'br'];
for (const idioma of pastas) {
  for (const arquivo of fs.readdirSync(path.join(raiz, 'content/idiomas', idioma, 'aulas')).filter((f) => f.endsWith('.json'))) {
    const aula = JSON.parse(fs.readFileSync(path.join(raiz, 'content/idiomas', idioma, 'aulas', arquivo), 'utf8'));
    for (const ex of objetos(aula)) {
      if (idioma === 'es' && ex.tipo === 'audio-recognition' && !ex.opcoes && /[¿¡]/.test(ex.respostaEsperada ?? '') && ex.enunciado.startsWith('Ouça')) {
        assert.equal(corrigirResposta(ex, resposta(ex.respostaEsperada.replace(/[¿¡]/g, ''))), true, ex.id);
        ditadosEspanhol++;
      }
    }
  }
}
assert.ok(ditadosEspanhol >= 38, 'cobertura dos 38 ditados reais afetados e dos futuros');
console.log('Corretor: 38 ditados reais + regressões de acentos, múltipla escolha, montagem e IDs repetidos passaram.');
