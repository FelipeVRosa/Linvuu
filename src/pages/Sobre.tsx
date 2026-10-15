import { Link } from 'react-router-dom';
import '../livros.css';
import { EMAIL_OFICIAL } from '../config/site';
import { LOCALE } from '../i18n';
import { usePageTitle } from '../lib/usePageTitle';
import { AUTORES } from '../lib/livros';

/** Quem escreve a Linvuu: autoria, origem e método. Só em português (o servidor marca /en/sobre e /es/sobre com noindex). */
export default function Sobre() {
  usePageTitle('Quem escreve a Linvuu', 'A Linvuu é feita por Felipe Nascimento Rosa e Luiza Nascimento Rosa, matemáticos com experiência em linguística e ensino de idiomas. Conheça a autoria, a origem e o método.', ['pt-BR']);
  return (
    <div className="pagina lvr">
      <header className="lvr-topo">
        <p className="lv-kicker lv-kicker-esc">Sobre a Linvuu</p>
        <h1 className="pagina-h1">Quem escreve a Linvuu</h1>
        <p className="lead">A Linvuu é feita por Felipe Nascimento Rosa e Luiza Nascimento Rosa. Os textos, a revisão e a adaptação de todos os livros e aulas são de autoria deles, escritos a partir de pesquisa bibliográfica, e não copiados de nenhum método existente.</p>
        {LOCALE.codigo !== 'pt-BR' && <p className="lvr-nota" lang="pt-BR">Esta página está em português.</p>}
      </header>

      <section className="lvr-artigo" aria-labelledby="sobre-autores">
        <h2 id="sobre-autores" className="lvr-h2" style={{ marginTop: 0 }}>Os autores</h2>
        <ul className="lvr-grade" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, margin: '0 0 16px' }}>
          {AUTORES.map((a) => (
            <li key={a.id} id={a.id} className="lvr-cena" style={{ margin: 0 }}>
              <h3 className="lvr-h3" style={{ margin: '0 0 6px' }}>{a.nome}</h3>
              <p className="lvr-p" style={{ margin: 0, fontSize: 16 }}>Autoria, revisão e adaptação dos livros e das aulas.</p>
            </li>
          ))}
        </ul>
        <p className="lvr-p">Os dois são matemáticos de formação, com experiência em linguística, ensino de idiomas, inteligência artificial, teoria dos números e álgebra linear. Essa formação aparece no jeito de ensinar: regras explicadas com precisão, exemplos que testam a regra e atenção ao erro que cada estudante realmente comete.</p>

        <h2 className="lvr-h2">De onde vem a Linvuu</h2>
        <p className="lvr-p">A Linvuu continua, em formato digital, o trabalho do Instituto Valeeva Rosa, escola de idiomas de Felipe. A experiência de sala de aula, com alunos reais e os erros que se repetem de turma em turma, é a base dos livros.</p>

        <h2 className="lvr-h2">O método</h2>
        <p className="lvr-p"><strong>Parte do português.</strong> Cada capítulo começa por um hábito seu que o outro idioma não aceita, como dizer “tenho 30 anos” em inglês ou ler uma palavra francesa letra por letra. Quem sabe qual é o hábito corrige o erro em semanas, e não em anos.</p>
        <p className="lvr-p"><strong>Explica na sua língua.</strong> A explicação é em português, com a regra completa, as exceções e o erro típico. O idioma estudado aparece em frases curtas, diálogos e tabelas.</p>
        <p className="lvr-p"><strong>Tem som em cada frase.</strong> Os diálogos, as frases prontas e o vocabulário têm áudio, para treinar a pronúncia desde o primeiro dia.</p>
        <p className="lvr-p"><strong>Foi revisto por falantes nativos.</strong> Os livros contaram com a colaboração de mais de 30 falantes nativos dos idiomas ensinados.</p>

        <h2 className="lvr-h2">Transparência sobre o áudio</h2>
        <p className="lvr-p">As vozes do site são geradas por síntese de voz. Estamos migrando para vozes neurais de maior qualidade. Quando houver gravações de falantes nativos, o site avisará.</p>

        <h2 className="lvr-h2">Leia e fale com a gente</h2>
        <p className="lvr-p"><Link to="/livros">Leia os dois primeiros capítulos de cada livro</Link>, <Link to="/cursos">veja os cursos</Link> ou escreva para <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>
      </section>
    </div>
  );
}
