const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReservationServices.init(
    {
      // define the columns of the ReservationServices table here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      servicePrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      }
      // add more columns as necessary
    },
    {
      sequelize,
      modelName: 'reservationservices', // name of the table in the database
      timestamps: false,
    }
  );
  return ReservationServices;
};
