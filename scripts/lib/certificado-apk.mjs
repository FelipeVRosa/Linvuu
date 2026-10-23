/** Prefixos de signer variam entre SDKs; o digest do certificado continua obrigatório. */
export function certificadosDoApk(texto) {
 const valores=[...texto.matchAll(/certificate\s+SHA-?256\s+digest:\s*([a-f0-9:]+)/gi)].map(m=>m[1].replaceAll(':','').toLowerCase());
 return [...new Set(valores)];
}
