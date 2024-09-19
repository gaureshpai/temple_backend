import { Module } from '@nestjs/common';
import { TemplefunctionsService } from './templefunctions.service';
import { TemplefunctionsController } from './templefunctions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Templefunction } from './entities/templefunction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Templefunction])],
  controllers: [TemplefunctionsController],
  providers: [TemplefunctionsService],
})
export class TemplefunctionsModule { }
