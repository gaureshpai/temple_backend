import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Response } from 'express';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) { }

  @Post('create')
  async create(@Body() createRoomDto: CreateRoomDto, @Res() res: Response) {
    const result = await this.roomsService.create(createRoomDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.roomsService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updateRoomDto: UpdateRoomDto, @Res() res: Response) {
    const result = await this.roomsService.update(id, updateRoomDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.roomsService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.roomsService.findOne(id);
    return res.status(result.status).json(result)
  }
}
