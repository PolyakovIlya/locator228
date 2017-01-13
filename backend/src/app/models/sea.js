'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sea = sequelize.define('Sea', {
    label: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    radius: DataTypes.INTEGER,
    deep: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sea;
};