import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './api/tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
