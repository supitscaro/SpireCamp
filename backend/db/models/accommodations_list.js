'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodations_List = sequelize.define('Accommodations_List', {
    hostings_id: DataTypes.INTEGER,
    accommodations_id: DataTypes.INTEGER
  }, {});
  Accommodations_List.associate = function (models) {
    // associations can be defined here
    Accommodations_List.hasMany(models.Accommodation, { foreignKey: 'accommodations_id' });
    Accommodations_List.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Accommodations_List;
};
