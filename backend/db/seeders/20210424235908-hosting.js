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
    return queryInterface.bulkInsert('Hostings', [
      {
        name: 'Four Lakes Winery Vista',
        description: 'Take in a beautiful scenic view of four lakes in the state of Washington. This place offers full privacy and quiet spaces for those needing to get away for a while.',
        locationDetails: 'Located in Washington.',
        states_id: 47,
        owners_id: 4,
        cost: 80
      },
      {
        name: 'Glamping Glen',
        description: 'A cozy home away from, experience glamping in your own private neck of the woods. This tent comes complete with your own bed, dresser, and just a short walk to a clean bathroom.',
        locationDetails: 'Located in Texas.',
        states_id: 43,
        owners_id: 2,
        cost: 50
      },
      {
        name: 'Tiny House in Mountains',
        description: 'A unique cozy loft style designed house in the middle of the mountains. There are hiking areas nearby; great for those needing an escape from a busy life.',
        states_id: 33,
        owners_id: 6,
        cost: 85
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
