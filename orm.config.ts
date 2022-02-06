export default {
  type: 'postgres',
  username: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  entities: ['src/**/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
