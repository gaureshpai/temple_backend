import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { HallbookingsService } from './hallbookings.service';
import { CreateHallbookingDto } from './dto/create-hallbooking.dto';
import { UpdateHallbookingDto } from './dto/update-hallbooking.dto';
import { Response } from 'express';

@Controller('hallbookings')
export class HallbookingsController {
  constructor(private readonly hallbookingsService: HallbookingsService) { }

  @Post('create')
  async create(@Body() createHallbookingDto: CreateHallbookingDto, @Res() res: Response) {
    const result = await this.hallbookingsService.create(createHallbookingDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.hallbookingsService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updateHallbookingDto: UpdateHallbookingDto, @Res() res: Response) {
    const result = await this.hallbookingsService.update(id, updateHallbookingDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.hallbookingsService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.hallbookingsService.findOne(id);
    return res.status(result.status).json(result)
  }
}
