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
        icon: 'fas fa-dove',
        name: 'Wildlife Watching',
        description: 'Enjoy the wildlife nearby your location.',
      },
      {
        icon: 'fas fa-swimmer',
        name: 'Swimming',
        description: '',
      },
      {
        icon: 'fas fa-spa',
        name: 'Spa',
        description: ''
      },
      {
        icon: 'fas fa-hiking',
        name: 'Hiking',
      },
      {
        icon: 'fas fa-biking',
        name: 'Biking'
      },
      {
        icon: 'fas fa-fish',
        name: 'Fishing'
      },
      {
        icon: 'fas fa-running',
        name: 'Running'
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
