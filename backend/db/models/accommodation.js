'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodations = sequelize.define('Accommodations', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Accommodations.associate = function (models) {
    // associations can be defined here

    let hostingMapping = {
      through: 'Accommodations_List',
      foreignKey: 'accommodations_id',
      otherKey: 'hostings_id'
    };

    Accommodations.belongsToMany(models.Hosting, hostingMapping);

    // Accommodation.belongsTo(models.Accommodations_List, { foreignKey: 'accommodations_id' })
    // Accommodation.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Accommodations;
};
