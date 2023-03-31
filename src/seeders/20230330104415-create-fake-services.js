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
      'reservationservices',
      [
        {
          date: '2023-05-06',
          status: true,
          type: 'caxiknerov senyak',
          servicePrice: 20000,
        },
        {
          date: '2023-06-06',
          status: false,
          type: 'breakfast',
          servicePrice: 10000,
        },
        {
          date: '2023-07-06',
          status: true,
          type: 'music',
          servicePrice: 30000,
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
    await queryInterface.bulkDelete('reservationservices', null, {});
  },
};
