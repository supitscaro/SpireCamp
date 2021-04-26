'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  State.associate = function (models) {
    // associations can be defined here
    State.hasMany(models.Hosting, { foreignKey: 'states_id' });
  };
  return State;
};
