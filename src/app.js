const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/index.js');

const { sequelize } = require('./models');

const app = express();
const port = 2000;

// app.use(
//   cors({
//     origin: ['*','http://localhost:8080/*', 'http://localhost:3001'],
//   })
// );

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/', router);

app.listen(port, async () => {
  console.log(`App running on port http://localhost:${port}/`);
  try {
    await sequelize.authenticate();
    console.log('Database Connected!');
  } catch (error) {
    throw new InternalError('Unable to connect to the database', error);
  }
});



module.exports = { app };
