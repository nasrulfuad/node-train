'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const config = require(__dirname + '/../config/config')
const db = {}

let mode
switch (process.env.NODE_ENV) {
  case 'test':
    mode = config.test
    break
  default:
    mode = config.development
    break
}

const sequelize = new Sequelize(mode)

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
