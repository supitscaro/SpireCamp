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
    return queryInterface.bulkInsert('Accommodations_Lists', [
      {
        hostings_id: 2,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 1,
        accommodations_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        accommodations_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        accommodations_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        accommodations_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        accommodations_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 5,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 5,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 5,
        accommodations_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        accommodations_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        accommodations_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        accommodations_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        accommodations_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        accommodations_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        accommodations_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        accommodations_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        accommodations_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        accommodations_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        accommodations_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        accommodations_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Accommodations_Lists', null, {});
  }
};
