import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    async useFactory() {
      console.log('HELLo', process.env.PORT);
      return {
        //ssl: { rejectUnauthorized: false },
        type: 'postgres' as const,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: 5432,
        database: process.env.DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
