'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Cities', [{
       cityName: 'Yakutsk',
       country_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      cityName: 'Saint-Petersburg',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      cityName: 'London',
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      cityName: 'Edinburgh',
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      cityName: 'Astana',
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      cityName: 'Almaty',
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cities', null, {});
     
  }
};
