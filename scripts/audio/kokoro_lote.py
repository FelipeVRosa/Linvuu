#!/usr/bin/env python3
"""Geração local retomável. Padrão: planejar; --gerar --piloto produz amostras sem instalar no site."""
import argparse, csv, hashlib, json, os, re, subprocess, tempfile
from pathlib import Path

REVISAO = "f3ff3571791e39611d31c381e3a41a3af07b4987"
VOZES = {
    "pt-BR": {"codigo": "p", "m": "pm_alex", "f": "pf_dora"},
    "en-US": {"codigo": "a", "m": "am_michael", "f": "af_heart"},
    "en-GB": {"codigo": "b", "m": "bm_george", "f": "bf_emma"},
    "es-ES": {"codigo": "e", "m": "em_alex", "f": "ef_dora"},
    "fr-FR": {"codigo": "f", "f": "ff_siwis"},
    "it-IT": {"codigo": "i", "m": "im_nicola", "f": "if_sara"},
}
PARAMETROS = {"modelo": REVISAO, "kokoro": "0.9.4", "velocidade": 0.9, "hz": 24000, "kbps": 48}

def sha(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for bloco in iter(lambda: f.read(1024 * 1024), b""):
            h.update(bloco)
    return h.hexdigest()

def planejar(csv_path):
    with open(csv_path, encoding="utf-8-sig", newline="") as f:
        leitor = csv.DictReader(f)
        campos = {"arquivo_final", "voz", "locale", "texto_falado"}
        if not campos.issubset(leitor.fieldnames or []):
            raise ValueError("CSV sem campos obrigatórios")
        linhas = list(leitor)
    vistos = set()
    for n, r in enumerate(linhas, 1):
        nome = r["arquivo_final"]
        if not re.fullmatch(r"[0-9a-f]{8,64}\.mp3", nome):
            raise ValueError(f"Nome de arquivo inválido na linha {n}: {nome}")
        if nome in vistos:
            raise ValueError(f"Arquivo repetido no lote: {nome}")
        vistos.add(nome)
        if not r["texto_falado"].strip() or r["voz"] not in ("m", "f"):
            raise ValueError(f"Texto ou voz inválidos: {nome}")
        op = VOZES.get(r["locale"], {})
        r["voz_local"] = op.get(r["voz"])
        r["codigo"] = op.get("codigo")
        r["situacao"] = "candidato-a-piloto" if r["voz_local"] else "sem-voz-compativel"
    return linhas

def verificar_assets(model_dir):
    lock = json.loads((model_dir.parent / "assets-lock.json").read_text())
    if lock.get("revision") != REVISAO:
        raise ValueError("Revisão dos assets incompatível")
    for rel, esperado in lock["files"].items():
        p = model_dir / rel
        if not p.is_file() or sha(p) != esperado:
            raise ValueError("Asset ausente ou alterado: " + rel)
    return lock

def chave(r, hashes):
    dados = {**PARAMETROS, "texto": r["texto_falado"], "locale": r["locale"],
             "voz": r["voz_local"], "assets": hashes}
    return hashlib.sha256(json.dumps(dados, sort_keys=True, ensure_ascii=False).encode()).hexdigest()

def gerar(linhas, model_dir, saida):
    verificar_assets(model_dir)
    import importlib.metadata
    dependencias = model_dir.parent / "requirements-lock-linux-py312.txt"
    for linha in dependencias.read_text().splitlines():
        if "==" in linha:
            nome, versao = linha.split("==", 1)
            if importlib.metadata.version(nome) != versao:
                raise ValueError("Dependência diferente do backup: " + nome)
    os.environ["HF_HUB_OFFLINE"] = "1"
    os.environ["TRANSFORMERS_OFFLINE"] = "1"
    import socket
    def sem_rede(*args, **kwargs):
        raise RuntimeError("Geração offline: conexão de rede bloqueada")
    socket.socket.connect = sem_rede
    import numpy as np
    import soundfile as sf
    import torch
    from kokoro import KModel, KPipeline
    torch.set_num_threads(2)
    modelo = KModel(repo_id="hexgrad/Kokoro-82M", config=str(model_dir / "config.json"),
                    model=str(model_dir / "kokoro-v1_0.pth")).eval().to("cpu")
    pipelines = {}
    saida.mkdir(parents=True, exist_ok=True)
    manifesto = saida / "manifesto.json"
    registros = json.loads(manifesto.read_text()) if manifesto.exists() else {}
    erros = []
    hashes_modelo = {p: sha(model_dir / p) for p in ["config.json", "kokoro-v1_0.pth"]}
    hashes_modelo["dependencias"] = sha(dependencias)
    for r in linhas:
        nome = r["arquivo_final"]
        try:
            if not r["voz_local"]:
                raise ValueError("Nenhuma voz aprovada para este locale/gênero; não substituir automaticamente")
            voz = model_dir / "voices" / (r["voz_local"] + ".pt")
            hashes = {**hashes_modelo, "voz": sha(voz)}
            identidade = chave(r, hashes)
            alvo = saida / nome
            antigo = registros.get(nome)
            if antigo and antigo.get("chave") == identidade and alvo.exists() and sha(alvo) == antigo.get("sha256"):
                print("reutilizado", nome, flush=True)
                continue
            if alvo.exists():
                raise ValueError("Arquivo já existe e não corresponde ao manifesto; preservar e usar outra pasta")
            if r["codigo"] not in pipelines:
                pipelines[r["codigo"]] = KPipeline(lang_code=r["codigo"], repo_id="hexgrad/Kokoro-82M", model=modelo, device="cpu")
            pipeline = pipelines[r["codigo"]]
            # Preflight conservador: rejeita texto longo em vez de truncar silenciosamente.
            if len(r["texto_falado"]) > 400:
                raise ValueError("Texto longo: requer segmentação e revisão próprias antes de gerar")
            if r["codigo"] not in "ab":
                fonemas, _ = pipeline.g2p(r["texto_falado"])
                if len(fonemas) > 500:
                    raise ValueError("Texto excede limite seguro de fonemas")
            partes = list(pipeline(r["texto_falado"], voice=str(voz), speed=0.9))
            if any(len(p.phonemes) >= 510 for p in partes):
                raise ValueError("Possível truncamento de fonemas")
            som = np.concatenate([p.audio.numpy() for p in partes if p.audio is not None])
            if not len(som) or not np.isfinite(som).all() or np.max(np.abs(som)) < 0.001:
                raise ValueError("Áudio vazio, inválido ou silencioso")
            # Limita silêncio externo a 0,2 s sem mudar a velocidade ou remover pausas internas.
            ativos = np.flatnonzero(np.abs(som) > 0.001)
            som = som[max(0, int(ativos[0])-4800):min(len(som), int(ativos[-1])+4801)]
            if np.max(np.abs(som)) > 0.98:
                som = som * (0.98 / np.max(np.abs(som)))
            with tempfile.TemporaryDirectory(dir=saida) as tmp:
                wav = Path(tmp) / "audio.wav"; mp3 = Path(tmp) / "audio.mp3"
                sf.write(wav, som, 24000, subtype="PCM_16")
                subprocess.run(["ffmpeg", "-v", "error", "-nostdin", "-y", "-i", str(wav),
                                "-ac", "1", "-ar", "24000", "-b:a", "48k", str(mp3)], check=True)
                os.replace(mp3, alvo)
            registros[nome] = {"chave": identidade, "sha256": sha(alvo), "voz": r["voz_local"],
                               "locale": r["locale"], "segundos": len(som)/24000, "piloto": True,
                               "aprovado_para_producao": False}
            parcial = manifesto.with_suffix(".tmp")
            parcial.write_text(json.dumps(registros, ensure_ascii=False, indent=2))
            os.replace(parcial, manifesto)
            print("gerado", nome, flush=True)
        except Exception as erro:
            erros.append({"arquivo": nome, "erro": str(erro)})
            print("pendente", nome, str(erro), flush=True)
    (saida / "observacoes.json").write_text(json.dumps(erros, ensure_ascii=False, indent=2))
    return erros

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("csv", type=Path)
    p.add_argument("--modelo", type=Path)
    p.add_argument("--saida", type=Path)
    p.add_argument("--inicio", type=int, default=1)
    p.add_argument("--limite", type=int, default=150)
    p.add_argument("--gerar", action="store_true")
    p.add_argument("--piloto", action="store_true")
    a = p.parse_args()
    if a.inicio < 1 or not 1 <= a.limite <= 150:
        p.error("Use início >= 1 e limite entre 1 e 150")
    linhas = planejar(a.csv)
    parte = linhas[a.inicio-1:a.inicio-1+a.limite]
    print(json.dumps({"total_csv": len(linhas), "selecionados": len(parte),
                     "caracteres_csv": sum(len(r["texto_falado"]) for r in linhas),
                     "sem_voz_nesta_parte": sum(not r["voz_local"] for r in parte)}, ensure_ascii=False))
    if a.gerar:
        if not a.piloto or not a.modelo or not a.saida:
            p.error("Nesta versão apenas pilotos: use --gerar --piloto --modelo PASTA --saida PASTA")
        if gerar(parte, a.modelo.resolve(), a.saida.resolve()):
            raise SystemExit(1)

if __name__ == "__main__":
    main()

