export default function(sequelize, DataTypes) {
  const FishType = sequelize.define('FishType', {
    name: DataTypes.STRING,
    count: DataTypes.BOOLEAN,
    zoneId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FishType;
};