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
        //ssl: true,
        type: 'postgres' as const,
        username: 'tfllpmidwfidsg',
        password:
          'bec2d9b9733561d8fcab2491f817f56a7eb719a08b187f46a8fe648baf7356a6',
        host: 'ec2-52-45-83-163.compute-1.amazonaws.com',
        port: 5432,
        database: 'dedgqrgpqfkeul',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
