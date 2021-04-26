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
    return queryInterface.bulkInsert('Reviews', [
      {
        title: 'Perfect getaway',
        review: 'Amazing place to get away for a few days. Beautiful scenery and relaxing activities to do nearby.',
        recommended: true,
        hostings_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Great experience!',
        review: 'Had a lot of fun seeing the four lakes nearby. Great spots to go hiking and take in the beautiful views.',
        recommended: true,
        hostings_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Awesome little tent',
        review: 'Awesome way of going camping and getting away for a few things. All the amenities you could need or want.',
        recommended: true,
        hostings_id: 2,
        user_id: 1,
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
