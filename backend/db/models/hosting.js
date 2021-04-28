'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hosting = sequelize.define('Hosting', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    locationDetails: DataTypes.STRING,
    states_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Hosting.associate = function (models) {
    // associations can be defined here

    let activitiesMapping = {
      through: 'Activities_List',
      as: 'Activities',
      foreignKey: 'hostings_id',
      otherKey: 'activities_id'
    };

    let accommodationsMapping = {
      through: 'Accommodations_List',
      as: 'Accomm_List',
      foreignKey: 'hostings_id',
      otherKey: 'accommodations_id'
    }

    Hosting.belongsToMany(models.Activity, activitiesMapping);
    Hosting.belongsToMany(models.Accommodation, accommodationsMapping);

    Hosting.hasMany(models.Review, { foreignKey: 'hostings_id' });
    Hosting.hasMany(models.Booking, { foreignKey: 'hostings_id' });
    Hosting.hasMany(models.Activities_List, { foreignKey: 'hostings_id' });
    // Hosting.hasMany(models.Activity, { foreignKey: 'hostings_id' });
    // Hosting.hasMany(models.Accommodations_List, { foreignKey: 'hostings_id' });
    // Hosting.hasMany(models.Accommodation, { foreignKey: 'hostings_id' });
    Hosting.belongsTo(models.State, { foreignKey: 'states_id' });
    Hosting.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Hosting;
};
