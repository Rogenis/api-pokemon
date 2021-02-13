const { Router } = require('express');
const pokemonsController = require('../../controllers/pokemons');
const pokemonsRouter = Router();

pokemonsRouter.get('/', pokemonsController.index);

module.exports = pokemonsRouter;
