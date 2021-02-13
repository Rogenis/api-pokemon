require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'app',
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    define: {
      timestamps: true, // create_at e update_at
      underscored: true, // Define as tabelas com Formato Snake Case
    },
    logging: true,
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'app',
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    logging: false,
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'app',
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    logging: false,
  },
};
