'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    recommended: DataTypes.BOOLEAN,
    hostings_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
    Review.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Review;
};
