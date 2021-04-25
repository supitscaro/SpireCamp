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
      },
      {
        icon: 'fas fa-swimmer', // 2
        name: 'Swimming',
        description: '',
      },
      {
        icon: 'fas fa-spa', // 3
        name: 'Spa',
        description: ''
      },
      {
        icon: 'fas fa-hiking', // 4
        name: 'Hiking',
      },
      {
        icon: 'fas fa-biking', // 5
        name: 'Biking'
      },
      {
        icon: 'fas fa-fish', // 6
        name: 'Fishing'
      },
      {
        icon: 'fas fa-running', // 7
        name: 'Running'
      },
      {
        icon: 'fas fa-seedling', // 8
        name: 'Gardening'
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
  }
};
