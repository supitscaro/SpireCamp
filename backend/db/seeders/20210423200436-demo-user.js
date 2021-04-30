'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition', // 1
        // name: 'Demo',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        // profilePhoto: null,
      },
      {
        username: 'SaraMarin', // 2
        // name: 'Sara Marin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password2'),
        // profilePhoto: null,
      },
      {
        username: 'KyloFuentes', // 3
        // name: 'Kylo Fuentes',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password3'),
        // profilePhoto: null,
      },
      {
        username: 'BrodyAdams', // 4
        // name: 'Brody Adams',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password4'),
        // profilePhoto: null,
      },
      {
        username: 'EllieLogan', // 5
        // name: 'Ellie Logan',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password5'),
        // profilePhoto: null,
      },
      {
        username: 'MichelleWilliams2', // 6
        // name: 'Michelle Williams',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password6'),
        // profilePhoto: null,
      },
      {
        username: 'LouisBrown', // 7
        // name: 'Louis Brown',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password7'),
        // profilePhoto: null,
      },
      {
        username: 'HarryPhillips', // 8
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password8'),
        // profilePhoto: null,
      },
      {
        username: 'JessicaBlack', // 9
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password9'),
        // profilePhoto: null,
      },
      {
        username: 'MelvinBradley', // 10
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password10'),
        // profilePhoto: null,
      },
      {
        username: 'AltonHenry', // 11
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password11'),
        // profilePhoto: null,
      },
      {
        username: 'OliviaHarper', // 12
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password12'),
        // profilePhoto: null,
      },
      {
        username: 'TraciDaniels', // 13
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password13'),
        // profilePhoto: null,
      },
      {
        username: 'BrookeVargas', // 14
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password12'),
        // profilePhoto: null,
      },
      {
        username: 'JohnOrtiz', // 15
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password13'),
        // profilePhoto: null,
      },
      {
        username: 'KathyTerry', // 16
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password14'),
        // profilePhoto: null,
      },
      {
        username: 'PabloBarnes', // 17
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password15'),
        // profilePhoto: null,
      },
      {
        username: 'BobbieJenkins', // 18
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password16'),
        // profilePhoto: null,
      },
      {
        username: 'AliciaFigueroa', // 19
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password17'),
        // profilePhoto: null,
      },
      {
        username: 'RosemarieMack', // 20
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password18'),
        // profilePhoto: null,
      },
      {
        username: 'HectorZimmerman', // 21
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password19'),
        // profilePhoto: null,
      },
      {
        username: 'RogerRice', // 22
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password20'),
        // profilePhoto: null,
      },
      {
        username: 'OrvilleDawson', // 23
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password21'),
        // profilePhoto: null,
      },
      {
        username: 'DanaHall', // 24
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password22'),
        // profilePhoto: null,
      },
      {
        username: 'JillWilliams', // 25
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password23'),
        // profilePhoto: null,
      },
      {
        username: 'AndresButler', // 26
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password24'),
        // profilePhoto: null,
      },
      {
        username: 'RosalieWheeler', // 27
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password24'),
        // profilePhoto: null,
      },
      {
        username: 'ShelleyDay', // 29
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password25'),
        // profilePhoto: null,
      },
      {
        username: 'SeanFrancis', // 29
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password26'),
        // profilePhoto: null,
      },
      {
        username: 'KentCurtis', // 30
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password27'),
        // profilePhoto: null,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
