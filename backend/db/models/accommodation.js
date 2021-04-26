'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Accommodation.associate = function (models) {
    // associations can be defined here
    Accommodation.belongsTo(models.Accommodations_List, { foreignKey: 'accommodations_id' })
    // Accommodation.belongsTo(models.Accommodation_List, { foreignKey: 'accommodations_id' });
  };
  return Accommodation;
};
