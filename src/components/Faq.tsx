const ITENS = [
  { p: 'Quanto tempo preciso por dia?', r: 'Cada dia foi pensado para cerca de 15 minutos, divididos em três camadas: Comece aqui, Imersão e Prática. Você pode fazer mais, mas o desenho da trilha não exige.' },
  { p: 'O que é o "Comece aqui"?', r: 'É a primeira camada do dia: você ouve cada palavra com áudio nativo e lê junto. Serve para o idioma entrar pelo ouvido antes de qualquer regra.' },
  { p: 'Tem vídeo-aula?', r: 'Vídeos de apoio entram só nos pontos em que os alunos mais tropeçam. Em vez de um vídeo por dia, você tem uma explicação curta onde ela realmente faz diferença.' },
  { p: 'Preciso saber algo antes de começar?', r: 'Não. A trilha começa do zero, pelos sons do idioma. Se você já sabe algo, escolha seu nível na busca da página inicial e a trilha sugere um dia para começar.' },
  { p: 'Até que nível os 100 dias levam?', r: 'Do zero até uma base de B1, com autonomia para continuar sozinho. Não prometemos fluência em 100 dias: é o tempo de construir uma base sólida. Trilhas avançadas estão em planejamento.' },
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
