const ITENS = [
  { p: 'Quanto tempo preciso por dia?', r: 'Cada aula tem 4 sessões de cerca de 30 minutos, duas horas por aula. O ritmo é seu: dá para fazer uma sessão por dia e parar no fim de qualquer bloco. Neste momento o progresso fica salvo no seu navegador.' },
  { p: 'O que é o "Comece aqui"?', r: 'É a primeira camada do dia: você ouve cada palavra com áudio nativo e lê junto. Serve para o idioma entrar pelo ouvido antes de qualquer regra.' },
  { p: 'E os vídeos?', r: 'Vídeos de apoio entram só nos pontos em que os alunos mais tropeçam. Em vez de um vídeo por dia, você tem uma explicação curta onde ela realmente faz diferença.' },
  { p: 'Preciso saber algo antes de começar?', r: 'Não. A trilha começa do zero, pelos sons do idioma. Se você já sabe algo, escolha seu nível na busca da página inicial e a trilha sugere um dia para começar.' },
  { p: 'Até que nível a trilha leva?', r: 'A trilha de 100 dias começa do zero e foi desenhada para dar uma base sólida de iniciante. Não prometemos nível nem fluência em número fixo de dias: o que você alcança depende do tempo que dedica e da prática fora do site. Trilhas mais avançadas estão em planejamento.' },
  { p: 'O que significam "Em produção" e "Em breve"?', r: '"Em produção" quer dizer que já estamos escrevendo e gravando as aulas, mas elas ainda não estão todas publicadas. "Em breve" é um curso que ainda não começou a ser produzido. Cada aula mostra seu próprio status.' },
  { p: 'Os cursos de matemática e física já existem?', r: 'Estão em planejamento. Seguem o mesmo formato de 100 dias, com definição, exemplo resolvido e exercício com feedback.' },
];

export function Faq() {
  return (
    <div className="faq">
      {ITENS.map((i) => (
        <details key={i.p}>
          <summary>{i.p}</summary>
          <p>{i.r}</p>
        </details>
      ))}
    </div>
  );
}
