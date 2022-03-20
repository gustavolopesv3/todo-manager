import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    async useFactory() {
      return {
        //ssl: { rejectUnauthorized: false },
        type: 'postgres' as const,
        username: process.env.DB_USERNAME,
        password: String(process.env.DB_PASSWORD),
        host: process.env.HOST,
        port: 5432,
        database: process.env.DATABASE,
        logging: ['query', 'error'],
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
