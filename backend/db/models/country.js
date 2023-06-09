'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate({ City }) {
      this.hasMany(City, { foreignKey: 'country_id' });
    }
  }
  Country.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      сountryName: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Country',
    }
  );
  return Country;
};
