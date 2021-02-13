
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const { sequelize } = require('./database/models');
const routes = require('./routes');

const AppError = require('./commons/erros/AppError');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// error handlers
app.use(errors({}, 400));
app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: error.message || 'Internal Server Error',
  });
});

// Testando a conexão com o banco
const tesDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('A conexão foi estabelecida com sucesso!');
  } catch (err) {
    console.error('Não foi possivel conectar ao banco de dados', err);
  }
};

app.listen(3000, () => {
  tesDbConnection()
    .then(() => console.log('Servidor iniciado na porta 3000!'))
    .catch((err) => console.log(err));
});
