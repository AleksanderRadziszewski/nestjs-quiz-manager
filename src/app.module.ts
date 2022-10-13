import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    QuizModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
