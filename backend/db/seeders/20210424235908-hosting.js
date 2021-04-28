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
        name: 'Four Lakes Winery Vista', // 1
        description: 'Take in a beautiful scenic view of four lakes in the state of Washington. This place offers full privacy and quiet spaces for those needing to get away for a while.',
        locationDetails: 'Located in Washington.',
        states_id: 47,
        user_id: 4,
        cost: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Glamping Glen', // 2
        description: 'A cozy home away from, experience glamping in your own private neck of the woods. This tent comes complete with your own bed, dresser, and just a short walk to a clean bathroom.',
        locationDetails: 'Located in Texas.',
        states_id: 43,
        user_id: 2,
        cost: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tiny House in Mountains', // 3
        description: 'A unique cozy loft style designed house in the middle of the mountains. There are hiking areas nearby; great for those needing an escape from a busy life.',
        locationDetails: 'Located in North Carolina',
        states_id: 33,
        user_id: 6,
        cost: 85,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Burro Ranch', // 4
        description: 'This location is in a private area and a perfect location to have fun adventures. The entire lot will be yours to explore during your time. Fire pits are available.',
        locationDetails: 'Located in Colorado',
        states_id: 6,
        user_id: 1,
        cost: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 5
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 10,
        user_id: 5,
        cost: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camping By The River', // 6
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 47,
        user_id: 3,
        cost: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 7
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 10,
        user_id: 8,
        cost: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 8
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 10,
        user_id: 9,
        cost: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 9
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 10,
        user_id: 10,
        cost: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 10
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in North Carolina',
        states_id: 10,
        user_id: 7,
        cost: 45,
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
    return queryInterface.bulkDelete('Hostings', null, {});
  }
};
