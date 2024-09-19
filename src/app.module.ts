import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../typeOrmCon.config';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { PoojalistModule } from './poojalist/poojalist.module';
import { PoojabookingsModule } from './poojabookings/poojabookings.module';
import { TemplefunctionsModule } from './templefunctions/templefunctions.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoombookingsModule } from './roombookings/roombookings.module';
import { HallbookingsModule } from './hallbookings/hallbookings.module';
import { DonationModule } from './donation/donation.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule, AuthModule, PoojalistModule, PoojabookingsModule, TemplefunctionsModule, RoomsModule, RoombookingsModule, HallbookingsModule, DonationModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  },],
})
export class AppModule { }
