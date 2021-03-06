const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const teamsController = require('../../controllers/teams');
const teamsRouter = Router();

teamsRouter.post('/', celebrate({
    body: {
      name: Joi.string().min(5).required(),
      trainerId: Joi.number().integer().required(),
      // LImite de 6 pokemons
      pokemons: Joi.array().max(6),
    },
  }),
  teamsController.create,
);

teamsRouter.get('/user/:trainerId',teamsController.show);
teamsRouter.get('/',teamsController.show);

module.exports = teamsRouter;
