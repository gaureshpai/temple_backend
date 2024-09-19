import { Module } from '@nestjs/common';
import { RoombookingsService } from './roombookings.service';
import { RoombookingsController } from './roombookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roombooking } from './entities/roombooking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roombooking])],
  controllers: [RoombookingsController],
  providers: [RoombookingsService],
})
export class RoombookingsModule { }
