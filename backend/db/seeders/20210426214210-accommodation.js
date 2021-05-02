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
    return queryInterface.bulkInsert('Accommodations', [
      {
        icon: 'fas fa-volume-mute', // 1
        name: 'Tranquility',
        description: 'Locations with this accommodation have a private space that is isolated. Good for those needing peaceful, quiet time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-users', // 2
        name: 'Festive',
        description: 'Locations with this accommodation are full of activities, people, and lively. Good for those wanting to be surrounded by people.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-store', // 3
        name: 'Nearby Food Options',
        description: 'Locations with this accommodation are near places that offer food.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-mountain', // 4
        name: 'Nature Walks',
        description: 'Locations with this accommodation offer unique places for relaxing nature walks with beautiful scenery.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-map-signs', // 5
        name: 'Guided Tours',
        description: 'Locations with this accommodation offer guided tours of nearby nature spots.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icon: 'fas fa-spa', // 6
        name: 'Meditation',
        description: 'Locations with this accommodation offer meditation workshops in nature.',
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
    return queryInterface.bulkDelete('Accommodations', null, {});
  }
};
