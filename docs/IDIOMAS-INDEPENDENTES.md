# Idiomas independentes

A interface vem da URL (/, /en, /es). O curso/idioma estudado vem da rota (/curso/de etc.) e continua identificando áudio, progresso e acesso. A explicação vem de preferência por curso, com padrão no idioma original do material: português para os seis idiomas estrangeiros e inglês para o curso br.

O seletor aparece na aula e só habilita as traduções listadas para aquela aula. O carregador recebe explicitamente a explicação, devolve metadados com idioma solicitado/efetivo e mantém a versão original sinalizada quando a tradução falta. O navegador sem armazenamento mantém a escolha na tela atual. A preferência não é sincronizada com a conta nesta rodada.

O campo legado Locale.explicacao continua existindo como público editorial das páginas públicas, SEO e checkout; não é mais a origem da escolha pedagógica. A vitrine pública permanece organizada por público. Links diretos para aulas de br deixam de mudar a interface obrigatoriamente para inglês. Não foram criadas traduções ou novos materiais. Livros mantêm suas edições atuais: este seletor cobre aulas e consulta de gramática, não traduz o texto dos livros.

Validação: testar-idiomas-ensino.ts, testar-carregamento-idiomas.mjs (21 combinações reais gratuitas), TypeScript e build web. Teste visual interativo, login/assinatura real e compilação/aparelho Android não realizados nesta rodada. PR #263 não alterado; requer integração posterior com sua camada mobile.

O cache/progresso continua por idioma estudado e sessão. Remontagem da aula após a troca conserva o progresso salvo. IDs, nomes de áudio, gabaritos e permissões não mudam. Chamadas privadas continuam enviando o token Firebase e o servidor conserva a decisão de acesso.
