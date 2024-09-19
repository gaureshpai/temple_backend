import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Response } from 'express';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) { }


  @Post('create')
  async create(@Body() createDonationDto: CreateDonationDto, @Res() res: Response) {
    const result = await this.donationService.create(createDonationDto);
    return res.status(result.status).json(result)
  }


  @Get('findall')
  async findAllaccounts(@Res() res: Response) {
    const result = await this.donationService.findAll();
    return res.status(result.status).json(result)
  }

  @Patch('update')
  async update(@Query('id') id: number, @Body() updateDonationDto: UpdateDonationDto, @Res() res: Response) {
    const result = await this.donationService.update(id, updateDonationDto);
    return res.status(result.status).json(result)
  }

  @Delete('delete')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const result = await this.donationService.remove(id);
    return res.status(result.status).json(result)
  }

  @Get('findOne')
  async findOne(@Query('id') id: number, @Res() res: Response) {
    const result = await this.donationService.findOne(id);
    return res.status(result.status).json(result)
  }
}
