'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        name: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'SaraMarin',
        name: 'Sara Marin',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'KyloFuentes',
        name: 'Kylo Fuentes',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'BrodyAdams',
        name: 'Brody Adams',
        hashedPassword: bcrypt.hash(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'EllieLogan',
        name: 'Ellie Logan',
        hashedPassword: bcrypt.hash(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'MichelleWilliams2',
        name: 'Michelle Williams',
        hashedPassword: bcrypt.hash(faker.internet.password())
      },
      {
        email: faker.internet.email(),
        username: 'LouisBrown',
        name: 'Louis Brown',
        hashedPassword: bcrypt.hash(faker.internet.password())
      },
      {
        email: faker.internet.email(),
        username: 'HarryPhillips',
        name: 'Harry Phillips',
        hashedPassword: bcrypt.hash(faker.internet.password())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
