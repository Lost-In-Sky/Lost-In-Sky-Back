require('dotenv').config();
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;

const defaultConfig = {
  database: DB_NAME,
  dialect: 'postgres',
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  username: DB_USERNAME,
  seederStorage: 'sequelize',
};

module.exports = {
  development: defaultConfig,
  test: defaultConfig,
  production: defaultConfig,
};
