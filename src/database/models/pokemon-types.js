'use strict';

module.exports = (sequelize, DataTypes) => {
  const pokemonTypes = sequelize.define('pokemon_types', {
    pokemonId: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    underscored: true,
  });
  pokemonTypes.associate = (models) => {
    // without associations
  };
  return pokemonTypes;
};
