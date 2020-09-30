// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'wallvendas',
      user: 'postgres',
      password: '#abc123#'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  // production: {
  //   client: 'postgresql',
  //   dialect: 'postgres',
  //   connection: process.env.DATABASE_URL,
  //   // connection: {
  //   //   database: process.env.DATABASE_URL,
  //   //   // host: 'ec2-34-236-215-156.compute-1.amazonaws.com',
  //   //   // database: 'd6v2k843oh96ij',
  //   //   // user: 'kzjjcojpbmretv',
  //   //   // password: 'fd924c24b89b706b88ee9af0bbd27c48d70c1c9f517af29c691048ee6fba0a17',
  //   //   // ssl: true,
  //   //   // dialectOptions: {
  //   //   //   "ssl": {
  //   //   //     require: true,
  //   //   //     rejectUnauthorized: true
  //   //   //   }
  //   //   // }
  //   // },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './src/database/migrations'
  //   },
  //   useNullAsDefault: true,
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
