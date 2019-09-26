'use strict';
const usersDemoData = [
  {
    id: '5d8c5bba12ad73bc28b103c6',
    name: 'Macias Mckinney',
    email: 'maciasmckinney@pharmacon.com',
    phone: '+62 (984) 528-2943',
    gender: 1
  },
  {
    id: '5d8c5bbafcd825e839057479',
    name: 'Wanda Alvarado',
    email: 'wandaalvarado@pharmacon.com',
    phone: '+62 (832) 525-3286',
    gender: 1
  },
  {
    id: '5d8c5bba25e81370536ba6ab',
    name: 'Deena Trujillo',
    email: 'deenatrujillo@pharmacon.com',
    phone: '+62 (938) 588-2051',
    gender: 1
  },
  {
    id: '5d8c5bba920f3f62d02006fa',
    name: 'Rowena Guy',
    email: 'rowenaguy@pharmacon.com',
    phone: '+62 (945) 564-3420',
    gender: 1
  },
  {
    id: '5d8c5bba48572f3d03f7918c',
    name: 'Karyn Roy',
    email: 'karynroy@pharmacon.com',
    phone: '+62 (873) 469-3988',
    gender: 1
  },
  {
    id: '5d8c5bbae189e4e7b0357393',
    name: 'Knowles Campos',
    email: 'knowlescampos@pharmacon.com',
    phone: '+62 (903) 468-2637',
    gender: 1
  },
  {
    id: '5d8c5bba440a1dcb4223499e',
    name: 'Franks Stokes',
    email: 'franksstokes@pharmacon.com',
    phone: '+62 (825) 435-3313',
    gender: 1
  },
  {
    id: '5d8c5bbaba0522f7ce0d5530',
    name: 'Cara Dale',
    email: 'caradale@pharmacon.com',
    phone: '+62 (956) 577-3902',
    gender: 1
  },
  {
    id: '5d8c5bba62d30b8eeff40a3d',
    name: 'Anastasia Gutierrez',
    email: 'anastasiagutierrez@pharmacon.com',
    phone: '+62 (870) 574-3302',
    gender: 1
  },
  {
    id: '5d8c5bba63d7086748eae008',
    name: 'Traci Glover',
    email: 'traciglover@pharmacon.com',
    phone: '+62 (986) 550-3943',
    gender: 1
  },
  {
    id: '5d8c5bba6f414d8e20ce297b',
    name: 'Bianca Lindsay',
    email: 'biancalindsay@pharmacon.com',
    phone: '+62 (863) 412-2216',
    gender: 1
  },
  {
    id: '5d8c5bbac4eaf64db2ee07b8',
    name: 'Barrera Head',
    email: 'barrerahead@pharmacon.com',
    phone: '+62 (814) 524-3642',
    gender: 1
  },
  {
    id: '5d8c5bba3d100fbc8650194b',
    name: 'Rebekah Flowers',
    email: 'rebekahflowers@pharmacon.com',
    phone: '+62 (976) 591-2297',
    gender: 1
  },
  {
    id: '5d8c5bba49eef38c13ac1b0a',
    name: 'Felicia Mullins',
    email: 'feliciamullins@pharmacon.com',
    phone: '+62 (883) 447-3557',
    gender: 1
  },
  {
    id: '5d8c5bbaa26f2012892a7f6f',
    name: 'Shelly Hester',
    email: 'shellyhester@pharmacon.com',
    phone: '+62 (982) 480-3574',
    gender: 1
  },
  {
    id: '5d8c5bbae9b5d529da995708',
    name: 'Mccarty Quinn',
    email: 'mccartyquinn@pharmacon.com',
    phone: '+62 (882) 501-2021',
    gender: 1
  },
  {
    id: '5d8c5bbafc2daa544af3dc93',
    name: 'Boyle Greer',
    email: 'boylegreer@pharmacon.com',
    phone: '+62 (951) 548-2399',
    gender: 1
  },
  {
    id: '5d8c5bba7dbe7abc06c94e78',
    name: 'Lilia Swanson',
    email: 'liliaswanson@pharmacon.com',
    phone: '+62 (968) 402-3872',
    gender: 1
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
