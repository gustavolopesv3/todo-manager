module.exports = {
  type: 'postgres',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: process.env.DATABASE,
  logging: ['query', 'error'],
  ssl: { rejectUnauthorized: false },
  entities: ['dist/api/**/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'dist/database/migrations',
  },
};
