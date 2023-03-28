# node-express
Node + Express

Node.js é uma plataforma de desenvolvimento de software baseada na linguagem de programação JavaScript. Ele permite que os desenvolvedores escrevam aplicativos do lado do servidor usando JavaScript, que é uma linguagem geralmente associada ao desenvolvimento do lado do cliente em navegadores da web.

Express.js é um framework de aplicativo web para Node.js. Ele fornece uma série de recursos úteis para criar aplicativos web, incluindo roteamento, middleware e uma API de manipulação de solicitações e respostas HTTP.

Exemplo básico de como criar um CRUD com Node.js e Express.js usando PostgreSQL e o Sequelize como ORM:

1 - Instale o Node.js e o npm em seu sistema.
2 - Crie um novo diretório para o seu projeto.
3 - Abra o diretório do projeto em um terminal e execute o comando ´npm init´ para criar um arquivo package.json com as informações básicas do seu projeto.
4 - Instale as dependências do Express.js executando o comando ´npm install express --save´.
5 - Instale as dependências do Banco de dados escolhido ex: PostgreSQL executando o comando ´npm install — save sequelize ´
6 - Crie um modelo para seus dados usando o Sequelize, que irá criar as tabelas dentro do banco de dados.
7 - Crie as rotas CRUD para seu modelo. 
8 - Teste suas rotas CRUD usando um cliente HTTP como o Postman ou o cURL.