import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { RoombookingsService } from './roombookings.service';
import { CreateRoombookingDto } from './dto/create-roombooking.dto';
import { UpdateRoombookingDto } from './dto/update-roombooking.dto';
import { Response } from 'express';

@Controller('roombookings')
export class RoombookingsController {
  constructor(private readonly roombookingsService: RoombookingsService) { }

  @Post('create')
  async create(@Body() createRoombookingDto: CreateRoombookingDto, @Res() res: Response) {
    const result = await this.roombookingsService.create(createRoombookingDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.roombookingsService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updateRoombookingDto: UpdateRoombookingDto, @Res() res: Response) {
    const result = await this.roombookingsService.update(id, updateRoombookingDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.roombookingsService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.roombookingsService.findOne(id);
    return res.status(result.status).json(result)
  }
}
