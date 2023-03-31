'use strict';
const bcrypt = require('bcryptjs');

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
      'users',
      [
        {
          id: 'def2afdd-1688-406e-9aea-cbeadefd9108',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          password: await bcrypt.hash('mySimplePassword', 8),
          type: 'admin',
        },
        {
          id: 'c115826e-3489-45d3-940f-8a9fd70b3460',
          firstName: 'Wane',
          lastName: 'Doe',
          email: 'wanedoe@gmail.com',
          password: await bcrypt.hash('myVerySimplePassword', 8),
          type: 'standard',
        },
        {
          id: 'c7c90930-b8bb-4769-b7a8-58a03e99c3bf',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@gmail.com',
          password: await bcrypt.hash('myNotSimplePassword', 8),
          type: 'superadmin',
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
    await queryInterface.bulkDelete('users', null, {});
  },
};
