const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/node-express');

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar no banco de dados:', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`);
});
