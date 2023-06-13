'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message_chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, MyService}) {
      this.belongsTo(User, {foreignKey: 'bayer_id'})
      this.belongsTo(User, {foreignKey: 'saler_id'})
      this.belongsTo(MyService, {foreignKey: 'myCervice_id'})
    }
  }
  Message_chat.init({
    bayer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    saler_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    myService_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'MyServices',
        key: 'id'
      }
    },
    by: {
      allowNull: false,
      type: DataTypes.INTEGER,

    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Message_chat',
  });
  return Message_chat;
};