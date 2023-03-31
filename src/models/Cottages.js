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
        allowNull: false,
      },
      capacity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 100000,
      },
      numberOfFloors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      space: {
        type: DataTypes.STRING,
        allowNull: false,
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
