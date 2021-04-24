'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activities_List = sequelize.define('Activities_List', {
    hostings_id: DataTypes.INTEGER,
    activities_id: DataTypes.INTEGER
  }, {});
  Activities_List.associate = function(models) {
    // associations can be defined here
  };
  return Activities_List;
};