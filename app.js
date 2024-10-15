const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const vagaRoutes = require('./routes/vagaRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use('/api', vagaRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
