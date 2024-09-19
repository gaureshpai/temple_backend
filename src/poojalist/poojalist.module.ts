import { Module } from '@nestjs/common';
import { PoojalistService } from './poojalist.service';
import { PoojalistController } from './poojalist.controller';
import { Poojalist } from './entities/poojalist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Poojalist])],
  controllers: [PoojalistController],
  providers: [PoojalistService],
})
export class PoojalistModule { }
