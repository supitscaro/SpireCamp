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
    return queryInterface.bulkInsert('Activities_Lists', [
      {
        hostings_id: 1,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 1,
        activities_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 1,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 1,
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
  }
};
