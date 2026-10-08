import { Link } from 'react-router-dom';
import { Navegacao } from '../components/Navegacao';
import { usePageTitle } from '../lib/usePageTitle';
import { EMAIL_OFICIAL } from '../config/site';

const ATUALIZADO = '5 de outubro de 2026';

function Privacidade() {
  return (
    <>
      <h1 className="pagina-h1">Política de privacidade</h1>
      <p className="resultado">Última atualização: {ATUALIZADO}</p>
      <div className="texto-legal">
        <p>Esta política explica quais dados a Linvuu coleta, para quê, e quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018). Contato do responsável: <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>
        <h2>Quais dados coletamos</h2>
        <ul>
          <li><strong>Conta:</strong> nome, e-mail e senha. A senha é guardada pelo serviço de autenticação do Google (Firebase Authentication); a Linvuu não tem acesso a ela em texto.</li>
          <li><strong>Progresso:</strong> pontos (XP), sequência de estudo e aulas concluídas, guardados na sua conta. Parte do progresso também fica salva no seu navegador.</li>
          <li><strong>Newsletter:</strong> o e-mail que você informar, somente se você marcar a caixa de consentimento.</li>
          <li><strong>Dados técnicos:</strong> registros do servidor (como endereço IP e tipo de navegador), necessários para o site funcionar e se manter seguro.</li>
        </ul>
        <p>Hoje o site <strong>não usa cookies de publicidade nem ferramentas de análise de visitas</strong>. Se isso mudar, esta página será atualizada antes e pediremos o seu consentimento.</p>
        <h2>Para que usamos</h2>
        <ul>
          <li>Criar e manter a sua conta e salvar o seu progresso (execução do serviço que você pediu).</li>
          <li>Enviar novidades da Linvuu (consentimento; você pode cancelar a qualquer momento).</li>
          <li>Proteger o site contra abuso e corrigir falhas (legítimo interesse).</li>
        </ul>
        <h2>Com quem compartilhamos</h2>
        <p>Usamos fornecedores para operar o site: Google (Firebase: autenticação e banco de dados) e o provedor de hospedagem do site (Render). Eles tratam os dados em nosso nome. Não vendemos os seus dados.</p>
        <p>O áudio das aulas, por enquanto, usa a voz do seu próprio navegador. Esse processamento depende do seu aparelho e do seu navegador.</p>
        <h2>Por quanto tempo guardamos</h2>
        <p>Enquanto a sua conta existir ou até você pedir a exclusão. Dados de newsletter ficam até você cancelar.</p>
        <h2>Os seus direitos</h2>
        <p>Você pode pedir confirmação de que tratamos seus dados, acesso, correção, exclusão, portabilidade e informações sobre o compartilhamento, além de retirar o consentimento. Escreva para <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).</p>
        <h2>Menores de idade</h2>
        <p>Se você tem menos de 18 anos, use o site com o conhecimento de um responsável.</p>
        <h2>Mudanças</h2>
        <p>Podemos atualizar esta política. A data no topo mostra a versão mais recente.</p>
      </div>
    </>
  );
}

function Termos() {
  return (
    <>
      <h1 className="pagina-h1">Termos de uso</h1>
      <p className="resultado">Última atualização: {ATUALIZADO}</p>
      <div className="texto-legal">
        <p>Ao usar o site da Linvuu ou criar uma conta, você concorda com estes termos. Dúvidas: <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>
        <h2>O que a Linvuu oferece</h2>
        <p>Cursos de idiomas e de outras áreas, em texto, áudio e exercícios. Algumas aulas estão em produção ou em revisão e podem mudar. Cada aula mostra o seu status.</p>
        <h2>Resultados</h2>
        <p>A Linvuu entrega método e conteúdo. <strong>Não garantimos fluência, nível de proficiência ou prazo para atingi-los.</strong> O resultado depende do seu tempo de estudo e da prática fora do site.</p>
        <h2>Sua conta</h2>
        <p>Você é responsável por manter a senha em segurança e por usar dados verdadeiros no cadastro. Podemos suspender contas usadas para fraude ou abuso.</p>
        <h2>Uso do conteúdo</h2>
        <p>Os textos, áudios, exercícios, o design e a marca Linvuu pertencem à Linvuu. <strong>Todos os direitos reservados à Linvuu.</strong> Você pode estudar para uso pessoal. Não é permitido copiar, revender ou redistribuir o conteúdo sem autorização por escrito.</p>
        <h2>Plano pago e reembolso</h2>
        <p>As duas primeiras aulas de cada curso são grátis. Para continuar, há uma assinatura mensal de R$ 139, cobrada todo mês até você cancelar. O preço e a forma de pagamento aparecem antes da compra.</p>
        <p><strong>Reembolso de 7 dias:</strong> você pode pedir o reembolso integral em até 7 dias depois de contratar a assinatura, sem dar motivo, escrevendo para <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>. Esse prazo também é o direito de arrependimento previsto no Código de Defesa do Consumidor para compras feitas pela internet.</p>
        <p><strong>Cancelamento:</strong> você cancela quando quiser, sem multa. O acesso continua até o fim do período já pago, e não há nova cobrança depois disso.</p>
        <h2>Disponibilidade</h2>
        <p>Trabalhamos para manter o site no ar, mas ele pode ficar indisponível para manutenção ou por falhas fora do nosso controle.</p>
        <h2>Mudanças e foro</h2>
        <p>Podemos atualizar estes termos; a data no topo mostra a versão mais recente. Aplica-se a lei brasileira, e o consumidor pode propor ação no foro do seu domicílio.</p>
        <p>Veja também a <Link to="/privacidade">Política de privacidade</Link>.</p>
      </div>
    </>
  );
}

export function Legal({ tipo }: { tipo: 'privacidade' | 'termos' }) {
  const titulo = tipo === 'privacidade' ? 'Política de privacidade' : 'Termos de uso';
  usePageTitle(titulo, tipo === 'privacidade' ? 'Quais dados a Linvuu coleta, para quê e quais são os seus direitos pela LGPD.' : 'Regras de uso do site e dos cursos da Linvuu.');
  return (
    <div className="pagina">
      <Navegacao pai="/" trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: titulo }]} />
      {tipo === 'privacidade' ? <Privacidade /> : <Termos />}
    </div>
  );
}
