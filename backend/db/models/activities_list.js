'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activities_List = sequelize.define('Activities_List', {
    hostings_id: DataTypes.INTEGER,
    activities_id: DataTypes.INTEGER
  }, {});
  Activities_List.associate = function (models) {
    // associations can be defined here
    // Activities_List.hasMany(models.Activity, { foreignKey: 'activities_id' });
    // Activities_List.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Activities_List;
};
