'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hosting = sequelize.define('Hosting', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    locationDetails: DataTypes.STRING,
    states_id: DataTypes.INTEGER,
    owners_id: DataTypes.INTEGER
  }, {});
  Hosting.associate = function (models) {
    // associations can be defined here
    Hosting.hasMany(models.Reviews, { foreignKey: 'hostings_id' });
  };
  return Hosting;
};
