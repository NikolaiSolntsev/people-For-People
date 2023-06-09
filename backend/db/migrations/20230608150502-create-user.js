'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      language: {
        type: Sequelize.TEXT,
      },
      phone: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
