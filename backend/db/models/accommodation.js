'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Accommodation.associate = function(models) {
    // associations can be defined here
  };
  return Accommodation;
};