'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      myService_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MyServices',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      buyer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      seller_id: {
        type: Sequelize.INTEGER,
      },
      sellerKey: {
        type: Sequelize.BOOLEAN,
      },
      buyerKey: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Deals');
  },
};
