'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deal extends Model {
    static associate({ User, MyService }) {
      this.belongsTo(User, { foreignKey: 'buyer_id' });
      this.belongsTo(MyService, { foreignKey: 'myService_id' });
    }
  }
  Deal.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      myService_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'MyServices',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      buyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      sellerKey: {
        type: DataTypes.BOOLEAN,
      },
      buyerKey: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Deal',
    }
  );
  return Deal;
};
