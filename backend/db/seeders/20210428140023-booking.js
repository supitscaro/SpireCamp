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
    return queryInterface.bulkInsert('Bookings', [
      {
        start_date: "2021-05-10",
        end_date: "2021-05-14",
        user_id: 3,
        hostings_id: 3,
      },
      {
        start_date: "2021-05-12",
        end_date: "2021-05-14",
        user_id: 7,
        hostings_id: 5,
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
  }
};
