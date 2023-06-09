'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyService extends Model {
    static associate({ User, Service, Comment, PhotoMyService, Deal }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Service, { foreignKey: 'service_id' });
      this.belongsTo(City, { foreignKey: 'city_id' });
      this.hasMany(Comment, { foreignKey: 'myService_id' });
      this.hasMany(PhotoMyService, { foreignKey: 'myService_id' });
      this.hasMany(Deal, { foreignKey: 'myService_id' });
    }
  }
  MyService.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      service_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Services',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      price: {
        type: DataTypes.INTEGER,
      },
      city_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'MyService',
    }
  );
  return MyService;
};
