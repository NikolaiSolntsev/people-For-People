'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate({ Country, MyService }) {
      this.hasMany(MyService, { foreignKey: 'city_id' });
      this.belongsTo(Country, { foreignKey: 'country_id' });
    }
  }
  City.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cityName: {
        type: DataTypes.TEXT,
      },
      country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'City',
    }
  );
  return City;
};
