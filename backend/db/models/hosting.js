'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hosting = sequelize.define('Hosting', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    locationDetails: DataTypes.STRING,
    states_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING,
  }, {});
  Hosting.associate = function (models) {
    // associations can be defined here

    let activitiesMapping = {
      through: 'Activities_List',
      foreignKey: 'hostings_id',
      otherKey: 'activities_id'
    };

    let accommodationsMapping = {
      through: 'Accommodations_List',
      foreignKey: 'hostings_id',
      otherKey: 'accommodations_id'
    }

    let bookingMapping = {
      through: 'Booking',
      as: 'Bookings',
      foreignKey: 'hostings_id',
      otherKey: 'user_id'
    };

    Hosting.belongsToMany(models.Activity, activitiesMapping);
    Hosting.belongsToMany(models.Accommodations, accommodationsMapping);
    Hosting.belongsToMany(models.User, bookingMapping);

    Hosting.hasMany(models.Review, { foreignKey: 'hostings_id' });
    Hosting.hasMany(models.Activities_List, { foreignKey: 'hostings_id' });
    Hosting.hasMany(models.Accommodations_List, { foreignKey: 'hostings_id' });
    Hosting.belongsTo(models.State, { foreignKey: 'states_id' });
    Hosting.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Hosting;
};
