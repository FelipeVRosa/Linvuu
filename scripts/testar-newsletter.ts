import assert from 'node:assert/strict';
import { idDoEmail, validarInscricao } from '../server/newsletter';

const base = { email: 'Pessoa@Exemplo.invalid ', origem: 'rodape', idioma: 'pt', aceite: true };
assert.deepEqual(validarInscricao(base), { email: 'pessoa@exemplo.invalid', origem: 'rodape', idioma: 'pt' }, 'válido: normaliza e-mail');
assert.equal(validarInscricao({ ...base, aceite: false }), null, 'sem aceite');
assert.equal(validarInscricao({ ...base, aceite: 'true' }), null, 'aceite com tipo errado');
const { aceite: _, ...semAceite } = base;
assert.equal(validarInscricao(semAceite), null, 'aceite ausente');
for (const email of ['', 'semarroba', 'a@b', 'a b@c.com', 'a@@c.com', 'a@c.com\nb@d.com', 123, null, { $ne: 1 }, 'x'.repeat(250) + '@e.com']) assert.equal(validarInscricao({ ...base, email }), null, `e-mail inválido: ${String(email).slice(0, 20)}`);
for (const origem of ['', 'Rodape', 'a b', 'x'.repeat(41), '../x', 5, null]) assert.equal(validarInscricao({ ...base, origem }), null, `origem inválida: ${String(origem)}`);
for (const idioma of ['', 'fr', 'PT', 7, null]) assert.equal(validarInscricao({ ...base, idioma }), null, `idioma inválido: ${String(idioma)}`);
assert.equal(validarInscricao({ ...base, admin: true }), null, 'campo extra');
assert.equal(validarInscricao({ ...base, website: '' })?.email, 'pessoa@exemplo.invalid', 'isca vazia é aceita');
for (const corpo of [null, undefined, 'texto', 42, [], [base]]) assert.equal(validarInscricao(corpo), null, 'corpo não-objeto');
assert.equal(idDoEmail('a@exemplo.invalid'), idDoEmail('a@exemplo.invalid'), 'id estável');
assert.notEqual(idDoEmail('a@exemplo.invalid'), idDoEmail('b@exemplo.invalid'));
assert.match(idDoEmail('a@exemplo.invalid'), /^[a-f0-9]{64}$/);
console.log('ok: validação da inscrição (válida, inválida, tipos, tamanhos, aceite, campos extras)');
