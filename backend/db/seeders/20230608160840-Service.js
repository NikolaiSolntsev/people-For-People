'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          serviceName: 'Taxi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceName: 'Photograph',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceName: 'Developer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
