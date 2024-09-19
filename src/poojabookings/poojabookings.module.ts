import { Module } from '@nestjs/common';
import { PoojabookingsService } from './poojabookings.service';
import { PoojabookingsController } from './poojabookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poojabooking } from './entities/poojabooking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poojabooking])],
  controllers: [PoojabookingsController],
  providers: [PoojabookingsService],
})
export class PoojabookingsModule { }
