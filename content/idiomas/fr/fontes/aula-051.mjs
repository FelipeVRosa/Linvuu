import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 51, titulo: 'Mídia, notícias e publicidade', nivel: 'b1',
  objetivo: 'Entender e contar notícias, reportar o que a mídia diz e analisar uma publicidade com vocabulário de imprensa.',
  nota: 'Você acompanha uma notícia em francês e consegue resumi-la. Próxima aula: meio ambiente e sociedade.',
  sessoes: [
    sessao('S1', 'Imprensa e notícias', [
      revisao(5, 'Responda em voz alta: «Parlez-moi de vous.» e «Pourquoi ce poste ?»'),
      palavras(8, [
        ['un journal', 'ẽ jurnal', 'um jornal', ''], ['un article', 'ẽn artikl', 'um artigo', ''], ['un titre', 'ẽ titr', 'uma manchete', ''], ['un journaliste', 'ẽ jurnalist', 'um jornalista', ''], ['l\'actualité', 'laktüalité', 'a atualidade', ''], ['les informations', 'lé zẽformasiõ', 'as notícias', ''], ['une chaîne', 'ün chén', 'um canal', ''], ['un reportage', 'ẽ röportaj', 'uma reportagem', ''],
      ]),
      gramatica(12, 'Selon le journal, on dit que', 'PASSO 1: citar a fonte: «selon le journal», «d\'après les experts», «à en croire la presse». PASSO 2: voz impessoal: «On dit que», «Il paraît que», «Il semble que» + indicativo: «Il paraît qu\'il va neiger.» PASSO 3: «Il semble que» + subjuntivo quando há dúvida: «Il semble qu\'il soit malade.» PASSO 4: condicional jornalístico (fato não confirmado): «Le ministre aurait démissionné.» «Il y aurait trois blessés.» PASSO 5: verbos de relato: «annoncer», «affirmer», «déclarer», «expliquer», «révéler»: «Le ministre a annoncé que…» PASSO 6: concordância dos tempos no relato (aula 40): «a déclaré qu\'il viendrait». PASSO 7: voz passiva comum nas manchetes: «Un homme a été retrouvé.», «Le pont sera réparé.» PASSO 8: manchetes usam presente histórico: «Le président démissionne.»', {
        tag: 'Mídia',
        comparacao: 'o português também usa o condicional na imprensa («o ministro teria renunciado»). O francês faz o mesmo, e é a marca da notícia ainda não confirmada: «aurait démissionné». Já a manchete em presente («démissionne») é só um recurso de estilo.',
        tabela: [
          { expressao: 'selon…', uso: 'citar a fonte', exemplo: 'Selon le journal, il va pleuvoir.' }, { expressao: 'il paraît que', uso: 'boato', exemplo: 'Il paraît qu\'il va neiger.' }, { expressao: 'condicional', uso: 'não confirmado', exemplo: 'Le ministre aurait démissionné.' }, { expressao: 'annoncer que', uso: 'anunciar', exemplo: 'Il a annoncé qu\'il partait.' }, { expressao: 'présent', uso: 'manchete', exemplo: 'Le président démissionne.' }, { expressao: 'passif', uso: 'fato sem agente', exemplo: 'Un homme a été retrouvé.' },
        ],
        erros: [['Il semble qu\'il est malade (dúvida).', 'Il semble qu\'il soit malade.', 'Dúvida: subjuntivo.'], ['Le ministre démissionnerait confirmé.', 'Le ministre aurait démissionné.', 'Condicional passado.'], ['D\'après de le journal…', 'D\'après le journal…', 'Sem «de».'], ['Il a annoncé qu\'il part demain.', 'Il a annoncé qu\'il partait le lendemain.', 'Concordância de tempos.']],
      }),
      producao(5, 'Conte em voz alta uma notícia que você leu hoje, citando a fonte.'),
    ]),
    sessao('S2', 'Reportar e resumir', [
      revisao(4, 'Reporte uma frase que alguém disse, com «a dit que».'),
      palavras(6, [
        ['résumer', 'rezümê', 'resumir', ''], ['un fait', 'ẽ fé', 'um fato', ''], ['une opinion', 'ün opiniõ', 'uma opinião', ''], ['un témoin', 'ẽ temuẽ', 'uma testemunha', ''], ['une enquête', 'ün ãkét', 'uma investigação / pesquisa', ''], ['un sondage', 'ẽ sõdaj', 'uma pesquisa de opinião', ''],
      ]),
      gramatica(12, 'Résumer un article', 'PASSO 1: estrutura de um resumo: tema → fatos principais → consequência. PASSO 2: «Cet article parle de…», «L\'auteur explique que…», «Le texte montre que…» PASSO 3: separar fato e opinião: «Les faits sont les suivants : …» «Selon l\'auteur, …» PASSO 4: números e dados: «Selon un sondage, 60 % des Français…» PASSO 5: conectar: «D\'abord…, ensuite…, enfin…» PASSO 6: «le fait que» pede subjuntivo: «Le fait qu\'il soit parti surprend tout le monde.» PASSO 7: pedir esclarecimento a um colega: «Qu\'est-ce que l\'article dit sur… ?» PASSO 8: concluir: «En résumé…», «Pour résumer…»', {
        tag: 'Mídia',
        comparacao: 'resumir em francês é uma habilidade escolar valorizada («résumé de texte»). Use a terceira pessoa e o presente, e nunca copie frases inteiras do original. Em português fazemos o mesmo, mas o francês prefere frases mais curtas.',
        tabela: [
          { expressao: 'cet article parle de', uso: 'tema', exemplo: 'Cet article parle du climat.' }, { expressao: 'l\'auteur explique que', uso: 'ideia principal', exemplo: 'L\'auteur explique que le climat change.' }, { expressao: 'selon un sondage', uso: 'dados', exemplo: 'Selon un sondage, 60 % des gens…' }, { expressao: 'le fait que', uso: 'fato + subjuntivo', exemplo: 'Le fait qu\'il soit parti…' }, { expressao: 'en résumé', uso: 'concluir', exemplo: 'En résumé, il faut agir.' }, { expressao: 'les faits sont', uso: 'listar fatos', exemplo: 'Les faits sont les suivants.' },
        ],
        erros: [['Le fait qu\'il est parti surprend.', 'Le fait qu\'il soit parti surprend.', '«Le fait que» + subjuntivo.'], ['Cet article parle sur le climat.', 'Cet article parle du climat.', '«Parler de».'], ['L\'auteur il explique que…', 'L\'auteur explique que…', 'Sem pronome duplicado.'], ['En résumer, il faut agir.', 'En résumé, il faut agir.', 'Substantivo.']],
      }),
      producao(8, 'Resuma em voz alta, em cinco frases, uma notícia ou um vídeo que você viu.'),
    ]),
    sessao('S3', 'A publicidade', [
      revisao(4, 'Dê a sua opinião sobre uma propaganda que você viu.'),
      palavras(5, [
        ['une publicité', 'ün püblisité', 'uma propaganda', ''], ['un slogan', 'ẽ slogã', 'um slogan', ''], ['une marque', 'ün mark', 'uma marca', ''], ['convaincre', 'kõvẽkr', 'convencer', ''], ['un consommateur', 'ẽ kõsomatör', 'um consumidor', ''],
      ]),
      gramatica(8, 'Persuadir e analisar', 'PASSO 1: imperativo publicitário: «Achetez maintenant !», «Profitez de nos offres !» PASSO 2: comparativos e superlativos: «le meilleur prix», «plus rapide que», «moins cher». PASSO 3: adjetivos de venda: «nouveau», «gratuit», «exclusif», «naturel». PASSO 4: analisar: «Cette publicité s\'adresse aux jeunes.» «Elle cherche à convaincre en utilisant…» PASSO 5: crítica: «Je trouve que cette publicité est trompeuse / exagérée / efficace.»', {
        tag: 'Mídia',
        comparacao: 'a publicidade francesa abusa do imperativo e do superlativo, como a brasileira. A palavra «gratuit» é lei: só pode ser usada se não há custo. «Gratis» não existe em francês: use «gratuit» ou «offert».',
        tabela: [
          { expressao: 'imperativo', uso: 'chamar', exemplo: 'Achetez maintenant !' }, { expressao: 'superlativo', uso: 'exagerar', exemplo: 'Le meilleur prix du marché.' }, { expressao: 'gratuit', uso: 'oferta', exemplo: 'Livraison gratuite.' }, { expressao: 's\'adresser à', uso: 'público', exemplo: 'Elle s\'adresse aux jeunes.' }, { expressao: 'trompeur', uso: 'crítica', exemplo: 'Cette publicité est trompeuse.' }, { expressao: 'efficace', uso: 'elogio', exemplo: 'Ce slogan est efficace.' },
        ],
        erros: [['Livraison gratis.', 'Livraison gratuite.', '«Gratis» não existe.'], ['Cette publicité adresse aux jeunes.', 'Cette publicité s\'adresse aux jeunes.', 'Verbo pronominal.'], ['C\'est le plus meilleur prix.', 'C\'est le meilleur prix.', 'Sem «plus».'], ['Acheter maintenant !', 'Achetez maintenant !', 'Imperativo.']],
      }),
      texto(8, 'Une publicité analysée', 'Cette publicité pour un yaourt s\'adresse aux familles. Le slogan, « Le goût de la nature », promet un produit naturel. On voit des enfants qui rient et des fruits frais. Cependant, selon une association de consommateurs, le yaourt contient beaucoup de sucre. Je trouve donc que cette publicité est trompeuse, même si elle est très efficace.', 'Esta propaganda de um iogurte se dirige às famílias. O slogan, «O sabor da natureza», promete um produto natural. Vemos crianças rindo e frutas frescas. No entanto, segundo uma associação de consumidores, o iogurte contém muito açúcar. Acho, portanto, que esta propaganda é enganosa, embora seja muito eficaz.', [['A quem a propaganda se dirige?', 'Às famílias.'], ['Qual é o slogan?', 'O sabor da natureza.'], ['Por que a autora acha a propaganda enganosa?', 'O iogurte contém muito açúcar.']]),
      producao(5, 'Analise em voz alta uma propaganda que você conhece, em quatro frases.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 51', [
      revisao(5, 'Resuma em voz alta uma notícia, com fonte, fato e conclusão.'),
      exercicios(20, [
        ouvir('Selon le journal, il va pleuvoir', ['Selon le journal, il va pleuvoir', 'Selon le journal, il a plu', 'Selon moi, il va pleuvoir'], 'Selon le journal, il va pleuvoir', 'Ouça «selon».'), ouvir('Le ministre aurait démissionné', ['Le ministre aurait démissionné', 'Le ministre a démissionné', 'Le ministre démissionnera'], 'Le ministre aurait démissionné', 'Condicional.'), ouvir('Cette publicité est trompeuse', ['Cette publicité est trompeuse', 'Cette publicité est efficace', 'Cette publicité est gratuite'], 'Cette publicité est trompeuse', 'Ouça «trompeuse».'),
        ditado('Il paraît qu\'il va neiger', 'Escreva: Il paraît qu\'il va neiger.'), ditado('Cet article parle du climat', 'Escreva: Cet article parle du climat.'), ditado('Livraison gratuite', 'Escreva: Livraison gratuite.'),
        mc('O condicional na imprensa indica:', ['fato não confirmado', 'fato certo', 'passado distante'], 'fato não confirmado', 'Aurait démissionné.'), mc('«Le fait que» pede:', ['subjuntivo', 'indicativo', 'infinitivo'], 'subjuntivo', 'Le fait qu\'il soit parti.'), mc('Como dizer «grátis» em uma propaganda?', ['gratuit', 'gratis', 'libre'], 'gratuit', '«Gratis» não existe.'), mc('«Une chaîne» na TV é:', ['um canal', 'uma corrente', 'um programa'], 'um canal', 'Canal de TV.'),
        lacuna('___ le journal, il va pleuvoir. (segundo)', ['Selon', 'Pour', 'De'], 'Selon', 'Fonte.'), lacuna('Cette publicité ___ aux jeunes. (se dirige)', ['s\'adresse', 'adresse', 'parle'], 's\'adresse', 'Verbo pronominal.'), lacuna('Il ___ qu\'il va neiger. (parece)', ['paraît', 'parait de', 'semble de'], 'paraît', 'Boato.'), lacuna('Cet article parle ___ climat.', ['du', 'sur le', 'le'], 'du', 'Parler de.'),
        ordem('Ordene: «Selon le journal, il va pleuvoir.»', ['Selon', 'le', 'journal,', 'il', 'va', 'pleuvoir'], 'Selon le journal, il va pleuvoir.', 'Fonte.'), ordem('Ordene: «Cet article parle du climat.»', ['Cet', 'article', 'parle', 'du', 'climat'], 'Cet article parle du climat.', 'Resumo.'),
        livre('Escreva em francês: Segundo o jornal, o ministro teria renunciado. Esta propaganda é enganosa.', 'Selon le journal, le ministre aurait démissionné. Cette publicité est trompeuse.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma notícia, com opinião.'),
    ]),
  ],
});
