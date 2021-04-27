'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        // name: 'Demo',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        // profilePhoto: null,
      },
      {
        username: 'SaraMarin',
        // name: 'Sara Marin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password2'),
        // profilePhoto: null,
      },
      {
        username: 'KyloFuentes',
        // name: 'Kylo Fuentes',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password3'),
        // profilePhoto: null,
      },
      {
        username: 'BrodyAdams',
        // name: 'Brody Adams',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password4'),
        // profilePhoto: null,
      },
      {
        username: 'EllieLogan',
        // name: 'Ellie Logan',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password5'),
        // profilePhoto: null,
      },
      {
        username: 'MichelleWilliams2',
        // name: 'Michelle Williams',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password6'),
        // profilePhoto: null,
      },
      {
        username: 'LouisBrown',
        // name: 'Louis Brown',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password7'),
        // profilePhoto: null,
      },
      {
        username: 'HarryPhillips',
        // name: 'Harry Phillips',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password8'),
        // profilePhoto: null,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
