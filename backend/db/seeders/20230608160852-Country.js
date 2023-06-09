'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Countries',
      [
        {
          сountryName: 'Russia',
          createdAt: new Date(),
          updatedAt: new Date(),
        
        },
        {
          сountryName: 'England',
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },{
          сountryName: 'Kazakstan',
          createdAt: new Date(),
          updatedAt: new Date(),
        
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
