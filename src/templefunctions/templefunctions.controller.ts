import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { TemplefunctionsService } from './templefunctions.service';
import { CreateTemplefunctionDto } from './dto/create-templefunction.dto';
import { UpdateTemplefunctionDto } from './dto/update-templefunction.dto';
import { Response } from 'express';

@Controller('templefunctions')
export class TemplefunctionsController {
  constructor(private readonly templefunctionsService: TemplefunctionsService) { }

  @Post('create')
  async create(@Body() createTemplefunctionDto: CreateTemplefunctionDto, @Res() res: Response) {
    const result = await this.templefunctionsService.create(createTemplefunctionDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.templefunctionsService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updateTemplefunctionDto: UpdateTemplefunctionDto, @Res() res: Response) {
    const result = await this.templefunctionsService.update(id, updateTemplefunctionDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.templefunctionsService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.templefunctionsService.findOne(id);
    return res.status(result.status).json(result)
  }
}
