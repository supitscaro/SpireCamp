'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities_Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostings_id: {
        type: Sequelize.INTEGER,
        references: { model: "Hostings" }
      },
      activities_id: {
        type: Sequelize.INTEGER,
        references: { model: "Activities" }
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
    return queryInterface.dropTable('Activities_Lists');
  }
};
