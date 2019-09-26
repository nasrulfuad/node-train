const path = require('path');
const dotenv = require('dotenv');

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
}

dotenv.config({ path: pathFile });
