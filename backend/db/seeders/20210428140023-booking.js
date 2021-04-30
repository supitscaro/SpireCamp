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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2021-05-12",
        end_date: "2021-05-14",
        user_id: 7,
        hostings_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2021-05-02",
        end_date: "2021-05-10",
        user_id: 2,
        hostings_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2021-05-28",
        end_date: "2021-06-05",
        user_id: 2,
        hostings_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2021-05-12",
        end_date: "2021-05-14",
        user_id: 9,
        hostings_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2021-04-12",
        end_date: "2021-04-20",
        user_id: 2,
        hostings_id: 4,
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
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
