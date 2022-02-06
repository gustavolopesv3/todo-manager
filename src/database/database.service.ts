import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      console.log('HELLo', process.env.PORT);
      return {
        // ssl: true,
        type: 'postgres' as const,
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        host: config.get(Configuration.HOST),
        port: Number(config.get(Configuration.PORT)),
        database: config.get(Configuration.DATABASE),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
