'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config');
const db = {};

let mode;
switch (process.env.NODE_ENV) {
  case 'test':
    mode = config.test;
    break;
  default:
    mode = config.development;
    break;
}

const sequelize = new Sequelize(mode);

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    /*
      @desc     Convert model name to capitalize and remove 's' at the end word
      @sample   'users' to 'User'
    */
    db[model.name.replace(/\b[a-z]/gi, char => char.toUpperCase()).slice(0,-1)] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
