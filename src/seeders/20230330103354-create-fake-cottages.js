'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'cottages',
      [
        {
          name: 'The one to live in',
          capacity: '2 Adults 2 Child',
          price: 150000,
          numberOfFloors: 2,
          space: '50sq/m',
        },
        {
          name: 'The Celebration',
          capacity: '4 Adults',
          price: 200000,
          numberOfFloors: 3,
          space: '70sq/m',
        },
        {
          name: 'For Couples',
          capacity: '2 Adults',
          price: 100000,
          numberOfFloors: 1,
          space: '30sq/m',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cottages', null, {});
  },
};
