import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { PoojabookingsService } from './poojabookings.service';
import { CreatePoojabookingDto } from './dto/create-poojabooking.dto';
import { UpdatePoojabookingDto } from './dto/update-poojabooking.dto';
import { Response } from 'express';

@Controller('poojabookings')
export class PoojabookingsController {
  constructor(private readonly poojabookingsService: PoojabookingsService) { }

  @Post('create')
  async create(@Body() createPoojabookingDto: CreatePoojabookingDto, @Res() res: Response) {
    const result = await this.poojabookingsService.create(createPoojabookingDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.poojabookingsService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updatePoojabookingDto: UpdatePoojabookingDto, @Res() res: Response) {
    const result = await this.poojabookingsService.update(id, updatePoojabookingDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.poojabookingsService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.poojabookingsService.findOne(id);
    return res.status(result.status).json(result)
  }
}
