'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activities = sequelize.define('Activities', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Activities.associate = function(models) {
    // associations can be defined here
  };
  return Activities;
};