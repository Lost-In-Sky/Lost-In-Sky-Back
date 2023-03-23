const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cottages extends Model {
    static associate(models) {}
  }
  Cottages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      capacity: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DOUBLE,
        defaultValue: 100000,
      },
      numberOfFloors: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      space: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'cottages', // name of the table in the database
      timestamps: false,
    }
  );
  return Cottages;
};
