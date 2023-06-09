'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoMyService extends Model {
    static associate({ MyService }) {
      this.belongsTo(MyService, { foreignKey: 'myService_id' });
    }
  }
  PhotoMyService.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.TEXT,
      },
      myService_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'MyServices',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'PhotoMyService',
    }
  );
  return PhotoMyService;
};
