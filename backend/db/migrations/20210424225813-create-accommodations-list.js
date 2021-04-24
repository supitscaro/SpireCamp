'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accommodations_Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostings_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Hostings" }
      },
      accommodations_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Accommodations" }
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
    return queryInterface.dropTable('Accommodations_Lists');
  }
};
