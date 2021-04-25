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
    return queryInterface.bulkInsert('States', [
      {
        name: 'Alabama', // 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alaska', // 2
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arizona', // 3
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arkansas', // 4
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'California', // 5
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Colorado', // 6
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Connecticut', // 7
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delaware', // 8
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Florida', // 9
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Georgia', // 10
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hawaii', // 11
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Idaho', // 12
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Illinois', // 13
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indiana', // 14
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iowa', // 15
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kansas', // 16
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kentucky', // 17
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Louisiana', // 18
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maine', // 19
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maryland', // 20
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Massachusetts', // 21
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michigan', // 22
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Minnesota', // 23
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mississippi', // 24
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Missouri', // 25
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Montana', // 26
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nebraska', // 27
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nevada', // 28
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Hampshire', // 29
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Jersey', // 30
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Mexico', // 31
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New York', // 32
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Carolina', // 33
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Dakota', // 34
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ohio', // 35
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oklahoma', // 36
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oregon', // 37
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pennsylvania', // 38
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rhode Island', // 39
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Carolina', // 40
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Dakota', // 41
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tennessee', // 42
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Texas', // 43
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utah', // 44
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vermont', // 45
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Virginia', // 46
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Washington', // 47
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Virginia', // 48
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wisconsin', // 49
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wyoming', // 50
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
    return queryInterface.bulkDelete('States', null, {});
  }
};
