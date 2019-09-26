const path = require('path');
const dotenv = require('dotenv');

// Load env
dotenv.config();

let pathFile;
switch (process.env.NODE_ENV) {
	case 'test':
		pathFile = path.join(__dirname, '..', '.env.test');
		break;
	case 'production':
		pathFile = path.join(__dirname, '..', '.env.prod');
		break;
	default:
		pathFile = path.join(__dirname, '..', '.env.dev');
		break;
}

dotenv.config({ path: pathFile });

const config = {};

config.development = {
	username: process.env.SEQUELIZE_USERNAME,
	password: process.env.SEQUELIZE_PASSWORD,
	database: process.env.SEQUELIZE_DATABASE,
	host: process.env.SEQUELIZE_HOST,
	dialect: 'mysql'
};

config.test = {
	username: process.env.SEQUELIZE_USERNAME,
	password: process.env.SEQUELIZE_PASSWORD,
	database: process.env.SEQUELIZE_DATABASE,
	host: process.env.SEQUELIZE_HOST,
	dialect: 'mysql'
};

module.exports = config;
