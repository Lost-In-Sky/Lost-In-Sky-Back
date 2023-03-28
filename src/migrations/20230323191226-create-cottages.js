'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('cottages', {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('cottages');
  }
};