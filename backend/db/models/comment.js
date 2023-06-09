'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, MyService }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(MyService, { foreignKey: 'myService_id' });
    }
  }
  Comment.init(
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
      content: {
        type: DataTypes.TEXT,
      },
      buyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
