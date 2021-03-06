export default function(sequelize, DataTypes) {
  const Zone = sequelize.define('Zone', {
    label: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Zone;
};