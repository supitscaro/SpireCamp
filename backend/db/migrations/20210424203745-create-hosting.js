'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hostings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      locationDetails: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      states_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'States' }
      },
      owners_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hostings');
  }
};