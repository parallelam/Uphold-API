const { Sequelize, DataTypes } = require('sequelize');
const configs = require('../config/configs')();
const db = {};
let sequelize;
let model;

configs.useEnvVariables
  ? (sequelize = new Sequelize(process.env[configs.useEnvVariables]))
  : (sequelize = new Sequelize(configs.database, configs.username, configs.password, {
      host: configs.dbHost,
      dialect: configs.dbDialect,
    }));

model = require('./SpotifyUsers')(sequelize, DataTypes);
db[model.name] = model;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
