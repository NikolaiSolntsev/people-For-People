'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'MyServices',
      [
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MyServices', null, {});
  },
};
