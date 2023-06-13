'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, MyService}) {
      this.belongsTo(User, {foreignKey: 'by'});
      this.belongsTo(MyService, {foreignKey: 'myService_id'});
    }
  }
  MessChat.init({
    bayer_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    saler_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    myService_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'MyServices',
        key: 'id',
      },
    },
    by: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'MessChat',
  });
  return MessChat;
};