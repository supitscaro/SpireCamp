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
      },
      {
        name: 'Alaska' // 2
      },
      {
        name: 'Arizona' // 3
      },
      {
        name: 'Arkansas' // 4
      },
      {
        name: 'California' // 5
      },
      {
        name: 'Colorado' // 6
      },
      {
        name: 'Connecticut' // 7
      },
      {
        name: 'Delaware' // 8
      },
      {
        name: 'Florida' // 9
      },
      {
        name: 'Georgia' // 10
      },
      {
        name: 'Hawaii' // 11
      },
      {
        name: 'Idaho' // 12
      },
      {
        name: 'Illinois' // 13
      },
      {
        name: 'Indiana' // 14
      },
      {
        name: 'Iowa' // 15
      },
      {
        name: 'Kansas' // 16
      },
      {
        name: 'Kentucky' // 17
      },
      {
        name: 'Louisiana' // 18
      },
      {
        name: 'Maine' // 19
      },
      {
        name: 'Maryland' // 20
      },
      {
        name: 'Massachusetts' // 21
      },
      {
        name: 'Michigan' // 22
      },
      {
        name: 'Minnesota' // 23
      },
      {
        name: 'Mississippi' // 24
      },
      {
        name: 'Missouri' // 25
      },
      {
        name: 'Montana' // 26
      },
      {
        name: 'Nebraska' // 27
      },
      {
        name: 'Nevada' // 28
      },
      {
        name: 'New Hampshire' // 29
      },
      {
        name: 'New Jersey' // 30
      },
      {
        name: 'New Mexico' // 31
      },
      {
        name: 'New York' // 32
      },
      {
        name: 'North Carolina' // 33
      },
      {
        name: 'North Dakota' // 34
      },
      {
        name: 'Ohio' // 35
      },
      {
        name: 'Oklahoma' // 36
      },
      {
        name: 'Oregon' // 37
      },
      {
        name: 'Pennsylvania' // 38
      },
      {
        name: 'Rhode Island' // 39
      },
      {
        name: 'South Carolina' // 40
      },
      {
        name: 'South Dakota' // 41
      },
      {
        name: 'Tennessee' // 42
      },
      {
        name: 'Texas' // 43
      },
      {
        name: 'Utah' // 44
      },
      {
        name: 'Vermont' // 45
      },
      {
        name: 'Virginia' // 46
      },
      {
        name: 'Washington' // 47
      },
      {
        name: 'West Virginia' // 48
      },
      {
        name: 'Wisconsin' // 49
      },
      {
        name: 'Wyoming' // 50
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
