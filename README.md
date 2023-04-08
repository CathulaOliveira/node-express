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
- Gerenciamento de dependências: o gerenciamento de dependências no Node.js pode ser complicado e requer um certo conhecimento técnico para gerenciar as versões corretas de pacotes.
- Não é ideal para todas as situações: o Node.js e o Express são ideais para aplicativos leves e escaláveis, mas podem não ser a melhor escolha para aplicativos complexos ou que exigem alto desempenho em computação intensiva.

#### Principais características Node.js + Express:
- Utiliza JavaScript como linguagem de programação;
- Gerenciamento de dependências fácil com o NPM;
- Grande número de bibliotecas e pacotes de código aberto disponíveis;
- Abstração de rotas: o Express oferece um sistema de rotas simples, permitindo que você defina uma rota para cada URL da sua aplicação;
- Suporte a middleware: é possível definir middleware para manipular as requisições antes ou depois do processamento principal;
- Renderização de views: o Express permite que você renderize views HTML, facilitando a construção de páginas dinâmicas.

#### Servidores Web disponíveis:
- Apache HTTP Server - é um servidor HTTP de código aberto que pode ser usado com o Node.js por meio do módulo mod_proxy.
- Nginx - é um servidor web de alto desempenho e escalabilidade, que pode ser usado com o Node.js por meio do módulo ngx_http_proxy_module.
- Microsoft IIS - é um servidor web da Microsoft que pode ser usado com o Node.js por meio do módulo iisnode.
- Node.js HTTP - é um módulo interno do Node.js que pode ser usado para criar um servidor HTTP.
- Express.js - é um framework para Node.js que fornece uma camada de abstração para lidar com solicitações HTTP e facilita a criação de aplicativos web.

#### Exemplo de como criar um CRUD com Node.js e Express.js usando PostgreSQL e o Sequelize como ORM:
- Instale o Node.js e o npm em seu sistema.
- Crie um novo diretório para o seu projeto.
- Abra o diretório do projeto em um terminal e execute o comando ´npm init´ para criar um arquivo package.json com as informações básicas do seu projeto.
- Instale as dependências do Express.js executando o comando ´npm install express --save´.
- Instale as dependências do Banco de dados escolhido ex: PostgreSQL executando o comando ´npm install — save sequelize ´
- Crie um modelo para seus dados usando o Sequelize, que irá criar as tabelas dentro do banco de dados.
- Crie as rotas CRUD para seu modelo. 
- Teste suas rotas CRUD usando um cliente HTTP como o Postman ou o cURL.