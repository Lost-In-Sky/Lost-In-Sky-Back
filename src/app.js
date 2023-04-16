const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

const router = require('./routes/index.js');

const { sequelize } = require('./models');

const app = express();
const port = 2000;

app.use(
  cors({
    origin: ['*','http://localhost:3000/*'],
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cookieSession({
    name: 'lostinsky-session',
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true,
  })
);

app.use('/', router);
app.get('/', (request, response) => {
  response
    .status(200)
    .json({ message: 'Server is running properly', status: 200 });
});

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
