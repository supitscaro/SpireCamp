'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    hostings_id: DataTypes.INTEGER
  }, {});
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
    Booking.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Booking;
};
