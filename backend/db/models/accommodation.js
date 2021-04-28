'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Accommodation.associate = function (models) {
    // associations can be defined here

    let hostingMapping = {
      through: 'Accommodations_List',
      as: 'Acc',
      foreignKey: 'accommodations_id',
      otherKey: 'hostings_id'
    };

    Accommodation.belongsToMany(models.Accommodation, hostingMapping);

    // Accommodation.belongsTo(models.Accommodations_List, { foreignKey: 'accommodations_id' })
    // Accommodation.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Accommodation;
};
