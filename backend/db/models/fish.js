'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Them}) {
     this.belongsTo(Them, {foreignKey: 'them_id'});
    }
  }
  Fish.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    info: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    them_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Thems',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Fish',
  });
  return Fish;
};