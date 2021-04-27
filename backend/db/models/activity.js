'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Activity.associate = function (models) {
    // associations can be defined here
    Activity.belongsTo(models.Activities_List, { foreignKey: 'activities_id' })
    Activity.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Activity;
};
