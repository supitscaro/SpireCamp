'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Activities', [
      {
        icon: 'fas fa-dove', // 1
        name: 'Wildlife Watching',
        description: 'Enjoy the wildlife nearby your location.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-swimmer', // 2
        name: 'Swimming',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-spa', // 3
        name: 'Spa',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-hiking', // 4
        name: 'Hiking',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-biking', // 5
        name: 'Biking',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-fish', // 6
        name: 'Fishing',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-running', // 7
        name: 'Running',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-seedling', // 8
        name: 'Gardening',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
