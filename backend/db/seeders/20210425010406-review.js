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
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Great experience!',
        review: 'Had a lot of fun seeing the four lakes nearby. Great spots to go hiking and take in the beautiful views.',
        recommended: true,
        hostings_id: 1,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wonderful views',
        review: 'Awesome variety of wine. Friendly people, not super expensive, and friendly people around.',
        recommended: true,
        hostings_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Amazing location',
        review: 'Looked for a nice spot in the middle of the mountains with plenty of activities nearby. Perfect place.',
        recommended: true,
        hostings_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lovely location',
        review: 'Super peaceful location with beautiful views. Amazing getaway for the weekend. Doesn\'t get super busy either.',
        recommended: true,
        hostings_id: 2,
        user_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Awesome tent',
        review: 'Awesome way of going camping and getting away for a few things. All the amenities you could need or want.',
        recommended: true,
        hostings_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fun ranch',
        review: 'Came here with a few friends. Very quiet and secluded area.',
        recommended: true,
        hostings_id: 4,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Favorite spot',
        review: 'My favorite spot to go to on the weekends. Quite a few people gather here, but things never get overwhelming.',
        recommended: true,
        hostings_id: 7,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lovely views',
        review: 'Fun but quiet place for those looking for some time away. Great range of options and adventures',
        recommended: true,
        hostings_id: 1,
        user_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Loved this place',
        review: 'Full of activities nearby, amazing ways to de-stress, not too busy throughout the year.',
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
