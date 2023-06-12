'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ MyService, Deal, Comment, MessChat }) {
      this.hasMany(MyService, { foreignKey: 'seller_id' });
      this.hasMany(Deal, { foreignKey: 'buyer_id' });
      this.hasMany(Comment, { foreignKey: 'buyer_id' });
      this.hasMany(MessChat, {foreignKey: 'by'});
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      language: {
        type: DataTypes.TEXT,
      },
      phone: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
      },
      photo: {
        type: DataTypes.TEXT,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
