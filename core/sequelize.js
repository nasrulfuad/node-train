const Sequelize = require('sequelize')
require('./env')

module.exports = new Sequelize(
    process.env.SEQUELIZE_DATABASE,
    process.env.SEQUELIZE_USERNAME,
    process.env.SEQUELIZE_PASSWORD,
    {
        host: process.env.SEQUELIZE_HOST,
        dialect: 'mysql',
        port: Number(process.env.SEQUELIZE_PORT),
        logging: console.log,
        define: {
            hooks: {}
        }
    }
)
