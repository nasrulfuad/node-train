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
        db[model.name.replace(/\b[a-z]/gi, char => char.toUpperCase())] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// (async function() {
//     await sequelize.sync({ force: true });
//     const password = await db.Users.hashPassword('password');
//     const [one, two, three] = await Promise.all([
//         db.Users.create({ name: 'Dianna Sherman', email: 'diannasherman@pharmacon.com', password, phone_number: '+62 (981) 562-3776', gender: 0 }),
//         db.Users.create({ name: 'Mollie Cardenas', email: 'molliecardenas@pharmacon.com', password, phone_number: '+62 (915) 551-2414', gender: 0 }),
//         db.Users.create({ name: 'Nichols Valentine', email: 'nicholsvalentine@pharmacon.com', password, phone_number: '+62 (807) 454-3515', gender: 1 })
//     ]);

//     await db.Profiles.create({ userId: one.id, address: 'usa' });
//     await db.Profiles.create({ userId: two.id, address: 'au' });
//     await db.Profiles.create({ userId: three.id, address: 'brn' });

//     const stories = [
//         { title: 'Node is great', authorId: one.id },
//         { title: 'I love Sequelize', authorId: two.id },
//         { title: 'Javascript Rocks', authorId: two.id }
//     ];

//     const [nodeStory, seqStory, jsStory] = await Promise.all(stories.map(story => db.Story.create(story)));

//     const reviews = [
//         { reviewerId: one.id, storyId: nodeStory.id, rating: 4.5 },
//         { reviewerId: three.id, storyId: nodeStory.id, rating: 3.5 }
//     ];

//     const [oneReview, threeReview] = await Promise.all(reviews.map(review => db.Reviews.create(review)));

//     const data = await db.Users.findAll({ include: [db.Story] })
//     console.log(data[0].get())
// })();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
