# Node + Express

### Node.js
Node.js é um ambiente de execução de JavaScript. Ele permite que os desenvolvedores escrevam aplicativos do lado do servidor usando JavaScript, que é uma linguagem geralmente associada ao desenvolvimento do lado do cliente em navegadores da web.

### Express
Express é um framework de aplicativo web para Node.js. Ele fornece uma série de recursos úteis para criar aplicativos web, incluindo roteamento, middleware e uma API de manipulação de solicitações e respostas HTTP.

#### Tipo de licença de software:
O Node.js e o Express são licenciados sob a licença MIT, que é uma licença de software livre e de código aberto. Isso significa que os desenvolvedores têm a liberdade de usar, modificar e distribuir o sem restrições significativas.

#### Responsáveis pelo desenvolvimento:
O Node.js é um projeto de código aberto mantido pela Node.js Foundation e por uma comunidade de desenvolvedores em todo o mundo.
Já o Express é mantido pela comunidade de desenvolvedores do Node.js. Embora o projeto seja hospedado no GitHub e aceite contribuições da comunidade, não há uma única entidade ou organização responsável pelo desenvolvimento do Express.

#### Vantagens de utilizar Node.js com Express:
- Velocidade e desempenho: o Node.js é conhecido por ser uma plataforma de alto desempenho e escalabilidade, sendo capaz de lidar com uma grande quantidade de conexões simultâneas de forma rápida e eficiente. O Express, por sua vez, é construído em cima do Node.js e é uma das opções mais populares para desenvolvimento web em Node.js.
- Flexibilidade: o Node.js é uma plataforma extremamente flexível, permitindo que os desenvolvedores criem aplicações web, aplicações de linha de comando, serviços de rede, entre outras coisas. O Express é uma biblioteca minimalista, o que significa que os desenvolvedores têm a flexibilidade de escolher e implementar apenas as funcionalidades necessárias para sua aplicação.
- Comunidade ativa: tanto o Node.js quanto o Express possuem comunidades ativas e engajadas, com muitos recursos disponíveis, incluindo documentação abrangente, tutoriais, exemplos de código e bibliotecas de terceiros.
- Suporte a APIs: o Node.js e o Express são frequentemente usados para criar APIs RESTful, tornando-os uma opção popular para desenvolvedores que precisam criar serviços de backend para aplicativos móveis ou web.
- É possível utilizar JavaScript tanto no front-end quanto no back-end, o que permite a utilização de um mesmo conhecimento em toda a stack da aplicação;

#### Devantagens:
- Problemas de segurança: como o Node.js e o Express são relativamente novos, algumas vulnerabilidades ainda estão sendo descobertas e corrigidas.
- Não é ideal para todas as situações: o Node.js e o Express são ideais para aplicativos leves e escaláveis, mas podem não ser a melhor escolha para aplicativos complexos ou que exigem alto desempenho em computação intensiva.

#### Principais características Node.js + Express:
- Utiliza JavaScript como linguagem de programação;
- Gerenciamento de dependências fácil com o NPM;
- Grande número de bibliotecas e pacotes de código aberto disponíveis;
- Abstração de rotas: o Express oferece um sistema de rotas simples, permitindo que você defina uma rota para cada URL da sua aplicação;
- Suporte a middleware: é possível definir middleware para manipular as requisições antes ou depois do processamento principal;
- Renderização de views: o Express permite que você renderize views HTML, facilitando a construção de páginas dinâmicas.

#### Servidores Web disponíveis:
- Heroku: uma plataforma de hospedagem em nuvem que oferece suporte para Node.js e outras linguagens de programação. O plano gratuito inclui 512 MB de RAM e 550 horas de uso mensal.
- AWS Elastic Beanstalk: um serviço da Amazon Web Services que permite hospedar aplicativos em vários linguagens, incluindo Node.js. O plano gratuito inclui 750 horas de uso mensal para uma instância do Amazon EC2 t2.micro.
- Google Cloud Platform: um serviço de nuvem oferecido pelo Google que permite hospedar aplicativos em várias linguagens de programação, incluindo Node.js. O plano gratuito inclui US$ 300 em créditos de uso livre durante o primeiro ano.
- Firebase Hosting: um serviço de hospedagem para aplicativos móveis e web do Google. O Firebase Hosting suporta hospedagem para aplicativos Node.js, bem como vários outros idiomas. O plano gratuito inclui hospedagem para sites estáticos com largura de banda ilimitada e 1 GB de armazenamento.
- Microsoft Azure: um serviço de nuvem oferecido pela Microsoft que suporta vários idiomas de programação, incluindo Node.js. O plano gratuito inclui um crédito de US$ 200 para uso em qualquer serviço do Azure durante o primeiro mês, além de 12 meses de serviços gratuitos limitados.

#### Exemplo de como criar um CRUD com Node.js e Express.js usando PostgreSQL e o Sequelize como ORM:
- Instale o Node.js e o npm em seu sistema.
- Crie um novo diretório para o seu projeto.
- Abra o diretório do projeto em um terminal e execute o comando ´npm init´ para criar um arquivo package.json com as informações básicas do seu projeto.
- Instale as dependências do Express.js executando o comando ´npm install express --save´.
- Instale as dependências do Banco de dados escolhido ex: PostgreSQL executando o comando ´npm install — save sequelize ´
- Crie um modelo para seus dados usando o Sequelize, que irá criar as tabelas dentro do banco de dados.
- Crie as rotas CRUD para seu modelo. 
- Teste suas rotas CRUD usando um cliente HTTP como o Postman ou o cURL.
