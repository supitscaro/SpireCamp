'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Accommodation.associate = function (models) {
    // associations can be defined here
    Accommodation.hasMany(model.Accommodation_Lists, { foreignKey: 'activities_id' });
  };
  return Accommodation;
};
