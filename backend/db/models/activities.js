'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activities = sequelize.define('Activities', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Activities.associate = function (models) {
    // associations can be defined here
    Activities.hasMany(model.Activities_Lists, { foreignKey: 'activities_id' });
  };
  return Activities;
};
