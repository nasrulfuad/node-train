'use strict';
const usersDemoData = [
  {
    id: '5d8c5c03424f56aa5ea75f1a',
    name: 'Dianna Sherman',
    email: 'diannasherman@pharmacon.com',
    phone: '+62 (981) 562-3776',
    gender: 0
  },
  {
    id: '5d8c5c033a46538610f23568',
    name: 'Mollie Cardenas',
    email: 'molliecardenas@pharmacon.com',
    phone: '+62 (915) 551-2414',
    gender: 0
  },
  {
    id: '5d8c5c039c3be98d5eb7933b',
    name: 'Ochoa Moore',
    email: 'ochoamoore@pharmacon.com',
    phone: '+62 (999) 543-2697',
    gender: 1
  },
  {
    id: '5d8c5c03527da918b330aece',
    name: 'Woodard Hodge',
    email: 'woodardhodge@pharmacon.com',
    phone: '+62 (983) 409-2571',
    gender: 1
  },
  {
    id: '5d8c5c03e1839166b57ccda5',
    name: 'Bird Sharpe',
    email: 'birdsharpe@pharmacon.com',
    phone: '+62 (867) 402-2307',
    gender: 1
  },
  {
    id: '5d8c5c035fc2e4b47dd772b1',
    name: 'Joyce Townsend',
    email: 'joycetownsend@pharmacon.com',
    phone: '+62 (972) 478-3438',
    gender: 0
  },
  {
    id: '5d8c5c0371f8403a8b6609d0',
    name: 'Mccray Hebert',
    email: 'mccrayhebert@pharmacon.com',
    phone: '+62 (853) 538-3717',
    gender: 1
  },
  {
    id: '5d8c5c033ed1d9fe42728777',
    name: 'Nichols Valentine',
    email: 'nicholsvalentine@pharmacon.com',
    phone: '+62 (807) 454-3515',
    gender: 1
  },
  {
    id: '5d8c5c033794fa43a48b6281',
    name: 'Gwen Mann',
    email: 'gwenmann@pharmacon.com',
    phone: '+62 (856) 584-2477',
    gender: 0
  },
  {
    id: '5d8c5c03c141493bb3a98938',
    name: 'Juliana Wiggins',
    email: 'julianawiggins@pharmacon.com',
    phone: '+62 (880) 548-3631',
    gender: 0
  },
  {
    id: '5d8c5c036823f7b5e76c12e3',
    name: 'Herman Jimenez',
    email: 'hermanjimenez@pharmacon.com',
    phone: '+62 (957) 479-3718',
    gender: 1
  },
  {
    id: '5d8c5c033674b6826f456a37',
    name: 'Cotton Miranda',
    email: 'cottonmiranda@pharmacon.com',
    phone: '+62 (871) 451-3660',
    gender: 1
  },
  {
    id: '5d8c5c03d2af3d6f894a7e24',
    name: 'Katrina Bolton',
    email: 'katrinabolton@pharmacon.com',
    phone: '+62 (806) 570-2520',
    gender: 0
  },
  {
    id: '5d8c5c039016448b23e793be',
    name: 'Angelia Dyer',
    email: 'angeliadyer@pharmacon.com',
    phone: '+62 (898) 502-3068',
    gender: 0
  },
  {
    id: '5d8c5c03813fd7f89ba9fd7e',
    name: 'Lenora Huff',
    email: 'lenorahuff@pharmacon.com',
    phone: '+62 (941) 466-3232',
    gender: 0
  },
  {
    id: '5d8c5c03d1a39bdbedbab7d8',
    name: 'Annmarie Spence',
    email: 'annmariespence@pharmacon.com',
    phone: '+62 (984) 467-2647',
    gender: 0
  },
  {
    id: '5d8c5c03b9730486a3eac8f0',
    name: 'Cleo Valencia',
    email: 'cleovalencia@pharmacon.com',
    phone: '+62 (996) 513-2663',
    gender: 0
  },
  {
    id: '5d8c5c03ee6f23bcd94a11b5',
    name: 'Mcknight Malone',
    email: 'mcknightmalone@pharmacon.com',
    phone: '+62 (976) 583-3419',
    gender: 1
  },
  {
    id: '5d8c5c03485a48d4cd1a59d3',
    name: 'Kathy Arnold',
    email: 'kathyarnold@pharmacon.com',
    phone: '+62 (830) 596-3820',
    gender: 0
  }
];
module.exports = {
  up: (queryInterface, Sequelize) => {
    usersDemoData.forEach(d => {
      queryInterface.bulkInsert(
        'users',
        [
          {
            id: d.id,
            name: d.name,
            email: d.email,
            phone_number: d.phone,
            gender: d.gender,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    });
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: '5d8c5c03424f56aa5ea75f1a',
          name: 'Nasrul',
          email: 'nasrul@email.com',
          phone_number: '+62 (828) 491-3286',
          gender: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {})
};
