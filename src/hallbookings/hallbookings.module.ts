import { Module } from '@nestjs/common';
import { HallbookingsService } from './hallbookings.service';
import { HallbookingsController } from './hallbookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hallbooking } from './entities/hallbooking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hallbooking])],
  controllers: [HallbookingsController],
  providers: [HallbookingsService],
})
export class HallbookingsModule { }
