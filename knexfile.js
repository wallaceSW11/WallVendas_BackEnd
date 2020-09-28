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
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-34-236-215-156.compute-1.amazonaws.com',
      database: 'd6v2k843oh96ij',
      user: 'kzjjcojpbmretv',
      password: 'fd924c24b89b706b88ee9af0bbd27c48d70c1c9f517af29c691048ee6fba0a17'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

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
