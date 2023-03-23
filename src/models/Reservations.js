const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    static associate(models) {
    }
  }
  Reservations.init(
    {
       // define the columns of the reservations table here
       id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DOUBLE,
        defaultValue: 100000,
        allowNull: false,
      },
      description: {
        type: DataTypes.JSON,
      },
      service: {
        type: DataTypes.JSON,
      },
      cottageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'reservations',
      timestamps: false,
    }
  );
  return Reservations;
};
