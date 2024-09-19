import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { PoojalistService } from './poojalist.service';
import { CreatePoojalistDto } from './dto/create-poojalist.dto';
import { UpdatePoojalistDto } from './dto/update-poojalist.dto';
import { Response } from 'express';

@Controller('poojalist')
export class PoojalistController {
  constructor(private readonly poojalistService: PoojalistService) { }

  @Post('create')
  async create(@Body() createPoojalistDto: CreatePoojalistDto, @Res() res: Response) {
    const result = await this.poojalistService.create(createPoojalistDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.poojalistService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updatePoojalistDto: UpdatePoojalistDto, @Res() res: Response) {
    const result = await this.poojalistService.update(id, updatePoojalistDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.poojalistService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.poojalistService.findOne(id);
    return res.status(result.status).json(result)
  }
}
