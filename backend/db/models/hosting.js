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
    Hosting.hasMany(models.Bookings, { foreignKey: 'hostings_id' });
    Hosting.hasMany(models.Activities_Lists, { foreignKey: 'hostings_id' });
    Hosting.belongsTo(model.States, { foreignKey: 'states_id' });
  };
  return Hosting;
};
