'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Activities', [
      {
        icon: 'fa fa-dove', // 1
        name: 'Wildlife Watching',
        description: 'Enjoy the wildlife nearby your location.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-swimmer', // 2
        name: 'Swimming',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-spa', // 3
        name: 'Spa',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-hiking', // 4
        name: 'Hiking',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-biking', // 5
        name: 'Biking',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-fish', // 6
        name: 'Fishing',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-running', // 7
        name: 'Running',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fa fa-seedling', // 8
        name: 'Gardening',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
