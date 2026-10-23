import importlib.util
import tempfile
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location("lote", Path(__file__).with_name("kokoro_lote.py"))
lote = importlib.util.module_from_spec(spec)
spec.loader.exec_module(lote)

class LotesTest(unittest.TestCase):
    def csv(self, linhas):
        d = tempfile.TemporaryDirectory()
        self.addCleanup(d.cleanup)
        p = Path(d.name) / "lote.csv"
        p.write_text("arquivo_final,voz,locale,texto_falado\n" + linhas, encoding="utf-8")
        return p

    def test_nao_inventa_voz_francesa_masculina_ou_russa(self):
        r = lote.planejar(self.csv("12345678.mp3,m,fr-FR,Bonjour\n87654321.mp3,f,ru-RU,Привет\n"))
        self.assertTrue(all(x["voz_local"] is None for x in r))

    def test_preserva_texto_e_nome(self):
        r = lote.planejar(self.csv('12345678.mp3,f,es-ES,"¿Cómo está usted?"\n'))[0]
        self.assertEqual(r["texto_falado"], "¿Cómo está usted?")
        self.assertEqual(r["arquivo_final"], "12345678.mp3")

    def test_rejeita_caminho_e_arquivo_duplicado(self):
        with self.assertRaises(ValueError):
            lote.planejar(self.csv("../x.mp3,f,es-ES,Hola\n"))
        with self.assertRaises(ValueError):
            lote.planejar(self.csv("12345678.mp3,f,es-ES,Hola\n12345678.mp3,f,es-ES,Adiós\n"))

    def test_chave_muda_com_texto_voz_ou_modelo(self):
        r = {"texto_falado": "Hola", "locale": "es-ES", "voz_local": "ef_dora"}
        a = lote.chave(r, {"modelo": "a"})
        self.assertNotEqual(a, lote.chave({**r, "texto_falado": "Adiós"}, {"modelo": "a"}))
        self.assertNotEqual(a, lote.chave({**r, "voz_local": "em_alex"}, {"modelo": "a"}))
        self.assertNotEqual(a, lote.chave(r, {"modelo": "b"}))

if __name__ == "__main__":
    unittest.main()

