const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRouter = require('./src/routes/router');

app.use(bodyParser.json());
app.use('/users', usersRouter);


app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`);
});