const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();

  const username = process.env.SEQUELIZE_USERNAME;
  const password = process.env.SEQUELIZE_PASSWORD;
  const database = process.env.SEQUELIZE_DB;
  const dbPort = process.env.SEQUELIZE_PORT;
  const dbDialect = process.env.SEQUELIZE_DIALECT;
  const appHost = process.env.APP_HOST;
  const appPort = process.env.APP_PORT;
  const dbSyncConfig = {};
  let dbSeed;
  let environment;
  let useEnvVariables;
  process.env.DB_GENERATE_SEED ? (dbSeed = process.env.DB_GENERATE_SEED) : (dbSeed = false);
  process.env.NODE_ENV ? (environment = process.env.NODE_ENV) : (environment = 'local');
  process.env.DB_FORCE_SYNC ? (dbSyncConfig['force'] = process.env.DB_FORCE_SYNC) : (dbSyncConfig['force'] = false);
  process.env.DB_TRANSACTION_LOGGING === false
    ? (dbSyncConfig['logging'] = false)
    : (dbSyncConfig['logging'] = (text) => {
        console.log(text);
      });
  process.env.use_env_variable ? (useEnvVariables = process.env.use_env_variable) : (useEnvVariables = null);
  return {
    environment,
    username,
    password,
    database,
    dbPort,
    dbDialect,
    appHost,
    appPort,
    useEnvVariables,
    dbSyncConfig,
    dbSeed,
  };
};
