'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ MyService }) {
      this.hasMany(MyService, { foreignKey: 'service_id' });
    }
  }
  Service.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      serviceName: {
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Service',
    }
  );
  return Service;
};
