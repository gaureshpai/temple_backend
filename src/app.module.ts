import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../typeOrmCon.config';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  },],
})
export class AppModule { }
