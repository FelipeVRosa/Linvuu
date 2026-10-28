import type { Express } from 'express';

export function assetLinks(fingerprints = process.env.ANDROID_PLAY_SHA256 ?? '') {
  const hashes = fingerprints.split(',').map((v) => v.trim().toUpperCase()).filter(Boolean);
  if (!hashes.length || hashes.some((v) => !/^(?:[A-F0-9]{2}:){31}[A-F0-9]{2}$/.test(v))) return null;
  return [{ relation: ['delegate_permission/common.handle_all_urls'], target: {
    namespace: 'android_app', package_name: 'com.linvuu.app', sha256_cert_fingerprints: [...new Set(hashes)],
  } }];
}

export function registrarAssetLinks(app: Express) {
  app.get('/.well-known/assetlinks.json', (_req, res) => {
    const dados = assetLinks();
    res.set('Cache-Control', 'no-store');
    // Nunca publicar fingerprint de debug/upload ou inventado para obter um 200.
    if (!dados) { res.status(503).json({ error: 'Certificado Play App Signing não configurado.' }); return; }
    res.json(dados);
  });
}
