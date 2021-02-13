'use strict';

const { hashSync } = require('bcryptjs');
// Importando o arquivo users.json para teste
const usersJSON = require('./users.json');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'users',
    usersJSON.users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: hashSync(user.password),
      created_at: new Date(),
      updated_at: new Date(),
    })),
  ),
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
