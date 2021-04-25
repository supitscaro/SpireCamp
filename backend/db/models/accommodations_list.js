'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodations_List = sequelize.define('Accommodations_List', {
    hostings_id: DataTypes.INTEGER,
    accommodations_id: DataTypes.INTEGER
  }, {});
  Accommodations_List.associate = function (models) {
    // associations can be defined here
    Accommodations_List.belongsTo(models.Accommodations, { foreignKey: 'accommodations_id' });
    Accommodations_List.belongsTo(models.Hostings, { foreignKey: 'hostings_id' });
  };
  return Accommodations_List;
};
