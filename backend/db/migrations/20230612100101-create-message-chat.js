'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Message_chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bayer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      saler_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      myService_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      by: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Message_chats');
  }
};